import { observable, action } from 'mobx';
// import bills from '../data/bills';
// import representatives from '../data/representatives';
import Bill from './billStoree';
// import Representative from './representativeStore';
import { getRecentBillsByMember, getSpecificBill } from '../services/transport-layer';

class AppState {

    @observable member_id = 'V000128';
    congress = '115';
    @observable bills = [];
    representatives = [];

    @action
    getBills = async () => {
        let bills = await getRecentBillsByMember(this.member_id, 'introduced');
        // let sBills = [];
        // bills.forEach(async (bill) => {
        //     sBills += [await getSpecificBill(bill.bill_uri)]
        // });
        // console.log(sBills);

        // let bills_updated = await getRecentBillsByMember(this.member_id, 'updated');
        // let bills_with_dups = bills_updated.concat(bills_introduced);
        // let bills = bills_with_dups.filter((elem, index, self) => {
        //     return index == self.indexOf(elem)
        // })
        this.bills = bills.map((bill) => {
            return new Bill(bill)
        });
        console.log(this.bills);
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