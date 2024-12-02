import{_ as c,d as m,r as g,o as p,g as u,h as s,w as o,v as n,l as h,j as v,p as f,i as I}from"./app-19969aa0.js";import{E as _,I as a}from"./image-api-ed5f7e5e.js";import{E as r}from"./event-description-api-3ef06101.js";import{I as b}from"./image-uploader-0b4d813f.js";/* empty css            */const y=m({components:{ImageUploader:b},data(){return{title:"",address:"",dateTime:new Date().toISOString(),description:"",imageId:"",eventId:"",descriptionId:"",imageUrl:null,eventApi:new _}},async mounted(){this.eventId=Number(location.href.split("/").pop()),this.eventApi.getEvent(this.eventId).then(e=>{if(!e.success)return;const t=e.data;this.title=t.title,this.address=t.address,this.dateTime=t.date_time,this.imageId=t.image_id,this.descriptionId=t.description_id,this.loadImage(),this.loadDescription()})},computed:{isTitleValid(){return this.title.length>0},isDateTimeValid(){return this.dateTime.length>10},isAddressValid(){return this.address.length>0},isImageIdValid(){return this.imageId!==""},isDataValid(){return console.log(this.isTitleValid,this.isAddressValid,this.isDateTimeValid,this.userId),this.isTitleValid&&this.isAddressValid&&this.isDateTimeValid&&this.userId},userId(){return this.$store.getters.getUserId||localStorage.getItem("userId")}},methods:{async clickHandler(){this.isDataValid&&(this.description.length&&(this.descriptionId=await this.saveDescription(this.description)),this.updateEvent())},updateEvent(){const e={title:this.title,date_time:this.dateTime,description_id:this.descriptionId,address:this.address};this.eventApi.updateEvent(this.eventId,e).then(t=>{t.success&&(this.descriptionId&&this.saveDescriptionToEvent(this.eventId,this.descriptionId),this.isImageIdValid&&this.eventId&&this.saveEventImage(this.eventId,this.imageId),this.goToMyEvents())})},goToMyEvents(){this.$router.push("/my-events/")},uploadImageHandler(e){new a().uploadImage(e.target.files[0]).then(t=>this.imageId=t.data.id).catch(t=>console.log(t))},saveDescription(e){return new r().saveDescription(e).then(t=>this.descriptionId=t.data)},saveDescriptionToEvent(e,t){this.eventApi.saveDescriptionId(e,t)},saveEventImage(e,t){this.eventApi.saveImageId(e,t)},loadDescription(){this.descriptionId&&new r().getDescription(this.descriptionId).then(e=>{this.description=e.data.description})},loadImage(){this.imageId&&new a().getImage(this.imageId).then(e=>{e&&(this.imageUrl=e.url)})},deleteButtonClickHandler(){this.deleteEvent(),this.goToMyEvents()},deleteEvent(){this.eventApi.delete(this.eventId)}}}),d=e=>(f("data-v-d65363dc"),e=e(),I(),e),x={class:"space-y-12"},w={class:"border-b border-gray-900/10 pb-12"},k=d(()=>s("h2",{class:"text-base font-semibold leading-7 text-gray-1100"},"Редактирование события",-1)),T=d(()=>s("p",{class:"mt-1 text-sm leading-6 text-gray-600"},"Редактируйте информацию и сохраняйте ихменения.",-1)),E={class:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"},V={class:"sm:col-span-4"},D=d(()=>s("label",{for:"title",class:"block text-sm font-medium leading-6 text-gray-900"},"Название события",-1)),A={class:"mt-2"},U={class:"flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"},H={class:"col-span-full"},C=d(()=>s("label",{for:"description",class:"block text-sm font-medium leading-6 text-gray-900"},"Описание",-1)),S={class:"mt-2"},B={class:"border-b border-gray-900/10 pb-12"},$=d(()=>s("h2",{class:"text-base font-semibold leading-7 text-gray-900"},"Место и время проведения",-1)),M=d(()=>s("p",{class:"mt-1 text-sm leading-6 text-gray-600"},"Расскажите куда и во сколько нужно прийти вашим гостям",-1)),j={class:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"},N={class:"sm:col-span-3"},P=d(()=>s("label",{for:"dateTime",class:"block text-sm font-medium leading-6 text-gray-900"},"Дата и время",-1)),R={class:"mt-2"},O=["autocomplete"],q={class:"sm:col-span-3"},z=d(()=>s("label",{for:"address",class:"block text-sm font-medium leading-6 text-gray-900"},"Адрес",-1)),F={class:"mt-2"},G={class:"sm:col-span-3"},J=d(()=>s("label",{for:"image",class:"block text-sm font-medium leading-6 text-gray-900"},"Картинка",-1)),K={class:"buttons mt-6 flex items-center justify-end gap-x-6"},L=d(()=>s("button",{type:"button",class:"text-sm font-semibold leading-6 text-gray-900"},"Отмена",-1));function Q(e,t,W,X,Y,Z){const l=g("image-uploader");return p(),u("form",{class:"flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8",onSubmit:t[6]||(t[6]=v(()=>{},["prevent"]))},[s("div",x,[s("div",w,[k,T,s("div",E,[s("div",V,[D,s("div",A,[s("div",U,[o(s("input",{"onUpdate:modelValue":t[0]||(t[0]=i=>e.title=i),type:"text",name:"title",id:"title",autocomplete:"Название события",class:"block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6",placeholder:"Открытие"},null,512),[[n,e.title]])])])]),s("div",H,[C,s("div",S,[o(s("textarea",{"onUpdate:modelValue":t[1]||(t[1]=i=>e.description=i),id:"description",name:"description",rows:"3",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[n,e.description]])])])])]),s("div",B,[$,M,s("div",j,[s("div",N,[P,s("div",R,[o(s("input",{id:"dateTime",name:"dateTime",type:"datetime-local",autocomplete:e.dateTime,class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6","onUpdate:modelValue":t[2]||(t[2]=i=>e.dateTime=i)},null,8,O),[[n,e.dateTime]])])]),s("div",q,[z,s("div",F,[o(s("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=i=>e.address=i),name:"address",id:"address",autocomplete:"address",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[n,e.address]])])]),s("div",G,[J,h(l,{"image-url":e.imageUrl,onPreviewReady:e.uploadImageHandler},null,8,["image-url","onPreviewReady"])])])])]),s("div",K,[L,s("button",{type:"button",onClick:t[4]||(t[4]=(...i)=>e.clickHandler&&e.clickHandler(...i)),class:"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},"Сохранить"),s("button",{type:"button",onClick:t[5]||(t[5]=(...i)=>e.deleteButtonClickHandler&&e.deleteButtonClickHandler(...i)),class:"focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"},"Удалить")])],32)}const oe=c(y,[["render",Q],["__scopeId","data-v-d65363dc"]]);export{oe as default};
