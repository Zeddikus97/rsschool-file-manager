import { parseDashArgs } from "./helpers/index.js";
import { createInterface } from 'readline/promises';
import CommandLineState from "./cliState/index.js";
import routing from "./routing/index.js";

const responceHandler = async (responce, CLS) => {
    switch (responce['status']) {
        case "exit":
            return true;
        case "changedir":
            CLS.setDir(responce['value']);
            return false;
        case "error":
            console.log(responce['value']);
            return false;
        default:
            return false;
    }
}

const app = async () => {
    try{
        const args = await parseDashArgs();
        const CLS = new CommandLineState(args["username"] ? args["username"] : 'anon');
        let username = CLS.getName();

        console.log(
            `Welcome to the File Manager, ${username}!`
        );

        const rl = createInterface({
            input: process.stdin,
            output: process.stdout
        });

        console.log(`You are currently in ${CLS.getDir()}`)
    
        rl.on('line', async (line) => {
            const responce = await routing(line, CLS.getDir());
            const isExit = await responceHandler(responce, CLS);
            if(isExit) rl.close();
            console.log(`You are currently in ${CLS.getDir()}`) 
        });
        
        rl.on('SIGINT', async () => {
            rl.close();
        });

        rl.on('close', async () => {
            console.log(`Thank you for using File Manager, ${username}, goodbye!`);
        });
    }
    catch(err){
        throw err;
    }
};

await app();



