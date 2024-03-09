const {
    Connection,
    Keypair,
} = require('@solana/web3.js')
const bs58 = require('bs58')

const PRIVATE_KEY = "aaaaa";
const endpoint = "aaaaa";
const NFT_STORAGE_TOKEN = 'aaaaa';

// Example of created token: https://solscan.io/token/Bj3EDqheEpjSVSwJxWkxYNpPHX1PWQKm7AtpQj8eCMcQ

const revokeMintBool = true
const revokeFreezeBool  = false


let tokenInfo = {
    amount: 1000000000,
    decimals: 9,
    metadata: '',
    symbol: 'TBS',
    tokenName: 'Teletubbies'
}


let metaDataforToken = {
    "name": tokenInfo.Warren,
    "symbol": tokenInfo.Warren,
    "image": '',
    "description": `
                            Warren is on a mission to make you lots of money. Become a Smart Investor Like Warren.
                            `,
    "extensions": {
        "website": "https://warrenintel.com/",
        "twitter": "https://twitter.com/warrentothemoon",
        "telegram": "https://t.me/+eH3w1XoXCfwzZGQ8"
    },
    "tags": [ "SOLANA","MEME", "WARREN", "DEXSCREENER"
    ],
    "creator": {
        "name": "Warren",
        "site": "https://warrenintel.com"
    }
}




// Ignore these
const connection = new Connection(endpoint); // helius
const myKeyPair = Keypair.fromSecretKey(new Uint8Array(bs58.decode(PRIVATE_KEY)));


module.exports = {
    connection,
    myKeyPair,
    NFT_STORAGE_TOKEN,
    revokeMintBool,
    revokeFreezeBool,
    tokenInfo,
    metaDataforToken
};
