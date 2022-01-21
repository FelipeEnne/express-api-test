const express = require('express');
const bodyParser = require('body-parser');

const useNext = require('./middleUse');
const userApi = require('./api/user');
const productApi = require('./api/product');

const app = express();


productApi(app, ' test');

app.post('/user', userApi.save)
app.get('/user', userApi.get)


app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(useNext('Felipe'))

app.use((req, res, next) => {
    console.log(`Use next again`);
    next();
})

app.get('/test/:id', (req, res) => {
    res.send(`test ${req.params.id}`)
})

app.get('/test2/', (req, res) => {
    res.send(`test2 ${req.query.done}`)
})

app.get('/test3/', (req, res) => {
    // let body = '';
    // req.on('data', function(part) {
    //     body += part;
    // })

    // req.on('end', function(part) {
    //     
    // })
    res.send(req.body)
})


app.get('/',(req, res, next) => {
    // res.send('ok');
    res.json([{
        "id": 1,
        'name': 'test'
    }])
    next()
})

app.use((req, res) => {
    console.log(`Use next one last time`);
})

app.listen(3000, () => {
    console.log('Runing...');
});