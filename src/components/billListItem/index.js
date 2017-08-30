import React from 'react';
import { ListItem, Body, Text, Right } from 'native-base';
import { Actions } from 'react-native-router-flux';
import VoteCountGraphic from '../voteCountGraphic';
import styles from './styles';

const BillListItem = ({bill}) => {
    return (
        <ListItem onPress={() => { Actions.transaction({item}) }} style={styles.container}>
            <Body style={styles.listItemBody}>
                <Text style={styles.listItemTitle}>{bill.name}</Text>
                <Text note>{bill.number}</Text>
            </Body>
            <Right style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                <VoteCountGraphic votesFor={bill.votesFor} votesAgainst={bill.votesAgainst} clicked={bill.voted} callback={bill.recordVote}/>
            </Right>
        </ListItem>
    )
};

export default BillListItem;