

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

export default FruitList