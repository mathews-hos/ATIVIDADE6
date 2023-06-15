function tema() {
    const bori = document.body;
    const tema = bori.getAttribute('data-bs-theme');
    if (tema == 'dark') {
        bori.setAttribute('data-bs-theme', 'light')
    } else {
        bori.setAttribute('data-bs-theme', 'dark')

    }
};
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
        }
    } else {
        for (let i = 0; i < 10; i++) {
            const multiplicar = listamultiplicar[i];
            const produto = listaresul[i];
            multiplicar.innerHTML = "-"
            produto.innerHTML = "-"
        }
    }
    input.focus()
    input.value = ""
}