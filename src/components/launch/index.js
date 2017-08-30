import React, { Component } from 'react';
import { Container, Text, Button } from 'native-base';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

export default class Launch extends Component {
    appState = this.props.appState;

    // componentWillMount = async () => {
    //     let userLoggedIn = await appState.userLoggedIn("test")
    //     if (userLoggedIn) {
    //         await appState.getBills();
    //         await appState.getRepresentatives();
    //         Actions.billList()
    //     }
    // };

    // Actions.billList()

    render() {
        return (
            <Container style={styles.container}>
                <View>
                    <Text style={styles.title}>Politik</Text>
                </View>
                <View>
                    <Button style={styles.button}
                            onPress={() => {Actions.login()}} // show username and password box + login button. then send function
                            bordered
                            dark>
                        <Text>Login</Text>
                    </Button>
                </View>
            </Container>
        )
    }
};