//O evento DOM é acionado quando todo o HTML foi completamente carregado

document.addEventListener('DOMContentLoaded', function () {



	//Tipos de dados
	//String: Sequencia de caracter
	//Number: números inteiros ou pontos flutuantes (10.4)
	//Boolean: Retorna dois valores, true ou false
	//object: estrutura de dados que pode armazenar múltiplos valores
	//NULL: quando está vazio;
	//array: objeto especial ordenado
	//function: bloco de código reutilizável

	//CONST É usado para declarar uma variável cujo valor é permanente
	const teste = 50;

	// LET é usado para declarar variáveis que os valores podem ser
	// retribuidos 
	let C = 0;
	C = 10;
	//console.log(C);

	const notaMedia = 6;

	if (notaMedia >= 6) {
		//alert("Aluno passou");
	}
	else if (notaMedia >= 4 && notaMedia < 6) {
		//alert("aluno quase passou");
	}
	else {
		//alert("aluno reprovou!");
	}

	// ----------------------/ -----------------------

	// --------- OPERADORES -----------

	// = sinal de atribuição
	// == sinal de comparação
	// === verifica se os dois são iguais e têm o mesmo tipo de dados
	// != se é diferente
	// !== se é estritamente diferente
	// > maior
	// < menor

	const num = "6";
	if (num === 6) {
		alert("é igual");
	}
	else {
		alert("O tipo de dado é diferente");
	}

	const professor = "João";
	if (professor == "Lucas") {
		//console.log('Sim é Lucas')
	} else {
		//console.log('Não é Lucas')
	}

	// ---------------- / ---------------------

	//Funcões são blocos de código que podem ser chamados e
	// reutilizados
	//Dentro dos parenteses da função vai os parâmetros/propriedades
	
	function primeiraFuncao(parametro, segundoParametro) {
		return parametro + ', ' + segundoParametro; //variáveis concatecadas (+)
	}

	const parametro = "Essa é uma função com parâmetro";
	const segundoParametro = "agora com dois parâmetros";

	//console.log(primeiraFuncao(parametro, segundoParametro));

	// ---------------- / ----------------------

	//arrays em javascript são estruturas de dados que permitem
	//armazenar uma coleção ordenada de elementos.

	let primeiroArray = ['Lucas', 'João', 'Paulo', 'Marcos'];
	//console.log(primeiroArray[2]); //Número 2 para percorrer o array

	// -------------------- / -------------

	//Os objetos são coleções NÃO ORDENADAS de 
	//pares chave-valor, onde cada valor é associado
	//a uma chave única

	let pessoa = {
		nome: 'Jonas',
		idade: '20',
		profissao: 'Programador'
	}

	//console.log(pessoa['idade']);

	// ------------- /----------------

	const numeros = ["A", "B", "C", "D"]

	primeiroArray.forEach(num => {
		console.log(num)
	})

});