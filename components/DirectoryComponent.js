import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { PASTAS } from '../shared/pastas';

class Directory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pastas: PASTAS
        };
    }

    static navigationOptions = {
        title: 'Directory'
    }

    render() {
        const { navigate } = this.props.navigation;

        const renderDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('PastaInfo', { pastaId: item.id })}
                    leftAvatar={{ source: require('./images/4dc2327eb71687efbb55551e25812343.jpg')}}
                />
            );
        };

            return (
                <FlatList
                    data={this.state.pastas}
                    renderItem={renderDirectoryItem}
                    keyExtractor={item => item.id.toString()}
                />
            );
    }
}

export default Directory;