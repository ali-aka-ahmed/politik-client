import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import { action } from 'mobx';
import { View } from 'react-native'
import { Actions } from 'react-native-router-flux';
import { getSpecificBill } from '../../services/transport-layer';
import { Container, Content, List, ListItem, Icon, Right, Text, Body, Left, Button } from 'native-base';
import { sendFax } from '../../services/transport-layer';
import styles from './styles';

@inject("appState") @observer
export default class BillListItem extends Component {

    @action
    adjustVote = async (num) => {
        if (num === 1) {
            console.log(this.props.bill.votesFor);
            this.props.bill.votesFor += 1
            console.log(this.props.bill.votesFor)
        } else if (num === -1) {
            this.props.bill.votesAgainst += 1
        }
        this.props.bill.voted = true
        await sendFax()
    };

    render() {
        return (
            <ListItem onPress={() => {Actions.billPage({bill: this.props.bill})}} style={styles.container}>
                <Body style={styles.listItemBody}>
                    <Text style={styles.listItemTitle}>{this.props.bill.short_title ? this.props.bill.short_title : this.props.bill.title}</Text>
                    <Text style={styles.subheading}>{this.props.bill.number}</Text>
                </Body>
                <Right style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                    {   this.props.bill.voted ?
                        <View>
                            <Text style={styles.amount}>{this.props.bill.votesFor}</Text>
                            <Text style={styles.subheading}>Votes For</Text>
                        </View>
                        :
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                            <Button rounded success small style={{marginRight: 10}}
                                    onPress={() => {
                                        this.adjustVote(1)
                                    }}>
                                <Icon name='checkmark'/>
                            </Button>
                            <Button rounded danger small
                                    onPress={() => {
                                        this.adjustVote(-1)
                                    }}>
                                <Icon name='close'/>
                            </Button>
                        </View>
                    }


                </Right>
                <Right style={{marginLeft: -25}}>

                </Right>
            </ListItem>
        )
    }
};