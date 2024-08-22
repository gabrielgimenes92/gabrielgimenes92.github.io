// import { Inter, Poppins, Ubuntu } from 'next/font/google';
import './globals.scss';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

// const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Gabriel Gimenes - Software Developer',
  description: 'Check my portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="UhgQxPuIiIjSsM_0wBqcooGdF5-nGJ1G2J8lelTTqMI"
      />
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

// className={inter.className}
