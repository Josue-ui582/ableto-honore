import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['votre@email.com'], // Remplacez par votre email
      subject: `Nouveau message de contact: ${subject}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 })
  }
}