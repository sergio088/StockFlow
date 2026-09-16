import EstoqueContent from "@/components/Estoque/EstoqueContent";
import { getItems } from "@/lib/items.server";
import Session from "@/lib/session";

export default async function Estoque({
  searchParams,
}: {
  searchParams: Promise<{ busca?: string }>;
}) {
  await Session();
  const params = await searchParams;
  const termo = params.busca ?? "";
  const items = await getItems(termo);
  return <EstoqueContent items={items} />;
}
