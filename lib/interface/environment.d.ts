export interface EnvironmentFile {
    name?: string;
    url?: string;
    user?: string;
    password?: string;
    token?: string;
}
export interface EnvironmentArgs {
    data?: EnvironmentFile;
}
