const expres = require('express');
const porta = 3003

const app = expres()

app.get('/produtos', (req, res) => {
    res.send({
        nome: 'Notebook', 
        preco: 123.45
    })
})


app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})