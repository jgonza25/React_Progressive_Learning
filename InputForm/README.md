# 🧑‍🏫 Lesson: Interactive Name Form in React (with Vite)

In this lesson, you’ll build an **interactive name form** using React's `useState` hook. You'll learn how to manage input, handle form submission, and reset the input — all with clean and reactive UI updates.

---

## 🎯 Learning Objectives

By the end of this lesson, you will:

* Understand how to use the `useState` hook to manage form input
* Handle form events like `onChange` and `onSubmit`
* Display dynamic content based on user input
* Enable or disable buttons based on form state

---

## ⚡ Step 1: Set Up a Vite Project

If you haven't already created a React project, let’s spin one up using Vite:

```bash
npm create vite@latest name-form-app -- --template react
cd name-form-app
npm install
npm run dev
```

---

## 🧱 Step 2: Create the `NameForm` Component

Inside the `src/` folder, create a file called `NameForm.jsx` and add the following code:

```jsx
// src/NameForm.jsx
import { useState } from "react";

function NameForm() {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Hello, ${name}!`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
            />
            <h2>Hello, {name}!</h2>
            <button type="button" onClick={() => setName("")}>
                Reset
            </button>
            <button type="submit" disabled={!name.trim()}>
                Submit
            </button>
        </form>
    );
}

export default NameForm;
```

---

## 🧠 What’s Going On?

| Code                          | Purpose                                                   |
| ----------------------------- | --------------------------------------------------------- |
| `useState("")`                | Initializes the `name` state to an empty string           |
| `onChange={...}`              | Updates the state as the user types                       |
| `onSubmit={...}`              | Prevents page reload and shows a greeting in an alert     |
| `disabled={!name.trim()}`     | Disables the "Submit" button if the name field is empty   |
| `onClick={() => setName("")}` | Resets the input field when the "Reset" button is clicked |

---

## 🧪 Step 3: Use the Component in `App.jsx`

Replace the contents of `src/App.jsx` with this:

```jsx
// src/App.jsx
import NameForm from './NameForm';

function App() {
    return (
        <div>
            <h1>React Name Form</h1>
            <NameForm />
        </div>
    );
}

export default App;
```

---

## 🚀 Step 4: Run It

If your dev server isn’t running:

```bash
npm run dev
```

Navigate to `http://localhost:5173` in your browser. Type a name, click "Submit," and watch the magic happen! 🎉

---

## 💡 Bonus Challenges

Want to explore more?

* Show a message only after submitting (instead of live updates)
* Add validation (e.g., require at least 3 characters)
* Automatically reset after submitting

---

## 📘 Key Concepts Covered

| Concept                  | Description                                          |
| ------------------------ | ---------------------------------------------------- |
| `useState`               | React hook for tracking and updating component state |
| `onChange`               | Updates state in real-time as the user types         |
| `onSubmit`               | Handles form submission with custom logic            |
| `controlled input`       | Input value is tied directly to React state          |
| Conditional Button State | Submit is disabled when input is empty               |

---

## ✅ Recap

* ✅ Built a controlled form input using `useState`
* ✅ Managed input and form submission
* ✅ Displayed a greeting dynamically
* ✅ Reset and validated the form interactively

---

## 📣 You're Ready!

You just made a dynamic and interactive form using React and Vite! These techniques are fundamental to handling user input in real-world applications.
