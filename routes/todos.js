const {Router} = require('express')
const router = Router()
let Todo = require('../models/Todo')
router.get('/', async (req, resp) =>{
    const todos = await Todo.find({})
    resp.render('index', {
        title: 'Todo List',
        isIndex: true,
        
    })
})
router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create ToDo',
        isCreate: true
    })
})
router.post('./create', async (req, res) => {
    const todo = new Todo({
        title: req.body.title
    })
    await todo.save()
    res.redirect('/')
})
module.exports = router