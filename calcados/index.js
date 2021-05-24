const express = require('express')
const app = express()

const PORT = 3000
const HOST = '0.0.0.0'

app.get('/calcados', async(req, res) => {
   
    try {
        const response = await fetch('https://localhost:3000/produtos')
        return res.json(response)
    }catch (error) {
        console.error(error)
    }

})

app.listen(PORT, HOST, () => {
    console.log("calcados está executando...")
})