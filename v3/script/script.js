
function addlista(){
    const carrinho = []
    const armazem = document.getElementById('armazem')

    
    const nome = document.getElementById("nome")


    let produto = {
        nome: nome.value
    }

    carrinho.push(produto)
    armazem.innerHTML += `<strong>${nome.value}</strong>, e vale um total de  <input class='valor_do _produto'> <br>`
    
    console.log(carrinho)

}

function add(){
    entradaPesquisa = document.querySelector("#search .input input");
    nomeProduto = document.querySelector("#resultados .informacoes .nome_produto h2");
    resultado = document.querySelector("#resultados");

    nomeProduto.innerHTML = `${entradaPesquisa.value}`
    resultado.style.display = "flex"



}
