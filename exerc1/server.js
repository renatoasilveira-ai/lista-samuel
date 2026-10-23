import express from "express"

const app = express();
    app.use(express.json());

app.get ('/', (req, res) => {
    res.send("Boas vindas ao meu servidor");
});

app.get ('/sobre', (req, res) => {
    const sobre = ("Esta empresa trabalha com a area de tecnologia nos campos brasileiros visando a melhora da produção em todas as areas agrarias")
    res.send(sobre);
});

app.listen(3000, () => {
    console.log('servidor rodando na porta 3009')
});