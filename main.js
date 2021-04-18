function validate() {
    var username = document.getElementById("username-field").value;
    var password = document.getElementById("password-field").value;
    
    if (username == "") {
        alert("Please enter the username.");
        return false;
    }
    if (password == "") {
        alert("Please enter the password.");
        return false;
    }
    alert('Login successful');
                
} 