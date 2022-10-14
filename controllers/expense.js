const Expense = require('../models/expense')

const addExpense = async (req,res) => {
    try{
        const {exp_amt,disc,ctg} = req.body
        if(exp_amt === undefined || disc === undefined || ctg === undefined){
            console.log(discription)
            return res.status(400).json({message:"Enter all details",success:false})
        }
        const expense = await Expense.create({exp_amt,disc,ctg})
        res.status(201).json({expense:expense,message:"Expense added successfully",success:true})
    }
    catch(err){
        res.status(500).json({error:err,success:false})
    }
         
}

const getExpenses = async(req,res) => {
    try{
        const expenses = await Expense.findAll()
        console.log(expenses)
        res.status(200).json({expenses:expenses,success:true})
    }
    catch(err){
        res.status(500).json({error:err,success:false})
    }
}

const deleteExpense = async (req,res) => {
    try{
        const expenseId = req.params.expenseId
        console.log(expenseId)
        if(expenseId == undefined || expenseId.length === 0){
            return res.status(400).json({success:false,message:"Id is missing"})
        }
        await Expense.destroy({where: {id:expenseId}})
        res.status(200).json({success:true,message:"Expense deleted successfully"})
    }
    catch(err){
        res.status(500).json({error:err,success:false})
    }
}

module.exports = {addExpense,getExpenses,deleteExpense}