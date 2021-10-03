const express = require('express')
const mysql = require("mysql")
const myconn = require("express-myconnection")
const routes = require('./routes')
const cors = require('cors')
const app = express()
app.set('port', process.env.PORT || 9000)
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'canciones'
}

// middlewares ---------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors())

// rutas ----------------------
app.get('/', (req, res)=>{
    res.send('Welcome to my API')
})

app.use('/api', routes)

// servidor corriendo ------------
app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})

