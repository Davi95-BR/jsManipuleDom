"use strich"

import { HandlerNovoitem }  from  './componentes/criarTarefa.js'
import { CarregaTarefa }  from  './componentes/carregaTarefa.js'


const Tarefa = document.querySelector('[data-form-buttom]')  //  linkando o  botaoConclui a novaTarefa
Tarefa.addEventListener('click', HandlerNovoitem); //  linkando novatarefa a o clicar com o  evento handleraNovoItem 
CarregaTarefa()


	




