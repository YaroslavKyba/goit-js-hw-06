// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const textValue = document.querySelector("#value");
// console.log(value);

let counterValue = 0;

btnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  textValue.textContent = counterValue;
});

btnIncrement.addEventListener("click", () => {
  counterValue += 1;
  textValue.textContent = counterValue;
});

// console.log(btnDecrement);

// console.log(btnIncrement);

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
