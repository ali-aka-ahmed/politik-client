import { observable, action } from 'mobx';

export default class Bill {

    num = Math.random();
    total_num = Math.floor((Math.random() * 100) * (Math.random() * 100));
    @observable votesFor = Math.floor(this.num * this.total_num);
    @observable votesAgainst = Math.floor((1 - this.num) * this.total_num + 1);
    @observable voted = false;

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