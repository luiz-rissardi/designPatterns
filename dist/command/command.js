export class Command {
    execute(args1, agrs2, agrs3) {
        throw new Error("the method execute is not implemented");
    }
}
export class CommandInsertUser extends Command {
    constructor(userService) {
        super();
        this.userService = userService;
    }
    execute(userName, latsName, idade) {
        console.log(userName);
        // return new Promise((resolve) => {
        //     try {
        //         this.userService.insertUser(userName, latsName, idade)
        //             .then(result => {
        //                 if (!result.valid) this.undo();
        //                 resolve(result)
        //             })
        //     } catch (error) {
        //         this.undo()
        //     }
        // })
    }
    undo() {
        console.log("desfazendo alteração");
    }
}
export class CommandFindAllUsers extends Command {
    constructor(userService) {
        super();
        this.userService = userService;
    }
    execute() {
        return this.userService.findAll();
    }
}
