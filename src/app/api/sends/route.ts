/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { dataBody } from "@/types/types";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
    try {
      // Parsear el cuerpo de la solicitud
      const datosForm: dataBody = await request.json();
      console.log(datosForm);
  
      const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: ["cuentadeprueba0621@gmail.com"],
        subject: 'Nuevo cliente para Bronx',
        html: `<p>${datosForm.name} quiere ponerse en contacto para solicitar un servicio</p>
        <p> Numero:${datosForm.number} </p>
        `,
      });
  
      if (error) {
        return NextResponse.json(error, { status: 400 });
      }
  
      return NextResponse.json(data, { status: 200 });
    } catch (err) {
      console.error('Error al enviar el correo:', err);
      return NextResponse.json({ message: 'Error interno del servidor' }, { status: 500 });
    }
  }