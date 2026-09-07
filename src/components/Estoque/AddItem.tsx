"use client";
import { ChangeEvent, useState } from "react";
import Button from "../utils/Button";
import Input from "../utils/Input";
import { AddItems } from "@/lib/items.client";

export default function AddItem() {
  const [open, setOpen] = useState<Boolean>(false);
  const handleClick = () => {
    setOpen(true);
  };

  const [name, setName] = useState<string>("");
  const [preco, setPreco] = useState<string>("");
  const [quant, setQuant] = useState<string>("");

  return (
    <div>
      <Button
        onClick={handleClick}
        className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 px-2 py-1.5 flex justify-center items-center w-full lg:w-fit text-white rounded-3xl hover:bg-blue-700"
      >
        + Adicionar Item
      </Button>
      {open && (
        <div className="fixed flex items-center inset-0 w-full h-screen bg-black/50">
          <div className="flex flex-col mx-auto p-3 w-3/5 h-3/5 rounded-2xl bg-gray-200">
            <header className="flex items-center justify-between h-1/10">
              <h1>Adicionar item</h1>
              <Button onClick={() => setOpen(false)} className="">
                X
              </Button>
            </header>
            <form className="flex flex-col">
              <Input
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setName(e.target.value);
                }}
                p="nome"
                placeholder="Ex: Colher"
              />
              <Input
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setPreco(e.target.value);
                }}
                p="preço"
                placeholder="Ex: 22.99"
              />
              <Input
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setQuant(e.target.value);
                }}
                p="Quant."
                placeholder="Ex: 12"
              />
            </form>
            <footer className="flex mt-auto justify-end">
              <Button
                onClick={() => {
                  AddItems({ name: name, preco: preco, quantidade: quant });
                  setName("");
                  setPreco("");
                  setQuant("");
                  setOpen(false);
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
  );
}
