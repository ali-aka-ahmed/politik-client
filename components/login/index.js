import React, { Component } from 'react';
import { Container, Text, Button, Form, Item, Input, Label, Header, Content, Icon } from 'native-base';
import { View, Alert } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

@inject("appState") @observer
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' }
    }

    handleEmailChange = (text) => {
        this.setState({email: text, password: this.state.password})
    };

    handlePasswordChange = (text) => {
        this.setState({email: this.state.email, password: text})
    };

    handleSubmit = async () => {
        let res = await this.props.appState.authenticateUser(this.state.email, this.state.password);
        if (res.success) {
            Actions.billList();
        } else {
            console.log("SHOULD CLEAR FIELDS");
            Alert.alert(
                'Error',
                res.message,
                [
                    {text: 'Dismiss', onPress: () => console.log('Dismiss Pressed')},
                ],
                { cancelable: false }
            )
        }
    };

    render() {
        return (
            <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: "rgba(9, 132, 227, 100)"}}>
                <View style={{width: 375, height: 75, marginLeft: 15, flexDirection: 'column', justifyContent: 'center'}}>
                    <Button transparent
                            title="backLaunch"
                            onPress={() => { Actions.pop() }}>
                        <Icon ios="md-close" android="md-close" style={{fontSize: 35, color: "white"}}/>
                    </Button>
                </View>
                <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1}}>
                    <Item style={{width: 300}}>
                        <Input placeholder="Email" style={{textAlign: 'center', color: "white"}} placeholderTextColor="white" onChangeText={(e) => {this.handleEmailChange(e)}} autoCapitalize = 'none'/>
                    </Item>
                    <Item style={{width: 300}}>
                        <Input placeholder="Password" secureTextEntry={true} style={{textAlign: 'center', color: "white"}} placeholderTextColor="white" onChangeText={(e) => {this.handlePasswordChange(e)}} autoCapitalize = 'none'/>
                    </Item>
                    <Button style={styles.button}
                            onPress={() => { this.handleSubmit()}}
                            bordered
                            rounded
                            light>
                        <Text>Log in</Text>
                    </Button>
                </View>
            </View>
        )
    }
};

// TODO: Color all the text black for now when moving over styling
// Thought - use designated survivor coloring??
// TODO: add ministate here within class - make the entire thing an observer containing an observable?
// TODO: Clean code lesson from Graham