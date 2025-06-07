"use client";
import React, { useState } from 'react';

function InputControlado() {
    const [textoAtual, setTexto] = useState("Texto Atual");
    const [inputValue, setInputValue] = useState("");

    const mudarTexto = () => setTexto(inputValue);

    return (
        <div>
            <h1>{textoAtual}</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={mudarTexto} style={{ marginLeft: '10px' }}>
                Exibir
            </button>
        </div>
    );
}

export default InputControlado;     