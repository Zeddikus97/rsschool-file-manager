import {
    resolve,
    normalize,
    isAbsolute,
    parse,
    basename
} from "path";
import { cpus } from 'os';

let resolved = resolve("C:/", "..");
console.log(console.log(resolved)); 