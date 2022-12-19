import {
    resolve,
    normalize,
    isAbsolute,
    parse,
    basename
} from "path";
import { homedir } from 'os';

console.log(parse('C:/users/text.txt.br')); 