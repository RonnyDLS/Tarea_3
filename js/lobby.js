
if(!localStorage.getItem('user')){
    location.href = '/html/index.html'
}

const salir = document.getElementById('salir');
salir.addEventListener('click', ()=>{ 
    localStorage.clear()
    location.href = '/html/index.html'
})