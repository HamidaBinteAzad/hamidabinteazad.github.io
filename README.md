
# Hamida Binte Azad | Portfolio

Personal portfolio website showcasing my background, technical skills, software projects, undergraduate research, and professional experience.

**Live website:** [hamidabinteazad.github.io](https://hamidabinteazad.github.io/)

## About

I'm a Computer Science and Engineering graduate from the University of Asia Pacific, focused on backend development with Python and Django.

This portfolio presents my technical foundation, selected web development projects, academic research in Bangla natural language processing, and professional experience.

## Built With

- **React** — UI components and page structure
- **TypeScript** — type-safe JavaScript
- **Vite** — development server and production build tooling
- **CSS** — styling, layouts, and responsive design
- **Git and GitHub** — version control and source hosting
- **GitHub Pages** — website hosting and deployment

## Portfolio Sections

- **Home** — introduction and backend development focus
- **About** — academic background and career direction
- **Skills** — programming languages, Django, databases, and web fundamentals
- **Projects** — selected database-driven and web applications
- **Research** — undergraduate thesis on Bangla fake news detection using BERT
- **Experience** — professional experience at AIMS Education and AIMS Academy
- **Education** — academic qualifications and recognition
- **Training** — early backend and web development training
- **Contact** — email, GitHub, and LinkedIn links

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) and npm before running the project locally.

### Clone the repository

```bash
git clone https://github.com/HamidaBinteAzad/hamidabinteazad.github.io.git
cd hamidabinteazad.github.io
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL shown in the terminal to view the website. The development server supports hot module replacement, so changes can appear in the browser as you save files.

## Available Commands

| Command | Description |
|---|---|
| `npm run dev` | Starts the local development server |
| `npm run build` | Runs TypeScript checks and creates a production build |
| `npm run lint` | Runs ESLint to check the code |
| `npm run preview` | Previews the production build locally |

## Project Structure

```text
hamidabinteazad.github.io/
├── .github/
│   └── workflows/       # GitHub Actions workflows
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable portfolio sections
│   ├── App.tsx           # Main page composition
│   ├── App.css           # Component and section styling
│   ├── index.css         # Global styles
│   └── main.tsx          # React application entry point
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
└── vite.config.ts
```

## Build for Production

To check the project and generate the production files, run:

```bash
npm run build
```

Vite outputs the production build to the `dist/` directory.

To preview that build locally, run:

```bash
npm run preview
```

## Deployment

The portfolio is hosted using GitHub Pages. The repository's GitHub Actions workflow builds the application and publishes the production output.

After committing and pushing changes to the configured deployment branch, check the **Actions** tab in GitHub to confirm whether the deployment completed successfully.

## Contact

- **Portfolio:** https://hamidabinteazad.github.io/
- **GitHub:** https://github.com/HamidaBinteAzad
- **LinkedIn:** https://www.linkedin.com/in/hamidabinteazad
- **Email:** hamidabazad@gmail.com
