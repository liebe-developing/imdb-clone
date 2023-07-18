import { Header, Navbar, Providers, SearchBox } from "@/components";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone",
  description: "IMDB clone website to showcase movies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar />
          {/* <SearchBox /> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
