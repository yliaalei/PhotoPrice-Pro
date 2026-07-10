import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PhotoPrice — Калькулятор стоимости фотосессии",
  description:
    "Профессиональный калькулятор стоимости фотосессии для фотографов.",

  applicationName: "PhotoPrice",

  authors: [
    {
      name: "Юлия Алейникова"
    }
  ],

  keywords: [
    "фотограф",
    "стоимость фотосессии",
    "калькулятор",
    "ценообразование",
    "photo",
    "price"
  ],

  manifest: "/manifest.json",

  icons: {
    icon: "/favicon.ico",
    apple: "/icon-192.png"
  }
};

export const viewport: Viewport = {
  themeColor: "#F7F5F2",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>

        <main className="min-h-screen bg-background text-primary">

          {children}

        </main>

      </body>
    </html>
  );
}
