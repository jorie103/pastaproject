import React, { Component} from 'react';
import { View, Text, ScrollView  } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';

const mapStateToProps = state => {
    return {
        pastasites: state.pastasites,
        promotions: state.promotions,
        sides: state.sides
    };
};

function RenderItem(props) {
    const {item} = props;

    if (props.isLoading) {
        return <Loading />;
    }
    if (props.errMess) {
        return (
            <View>
                <Text>{props.errMess}</Text>
            </View>
        );
    }
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={{uri: baseUrl + item.image}}
            >
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class Home extends Component {
    
    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
               <RenderItem
                    item={this.props.pastasites.pastasites.filter(pastasite => pastasite.featured)[0]}
                    isLoading={this.props.pastasites.isLoading}
                    errMess={this.props.pastasites.errMess}
                />
                <RenderItem
                    item={this.props.promotions.promotions.filter(promotion => promotion.featured)[0]}
                    isLoading={this.props.promotions.isLoading}
                    errMess={this.props.promotions.errMess}
                />
                <RenderItem
                    item={this.props.sides.sides.filter(side => side.featured)[0]}
                    isLoading={this.props.sides.isLoading}
                    errMess={this.props.sides.errMess}
                />
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(Home);