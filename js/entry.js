import Greeter from './Greeter';
import React from 'react';
import ReactDOM from 'react-dom';

require('../css/style.css');
ReactDOM.render(<Greeter name = "Diego" />, document.getElementById('app'));
