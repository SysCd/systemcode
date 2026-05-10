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
  expect(
    screen.getByRole("link", { name: /system code github/i })
  ).toHaveAttribute("href", "https://github.com/SysCd");
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
  expect(
    document.getElementById("intune-autopilot-endpoint-compliance")
  ).toBeInTheDocument();
  expect(
    document.getElementById("cortexai-reasoning-enhanced-slm")
  ).toBeInTheDocument();

  const projectLinks = screen.getAllByRole("link", { name: /view project/i });

  expect(
    projectLinks.some(
      (link) =>
        link.getAttribute("href") ===
        "https://github.com/SysCd/Microsoft-Identity-Endpoint-Lab"
    )
  ).toBe(true);
  expect(
    projectLinks.some(
      (link) =>
        link.getAttribute("href") ===
        "https://github.com/SysCd/Reasoning-Enhanced-SLM-2.0"
    )
  ).toBe(true);
  expect(
    screen.getByRole("link", { name: /view repository/i })
  ).toHaveAttribute("href", "https://github.com/SysCd/principles-of-nature");
  expect(
    projectLinks.some((link) => link.getAttribute("href")?.startsWith("#"))
  ).toBe(false);
  expect(
    projectLinks.some((link) => link.getAttribute("href") === "/portfolio#projects")
  ).toBe(false);
  expect(
    screen.queryByRole("link", { name: /^portfolio$/i })
  ).not.toBeInTheDocument();
});
