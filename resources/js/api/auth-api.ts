import {FetchHelper} from "../scripts/FetchHelper";

export class AuthApi {

    public emailAndPassAuthorization(email, password): Promise<any> {
        return FetchHelper.sendPost('http://localhost/api/login', JSON.stringify({email, password}))
    }

    public register(email, password, c_password, loginName): void {
        FetchHelper.sendPost('http://localhost/api/register', JSON.stringify({
            email, password, c_password, name: loginName
        })).then(res => console.log(res))
    }

    public logout(): Promise<any> {
        return FetchHelper.sendGet('http://localhost/api/logout');
    }
}