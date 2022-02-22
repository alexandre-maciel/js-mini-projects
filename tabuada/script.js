function tabuada(){
    let num = document.getElementById('num')
    let tab = document.getElementById('tab')

    if(num.value.length == 0){
        alert('Erro: digite um número')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML=''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${num.value} x ${c} = ${num.value*c}`
            tab.appendChild(item)
            tab.value = `tab${c}`
            c++
        }
    }
}




/*
function tabuada(){
    let num = document.getElementById('num')
    let res = document.getElementById('res')

    if (num.value.length <= 0){
        alert('erro')
    } else {
        let m0 = num.value * 0
        let m1 = num.value * 1
        let m2 = num.value * 2
        let m3 = num.value * 3
        let m4 = num.value * 4
        let m5 = num.value * 5
        let m6 = num.value * 6
        let m7 = num.value * 7
        let m8 = num.value * 8
        let m9 = num.value * 9

        res.textContent = `
        ${num.value}x0=${m0} <br> 
        ${num.value}x1=${m1} <br> 
        ${num.value}x2=${m2} <br> 
        ${num.value}x3=${m3} <br> 
        ${num.value}x4=${m4} <br> 
        ${num.value}x5=${m5} <br> 
        ${num.value}x6=${m6} <br> 
        ${num.value}x7=${m7} <br> 
        ${num.value}x8=${m8} <br> 
        ${num.value}x9=${m9} <br>
        `
    }
}
*/