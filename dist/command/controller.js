var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _UserController_instances, _UserController_commands, _UserController_mapCommands;
import { CommandFindAllUsers, CommandInsertUser } from "./command.js";
export class UserController {
    constructor(service) {
        _UserController_instances.add(this);
        this.service = service;
        _UserController_commands.set(this, new Map());
        __classPrivateFieldGet(this, _UserController_instances, "m", _UserController_mapCommands).call(this, this.service);
    }
    async findAll(req, res) {
        try {
            const command = __classPrivateFieldGet(this, _UserController_commands, "f").get("findAll");
            const user = await command.execute();
            res.json(user);
        }
        catch (error) {
            res.writeHead(500);
            res.end();
        }
    }
    async insertUser(req, res) {
        try {
            const { idade, userName, lastName } = req.body;
            console.log(idade);
            const command = __classPrivateFieldGet(this, _UserController_commands, "f").get("insertUser");
            const user = await command.execute(userName, lastName, idade);
            res.json(user);
        }
        catch (error) {
            console.log(error);
            res.writeHead(500);
            res.end();
        }
    }
}
_UserController_commands = new WeakMap(), _UserController_instances = new WeakSet(), _UserController_mapCommands = function _UserController_mapCommands(service) {
    __classPrivateFieldGet(this, _UserController_commands, "f").set("findAll", new CommandFindAllUsers(service));
    __classPrivateFieldGet(this, _UserController_commands, "f").set("insertUser", new CommandInsertUser(service));
};
