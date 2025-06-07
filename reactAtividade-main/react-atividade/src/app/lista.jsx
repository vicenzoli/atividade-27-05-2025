import React from 'react';

function Produto({ nome, preço }) {
    return (
        <li>
            { nome }: { preço }
        </li>
    );
}

export default Produto;
