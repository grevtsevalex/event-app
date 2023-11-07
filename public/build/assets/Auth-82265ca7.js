import{_ as n,d as r,e as d,o as m,c as u,a as s,w as c,f as o,v as a,b as g,t as f,g as p,h as x}from"./app-9121305b.js";import{A as h}from"./auth-api-77f5194a.js";import{i as w}from"./Validators-a31ce396.js";/* empty css            */import"./FetchHelper-cb5e12d7.js";const b=r({data(){return{email:"",pass:""}},computed:{isEmailValid(){return w(this.email)},isPassValid(){return this.pass.length>=4}},methods:{submitHandler(){!this.isPassValid||!this.isEmailValid||new h().emailAndPassAuthorization(this.email,this.pass).then(t=>{t.data&&(window.location="/")})}}}),v={class:"flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"},y=s("div",{class:"sm:mx-auto sm:w-full sm:max-w-sm"},[s("img",{class:"mx-auto h-10 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",alt:"Your Company"}),s("h2",{class:"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"},"Войдите в аккаунт")],-1),_={class:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm"},k=s("label",{for:"email",class:"block text-sm font-medium leading-6 text-gray-900"},"Email",-1),V={class:"mt-2"},A=s("div",{class:"flex items-center justify-between"},[s("label",{for:"password",class:"block text-sm font-medium leading-6 text-gray-900"},"Пароль"),s("div",{class:"text-sm"},[s("a",{href:"#",class:"font-semibold text-indigo-600 hover:text-indigo-500"},"Забыли пароль?")])],-1),C={class:"mt-2"},E={class:"mt-10 text-center text-sm text-gray-500"},$=s("a",{href:"#",class:"font-semibold leading-6 text-indigo-600 hover:text-indigo-500"},"Регистрация",-1);function j(t,e,B,H,N,P){const l=d("router-link");return m(),u("div",v,[y,s("div",_,[s("form",{class:"space-y-6",onSubmit:e[3]||(e[3]=c(()=>{},["prevent"]))},[s("div",null,[k,s("div",V,[o(s("input",{id:"email",name:"email",type:"email","onUpdate:modelValue":e[0]||(e[0]=i=>t.email=i),required:"",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[a,t.email]])])]),s("div",null,[A,s("div",C,[o(s("input",{id:"password",name:"password","onUpdate:modelValue":e[1]||(e[1]=i=>t.pass=i),type:"password",autocomplete:"current-password",required:"",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[a,t.pass]])])]),s("div",null,[s("button",{onClick:e[2]||(e[2]=(...i)=>t.submitHandler&&t.submitHandler(...i)),class:"flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},"Войти")])],32),s("p",E,[g(" Еще не зарегистрировались? "+f(" ")+" "),p(l,{to:"/register"},{default:x(()=>[$]),_:1})])])])}const U=n(b,[["render",j]]);export{U as default};
