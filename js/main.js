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
        menuClicado: false,
        renomeiaClicado: false,
        tarefas: []
    };
    
    idLista=idLista+1;
    listaDeListas.push(listaAux);


    
    //Salva o texto do html a ser inserido (Nesse caso o html das listas)
    const text = 
    `
    <div class="lista" id="${listaDeListas[idLista-1].id}">      
        <div class="lista-header">
            <h2 class="lista-nome">Nome da lista</h2>
            <input class="tresPontinho" id="tresPontinho${listaDeListas[idLista-1].id}" onclick="tresPontinho(this.id)" type="image"  src="./images/more.svg" alt="more">
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

    
    
    const position = "afterbegin"; //Paramêtro para inserir a lista após do seu primeiro filho
    
    
    lists.insertAdjacentHTML(position,text); //Metodo para inserção do html da nova lista



    adicionaTarefa();
    
   

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
                       
                       
                       
                        let idDalistaAux = event.target.parentNode.parentNode.parentNode.id;

                        console.log(event.target.parentNode.parentNode.parentNode.id);


                        let tarefaAux = {
                            idTarefa : listaDeListas[idDalistaAux].qtdTarefas,
                            descricao : descricaoTarefa
                        };

                        listaDeListas[idDalistaAux].qtdTarefas+=1;
                        listaDeListas[idDalistaAux].tarefas.push(tarefaAux);
                        console.log(listaDeListas[idDalistaAux].tarefas[0].idTarefa);
                                                                                                                               
                       
                        let text = `
                        <div>
                            <img id="lixo" class="lixeira" src="./images/thrash.svg" alt="thrash">
                            <input type="checkbox" class="checkbox" id="checkbox">
                            <h4 id="${listaDeListas[idDalistaAux].qtdTarefas-1}" class="textoTarefa">${descricaoTarefa}</h4>                           
                        </div>    
                        `
                        console.log(text);

                        const position = "beforebegin"; //Paramêtro para inserir a lista antes do seu primeiro filho             
                   
                        event.target.parentNode.insertAdjacentHTML(position,text); //Injeta html antes do nó pai do input
                        event.target.value=""; //Deleta o texto após apertar enter
                        

                        //Esse trecho são alguns testes pra separar os htmls com id's diferentes 
                        console.log(event.target.parentNode.parentNode.parentNode.id); 

                        deletaTarefa();
                                                                                                
                    }
                }
        });
     
}


function deletaTarefa(){

    document.addEventListener('click',function(event){
               
        if(event.target.id==="lixo" && event.target.parentNode.parentNode!=null){
           
            var vetorFilhos = event.target.parentNode.children; //pega o id da tarefa
            var listaClicadaNoEvento = event.target.parentNode.parentNode.parentNode.id; //Pega o Id da lista clicada

            //Vetorfilhos está no 2 porque é o que corresponde a tarefa descrita no html
            //Ou seja é o terceiro filho 

            //esse console log serve pra mostrar que a tarefa especifica da lista clicada foi removida
            //do campo de tarefas da lista
            //antes
        

            //Remove a tarefa da lista, splice(Indice que começa a remover elementos, quantidade de elementos pra serem removidos)
            listaDeListas[listaClicadaNoEvento].tarefas.splice(vetorFilhos[2].id,1);

            //depois
            console.log(listaDeListas[listaClicadaNoEvento].tarefas[vetorFilhos[2].id]);

            //Aqui remove o html
            event.target.parentNode.parentNode.removeChild(event.target.parentNode);
                      
        }        
     });

}



function tresPontinho(idTarg){

  

    var docPontinhos = document.getElementById(idTarg);
    var objListaClicada= docPontinhos.parentNode.parentNode;

    console.log(docPontinhos.parentNode.parentNode);

    var vetorFilhosListaClicada = objListaClicada.children;

    console.log(objListaClicada); //lista obj
    

    if(listaDeListas[objListaClicada.id].menuClicado===true){
        listaDeListas[objListaClicada.id].menuClicado=false;
    }else{
        listaDeListas[objListaClicada.id].menuClicado=true;
    }

    if(listaDeListas[objListaClicada.id].menuClicado===true){
        
        /*let text = `
        <div class="caixaMenu" id="caixaMenu">
            <img id="canetaMenu" class="lixeira" src="./images/caneta.svg">
            <h4 id="menuTrocaNome">Renomear lista</h4>
            <img id="lixoMenu" class="lixeiraMenu" src="./images/thrash.svg">
            <h4 id="menuApagaLista">Apagar lista</h4>                           
        </div>    
        `
        */

        let text = `<div class="caixaMenu" id="caixaMenu">
            <input type="image" class="canetaMenu" id="canetaMenu${objListaClicada.id}" onclick="renomeiaLista(this.id)" src="./images/caneta.svg">
            <button onclick="renomeiaLista(this.id)" class="menuTrocaNome" id="menuTrocaNome${objListaClicada.id}">Renomear lista</button>
            <input type="image" id="lixoMenu${objListaClicada.id}" onclick="deletaLista(this.id)" class="lixeiraMenu" src="./images/thrash.svg">
            <button id="menuApagaLista${objListaClicada.id}"  onclick="deletaLista(this.id)" class="menuApagaLista" >Apagar lista</button>
        </div>`


        var position="afterend"; //tem que ser beforeend pro menu ficar dentro do html da lista, se não a caixa vaza e empurra os outros elementos


        docPontinhos.parentNode.insertAdjacentHTML(position,text);
    }else{


        for(var i = 0; i < vetorFilhosListaClicada.length ; i++){

            

            if(vetorFilhosListaClicada[i].className==="caixaMenu"){
                console.log(objListaClicada.parentNode.parentNode.parentNode);
                console.log(vetorFilhosListaClicada[i]);
                objListaClicada.removeChild(vetorFilhosListaClicada[i]);
            }

        }


    }

    

}

function renomeiaLista(idTarg){

    var elementoAux = document.getElementById(idTarg);
  


    

    var vetorFilhosListaClicada = elementoAux.parentNode.parentNode.children;
    var nomeLista = vetorFilhosListaClicada[0].childNodes[0];



    //tratamento pra não criar (digite um nome) infinitos
    if(listaDeListas[elementoAux.parentNode.parentNode.id].renomeiaClicado===false){
        
        //tratamento pra não criar (digite um nome) infinitos
        listaDeListas[elementoAux.parentNode.parentNode.id].renomeiaClicado=true;
    
        let text = `<input id="insiraTarefa" class="insereTarefa" type="text" placeholder="Digite um nome">`;


        //Remove texto do header
        vetorFilhosListaClicada[0].removeChild(vetorFilhosListaClicada[0].childNodes[1]);

        //Insere input no header
        elementoAux.parentNode.parentNode.children[0].insertAdjacentHTML("afterbegin",text);



        console.log(elementoAux.parentNode.parentNode.children[0].children[0]);

        var inputTemporario = elementoAux.parentNode.parentNode.children[0].children[0];

        inputTemporario.addEventListener("keyup",function(event){

            let inputTarefa = document.getElementById("descricaoTarefa");

            //Pega o texto digitado no input
            const nomeNovo = event.target.value;

            if(event.key === "Enter"){

                //tratamento pra não criar (digite um nome) infinitos
                listaDeListas[elementoAux.parentNode.parentNode.id].renomeiaClicado=false;
                
                if(nomeNovo){

                    //Faz um texto html com a descrição digitada no input                                                                                                                                           
                    let text = `
                        <h2>${nomeNovo}</h2>   
                    `
                    
                    const position = "afterbegin"; //Paramêtro para inserir a lista antes do seu primeiro filho             
                
                    event.target.parentNode.insertAdjacentHTML(position,text); 
                                
                    
                    listaDeListas[elementoAux.parentNode.parentNode.id].nome = nomeNovo;
                    
                                    
                    inputTemporario.parentNode.removeChild(inputTemporario);  //deleta o elemento
                    
                    

                    
                                                                                            
                }
            }
        });

    }


}


function deletaLista(idTarg){

    var elementoAux = document.getElementById(idTarg);
    var listaDeletada = elementoAux.parentNode.parentNode;
    
    //Essa lista dos filhos foi pega pois é necessário ajustar os id's dos html's após a remoção
    var listaAuxiliarDeListas = elementoAux.parentNode.parentNode.parentNode.children;


    idLista=idLista-1;

    //Remoção da lista de listas
    listaDeListas.splice(listaDeletada.id,1);

    //Remoção do html
    listaDeletada.parentNode.removeChild(listaDeletada);


    //Organiza os indices da listas
    for(var i=0; i<listaAuxiliarDeListas.length; i++){
        listaAuxiliarDeListas[i].id = i;
    }



}



