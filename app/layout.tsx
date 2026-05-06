import "./globals.css";
import { Montserrat, Inter } from "next/font/google";
import type { Metadata } from "next";




const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Alamo Rise | Construction & Remodeling in San Antonio",
  description:
    "Building Value, Rising Standards in San Antonio. Experts in Full-Service Remodeling, Roofing, Flooring & Home Repairs.",
  metadataBase: new URL("https://www.alamorise.com"), // cámbialo cuando tengas dominio real
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${montserrat.variable} ${inter.variable}`}
    >
      <body className="font-body bg-softgray text-primary antialiased">
        {children}

      </body>
    </html>
  );
  
}