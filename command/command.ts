import { UserService } from "./service.js";


export class Command {
    execute(): Promise<any> | any {
        throw new Error("the method execute is not implemented")
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