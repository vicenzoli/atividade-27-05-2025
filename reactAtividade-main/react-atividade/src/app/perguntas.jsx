"use client";
import React, { useState } from 'react';

function Pergunta({ enunciado, alternativas, correta, onResposta }) {
    const [selecionada, setSelecionada] = useState(null);
    const [feedback, setFeedback] = useState(null);

    const handleClick = (idx) => {
        if (selecionada !== null) return;
        setSelecionada(idx);
        const acertou = idx === correta;
        setFeedback(acertou ? 'Correto!' : 'Errado!');
        onResposta(acertou);
    };

    return (
        <div style={{ margin: '20px auto', maxWidth: '500px' }}>
            <h2>{enunciado}</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {alternativas.map((alt, idx) => (
                    <li key={idx} style={{ margin: '8px 0' }}>
                        <button
                            onClick={() => handleClick(idx)}
                            style={{
                                width: '100%',
                                padding: '10px',
                                backgroundColor: selecionada === idx
                                    ? idx === correta ? '#d4edda' : '#f8d7da'
                                    : '#eee',
                                border: '1px solid #ccc',
                                cursor: selecionada === null ? 'pointer' : 'default'
                            }}
                        >
                            {alt}
                        </button>
                    </li>
                ))}
            </ul>
            {feedback && <p style={{ fontWeight: 'bold' }}>{feedback}</p>}
        </div>
    );
}

function QuizApp() {
    const questoes = [
        {
            enunciado: 'Qual é a capital do Brasil?',
            alternativas: ['São Paulo', 'Brasília', 'Rio de Janeiro', 'Salvador'],
            correta: 1
        },
        {
            enunciado: 'Em que ano o homem pisou na Lua pela primeira vez?',
            alternativas: ['1965', '1969', '1972', '1961'],
            correta: 1
        },
        {
            enunciado: 'Qual elemento químico tem o símbolo O?',
            alternativas: ['Ouro', 'Osmium', 'Oxigênio', 'Oganesson'],
            correta: 2
        },
        {
            enunciado: 'Quem escreveu "Dom Casmurro"?',
            alternativas: ['Machado de Assis', 'José de Alencar', 'Guimarães Rosa', 'Cecília Meireles'],
            correta: 0
        }
    ];

    const [indice, setIndice] = useState(0);
    const [pontuacao, setPontuacao] = useState(0);

    const handleResposta = (acertou) => {
        if (acertou) setPontuacao(prev => prev + 1);
        setTimeout(() => setIndice(prev => prev + 1), 1000);
    };

    const total = questoes.length;

    return (
        <div>
            {indice < total ? (
                <Pergunta
                    enunciado={questoes[indice].enunciado}
                    alternativas={questoes[indice].alternativas}
                    correta={questoes[indice].correta}
                    onResposta={handleResposta}
                />
            ) : (
                <div>
                    <h2>Quiz concluído!</h2>
                    <p>Você acertou {pontuacao} de {total} perguntas!</p>
                </div>
            )}
        </div>
    );
}

export default QuizApp