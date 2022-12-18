import {
    handleUp,
    handleCD,
    handleLS
} from "../handlers/index.js"

const setDefaultStatus = () => {
    return { 
        status:"default", 
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
        console.log(args.length)
        console.log("args")
        switch (comm) {
            case "up":
                return 0;
            case "cd":
                if(args.length<1) setErrorStatus("Invalid input");
                else await handleCD(args[0]);
            case "ls":
                const result = await handleLS(currentDir);
            default:
                return setErrorStatus("Invalid input");
        }
    }
    catch(err){
        return setErrorStatus("Operation failed");
    }
};

export default routing;