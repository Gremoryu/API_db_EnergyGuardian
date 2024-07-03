import { Router } from "express";

import { createUserController } from "../../infrastructure/dependencies";
import { getUserByIdController } from "../../infrastructure/dependencies";
import { getUserByUsernameController } from "../../infrastructure/dependencies";
import { updateUserController } from "../../infrastructure/dependencies";
import { deleteUserController } from "../../infrastructure/dependencies";

const UserRouter = Router();

UserRouter
    .get('/users/:id', (req, res) => getUserByIdController.handle(req, res))
    .get('/users/:username', (req, res) => getUserByUsernameController.handle(req, res))
    .post('/users', (req, res) => createUserController.handle(req, res))
    .put('/users/:id', (req, res) => updateUserController.handle(req, res))
    .delete('/users/:id', (req, res) => deleteUserController.handle(req, res));

export default UserRouter;