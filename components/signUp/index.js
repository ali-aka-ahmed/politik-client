import React, { Component } from 'react';
import { Container, Text, Button, Form, Item, Input, Label, Header, Content, Icon } from 'native-base';
import { View, Alert } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

@inject("appState") @observer
export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { firstName: '', lastName: '', address: '', email: '', password: '' }
    }

    handleFirstNameChange = (text) => {
        this.setState({firstName: text})
    };

    handleLastNameChange = (text) => {
        this.setState({lastName: text})
    };

    handleAddressChange = (text) => {
        this.setState({address: text})
    };

    handleEmailChange = (text) => {
        this.setState({email: text})
    };

    handlePasswordChange = (text) => {
        this.setState({password: text})
    };

    handleSubmit = async () => {
        let res = await this.props.appState.createUser(this.state.firstName, this.state.lastName, this.state.address, this.state.email, this.state.password);
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
            <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <View style={{width: 375, height: 75, marginLeft: 15, flexDirection: 'column', justifyContent: 'center'}}>
                    <Button transparent
                            title="backLaunch"
                            onPress={() => { Actions.pop() }}>
                        <Icon ios="md-close" android="md-close" style={{fontSize: 35}}/>
                    </Button>
                </View>
                <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1}}>
                    <Item style={{width: 300}}>
                        <Input placeholder="First Name" style={{textAlign: 'center'}} onChangeText={(e) => {this.handleFirstNameChange(e)}}/>
                    </Item>
                    <Item style={{width: 300}}>
                        <Input placeholder="Last Name" style={{textAlign: 'center'}} onChangeText={(e) => {this.handleLastNameChange(e)}}/>
                    </Item>

                    <Item style={{width: 300}}>
                        <Input placeholder="Address" style={{textAlign: 'center'}} onChangeText={(e) => {this.handleAddressChange(e)}}/>
                    </Item>

                    <Item style={{width: 300}}>
                        <Input placeholder="Email" style={{textAlign: 'center'}} onChangeText={(e) => {this.handleEmailChange(e)}} autoCapitalize = 'none'/>
                    </Item>
                    <Item style={{width: 300}}>
                        <Input placeholder="Password" secureTextEntry={true} style={{textAlign: 'center'}} onChangeText={(e) => {this.handlePasswordChange(e)}} autoCapitalize = 'none'/>
                    </Item>
                    <Button style={styles.button}
                            onPress={() => { this.handleSubmit()}}
                            transparent
                            dark>
                        <Text>Sign Up</Text>
                    </Button>
                </View>
            </View>
        )
    }
};