import e, { Express } from "express";
import "dotenv/config";

const app: Express = require("express")();
const port = process.env.PORT || 3000;

app.use(require("cors")());
app.use(e.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);