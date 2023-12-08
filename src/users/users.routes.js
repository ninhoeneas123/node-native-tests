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
        res.status(500).json({ error: error.message });
    }
});


usersRouters.get("/user/find/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await usersController.getById(id);
        console.log(user)
        res.json({ user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

usersRouters.get("/user/find-all", async (req, res) => {
    try {
        const user = await usersController.getAll();
        res.json({ user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});


export default usersRouters;
