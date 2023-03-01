import Head from "next/head";
import { ReactNode } from "react";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="cabin bg-gray-200">
      <Head>
        <title>CV Montage</title>
        <meta name="description" content="CV Montage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="min-h-screen py-10 flex-1 flex flex-col justify-center items-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}
