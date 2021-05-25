const express = require('express')
const app = express()

const url = 'http://produtos:3000/produtos'
const axios = require('axios')

const PORT = 3000
const HOST = '0.0.0.0'

const calcados = f => f.categoria === "calçado"

app.get('/calcados', async(req, res) => {
    const reponse = await axios(url)
    const produtos = reponse.data
    const calc = produtos.filter(calcados)
    
    res.json(calc)
})

app.listen(PORT, HOST, () => {
    console.log("calcados está executando...")
})