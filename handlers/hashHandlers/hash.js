import { resolve } from 'path';
import { createReadStream } from 'fs';
import { createHash } from 'crypto';

const handleHash = async (currdir, file) => {
    try{
        let full_path = resolve(currdir, file);
        const rstream = createReadStream(full_path, { encoding: 'utf8'})
        const shasum = createHash("sha256");

        rstream.on('data', async (data) => {
            shasum.update(data);
        })

        rstream.on('error', async (err) => {
            console.log("Operation failed")
        })

        rstream.on('end', async () => {
            var hash = shasum.digest('hex')
            console.log(hash)
        })
    }
    catch(err){
        throw err;
    } 
};

export default handleHash;