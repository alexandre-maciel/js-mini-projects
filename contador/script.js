function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.querySelector('div#res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        res.innerHTML = 'Impossível contar!'
        // alert('ERRO: faltam dados')
    } else {
        res.innerHTML = 'Contando: <br> '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            alert('Passo inválido Considerando Passo 1')
            p = 1
        }
        if(i < f){
        for(let c = i; c <= f; c += p){
            // contagem crescente
            res.innerHTML += `<i class="fas fa-hand-point-right"></i> ${c} `
            }
        } else {
            // contagem regressiva
            for(let c = i; c >= f; c -= p){
            res.innerHTML += `<i class="fas fa-hand-point-right"></i> ${c} `
            }
        }
        res.innerHTML += `<i class="fas fa-flag"></i>`
    }
}