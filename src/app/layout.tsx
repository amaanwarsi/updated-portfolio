import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://amaanwarsi.thedev.id"),

  title: {
    default: "Amaan Warsi | Software Engineer",
    template: "%s | Amaan Warsi",
  },

  alternates: {
    canonical: "https://amaanwarsi.thedev.id",
  },

  description:
    "Software Engineer building scalable SaaS products, mobile apps, and modern web experiences.",

  keywords: [
    "Amaan Warsi",
    "Full Stack Developer",
    "React Developer",
    "Mobile Developer",
    "Next.js Developer",
    "Software Engineer India",
    "SaaS Developer"
  ],

  authors: [{ name: "Amaan Warsi", url: "https://amaanwarsi.thedev.id" }],

  creator: "Amaan Warsi",

  openGraph: {
    title: "Amaan Warsi | Software Engineer",
    description:
      "Software Engineer building scalable SaaS products and modern web apps.",
    url: "https://amaanwarsi.thedev.id",
    siteName: "Amaan Warsi",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Amaan Warsi | Software Engineer",
    description:
      "Software Engineer building SaaS, mobile apps, and web platforms.",
    creator: "@amaanwarsiii",
    site: "@amaanwarsiii",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export const schema = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://amaanwarsi.thedev.id/#website",
    "url": "https://amaanwarsi.thedev.id/",
    "name": "Amaan Warsi Portfolio",
    "inLanguage": "en",
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://amaanwarsi.thedev.id/#webpage",
    "url": "https://amaanwarsi.thedev.id/",
    "name": "Amaan Warsi - Software Engineer",
    "isPartOf": {
      "@id": "https://amaanwarsi.thedev.id/#website"
    },
    "mainEntity": {
      "@type": "Person",
      "@id": "https://amaanwarsi.thedev.id/#person",
      "name": "Amaan Warsi",
      "url": "https://amaanwarsi.thedev.id/",
      "image": "https://amaanwarsi.thedev.id/assets/images/amaanwarsi.jpg",
      "email": "mailto:its.amaanwarsi@gmail.com",
      "jobTitle": "Software Engineer",
      "description": "Software Engineer building scalable SaaS, mobile apps, and modern web experiences.",
      "sameAs": [
        "https://www.linkedin.com/in/amaanwarsi/",
        "https://github.com/amaanwarsi",
        "https://www.instagram.com/amaanibnsuhail/",
        "https://youtube.com/@amaanwarsiii",
        "https://www.facebook.com/its.amaanwarsi"
      ],
      "knowsAbout": [
        "Full-Stack Development",
        "React",
        "Node.js",
        "Mobile Apps",
        "SaaS",
        "System Design"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Moradabad",
        "addressRegion": "UP",
        "postalCode": "244001",
        "addressCountry": "IN"
      }
    }
  }
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {schema.map((item, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(item),
            }}
          />
        ))}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
