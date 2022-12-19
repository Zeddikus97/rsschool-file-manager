import { 
    resolve,
    parse 
} from 'path';
import { createBrotliCompress, createBrotliDecompress } from 'zlib';
import { createWriteStream, createReadStream } from 'fs';
import { pipeline } from 'stream/promises';

const zipper = async (currdir, file, dest, flag) => {
    try{
        let resdest = resolve(currdir, dest);
        let filestate = parse(resdest);
        let dest_path = resdest;
        if(!filestate['ext']){
           dest_path = flag=="c" 
           ? `${resolve(resdest, parse(file)['base'])}.br` 
           : `${resolve(resdest, parse(file)['name'])}`;
        }
        let full_path = resolve(currdir, file);
        const rstream = createReadStream(full_path);
        const wstream = createWriteStream(dest_path);
        const gzip = flag=="c" ? createBrotliCompress() : createBrotliDecompress(); 
        await pipeline(
            rstream,
            gzip,
            wstream
        )
    }
    catch(err){
        throw err;
    } 
};

export default zipper;