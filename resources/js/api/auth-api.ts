import {FetchHelper} from "../scripts/FetchHelper";

export class AuthApi {
    public emailAndPassAuthorization(email, password): Promise<any> {
        return FetchHelper.sendPost('http://localhost/api/login', JSON.stringify({email, password}))
    }
    public register(email, password, c_password, loginName): Promise<any> {
        return FetchHelper.sendPost('http://localhost/api/register', JSON.stringify({
            email, password, c_password, name: loginName
        }))
    }
    public logout(): Promise<any> {
        return FetchHelper.sendGet('http://localhost/api/logout');
    }

    public getUser() {
        const token = localStorage.getItem('ifh_duf1k');
        if (null === token) {
            return Promise.reject()
        }
        return FetchHelper.sendGet('http://localhost/api/user', {'Authorization': `Bearer ${localStorage.getItem('ifh_duf1k')}`})
    }
}