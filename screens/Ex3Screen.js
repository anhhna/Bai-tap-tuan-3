import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Ex3Screen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Exercise III',
      });
      render() {
        const { goBack } = this.props.navigation;
        return (
            <View style={styles.outer}>
            <View style={styles.inner}>
              <View style={[styles.box, {backgroundColor: 'red'}]}/>
              <View style={[styles.box, {backgroundColor: 'green'}]}/>
            </View>
            <View style={[styles.inner, {alignItems: 'flex-end'}]}>
              <View style={[styles.box, {backgroundColor: 'blue'}]}/>
              <View style={[styles.box, {backgroundColor: 'hotpink'}]}/>
            </View>
          </View>
        );
    }
  }

  
const styles = StyleSheet.create({
    outer: {
      flex: 1,
    },
    inner: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
  
    },
    box: {
      width: 50,
      height: 50,
    }
  });