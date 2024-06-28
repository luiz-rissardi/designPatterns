import { UserService } from "./service.js";


export class Command {
    execute(...args:any) {
        throw new Error("the method execute is not implemented")
    }
}

export class CommandInsertUser extends Command {
    constructor(private userService: UserService) {
        super();
    }

    execute(userName?: string, latsName?: string, idade?: number) {
        return new Promise((resolve) => {
            try {
                this.userService.insertUser(userName, latsName, idade)
                    .then(result => {
                        if (!result.valid) this.undo();
                        resolve(result)
                    })
            } catch (error) {
                this.undo()
            }
        })
    }

    undo() {
        console.log("desfazendo alteração");
    }
}

export class CommandFindAllUsers extends Command {
    constructor(private userService: UserService) {
        super();
    }

    execute() {
        return this.userService.findAll();
    }
}