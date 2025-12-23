var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _UserRepository_connection;
import { createPool } from "mysql2";
import { randomUUID } from "crypto";
function inject(Service) {
    return function (target, key) {
        if (!target[key]) {
            target[key] = new Service();
        }
    };
}
class NotificationsContext {
    constructor() {
        this.notifications = [];
    }
    addNotification(notification) {
        this.notifications.push(notification);
    }
    hasNotification() {
        return this.notifications.length == 0;
    }
    getNotifications() {
        return this.notifications;
    }
}
export class User {
    constructor(userName, lastName, idade) {
        this.idade = idade;
        this.lastName = lastName;
        this.userName = userName;
        this.id = randomUUID();
    }
    isValid() {
        if (typeof this.idade != "number") {
            this.notificationContext.addNotification({ name: "age", message: "age is not a number" });
        }
        if (this.lastName.length == 0) {
            this.notificationContext.addNotification({ name: "lastName", message: "lastName is empty" });
        }
        if (this.userName.length == 0) {
            this.notificationContext.addNotification({ name: "userName", message: "userName is empty" });
        }
        return this.notificationContext.hasNotification();
    }
    getNotificarions() {
        return this.notificationContext.getNotifications();
    }
}
__decorate([
    inject(NotificationsContext),
    __metadata("design:type", NotificationsContext)
], User.prototype, "notificationContext", void 0);
export class UserRepository {
    constructor() {
        _UserRepository_connection.set(this, void 0);
        __classPrivateFieldSet(this, _UserRepository_connection, createPool("mysql://root:13012006@localhost/users"), "f");
    }
    async connect() {
        return new Promise((resolve, reject) => {
            __classPrivateFieldGet(this, _UserRepository_connection, "f").getConnection((err, con) => {
                if (err)
                    reject(err);
                resolve(con);
            });
        });
    }
    async findAll() {
        try {
            const connection = await this.connect();
            const [result] = await connection.promise().query("select * from usuario LIMIT 30");
            connection.release();
            return result;
        }
        catch (error) {
            console.log("erro na consultan! \n", error);
        }
    }
    async insertOne(user) {
        try {
            const connection = await this.connect();
            await connection.promise().query("insert into usuario values(?,?,?,?)", [user.id, user.userName, user.lastName, user.idade]);
            connection.release();
            return "usuario criado com sucesso";
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
_UserRepository_connection = new WeakMap();
