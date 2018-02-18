import axios from "axios";

let propublica_inst = axios.create({
    baseURL: 'https://api.propublica.org/congress/v1/',
    timeout: 10000,
    headers: {'X-API-Key': 'UaRAYesDNYQSfTiJUjAx5t5ihEubJJuDLtgnP1jF'}
});

let capitalOne_inst = axios.create({
    baseURL: 'http://api.reimaginebanking.com/',
    timeout: 10000
});

let capitalOne_key = "/?key=50e8829f2eaab27ac2ae6339458730fb"; /* Daryus' API key */

let normal_inst = axios.create({
    baseURL: 'http://localhost:3000',
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
// ///////////// BACKEND FUNCTIONS /////////////
// ////////////////////////////////////////////////////

export const checkLogin = async (email, password) => {
    console.log("WE GOING IN", {email, password});
    let responseData = await normal_inst.post('/auth/login', {email, password});
    return responseData.data;
}

export const createUser = async (firstName, lastName, address, email, password) => {
    console.log("Going into createUser", {firstName, lastName, address, email, password});
    let responseData = await normal_inst.post('/auth/signup', {firstName, lastName, address, email, password});
    return responseData.data;
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
