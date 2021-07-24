import * as Interface from '../interface';

export class Environment {
    private file: Interface.Environment.EnvironmentFile = {
        name: null,
        url: null,
        user: null,
        password: null,
        token: null
    };

    constructor(args: Interface.Environment.EnvironmentArgs = {}) {
        if (args.data) {
            this.file.name = args.data.name;
            this.file.url = args.data.url;
            this.file.user = args.data.user;
            this.file.password = args.data.password;
            this.file.token = args.data.token;
        }
    }

    public get name() { return this.file.name }
    public set name(name: string) { this.file.name = name }

    public get url() { return this.file.url }
    public set url(url: string) { this.file.url = url }

    
    get user() { return this.file.user }
    public set user(user: string) { this.file.user = user }

    get password() { return this.file.password }
    public set password(password: string) { this.file.password = password }

    get token() { return this.file.token }
    public set token(token: string) { this.file.token = token }


    // TODO conn
    // TODO post api
    // TODO get api
    // TODO retrieve
    // TODO deploy

}