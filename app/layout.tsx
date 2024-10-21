import { ReactNode } from "react";
import type { Metadata } from "next";


import "./globals.css";



export const metadata: Metadata = {
  title: "YOOM",
  description: "Video calling App",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      
        <body className={``}>
       
          {children}
        </body>
 
    </html>
  );
}