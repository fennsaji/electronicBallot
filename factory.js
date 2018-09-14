const Web3 = require('web3');  
const HDWalletProvider = require('truffle-hdwallet-provider');
const BallotFactory =  require('./build/Ballot.json');
const secrets = require('./secrets');

const provider = new HDWalletProvider(
    secrets.accountMnemonic,
    secrets.rinkebyNode
);

let web3;
web3 = new Web3(provider);


const instance = new web3.eth.Contract(
  JSON.parse(BallotFactory.interface),
  secrets.deployedTo
);

module.exports =  {instance, web3};
