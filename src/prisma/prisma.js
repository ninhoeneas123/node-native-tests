import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function checkPrismaConnection() {
    try {
        console.log("Database is connect ")
    } catch (error) {
        throw new Error('Erro ao conectar o Prisma ao banco de dados: ' + error.message);
    }
}

checkPrismaConnection()
    .then(() => {

    })
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

export default prisma 