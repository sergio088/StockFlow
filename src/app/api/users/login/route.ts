import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, senha } = body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email
      },
    });
   if (!user || !user.senha) {
      return NextResponse.json({ message: "Email ou senha incorretos" }, { status: 400 });
    }

    const senhahash = bcrypt.compare(senha, user.senha)
    if (!senhahash) {
      return NextResponse.json({ message: "Email ou senha incorretos" }, { status: 400 });
    }
    
   return NextResponse.json({ message: "Login realizado" }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Erro no servidor" }, { status: 500 });
  }
}
