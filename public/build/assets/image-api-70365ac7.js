import{F as n}from"./FetchHelper-4d43fdcd.js";class p{createEvent(t,e,a,r,o){return n.sendPost("http://localhost/api/events",JSON.stringify({title:t,date_time:a,address:r,description:e,author_id:o}))}saveImageId(t,e){return this.updateEvent(t,"image_id",e)}saveDescriptionId(t,e){return this.updateEvent(t,"description_id",e)}updateEvent(t,e,a){return n.sendPatch(`http://localhost/api/events/${t}`,JSON.stringify({[e]:a}))}getAllEvents(){return n.sendGet("http://localhost/api/events")}getEventsByAuthorId(t){return n.sendGet(`http://localhost/api/events/get-by-author-id/${t}`)}getEvent(t){return n.sendGet(`http://localhost/api/events/${t}`)}}class d{uploadImage(t){const e=new FormData;return e.append("image",t),fetch("http://localhost/api/event-images",{method:"POST",headers:{"X-CSRF-TOKEN":n.getCSRF()},credentials:"include",body:e}).then(a=>a.json()).catch(a=>console.log(a))}getImage(t){return n.sendGet(`http://localhost/api/event-images/${t}`).then(e=>e.data)}}export{p as E,d as I};
