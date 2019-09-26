import React from 'react';
import ReactDOM from 'react-dom';
import Starry from '../lib';

import './styles/index.css';

const Demo = () => (
  <Starry className="wrapper">
    <div>
      Welcome
    </div>
  </Starry>
);

ReactDOM.render(<Demo />, window.document.getElementById('app'));
