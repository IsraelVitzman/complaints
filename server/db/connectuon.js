import {createConnection}from 'mysql2'


export function CreateConnection() {
    try{
        const connection =createConnection({
             host: 'localhost',
             user: 'root',       
             password: '',      
             database: 'test_db'
        
        })
        return connection
    }catch(err){
        console.log(err);  
         
    }
}
