# Improve alisamadian.github.io for Doctoral Applications

Restructure the existing static portfolio page to be more academic-focused, concise (bullet-based), and suitable for AI/ML doctoral position applications.

## Proposed Changes

### [MODIFY] [index.html](file:///c:/Users/ali/Documents/GitHub/alisamadian.github.io/index.html)

**Keep the existing layout structure** (avatar right + content left, expandable sections, social links footer). Rewrite content to be bullet-based and academic-focused.

#### 1. Hero / Intro (Replace long paragraph with concise version)
- Keep photo, name, title
- Replace the long paragraph bio with a short 2-line summary
- Add subtitle: "M.Sc. Data Mining Candidate | Kharazmi University"

#### 2. NEW: Research Interests section (add before Data Scientist)
- Add as a new expandable section (open by default)
- **Bullet-point list** of specific AI/ML research areas:
  - Deep Learning & Neural Architecture Design
  - Generative Models (GANs, Diffusion Models)
  - Natural Language Processing & Transformers
  - Computer Vision & Image Understanding
  - Reinforcement Learning
  - Geospatial Data Mining & Analysis

#### 3. NEW: Thesis / Academic Research section (add after Research Interests)
- Another expandable section (open by default)
- **Thesis title** (dummy placeholder)
- Advisor name (dummy placeholder)
- Brief bullet-point methodology description
- Status: "Final Semester — Expected completion [date]"

#### 4. Data Scientist section → Convert to bullet format
Current: Long paragraphs with sub-topic headers.
New: **Bullet list** keeping ALL existing items but condensed:
- CNNs, GANs, RNNs, LSTM, Transformers, RL
- PyTorch, Scikit-learn, model evaluation, data pre-processing
- Geospatial analysis (osmnx, geopandas, shapely, contextly)
- Advanced mathematics, statistics, linear algebra

#### 5. Full-Stack Development section → Condense to bullets
Current: 4 long paragraphs.
New: **Compact bullet list** retaining all items:
- Django, DRF, Python — 2+ years back-end
- HTML, CSS, SASS, Bootstrap, Vanilla JS
- WebSockets, AJAX, CDNs, real-time features
- PostgreSQL, Redis, ORM, ASGI (Daphne/Channels)
- REST APIs, third-party integrations
- Booking, payment, LMS, blogs, dashboards, e-commerce
- Git version control

#### 6. DevOps section → Condense to bullets
Current: 5 long paragraphs.
New: **Compact bullet list**:
- Docker & Docker-Compose (containerization)
- Linux environments & command-line operations
- Git/GitHub — branching, code reviews, collaboration
- Nginx, reverse proxy, ASGI/WSGI, load balancing
- Cron jobs, task scheduling, deployment automation

#### 7. Other Related Skills → Condense to bullets
Current: 4 long paragraphs.
New:
- Web scraping (Selenium, Scrapy)
- Data analysis & visualization (Pandas, NumPy, Matplotlib)
- Data Structures & Algorithm Design
- SEO (technical, on-page, off-page)

#### 8. NEW: Relevant Coursework section (add after Other Skills)
- Another expandable section:
  - Machine Learning, Deep Learning, Data Mining
  - Natural Language Processing, Computer Vision
  - Advanced Mathematics, Statistics, Linear Algebra
  - Algorithm Design, Data Structures

---

### [MODIFY] [index.css](file:///c:/Users/ali/Documents/GitHub/alisamadian.github.io/index.css)

Minimal changes — keep existing design aesthetic:
- Add styles for new section types (research interests, thesis)
- Style bullet lists for consistency across sections
- Ensure the condensed format looks clean

---

### [MODIFY] [index.js](file:///c:/Users/ali/Documents/GitHub/alisamadian.github.io/index.js)

- Add toggle handlers for the new expandable sections (Research Interests, Thesis, Coursework)
- Keep existing accordion behavior

---

## Open Questions

> [!IMPORTANT]
> 1. The academic.html shows your university is **Kharazmi University** — should I use this name, or do you want to keep it as a placeholder?
> 2. For your thesis, should I write a generic AI/ML thesis title as placeholder, or do you have a specific topic you'd like me to use?
> 3. Should the Research Interests and Thesis sections be **open by default** (like Data Scientist currently is)?
> 4. Should I keep the existing expandable accordion behavior, or would you prefer all sections always visible (no toggling)?

## Verification Plan

### Manual Verification
- Open `index.html` directly in a browser to verify layout
- Check mobile responsiveness at 900px breakpoint
- Verify all expandable sections toggle correctly
