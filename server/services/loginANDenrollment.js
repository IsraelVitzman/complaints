import {CreateConnection} from '../db/connectuon'

export async function Login(req ,res) {
    try{
       const {name ,password }=req.body
       const connection = await CreateConnection()
       const query = `SELECT * FROM users WHERE name = ? AND password = ?`;
       const [rows] = await connection.execute(query, [name ,password]);

       if (rows.length === 0) {
            res.send(`i'ts not found${name}${password}`)
       }
       res.status(200).json({data:rows})

    }catch(err){
        res.status(400).json({error:err})
        console.log(err);
    }
    
}
export async function Enrollment(req ,res){
 
    try {
        const {name ,password}=req.body
        const connection = await CreateConection();

        const query = `INSERT INTO users (name,password,role) VALUES (?, ?,?)`;
        await connection.execute(query, [name, password, role]);

        res.status(201).json({message:'insert successfully'})
        

    } catch (err) {
        console.log('invalid  error', err);
        res.status(500).json({message:'invalid error'});
    }
}
