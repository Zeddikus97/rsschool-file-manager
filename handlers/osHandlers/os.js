import { EOL, cpus, homedir, userInfo } from 'os';

const handleArg = (arg) => {
    switch(arg){
        case "--EOL":
            return JSON.stringify(EOL)
        case "--cpus":
            const host_machine = cpus().map((elem)=>(
                {
                    model:elem.model,
                    speed:`${elem.speed/1000} GHz`
                }
            ))
            return host_machine;
        case "--homedir":
            return homedir();
        case "--username":
            return userInfo()['username'];
        case "--architecture":
            return process.arch;   
        default: 
            return 0;            
    }
}

const handleOS = async (args) => {
    try{
        let counter = 0;
        for (let arg of args){ 
            let result = handleArg(arg);
            if(result){
                console.log(result)
                counter++;
            }
        }
        if(!counter) throw new Error();
    }
    catch(err){
        throw err;
    } 
};

export default handleOS;