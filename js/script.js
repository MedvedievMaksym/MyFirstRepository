'use strict';

let money , time;

function start() {
 	money +prompt("Ваш бюджет на месяц ?", "");
  	time = prompt("Введите дату в формате YYYY-MM-DD", "");

// проверяем что пользователь ввел число
  	while(isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц ?", "");
	}
}
start();

let appData = {
	budget: money,
	expences: {},
	optionalExpences: {},
	income: [],
	timeData: time,
	savings: true
};

function chooseExpences() {
	for (let i = 0; i < 2; i++) {
		let a = prompt("Введите обязательнуюстатью рассходов в этом месяце", ''),
			b = prompt("Во сколько обойдется?", '');

		if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
			&& a != '' && b != '' && a.length < 50) {
			console.log("done");
			appData.expences[a] = b;
		} else {
			i = i - 1;
		}	
	}
}
chooseExpences();

appData.moneyPerDay = (appData.budget / 30).toFixed();

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100){
	console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
	console.log("Высокий уровень достатка");
} else {
	console.log("Произошла ошибка!");
}

function checkSavings() {
	if(appData.savings == true){
		let save = +prompt("Какова сумма накоплений ? "),
			percent = +prompt("Под какой процент ? ");
			
		appData.monthIncone = save/100/12*percent;
		alert("Доход в меся с вашего депозита: " + appData.monthIncone);
	}
}
checkSavings();