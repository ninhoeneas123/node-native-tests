import { Router } from 'express';
import { UsersController } from './users.controller.js';

const usersController = new UsersController();

let usersRouters = Router();

usersRouters.post("/user/create", async (req, res) => {
    try {
        const data = req.body;
        const user = await usersController.create(data);
        res.json({ message: user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
});

usersRouters.get("/user/find", async (req, res) => {
    try {
        const { id } = req.body;
        const user = await usersController.find(id);
        console.log(user)
        res.json({ user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
});

export default usersRouters;
