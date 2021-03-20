import React, { Component } from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import { ListItem, Card} from 'react-native-elements';
import { PARTNERS } from '../shared/partners';

function Mission () {
    return(
    <Card title="My favorite dish"> 
        <Text style={{margin: 10}}>who doesn' love a great pasta dish. With all the choices available, You can eat a dish a day. Nothing is IMPASTABLE so live once and enjoy your and my faorite pastadis.</Text>
    </Card>
    )
}
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partners: PARTNERS
        };
    }

    static navigationOptions = {
        title: 'About Us'
    }

    render() {
        const renderPartner = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{ source: require('./images/4dc2327eb71687efbb55551e25812343.jpg')}}
                />
            );
        };
        
        return (
            <ScrollView>
               <Mission />
               <Card
                    title='Community Partners'>
                    <Loading />
                    <FlatList
                        data={this.state.pastas}
                        renderItem={renderDirectoryItem}
                        keyExtractor={item => item.id.toString()}
                    />
                </Card>
            </ScrollView>
        )
    }

}
export default About;