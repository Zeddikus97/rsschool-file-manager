import { access } from 'fs/promises';


const handleCD = async (dir) => {
    try{
        await access(dir);
        
    }
    catch(err){
        throw err;
    }
};

export default handleCD;