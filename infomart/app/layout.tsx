import Navigation from "./components/navigation/navbar";
import Footer from "./components/navigation/footer";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "InformARt",
  description: "Seguimiento de la ley de cupo travesti trans y recursos para la comunidad travesti trans en  en Argentina",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer/>
      </body>
    </html>
  );
}