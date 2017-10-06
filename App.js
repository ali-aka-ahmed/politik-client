import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import { Provider } from 'mobx-react/native';
import { Font } from 'expo';
import appState from './src/stores/appState';
// CLASSES
import Launch from './src/components/launch';
import Login from './src/components/login';
import BillList from './src/components/billList';
import Bill from './src/components/bill';
import Representative from './src/components/representative';

export default class App extends React.Component {
    componentDidMount() {
        Font.loadAsync({
            'open-sans-regular': require('./assets/fonts/Open_Sans/OpenSans-Regular.ttf')
        });
    }

    render() {
        return (
            <Provider appState={appState}>
                <Router>
                  <Stack key="root" hideNavBar hideTabBar>
                      <Scene hideNavBar hideTabBar modal>
                          <Scene key="launch" component={Launch}/>
                          <Scene key="login" component={Login}/>
                      </Scene>
                      <Scene key="billList" component={BillList}/>
                      <Scene key="bill" component={Bill}/>
                      <Scene key="representative" component={Representative}/>
                  </Stack>
                </Router>
            </Provider>
        );
    }
}
