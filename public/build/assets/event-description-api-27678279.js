import{n as t}from"./app-d856ee97.js";class r{saveDescription(e){return t.sendPost("/api/event-descriptions",JSON.stringify({description:e})).catch(s=>console.log(s))}getDescription(e){return t.sendGet(`/api/event-descriptions/${e}`)}}export{r as E};