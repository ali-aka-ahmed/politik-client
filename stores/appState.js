import { observable, action } from 'mobx';
import Bill from './billStoree';
import Representative from './representativeStore';
import { getRecentBillsByMember, getSenatorsByState, getSpecificBill } from '../services/transport-layer';

class AppState {

    @observable state;
    congress = '115';
    @observable bills = [];
    @observable representatives = [];

    @action
    getBills = async () => {
        let ids = this.representatives.map((rep) => {return rep.id});
        console.log(ids, "ids");
        let bills = [];
        for (let i = 0; i < ids.length; i++) {
            let billsToAdd = await getRecentBillsByMember(ids[i], 'introduced');
            bills = bills.concat(billsToAdd);
        }

        let fullBillsToAdd = [];
        for (let i = 0; i < bills.length; i++) {
            let newBill = await getSpecificBill(bills[i].bill_uri);

            let introduced_status = [];
            let house_committee_status =[];
            let house_floor_status = [];
            let senate_committee_status =[];
            let senate_floor_status = [];
            for (let i = 0; i < newBill.actions.length; i++) {
                if (newBill.actions[i].action_type === "IntroReferral") {
                    introduced_status = introduced_status.concat(newBill.actions[i].description)
                } else if (newBill.actions[i].action_type === "Committee") {
                    if (newBill.actions[i].chamber === "House") {
                        house_committee_status = house_committee_status.concat(newBill.actions[i].description)
                    } else {
                        senate_committee_status = senate_committee_status.concat(newBill.actions[i].description)
                    }
                } else if (newBill.actions[i].action_type === "Floor") {
                    if (newBill.actions[i].chamber === "House") {
                        house_floor_status = house_floor_status.concat(newBill.actions[i].description)
                    } else {
                        senate_floor_status = senate_floor_status.concat(newBill.actions[i].description)
                    }
                }
            }
            newBill.introduced_status = introduced_status;
            newBill.house_committee_status = house_committee_status;
            newBill.house_floor_status = house_floor_status;
            newBill.senate_committee_status = senate_committee_status;
            newBill.senate_floor_status = senate_floor_status;

            fullBillsToAdd = fullBillsToAdd.concat(newBill);
        }


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
    };

    @action
    getSenators = async (state) => {
        this.state = state;
        let representatives = await getSenatorsByState(this.state);
        this.representatives = representatives.map((representative) => {
            return new Representative(representative)
        });
    };
}

export default new AppState();

//USE CISCO SPARK FOR SENDING REP MESSAGES INTEGRATION??