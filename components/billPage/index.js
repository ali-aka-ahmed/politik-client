import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import { action } from 'mobx';
import { Actions } from 'react-native-router-flux';
import { ScrollView, View } from 'react-native';
import ActionGraphic from '../actionGraphic'
import { sendFax } from '../../services/transport-layer';
import { Container, Title, Subtitle, Icon, Right, Text, Body, ScrollableTab, Header, Tabs, Tab, Button, Left } from 'native-base';
import PopupDialog from 'react-native-popup-dialog';
import styles from './styles';

@inject("appState") @observer
export default class BillPage extends Component {

    @action
    adjustVote = async (num) => {
        await sendFax()
        // if (num === 1) {
        //     console.log(this.props.bill.votesFor);
        //     this.props.bill.votesFor += 1
        //     console.log(this.props.bill.votesFor)
        // } else if (num === -1) {
        //     this.props.bill.votesAgainst += 1
        // }
        // this.props.bill.voted = true
    };

    render() {
        console.log(this.props.bill)
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
                        <Title style={styles.title}>{this.props.bill.short_title ? this.props.bill.short_title : this.props.bill.title}</Title>
                        <Subtitle style={styles.subheading}>{this.props.bill.bill}</Subtitle>
                    </Body>
                    <Right/>
                </Header>
                <Container>
                    <ScrollView>

                        <View>
                            <Text>Sponsor: {this.props.bill.sponsor_title + " " + this.props.bill.sponsor + "  " + this.props.bill.sponsor_party + "-" + this.props.bill.sponsor_state}</Text>
                        </View>
                        {/*<ActionGraphic actions={bill.actions}/>*/}


                        <View>
                            {this.props.bill.summary ? <Text>{this.props.bill.summary}</Text> : <Text>No Summary! Check back in a few days while we write it</Text>}
                        </View>


                        {   this.props.bill.voted ?
                            <View></View> :
                            <View
                                style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                <View>
                                    <Button rounded success x-large
                                            style={{height: 70, width: 70, flexDirection: 'row', justifyContent: 'center'}}
                                            onPress={() => {
                                                // this.adjustVote(1)
                                                this.popupDialog.show()
                                            }}>
                                        <Icon name='checkmark' style={{fontSize: 50}}/>
                                    </Button>
                                    <PopupDialog
                                        ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                                    >
                                        <View>
                                            <Text>Hello</Text>
                                        </View>
                                    </PopupDialog>
                                </View>
                                <View>
                                    <Button rounded danger x-large
                                            style={{height: 70, width: 70, flexDirection: 'row', justifyContent: 'center'}}
                                            onPress={() => {
                                                this.adjustVote(-1)
                                            }}>
                                        <Icon name='close' style={{fontSize: 50}}/>
                                    </Button>
                                </View>
                            </View>
                        }
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