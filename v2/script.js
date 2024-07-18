function addlista(){
    const carrinho = []
    const armazem = document.getElementById('armazem')

    
    const nome = document.getElementById("nome")
    const valor = document.getElementById("valor")


    let produto = {
        nome: nome.value,
        valor: valor.value,
    }

    carrinho.push(produto)
    armazem.innerHTML += `<strong>${nome.value}</strong>, e vale um total de  <input type="namber" class='valor_do _produto'> ${valor.value} <br>`
    
    console.log(carrinho)

}

