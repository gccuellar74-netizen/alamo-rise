type RateLimitEntry = {
  count: number;
  resetAt: number;
};

type RateLimitOptions = {
  limit?: number;
  windowMs?: number;
};

export type RateLimitResult = {
  success: boolean;
  limit: number;
  remaining: number;
  resetAt: number;
  retryAfterSeconds: number;
};

const DEFAULT_LIMIT = 5;
const DEFAULT_WINDOW_MS = 10 * 60 * 1000;

const globalForRateLimit = globalThis as typeof globalThis & {
  __alamoRiseRateLimitStore?: Map<
    string,
    RateLimitEntry
  >;
};

const store =
  globalForRateLimit.__alamoRiseRateLimitStore ??
  new Map<string, RateLimitEntry>();

if (
  process.env.NODE_ENV !== "production"
) {
  globalForRateLimit.__alamoRiseRateLimitStore =
    store;
}

function cleanupExpiredEntries(
  now: number,
) {
  if (store.size < 500) {
    return;
  }

  for (const [key, entry] of store) {
    if (entry.resetAt <= now) {
      store.delete(key);
    }
  }
}

export function checkRateLimit(
  key: string,
  options: RateLimitOptions = {},
): RateLimitResult {
  const limit =
    options.limit ?? DEFAULT_LIMIT;

  const windowMs =
    options.windowMs ?? DEFAULT_WINDOW_MS;

  const now = Date.now();

  cleanupExpiredEntries(now);

  const existingEntry = store.get(key);

  if (
    !existingEntry ||
    existingEntry.resetAt <= now
  ) {
    const resetAt = now + windowMs;

    store.set(key, {
      count: 1,
      resetAt,
    });

    return {
      success: true,
      limit,
      remaining: Math.max(
        limit - 1,
        0,
      ),
      resetAt,
      retryAfterSeconds: 0,
    };
  }

  if (existingEntry.count >= limit) {
    const retryAfterSeconds = Math.max(
      Math.ceil(
        (existingEntry.resetAt - now) /
          1000,
      ),
      1,
    );

    return {
      success: false,
      limit,
      remaining: 0,
      resetAt: existingEntry.resetAt,
      retryAfterSeconds,
    };
  }

  existingEntry.count += 1;

  store.set(
    key,
    existingEntry,
  );

  return {
    success: true,
    limit,
    remaining: Math.max(
      limit - existingEntry.count,
      0,
    ),
    resetAt: existingEntry.resetAt,
    retryAfterSeconds: 0,
  };
}

export function isRateLimitEnabled() {
  return (
    process.env.RATE_LIMIT_ENABLED !==
    "false"
  );
}