import { Request, Response } from "express";
import { Command, CommandFindAllUsers } from "./command.js";
import { UserService } from "./service.js";


export class UserController {

    #commands: Map<string, Command> = new Map();
    constructor(private service: UserService) {
        this.#mapCommands(this.service)
    }

    #mapCommands(service: UserService) {
        this.#commands.set("findAll", new CommandFindAllUsers(service));
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
}