import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import { headers } from "next/headers";
import { DemoDock } from "./components/shared/DemoDock";
import { brand } from "./config/brand";
import "./globals.css";

const display = DM_Serif_Display({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const baseUrl = new URL(`${host.includes("localhost") ? "http" : "https"}://${host}`);
  return {
    metadataBase: baseUrl,
    title: `${brand.name} — ${brand.tagline}`,
    description: "A warm, practical restaurant employee learning platform demo.",
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: { title: `${brand.name} — ${brand.tagline}`, description: "Restaurant training before the first practical shift.", images: [{ url: "/og.png", width: 1792, height: 929, alt: "baysics — Learn before the rush." }] },
    twitter: { card: "summary_large_image", title: `${brand.name} — ${brand.tagline}`, description: "Restaurant training before the first practical shift.", images: ["/og.png"] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>
        {children}
        <DemoDock />
      </body>
    </html>
  );
}
