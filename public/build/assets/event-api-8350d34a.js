import{F as t}from"./FetchHelper-cb5e12d7.js";class o{createEvent(e,s,n,r){return t.sendPost("http://localhost/api/events",JSON.stringify({title:e,date_time:n,address:r,description:s}))}getAllEvents(){return t.sendGet("http://localhost/api/events")}}export{o as E};