"use strict";(self.webpackChunkyang_template=self.webpackChunkyang_template||[]).push([[634],{6634:(t,e,a)=>{a.d(e,{Z:()=>lt});var n=a(571),c=a(3935),o=a.n(c),i=a(4009),r=a(1382),l=a(5391);const s=t=>{const{prefixCls:e,className:a,style:c,size:i,shape:r}=t,l=o()({["".concat(e,"-lg")]:"large"===i,["".concat(e,"-sm")]:"small"===i}),s=o()({["".concat(e,"-circle")]:"circle"===r,["".concat(e,"-square")]:"square"===r,["".concat(e,"-round")]:"round"===r}),d=n.useMemo((()=>"number"===typeof i?{width:i,height:i,lineHeight:"".concat(i,"px")}:{}),[i]);return n.createElement("span",{className:o()(e,l,s,a),style:Object.assign(Object.assign({},d),c)})};var d=a(8622),g=a(8119),b=a(3146);const m=new d.E4("ant-skeleton-loading",{"0%":{backgroundPosition:"100% 50%"},"100%":{backgroundPosition:"0 50%"}}),u=t=>({height:t,lineHeight:(0,d.bf)(t)}),p=t=>Object.assign({width:t},u(t)),h=t=>({background:t.skeletonLoadingBackground,backgroundSize:"400% 100%",animationName:m,animationDuration:t.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite"}),f=(t,e)=>Object.assign({width:e(t).mul(5).equal(),minWidth:e(t).mul(5).equal()},u(t)),v=t=>{const{skeletonAvatarCls:e,gradientFromColor:a,controlHeight:n,controlHeightLG:c,controlHeightSM:o}=t;return{["".concat(e)]:Object.assign({display:"inline-block",verticalAlign:"top",background:a},p(n)),["".concat(e).concat(e,"-circle")]:{borderRadius:"50%"},["".concat(e).concat(e,"-lg")]:Object.assign({},p(c)),["".concat(e).concat(e,"-sm")]:Object.assign({},p(o))}},y=t=>{const{controlHeight:e,borderRadiusSM:a,skeletonInputCls:n,controlHeightLG:c,controlHeightSM:o,gradientFromColor:i,calc:r}=t;return{["".concat(n)]:Object.assign({display:"inline-block",verticalAlign:"top",background:i,borderRadius:a},f(e,r)),["".concat(n,"-lg")]:Object.assign({},f(c,r)),["".concat(n,"-sm")]:Object.assign({},f(o,r))}},C=t=>Object.assign({width:t},u(t)),x=t=>{const{skeletonImageCls:e,imageSizeBase:a,gradientFromColor:n,borderRadiusSM:c,calc:o}=t;return{["".concat(e)]:Object.assign(Object.assign({display:"flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",background:n,borderRadius:c},C(o(a).mul(2).equal())),{["".concat(e,"-path")]:{fill:"#bfbfbf"},["".concat(e,"-svg")]:Object.assign(Object.assign({},C(a)),{maxWidth:o(a).mul(4).equal(),maxHeight:o(a).mul(4).equal()}),["".concat(e,"-svg").concat(e,"-svg-circle")]:{borderRadius:"50%"}}),["".concat(e).concat(e,"-circle")]:{borderRadius:"50%"}}},O=(t,e,a)=>{const{skeletonButtonCls:n}=t;return{["".concat(a).concat(n,"-circle")]:{width:e,minWidth:e,borderRadius:"50%"},["".concat(a).concat(n,"-round")]:{borderRadius:e}}},S=(t,e)=>Object.assign({width:e(t).mul(2).equal(),minWidth:e(t).mul(2).equal()},u(t)),j=t=>{const{borderRadiusSM:e,skeletonButtonCls:a,controlHeight:n,controlHeightLG:c,controlHeightSM:o,gradientFromColor:i,calc:r}=t;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({["".concat(a)]:Object.assign({display:"inline-block",verticalAlign:"top",background:i,borderRadius:e,width:r(n).mul(2).equal(),minWidth:r(n).mul(2).equal()},S(n,r))},O(t,n,a)),{["".concat(a,"-lg")]:Object.assign({},S(c,r))}),O(t,c,"".concat(a,"-lg"))),{["".concat(a,"-sm")]:Object.assign({},S(o,r))}),O(t,o,"".concat(a,"-sm")))},k=t=>{const{componentCls:e,skeletonAvatarCls:a,skeletonTitleCls:n,skeletonParagraphCls:c,skeletonButtonCls:o,skeletonInputCls:i,skeletonImageCls:r,controlHeight:l,controlHeightLG:s,controlHeightSM:d,gradientFromColor:g,padding:b,marginSM:m,borderRadius:u,titleHeight:f,blockRadius:C,paragraphLiHeight:O,controlHeightXS:S,paragraphMarginTop:k}=t;return{["".concat(e)]:{display:"table",width:"100%",["".concat(e,"-header")]:{display:"table-cell",paddingInlineEnd:b,verticalAlign:"top",["".concat(a)]:Object.assign({display:"inline-block",verticalAlign:"top",background:g},p(l)),["".concat(a,"-circle")]:{borderRadius:"50%"},["".concat(a,"-lg")]:Object.assign({},p(s)),["".concat(a,"-sm")]:Object.assign({},p(d))},["".concat(e,"-content")]:{display:"table-cell",width:"100%",verticalAlign:"top",["".concat(n)]:{width:"100%",height:f,background:g,borderRadius:C,["+ ".concat(c)]:{marginBlockStart:d}},["".concat(c)]:{padding:0,"> li":{width:"100%",height:O,listStyle:"none",background:g,borderRadius:C,"+ li":{marginBlockStart:S}}},["".concat(c,"> li:last-child:not(:first-child):not(:nth-child(2))")]:{width:"61%"}},["&-round ".concat(e,"-content")]:{["".concat(n,", ").concat(c," > li")]:{borderRadius:u}}},["".concat(e,"-with-avatar ").concat(e,"-content")]:{["".concat(n)]:{marginBlockStart:m,["+ ".concat(c)]:{marginBlockStart:k}}},["".concat(e).concat(e,"-element")]:Object.assign(Object.assign(Object.assign(Object.assign({display:"inline-block",width:"auto"},j(t)),v(t)),y(t)),x(t)),["".concat(e).concat(e,"-block")]:{width:"100%",["".concat(o)]:{width:"100%"},["".concat(i)]:{width:"100%"}},["".concat(e).concat(e,"-active")]:{["\n        ".concat(n,",\n        ").concat(c," > li,\n        ").concat(a,",\n        ").concat(o,",\n        ").concat(i,",\n        ").concat(r,"\n      ")]:Object.assign({},h(t))}}},w=(0,g.I$)("Skeleton",(t=>{const{componentCls:e,calc:a}=t,n=(0,b.TS)(t,{skeletonAvatarCls:"".concat(e,"-avatar"),skeletonTitleCls:"".concat(e,"-title"),skeletonParagraphCls:"".concat(e,"-paragraph"),skeletonButtonCls:"".concat(e,"-button"),skeletonInputCls:"".concat(e,"-input"),skeletonImageCls:"".concat(e,"-image"),imageSizeBase:a(t.controlHeight).mul(1.5).equal(),borderRadius:100,skeletonLoadingBackground:"linear-gradient(90deg, ".concat(t.gradientFromColor," 25%, ").concat(t.gradientToColor," 37%, ").concat(t.gradientFromColor," 63%)"),skeletonLoadingMotionDuration:"1.4s"});return[k(n)]}),(t=>{const{colorFillContent:e,colorFill:a}=t;return{color:e,colorGradientEnd:a,gradientFromColor:e,gradientToColor:a,titleHeight:t.controlHeight/2,blockRadius:t.borderRadiusSM,paragraphMarginTop:t.marginLG+t.marginXXS,paragraphLiHeight:t.controlHeight/2}}),{deprecatedTokens:[["color","gradientFromColor"],["colorGradientEnd","gradientToColor"]]}),E=t=>{const{prefixCls:e,className:a,rootClassName:c,active:l,shape:d="circle",size:g="default"}=t,{getPrefixCls:b}=n.useContext(r.E_),m=b("skeleton",e),[u,p,h]=w(m),f=(0,i.Z)(t,["prefixCls","className"]),v=o()(m,"".concat(m,"-element"),{["".concat(m,"-active")]:l},a,c,p,h);return u(n.createElement("div",{className:v},n.createElement(s,Object.assign({prefixCls:"".concat(m,"-avatar"),shape:d,size:g},f))))},N=t=>{const{prefixCls:e,className:a,rootClassName:c,active:l,block:d=!1,size:g="default"}=t,{getPrefixCls:b}=n.useContext(r.E_),m=b("skeleton",e),[u,p,h]=w(m),f=(0,i.Z)(t,["prefixCls"]),v=o()(m,"".concat(m,"-element"),{["".concat(m,"-active")]:l,["".concat(m,"-block")]:d},a,c,p,h);return u(n.createElement("div",{className:v},n.createElement(s,Object.assign({prefixCls:"".concat(m,"-button"),size:g},f))))},z=t=>{const{prefixCls:e,className:a,rootClassName:c,style:i,active:l}=t,{getPrefixCls:s}=n.useContext(r.E_),d=s("skeleton",e),[g,b,m]=w(d),u=o()(d,"".concat(d,"-element"),{["".concat(d,"-active")]:l},a,c,b,m);return g(n.createElement("div",{className:u},n.createElement("div",{className:o()("".concat(d,"-image"),a),style:i},n.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(d,"-image-svg")},n.createElement("path",{d:"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",className:"".concat(d,"-image-path")})))))},B=t=>{const{prefixCls:e,className:a,rootClassName:c,active:l,block:d,size:g="default"}=t,{getPrefixCls:b}=n.useContext(r.E_),m=b("skeleton",e),[u,p,h]=w(m),f=(0,i.Z)(t,["prefixCls"]),v=o()(m,"".concat(m,"-element"),{["".concat(m,"-active")]:l,["".concat(m,"-block")]:d},a,c,p,h);return u(n.createElement("div",{className:v},n.createElement(s,Object.assign({prefixCls:"".concat(m,"-input"),size:g},f))))};var H=a(7873);const R={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"};var M=a(7035),P=function(t,e){return n.createElement(M.Z,(0,H.Z)({},t,{ref:e,icon:R}))};const T=n.forwardRef(P),L=t=>{const{prefixCls:e,className:a,rootClassName:c,style:i,active:l,children:s}=t,{getPrefixCls:d}=n.useContext(r.E_),g=d("skeleton",e),[b,m,u]=w(g),p=o()(g,"".concat(g,"-element"),{["".concat(g,"-active")]:l},m,a,c,u),h=null!==s&&void 0!==s?s:n.createElement(T,null);return b(n.createElement("div",{className:p},n.createElement("div",{className:o()("".concat(g,"-image"),a),style:i},h)))};var I=a(5596);const q=t=>{const e=e=>{const{width:a,rows:n=2}=t;return Array.isArray(a)?a[e]:n-1===e?a:void 0},{prefixCls:a,className:c,style:i,rows:r}=t,l=(0,I.Z)(Array(r)).map(((t,a)=>n.createElement("li",{key:a,style:{width:e(a)}})));return n.createElement("ul",{className:o()(a,c),style:i},l)},G=t=>{let{prefixCls:e,className:a,width:c,style:i}=t;return n.createElement("h3",{className:o()(e,a),style:Object.assign({width:c},i)})};function W(t){return t&&"object"===typeof t?t:{}}const A=t=>{const{prefixCls:e,loading:a,className:c,rootClassName:i,style:l,children:d,avatar:g=!1,title:b=!0,paragraph:m=!0,active:u,round:p}=t,{getPrefixCls:h,direction:f,skeleton:v}=n.useContext(r.E_),y=h("skeleton",e),[C,x,O]=w(y);if(a||!("loading"in t)){const t=!!g,e=!!b,a=!!m;let r,d;if(t){const t=Object.assign(Object.assign({prefixCls:"".concat(y,"-avatar")},function(t,e){return t&&!e?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}(e,a)),W(g));r=n.createElement("div",{className:"".concat(y,"-header")},n.createElement(s,Object.assign({},t)))}if(e||a){let c,o;if(e){const e=Object.assign(Object.assign({prefixCls:"".concat(y,"-title")},function(t,e){return!t&&e?{width:"38%"}:t&&e?{width:"50%"}:{}}(t,a)),W(b));c=n.createElement(G,Object.assign({},e))}if(a){const a=Object.assign(Object.assign({prefixCls:"".concat(y,"-paragraph")},function(t,e){const a={};return t&&e||(a.width="61%"),a.rows=!t&&e?3:2,a}(t,e)),W(m));o=n.createElement(q,Object.assign({},a))}d=n.createElement("div",{className:"".concat(y,"-content")},c,o)}const h=o()(y,{["".concat(y,"-with-avatar")]:t,["".concat(y,"-active")]:u,["".concat(y,"-rtl")]:"rtl"===f,["".concat(y,"-round")]:p},null===v||void 0===v?void 0:v.className,c,i,x,O);return C(n.createElement("div",{className:h,style:Object.assign(Object.assign({},null===v||void 0===v?void 0:v.style),l)},r,d))}return"undefined"!==typeof d?d:null};A.Button=N,A.Avatar=E,A.Input=B,A.Image=z,A.Node=L;const F=A;var D=a(9552),_=function(t,e){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(t);c<n.length;c++)e.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(t,n[c])&&(a[n[c]]=t[n[c]])}return a};const Z=t=>{var{prefixCls:e,className:a,hoverable:c=!0}=t,i=_(t,["prefixCls","className","hoverable"]);const{getPrefixCls:l}=n.useContext(r.E_),s=l("card",e),d=o()("".concat(s,"-grid"),a,{["".concat(s,"-grid-hoverable")]:c});return n.createElement("div",Object.assign({},i,{className:d}))};var X=a(9587);const K=t=>{const{antCls:e,componentCls:a,headerHeight:n,cardPaddingBase:c,tabsMarginBottom:o}=t;return Object.assign(Object.assign({display:"flex",justifyContent:"center",flexDirection:"column",minHeight:n,marginBottom:-1,padding:"0 ".concat((0,d.bf)(c)),color:t.colorTextHeading,fontWeight:t.fontWeightStrong,fontSize:t.headerFontSize,background:t.headerBg,borderBottom:"".concat((0,d.bf)(t.lineWidth)," ").concat(t.lineType," ").concat(t.colorBorderSecondary),borderRadius:"".concat((0,d.bf)(t.borderRadiusLG)," ").concat((0,d.bf)(t.borderRadiusLG)," 0 0")},(0,X.dF)()),{"&-wrapper":{width:"100%",display:"flex",alignItems:"center"},"&-title":Object.assign(Object.assign({display:"inline-block",flex:1},X.vS),{["\n          > ".concat(a,"-typography,\n          > ").concat(a,"-typography-edit-content\n        ")]:{insetInlineStart:0,marginTop:0,marginBottom:0}}),["".concat(e,"-tabs-top")]:{clear:"both",marginBottom:o,color:t.colorText,fontWeight:"normal",fontSize:t.fontSize,"&-bar":{borderBottom:"".concat((0,d.bf)(t.lineWidth)," ").concat(t.lineType," ").concat(t.colorBorderSecondary)}}})},$=t=>{const{cardPaddingBase:e,colorBorderSecondary:a,cardShadow:n,lineWidth:c}=t;return{width:"33.33%",padding:e,border:0,borderRadius:0,boxShadow:"\n      ".concat((0,d.bf)(c)," 0 0 0 ").concat(a,",\n      0 ").concat((0,d.bf)(c)," 0 0 ").concat(a,",\n      ").concat((0,d.bf)(c)," ").concat((0,d.bf)(c)," 0 0 ").concat(a,",\n      ").concat((0,d.bf)(c)," 0 0 0 ").concat(a," inset,\n      0 ").concat((0,d.bf)(c)," 0 0 ").concat(a," inset;\n    "),transition:"all ".concat(t.motionDurationMid),"&-hoverable:hover":{position:"relative",zIndex:1,boxShadow:n}}},V=t=>{const{componentCls:e,iconCls:a,actionsLiMargin:n,cardActionsIconSize:c,colorBorderSecondary:o,actionsBg:i}=t;return Object.assign(Object.assign({margin:0,padding:0,listStyle:"none",background:i,borderTop:"".concat((0,d.bf)(t.lineWidth)," ").concat(t.lineType," ").concat(o),display:"flex",borderRadius:"0 0 ".concat((0,d.bf)(t.borderRadiusLG)," ").concat((0,d.bf)(t.borderRadiusLG))},(0,X.dF)()),{"& > li":{margin:n,color:t.colorTextDescription,textAlign:"center","> span":{position:"relative",display:"block",minWidth:t.calc(t.cardActionsIconSize).mul(2).equal(),fontSize:t.fontSize,lineHeight:t.lineHeight,cursor:"pointer","&:hover":{color:t.colorPrimary,transition:"color ".concat(t.motionDurationMid)},["a:not(".concat(e,"-btn), > ").concat(a)]:{display:"inline-block",width:"100%",color:t.colorTextDescription,lineHeight:(0,d.bf)(t.fontHeight),transition:"color ".concat(t.motionDurationMid),"&:hover":{color:t.colorPrimary}},["> ".concat(a)]:{fontSize:c,lineHeight:(0,d.bf)(t.calc(c).mul(t.lineHeight).equal())}},"&:not(:last-child)":{borderInlineEnd:"".concat((0,d.bf)(t.lineWidth)," ").concat(t.lineType," ").concat(o)}}})},J=t=>Object.assign(Object.assign({margin:"".concat((0,d.bf)(t.calc(t.marginXXS).mul(-1).equal())," 0"),display:"flex"},(0,X.dF)()),{"&-avatar":{paddingInlineEnd:t.padding},"&-detail":{overflow:"hidden",flex:1,"> div:not(:last-child)":{marginBottom:t.marginXS}},"&-title":Object.assign({color:t.colorTextHeading,fontWeight:t.fontWeightStrong,fontSize:t.fontSizeLG},X.vS),"&-description":{color:t.colorTextDescription}}),Q=t=>{const{componentCls:e,cardPaddingBase:a,colorFillAlter:n}=t;return{["".concat(e,"-head")]:{padding:"0 ".concat((0,d.bf)(a)),background:n,"&-title":{fontSize:t.fontSize}},["".concat(e,"-body")]:{padding:"".concat((0,d.bf)(t.padding)," ").concat((0,d.bf)(a))}}},U=t=>{const{componentCls:e}=t;return{overflow:"hidden",["".concat(e,"-body")]:{userSelect:"none"}}},Y=t=>{const{antCls:e,componentCls:a,cardShadow:n,cardHeadPadding:c,colorBorderSecondary:o,boxShadowTertiary:i,cardPaddingBase:r,extraColor:l}=t;return{[a]:Object.assign(Object.assign({},(0,X.Wf)(t)),{position:"relative",background:t.colorBgContainer,borderRadius:t.borderRadiusLG,["&:not(".concat(a,"-bordered)")]:{boxShadow:i},["".concat(a,"-head")]:K(t),["".concat(a,"-extra")]:{marginInlineStart:"auto",color:l,fontWeight:"normal",fontSize:t.fontSize},["".concat(a,"-body")]:Object.assign({padding:r,borderRadius:" 0 0 ".concat((0,d.bf)(t.borderRadiusLG)," ").concat((0,d.bf)(t.borderRadiusLG))},(0,X.dF)()),["".concat(a,"-grid")]:$(t),["".concat(a,"-cover")]:{"> *":{display:"block",width:"100%"},["img, img + ".concat(e,"-image-mask")]:{borderRadius:"".concat((0,d.bf)(t.borderRadiusLG)," ").concat((0,d.bf)(t.borderRadiusLG)," 0 0")}},["".concat(a,"-actions")]:V(t),["".concat(a,"-meta")]:J(t)}),["".concat(a,"-bordered")]:{border:"".concat((0,d.bf)(t.lineWidth)," ").concat(t.lineType," ").concat(o),["".concat(a,"-cover")]:{marginTop:-1,marginInlineStart:-1,marginInlineEnd:-1}},["".concat(a,"-hoverable")]:{cursor:"pointer",transition:"box-shadow ".concat(t.motionDurationMid,", border-color ").concat(t.motionDurationMid),"&:hover":{borderColor:"transparent",boxShadow:n}},["".concat(a,"-contain-grid")]:{borderRadius:"".concat((0,d.bf)(t.borderRadiusLG)," ").concat((0,d.bf)(t.borderRadiusLG)," 0 0 "),["".concat(a,"-body")]:{display:"flex",flexWrap:"wrap"},["&:not(".concat(a,"-loading) ").concat(a,"-body")]:{marginBlockStart:t.calc(t.lineWidth).mul(-1).equal(),marginInlineStart:t.calc(t.lineWidth).mul(-1).equal(),padding:0}},["".concat(a,"-contain-tabs")]:{["> ".concat(a,"-head")]:{minHeight:0,["".concat(a,"-head-title, ").concat(a,"-extra")]:{paddingTop:c}}},["".concat(a,"-type-inner")]:Q(t),["".concat(a,"-loading")]:U(t),["".concat(a,"-rtl")]:{direction:"rtl"}}},tt=t=>{const{componentCls:e,cardPaddingSM:a,headerHeightSM:n,headerFontSizeSM:c}=t;return{["".concat(e,"-small")]:{["> ".concat(e,"-head")]:{minHeight:n,padding:"0 ".concat((0,d.bf)(a)),fontSize:c,["> ".concat(e,"-head-wrapper")]:{["> ".concat(e,"-extra")]:{fontSize:t.fontSize}}},["> ".concat(e,"-body")]:{padding:a}},["".concat(e,"-small").concat(e,"-contain-tabs")]:{["> ".concat(e,"-head")]:{["".concat(e,"-head-title, ").concat(e,"-extra")]:{paddingTop:0,display:"flex",alignItems:"center"}}}}},et=(0,g.I$)("Card",(t=>{const e=(0,b.TS)(t,{cardShadow:t.boxShadowCard,cardHeadPadding:t.padding,cardPaddingBase:t.paddingLG,cardActionsIconSize:t.fontSize,cardPaddingSM:12});return[Y(e),tt(e)]}),(t=>({headerBg:"transparent",headerFontSize:t.fontSizeLG,headerFontSizeSM:t.fontSize,headerHeight:t.fontSizeLG*t.lineHeightLG+2*t.padding,headerHeightSM:t.fontSize*t.lineHeight+2*t.paddingXS,actionsBg:t.colorBgContainer,actionsLiMargin:"".concat(t.paddingSM,"px 0"),tabsMarginBottom:-t.padding-t.lineWidth,extraColor:t.colorText})));var at=function(t,e){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(t);c<n.length;c++)e.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(t,n[c])&&(a[n[c]]=t[n[c]])}return a};const nt=t=>{const{prefixCls:e,actions:a=[]}=t;return n.createElement("ul",{className:"".concat(e,"-actions")},a.map(((t,e)=>{const c="action-".concat(e);return n.createElement("li",{style:{width:"".concat(100/a.length,"%")},key:c},n.createElement("span",null,t))})))},ct=n.forwardRef(((t,e)=>{const{prefixCls:a,className:c,rootClassName:s,style:d,extra:g,headStyle:b={},bodyStyle:m={},title:u,loading:p,bordered:h=!0,size:f,type:v,cover:y,actions:C,tabList:x,children:O,activeTabKey:S,defaultActiveTabKey:j,tabBarExtraContent:k,hoverable:w,tabProps:E={}}=t,N=at(t,["prefixCls","className","rootClassName","style","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),{getPrefixCls:z,direction:B,card:H}=n.useContext(r.E_),R=n.useMemo((()=>{let t=!1;return n.Children.forEach(O,(e=>{e&&e.type&&e.type===Z&&(t=!0)})),t}),[O]),M=z("card",a),[P,T,L]=et(M),I=n.createElement(F,{loading:!0,active:!0,paragraph:{rows:4},title:!1},O),q=void 0!==S,G=Object.assign(Object.assign({},E),{[q?"activeKey":"defaultActiveKey"]:q?S:j,tabBarExtraContent:k});let W;const A=(0,l.Z)(f),_=A&&"default"!==A?A:"large",X=x?n.createElement(D.Z,Object.assign({size:_},G,{className:"".concat(M,"-head-tabs"),onChange:e=>{var a;null===(a=t.onTabChange)||void 0===a||a.call(t,e)},items:x.map((t=>{var{tab:e}=t,a=at(t,["tab"]);return Object.assign({label:e},a)}))})):null;(u||g||X)&&(W=n.createElement("div",{className:"".concat(M,"-head"),style:b},n.createElement("div",{className:"".concat(M,"-head-wrapper")},u&&n.createElement("div",{className:"".concat(M,"-head-title")},u),g&&n.createElement("div",{className:"".concat(M,"-extra")},g)),X));const K=y?n.createElement("div",{className:"".concat(M,"-cover")},y):null,$=n.createElement("div",{className:"".concat(M,"-body"),style:m},p?I:O),V=C&&C.length?n.createElement(nt,{prefixCls:M,actions:C}):null,J=(0,i.Z)(N,["onTabChange"]),Q=o()(M,null===H||void 0===H?void 0:H.className,{["".concat(M,"-loading")]:p,["".concat(M,"-bordered")]:h,["".concat(M,"-hoverable")]:w,["".concat(M,"-contain-grid")]:R,["".concat(M,"-contain-tabs")]:x&&x.length,["".concat(M,"-").concat(A)]:A,["".concat(M,"-type-").concat(v)]:!!v,["".concat(M,"-rtl")]:"rtl"===B},c,s,T,L),U=Object.assign(Object.assign({},null===H||void 0===H?void 0:H.style),d);return P(n.createElement("div",Object.assign({ref:e},J,{className:Q,style:U}),W,K,$,V))}));var ot=function(t,e){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(t);c<n.length;c++)e.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(t,n[c])&&(a[n[c]]=t[n[c]])}return a};const it=t=>{const{prefixCls:e,className:a,avatar:c,title:i,description:l}=t,s=ot(t,["prefixCls","className","avatar","title","description"]),{getPrefixCls:d}=n.useContext(r.E_),g=d("card",e),b=o()("".concat(g,"-meta"),a),m=c?n.createElement("div",{className:"".concat(g,"-meta-avatar")},c):null,u=i?n.createElement("div",{className:"".concat(g,"-meta-title")},i):null,p=l?n.createElement("div",{className:"".concat(g,"-meta-description")},l):null,h=u||p?n.createElement("div",{className:"".concat(g,"-meta-detail")},u,p):null;return n.createElement("div",Object.assign({},s,{className:b}),m,h)},rt=ct;rt.Grid=Z,rt.Meta=it;const lt=rt}}]);