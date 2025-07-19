import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '20px',
            margin: '20px',
            textAlign: 'center',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <p style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '20px'
            }}>Current Count: {count}</p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <button 
                    onClick={() => setCount(count + 1)}
                    style={{
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '16px'
                    }}
                >
                    Increment
                </button>
                
                <button 
                    onClick={() => setCount(count - 1)}
                    style={{
                        backgroundColor: '#f44336',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '16px'
                    }}
                >
                    Decrement
                </button>
                
                <button 
                    onClick={() => setCount(0)}
                    style={{
                        backgroundColor: '#ff9800',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '16px'
                    }}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Counter;
