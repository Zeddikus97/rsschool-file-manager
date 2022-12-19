import {
    handleUp,
    handleCD,
    handleLS,
    handleCat,
    handleAdd,
    handleRN,
    handleRM,
    handleCP,
    handleMV
} from "../handlers/index.js"

const setSuccessStatus = () => {
    return { 
        status:"success", 
        value:''
    }
}

const setChangeDirStatus = (newdir) => {
    return { 
        status:"changedir", 
        value:newdir
    }
}

const setErrorStatus = (message) => {
    return { 
        status:"error", 
        value:message
    }
}

const checkArgumensNeeded = (args, length) => {
    args.length<length ? true : false ;
}


const routing = async (line, currentDir) => {
    try{
        const [
            comm, 
            ...args
        ] = line.trim().split(" ");
        let newdir = '';


        switch (comm) {
            case "up":
                newdir = await handleUp(currentDir); 
                return setChangeDirStatus(newdir);
            case "cd":
                if(checkArgumensNeeded(args, 1)) return setErrorStatus("Invalid input");
                else {
                    newdir = await handleCD(currentDir, args[0]); 
                    return setChangeDirStatus(newdir);
                }
            case "ls":
                await handleLS(currentDir);
                return setSuccessStatus();
                
            case "cat":
                if(checkArgumensNeeded(args, 1)) return setErrorStatus("Invalid input");
                await handleCat(currentDir, args[0]);
                return setSuccessStatus();
            case "add":
                if(checkArgumensNeeded(args, 1)) return setErrorStatus("Invalid input");
                await handleAdd(currentDir, args[0]);
                return setSuccessStatus();
            case "rn":
                if(checkArgumensNeeded(args, 2)) return setErrorStatus("Invalid input");
                await handleRN(currentDir, args[0], args[1]);
                return setSuccessStatus();
            case "cp":
                if(checkArgumensNeeded(args, 2)) return setErrorStatus("Invalid input");
                await handleCP(currentDir, args[0], args[1]);
                return setSuccessStatus();
            case "mv":
                if(checkArgumensNeeded(args, 2)) return setErrorStatus("Invalid input");
                await handleMV(currentDir, args[0], args[1]);
                return setSuccessStatus();
            case "rm":
                if(checkArgumensNeeded(args, 1)) return setErrorStatus("Invalid input");
                await handleRM(currentDir, args[0])
                return setSuccessStatus();

            default:
                return setErrorStatus("Invalid input");
        }
    }
    catch(err){
        return setErrorStatus("Operation failed");
    }
};

export default routing;