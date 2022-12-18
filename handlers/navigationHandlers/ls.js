import { readdir } from 'fs/promises';

const handleLS = async (dir) => {
    try{
        const all_files = await readdir(dir);
        console.log(all_files);
        console.table(all_files);
    }
    catch(err){
        throw err;
    }
};

export default handleLS;