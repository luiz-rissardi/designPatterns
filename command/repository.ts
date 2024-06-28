import { Pool, PoolConnection, createPool } from "mysql2"


export class UserRepository {

    #connection: Pool
    constructor() {
        this.#connection = createPool("mysql://root:13012006@localhost/users")
    }

    async connect(): Promise<PoolConnection> {
        return new Promise((resolve, reject) => {
            this.#connection.getConnection((err, con) => {
                if(err) reject(err);
                resolve(con)
            })
        })
    }

    async findAll(){
        try {
            const connection = await this.connect();
            const [result] = await connection.promise().query("select * from usuario LIMIT 30");
            connection.release();
            return result
        } catch (error) {
            console.log("erro na consultan! \n",error);   
        }
    }
}