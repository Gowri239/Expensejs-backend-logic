const express = require('express')
const router = express.Router()

const expenseController = require('../controllers/expense')

router.post('/add-expense',expenseController.addExpense)
router.get('/getexpenses',expenseController.getExpenses)
router.delete('/delete-expense/:expenseId',expenseController.deleteExpense)

module.exports = router