import{_ as l,d as i,o as a,n,q as t}from"./app-51b00e5c.js";const r=i({props:{imageUrl:String},methods:{uploadImageHandler(e){const s=document.getElementById("preview_img");s.src=URL.createObjectURL(e.target.files[0]),s.onload=function(){URL.revokeObjectURL(s.src)},this.$emit("previewReady",e)}}}),d={class:"mt-2"},c={class:"flex items-center space-x-6"},m={class:"shrink-0"},p=["src"],f={class:"block"},_=t("span",{class:"sr-only"},"Выберете картинку",-1);function g(e,s,u,h,v,b){return a(),n("div",d,[t("div",c,[t("div",m,[t("img",{id:"preview_img",class:"h-40 w-40 object-cover rounded-full",src:e.imageUrl,alt:"Текущая картинка события"},null,8,p)]),t("label",f,[_,t("input",{name:"image",id:"image",type:"file",onChange:s[0]||(s[0]=(...o)=>e.uploadImageHandler&&e.uploadImageHandler(...o)),class:"block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"},null,32)])])])}const U=l(r,[["render",g]]);export{U as I};
