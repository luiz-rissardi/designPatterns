import { UserRepository } from "./repository.js";



export class UserService{
    constructor(private repository:UserRepository){}
    
    async findAll(){
        const result = await this.repository.findAll();
        return result;
    }
}