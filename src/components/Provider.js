import * as React from 'react';
import { View } from 'react-native';

export class CinchProvider extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        {this.props.children}
      </View>
    );
  }
}
