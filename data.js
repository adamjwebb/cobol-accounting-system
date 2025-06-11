// data.js
// Handles reading and writing the account balance using a JSON file
const fs = require('fs');
const path = require('path');

const BALANCE_FILE = path.join(__dirname, 'balance.json');

function readBalance() {
    if (!fs.existsSync(BALANCE_FILE)) {
        // Initialize with default balance if file doesn't exist
        writeBalance(1000.00);
    }
    const data = fs.readFileSync(BALANCE_FILE, 'utf8');
    return JSON.parse(data).balance;
}

function writeBalance(balance) {
    fs.writeFileSync(BALANCE_FILE, JSON.stringify({ balance: Number(balance) }, null, 2));
}

module.exports = { readBalance, writeBalance };