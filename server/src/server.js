require('./config/env.js');

const app = require('./app.js');
const db = require("./models");


const asyncListen = require('./utils/asyncListen.js');


async function main(){
    await db.sequelize.authenticate();
    await db.sequelize.sync();
    console.log('Database is connected');

    await asyncListen(app, process.env.PORT || 3000);
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
}



main().catch((err) => {
    console.error(err);
});