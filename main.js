// main.js
// Main CLI loop for the Account Management System
const readline = require('readline');
const { showTotal, creditAccount, debitAccount } = require('./operations');

function mainMenu() {
    console.log('--------------------------------');
    console.log('Account Management System');
    console.log('1. View Balance');
    console.log('2. Credit Account');
    console.log('3. Debit Account');
    console.log('4. Exit');
    console.log('--------------------------------');
}

function main() {
    let continueFlag = true;

    function loop() {
        if (!continueFlag) {
            console.log('Exiting the program. Goodbye!');
            return;
        }
        
        const rl = readline.createInterface({ 
            input: process.stdin, 
            output: process.stdout 
        });
        
        mainMenu();
        rl.question('Enter your choice (1-4): ', (input) => {
            rl.close();
            
            switch (input.trim()) {
                case '1':
                    showTotal();
                    setTimeout(loop, 500);
                    break;
                case '2':
                    creditAccount(() => {
                        setTimeout(loop, 500);
                    });
                    break;
                case '3':
                    debitAccount(() => {
                        setTimeout(loop, 500);
                    });
                    break;
                case '4':
                    continueFlag = false;
                    loop();
                    break;
                default:
                    console.log('Invalid choice, please select 1-4.');
                    setTimeout(loop, 500);
            }
        });
    }
    loop();
}

main();