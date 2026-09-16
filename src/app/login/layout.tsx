import React from "react";
import StockFlow from "@/components/Links/StockFlow";

export default function Rootlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <StockFlow></StockFlow>
      </header>
      <div className="">{children}</div>
    </div>
  );
}
