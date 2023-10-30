
import chalk from "chalk";
import { execa } from "execa";
import inquirer from "inquirer";
import {createSpinner} from "nanospinner";
import { copyFile, unlink } from "fs";

const sleep = (ms) => new Promise((r) => setTimeout(r,ms));

export default async function QuestOne(){
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
        file name : hello.go


    ${chalk.bgCyan('SUBJECT')}
        create a function that displays "hello world" on the standard output.

        do not worry about the package error

        $> ./hello
         hello world

    Once you've completed the task, type ${chalk.greenBright('grademe')} to initiate a test request.
    
    Should you wish to exit the program at any point, simply press 'Ctrl + C'.
    This will effectively terminate the script.
    `)
    await QuestOneCorrec(3);
}

async function QuestOneCorrec(trys){
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
    const Cospinner = await createSpinner('compiling...').start();
    await sleep(1000);
    Cospinner.success();
    if(read.stdout == "hello world")
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
      const clear = await unlink('../exam-go/test1.go', (error) => {
        
      });
}

async function copy(){
    const cpy = await copyFile('../exam-go/.tests/test1.go','../exam-go/test1.go',(err)=>{});
}

async function moveToSuccess(){
    const cpy = await copyFile('../exam-go/hello.go','../exam-go/success/hello.go',(err)=>{});
    const clear = await unlink('../exam-go/hello.go', (error) => {
        
    });
}

async function moveToTrash(){
    const cpy = await copyFile('../exam-go/hello.go','../exam-go/mygarbage/hello.go',(err)=>{});
    const clear = await unlink('../exam-go/hello.go', (error) => {
        
    });
}