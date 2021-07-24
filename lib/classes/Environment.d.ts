import * as Interface from '../interface';
export declare class Environment {
    name: string;
    url: string;
    user: string;
    password: string;
    token: string;
    private file;
    constructor(args?: Interface.Environment.EnvironmentArgs);
}
