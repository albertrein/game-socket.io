var started = new Vue({
	el: '#nomeUser',
	data: {
		userName: ''
	},
	methods: {
		insertName: function() {
			if(this.userName === ''){
				this.userName = 'João Silva'+ Math.floor(Math.random() * 100);
			}
			document.querySelector('.choiceUserName').style.display = "none";
			document.querySelector('.content').style.display = "block";
		}
	},
	template: '<div id="nomeUser"><h3>Digite seu nome para começar:</h3><input v-model="userName"><button v-on:click="insertName">Salvar Nome</button></div>'
});

var game = new Vue({
	el: '#ambiente',
	data: {	
		options: [
			{
				id: 0,
				label: 'Pedra'

			},
			{
				id: 1,
				label: 'Papel'
			},
			{
				id: 2,
				label: 'Tesoura'
			},
			{
				id: 3,
				label: 'Largarto'
			},
			{
				id: 4 ,
				label: 'Spock'
			}
		]
	},
	methods: {
		makeMove: function(evt){
			makeChoice(evt); //Enviando a opção escolhida pelo usuário
		}
	},
	template: '<div><ul><li v-for="option in options"><button v-on:click="makeMove(option.id)">{{option.label}}</button></li></ul></div>'
});

var server = new Vue({
	el: "#serverOut",
	data: {
		serverOut: ''
	},
	template: '<p>{{serverOut}}</p>'

});