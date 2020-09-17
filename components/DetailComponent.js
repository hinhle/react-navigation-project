import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from 'react-native-button';
export default class DetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log(`this.props = ${JSON.stringify(this.props.route.params)}`);
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'mediumseagreen',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
          <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white'}}>
              This is Detail screen
          </Text>
  
        </View>
    );
  }
}
