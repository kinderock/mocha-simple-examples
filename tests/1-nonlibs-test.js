import Helpers from "../src/Helpers.js";

(function() {
  const test_result = Helpers.calcProgress(2, 20);
  const expectation = 10;

  if (test_result === expectation) {
    console.log("Everything is ok");
  } else {
    console.error(`It's bad! Expected ${expectation}, but got ${test_result}`);
  }
})();
