import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/navbar";
import { ChakraProvider, ScaleFade } from '@chakra-ui/react'
import { theme } from "@/app/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Darragh Condron",
  description: "Current TCD CS Student",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider theme={theme}>
          <Header />
          <ScaleFade in={true}>
            {children}
          </ScaleFade>
        </ChakraProvider>
      </body>
    </html>
  );
}
