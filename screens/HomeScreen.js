import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Bài tập tuần 3 - Flexbox',
      };
      render() {
        const { navigate } = this.props.navigation;
        return (
          <View style={styles.container}>
            <Button style={styles.button}
              title = 'Exercise III' 
              color = '#FFC2CE'
              onPress = { () => {
                navigate('Ex3');
              }} />
            <Button style={styles.button}
              title = 'Exercise IV' 
              color = '#80B3FF'
              onPress = { () => {
                navigate('Ex4');
              }} />
            </View>
        );
      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 5,
    margin: 5,

  }
});