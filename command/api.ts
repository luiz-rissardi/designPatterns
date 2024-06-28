import express, { Router } from "express";
import { UserFactory } from "./factory.js";

const app = express();

const routes = Router();
const controller = UserFactory.getInstanceController();


routes.route("/users")
    .get((req, res) => {
        controller.findAll(req, res);
    })

app.use(routes);
app.listen(3000, () => {
    console.log("server is running");
})