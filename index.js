//import React, { Component } from 'react';
import { registerRootComponent } from 'expo';
/*import {NavigationContainer} from '@react-navigation/native';
import { StackNavigator } from "react-navigation";
import { createStackNavigator } from '@react-navigation/stack';
import  MainComponent  from "./components/MainComponent";
import  DetailComponent  from "./components/DetailComponent";
import  ThirdComponent  from "./components/ThirdComponent";*/

//import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//AppRegistry.registerComponent(appName, () => App);

//Screen names
import { MainScreen, DetailScreen, ThirdScreen } from "./screenNames";
// const App = createStackNavigator({
//     MainScreen: {
//         screen: MainComponent,
//         navigationOptions: {
//             headerTitle: 'Main',
//         },
//     },
//     DetailScreen: {
//         screen: DetailComponent,
//         navigationOptions: {
//             headerTitle: 'Detail',
//         },
//     },
//     ThirdScreen: {
//         screen: ThirdComponent,
//         navigationOptions: {
//             headerTitle: 'Third',
//         },
//     },
// });
// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={MainComponent} />
//         <Stack.Screen name="Details" component={DetailComponent} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
