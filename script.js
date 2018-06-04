let budgetMonth = prompt("Ваш бюджет на месяц?", "60000");
	console.log(budgetMonth);
let namestore = prompt("Название вашего магазина?", "Bershka");
	console.log(namestore);

let mainList = {
 	budget: 60000,
 	name: namestore,
 	shopGoods: [],
 	employers: {},
 	open: true
}
	console.log(mainList);

// Цикл for
// for(let i = 0; i < 5; i++) {
// 	let a = prompt("Какой тип товаров будем продавать?");
// 	mainList.shopGoods[i] = a;
// }	

// Цикл wile
// let i = 0;
// while (i< 4) {
// 	let a = prompt("Какой тип товаров будем продавать?");
// 	mainList.shopGoods[i] = a;
// 	i++;
// }

// Цикл do while
// let i = 0;
// do {
// 	let a = prompt("Какой тип товаров будем продавать?");
// 	mainList.shopGoods[i] = a;
// 	i++;
// }
// while (i < 4);


// alert(mainList.budget/30);

// / Задание 1
function calculateDailyBudget(shop) {
	alert(shop.budget/30);
}
calculateDailyBudget(mainList);

// Задание 2
function calculateDiscount (price, discount) {

	if (discount === true) {
		return price * 0.8;
	} else {
		return price;
	}
}
calculateDiscount(100, true);


// Задание 3

function addEmployer(shop, number, name) {
	shop.employers[number] = name;
}
addEmployer(mainList, '1', 'Ira')


// Задание 4 

function addEmployer(shop, number, name) {
	shop.employers[number] = name;
}
var name1 = prompt("Имя сотрудника ?");
addEmployer(mainList, '1', name);
var name2 = prompt("Имя сотрудника ?");
addEmployer(mainList, '2', name);
var name3 = prompt("Имя сотрудника ?");
addEmployer(mainList, '3', name);
var name4 = prompt("Имя сотрудника ?");
addEmployer(mainList, '4', name);














