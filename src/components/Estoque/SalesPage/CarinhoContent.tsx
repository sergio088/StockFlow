"use client";
import { Item } from "@prisma/client";

interface itemCarrinhoContent {
  itemCarrinho: Item[];
}

export default function CarrinhoContent({ itemCarrinho }: itemCarrinhoContent) {
  return (
    <div>
      {itemCarrinho.map((item) => {
        return (
          <div key={item.id} className="grid grid-cols-3  px-1.5 w-full">
            <h1>{item.name}</h1>
            <p>R${item.preco}</p>
            <p>{item.quantidade}</p>
          </div>
        );
      })}
    </div>
  );
}
