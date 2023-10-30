

import chalk from "chalk";
import { execa } from "execa";
import inquirer from "inquirer";
import {createSpinner} from "nanospinner";
import { copyFile, unlink } from "fs";

const sleep = (ms) => new Promise((r) => setTimeout(r,ms));

export default async function QuestFive(){
    console.clear();
    const spiner = createSpinner('loading ...').start();
    await sleep(1000);
    spiner.success();
    console.log(`
    ${chalk.bgCyan('README')}
        ❗️leave this window open. 
        ❗️and open a new one.
        ❗️all your files should be in the current directory.
        ❗️your package name should be always "main"

    `)
    await sleep(1000);
    console.log(`
    ${chalk.bgCyan('EXERCISE 00')}
        file name : aff_a.go


    ${chalk.bgCyan('SUBJECT')}
    Write a program that takes a string, and displays the first 'a' character it
    encounters in it, followed by a newline. If there are no 'a' characters in the
    string, the program just writes a newline. If the number of parameters is not
    1, the program displays 'a' followed by a newline.

    Example:

    $> ./aff_a "abc" | cat -e
    a$
    $> ./aff_a "dubO a POIL" | cat -e
    a$
    $> ./aff_a "zz sent le poney" | cat -e
    $
    $> ./aff_a | cat -e
    a$

    Once you've completed the task, type ${chalk.greenBright('grademe')} to initiate a test request.

    Should you wish to exit the program at any point, simply press 'Ctrl + C'.
    This will effectively terminate the script.
    `)
    await QuestFiveCorrec(3);
}

async function QuestFiveCorrec(trys){
    let tests = 0;
    let passed = false;
    while (true){
        
        const makerequest = await inquirer.prompt({
            name : 'testme',
            type : 'input',
            message : `${chalk.cyanBright('exam ~$')}`,
        });
        if (makerequest.testme === 'grademe'){
            if(trys === 0){
                console.log(`
                ${chalk.redBright('you failed so many times no more trys for you 💀')}
                `)
                await clear();
                await moveToTrash();
                process.exit();
            }
            try{
            const compile = await execa("go",['build']);
            break;
            } catch(err){
                console.log('file not found or your file name does not match the expected name');
            }
        }
    }
    const spinner = await createSpinner('checking...').start();
    await sleep(1000);
    spinner.success();
    const Cospinner = await createSpinner('testing...').start();
    await sleep(1000);
    Cospinner.success();
    //testing part
    const test1 = await execa('./exam-go',['abc']);
    const tst1 = await createSpinner('test one').start();
    await sleep(1000);
        Cospinner.success();
    if(test1.stdout === 'a')
    {
        tst1.success();
        tests = tests + 1;
    }
    else{
        tst1.error();
        tests = tests;
    }
    const test2 = await execa('./exam-go',['dubO a POIL']);
    const tst2 = await createSpinner('test two').start();
    await sleep(1000);
        Cospinner.success();
    if(test2.stdout === 'a')
    {
        tst2.success();
        tests = tests + 1;
    }
    else{
        tst2.error();
        tests = tests;
    }

    const test3 = await execa('./exam-go',['zz sent le poney']);
    const tst3 = await createSpinner('test three').start();
    await sleep(1000);
        Cospinner.success();
    if(test3.stdout === '')
    {
        tst3.success();
        tests = tests + 1;
    }
    else{
        tst3.error();
        tests = tests;
    }

    const test4 = await execa('./exam-go',['']);
    const tst4 = await createSpinner('test four').start();
    await sleep(1000);
        Cospinner.success();
    if(test4.stdout === '')
    {
        tst4.success();
        tests = tests + 1;
    }
    else{
        tst4.error();
        tests = tests;
    }

    if(tests === 4)
    {
        passed =true;
        console.log(`
        ${chalk.greenBright('------------ you succeed 🙌 ------------')}
        
        `);
    }else{
        console.log(`
        ${chalk.redBright('------------ you failed 💀 ------------')}

        trys = ${trys}
        `)
        await QuestFiveCorrec(trys - 1);
    }
    await clear();
    if(passed){
        const passed = await inquirer.prompt({
            name : 'ispassed',
            type : 'input',
            message : `${chalk.greenBright('press enter to move to the next exercise ')}`,
            default(){
                return('enter');
            }
        });
        await moveToSuccess();
        return;
    }
}
async function clear(){
    const remove = await unlink('../exam-go/exam-go', (error) => {
        
      });
    //   const clear = await unlink('../exam-go/test5.go', (error) => {
        
    //   });
}
// async function copy(){
//     const cpy = await copyFile('../exam-go/.tests/test4.go','../exam-go/test4.go',(err)=>{});
// }
async function moveToSuccess(){
    const cpy = await copyFile('../exam-go/aff_a.go','../exam-go/success/aff_a.go',(err)=>{});
    const clear = await unlink('../exam-go/aff_a.go', (error) => {
        
    });
}
async function moveToTrash(){
    const cpy = await copyFile('../exam-go/aff_a.go','../exam-go/mygarbage/aff_a.go',(err)=>{});
    const clear = await unlink('../exam-go/aff_a.go', (error) => {
        
    });
}