import{I as g}from"./image-api-383f6824.js";import{_ as d,d as l,o as s,n,q as t,C as a,B as p,I as u,r as h,F as f,J as y,c as x}from"./app-d8c8893c.js";const $="/build/assets/def-event-efa26e84.jpg";const k=l({props:{event:null},data(){return{imageUrl:""}},created(){this.loadImage()},methods:{clickHandler(e){this.goToEventCard(e)},goToEventCard(){this.$router.push(`/event/${this.event.id}`)},loadImage(){this.event.image_id&&new g().getImage(this.event.image_id).then(e=>{e&&(this.imageUrl=e.url)})}}}),E={class:"flex min-w-0 gap-x-4"},I=["src"],w={key:1,class:"h-12 w-12 flex-none rounded-full bg-gray-50",alt:"",src:$},C={class:"min-w-0 flex-auto"},b={class:"text-sm font-semibold leading-6 text-gray-900"},B={class:"mt-1 truncate text-xs leading-5 text-gray-500"},U={class:"hidden shrink-0 sm:flex sm:flex-col sm:items-end"},F={class:"text-sm leading-6 text-gray-900"},H={class:"mt-1 text-xs leading-5 text-gray-500"},L=["datetime"];function N(e,o,c,m,_,v){return e.event?(s(),n("li",{key:0,class:"flex justify-between gap-x-6 py-5 event-item",onClick:o[0]||(o[0]=(...i)=>e.clickHandler&&e.clickHandler(...i))},[t("div",E,[e.imageUrl?(s(),n("img",{key:0,class:"h-12 w-12 flex-none rounded-full bg-gray-50",alt:"",src:e.imageUrl},null,8,I)):(s(),n("img",w)),t("div",C,[t("p",b,a(e.event.title),1),t("p",B,a(e.event.address),1)])]),t("div",U,[t("p",F,a(e.event.address),1),t("p",H,[p(" Дата и время: "),t("time",{datetime:e.event.date_time},a(e.event.date_time),9,L)])])])):u("",!0)}const T=d(k,[["render",N]]);const V=l({components:{EventItem:T},props:{getEventsMethod:Function},data(){return{events:[]}},async mounted(){const e=await this.getEventsMethod();this.events=e.data}}),j={role:"list",class:"divide-y divide-gray-100 events-list"};function M(e,o,c,m,_,v){const i=h("event-item");return s(),n("ul",j,[(s(!0),n(f,null,y(e.events,r=>(s(),x(i,{key:r.id,event:r},null,8,["event"]))),128))])}const D=d(V,[["render",M]]);export{D as E};
