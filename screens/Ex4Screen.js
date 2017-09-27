import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Ex4Screen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Exercise IV'
      });
      render() {
        const { goBack } = this.props.navigation;
        return (
          <View style={styles.container}>
            <View style={{height: 20}}>
                <View style={styles.row}>
                    <Image 
                        style={{height: 100, width: 100}}
                        source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                    />
                    <View style={styles.text}>
                        <Text style={styles.header}>React Coure.</Text>
                        <Text numberOfLines={3}>
                            Course about how to write the React Native framework.
                        </Text>
                    </View>
                </View>

                <View style={styles.row}>
                    <Image 
                        style={{height: 100, width: 100}}
                        source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                    />
                    <View style={styles.text}>
                        <Text style={styles.header}>Redux Course.</Text>
                        <Text numberOfLines={3}>
                        Course about a predictable state container for JavaScript apps (aka Redux) which is help the application much more clearer.
                        </Text>
                    </View>
                </View>

                <View style={styles.row}>
                    <Image 
                        style={{height: 100, width: 100}}
                        source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                    />
                    <View style={styles.text}>
                        <Text style={styles.header}>React Coure.</Text>
                        <Text numberOfLines={3}>
                        Course about how to write the React Native framework.
                        </Text>
                    </View>
                </View>
            </View>
          </View>
        );
    }
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 5,
    },
    text: {
        flex: 1,
        padding: 10,
    },
    header: {
        fontSize: 20,
        flexWrap: 'wrap',
    },
  });