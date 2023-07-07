const express = require('express')
const createCompletion = require('../createCompletion')
const upload = require('../uploadFile')
const listFineTunes = require('../listFineTunes')
const createFineTune = require('../createFineTune')
const router = express.Router()

router.post('/', createCompletion.model)
router.post('/uploadFile', upload.uploadFineTune)
router.get('/list', listFineTunes.list)
router.post('/create', createFineTune.create)

module.exports = router