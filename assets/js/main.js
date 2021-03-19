import BotaoConclui from './componentes/concluirTarefa.js'
import BotaoDeleta from './componentes/deletarTarefa.js'

	const CriarTarefa = (evento) => {

		evento.preventDefault()//   previnir o comportamento padrão do formulário

		const lista = document.querySelector('[data-list]')  // selecionando o campo e criando uma variável
		const input = document.querySelector('[data-form-input]')  // selecionando o campo e criando uma variável
		const valor = input.value

		const tarefa = document.createElement('li') // criando a li
		tarefa.classList.add('task')    //   adicionando a class css na li

		const conteudo = `<p class="content">${valor}</p>` //  criando o corpo da li

		tarefa.innerHTML = conteudo  //  inserindo no html o corpo com o conteúdo da li

		tarefa.appendChild(BotaoConclui())  //  cria a li sempre que clicar o botao
		tarefa.appendChild(BotaoDeleta())  //   deleta a li sempre que clicar
		lista.appendChild(tarefa)         //  criando uma lista em formato de filhos da ul que é o pai
		input.value = " "      //   limpando o input para mais adições
	}

	const novaTarefa = document.querySelector('[data-form-buttom]')  //  linkando o  botaoConclui a novaTarefa
	novaTarefa.addEventListener('click', CriarTarefa);				 //  evento ao clicar colocar a função criarTarefa


	




