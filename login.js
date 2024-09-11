function irParaCadastro() {
    document.location.href = './cadastro.html'
  }

  function login() {
      const name = document.getElementById('name').value;
      const password = document.getElementById('password').value;
      if(name && password){
        const obj = {
          name: name,
          password: password
      };

      const login = JSON.parse(localStorage.getItem('login'));

      if (obj.name === login.name && obj.password === login.password) {
        alert('Pode Entrar');
        document.location.href = './desafio-extra.html'
      } else {
        alert('Usuário ou senha inválidos');
      }
      } else{
        alert("Preencha suas informações")
      }
  }