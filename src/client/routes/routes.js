import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import App from '../components/App';

const routes = (
    <div>
        <Route path="/" component={App} />
    </div>    
);

export default routes;