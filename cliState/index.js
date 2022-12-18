import { homedir } from 'os';
import { normalize } from 'path';

export default class CommandLineState{
    constructor(name){
        this.dir = homedir();
        this.name = name;
    }

    getName = () => {
        return this.name;
    };

    getDir = () => {
        return this.dir;
    }

    setDir = (dir) => {
        this.dir = normalize(dir).split('\\').join("/");
    }
}