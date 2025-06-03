import { useState } from "react";

function NameForm() {
    
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Hello, ${name}!`);
    };

    return (
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <h2>Hello, {name}</h2>
            </form>
    )
}

export default NameForm