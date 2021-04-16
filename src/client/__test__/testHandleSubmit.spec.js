// to solve ReferenceError: regeneratorRuntime is not defined
import "babel-polyfill";

import { handleSubmit } from "../js/formHandler";

test("handleSubmit function testing", () => {
  expect(handleSubmit).toBeDefined();
});
