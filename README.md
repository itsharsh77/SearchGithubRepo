# Github Search Repository  Project

## About
You can search the repositories of github and sort according to stars, created at, updated at etc from the dropdown during search.

## This project uses React + vite  framework to run this app

You can install Vite using npm command  [Vite](https://vitejs.dev/guide)

Follow the below code for smooth installation
```
npm create vite@latest
//After runing this command it asks for Project name
//Add Project name
// Choose React and Javascript
npm install

//Then run Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

//In the tailwind.config.js file add this code in the content part
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
//In the index.css file add this code
@tailwind base;
@tailwind components;
@tailwind utilities;

//To run the project
npm run dev

```

## Repo Link

You may be using [SearchGithubRepo](https://github.com/itsharsh77/SearchGithubRepo).




