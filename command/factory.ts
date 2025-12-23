import { UserController } from "./controller.js";
import { UserRepository } from "./repository.js";
import { UserService } from "./service.js";



export class UserFactory{
    static getInstanceController(){
        const repository = new UserRepository();
        const service = new UserService();
        const controller = new UserController(service);
        return controller;
    }
}