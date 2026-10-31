<div align="center">

# OPD Management System

### A modern frontend foundation for outpatient department services

Built with Angular 19 and TypeScript

![Angular](https://img.shields.io/badge/Angular-19-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)
![Status](https://img.shields.io/badge/Project-In%20Development-orange)

</div>

---

## Overview

OPD Management System is a web application project focused on outpatient department experiences. The frontend repository provides the starting point for patient and doctor-facing screens, built with Angular.

## Current project scope

The codebase includes component scaffolding for:

- Home
- Services
- Patient login and registration
- Doctor login
- Feedback

> **Development status:** This project is actively being developed. The components are initial scaffolding; application routes and complete user workflows have not been configured yet.

## Technology

| Technology | Purpose |
| --- | --- |
| [Angular 19](https://angular.dev/) | Frontend framework |
| [TypeScript](https://www.typescriptlang.org/) | Application language |
| [RxJS](https://rxjs.dev/) | Reactive programming |
| [Karma](https://karma-runner.github.io/) and [Jasmine](https://jasmine.github.io/) | Unit testing |

## Getting started

### Requirements

- Node.js and npm versions compatible with Angular 19

### Installation

Clone the repository, navigate to the project directory, and install its dependencies:

```bash
git clone https://github.com/ArvindWaghmale45/OPD_Management_System.git
cd OPD_Management_System
npm install
```

### Run locally

```bash
npm start
```

Open [http://localhost:4200](http://localhost:4200) in your browser. The development server watches for source changes and reloads the application.

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the Angular development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run watch` | Build in development mode and rebuild when files change. |
| `npm test` | Run unit tests with Karma. |

## Project structure

```text
src/
├── app/
│   ├── doctorlogin/   Doctor login component
│   ├── feedback/      Feedback component
│   ├── home/          Home page component
│   ├── login/         Patient login component
│   ├── ourservices/   Services component
│   └── register/      Patient registration component
├── index.html         Application entry page
└── styles.css         Global styles
```

## Development

Generate a component using the Angular CLI:

```bash
npx ng generate component component-name
```

Explore the [Angular CLI documentation](https://angular.dev/tools/cli) for additional commands and guidance.
