import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import routerFactory from './common/router';
import routes from './client/routes';
import store from './client/store';

const Router = routerFactory({ store, routes });

ReactDOM.render(Router, document.getElementById('root'));
registerServiceWorker();
