import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BookOpen,
  Braces,
  Building2,
  ChevronDown,
  Chrome,
  Cloud,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Trophy,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import hallImage from "@/assets/ancient-software-hall.jpg";
import contactImage from "@/assets/ancient-contact-chamber.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nagothi Jaswanth Sai — Senior Full Stack Developer" },
      {
        name: "description",
        content:
          "Senior Full Stack Developer with 3+ years of experience designing and deploying secure, scalable web applications using React.js, .NET Core, and SQL Server.",
      },
      { property: "og:title", content: "Nagothi Jaswanth Sai — Senior Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Production-grade software where reliable backend systems meet thoughtful interfaces and AI-driven platforms.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const navItems = [
  ["Work", "#work"],
  ["Experience", "#experience"],
  ["Stack", "#stack"],
  ["Honors & Education", "#honors"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

const sectionPoints = [
  { id: "top", label: "Hero", num: "00" },
  { id: "about", label: "Profile", num: "01" },
  { id: "work", label: "Work", num: "02" },
  { id: "experience", label: "Experience", num: "03" },
  { id: "stack", label: "Stack", num: "04" },
  { id: "honors", label: "Honors", num: "05" },
  { id: "contact", label: "Contact", num: "06" },
];

const billingTech = [
  "React.js",
  "ASP.NET Core",
  ".NET Core 8",
  "SQL Server",
  "EPay & OneInc",
  "Hangfire",
  "PDF Generation",
  "Automated Email Pipelines",
  "SFTP / FTP (Wells Fargo)",
  "Azure Application Insights",
  "JWT & RBAC Security",
  "SQL Stored Procedures",
  "Commission Workflows",
];

const stackGroups = [
  {
    icon: Braces,
    title: "Backend & Architecture",
    items: ".NET Core, ASP.NET Core, C#, MVC, Microservices, REST APIs, ADO.NET, Hangfire",
  },
  {
    icon: Code2,
    title: "Frontend & Web",
    items: "React.js, JavaScript, HTML5, CSS3, Tailwind CSS, Syncfusion, Vite",
  },
  {
    icon: Database,
    title: "Database & Storage",
    items: "SQL Server, Entity Framework Core, Azure SQL, Stored Procedures, Performance Tuning (-30% latency)",
  },
  {
    icon: Cloud,
    title: "Cloud & Security",
    items: "Azure, Azure Application Insights, JWT Authentication, API Security, RBAC, BCrypt, AES Encryption",
  },
  {
    icon: Sparkles,
    title: "Modern Tools & AI",
    items: "Cursor, Antigravity, Chrome Extension APIs, Manifest V3, DOM MutationObserver",
  },
  {
    icon: Layers3,
    title: "Integrations & Banking",
    items: "EPay, OneInc, SFTP / FTP Pipelines (Wells Fargo), PDF Generation, Automated Email, Commission Workflows",
  },
];

const cogitateAchievements = [
  {
    title: "Modular Frontend Architecture",
    description:
      "Built modular, reusable React.js components and custom hooks, accelerating UI delivery and reducing redundant development effort across billing modules.",
  },
  {
    title: "Secure RESTful APIs",
    description:
      "Designed and integrated secure RESTful APIs with ASP.NET Core and C#, enabling seamless communication between frontend portals and core services.",
  },
  {
    title: "Payment Gateway Integrations",
    description:
      "Developed payment integrations for EPay and OneInc with robust backend validation, transaction monitoring, and automated error recovery.",
  },
  {
    title: "Database Performance & Tuning",
    description:
      "Optimized complex SQL Server queries and stored procedures, slashing query latency by up to 30% and maximizing database throughput.",
  },
  {
    title: "Banking SFTP & Compliance",
    description:
      "Implemented secure, encrypted SFTP/FTP pipelines for automated file transfers with banking partners (Wells Fargo), ensuring strict compliance.",
  },
  {
    title: "Automated Document Workflows",
    description:
      "Engineered scalable PDF invoice generation and automated email delivery pipelines, eliminating manual billing overhead.",
  },
  {
    title: "Real-Time Telemetry & Monitoring",
    description:
      "Integrated Azure Application Insights for live application telemetry, APM diagnostics, and proactive production error tracking.",
  },
  {
    title: "API Security & Access Control",
    description:
      "Secured enterprise endpoints using JWT authentication and granular role-based access control (RBAC) to enforce zero-trust policies.",
  },
];

function Portfolio() {
  const [activeSection, setActiveSection] = useState("top");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      for (let i = sectionPoints.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionPoints[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionPoints[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="overflow-clip bg-background text-foreground">
      <a href="#content" className="skip-link">Skip to content</a>

      {/* Floating Header */}
      <nav aria-label="Primary navigation" className="floating-nav">
        <a href="#top" className="nav-mark" aria-label="Nagothi Jaswanth Sai home">
          <span className="brand-short">NJS</span>
          <span className="brand-full">Nagothi Jaswanth Sai</span>
        </a>
        
        {/* Desktop Links */}
        <div className="nav-links desktop-only">
          {navItems.map(([label, href]) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="mobile-menu-btn"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-nav-backdrop" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="mobile-nav-menu"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            <div className="mobile-nav-header">
              <div className="mobile-nav-identity">
                <span className="mobile-nav-name">Nagothi Jaswanth Sai</span>
                <span className="mobile-nav-role">Senior Full Stack Developer</span>
              </div>
              <button
                type="button"
                className="mobile-nav-close"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>
            <div className="mobile-nav-links">
              {navItems.map(([label, href], index) => (
                <a
                  key={label}
                  href={href}
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="mobile-nav-index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="mobile-nav-label">{label}</span>
                  <ArrowUpRight className="mobile-nav-arrow" size={16} />
                </a>
              ))}
            </div>
            <div className="mobile-nav-actions">
              <Button asChild variant="glass" size="sm" className="w-full justify-center mobile-resume-btn">
                <a href="/Nagothi_Jaswanth_Sai_Resume.pdf" download onClick={() => setMobileMenuOpen(false)}>
                  Download Resume <Download size={14} className="ml-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Right-Side Vertical Section Points */}
      <aside className="side-rail-nav" aria-label="Section quick navigation">
        <div className="side-rail-track">
          {sectionPoints.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className={`side-rail-item ${isActive ? "is-active" : ""}`}
                aria-label={`Jump to ${sec.label} section`}
                aria-current={isActive ? "true" : undefined}
              >
                <span className="side-rail-tooltip">{sec.num} · {sec.label}</span>
                <span className="side-rail-dot">
                  <span className="side-rail-dot-inner" />
                </span>
              </a>
            );
          })}
        </div>
      </aside>

      <section id="top" aria-labelledby="hero-title" className="hero-scene">
        <img
          src={hallImage}
          alt="Sunlit ancient stone hall with faded murals and technical carvings"
          width={1920}
          height={1280}
          className="scene-image"
        />
        <div className="scene-wash" />
        <div className="hero-column" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-glass" data-reveal>
            <p className="eyebrow">Senior Full Stack Developer</p>
            <h1 id="hero-title">Nagothi<br />Jaswanth Sai</h1>
            <p className="hero-stack">.NET Core <i /> React.js <i /> SQL Server <i /> Azure <i /> AI</p>
            
            <div className="hero-contact-row">
              <span className="hero-contact-chip">
                <MapPin className="contact-chip-icon" />
                <span>Navi Mumbai, Maharashtra</span>
              </span>
              <a href="mailto:jaswanthsai7@gmail.com" className="hero-contact-chip hoverable">
                <Mail className="contact-chip-icon" />
                <span>jaswanthsai7@gmail.com</span>
              </a>
              <a href="tel:+917483649848" className="hero-contact-chip hoverable">
                <Phone className="contact-chip-icon" />
                <span>+91-7483649848</span>
              </a>
            </div>

            <p className="hero-intro">
              Senior Full Stack Developer with 3+ years of experience designing and deploying secure, scalable web applications using React.js, .NET Core, and SQL Server.
            </p>
            <div className="hero-actions">
              <Button asChild variant="architectural" size="lg">
                <a href="#work">View work <ArrowDown /></a>
              </Button>
              <Button asChild variant="glass" size="lg">
                <a href="/Nagothi_Jaswanth_Sai_Resume.pdf" download>
                  Download Resume <Download />
                </a>
              </Button>
              <Button asChild variant="glass" size="lg">
                <a href="#contact">Contact me <ArrowUpRight /></a>
              </Button>
            </div>
          </div>
        </div>

        {/* Animated Bottom Arrow Scroll Indicator */}
        <div className="hero-scroll-wrapper">
          <a href="#about" className="hero-scroll-btn" aria-label="Scroll down to explore profile">
            <span className="hero-scroll-label">Explore</span>
            <ChevronDown className="hero-scroll-arrow" />
          </a>
        </div>
      </section>

      <div id="content">
        <section id="about" className="profile-section section-shell">
          <div className="profile-heading" data-reveal>
            <p className="eyebrow">Profile / 01</p>
            <h2>Built for complexity.<br /><em>Designed for clarity.</em></h2>
          </div>
          <div className="profile-grid">
            <div className="profile-stats-column" data-reveal>
              <div className="profile-stat-item">
                <span className="profile-stat-number">3+</span>
                <span className="profile-stat-label">Years of Full Stack Engineering</span>
              </div>
              <div className="profile-stat-item">
                <span className="profile-stat-number">2</span>
                <span className="profile-stat-label">Performance &amp; Excellence Awards</span>
              </div>
              <div className="profile-stat-item">
                <span className="profile-stat-number">4+</span>
                <span className="profile-stat-label">Enterprise &amp; AI Products Built</span>
              </div>
            </div>
            <div className="profile-copy glass-surface" data-reveal>
              <p className="profile-bio-text">
                <span className="lead-dropcap">S</span>enior Full Stack Developer with <strong>3+ years</strong> of experience designing and deploying secure, scalable web applications using React.js, .NET Core, and SQL Server. Proven track record building reusable UI components, REST APIs, and third-party integrations for enterprise insurance and finance clients.
              </p>
              <p className="profile-bio-subtext">
                Recognized with multiple performance and excellence awards. Skilled in agile delivery, API security (JWT), and real-time monitoring (Azure). Also builds independent developer tools and browser extensions, including published Chrome extensions and security platforms.
              </p>
              <div className="inscription-row" aria-label="Core expertise">
                <span>.NET Core / C#</span>
                <span>React.js</span>
                <span>SQL Server</span>
                <span>Azure</span>
                <span>AI Engineering</span>
              </div>
            </div>
          </div>
          <div className="carved-divider" aria-hidden="true"><span>✦</span></div>
        </section>

        <section id="work" className="work-section section-shell" aria-labelledby="work-title">
          <header className="section-heading" data-reveal>
            <p className="eyebrow">Selected systems / 02</p>
            <h2 id="work-title">Work as enduring<br /><em>digital architecture.</em></h2>
            <p>Production applications and independent AI products built for reliability, scale, and performance.</p>
          </header>

          {/* Featured Enterprise Platform: Digital Edge Billing */}
          <article className="artifact artifact-primary" data-reveal>
            <div className="artifact-index">I</div>
            <div className="artifact-copy">
              <p className="artifact-kicker">Enterprise P&amp;C Insurance Billing Platform</p>
              <h3>Digital Edge<br />Billing</h3>
              <p className="artifact-description">
                Cogitate&apos;s flagship production P&amp;C insurance billing platform, supporting <strong>8+ client implementations</strong> across policy invoicing, payment gateway integrations (EPay &amp; OneInc), commission workflows, automated PDF generation, banking SFTP pipelines (Wells Fargo), Hangfire background jobs, and Azure Application Insights monitoring.
              </p>
            </div>
            <div className="system-diagram" aria-label="Enterprise P&amp;C Insurance Billing Platform Architecture Topology">
              <svg
                viewBox="0 0 660 520"
                className="system-topology-svg"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="coreBg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255, 252, 248, 0.96)" />
                    <stop offset="100%" stopColor="rgba(238, 226, 212, 0.92)" />
                  </linearGradient>
                  <linearGradient id="nodeBg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255, 255, 255, 0.9)" />
                    <stop offset="100%" stopColor="rgba(243, 236, 227, 0.85)" />
                  </linearGradient>
                  <filter id="topoShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#2c2219" floodOpacity="0.08" />
                  </filter>
                  <filter id="coreGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="#C85A32" floodOpacity="0.22" />
                  </filter>
                </defs>

                {/* Grand Celestial Blueprint Geometry & Calibration Rings */}
                <circle cx="330" cy="260" r="320" stroke="var(--bronze)" strokeWidth="0.8" opacity="0.16" />
                <circle cx="330" cy="260" r="260" stroke="var(--bronze)" strokeWidth="1" strokeDasharray="3 6" opacity="0.28" />
                <circle cx="330" cy="260" r="195" stroke="var(--terracotta)" strokeWidth="1.2" strokeDasharray="2 4" opacity="0.4" />
                <circle cx="330" cy="260" r="115" stroke="var(--bronze)" strokeWidth="0.8" opacity="0.3" />

                {/* Cardinal Axes & Precision Tick Marks */}
                <line x1="50" y1="260" x2="610" y2="260" stroke="var(--bronze)" strokeWidth="0.75" strokeDasharray="4 6" opacity="0.22" />
                <line x1="330" y1="20" x2="330" y2="500" stroke="var(--bronze)" strokeWidth="0.75" strokeDasharray="4 6" opacity="0.22" />
                
                {/* Diagonal Radial Guidance Rays */}
                <line x1="192" y1="122" x2="468" y2="398" stroke="var(--bronze)" strokeWidth="0.6" strokeDasharray="2 4" opacity="0.18" />
                <line x1="468" y1="122" x2="192" y2="398" stroke="var(--bronze)" strokeWidth="0.6" strokeDasharray="2 4" opacity="0.18" />

                {/* Cross-Service Data Pipeline Mesh */}
                <line x1="468" y1="122" x2="330" y2="455" stroke="var(--bronze)" strokeWidth="1" strokeDasharray="3 4" opacity="0.32" />
                <line x1="468" y1="398" x2="525" y2="260" stroke="var(--bronze)" strokeWidth="1" strokeDasharray="3 4" opacity="0.35" />
                <line x1="468" y1="398" x2="135" y2="260" stroke="var(--bronze)" strokeWidth="1" strokeDasharray="3 4" opacity="0.35" />
                <line x1="192" y1="398" x2="330" y2="455" stroke="var(--bronze)" strokeWidth="1" strokeDasharray="3 4" opacity="0.32" />

                {/* Primary Radial Connectors from Billing Core to all 8 Subsystems */}
                <line x1="330" y1="260" x2="330" y2="65" stroke="var(--terracotta)" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.55" />
                <line x1="330" y1="260" x2="468" y2="122" stroke="var(--terracotta)" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.55" />
                <line x1="330" y1="260" x2="525" y2="260" stroke="var(--terracotta)" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.55" />
                <line x1="330" y1="260" x2="468" y2="398" stroke="var(--terracotta)" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.55" />
                <line x1="330" y1="260" x2="330" y2="455" stroke="var(--terracotta)" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.55" />
                <line x1="330" y1="260" x2="192" y2="398" stroke="var(--terracotta)" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.55" />
                <line x1="330" y1="260" x2="135" y2="260" stroke="var(--terracotta)" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.55" />
                <line x1="330" y1="260" x2="192" y2="122" stroke="var(--terracotta)" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.55" />

                {/* Animated Real-Time High-Throughput Transaction Pulses */}
                <circle r="3.5" fill="var(--terracotta)" opacity="0.95">
                  <animateMotion path="M 330 260 L 330 65" dur="2.6s" repeatCount="indefinite" />
                </circle>
                <circle r="3.5" fill="var(--terracotta)" opacity="0.95">
                  <animateMotion path="M 330 260 L 468 122" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle r="3.5" fill="var(--terracotta)" opacity="0.95">
                  <animateMotion path="M 330 260 L 525 260" dur="3.4s" repeatCount="indefinite" />
                </circle>
                <circle r="3.5" fill="var(--terracotta)" opacity="0.95">
                  <animateMotion path="M 330 260 L 468 398" dur="2.8s" repeatCount="indefinite" />
                </circle>
                <circle r="3.5" fill="var(--terracotta)" opacity="0.95">
                  <animateMotion path="M 330 260 L 330 455" dur="3.6s" repeatCount="indefinite" />
                </circle>
                <circle r="3.5" fill="var(--terracotta)" opacity="0.95">
                  <animateMotion path="M 330 260 L 192 398" dur="3.2s" repeatCount="indefinite" />
                </circle>
                <circle r="3.5" fill="var(--terracotta)" opacity="0.95">
                  <animateMotion path="M 330 260 L 135 260" dur="2.9s" repeatCount="indefinite" />
                </circle>
                <circle r="3.5" fill="var(--terracotta)" opacity="0.95">
                  <animateMotion path="M 330 260 L 192 122" dur="3.5s" repeatCount="indefinite" />
                </circle>

                {/* Cross-Flow Pipeline Animation (Payments -> SQL Ledger) */}
                <circle r="3" fill="var(--bronze)" opacity="0.8">
                  <animateMotion path="M 468 122 L 330 455" dur="4.2s" repeatCount="indefinite" />
                </circle>
                {/* Cross-Flow Pipeline Animation (Hangfire -> SFTP) */}
                <circle r="3" fill="var(--bronze)" opacity="0.8">
                  <animateMotion path="M 468 398 L 525 260" dur="3.8s" repeatCount="indefinite" />
                </circle>

                {/* ================= SATELLITE NODES ================= */}

                {/* Node 1: ASP.NET Core API Gateway (Top) */}
                <g className="topo-node-group" transform="translate(330, 65)">
                  <circle r="40" fill="url(#nodeBg)" stroke="var(--border)" strokeWidth="1.25" filter="url(#topoShadow)" />
                  <circle r="35" fill="none" stroke="var(--bronze)" strokeWidth="0.75" strokeDasharray="2 3" opacity="0.5" />
                  <text x="0" y="-12" textAnchor="middle" fill="var(--terracotta)" fontSize="7" fontWeight="700" letterSpacing="0.08em">GATEWAY</text>
                  <text x="0" y="2" textAnchor="middle" fill="var(--foreground)" fontSize="10.5" fontWeight="600" fontFamily="var(--font-sans)">ASP.NET</text>
                  <text x="0" y="14" textAnchor="middle" fill="var(--foreground)" fontSize="10" fontWeight="600" fontFamily="var(--font-sans)">Core API</text>
                  <text x="0" y="25" textAnchor="middle" fill="var(--muted-foreground)" fontSize="6.5">REST · JWT</text>
                </g>

                {/* Node 2: Payment Gateways (Top-Right) */}
                <g className="topo-node-group" transform="translate(468, 122)">
                  <circle r="40" fill="url(#nodeBg)" stroke="var(--border)" strokeWidth="1.25" filter="url(#topoShadow)" />
                  <circle r="35" fill="none" stroke="var(--bronze)" strokeWidth="0.75" strokeDasharray="2 3" opacity="0.5" />
                  <text x="0" y="-12" textAnchor="middle" fill="var(--terracotta)" fontSize="7" fontWeight="700" letterSpacing="0.08em">CHECKOUT</text>
                  <text x="0" y="2" textAnchor="middle" fill="var(--foreground)" fontSize="10.5" fontWeight="600" fontFamily="var(--font-sans)">Payments</text>
                  <text x="0" y="14" textAnchor="middle" fill="var(--foreground)" fontSize="9.5" fontWeight="600" fontFamily="var(--font-sans)">EPay / OneInc</text>
                  <text x="0" y="25" textAnchor="middle" fill="var(--muted-foreground)" fontSize="6.5">ACH &amp; Card</text>
                </g>

                {/* Node 3: Wells Fargo SFTP Banking (Right) */}
                <g className="topo-node-group" transform="translate(525, 260)">
                  <circle r="40" fill="url(#nodeBg)" stroke="var(--border)" strokeWidth="1.25" filter="url(#topoShadow)" />
                  <circle r="35" fill="none" stroke="var(--bronze)" strokeWidth="0.75" strokeDasharray="2 3" opacity="0.5" />
                  <text x="0" y="-12" textAnchor="middle" fill="var(--terracotta)" fontSize="7" fontWeight="700" letterSpacing="0.08em">BANKING</text>
                  <text x="0" y="2" textAnchor="middle" fill="var(--foreground)" fontSize="10" fontWeight="600" fontFamily="var(--font-sans)">Wells Fargo</text>
                  <text x="0" y="14" textAnchor="middle" fill="var(--foreground)" fontSize="9.5" fontWeight="600" fontFamily="var(--font-sans)">SFTP Pipeline</text>
                  <text x="0" y="25" textAnchor="middle" fill="var(--muted-foreground)" fontSize="6.5">Daily Direct Debit</text>
                </g>

                {/* Node 4: Hangfire Scheduler (Bottom-Right) */}
                <g className="topo-node-group" transform="translate(468, 398)">
                  <circle r="40" fill="url(#nodeBg)" stroke="var(--border)" strokeWidth="1.25" filter="url(#topoShadow)" />
                  <circle r="35" fill="none" stroke="var(--bronze)" strokeWidth="0.75" strokeDasharray="2 3" opacity="0.5" />
                  <text x="0" y="-12" textAnchor="middle" fill="var(--terracotta)" fontSize="7" fontWeight="700" letterSpacing="0.08em">SCHEDULER</text>
                  <text x="0" y="2" textAnchor="middle" fill="var(--foreground)" fontSize="10.5" fontWeight="600" fontFamily="var(--font-sans)">Hangfire</text>
                  <text x="0" y="14" textAnchor="middle" fill="var(--foreground)" fontSize="9.5" fontWeight="600" fontFamily="var(--font-sans)">Background Jobs</text>
                  <text x="0" y="25" textAnchor="middle" fill="var(--muted-foreground)" fontSize="6.5">Recurring Cycles</text>
                </g>

                {/* Node 5: SQL Server Database (Bottom) */}
                <g className="topo-node-group" transform="translate(330, 455)">
                  <circle r="40" fill="url(#nodeBg)" stroke="var(--border)" strokeWidth="1.25" filter="url(#topoShadow)" />
                  <circle r="35" fill="none" stroke="var(--bronze)" strokeWidth="0.75" strokeDasharray="2 3" opacity="0.5" />
                  <text x="0" y="-12" textAnchor="middle" fill="var(--terracotta)" fontSize="7" fontWeight="700" letterSpacing="0.08em">PERSISTENCE</text>
                  <text x="0" y="2" textAnchor="middle" fill="var(--foreground)" fontSize="10.5" fontWeight="600" fontFamily="var(--font-sans)">SQL Server</text>
                  <text x="0" y="14" textAnchor="middle" fill="var(--foreground)" fontSize="9.5" fontWeight="600" fontFamily="var(--font-sans)">Database</text>
                  <text x="0" y="25" textAnchor="middle" fill="var(--muted-foreground)" fontSize="6.5">ACID Ledgers</text>
                </g>

                {/* Node 6: Commission Engine (Bottom-Left) */}
                <g className="topo-node-group" transform="translate(192, 398)">
                  <circle r="40" fill="url(#nodeBg)" stroke="var(--border)" strokeWidth="1.25" filter="url(#topoShadow)" />
                  <circle r="35" fill="none" stroke="var(--bronze)" strokeWidth="0.75" strokeDasharray="2 3" opacity="0.5" />
                  <text x="0" y="-12" textAnchor="middle" fill="var(--terracotta)" fontSize="7" fontWeight="700" letterSpacing="0.08em">WORKFLOWS</text>
                  <text x="0" y="2" textAnchor="middle" fill="var(--foreground)" fontSize="10.5" fontWeight="600" fontFamily="var(--font-sans)">Commission</text>
                  <text x="0" y="14" textAnchor="middle" fill="var(--foreground)" fontSize="9.5" fontWeight="600" fontFamily="var(--font-sans)">Rules Engine</text>
                  <text x="0" y="25" textAnchor="middle" fill="var(--muted-foreground)" fontSize="6.5">Broker Splits</text>
                </g>

                {/* Node 7: Automated Document Engine (Left) */}
                <g className="topo-node-group" transform="translate(135, 260)">
                  <circle r="40" fill="url(#nodeBg)" stroke="var(--border)" strokeWidth="1.25" filter="url(#topoShadow)" />
                  <circle r="35" fill="none" stroke="var(--bronze)" strokeWidth="0.75" strokeDasharray="2 3" opacity="0.5" />
                  <text x="0" y="-12" textAnchor="middle" fill="var(--terracotta)" fontSize="7" fontWeight="700" letterSpacing="0.08em">DISPATCH</text>
                  <text x="0" y="2" textAnchor="middle" fill="var(--foreground)" fontSize="10.5" fontWeight="600" fontFamily="var(--font-sans)">PDF &amp; Email</text>
                  <text x="0" y="14" textAnchor="middle" fill="var(--foreground)" fontSize="9.5" fontWeight="600" fontFamily="var(--font-sans)">Generation</text>
                  <text x="0" y="25" textAnchor="middle" fill="var(--muted-foreground)" fontSize="6.5">Invoicing Docs</text>
                </g>

                {/* Node 8: Azure Telemetry (Top-Left) */}
                <g className="topo-node-group" transform="translate(192, 122)">
                  <circle r="40" fill="url(#nodeBg)" stroke="var(--border)" strokeWidth="1.25" filter="url(#topoShadow)" />
                  <circle r="35" fill="none" stroke="var(--bronze)" strokeWidth="0.75" strokeDasharray="2 3" opacity="0.5" />
                  <text x="0" y="-12" textAnchor="middle" fill="var(--terracotta)" fontSize="7" fontWeight="700" letterSpacing="0.08em">OBSERVABILITY</text>
                  <text x="0" y="2" textAnchor="middle" fill="var(--foreground)" fontSize="10.5" fontWeight="600" fontFamily="var(--font-sans)">Azure APM</text>
                  <text x="0" y="14" textAnchor="middle" fill="var(--foreground)" fontSize="9.5" fontWeight="600" fontFamily="var(--font-sans)">Insights</text>
                  <text x="0" y="25" textAnchor="middle" fill="var(--muted-foreground)" fontSize="6.5">Live Telemetry</text>
                </g>

                {/* ================= CENTRAL CORE HUB ================= */}
                <g className="topo-core-group" transform="translate(330, 260)">
                  {/* Outer Concentric Pulse Rings */}
                  <circle r="78" fill="none" stroke="var(--terracotta)" strokeWidth="1" strokeDasharray="3 5" opacity="0.45" />
                  <circle r="72" fill="none" stroke="var(--bronze)" strokeWidth="0.75" opacity="0.35" />
                  
                  {/* Core Surface Orb */}
                  <circle r="64" fill="url(#coreBg)" stroke="var(--terracotta)" strokeWidth="2.2" filter="url(#coreGlow)" />
                  <circle r="56" fill="none" stroke="var(--bronze)" strokeWidth="1" strokeDasharray="2 4" opacity="0.6" />
                  
                  {/* Core Status Badge */}
                  <circle cx="0" cy="-30" r="3" fill="#16a34a" />
                  <text x="0" y="-20" textAnchor="middle" fill="var(--terracotta)" fontSize="7" fontWeight="800" letterSpacing="0.14em">CORE ENGINE</text>
                  
                  {/* Core Title */}
                  <text x="0" y="1" textAnchor="middle" fill="var(--foreground)" fontSize="14" fontWeight="600" fontFamily="var(--font-display)">BILLING</text>
                  <text x="0" y="17" textAnchor="middle" fill="var(--foreground)" fontSize="14" fontWeight="600" fontFamily="var(--font-display)">CORE</text>
                  
                  {/* Core Subtitle */}
                  <text x="0" y="32" textAnchor="middle" fill="var(--muted-foreground)" fontSize="7" letterSpacing="0.04em">P&amp;C Rules &amp; Ledger</text>
                  <text x="0" y="42" textAnchor="middle" fill="var(--terracotta)" fontSize="6.5" fontWeight="700" letterSpacing="0.06em">8+ CLIENTS LIVE</text>
                </g>
              </svg>
            </div>
            <div className="artifact-tech">
              {billingTech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>

          {/* Project Grid: ChatGPT Ad & Promo Blocker & API Vault */}
          <div className="artifact-pair">
            <article className="artifact artifact-secondary" data-reveal>
              <div className="artifact-icon"><Chrome /></div>
              <p className="artifact-kicker">Published Chrome Extension · Productivity</p>
              <h3>ChatGPT Ad &amp;<br />Promo Blocker</h3>
              <p>Lightweight, privacy-first browser extension published on the official Chrome Web Store. Automatically detects and blocks promotional upgrade banners, intrusive ads, and popups within the ChatGPT web interface for an uninterrupted, distraction-free workflow.</p>
              <div className="artifact-tech compact">
                {["Chrome Extension Manifest V3", "JavaScript", "DOM MutationObserver", "CSS Injection", "Chrome Web Store"].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <a
                href="https://chromewebstore.google.com/detail/chatgpt-ad-promo-blocker/oiopppgakilklffapfngfckonijjkggf?authuser=0&hl=en"
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                Chrome Web Store <ArrowUpRight />
              </a>
            </article>

            <article className="artifact artifact-secondary" data-reveal>
              <div className="artifact-icon"><ShieldCheck /></div>
              <p className="artifact-kicker">Secure API Key Management Platform</p>
              <h3>API Vault</h3>
              <p>Secure API management platform built with .NET Core 8, React, and Azure-hosted SQL Server. Features custom middleware for route-level API key encryption, scoped validation, JWT authentication with AES-encrypted credentials, and BCrypt-secured storage for high data integrity.</p>
              <div className="artifact-tech compact">
                {["ASP.NET Core 8", "Entity Framework Core", "React", "Azure SQL", "JWT", "BCrypt", "AES Encryption", "REST API"].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <a
                href="https://github.com/jaswanthsai7/api-key-vault/tree/master/client/api-vault"
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                GitHub Repository <ArrowUpRight />
              </a>
            </article>
          </div>
        </section>

        <section id="experience" className="experience-section" aria-labelledby="experience-title">
          <div className="section-shell">
            <header className="section-heading" data-reveal>
              <p className="eyebrow">Field record / 03</p>
              <h2 id="experience-title">Experience,<br /><em>layer by layer.</em></h2>
              <p>Engineering enterprise platforms, high-throughput billing systems, and mission-critical payment architecture.</p>
            </header>

            <article className="experience-card" data-reveal>
              <div className="experience-card-header">
                <div className="experience-card-title">
                  <p className="eyebrow">Cogitate Technology Solutions · Navi Mumbai, India</p>
                  <h3>Senior Developer <em>(Full Stack)</em></h3>
                </div>
                <div className="experience-date-badge">
                  <span className="live-dot" />
                  <span>07/2023 — Present</span>
                </div>
              </div>

              <div className="experience-summary-box">
                <p className="experience-summary-lead">
                  Core contributor to <strong>Digital Edge Billing</strong>, Cogitate&apos;s flagship P&amp;C insurance billing platform, supporting <strong>8+ client enterprise implementations</strong> across invoicing, payment integrations, commission workflows, SFTP/FTP banking transfers, automated email workflows, PDF generation, background jobs, and SQL-based billing processes.
                </p>
              </div>

              <div className="experience-grid">
                {cogitateAchievements.map((item, idx) => (
                  <div key={idx} className="achievement-card">
                    <span className="achievement-num">{String(idx + 1).padStart(2, "0")}</span>
                    <div className="achievement-content">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="experience-tags-row">
                <span className="experience-tags-label">Key Stack</span>
                {[
                  "Enterprise Billing",
                  "React.js & Hooks",
                  "ASP.NET Core & C#",
                  "SQL Server Performance",
                  "EPay & OneInc",
                  "Hangfire Jobs",
                  "Wells Fargo SFTP",
                  "Azure Application Insights",
                  "JWT Security / RBAC",
                ].map((tag) => (
                  <span key={tag} className="experience-tag">{tag}</span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="stack" className="stack-section section-shell" aria-labelledby="stack-title">
          <header className="section-heading centered" data-reveal>
            <p className="eyebrow">The working vocabulary / 04</p>
            <h2 id="stack-title">Tools of the craft.</h2>
          </header>
          <div className="stack-inscriptions">
            {stackGroups.map(({ icon: Icon, title, items }) => (
              <div className="stack-row" key={title} data-reveal>
                <div className="stack-title"><Icon /><span>{title}</span></div>
                <p>{items}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Honors, Awards & Education Section */}
        <section id="honors" className="section-shell py-20" aria-labelledby="honors-title">
          <header className="section-heading" data-reveal>
            <p className="eyebrow">Recognition &amp; Foundations / 05</p>
            <h2 id="honors-title">Honors, Awards<br /><em>&amp; Education.</em></h2>
            <p>Industry awards, professional certifications, and academic background.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-reveal>
            <div className="glass-surface p-6 rounded-2xl border border-border/40">
              <div className="flex items-center gap-3 mb-3">
                <Trophy className="size-6 text-amber-400" />
                <h3 className="text-xl font-bold">Excellence Award</h3>
              </div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                Cogitate Technology Solutions · Apr 2026
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Awarded for leading GPC and billing initiatives, building scalable solutions, and resolving complex issues through deep technical expertise.
              </p>
            </div>

            <div className="glass-surface p-6 rounded-2xl border border-border/40">
              <div className="flex items-center gap-3 mb-3">
                <Award className="size-6 text-amber-400" />
                <h3 className="text-xl font-bold">Best Performance Award</h3>
              </div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                Cogitate Technology Solutions · Jan 2025
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Recognized for strong ownership of the Billing product and delivery of key solutions across high-impact client projects.
              </p>
            </div>

            <div className="glass-surface p-6 rounded-2xl border border-border/40">
              <div className="flex items-center gap-3 mb-3">
                <BookOpen className="size-6 text-blue-400" />
                <h3 className="text-xl font-bold">PGP in Full Stack Software Engineering</h3>
              </div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                NIIT StackRoute
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Post Graduate Program focused on modern enterprise full stack software engineering, microservices, and web development.
              </p>
            </div>

            <div className="glass-surface p-6 rounded-2xl border border-border/40">
              <div className="flex items-center gap-3 mb-3">
                <GraduationCap className="size-6 text-emerald-400" />
                <h3 className="text-xl font-bold">B.E., Computer Science Engineering</h3>
              </div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                K.S. School of Engineering and Management · Bangalore, India (2018 — 2022)
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Bachelor of Engineering with strong coursework in Computer Science, Data Structures, Algorithms, Software Engineering, and Database Management.
              </p>
            </div>
          </div>
        </section>

        <section className="manifesto-section section-shell" aria-labelledby="manifesto-title">
          <div className="manifesto-symbol" aria-hidden="true"><Building2 /></div>
          <div className="manifesto-copy" data-reveal>
            <p className="eyebrow">Engineering Philosophy / 06</p>
            <h2 id="manifesto-title">Production software,<br /><em>not just prototypes.</em></h2>
            <p>
              I care about what happens after launch: how systems process payments, recover from failures, protect data, answer operators, and stay observable under real demand.
            </p>
          </div>
          <div className="manifesto-list" data-reveal>
            {[
              "Enterprise applications",
              "Billing systems",
              "Payment integrations (EPay/OneInc)",
              "Secure RESTful APIs",
              "Hangfire background jobs",
              "SQL query tuning (-30% time)",
              "Automated PDF & email pipelines",
              "Azure telemetry monitoring",
              "Banking SFTP pipelines",
            ].map((item, index) => (
              <div key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-scene" aria-labelledby="contact-title">
          <img
            src={contactImage}
            alt="Ancient stone chamber with an integrated fresco of diagrams and an olive tree"
            width={1920}
            height={1280}
            loading="lazy"
            className="scene-image"
          />
          <div className="contact-wash" />
          <div className="contact-inner section-shell">
            <div className="contact-glass" data-reveal>
              <p className="eyebrow">Open to meaningful opportunities</p>
              <h2 id="contact-title">Let’s build something<br /><em>that lasts.</em></h2>
              <p>For enterprise platforms, scalable backends, thoughtful interfaces, and AI systems built to endure.</p>
              <div className="contact-links">
                <a href="mailto:jaswanthsai7@gmail.com" aria-label="Send an email to jaswanthsai7@gmail.com">
                  <Mail /><span>jaswanthsai7@gmail.com</span><ArrowUpRight />
                </a>
                <a href="tel:+917483649848" aria-label="Call +91-7483649848">
                  <Phone /><span>+91-7483649848</span><ArrowUpRight />
                </a>
                <a href="https://www.linkedin.com/in/jaswanth-sai-49b6aa234" target="_blank" rel="noreferrer">
                  <Linkedin /><span>LinkedIn</span><ArrowUpRight />
                </a>
                <a href="https://github.com/jaswanthsai7" target="_blank" rel="noreferrer">
                  <Github /><span>GitHub</span><ArrowUpRight />
                </a>
                <a
                  href="https://chromewebstore.google.com/detail/chatgpt-ad-promo-blocker/oiopppgakilklffapfngfckonijjkggf?authuser=0&hl=en"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View ChatGPT Ad & Promo Blocker on Chrome Web Store"
                >
                  <Chrome /><span>ChatGPT Blocker</span><ArrowUpRight />
                </a>
              </div>
            </div>
            <div className="contact-signoff">
              <span>NJS</span>
              <p>
                Nagothi Jaswanth Sai · Senior Full Stack Developer<br />
                Navi Mumbai, Maharashtra · +91-7483649848
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
