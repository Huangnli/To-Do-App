const form = document.getElementById('form');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    validacao();
});

function validacao(){
    alert(form.username.value); //só pra teste

}
