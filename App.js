import React from 'react';
import BillList from './components/billList';
import BillPage from './components/billPage';
import appState from './stores/appState';
import { Provider } from 'mobx-react/native';
import { Router, Scene } from 'react-native-router-flux';
import {
    chargeCustomerAccount, getAllBillsForCustomer, getAccountsOfCustomer,
    getSpecificBill, getAllDonationReceiptsForCustomer, createDonationReceiptForAccount,
    createPlaceholderRepresentativeAccount, createPurchaseForAccount, getPurchasesToMerchantForAccount
} from "./services/transport-layer";

export default class App extends React.Component {

    componentDidMount = async () => {
        await appState.getBills();
        // await getSpecificBill("https://api.propublica.org/congress/v1/115/bills/s1798.json");
        // await createDonationReceiptForAccount("59d8688ba73e4942cdafdf84", "Daryus", 20);
        // console.log("about to initiate function");
        // await chargeCustomerAccount("59d8688ba73e4942cdafdf84", "", 1, "test txn");
        // await getAccountsOfCustomer("59d8688aa73e4942cdafdf83");
        // // await getAllDonationReceiptsForCustomer("59d8688ba73e4942cdafdf84");
        // // await createPlaceholderRepresentativeAccount();
        // await createPurchaseForAccount("59d8688ba73e4942cdafdf84", 3, representative_name="test_txn");
        // await getAccountsOfCustomer("59d8688aa73e4942cdafdf83");
        // await getPurchasesToMerchantForAccount("59d8688ba73e4942cdafdf84");

    };

    render() {
        return (
            <Provider appState={appState}>
                <Router>
                    <Scene key="root" hideNavBar hideTabBar>
                        <Scene navigationBarStyle={{statusBarTextColorScheme: 'light'}} key="billList" component={BillList}/>
                        <Scene navigationBarStyle={{statusBarTextColorScheme: 'light'}} key="billPage" component={BillPage}/>
                    </Scene>
                </Router>
            </Provider>
        );
      }
}

