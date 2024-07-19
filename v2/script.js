const carrinho = []
const nome = document.getElementById("nome")
let valor = document.getElementById("valor")


function addlista(){
    const armazem = document.getElementById('armazem')
    
    let produto = {
        nome: nome.value,
        valor: valor.value,
    }
    
    carrinho.push(produto)
    
    armazem.innerHTML += `<strong>${nome.value}</strong>, e vale um total de  ${valor.value}, levando ${contador}<br> dando um total a pagar de ${valor.value * contador}`
    
    console.log(carrinho)

}       

let contador = 0;

function aumentar() {
    contador++;
    atualizaçãoValor();
}

function diminuir() {
    contador--;
    atualizaçãoValor();
}

function atualizaçãoValor() {
    document.getElementById('quantidade').textContent = contador;
}


