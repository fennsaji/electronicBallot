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
  '0xF826C12dE96E03b9511f02d0fF0dbAC391aDE03A'
);


exports.ballot =  instance;
