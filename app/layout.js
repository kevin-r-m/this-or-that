import "./(styles)/base.scss";
import { Inter } from "@next/font/google";
import Header from "./(components)/Header";
import Footer from "./(components)/Footer";

const inter = Inter({
  weight: ["500", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={inter.className}>
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
