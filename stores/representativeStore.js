export default class Representative {
    constructor(representativeJSON) {
        for (let property in representativeJSON) {
            this[property] = representativeJSON[property]
        }
    }
};