import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import Home from "./Home";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Home />, div);
});

test("renders paragraph correctly", () => {
  const { getByTestId } = render(<Home />);
  // expect(getByTestId("newid")).toHaveTextContent("Faraz");
  expect(getByTestId("newid")).toHaveTextContent("Furqan");
});
