const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const mainCtrl = require('./controllers/mainCtrl')
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('assets'))

app.get('/products/', mainCtrl.index)
app.get('/products/:id', mainCtrl.show)
app.post('/products/',mainCtrl.create)
app.put('/products/:id',mainCtrl.update)
app.delete('/products/:id', mainCtrl.delete)
app.listen(port, function() {
    console.log(`listening on ${port}`)
})
