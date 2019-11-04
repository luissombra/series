import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Text, ApplicationProvider, IconRegistry, withStyles } from 'react-native-ui-kitten';
import { mapping, light as lightTheme, dark as darkTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const StackNavigator = createStackNavigator(
  {
    'Login': {
      screen: LoginScreen,
      navigationOptions: {
        title: 'Entrar'
      }
    }
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      title: "Séries App",
      headerStyle: {
        backgroundColor: "#48018a",
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        color: 'white',
        fontWeight: 'bold',
      },
    }
  }
)

const AppContainer = createAppContainer(StackNavigator);

export default class App extends React.Component {
  render() {
    return (
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
          <IconRegistry icons={EvaIconsPack} />
          <AppContainer />
      </ApplicationProvider>
    );
}
}