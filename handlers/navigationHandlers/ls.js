import { readdir } from 'fs/promises';
import { checkDir } from '../../helpers/index.js';

const handleLS = async (dir) => {
    try{
        const all_files = await readdir(dir);
        let new_files = [];
        for await (let file of all_files) {
            let isDir = await checkDir(dir, file);
            new_files.push({
                Name:file,
                Type:isDir['state'] ? "directory" : "file"
            });
        }
        console.table(new_files);
    }
    catch(err){
        console.log(err)
        throw err;
    }
};

export default handleLS;