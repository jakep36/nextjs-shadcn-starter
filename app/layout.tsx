import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <h1 className="text-3xl font-bold underline">hello world</h1>
        <Button>Click Me</Button>
      </body>
    </html>
  );
}
