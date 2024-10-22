import { ReactNode } from "react";
import type { Metadata } from "next";


import "./globals.css";



export const metadata: Metadata = {
  title: "Node",
  description: "Software Agency",
  icons: {
    icon: "/favicon.png",
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