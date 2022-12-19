import { access } from 'fs/promises';
import { resolve } from "path";

const handleCD = async (currdir, newdir) => {
    try {
        let resdir = resolve(currdir, newdir);
        await access(resdir);
        return resdir;
    }
    catch(err){
        console.log(err)
        throw err;
    }
};

export default handleCD;