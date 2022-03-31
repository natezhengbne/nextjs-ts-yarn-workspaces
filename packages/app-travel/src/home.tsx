import React, { useState } from 'react';

const Home = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Hello Travel</p>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(prev => { return prev + 1; })}>Click</button>
        </div>
    )
}

export default Home;
