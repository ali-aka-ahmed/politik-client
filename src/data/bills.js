// TODO: Consideration, it might not be good to get votesFor and Against data until voted === true.

const bills = [
    {
        "name": "Freedom of Information Act",
        "number": "SB 768",
        "description": "A billListItem to allow the American public to request to review any document within the government.",
        "votesFor": 55,
        "votesAgainst": 89,
        "voted": true
    },
    {
        "name": "Defense ReAuthorization Act",
        "number": "HR 193",
        "description": "Giving the executive branch the power to declare and wage war with out the consent of Congress. Must be justified as national security.",
        "votesFor": 550,
        "votesAgainst": 260,
        "voted": false
    },
    {
        "name": "PATRIOT Act",
        "number": "SB 291",
        "description": "Protect freedom and equality in airports.",
        "votesFor": 854,
        "votesAgainst": 234,
        "voted": false
    },
    {
        "name": "Affordable Care Act",
        "number": "SB 23",
        "description": "Obamacare is amazing.",
        "votesFor": 8964,
        "votesAgainst": 2308,
        "voted": true
    },
    {
        "name": "TRUMPCARE Act",
        "number": "SB 1",
        "description": "LOL oxymoron?",
        "votesFor": 999,
        "votesAgainst": 11093,
        "voted": false
    }
];

export default bills;