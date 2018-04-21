import React from 'react';
import ReactDOM from 'react-dom';
import Core from './core/Core';
import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(<Core />, document.getElementById('root'));
registerServiceWorker();
