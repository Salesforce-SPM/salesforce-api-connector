export interface EnvironmentFile {
    name?: string;
    url?: string;
    user?: string;
    password?: string;
    token?: string;
    clientId?: string;
    clientSecret?: string;
}
export interface EnvironmentArgs {
    data?: EnvironmentFile;
}
