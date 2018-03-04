import { observable, action } from 'mobx';

export default class User {

    @observable address; // get rep district and save in rep store, same with state and senate store
    @observable firstName;
    @observable lastName;
    @observable district;
    @observable state;
    email;

    constructor(representativeJSON) {
        for (let property in representativeJSON) {
            this[property] = representativeJSON[property]
        }
    }
}