# 🧑‍🏫 Lesson: Building a Click Counter with React + Vite

Welcome to today’s React lesson! In this project, you'll learn how to build a **Click Counter** using React’s `useState` hook — and we’ll use **Vite** to set up our app because it's fast and modern.

---

## 🎯 Learning Objectives

By the end of this lesson, you will be able to:

- Create a React app using **Vite**
- Understand how to use the `useState` hook to manage state
- Handle events like button clicks
- Render stateful data in the UI

---

## ⚡ Step 1: Set Up the Project with Vite

Let’s begin by creating a React project using Vite:

```bash
npm create vite@latest click-counter-app -- --template react
cd click-counter-app
npm install
npm run dev
```

### 📝 Notes:

- `vite@latest` pulls the most recent version.
- The `--template react` flag sets up React with JSX support.

---

## 🧱 Step 2: Create the `ClickCounter` Component

Inside the `src/` folder, create a new file named `ClickCounter.jsx`.

```jsx
// src/ClickCounter.jsx
import { useState } from "react";

function ClickCounter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </>
  );
}

export default ClickCounter;
```

---

### 🔍 What’s Going On Here?

| Line                  | Explanation                                  |
| --------------------- | -------------------------------------------- |
| `useState(0)`         | Initializes the counter value to `0`         |
| `setCount(count + 1)` | Updates the state when the button is clicked |
| `<p>{count}</p>`      | Displays the current value of `count`        |
| `onClick={...}`       | Runs a function when the button is clicked   |

---

## 🧪 Step 3: Use It in the App Component

Open `src/App.jsx` and replace its contents with the following:

```jsx
// src/App.jsx
import ClickCounter from "./ClickCounter";

function App() {
  return (
    <div>
      <h1>React Click Counter</h1>
      <ClickCounter />
    </div>
  );
}

export default App;
```

---

## 🚀 Step 4: Run the App

Start your development server (if it's not already running):

```bash
npm run dev
```

Open your browser to the local dev URL (usually `http://localhost:5173`) and see the counter in action! 🎉

---

## 💡 Challenge

Want to level up?

🔁 **Add a "Reset" button** next to "Click Me" that sets the count back to 0.
🤔 Can you make it so the count only increases on every other click?

---

## 📘 Key React Concepts

| Concept       | Description                                               |
| ------------- | --------------------------------------------------------- |
| `useState`    | A hook that lets you add state to function components     |
| Event Handler | A function that runs when a user interacts with the UI    |
| JSX           | A React-specific syntax extension for writing UI elements |

---

## ✅ Recap

- ✅ Installed and ran a **React + Vite** app
- ✅ Built a reusable **ClickCounter** component
- ✅ Used **state** and **event handling**
- ✅ Rendered dynamic data in the browser

---

## 📝 Summary

Great job! You've successfully built a simple yet powerful React component using Vite. This lesson lays the foundation for understanding how interactivity works in modern front-end development.

Want to turn this into a lesson with Tailwind styling or deploy it to Netlify? Just ask!

---
