const express = require('express')
var cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')

const userRoutes = require('./routes/users')
const expenseRoutes = require('./routes/expense')

const sequelize = require('./util/database')
const User = require('./models/users')
const Expense = require('./models/expense')

const bcrypt = require('bcrypt')

const app = express()
app.use(cors())

app.use(bodyParser.json())

app.use('/user',userRoutes)
app.use('/expense',expenseRoutes)


sequelize.sync()
  .then(() => {
    app.listen(3000)
  })
  .catch((err) => {
    console.log(err)
  })

 
