import Helpers from "../src/Helpers.js";
const good_user = {
  first_name: "John",
  last_name: "Dow"
};
const bad_user = {
  error: "User not authed"
};

/**
 * Структура функции describe:
 * @argument string - описание группы функций
 * @argument function - Обертка-группировка для функций тестов
 *
 * Структура функции it:
 * @argument string - описание функции
 * @argument function - обертка для тестов
 *
 * Для проверок применяется любая из библиотек проверки
 *  */
var assert = require("assert");

describe("Helpers group test", function() {
  // * assert встроена в Node js
  it("Progress status must be 10", function() {
    assert.equal(Helpers.calcProgress(2, 20), 10);
  });

  // * Jest стилизация гораздо удобнее
  it("Authed user must be existed", function() {
    expect(Helpers.isUser(good_user)).toBeTruthy();
  });
  it("No authed user must be null", function() {
    expect(Helpers.isUser(bad_user)).toBeNull();
  });
});
