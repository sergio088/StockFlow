"use client";
import AddItem from "@/components/Estoque/AddItem";
import ButtonSellItem from "./SalesPage/SalesPage";
import SearchBar from "@/components/Estoque/SearchBar";
import ListItems from "@/components/Estoque/ListItems";
import Button from "../utils/Button";
import { Item } from "@prisma/client";
import { ChangeEvent, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

type EstoqueContentProps = {
  items: Item[];
};

export default function EstoqueContent({ items }: EstoqueContentProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState<string>(searchParams.get("busca") ?? "");
  const searchItems = () => {
    router.push(`/Estoque?busca=${encodeURIComponent(search)}`);
  };
  return (
    <div className="space-y-3 max-w-6xl mx-auto w-full px-4">
      <header className="rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 p-6 text-white shadow-lg shadow-indigo-500/20">
        <p className="text-sm font-medium text-indigo-100">
          Gestão de produtos
        </p>
        <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
          Estoque
        </h1>
        <p className="mt-2 text-sm text-indigo-100">
          Consulte, cadastre e controle os itens do seu estoque.
        </p>
      </header>
      <section className="flex flex-row justify-between items-center">
        <div className="flex space-x-3">
          <AddItem />
          <ButtonSellItem />
        </div>

        <div className="flex space-x-3">
          <SearchBar
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
          />
          <Button
            className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 px-8 py-1.5 flex justify-center items-center w-full lg:w-fit text-white rounded-3xl hover:bg-blue-700"
            onClick={searchItems}
          >
            Buscar
          </Button>
        </div>
      </section>
      <ListItems items={items} />
    </div>
  );
}
