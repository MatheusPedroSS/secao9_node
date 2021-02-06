const expres = require('express');
const app = expres()
const porta = 3003

const bd = require('./BD');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded( { extended: true } ))

app.post('/produtos', (req, res) => {
    const produto = bd.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.get('/produtos', (req, res) => {
    res.send(bd.getProdutos())
})

app.get('/produtos/:id', (req, res) => {
    res.send(bd.getProduto(req.params.id))
})

app.put('/produtos/:id', (req, res) => {
    const produto = bd.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco,
        id: req.params.id,
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res) => {
    res.send(bd.excluirProduto(req.params.id))
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})