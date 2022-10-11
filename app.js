const express = require('express')
const cors = require('cors')

const path = require('path')
const app = express()

const userRoutes = require('./routes/users')
const sequelize = require('./util/database')

app.use('/user',userRoutes)

const bodyParser = require('body-parser')

app.use(cors())
  
 
//app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
sequelize.sync()
  .then(() => {
    app.listen(3000)
  })
  .catch((err) => {
    console.log(err)
  })
