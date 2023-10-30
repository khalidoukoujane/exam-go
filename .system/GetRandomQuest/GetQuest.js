import QuestOne from "../questA/Quest1.js";
import QuestTwo from "../questB/Quest2.js";
import QuestThree from "../questC/Quest3.js";
import QuestFour from "../questD/Quest4.js";
import QuestFive from "../questE/Quest5.js";

const exArr = [QuestOne,QuestTwo,QuestThree,QuestFour,QuestFive];

export default async function getRandomEx(){
    if (exArr.length === 0) {
        console.log("you have finished all the availabe exercises")
    }
    let index = getRandomInt(0, exArr.length - 1);
    let chosenFunction = exArr[index];
    exArr.splice(index, 1); // remove the chosen function from the array to avoid calling the same function twice
    await chosenFunction();
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}