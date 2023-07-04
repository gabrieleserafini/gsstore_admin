import{w as y,J as v,ad as N,c_ as b,j as r,a as e,B as c}from"./index-2d41eb72.js";import{i as P,g as S,d,u as E}from"./index-8af7b54a.js";import{d as k}from"./index.modern-bc686481.js";import{P as _,S as t}from"./login-layout-f4acb1af.js";import{S as j}from"./index-9ec7a1b4.js";import{F}from"./index-dfcee5d3.js";const L=()=>{const m=y(),p=v(),s=N.parse(p.search.substring(1));let a=null;if(s!=null&&s.token)try{a=k(s.token)}catch{a=null}const l=(a==null?void 0:a.email)||(s==null?void 0:s.email)||"",{register:i,handleSubmit:u,formState:{errors:n},setError:f}=P({defaultValues:{password:"",repeat_password:""}}),g=b(),h=E(),w=u(o=>{if(o.password!==o.repeat_password){f("repeat_password",{type:"manual",message:"Passwords do not match"},{shouldFocus:!0});return}g.mutate({token:s.token,password:o.password,email:l},{onSuccess:()=>{m("/login")},onError:x=>{h("Error",S(x),"error")}})});return r(_,{children:[e(j,{title:"Reset Password"}),e("div",{className:"flex flex-col items-center justify-center",children:a?r("div",{className:"gap-y-large flex flex-col items-center",children:[r("div",{className:"gap-y-xsmall flex flex-col text-center",children:[e("h1",{className:"inter-xlarge-semibold text-[20px]",children:"Your reset link is invalid"}),e("p",{className:"text-grey-50 inter-base-regular",children:"Try resetting your password again."})]}),e("a",{href:"/login?reset-password=true",children:e(c,{variant:"secondary",size:"medium",className:"w-[280px]",children:"Go to reset password"})})]}):e("form",{onSubmit:w,children:r("div",{className:"gap-y-large flex flex-col items-center",children:[e("h1",{className:"inter-xlarge-semibold",children:"Reset your password"}),r("div",{className:"gap-y-small flex flex-col items-center",children:[e(t,{placeholder:"Email",disabled:!0,readOnly:!0,value:l}),r("div",{children:[e(t,{placeholder:"Password (8+ characters)",type:"password",...i("password",{required:F.required("Password")})}),e(d,{errors:n,name:"password"})]}),r("div",{children:[e(t,{placeholder:"Confirm password",type:"password",...i("repeat_password",{required:"You must confirm your password"})}),e(d,{errors:n,name:"repeat_password"})]})]}),e(c,{variant:"secondary",size:"medium",className:"w-[280px]",children:"Reset password"}),e("a",{href:"/login",className:"inter-small-regular text-grey-40 mt-xsmall",children:"Go back to sign in"})]})})})]})};export{L as default};