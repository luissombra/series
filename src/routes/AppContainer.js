import LoginScreen from '../screens/LoginScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

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

export default AppContainer = createAppContainer(StackNavigator);