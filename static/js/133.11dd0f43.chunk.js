"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[133],{1133:function(e,n,r){r.r(n),r.d(n,{default:function(){return z}});var t,i=r(2791),a=r(9434),o=r(8178),d=function(e){return e.contacts.items},c=r(5861),s=r(7757),l=r.n(s),u=r(5705),p=r(6727),x=r(184),m={maxWidth:"300px",margin:"0 auto",padding:"20px",border:"1px solid #ccc",borderRadius:"5px",display:"flex",flexDirection:"column"},f={margin:"5px 0",padding:"10px",border:"1px solid #ccc",borderRadius:"5px",fontSize:"16px"},b={backgroundColor:"#ff5733",color:"white",border:"none",borderRadius:"5px",padding:"10px",cursor:"pointer",fontSize:"16px"},h=p.Ry({name:p.Z_().matches(/^[A-Za-z\s]+$/,"Name is not valid").required("Name is required"),number:p.Z_().matches(/^\d+$/,"Number is not valid").required("Number is required")}),g=function(){var e=(0,a.I0)(),n=function(){var n=(0,c.Z)(l().mark((function n(r){var t,i;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=r.name,i=r.number,!t||!i){n.next=12;break}return n.prev=2,n.next=5,e((0,o.ky)({name:t,number:i}));case 5:n.next=10;break;case 7:n.prev=7,n.t0=n.catch(2),alert("An error occurred while adding the contact.");case 10:n.next=13;break;case 12:alert("Enter a valid Name and Number.");case 13:case"end":return n.stop()}}),n,null,[[2,7]])})));return function(e){return n.apply(this,arguments)}}();return(0,x.jsx)(u.J9,{initialValues:{name:"",number:""},validationSchema:h,onSubmit:n,children:(0,x.jsxs)(u.l0,{style:m,children:[(0,x.jsx)(u.gN,{style:f,type:"text",name:"name",placeholder:"Name"}),(0,x.jsx)(u.Bc,{name:"name",component:"div",style:{color:"red"}}),(0,x.jsx)(u.gN,{style:f,type:"text",name:"number",placeholder:"Number"}),(0,x.jsx)(u.Bc,{name:"number",component:"div",style:{color:"red"}}),(0,x.jsx)("button",{style:b,type:"submit",children:"Add Contact"})]})})},j={listStyleType:"none",padding:0,maxWidth:"400px",margin:"0 auto"},v={display:"flex",justifyContent:"space-between",alignItems:"center",background:"#f5f5f5",padding:"10px",border:"1px solid #ddd",borderRadius:"5px",marginBottom:"10px"},y={backgroundColor:"#ff5733",color:"white",border:"none",borderRadius:"5px",padding:"5px 10px",cursor:"pointer"},k=function(){var e=(0,a.v9)(d),n=(0,a.I0)();return(0,x.jsx)("ul",{style:j,children:e.map((function(e){var r=e.id,t=e.name,i=e.number;return(0,x.jsxs)("li",{style:v,children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{style:{fontWeight:"bold"},children:t}),(0,x.jsx)("p",{children:i})]}),(0,x.jsx)("button",{onClick:function(){return function(e){n((0,o.zY)(e))}(r)},style:y,children:"Delete"})]},r)}))})},w=r(168),N=r(5867).ZP.div(t||(t=(0,w.Z)(["\n    display: flex;\n    align-items: center;\n    margin-bottom: 20px;\n\n  label {\n    font-size: 16px;\n    margin-right:10px;\n    align-items:center;\n  }\n\n\n  input {\n    padding:10px;\n    border: 1px solid #ddd;\n    border-radius: 3px;\n    font-size:16px;\n    flex-grow:1;\n  } \n"]))),C=function(){var e=(0,a.v9)((function(e){return e.contacts.filter})),n=(0,a.I0)();return(0,x.jsxs)(N,{children:[(0,x.jsx)("label",{children:"Filter contacts by name:"}),(0,x.jsx)("input",{type:"text",value:e,onChange:function(e){var r=e.target.value;n(r.filter)},placeholder:"Enter name to filter"})]})};function z(){var e=(0,a.v9)(d),n=(0,a.I0)();return(0,i.useEffect)((function(){n((0,o.XQ)())}),[n]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{children:(0,x.jsx)("title",{children:"Your contacts"})}),(0,x.jsx)(C,{}),(0,x.jsx)(g,{}),(0,x.jsx)(k,{}),(0,x.jsx)("ul",{children:e.map((function(e){var n=e.id,r=e.name,t=e.number;return(0,x.jsxs)("li",{children:[(0,x.jsx)("p",{children:r}),(0,x.jsx)("p",{children:t})]},n)}))})]})}}}]);
//# sourceMappingURL=133.11dd0f43.chunk.js.map