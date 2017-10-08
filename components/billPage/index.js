import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import { Actions } from 'react-native-router-flux';
import { ScrollView } from 'react-native';
import { getSpecificBill } from '../../services/transport-layer';
import { View } from 'react-native';
import { Container, Icon, Right, Text, Body, ScrollableTab, Header, Tabs, Tab, Button, Left } from 'native-base';
import styles from './styles';

@inject("appState") @observer
export default class BillPage extends Component {

    bill = {};

    componentDidMount = async (props) => {
        this.bill = await getSpecificBill(this.props.bill.bill_uri);
        console.log(this.bill);
    };

    render() {
        return (
            <Container style={styles.container}>
                <Header hasTabs style={styles.header} backgroundColor={styles.header.backgroundColor}>
                    <Left>
                        <Button transparent
                                title="back-transactions"
                                onPress={() => {
                                    Actions.pop()
                                }}>
                            <Icon ios="md-arrow-back" android="md-arrow-back" style={styles.backArrow}/>
                        </Button>
                    </Left>
                    <Body>
                    <Text style={styles.title}>{this.bill.title}</Text>
                    <Text style={styles.subheading}>{this.bill.number}</Text>
                    </Body>
                    <Right/>
                </Header>
                <View style={styles.buttonStyle}>
                    <Button success onPress={}>
                        <Text>Donate Now!</Text>
                    </Button>
                </View>
            </Container>
        )
    }
};