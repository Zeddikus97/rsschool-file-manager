import { resolve } from 'path';
import { unlink } from 'fs/promises';

const handleRM = async (dir, file) => {
    try{
        let full_path = resolve(dir, file);
        await unlink(full_path);
    }
    catch(err){
        throw err;
    } 
};

export default handleRM;