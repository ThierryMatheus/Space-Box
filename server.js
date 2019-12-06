const express = require('express');
const path = require('path');

const app = express();
const server= require('http').createServer(app);
const io = require('socket.io')(server);

const wd = require('./js/World.js');
const e = require('./js/Element.js');
const me = require('./js/MoveableElement.js');
const vp = require('./js/Viewport.js');

console.log(e);
console.log(me)

app.use(express.static(path.join(__dirname,'public'
)));
app.set('views', path.join(__dirname,'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine','html');

app.use('/',(req,res)=>{
    res.render('index.html');
});

io.on('connection', socket => {
    console.log(`socket conectado: ${socket.id}`);
});
server.listen(3000);