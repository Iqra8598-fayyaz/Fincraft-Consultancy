import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fincraft Consulting - Tax & Financial Services",
  description: "Professional tax consulting and financial services for individuals and businesses.",
};

// Mock email sending function - replace with actual email service
const sendEmail = async (to: string, name: string, type: string) => {
  // Simulate email sending delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log(`Email sent to ${to}:`, {
    subject: type === 'login' ? 'Welcome Back!' : 'Welcome to Fincraft Consulting',
    body: type === 'login' 
      ? `Welcome back, ${name}! We're glad to see you again.`
      : `Welcome to Fincraft Consulting, ${name}! Thank you for joining us.`
  });
  
  return true;
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Chatbot />
        <Footer />
      </body>
    </html>
  );
}
