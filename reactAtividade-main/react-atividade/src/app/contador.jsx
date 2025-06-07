"use client";
import React, { useState } from 'react';

function Contador() {
    const [numero, setNumero] = useState(0);

    const incrementar = () => setNumero(prev => prev + 1);
    const decrementar = () => setNumero(prev => prev - 1);

    return (
        <div>
            <h2>Contador</h2>
            <h1>{numero}</h1>
            <button onClick={incrementar}>➕ Incrementar</button>
            <button onClick={decrementar} style={{ marginLeft: '10px' }}>➖ Decrementar</button>
        </div>
    );
}

export default Contador;