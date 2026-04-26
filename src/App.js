import "./index.css";
import {
  FaCloud,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaMapMarkerAlt,
  FaNetworkWired,
  FaPhoneAlt,
  FaServer,
  FaShieldAlt,
  FaTerminal,
  FaTools,
} from "react-icons/fa";

const contact = {
  email: "catcheg5@outlook.com",
  phone: "+44 7547 970 689",
  location: "London, UK",
  github: "https://github.com/SysCd",
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

const specialties = [
  {
    icon: <FaServer />,
    title: "Systems Administration",
    body: "Windows Server 2019/2022, Active Directory, Intune, Okta, Entra ID, Microsoft 365, patching, access policies, MFA, and Conditional Access.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud & Infrastructure",
    body: "AWS EC2, VPC, IAM, CloudWatch, EKS, Azure VMs, virtual networking, NSGs, Terraform, Docker, and Kubernetes fundamentals.",
  },
  {
    icon: <FaTerminal />,
    title: "Automation & Operations",
    body: "PowerShell, Microsoft Graph PowerShell, Bash, Ansible, GitHub Actions, Prometheus, Grafana, Loki, documentation, and support workflow optimisation.",
  },
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
      "First-Principles Reasoning",
    ],
    summary:
      "An AI infrastructure project combining reasoning-blueprint data generation, LoRA adapter fine-tuning, local Apple Silicon training, and RAG retrieval with Qdrant.",
    shortText:
      "Built a local model-improvement pipeline for Mistral-7B-Instruct with LoRA on Apple Silicon MPS, then added a Qdrant-backed RAG layer using OpenAI embeddings for grounded knowledge retrieval.",
    details: [
      "Created a structured Reasoning Blueprint System to turn domain knowledge into reusable prompt and data-generation patterns.",
      "Generated supervised fine-tuning data in OpenAI-style message format JSONL.",
      "Configured LoRA adapter fine-tuning for Mistral-7B-Instruct using PEFT and TRL.",
      "Ran the local training workflow on Apple Silicon MPS with fp16.",
      "Built a RAG layer using arXiv documents, chunking, OpenAI text-embedding-3-small, and Qdrant.",
      "Separated model behaviour from factual knowledge: adapters shape response patterns, while RAG supplies updateable retrieval context.",
      "Included diagrams covering first-principles reasoning, data-generation architecture, local training flow, and RAG architecture.",
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
    role: "Career Development Break",
    company: "Infrastructure, cloud, AI, and automation study",
    date: "Dec 2024 - Present",
    bullets: [
      "Refocused on infrastructure and cloud engineering through hands-on Azure, AWS, Terraform, Linux, automation, monitoring, backup, and CI/CD projects.",
      "Used AI tooling for technical research, documentation support, prompt engineering, and workflow optimisation.",
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
    title: "Microsoft & Identity",
    skills: [
      "Windows Server",
      "Active Directory",
      "Intune",
      "Okta",
      "Entra ID",
      "Microsoft 365",
      "MFA",
    ],
  },
  {
    title: "Virtualisation & Networking",
    skills: [
      "VMware ESXi",
      "Hyper-V fundamentals",
      "TCP/IP",
      "VLANs",
      "VPN",
      "DNS",
      "DHCP",
      "Aruba switching",
    ],
  },
  {
    title: "Linux, Cloud & Containers",
    skills: [
      "RHEL",
      "Ubuntu",
      "AWS",
      "Azure",
      "Terraform",
      "Docker",
      "Kubernetes",
      "EKS",
    ],
  },
  {
    title: "Automation & Tooling",
    skills: [
      "PowerShell",
      "Microsoft Graph",
      "Bash",
      "Ansible",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
      "Loki",
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
              I build and support reliable technical environments across
              Windows, Linux, VMware, networking, cloud automation, identity,
              endpoint management, and monitoring.
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

          <div className="hero-visual" aria-label="Infrastructure capability map">
            <div className="visual-topline">
              <span>Operational focus</span>
              <strong>Cloud-ready systems</strong>
            </div>
            <div className="visual-grid">
              <div className="visual-node accent-green">
                <FaShieldAlt aria-hidden="true" />
                <span>Identity</span>
              </div>
              <div className="visual-node accent-blue">
                <FaNetworkWired aria-hidden="true" />
                <span>Networking</span>
              </div>
              <div className="visual-node accent-amber">
                <FaServer aria-hidden="true" />
                <span>VMware</span>
              </div>
              <div className="visual-node accent-red">
                <FaTools aria-hidden="true" />
                <span>Automation</span>
              </div>
            </div>
            <div className="signal-row" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
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
          </div>
          <div className="specialty-grid">
            {specialties.map((specialty) => (
              <article className="specialty-card" key={specialty.title}>
                <div className="icon-box">{specialty.icon}</div>
                <h3>{specialty.title}</h3>
                <p>{specialty.body}</p>
              </article>
            ))}
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
