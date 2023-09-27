import {FetchHelper} from "../scripts/FetchHelper";

export class AuthApi {

    public emailAndPassAuthorization(email, password): void {
        FetchHelper.sendFetch('http://localhost/api/login', JSON.stringify({email, password})).then(res => console.log(res))
    }

    public register(email, password, c_password, loginName): void {
        FetchHelper.sendFetch('http://localhost/api/register', JSON.stringify({
            email, password, c_password, name: loginName
        })).then(res => console.log(res))
    }
}