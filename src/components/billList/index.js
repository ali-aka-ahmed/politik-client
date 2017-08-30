import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import BillListItem from '../billListItem';
import { Container, Text, ScrollableTab, Header, Body, Left, Button, Icon, Right } from 'native-base';
import { Image, ScrollView } from 'react-native';
import styles from './styles';

@inject("appState") @observer
export default class BillList extends Component {

    render () {
        return (
            <Container style={styles.container}>
                <Header hasTabs style={styles.header} backgroundColor={styles.header.backgroundColor}>
                    <Left>
                        <Button transparent
                                onPress={() => {console.log("menu")}}>
                            <Image source={require('../../../assets/images/Menu.png')} style={styles.menuButton}/>
                        </Button>
                    </Left>
                    <Body>
                    <Text style={styles.title}>Bills</Text>
                    </Body>
                    <Right>
                        <Button transparent
                                onPress={() => {console.log("open drawer")}}>
                            <Icon name='md-search' style={{fontSize: 24, color: "white"}}/>
                        </Button>
                    </Right>
                </Header>
                <Container>
                    <ScrollView style={styles.tabBackground}>
                        {this.props.appState.bills.filter((bill) => {return true}).map((bill) => {
                            return (
                                <BillListItem bill={bill} />
                            )
                        })}
                    </ScrollView>
                </Container>
            </Container>
        )
    }
};