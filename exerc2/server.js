import express from 'express';

const app = express()
app.use(express.json());

    let cursos = [
        {id:1, nome:'engenharia'},
        {id:2, nome:'mecanica'},
        {id:3, nome:'eletrica'}
    ];

    let professores = [
        {id:1, nome:'jair'},
        {id:2, nome:'renato'},
        {id:3, nome:'silva'}
    ];

    let contatos = [
        {id:1, endereco:'jair@email'},
        {id:2, endereco:'renato@email'},
        {id:3, endereco:'silva@email'},
    ]

app.get('/', (req, res) => {
    res.send("pagina inicial");
});

app.get('/cursos', (req, res) => {
    res.send(cursos);
});

app.get('/professores', (req, res) => {
    res.send(professores);
});

app.get('/contatos', (req, res) => {
    res.send(contatos);
});

app.listen(3000,() => {
    console.log('servidor rodando na porta 3000');
});