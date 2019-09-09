let x = new Vue({
			el: '#app2',
			data: {
				message:'Botão acionado',
				counter:0
			},
			template: '<div id="example-1"><button v-on:mouseleave="counter += 1">Adiciona 1</button><p>{{message}}: {{ counter }}</p></div>'
		});

new Vue({
	el: '#app',
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
			console.log(evt);
		}
	},
	template: '<ul><li v-for="option in options"><button v-on:click="makeMove(option.id)">{{option.label}}</button></li></ul>'
});