// // davaleba 1
// import React, { useState, useEffect } from 'react';

// function StateChangeComponent() {
//   const [stateA, setStateA] = useState(0);
//   const [stateB, setStateB] = useState(0);

//   useEffect(() => {
//     console.log("stateA changed:", stateA);
//   }, [stateA]);

//   useEffect(() => {
//     console.log("stateB changed:", stateB);
//   }, [stateB]);

//   const changeStateA = () => {
//     setStateA(stateA + 1);
//   };

//   const changeStateB = () => {
//     setStateB(stateB + 1);
//   };

//   return (
//     <div>
//       <p>A: {stateA}</p>
//       <p>B: {stateB}</p>
//       <button onClick={changeStateA}>state A</button>
//       <button onClick={changeStateB}>state B</button>
//     </div>
//   );
// }

// export default StateChangeComponent;


// davaleba 2
import React, { useState, useEffect } from 'react';

function ClickCounter() {
    const [count, setCount] = useState(0);
    const [isListening, setIsListening] = useState(true);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    useEffect(() => {
        if (isListening) {
            document.addEventListener('click', increment);
        }

        return () => {
            document.removeEventListener('click', increment);
        };
    }, [isListening]);

    const handleButtonClick = () => {
        increment();
    };

    const toggleListening = () => {
        setIsListening(prev => !prev);
    };

    return (
        <div>
            <p>Click anywhere on the document to increment the counter.</p>
            <p>Count: {count}</p>
            <button onClick={handleButtonClick}>
                Increment Count
            </button>
            <button onClick={toggleListening}>
                {isListening ? 'Stop Listening' : 'Start Listening'}
            </button>
        </div>
    );
}

export default ClickCounter;
