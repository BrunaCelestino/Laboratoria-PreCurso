var income = parseInt(prompt("Qual é o valor da entrada?"));

var costs = parseInt(prompt("Qual é o valor da saída?"));

var taxPercent = parseInt(prompt("Qual é a porcentagem dos impostos?"));

var grossProfit = income - costs;

var tax = grossProfit * taxPercent / 100;

var netIncome = grossProfit - tax

document.write("Sua renda líquida é de $ " + netIncome);