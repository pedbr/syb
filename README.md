# Technical assignment for the web developer role at Soundtrack Your Brand

Visit the deployed application [here](https://syb-pedro.netlify.app/). Developed by Pedro Brás

---

## To run the application

Clone the repository

In the project directory, run:

### `yarn install`

Once the installation is complete run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## Features

- Section with 'Trending' tracks that basically calls on the `mockScrobble` function to return a random track from the given list. It includes a button to re-fetch another random track, and a 'Add to queue' dummy button

- 'Recently played' section using the `fetchHistory` function with a table showing the last tracks played on the given Zone. This table is automatically updated when a new track is played.

- A 'Playing Now' section that is subscribing to the the given WebSocket connection. This element updates whenever the music playing changes. It also has the possibility to expand into kiosk mode.

- Dark mode

- Note that some elements like the search bar and the play/pause and Add to queue buttons don't have any functionality, they were added for UI enhancement purposes

---

## Dependencies

- Application built with [React](https://reactjs.org/) written in [Typescript](https://www.typescriptlang.org/)
- Using the [MaterialUI](https://mui.com/) component and icon libraries with [Emotion](https://emotion.sh/docs/introduction) styling capabilities
- Application state management is handled with [Zustand](https://github.com/pmndrs/zustand)
- 'Recently played' relative time column is handled by [React Relative Time](https://github.com/aharshac/react-relative-time#readme)
