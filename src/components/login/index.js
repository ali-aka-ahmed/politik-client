import React, { Component } from 'react';
import { View, Text } from "react-native";
import { Button } from "native-base";
import { Actions } from "react-native-router-flux";

export default class Login extends Component {

    render() {
        return (
            <View>
                <Button onPress={() => {Actions.launch()}}><Text>Launch</Text></Button>
            </View>
        );
    }
}
