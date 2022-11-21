const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
const router = express.Router();
const { Client } = require('pg');

app.use(express.json());

let db = [
    {id: '04684059-776c-41ce-8c38-940830c0b651', title: 'hello1', body: 'hello1 world body blablabla', create_at: new Date(), update_at: new Date()},
    {id: '04684059-776c-41ce-8c38-940830c0b652', title: 'hello2', body: 'hello2 world body blablabla', create_at: new Date(), update_at: new Date()},
    {id: '04684059-776c-41ce-8c38-940830c0b653', title: 'hello3', body: 'hello3 world body blablabla', create_at: new Date(), update_at: new Date()},
    {id: '04684059-776c-41ce-8c38-940830c0b654', title: 'hello4', body: 'hello4 world body blablabla', create_at: new Date(), update_at: new Date()}
]

function conn() {
    const client = new Client({
        connectionString: "postgresql://postgres:postgres@localhost:5432/postgres"
    })
    return client.connect()
    .then(() => client);
}

router
    .route('/posts')
    .all((req,res,next) =>{
        console.log(new Date())
        return conn()
        .then((client) =>{
            req.db = client
            next()
        })
        
    })
    .get((req, res) => {
        req.db.query("SELECT id, title, body FROM public.posts;")
        .then(data => {
            res.send(data.rows)
        })
        .catch(e => {
            console.error(e)
            res.status(500).end()
        })
    })
    .post((req, res) => {
        db.push(req.body);
        res.status(204)
        res.end()
    })  
router
    .param('id', (req, res, next, id) => {
        console.log(id)
        next()
    })
    .route('/posts/:id')
    .get((req, res) => {
        const ret = db.find((e)=> e.id === req.params.id)
        if(ret){
            res.send(ret)
        } else{
            res.status(404).end()
        }
    })
    .put((req, res) => {
        const ret = db.find((e)=> e.id === req.params.id)
        if(ret){
            db = db.map((e) =>{
                if(e.id === req.params.id) {
                    return req.body;
                } else{
                    return e;
                }
            });
            res.status(202)
            res.end()
        } else{
            res.status(404).end()
        }
    })
    .delete((req, res) => {
        const ret = db.find((e)=> e.id === req.params.id)
        if (ret) {
            db = db.filter((e) => e.id !== req.params.id)
            res.status(204)
            res.end()
        } else{
            res.status(404).end()
        }
    })

app.use(router);

app.listen(3000) 

/*
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        console.log(req.headers)
        res.write('hello from server')
        res.end()
    }
});

server.on('connection', (stream) => {
    console.log('some one connected')
});

server.listen(4000);
console.log('server listening on http://localhost:4000');

//node ./exercicios-aulas/backend/server.js
*/

//app.use(express.static(path.join(__dirname, 'public')));
/*
app.get('/', (req, res, next) => {
    console.log('primeiro get');
    next();
});
app.get('/', (req, res, next) => {
    console.log('segundo get');
    next();
});
*/

//app.get('/', (req, res) => {
   //console.log(req.headers);
    //const content = fs.readFileSync(path.join(__dirname, 'static', 'index.html'), 'utf8');
    //res.send(content);
//});
//const bodyParser = require('body-parser');
//app.use(bodyParser.json());

