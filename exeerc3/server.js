import express from 'express';

const app = express();
app.use(express.json());

let produtos = [
    {id:1,nome:'mesa',preço:'2000.00'},
    {id:2,nome:'cadeira',preço:'400.00'},
    {id:3,nome:'toalha',preço:'50.00'},
    {id:4,nome:'estante',preço:'150.00'},
    {id:5,nome:'tomada',preço:'20.00'}
];

app.get('/produtos',(req,res) => {
    res.send(produtos);
});

app.get('produtos/:id', (req,res) => {
    const id = number(req.params.id);
    produtos = produtos.filter(produto => produtos.id !== id);
    res.send(produtos);
});

app.listen(3000, () => {
    console.log('servidor rodando na porta 3000')
});