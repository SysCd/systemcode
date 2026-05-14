import { useEffect, useRef, useState } from "react";
import "./index.css";
import {
  FaBars,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaTimes,
} from "react-icons/fa";
import buildInfo from "./build-info.json";

const contact = {
  email: "support@systemcode.net",
};

const siteUrl = "https://systemcode.net";
const githubUrl = "https://github.com/SysCd";
const principlesOfNatureAppStoreUrl =
  "https://apps.apple.com/us/app/principles-of-nature/id6767882826";
const tinyLlmEndpoint = "https://api.systemcode.net/v1/chat/completions";
const tinyLlmSystemPrompt =
  "You are SysCd TinyLLM, a concise technical assistant built by Erik. Reply naturally for normal conversation. Only use the first-principles systems compression format when the user explicitly asks for it. When using that format, output: Core topic, Final principle, Explanatory principle, Core logic principles, Principle compression, Logical hierarchy, Compressed takeaway. Do not explain the method. Never say you are Qwen or Alibaba Cloud.";

const logoSrc = "/system-code-lockup.png";
const emblemSrc = "/system-code-emblem.png";

const thinkingCards = [
  {
    title: "First Principles",
    body: "Break problems down into components, assumptions, dependencies, and constraints.",
  },
  {
    title: "Systems Thinking",
    body: "Map how identity, endpoints, servers, networks, policies, automation, and operations interact.",
  },
  {
    title: "Operational Clarity",
    body: "Turn analysis into diagrams, documentation, scripts, and repeatable workflows.",
  },
];

const workingStyleCards = [
  {
    title: "Calm Under Pressure",
    body: "I stay steady during technical issues and focus on isolating symptoms, dependencies and likely failure points.",
  },
  {
    title: "Independent Operator",
    body: "I'm comfortable working through complex problems independently, using documentation, logs, testing and structured reasoning.",
  },
  {
    title: "Evidence-Driven",
    body: "I prefer practical proof over guesswork: diagrams, commands, screenshots, validation checks and repeatable fixes.",
  },
  {
    title: "Achievement-Focused",
    body: "I'm motivated by clear progress, finished outputs and technical systems that become easier to support over time.",
  },
];

const heroTags = [
  "Azure",
  "Intune",
  "Entra ID",
  "Windows Server",
  "PowerShell",
  "Microsoft 365",
  "Endpoint Management",
  "Identity & Access",
];

const softwareProducts = [
  {
    title: "Principles of Nature",
    type: "iOS App",
    status: "Released on the App Store",
    platform: "iPhone",
    purpose: "Principle-based learning",
    audience: "Individual learners",
    support: "Email support available",
    link: principlesOfNatureAppStoreUrl,
    linkLabel: "View on App Store",
    description:
      "An iOS app exploring human nature, social dynamics, influence, and behavioural patterns through practical principles.",
    features: [
      "Daily principle notifications",
      "Built-in reminders",
      "Add selected principles to Apple Reminders",
      "Read-aloud button for listening to principles",
    ],
  },
  {
    title: "Context Bridge",
    type: "AI Tool",
    status: "Planned / In development",
    platform: "Local desktop workflow",
    purpose: "Context preparation",
    audience: "AI-assisted work",
    support: "Private planning stage",
    description:
      "A local-first AI workflow utility for organizing and preparing context across tools.",
  },
];

const openSourceContributions = [
  {
    project: "mlx-lm",
    organisation: "Apple MLX / ml-explore",
    contribution: "Qwen3 QLoRA Apple Silicon documentation example",
    type: "Documentation",
    technologies: "MLX, Qwen3, LoRA, QLoRA, Apple Silicon, Python",
    status: "Pull Request Open",
    pr: "#1270",
    link: "https://github.com/ml-explore/mlx-lm/pull/1270",
    tags: ["AI Engineering", "Apple Silicon", "MLX", "Qwen3", "Open Source"],
    description:
      "Added a practical Qwen3 QLoRA example for Apple Silicon users, showing how to fine-tune Qwen/Qwen3-8B-MLX-4bit with mlx_lm.lora, structure train/valid/test JSONL datasets, generate with adapters, and disable Qwen3 thinking mode for shorter direct responses.",
  },
];

const tinyLlmHighlights = [
  "PEFT LoRA fine-tune",
  "GGUF Q4_K_M quantization",
  "Azure VM deployment",
  "Nginx reverse proxy",
  "llama-server runtime",
  "Live frontend API",
];

const tinyLlmArchitecture = [
  "Frontend",
  "HTTPS API",
  "Nginx",
  "llama-server",
  "fine-tuned GGUF model",
];

const tinyLlmStatusBadges = [
  "Fine-tuned Qwen2.5-1.5B",
  "Azure VM",
  "llama-server",
  "CPU inference",
];

const tinyLlmPromptChips = [
  "Explain Kubernetes",
  "Explain Azure VMs",
  "Explain Docker networking",
  "Explain physics",
  "Explain trading risk",
];

const tinyLlmSectionLabels = [
  "Core topic",
  "Final principle",
  "Explanatory principle",
  "Core logic principles",
  "Principle compression",
  "Logical hierarchy",
  "Compressed takeaway",
];

const tinyLlmNoWrapTerms = [
  "Qwen2.5-1.5B",
  "PEFT LoRA",
  "llama-server",
  "Azure",
  "GGUF",
  "API",
  "Nginx",
];
const tinyLlmMaxPromptLength = 1000;
const tinyLlmOfflineStatuses = new Set([502, 503, 504]);
const tinyLlmOfflineMessage =
  "TinyLLM is currently offline to reduce Azure costs. The demo runs during scheduled working hours, or when the Azure VM is manually started.";
const tinyLlmOfflineNote =
  "This project uses automated Azure VM start/stop scheduling for cost control, reducing compute runtime by roughly 70% compared with running 24/7.";
const tinyLlmLinks = [
  {
    label: "GitHub repo",
    href: "https://github.com/SysCd/syscd-tinyllm",
  },
  {
    label: "Live API",
    href: tinyLlmEndpoint,
  },
];

const reasoningBlueprintNotes = [
  "Core topic \u2192 defines the system being analysed",
  "Principle compression \u2192 reduces complexity into short logic statements",
  "Logical hierarchy \u2192 orders knowledge into reusable layers",
];

const blueprintBuildSteps = [
  ["Core topic", "Defines the system being analysed"],
  ["Final principle", "Identifies the most fundamental idea"],
  ["Explanatory principle", "Explains the principle clearly"],
  ["Core logic principles", "Extracts the essential logic"],
  ["Principle compression", "Reduces complexity into short logic statements"],
  ["Takeaway", "Converts broad knowledge into reusable reasoning patterns"],
];

const blueprintReasoningExamples = [
  ["Law of Inertia", "Stays the same"],
  ["Law of Acceleration", "Force changes speed"],
  ["Law of Action and Reaction", "Equal push back"],
];

const blueprintHierarchy = [
  "Classical Physics",
  "Modern Physics",
  "Mathematical & Theoretical Physics",
  "Applied & Interdisciplinary Physics",
];

const pageMeta = {
  home: {
    title: "System Code | Software and Infrastructure",
    description:
      "Practical software and infrastructure built from first principles.",
    canonical: `${siteUrl}/`,
  },
  software: {
    title: "Software | System Code",
    description:
      "Focused System Code software for iOS, AI workflows, infrastructure, and practical systems.",
    canonical: `${siteUrl}/software`,
  },
  about: {
    title: "About | System Code",
    description:
      "System Code is an independent software and infrastructure brand for practical tools and systems.",
    canonical: `${siteUrl}/about`,
  },
  contact: {
    title: "Contact | System Code",
    description:
      "Contact System Code for product support, collaborations, and technical enquiries.",
    canonical: `${siteUrl}/contact`,
  },
  portfolio: {
    title: "Erik Gombar | Azure & Microsoft Infrastructure Engineer",
    description:
      "Portfolio for Microsoft infrastructure, Azure, endpoint management, automation, and systems projects.",
    canonical: `${siteUrl}/portfolio`,
  },
};

const contactPaths = [
  {
    title: "Product Support",
    body: "Help with System Code software, app support, and product questions.",
    subject: "System Code product support",
  },
  {
    title: "Software Enquiries",
    body: "Collaborations, product feedback, and practical software ideas.",
    subject: "System Code software enquiry",
  },
  {
    title: "Technical Work",
    body: "Infrastructure, automation, cloud, and portfolio-related enquiries.",
    subject: "System Code technical enquiry",
  },
];

const projects = [
  {
    title: "Intune / Autopilot / Endpoint Compliance Lab",
    id: "intune-autopilot-endpoint-compliance",
    link: githubUrl,
    linkLabel: "View GitHub profile",
    tags: [
      "Microsoft Intune",
      "Entra ID",
      "Windows 11",
      "Conditional Access",
      "Defender",
    ],
    summary:
      "Built a Microsoft endpoint management lab with a Windows 11 Pro device enrolled into Entra ID and managed through Intune.",
    shortText:
      "Configured compliance policies, Settings Catalog profiles, Company Portal deployment, Defender baseline settings, and compliant-device Conditional Access testing with evidence-based documentation.",
  },
  {
    title: "Microsoft Identity & Endpoint Lab",
    id: "microsoft-identity-endpoint",
    link: "https://github.com/SysCd/Microsoft-Identity-Endpoint-Lab",
    linkLabel: "View project",
    tags: ["Entra ID", "Intune", "Microsoft 365", "PowerShell"],
    summary:
      "Built a dedicated Microsoft cloud administration lab covering users, groups, roles, Conditional Access, MFA, endpoint configuration, scripted exports, validation evidence, and operational documentation.",
  },
  {
    title: "Windows Server Active Directory Lab",
    id: "windows-server-active-directory",
    link: "https://github.com/SysCd/windows-server-ad-lab",
    linkLabel: "View project",
    tags: ["Windows Server 2022", "Active Directory", "DNS", "Group Policy", "SMB"],
    summary:
      "Built a local Microsoft infrastructure lab with a Windows Server 2022 domain controller, Active Directory, DNS, Group Policy, SMB file shares, and a domain-joined client.",
    shortText:
      "Validated group-based access control end to end by creating department security groups, NTFS permissions, DNS records, domain login flows, and share access tests.",
  },
  {
    title: "Azure Infrastructure Admin Lab",
    id: "azure-infrastructure-admin",
    link: "https://github.com/SysCd/Azure-Infrastructure-Admin-Lab",
    linkLabel: "View project",
    tags: ["Azure VMs", "Virtual Network", "NSGs", "Linux"],
    summary:
      "Administered Azure infrastructure with Linux virtual machines, secure remote access, virtual networking, baseline validation, user provisioning, and initial security hardening.",
  },
  {
    title: "Azure DevOps Platform Lab",
    label: "Azure Platform Lab (In Progress)",
    id: "azure-devops-platform",
    link: "https://github.com/SysCd/azure-devops-platform-lab",
    linkLabel: "View project",
    tags: [
      "Azure",
      "Terraform",
      "GitHub Actions",
      "Azure DevOps",
      "Containers",
      "Monitoring",
    ],
    summary:
      "Building an end-to-end Microsoft Azure DevOps platform lab covering Terraform landing zones, CI/CD, Azure App Service, containers, monitoring, observability, and platform operations.",
    shortText:
      "Planned lab modules cover reusable Terraform infrastructure, GitHub Actions deployment, Azure DevOps YAML pipelines, Azure Container Apps, Azure Monitor, Log Analytics, Application Insights, and KQL-based troubleshooting.",
    architecture:
      "Terraform landing zone -> CI/CD pipelines -> containers -> monitoring",
  },
  {
    title: "Principles of Nature iOS App Deployment",
    label: "iOS App Submission",
    id: "principles-of-nature-deployment",
    link: "https://github.com/SysCd/principles-of-nature",
    linkLabel: "View repository",
    tags: [
      "iOS App Submission",
      "App Store Release",
      "App Store",
      "Support Email",
      "Documentation",
    ],
    summary:
      "Released the Principles of Nature iOS app on the App Store, with production-facing support contact setup, public website readiness, and app presentation work.",
    shortText:
      "Positioned as a lightweight deployment and operations project alongside the Microsoft infrastructure portfolio, showing release hygiene, support routing, and public-domain readiness.",
  },
  {
    title: "CortexAI / Reasoning-Enhanced SLM 2.0",
    subtitle: "Custom reasoning model + RAG research assistant",
    label: "Advanced AI Systems Lab",
    id: "cortexai-reasoning-enhanced-slm",
    link: "https://github.com/SysCd/Reasoning-Enhanced-SLM-2.0",
    linkLabel: "View project",
    featured: true,
    tags: [
      "CortexAI",
      "Mistral-7B",
      "LoRA",
      "PEFT",
      "TRL",
      "RAG",
      "Qdrant",
      "OpenAI Embeddings",
      "Apple Silicon MPS",
      "Python",
      "JSONL Dataset",
      "500k Examples",
      "First-Principles Reasoning",
    ],
    summary:
      "Built a custom reasoning-enhanced LLM pipeline by generating a ~500k-example supervised fine-tuning dataset from first-principles reasoning blueprints, fine-tuning Mistral-7B-Instruct with LoRA, and then adding a Qdrant-backed RAG layer to turn it into CortexAI, a research-paper chat assistant.",
    shortText:
      "The project separates reasoning behaviour from factual knowledge: LoRA adapters shape the model's terse, systems-oriented reasoning style, while RAG supplies updatable context from external documents and research papers.",
    architecture:
      "Blueprint dataset -> LoRA fine-tune -> RAG retrieval -> CortexAI chat",
    details: [
      "Designed a Reasoning Blueprint System for first-principles decomposition, systems cognition, and compressed logic patterns.",
      "Generated a custom ~500k-example JSONL instruction dataset for supervised fine-tuning.",
      "Fine-tuned Mistral-7B-Instruct with LoRA adapters using PEFT and TRL on Apple Silicon MPS.",
      "Added a RAG layer using document ingestion, chunking, OpenAI text-embedding-3-small, and Qdrant vector search.",
    ],
    extraDetails: [
      "Built CortexAI as a research-paper chat interface combining the tuned reasoning style with retrieved external knowledge.",
      "Documented the architecture with diagrams covering reasoning blueprints, dataset generation, local training, and retrieval.",
    ],
  },
];

const experience = [
  {
    role: "Focused Infrastructure & Cloud Development",
    company: "Infrastructure, cloud, AI systems, and automation study",
    date: "Dec 2024 - Present",
    bullets: [
      "Built hands-on Azure, Terraform, Linux, automation, monitoring, backup, and CI/CD labs with documentation and portfolio evidence.",
      "Used AI tooling for technical research, documentation support, workflow optimisation, and AI systems experimentation.",
    ],
  },
  {
    role: "Systems Engineer",
    company: "Motorola Solutions, London",
    date: "Oct 2023 - Dec 2024",
    bullets: [
      "Improved VM provisioning speed by 40% through VMware ESXi optimisation.",
      "Administered Windows Server environments, including patching, updates, and maintenance.",
      "Supported lab infrastructure, networking, training operations, incidents, and technical issue management.",
    ],
  },
  {
    role: "Technical Support Engineer",
    company: "Utility Warehouse, London",
    date: "Oct 2022 - Mar 2023",
    bullets: [
      "Managed Active Directory, Okta, and Intune for 250+ Windows and macOS devices.",
      "Reduced downtime by 25% through proactive troubleshooting of VPN, firewall, and network issues.",
      "Documented escalated issues, fixes, and support procedures to improve knowledge sharing.",
    ],
  },
];

const skillGroups = [
  {
    title: "Professional Experience",
    skills: [
      "Windows Server",
      "Active Directory",
      "Intune",
      "Okta",
      "Entra ID",
      "Microsoft 365",
      "VMware ESXi",
      "Endpoint support",
      "Networking",
      "Troubleshooting",
      "Documentation",
    ],
  },
  {
    title: "Microsoft Infrastructure Labs",
    skills: [
      "Azure Virtual Machines",
      "Azure Virtual Network",
      "Network Security Groups",
      "Entra ID",
      "Conditional Access",
      "MFA",
      "Intune compliance/configuration policies",
      "Microsoft Graph PowerShell",
      "PowerShell automation",
      "Windows Server AD DS",
      "DNS / DHCP / GPO",
    ],
  },
  {
    title: "Supporting / Broader Labs",
    skills: [
      "Terraform",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
      "Loki",
      "Qdrant / RAG / CortexAI",
    ],
  },
];

function Header({ page }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isPortfolio = page === "portfolio";
  const navLinks = isPortfolio
    ? [
        { href: "/", label: "System Code" },
        { href: "#projects", label: "Projects" },
        { href: "#tinyllm", label: "TinyLLM" },
        { href: "#open-source", label: "Open Source" },
        { href: "#experience", label: "Experience" },
        { href: "#skills", label: "Skills" },
        { href: "#contact", label: "Contact" },
      ]
    : [
        { href: "#software", label: "Software" },
        { href: "#about", label: "About" },
        { href: "/portfolio", label: "Portfolio" },
        { href: "#contact", label: "Contact" },
      ];
  const navId = "site-navigation";

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header" id="top">
      <a className="brand" href="/" aria-label="System Code home">
        <img src={emblemSrc} alt="System Code logo" />
      </a>
      <button
        className="nav-toggle"
        type="button"
        aria-controls={navId}
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        {isMenuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
      </button>
      <nav
        className={`nav-links ${isMenuOpen ? "is-open" : ""}`}
        id={navId}
        aria-label="Main navigation"
      >
        {navLinks.map((link) => (
          <a href={link.href} key={link.label} onClick={handleNavClick}>
            {link.label}
          </a>
        ))}
        <a
          className="github-nav-link"
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="System Code GitHub"
          onClick={handleNavClick}
        >
          <FaGithub aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}

function formatBuildDate(value) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Local build";
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

function Footer({ isPortfolio, onBackToTop }) {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img className="footer-logo" src={logoSrc} alt="System Code logo" />
        <p>
          Practical software and infrastructure, built from first principles.
        </p>
        <p>© 2026 System Code Software. All rights reserved.</p>
        <p>System Code™ is a brand name of System Code Software.</p>
        <p className="deploy-note">
          Site version {buildInfo.commit} · Updated {formatBuildDate(buildInfo.builtAt)}
        </p>
      </div>
      <div className="footer-links">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {!isPortfolio && <a href="/portfolio">Portfolio</a>}
        <a href="#top" onClick={onBackToTop}>
          Back to top
        </a>
      </div>
    </footer>
  );
}

function SoftwareSection() {
  return (
    <section className="section-block software-section" id="software">
      <div className="section-heading">
        <h2>Software</h2>
        <p>
          Focused tools for infrastructure, automation, AI workflows, and
          practical systems.
        </p>
      </div>
      <div className="software-grid">
        {softwareProducts.map((product) => (
          <article
            className="software-card"
            id={
              product.title === "Principles of Nature"
                ? "principles-of-nature"
                : undefined
            }
            key={product.title}
          >
            <div>
              <span className="project-label">{product.type}</span>
              <h3>{product.title}</h3>
              <p className="software-status">{product.status}</p>
              <dl className="software-meta-list">
                <div>
                  <dt>Platform</dt>
                  <dd>{product.platform}</dd>
                </div>
                <div>
                  <dt>Purpose</dt>
                  <dd>{product.purpose}</dd>
                </div>
                <div>
                  <dt>Audience</dt>
                  <dd>{product.audience}</dd>
                </div>
                <div>
                  <dt>Support</dt>
                  <dd>{product.support}</dd>
                </div>
              </dl>
              <p>{product.description}</p>
              {product.features ? (
                <ul className="software-features">
                  {product.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              ) : null}
              {product.link ? (
                <div className="project-actions software-actions">
                  <a
                    className="text-link"
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {product.linkLabel}
                    <FaExternalLinkAlt aria-hidden="true" />
                  </a>
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function mailtoWithSubject(subject) {
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}`;
}

function ContactPathCards() {
  return (
    <div className="contact-path-grid" aria-label="Contact options">
      {contactPaths.map((path) => (
        <a
          className="contact-path-card"
          href={mailtoWithSubject(path.subject)}
          key={path.title}
        >
          <span>{path.title}</span>
          <p>{path.body}</p>
        </a>
      ))}
    </div>
  );
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderTinyLlmText(text) {
  const termPattern = new RegExp(
    `(${tinyLlmNoWrapTerms.map(escapeRegExp).join("|")})`,
    "gi"
  );
  const noWrapTerms = new Set(tinyLlmNoWrapTerms.map((term) => term.toLowerCase()));

  return text.split(termPattern).map((part, index) =>
    noWrapTerms.has(part.toLowerCase()) ? (
      <span className="tech-nowrap" key={`${part}-${index}`}>
        {part}
      </span>
    ) : (
      part
    )
  );
}

function formatTinyLlmResponse(response) {
  const lines = response.split(/\r?\n/);
  const elements = [];
  let listItems = [];
  let listType = null;

  const flushList = () => {
    if (!listItems.length) {
      return;
    }

    const ListTag = listType === "ol" ? "ol" : "ul";
    elements.push(
      <ListTag className="tinyllm-response-list" key={`list-${elements.length}`}>
        {listItems.map((item, index) => (
          <li key={`${item}-${index}`}>{renderTinyLlmText(item)}</li>
        ))}
      </ListTag>
    );
    listItems = [];
    listType = null;
  };

  lines.forEach((line, index) => {
    const trimmedLine = line.trim();

    if (!trimmedLine) {
      flushList();
      return;
    }

    const sectionPattern = new RegExp(
      `^(${tinyLlmSectionLabels.join("|")}):\\s*(.*)$`,
      "i"
    );
    const sectionMatch = trimmedLine.match(sectionPattern);

    if (sectionMatch) {
      flushList();
      elements.push(
        <div className="tinyllm-response-section" key={`section-${index}`}>
          <strong>{sectionMatch[1]}</strong>
          {sectionMatch[2] ? <p>{renderTinyLlmText(sectionMatch[2])}</p> : null}
        </div>
      );
      return;
    }

    const bulletMatch = trimmedLine.match(/^[-*•]\s+(.+)$/);
    const numberedMatch = trimmedLine.match(/^\d+[.)]\s+(.+)$/);

    if (bulletMatch || numberedMatch) {
      const nextListType = numberedMatch ? "ol" : "ul";

      if (listType && listType !== nextListType) {
        flushList();
      }

      listType = nextListType;
      listItems.push(bulletMatch ? bulletMatch[1] : numberedMatch[1]);
      return;
    }

    flushList();
    elements.push(
      <p key={`paragraph-${index}`}>{renderTinyLlmText(trimmedLine)}</p>
    );
  });

  flushList();

  return elements;
}

function TinyLlmSection() {
  const messagesEndRef = useRef(null);
  const [prompt, setPrompt] = useState(
    "Use first-principles systems compression to explain why local AI infrastructure matters."
  );
  const [messages, setMessages] = useState([]);
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSlowResponse, setIsSlowResponse] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");

  const handleClearTinyLlm = () => {
    setPrompt("");
    setMessages([]);
    setOutput("");
    setCopyStatus("");
    setIsSlowResponse(false);
  };

  const handlePromptChipClick = (examplePrompt) => {
    setPrompt(examplePrompt);
    setCopyStatus("");
  };

  const handlePromptChange = (event) => {
    setPrompt(event.target.value.slice(0, tinyLlmMaxPromptLength));
  };

  const handleCopyTinyLlmResponse = async (content = output) => {
    if (!content || isLoading) {
      return;
    }

    try {
      await navigator.clipboard.writeText(content);
      setCopyStatus("Copied");
    } catch (copyError) {
      console.error("TinyLLM copy failed", copyError);
      setCopyStatus("Copy failed");
    }
  };

  const handleAskTinyLlm = async (event) => {
    event.preventDefault();
    const userPrompt = prompt.trim();

    if (!userPrompt) {
      setOutput("");
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: "assistant",
          content: "Enter a prompt before asking TinyLLM.",
          isError: true,
        },
      ]);
      return;
    }

    setIsLoading(true);
    setIsSlowResponse(false);
    setCopyStatus("");
    setOutput("");
    setMessages((currentMessages) => [
      ...currentMessages,
      {
        role: "user",
        content: userPrompt,
      },
    ]);

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 45000);
    const slowResponseId = window.setTimeout(() => {
      setIsSlowResponse(true);
    }, 8000);

    try {
      // TODO: Move TinyLLM API calls behind a server-side proxy with API key/rate limiting before wider public release.
      const response = await fetch(tinyLlmEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        signal: controller.signal,
        body: JSON.stringify({
          model: "syscd-tinyllm",
          messages: [
            {
              role: "system",
              content: tinyLlmSystemPrompt,
            },
            {
              role: "user",
              content: userPrompt,
            },
          ],
        }),
      });

      if (!response.ok) {
        const errorBody = await response.text();
        if (tinyLlmOfflineStatuses.has(response.status)) {
          const offlineError = new Error(
            `TinyLLM gateway unavailable with HTTP ${response.status}: ${
              errorBody || response.statusText
            }`
          );
          offlineError.name = "TinyLlmOfflineError";
          throw offlineError;
        }
        throw new Error(
          `API offline or returned HTTP ${response.status}: ${errorBody || response.statusText}`
        );
      }

      const data = await response.json();
      const message = data?.choices?.[0]?.message?.content;

      if (!message) {
        throw new Error("TinyLLM returned an unexpected response format.");
      }

      setOutput(message);
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: "assistant",
          content: message,
        },
      ]);
    } catch (requestError) {
      let requestErrorMessage = "TinyLLM request failed.";
      let requestErrorNote = "";
      let isOfflineStatus = false;

      if (requestError instanceof DOMException && requestError.name === "AbortError") {
        requestErrorMessage = tinyLlmOfflineMessage;
        requestErrorNote = tinyLlmOfflineNote;
        isOfflineStatus = true;
      } else if (requestError instanceof TypeError) {
        requestErrorMessage = tinyLlmOfflineMessage;
        requestErrorNote = tinyLlmOfflineNote;
        isOfflineStatus = true;
      } else if (
        requestError instanceof Error &&
        requestError.name === "TinyLlmOfflineError"
      ) {
        requestErrorMessage = tinyLlmOfflineMessage;
        requestErrorNote = tinyLlmOfflineNote;
        isOfflineStatus = true;
      } else if (requestError instanceof Error) {
        requestErrorMessage = requestError.message;
      } else {
        requestErrorMessage = String(requestError);
      }

      console.error("TinyLLM request failed", requestError);
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: "assistant",
          content: requestErrorMessage,
          note: requestErrorNote,
          isError: !isOfflineStatus,
          isStatus: isOfflineStatus,
        },
      ]);
    } finally {
      window.clearTimeout(timeoutId);
      window.clearTimeout(slowResponseId);
      setIsLoading(false);
      setIsSlowResponse(false);
    }
  };

  useEffect(() => {
    if (typeof messagesEndRef.current?.scrollIntoView === "function") {
      messagesEndRef.current.scrollIntoView({
        block: "end",
        behavior: "smooth",
      });
    }
  }, [messages, isLoading, isSlowResponse]);

  return (
    <section className="section-block tinyllm-section" id="tinyllm">
      <div className="tinyllm-layout">
        <div className="tinyllm-project-hero">
          <span className="project-label">Experimental self-hosted AI demo</span>
          <h2>SysCd TinyLLM</h2>
          <p>
            {renderTinyLlmText(
              "Self-hosted fine-tuned AI assistant running on Azure infrastructure."
            )}
          </p>
          <div className="tinyllm-status-row" aria-label="TinyLLM status">
            {tinyLlmStatusBadges.map((badge) => (
              <span key={badge}>{renderTinyLlmText(badge)}</span>
            ))}
          </div>
        </div>

        <div className="architecture-strip" aria-label="TinyLLM architecture">
          {tinyLlmArchitecture.map((item, index) => (
            <span className="architecture-node" key={item}>
              {renderTinyLlmText(item)}
              {index < tinyLlmArchitecture.length - 1 ? (
                <span className="architecture-arrow" aria-hidden="true">
                  &rarr;
                </span>
              ) : null}
            </span>
          ))}
        </div>

        <article className="tinyllm-card tinyllm-chat-card">
          <div className="tinyllm-chat-heading">
            <div>
              <span className="tinyllm-live-badge">Live AI Demo</span>
              <h3>Ask SysCd TinyLLM</h3>
            </div>
            <p>
              {renderTinyLlmText(
                "Live chat interface connected to the self-hosted Azure model."
              )}
            </p>
          </div>
          <div className="tinyllm-chat-shell">
            <div className="tinyllm-prompt-chips" aria-label="Example prompts">
              {tinyLlmPromptChips.map((examplePrompt) => (
                <button
                  className={prompt === examplePrompt ? "is-selected" : ""}
                  type="button"
                  key={examplePrompt}
                  onClick={() => handlePromptChipClick(examplePrompt)}
                  disabled={isLoading}
                >
                  {examplePrompt}
                </button>
              ))}
            </div>

            <div className="tinyllm-output" aria-live="polite">
              <p className="demo-label">Conversation</p>
              {messages.length === 0 ? (
                <div className="tinyllm-empty-state">
                  <p>Ask TinyLLM to test the self-hosted Azure model.</p>
                </div>
              ) : null}
              {messages.map((message, index) => (
                <div
                  className={`tinyllm-chat-message ${
                    message.role === "user"
                      ? "tinyllm-chat-message-user"
                      : "tinyllm-chat-message-assistant"
                  } ${message.isError ? "tinyllm-chat-message-error" : ""} ${
                    message.isStatus ? "tinyllm-chat-message-status" : ""
                  }`}
                  key={`${message.role}-${index}`}
                >
                  <div className="tinyllm-message-meta">
                    <span>{message.role === "user" ? "You" : "TinyLLM"}</span>
                    {message.role === "assistant" &&
                    !message.isError &&
                    !message.isStatus ? (
                      <button
                        className="tinyllm-copy-inline"
                        type="button"
                        onClick={() => handleCopyTinyLlmResponse(message.content)}
                        disabled={isLoading || !message.content}
                      >
                        {copyStatus || "Copy response"}
                      </button>
                    ) : null}
                  </div>
                  {message.isStatus ? (
                    <div className="tinyllm-status-message">
                      <span>Offline / Cost Control</span>
                      <p>{renderTinyLlmText(message.content)}</p>
                      {message.note ? (
                        <small>{renderTinyLlmText(message.note)}</small>
                      ) : null}
                    </div>
                  ) : message.role === "assistant" && !message.isError ? (
                    <div className="tinyllm-response-message">
                      {formatTinyLlmResponse(message.content)}
                    </div>
                  ) : (
                    <p>{renderTinyLlmText(message.content)}</p>
                  )}
                </div>
              ))}
              {isLoading ? (
                <div className="tinyllm-chat-message tinyllm-chat-message-assistant">
                  <div className="tinyllm-message-meta">
                    <span>TinyLLM</span>
                  </div>
                  <p className="tinyllm-loading">
                    <span className="tinyllm-spinner" aria-hidden="true" />
                    Thinking...
                  </p>
                </div>
              ) : null}
              {isSlowResponse ? (
                <p className="tinyllm-slow-note">
                  Slow response detected. CPU inference can take a few seconds.
                </p>
              ) : null}
              <span ref={messagesEndRef} aria-hidden="true" />
            </div>

            <form className="tinyllm-composer" onSubmit={handleAskTinyLlm}>
              <div className="tinyllm-composer-meta">
                <label className="demo-label" htmlFor="tinyllm-prompt">
                  User prompt
                </label>
                <span>
                  {prompt.length}/{tinyLlmMaxPromptLength}
                </span>
              </div>
              <div className="tinyllm-composer-bar">
                <textarea
                  id="tinyllm-prompt"
                  value={prompt}
                  onChange={handlePromptChange}
                  maxLength={tinyLlmMaxPromptLength}
                  rows="2"
                  placeholder="Ask TinyLLM..."
                />
                <div className="tinyllm-composer-actions">
                  <button
                    className="button secondary tinyllm-clear"
                    type="button"
                    onClick={handleClearTinyLlm}
                    disabled={isLoading}
                  >
                    Clear
                  </button>
                  <button
                    className="button primary tinyllm-submit"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className="tinyllm-spinner" aria-hidden="true" />
                        Asking TinyLLM...
                      </>
                    ) : (
                      "Ask TinyLLM"
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </article>

        <article className="tinyllm-card tinyllm-summary-card">
          <p>
            {renderTinyLlmText(
              "SysCd TinyLLM is a self-hosted AI assistant built around Qwen2.5-1.5B. It was fine-tuned with PEFT LoRA, merged into GGUF, quantized, and deployed on an Azure Ubuntu VM using llama.cpp, Nginx, and Terraform."
            )}
          </p>
          <ul className="software-features tinyllm-highlights">
            {tinyLlmHighlights.map((highlight) => (
              <li key={highlight}>{renderTinyLlmText(highlight)}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

function TinyLlmLinks() {
  return (
    <div className="tinyllm-chat-footer">
      <p className="tinyllm-note">
        {renderTinyLlmText(
          "Runs on a CPU-only Azure VM, so responses may take a few seconds."
        )}
      </p>
      <div className="tinyllm-link-row" aria-label="TinyLLM links">
        {tinyLlmLinks.map((link) => (
          <a
            href={link.href}
            key={link.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function ReasoningBlueprintSection() {
  return (
    <section
      className="section-block reasoning-blueprint-section"
      id="reasoning-blueprint"
    >
      <article className="blueprint-card">
        <div className="blueprint-title-row">
          <div>
            <p className="eyebrow">Reasoning format</p>
            <h2>Reasoning Style Blueprint</h2>
          </div>
          <p>
            SysCd TinyLLM was fine-tuned to use a first-principles systems
            reasoning format.
          </p>
        </div>

        <div className="blueprint-grid">
          <section className="blueprint-panel">
            <h3>How it was made</h3>
            <ol className="blueprint-step-list">
              {blueprintBuildSteps.map(([title, body]) => (
                <li key={title}>
                  <span className="blueprint-step-dot" aria-hidden="true" />
                  <div>
                    <strong>{title}</strong>
                    <p>{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="blueprint-panel blueprint-reasoning-panel">
            <h3>Reasoning style</h3>
            <div className="law-grid">
              {blueprintReasoningExamples.map(([law, compression]) => (
                <div className="law-card" key={law}>
                  <strong>{law}</strong>
                  <span>{compression}</span>
                </div>
              ))}
            </div>
            <div className="compression-flow" aria-hidden="true" />
            <div className="compression-box">
              <span>Principles Compression</span>
              <ul>
                {blueprintReasoningExamples.map(([, compression]) => (
                  <li key={compression}>{compression}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="blueprint-panel">
            <h3>Logical hierarchy</h3>
            <ol className="hierarchy-list">
              {blueprintHierarchy.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </section>
        </div>

        <ul className="blueprint-notes" aria-label="Reasoning blueprint notes">
          {reasoningBlueprintNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}

function getPageFromPath(pathname) {
  const normalizedPath = pathname.replace(/\/$/, "") || "/";

  if (normalizedPath === "/portfolio") {
    return "portfolio";
  }

  if (normalizedPath === "/software") {
    return "software";
  }

  if (normalizedPath === "/about") {
    return "about";
  }

  if (normalizedPath === "/contact") {
    return "contact";
  }

  return "home";
}

function syncMeta(name, content, attribute = "name") {
  let element = document.head.querySelector(`meta[${attribute}="${name}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function syncCanonical(href) {
  let element = document.head.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

function syncStructuredData(meta) {
  let element = document.head.querySelector(
    'script[data-schema="system-code"]'
  );

  if (!element) {
    element = document.createElement("script");
    element.setAttribute("type", "application/ld+json");
    element.setAttribute("data-schema", "system-code");
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "System Code",
    legalName: "System Code Software",
    url: siteUrl,
    email: contact.email,
    description: meta.description,
  });
}

function HomePage() {
  return (
    <main>
      <section className="hero-section home-hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <h1 className="brand-hero-title" id="home-title">
            System Code
          </h1>
          <p className="hero-lede">
            Practical software and infrastructure,
            <br />
            built from first principles.
          </p>
          <p className="home-summary">
            Independent software, infrastructure tools, and AI-focused products
            built under System Code.
          </p>
          <div className="hero-actions" aria-label="Homepage actions">
            <a className="button primary" href="#software">
              Explore Software
            </a>
            <a className="button secondary" href="/portfolio">
              View Portfolio
            </a>
          </div>
        </div>
      </section>

      <SoftwareSection />

      <section className="section-block" id="products">
        <div className="section-heading">
          <h2>Product Focus</h2>
          <p>
            System Code products are small, practical systems: shipped or
            in-progress tools with clear support paths, careful documentation,
            and a focus on useful software rather than noise.
          </p>
        </div>
        <div className="specialty-grid">
          <article className="specialty-card">
            <h3>Independent Apps</h3>
            <p>
              Focused iOS products built around daily use, reading, reminders,
              widgets, and clean support operations.
            </p>
          </article>
          <article className="specialty-card">
            <h3>Infrastructure Tools</h3>
            <p>
              Practical tooling ideas shaped by Microsoft infrastructure,
              automation, documentation, and operational reliability.
            </p>
          </article>
          <article className="specialty-card">
            <h3>AI-Focused Systems</h3>
            <p>
              Private experiments around privacy-focused AI workflows and
              user-controlled software infrastructure.
            </p>
          </article>
        </div>
      </section>

      <section className="section-block split-section" id="about">
        <div className="section-heading sticky-heading">
          <h2>Software from systems thinking.</h2>
        </div>
        <div className="timeline-list">
          <article className="timeline-entry">
            <img
              className="system-code-mark system-code-mark-small"
              src={logoSrc}
              alt="System Code logo"
            />
            <p>
              System Code is an independent software and infrastructure brand
              for practical tools, automation, AI workflows, and technical
              systems.
            </p>
            <p>
              The work sits at the intersection of practical software,
              Microsoft infrastructure, automation, AI-assisted workflows, and
              first-principles documentation.
            </p>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Software, support, and technical enquiries.</h2>
          <p className="contact-line">
            For product support, collaborations, or technical enquiries, contact
            System Code at:{" "}
            <a
              className="button primary inline-contact-button"
              href={mailtoWithSubject("System Code enquiry")}
            >
              <FaEnvelope aria-hidden="true" />
              {contact.email}
            </a>
          </p>
          <ContactPathCards />
        </div>
      </section>
    </main>
  );
}

function PortfolioPage() {
  return (
    <main>
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Azure &amp; Microsoft Infrastructure Engineer</p>
          <h1 id="hero-title">Erik Gombar</h1>
          <p className="hero-lede">
            Building reliable systems across identity, endpoints, automation,
            cloud infrastructure, and deployment workflows.
          </p>
          <div className="hero-tags" aria-label="Microsoft infrastructure focus">
            {heroTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="hero-actions" aria-label="Primary contact links">
            <a
              className="button primary"
              href={mailtoWithSubject("Infrastructure and cloud enquiry")}
            >
              <FaEnvelope aria-hidden="true" />
              Email
            </a>
          </div>
        </div>
      </section>

      <section className="section-block thinking-section" id="thinking">
        <div className="section-heading">
          <p className="eyebrow">Approach</p>
          <h2>First-Principles Approach</h2>
          <p>
            I approach infrastructure from first principles: what components
            exist, how they connect, what assumptions they depend on, and where
            they can fail.
          </p>
          <p>
            My systems-thinking approach helps me map identity, endpoints,
            servers, networking, policies, automation, monitoring, access paths,
            and failure points into clear diagrams, fixes, and repeatable
            workflows.
          </p>
        </div>
        <div className="thinking-grid">
          {thinkingCards.map((card) => (
            <article className="thinking-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block working-section" id="working-style">
        <div className="section-heading">
          <p className="eyebrow">Working Style</p>
          <h2>Working Style</h2>
          <p>
            I&apos;m a calm, independent and systems-focused engineer who works
            best with clear problems, practical evidence and well-documented
            technical environments.
          </p>
          <p>
            I work best in technical environments where identity, endpoint,
            server, network, and cloud components need to be understood clearly,
            documented properly, and improved systematically.
          </p>
          <p>
            I prefer to understand the underlying structure of a system before
            changing it: the components, dependencies, assumptions, access paths
            and likely failure points.
          </p>
          <p>
            My working style is direct, analytical and outcome-focused: map the
            system, isolate the issue, test the fix, document the result, and
            make the process easier to repeat.
          </p>
        </div>
        <div className="working-grid">
          {workingStyleCards.map((card) => (
            <article className="working-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block" id="projects">
        <div className="section-heading">
          <p className="eyebrow">Selected labs</p>
          <h2>Technical Projects</h2>
          <p>
            Microsoft infrastructure is the core focus: identity, endpoints,
            Windows Server, Azure, automation, monitoring, and operational
            documentation. Additional cloud and AI systems projects demonstrate
            broader systems-thinking, automation, and architecture skills.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article
              className={`project-card ${
                project.featured ? "featured-project" : ""
              }`}
              id={project.id}
              key={project.title}
            >
              <div>
                {project.label && (
                  <span className="project-label">{project.label}</span>
                )}
                <h3>{project.title}</h3>
                {project.subtitle && (
                  <p className="project-subtitle">{project.subtitle}</p>
                )}
                <p>{project.summary}</p>
                {project.shortText && <p>{project.shortText}</p>}
                {project.architecture && (
                  <p className="architecture-line">{project.architecture}</p>
                )}
                {project.details && (
                  <ul className="project-details">
                    {project.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                )}
                {project.extraDetails && (
                  <details className="project-more">
                    <summary>More architecture notes</summary>
                    <ul>
                      {project.extraDetails.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </details>
                )}
              </div>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-actions">
                <a
                  className="text-link"
                  href={project.link}
                  target={project.link.startsWith("http") ? "_blank" : undefined}
                  rel={
                    project.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {project.linkLabel || "View repository"}
                  <FaExternalLinkAlt aria-hidden="true" />
                </a>
                {project.demoLink && (
                  <a
                    className="text-link"
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View CortexAI demo
                    <FaExternalLinkAlt aria-hidden="true" />
                  </a>
                )}
                {project.writeupLink && (
                  <a
                    className="text-link"
                    href={project.writeupLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read write-up
                    <FaExternalLinkAlt aria-hidden="true" />
                  </a>
                )}
                {project.readmeLink && (
                  <a
                    className="text-link"
                    href={project.readmeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read README
                    <FaExternalLinkAlt aria-hidden="true" />
                  </a>
                )}
                {project.diagramLink && (
                  <a
                    className="text-link"
                    href={project.diagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View diagrams
                    <FaExternalLinkAlt aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <TinyLlmSection />

      <ReasoningBlueprintSection />

      <TinyLlmLinks />

      <section className="section-block open-source-section" id="open-source">
        <div className="section-heading">
          <p className="eyebrow">Open source</p>
          <h2>Open Source Contributions</h2>
          <p>
            I contribute to open-source AI and infrastructure projects, focusing
            on practical documentation, local model workflows, Apple Silicon
            development, RAG systems, and AI engineering tooling.
          </p>
        </div>
        <div className="open-source-grid">
          {openSourceContributions.map((contribution) => (
            <article className="open-source-card" key={contribution.pr}>
              <div>
                <div className="tag-row contribution-tags">
                  {contribution.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <h3>{contribution.contribution}</h3>
                <dl className="contribution-meta">
                  <div>
                    <dt>Project</dt>
                    <dd>{contribution.project}</dd>
                  </div>
                  <div>
                    <dt>Organisation</dt>
                    <dd>{contribution.organisation}</dd>
                  </div>
                  <div>
                    <dt>Type</dt>
                    <dd>{contribution.type}</dd>
                  </div>
                  <div>
                    <dt>Status</dt>
                    <dd>{contribution.status}</dd>
                  </div>
                  <div>
                    <dt>PR</dt>
                    <dd>{contribution.pr}</dd>
                  </div>
                  <div>
                    <dt>Technologies</dt>
                    <dd>{contribution.technologies}</dd>
                  </div>
                </dl>
                <p>{contribution.description}</p>
              </div>
              <div className="project-actions">
                <a
                  className="text-link"
                  href={contribution.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Pull Request
                  <FaExternalLinkAlt aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block split-section" id="experience">
        <div className="section-heading sticky-heading">
          <p className="eyebrow">Professional record</p>
          <h2>Experience</h2>
          <p>
            Microsoft-focused infrastructure and support experience across
            Windows Server, Active Directory, Intune, Okta, Microsoft 365,
            VMware ESXi, endpoint support, networking, documentation, and
            troubleshooting.
          </p>
        </div>
        <div className="timeline-list">
          {experience.map((item) => (
            <article className="timeline-entry" key={item.role}>
              <span className="date-pill">{item.date}</span>
              <h3>{item.role}</h3>
              <p className="company">{item.company}</p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block" id="skills">
        <div className="section-heading">
          <p className="eyebrow">Tooling range</p>
          <h2>Technical Skills</h2>
          <p>
            Split by where the evidence comes from: professional Microsoft
            infrastructure experience, Microsoft-focused labs, and supporting
            broader cloud and systems projects.
          </p>
        </div>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tag-row">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block education-section">
        <div className="section-heading education-heading">
          <p className="eyebrow">Education</p>
        </div>
        <article className="education-card">
          <h2>BSc (Hons) Computer Science</h2>
          <p>Brunel University London · 2018–2022</p>
          <p>Academic Excellence CEDPS Scholarship Recipient</p>
        </article>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2>Available for infrastructure and cloud engineering roles.</h2>
          <p className="contact-line">
            For roles, collaborations, or technical enquiries, contact me at:{" "}
            <a
              className="button primary inline-contact-button"
              href={mailtoWithSubject("Infrastructure and cloud enquiry")}
            >
              <FaEnvelope aria-hidden="true" />
              {contact.email}
            </a>
          </p>
          <ContactPathCards />
        </div>
      </section>
    </main>
  );
}

function App() {
  const page = getPageFromPath(window.location.pathname);
  const isPortfolio = page === "portfolio";

  useEffect(() => {
    const meta = pageMeta[page] || pageMeta.home;

    document.title = meta.title;
    syncMeta("description", meta.description);
    syncMeta("og:title", meta.title, "property");
    syncMeta("og:description", meta.description, "property");
    syncMeta("og:url", meta.canonical, "property");
    syncMeta("twitter:title", meta.title);
    syncMeta("twitter:description", meta.description);
    syncMeta("deployment-commit", buildInfo.commit);
    syncMeta("deployment-built-at", buildInfo.builtAt);
    syncCanonical(meta.canonical);
    syncStructuredData(meta);
  }, [page]);

  useEffect(() => {
    const sectionMap = {
      software: "software",
      about: "about",
      contact: "contact",
    };
    const sectionId = sectionMap[page];

    if (!sectionId || window.location.hash) {
      return;
    }

    window.requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({ block: "start" });
    });
  }, [page]);

  useEffect(() => {
    const sections = document.querySelectorAll(
      ".hero-section, .section-block, .contact-section, .site-footer"
    );
    const prefersReducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    sections.forEach((section) => {
      section.classList.add("reveal-section");
      if (section.getBoundingClientRect().top < window.innerHeight * 0.9) {
        section.classList.add("is-visible");
      }
    });

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      sections.forEach((section) => {
        section.classList.add("is-visible");
      });
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -80px 0px",
        threshold: 0.12,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [page]);

  const handleBackToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="site-shell">
      <Header page={page} />
      {isPortfolio ? <PortfolioPage /> : <HomePage />}
      <Footer isPortfolio={isPortfolio} onBackToTop={handleBackToTop} />
    </div>
  );
}

export default App;
