// operations.js
// Handles account operations: TOTAL, CREDIT, DEBIT
const readline = require('readline');
const { readBalance, writeBalance } = require('./data');

function showTotal() {
    const balance = readBalance();
    console.log(`Current balance: ${balance.toFixed(2)}`);
}

function creditAccount(callback) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question('Enter credit amount: ', (input) => {
        const amount = parseFloat(input);
        if (isNaN(amount) || amount <= 0) {
            console.log('Invalid amount.');
        } else {
            let balance = readBalance();
            balance += amount;
            writeBalance(balance);
            console.log(`Amount credited. New balance: ${balance.toFixed(2)}`);
        }
        rl.close();
        if (callback) callback();
    });
}

function debitAccount(callback) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question('Enter debit amount: ', (input) => {
        const amount = parseFloat(input);
        let balance = readBalance();
        if (isNaN(amount) || amount <= 0) {
            console.log('Invalid amount.');
        } else if (balance >= amount) {
            balance -= amount;
            writeBalance(balance);
            console.log(`Amount debited. New balance: ${balance.toFixed(2)}`);
        } else {
            console.log('Insufficient funds for this debit.');
        }
        rl.close();
        if (callback) callback();
    });
}

module.exports = { showTotal, creditAccount, debitAccount };