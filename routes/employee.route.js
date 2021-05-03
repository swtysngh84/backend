const { Router } = require('express')
const multer = require('multer')

const { createEmployee, getEmployee } = require('../controller/employee.controller')
const { validation } = require('../middleWare/employee')

const router = Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'media/')
    },
    filename: function (req, file, cb) {
        let extArray = file.originalname.split(".");
        let extension = extArray[extArray.length - 1];
        //console.log(file);
        cb(null, file.originalname + '-' + Date.now()+ '.' +extension)
    }
});

const upload = multer({ storage: storage })


router.post('/',validation,upload.single('media'),  (req, res) => {
    createEmployee((err, result) => {
        if(err){
            res.statusCode = 400
            res.json({success: 0, error: err})
        }else{
            res.statusCode = 200
            res.json({success: 1, response: result})
        }
    })
})

router.get('/',  (req, res) => {
    getEmployee((err, result) => {
        if(err){
            res.statusCode = 400
            res.json({success: 0, error: err})
        }else{
            res.statusCode = 200
            res.json({success: 1, response: result})
        }
    })
})

module.exports = router;