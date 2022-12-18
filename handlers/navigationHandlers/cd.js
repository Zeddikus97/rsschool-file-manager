import { readdir } from 'fs/promises';

const handleUp = async (dir) => {
    try{
        const all_files = await readdir(dir);
        console.table(all_files);
    }
    catch(err){
        throw err;
    }
};

export default handleUp;