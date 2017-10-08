import React, { Component } from 'react';
import { Container, Text, Button, Picker, Item } from 'native-base';
import { inject, observer } from 'mobx-react/native'
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

@inject("appState") @observer
export default class EnterState extends Component {

    getRepresentatives = async (state) => {
        await this.props.appState.getSenators(state);
        console.log("tf")
        Actions.confirmation();
    };

    render() {
        return (
            <Container style={styles.container}>
                {/*<View>*/}
                    {/*<Text style={styles.title}>Enter State</Text>*/}
                {/*</View>*/}
                <View>
                    <Picker
                        mode="dropdown"
                        placeholder={<Container style={{height: 40, width: 263.5, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', paddingTop: 5}}><Text style={styles.title}>Enter State</Text></Container>}
                        note={true}
                        onValueChange={this.getRepresentatives}
                    >
                        <Item label="Alabama" value="AL" />
                        <Item label="Maryland" value="MD" />
                        <Item label="Maryland" value="MD" />
                        <Item label="Maryland" value="MD" />
                        <Item label="Maryland" value="MD" />
                        <Item label="Maryland" value="MD" />
                        <Item label="Maryland" value="MD" />
                        <Item label="Maryland" value="MD" />
                    </Picker>
                    {/*<Button style={styles.button}*/}
                            {/*onPress={() => {console.log("Yolo")}}*/}
                            {/*bordered*/}
                            {/*dark>*/}
                        {/*<Text>Pick State</Text>*/}
                    {/*</Button>*/}
                </View>
            </Container>
        )
    }
};