document.write("<h1>Exercício 3</h1>")

let valor, taxa, tempo, parcela;

valor = Number(prompt("Digite o valor ") );
taxa = Number(prompt("Digite a taxa") );
tempo = Number(prompt("Digite o tempo") );

parcela = valor + (valor * (taxa * taxa / 100) * tempo);

document.write("<p>O valor da parcela: " + parcela + "</p>")