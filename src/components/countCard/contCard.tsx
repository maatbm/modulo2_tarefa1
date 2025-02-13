import { useState } from 'react';

const [count, setCount] = useState(0)
function countCard(){
    return (
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
            </button>
        </div>
    )
}

export default countCard;
