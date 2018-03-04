import React from 'react'
import { inject, observer } from 'mobx-react/native';
import {Image, View} from 'react-native';
import PressListItem from '../pressListItem';
import {Container, Content, ListItem, Text, Header, Left, Right, Button, Icon, Segment} from 'native-base';
import styles from './styles'
import { Actions } from 'react-native-router-flux';

class PressList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {bills: false};
    }

    render() {
        return (
            <Container style={styles.container}>
                <View hasTabs style={styles.header}>
                    <Image
                        source={require("../../images/american-wallpaper.png")}
                        style={{ flex: 1, height: 150, width: null, resizeMode: 'cover'}}
                    >
                        <Button transparent style={{left: 0, position: "absolute", paddingTop: 70}}
                                onPress={() => {console.log("Ayyy we here")}}>
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
                            <Button last bordered light style={!this.state.bills ? {backgroundColor: "rgba(18, 62, 100, 100)"} : {}} onPress={() => {this.setState({bills: false})}}>
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
                <Content>
                    {
                        this.props.appState.press.map((press) => {
                            return (
                                <PressListItem press={press} key={press._id}/>
                            )
                        })
                    }
                </Content>
                {/*<FooterTabs/>*/}
            </Container>
        )
    }
};

export default inject("appState")(observer(PressList));