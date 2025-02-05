function uploadSingle(name){

    return (req, res, next) => {

        if(!req.file) {
            return res.status(400).json({
                status: "error",
                message: "No file uploaded"
            });
        }

        const fileUrl = `${req.protocol}://${req.get("host")}/images/${name}/${req.file.filename}`;
        
        res.status(200).json({
            status: "success",
            fileUrl
        });
    }
}

function uploadMultiple(name){

    return (req, res, next) => {

        if(!req.files) {
            return res.status(400).json({
                status: "error",
                message: "No files uploaded"
            });
        }

        const files = req.files.map(file => {
            return `${req.protocol}://${req.get("host")}/images/${name}/${file.filename}`;
        });

        res.status(200).json({
            status: "success",
            files
        });
    }
}

module.exports = {
    uploadSingle,
    uploadMultiple
};