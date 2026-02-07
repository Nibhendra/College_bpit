import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'BPIT - Bhagwan Parshuram Institute of Technology',
  description: 'Official website of BPIT Delhi - Approved by AICTE, Affiliated to GGSIPU',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
