import { resolve } from 'path';
import { access, rename } from 'fs/promises';

const handleRN = async (currdir, file, name) => {
    try{
        let full_path = resolve(currdir, file);
        let full_new_path = resolve(currdir, name);
        await access(full_path);
        await rename(full_path, full_new_path);
    }
    catch(err){
        throw err;
    } 
};

export default handleRN;