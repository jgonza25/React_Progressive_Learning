import { useState } from "react";

function NameForm() {

    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Hello, ${name}!`);
    };

    return (
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} placeholder="Enter name" onChange={(e) => setName(e.target.value)}/>
                <h2>Hello, {name}!</h2>
                <button type="button" onClick={() => setName("")}>Reset</button>
                <button type="submit" disabled={!name.trim()}>Submit</button>
            </form>
    )
}

export default NameForm