
let listaDeListas = [];
let idLista = 0;



const lists = document.getElementById("lists");


function criaLista(){ //Função que cria novas listas

    //Guardo informação das listas criadas para uso futuro
    let listaAux = { 
        id: idLista,
        nome: "Lista "+idLista,
        isActive: true,
        qtdTarefas: 0,
        tarefas: []
    };
    
    idLista=idLista+1;
    listaDeListas.push(listaAux);


    
    //Salva o texto do html a ser inserido (Nesse caso o html das listas)
    const text = 
    `<div class="lista" id="${listaDeListas[idLista-1].id}">      
        <div class="lista-header">
            <h2 class="lista-nome">Nome da lista</h2>
            <img src="./images/more.svg" alt="more">
        </div>
        <div class="lista-tarefas">
            <div class="tarefa">
                <div>                  
                    <span class="tarefa-titulo"></span>
                </div>
                <input id="descricaoTarefa" class="inputTarefa" type="text" placeholder="Adicione uma tarefa">
              
            </div>
            <span class="tarefa"></span>
    </div>`

    
    
    const position = "afterbegin"; //Paramêtro para inserir a lista após do seu primeiro filho
    lists.insertAdjacentHTML(position,text); //Metodo para inserção do html da nova lista


    adicionaTarefa();

//Esse trecho é parte da implementação de remoção de tarefas, ainda não esta pronto
/*    
    const lixo = document.getElementById("lixo");
    
    //Implementação da remoção de tarefas dentro da lista
    //Por enquanto precisa ficar dentro dessa função caso contrário
    //o html da lata de lixo ainda não existiria(Assim como a própria lista)
    lixo.addEventListener('click',function(){
        lixo.parentNode.parentNode.removeChild(lixo.parentNode);    
     })

*/



}

//Adiciona um texto de tarefa a lista
function adicionaTarefa(){ 

    //Pegando o input tarefa se não toda vez que enter for apertado (mesmo que não esteja clicado no input)
    let inputTarefa = document.getElementById("descricaoTarefa");

        //Verifica se o enter foi apertado e adiciona a tarefa (Somente quando se esta com a barra clicada)
        inputTarefa.addEventListener("keyup",function(event){

                let inputTarefa = document.getElementById("descricaoTarefa");

                //Pega o texto digitado no input
                const descricaoTarefa = event.target.value;

                if(event.key === "Enter"){
                    
                    if(descricaoTarefa){

                        //Faz um texto html com a descrição digitada no input
                        let text = `<h4 class="descricaoTarefa"> ${descricaoTarefa}</h4>`
                        console.log(text);

                        const position = "beforebegin"; //Paramêtro para inserir a lista antes do seu primeiro filho             
                        event.target.parentNode.insertAdjacentHTML(position,text); //Injeta html antes do nó pai do input
                        event.target.value=""; //Deleta o texto após apertar enter
                        

                        //Esse trecho são alguns testes pra separar os htmls com id's diferentes 
                        console.log(event.target.parentNode.parentNode.parentNode.id); 

                        let idDalistaAux = event.target.parentNode.parentNode.parentNode.id;

                        let tarefaAux = {
                            idTarefa : listaDeListas[idDalistaAux].qtdTarefas,
                            descricao : descricaoTarefa
                        };

                        listaDeListas[idDalistaAux].qtdTarefas+=1;
                        listaDeListas[idDalistaAux].tarefas.push(tarefaAux);
                        console.log(listaDeListas[idDalistaAux].tarefas[0].idTarefa);
                                                                                                
                    }
                }
        });
     

}





