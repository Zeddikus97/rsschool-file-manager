import {
    resolve,
    normalize,
    isAbsolute
} from "path";

console.log(normalize("C:\\text\\file/file").split('\\').join("/"))
console.log(isAbsolute("C:\\text\file\file.js"))
console.log(isAbsolute('C:\\test\\demo_path.js')); 