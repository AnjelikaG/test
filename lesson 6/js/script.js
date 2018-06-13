let open = document.getElementById('open-btn'),
	name_value = document.getElementsByClassName('name-value')[0],
 	budget_value = document.getElementsByClassName('budget-value')[0],
 	goods_value = document.getElementsByClassName('goods-value')[0],
 	items_value = document.getElementsByClassName('items-value')[0],
 	employers_value = document.getElementsByClassName('employers-value')[0],
 	discount_value = document.getElementsByClassName('discount-value')[0],
 	isopen_value = document.getElementsByClassName('isopen-value')[0],

 	goods_items = document.getElementsByClassName('goods-item'),
 	goods_btn = document.getElementsByTagName('button')[1],
 	budget_btn = document.getElementsByTagName('button')[2],
 	employers_btn = document.getElementsByTagName('button')[3],
 	choose_item = document.querySelector('.choose-item'),
 	time_value = document.querySelector('.time-value'),
 	count_budget_value = document.querySelector('.count-budget-value'),
 	hire_employers_item = document.querySelector('.hire-employers-item');


let money,
    price,
    nameShop;

const mainList = {
	budget: money,
 	shopName: nameShop,
 	shopGoods: [],
 	employers: {},
 	open: true,
 	discount: false,
 	shopItems: [],
};

open.addEventListener('click', () => {
	money = prompt('Ваш бюджет?','');

	while (isNaN(money) || money == '' || money == null) {
		money = prompt('Ваш бюджет?', '');
	}
	budget_value.textContent = money;

	name_value.textContent = prompt("Название вашего магазина?", "").toUpperCase();

});    

goods_btn.addEventListener('click', () => {
	for (let i = 0; i < goods_items.length; i++) {
		let a = goods_items[i].value;

		if ((typeof(a)) === 'string' && (typeof(a)) != null && a.length < 50) {
		 	console.log("все верно");
		 	mainList.shopGoods[i] = a;
		}
	}
	console.log(goods_value);
	goods_value.textContent = mainList.shopGoods.join(',');

});


choose_item.addEventListener('change', () => {
	let items = choose_item.value;

	if(!isNaN(items) || items != '') {
		mainList.shopItems = items.split(', ');
		mainList.shopItems.sort();

		items_value.textContent = mainList.shopItems;
	}
})

time_value.addEventListener('change', () => {
	let time = time_value.value;

	if (time < 0) {
		console.log('Такого не может быть!');
		mainList.open = false;
	} else if (time > 8 && time < 20) {
		console.log('Время работать!');
		mainList.open = true;
	} else if (time < 20) {
		console.log('Уже слишком поздно')
		mainList.open = false;
	} else {
		console.log('В сутках 24 часа!')
		mainList.open = false;
	};

	if (mainList.open = true) {
		items_value.style.backgroundColor = 'green'
	} else {
		items_value.style.backgroundColor = 'red'
	}
});

budget_btn.addEventListener('click', () => {
	count_budget_value.value = money/30;
});

employers_btn.addEventListener('click', () => {
		for (let i = 0; i < hire_employers_item.length; i++) {
 			let name = hire_employers_item[i].value;
 			mainList.employers[i] = name;
 			employers_value.textContent += mainList.employers[i] + ', ';
 		}
});

discount_value.addEventListener('click', () => {
	discount_value.style.backgroundColor = mainList.discount ? 'green' : 'red';

	let price = 50;

	price = mainList.discount === true ? price * 0.8 : price;

	discount_value.textContent = price;

});

function onGoodsItemInput() {
	console.log(goods_items[0].value);
	if (goods_items[0].value != "" || 
		goods_items[1].value != "" || 
		goods_items[2].value != "" || 
		goods_items[3].value != "") {

		goods_btn.removeAttribute('disabled');
	} else {
		goods_btn.setAttribute('disabled', 'disabled');
	}
}

goods_items[0].addEventListener('input', onGoodsItemInput);
goods_items[1].addEventListener('input', onGoodsItemInput);
goods_items[2].addEventListener('input', onGoodsItemInput);
goods_items[3].addEventListener('input', onGoodsItemInput);

goods_btn.setAttribute('disabled', 'disabled');
budget_btn.setAttribute('disabled', 'disabled');
employers_btn.setAttribute('disabled', 'disabled');










