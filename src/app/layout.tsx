"use client";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { AuthProviders } from "./providers/SessionProviders";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const hideHeader = ["/"];
  const noHeader = hideHeader.includes(pathname);

  return (
    <html lang="en">
      <body className="bg-white text-black min-h-screen flex flex-col">
        <AuthProviders>
          {noHeader && <Header />}
          <main className="flex-1">{children}</main>
          {noHeader && <Footer />}
        </AuthProviders>
      </body>
    </html>
  );
}
