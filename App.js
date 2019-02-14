import React from 'react'
import { Platform, StatusBar, StyleSheet, View, WebView } from 'react-native'
import { AppLoading, Asset, Font, Icon } from 'expo'
import AppNavigator from './navigation/AppNavigator'
import {SaltinoText} from './components/StyledText.js'
import UserView from './components/UserView'

import {User } from './store/User.model.js'

const me = User.create({
    name:     'Alistar Corvi'
    ,username: 'amcorvi'
    ,email:    'amcorvi@unknd.io'
    ,location: 'Porto'
    ,age:      30
  })

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      )
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <WebView
              source={{ uri: 'https://github.com/amcorvi/omna-native-client'}}
              style={{marginTop: 20}}
            />
            <SaltinoText style={{fontSize: 90}}>I wish you were here</SaltinoText>
            <UserView user={me} />
          </View>
        )
      }
    }

    _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png')
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        'saltino': require('./assets/fonts/Saltino.ttf')
      })
    ])
  }

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error)
  }

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
