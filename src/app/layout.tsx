import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Avinash Jain",
  description: "Avinash Jain's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="node_modules/react-github-contribution-calendar/default.css"
          type="text/css"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
