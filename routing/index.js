import {
    handleUp,
    handleCD,
    handleLS,
    handleCat
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

const routing = async (line, currentDir) => {
    try{
        const [
            comm, 
            ...args
        ] = line.trim().split(" ");
        let result = [];
        switch (comm) {
            case "up":
                return 0;
            case "cd":
                if(args.length<1) setErrorStatus("Invalid input");
                else {
                    let newdir = await handleCD(args[0]);
                }
            case "ls":
                result = await handleLS(currentDir);

            case "cat":
                if(args.length<1) setErrorStatus("Invalid input");
                await handleCat(currentDir, args[0]);
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