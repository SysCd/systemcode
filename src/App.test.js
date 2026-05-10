import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the System Code homepage", () => {
  window.history.pushState({}, "", "/");
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /^system code$/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /^software$/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /view portfolio/i })
  ).toBeInTheDocument();
  expect(
    screen.getAllByRole("link", { name: /support@systemcode\.net/i }).length
  ).toBeGreaterThan(0);
});

test("renders Erik's portfolio page", () => {
  window.history.pushState({}, "", "/portfolio");
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /erik gombar/i })
  ).toBeInTheDocument();
  expect(
    screen.getByText(/^azure & microsoft infrastructure engineer$/i)
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /technical projects/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      name: /cortexai \/ reasoning-enhanced slm 2\.0/i,
    })
  ).toBeInTheDocument();
});
