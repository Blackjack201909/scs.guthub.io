import{d as b,r as y,c as w,aN as C,m as i,n as u,p as l,j as e,Q as d,v as r,H as _,x as p,q as c,t as f,F as v,aT as h,f as $,y as V,z as S,A as B,B as L}from"./index.4f390c6a.js";import{Q as I}from"./QToolbarTitle.5e2b8a84.js";import{Q as T}from"./QItemLabel.95b24a48.js";import{Q as q}from"./QList.423862dd.js";import{Q as N}from"./QBtnDropdown.38ff8e37.js";import{Q as A}from"./QToolbar.582a7924.js";import{Q as D,a as E,b as F}from"./QLayout.1bc9c1a4.js";import{C as H}from"./ClosePopup.14229a43.js";import{l as g}from"./locale-options.a93a5ee4.js";import{u as K}from"./SearchKey.a606d0cd.js";import{u as U}from"./vue-i18n.runtime.b0371a81.js";import"./QMenu.75c03351.js";import"./selection.1482bdb7.js";import"./QResizeObserver.cb7e3544.js";import"./QScrollObserver.ad751985.js";const le=b({__name:"ServiceLayout",setup(P){const{locale:n}=U({useScope:"global"}),s=K(),m=y(s.key||""),k=w(()=>{const o=g.find(a=>{if(typeof n.value=="string")return a.value===n.value});return o?`img:${o.flag}`:"language"});return(o,a)=>{const Q=C("router-view");return i(),u(D,{view:"hHh Lpr fff"},{default:l(()=>[e(E,{elevated:""},{default:l(()=>[e(A,{dense:""},{default:l(()=>[e(d,{flat:"",dense:"",round:"",icon:"arrow_back_ios_new",onClick:a[0]||(a[0]=t=>o.$router.back())}),e(I,null,{default:l(()=>[r(s).getEnable&&r(s).getShow?(i(),u(_,{key:0,standout:"bg-primary text-white",dense:"",clearable:"",debounce:"700",modelValue:m.value,"onUpdate:modelValue":[a[1]||(a[1]=t=>m.value=t),r(s).setKey],placeholder:o.$t("main_layout.search")},null,8,["modelValue","placeholder","onUpdate:modelValue"])):(i(),p(v,{key:1},[c(f(o.$t(`services_layout.${o.$route.path.split("/").pop()}`)),1)],64))]),_:1}),r(s).getEnable?(i(),u(d,{key:0,dense:"",flat:"",round:"",icon:"search","aria-label":"Search",onClick:r(s).toggleShow},null,8,["onClick"])):h("",!0),e(d,{dense:"",flat:"",round:"",onClick:a[2]||(a[2]=t=>o.$q.dark.toggle()),color:o.$q.dark.isActive?"black":"white",icon:o.$q.dark.isActive?"brightness_2":"light_mode"},null,8,["color","icon"]),e(N,{color:"light","dropdown-icon":k.value,"no-icon-animation":"",flat:"",dense:""},{default:l(()=>[e(q,{modelValue:r(n),"onUpdate:modelValue":a[3]||(a[3]=t=>$(n)?n.value=t:null)},{default:l(()=>[(i(!0),p(v,null,V(r(g),t=>S((i(),u(B,{key:t.label,active:t.value==r(n),clickable:"",onClick:j=>n.value=t.value},{default:l(()=>[e(L,null,{default:l(()=>[e(T,null,{default:l(()=>[c(f(t.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["active","onClick"])),[[H]])),128))]),_:1},8,["modelValue"])]),_:1},8,["dropdown-icon"])]),_:1})]),_:1}),e(F,null,{default:l(()=>[e(Q)]),_:1})]),_:1})}}});export{le as default};
