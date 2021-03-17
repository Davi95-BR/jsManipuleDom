const BotaoDeleta = () => {

	const botaoDeleta = document.createElement('buttom') // criando o botãoDeleta

	botaoDeleta.innerText = 'deletar'  // colocando texto no botaoDeleta
	botaoDeleta.classList.add('delete-buttom')
	botaoDeleta.addEventListener('click', DeletarTarefa)  // colocando escutador no clicar'botaoDeleta' e função anônima
		
	return botaoDeleta


}

const DeletarTarefa = (evento) => {

	const botaoDeleta = evento.target  // saber se o botaoConclui foi clicado

	const tarefaCompleta = botaoDeleta.parentElement   // pegando o pai do botãoConclui que é a li

	tarefaCompleta.remove()  // removendo a li com o clicar no botaoDeleta

	return botaoDeleta
}	

export default BotaoDeleta // Proteção em módulos que traz o mesmo que IIFE 'função de execução imediata'