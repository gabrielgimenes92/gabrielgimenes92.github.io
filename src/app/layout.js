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
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

// className={inter.className}
