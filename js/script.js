function tema() {
    const bori = document.body;
    const tema = bori.getAttribute('data-bs-theme');
    if (tema == 'dark') {
        bori.setAttribute('data-bs-theme', 'light')
    } else {
        bori.setAttribute('data-bs-theme', 'dark')

    }
};
function tabuenter(tecra){
    
    if (tecra.key == 'Enter' && !document.getElementById('tabuela').classList.contains('show') && tecra.srcElement.value) {
        document.getElementById('btntabuela').click()
        tabuada()
    } else if (tecra.key == 'Enter') {
        tabuada()
    }
    
    if ((tecra.key >=0 || tecra.key =='.') && !(tecra.key==" ")){
        console.log('entrou')
        if (tecra.key >= 0) {
            return true
        }
        if(tecra.key == '.'){
            if (tecra.srcElement.value.includes('.')|| tecra.srcElement.value=="") {
                return false
            } else{
                return true
            }
        }
    } else {
            return false
    }
}

function tabuada() {
    const input = document.getElementById("tabuada")
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