# Netflix Clone Website

This project aims to replicate the Netflix interface and functionality, providing users with an experience similar to the popular streaming service.

## Features

- Almost identical UI/UX with Netflix
- Login Page
- Sign Up Page
- Account Page where users can save/delete favorite movies/shows
- Main Section with a big cover of the backdrop + title + description
- Rows of Popular, Trending, Top Rated Movies, and TV Series
- User authentication and data storage

## Tech Stack Used

- React with Vite
- Tailwind CSS
- Firebase
- Axios
- TMDB API

## Methods Used

**React:**
- Props
- Conditional Rendering
- List Rendering
- Event Handling (onClick, onChange, onSubmit)
- React Hooks (useState, useEffect, useContext, useNavigate)
- Optional Chaining
- React-Router
- React-Icons
- Error Handling with try/catch statements
- Asynchronous functions

**Tailwind CSS:**
- Tailwind-Scroll-Hide effect
- Styling components (box style, color, typography, hover effects, etc.)

**Axios:**
- Fetching data from external APIs using axios, get, then, fetch, await 

**Firebase:**
- Authentication with Firebase Authentication (email and password)
- Firebase app setup and configuration
- Firebase Cloud Firestore for data storage

## Resources Used

- YouTube Tutorial 
- Google
- Stack Overflow
- ChatGPT
- Firebase Documentation
- TMDB Developer Documentation

## Important Files

**Src:**
- main.jsx
- App.jsx
- index.css
- firebase.js

**Components:**
- Main.jsx
- Movie.jsx
- Navbar.jsx
- ProtectedRoute.jsx
- Row.jsx

**Context:**
- AuthContent.jsx

**Pages:**
- Account.jsx
- Home.jsx
- Login.jsx
- SignUp.jsx

**Others:**
- .env file with environment variables for API keys, etc.

## Problem Solving Notes

- **Firebase Setup + Authentication:**
  - Resolved issues with Firebase API and .env configuration.
  - Used Stack Overflow, Firebase Documentation, and ChatGPT for assistance.
  - Identified and addressed .env related issues affecting Firebase setup and authentication.

## Project Progress Notes

- **Notes 1:**
  - Fixed Firebase API and AuthContext issues.
  - Resolved Firebase API key linking problem.
  - Utilized Stack Overflow for solutions.

- **Notes 2:**
  - Investigated and resolved issues with Firebase API key.
  - Experimented with .env file configurations.
  - Resolved .env related issues affecting Firebase setup.

- **Notes 3:**
  - Explored multiple avenues for help and solutions.
  - Identified .env related issues with Firebase.
  - Implemented workaround for .env related Firebase configuration issue.

- **Notes 4:**
  - Completed Firestore database setup.
  - Implemented user authentication and data storage.
  - Added Account page and SavedShows component.
  - Completed project features except for deployment.
  - Brainstormed additional features for future iterations.

## Brainstorm of Additional Features

- Search bar for movies/tv shows
- Mobile responsive navbar
- Video streaming functionality
- Enhanced Account features
- "Remember me" functionality in login page
- Additional Rows for different categories
