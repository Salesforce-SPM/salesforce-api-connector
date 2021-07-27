"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Environment = void 0;
const axios_1 = require("axios");
class Environment {
    constructor(args = {}) {
        this.accessToken = null;
        this.file = {
            name: null,
            url: null,
            user: null,
            password: null,
            token: null,
            clientId: null,
            clientSecret: null
        };
        if (args.data) {
            this.file.name = args.data.name;
            this.file.url = args.data.url;
            this.file.user = args.data.user;
            this.file.password = args.data.password;
            this.file.token = args.data.token;
            this.clientId = args.data.clientId;
            this.clientSecret = args.data.clientSecret;
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
    get clientId() { return this.file.clientId; }
    set clientId(clientId) { this.file.clientId = clientId; }
    get clientSecret() { return this.file.clientSecret; }
    set clientSecret(clientSecret) { this.file.clientSecret = clientSecret; }
    async getOauth2AccessToken() {
        try {
            const rq = await axios_1.default.post("https://NA139.salesforce.com/oauth/token", {
                "grant_type": "client_credentials",
                "scope": "public"
            }, {
                auth: {
                    username: 'grl.loch@gmail.com',
                    password: 'Sushili_2000',
                }
            });
            console.log(rq);
            // {
            //     "name": "Test Org",
            //     "url": "https://somecomp-dev-ed.my.salesforce.com/",
            //     "user": "grl.loch@gmail.com",
            //     "password": "Sushili_2000",
            //     "token": "qUNtWSmnetgtYBq8jFmW5OTM9",
            //     "clientId": "3MVG9l2zHsylwlpT0D0mHocIdbhVmL5Z0Lw9LDuh3dQ3xQgCKuM1DEv8C4ABqO4UcYeO.LEy5camw_iWkF1zi",
            //     "clientSecret": "9B35C58EB0946C429C829541E366B4D61D72056607D8189B2ECB9ECDF09D655E"
            // }
            // const resp = await axios.post(
            //     `https://NA139.salesforce.com/services/oauth2/token`,
            //     'grant_type=client_credentials' +
            //     '&client_id=' + this.clientId +
            //     '&client_secret=' + this.clientSecret +
            //     '&scope=USER'
            //     // {
            //     //     "grant_type": "password",
            //     //     "client_id": this.clientId,
            //     //     "client_secret": this.clientSecret,
            //     //     "username": this.user,
            //     //     "password": this.password + this.token
            //     // }
            // );
            // console.log({ resp });
        }
        catch (error) {
            console.log({ error });
        }
    }
}
exports.Environment = Environment;
// const { getEnv } = require("../database/models/Environment"),
//   jsForceConnection = require("./conn"),
//   axios = require("axios").default;
// module.exports = async (event, data) => {
//   const env = await getEnv(data.environment.id);
//   const conn = await jsForceConnection(env);
//   const instance = axios.create({
//     baseURL: conn._baseUrl(),
//     timeout: 1000,
//     headers: { Authorization: "Bearer " + conn.accessToken },
//   });
//   return instance.get(data.path);
// };
