import {
    resolve,
    normalize,
    isAbsolute,
    parse
} from "path";
import { homedir } from 'os';

console.log(parse('C:/')); 