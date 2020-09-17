import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from 'react-native-button';

export default class ThirdComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'tomato',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
          <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white'}}>
              This is Third screen
          </Text>
  
        </View>
    );
  }
}
