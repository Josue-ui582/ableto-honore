"use server"

import { Resend } from "resend";

export const sendEmail = async (name: string, email: string, subject: string, message: string) => {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("API Key manquante");
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  return resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: ["honoreableto117@gmail.com"],
    subject: `Nouveau message de contact: ${subject}`,
    html: `<p><strong>Nom:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Sujet:</strong> ${subject}</p><p>${message}</p>`,
  });
};