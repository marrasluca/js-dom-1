let lampadina = document.getElementById('lampadina')
let btn = document.getElementById('bottone')


btn.addEventListener('click', function() {
    console.log( lampadina )
    lampadina.src = "./img-5/yellow_lamp.png"
})