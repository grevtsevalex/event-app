import {FetchHelper} from "../scripts/FetchHelper";

export class EventApi {

    public createEvent(title: string, description: string, dateTime: string, address: string, author_id): Promise<any> {
        return FetchHelper.sendPost('/api/events', JSON.stringify({
            title, date_time: dateTime, address, description, author_id
        }))
    }

    public saveImageId(eventId, imageId) {
        return this.updateEvent(eventId, {image_id: imageId});
    }

    public saveDescriptionId(eventId, descriptionId) {
        return this.updateEvent(eventId, {description_id: descriptionId});
    }

    public updateEvent(id, event) {
        return FetchHelper.sendPatch(`/api/events/${id}`, JSON.stringify(event))
    }

    public getAllEvents(): Promise<any> {
        return FetchHelper.sendGet('/api/events')
    }

    public getEventsByAuthorId(authorId: number): Promise<any> {
        return FetchHelper.sendGet(`/api/events/get-by-author-id/${authorId}`)
    }

    public getEvent(id: number) {
        return FetchHelper.sendGet(`/api/events/${id}`)
    }

    public delete(id: number) {
        return FetchHelper.sendDelete(`/api/events/${id}`)
    }
}