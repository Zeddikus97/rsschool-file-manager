import { access } from 'fs/promises';
import { resolve } from "path";
import { handleUp } from './index.js';

const handleCD = async (currdir, newdir) => {
    try {
        let resdir = '';
        if(newdir==".."){
            resdir = handleUp(currdir);
        }
        else{
            resdir = resolve(currdir, newdir);
            await access(resdir);
        }
        return resdir;
    }
    catch(err){
        throw err;
    }
};

export default handleCD;