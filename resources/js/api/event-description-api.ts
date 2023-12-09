import {FetchHelper} from "../scripts/FetchHelper";

export class EventDescriptionApi {

    public saveDescription(description): Promise<any> {
        return FetchHelper.sendPost('/api/event-descriptions', JSON.stringify({description}))
            .catch(e => console.log(e))
    }

    public getDescription(id: number) {
        return FetchHelper.sendGet(`/api/event-descriptions/${id}`)
    }
}