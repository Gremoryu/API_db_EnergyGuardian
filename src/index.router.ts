import { Router, Request, Response } from "express";
import UserRouter from "./users/adapters/routes/routes";

const subfix = '/api';
const indexRouter = Router();

indexRouter.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

indexRouter.use(`${subfix}/user`, UserRouter);

export default indexRouter;