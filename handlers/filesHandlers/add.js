import { resolve } from 'path';
import { open } from 'fs/promises';

const handleAdd = async (currdir, file) => {
    try{
        let full_path = resolve(currdir, file);
        await open(full_path, 'wx');
    }
    catch(err){
        throw err;
    } 
};

export default handleAdd;