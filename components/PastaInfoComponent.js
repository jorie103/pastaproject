import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { REVIEWS } from '../shared/reviews';
import { PASTAS} from '../shared/pastas';
// import { postFavorite } from '../redux/ActionCreators';


function RenderPasta(props) {
    const {pasta} = props;
    if (pasta) {
        return (
            <Card
                featuredTitle={pasta.name}
                image={{uri: baseUrl + campsite.image}}
            >
                <Text style={{margin: 10}}>
                    {pasta.description}
                </Text>
                <Icon
                    name={props.favorite ? 'pizza' : 'pizza-o'}
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

class PastaInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pastas: PASTAS,
            reviews: REVIEWS,
            favorite: false
        }
    }
 
    markFavorite() {
        this.setState({favorite: true});
    }

    static navigationOptions = {
        title: 'Pasta Information'
    }

    render() {
        const pastaId = this.props.navigation.getParam('pastaId');
        const pasta = this.state.pastas.filter(pasta => pasta.id === pastaId)[0];
        const reviews = this.state.reviews.filter(review => review.pastaId === pastaId);
        return (
            <ScrollView>
                <RenderPasta pasta={pasta} 
                    favorite={this.state.favorite}
                    markFavorite={() => this.markFavorite()}
                />
                <RenderReviews reviews={reviews} />
            </ScrollView>
        );
    }
}


export default PastaInfo;