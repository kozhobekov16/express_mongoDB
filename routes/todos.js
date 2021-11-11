const {Router} = require('express')
const router = Router()

router.get('/', (req, resp) =>{
    resp.render('index', {
        title: 'Todo List',
        isIndex: true
    })
})
router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create ToDo',
        isCreate: true
    })
})
module.exports = router