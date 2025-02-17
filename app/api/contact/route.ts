export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Body reçu:", body);
    const { name, email, subject, message } = body;

    const data = await sendEmail(name, email, subject, message);

    console.log("Réponse de Resend:", data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Erreur Resend:", error);
    const errMessage = error instanceof Error ? error.message : "Erreur lors de l'envoi du message";
    return NextResponse.json({ error: errMessage }, { status: 500 });
  }
}