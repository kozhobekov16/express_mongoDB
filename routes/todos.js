const {Router} = require('express')
const router = Router()

router.get('/', (req, resp) =>{
    resp.render('index')
})
module.exports = router