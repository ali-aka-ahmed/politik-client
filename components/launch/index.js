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
                            onPress={() => {Actions.enterState()}}
                            bordered
                            dark>
                        <Text>Get Started</Text>
                    </Button>
                </View>
            </Container>
        )
    }
};