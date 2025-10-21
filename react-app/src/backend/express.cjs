const express = require('express');
const cors = require('cors');
const app = express()

app.use(express.json())
app.use(cors())

const users = [
{email: 'a@b.hu', pqassword: 'a'}
]

app.post('/login', (req, res)=>{
    const {email, password} = req.body
    res.status(200).json({found: users.findIndex(user => user.email === email && user.password === password)})
})

const port = 3333
app.listen(port, err => {
    if (err) console.warn(err)
    else console.log(`Express server running on http://localhost:${port}`)
})