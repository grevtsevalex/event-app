import{E as r,I as l}from"./image-api-94c69fe6.js";import{_ as c}from"./def-event-3f07f8c5.js";import{_,d as m,o as a,c as i,F as g,r as p,a as e,t as o,b as h}from"./app-49f26926.js";import"./FetchHelper-4d43fdcd.js";/* empty css            */const u=m({data(){return{events:[],images:{}}},async mounted(){const t=await new r().getEventsByAuthorId();this.events=t.data,this.events.forEach(n=>new l().getImage(n.id).then(d=>this.images[n.id]=d.url))}}),f={role:"list",class:"divide-y divide-gray-100 events-list"},x={class:"flex min-w-0 gap-x-4"},y=["src"],v={key:1,class:"h-12 w-12 flex-none rounded-full bg-gray-50",alt:"",src:c},w={class:"min-w-0 flex-auto"},E={class:"text-sm font-semibold leading-6 text-gray-900"},k={class:"mt-1 truncate text-xs leading-5 text-gray-500"},b={class:"hidden shrink-0 sm:flex sm:flex-col sm:items-end"},B={class:"text-sm leading-6 text-gray-900"},I={class:"mt-1 text-xs leading-5 text-gray-500"},$=["datetime"];function A(t,n,d,F,M,N){return a(),i("ul",f,[(a(!0),i(g,null,p(t.events,s=>(a(),i("li",{key:s.id,class:"flex justify-between gap-x-6 py-5"},[e("div",x,[t.images[s.id]?(a(),i("img",{key:0,class:"h-12 w-12 flex-none rounded-full bg-gray-50",alt:"",src:t.images[s.id]},null,8,y)):(a(),i("img",v)),e("div",w,[e("p",E,o(s.title),1),e("p",k,o(s.address),1)])]),e("div",b,[e("p",B,o(s.address),1),e("p",I,[h(" Дата и время: "),e("time",{datetime:s.date_time},o(s.date_time),9,$)])])]))),128))])}const S=_(u,[["render",A]]);export{S as default};