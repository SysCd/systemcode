import "./index.css";
import {
  FaDownload,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const contact = {
  email: "catcheg5@outlook.com",
  phone: "+44 7547 970 689",
  location: "London, UK",
  github: "https://github.com/SysCd",
  cv: `${process.env.PUBLIC_URL}/Erik-Gombar-CV.pdf`,
};

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

const outsideWork = [
  "Strength Training",
  "AI / Cloud Labs",
  "Systems Diagrams",
  "Technical Writing",
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

const projects = [
  {
    title: "Microsoft Identity & Endpoint Lab",
    link: "https://github.com/SysCd/Microsoft-Identity-Endpoint-Lab",
    tags: ["Entra ID", "Intune", "Microsoft 365", "PowerShell"],
    summary:
      "Built a dedicated Microsoft cloud administration lab covering users, groups, roles, Conditional Access, MFA, endpoint configuration, scripted exports, validation evidence, and operational documentation.",
  },
  {
    title: "Windows Server Active Directory Lab",
    link: "https://github.com/SysCd/windows-server-ad-lab",
    readmeLink: "https://github.com/SysCd/windows-server-ad-lab/blob/main/README.md",
    tags: ["Windows Server 2022", "Active Directory", "DNS", "Group Policy", "SMB"],
    summary:
      "Built a local Microsoft infrastructure lab with a Windows Server 2022 domain controller, Active Directory, DNS, Group Policy, SMB file shares, and a domain-joined client.",
    shortText:
      "Validated group-based access control end to end by creating department security groups, NTFS permissions, DNS records, domain login flows, and share access tests.",
  },
  {
    title: "Azure Infrastructure Admin Lab",
    link: "https://github.com/SysCd/Azure-Infrastructure-Admin-Lab",
    tags: ["Azure VMs", "Virtual Network", "NSGs", "Linux"],
    summary:
      "Administered Azure infrastructure with Linux virtual machines, secure remote access, virtual networking, baseline validation, user provisioning, and initial security hardening.",
  },
  {
    title: "AWS DevOps Lab",
    link: "https://github.com/SysCd/aws-devops-ci-cd",
    tags: ["AWS EKS", "Terraform", "CI/CD", "Monitoring"],
    summary:
      "Provisioned cloud infrastructure with Terraform, deployed a containerized application to AWS EKS, and connected GitHub Actions with Prometheus and Grafana monitoring.",
  },
  {
    title: "CortexAI / Reasoning-Enhanced SLM 2.0",
    subtitle: "Custom reasoning model + RAG research assistant",
    label: "Advanced AI Systems Lab",
    link: "https://github.com/SysCd/Reasoning-Enhanced-SLM-2.0",
    readmeLink:
      "https://github.com/SysCd/Reasoning-Enhanced-SLM-2.0/blob/main/README.md",
    diagramLink:
      "https://github.com/SysCd/Reasoning-Enhanced-SLM-2.0/tree/main/Diagrams",
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
      "Built hands-on Azure, AWS, Terraform, Linux, automation, monitoring, backup, and CI/CD labs with documentation and portfolio evidence.",
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
      "AWS EC2 / VPC / IAM",
      "Qdrant / RAG / CortexAI",
    ],
  },
];

function HeroCircuitGraphic() {
  return (
    <div className="hero-circuit" aria-hidden="true">
      <svg viewBox="0 0 560 520" role="img">
        <defs>
          <linearGradient id="traceFade" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#17181c" stopOpacity="0.24" />
            <stop offset="1" stopColor="#0f8b6f" stopOpacity="0.48" />
          </linearGradient>
          <linearGradient id="signalFade" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#0f8b6f" stopOpacity="0" />
            <stop offset="0.5" stopColor="#0f8b6f" stopOpacity="0.62" />
            <stop offset="1" stopColor="#0f8b6f" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g className="board-planes">
          <rect x="158" y="92" width="290" height="300" rx="24" />
          <rect x="188" y="128" width="230" height="226" rx="18" />
        </g>
        <rect className="chip-core" x="218" y="178" width="126" height="126" rx="14" />
        <rect className="chip-inner" x="242" y="202" width="78" height="78" rx="9" />
        <g className="chip-pins">
          <path d="M236 160 v-34" />
          <path d="M260 160 v-56" />
          <path d="M284 160 v-42" />
          <path d="M308 160 v-64" />
          <path d="M236 322 v42" />
          <path d="M260 322 v70" />
          <path d="M284 322 v50" />
          <path d="M308 322 v62" />
          <path d="M200 196 h-58" />
          <path d="M200 220 h-86" />
          <path d="M200 244 h-66" />
          <path d="M200 268 h-96" />
          <path d="M362 196 h78" />
          <path d="M362 220 h108" />
          <path d="M362 244 h84" />
          <path d="M362 268 h124" />
        </g>
        <g className="circuit-traces">
          <path d="M260 104 H154 V70 H82" />
          <path d="M308 96 H410 V58 H496" />
          <path d="M142 196 V142 H66" />
          <path d="M114 220 H70 V292 H28" />
          <path d="M104 268 V348 H178 V402" />
          <path d="M260 392 V454 H122" />
          <path d="M308 384 V430 H424 V480" />
          <path d="M440 196 V132 H512" />
          <path d="M470 220 H514 V304 H548" />
          <path d="M446 244 V342 H502" />
        </g>
        <g className="signal-traces">
          <path d="M260 104 H154 V70 H82" />
          <path d="M308 384 V430 H424 V480" />
        </g>
        <g className="circuit-nodes">
          <circle cx="82" cy="70" r="5" />
          <circle className="pulse-node" cx="496" cy="58" r="5" />
          <circle cx="66" cy="142" r="4" />
          <circle cx="28" cy="292" r="4" />
          <circle cx="178" cy="402" r="4" />
          <circle cx="122" cy="454" r="5" />
          <circle className="pulse-node" cx="424" cy="480" r="5" />
          <circle cx="512" cy="132" r="4" />
          <circle cx="548" cy="304" r="4" />
          <circle cx="502" cy="342" r="5" />
        </g>
      </svg>
    </div>
  );
}

function App() {
  const handleBackToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="site-shell">
      <header className="site-header" id="top">
        <a className="brand" href="#top" aria-label="Erik Gombar home">
          EG
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Microsoft Infrastructure Engineer</p>
            <h1 id="hero-title">Erik Gombar</h1>
            <p className="hero-lede">
              First-principles Microsoft infrastructure engineer using systems
              thinking to build, troubleshoot, and document reliable
              environments across Azure, Intune, Entra ID, Windows Server,
              identity, endpoints, automation, and monitoring.
            </p>
            <div className="hero-tags" aria-label="Microsoft infrastructure focus">
              {heroTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="hero-actions" aria-label="Primary contact links">
              <a className="button primary" href={`mailto:${contact.email}`}>
                <FaEnvelope aria-hidden="true" />
                Email
              </a>
              <a
                className="button secondary"
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub aria-hidden="true" />
                GitHub
              </a>
              <a
                className="button secondary"
                href={contact.cv}
                download="Erik-Gombar-CV.pdf"
              >
                <FaDownload aria-hidden="true" />
                Download CV
              </a>
            </div>
            <div className="contact-strip" aria-label="Location and phone">
              <span>
                <FaMapMarkerAlt aria-hidden="true" />
                {contact.location}
              </span>
              <a href="tel:+447547970689">
                <FaPhoneAlt aria-hidden="true" />
                {contact.phone}
              </a>
            </div>
          </div>

          <HeroCircuitGraphic />
        </section>

        <section className="section-block thinking-section" id="thinking">
          <div className="section-heading">
            <p className="eyebrow">Approach</p>
            <h2>First-Principles Approach</h2>
            <p>
              I approach infrastructure from first principles: what components
              exist, how they connect, what assumptions they depend on, and
              where they can fail.
            </p>
            <p>
              My systems-thinking approach helps me map identity, endpoints,
              servers, networking, policies, automation, monitoring, access
              paths, and failure points into clear diagrams, fixes, and
              repeatable workflows.
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
              I&apos;m a calm, independent and systems-focused engineer who
              works best with clear problems, practical evidence and
              well-documented technical environments.
            </p>
            <p>
              I work best in technical environments where identity, endpoint,
              server, network, and cloud components need to be understood
              clearly, documented properly, and improved systematically.
            </p>
            <p>
              I prefer to understand the underlying structure of a system before
              changing it: the components, dependencies, assumptions, access
              paths and likely failure points.
            </p>
            <p>
              My working style is direct, analytical and outcome-focused: map
              the system, isolate the issue, test the fix, document the result,
              and make the process easier to repeat.
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
              documentation. Additional cloud and AI systems projects
              demonstrate broader systems-thinking, automation, and architecture
              skills.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article
                className={`project-card ${
                  project.featured ? "featured-project" : ""
                }`}
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
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View repository
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
          <div>
            <p className="eyebrow">Education</p>
            <h2>BSc (Hons) Computer Science</h2>
            <p>
              Brunel University London, September 2018 - April 2022. Academic
              Excellence CEDPS Scholarship Recipient.
            </p>
          </div>
          <div className="language-card">
            <span>Languages</span>
            <strong>English, Slovak</strong>
          </div>
        </section>

        <section className="section-block outside-work-section">
          <div className="section-heading">
            <p className="eyebrow">Outside Work</p>
            <h2>Outside Work</h2>
          </div>
          <article className="outside-work-card">
            <p>
              Outside work, I&apos;m into strength training, AI/cloud labs,
              systems diagrams, and technical writing &mdash; especially turning
              complex ideas into clear, practical explanations.
            </p>
            <div className="outside-tags" aria-label="Outside work interests">
              {outsideWork.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2>Available for infrastructure and cloud engineering roles.</h2>
            <p>
              I am based in London and open to roles where dependable systems,
              clear documentation, and strong troubleshooting matter.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button primary" href={`mailto:${contact.email}`}>
              <FaEnvelope aria-hidden="true" />
              {contact.email}
            </a>
            <a className="button secondary" href="tel:+447547970689">
              <FaPhoneAlt aria-hidden="true" />
              {contact.phone}
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>Erik Gombar</span>
        <a href="#top" onClick={handleBackToTop}>
          Back to top
        </a>
      </footer>
    </div>
  );
}

export default App;
