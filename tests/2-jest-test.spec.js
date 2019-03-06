import Helpers from "../src/Helpers.js";
const good_user = {
  first_name: "John",
  last_name: "Dow"
};
const bad_user = {
  error: "User not authed"
};

/**
 * Структура функции test:
 * @argument string - описание функции
 * @argument function - обертка для тестов
 *  */
test("Progress status must be 10", () => {
  expect(Helpers.calcProgress(2, 20)).toBe(10);
});

test("Authed user must be existed", () => {
  expect(Helpers.isUser(good_user)).toBeTruthy();
});

test("No authed user must be null", () => {
  expect(Helpers.isUser(bad_user)).toBeNull();
});
