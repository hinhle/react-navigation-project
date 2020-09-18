import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import Button from "react-native-button";
import { MainScreen, DetailScreen, ThirdScreen } from "../screenNames";

export default class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _onSave() {
    console.log("You pressed Save");
    console.log("navigation params", this.props.route.params);
    if (this.props.route.params.isSaving == true) return;
    this.props.navigation.setParams({ isSaving: true });
    setInterval(() => {
      this.props.navigation.setParams({ isSaving: false });
    }, 3000);
  }
  render() {
    console.log(this.props);
    const { navigation } = this.props;
    navigation.setOptions({
      title: "My home",
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: "#fff",
      },
      headerTintColor: "#000",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerRight: () => (
        <Button containerStyle={{ padding: 10 }} onPress={() => this._onSave()}>
          Save
        </Button>
      ),
    });
    let dataSendToDetail = {
      name: "Star Wars",
      releaseYear: 1977,
    };
    let mainView =
      this.props.route.params && this.props.route.params.isSaving == true ? (
        <ActivityIndicator />
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: "dodgerblue",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 22, color: "white" }}>
            This is the main screen
          </Text>
          <Button
            containerStyle={{
              padding: 10,
              margin: 20,
              width: 200,
              borderRadius: 10,
              backgroundColor: "darkviolet",
            }}
            style={{ fontSize: 18, color: "white" }}
            onPress={() => {
              navigation.navigate("Detail", dataSendToDetail);
              //this.props.navigate(DetailScreen);
            }}
          >
            Navigate to detail
          </Button>
          <Button
            containerStyle={{
              padding: 10,
              margin: 20,
              width: 200,
              borderRadius: 10,
              backgroundColor: "darkviolet",
            }}
            style={{ fontSize: 18, color: "white" }}
            onPress={() => {
              navigation.navigate("Third");
              //this.props.navigate(DetailScreen);
            }}
          >
            Navigate to third
          </Button>
        </View>
      );
    return mainView;
  }
  componentDidMount() {
    this.props.navigation.setParams({ isSaving: false });
  }
}
