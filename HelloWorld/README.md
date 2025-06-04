# 🧑‍🏫 Lesson: Creating Your First React Component – `HelloWorld`

Welcome! In this lesson, you’ll create your **first React component**: a simple one that displays `"Hello, World!"` on the screen. This is a classic beginner example and a great way to get started with React's component-based structure.

---

## 🎯 Learning Objectives

By the end of this lesson, you will be able to:

* Understand what a React **functional component** is
* Render JSX inside a component
* Export and use a custom component inside a React application

---

## ⚡ Step 1: Set Up Your React Project (with Vite)

If you don’t have a React project yet, use Vite to create one quickly:

```bash
npm create vite@latest hello-world-app -- --template react
cd hello-world-app
npm install
npm run dev
```

---

## 🧱 Step 2: Create the `HelloWorld` Component

Inside the `src/` directory, create a new file called `HelloWorld.jsx`, and add the following code:

```jsx
// src/HelloWorld.jsx

function HelloWorld() {
    return (
        <h1>Hello, World!</h1>
    );
}

export default HelloWorld;
```

---

### 🧠 What’s Happening Here?

| Line                        | Purpose                                              |
| --------------------------- | ---------------------------------------------------- |
| `function HelloWorld()`     | Defines a **functional component**                   |
| `return <h1>...</h1>`       | Returns JSX to be rendered on the page               |
| `export default HelloWorld` | Makes this component available to use in other files |

---

## 🧪 Step 3: Use It in Your App

Open the `App.jsx` file and update it to import and use your new component:

```jsx
// src/App.jsx
import HelloWorld from './HelloWorld';

function App() {
    return (
        <div>
            <HelloWorld />
        </div>
    );
}

export default App;
```

---

## 🚀 Step 4: Run It

If your dev server isn’t running yet, start it:

```bash
npm run dev
```

Then open your browser to the URL provided in the terminal (usually `http://localhost:5173`), and you should see:

```plaintext
Hello, World!
```

🎉 Congratulations, your first React component is live!

---

## 🧠 Recap

✅ You created a **functional component** in React
✅ You used **JSX** to return HTML-like syntax
✅ You imported and rendered your component in the `App`

---

## 🔁 Try This

Want to keep learning?

* Change the message to `"Welcome to React!"`
* Add another element like `<p>This is your first component.</p>`

---

## 📘 Key Concepts

| Concept              | Description                                            |
| -------------------- | ------------------------------------------------------ |
| Functional Component | A JavaScript function that returns JSX                 |
| JSX                  | Syntax that looks like HTML and is used to describe UI |
| Export/Import        | How components are reused across files                 |

---

## 🎉 Summary

You just built your first reusable React component! This is the building block of every React app. Keep going — you're on the path to mastering one of the most in-demand front-end libraries in the world.
