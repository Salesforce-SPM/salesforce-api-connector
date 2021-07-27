import * as Interface from '../interface';
export declare class Environment {
    accessToken: string;
    private file;
    constructor(args?: Interface.Environment.EnvironmentArgs);
    get name(): string;
    set name(name: string);
    get url(): string;
    set url(url: string);
    get user(): string;
    set user(user: string);
    get password(): string;
    set password(password: string);
    get token(): string;
    set token(token: string);
    get clientId(): string;
    set clientId(clientId: string);
    get clientSecret(): string;
    set clientSecret(clientSecret: string);
    getOauth2AccessToken(): Promise<void>;
}
