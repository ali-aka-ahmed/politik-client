import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import { action } from 'mobx';
import { Actions } from 'react-native-router-flux';
import { ScrollView, View, Image, Alert } from 'react-native';
import ActionGraphic from '../actionGraphic'
import { sendFax, createLetter } from '../../services/transport-layer';
import { Container, Title, Subtitle, Input, Icon, Item, Right, Text, Segment, ScrollableTab, Header, Tabs, Tab, Button, Left } from 'native-base';
import styles from './styles';

@inject("appState") @observer
export default class BillPage extends Component {
    constructor(props) {
        super(props);
        let voted = false;
        let vote = null;
        for (let i = 0; i < this.props.bill.usersVoted.length; i++) {
            if (this.props.appState.user.email == this.props.bill.usersVoted[i].email) {
                voted = true;
                vote = this.props.bill.usersVoted[i].choice;
            }
        }
        this.state = {bills: true, voted: voted, vote: vote, showMessageBox: false, text: ""};
    }

    @action
    voteOnBill = async (num) => {
        let res = await this.props.appState.voteOnBill(this.props.bill._id, num);
        if (res.success) {
            let voted = false;
            let vote = null;
            for (let i = 0; i < this.props.bill.usersVoted.length; i++) {
                if (this.props.appState.user.email == this.props.bill.usersVoted[i].email) {
                    voted = true;
                    vote = this.props.bill.usersVoted[i].choice;
                }
            }
            this.setState({voted: true, voted: voted, vote: vote})
        } else {
            Alert.alert(
                'Error',
                res.message,
                [
                    {text: 'Dismiss', onPress: () => console.log('Dismiss Pressed')},
                ],
                { cancelable: false }
            )
        }
    };s

    initiateFaxRoute = async () => {
        let sender_name = this.props.appState.user.firstName + " " + this.props.appState.user.lastName;
        let rep_name = this.props.appState.rep.firstName + " " + this.props.appState.rep.lastName;
        let street_address = "2310 Piedmont Ave";
        let city_state_zip = "Berkeley, CA 94720";
        let res = await createLetter(sender_name, rep_name, this.state.text, street_address, city_state_zip);
        console.log("FAX CREATED")
        let res2 = sendFax("/letters/demo.pdf", this.props.appState.rep.fax)
        this.setState({showMessageBox: false, text: ""})
    };

    @action
    handleMessageChange = (text) => {
        this.setState({text: text})
    };

    render() {
        return (
            <Container style={styles.container}>
                <View hasTabs style={styles.header}>
                    <Image
                        source={require("../../images/american-wallpaper.png")}
                        style={{ flex: 1, height: 150, width: null, resizeMode: 'cover'}}
                    >
                        <Button transparent style={{left: 0, position: "absolute", paddingTop: 70}}
                                onPress={() => {Actions.pop()}}>
                            <Image source={require('../../images/left-arrow.png')} style={styles.backArrow}/>
                        </Button>
                        <Button transparent style={{right: 0, position: "absolute", paddingTop: 70}}
                                onPress={() => {console.log("open drawer")}}>
                            <Icon name='md-search' style={{fontSize: 30, color: "white"}}/>
                        </Button>
                        <Segment style={{backgroundColor: "transparent", position: "absolute", marginTop: 70, marginLeft: 80}}>
                            <Button first bordered light style={this.state.bills ? {backgroundColor: "rgba(18, 62, 100, 100)"} : {}} onPress={() => {Actions.billList()}}>
                                <Text>Bills</Text>
                            </Button>
                            <Button last bordered light style={!this.state.bills ? {backgroundColor: "rgba(18, 62, 100, 100)"} : {}} onPress={() => {Actions.pressList()}}>
                                <Text>Press</Text>
                            </Button>
                        </Segment>
                        <Image
                            source={require("../../images/lee.png")}
                            style={{height: 45, width: 45, marginLeft: 30, marginTop: 120}}
                        />
                        <Text style={{position: "absolute", backgroundColor: "transparent", color: "white", marginTop: 127, marginLeft: 80, fontSize: 12}}>{this.props.appState.rep.firstName + " " + this.props.appState.rep.lastName}</Text>
                        <Text style={{position: "absolute", backgroundColor: "transparent", color: "white", marginTop: 145, marginLeft: 80, fontSize: 12}}>{this.props.appState.rep.state + "-" + this.props.appState.rep.party}</Text>
                        <Text style={{position: "absolute", backgroundColor: "transparent", color: "white", marginTop: 127, right: 55, fontSize: 12}}>{"District " + this.props.appState.rep.district}</Text>
                        <Text style={{position: "absolute", backgroundColor: "transparent", color: "white", marginTop: 145, right: 55, fontSize: 12}}>{"+1 " + this.props.appState.rep.phone}</Text>
                    </Image>
                </View>
                <Container style={{paddingLeft: 20, paddingRight: 20, paddingTop: 20}}>
                    <ScrollView>

                        <View style={{paddingBottom: 4}}>
                            <Text style={{fontWeight: 0.62, fontSize: 20}}>{this.props.bill.number}</Text>
                        </View>
                        {/*<ActionGraphic actions={bill.actions}/>*/}

                        <View style={{paddingBottom: 4}}>
                            {this.props.bill.introducedDate ? <Text style={{color: "rgba(125, 125, 125, 100)", fontSize: 13}}>{"Introduced on " + this.props.bill.introducedDate}</Text> : <Text></Text>}
                        </View>


                        <View style={{paddingBottom: 4}}>
                            {this.props.bill.summary ? <Text style={{fontWeight: 0}}>{this.props.bill.summary}</Text> : <Text>{this.props.bill.title}</Text>}
                        </View>

                        <View style={{paddingBottom: 4}}>
                            <Text style={{color: "rgba(125, 125, 125, 100)", fontSize: 13}}>Subject: Congress</Text>
                        </View>

                        <View style={{paddingBottom: 4}}>
                            <Text style={{color: "rgba(125, 125, 125, 100)", fontSize: 13}}>{"Committee: " + this.props.bill.committees}</Text>
                        </View>



                        {   this.state.voted ?
                            <View style={{flexDirection: 'row', justifyContent: 'center', flex: 1, marginTop: 15, marginBottom: 25}}>
                                {
                                    this.state.vote ?
                                    <Button rounded success x-large
                                            style={{height: 40, width: 110, flexDirection: 'row', justifyContent: 'center'}}
                                            onPress={() => {
                                                Alert.alert(
                                                    "You have already voted!",
                                                    "",
                                                    [
                                                        {text: 'Dismiss', onPress: () => console.log('Dismiss Pressed')},
                                                    ],
                                                    { cancelable: false }
                                                )
                                            }}>
                                        <Text>Yay</Text>
                                    </Button> :
                                    <Button rounded danger x-large
                                            style={{height: 40, width: 110, flexDirection: 'row', justifyContent: 'center'}}
                                            onPress={() => {
                                                Alert.alert(
                                                    "You have already voted!",
                                                    [
                                                        {text: 'Dismiss', onPress: () => console.log('Dismiss Pressed')},
                                                    ],
                                                    { cancelable: false }
                                                )
                                            }}>
                                        <Text>Nay</Text>
                                    </Button>
                                }
                            </View> :
                            <View>
                            <View
                                style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 15, marginBottom: 15}}>
                                <View style={{marginRight: 15}}>
                                    <Button bordered rounded success x-large
                                            style={{height: 40, width: 110, flexDirection: 'row', justifyContent: 'center'}}
                                            onPress={() => {
                                                this.voteOnBill(1)
                                            }}>
                                        <Text>Yay</Text>
                                    </Button>
                                    {/*<PopupDialog*/}
                                        {/*ref={(popupDialog) => { this.popupDialog = popupDialog; }}*/}
                                    {/*>*/}
                                        {/*<View>*/}
                                            {/*<Text>Hello</Text>*/}
                                        {/*</View>*/}
                                    {/*</PopupDialog>*/}
                                </View>
                                <View style={{marginLeft: 15}}>
                                    <Button bordered rounded danger x-large
                                            style={{height: 40, width: 110, flexDirection: 'row', justifyContent: 'center'}}
                                            onPress={() => {
                                                this.voteOnBill(0)
                                            }}>
                                        <Text>Nay</Text>
                                    </Button>
                                </View>
                            </View>
                                {
                                    this.state.showMessageBox ?
                                        <View style={{width: 310, height: 400, marginLeft: 10, marginRight: 10}}>
                                            <Item regular style={{marginTop: 10}}>
                                                <Input
                                                    placeholder='Write a message to your representative!'
                                                    onChangeText={(val) => {this.handleMessageChange(val)}}
                                                    style={{flex: 1,
                                                        height: 150,
                                                        justifyContent: 'flex-start'}}
                                                    multiline={true}
                                                />
                                            </Item>
                                            <View style={{marginLeft: 110, marginBottom: 25, marginTop: 10}}>
                                                <Button bordered rounded info x-large
                                                        style={{height: 40, width: 110, flexDirection: 'row', justifyContent: 'center'}}
                                                        onPress={() => { // popup that takes letter body
                                                            this.initiateFaxRoute()
                                                        }}>
                                                    <Text>Send</Text>
                                                </Button>
                                            </View>
                                        </View>

                                        :
                                        <View style={{marginLeft: 110, marginBottom: 25}}>
                                            <Button bordered rounded info x-large
                                                    style={{height: 40, width: 110, flexDirection: 'row', justifyContent: 'center'}}
                                                    onPress={() => { // popup that takes letter body
                                                        this.setState({showMessageBox: true});
                                                        // this.initiateFaxRoute()
                                                    }}>
                                                <Text>Message</Text>
                                            </Button>
                                        </View>
                                }
                            </View>
                        }
                    </ScrollView>
                </Container>
            </Container>
        )
    }
};