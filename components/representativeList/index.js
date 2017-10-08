import React from 'react'
import { inject, observer } from 'mobx-react/native';
import {Image} from 'react-native';
import {Container, Content, ListItem, Body, Text, Header, Left, Right, Button, Icon} from 'native-base';
import RepresentativeListItem from '../representativeListItem';
import FooterTabs from '../footerTabs';
import styles from './styles'

const RepresentativeList = (props) => {

    return (
        <Container style={styles.container}>
            <Header hasTabs style={styles.header} backgroundColor={styles.header.backgroundColor}>
                <Left>
                    {/*<Button transparent*/}
                            {/*onPress={() => {console.log("menu")}}>*/}
                        {/*<Image source={require('../../images/Menu.png')} style={styles.menuButton}/>*/}
                    {/*</Button>*/}
                </Left>
                <Body>
                    <Text style={styles.title}>Representatives</Text>
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
                    props.appState.representatives.map((rep) => {
                        return (
                            <RepresentativeListItem rep={rep} key={rep.id}/>
                        )
                    })
                }
            </Content>
            <FooterTabs/>
        </Container>
    )
};

export default inject("appState")(observer(RepresentativeList));