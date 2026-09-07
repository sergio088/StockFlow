import { NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest){
    const body = await req.json()
    const {itemRemoved} = body

    await prisma.item.update({ where: { id: itemRemoved }, data: { deletedAt: new Date() } })
}