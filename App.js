import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainComponent from "./components/MainComponent";
import DetailComponent from "./components/DetailComponent";
import ThirdComponent from "./components/ThirdComponent";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Button from "react-native-button";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={MainComponent}
          options={{
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
              <Button containerStyle={{ padding: 10 }}>Save</Button>
            ),
          }}
        />
        <Stack.Screen name="Detail" component={DetailComponent} />
        <Stack.Screen name="Third" component={ThirdComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
