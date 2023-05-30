import { Html, Head, Main, NextScript } from 'next/document'
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white">
        <Header />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}
