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
    screen.getByText(/released on the app store/i)
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /view on app store/i })
  ).toHaveAttribute(
    "href",
    "https://apps.apple.com/us/app/principles-of-nature/id6767882826"
  );
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
    screen.getByRole("heading", { name: /^syscd tinyllm$/i })
  ).toBeInTheDocument();
  expect(
    screen.getAllByText((_, element) =>
      Boolean(
        element?.textContent?.match(
          /self-hosted fine-tuned ai assistant running on azure infrastructure/i
        )
      )
    ).length
  ).toBeGreaterThan(0);
  expect(
    screen.getAllByText((_, element) =>
      Boolean(
        element?.textContent?.match(
          /self-hosted ai assistant built around qwen2\.5-1\.5b/i
        )
      )
    ).length
  ).toBeGreaterThan(0);
  expect(screen.getByText(/peft lora fine-tune/i)).toBeInTheDocument();
  expect(
    screen.getAllByText((_, element) =>
      Boolean(element?.textContent?.match(/gguf q4_k_m quantization/i))
    ).length
  ).toBeGreaterThan(0);
  expect(
    screen.getAllByText((_, element) =>
      Boolean(element?.textContent?.match(/^azure vm$/i))
    ).length
  ).toBeGreaterThan(0);
  expect(screen.getAllByText(/^llama-server$/i).length).toBeGreaterThan(0);
  expect(
    screen.getAllByText((_, element) =>
      Boolean(element?.textContent?.match(/fine-tuned gguf model/i))
    ).length
  ).toBeGreaterThan(0);
  expect(screen.getByLabelText(/user prompt/i)).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /explain kubernetes/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /ask tinyllm/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /clear/i })
  ).toBeInTheDocument();
  expect(
    screen.queryByRole("button", { name: /copy response/i })
  ).not.toBeInTheDocument();
  expect(screen.getByText(/conversation/i)).toBeInTheDocument();
  expect(
    screen.getByText(/ask tinyllm to test the self-hosted azure model/i)
  ).toBeInTheDocument();
  expect(screen.getByText(/\/1000/i)).toBeInTheDocument();
  expect(
    screen.getAllByText((_, element) =>
      Boolean(element?.textContent?.match(/https api/i))
    ).length
  ).toBeGreaterThan(0);
  expect(
    screen.getAllByText((_, element) =>
      Boolean(element?.textContent?.match(/runs on a cpu-only azure vm/i))
    ).length
  ).toBeGreaterThan(0);
  expect(
    screen.getByRole("link", { name: /github repo/i })
  ).toHaveAttribute("href", "https://github.com/SysCd/syscd-tinyllm");
  expect(
    screen.getByRole("link", { name: /live api/i })
  ).toHaveAttribute("href", "https://api.systemcode.net/v1/chat/completions");
  expect(
    screen.getByRole("heading", { name: /reasoning style blueprint/i })
  ).toBeInTheDocument();
  expect(
    screen.getByText(/first-principles systems reasoning format/i)
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /how it was made/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /^reasoning style$/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /logical hierarchy/i })
  ).toBeInTheDocument();
  expect(screen.getByText(/law of acceleration/i)).toBeInTheDocument();
  expect(screen.getAllByText(/force changes speed/i).length).toBeGreaterThan(0);
  expect(
    screen.getByText(/logical hierarchy.*reusable layers/i)
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /tinyllm/i })
  ).toHaveAttribute("href", "#tinyllm");
  expect(
    screen.getByRole("heading", { name: /open source contributions/i })
  ).toBeInTheDocument();
  expect(
    screen.getByText(/qwen3 qlora apple silicon documentation example/i)
  ).toBeInTheDocument();
  expect(
    screen.getByText(/pull request open/i)
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /view pull request/i })
  ).toHaveAttribute("href", "https://github.com/ml-explore/mlx-lm/pull/1270");
  expect(
    screen.getByRole("link", { name: /open source/i })
  ).toHaveAttribute("href", "#open-source");
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
