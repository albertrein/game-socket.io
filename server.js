// Realiza o require do express, http, e socketio
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//Cria jogo
let game = require('./game');

// cria uma rota para fornecer o arquivo index.html
app.get('/', function(req, res){
  res.sendFile(__dirname + '/view/index.html');
});


// sempre que o socketio receber uma conexão vai devoltar realizar o broadcast dela
io.on('connection', function(socket){
  socket.on('chat message', function(objectJogada){
  	
    //console.log(objectJogada);
  	//console.log(objectJogada.userName,"jogou ->",objectJogada.jogada.objeto);
    let outJogada = game.game(objectJogada);
  	if(outJogada != null){
    	io.emit('chat message', outJogada);
    	game.limpaJogadas();
  	}
  });
});

app.use('/vue', express.static(__dirname + '/view/vue'));

// inicia o servidor na porta informada
http.listen(3000, function(){
  console.log('Servidor rodando em: http://localhost:3000');
});
