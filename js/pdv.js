/* ----------- função para carregar os produtos -----------*/

function carregarProdutos(){
    //Pegando a div onde os produtos serão inseridos
    const divProd = document.getElementById('resumo-prod-content');
    divProd.innerHTML = '';

    //Pegando os produtos do localStorage
    const dados = JSON.parse(localStorage.getItem('produtos')) || [];

    //Inserindo os dados na resumo-prod-content
    for (let i = 0; i<dados.length; i++)
        divProd.innerHTML += `
    <div class="resumo-prod-item">
    <div>
    <span>${dados[i].nome}</span>
    <span> - R$ ${dados[i].precoUnitario.toFixed(2)}</span>
    </div>
    <div>
        <i class="fa-solid fa-cart-plus icone-acao" onclick="adicionarProduto(${dados[i].id});"></i>
    </div>
    </div>
    `;
}

/* ---------------- Chamando a execução da carregarProdutos() ----------------*/
carregarProdutos();

/* ---------------- Array em memória para controlar dados do cupom ----------------*/
let cupom = [];

/* ---------------- Função para carregar na tela os dados do cupom ----------------*/
function carregarCupom(){
    //Pegando a div onde os dados docupom serão inseridos
    const divCupom = document.getElementById('resumo-cupom-content');
    divCupom.innerHTML = '';

    //Inserindo na tela os dados do array de cupom
    for (let i= 0;i<cupom.length; i++)
         divCupom.innerHTML += `
    <div class="resumo-cupom-item">
    <div class="w25">
    <i class="fa-solid fa-trash icone-acao" onclick="removerProduto(${cupom[i].id});"></i>
    </div>
    <div class="esquerda">
    <span>${cupom[i].quantidade}</span>
    <span>
        ${cupom[i].nome}
        (${cupom[i].preco.toFixed(2)})

    </span>
    </div>
    <div class="w120dir">
    R$ ${cupom[i].total.toFixed(2)}
    </div>
    </div>
    `;
}

/* ---------------- Função para adicionar produto ao cupom ----------------*/

function adicionarProduto(id){
    //Pegar os dados de produtos do localStorage
    let dados = JSON.parse(localStorage.getItem('produtos')) || [];

    //Obter o produto clicado
    let produto = dados.filter(p => p.id == id)[0];

    //Tentando achar o produto
    let produtoExistente = cupom.find(p => p.id == id);

    //Se o produto não existir no cupom, adiciona
    if (!produtoExistente) {
        cupom.push(
            {
                id: produto.id,
                nome: produto.nome,
                preco: produto.precoUnitario,
                quantidade: 1,
                total: produto.precoUnitario * 1
            }
        );
    }

    //Se o produto já existir no cupom, atualizar a quantidade e o total
    else {
        produtoExistente.quantidade++; //recebe +1
        produtoExistente.total =
        produtoExistente.preco * produtoExistente.quantidade;
    }

    //Recarrega na tela os dados do cupom e recalcula os totais
    carregarCupom();

    atualizarTotal();
}

/* ---------------- Função para calcular total das vendas ----------------*/

function calcularTotalVendas(){
    let total = 0;

    for(let i = 0; i < cupom.length; i++)
        total += cupom[i].total;

    return total;
}

/* ---------------- Função para calcular descontos ----------------*/

function calcularDesconto(valor){
    let desconto = 0;

    if(valor => 5000){
     desconto = valor * 10/100;
    }
    else if(valor => 2000){
    desconto = valor * 5/100
    } 
    else if(valor => 1000){
    desconto = 3/100
    }

    return desconto;
}

/* ---------------- Função para atualizar o total ----------------*/

function atualizarTotal(){
    //obtendo os cards para atualizar total
    let tprodutos = document.getElementById('tprodutos');
    let tdescontos = document.getElementById('tdescontos');
    let ttotal = document.getElementById('ttotal');

    //calculando o total

    let totalVendas = calcularTotalVendas();

    let totalDesconto = calcularDesconto(totalVendas);

    let totalFinal = totalVendas - totalDesconto;

    //atualizando os valores nos cards
    tprodutos.innerText = `R$ ${totalVendas.toFixed(2)}`
    tdescontos.innerText = `R$ ${totalDesconto.toFixed(2)}`
    ttotal.innerText = `R$ ${totalFinal.toFixed(2)}`
}

/* ---------------- Função para calcular descontos ----------------*/
function removerProduto(id){
    //remove o produto do cupom
    cupom = cupom.filter(p => p.id != id);
    //recarrega o cupom e atualiza os totais
    carregarCupom();
    atualizarTotal(); 
}
