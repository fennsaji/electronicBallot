const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/Ballot.json');
const secrets = require('./secrets');

const provider = new HDWalletProvider(
  'spice creek mule tennis wagon fly fruit spice anger absurd rival habit',
  'https://rinkeby.infura.io/v3/6ff967fcf71142b78869969d5621f5d3'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: '0x' + compiledFactory.bytecode, arguments: [[
        web3.utils.fromUtf8('Red'), 
        web3.utils.fromUtf8('Blue'), 
        web3.utils.fromUtf8('Green'), 
        web3.utils.fromUtf8('Yellow')]] })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};

deploy();
