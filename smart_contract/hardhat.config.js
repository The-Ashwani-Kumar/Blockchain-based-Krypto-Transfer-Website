//https://eth-goerli.g.alchemy.com/v2/hgoWvQXSt5_ABfZYyT2QSJMqZtnk339m

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity : '0.8.0',
  networks : {
    goerli : {
      url : 'https://eth-goerli.g.alchemy.com/v2/hgoWvQXSt5_ABfZYyT2QSJMqZtnk339m',
      accounts : ['23264d1859bc614175c881a663126af1f381585b768167f9280b06313a5eee6c']
    }
  }
}