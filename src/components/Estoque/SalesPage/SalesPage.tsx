"use client";
import Button from "../../utils/Button";
import { GetListItems } from "@/lib/items.client";
import { useEffect, useState } from "react";
import Input from "../../utils/Input";
import { ChangeEvent } from "react";
import { Item } from "@prisma/client";
import SalesItems from "./SalesItems";
import CarrinhoContent from "./CarinhoContent";
import { SellItem } from "@/lib/items.client";

export default function ButtonSellItem() {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<Item[]>([]);
  const [itemCarrinho, setItemCarrinho] = useState<Item[]>([]);
  const [total, setTotal] = useState(0);
  const [desconto, setDesconto] = useState(0);

  useEffect(() => {
    async function GetItems(search?: string) {
      const data: Item[] = await GetListItems(search);
      setItems(data);
    }
    GetItems();
  }, []);

  function adicionarItemCarrinho(itemnovo: Item) {
    const itemExiste = itemCarrinho.find((item) => {
      const i = item.id === itemnovo.id;
      return i;
    });
    const semEstoque = itemnovo.quantidade - 1 < 0;
    if (semEstoque) {
    } else if (itemExiste) {
      alert("tem estoque");
      setItemCarrinho((prev) =>
        prev.map((item) => {
          if (item.id === itemExiste.id) {
            if (item.quantidade - 1 < 0) {
              return item;
            }
            return { ...item, quantidade: item.quantidade + 1 };
          } else {
            return item;
          }
        }),
      );
    } else {
      setItemCarrinho((prev) => [...prev, { ...itemnovo, quantidade: 1 }]);
    }
  }

  const GetListSearch = async (search: string) => {
    const data: Item[] = await GetListItems(search);
    setItems(data);
  };

  function TotalPreco(total: number) {
    setTotal((prev) => prev + total);
  }

  return (
    <div>
      <Button
        onClick={() => setOpen(true)}
        className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 px-8 py-1.5 flex justify-center items-center w-full lg:w-fit text-white rounded-3xl hover:bg-blue-700"
      >
        Vender
      </Button>
      {open && (
        <div className="fixed flex items-center inset-0 w-full h-screen bg-black/50">
          <div className="flex mx-auto p-3 w-4/5 h-4/5 rounded-2xl bg-gray-200">
            <section className="flex flex-col w-7/10">
              <search>
                <Input
                  placeholder="Pesquisar item"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    GetListSearch(e.target.value);
                  }}
                ></Input>
              </search>
              <div className="max-h-96 overflow-y-auto">
                <SalesItems
                  items={items}
                  addCarrinho={adicionarItemCarrinho}
                  TotalPreco={TotalPreco}
                />
              </div>
            </section>
            <span className="m-3 w-[1px] h-full bg-black"></span>
            <section className="flex-col w-3/10 max-h-96 overflow-y-auto">
              <CarrinhoContent itemCarrinho={itemCarrinho} />
              <div className="flex flex-col justify-end">
                <div className="flex space-x-3">
                  <h1>Total:</h1>
                  <p>R$ {total}</p>
                </div>
                <Input
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setDesconto(Number(e.target.value));
                  }}
                  type="number"
                  p="Desconto"
                  placeholder="Ex: 10"
                  className="w-fit p-2 rounded focus:border-blue-500 border border-gray-400 placeholder:text-gray-500"
                ></Input>
                <Button
                  onClick={() => {
                    SellItem(itemCarrinho, total);
                    setItemCarrinho([]);
                    setTotal(0);
                    setDesconto(0);
                    setOpen(false);
                  }}
                  className="bg-blue-600 px-2 py-1.5 flex justify-center items-center w-full lg:w-fit text-white rounded-3xl hover:bg-blue-700"
                >
                  Registrar Venda
                </Button>
              </div>
            </section>
            <div>
              <Button onClick={() => setOpen(false)} className="">
                X
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
