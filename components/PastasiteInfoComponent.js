import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        pastasites: state.pastasites,
        reviews: state.reviews
    };
};


function RenderPastasite(props) {
    const {pastasite} = props;
    if (pastasite) {
        return (
            <Card
                featuredTitle={pastasite.name}
                image={{uri: baseUrl + pastasite.image}}
            >
                <Text style={{margin: 10}}>
                    {pastasite.description}
                </Text>
                <Icon
                    name={props.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    raised
                    reverse
                    onPress={() => props.favorite ? 
                        console.log('Already set as a favorite') : props.markFavorite()}
                />
            </Card>
        );    
    }
    return <View />;
}

function RenderReviews({reviews}) {

    const renderReviewItem = ({item}) => {
        return (
            <View style={{margin: 10}}>
                <Text style={{fontSize: 14}}>{item.text}</Text>
                <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
                <Text style={{fontSize: 12}}>{`-- ${item.author}, ${item.date}`}</Text>
            </View>
        );
    };

    return (
        <Card title='Reviews'>
            <FlatList
                data={reviews}
                renderItem={renderReviewItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    );
}

class PastasiteInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            favorite: false
        }
    }
 
    markFavorite() {
        this.setState({favorite: true});
    }

    static navigationOptions = {
        title: 'Pastasite Information'
    }

    render() {
        const pastasiteId = this.props.navigation.getParam('pastasiteId');
        const pastasite = this.props.pastasites.pastasites.filter(pastasite => pastasite.id === pastasiteId)[0];
        const reviews = this.props.reviews.reviews.filter(review => review.pastasiteId === pastasiteId);
        return (
            <ScrollView>
                <RenderPastasite pastasite={pastasite} 
                    favorite={this.state.favorite}
                    markFavorite={() => this.markFavorite()}
                />
                <RenderReviews reviews={reviews} />
            </ScrollView>
        );
    }
}


export default connect(mapStateToProps)(PastasiteInfo);