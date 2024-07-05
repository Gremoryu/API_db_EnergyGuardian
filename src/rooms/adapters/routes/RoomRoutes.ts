import { Router } from "express";

import { createRoomController } from "../../infrastructure/RoomDependencies";
import { deleteRoomController } from "../../infrastructure/RoomDependencies";
import { getRoomsByUserIdController } from "../../infrastructure/RoomDependencies";
import { updateRoomController } from "../../infrastructure/RoomDependencies";

const RoomRouter = Router();

RoomRouter
    .get('/rooms/:id', (req, res) => getRoomsByUserIdController.handle(req, res))
    .post('/rooms', (req, res) => createRoomController.handle(req, res))
    .put('/rooms/:id', (req, res) => updateRoomController.handle(req, res))
    .delete('/rooms/:id', (req, res) => deleteRoomController.handle(req, res));

export default RoomRouter;