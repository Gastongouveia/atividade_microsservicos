const express = require('express')
const app = express()

const PORT = 3000
const HOST = '0.0.0.0'

app.get('/produtos', (req, res) => {
    res.json([
            {id: 1, descricao: 'camiseta tam M', categoria: 'vestuário'},
            {id: 2, descricao: 'vestido tam P', categoria: 'vestuário'},
            {id: 3, descricao: 'bolsa', categoria: 'acessório'},
            {id: 4, descricao: 'tenis tam 40', categoria: 'calçado'},
            {id: 5, descricao: 'sandália tam 42', categoria: 'calçado'}
        ])
})

app.listen(PORT, HOST, () => {
    console.log("produtos executando...")
})