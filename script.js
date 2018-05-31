var budgetMonth = prompt("Ваш бюджет на месяц?", "60000");
	console.log(budgetMonth);
var namestore = prompt("Название вашего магазина?", "Bershka");
	console.log(namestore);

var mainList = {
 	budget: 60000,
 	name: "Bershka",
 	shopGoods: [],
 	employers: [{name: "Anton"}, {name: "Ira"}],
 	open: true
}
	console.log(mainList);

mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?",);
mainList.shopGoods[1] = prompt("Какой тип товаров будем продавать?",);
mainList.shopGoods[2] = prompt("Какой тип товаров будем продавать?",);

var budgetMonth = 60000,
    budgetDaysMonth = 30,
    budgetDay = budgetMonth / budgetDaysMonth;
 	alert("Ваш бюджет на день " +budgetDay);










