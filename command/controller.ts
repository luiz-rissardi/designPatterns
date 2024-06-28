import { Request, Response } from "express";
import { CommandFindAllUsers, CommandInsertUser } from "./command.js";
import { UserService } from "./service.js";


export class UserController {

    #commands: Map<string, any> = new Map();
    constructor(private service: UserService) {
        this.#mapCommands(this.service)
    }

    #mapCommands(service: UserService) {
        this.#commands.set("findAll", new CommandFindAllUsers(service));
        this.#commands.set("insertUser", new CommandInsertUser(service));
    }

    async findAll(req: Request, res: Response) {
        try {
            const command = this.#commands.get("findAll")
            const user = await command.execute();
            res.json(user);
        } catch (error) {
            res.writeHead(500);
            res.end();
        }
    }

    async insertUser(req: Request, res: Response) {
        try {
            const { idade,userName,lastName } = req.body;
            const command = this.#commands.get("insertUser")
            const user = await command.execute(userName,lastName,idade);
            res.json(user);
        } catch (error) {
            console.log(error);
            res.writeHead(500);
            res.end();
        }
    }
}