import { Router, Request, Response } from "express";
import UserRouter from "./users/adapters/routes/UserRoutes";
import RoomRouter from "./rooms/adapters/routes/RoomRoutes";

const subfix = '/api';
const indexRouter = Router();

indexRouter.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

indexRouter.use(`${subfix}/user`, UserRouter);
indexRouter.use(`${subfix}/room`, RoomRouter);

export default indexRouter;