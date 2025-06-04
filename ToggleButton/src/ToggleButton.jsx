import { useState } from "react"

function ToggleButton() {
    
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible);
    }

    return (
        <>
        <h2>Click To Reveal A Secret Message</h2>
        <button onClick={handleClick}>{isVisible ? "Hide" : "Show"}</button>
        {isVisible && <p>This is a secret message.</p>}
        </>
    )
}
export default ToggleButton