import React, { Component} from 'react';
import { View, Text, ScrollView  } from 'react-native';
import { Card } from 'react-native-elements';
import { PASTAS } from '../shared/pastas';
import { REVIEWS} from '../shared/reviews';
import { PARTNERS } from '../shared/partners';
import { INGREDIENTS } from '../shared/ingredients';


function RenderItem({item}) {
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={require('./images/4dc2327eb71687efbb55551e25812343.jpg')}
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
    constructor(props) {
        super(props);
        this.state = {
            pastas: PASTAS,
            reviews: REVIEWS,
            partners: PARTNERS,
            ingredients: INGREDIENTS
        };
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <RenderItem 
                    item={this.state.pastas.filter(pasta => pasta.featured)[0]}
                />
                <RenderItem 
                    item={this.state.reviews.filter(review => review.featured)[0]}
                />
                <RenderItem 
                    item={this.state.partners.filter(partner => partner.featured)[0]}
                />
            </ScrollView>
        );
    }
}

export default Home;