import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import Session from "@/lib/session";

export async function GET(req:NextRequest){
     const search = req.nextUrl.searchParams.get("search");
    const userId = await Session()
    const where = {
        where:{
            userId: userId,
            ...(search && {
                name:{
                    contains: search,
                    mode: "insensitive" as const,
                }
                
            }),
            deletedAt: null
        }
    };
    
    return NextResponse.json(await prisma.item.findMany(where))
}