import React, { Component } from 'react';
import Projects from './Projects';
import Skills from './Skills';

class Home extends Component {
    render() {
        return (
            <div>
                <Skills />
                <Projects />
            </div>
        );
    }
}

export default Home;
