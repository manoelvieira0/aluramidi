function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio)
    if(elemento === null){
        alert('Elemento não encontrado')
    }

    if(elemento != null){
        if(elemento.localName === 'audio'){
            elemento.play()
        }
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla')

for (i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i]
    const instrumento = tecla.classList[1]

    //Template String
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function () {
        tocaSom(idAudio)
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}


/*
document.onkeydown = teclado

function teclado(e){
    if(e.keyCode == XX){
        tocaSom()
    }
}
*/

