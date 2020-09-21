const express = require('express');
const auth = require('../../middleware/auth')
const {GetTodos, PostTodos, DeleteTodos} = require('../../controllers/todos')

const router = express.Router();

router.get('/getTodo',auth, GetTodos);
router.post('/addTodo',auth, PostTodos);
router.delete('/addTodo/:id',auth, DeleteTodos);

module.exports = router;