import { Item } from "@prisma/client";

type AddItemsprops = {
  name: string;
  preco: string;
  quantidade: string;
};
export async function AddItems(item: AddItemsprops) {
  await fetch("/api/users/items/additem", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ item }),
  });
}

type itemRemovedprops = {
  itemRemoved: string;
};

export async function RemoveItem({ itemRemoved }: itemRemovedprops) {
  await fetch("/api/users/items/removeitem", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ itemRemoved }),
  });
}

type EditItemProps = {
  id: string;
  name: string;
  preco: number;
  quantidade: number;
};

export async function EditItem(EditItem: EditItemProps) {
  await fetch("/api/users/items/EditItem", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ EditItem }),
  });
}

export async function GetListItems(search?: string) {
  const res = await fetch(
    `/api/users/items/sellListItems?search=${encodeURIComponent(search ?? "")}`,
  );
  if (!res) {
    return;
  }

  return res.json();
}

export async function SellItem(sellitem: Item[], total: number) {
  await fetch("/api/users/items/sellItems", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ sellitem, total }),
  });
}
