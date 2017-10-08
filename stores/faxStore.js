import { observable, action } from 'mobx';
import { sendFax } from '../services/transport-layer';

class FaxStore {

    initiateFax = async () => {
        await sendFax();
    }

}

export default new FaxStore();
