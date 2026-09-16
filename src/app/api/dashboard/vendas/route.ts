import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import Session from "@/lib/session";

export async function GET() {
  const userId = await Session();

  const sale = await prisma.sale.findMany({
    where: {
      userId: userId,
    },
  });

  const mesAtual = new Date().getMonth();
  const anoAtual = new Date().getFullYear();
  const vendasMes = sale.filter((item) => {
    const itemMes = new Date(item.createdAt);
    return (
      itemMes.getMonth() === mesAtual && itemMes.getFullYear() === anoAtual
    );
  });
  const ganhosMes = vendasMes.reduce((acc, item) => {
    return acc + item.total;
  }, 0);

  const totalGanhos = sale.reduce((acc, item) => {
    return acc + item.total;
  }, 0);

  const totalVendas = sale.length;

  const ganhosPorMes = sale.reduce(
    (acc, venda) => {
      const mes = venda.createdAt.getMonth();

      if (!acc[mes]) {
        acc[mes] = 0;
      }

      acc[mes] += venda.total;

      return acc;
    },
    {} as Record<number, number>,
  );

  const saleItems = (
    await Promise.all(
      sale.map(async (saleI) => {
        return prisma.saleItem.findMany({
          where: {
            saleId: saleI.id,
          },
        });
      }),
    )
  ).flat();

  const rankItems = saleItems.reduce(
    (acc, item) => {
      const idItem = item.itemId;

      if (!acc[idItem]) {
        acc[idItem] = {
          name: item.name,
          quantidade: item.quantidade,
        };
      }

      acc[idItem].quantidade += Number(item.quantidade) || 0;

      return acc;
    },
    {} as Record<string, { name: string; quantidade: number }>,
  );

  const top10 = Object.values(rankItems)
    .sort((a, b) => b.quantidade - a.quantidade)
    .slice(0, 10);

  console.log({
    ganhosMes: ganhosMes,
    totalGanhos: totalGanhos,
    totalVendas: totalVendas,
    ganhosPorMes: ganhosPorMes,
    top10: top10,
  });
  return NextResponse.json({
    ganhosMes: ganhosMes,
    totalGanhos: totalGanhos,
    totalVendas: totalVendas,
    ganhosPorMes: ganhosPorMes,
    top10: top10,
  });
}
