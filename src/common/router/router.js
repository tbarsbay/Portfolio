import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { blueGrey, deepOrange, lightBlue } from 'material-ui/colors';

const history = createBrowserHistory();

//TODO move somewhere else
const theme = (() => {
    const palette = {
        primary: blueGrey,
        accent: lightBlue,
        secondary: lightBlue,
        error: deepOrange
    };

    const typography = {
        fontFamily: '"Roboto",sans-serif',
        display4: {
            fontFamily: '"Source Sans Pro",sans-serif',
            color: palette.primary['500']
        },
        display3: {
            fontFamily: '"Source Sans Pro",sans-serif',
            color: palette.primary['500']
        },
        display2: {
            fontFamily: '"Source Sans Pro",sans-serif',
            color: palette.primary['500']
        },
        display1: {
            fontFamily: '"Source Sans Pro",sans-serif',
            color: palette.primary['500']
        },
        body1: {
            fontSize: 12,
            opacity: 0.56
        }
    };
    
    return createMuiTheme({
        palette,
        typography
    });
})();

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