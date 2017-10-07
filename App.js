import React from 'react';
import BillList from './components/billList';
import BillPage from './components/billPage';
import appState from './stores/appState';
import { Provider } from 'mobx-react/native';
import { Router, Scene } from 'react-native-router-flux';

export default class App extends React.Component {

    componentWillMount = async () => {
        appState.getBills();
    };

    render() {
        return (
            <Provider appState={appState}>
                <Router>
                    <Scene key="root" hideNavBar hideTabBar>
                        <Scene navigationBarStyle={{statusBarTextColorScheme: 'light'}} key="login" component={BillList}/>
                        <Scene navigationBarStyle={{statusBarTextColorScheme: 'light'}} key="billPage" component={BillPage}/>
                    </Scene>
                </Router>
            </Provider>
        );
      }
}

