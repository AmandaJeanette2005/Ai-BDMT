require('dotenv').config();

const express = require('express')
const app = express()
const port = 9090
const router = require ('./routers/router')
const bodyParser = require('body-parser')
const cors = require('cors');

app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

app.use('/', router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})