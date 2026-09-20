import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow",
  weight: ["600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "School of Design, IIT Jodhpur — Design & Innovation Challenge (#BNB2026)",
  description:
    "Official Website for the multidisciplinary designathon at School of Design, IIT Jodhpur. Real problems. Unexpected thinking. 27 SEP – 29 DEC | IIT JODHPUR. #BNB2026",
  keywords: [
    "IIT Jodhpur",
    "School of Design",
    "SOD",
    "Design Challenge",
    "BNB2026",
    "Designathon",
    "IITJ",
  ],
  openGraph: {
    title: "School of Design, IIT Jodhpur — Design & Innovation Challenge (#BNB2026)",
    description:
      "Official Website for the multidisciplinary designathon at School of Design, IIT Jodhpur. Real problems. Unexpected thinking.",
    siteName: "School of Design, IIT Jodhpur",
    locale: "en_US",
    type: "website",
  },
};

// Applies the saved theme before paint to avoid a flash of the wrong theme.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&d)){document.documentElement.classList.add('dark')}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${barlowCondensed.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
