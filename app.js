import exp from "constants";
import {
    resolve,
    normalize
} from "path";
import {
    parseDashArgs
} from "./helpers/index.js";
import * as readline from 'readline/promises';
import CommandLineState from "./cliState/index.js";
import routing from "./routing/index.js";

const app = async () => {
    try{
        const args = await parseDashArgs();
        const CLS = new CommandLineState(args["username"]);
        let username = CLS.getName();

        console.log(
            `Welcome to the File Manager, ${username}!`
        );

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        console.log(`You are currently in ${CLS.getDir()}`)
    
        rl.on('line', async (line) => {
            const responce = await routing(line, CLS.getDir());
            switch (responce['status']) {
                case "changedir":
                    CLS.setDir(responce['value']);
                    break;
                case "error":
                    console.log(responce['value']);
                    break;
                default:
                    break;
            }
            console.log(`You are currently in ${CLS.getDir()}`) 
        });
        
        /*
        rl.on('SIGINT', async () => {
            rl.close();
        });*/

        rl.on('close', async () => {
            console.log(`Thank you for using File Manager, ${username}, goodbye!`);
            /*process.nextTick(() => exit());*/
        });
    }
    catch(err){
        throw err;
    }
};

await app();



