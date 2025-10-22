//----------Adicionando dados fictícios de produtos ao local storage

function gerarProdutosMock(){
    //Verificar se a chave 'produtos' já existe no local storage
    const produtosExistem = localStorage.getItem('produtos')

    //se não existir,adiciona produtos fictícios

    if(!produtosExistem){
        const produtosMock = [
        {
            id: 1,
            nome: "Camiseta Básica Branca",
            estoque: 120,
            precoUnitario:39.99,
            categoria: "Roupas" 
        },

        {
            id: 2,
            nome: "Calça Jeans Slim",
            estoque: 60,
            precoUnitario: 129.90,
            categoria: "Roupas"
        },
        
        {
            id: 3,
            nome: "Tênis Casual Masculino",
            estoque: 60,
            precoUnitario: 199.90,
            categoria: "Calçados"
        },

        {
            id: 4,
            nome: "Jaqueta Corta-Vento Feminina",
            estoque: 25,
            precoUnitario: 179.90,
            categoria: "Roupas"
        },

        {
            id: 5,
            nome: "Mochila Couro Sintético",
            estoque: 55,
            precoUnitario: 129.90,
            categoria: "Acessórios"
        }
 
        ];
        
        //Salvando os dados de produtos no local storage
        localStorage.setItem('produtos', JSON.stringify(produtosMock));
    }
}

//-----------Executando o mock de produtos
gerarProdutosMock();

 