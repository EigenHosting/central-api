import { Resend } from "resend";
import { addMinutes } from "date-fns";

const resend = new Resend(process.env.RESEND_API_KEY);

export const generateOTP = (length = 6): string => {
  const digits = "0123456789";
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }
  return otp;
};

export const generateOTPExpiry = (minutes = 15): Date => {
  return addMinutes(new Date(), minutes);
};

export const verifyOTP = (userOtp: string, inputOtp: string): boolean => {
  return userOtp === inputOtp;
};

const baseMail = process.env.RESEND_NOREPLY || "mail@no-reply-mail.sliden.pro";
// const baseMail = "mail@no-reply.sliden.pro";
export const sendOTPMail = async (email: string, otp: string) => {
  console.log(`${email}, ${otp}`);
  resend.emails.send({
    from: baseMail,
    to: email,
    subject: "Your EigenHosting OTP",
    text: `Your OTP is: ${otp}\nIt will expire in 15 minutes.`,
    html: `<p>Your OTP is: <strong>${otp}</strong></p><p>It will expire in 15 minutes.</p>`,
  });
};