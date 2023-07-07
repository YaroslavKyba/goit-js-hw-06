// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const formInputEl = document.querySelector("#validation-input");
console.log(formInputEl);

formInputEl.addEventListener("blur", ({ target }) => {
  if (
    target.value.length === Number(formInputEl.dataset.length) &&
    formInputEl.value.trim()
  ) {
    formInputEl.classList.add("valid");
    formInputEl.classList.remove("invalid");
    return;
  }

  formInputEl.classList.add("invalid");
  formInputEl.classList.remove("valid");
});
