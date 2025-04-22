# Gustat Frontend

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Vite](https://img.shields.io/badge/Built%20with-Vite-646cff.svg?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.10-38B2AC?logo=tailwindcss)](https://tailwindcss.com/)

> Frontend application for **Gustat Sweets and Savouries**, showcasing a modern selection of Nigerian sweets and savoury dishes.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Tech Stack

- **React 18** (Vite powered)
- **TypeScript**
- **Tailwind CSS**
- **React Router**
- **React Hook Form**
- **React Query**
- **Radix UI**
- **Auth0** (Authentication)
- **Zod** (Schema validation)

---

## Features

- Secure authentication via Auth0
- Responsive UI with Tailwind CSS
- Modern form handling and validation
- API data management with React Query
- Accessible components with Radix UI
- Theme switching (light/dark mode)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash
git clone https://github.com/oluwaseunolusanya/gustat-frontend.git
cd gustat-frontend
npm install
# or
yarn install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

- The app will be available at http://localhost:5173.

### Building for Production

```bash
npm run build
# or
yarn build
```

### Linting

```bash
npm run lint
# or
yarn lint
```

---

## Project Structure
plaintext
gustat-frontend/
├── public/             # Static files
├── src/
│   ├── components/     # Reusable components
│   ├── hooks/          # Custom hooks
│   ├── pages/          # Page components
│   ├── styles/         # Tailwind and custom CSS
│   ├── utils/          # Utility functions
│   ├── App.tsx         # Root component
│   ├── main.tsx        # App entry point
├── .eslintrc.cjs       # ESLint config
├── tailwind.config.js  # Tailwind config
├── vite.config.ts      # Vite config
├── package.json        # Project metadata
└── README.md           # Project overview

---

## Contributing
Contributions are welcome!

Fork this repository.

Create your feature branch (git checkout -b feature/your-feature).

Commit your changes (git commit -m 'Add your feature').

Push to the branch (git push origin feature/your-feature).

Open a Pull Request.

Please use conventional commit messages and ensure linting passes.

---

## License
Distributed under the MIT License.
