function irParaLogin() {
    document.location.href = './login.html'
}

function cadastrar() {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    if(name && password){
        let regex = /^(?=(?:.*?[A-Z]){0})(?=(?:.*?[0-9]){1})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){0})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/;
        if(password.length < 6){
            alert("a senha deve conter no minimo 6 digitos");
            return;
        }
        if(!regex.exec(password)){
            alert("A senha deve conter no mínimo 1 número e 1 letra");
            return;
        }
        else {
            const obj = {
            name: name,
            password: password
            };
            localStorage.setItem('login', JSON.stringify(obj));
            alert('Usuário cadastrado')
            document.getElementById('name').value = '';
            document.getElementById('password').value = '';
        }
    } else {
        alert("preencha as informações");
    }
}