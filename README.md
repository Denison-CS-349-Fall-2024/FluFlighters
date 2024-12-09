# Flu Fighters - Flu Infection Simulator and Web App 

Flu Fighters is an educational, interactive web app that simulates the spread of influenza within a population based on user-defined factors. The app features a real-time environment to model how widespread or scarce flu infects and spreads amongst people, with many factors that can contribute or minimize its spread including vaccination rates, isolation rates, and vaccine efficacy. This customizability, interactiveness, and sandbox-approach to our simulation aims to educate the middle school grade level and above on how people's health and hygeinic decisions influence the spread of flu and have great impacts on society. Actions like isolating when infected and getting an annual flu vaccine aid in decreased contagion and are modeled in the user-defined parameters that can be modified at will. 

## Key Features

Flu Fighters features a rich, simulation-geared environment where users start with a series of editable parameters and run a simulation of how influenza spreads amongst a population. There is also the ability to add new simulations after running an initial one to do comparisons on their results based on the different parameters you set. Flu Fighters also has other pages dedicated to providing detailed information on the flu as well.

#### Interactive Sandbox :microscope:

Our web app seeks to enhance the learning of how influenza spreads across a population through an open sandbox approach for higher interactivity. Hands-on learning can provide a solidified foundation where users can tweak and have full control of the simulation's parameters to see how those changes reflect in the simulations' outputs.

#### Educational Content :books:

Flu Fighters outside of the simulation page provides in-depth breakdowns of how influenza affects people, its symptoms, treatment, and prevention methods. Detailed information gives the necessary background for our simulation and what is being represented.

## Technical Design 

Flu Fighters is based on the React framework, JavaScript, and TypeScript. The breakdown of its architecture is split between parameter operations and the graphical frontend representing the output of those parameter operations correctly. Within the src folder is the majority of Flu Fighters' development outside of the React host and contains other directories for our fonts and the simulation resources.

#### Application Directory :hammer:

For the specific files in /src/app, the implementation for the parameters are stored. There is also frontend development in React for structuring Flu Fighters' simluation page structure, metadata, and context menus for the editable parameters.

#### Simulation Directory :arrow_forward:

The /src/app/simulation directory is the main directory that contains the main implementation of the simulation visuals. Components of the visuals are stored in the 'components' directory and contain files that bridge the parameters' operations together, calculate the state changes of people in the sim, and the frontend features.


## Local Hosting Instructions

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

First download necessary packages

```bash
pnpm i
```

And, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
