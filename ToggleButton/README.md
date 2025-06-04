# 🧑‍🏫 Lesson: Toggle Visibility with React – `ToggleButton`

In this lesson, you’ll build an interactive **Toggle Button** using React. With one click, a secret message is revealed — click again, and it disappears. This is a great way to learn **conditional rendering** and **state toggling** with the `useState` hook.

---

## 🎯 Learning Objectives

By the end of this lesson, you will:

* Understand how to manage `boolean` state with `useState`
* Use **conditional rendering** to show/hide UI elements
* Toggle content dynamically with a button click

---

## ⚡ Step 1: Set Up a React App Using Vite

If you haven't yet, you can quickly spin up a Vite + React app:

```bash
npm create vite@latest toggle-button-app -- --template react
cd toggle-button-app
npm install
npm run dev
```

---

## 🧱 Step 2: Create the `ToggleButton` Component

Inside the `src/` folder, create a new file called `ToggleButton.jsx` and add the following code:

```jsx
// src/ToggleButton.jsx
import { useState } from "react";

function ToggleButton() {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
            <h2>Click To Reveal A Secret Message</h2>
            <button onClick={handleClick}>
                {isVisible ? "Hide" : "Show"}
            </button>
            {isVisible && <p>This is a secret message.</p>}
        </>
    );
}

export default ToggleButton;
```

---

## 🧠 What’s Happening Here?

| Code                        | Purpose                                                           |
| --------------------------- | ----------------------------------------------------------------- |
| `useState(false)`           | Initializes a boolean state variable called `isVisible`           |
| `setIsVisible(!isVisible)`  | Flips the value each time the button is clicked                   |
| `{isVisible && <p>...</p>}` | Conditionally renders a `<p>` tag only when `isVisible` is `true` |
| Button text updates         | Dynamically changes between "Show" and "Hide" based on state      |

---

## 🧪 Step 3: Add It to `App.jsx`

Update your `App.jsx` to include and display the component:

```jsx
// src/App.jsx
import ToggleButton from './ToggleButton';

function App() {
    return (
        <div>
            <h1>React Toggle Example</h1>
            <ToggleButton />
        </div>
    );
}

export default App;
```

---

## 🚀 Step 4: Run the App

If it’s not already running:

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) — click the button to **reveal** or **hide** the secret message.

---

## 💡 Try This!

Practice your skills by modifying:

* The secret message (make it personalized or funny!)
* The initial state (`useState(true)`) to show the message by default
* Add animations or transitions for smoother toggling

---

## 📘 Key Concepts Covered

| Concept               | Description                                 |
| --------------------- | ------------------------------------------- |
| `useState`            | React hook to manage component state        |
| Boolean Toggle        | Changing a `true/false` state with a button |
| Conditional Rendering | Show elements only when conditions are met  |
| JSX Logic             | Embed expressions and logic directly in UI  |

---

## ✅ Recap

* ✅ Built a toggle button using `useState`
* ✅ Used conditional rendering to control visibility
* ✅ Practiced embedding logic in JSX

---

## 🎉 You Did It!

You’ve now created a simple but powerful interactive component in React. This pattern — toggling state and conditionally rendering UI — is used **everywhere** in modern web apps.
