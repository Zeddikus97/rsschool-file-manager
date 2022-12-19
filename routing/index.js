import {
    handleUp,
    handleCD,
    handleLS,
    handleCat,
    handleAdd,
    handleRN,
    handleRM,
    handleCP,
    handleMV,
    handleCompress,
    handleDecompress,
    handleOS
} from "../handlers/index.js"

const setSuccessStatus = () => {
    return { 
        status:"success", 
        value:''
    }
}

const setExitStatus = () => {
    return { 
        status:"exit", 
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
    return args.length<length ? true : false;
}


const routing = async (line, currentDir) => {
    try{
        const new_line = line.trim().split("'").join('"').split('"').reduce((arr, curr, index)=>{
            return index%2!=0 ? [...arr, curr] : [...arr, ...curr.split(" ")]
        }, []).filter((elem)=> elem);

        const [
            comm, 
            ...args
        ] = new_line;
        const clean_dir = currentDir;
        let newdir = '';

        switch (comm) {
            case "up":
                newdir = await handleUp(clean_dir); 
                return setChangeDirStatus(newdir);
            case "cd":
                if(checkArgumensNeeded(args, 1)) return setErrorStatus("Invalid input");
                else {
                    newdir = await handleCD(clean_dir, args[0]); 
                    return setChangeDirStatus(newdir);
                }
            case "ls":
                await handleLS(clean_dir);
                return setSuccessStatus();
                
            case "cat":
                if(checkArgumensNeeded(args, 1)) return setErrorStatus("Invalid input");
                await handleCat(clean_dir, args[0]);
                return setSuccessStatus();
            case "add":
                if(checkArgumensNeeded(args, 1)) return setErrorStatus("Invalid input");
                await handleAdd(clean_dir, args[0]);
                return setSuccessStatus();
            case "rn":
                if(checkArgumensNeeded(args, 2)) return setErrorStatus("Invalid input");
                await handleRN(clean_dir, args[0], args[1]);
                return setSuccessStatus();
            case "cp":
                if(checkArgumensNeeded(args, 2)) return setErrorStatus("Invalid input");
                await handleCP(clean_dir, args[0], args[1]);
                return setSuccessStatus();
            case "mv":
                if(checkArgumensNeeded(args, 2)) return setErrorStatus("Invalid input");
                await handleMV(clean_dir, args[0], args[1]);
                return setSuccessStatus();
            case "rm":
                if(checkArgumensNeeded(args, 1)) return setErrorStatus("Invalid input");
                await handleRM(clean_dir, args[0]);
                return setSuccessStatus();

            case "os":
                if(checkArgumensNeeded(args, 1)) return setErrorStatus("Invalid input");
                await handleOS(args);
                return setSuccessStatus();

            case "compress":
                if(checkArgumensNeeded(args, 2)) return setErrorStatus("Invalid input");
                await handleCompress(clean_dir, args[0], args[1]);
                return setSuccessStatus();
            case "decompress":
                if(checkArgumensNeeded(args, 2)) return setErrorStatus("Invalid input");
                await handleDecompress(clean_dir, args[0], args[1]);
                return setSuccessStatus();

            case ".exit":
                return setExitStatus();

            default:
                return setErrorStatus("Invalid input");
        }
    }
    catch(err){
        return setErrorStatus("Operation failed");
    }
};

export default routing;