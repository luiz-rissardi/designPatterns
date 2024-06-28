import { User } from "./repository.js";
export class UserService {
    constructor(repository) {
        this.repository = repository;
    }
    async findAll() {
        const result = await this.repository.findAll();
        return result;
    }
    async insertUser(userName, latsName, idade) {
        try {
            const user = new User(userName, latsName, idade);
            if (user.isValid()) {
                await this.repository.insertOne(user);
                return {
                    valid: true,
                    message: "user create successefully"
                };
            }
            else {
                return {
                    valid: false,
                    message: user.getNotificarions()
                };
            }
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
