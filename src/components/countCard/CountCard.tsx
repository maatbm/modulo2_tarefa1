import './countCard.css';
import { useState } from 'react';

function CountCard() {
    const [count, setCount] = useState(0);
    return (
        <div className='countCardContainer'>
            <div className='countCardDisplay'>
                {count}
            </div>
            <button className='countCardButton' onClick={() => setCount((count) => count + 1)}>Adicionar 1</button>
        </div>
    );
}

export default CountCard;
