import { Item } from "@prisma/client";
import Button from "@/components/utils/Button";

interface SalesItemsprops {
  items: Item[];
  addCarrinho: (item: Item) => void;
  TotalPreco: (total: number) => void;
}

export default function SalesItems({
  items,
  addCarrinho,
  TotalPreco,
}: SalesItemsprops) {
  return (
    <div>
      {items.map((item) => {
        return (
          <div key={item.id} className="border border-black">
            {item.quantidade === 0 ? (
              <div className="grid grid-cols-4 px-1.5">
                <h1>{item.name}</h1>
                <p>R${item.preco}</p>
                <p className="text-red-500">Quant. {item.quantidade}</p>
                <div>
                  <Button onClick={() => {}} className="text-red-500">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-shopping-cart-icon lucide-shopping-cart "
                      >
                        <circle cx="8" cy="21" r="1" />
                        <circle cx="19" cy="21" r="1" />
                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                      </svg>
                    </span>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-4 px-1.5">
                <h1>{item.name}</h1>
                <p>R${item.preco}</p>
                <p>Quant. {item.quantidade}</p>
                <div>
                  <Button
                    onClick={() => {
                      addCarrinho(item);
                      TotalPreco(item.preco);
                    }}
                    className=""
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-shopping-cart-icon lucide-shopping-cart "
                      >
                        <circle cx="8" cy="21" r="1" />
                        <circle cx="19" cy="21" r="1" />
                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                      </svg>
                    </span>
                  </Button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
