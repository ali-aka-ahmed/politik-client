import React from 'react';
import {Footer, FooterTab, Button, Badge, Icon, Text} from 'native-base';
import {inject, observer} from 'mobx-react/native';
import {Actions} from 'react-native-router-flux';

const FooterTabs = (props) => {
    return (
        <Footer>
            <FooterTab>
                <Button
                        vertical
                        onPress={() => { Actions.billList() }}
                >
                    <Icon name="ios-document" />
                    <Text>Bills</Text>
                </Button>
                <Button vertical
                        onPress={() => { Actions.representativeList() }}
                >
                    <Icon name="ios-people" />
                    <Text>Reps</Text>
                </Button>
                <Button vertical
                        onPress={() => { Actions.donationsList() }}
                >
                    <Icon active name="ios-cash" />
                    <Text>Donations</Text>
                </Button>
            </FooterTab>
        </Footer>
    )
};

export default inject("appState")(observer(FooterTabs));