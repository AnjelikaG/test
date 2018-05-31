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

Цикл for
for(let i = 0; i < 5; i++) {
	let a = prompt("Какой тип товаров будем продавать?");
	mainList.shopGoods[i] = a;
}	

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


alert(mainList.budget/30);














