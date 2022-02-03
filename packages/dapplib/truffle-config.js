require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drum olympic smooth elegant note sister coconut install cash equal gauge'; 
let testAccounts = [
"0xbda7eac98673c675d5e855cc3ebfc3c10694bbc86a5fef9a1f8c3c04c5226385",
"0xbac64a7e9e78d2a994890c06490648133906a008312f05c0a28d523549aa627a",
"0x148688fdbb86d78423a17ccbf342f9797d3dae8bae2ec451af5a1011e3c60d28",
"0x935520d50b5e6fa079b46bf00c524d296bc5a60fabe872d28dda486b622d658a",
"0xda47a385ee852d07063321895edc2e90706302f275991a8b96b47e3017447545",
"0x97e6f78b7420e6e24ce6801bb905cdddee730dcf9168b97d27ca47e2df437956",
"0x34816b63554d06c2ec6ea3019e17ea295186375100309a18f3577878e1877160",
"0x6d97761e7c81292c931c3b111e9daa4defd08b075dfb3157c7462e0555418b6d",
"0x952e744a6697f632b1ed617b356ec0ae3204fb0594b5afbb125234ff52c97bbb",
"0xa9043129bb1836957de924b69a0af386c955ea39460e5db017ba210d307e22d8"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


