import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Crown Cryptic",
  description: "Your Daily Dose of Cryptic",
  keywords: ['Cryptic Crossword','Cryptic Clue','Cryptic','Crossword','Daily Puzzle'],
  openGraph: {
    locale: 'en_US',
    type: 'website',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
