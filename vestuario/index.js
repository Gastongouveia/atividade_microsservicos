const express = require('express')
const app = express()

const url = 'http://produtos:3000/produtos'
const axios = require('axios')

const PORT = 3000
const HOST = '0.0.0.0'

const vestuario = f => f.categoria === "vestuário"

app.get('/vestuario', async(req, res) => {
    const reponse = await axios(url)
    const produtos = reponse.data
    const vest = produtos.filter(vestuario)
    
    res.json(vest)
})

app.listen(PORT, HOST, () => {
    console.log("vestuario está executando...")
})