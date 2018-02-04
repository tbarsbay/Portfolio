import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { grey } from 'material-ui/colors';

import Projects from '../projects';
import Skills from '../skills';

class Home extends Component {

    render() {
        return (
            <div>
                <Skills />

                <div style={{marginTop: 16, marginBottom: 16, height: 1, background: grey[300]}} />

                <Projects />
            </div>
        );
    }

}

export default Home;