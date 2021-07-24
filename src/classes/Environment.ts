import * as Interface from '../interface';

export class Environment {
    public name: string;
    public url: string;
    public user: string;
    public password: string;
    public token: string;

    private file: Interface.Environment.EnvironmentArgs = {};

    constructor(args: Interface.Environment.EnvironmentArgs = {}) {
        if (args.data) {
            this.name = args.data.name;
            this.url = args.data.url;
            this.user = args.data.user;
            this.password = args.data.password;
            this.token = args.data.token;
        }
    }
}