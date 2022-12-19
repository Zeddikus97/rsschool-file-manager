import { access } from 'fs/promises';
import { resolve } from "path";
import { handleUp } from './index.js';
import { checkDir } from '../../helpers/index.js';

const handleCD = async (currdir, newdir) => {
    try {
        let resdir = '';
        if(newdir==".."){
            resdir = handleUp(currdir);
        }
        else{
            let result = await checkDir(currdir, newdir);  
            if(!result['state']) throw new Error();
            resdir=result['path'];
        }
        return resdir;
    }
    catch(err){
        throw err;
    }
};

export default handleCD;