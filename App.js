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
import { Provider } from 'mobx-react/native';
import { Router, Scene } from 'react-native-router-flux';

export default class App extends React.Component {

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
                        <Scene navigationBarStyle={{statusBarTextColorScheme: 'light'}} key="billPage" component={BillPage}/>
                        <Scene navigationBarStyle={{statusBarTextColorScheme: 'light'}} key="representativeList" component={RepresentativeList}/>
                        <Scene navigationBarStyle={{statusBarTextColorScheme: 'light'}} key="donationsList" component={DonationsList}/>
                    </Scene>
                </Router>
            </Provider>
        );
      }
}

