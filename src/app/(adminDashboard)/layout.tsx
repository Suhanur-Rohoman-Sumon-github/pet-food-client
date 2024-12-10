import type { Metadata } from "next";
import { Providers } from "../providers";
import "../../styels/global.css";
import { AppSidebar } from "@/components/ui/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

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
      <body className="antialiased">
        <Providers>
          {/* Main container for the layout */}
          <div className="">
            {/* Sidebar */}

            <SidebarProvider>
              <AppSidebar />
              <SidebarInset>
                <main>{children}</main>
              </SidebarInset>
            </SidebarProvider>
          </div>
        </Providers>
      </body>
    </html>
  );
}
