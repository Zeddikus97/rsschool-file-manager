import {
    handleUp,
    handleCD,
    handleLS,
    handleCat,
    handleRM
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
                return 0;
            case "cd":
                if(checkArgumensNeeded(args, 1)) return setErrorStatus("Invalid input");
                else {
                    newdir = await handleCD(currentDir, args[0]); 
                    return setChangeDirStatus(newdir);
                }
            case "ls":
                result = await handleLS(currentDir);

            case "cat":
                if(checkArgumensNeeded(args, 1)) return setErrorStatus("Invalid input");
                await handleCat(currentDir, args[0]);
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