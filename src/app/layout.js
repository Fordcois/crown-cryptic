import Header from "@/components/header";
import "./globals.css";

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
      <body>
      <Header/>
        {children}
        </body>
    </html>
  );

}
