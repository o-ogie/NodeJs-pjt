const express = require('express')
const router = express.Router()
const boardController = require('../../controllers/boardController')

router.get('/list', boardController.list);

router.get('/view', boardController.view);

router.get('/write', boardController.writeGet);

router.post('/write', boardController.writePost);

router.get('/modify', boardController.modifyGet);

router.post('/modify', boardController.modifyPost);

router.get("/delete",boardController.delete);


module.exports = router;