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
  metadataBase: new URL("https://urbanhomeheroes.ca"),
  title: {
    default: "Urban Home Heroes | Local Contractor & Home Repair GTA",
    template: "%s | Urban Home Heroes"
  },
  description:
    "Urban Home Heroes is a local family business and insured contractor delivering reliable home services, transparent pricing, and quality workmanship across Vaughan, Woodbridge, and the GTA.",
  keywords: [
    "Urban Home Heroes",
    "Local Contractor Vaughan",
    "Home Repair Woodbridge",
    "Snow Removal Vaughan",
    "Handyman Services GTA",
    "Licensed Contractor",
    "Emergency Home Repairs"
  ],
  authors: [{ name: "Urban Home Heroes" }],
  creator: "Urban Home Heroes",
  publisher: "Urban Home Heroes",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Urban Home Heroes | Local Contractor & Home Repair",
    description: "Professional home repairs and maintenance services in Vaughan, Woodbridge, and the GTA.",
    url: "https://urbanhomeheroes.ca",
    siteName: "Urban Home Heroes",
    images: [
      {
        url: "/urban-home-hero-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Urban Home Heroes Logo",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Urban Home Heroes | Local Contractor & Home Repair",
    description: "Professional home repairs and maintenance services in Vaughan, Woodbridge, and the GTA.",
    images: ["/urban-home-hero-logo.jpg"],
  },
  icons: {
    icon: "/urban-home-hero-logo.jpg",
    apple: "/urban-home-hero-logo.jpg",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${manrope.variable}`}>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Urban Home Heroes",
              "image": "https://urbanhomeheroes.ca/urban-home-hero-logo.jpg",
              "@id": "https://urbanhomeheroes.ca",
              "url": "https://urbanhomeheroes.ca",
              "telephone": "+14168229741",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "",
                "addressLocality": "Vaughan",
                "addressRegion": "ON",
                "postalCode": "",
                "addressCountry": "CA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 43.8372,
                "longitude": -79.5083
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": [
                "https://instagram.com/urbanhomeheroes"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
