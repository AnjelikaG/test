let budgetMonth = prompt("Ваш бюджет на месяц?", "60000");
	console.log(budgetMonth);
let namestore = prompt("Название вашего магазина?", "Bershka");
	console.log(namestore);



let mainList = {
 	budget: 60000,
 	name: namestore,
 	shopGoods: [],
 	employers: {"4545":"Vasya", "6555": "Petya"},
 	open: true,
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
	
























