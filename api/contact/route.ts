import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { firstName, lastName, email, phone, service, message } = await req.json();

  if (!firstName || !lastName || !email || !phone || !message) {
    return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Formulaire EP Services" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: "Nouveau message depuis le site EP Services",
      text: `
Nouvelle demande de contact :

Nom : ${firstName} ${lastName}
Email : ${email}
Téléphone : ${phone}
Service : ${service}
Message :
${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Erreur nodemailer :", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
