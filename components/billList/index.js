import React from 'react'
import { inject, observer } from 'mobx-react/native';
import {Image} from 'react-native';
import BillListItem from '../billListItem';
import {Container, Content, ListItem, Body, Text, Header, Left, Right, Button, Icon} from 'native-base';
import styles from './styles'

const BillList = (props) => {

    return (
        <Container style={styles.container}>
            <Header hasTabs style={styles.header} backgroundColor={styles.header.backgroundColor}>
                <Left>
                    <Button transparent
                            onPress={() => {console.log("menu")}}>
                        <Image source={require('../../images/Menu.png')} style={styles.menuButton}/>
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
            <Content>
                {
                    props.appState.bills.map((bill) => {
                        return (
                            <BillListItem bill={bill} key={bill.bill_id}/>
                        )
                    })
                }
            </Content>
        </Container>
    )
};

export default inject("appState")(observer(BillList));