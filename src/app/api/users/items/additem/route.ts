import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import Session from "@/lib/session";

 export async function POST (req: NextRequest){
   const body = await req.json()
   const { item } = body

   const userId = await Session()

   const res = await prisma.item.create({
      data: {
        name: item.name,
        preco: Number(item.preco),
        quantidade: Number(item.quantidade),
        userId,
      },
});
   if(!res) {
    return NextResponse.json({message: "Erro ao criar item",status: 500})
   }
   return NextResponse.json({message: "item criado", status: 200})
   
 }