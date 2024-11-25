// console.log("Shriyam")
require('dotenv').config()
const express = require('express')
const app = express()
const port = 6000

app.get('/', (req, res) => {
    res.send('Hello World!')

})

app.get('/twitter',(req,res)=>{
    res.send("shriyamdotcom")
})

app.get('/login',(req,res)=>{
    res.send('<h1>Shriyam Chaudhary</h1>'

    )

})

app.get('/Jaat',(req,res)=>{
    res.send("<h3>Shriyam The JAAT</h3>")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})



