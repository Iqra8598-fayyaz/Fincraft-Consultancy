import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'iqrajanjua1998@gmail.com',
    // Use an app password for Gmail
    // Generate this from Google Account settings > Security > 2-Step Verification > App passwords
    pass: 'hhil gvrd cowv vekz',
  },
});

const sendEmail = async (to: string, name: string, type: string) => {
  const fromEmail = 'iqrajanjua1998@gmail.com';
  const companyName = 'Fincraft Consulting';
  
  const emailContent = {
    from: `${companyName} <${fromEmail}>`,
    to,
    subject: type === 'login' ? 'Welcome Back to Fincraft Consulting!' : 'Welcome to Fincraft Consulting!',
    text: type === 'login' 
      ? `Dear ${name},\n\nWelcome back to Fincraft Consulting! We're delighted to see you again.\n\nThank you for choosing us as your trusted tax consulting partner.\n\nBest regards,\nThe Fincraft Consulting Team`
      : `Dear ${name},\n\nWelcome to Fincraft Consulting! We're excited to have you join our community of clients.\n\nAs a new member, you now have access to our comprehensive tax consulting services. Our team is ready to help you optimize your tax strategy and achieve your financial goals.\n\nIf you have any questions, feel free to reach out to us.\n\nBest regards,\nThe Fincraft Consulting Team`,
    html: type === 'login'
      ? `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">Welcome Back to Fincraft Consulting!</h2>
          <p>Dear ${name},</p>
          <p>Welcome back to Fincraft Consulting! We're delighted to see you again.</p>
          <p>Thank you for choosing us as your trusted tax consulting partner.</p>
          <p>Best regards,<br>The Fincraft Consulting Team</p>
        </div>
      `
      : `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">Welcome to Fincraft Consulting!</h2>
          <p>Dear ${name},</p>
          <p>Welcome to Fincraft Consulting! We're excited to have you join our community of clients.</p>
          <p>As a new member, you now have access to our comprehensive tax consulting services. Our team is ready to help you optimize your tax strategy and achieve your financial goals.</p>
          <p>If you have any questions, feel free to reach out to us.</p>
          <p>Best regards,<br>The Fincraft Consulting Team</p>
        </div>
      `
  };

  try {
    await transporter.sendMail(emailContent);
    console.log('Email sent successfully to:', to);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export async function POST(request: Request) {
  try {
    const { email, name, type } = await request.json();

    if (!email || !name || !type) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    await sendEmail(email, name, type);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 