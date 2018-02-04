import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { red, teal, blue } from 'material-ui/colors';

const history = createBrowserHistory();

//TODO move somewhere else
const theme = createMuiTheme({
    palette: {
        primary: teal,
        secondary: blue,
        error: red
    },
});

function RouterFactory({ store, routes }) {
    return (
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
                <Router history={history}>{routes}</Router>
            </MuiThemeProvider>
        </Provider>
    );
}

export default RouterFactory;