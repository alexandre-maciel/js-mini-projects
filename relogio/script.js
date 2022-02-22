function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`
    
    if(hora >= 0 && hora < 12){
        img.src = './img/morning.png'
        document.body.style.background='#e6d0b8'
    } else if (hora >= 12 && hora <= 18) {
        img.src = './img/evening.png'
        document.body.style.background='#fba736'
    } else {
        img.src = './img/night.png'
        document.body.style.background='#294e7b'
    }
}

// Função para formatar 1 em 01
const zeroFill = n => {
    return ('0' + n).slice(-2);
}

// Cria intervalo
const interval = setInterval(() => {
    // Pega o horário atual
    const now = new Date();

    // Formata a data conforme dd/mm/aaaa hh:ii:ss
    const dataHora = zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) + '/' + now.getFullYear() + ' ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());

    // Exibe na tela usando a div#data-hora
    document.getElementById('data-hora').innerHTML = dataHora;
}, 1000);
