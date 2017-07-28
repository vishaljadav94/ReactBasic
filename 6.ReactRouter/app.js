import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import Index from './src/index';

render((
    <BrowserRouter>
        <Index/>
    </BrowserRouter>
), document.getElementById('app'));
