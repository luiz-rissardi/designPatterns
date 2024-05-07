import express, { Router } from "express";
import http from "http";
import bodyParser from "body-parser";
import { HeroEntity } from "./entity.js";

const routes = Router();

routes
    .route("/hero")
    .post((req, res) => {
        try {
            const parsedData = req.body;
            const hero = new HeroEntity(parsedData);
            if (hero.isValid()) {
                res.write("hero successfully create");
            }
            else {
                res.status(400).send(hero.notifications);
            }
        } catch (error) {
            res.writeHead(500);
        } finally {
            res.end();
        }
    })

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());

app.use(routes);

server
    .listen(3000)
    .on("listening", () => {
        console.log("server is running at port 3000");
    })

