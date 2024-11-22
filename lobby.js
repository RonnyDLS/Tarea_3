
if(!localStorage.getItem('user')){
    location.href = '/index.html'
}

const salir = document.getElementById('salir');
salir.addEventListener('click', ()=>{ 
    localStorage.clear()
    location.href = '/index.html'
})