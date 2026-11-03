# Nxt Watch

A YouTube-style video streaming app built with React. Users log in, browse and search videos, watch them, and save favourites, with a light/dark theme throughout.

## Features

- **Authentication**: JWT login stored in cookies; protected routes redirect unauthenticated users to `/login`, and logged-in users are redirected away from `/login`
- **Show/hide password** toggle on the login form, with server error messages displayed on failure
- **Home**: video grid, search by keyword, dismissible premium banner, no-results view
- **Trending** and **Gaming** pages
- **Video details**: embedded player (`react-player`), Like / Dislike (mutually exclusive), Save / Saved
- **Saved videos** list, kept in app-wide context
- **Light / Dark theme** toggle
- **Logout confirmation** popup
- Loader, failure view with Retry, and a Not Found page
- Responsive layout (mobile menu, desktop sidebar)

## Tech Stack

- React (class and function components, Context API)
- React Router v5
- styled-components
- js-cookie
- react-player
- reactjs-popup
- react-icons
- react-loader-spinner
- date-fns

## Routes

| Path            | Page          | Access    |
| --------------- | ------------- | --------- |
| `/login`        | Login         | Public    |
| `/`             | Home          | Protected |
| `/trending`     | Trending      | Protected |
| `/gaming`       | Gaming        | Protected |
| `/saved-videos` | Saved Videos  | Protected |
| `/videos/:id`   | Video Details | Protected |
| any other path  | Not Found     | Public    |

## API Endpoints

Base URL: `https://apis.ccbp.in`

| Endpoint                  | Method | Description                                  |
| ------------------------- | ------ | -------------------------------------------- |
| `/login`                  | POST   | Returns `jwt_token` for valid credentials    |
| `/videos/all?search=`     | GET    | All videos, filtered by search text          |
| `/videos/trending`        | GET    | Trending videos                              |
| `/videos/gaming`          | GET    | Gaming videos                                |
| `/videos/:id`             | GET    | Details of a single video                    |

All `GET` requests send the token as `Authorization: Bearer <jwt_token>`.

## Project Structure

```
src/
├── App.js
├── index.js
├── index.css
├── components/
│   ├── Header/
│   ├── Sidebar/
│   ├── VideoCard/
│   ├── ProtectedRoute/
│   ├── PageLayout/
│   └── FetchViews/        # Loader and Failure views
├── context/
│   └── NxtWatchContext.js # Theme + saved videos
├── pages/
│   ├── Login/
│   ├── Home/
│   ├── Trending/
│   ├── Gaming/
│   ├── SavedVideos/
│   ├── VideoDetails/
│   └── NotFound/
└── utils/
    └── index.js           # API status constants, auth headers, data formatter
```

## Getting Started

### Prerequisites

- Node.js 14+ and npm

### Installation

```bash
git clone https://github.com/<your-username>/nxt-watch.git
cd nxt-watch
npm install
npm start
```

The app runs at [http://localhost:3000](http://localhost:3000).

### Demo credentials

```
username: rahul
password: rahul@2021
```

## Scripts

| Command         | Description                   |
| --------------- | ----------------------------- |
| `npm start`     | Run the app in development   |
| `npm run build` | Create a production build    |
| `npm test`      | Run the test suite           |

