import{J as S,ad as C,r as k,cX as q,w as E,j as a,a as e,B as d}from"./index-2d41eb72.js";import{i as L,g as P,d as l,u as F}from"./index-8af7b54a.js";import{d as j}from"./index.modern-bc686481.js";import{P as m,S as n}from"./login-layout-f4acb1af.js";import{S as u}from"./index-9ec7a1b4.js";import{F as c}from"./index-dfcee5d3.js";const T=()=>{const p=S(),t=C.parse(p.search.substring(1)),[h,g]=k.useState(!1);let i=null;if(t!=null&&t.token)try{i=j(t.token)}catch{i=null}const{register:s,handleSubmit:x,formState:{errors:o},setError:f}=L({defaultValues:{first_name:"",last_name:"",password:"",repeat_password:""}}),{mutate:w,isLoading:v}=q(),y=E(),_=F(),b=x(r=>{if(r.password!==r.repeat_password){f("repeat_password",{type:"manual",message:"Passwords do not match"},{shouldFocus:!0});return}w({token:t.token,user:{first_name:r.first_name,last_name:r.last_name,password:r.password}},{onSuccess:()=>{y("/login")},onError:N=>{_("Error",P(N),"error")}})});return i?a(m,{children:[e(u,{title:"Create Account"}),h?e("form",{onSubmit:b,children:a("div",{className:"flex flex-col items-center",children:[e("h1",{className:"inter-xlarge-semibold mb-large text-[20px]",children:"Create your Medusa account"}),a("div",{className:"gap-y-small flex flex-col",children:[a("div",{children:[e(n,{placeholder:"First name",...s("first_name",{required:c.required("First name")}),autoComplete:"given-name"}),e(l,{errors:o,name:"first_name"})]}),a("div",{children:[e(n,{placeholder:"Last name",...s("last_name",{required:c.required("Last name")}),autoComplete:"family-name"}),e(l,{errors:o,name:"last_name"})]}),e("div",{children:e(n,{placeholder:"Password",type:"password",...s("password",{required:c.required("Password")}),autoComplete:"new-password"})}),a("div",{children:[e(n,{placeholder:"Confirm password",type:"password",...s("repeat_password",{required:"You must confirm your password"}),autoComplete:"new-password"}),e(l,{errors:o,name:"repeat_password"})]})]}),e(d,{variant:"secondary",size:"medium",className:"mt-large w-[280px]",loading:v,children:"Create account"}),a("p",{className:"inter-small-regular text-grey-50 mt-xlarge",children:["Already signed up? ",e("a",{href:"/login",children:"Log in"})]})]})}):a("div",{className:"flex flex-col items-center text-center",children:[e("h1",{className:"inter-xlarge-semibold text-[20px]",children:"You have been invited to join the team"}),a("p",{className:"inter-base-regular text-grey-50 mt-xsmall",children:["You can now join the team. Sign up below and get started",e("br",{}),"with your Medusa account right away."]}),e(d,{variant:"secondary",size:"medium",className:"mt-xlarge w-[280px]",onClick:()=>g(!0),children:"Sign up"})]})]}):a(m,{children:[e(u,{title:"Create Account"}),a("div",{className:"gap-y-xsmall flex flex-col items-center",children:[e("h1",{className:"inter-xlarge-semibold mb- text-[20px]",children:"Invalid invite"}),e("p",{className:"inter-base-regular text-grey-50 w-[280px] text-center",children:"The invite link you have used is invalid. Please contact your administrator."}),a("p",{className:"inter-small-regular text-grey-40 mt-xlarge",children:["Already have an account? ",e("a",{href:"/login",children:"Log in"})]})]})]})};export{T as default};
