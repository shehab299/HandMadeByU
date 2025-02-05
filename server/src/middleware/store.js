const crypto = require("crypto");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadDir = "public/images";

function nameConverter(req, file, cb)
{
    const hash = crypto.createHash("md5").update(file.originalname + Date.now()).digest("hex");
    const ext = path.extname(file.originalname);
    cb(null, hash + ext);
}

function destinationConverter(name)
{
    return (req, file, cb) => {

        const finalPath = path.join(uploadDir, name);

        if(!fs.existsSync(finalPath)){
            fs.mkdirSync(finalPath, { recursive: true });
        }

        cb(null, finalPath);
    }
}

function storeSingle(name){
    const storage = multer.diskStorage({
        destination: destinationConverter(name),
        filename: nameConverter
    });

    const upload = multer({ storage });

    return upload.single("file");
}


function storeMultiple(name, maxCount){
    const storage = multer.diskStorage({
        destination: destinationConverter(name),
        filename: nameConverter
    });

    const upload = multer({ storage });

    return upload.array(name, maxCount);
}


module.exports = {
    storeSingle,
    storeMultiple
}