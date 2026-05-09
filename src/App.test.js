import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the infrastructure portfolio", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /erik gombar/i })
  ).toBeInTheDocument();
  expect(
    screen.getByText(/^microsoft infrastructure engineer$/i)
  ).toBeInTheDocument();
  expect(
    screen.getAllByRole("link", { name: /support@syscdsoftware\.com/i }).length
  ).toBeGreaterThan(0);
  expect(
    screen.getByRole("heading", { name: /technical projects/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      name: /cortexai \/ reasoning-enhanced slm 2\.0/i,
    })
  ).toBeInTheDocument();
});
