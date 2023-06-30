import React from 'react';
import {render} from 'react-dom';

console.log('Entry');

const init = () => {
    const root = document.getElementById('root');
    render(<div>Strelka System</div>, root);
};

init();
