const test_string = "Lorem ipsum dolor sit amet";
const false_values = [0, null, false, undefined];
const test_object = {
  user: "authed",
  name: "John Dow"
};

describe("Several tests for different values", function() {
  // Проверка на нахождение слова в строке
  it("There is 'dolor' in test string", () => {
    expect(test_string).toMatch(/dolor/);
  });

  // Нестрогая проверка на не трушные значения:
  // 0, null, false, undefined
  it("All values in false_values must be falthy", () => {
    false_values.forEach(value => {
      expect(value).toBeFalsy();
    });
  });

  // Проверка равенства объектов
  it("test_object must be equal to mock object", () => {
    expect(test_object).toEqual({
      user: "authed",
      name: "John Dow"
    });
  });
});
