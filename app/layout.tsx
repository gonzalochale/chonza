import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  authors: [{ name: siteConfig.author, url: siteConfig.links.twitter }],
  creator: siteConfig.author,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    images: "/opengraph-image.png",
  },
  icons: {
    icon: "/favicon.ico",
  },
  keywords: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-[48px]">
      <head>
        <script
          defer
          data-domain="chonza.gonzalochale.dev"
          src="https://plausible.gonzalochale.dev/js/script.outbound-links.js"
        ></script>
      </head>
      <body
        className={cn(
          "min-h-dvh bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-dvh flex-col bg-background">
            <Header />
            <main className="flex flex-1 justify-center items-center">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
