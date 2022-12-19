import { parseDashArgs } from "./helpers/index.js";
import { createInterface } from 'readline/promises';
import CommandLineState from "./cliState/index.js";
import routing from "./routing/index.js";

const responceHandler = async (responce) => {
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
            responceHandler(responce);
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



