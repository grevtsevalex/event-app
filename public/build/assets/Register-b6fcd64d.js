import{_ as a,d as r,e as d,o as m,c as u,a as s,w as g,f as o,v as l,b as c,t as p,g as f,h}from"./app-9121305b.js";import{A as x}from"./auth-api-77f5194a.js";import{i as y}from"./Validators-a31ce396.js";/* empty css            */import"./FetchHelper-cb5e12d7.js";const w=r({data(){return{email:"",pass:"",c_pass:"",login:""}},computed:{isEmailValid(){return y(this.email)},isPassValid(){return this.pass.length>=4&&this.pass===this.c_pass},isLoginValid(){return this.login.length>4}},methods:{submitHandler(){!this.isPassValid||!this.isEmailValid||!this.isLoginValid||new x().register(this.email,this.pass,this.c_pass,this.login)}}}),b={class:"flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"},v=s("div",{class:"sm:mx-auto sm:w-full sm:max-w-sm"},[s("img",{class:"mx-auto h-10 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",alt:"Your Company"}),s("h2",{class:"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"},"Зарегистрируйтесь")],-1),_={class:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm"},k=s("label",{for:"login",class:"block text-sm font-medium leading-6 text-gray-900"},"Логин",-1),V={class:"mt-2"},C=s("label",{for:"email",class:"block text-sm font-medium leading-6 text-gray-900"},"Email",-1),E={class:"mt-2"},j=s("div",{class:"flex items-center justify-between"},[s("label",{for:"password",class:"block text-sm font-medium leading-6 text-gray-900"},"Пароль")],-1),q={class:"mt-2"},U=s("div",{class:"flex items-center justify-between"},[s("label",{for:"c_password",class:"block text-sm font-medium leading-6 text-gray-900"},"Повторите пароль")],-1),$={class:"mt-2"},A={class:"mt-10 text-center text-sm text-gray-500"},B=s("a",{href:"#",class:"font-semibold leading-6 text-indigo-600 hover:text-indigo-500"},"Войти",-1);function H(t,e,N,D,L,M){const n=d("router-link");return m(),u("div",b,[v,s("div",_,[s("form",{class:"space-y-6",onSubmit:e[5]||(e[5]=g(()=>{},["prevent"]))},[s("div",null,[k,s("div",V,[o(s("input",{id:"login",name:"login",type:"text","onUpdate:modelValue":e[0]||(e[0]=i=>t.login=i),required:"",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[l,t.login]])])]),s("div",null,[C,s("div",E,[o(s("input",{id:"email",name:"email",type:"email","onUpdate:modelValue":e[1]||(e[1]=i=>t.email=i),required:"",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[l,t.email]])])]),s("div",null,[j,s("div",q,[o(s("input",{id:"password",name:"password","onUpdate:modelValue":e[2]||(e[2]=i=>t.pass=i),type:"password",autocomplete:"current-password",required:"",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[l,t.pass]])])]),s("div",null,[U,s("div",$,[o(s("input",{id:"c_password",name:"c_password","onUpdate:modelValue":e[3]||(e[3]=i=>t.c_pass=i),type:"password",autocomplete:"confirm-password",required:"",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[l,t.c_pass]])])]),s("div",null,[s("button",{onClick:e[4]||(e[4]=(...i)=>t.submitHandler&&t.submitHandler(...i)),class:"flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},"Регистрация")])],32),s("p",A,[c(" Есть аккаунт? "+p(" ")+" "),f(n,{to:"/auth"},{default:h(()=>[B]),_:1})])])])}const z=a(w,[["render",H]]);export{z as default};
