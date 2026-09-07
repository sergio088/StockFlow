"use client";
import { Item } from "@prisma/client";
import ItemContent from "./ItemContent";

type listitemsprops = {
  items: Item[];
};

export default function ListItems({ items }: listitemsprops) {
  return (
    <div className="border border-black bg-white">
      {items.map((item) => {
        return <ItemContent key={item.id} item={item} />;
      })}
    </div>
  );
}
