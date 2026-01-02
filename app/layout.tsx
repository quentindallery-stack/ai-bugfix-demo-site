import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SSD siteweb",
  description: "Demo site for the AI bugfix exercise",
};

function Header() {
  return (
    <header className="header">
      <div className="max-w-4xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 logo rounded-full" />
          <span className="font-bold">SSD siteweb</span>
        </div>
        <nav className="space-x-4 text-sm text-muted">
          <Link href="/" className="hover:underline">Accueil</Link>
          <Link href="/signup" className="hover:underline">Inscription</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer mt-12">
      <div className="max-w-4xl mx-auto p-4 text-sm text-muted text-center">
        © {new Date().getFullYear()} SSD siteweb. Tous droits réservés.
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main className="min-h-[70vh] flex items-center justify-center py-12">
          {children}
        </main>
        <Footer />
        {process.env.NEXT_PUBLIC_ENABLE_MEND === "true" && (
          <>
            <link rel="stylesheet" href={process.env.NEXT_PUBLIC_MEND_CSS || "https://get-mend.ai/assets/snippet/style.css"} />
            <Script
              src={process.env.NEXT_PUBLIC_MEND_SRC || "https://get-mend.ai/assets/snippet/snippet.iife.js"}
              data-key={process.env.NEXT_PUBLIC_MEND_KEY || "a1518981-ef27-4014-aae3-b86acae1a13d"}
              strategy="afterInteractive"
            />
          </>
        )}
      </body>
    </html>
  );
}
