const formC = document.getElementById('formCadastro');

formC.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    validacao();
});


function validacao(){
    alert(formC.username.value); //só pra teste

}
