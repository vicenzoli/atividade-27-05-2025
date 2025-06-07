import React from 'react';

function Usuario({ nome, idade, cidade }) {
    return <h1>Olá, {nome}, que vive em { cidade } e tem { idade }!</h1>;
}

export default Usuario;
