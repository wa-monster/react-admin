"use strict";(self.webpackChunkyang_template=self.webpackChunkyang_template||[]).push([[632],{632:function(e,r,s){s.r(r),s.d(r,{default:function(){return Z}});s(3330);var n=s(8121),a="loginBox--rPwep",l="loginForm--4aPcq",t=s(7083),c=s(6964),i=s(9496),o=s(7297),m=s(3695),u=s(6402),d=s(4730),x=s(1213),h=s(8095),p=s(6642),y=s(889),j=s(3726),f=t.Z.useToken;function g(e){var r=f().token;return(0,j.jsxs)("div",{style:{color:r.colorPrimary},className:"flex items-center",children:[(0,j.jsx)("span",{style:{marginRight:"10px"},children:(0,y.t)("\u8bb0\u4f4f\u8d26\u53f7")}),(0,j.jsx)(c.Z,{checked:e.checked,onChange:e.onChange})]})}var Z=(0,h.P)((function(){var e=(0,x.s0)(),r=(0,h.o)().user,s=f().token,t={username:r.userName,remember:!!r.userName};return(0,j.jsxs)("div",{className:"login-content w-full h-full flex justify-center items-center",children:[(0,j.jsx)(n.Z,{type:"fountain",bg:!0}),(0,j.jsxs)("div",{className:"w-[400px] h-[400px] ".concat(a),children:[(0,j.jsx)(p.Z,{}),(0,j.jsxs)(i.Z,{name:"login",autoComplete:"off",className:l,initialValues:t,onFinish:function(s){s.remember?r.setUserName(s.username):r.setUserName(""),"yang"===s.username&&"yang"===s.password&&e("/",{replace:!0})},children:[(0,j.jsx)(i.Z.Item,{name:"username",rules:[{required:!0,message:(0,y.t)("\u8bf7\u8f93\u5165\u8d26\u53f7")}],children:(0,j.jsx)(o.Z,{placeholder:"yang",prefix:(0,j.jsx)(u.Z,{style:{color:s.colorPrimary}})})}),(0,j.jsx)(i.Z.Item,{name:"password",rules:[{required:!0,message:(0,y.t)("\u8bf7\u8f93\u5165\u5bc6\u7801")}],children:(0,j.jsx)(o.Z.Password,{placeholder:"yang",prefix:(0,j.jsx)(d.Z,{style:{color:s.colorPrimary}})})}),(0,j.jsx)(i.Z.Item,{name:"remember",valuePropName:"checked",children:(0,j.jsx)(g,{})}),(0,j.jsx)(i.Z.Item,{children:(0,j.jsx)(m.ZP,{block:!0,type:"primary",htmlType:"submit",children:(0,y.t)("\u767b\u5f55")})})]}),(0,j.jsxs)("div",{className:"flex justify-between items-center ",style:{padding:"0 40px"},children:[(0,j.jsx)("div",{style:{color:s.colorPrimary,cursor:"pointer"},children:(0,y.t)("\u5fd8\u8bb0\u5bc6\u7801")}),(0,j.jsx)("div",{style:{color:s.colorPrimary,cursor:"pointer"},children:(0,y.t)("\u6ce8\u518c")})]})]})]})}))}}]);