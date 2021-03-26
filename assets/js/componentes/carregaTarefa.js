import { Tarefa } from './criarTarefa.js'

export const CarregaTarefa = () => {
    const lista = document.querySelector('[data-list]')
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefa')) || [] // pipe || para criar uma avaliação de curto circuito.
    
    lista.innerHTML = " " // Comando que limpa a lista ao recarregar 

    tarefasCadastradas.forEach((tarefa) => {
    lista.appendChild(Tarefa(tarefa))  // comando para exibir as tarefas na tela

    })
}