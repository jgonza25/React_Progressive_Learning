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
        <h2>Add a fruit to list</h2>
        <input
          type="text"
          value={newFruit}
          onChange={(e) => setNewFruit(e.target.value)}
        />
        <button type="submit">Add Fruit</button>
      </form>
      {fruitsList.length > 4 && (
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
