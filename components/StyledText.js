import React from 'react';
import { Text } from 'react-native';

export class SaltinoText extends React.Component {
  render () {
    return <Text {...this.props} style={[this.props.style, {fontFamily: 'saltino'}]} />
  }
}

export class MonoText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]} />;
  }
};



