import React from 'react';
import { ApplicationProvider, IconRegistry } from 'react-native-ui-kitten';
import { mapping, light as lightTheme, dark as darkTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Provider } from 'react-redux';
import AppContainer from './routes/AppContainer';

import store from './store';

export default class SeriesApp extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <ApplicationProvider mapping={mapping} theme={lightTheme}>
              <IconRegistry icons={EvaIconsPack} />
              <AppContainer />
          </ApplicationProvider>
        </Provider>
      );
    }
  }