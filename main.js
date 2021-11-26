function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play()
}

const listaDeTeclas = document.querySelectorAll('.tecla')

for(i=0;i<listaDeTeclas.length;i++){
    listaDeTeclas[i].onclick = tocaSom
}


/*
document.onkeydown = teclado

function teclado(e){
    if(e.keyCode == XX){
        tocaSom()
    }
}
*/

