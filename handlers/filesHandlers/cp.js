import { resolve } from 'path';
import { createReadStream } from 'fs';
import { logChunks } from '../../helpers/index.js';

const handleCat = async (dir, file) => {
    try{
        let full_path = resolve(dir, file);
        const rstream = createReadStream(full_path, { encoding: 'utf8'})
        await logChunks(rstream);
    }
    catch(err){
        throw new Error(err);
    } 
};

export default handleCat;