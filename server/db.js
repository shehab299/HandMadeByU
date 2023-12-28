const Pool = require('pg').Pool
require('dotenv').config()




const conParams = {
    connectionString : process.env.CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    },
}

const pool = new Pool(conParams);


async function executeNonQuery(query){
    try {
        const res = await pool.query(query);

        if(res.rowCount > 0)
            return true;
        else 
            return false;

    } catch (error) 
    {
        console.log(error);
        return false;
    }
}

async function executeQuery(query){
    try{
        const res = await pool.query(query);

        if(res.rows.length > 0)
            return res.rows;
        else 
            return null;
    }
    catch(error){

        console.log(error);
        return null;
    }

}

async function executeScaler(query){
    try{
        const res = await pool.query(query);

        if(res.rows.length > 0)
            return res.rows[0][Object.keys(res.rows[0])[0]];
        else 
            return null;
    }
    catch(error){

        console.log(error);
        return null;
    }
}




module.exports = {executeScaler , executeNonQuery , executeQuery};