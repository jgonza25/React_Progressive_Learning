# 🧑‍🏫 Lesson: Rendering Lists with React – `FruitList`

In this lesson, we’re learning how to **render a list of items dynamically** using React. You'll build a reusable `FruitList` component and display it inside your main `App`. This is a great opportunity to get comfortable with using `.map()` in JSX and breaking your UI into smaller components.

---

## 🎯 Learning Objectives

By the end of this lesson, you will:

✅ Understand how to render a list in JSX using `.map()` <br>
✅ Learn how to create and use custom components <br>
✅ Practice separating logic and UI into smaller pieces

---

## ⚡ Step 1: Set Up a Vite + React Project

If you don’t have one yet, create a new Vite + React project:

```bash
npm create vite@latest fruit-list-app -- --template react
cd fruit-list-app
npm install
npm run dev
```

---

## 🧱 Step 2: Create the `FruitList` Component

Inside the `src/` folder, create a file named `FruitList.jsx` and add:

```jsx
// src/FruitList.jsx
function FruitList() {
  const fruits = ["Apple", "Banana", "Cherry", "Date"];

  const fruitItems = fruits.map((fruit, index) => {
    return <li key={index}>{fruit}</li>;
  });

  return (
    <ul>
      {fruitItems}
    </ul>
  );
}

export default FruitList;
```

---

## 🧠 What’s Happening Here?

| Code                           | Purpose                                                      |
| ------------------------------ | ------------------------------------------------------------ |
| `const fruits = [...]`         | Stores the list of fruit items                               |
| `.map((fruit, index) => <li>)` | Converts each fruit into an `<li>` element with a unique key |
| `<ul>{fruitItems}</ul>`        | Renders the list to the page                                 |

---

## 🧪 Step 3: Use `FruitList` in `App.jsx`

Update `App.jsx` to import and use the `FruitList` component:

```jsx
// src/App.jsx
import FruitList from "./FruitList";

function App() {
  return (
    <>
      <h2>List Of Fruits</h2>
      <FruitList />
    </>
  );
}

export default App;
```

---

## 🚀 Step 4: Run Your App

Make sure you're running the dev server:

```bash
npm run dev
```

Go to [http://localhost:5173](http://localhost:5173) — you should see a **List Of Fruits** displayed.

---

## 💡 Try This!

Challenge yourself to:

🟡 Add more fruits to the array <br>
🟡 Add a heading for each fruit using `<strong>` <br>
🟡 Turn each fruit into a clickable item (`onClick`)

---

## 📘 Key Concepts Covered

| Concept    | Description                                     |
| ---------- | ----------------------------------------------- |
| `map()`    | Transforms an array into JSX elements           |
| `key` prop | A unique identifier needed when rendering lists |
| Components | Encapsulate reusable UI logic                   |
| JSX        | Mix JavaScript and HTML-like syntax             |

---

## ✅ Recap

* ✅ You created and used a custom `FruitList` component
* ✅ You learned how to use `.map()` in JSX
* ✅ You organized logic into reusable files

---

## 🎉 Great Job!

You’ve now got a dynamic, reusable list component — a skill used **all the time** in real-world React apps, from displaying products to rendering messages. Keep going and try making a `VegetableList`, `ToDoList`, or `MovieList` next!
