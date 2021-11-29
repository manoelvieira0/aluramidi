function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play()
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

    tecla.onkeydown = function(){
        tecla.classList.add('ativa')
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

