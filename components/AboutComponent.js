import React, { Component } from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import { ListItem, Card} from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';

const mapStateToProps = state => {
    return {
        sides: state.sides
    };
};


function Mission () {
    return(
    <Card title="My favorite dish"> 
        <Text style={{margin: 10}}>who doesn' love a great pasta dish. With all the choices available, You can eat a dish a day. Nothing is IMPASTABLE so live once and enjoy your and my faorite pastadis.</Text>
    </Card>
    )
}
class About extends Component {

    static navigationOptions = {
        title: 'About Us'
    }

    render() {
        const renderSide = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{source: {uri: baseUrl + item.image}}}
                />
            );
        };
        
        if (this.props.sides.isLoading) {
            return (
                <ScrollView>
                    <Mission />
                    <Card
                        title='Pasta Sides'>
                        <Loading />
                    </Card>
                </ScrollView>
            );
        }
        if (this.props.sides.errMess) {
            return (
                <ScrollView>
                    <Mission />
                    <Card
                        title='Pasta Sides'>
                        <Text>{this.props.sides.errMess}</Text>
                    </Card>
                </ScrollView>
            );
        }
        return (
            <ScrollView>
               <Mission />
               <Card
                    title='Pasta Sides'>
                    {/* <Loading /> */}
                    <FlatList
                        data={this.props.sides.sides}
                        renderItem={renderSide}
                        keyExtractor={item => item.id.toString()}
                    />
                </Card>
            </ScrollView>
        )
    }

}

export default connect(mapStateToProps)(About);