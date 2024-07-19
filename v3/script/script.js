function add(){

    entradaPesquisa = document.querySelector("#search .input input");
    nomeProduto = document.querySelector("#resultados .informacoes .nome_produto h2");

    let valor = document.getElementById('preco')

    resultado = document.querySelector("#resultados");

    valor.innerHTML = ` <input type="number" min="0" step="0.01" placeholder="R$">`
    nomeProduto.innerHTML = `${entradaPesquisa.value}`
    resultado.style.display = "flex"

    
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
