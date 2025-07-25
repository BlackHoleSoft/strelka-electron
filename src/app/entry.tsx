import {Main} from 'main';
import React from 'react';
import {createRoot} from 'react-dom/client';

console.log('Entry');

const init = () => {
    const rootNode = document.getElementById('root');

    if (!rootNode) {
        console.error('Cannot find root node!');
        return;
    }

    const root = createRoot(rootNode);
    root.render(<Main />);
};

init();
