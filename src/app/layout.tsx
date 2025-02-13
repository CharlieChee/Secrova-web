import './globals.css';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <Navbar />
        <Header />
        <main>{children}</main>
        <Footer /> {/* Add Footer here */}
        </body>
        </html>
    );
}
