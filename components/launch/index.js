import React, { Component } from 'react';
import { Container, Text, Button } from 'native-base';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

export default class Launch extends Component {

    render() {
        return (
            <Container style={styles.container}>
                <View>
                    <Text style={styles.title}>Politik</Text>
                </View>
                <View>
                    <Button style={styles.button}
                            // onPress={() => {Actions.enterState()}}
                            onPress={() => {Actions.login()}}
                            bordered
                            dark>
                        <Text>Login</Text>
                    </Button>
                    <Button style={styles.button}
                        // onPress={() => {Actions.enterState()}}
                            onPress={() => {Actions.signUp()}}
                            transparent
                            dark>
                        <Text>Sign Up</Text>
                    </Button>
                </View>
            </Container>
        )
    }
};