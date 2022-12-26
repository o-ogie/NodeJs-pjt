const express = require('express')
const router = require('router')
const boardController = require('../../controllers/boardController')

router.get('/list', boardController.list);

router.get('/view', boardController.view);

router.get('/write', boardController.write);

router.post('/write', boardController.write);

router.get('/modify', boardController.modify);

router.post('/modify', boardController.modify);

router.get(
    '/delete',
    boardController.delete,
);


module.exports = router;