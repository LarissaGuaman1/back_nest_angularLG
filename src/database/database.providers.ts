import { DataSource } from "typeorm";

export const databaseProviders=[
    {
        provide:'DATABASE_CONNECTION',
        useFactory:()=>{
          const dataSource=new DataSource( {
            type:'postgres',
            host:'localhost',
            port:5432,
            username:'postgres',
            password:'12345',
            database:'Backend_LarissaGuaman'

            });
         
        return dataSource.initialize();

        }
    }


]