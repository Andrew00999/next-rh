import "./globals.scss";
import { Inter } from "next/font/google";
import { DataContextProvider } from "@/context/DataContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Title",
  description: "Description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DataContextProvider>{children}</DataContextProvider>
      </body>
    </html>
  );
}
