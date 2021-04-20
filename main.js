const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    validacao();
});

function validacao(){
    alert(password.value); //só pra teste

}
