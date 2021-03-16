import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

class ItemDesc extends React.Component {
  render() {
    var contents = (
      <Text>
        {this.props['scores']}
        {'\n'}
      </Text>
    );
    return (
      <View style={styles.container}>
        <Text style={styles.highScoresTitle}>
          About water
        </Text>
        <Text style={styles.scores}>{contents}</Text>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  highScoresTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  scores: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20
  }
});

// Module name
AppRegistry.registerComponent('ItemDesc', () => ItemDesc);