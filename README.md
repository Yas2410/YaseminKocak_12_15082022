# sportsee

![SportSee logo](./src/assets/logo.svg)
The Sportsee company is specialized in sports coaching.
The company launched an app where users can have a regular follow-up of their sport sessions.

**Below the main goals of the project**:

- API Integration.
- Charts & Graphs Integration.
- JSDoc

[SEE the KANBAN](https://676974353034.notion.site/Tableau-de-bord-SportSee-922ee66152c74a9ab9d74b9be1e6e13f) || [SEE Design on Figma](https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR)

---

## Prerequisites

- [Git](https://git-scm.com/)
- [nodeJS](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Yarn](https://yarnpkg.com/)
- [React](https://fr.reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Recharts](https://recharts.org/en-US/)
- [PropTypes](https://www.npmjs.com/package/prop-types)

## Installation

1. Clone the repository

```sh
git clone https://github.com/Yas2410/YaseminKocak_12_15082022.git
```

2. BACK-END Launching

- Move to the back-end folder :

```sh
cd sportsee-back
```

- Install the dependencies :

```sh
yarn
```

-Run the API

```sh
yarn dev
```

_The API is running when you get the "Magic happens on port 3000" message_

2. FRONT-END Launching

- Move to the front-end folder :

```sh
cd sportsee-front
```

- Install the dependencies :

```sh
npm install
```

-Launch the project

```sh
npm start
```

_As port 3000 is already running, enter "Y" to run the project on another port_

## API & MOCKED DATA

API is running by default.
If you want to launch the project with mocked data, follow the above steps :

- Go back to the front-end folder :

```sh
cd sportsee-front
```

- Install json server

```sh
npm install -g json-server
```

- Launch json server

```sh
json-server --watch ./src/mock/mocked_data.json --port 1234
```

- In `src/index.js`, change mock variable to `true`.
