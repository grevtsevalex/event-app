import {FetchHelper} from "../scripts/FetchHelper";

export class EventApi {

    public createEvent(title: string, description: string, dateTime: string, address: string, image: ): Promise<any> {
        return FetchHelper.sendPost('http://localhost/api/events', JSON.stringify({
            title, date_time: dateTime, address, description
        }))
    }

    public getAllEvents(): Promise<any> {
        return FetchHelper.sendGet('http://localhost/api/events')
    }
}