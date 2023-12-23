const Pool = require('pg').Pool
require('dotenv').config()

const conParams = {
    user : process.env.USER_NAME,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_NAME
}

const pool = new Pool(conParams);



// const insertTodo = async (description) => {

//     const q = `INSERT INTO todo (description) VALUES('${description}')`;

//     console.log(q);

//     const res = await pool.query(q)

//     return res
// }


module.exports = {insertTodo}