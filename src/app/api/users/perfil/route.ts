import Session from "@/lib/session";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const id = await Session();

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "Erro no banco", status: 500 });
    }
    console.log({
      user: {
        name: user.name,
        image: user.image,
      },
    });
    return NextResponse.json({
      name: user.name,
      image: user.image,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json({ error: "Erro interno" });
  }
}
