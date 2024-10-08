import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_sections/header";
import Footer from "./_sections/footer";
import { Toaster } from "sonner";
import { ComparisonProvider } from "./hooks/comparison-context";
import { CartProvider } from "./hooks/cart-context";
import { LikeProvider } from "./hooks/like-context";

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
    <ComparisonProvider>
      <CartProvider>
        <LikeProvider>
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
        </LikeProvider>
      </CartProvider>
    </ComparisonProvider>
  );
}
