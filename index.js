#!/usr/bin/env node

import chalk from "chalk";
import gradient from "gradient-string";
import inquirer from "inquirer";
import {createSpinner} from "nanospinner";
import getRandomEx from "./.system/GetRandomQuest/GetQuest.js";

let userName;
console.clear();

const sleep = (ms = 1000) => new Promise((r) => setTimeout(r,ms));

async function welcome(){
    console.log(`
        ${gradient.cristal.multiline(`
        Welcome to Exam-Go! 🤩
        `)}
        This ${chalk.bgCyan(chalk.white("PROGRAM"))} is designed to put your GO ${chalk.bgRedBright('SKILLS')} 
        to the test.

        Let's embark on this journey...
    `)
    const spinner = createSpinner('loading ...').start();
    await sleep();
    spinner.success({text: 'done'});

}

async function collectName(){
    const user = await inquirer.prompt({
        name :'User',
        type :'input',
        message : 'type your username',
        default(){
            return 'user';
        }
    })
    userName = user.User;
}

async function howToUse(){
    console.clear();
    console.log(`
    Hi ${ chalk.greenBright(userName)} you have successfully logged in...

    ${chalk.bgBlueBright('HOW IT WORKS 🤔')} 

    This program provides you with a variety of exercises that you need to ${chalk.bgGreenBright('solve')}.

    Each exercise is randomly selected, regardless of its difficulty level.

    After completing an exercise, simply type ${chalk.greenBright('grademe')} to receive your results.

    If you're successful, you'll be presented with a new challenge. 
    
    However, if you fail, you'll be given another chance to try again.

    But be cautious, ${chalk.redBright('YOU ONLY HAVE 3 ATTEMPTS FOR EACH CHALLENGE')}💀.

    Take your time and do your best!
    `)
}

async function Ready(){
    while(true){
        const ready = await inquirer.prompt({
            name : 'isReady',
            type : 'input',
            message : 'are you Ready (y/n)',
            default(){
                return 'y';
            }
        })
        if(ready.isReady == 'y')
        {
            return
        }
        else if(ready.isReady == 'n'){
            console.log("process finished");
            process.exit();
        }
        else {
            console.log('❗️ invalid value')
        }
    }
}

await welcome();
await collectName();
await howToUse();
await Ready();
while(true){
    await getRandomEx();
}