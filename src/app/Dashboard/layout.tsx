import React from "react";
import Headerdash from "@/components/utils/HeaderHome";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Headerdash />
      <main>{children}</main>
    </div>
  );
}
