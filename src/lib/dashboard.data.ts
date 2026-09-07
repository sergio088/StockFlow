type dataDash = {
  ganhosMes: number;
  totalGanhos: number;
  totalVendas: number;
  ganhosPorMes: Record<number, number>;
  top10: Record<string, { name: string; quantidade: number }>;
};
export async function data(): Promise<dataDash> {
  const res = await fetch(`/api/dashboard/vendas`);
  if (!res.ok) {
    throw new Error("Erro ao buscar vendas");
  }

  return res.json();
}
