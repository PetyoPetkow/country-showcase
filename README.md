# Country showcase

A responsive React application that fetches country data from countries.json and displays it as a grid of country cards.

The app includes search, continent filtering, sorting, loading and error states, and a light/dark theme toggle.

## Getting started

### Prerequisites
- <strong>Node.js</strong> v24
- <strong>pnpm</strong> v10 or newer

### Instalation
```
git clone https://github.com/PetyoPetkow/country-showcase.git
cd country-showcase
pnpm install
```

### Run locally
```
pnpm run dev
```
Then open the local URL shown in the terminal.

## Tech Stack

- **React** - the preferred option in the task and the library I have most experience with
- **TypeScript** - for static typing and safer handling of country data and component props.
- **Vite** - chosen for its simple setup and fast development experience.
- **Tailwind CSS** - chosen for responsive styling and convenient light/dark theme support.
- **Lucide React** - used for lightweight, consistent icons.

## Features
- Fetches and displays country data from `countries.json`
- Search countries by name, filter by continent and sort by population or total area (ascending/descending order)
- Shows up to 12 countries in cards with flag image, country name, continent, short info and more
- Loading state with skeleton cards
- Error state handling with retry functionality
- Light/dark mode with preference persisted across reloads
- Responsive and accessible UI

## What I'd Improve With More Time
- Add automated tests for the filtering, sorting, search, and error-handling logic.
- Extract the search/filter/sort state and logic into a dedicated hook if the application grows further.
- Add further visual polish to the header and cards based on additional testing.


## AI Collaboration

Details about the AI-assisted development process, prompts, and review decisions can be found in [`AI_NOTES.md`](./AI_NOTES.md).
