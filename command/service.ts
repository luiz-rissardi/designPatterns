import { User, UserRepository } from "./repository.js";


function inject(Service: any) {
    return function (target: any, key: any) {
        if (!target[key]) {
            target[key] = new Service();
        }

    }
}


export class UserService {

    @inject(UserRepository)
    private repository: UserRepository

    async findAll() {
        const result = await this.repository.findAll();
        return result;
    }

    async insertUser(userName: string, latsName: string, idade: number) {
        try {
            const user = new User(userName,latsName,idade);
            if(user.isValid()){
                await this.repository.insertOne(user);
                return {
                    valid:true,
                    message:"user create successefully"
                }
            }else{
                return {
                    valid:false,
                    message:user.getNotificarions()
                }
            }
        } catch (error) {
            throw new Error(error.message)
        }
    }
}