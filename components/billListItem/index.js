import React from 'react';
import { inject, observer } from 'mobx-react/native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, List, ListItem, Icon, Right, Text, Body, Left } from 'native-base';
import styles from './styles';

const BillListItem = ({bill}) => {
    return (
        <ListItem onPress={() => {Actions.billPage({bill})}} style={styles.container}>
            <Body style={styles.listItemBody}>
                <Text style={styles.listItemTitle}>{bill.title}</Text>
                <Text style={styles.subheading}>{bill.number}</Text>
            </Body>
            <Right style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                <Text style={styles.amount}>{bill.votesFor}</Text>
                <Text style={styles.subheading}>Votes For</Text>
            </Right>
            <Right style={{marginLeft: -25}}>

            </Right>
        </ListItem>
    )
};

export default inject("appState")(observer(BillListItem));