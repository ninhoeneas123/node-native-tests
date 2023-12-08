import prisma from '../prisma/prisma.js';
import { Exception } from '../utils/exception.js'


export class UsersController {

    async create(data) {
        if (!data) {
            return "Data is empty";
        }

        let { name, email, password } = data;

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password,
            },
        });

        return { user: user, message: "User created successfully" };
    }


    async getById(userId) {
        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
        });
        if (!user) {
            throw new Exception("User not found", 400, "Bad Request")
        }
        return user
    }


    async getAll() {
        return prisma.user.findMany();
    }

    
    async remove(userId) {
        const user = await this.getById(userId)

        if (!user) {
            throw new Exception("User not found", 400, "Bad Request")
        }

        await prisma.user.delete({
            where: {
                id: userId,
            }
        });
        return "User is removed successfully";
    }
}
