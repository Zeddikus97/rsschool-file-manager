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

const app = async () => {
    try{
        const args = await parseDashArgs();

        const CLS = new CommandLineState(args["username"]);

        console.log(
            `Welcome to the File Manager, ${CLS.getName()}!`
        );

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        rl.on('line', (line) => {
            console.log(line)
        });
        
        rl.on('SIGINT', () => {
            console.log(args);
        });
    }
    catch(err){
        throw err;
    }
};

await app();



