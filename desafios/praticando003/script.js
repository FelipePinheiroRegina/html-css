let hamburguer = window.document.getElementById('hamb')
let itens = window.document.getElementById('itens')
let treino = window.document.getElementById('treino')

function menu(){
    if(itens.style.display == 'none'){
        itens.style.display = 'block'
        treino.style.display = 'block'
    }else{
        itens.style.display = 'none'
        treino.style.display = 'none'
    }
}

function mudoutamanho(){
    if(window.innerWidth >= 768){
        hamburguer.style.display = 'none'
        itens.style.display = 'block'
        treino.style.display = 'block'
    }else{
        hamburguer.style.display = 'block'
       
    }
}

