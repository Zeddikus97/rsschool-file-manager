import { homedir } from 'os';
import { normalize } from 'path';

export default class CommandLineState{
    constructor(name){
        this.dir = normalize(homedir.toString());
        this.name = name;
    }

    getName = () => {
        return this.name;
    };

    getDir = () => {
        return this.dir;
    }

    setDir = (dir) => {
        try {
            this.dir = dir;
        }
        catch (e) {
            throw new Error(e);
        }
    }
}