"use client";
import Card from "@/components/Dashboard/cardsInfo";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  BarChart,
  CartesianGrid,
  Tooltip,
  Bar,
} from "recharts";
import { useEffect, useState } from "react";
import { data, dataEstoque } from "@/lib/dashboard.data";
export default function DashboardContant() {
  const [ganhosMes, setGanhosMes] = useState(0);
  const [ganhosTotais, setGanhosTotais] = useState(0);
  const [vendas, setVendas] = useState(0);
  const [ganhosPorMes, setGanhosPorMes] = useState<{}[]>([]);
  const [rankItems, setRankItems] = useState<{}[]>([]);
  const [produtosF, setProdutosF] = useState<{}[]>([]);
  const anoAtual = new Date().getFullYear();
  useEffect(() => {
    async function dash() {
      const dataDash = await data();
      const ganhosMes = dataDash.ganhosMes;
      setGanhosMes(ganhosMes);

      const totalGanho = dataDash.totalGanhos;
      setGanhosTotais(totalGanho);

      const totalVenda = dataDash.totalVendas;
      setVendas(totalVenda);

      const ganhosPM = dataDash.ganhosPorMes;
      const ganhosPorMes = Object.entries(ganhosPM).map(([mes, ganhos]) => ({
        mes: Number(mes),
        ganhos: ganhos,
      }));
      setGanhosPorMes(ganhosPorMes);

      const setTop10 = dataDash.top10;
      const top10 = Object.entries(setTop10).map(
        ([id, { name, quantidade }]) => ({
          name: name,
          quantidade: Number(quantidade),
        }),
      );
      setRankItems(top10);

      const dataE = await dataEstoque();
      const pfaltantes = dataE.produtosFaltando;
      const produtosFaltando = Object.entries(pfaltantes).map(
        ([id, { name, quantidade }]) => ({
          name: name,
          quantidade: Number(quantidade),
        }),
      );
      setProdutosF(produtosFaltando);
    }

    dash();
  }, []);

  return (
    <div className="flex flex-col p-[30px]">
      <h1>Dashboard</h1>
      <section className="grid grid-cols-1 md:grid-cols-3">
        <Card text1={ganhosMes} text2="Ganhos do mês"></Card>
        <Card text1={ganhosTotais} text2="Seus ganhos" />
        <Card text1={vendas} text2="Novas Vendas" />
      </section>
      <h1>Overview</h1>
      <section className="mt-8 grid grid-cols-2 gap-5 xl:grid-cols-3">
        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 sm:p-7">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-slate-800">
                Faturamento ao longo do tempo
              </h2>
              <p className="mt-1 text-sm text-slate-400">Receita mensal</p>
            </div>
            <span className="rounded-lg bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600">
              {anoAtual}
            </span>
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart
              data={ganhosPorMes}
              margin={{ top: 5, right: 10, left: -20, bottom: 0 }}
            >
              <CartesianGrid stroke="#eef2f7" vertical={false} />
              <XAxis
                dataKey="mes"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  border: "none",
                  borderRadius: 12,
                  boxShadow: "0 8px 24px #0f172a18",
                }}
              />
              <Line
                type="monotone"
                dataKey="ganhos"
                stroke="#6366f1"
                strokeWidth={3}
                dot={{ r: 4, fill: "#6366f1", strokeWidth: 2, stroke: "#fff" }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 sm:p-7">
          <div className="mb-6">
            <h2 className="font-semibold text-slate-800">
              Produtos mais vendidos
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Ranking por quantidade
            </p>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart
              data={rankItems}
              layout="vertical"
              margin={{ left: 0, right: 10 }}
            >
              <CartesianGrid stroke="#eef2f7" horizontal={false} />
              <XAxis
                type="number"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 12 }}
              />
              <YAxis
                type="category"
                dataKey="name"
                width={100}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748b", fontSize: 11 }}
              />
              <Tooltip
                cursor={{ fill: "#f8fafc" }}
                contentStyle={{
                  border: "none",
                  borderRadius: 12,
                  boxShadow: "0 8px 24px #0f172a18",
                }}
              />
              <Bar
                dataKey="quantidade"
                fill="#818cf8"
                radius={[0, 6, 6, 0]}
                barSize={18}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 sm:p-7">
          <div className="mb-6">
            <h2 className="font-semibold text-slate-800">
              Produtos faltando estoque
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Ranking por quantidade
            </p>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart
              data={produtosF}
              layout="vertical"
              margin={{ left: 0, right: 10 }}
            >
              <CartesianGrid stroke="#eef2f7" horizontal={false} />
              <XAxis
                type="number"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 12 }}
              />
              <YAxis
                type="category"
                dataKey="name"
                width={100}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748b", fontSize: 11 }}
              />
              <Tooltip
                cursor={{ fill: "#f8fafc" }}
                contentStyle={{
                  border: "none",
                  borderRadius: 12,
                  boxShadow: "0 8px 24px #0f172a18",
                }}
              />
              <Bar
                dataKey="quantidade"
                fill="#818cf8"
                radius={[0, 6, 6, 0]}
                barSize={18}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
}
