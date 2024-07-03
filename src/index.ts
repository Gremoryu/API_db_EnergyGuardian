import e, { Express } from "express";
import "dotenv/config";
import indexRouter from "./index.router";

const app: Express = require("express")();
const port = process.env.PORT || 3000;

app.use(e.json());

app.use(indexRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);