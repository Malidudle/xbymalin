import { NavbarSimpleColored } from "@/components/NavBarDesktop/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import AuthProvider from "./AuthProvider";

export const metadata: Metadata = {
  title: "Twitter By Malin",
  description: "Twitter By Malin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
            <NavbarSimpleColored />
            <main>{children}</main>
        </body>
      </html>
    </AuthProvider>
  );
}
