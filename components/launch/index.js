import React, { Component } from 'react';
import { Container, Text, Button } from 'native-base';
import { View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

export default class Launch extends Component {

    render() {
        return (
            <Container style={styles.container}>
                <Image
                    source={require("../../images/sign-in-wallpaper.png")}
                    style={{ flex: 1, height: 300, width: 390, resizeMode: 'cover'}}
                >
                    <View style={{marginLeft: 50, marginTop: 500}}>
                        <Button style={styles.button}
                                // onPress={() => {Actions.enterState()}}
                                onPress={() => {Actions.login()}}
                                bordered
                                rounded
                                light>
                            <Text>Login</Text>
                        </Button>
                        <Button style={styles.button}
                            // onPress={() => {Actions.enterState()}}
                                onPress={() => {Actions.signUp()}}
                                transparent
                                rounded
                                light>
                            <Text>Sign Up</Text>
                        </Button>
                    </View>
                </Image>
            </Container>
        )
    }
};