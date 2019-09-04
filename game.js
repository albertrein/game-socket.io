let jogadasRealizadas = [];
const acoesJogadas = [
	{
    	id:0,
    	objeto : "Pedra",
    	lose: [1,4]
    },
    {
        id:1,
        objeto: "Papel",
        lose: [2,3]
    },
    {
        id:2,
        objeto: "Tesoura",
        lose: [0,4]
    },
    {
        id:3,
        objeto: "Lagarto",
        lose: [0,2]
    },
    {
        id:4,
        objeto: "Spock",
        lose: [1,3]
    }];


module.exports.game = function(objectJogada){
	jogadasRealizadas.push(objectJogada);
	
	//console.log(objectJogada);
	//acoesJogadas[jogadasRealizadas[0].id]
	
	if(jogadasRealizadas.length == 2){
		if( (jogadasRealizadas[0].id == jogadasRealizadas[1].id) || (jogadasRealizadas[0].userName == jogadasRealizadas[1].userName) ){
			return "EMPATE";
		}
		if(( acoesJogadas[jogadasRealizadas[0].id].lose[0] == jogadasRealizadas[1].id ) || ( acoesJogadas[jogadasRealizadas[0].id].lose[1] == jogadasRealizadas[1].id )){
			return "JOGADOR:"+jogadasRealizadas[1].userName+" GANHOU!";			
		}
		return "JOGADOR:"+jogadasRealizadas[0].userName+" GANHOU!";
	}
	return null;
};

module.exports.limpaJogadas = function(){
	jogadasRealizadas = [];
}