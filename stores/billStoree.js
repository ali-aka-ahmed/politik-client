import { observable, action } from 'mobx';

export default class Bill {

    @observable votesFor;
    @observable votesAgainst;
    @observable voted;

    // @action //TODO is this necessary? in the other app it works without specifying action
    // recordVote = async () => {
    //     await recordVoteAPI()
    // };

    constructor(billJSON) {
        for (let property in billJSON) {
            this[property] = billJSON[property]
        }
    }
}