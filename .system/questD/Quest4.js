

import chalk from "chalk";
import { execa } from "execa";
import inquirer from "inquirer";
import {createSpinner} from "nanospinner";
import { copyFile, unlink } from "fs";

const sleep = (ms) => new Promise((r) => setTimeout(r,ms));

export default async function QuestFour(){
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
        file name : pointToInt.go


    ${chalk.bgCyan('SUBJECT')}
        create a function called pointToInt that take a pointer to an integer
        and changes it's value to 10.

        do not worry about the package error
        
        function prototype: func PointToInt(nb *int)
    
        Once you've completed the task, type ${chalk.greenBright('grademe')} to initiate a test request.

        Should you wish to exit the program at any point, simply press 'Ctrl + C'.
        This will effectively terminate the script.
    `)
    await QuestFourCorrec(3);
}

async function QuestFourCorrec(trys){
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
            await copy();
            try{
            const compile = await execa("go",['build']);
            break;
            } catch(err){
                console.log('file not found or your file name does not match the expected name');
            }
        }
    }
    const read = await execa('./exam-go');
    const spinner = await createSpinner('checking...').start();
    await sleep(1000);
    spinner.success();
    const Cospinner = await createSpinner('testing...').start();
    await sleep(1000);
    Cospinner.success();
    if(read.stdout == "10")
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
      const clear = await unlink('../exam-go/test4.go', (error) => {
        
      });
}
async function copy(){
    const cpy = await copyFile('../exam-go/.tests/test4.go','../exam-go/test4.go',(err)=>{});
}
async function moveToSuccess(){
    const cpy = await copyFile('../exam-go/PointToInt.go','../exam-go/success/PointToInt.go',(err)=>{});
    const clear = await unlink('../exam-go/PointToInt.go', (error) => {
        
    });
}
async function moveToTrash(){
    const cpy = await copyFile('../exam-go/PointToInt.go','../exam-go/mygarbage/PointToInt.go',(err)=>{});
    const clear = await unlink('../exam-go/PointToInt.go', (error) => {
        
    });
}