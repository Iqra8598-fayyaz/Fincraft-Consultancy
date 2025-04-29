import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Tax Consulting',
  description: 'Professional Tax Consulting Services',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <nav className="bg-white shadow mb-8">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-blue-700">Tax Consulting</Link>
            <div className="space-x-6">
              <Link href="/about" className="hover:text-blue-700">About</Link>
              <Link href="/services" className="hover:text-blue-700">Services</Link>
              <Link href="/templates" className="hover:text-blue-700">Templates</Link>
              <Link href="/blog" className="hover:text-blue-700">Blog</Link>
              <Link href="/contact" className="hover:text-blue-700">Contact</Link>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
