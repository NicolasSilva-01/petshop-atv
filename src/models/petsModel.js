import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();


export const findAll = async () => {
    return await prisma.pet.findMany({
        orderBy: { nome: 'asc'}
    })
}

//Crio variavel find by id e ja exporto
export const findById = async (id) => {
    return await prisma.pet.findUnique({
        where: { id: Number(id) }
    });
}