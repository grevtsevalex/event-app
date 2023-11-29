import {FetchHelper} from "../scripts/FetchHelper";

export class EventDescriptionApi {

    public saveDescription(description): Promise<any> {
        return FetchHelper.sendPost('http://localhost/api/event-descriptions', JSON.stringify({description}))
            .catch(e => console.log(e))
    }
}