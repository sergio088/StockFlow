import React from "react";
import StockFlow from "@/components/Links/StockFlow";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-[15px]">
      <header>
        <StockFlow></StockFlow>
      </header>
      <div className=" ">{children}</div>
    </div>
  );
}
