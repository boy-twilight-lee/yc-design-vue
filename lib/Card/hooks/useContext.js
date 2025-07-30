"use strict";const t=require("vue"),e="card-context";module.exports=()=>({provide:()=>{const s=t.useSlots();return t.provide(e,{slots:s}),{slots:s}},inject:()=>t.inject(e,{slots:{}})});
