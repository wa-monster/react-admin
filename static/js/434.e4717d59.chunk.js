"use strict";(self.webpackChunkyang_template=self.webpackChunkyang_template||[]).push([[434],{7434:function(e,c,n){n.r(c);n(3330);var a=n(2763),l=n(8993),s=n(4030),i=n(5015),t=n(4276),r=n(2452),o=n(647),d=n(6402),h=n(5174),x=n(1639),g=n(1328),m=n(7746),j=n(1213),p=n(5399),u=n(3726),f=function(e){var c=e.children,n=e.className;return(0,u.jsx)("div",{className:"home-card ".concat(n),children:c})},b=function(e){return(0,u.jsx)(m.Z,{style:{height:"100%"},option:e.option})},y=function(e){return(0,u.jsxs)("div",{className:"w-28 h-28 flex flex-col justify-center items-center hover:shadow-lg cursor-pointer",onClick:e.handleClick,children:[(0,u.jsx)("div",{className:"w-20 h-20 p-6 rounded-lg",style:{backgroundColor:e.bgColor+"55",color:e.bgColor},children:(0,u.jsx)("div",{className:"w-full h-full",children:e.children})}),(0,u.jsx)("div",{style:{textAlign:"center",color:"000",margin:"5px 0",fontWeight:"500"},children:e.label})]})};c.default=(0,a.P)((function(){var e=(0,p.$G)().t,c=(0,j.s0)(),n={xAxis:{type:"category",data:["1".concat(e("\u6708")),"2".concat(e("\u6708")),"3".concat(e("\u6708")),"4".concat(e("\u6708")),"5".concat(e("\u6708")),"6".concat(e("\u6708")),"7".concat(e("\u6708")),"8".concat(e("\u6708")),"9".concat(e("\u6708")),"10".concat(e("\u6708")),"11".concat(e("\u6708")),"12".concat(e("\u6708"))]},yAxis:{type:"value",name:e("\u8bbf\u95ee\u8d8b\u52bf")},series:[{data:[15,23,24,21,35,47,60,67,77,87,91,124],type:"line"}]},a={xAxis:{type:"category",data:["1".concat(e("\u6708")),"2".concat(e("\u6708")),"3".concat(e("\u6708")),"4".concat(e("\u6708")),"5".concat(e("\u6708")),"6".concat(e("\u6708")),"7".concat(e("\u6708")),"8".concat(e("\u6708")),"9".concat(e("\u6708")),"10".concat(e("\u6708")),"11".concat(e("\u6708")),"12".concat(e("\u6708"))]},yAxis:{type:"value",name:e("\u6bcf\u6708\u6536\u5165")},series:[{data:[120,200,105,80,70,101,130,102,105,140,70,505],type:"bar"}]},m=["#c23531","#2f4554","#61a0a8","#d48265","#91c7ae","#749f83","#ca8622","#bda29a","#6e7074","#546570","#c4ccd3"],C=[{label:e("\u7528\u6237\u7ba1\u7406"),handleClick:function(){c("/systemManage/userManage")},bgColor:"",children:(0,u.jsx)(l.Z,{style:{fontSize:"32px"}})},{label:e("\u89d2\u8272\u7ba1\u7406"),bgColor:"",handleClick:function(){c("/systemManage/roleManage")},children:(0,u.jsx)(s.Z,{style:{fontSize:"32px"}})},{label:e("\u83dc\u5355\u7ba1\u7406"),bgColor:"",handleClick:function(){c("/systemManage/menuManage")},children:(0,u.jsx)(i.Z,{style:{fontSize:"32px"}})},{label:e("\u805a\u5408\u8702\u7a9d\u56fe"),bgColor:"",handleClick:function(){c("/technicalStudy/aggregatedHex")},children:(0,u.jsx)(t.Z,{style:{fontSize:"32px"}})},{label:e("\u4e2a\u4eba\u4e2d\u5fc3"),bgColor:"",handleClick:function(){c("/personal")},children:(0,u.jsx)(r.Z,{style:{fontSize:"32px"}})}];return C.forEach((function(e,c){e.bgColor=m[c]})),(0,u.jsxs)("div",{className:"home grid gap-3 h-full",style:{gridTemplateRows:"6rem 14rem 34rem"},children:[(0,u.jsxs)("div",{className:"grid grid-cols-4 gap-4 h-24 bg-white p-4 box-border ",children:[(0,u.jsxs)(f,{className:"bg-[#33cabb]",children:[(0,u.jsx)("div",{children:(0,u.jsx)(o.Z,{style:{fontSize:"30px"}})}),(0,u.jsxs)("div",{children:[(0,u.jsx)("span",{className:"home-card-num",children:"10000"}),(0,u.jsx)("span",{children:e("\u6536\u5165")})]})]}),(0,u.jsxs)(f,{className:"bg-[#f96868]",children:[(0,u.jsx)("div",{children:(0,u.jsx)(d.Z,{style:{fontSize:"30px"}})}),(0,u.jsxs)("div",{children:[(0,u.jsx)("span",{className:"home-card-num",children:"200000"}),(0,u.jsx)("span",{children:e("\u8bbf\u95ee")})]})]}),(0,u.jsxs)(f,{className:"bg-[#15c377]",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h.Z,{style:{fontSize:"30px"}})}),(0,u.jsxs)("div",{children:[(0,u.jsx)("span",{className:"home-card-num",children:"1000"}),(0,u.jsx)("span",{children:e("\u4e0b\u8f7d")})]})]}),(0,u.jsxs)(f,{className:"bg-[#926dde]",children:[(0,u.jsx)("div",{children:(0,u.jsx)(x.Z,{style:{fontSize:"30px"}})}),(0,u.jsxs)("div",{children:[(0,u.jsx)("span",{className:"home-card-num",children:"203"}),(0,u.jsx)("span",{children:e("\u7559\u8a00")})]})]})]}),(0,u.jsx)(g.Z,{title:e("\u5feb\u6377\u5165\u53e3"),bordered:!1,children:(0,u.jsx)("div",{className:"grid justify-between justify-items-center",style:{gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))"},children:C.map((function(e,c){return(0,u.jsx)(y,{bgColor:e.bgColor,label:e.label,handleClick:e.handleClick,children:e.children},"QuickCard-".concat(c))}))})}),(0,u.jsxs)("div",{className:"grid grid-cols-2 gap-4 h-full bg-white",children:[(0,u.jsx)(b,{option:n}),(0,u.jsx)(b,{option:a})]})]})}))}}]);