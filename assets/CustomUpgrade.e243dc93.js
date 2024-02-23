import{Q as U}from"./QToolbarTitle.5e2b8a84.js";import{Q as N}from"./QToolbar.582a7924.js";import{Q as V}from"./QItemLabel.95b24a48.js";import{d as k,r as i,l as O,m,n as y,p as s,j as l,q as _,s as b,x as B,y as h,B as j,t as f,A as I,F as E,H as T,Q as v,aT as R,bb as J}from"./index.4f390c6a.js";import{Q as L}from"./QBadge.2339051b.js";import{Q as P}from"./QSpace.6762f1cf.js";import{Q as $}from"./QForm.c09e6959.js";import{Q as M}from"./QPage.e32daf6c.js";import{u as z}from"./use-quasar.4e14d354.js";import{U as H}from"./cloudDB.d318324a.js";import"./axios.ea5872bc.js";import"./constant.a3c7e21e.js";const Y={class:"prompt_box q-mx-md q-py-sm"},G={class:"row justify-end"},K={class:"q-pt-lg"},ce=k({__name:"CustomUpgrade",setup(W){const g=z(),D=["\u60A8\u4E2A\u4EBA\u6216\u60A8\u6240\u5728\u7EC4\u7EC7\u62E5\u6709\u97F3\u4E50\u55B7\u6CC9\u7CFB\u7EDF\u3002","\u60A8\u5E0C\u671B\u60A8\u7684\u55B7\u6CC9\u7CFB\u7EDF\u88AB\u5347\u7EA7\u4E3A\u4E92\u52A8\u55B7\u6CC9\u3002","\u5982\u679C\u60A8\u7684\u55B7\u6CC9\u7CFB\u7EDF\u5DF2\u7ECF\u5EFA\u6210\u591A\u5E74\uFF0C\u5B83\u76EE\u524D\u4ECD\u7136\u53EF\u4EE5\u5DE5\u4F5C\uFF0C\u6216\u8005\u5F88\u5BB9\u6613\u88AB\u4FEE\u590D\u3002","\u60A8\u5BF9\u5546\u52A1\u5408\u4F5C\u6709\u51B3\u7B56\u6743\uFF0C\u6216\u8005\u53D7\u51B3\u7B56\u8005\u59D4\u6258\u3002"],r=i({fountain_name:"",fountain_address:"",contact:"",email:"",mobile:""}),a=i(0),c=i("Submit"),A=i(!0),d=i(!0),u=i([]),F=H.getInstance();O(async()=>{var t;try{const e=await F.request("databaseCRUD/get",{query:{collection:"pcf-fountain-clients",condition:JSON.stringify({user_id:"63f0b49d09e2987cee623af4"})}});console.log("pcf_fountainClients res:",e),(t=e==null?void 0:e.data)!=null&&t.length&&(d.value=!1,c.value="Update",e.data.length>1?u.value=e.data.sort((n,o)=>{if(n.created_at&&o.created_at)return o.created_at-n.created_at}):u.value=e.data,C(0))}catch(e){console.error("cloudObj pcf-fountain-clients:",e)}});async function Q(){if(A.value!==!0)g.notify({color:"red-5",textColor:"white",icon:"warning",message:"You need to accept the license and terms first"});else{const t={user_id:"63f0b49d09e2987cee623af4",updated_at:Date.now(),...r.value},e={};d.value?(t.created_at=Date.now(),e.created_at=t.created_at):e._id=u.value[a.value]._id,console.log("conditionData:",e);const n=await F.request("databaseCRUD/update",{query:{collection:"pcf-fountain-clients",condition:JSON.stringify(e),body:JSON.stringify(t)}});console.log("res db update:",n),n.id&&d.value?(u.value.unshift(t),a.value=0,d.value=!1,c.value="Update"):u.value[a.value]={...u.value[a.value],...t},g.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"Submitted"})}}function q(){r.value={fountain_name:"",fountain_address:"",contact:"",email:"",mobile:""},d.value=!0,c.value="Submit"}function x(){a.value>0&&(a.value--,C(a.value))}function w(){a.value<u.value.length-1&&(a.value++,C(a.value))}function C(t){r.value={fountain_name:u.value[t].fountain_name,fountain_address:u.value[t].fountain_address,contact:u.value[t].contact,email:u.value[t].email,mobile:u.value[t].mobile},c.value="Update"}function S(){console.log("onChooseClient")}return(t,e)=>(m(),y(M,{class:"q-mx-md"},{default:s(()=>[l(N,null,{default:s(()=>[l(U,{class:"text-center"},{default:s(()=>[_(" \u8BF7\u63D0\u4EA4\u4E4B\u524D\u786E\u8BA4\u4EE5\u4E0B\u51E0\u70B9\uFF1A ")]),_:1})]),_:1}),b("div",Y,[(m(),B(E,null,h(D,(n,o)=>l(I,{key:o,dense:""},{default:s(()=>[l(j,null,{default:s(()=>[l(V,null,{default:s(()=>[_(f(`${o+1}. `)+f(n),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)),64))]),l($,{onSubmit:Q,onReset:q,class:""},{default:s(()=>[(m(!0),B(E,null,h(r.value,(n,o)=>(m(),y(T,{key:o,outlined:"",modelValue:r.value[o],"onUpdate:modelValue":p=>r.value[o]=p,label:o,hint:"","lazy-rules":"",rules:[p=>p&&p.length>0||"Please type something"]},null,8,["modelValue","onUpdate:modelValue","label","rules"]))),128)),b("div",G,[u.value.length>1?(m(),B(E,{key:0},[l(v,{dense:"",round:"",label:"<",disable:a.value<=0,color:a.value<=0?"grey":"secondary",class:"q-mr-sm",onClick:x},null,8,["disable","color"]),l(v,{dense:"",round:"",label:">",disable:a.value>=u.value.length-1,color:a.value>=u.value.length-1?"grey":"secondary",onClick:w},null,8,["disable","color"]),l(L,{class:"q-ml-md",color:"grey"},{default:s(()=>[_(f(a.value+1)+" / "+f(u.value.length),1)]),_:1}),l(P)],64)):R("",!0),l(v,{dense:"",label:"Reset",type:"reset",color:"primary",flat:""}),l(v,{class:"q-ml-sm",dense:"",label:c.value,type:"submit",color:"primary"},null,8,["label"])])]),_:1}),b("div",K,[l(v,{class:"full-width",rounded:"",type:"button",color:"green",onClick:e[0]||(e[0]=J(n=>S(),["stop"]))},{default:s(()=>[_(f("\u70B9\u51FB\u6B64\u5904\u4E86\u89E3\u5546\u52A1\u5408\u4F5C\u8BE6\u60C5"))]),_:1})])]),_:1}))}});export{ce as default};
