import React, { Component } from 'react'
import { inject, observer } from 'mobx-react/native';
import {Image} from 'react-native';
import {Container, Content, ListItem, Body, Text, Header, Left, Right, Button, Icon} from 'native-base';
import DonationListItem from '../donationListItem';
import FooterTabs from '../footerTabs';
import styles from './styles'

class DonationsList extends Component {

    componentDidMount = async () => {
        await this.props.donationStore.getDonations()
    };

    render() {
        return (
            <Container style={styles.container}>
                <Header hasTabs style={styles.header} backgroundColor={styles.header.backgroundColor}>
                    <Left>
                        {/*<Button transparent*/}
                                {/*onPress={() => {*/}
                                    {/*console.log("menu")*/}
                                {/*}}>*/}
                            {/*<Image source={require('../../images/Menu.png')} style={styles.menuButton}/>*/}
                        {/*</Button>*/}
                    </Left>
                    <Body>
                    <Text style={styles.title}>Donations</Text>
                    </Body>
                    <Right>
                        <Button transparent
                                onPress={() => {
                                    console.log("open drawer")
                                }}>
                            <Icon name='md-search' style={{fontSize: 24, color: "white"}}/>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    {
                        this.props.donationStore.donations.reverse().map((donation) => {
                            return (
                                <DonationListItem donation={donation} key={donation._id}/>
                            )
                        })
                    }
                </Content>
                <FooterTabs/>
            </Container>
        )
    }
};

export default inject("appState", "donationStore")(observer(DonationsList));