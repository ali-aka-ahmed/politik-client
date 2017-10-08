import React, { Component } from 'react';
import { Container, Text, Button, Picker, Item } from 'native-base';
import { inject, observer } from 'mobx-react/native'
import { View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

@inject("appState") @observer
export default class Confirmation extends Component {

    getBills = async () => {
        console.log("initiate process to get bills")
        await this.props.appState.getBills();
        Actions.billList()
    };

     render() {
         return (
             <Container style={styles.container}>
                 <View>
                     <Text style={styles.title}>Your Senators</Text>
                 </View>
                 <View>
                     {
                         this.props.appState.representatives.map((rep) => {
                             return (
                                 <View key={rep.id}>
                                     <Text>{rep.name}</Text>
                                 </View>
                             )
                         })
                     }
                 </View>
                 <View>
                     <Text>Now you can see all the bills they are going to vote on, and vote on them yourself!</Text>
                 </View>
                 <View>
                     <Button style={styles.button}
                             onPress={this.getBills}
                             bordered
                             dark>
                         <Text>Continue</Text>
                     </Button>
                 </View>
             </Container>
         )
     }
};