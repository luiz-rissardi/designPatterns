import express, { Router } from "express";
import { UserFactory } from "./factory.js";
import bodyParser from "body-parser";

const app = express();

const routes = Router();
const controller = UserFactory.getInstanceController();

routes.route("/users")
    .get((req, res) => {
        controller.findAll(req, res);
    })
    .post((req, res) => {
        controller.insertUser(req, res);
    })

app.use(bodyParser.json())
app.use(routes);
app.listen(3000, () => {
    console.log("server is running");
})