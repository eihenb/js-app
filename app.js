let money = +prompt("Ваш буджет за месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    monthlyExpenses = prompt("Введите обязательную статью расходов в этом месяце"),
    howMuchItCost = +prompt("Во сколько обойдется?");

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        state1: monthlyExpenses,
        state2: howMuchItCost
    },
    optionalExpenses: {},
    income: {},
    savings: false
};

console.log(appData);

let cleanBudget = (appData.budget - appData.expenses.state2);
alert("Мой бюджет: " + cleanBudget + "£");