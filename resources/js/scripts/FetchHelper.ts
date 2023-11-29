export class FetchHelper {
    public static getCSRF(): string|null {
        const csrfElement = document.querySelector('meta[name="csrf-token"]');
        if (!csrfElement) {
            return null;
        }

        return csrfElement.getAttribute('content');
    }

    public static sendPost(url: string, data: string): any {
        return fetch(url, {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': FetchHelper.getCSRF(),
                'Content-Type': 'application/json;charset=utf-8'
            },
            credentials: "include",
            body: data
        }).then(res => res.json())
    }

    public static sendGet(url: string): any {
        return fetch(url, {
            method: 'GET',
            headers: {
                'X-CSRF-TOKEN': FetchHelper.getCSRF(),
                'Content-Type': 'application/json;charset=utf-8'
            },
            credentials: "include",
        }).then(res => res.json())
    }

    public static sendPatch(url: string, data: string): any {
        return fetch(url, {
            method: 'PATCH',
            headers: {
                'X-CSRF-TOKEN': FetchHelper.getCSRF(),
                'Content-Type': 'application/json;charset=utf-8'
            },
            credentials: "include",
            body: data
        }).then(res => res.json())
    }
}