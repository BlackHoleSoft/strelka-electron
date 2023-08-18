import React from 'react';
import {render} from 'react-dom';
import {Desktop} from './ui/pages/desktop';

console.log('Entry');

const init = () => {
    const root = document.getElementById('root');
    render(<Desktop />, root);
};

init();
