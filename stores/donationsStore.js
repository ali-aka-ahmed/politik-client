import { observable, action } from 'mobx';
import { createPurchaseForAccount, getPurchasesToMerchantForAccount } from '../services/transport-layer';

class DonationStore {

    @observable donations = [];

    createDonation = async (rep_name) => {
        return await createPurchaseForAccount('59d8688ba73e4942cdafdf84', 10, rep_name, "59d952d8ceb8abe24251c0f0")
    };

    @action
    getDonations = async () => {
        this.donations = await getPurchasesToMerchantForAccount('59d8688ba73e4942cdafdf84', "59d952d8ceb8abe24251c0f0")
    }

}

export default new DonationStore();