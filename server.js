const ballot = require('./factory');

const vote = async (voteId, username) => {
    accounts = await ballot.web3.eth.getAccounts();
    const resp = await ballot.instance.methods
        .vote(voteId, ballot.web3.utils.utf8ToHex(username))
        .send({
            from: accounts[0],
            gas: '1000000'
          })
    console.log(resp);
}

const winner = async ()=> {
    const resp = await ballot.instance.methods
        .winnerName()
        .call();
    console.log(ballot.web3.utils.hexToUtf8(resp));
}


const test = async () => {
    try {
        await vote(2, 'fennsaji1');
    } catch(e) {

    }
    try {
        await vote(2, 'fennsaji2');
    } catch(e) {

    }
    try {
        await vote(2, 'fennsaji3');
    } catch(e) {

    }
    try {
        await vote(2, 'feba2');
    }catch(e) {

    }
    try { 
        await vote(2, 'saji2');
    } catch(e) {

    }
    try {
        await vote(2, 'Mridu2');
    } catch(e) {

    }
    await winner();
}

test();

