import React, { Component } from 'react';
import { View, Text } from "react-native";
import { Button, Container, Form, Item, Input, Label } from "native-base";
import { Actions } from "react-native-router-flux";
import styles from './styles';

// TODO: change Item to have success prop if username or password is in database
export default class Launch extends Component {

    render() {
        return (
            <Container>
                <Button transparent>
                    <Icon name='ion-close' />
                </Button>
                <Form>
                    <Item inlineLabel>
                        <Label>Username</Label>
                        <Input />
                    </Item>
                    <Item inlineLabel last>
                        <Label>Password</Label>
                        <Input />
                    </Item>
                </Form>
                <Button onPress={() => {Actions.pop()}}>
                    <Text>Log in</Text>
                </Button>
            </Container>
        );
    }
}