const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000
const exphbr = require('express-handlebars')
let todoRoutes = require('./routes/todos')

const app = express()
const hbs = exphbr.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({
    extended: true
}))
app.use(todoRoutes)

async function start(){
    try{
        await mongoose.connect('mongodb+srv://Zhakshylyk:qwerty123@cluster0.bxldi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useFindAndModify: false
        })
        app.listen(PORT, () => {
            console.log('start')
        })
    }catch (e){
        console.log("ERROR", e)
    }
}

start()
