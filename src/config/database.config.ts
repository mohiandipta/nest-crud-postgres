import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const devConfig : PostgresConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 3036,
    username: 'root',
    password: '',
    database: '',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
    connectTimeoutMS: 10
}