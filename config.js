const {
    Connection,
    Keypair,
} = require('@solana/web3.js')
const bs58 = require('bs58')

const PRIVATE_KEY = "23qBiWMZKyy3L1LcjEpcpB7uoL96QjJtETPzeZAKQw5s1goXiERRwtS7Bu7vNX7MTpjVG2SXhu6pyvkDhqKHmefn";
const endpoint = "https://api.mainnet-beta.solana.com";
const NFT_STORAGE_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGQ4OGFjZWNlYkMyMDY3MDgxOEM1MjNCODM1RmQzRTc0ZjNiOTNFM2MiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTcxMDAwNTM2OTQzNiwibmFtZSI6IldhcnJlbiJ9.X5OlFsOVlVWhq_gK2Q5hspysK1gWctvHAk00BXst6mM';

// Example of created token: https://solscan.io/token/Bj3EDqheEpjSVSwJxWkxYNpPHX1PWQKm7AtpQj8eCMcQ

const revokeMintBool = true
const revokeFreezeBool  = false


let tokenInfo = {
    amount: 1000000000,
    decimals: 9,
    metadata: '',
    symbol: 'Warren',
    tokenName: 'Warren'
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
