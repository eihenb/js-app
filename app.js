let money = +prompt("Ваш буджет за месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: {},
    savings: false
};

// for (let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
//     b = +prompt("Во сколько обойдется?");

//     if ((typeof(a)) === "string" && (typeof(a)) != null &&  (typeof(b)) != null && a != "" && b != "" && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     }
// }
let i = 0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
    b = +prompt("Во сколько обойдется?");

    if ((typeof(a)) === "string" && (typeof(a)) != null &&  (typeof(b)) != null && a != "" && b != "" && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    }
    i++;
} while (i < 2);

appData.moneyPerDay = appData.budget / 30

if (appData.moneyPerDay < 100) {
    console.log("Низкий уровень расходов");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 1000) {
    console.log("Средний уровень расходов");
} else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 10000) {
    console.log("Высокий уровень расходов");
}