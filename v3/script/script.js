function add(){

    entradaPesquisa = document.querySelector("#search .input input");
    nomeProduto = document.querySelector("#resultados .informacoes .nome_produto h2");

    let valor = document.getElementById('preco')

    resultado = document.querySelector("#resultados");

    valor.innerHTML = `<input type="namber" id="valor_input">`
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
