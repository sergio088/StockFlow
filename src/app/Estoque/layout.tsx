import Headerdash from "@/components/utils/HeaderHome";
import React from "react";

export default function layoutEstoque({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Headerdash />
      <main className="flex h-screen w-full p-4">{children}</main>
    </div>
  );
}
