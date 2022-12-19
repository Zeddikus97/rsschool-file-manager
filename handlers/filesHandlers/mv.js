import { handleCP, handleRM } from './index.js';

const handleMV = async (currdir, filedir, newdir) => {
    try{
        const result = await handleCP(currdir, filedir, newdir);
        await handleRM(currdir, result['file_path']);
    }
    catch(err){
        throw err;
    } 
};

export default handleMV;