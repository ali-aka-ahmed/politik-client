import { observable, action } from 'mobx';

export default class Bill {

    @observable votesFor;
    @observable votesAgainst;

    constructor(billJSON) {
        for (let property in billJSON) {
            this[property] = billJSON[property]
        }
    }
}