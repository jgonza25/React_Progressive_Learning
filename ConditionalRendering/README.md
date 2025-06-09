# 🧑‍🏫 Lesson: Conditional Rendering in React – `AddFruitForm`

In this lesson, we’ll explore **conditional rendering** using React’s `useState` hook. You’ll build a simple fruit list app that **only displays the list once it contains 5 or more fruits** — perfect for practicing dynamic UI rendering based on state conditions.

---

## 🎯 Learning Objectives

By the end of this lesson, you will:

* Understand how to use `useState` to manage form and list data
* Use conditional logic to **show or hide elements** in JSX
* Render lists dynamically with `.map()`
* Practice basic form handling in React

---

## ⚡ Step 1: Set Up with Vite

Start a fresh React project using Vite:

```bash
npm create vite@latest fruit-conditional-rendering -- --template react
cd fruit-conditional-rendering
npm install
npm run dev
```

---

## 🧱 Step 2: Create the `AddFruitForm` Component

In `src/AddFruitForm.jsx`, add the following:

```jsx
import { useState } from "react";

function AddFruitForm() {
  const [fruitsList, setFruitList] = useState([
    "Apple",
    "Banana",
    "Cherry",
    "Date",
  ]);
  const [newFruit, setNewFruit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFruitList([...fruitsList, newFruit]);
    setNewFruit("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Add a Fruit to the List</h2>
        <input
          type="text"
          value={newFruit}
          onChange={(e) => setNewFruit(e.target.value)}
        />
        <button type="submit">Add Fruit</button>
      </form>

      {/* Conditional rendering: only show list if it has 5 or more items */}
      {fruitsList.length >= 5 && (
        <ul>
          {fruitsList.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default AddFruitForm;
```

---

## 🧠 What’s the Logic?

| Code                     | What It Does                                                 |
| ------------------------ | ------------------------------------------------------------ |
| `useState([...])`        | Initializes a default list of fruits                         |
| `setFruitList([...])`    | Updates the list when a new fruit is added                   |
| `fruitsList.length >= 5` | The condition that determines whether to render the list     |
| `fruitsList.map(...)`    | Maps each fruit to a `<li>` element when rendering is active |

---

## 🧪 Step 3: Use It in `App.jsx`

```jsx
import AddFruitForm from './AddFruitForm';

function App() {
  return (
    <div>
      <h1>Conditional Rendering Demo</h1>
      <AddFruitForm />
    </div>
  );
}

export default App;
```

---

## 💡 Try This On Your Own

* Change the condition to `> 6` or `=== 10`
* Show a message when the list is **not** long enough
* Add a clear/reset button to empty the list
* Use different content for small vs. large lists

---

## 📘 Key Concepts Covered

| Concept                   | Description                                     |
| ------------------------- | ----------------------------------------------- |
| `useState`                | Hook to track the list and input field          |
| Controlled Components     | Input field tied to React state                 |
| `.map()`                  | Dynamically creates JSX elements from arrays    |
| **Conditional Rendering** | Use of `{condition && <JSX>}` to control output |

---

## ✅ Recap

✅ Handled input and form submission
✅ Rendered a list **only when a condition was met**
✅ Used `.map()` to dynamically create list elements
✅ Practiced controlling UI visibility with logic

---

## 🎉 Great Work!

You've just used **conditional rendering** to control your app’s output based on real data. This technique is foundational for showing and hiding modals, notifications, sections of a form, or any dynamic UI.
