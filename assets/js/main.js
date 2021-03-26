"use strich"

import BotaoConclui from './componentes/concluirTarefa.js'
import BotaoDeleta from './componentes/deletarTarefa.js'

    const handlerNovoitem = (evento) => {
		evento.preventDefault()  //previnir o comportamento padrão do form
		const lista = document.querySelector('[data-list]') 
		const input = document.querySelector('[data-form-input]')  
		const valor = input.value // apenas o valor 

		const calendario = document.querySelector('[ data-form-date]') //Percorrendo o Dom acessando data-form-date
		const data = moment(calendario.value) 	// Apenas o valor | moment é formato de datas 
		const dataFormatada = data.format('DD/MM/YYYY') // Continuação da formatação data com moment
	
		const dados = { // Parâmetros
			valor,
			dataFormatada
		}

		const criaTarefa = criarTarefa(dados) // Chamando a var com os parâmetros de dados

		lista.appendChild(criaTarefa)// criando uma lista em formato de filhos da ul que é o pai
		
		sessionStorage.setItem(tarefa, dados)

		input.value = " "      // limpando o input para + adiçôes

	} 

	const criarTarefa = ( {valor, dataFormatada})  => {

			const tarefa = document.createElement('li') 
			tarefa.classList.add('task') // adicionando a class css na li
			const conteudo = `<p class="content">${dataFormatada}  ${valor}</p>` //Adicionando data e string
			tarefa.innerHTML = conteudo // inserindo no html o corpo com o conteúdo da li

			tarefa.appendChild(BotaoConclui()) //  cria a li sempre que clicar o botao
			tarefa.appendChild(BotaoDeleta()) //  deleta a li sempre que clicar

			return tarefa
		}

	const novaTarefa = document.querySelector('[data-form-buttom]')  //  linkando o  botaoConclui a novaTarefa
	novaTarefa.addEventListener('click', handlerNovoitem); //  evento ao clicar  iniciará a função
	


	




