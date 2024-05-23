import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Abhik Ghosh</title>
      </head>
      <body className="h-screen w-full bg-gradient-to-br from-black to-[#130149]">{children}</body>
    </html>
  );
}
