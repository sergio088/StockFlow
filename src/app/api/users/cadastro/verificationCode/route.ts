import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { codeEmail, email } = body;

  try {
    const verificationCode = await prisma.verificationCode.findFirst({
      where: {
        code: codeEmail,
        email: email,
      },
    });
    if (verificationCode) {
      return NextResponse.json({ message: "Codigo correto" }, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "Codigo incorreto" },
        { status: 400 },
      );
    }
  } catch {
    return NextResponse.json({ message: "Erro no server" }, { status: 500 });
  }
}
