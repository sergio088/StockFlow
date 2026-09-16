import Button from "../utils/Button";
import { RemoveItem } from "@/lib/items.client";
import { EditItem } from "@/lib/items.client";
import { useState } from "react";
import { ChangeEvent } from "react";
import Input from "../utils/Input";
import { useSearchParams, useRouter } from "next/navigation";

type itemcontentprops = {
  item: {
    name: string;
    id: string;
    preco: number;
    quantidade: number;
  };
};

export default function ItemContent({ item }: itemcontentprops) {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(item.name);
  const [preco, setPreco] = useState(item.preco);
  const [quant, setQuant] = useState(item.quantidade);
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("busca") ?? "";

  const refresh = () => {
    router.push(`/Estoque?busca=${encodeURIComponent(search)}`);
  };
  return (
    <div key={item.id} className="grid grid-cols-4 px-1.5 border border-black">
      <h1>{item.name}</h1>
      <p>R${item.preco}</p>
      <p>Quant. {item.quantidade}</p>
      <div>
        <Button
          onClick={() => {
            setOpen(!open);
            setId(item.id);
          }}
          className=""
        >
          °°°
        </Button>
        {open && id === item.id && (
          <div className="flex flex-col space-y-2">
            <Button
              onClick={() => {
                RemoveItem({ itemRemoved: item.id });
                refresh();
              }}
              className=""
            >
              Remover
            </Button>
            <Button onClick={() => setEdit(true)} className="">
              Editar
            </Button>
          </div>
        )}
        {edit && id === item.id && (
          <div className="fixed flex items-center inset-0 w-full h-screen bg-black/50">
            <div className="flex flex-col mx-auto p-3 w-3/5 h-3/5 rounded-2xl bg-gray-200">
              <header className="flex items-center justify-between h-1/10">
                <h1>Adicionar item</h1>
                <Button onClick={() => setEdit(false)} className="">
                  X
                </Button>
              </header>
              <form className="flex flex-col">
                <Input
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setName(e.target.value);
                  }}
                  value={name}
                  p="nome"
                  placeholder="Ex: Colher"
                />
                <Input
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setPreco(Number(e.target.value));
                  }}
                  value={preco}
                  p="preço"
                  placeholder="Ex: 22.99"
                />
                <Input
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setQuant(Number(e.target.value));
                  }}
                  value={quant}
                  p="Quant."
                  placeholder="Ex: 12"
                />
              </form>
              <footer className="flex mt-auto justify-end">
                <Button
                  onClick={() => {
                    EditItem({
                      id: item.id,
                      name: name,
                      preco: preco,
                      quantidade: quant,
                    });
                    setEdit(false);
                    refresh();
                  }}
                  className="bg-blue-600 px-2 py-2 flex justify-center items-center w-full lg:w-fit text-white rounded hover:bg-blue-700"
                >
                  Adicionar
                </Button>
              </footer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
