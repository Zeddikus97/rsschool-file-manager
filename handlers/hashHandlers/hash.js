import { resolve } from 'path';
import { createReadStream } from 'fs';
import { logChunks } from '../../helpers/index.js';
import { createHash } from 'crypto';
/*
var hash = crypto.createHash('md5');
hash.setEncoding('hex');

fd.on('end', function() {
  hash.end();
  callback(hash.read());
});*/
// read all file and pipe it (write it) to the hash object

const handleHash = async (currdir, file) => {
    /*
    try{
        let full_path = resolve(currdir, file);
        const rstream = createReadStream(full_path, { encoding: 'utf8'})
        const hash = createHash("sha256");

        rstream.on('end', function() {
            hash.end();
            callback(hash.read());
        });
        await logChunks(rstream);
    }
    catch(err){
        throw err;
    } */
};

export default handleHash;