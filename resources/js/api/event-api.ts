import {FetchHelper} from "../scripts/FetchHelper";

export class EventApi {

    public createEvent(title: string, description: string, dateTime: string, address: string): Promise<any> {
        return FetchHelper.sendPost('http://localhost/api/events', JSON.stringify({
            title, date_time: dateTime, address, description
        }))
    }

    public saveImageId(eventId, imageId) {
        return this.updateEvent(eventId, 'image_id', imageId);
    }

    public saveDescriptionId(eventId, descriptionId) {
        return this.updateEvent(eventId, 'description_id', descriptionId);
    }

    public updateEvent(id, column, value) {
        return FetchHelper.sendPatch(`http://localhost/api/events/${id}`, JSON.stringify({
            [column]: value,
        }))
    }

    public getAllEvents(): Promise<any> {
        return FetchHelper.sendGet('http://localhost/api/events')
    }

    public getEventsByAuthorId(authorId: string): Promise<any> {
        return FetchHelper.sendGet(`http://localhost/api/events/get-by-author-id/${authorId}`)
    }
}