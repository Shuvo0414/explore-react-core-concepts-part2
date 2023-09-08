import { useState } from "react"

export default function Team () {
    const [count, setCount] = useState(11);

    const handleAdd = () => {
        const newAddPlayer = count + 1;
        setCount(newAddPlayer);
    }

    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }

    return (
        <div  style={teamStyle}>
            <h3>Player : {count}</h3>
            <button onClick={handleAdd}>Add Players</button>
            <button onClick={() =>{
                setCount(count - 1);
            }}>Remove Player</button>
        </div>
    )
}