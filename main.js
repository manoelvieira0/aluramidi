function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play()
}

var teclaPom = document.querySelector('.tecla_pom')

document.onkeydown = teclado

function teclado(e){
    if(e.keyCode == 97){
        tocaSomPom()
    }
}

