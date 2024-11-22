const user = document.getElementById('user');
const pass = document.getElementById('pass');

const btn_entrar = document.getElementById('btn_entrar');
btn_entrar.addEventListener('click', ()=>{
   
    if(user.value === 'admin' && pass.value === 'admin'){
        
        localStorage.setItem('user',JSON.stringify({user:"admin", pass:"admin"}))
        location.href = '/html/lobby.html'
    }else{
        alert("Credenciales incorrectas")
        pass.value = '';
        user.value = '';
    }
})
