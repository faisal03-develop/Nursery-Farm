import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/store/cart";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Islam Nursery Farm — Fruit Saplings & Decorative Plants",
  description:
    "Three generations of nursery craft. Discover hand-raised fruit saplings — mango, lemon, guava, pomegranate — and decorative plants for every room. Delivered across the country.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans bg-[#f8f7f4] text-[#1c2720]">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
