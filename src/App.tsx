
import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="site-shell">
      
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Hamida's portfolio home">
          <span className="brand-mark">H</span>
          <span>
            Hamida<span className="brand-dot">.</span>
          </span>
        </a>

        <nav
          id="main-navigation"
          className={`main-nav ${menuOpen ? 'is-open' : ''}`}
          aria-label="Main navigation"
        >
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#research" onClick={() => setMenuOpen(false)}>Research</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
          <a href="#training" onClick={() => setMenuOpen(false)}>Training</a>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
          {menuOpen ? 'Close' : 'Menu'}
        </button>

        <a className="header-contact" href="#contact">
          Contact <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" />
              PYTHON / DJANGO BACKEND DEVELOPMENT · DHAKA, BANGLADESH
            </p>

            <h1>
              Building useful software with{' '}
              <span className="text-accent">Python &amp; Django.</span>
            </h1>

            <p className="hero-description">
              I'm Hamida Binte Azad, a Computer Science graduate focused on
              backend development and database-driven applications. I enjoy
              understanding how software works and building solutions one step
              at a time.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my projects <span aria-hidden="true">↗</span>
              </a>

              <a className="button button-secondary" href="#contact">
                Get in touch
              </a>
            </div>

            <div className="hero-stack">
              <span>Currently focused on</span>
              <span className="stack-tag">Python</span>
              <span className="stack-tag">Django</span>
              <span className="stack-tag">SQL</span>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/HamidaBinteAzad"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/hamidabinteazad"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>

              <a href="mailto:hamidabazad@gmail.com">
                Email <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <aside className="hero-visual" aria-label="Technology focus">
            <div className="visual-topline">
              <span>MY DEVELOPER PROFILE</span>
              <span className="visual-index">01 / 01</span>
            </div>

            <div className="code-window">
              <div className="code-window-header">
                <div className="window-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="file-name">developer.py</span>
                <span className="file-type">PY</span>
              </div>

              <div className="code-body">
                <div className="code-line">
                  <span className="line-no">01</span>
                  <span>
                    <span className="syntax-purple">class</span>{' '}
                    <span className="syntax-cyan">Developer</span>:
                  </span>
                </div>

                <div className="code-line">
                  <span className="line-no">02</span>
                  <span className="syntax-muted">
                    {'    '}# learning by building
                  </span>
                </div>

                <div className="code-line">
                  <span className="line-no">03</span>
                  <span>
                    {'    '}
                    <span className="syntax-purple">def</span>{' '}
                    <span className="syntax-yellow">focus</span>(self):
                  </span>
                </div>

                <div className="code-line">
                  <span className="line-no">04</span>
                  <span>
                    {'        '}return [
                    <span className="syntax-green">"Python"</span>,
                  </span>
                </div>

                <div className="code-line">
                  <span className="line-no">05</span>
                  <span>
                    {'            '}
                    <span className="syntax-green">"Django"</span>,
                    <span className="syntax-green"> "SQL"</span>
                    {' ]'}
                  </span>
                </div>
              </div>

              <div className="code-window-footer">
                <span className="footer-pulse" />
                BUILDING · LEARNING · IMPROVING
              </div>
            </div>

            <div className="research-card">
              <div className="research-icon">NLP</div>
              <div>
                <span className="research-label">UNDERGRADUATE RESEARCH</span>
                <strong>Bangla Fake News Detection</strong>
                <p>BERT · Natural Language Processing</p>
              </div>
              <span className="research-arrow" aria-hidden="true">↗</span>
            </div>

            <div className="visual-decoration" aria-hidden="true" />
          </aside>
        </section>

        <section className="quick-facts section-wrap" aria-label="At a glance">
          <div className="fact-item">
            <span className="fact-label">EDUCATION</span>
            <strong>B.Sc. in Computer Science</strong>
            <span className="fact-detail">University of Asia Pacific · 2023</span>
          </div>

          <div className="fact-item">
            <span className="fact-label">TECHNICAL FOCUS</span>
            <strong>Backend Development</strong>
            <span className="fact-detail">Python · Django · SQL</span>
          </div>

          <div className="fact-item">
            <span className="fact-label">RESEARCH</span>
            <strong>Bangla NLP</strong>
            <span className="fact-detail">BERT-based fake news detection</span>
          </div>
        </section>

        
        <section className="content-section section-wrap" id="about">
          <div className="section-intro">
            <p className="section-kicker">01 / ABOUT</p>
            <h2>A little about my journey.</h2>
            <p>
              My background is in computer science, with a growing focus on
              building reliable backend applications and understanding the
              systems behind them.
            </p>
          </div>

          <div className="about-layout">
            <div className="about-copy">
              <p>
                I graduated with a B.Sc. in Computer Science and Engineering
                from the University of Asia Pacific in 2023. My technical
                interests include Python, Django, relational databases, and
                the logic that makes web applications work.
              </p>

              <p>
                Through academic and personal projects, I've explored
                authentication, CRUD workflows, database relationships,
                and application features. My undergraduate research also
                involved Bangla fake news detection using BERT.
              </p>

              <p>
                I'm continuing to strengthen my programming fundamentals
                by studying existing code, building features incrementally,
                testing my work, and learning to explain my technical
                decisions clearly.
              </p>
            </div>

            <aside className="about-note">
              <span className="note-number">01</span>
              <p className="section-kicker">CURRENT DIRECTION</p>
              <h3>Learning by building.</h3>
              <p>
                My goal is to grow into a backend software engineer by
                developing practical applications and improving my
                problem-solving skills.
              </p>
              <a className="inline-link" href="#projects">
                Explore my projects <span aria-hidden="true">↗</span>
              </a>
            </aside>
          </div>
        </section>

        <section className="content-section section-wrap" id="skills">
          <div className="section-intro">
            <p className="section-kicker">02 / SKILLS</p>
            <h2>The tools behind my work.</h2>
            <p>
              My current technical foundation, focused on backend
              development and the fundamentals of web applications.
            </p>
          </div>

          <div className="skills-grid">
            <article className="skill-card">
              <span className="skill-number">01</span>
              <h3>Programming</h3>
              <p>Languages and programming fundamentals.</p>
              <div className="skill-tags">
                <span>Python</span>
                <span>C</span>
                <span>C++</span>
              </div>
            </article>

            <article className="skill-card">
              <span className="skill-number">02</span>
              <h3>Backend Development</h3>
              <p>Building server-side features with Django.</p>
              <div className="skill-tags">
                <span>Django</span>
                <span>Models &amp; ORM</span>
                <span>Views</span>
                <span>Authentication</span>
                <span>CRUD</span>
              </div>
            </article>

            <article className="skill-card">
              <span className="skill-number">03</span>
              <h3>Databases</h3>
              <p>Working with relational data and queries.</p>
              <div className="skill-tags">
                <span>SQL</span>
                <span>SQLite</span>
                <span>MySQL</span>
                <span>PostgreSQL</span>
              </div>
            </article>

            <article className="skill-card">
              <span className="skill-number">04</span>
              <h3>Web &amp; Developer Tools</h3>
              <p>Frontend fundamentals and development workflow.</p>
              <div className="skill-tags">
                <span>HTML5</span>
                <span>CSS3</span>
                <span>Bootstrap</span>
                <span>Basic JavaScript</span>
                <span>Git</span>
                <span>GitHub</span>
              </div>
            </article>
          </div>
        </section>
 
        <section className="content-section section-wrap" id="projects">
          <div className="section-intro">
            <p className="section-kicker">03 / SELECTED WORK</p>
            <h2>Projects built to solve problems.</h2>
            <p>
              A selection of my web development work, exploring application
              workflows, database relationships, authentication, and
              server-side logic.
            </p>
          </div>

          <div className="projects-toolbar">
            <span>FEATURED PROJECTS <span className="toolbar-count">/ 03</span></span>
            <span className="projects-category">BACKEND · WEB APPLICATIONS</span>
          </div>

          <div className="projects-grid">
            <article className="project-card project-featured">
              <div className="project-card-top">
                <span className="project-number">PROJECT 01</span>
                <span className="project-type">BUSINESS WORKFLOW</span>
              </div>

              <div className="project-visual requisition-visual" aria-hidden="true">
                <div className="mock-window">
                  <div className="mock-window-bar">
                    <span />
                    <span />
                    <span />
                    <small>requisition dashboard</small>
                  </div>
                  <div className="mock-dashboard">
                    <div className="mock-sidebar">
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="mock-dashboard-content">
                      <div className="mock-heading" />
                      <div className="mock-stat-row">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="mock-table">
                        <i />
                        <i />
                        <i />
                      </div>
                    </div>
                  </div>
                </div>
                <span className="visual-caption">01 — WORKFLOW MANAGEMENT</span>
              </div>

              <div className="project-card-body">
                <h3>Company Online Product Requisition System</h3>
                <p>
                  A Django application for managing product requisitions
                  across employee, manager, inventory officer, and
                  administrator roles.
                </p>

                <ul className="project-highlights">
                  <li>Role-based access and account management</li>
                  <li>Requisition creation and status tracking</li>
                  <li>Inventory-focused dashboards and reporting structure</li>
                </ul>

                <div className="project-tags">
                  <span>Python</span>
                  <span>Django</span>
                  <span>SQLite</span>
                </div>
              </div>
            </article>

            <article className="project-card">
              <div className="project-card-top">
                <span className="project-number">PROJECT 02</span>
                <span className="project-type">E-COMMERCE</span>
              </div>

              <div className="project-visual ecommerce-visual" aria-hidden="true">
                <div className="store-mock">
                  <div className="store-header">
                    <span className="store-brand">hmart.</span>
                    <span className="store-nav-lines" />
                  </div>
                  <div className="store-banner">
                    <span>PRODUCT COLLECTION</span>
                    <i />
                    <i />
                  </div>
                  <div className="store-products">
                    <span><i /></span>
                    <span><i /></span>
                    <span><i /></span>
                  </div>
                </div>
                <span className="visual-caption">02 — ONLINE STORE</span>
              </div>

              <div className="project-card-body">
                <h3>E-commerce Platform</h3>
                <p>
                  A Django-based online store with product management,
                  user authentication, and a session-based shopping cart.
                </p>

                <ul className="project-highlights">
                  <li>Product listing and management</li>
                  <li>User authentication and cart workflows</li>
                  <li>Database-backed application features</li>
                </ul>

                <div className="project-tags">
                  <span>Python</span>
                  <span>Django</span>
                  <span>Bootstrap</span>
                  <span>PostgreSQL</span>
                </div>
              </div>
            </article>

            <article className="project-card">
              <div className="project-card-top">
                <span className="project-number">PROJECT 03</span>
                <span className="project-type">WEB APPLICATION</span>
              </div>

              <div className="project-visual student-visual" aria-hidden="true">
                <div className="student-mock">
                  <div className="student-topbar">
                    <span className="student-avatar">S</span>
                    <i />
                  </div>
                  <div className="student-layout">
                    <div className="student-sidebar">
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="student-main">
                      <i className="student-title-line" />
                      <i className="student-subtitle-line" />
                      <div className="student-record">
                        <span />
                        <i />
                      </div>
                      <div className="student-record">
                        <span />
                        <i />
                      </div>
                    </div>
                  </div>
                </div>
                <span className="visual-caption">03 — DATA &amp; CRUD</span>
              </div>

              <div className="project-card-body">
                <h3>StudentPlatform</h3>
                <p>
                  A Django learning project focused on user authentication
                  and managing application data through database-backed
                  CRUD operations.
                </p>

                <ul className="project-highlights">
                  <li>User sign-in and authentication flow</li>
                  <li>Create, read, update, and delete operations</li>
                  <li>Django models and ORM fundamentals</li>
                </ul>

                <div className="project-tags">
                  <span>Python</span>
                  <span>Django</span>
                  <span>SQLite</span>
                  <span>HTML / CSS</span>
                </div>
              </div>
            </article>
          </div>

          <div className="projects-footer">
            <p>
              These projects represent my hands-on learning with
              backend development and database-driven applications.
            </p>
            <a
              className="button button-secondary"
              href="https://github.com/HamidaBinteAzad?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              Browse GitHub repositories <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        
        <section className="content-section section-wrap" id="research">
          <div className="section-intro">
            <p className="section-kicker">04 / RESEARCH</p>
            <h2>Exploring language and machine learning.</h2>
            <p>
              My undergraduate research introduced me to natural language
              processing and transformer-based language models.
            </p>
          </div>

          <article className="research-project">
            <div className="research-project-visual">
              <span className="research-orbit orbit-one" />
              <span className="research-orbit orbit-two" />

              <div className="research-model">
                <span>B</span>
                <small>BERT</small>
              </div>

              <span className="research-model-label">
                LANGUAGE MODEL
              </span>
            </div>

            <div className="research-project-content">
              <p className="section-kicker">UNDERGRADUATE THESIS</p>

              <h3>Bangla Fake News Detection Using BERT</h3>

              <p>
                An academic research project exploring a transformer-based
                language model for classifying Bangla news content. The
                project introduced me to natural language processing and
                the application of pretrained models to a language-specific
                problem.
              </p>

              <div className="project-tags">
                <span>Python</span>
                <span>BERT</span>
                <span>NLP</span>
                <span>Hugging Face</span>
              </div>
            </div>
          </article>
        </section>

        <section className="content-section section-wrap" id="experience">
          <div className="section-intro">
            <p className="section-kicker">05 / EXPERIENCE</p>
            <h2>Where I've worked and contributed.</h2>
            <p>
              My professional experience includes website development,
              technical maintenance, and teaching IT-related subjects.
            </p>
          </div>

          <div className="experience-list">
            <article className="experience-item">
              <div className="experience-date">
                <span className="experience-marker" />
                <span>OCT 2025 — JAN 2026</span>
              </div>

              <div className="experience-card">
                <div className="experience-heading">
                  <div>
                    <h3>Junior Web Developer</h3>
                    <p className="experience-company">AIMS Education</p>
                  </div>
                  <span className="experience-category">
                    WEB DEVELOPMENT
                  </span>
                </div>

                <p className="experience-summary">
                  Supported the maintenance and improvement of education
                  and corporate websites using WordPress and Elementor.
                </p>

                <ul className="experience-bullets">
                  <li>
                    Created and updated responsive website pages and
                    published website and blog content.
                  </li>
                  <li>
                    Helped maintain website performance through plugin
                    updates and cache clearing.
                  </li>
                  <li>
                    Assisted with page design, content updates, and
                    routine website maintenance.
                  </li>
                </ul>

                <div className="project-tags">
                  <span>WordPress</span>
                  <span>Elementor</span>
                  <span>HTML / CSS</span>
                  <span>Website Maintenance</span>
                </div>
              </div>
            </article>

            <article className="experience-item">
              <div className="experience-date">
                <span className="experience-marker" />
                <span>AUG 2025 — OCT 2025</span>
              </div>

              <div className="experience-card">
                <div className="experience-heading">
                  <div>
                    <h3>IT Lecturer</h3>
                    <p className="experience-company">AIMS Academy</p>
                  </div>
                  <span className="experience-category">TEACHING</span>
                </div>

                <p className="experience-summary">
                  Delivered classes for OTHM Diploma students and supported
                  their academic progress and assessment work.
                </p>

                <ul className="experience-bullets">
                  <li>
                    Prepared and delivered lessons on assigned IT topics.
                  </li>
                  <li>
                    Reviewed student assignments, presentations, and
                    project-based assessments.
                  </li>
                  <li>
                    Helped students understand subject concepts and
                    assessment expectations.
                  </li>
                </ul>

                <div className="project-tags">
                  <span>IT Education</span>
                  <span>Assessment</span>
                  <span>Communication</span>
                </div>
              </div>
            </article>
          </div>
        </section>
        
        <section className="content-section section-wrap" id="education">
          <div className="section-intro">
            <p className="section-kicker">06 / EDUCATION</p>
            <h2>The academic foundation behind my work.</h2>
            <p>
              My computer science education gave me a foundation in
              programming, software development, and computational thinking.
            </p>
          </div>

          <div className="education-grid">
            <article className="education-card education-primary">
              <div className="education-card-top">
                <span className="education-icon">B.Sc.</span>
                <span className="education-period">2019 — 2023</span>
              </div>

              <p className="education-level">UNDERGRADUATE DEGREE</p>
              <h3>B.Sc. in Computer Science and Engineering</h3>
              <p className="education-institution">
                University of Asia Pacific
              </p>

              <div className="education-result">
                <span>CGPA</span>
                <strong>3.71 / 4.00</strong>
              </div>

              <p className="education-description">
                Studied computer science and developed academic projects,
                including research into Bangla fake news detection using BERT.
              </p>
            </article>

            <article className="education-card">
              <div className="education-card-top">
                <span className="education-icon">HSC</span>
                <span className="education-period">2018</span>
              </div>

              <p className="education-level">HIGHER SECONDARY</p>
              <h3>Higher Secondary Certificate</h3>
              <p className="education-institution">Holy Cross College</p>

              <div className="education-result">
                <span>GPA</span>
                <strong>5.00 / 5.00</strong>
              </div>
            </article>

            <article className="education-card">
              <div className="education-card-top">
                <span className="education-icon">SSC</span>
                <span className="education-period">2016</span>
              </div>

              <p className="education-level">SECONDARY SCHOOL</p>
              <h3>Secondary School Certificate</h3>
              <p className="education-institution">
                Dhanmondi Kamrunnesa
              </p>

              <div className="education-result">
                <span>GPA</span>
                <strong>5.00 / 5.00</strong>
              </div>
            </article>
          </div>

          <div className="academic-award">
            <div className="award-symbol" aria-hidden="true">✦</div>
            <div>
              <p className="section-kicker">ACADEMIC RECOGNITION</p>
              <h3>Dean's Awards</h3>
              <p>
                Recognized with Dean's Awards in 2019 and 2020.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section section-wrap" id="training">
          <div className="section-intro">
            <p className="section-kicker">07 / TRAINING</p>
            <h2>Learning through practical training.</h2>
            <p>
              Early training experiences that introduced me to backend
              and web development workflows.
            </p>
          </div>

          <div className="training-list">
            <article className="training-card">
              <div className="training-date">
                <span>FEB — APR</span>
                <strong>2023</strong>
              </div>

              <div className="training-details">
                <div className="training-heading">
                  <div>
                    <h3>Backend Developer Trainee</h3>
                    <p className="experience-company">
                      Eutropia IT Solution · Remote
                    </p>
                  </div>
                  <span className="training-index">01</span>
                </div>

                <p>
                  Training focused on Python, Django, and foundational
                  backend web development concepts.
                </p>

                <div className="project-tags">
                  <span>Python</span>
                  <span>Django</span>
                  <span>Backend Fundamentals</span>
                </div>
              </div>
            </article>

            <article className="training-card">
              <div className="training-date">
                <span>FEB — APR</span>
                <strong>2023</strong>
              </div>

              <div className="training-details">
                <div className="training-heading">
                  <div>
                    <h3>Web Development Trainee</h3>
                    <p className="experience-company">
                      Perpetual Training Institute · Remote
                    </p>
                  </div>
                  <span className="training-index">02</span>
                </div>

                <p>
                  Training focused on HTML5, responsive CSS, and
                  fundamental JavaScript for web development.
                </p>

                <div className="project-tags">
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>JavaScript Fundamentals</span>
                </div>
              </div>
            </article>
          </div>
        </section>
  
        <section className="content-section section-wrap" id="contact">
          <div className="contact-panel">
            <div className="contact-copy">
              <p className="section-kicker">08 / GET IN TOUCH</p>
              <h2>Let's connect and build something useful.</h2>
              <p>
                I'm interested in entry-level Software Engineer and Backend
                Developer opportunities where I can contribute, keep learning,
                and grow through real-world software development.
              </p>

              <a
                className="button button-primary contact-email-button"
                href="mailto:hamidabazad@gmail.com"
              >
                <span>Send me an email</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="contact-details">
              <a className="contact-link" href="mailto:hamidabazad@gmail.com">
                <span className="contact-link-icon" aria-hidden="true">@</span>
                <span className="contact-link-copy">
                  <small>EMAIL</small>
                  <strong>hamidabazad@gmail.com</strong>
                </span>
                <span className="contact-link-arrow" aria-hidden="true">↗</span>
              </a>

              <a
                className="contact-link"
                href="https://github.com/HamidaBinteAzad"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-link-icon" aria-hidden="true">GH</span>
                <span className="contact-link-copy">
                  <small>GITHUB</small>
                  <strong>HamidaBinteAzad</strong>
                </span>
                <span className="contact-link-arrow" aria-hidden="true">↗</span>
              </a>

              <a
                className="contact-link"
                href="https://www.linkedin.com/in/hamidabinteazad"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-link-icon" aria-hidden="true">in</span>
                <span className="contact-link-copy">
                  <small>LINKEDIN</small>
                  <strong>Connect professionally</strong>
                </span>
                <span className="contact-link-arrow" aria-hidden="true">↗</span>
              </a>

              <div className="contact-location">
                <span className="location-dot" />
                <span>Based in Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </section>

     </main>

      
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-profile">
            <p className="footer-name">Hamida Binte Azad</p>
            <p className="footer-role">
              Backend-Focused Software Engineer
            </p>
            <p className="footer-stack">
              Python • Django • SQL
            </p>
          </div>

          <div className="footer-right">
            <div className="footer-socials">
              <a
                href="https://github.com/HamidaBinteAzad"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub profile"
                className="footer-social-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/hamidabinteazad"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn profile"
                className="footer-social-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>

            
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2026 Hamida Binte Azad. Built with React, TypeScript, and CSS.
            </p>
 
 
            {/* <p className="footer-note">
              Built with React, TypeScript, and CSS.
            </p> */}

            <a className="back-to-top" href="#home">
              Back to top <span aria-hidden="true">↑</span>
            </a>
          </div>

        </div>

        
        {/* <div className="footer-bottom">
          <p className="footer-note">
            Built with React, TypeScript, and CSS.
          </p>

          <a className="back-to-top" href="#home">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div> */}

      </footer>

    </div>
  )
}

export default App

