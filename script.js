var budget = prompt("Ваш бюджет на месяц?", "1000");
	console.log(budget);
var namestore = prompt("Название вашего магазина?", "Bershka");
	console.log(namestore);

var mainList = {
 	budget: 1000,
 	name: "Bershka",
 	shopGoods: [],
 	employers: {name: "Anton","Ira"},
 	open: true
}
	console.log(mainList);

shopGoods = [
	prompt("Какой тип товаров будем продавать?", "Одежда"),
 	prompt("Какой тип товаров будем продавать?", "Одежда"),
 	prompt("Какой тип товаров будем продавать?", "Одежда")
];

var budgetMonthMoney = 1000,
 	budgetDaysMonth = 30,
 	budgetDay = budgetMonthMoney/budgetDaysMonth;
 	alert("Ваш бюджет на день?" +budgetDay);










