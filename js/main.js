//O propósito dessa lista é guardar os objetos correspondente as listas
//isso auxilia nas funções onde precisamos saber os id's,nomes entre outras informações
var listaDeListas = [];  


var lists = document.getElementById("lists");


function criaLista(){ //Função que cria novas listas

    //Guardo informação das listas criadas para uso futuro
    let listaAux = { 
        //Utilizei o tamanho da lista ao invés de um contador, porque como pode acontecer de a lista deletar
        //Os id's poderiam ficar bagunçados
        id: listaDeListas.length,
        nome: "Lista "+listaDeListas.length,
        isActive: true,  
        qtdTarefas: 0, 
        menuClicado: false,          //Utilizado na função de menu
        renomeiaClicado: false,      //Utilizado na função de renomear
        tarefas: []
    };
    
    listaDeListas.push(listaAux);       //Insere a lista na lista de listas

    //Salva o texto do html a ser inserido (Nesse caso o html das listas)
    let text = 
    `
    <div class="lista" id="${listaDeListas[listaDeListas.length-1].id}">      
        <div class="lista-header">
            <h2 class="lista-nome">Nome da lista</h2>
            <input class="tresPontinho" id="tresPontinho${listaDeListas[listaDeListas.length-1].id}" onclick="tresPontinho(this.id)" type="image"  src="./images/more.svg" alt="more">
        </div>
        <div class="lista-tarefas">
            <div class="tarefa">
                <div>                  
                    <span class="tarefa-titulo"></span>
                </div>
                <input id="descricaoTarefa" class="inputTarefa" type="text" placeholder="+ Adicione uma tarefa">
                
            </div>
            <span class="tarefa"></span>
        </div>    
    </div>
    `
 
    
    let position = "afterbegin"; //Paramêtro para inserir a lista dentro do elemento html, mas antes do primeiro filho
     
    lists.insertAdjacentHTML(position,text); //Metodo para inserção do html da nova lista
    
    adicionaTarefa(); //Chamo a função adicionaTarefa(); para ligar o listener que seria a barra onde digitamos o nome da tarefa
     

}

//Adiciona um texto de tarefa a lista
function adicionaTarefa(){ 

    //Pegando o input tarefa se não toda vez que enter for apertado (mesmo que não esteja clicado no input)
    let inputTarefa = document.getElementById("descricaoTarefa");

        //Verifica se o enter foi apertado e adiciona a tarefa (Somente quando se esta com a barra clicada)
        inputTarefa.addEventListener("keyup",function(event){

                let inputTarefa = document.getElementById("descricaoTarefa");

                //Pega o texto digitado no input
                let descricaoTarefa = event.target.value;

                if(event.key === "Enter"){
                    
                    if(descricaoTarefa){
                           
                        //Como o event corresponde ao input de adicione uma tarefa, precisamos
                        //acessar os pais pra chegar na divisão da lista
                        let idDalistaAux = event.target.parentNode.parentNode.parentNode.id;
            
                        let tarefaAux = {
                            idTarefa : listaDeListas[idDalistaAux].qtdTarefas,
                            descricao : descricaoTarefa
                        };

                        //Atualizamos algumas informações da lista
                        listaDeListas[idDalistaAux].qtdTarefas+=1;
                        listaDeListas[idDalistaAux].tarefas.push(tarefaAux);

                                                                                                                                                     
                        //Html da tarefa digitada a ser inserido
                        let text = `
                        <div>
                            <img id="lixo" class="lixeira" src="./images/thrash.svg" alt="thrash">
                            <input type="checkbox" class="checkbox" id="checkbox${listaDeListas[idDalistaAux].qtdTarefas-1}" onclick="checkTarefa(this.id)" >
                            <h4 id="${listaDeListas[idDalistaAux].qtdTarefas-1}" class="textoTarefa">${descricaoTarefa}</h4>                           
                        </div>    
                        `                  

                        let position = "beforebegin"; //Paramêtro para inserir a lista antes do elemento            
                   
                        event.target.parentNode.insertAdjacentHTML(position,text); //Injeta html antes do nó pai do input
                        event.target.value=""; //Deleta o texto após apertar enter
                        

                        //Chamamos o deletaTarefa para ligar o listener da caixa de lixo
                        deletaTarefa();
                                                                                                
                    }
                }
        });
     
}


function deletaTarefa(){

    document.addEventListener('click',function(event){
               
        if(event.target.id==="lixo" && event.target.parentNode.parentNode!=null){
           
            let vetorFilhos = event.target.parentNode.children; //pega os filhos do nó pai, retorna um vetor
            let listaClicadaNoEvento = event.target.parentNode.parentNode.parentNode.id; //Pega o Id da lista clicada

            console.log(vetorFilhos[2]);

            //Remove a tarefa da lista, splice(Indice que começa a remover elementos, quantidade de elementos pra serem removidos)
            //vetorFilhos[2] porque o texto da tarefa é o terceiro filho 
            listaDeListas[listaClicadaNoEvento].tarefas.splice(vetorFilhos[2].id,1);

            //Aqui remove o html
            event.target.parentNode.parentNode.removeChild(event.target.parentNode);
                      
        }        
     });

}



function tresPontinho(idTarg){

  

    let docPontinhos = document.getElementById(idTarg); //Documento correspondente ao menu dos três pontinhos

    let objListaClicada= docPontinhos.parentNode.parentNode;  //Documento da lista clicada

    console.log(docPontinhos.parentNode.parentNode);

    let vetorFilhosListaClicada = objListaClicada.children;  

    console.log(objListaClicada); //lista obj
    


    //Isso é um tratamento só poder fechar quando aberto, e o contrário.
    if(listaDeListas[objListaClicada.id].menuClicado===true){
        listaDeListas[objListaClicada.id].menuClicado=false;
    }else{
        listaDeListas[objListaClicada.id].menuClicado=true;
    }

    if(listaDeListas[objListaClicada.id].menuClicado===true){
        
        //Html do Menu
        let text = `<div class="caixaMenu" id="caixaMenu">
            <input type="image" class="canetaMenu" id="canetaMenu${objListaClicada.id}" onclick="renomeiaLista(this.id)" src="./images/caneta.svg">
            <button onclick="renomeiaLista(this.id)" class="menuTrocaNome" id="menuTrocaNome${objListaClicada.id}">Renomear lista</button>
            <input type="image" id="lixoMenu${objListaClicada.id}" onclick="deletaLista(this.id)" class="lixeiraMenu" src="./images/thrash.svg">
            <button id="menuApagaLista${objListaClicada.id}"  onclick="deletaLista(this.id)" class="menuApagaLista" >Apagar lista</button>
        </div>`


        let position="afterend"; //Insere o html do menu após o elemento dos pontinhos

        docPontinhos.parentNode.insertAdjacentHTML(position,text);

    }else{
        //Nesse else tratamos quando apertamos nos tres pontinhos e o menu fecha

        //Esse for corre o vetor de filhos do elemento lista
        //Quando o elemento filho for a caixa de menu, ele remove o mesmo.
        for(let i = 0; i < vetorFilhosListaClicada.length ; i++){
            if(vetorFilhosListaClicada[i].className==="caixaMenu"){
                objListaClicada.removeChild(vetorFilhosListaClicada[i]);
            }
        }


    }

    

}

function renomeiaLista(idTarg){

    //Elemento do botão de renomeiar
    let elementoAux = document.getElementById(idTarg);   

    let vetorFilhosListaClicada = elementoAux.parentNode.parentNode.children;
  



    //tratamento pra não criar (digite um nome) infinitos
    if(listaDeListas[elementoAux.parentNode.parentNode.id].renomeiaClicado===false){
        
        //tratamento pra não criar (digite um nome) infinitos
        listaDeListas[elementoAux.parentNode.parentNode.id].renomeiaClicado=true;
    
        //html do input pra digitar um nome novo
        let text = `<input id="insiraTarefa" class="insereTarefa" type="text" placeholder="Digite um nome">`;


        //Remove texto do header, é o filho da posição 1, nas listas
        vetorFilhosListaClicada[0].removeChild(vetorFilhosListaClicada[0].childNodes[1]);

        //Insere input no header
        elementoAux.parentNode.parentNode.children[0].insertAdjacentHTML("afterbegin",text);





        //Pegamos agora o elemento do input onde vamos digitar o novo nome da lista
        let inputTemporario = elementoAux.parentNode.parentNode.children[0].children[0];

        //Vamos guardar a lista Pai do input
        let inputPai = inputTemporario.parentNode.parentNode;

        console.log(inputTemporario);


        //Adicionamos um listener a esse elemento e checamos se enter foi apertado
        inputTemporario.addEventListener("keyup",function(event){

            //Pega o texto digitado no input
            let nomeNovo = event.target.value;

            if(event.key === "Enter"){

                //tratamento pra não criar (digite um nome) infinitos
                listaDeListas[inputPai.id].renomeiaClicado=false;
                
                if(nomeNovo){

                    //Faz um texto html com a descrição digitada no input                                                                                                                                           
                    let text = `
                        <h2 class="nomeNovo" >${nomeNovo}</h2>   
                    `
                    
                    let position = "afterbegin"; //Paramêtro para inserir a lista antes do seu primeiro filho             
                
                    event.target.parentNode.insertAdjacentHTML(position,text); 
                                
                    //Ajuste do nome da lista
                    listaDeListas[inputPai.id].nome = nomeNovo;
                    
                    inputTemporario.parentNode.removeChild(inputTemporario);  //O input deleta a si mesmo
                    
                    

                    
                                                                                            
                }
            }
        });

    }


}


function deletaLista(idTarg) {

    let elementoAux = document.getElementById(idTarg);
    let listaDeletada = elementoAux.parentNode.parentNode;

    let paiLista = listaDeletada.parentNode;
    console.log(paiLista)

    //Remoção do html
    listaDeletada.parentNode.removeChild(listaDeletada);

    //Essa lista dos filhos foi pega pois é necessário ajustar os id's dos html's após a remoção
    let listaAuxiliarDeListas = paiLista.children;

    //Remoção da lista de listas
    listaDeListas.splice(listaDeletada.id, 1);


    //Organiza os indices da listas
    for (let i = listaAuxiliarDeListas.length-1; i >=0; i--) {

        listaAuxiliarDeListas[i].id = (listaAuxiliarDeListas.length-1)-i;
        listaDeListas[i].id = (listaAuxiliarDeListas.length-1)-i;
    }
    console.log(listaDeListas)

    //Organiza os id's dos 3 pontihos
    for(let i = listaAuxiliarDeListas.length-1; i >=0; i--){
        console.log(listaAuxiliarDeListas[i].children[0].children[1].id );
        listaAuxiliarDeListas[i].children[0].children[1].id = `tresPontinho${(listaAuxiliarDeListas.length-1)-i}`;
        console.log(listaAuxiliarDeListas[i].children[0].children[1].id );
    }


}


function checkTarefa(idTarg){

    let checkBox = document.getElementById(idTarg); //Pegamos o elemento da checkbox

    let paiCheckBox = checkBox.parentNode;  //Pegamos o elemento pai do checkbox

    let textoTarefa = paiCheckBox.children[2]; //O terceiro filho é o elemento do texto da tarefa


    //Adiciona um estilo para a tarefa completada
    if(checkBox.checked){
        textoTarefa.style.textDecoration = "line-through";
    }else{
        textoTarefa.style.textDecoration = "none";
    }
        

}


function buscaTarefa(idTarg){

    let barraBusca = document.getElementById(idTarg); //Pegamos o elemento da barra de busca

    //Adicionamos um listener e verificamos se enter vai ser apertado
    barraBusca.addEventListener("keyup",function(event){

        if(event.key==="Enter"){

           

            //Corremos a nossa lista de listas, para assim verificar os 
            //elementos que não correspondem com o nome digitado no input
            //Se não puxamos o elemento da lista pelo id, e escondemos ele
            //com o display="none", ficando somente visivel os elementos com o nome correspondente ao digitado
            for(let i = 0 ; i < listaDeListas.length ; i++){

                if(listaDeListas[i].nome!==event.target.value){

                    let listaEscondida = document.getElementById(listaDeListas[i].id);
                    
                    if(listaEscondida!==null)
                        listaEscondida.style.display="none";                    
                }

            }

            //Aqui nesse outro for ele verifica se não tem nada digitado na barra, assim fazendo todos os elementos
            //aparecerem novamente
            for(let i = 0 ; i < listaDeListas.length ; i++){

                if(event.target.value===""){ 
                    let listaEscondida = document.getElementById(listaDeListas[i].id);

                    if(listaEscondida!==null)
                        listaEscondida.style.display="block";  
                }

             }

        }


    });





}
