import{d as $,r as v,w as d,m as u,x as b,n as f,p as m,A as q,j as g,s as k,F as N,y as B,Q as O,q as Q,t as S,B as j,v as L,U}from"./index.4f390c6a.js";import{Q as V}from"./QSelect.8ad877e3.js";import{U as C}from"./cloudDB.d318324a.js";import{o as R}from"./index.4024674e.js";const F={class:"",style:{"border-radius":"8px"}},I={class:"row q-px-sm justify-start items-center"},M=$({__name:"GroupSelect",props:{collection:{},id:{},doc:{}},emits:["selected"],setup(h,{emit:y}){const n=h,o=v([]),l=v([]),i=v("no name"),p=y,_=C.getInstance();d(()=>n.id,async e=>{var a,s;if(console.log("watch props.id:",e),e&&n.collection)try{const t=n.collection==="pcf-ma2-execs"?{group_id:e}:{fountain_id:e},c=await _.request("databaseCRUD/get",{query:{collection:n.collection,condition:JSON.stringify(t)}});if(console.log("MA2 docList res:",c),(a=c==null?void 0:c.data)!=null&&a.length){o.value=c.data,l.value=[];for(const r of o.value)n.collection==="pcf-ma2-execs"?l.value.push(`${r.attrib} _ ${r.members_qty}`):n.collection==="pcf-ma2-groups"?l.value.push(`${r.name} _ ${r.devices}`):l.value.push(r.name);i.value=l.value[0]}else!c.success&&((s=c.error)==null?void 0:s.message)?/resource exhausted/.test(c.error.message)&&console.warn("DB resource exhausted."):(o.value=[],l.value=[],i.value="")}catch(t){console.error("cloudObj FountainsList:",t)}},{immediate:!0}),d(()=>n.collection,async e=>{var a,s;if(console.log("watch props.collection:",e),e&&!n.id)try{const t=await _.request("databaseCRUD/get",{query:{collection:e,condition:JSON.stringify({})}});if(console.log("MA2 docList res:",t),(a=t==null?void 0:t.data)!=null&&a.length){o.value=t.data,l.value=[];for(const c of o.value)l.value.push(c.name);i.value=l.value[0]}else!t.success&&((s=t.error)==null?void 0:s.message)?/resource exhausted/.test(t.error.message)&&console.warn("DB resource exhausted."):(o.value=[],l.value=[],i.value="",p("selected",void 0))}catch(t){console.error("cloudObj FountainsList:",t),p("selected",void 0)}},{immediate:!0}),d(()=>n.doc,e=>{if(console.log("watch props.doc:",e),e){let a=o.value.findIndex(c=>c._id===e._id);const s=n.collection==="pcf-ma2-execs"?`${e.attrib} _ ${e.members_qty}`:n.collection==="pcf-ma2-groups"?`${e.name} _ ${e.devices}`:e.name;let t=a;a<0?e._id!=="newDoc"?(a=o.value.findIndex(c=>c._id==="newDoc"),a>-1?(o.value[a]=e,l.value[a]=s,t=a):console.error('Doc update ERROR: No "newDoc" _id.')):(o.value.push(e),l.value.push(s),t=o.value.length-1):(n.collection==="pcf-ma2-execs"?e.attrib:e.name)==="***deleted doc***"?(o.value.splice(a,1),l.value.splice(a,1),t=a>=o.value.length?o.value.length-1:a):(o.value[a]=e,l.value[a]=s),i.value=l.value[t]}},{deep:!0}),d(()=>i.value,e=>{console.log("watch doc name:",e);let a;if((e==null?void 0:e.length)&&l.value){const s=l.value.findIndex(t=>t===e);a=o.value[s]}p("selected",a)});function x(e){e&&(i.value=`${e.attrib} _ ${e.members_qty}`)}return(e,a)=>(u(),b("div",F,[e.collection==="pcf-ma2-execs"&&o.value.length?(u(),f(q,{key:0,class:"q-pa-none q-ma-none",dense:""},{default:m(()=>[g(j,{class:""},{default:m(()=>[k("div",I,[(u(!0),b(N,null,B(o.value,s=>(u(),f(O,{key:s.attrib,class:"col-2",size:"16px",color:`${s.attrib} _ ${s.members_qty}`==i.value?"positive":"grey","text-color":"",dense:"",flat:`${s.attrib} _ ${s.members_qty}`!=i.value||s.attrib=="disable",disable:s.attrib=="disable",onClick:t=>x(s)},{default:m(()=>[Q(S(s.attrib),1)]),_:2},1032,["color","flat","disable","onClick"]))),128))])]),_:1})]),_:1})):(u(),f(V,{key:1,class:"",outlined:"",modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=s=>i.value=s),options:l.value,dense:"","options-dense":!0,"hide-dropdown-icon":"",label:e.collection,"stack-label":""},{append:m(()=>[g(U,{name:L(R)},null,8,["name"])]),_:1},8,["modelValue","options","label"]))]))}});export{M as _};
