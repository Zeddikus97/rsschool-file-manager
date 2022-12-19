import { 
    resolve,
    parse 
} from 'path';
import { 
    createReadStream, 
    createWriteStream 
} from 'fs';
import { pipeline } from 'stream/promises';
import { checkDir } from '../../helpers/index.js';

const handleCP = async (currdir, filedir, newdir) => {
    try{
        let new_file_state = await checkDir(currdir, newdir);
        if (!new_file_state['state']) throw new Error();
        const file_name = parse(filedir)['base'];
        let new_file_path = resolve(new_file_state['path'], file_name);
        let file_path = resolve(currdir, filedir);
        const rstream = createReadStream(file_path, { encoding: 'utf8'})
        const wstream = createWriteStream(new_file_path, { encoding: 'utf8'})
        await pipeline(rstream, wstream);
        return {
            file_path,
            new_file_path
        };
    }
    catch(err){
        throw err;
    } 
};

export default handleCP;