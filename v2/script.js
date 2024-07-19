const carrinho = []
const nome = document.getElementById("nome")
let valor = document.getElementById("valor")

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

function addlista(){
    const armazem = document.getElementById('armazem')
    
    let produto = {
        nome: nome.value,
        valor: valor.value,
    }
    
    carrinho.push(produto)
    
    armazem.innerHTML += `<strong>${nome.value}</strong>, e vale um total de  ${valor.value}, levando ${contador} `
    
    console.log(carrinho)

    
    
    function calculoValor(a,b){
    
        let total =  (valor * contador)
    }
    armazem.innerHTML += `O valor total a pagar é ${total.value}`
}       


