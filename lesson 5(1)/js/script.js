//Восстановить порядок в меню, добавить пятый пункт
let menuItem = document.querySelectorAll('.menu-item'),
	menu = document.querySelector('.menu');

let li = document.createElement('li');
li.textContent = 'Пятый пункт'
li.classList.add("menu-item");

menu.appendChild(li);

console.log(menuItem);

menu.insertBefore(menuItem[2], menuItem[1]);


//Заменить картинку заднего фона на другую из папки img
let body = document.querySelector("body");
console.log(body);

body.style.backgroundImage = "url(./img/apple_true.jpg)"


//Поменять заголовок, добавить слово "подлинную"
let title = document.getElementById("title");
title.textContent = "Мы продаем только подлинную технику Apple";


//Удалить рекламу со страницы
let adv = document.querySelector('.adv');
adv = adv.remove();


// Спросить у пользователя отношение к технике apple и записать ответ в поле "prompt"
let promptElement = document.querySelector('#prompt');
let answer = prompt('Ваше отношение к технике Apple?','');
promptElement.innerHTML = answer;

