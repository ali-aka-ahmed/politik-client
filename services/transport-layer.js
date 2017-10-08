import axios from "axios";

let propublica_inst = axios.create({
    baseURL: 'https://api.propublica.org/congress/v1/',
    timeout: 10000,
    headers: {'X-API-Key': 'UaRAYesDNYQSfTiJUjAx5t5ihEubJJuDLtgnP1jF'}
});

let capitalOne_inst = axios.create({
    baseURL: 'http://api.reimaginebanking.com/',
    timeout: 1000
});

let capitalOne_key = "/?key=50e8829f2eaab27ac2ae6339458730fb"; /* Daryus' API key */

let normal_inst = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 10000
});


// ////////////////////////////////////////////////////
// ///////////// PROPUBLICA API FUNCTIONS /////////////
// ////////////////////////////////////////////////////

export const getRecentBillsByMember = async (member_id, type) => {
    // let responseData = await axios.get(BASE_URL + 'members/' + member_id + '/bills/' + type + '.json');
    let responseData = await propublica_inst.get('members/' + member_id + '/bills/' + type + '.json');
    // console.log(responseData.data.results[0], "within transport-layer - getRecentBillByMember");
    return responseData.data.results[0].bills;
};

export const getSpecificBill = async (bill_uri) => {
    // let responseData = await axios.get(bill_uri);
    let responseData = await propublica_inst.get(bill_uri);
    // console.log(responseData.data.results[0], "within transport-layer - getSpecificBill");
    return responseData.data.results[0];
};

export const getSenatorsByState = async (state) => {
    let responseData = await propublica_inst.get('members/senate/' + state + '/current.json');
    return responseData.data.results;
};

// ////////////////////////////////////////////////////
// ///////////// CAPITALONE API FUNCTIONS /////////////
// ////////////////////////////////////////////////////
// Colin's cust id: 59d8688aa73e4942cdafdf83
// Colin's ac no: 59d8688ba73e4942cdafdf84 //act_id
// Merchant id: 59d952d8ceb8abe24251c0f0 // reps id
// repr ac no: 59d9421dceb8abe24251c0e7 // no longer needed

export const getAllDonationReceiptsForCustomer = async (/* String */ customer_id) => {
    let responseData = await capitalOne_inst.get("accounts/" + customer_id + "/bills" + capitalOne_key);
    console.log(responseData, "within transport-layer - getAllBillsForCustomer");
    return responseData.data; /* array of bills */
};

export const createDonationReceiptForAccount = async (/* String */ account_id, /* String */ payee, /* Integer */ payment_amount, nickname="Donation to " + payee) => {
    let today = new Date(Date.now()).toLocaleDateString();
    let payload = {
        "status": "completed",
        "payee": payee,
        "nickname": nickname,
        "payment_date": today,
        "recurring_date": 1,
        "payment_amount": payment_amount
    };
    let responseData = await capitalOne_inst.post("accounts/" + account_id + "/bills" + capitalOne_key, payload);
    console.log(responseData.data, "within transport-layer - createBillForCustomer");
    return responseData.data.code; // http response indicating success or failure (201 for success)
};

// export const chargeCustomerAccount = async (account_id, amount, description) => {
//     let today = new Date(Date.now()).toLocaleDateString();
//     let payload = {
//         "medium": "balance",
//         "payee_id": "59d9421dceb8abe24251c0e7",
//         "amount": amount,
//         "transaction_date": today,
//         "description": "string"
//     };
//     let responseData = await capitalOne_inst.post("accounts/" + account_id + "/transfers" + capitalOne_key, payload);
//     console.log(responseData, "chargeCustAcc");
//     return responseData.code; // http response code
// };

// when you click donate, hardcode account_id as colin's account
export const createPurchaseForAccount = async (account_id, amount, representative_name="your representative", merchant_id="59d952d8ceb8abe24251c0f0") => {
    /* Note: takes about a minute for status to change from 'pending' to 'executed'. */
    let today = new Date(Date.now()).toLocaleDateString();
    let payload = {
        "merchant_id": merchant_id,
        "medium": "balance",
        "purchase_date": today,
        "amount": amount,
        "description": "Donation to " + representative_name
    };
    let responseData = await capitalOne_inst.post("accounts/" + account_id + "/purchases" + capitalOne_key, payload);
    console.log(responseData, "createPurchaseForAccount")
};

// get list of donations
export const getPurchasesToMerchantForAccount = async (account_id, merchant_id="59d952d8ceb8abe24251c0f0") => {
    let responseData = await capitalOne_inst.get("merchants/" + merchant_id + "/accounts/"
        + account_id + "/purchases" + capitalOne_key);
    console.log(responseData.data, "getPurchasesToMerchantForAccount");
    return responseData.data; // array of purchases to the merchant made by the account_id
};


export const getAccountsOfCustomer = async (customer_id) => {
    /* Primarily for testing */
    let responseData = await capitalOne_inst.get("customers/" + customer_id + "/accounts" + capitalOne_key);
    console.log(responseData.data, "within transport-layer - getCustomerAccounts");
    return responseData.data; // array of accounts belonging to customer
};

export const createCustomerAndAccount = async (first_name, last_name, /* JSON */ address) => {
    let createCustomerPayload = {
        "first_name": first_name,
        "last_name": last_name,
        "address": {
            "street_number": address.street_number,
            "street_name": address.street_name,
            "city": address.city,
            "state": address.state,
            "zip": address.zip
        }
    };
    let createAccountPayload = {
        "type": "Checking",
        "nickname": first_name + " " + last_name + "'s checking account",
        "rewards": 1000000,
        "balance": 1000000,
    };
    let createCustomerResponseData = await capitalOne_inst.post("customers" + capitalOne_key, createCustomerPayload);
    console.log(createCustomerResponseData, "createCust response data");

    let createAccountResponseData = await capitalOne_inst.post("customers/"
        + createCustomerResponseData.data.objectCreated._id
        + "/accounts" + capitalOne_key, createAccountPayload);

    console.log(createAccountResponseData.data.objectCreated._id, "createAcc account id");
    return createAccountResponseData.data; // CONTAINS THIS NEW CUSTOMER'S ACCOUNT ID
};



// ////////////////////////////////////////////////////
// ///////////// CREATE-PDF TO SEND TO REP  ///////////
// ////////////////////////////////////////////////////

export const createLetter = async (sender_name, rep_name, body_letter, street_address, city_state_zip) => {
    let responseData = await normal_inst.post("/create-pdf",
        { "attrs":
            {
                "sender_name" : sender_name,
                "rep_name" : rep_name,
                "body_letter" : body_letter,
                "street_address" : street_address,
                "city_state_zip" : city_state_zip

            }
        }
    );
    // console.log(responseData.data.filename);
    return responseData.data.filename; // returns absolute path i.e. '/Users/ali/Google Drive/cs/politik/express-babel/letters/Ali Ahmed.pdf'
};

export const sendFax = async () => {
    // let responseData = await normal_inst.post("/send-fax", { path_to_letter: path_to_letter, rep_id: rep_id });
    let responseData = await normal_inst.get("/send-fax");
    return responseData.data
};
