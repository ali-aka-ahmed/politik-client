import { observable, action } from 'mobx';
import bills from '../data/bills';
// import representatives from '../data/representatives';
import Bill from './billStoree';
// import Representative from './representativeStore';

class AppState {
    bills = [];
    representatives = [];

    @action
    getBills = async () => {
        // let bills = getBillsAPI;
        this.bills = bills.map((bill) => {
            return new Bill(bill)
        });
    };
    //
    // @action
    // getRepresentatives = async () => {
    //     // let representatives = getRepresentativesAPI;
    //     this.representatives = representatives.map((representative) => {
    //         return new Representative(representative)
    //     });
    // };
}

export default new AppState();

//USE CISCO SPARK FOR SENDING REP MESSAGES INTEGRATION??