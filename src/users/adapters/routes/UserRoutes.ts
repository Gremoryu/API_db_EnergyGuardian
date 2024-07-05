import { Router } from "express";

import { createUserController } from "../../infrastructure/UserDependencies";
import { getUserByIdController } from "../../infrastructure/UserDependencies";
import { getUserByUsernameController } from "../../infrastructure/UserDependencies";
import { updateUserController } from "../../infrastructure/UserDependencies";
import { deleteUserController } from "../../infrastructure/UserDependencies";

const UserRouter = Router();

UserRouter
    .get('/users/:id', (req, res) => getUserByIdController.handle(req, res))
    .get('/users/:username', (req, res) => getUserByUsernameController.handle(req, res))
    .post('/users', (req, res) => createUserController.handle(req, res))
    .put('/users/:id', (req, res) => updateUserController.handle(req, res))
    .delete('/users/:id', (req, res) => deleteUserController.handle(req, res));

export default UserRouter;