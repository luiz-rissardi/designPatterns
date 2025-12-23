var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { User, UserRepository } from "./repository.js";
function inject(Service) {
    return function (target, key) {
        if (!target[key]) {
            target[key] = new Service();
        }
    };
}
export class UserService {
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
__decorate([
    inject(UserRepository),
    __metadata("design:type", UserRepository)
], UserService.prototype, "repository", void 0);
