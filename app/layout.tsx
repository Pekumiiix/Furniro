import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_sections/header";
import Footer from "./_sections/footer";
import { Toaster } from "sonner";
import { AppContextProvider } from "./hooks/app-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Furniro",
  description: "Your ultimate destination for all things furniture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppContextProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <main className="flex flex-col items-center justify-center">
            {children}
          </main>
          <Footer />
          <Toaster />
        </body>
      </html>
    </AppContextProvider>
  );
}
