// Счётчик корзины на всех страницах (если есть .add-to-cart)
(function () {
  var cartCountElement = document.getElementById("cart-count");
  var addButtons = document.querySelectorAll(".add-to-cart");

  if (!cartCountElement || addButtons.length === 0) {
    return; // на этой странице ничего не делаем
  }

  var count = 0;

  for (var i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener("click", function () {
      count = count + 1;
      cartCountElement.textContent = String(count);
    });
  }
})();

// Небольшой калькулятор тренировок на главной странице
(function () {
  var input = document.getElementById("sessions-per-week");
  var button = document.getElementById("calc-sessions-btn");
  var output = document.getElementById("calc-result");

  if (!input || !button || !output) {
    return;
  }

  button.addEventListener("click", function () {
    var value = parseInt(input.value, 10);

    if (isNaN(value) || value <= 0) {
      output.textContent =
        "Введите количество занятий в неделю (число больше нуля).";
      return;
    }

    var perMonth = value * 4;
    output.textContent =
      "Примерно за месяц вы посетите " + perMonth + " тренировок.";
  });
})();
