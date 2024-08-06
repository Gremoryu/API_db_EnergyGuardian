import e, { Express } from "express";
import cors from 'cors';
import "dotenv/config";
import indexRouter from "./index.router";

const app: Express = require("express")();
const port = process.env.PORT || 3000;

app.use(e.json());
app.use(cors()); // Permite todas las solicitudes CORS
app.use(indexRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);