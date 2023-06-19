function tema() {
    const bori = document.body;
    const tema = bori.getAttribute('data-bs-theme');
    if (tema == 'dark') {
        bori.setAttribute('data-bs-theme', 'light')
    } else {
        bori.setAttribute('data-bs-theme', 'dark')

    }
};
function tabuenter(tecra) {

    if (tecra.key == 'Enter' && !document.getElementById('tabuela').classList.contains('show') && tecra.srcElement.value) {
        document.getElementById('btntabuela').click()
        tabuada(tecra.srcElement)
    } else if (tecra.key == 'Enter') {
        tabuada(tecra.srcElement)
    }

    if ((tecra.key >= 0 || tecra.key == '.') && !(tecra.key == " ")) {
        console.log('entrou')
        if (tecra.key >= 0) {
            return true
        }
        if (tecra.key == '.') {
            if (tecra.srcElement.value.includes('.') || tecra.srcElement.value == "") {
                return false
            } else {
                return true
            }
        }
    } else {
        return false
    }
}

function tabuada(input) {
    const num = parseFloat(input.value)
    const listaresul = document.getElementsByClassName("produto");
    const listamultiplicar = document.getElementsByClassName("multiplicar")
    if (num && num != 0) {
        for (let i = 0; i < 10; i++) {
            const multiplicar = listamultiplicar[i];
            const produto = listaresul[i];
            multiplicar.innerHTML = num
            produto.innerHTML = num * (i + 1)
            input.setAttribute('placeholder', input.value)
        }
    } else {
        for (let i = 0; i < 10; i++) {
            const multiplicar = listamultiplicar[i];
            const produto = listaresul[i];
            multiplicar.innerHTML = "-"
            produto.innerHTML = "-"
            input.setAttribute('placeholder', 'digite um número real')
        }
        if (document.getElementById('tabuela').classList.contains('show')) {
            document.getElementById('btntabuela').click()

        }
    }
    input.focus()
    input.value = ""
}

function parenter(tecra) {
    valo = tecra.srcElement.value
    colapso = document.getElementById('tapares')
    if (tecra.key == 'Enter' && !colapso.classList.contains('show') && !(valo == 0)) {
        pares(tecra.srcElement)
        document.getElementById('btntapares').click()
    } else if (tecra.key == 'Enter' && valo == 0 && colapso.classList.contains('show')) {
        document.getElementById('btntapares').click()
        tecra.srcElement.focus()
        tecra.srcElement.value = ""
    } else if (tecra.key == 'Enter') {
        pares(tecra.srcElement)
    }

    if ((tecra.key >= 0) && !(tecra.key == " ")) {
        console.log('entrou')
        if (tecra.key >= 0) {
            return true
        }
    } else {
        return false
    }
}
// input id pares
// btntapares
function pares(input) {
    const num = parseInt(input.value)
    const lista = document.getElementById('lispar')
    lista.innerHTML = ""
    for (var i = 2; i <= num; i += 2) {
        var li = document.createElement('li');
        li.textContent = i;
        lista.appendChild(li);
    }
    input.focus()
    input.value = ""
}