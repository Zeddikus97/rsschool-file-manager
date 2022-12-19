import zipper from './zipper.js';

const handleCompress = async (currdir, file, dest) => {
    try{
        await zipper(currdir, file, dest, "c");
    }
    catch(err){
        throw err;
    } 
};

export default handleCompress;