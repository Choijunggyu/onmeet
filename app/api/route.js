import mysql from 'mysql2/promise'

export default async function handler(req,res){
    const dbconnection = await mysql.createConnection({
        host: "localhost",
        database: "user_data",
        user: "root",
        password: "1234",
        port: 3306
    })

    try{
        const query = "SELECT * from Team_list"

        const values = []
        const [data] = await dbconnection.execute(query,values)
        dbconnection.end();
        console.log(data);
        res.status(200).json({ results: data})
    }catch(error){
        res.status(500).json({error: error.message})
    }
}