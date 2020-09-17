import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from 'react-native-button';
import { MainScreen, DetailScreen, ThirdScreen } from "../screenNames";

export default class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log(`this.props = ${JSON.stringify(this.props)}`);
    const { navigation } = this.props;
    let dataSendToDetail = {
        name: 'Star Wars',
        releaseYear: 1977
    }
    return (
      <View style={{
          flex: 1,
          backgroundColor: 'dodgerblue',
          alignItems: 'center',
          justifyContent: 'center'
      }}>
        <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white'}}>
            This is the main screen
        </Text>
        <Button
            containerStyle={{ padding: 10, margin: 20, width: 200, borderRadius: 10, backgroundColor: 'darkviolet'}}
            style={{ fontSize: 18, color: 'white'}}
            onPress={() => {
                navigation.navigate("Detail", dataSendToDetail);
                //this.props.navigate(DetailScreen);
            }}>
                Navigate to detail
            </Button>
            <Button
            containerStyle={{ padding: 10, margin: 20, width: 200, borderRadius: 10, backgroundColor: 'darkviolet'}}
            style={{ fontSize: 18, color: 'white'}}
            onPress={() => {
                navigation.navigate("Third");
                //this.props.navigate(DetailScreen);
            }}>
                Navigate to third
            </Button>
      </View>
    );
  }
}
