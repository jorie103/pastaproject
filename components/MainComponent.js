import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { PASTA} from '../shared/pasta';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pasta: PASTA
        };
    }

    render() {
        return <Directory pasta={this.state.pasta} />;
    }
}

export default Main;