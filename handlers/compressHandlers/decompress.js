import zipper from './zipper.js';

const handleDecompress = async (currdir, file, dest) => {
    try{
        await zipper(currdir, file, dest, "d");
    }
    catch(err){
        throw err;
    } 
};

export default handleDecompress;