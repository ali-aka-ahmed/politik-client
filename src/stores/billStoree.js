import { observable, action } from 'mobx';

export default class Bill {

    @observable votesFor; // TODO questionable - reduces efficiency once I establish a webhook. Might need to make a get request every 5 mins + on refresh... or maybe just have it react to the graphic
    @observable votesAgainst;
    @observable voted;

    @action //TODO is this necessary? in the other app it works without specifying action
    recordVote = async () => {
        await recordVoteAPI()
    };

    constructor(billJSON) {
        for (let property in billJSON) {
            this[property] = billJSON[property]
        }
    }
}