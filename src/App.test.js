import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the infrastructure portfolio", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /erik gombar/i })
  ).toBeInTheDocument();
  expect(screen.getByText(/infrastructure engineer/i)).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /technical projects/i })
  ).toBeInTheDocument();
});
