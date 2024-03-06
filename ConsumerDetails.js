const { addConsumer, getConsumer, deleteConsumer } = require('../controllers/consumer');

const router = require('express').Router()

router.post('/add-income', addConsumer)
    .get('/get-incomes',getConsumer)
    .delete('/delete-income/:id',deleteConsumer)
    
module.exports = router