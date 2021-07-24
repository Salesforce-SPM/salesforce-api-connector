"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Environment = void 0;
class Environment {
    constructor(args = {}) {
        this.file = {};
        if (args.data) {
            this.name = args.data.name;
            this.url = args.data.url;
            this.user = args.data.user;
            this.password = args.data.password;
            this.token = args.data.token;
        }
    }
}
exports.Environment = Environment;
