import { useState } from "react";

function ClickCounter() {
    const [count, setCount] = useState(0);
    return (
        <>
        <p>{count}</p>
        <button onClick={() => setCount (count + 1)}>Click Me</button>
        </>
    )
}

export default ClickCounter