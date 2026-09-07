import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { Item } from "@prisma/client";
import Session from "@/lib/session";

export async function POST(req: NextRequest){
    const body = await req.json()
    const {sellitem,total} = body
    const userid = await Session()

    const sale = await prisma.sale.create({
            data:{
                    total: total,
                    userId: userid
                }
            })
        sellitem.map(async(item:Item)=>{
            await prisma.item.update({
                where:{
                    userId: item.userId,
                    id: item.id,
                },
                data:{
                    quantidade: {
                        decrement:item.quantidade
                    }
                }
            })

            await prisma.saleItem.create({
            data:{
                    name: item.name,
                    quantidade:item.quantidade,
                    preco:item.preco,
                    saleId:sale.id,
                    itemId:item.id,
                }
            })
        })

        

        return NextResponse.json({mensagem:"ok"})
    
}