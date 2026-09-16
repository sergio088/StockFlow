import { NextResponse } from "next/server";
import Session from "@/lib/session";
import prisma from "@/lib/prisma";

export async function GET() {
  const userId = await Session();

  const items = await prisma.item.findMany({
    where: {
      userId: userId,
      deletedAt: null,
    },
  });

  const rankItems = items.reduce(
    (acc, item) => {
      if (!acc[item.id]) {
        acc[item.id] = {
          name: item.name,
          quantidade: item.quantidade,
        };
      }

      acc[item.id].quantidade += item.quantidade;

      return acc;
    },
    {} as Record<string, { name: string; quantidade: number }>,
  );

  const itensFaltando = Object.values(rankItems)
    .sort((a, b) => a.quantidade - b.quantidade)
    .slice(0, 10);

  console.log({ itensFaltando: itensFaltando });
  return NextResponse.json({ produtosFaltando: itensFaltando });
}
