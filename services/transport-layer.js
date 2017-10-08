import axios from "axios";

BASE_URL = 'https://api.propublica.org/congress/v1/';

axios.defaults.headers.common['X-API-Key'] = 'UaRAYesDNYQSfTiJUjAx5t5ihEubJJuDLtgnP1jF';

export const getRecentBillsByMember = async (member_id, type) => {
    let responseData = await axios.get(BASE_URL + 'members/' + member_id + '/bills/' + type + '.json');
    return responseData.data.results[0].bills;
};

export const getSpecificBill = async (bill_uri) => {
    let responseData = await axios.get(bill_uri);
    return responseData.data.results[0];
};

export const getSenatorsByState = async (state) => {
    let responseData = await axios.get(BASE_URL + 'members/senate/' + state + '/current.json');
    return responseData.data.results;
};