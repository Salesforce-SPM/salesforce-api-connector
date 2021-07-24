"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Environment = void 0;
class Environment {
    constructor(args = {}) {
        this.file = {
            name: null,
            url: null,
            user: null,
            password: null,
            token: null
        };
        if (args.data) {
            this.file.name = args.data.name;
            this.file.url = args.data.url;
            this.file.user = args.data.user;
            this.file.password = args.data.password;
            this.file.token = args.data.token;
        }
    }
    get name() { return this.file.name; }
    set name(name) { this.file.name = name; }
    get url() { return this.file.url; }
    set url(url) { this.file.url = url; }
    get user() { return this.file.user; }
    set user(user) { this.file.user = user; }
    get password() { return this.file.password; }
    set password(password) { this.file.password = password; }
    get token() { return this.file.token; }
    set token(token) { this.file.token = token; }
}
exports.Environment = Environment;
