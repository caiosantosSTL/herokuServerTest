const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send('This is a server')
})

const PORT = process.env.PORT || 3400
app.listen(PORT, ()=>{
    console.log(`Server running port ${PORT}`);
})