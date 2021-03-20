import React from 'react';
import { TouchableHighlight, Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';

export default class Menu extends React.Component {
  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        style={styles.ClickContain}
        underlayColor="rgba(128, 128, 128, 0.1)"
      >
        <View style={styles.Container}>
          <Image source={this.props.source} style={styles.Icon} />
          <Text style={styles.btnText}>{this.props.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

Menu.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string
};

const styles = StyleSheet.create({
    clickContain: {
      flexDirection: 'row',
      padding: 5,
      marginTop: 5,
      marginBottom: 5
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-start'
    },
    icon: {
      height: 25,
      width: 25
    },
    text: {
      fontSize: 16,
      marginLeft: 10,
      marginTop: 2
    }
  });
