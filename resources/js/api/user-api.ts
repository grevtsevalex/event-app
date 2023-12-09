import {FetchHelper} from "../scripts/FetchHelper";

export class UserApi {
    public checkToken(): boolean {
        const token = localStorage.getItem('ifh_duf1k');
        return null !== token;
    }

    private getAuthHeader() {
        return {'Authorization': `Bearer ${localStorage.getItem('ifh_duf1k')}`};
    }
    public getUser() {
        if (false === this.checkToken()) {
            return Promise.reject()
        }
        return FetchHelper.sendGet('/api/user', this.getAuthHeader())
    }

    public updateUser(user) {
        if (false === this.checkToken()) {
            return Promise.reject()
        }
        return FetchHelper.sendPatch('/api/user', JSON.stringify(user), this.getAuthHeader())
    }
}