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

const highlights = [
  {
    value: "40%",
    label: "Faster VM provisioning through VMware ESXi optimisation",
  },
  {
    value: "250+",
    label: "Windows and macOS endpoints supported across identity tooling",
  },
  {
    value: "25%",
    label: "Downtime reduction through proactive network troubleshooting",
  },
];

const thinkingCards = [
  {
    title: "First Principles",
    body: "Break problems down into components, assumptions, dependencies, and constraints.",
  },
  {
    title: "Systems Thinking",
    body: "Map how identity, networks, endpoints, cloud, automation, and operations interact.",
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

const projects = [
  {
    title: "Reasoning-Enhanced SLM 2.0",
    subtitle: "AI infrastructure pipeline for local fine-tuning and RAG",
    label: "AI Infrastructure Lab",
    link: "https://github.com/SysCd/Reasoning-Enhanced-SLM-2.0",
    readmeLink:
      "https://github.com/SysCd/Reasoning-Enhanced-SLM-2.0/blob/main/README.md",
    featured: true,
    tags: [
      "Mistral-7B",
      "LoRA",
      "PEFT",
      "TRL",
      "RAG",
      "Qdrant",
      "OpenAI Embeddings",
      "Apple Silicon MPS",
      "Python",
      "Dataset Generation",
    ],
    summary:
      "An AI systems project combining reasoning-blueprint dataset generation, LoRA adapter fine-tuning, local Apple Silicon training, and Qdrant-backed RAG retrieval.",
    shortText:
      "Built a local model-improvement pipeline for Mistral-7B-Instruct using PEFT, TRL, Apple Silicon MPS, OpenAI embeddings, and Qdrant.",
    details: [
      "Designed a reasoning-blueprint system for reusable prompt and dataset-generation patterns.",
      "Fine-tuned Mistral-7B-Instruct with LoRA adapters using PEFT and TRL.",
      "Added a RAG layer using arXiv documents, chunking, OpenAI text-embedding-3-small, and Qdrant.",
      "Documented the architecture with diagrams covering reasoning, data generation, local training, and retrieval.",
    ],
  },
  {
    title: "Microsoft Identity & Endpoint Lab",
    link: "https://github.com/SysCd/Microsoft-Identity-Endpoint-Lab",
    tags: ["Entra ID", "Intune", "Microsoft 365", "PowerShell"],
    summary:
      "Built a dedicated Microsoft cloud administration lab covering users, groups, roles, Conditional Access, MFA, endpoint configuration, scripted exports, validation evidence, and operational documentation.",
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
    title: "Hands-on Labs",
    skills: [
      "AWS",
      "Azure",
      "Terraform",
      "Docker",
      "Kubernetes",
      "EKS",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
      "Loki",
      "Ansible",
      "Microsoft Graph PowerShell",
    ],
  },
];

function App() {
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
            <p className="eyebrow">Infrastructure Engineer</p>
            <h1 id="hero-title">Erik Gombar</h1>
            <p className="hero-lede">
              First-principles infrastructure engineer using systems thinking
              to build, troubleshoot, and document reliable technical
              environments across identity, networking, virtualisation,
              automation, monitoring, and cloud infrastructure.
            </p>
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

          <div className="hero-visual" aria-label="Systems blueprint">
            <div className="visual-topline">
              <span>Systems blueprint</span>
              <strong>Infrastructure &rarr; Cloud</strong>
            </div>
            <div className="blueprint-map" aria-hidden="true">
              <svg viewBox="0 0 520 300" role="img">
                <g className="blueprint-lines">
                  <path d="M102 78 H260 H418" />
                  <path d="M102 78 L260 150" />
                  <path d="M418 78 L260 150" />
                  <path d="M260 150 V224" />
                  <path d="M160 224 H360" />
                  <path d="M160 224 L260 150" />
                  <path d="M360 224 L260 150" />
                </g>
                <g className="blueprint-node">
                  <rect x="54" y="52" width="96" height="52" rx="8" />
                  <text x="102" y="83">Identity</text>
                </g>
                <g className="blueprint-node">
                  <rect x="206" y="52" width="108" height="52" rx="8" />
                  <text x="260" y="83">Network</text>
                </g>
                <g className="blueprint-node">
                  <rect x="370" y="52" width="96" height="52" rx="8" />
                  <text x="418" y="83">Compute</text>
                </g>
                <g className="blueprint-node core-node">
                  <rect x="198" y="120" width="124" height="60" rx="10" />
                  <text x="260" y="154">Operations</text>
                </g>
                <g className="blueprint-node">
                  <rect x="104" y="198" width="112" height="52" rx="8" />
                  <text x="160" y="229">Automation</text>
                </g>
                <g className="blueprint-node">
                  <rect x="300" y="198" width="120" height="52" rx="8" />
                  <text x="360" y="229">Monitoring</text>
                </g>
              </svg>
            </div>
            <p className="blueprint-caption">
              Map dependencies. Isolate failures. Document fixes.
            </p>
          </div>
        </section>

        <section className="metrics-band" aria-label="Career highlights">
          {highlights.map((item) => (
            <article className="metric-card" key={item.value}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </section>

        <section className="section-block thinking-section" id="thinking">
          <div className="section-heading">
            <p className="eyebrow">Approach</p>
            <h2>How I Think</h2>
            <p>
              I approach infrastructure from first principles: what components
              exist, how they connect, what assumptions they depend on, and
              where they can fail.
            </p>
            <p>
              My systems-thinking approach helps me map identity, networking,
              endpoints, virtualisation, automation, monitoring, and operational
              processes into clear diagrams, fixes, and repeatable workflows.
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
              Infrastructure and cloud remain the core focus, with one advanced
              AI infrastructure lab showing how I apply the same systems
              thinking to model pipelines, local training workflows, and
              retrieval architecture.
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
                  {project.details && (
                    <ul className="project-details">
                      {project.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
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
                  {project.diagramLink && (
                    <a
                      className="text-link"
                      href={project.diagramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View diagram
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
              Hands-on engineering and support experience across enterprise
              infrastructure, endpoint management, networking, operational
              continuity, and documentation.
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
              Split by where the evidence comes from: professional infrastructure
              roles versus hands-on lab and portfolio work.
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
        <a href="#top">Back to top</a>
      </footer>
    </div>
  );
}

export default App;
