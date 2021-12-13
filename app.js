const home = document.querySelectorAll(".home-image path"); // каждый отдельный этаж
const counter = document.querySelector(".counter"); // счетчик этажей
const btnUp = document.querySelector(".counter-up"); //  кнопка вверх
const btnDowm = document.querySelector(".counter-down"); //  кнопка вниз
const path = document.getElementsByTagName("path");

let arr = Array.from(path); // переводм коллекцию этажей в массив
let currentFloor = 2; // значение счётчика по умолчанию

//Навешимаем слушатель на каждый этаж
arr.forEach((i) => {
  i.addEventListener("mouseover", (e) => {
    arr.map((e) => e.classList.remove("current-floor")); //удаляем класс у всех элементов
    currentFloor = e.target.getAttribute("data-floor");
    counter.textContent = currentFloor; // записывает значение атрибута внутрь счетчика
  });
});

//Навешиваем слушатели на кнопки
btnUp.addEventListener("click", (e) => {
  if (currentFloor < 18) { // Если число меньше 18 этажей , то выполнить следующее
    currentFloor++; // прибавлять +1 к каждому числу
    usCurrent = currentFloor.toLocaleString("en-Us", {minimumIntegerDigits: 2,useGrouping: false,}); //генерируем 2 значное число(02)
    counter.textContent = usCurrent
} // записываем значение внутрь счётчика
    arr.map((e) => e.classList.remove("current-floor")); //удаляем подсвеченый класс
    path[currentFloor - 2].classList.toggle("current-floor"); //переключаем подсвеченый класс
});

btnDowm.addEventListener("click", (e) => {
  if (counter.textContent > 2) {
    currentFloor--;
    usCurrent = currentFloor.toLocaleString("en-Us", {minimumIntegerDigits: 2,useGrouping: false,});
    counter.textContent = usCurrent;
  }
  arr.map((e) => e.classList.remove("current-floor"));
  path[currentFloor - 2].classList.toggle("current-floor");
});

