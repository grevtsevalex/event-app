import{E as o}from"./image-api-80f61970.js";import{E as n}from"./event-list-3ea781d3.js";import{_ as s,d as r,r as a,o as m,c as p}from"./app-51b00e5c.js";import"./FetchHelper-fa988a9f.js";/* empty css            */const c=r({components:{EventList:n},data(){return{getUserEventsMethod:()=>new o().getEventsByAuthorId(localStorage.getItem("userId"))}}});function d(e,i,v,_,l,f){const t=a("event-list");return m(),p(t,{"get-events-method":e.getUserEventsMethod},null,8,["get-events-method"])}const B=s(c,[["render",d]]);export{B as default};
