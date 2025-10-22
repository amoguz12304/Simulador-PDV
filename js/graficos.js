/*---------- Montando o gráfico 1 ----------*/
function montarGrafico1() {
    const graf1 = document.getElementById('grafico1').getContext('2d');
    const meuGrafico = new Chart(graf1, {
        type: 'bar',
        data: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'],
            datasets: [
                {
                    label: 'Vendas',
                    data: [12, 19, 3, 9],
                    backgroundColor: ['#4caf50', '#2196f3', '#f44336', '#ff9800']
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, //Força respeitar a altura definida no css
            scales: {  
                y: { beginAtZero: true }
            }
        }
    });
}

montarGrafico1();
//---------------------------------------------------------------------------------------------------

function montarGrafico2(){
    const graf2 = document.getElementById('grafico2').getContext('2d');
    const meuGrafico = new Chart(graf2, {
        type: 'line',
        data: {labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'], //Dias úteis
          datasets: [
            {
                label: 'Dólar (R$)',
                data: [5.35, 5.37, 5.33, 5.39, 5.36], //valores fictícios
                borderColor: '#4caf50',
                backgroundColor: 'rgba(76, 175, 80, 0.2)',
                tension: 0.3,
                fill: true,
                pointBackgroundColor: '#2e7d32'
            }
          ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x:{ 
                title:{
                display: true,
                text: 'Dia da semana'
                  }

              },

              y: {
                beginAtZero: false,
                title:{
                    display: true,
                    text: 'Valor em R$'
                }
                         
              }
            }
        }
    })
}

montarGrafico2();

//---------------------------------------------------------------------------------------------------

function montarGrafico3() {
 const graf3 = document.getElementById('grafico3').getContext('2d')

 const meuGrafico = new Chart(graf3, {
    type: 'pie',
    data: {
        labels: ['Eletônicos', 'Roupas', 'Livros', 'Alimentos'],
        datasets: [
            {
                label: 'Vendas (%)',
                data: [30, 25, 15, 30], //valores percentuais
                backgroundColor: ['#4caf50', '#2196fe', '#ff9800', "#f44336"],
                borderwidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {position: 'bottom'},
            title: {
                display: true,
                text: 'Participação das vendas por categoria'
            } 
        }
    }
 })
}

montarGrafico3();
//---------------------------------------------------------------------------------------------------

/* function montarGrafico4(){
 const graf4 = document.getElementById('grafico4').getContext('2d');
 
 const meuGrafico = new Chart(graf4, {
    type: 'bar',
    data: {
        labels: ['produto A', 'produto B', 'produto C', 'produto D', 'produto E'],
        datasets: [
            {
                label: 'Unidades vendidas',
                data: [120, 95, 80, 60, 45],
                backgroundColor: [
                    '#42a5f5', '#66bb6a', '#ffa726', '#ef5350', '#ab47bc'
                ]
            }
        ]
        
    },
    
    opitions: {
        indexAxis: 'y', //chave para barras horizontais
        responsive: true, 
        maintainAspectRatio:false,
        scales: {
            x: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Quantidade vendida'
                }
            },

            y: {
                title:{
                    display: true,
                    text: 'produtos'
                }
            },

            plugins: {
                legend: {position: 'top'},
            }
        }
    }
  
 })
} */

function montarGrafico4() {
    const graf4 = document.getElementById('grafico4').getContext('2d');

    const meuGrafico = new Chart(graf4, {
        type: 'bar',
        data: {
            labels: ['Produto A', 'Produto B', 'Produto C', 'Produto D', 'Produto E'],
            datasets: [{
            label: 'Unidades Vendidas',
            data: [120, 95, 80, 60, 45],
            backgroundColor: [
                '#42a5f5',
                '#66bb6a',
                '#ffa726',
                '#ef5350',
                '#ab47bc'
            ]
            }]
        },
        options: {
            indexAxis: 'y', // chave para barras horizontais
            responsive: true,
            maintainAspectRatio: false,
            scales: {
            x: {
                beginAtZero: true,
                title: {
                display: true,
                text: 'Quantidade Vendida'
                }
            },
            y: {
                title: {
                display: true,
                text: 'Produtos'
                }
            }
            },
            plugins: {
            legend: {
                display: false,
                position: 'top'
            }
            }
        }
    });
}

montarGrafico4();