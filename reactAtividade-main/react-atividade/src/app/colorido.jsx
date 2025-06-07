import React from 'react';

function TituloColorido({ cor, children }) {
    return (
        <h1 style={{ color: cor }}>
            {children}
        </h1>
    );
}

export default TituloColorido;
