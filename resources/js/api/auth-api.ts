import {FetchHelper} from "../scripts/FetchHelper";

export class AuthApi {
    public emailAndPassAuthorization(email, password): Promise<any> {
        return FetchHelper.sendPost('/api/login', JSON.stringify({email, password}))
    }
    public register(email, password, c_password, loginName): Promise<any> {
        return FetchHelper.sendPost('/api/register', JSON.stringify({
            email, password, c_password, name: loginName
        }))
    }
    public logout(): Promise<any> {
        return FetchHelper.sendGet('/api/logout', {'Authorization': `Bearer ${localStorage.getItem('ifh_duf1k')}`})
            .then(response => response.data)
            .catch(error => {
                console.error('Logout error', error);
            });
    }

    public checkAuth(): Promise<any> {
        return FetchHelper.sendGet('/api/check', {'Authorization': `Bearer ${localStorage.getItem('ifh_duf1k')}`})
            .then(response => response.data)
            .catch(error => {
                console.error('Error checking authentication', error);
            });
    }

    public getUser() {
        const token = localStorage.getItem('ifh_duf1k');
        if (null === token) {
            return Promise.reject()
        }
        return FetchHelper.sendGet('/api/user', {'Authorization': `Bearer ${localStorage.getItem('ifh_duf1k')}`})
    }
}