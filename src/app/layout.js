// import { Inter, Poppins, Ubuntu } from 'next/font/google';
import './globals.scss';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Head from 'next/head';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'Gabriel Gimenes - Software Developer',
//   description: 'Check my portfolio',
//   author: 'Gabriel Gimenes',
//   ogImage: ''
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="title"
          property="og:title"
          content="Gabriel Gimenes - Software Developer"
        />
        <meta
          name="description"
          property="og:description"
          content="Check my portfolio"
        />
        <meta name="author" content="Gabriel Gimenes" />

        <meta
          name="google-site-verification"
          content="UhgQxPuIiIjSsM_0wBqcooGdF5-nGJ1G2J8lelTTqMI"
        />
      </Head>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

// className={inter.className}
