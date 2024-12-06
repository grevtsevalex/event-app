import{_,a as d,e as c,r as w,o as r,g as m,h as e,j as v,w as u,v as f,k as g,l as x,m as h,n as b,A as y,q as k}from"./app-357c4cd6.js";import{i as V}from"./Validators-a31ce396.js";/* empty css            */const A={setup(){const i=d(""),s=d(""),a=d(!1),t=c(()=>V(i.value)),n=c(()=>s.value.length>=4);return{email:i,password:s,isLoading:a,isEmailValid:t,isPasswordValid:n,submitHandler:async()=>{if(!(!t.value||!n.value)){a.value=!0;try{const o=await new y().emailAndPassAuthorization(i.value,s.value);o.data&&(localStorage.setItem("userId",o.data.id),localStorage.setItem("ifh_duf1k",o.data.token),window.location="/")}catch(l){console.error("Login failed",l)}finally{a.value=!1}}}}}},C={class:"flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"},H=e("div",{class:"sm:mx-auto sm:w-full sm:max-w-sm"},[e("img",{class:"mx-auto h-16 w-auto",src:k,alt:"Your Company"}),e("h2",{class:"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"},"Войдите в аккаунт")],-1),E={class:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm"},L=e("label",{for:"email",class:"block text-sm font-medium leading-6 text-gray-900"},"Email",-1),j={class:"mt-2"},N=e("div",{class:"flex items-center justify-between"},[e("label",{for:"password",class:"block text-sm font-medium leading-6 text-gray-900"},"Пароль"),e("div",{class:"text-sm"},[e("a",{href:"#",class:"font-semibold text-indigo-600 hover:text-indigo-500"},"Забыли пароль?")])],-1),q={class:"mt-2"},B=["disabled"],I={key:0,class:"loader"},P={key:1},S={class:"mt-10 text-center text-sm text-gray-500"};function M(i,s,a,t,n,p){const l=w("router-link");return r(),m("div",C,[H,e("div",E,[e("form",{class:"space-y-6",onSubmit:s[3]||(s[3]=v((...o)=>t.submitHandler&&t.submitHandler(...o),["prevent"]))},[e("div",null,[L,e("div",j,[u(e("input",{id:"email",name:"email",type:"email","onUpdate:modelValue":s[0]||(s[0]=o=>t.email=o),required:"",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[f,t.email]])])]),e("div",null,[N,e("div",q,[u(e("input",{id:"password",name:"password","onUpdate:modelValue":s[1]||(s[1]=o=>t.password=o),type:"password",autocomplete:"current-password",required:"",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[f,t.password]])])]),e("div",null,[e("button",{onClick:s[2]||(s[2]=(...o)=>t.submitHandler&&t.submitHandler(...o)),disabled:t.isLoading,class:"flex w-full justify-center items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed"},[t.isLoading?(r(),m("span",I)):g("",!0),t.isLoading?g("",!0):(r(),m("span",P,"Войти"))],8,B)])],32),e("p",S,[x(" Еще не зарегистрировались? "),h(l,{to:"/register",class:"font-semibold leading-6 text-indigo-600 hover:text-indigo-500"},{default:b(()=>[x("Регистрация")]),_:1})])])])}const D=_(A,[["render",M]]);export{D as default};