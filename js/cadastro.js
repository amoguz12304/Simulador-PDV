/*  carregar dados do local */
function carregarTabela() {
    //pegando o tbody e limpando da tabela
    const tabela = document.getElementById('dadosProdutos');
    tabela.innerHTML = '';

    //Obtendo os dados do produtos de local storage
    const dados = JSON.parse( localStorage.getItem('produtos') ) || [];

    //console.table(dados);

    // inserindo os dados obtidos da tabela
    for (let i = 0; i < dados.length; i++) {
       tabela.innerHTML +=
       `<tr>
            <td>${dados[i].nome}</td>
            <td>${dados[i].estoque}</td>
            <td>${dados[i].precoUnitario.toFixed(2)}</td>
            <td>${dados[i].categoria}</td>
            <td>
            <i class="fa-solid fa-trash apagar" onclick="apagarProduto(${dados[i].id});">
            <i/>
           
            </td>
       </tr>
       `;
    }
}

/* Carregando os dados para a tabela */
carregarTabela();

/* funçao para obter o proximo id de produto a ser salvo*/
function proximoId() {
    const dados = JSON.parse( localStorage.getItem('produtos') ) || [];
    dados.reverse();
    return dados[0].id + 1;
}

// salvar os dados do formulario no local storage
function salvarDados() {
    //validar
    if (
        frmProd.inNome.value.trim() == '' ||
        parseInt(frmProd.inEstoque.value) < 1 ||
        parseFloat(frmProd.inPreco.value) < 0.01
    )
    return false;

    //Pegando os dados do local storage
    const produtos = JSON.parse( localStorage.getItem('produtos') ) || [];

    //Criando um novo objeto
    let prod = {
        id: proximoId(),
        nome: frmProd.inNome.value,
        estoque: parseInt(frmProd.inEstoque.value),
        precoUnitario: parseFloat(frmProd.inPreco.value),
        categoria: frmProd.inCategoria.value
    }

    //Adicionando o novo produto ao array
    produtos.push(prod);

    //Salvando o array atualizado no local storage
    localStorage.setItem('produtos', JSON.stringify(produtos));
}

// apagando produtos da tela e do local storage
function apagarProduto(id) {
    //obter os dados de produto
    let produtos = JSON.parse( localStorage.getItem('produtos') ) || [];

    // Confirmar antes de excluir
    const item = produtos.filter(produto => produto.id == id);
    console.log(item);

    const confirmacao =
        confirm(`Tem certeza que deseja excluir ${item[0].nome}`);

    if (!confirmacao)
    return false;

    //obtendo todos os produtos, menos o excluído
    produtos = produtos.filter(produto => produto.id != id);

    //SALVANDO no local storage
    localStorage.setItem('produtos', JSON.stringify(produtos));
   
    //recarregar os dados na tabela
    carregarTabela();

}






