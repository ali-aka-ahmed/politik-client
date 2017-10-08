import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import { Actions } from 'react-native-router-flux';
import { getSpecificBill } from '../../services/transport-layer';
import { Container, Content, List, ListItem, Icon, Right, Text, Body, Left } from 'native-base';
import styles from './styles';

@inject("appState") @observer
export default class BillListItem extends Component {

    loadBillData = async () => {
        let bill = await getSpecificBill(this.props.bill.bill_uri);
        let introduced_status = [];
        let house_committee_status =[];
        let house_floor_status = [];
        let senate_committee_status =[];
        let senate_floor_status = [];
        for (let i = 0; i < bill.actions.length; i++) {
            if (bill.actions[i].action_type === "IntroReferral") {
                introduced_status = introduced_status.concat(bill.actions[i].description)
            } else if (bill.actions[i].action_type === "Committee") {
                if (bill.actions[i].chamber === "House") {
                    house_committee_status = house_committee_status.concat(bill.actions[i].description)
                } else {
                    senate_committee_status = senate_committee_status.concat(bill.actions[i].description)
                }
            } else if (bill.actions[i].action_type === "Floor") {
                if (bill.actions[i].chamber === "House") {
                    house_floor_status = house_floor_status.concat(bill.actions[i].description)
                } else {
                    senate_floor_status = senate_floor_status.concat(bill.actions[i].description)
                }
            }
        }
        bill.introduced_status = introduced_status;
        bill.house_committee_status = house_committee_status;
        bill.house_floor_status = house_floor_status;
        bill.senate_committee_status = senate_committee_status;
        bill.senate_floor_status = senate_floor_status;
        Actions.billPage({bill})
    };

    render() {
        return (
            <ListItem onPress={this.loadBillData} style={styles.container}>
                <Body style={styles.listItemBody}>
                <Text style={styles.listItemTitle}>{this.props.bill.title}</Text>
                <Text style={styles.subheading}>{this.props.bill.number}</Text>
                </Body>
                <Right style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                    <Text style={styles.amount}>{this.props.bill.votesFor}</Text>
                    <Text style={styles.subheading}>Votes For</Text>
                </Right>
                <Right style={{marginLeft: -25}}>

                </Right>
            </ListItem>
        )
    }
};