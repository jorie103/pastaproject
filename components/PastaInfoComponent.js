import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { PASTAS } from '../shared/pastas';

function RenderPasta({pasta}) {
    if (pasta) {
        return (
            <Card>
                featuredTitle={pasta.name}
                image={require('./images/4dc2327eb71687efbb55551e25812343.jpg')}
            
                <Text style={{margin: 10}}>
                    {pasta.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class PastaInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
          pastas: PASTAS
        };
    }

    static navigationOptions = {
        title: 'Pasta Information'
    }

    render() {
        const pastaId = this.props.navigation.getParam('pastaId');
        const pasta = this.state.pastas.filter(pasta => pasta.id === pastaId)[0];
        return <RenderPasta pasta={pasta} />;
    }
}

export default PastaInfo;