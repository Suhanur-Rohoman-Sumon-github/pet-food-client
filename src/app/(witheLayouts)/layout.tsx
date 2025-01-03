import type { Metadata } from "next";
import { Providers } from "../providers";
import "../../styels/global.css";
import Navbar from "@/components/navbar/Navbar";
import MiddleNav from "@/components/navbar/MidleNav";
import TopNav from "@/components/navbar/TopNav";
import MainFooter from "@/components/footer/MainFooter";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className=" antialiased">
        <Providers>
          <div className="flex flex-col min-h-screen">
            <TopNav />
            <div className="bg-[#f85606]">
              <MiddleNav />
            </div>

            <main className="container mx-auto max-w-7xl flex-grow  ">
              <Navbar />
              {children}

              <MainFooter />
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
