const express = require('express');
const cors = require('cors');
const app = express()

app.use(express.json())
app.use(cors())

var users = []

const conn=mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'users'
})

app.post('/login', (req, res)=>{
    const {email, password} = req.body
    conn.connent(err=>{
        if(err) console.warn(err)
            else{
        conn.query(`SELECT email, password FROM users WHERE email="${email}" AND password="${password}"`, (err, result, fields=>{
            if(err) console.warn(err)

            res.status(200).json({error: err, result})
        
        }))}
    })
    //res.status(200).json({found: users.findIndex(user => user.email === email && user.password === password)})
})

const port = 3333
app.listen(port, err => {
    if (err) console.warn(err)
    else console.log(`Express server running on http://localhost:${port}`)
})