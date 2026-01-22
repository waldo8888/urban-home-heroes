import "./globals.css";
import { Manrope, Sora } from "next/font/google";
import ThemeRegistry from "./ThemeRegistry";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope"
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sora"
});

export const metadata = {
  title: "Urban Home Heroes | Local Contractor & Home Repair",
  description:
    "Urban Home Heroes is a local family business and insured contractor delivering reliable home services, transparent pricing, and quality workmanship across Vaughan, Woodbridge, Kleinburg, North York, Etobicoke, Brampton, Mississauga, and the GTA.",
  keywords: [
    "Urban Home Heroes contractor",
    "Urban Home Hero contractor",
    "Urban Home Hero Vaughan",
    "Urban Home Hero snow removal",
    "local contractor",
    "licensed contractor",
    "insured contractor",
    "contractor near me",
    "same day contractor",
    "emergency contractor"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${manrope.variable}`}>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
