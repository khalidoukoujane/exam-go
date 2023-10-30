
import chalk from "chalk";
import {createSpinner} from "nanospinner";
import { execa } from "execa";
import inquirer from "inquirer";
import { copyFile, unlink } from "fs";

const sleep = (ms) => new Promise((r) => setTimeout(r,ms));

export default async function QuestTwo(score){
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
        file name : strRev.go


    ${chalk.bgCyan('SUBJECT')}
        create a function called strRev that takes a string as parameter
        and returns the string in reverse order

        do not worry about the package error
        
        function prototype: func strRev(str string) string

        Once you've completed the task, type ${chalk.greenBright('grademe')} to initiate a test request.

        Should you wish to exit the program at any point, simply press 'Ctrl + C'.
        This will effectively terminate the script.
    `)
    await QuestTwoCorrec(3);
}


async function QuestTwoCorrec(trys){
    let passed = false;
    let tests = 0;
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
            await copy();
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
    const test1 = await execa('./exam-go',['Today was good']);
    const tst1 = await createSpinner('test one').start();
    await sleep(1000);
        Cospinner.success();
    if(test1.stdout === 'doog saw yadoT')
    {
        tst1.success();
        tests = tests + 1;
    }
    else{
        tst1.error();
        tests = tests;
    }
    const test2 = await execa('./exam-go',['solve the problem']);
    const tst2 = await createSpinner('test two').start();
    await sleep(1000);
        Cospinner.success();
    if(test2.stdout === 'melborp eht evlos')
    {
        tst2.success();
        tests = tests + 1;
    }
    else{
        tst2.error();
        tests = tests;
    }

    const test3 = await execa('./exam-go',['hello world']);
    const tst3 = await createSpinner('test three').start();
    await sleep(1000);
        Cospinner.success();
    if(test3.stdout === 'dlrow olleh')
    {
        tst3.success();
        tests = tests + 1;
    }
    else{
        tst3.error();
        tests = tests;
    }
    if(tests === 3)
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
        await QuestOneTester(trys - 1);
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
      const clear = await unlink('../exam-go/test2.go', (error) => {
        
      });
}
async function copy(){
    const cpy = await copyFile('../exam-go/.tests/test2.go','../exam-go/test2.go',(err)=>{});
}
async function moveToSuccess(){
    const cpy = await copyFile('../exam-go/strRev.go','../exam-go/success/strRev.go',(err)=>{});
    const clear = await unlink('../exam-go/strRev.go', (error) => {
        
    });
}
async function moveToTrash(){
    const cpy = await copyFile('../exam-go/strRev.go','../exam-go/mygarbage/strRev.go',(err)=>{});
    const clear = await unlink('../exam-go/strRev.go', (error) => {
        
    });
}