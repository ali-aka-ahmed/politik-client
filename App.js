import React from 'react';
import BillList from './components/billList';
import BillPage from './components/billPage';
import Launch from './components/launch'
import EnterState from './components/enterState';
import Confirmation from './components/confirmation';
import RepresentativeList from './components/representativeList';
import DonationsList from './components/donationsList';
import appState from './stores/appState';
import donationStore from './stores/donationsStore';
import userStore from './stores/userStore';
import Login from './components/login';
import SignUp from './components/signUp';
import PressList from './components/pressList';
import { Provider } from 'mobx-react/native';
import { Router, Scene } from 'react-native-router-flux';
import { Permissions, Notifications } from 'expo';

// const PUSH_ENDPOINT = 'http://6412dc37.ngrok.io/api/notif-token';

export default class App extends React.Component {

    // state = {
    //     receivedNotification: null,
    //     lastNotificationId: null,
    // }
    //
    // componentWillMount() {
    //     this.registerForPushNotificationsAsync();
    //
    //     Notifications.addListener((receivedNotification) => {
    //         this.setState({
    //             receivedNotification,
    //             lastNotificationId: receivedNotification.notificationId,
    //         });
    //     });
    // }
    //
    // registerForPushNotificationsAsync = async () => {
    //     // Android remote notification permissions are granted during the app
    //     // install, so this will only ask on iOS
    //     let { status } = await Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS);
    //
    //     // Stop here if the user did not grant permissions
    //     if (status !== 'granted') {
    //         return;
    //     }
    //
    //     // Get the token that uniquely identifies this device
    //     let token = await Notifications.getExponentPushTokenAsync();
    //
    //     // POST the token to our backend so we can use it to send pushes from there
    //     return fetch(PUSH_ENDPOINT, {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             token: {
    //                 value: token,
    //             },
    //         }),
    //     });
    // };
    //
    // onPressDismissAllNotifications = () => {
    //     Notifications.dismissAllNotificationsAsync();
    //     this.setState({
    //         lastNotificationId: null,
    //     });
    // };
    //
    // onPressDismissOneNotification = () => {
    //     Notifications.dismissNotificationAsync(this.state.lastNotificationId);
    //     this.setState({
    //         lastNotificationId: null,
    //     });
    // };



    // componentWillMount = () => {
    //     appState.authenticateUser("yolo", "lol");
    // }

    render() {
        return (
            <Provider appState={appState} donationStore={donationStore} userStore={userStore}>
                <Router>
                    <Scene key="root" hideNavBar hideTabBar>
                        <Scene navigationBarStyle={{statusBarTextColorScheme: 'light'}} key="launch" component={Launch}/>
                        <Scene key="login" direction="vertical" hideNavBar hideTabBar>
                            <Scene navigationBarStyle={{statusBarTextColorScheme: 'light'}} key="loginScreen" component={Login}/>
                        </Scene>
                        <Scene key="signUp" direction="vertical" hideNavBar hideTabBar>
                            <Scene navigationBarStyle={{statusBarTextColorScheme: 'light'}} key="signUpScreen" component={SignUp}/>
                        </Scene>
                        <Scene navigationBarStyle={{statusBarTextColorScheme: 'light'}} key="enterState" component={EnterState}/>
                        <Scene navigationBarStyle={{statusBarTextColorScheme: 'light'}} key="confirmation" component={Confirmation}/>
                        <Scene navigationBarStyle={{statusBarTextColorScheme: 'light'}} key="billList" component={BillList}/>
                        <Scene navigationBarStyle={{statusBarTextColorScheme: 'light'}} key="pressList" component={PressList}/>
                        <Scene navigationBarStyle={{statusBarTextColorScheme: 'light'}} key="billPage" component={BillPage}/>
                        <Scene navigationBarStyle={{statusBarTextColorScheme: 'light'}} key="representativeList" component={RepresentativeList}/>
                        <Scene navigationBarStyle={{statusBarTextColorScheme: 'light'}} key="donationsList" component={DonationsList}/>
                    </Scene>
                </Router>
            </Provider>
        );
      }
}

