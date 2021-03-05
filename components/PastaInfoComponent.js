import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

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

function PastaInfo(props) {
    return <RenderPasta pasta={props.pasta} />;
}

export default PastaInfo;