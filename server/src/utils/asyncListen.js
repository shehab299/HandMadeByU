
function asyncListen(app, port){

    return new Promise((resolve, reject) => {
        app.listen(port, (err) => {
            if(err){
                reject(err);
                return;
            }
            resolve(port);
        });
    });
}

module.exports = asyncListen;