"use strich"

import { CarregaTarefa } from './carregaTarefa.js'
import BotaoConclui from './concluirTarefa.js'
import BotaoDeleta from './deletarTarefa.js'

export  const HandlerNovoitem = (evento) => {
		evento.preventDefault()
		const tarefa = JSON.parse(localStorage.getItem('tarefa'))  ||   []    // JSON.parse tranforma a string em objeto |  pipe || para criar uma avaliação de curto circuito.
		const lista = document.querySelector('[data-list]') 
		const input = document.querySelector('[data-form-input]')  
		const valor = input.value // apenas o valor 

		const calendario = document.querySelector('[ data-form-date]') //Percorrendo o Dom acessando data-form-date
		const data = moment(calendario.value) 	// moment é formato de datas | Apenas o valor 
		const dataFormatada = data.format('DD/MM/YYYY') // Continuação da formatação moment para format
	
		const dados = { // Parâmetros
			valor,
			dataFormatada
		}

		const tarefasAtualizadas = [...tarefa, dados] // Pegando o array vazio da const tarefa e colocando os parâmetros
		localStorage.setItem("tarefa", JSON.stringify(tarefasAtualizadas)) // JSON.stringify transforma objetos em string | localStorage mantem os parãmetros guardados no navegador
		
		input.value = " "      // limpando o input para + adiçôes
		CarregaTarefa()

	} 

export	const Tarefa = ( {valor, dataFormatada})  => {

			const tarefa = document.createElement('li') 
			tarefa.classList.add('task') 
			const conteudo = `<p class="content">${dataFormatada}  ${valor}</p>` //Adicionando data e string
			tarefa.innerHTML = conteudo // colocando no html "li, input , data"

			tarefa.appendChild(BotaoConclui()) //  cria a li ao clicar o botao
			tarefa.appendChild(BotaoDeleta()) //  deleta a li ao clicar

			return tarefa
		}	
