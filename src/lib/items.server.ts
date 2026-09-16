import Session from "./session";
import  prisma from "./prisma"

export async function getItems(name?:string) {
    const userId = await Session();
    // colocar props de 'search' separar em 2 com if de tem 'search' ou nao tem se sim return item com filtro do 'searc'
    // se nao devolve todos os items
    return await prisma.item.findMany({
        where: {
            userId,
            name:{
            contains: name,
            mode: 'insensitive',
        },
        deletedAt: null
        }
    });
}