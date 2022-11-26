require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food ivory riot saddle hole coral light army gaze'; 
let testAccounts = [
"0x8c0ade482008df92c710dedba225941eb8c30cc4a7d5985bb6cf331832972a44",
"0x46d1630fd44ee7ccd1044bda05d3ec2e38c25f294a45bea96899b3eeb9973f63",
"0x368aa6f259bbd63c5dca37f94808a6d25eeeda438479abe1961eb68250b3d0cb",
"0xf96af8fdc2b3acb37346efed4afaf406cbdc0ab7086fc3bbcf2333ea885dc648",
"0xe2a0fa7d99e36b285c9779ba3d2394035b28913654ef4756b391511aee796d29",
"0xf55f168d9111a83fc16970cc1e1282d46372b6abbf6727ac1b302493c66a048e",
"0x2577b6233798c5647da9a36f86928180b466afb75311ae7b0844fc73050a134d",
"0xc8be2fff2de613b08ad1f0c457f09db70d8808694e53d603cfeff04103bb2c13",
"0x38f19c1fc0857c02860cd387bbcdcff20d6b3195d3d2fda5dc444d4c17c0599d",
"0xc435f61bd055ec8ce405f7ed6be49b919e13bb44132102b88e170121477e7faf"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

