import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import { Actions } from 'react-native-router-flux';
import { ScrollView, View } from 'react-native';
import ActionGraphic from '../actionGraphic'
import { getSpecificBill } from '../../services/transport-layer';
import { Container, Icon, Right, Text, Body, ScrollableTab, Header, Tabs, Tab, Button, Left } from 'native-base';
import styles from './styles';

@inject("appState") @observer
export default class BillPage extends Component {

    render() {
        console.log(this.props.bill);
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
                        <Text style={styles.title}>{this.props.bill.short_title}</Text>
                        <Text style={styles.subheading}>{this.props.bill.bill}</Text>
                    </Body>
                    <Right/>
                </Header>
                <Container>
                    <ScrollView>
                        <View>
                            <Text>Sponsor: {this.props.bill.sponsor_title + " " + this.props.bill.sponsor + "  " + this.props.bill.sponsor_party + "-" + this.props.bill.sponsor_state}</Text>
                        </View>
                        <ActionGraphic actions={bill.actions}/>
                        <View>
                            {this.props.bill.summary_short ? <Text>{this.props.bill.summary_short}</Text> : <Text>No Summary</Text>}
                        </View>
                    </ScrollView>
                    {/*<Tabs renderTabBar={() =>*/}
                        {/*<ScrollableTab style={styles.tabBackground}/>*/}
                    {/*} tabBarUnderlineStyle={styles.tabUnderline}>*/}
                        {/*<Tab heading="TEXT"*/}
                             {/*tabStyle={styles.tabBackground}*/}
                             {/*activeTabStyle={styles.tabBackground}*/}
                             {/*textStyle={styles.tabText}*/}
                             {/*activeTextStyle={styles.tabText}*/}
                             {/*scrollEnabled={false}*/}
                        {/*>*/}
                            {/*<ScrollView>*/}
                                {/*/!*<TransactionReceiptSection item={props.item}/>*!/*/}
                                {/*/!*<TransactionMemoSection item={props.item}/>*!/*/}
                            {/*</ScrollView>*/}
                        {/*</Tab>*/}
                        {/*<Tab heading="MESSAGE"*/}
                             {/*tabStyle={styles.tabBackground}*/}
                             {/*activeTabStyle={styles.tabBackground}*/}
                             {/*textStyle={styles.tabText}*/}
                             {/*activeTextStyle={styles.tabText}*/}
                        {/*>*/}
                            {/*<ScrollView>*/}
                                {/*/!*<TransactionBudgetSection item={props.item}/>*!/*/}
                            {/*</ScrollView>*/}
                        {/*</Tab>*/}
                    {/*</Tabs>*/}
                </Container>
            </Container>
        )
    }
};