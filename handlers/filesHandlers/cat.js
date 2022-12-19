import { resolve } from 'path';
import { createReadStream } from 'fs';
import { logChunks } from '../../helpers/index.js';

const handleCat = async (currdir, file) => {
    try{
        let full_path = resolve(currdir, file);
        const rstream = createReadStream(full_path, { encoding: 'utf8'})
        await logChunks(rstream);
        rstream.close();
    }
    catch(err){
        throw err;
    } 
};

export default handleCat;