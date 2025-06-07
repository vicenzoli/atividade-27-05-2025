"use client";
import React from 'react';
import Saudacao from './saudacao';
import Usuario from './usuario';
import Contador from './contador';
import InputControlado from './input';
import TituloColorido from './colorido';
import Lista from './lista';
import QuizApp from './perguntas';

function App() {
    return (
        <>
            <div>
                <Saudacao nome="Maria" />
                <Saudacao nome="Carlos" />
            </div>
            <div>
                <Usuario nome="João" idade="17" cidade="São José" />
            </div>
            <div>
                <Contador />
            </div>
            <div>
                <InputControlado />
            </div>
            <div>
                <TituloColorido cor="red">Pedro é gay</TituloColorido>
                <TituloColorido cor="blue">França é mais ainda</TituloColorido>
            </div>
            <div>
                <Lista nome="França" preço="1,99" />
                <Lista nome="Pedro" preço="2,00" />
                <Lista nome="Ruan" preço="+2,00" />
            </div>
            <div>
                <QuizApp/>
            </div>
        </>
    );
}

export default App