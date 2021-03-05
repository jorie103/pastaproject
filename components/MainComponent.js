import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import PastaInfo from './PastaInfoComponent';
import { View } from 'react-native';
import { PASTAS } from '../shared/pastas';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pastas: PASTAS,
            selectedPasta: null
        };
    } onPastaSelect(pastaId) {
        this.setState({selectedPasta: pastaId});
    }



    render() {
        return (
            <View style={{flex: 1}}>
                <Directory
                    pastas={this.state.pastas}
                    onPress={pastaId => this.onPastaSelect(pastaId)}
                />
                <PastaInfo
                    pasta={this.state.pastas.filter(
                        pasta => pasta.id === this.state.selectedPasta)[0]}
                />
            </View>
        );
    }

}

export default Main;