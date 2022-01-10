const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

const produtos = [
    { id: 1, nome: 'Cadeira', preco: 29.99, descricao: 'Cadeira de madeira para sentar' },
    { id: 2, nome: 'Mesa', preco: 129.99, descricao: 'Mesa de madeira para Jantar' },
    { id: 3, nome: 'Guarda-Roupa', preco: 899.99, descricao: 'Guarda-roupas de madeira para guardar roupas' },
    { id: 4, nome: 'Escrivaninha', preco: 229.99, descricao: 'Mesa de madeira para trabalho' },
    { id: 5, nome: 'Cama', preco: 1299.99, descricao: 'Cama de madeira para dormir' },
    { id: 6, nome: 'Cadeira', preco: 29.99, descricao: 'Cadeira de madeira para sentar' },
    { id: 7, nome: 'Mesa', preco: 129.99, descricao: 'Mesa de madeira para Jantar' },
    { id: 8, nome: 'Guarda-Roupa', preco: 899.99, descricao: 'Guarda-roupas de madeira para guardar roupas' },
    { id: 9, nome: 'Escrivaninha', preco: 229.99, descricao: 'Mesa de madeira para trabalho' },
    { id: 10, nome: 'Cama', preco: 1299.99, descricao: 'Cama de madeira para dormir' },
]


const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/home', (req, res) => {

    res.render('home', { produtos })
})

app.get('/home/:id', (req, res) => {
    const produto = produtos.filter((p) => p.id == req.params.id)
    console.log(produto)
    res.render('produtos', { produto })
})

app.listen(3000, () => console.log('App Rodando!!!'))