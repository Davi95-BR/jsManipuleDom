const BotaoConclui = () => {

	const botaoConclui = document.createElement('buttom') // criando o botaoConclui
	botaoConclui.classList.add('check-buttom')  // adiconando a class css
	botaoConclui.innerText = 'concluir'         // adicionando texto no botaoConclui

	botaoConclui.addEventListener('click', ConcluirTarefa)  // evento ao clicar colocar a função ConcluirTarefa

	return botaoConclui // retornando a variável para o BotaoConclui

}

const ConcluirTarefa = (evento) => {
	const botaoConclui = evento.target // saber se o botaoConclui foi clicado


	const tarefaCompleta = botaoConclui.parentElement // pegando o pai do botãoConclui que é a li

	tarefaCompleta.classList.toggle('done') //toggle == "alternancia entre V OU F, verificação do click do botaoConclui "
}

export default BotaoConclui   // Proteção em módulos que traz o mesmo que IIFE 'função de execução imediata'
