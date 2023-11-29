import {FetchHelper} from "../scripts/FetchHelper";

export class ImageApi {

    public uploadImage(file): Promise<any> {
        const data = new FormData();
        data.append('image', file);

        return fetch('http://localhost/api/event-images', {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': FetchHelper.getCSRF(),
            },
            credentials: "include",
            body: data
        })
            .then(res => res.json())
            .catch(e => console.log(e))
    }

    public getImage(id): Promise<any> {
        return FetchHelper.sendGet(`http://localhost/api/event-images/${id}`).then(r => r.data);
    }
}