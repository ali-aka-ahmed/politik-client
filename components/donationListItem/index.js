import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import { action } from 'mobx';
import { View } from 'react-native'
import { Actions } from 'react-native-router-flux';
import { Container, Content, List, ListItem, Icon, Right, Text, Body, Left, Button } from 'native-base';
import styles from './styles';

@inject("appState", "donationStore") @observer
export default class DonationListItem extends Component {

    render() {
        return (
            <ListItem onPress={() => {console.log("yolo")}} style={styles.container}>
                <Body style={styles.listItemBody}>
                    <Text style={styles.listItemTitle}>{this.props.donation.description}</Text>
                    <Text style={styles.subheading}>{this.props.donation.purchase_date}</Text>
                </Body>
                <Right style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                    <Text style={styles.amount}>{this.props.donation.amount}</Text>
                    <Text style={styles.subheading}>USD</Text>
                </Right>
                <Right style={{marginLeft: -25}}>

                </Right>
            </ListItem>
        )
    }
};