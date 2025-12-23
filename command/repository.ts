import { Pool, PoolConnection, createPool } from "mysql2"
import { randomUUID } from "crypto";


function inject(Service: any) {
    return function (target: any, key: any) {
        if (!target[key]) {
            target[key] = new Service();
        }

    }
}

interface Notification {
    message: string;
    name: string;
}

class NotificationsContext {
    notifications: Notification[] = [];

    public addNotification(notification: Notification) {
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
    id: string;
    userName: string;
    lastName: string;
    idade: number;

    @inject(NotificationsContext)
    private notificationContext: NotificationsContext;

    constructor(userName: string, lastName: string, idade: number) {
        this.idade = idade;
        this.lastName = lastName;
        this.userName = userName;
        this.id = randomUUID();
    }

    isValid() {
        if (typeof this.idade != "number") {
            this.notificationContext.addNotification({ name: "age", message: "age is not a number" })
        }
        if (this.lastName.length == 0) {
            this.notificationContext.addNotification({ name: "lastName", message: "lastName is empty" })
        }
        if (this.userName.length == 0) {
            this.notificationContext.addNotification({ name: "userName", message: "userName is empty" })
        }

        return this.notificationContext.hasNotification();
    }

    getNotificarions() {
        return this.notificationContext.getNotifications();
    }

}

export class UserRepository {

    #connection: Pool
    constructor() {
        this.#connection = createPool("mysql://root:13012006@localhost/users")
    }

    async connect(): Promise<PoolConnection> {
        return new Promise((resolve, reject) => {
            this.#connection.getConnection((err, con) => {
                if (err) reject(err);
                resolve(con)
            })
        })
    }

    async findAll() {
        try {
            const connection = await this.connect();
            const [result] = await connection.promise().query("select * from usuario LIMIT 30");
            connection.release();
            return result
        } catch (error) {
            console.log("erro na consultan! \n", error);
        }
    }

    async insertOne(user: User) {
        try {
            const connection = await this.connect();
            await connection.promise().query("insert into usuario values(?,?,?,?)",
                [user.id, user.userName, user.lastName, user.idade]);
            connection.release();
            return "usuario criado com sucesso"
        } catch (error) {
            throw new Error(error.message)
        }
    }
}