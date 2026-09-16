import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, senha } = body;
  const senhahash = await bcrypt.hash(senha, 10);

  try {
    await prisma.user.create({
      data: {
        name,
        email,
        senha: senhahash,
      },
    });
    return NextResponse.json({ message: "Conta criada" }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Erro no Servidor" }, { status: 500 });
  }
}
