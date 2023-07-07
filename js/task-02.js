const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulIingredients = document.querySelector("#ingredients");

const ingredientEl = ingredients.map((ingridient) => {
  const liElement = document.createElement("li");
  liElement.textContent = ingridient;
  liElement.classList.add("item");

  return liElement;
});

ulIingredients.append(...ingredientEl);

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
