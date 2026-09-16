import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    const body = await req.json()
    const {EditItem} = body

    await prisma.item.update({
        where:{
            id: EditItem.id
        },
        data:{
            name: EditItem.name,
            preco: EditItem.preco,
            quantidade: EditItem.quantidade
        }
    })

    return NextResponse.json({sucess: true})
}