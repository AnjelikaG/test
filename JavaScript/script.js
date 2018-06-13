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
 	shopItems: []
 	chooseShopItems: function () {
 		let items = prompt('Перечислите тип товара', '');

 		if (typeof(items) == "string" && items) {
 			mainList.shopItems = items.split(",");
 			this.addLastItem();
	 	} else {
	 		this.chooseShopItems();
	 	}
 	}, 
 	addLastItem: function() {
 		let item = prompt("Еще один тип товара","");
 			
	 	if(typeof(item) == "string" && item){
	 		mainList.shopItems.push(item);
	 		mainList.shopItems.sort();
	 	} else {
	 		this.addLastItem();
	 	}
 	},

 	displayShopItems: function() {
	 this.shopItems.forEach(function(shopItems, i, item) {
	 	alert()
	 })
	}
};

}

for(let i = 0; i < 5; i++) {
	let a = prompt("Какой тип товаров будем продавать?");
	if ((typeof(a)) === 'string' && (typeof(a)) === null && a != '' && a.length < 50 ){
		console.log('все верно!');
		mainList.shopGoods[i] = a;
	} else {
		
	}
}	
	

// LESSON 3
// / Задание 1
// function calculateDailyBudget(shop) {
// 	alert(shop.budget/30);
// }
// calculateDailyBudget(mainList);

// Задание 2
// function calculateDiscount (price, discount) {

// 	if (discount === true) {
// 		return price * 0.8;
// 	} else {
// 		return price;
// 	}
// }
// calculateDiscount(100, true);


// Задание 3

// function addEmployer(shop, number, name) {
// 	shop.employers[number] = name;
// }
// addEmployer(mainList, '1', 'Ira')


// Задание 4 

// function addEmployer(shop, number, name) {
// 	shop.employers[number] = name;
// }
// var name1 = prompt("Имя сотрудника ?");
// addEmployer(mainList, '1', name);
// var name2 = prompt("Имя сотрудника ?");
// addEmployer(mainList, '2', name);
// var name3 = prompt("Имя сотрудника ?");
// addEmployer(mainList, '3', name);
// var name4 = prompt("Имя сотрудника ?");
// addEmployer(mainList, '4', name);















