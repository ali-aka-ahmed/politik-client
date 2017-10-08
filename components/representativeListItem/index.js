import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import { action } from 'mobx';
import { View } from 'react-native'
import { Actions } from 'react-native-router-flux';
import { Container, Content, List, ListItem, Icon, Right, Text, Body, Left, Button } from 'native-base';
import styles from './styles';

@inject("appState", "donationStore") @observer
export default class RepresentativeListItem extends Component {

    createDonation = async () => {
        await this.props.donationStore.createDonation(this.props.rep.name);
    };

    render() {
        return (
            <ListItem onPress={() => {console.log("yolo")}} style={styles.container}>
                <Body style={styles.listItemBody}>
                    <Text style={styles.listItemTitle}>{this.props.rep.name}</Text>
                </Body>
                <Right style={{marginLeft: -25}}>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                        <Button success x-large style={{width: 130}}
                                onPress={() => {this.createDonation()}}>
                            <Text> Donate $10 </Text>
                        </Button>
                    </View>
                </Right>
            </ListItem>
        )
    }
};