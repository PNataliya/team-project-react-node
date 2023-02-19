"use strict";(self.webpackChunkteam_project_react_petly=self.webpackChunkteam_project_react_petly||[]).push([[77],{3077:function(n,e,t){t.r(e),t.d(e,{default:function(){return Fn}});var r,i,o=t(9439),a=t(2791),c=t(9434),s=t(9273),d=t(2797),l=d.Ry().shape({email:d.Z_().required("Email is required").matches(/^[^-._]{1}[A-Za-z0-9._-]{1,}@[^-._]{1}[A-Za-z0-9.-]{0,}\.[A-Za-z]{2,4}$/,"Email must contain @ Example: yourmail@mail.com").email(),password:d.Z_().matches(/^[^ ]{7,32}$/,"Any letters and symbols except spaces. min 7 characters max 32").max(32,"Must be 15 characters or less").min(7,"Must be at least 7 characters").required("Password is required"),confirm_password:d.Z_().when("password",{is:function(n){return!!(n&&n.length>0)},then:d.Z_().oneOf([d.iH("password")],"Both password need to be the same. Please, \u0441onfirm  Password")})}),m=d.Ry().shape({name:d.Z_().matches(/^[a-zA-z\u0430-\u044f\u0456\u0457\u0454\u0410-\u042f\u0406\u0407\u0404 ]+$/,"Name may contain any letters. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required("Name is required"),location:d.Z_().matches(/^[a-zA-Z]+[,][ ][a-zA-Z]+$/,"The location must consist of two words separated by a comma, for example: Kyiv, Kyiv").required("Location is required"),phone:d.Z_().matches(/^[+]{1}[0-9]{12}$/,"The phone number must be in the format +380123456789").required("Phone number is required")}),u=t(9085),h=(t(5462),t(1413)),p=t(5705),x=t(168),f=t(6088),g=(0,f.Z)(p.gN)(r||(r=(0,x.Z)(["\n  width: 100%;\n  height: 40px;\n  padding: 0 14px;\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  letter-spacing: ",";\n  color: ",";\n  background-color: ",";\n  border: ",";\n  border-color: ",";\n  border-radius: ",";\n  outline: none;\n\n  transition-property: border-color;\n  transition-duration: 0.3s;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n  @media screen and (min-width: 768px) {\n    padding: 0 32px;\n    font-size: ",";\n    line-height: ",";\n    height: 52px;\n  }\n\n  &:hover,\n  &:focus {\n    border: ",";\n    border-color: ",";\n    transition: border-color 300ms cubic-bezier(0.4, 0, 0.2, 1);\n    ::placeholder {\n      color: ",";\n    }\n  }\n  &::placeholder {\n    font-weight: ",";\n    font-size: ",";\n    line-height: ",";\n    letter-spacing: ",";\n    color: ",";\n    @media screen and (min-width: 768px) {\n      font-size: ",";\n      line-height: ",";\n    }\n  }\n\n  &:focus {\n    ::placeholder {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.fontSizes.xxs}),(function(n){return n.theme.lineHeights.normal}),(function(n){return n.theme.letterSpacings.normal}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.colors.inputAuthForm}),(function(n){return n.theme.radii.big}),(function(n){return n.theme.fontSizes.ms}),(function(n){return n.theme.lineHeights.max}),(function(n){return n.theme.borders.medium}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.fontSizes.xxs}),(function(n){return n.theme.lineHeights.normal}),(function(n){return n.theme.letterSpacings.normal}),(function(n){return n.theme.colors.muted}),(function(n){return n.theme.fontSizes.ms}),(function(n){return n.theme.lineHeights.max}),(function(n){return n.theme.colors.white})),b=f.Z.span(i||(i=(0,x.Z)(["\n  position: absolute;\n  bottom: -15px;\n  left: 32px;\n  margin: 0px;\n  font-size: 10px;\n  line-height: calc(1.5);\n  color: red;\n\n  /* position: absolute;\n  width: 100%;\n  bottom: -16px;\n  font-size: 10px;\n  color: #8b0000; */\n"]))),w=t(3329);function Z(n){var e=(0,p.U$)(n),t=(0,o.Z)(e,2),r=t[0],i=t[1];return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(g,(0,h.Z)((0,h.Z)({},r),n)),i.error&&i.touched&&(0,w.jsx)(b,{children:i.error})]})}var y,j,v,z,k,S,_,A,C,q,F=t(5984),H=t(5861),W=t(4687),N=t.n(W),P=(0,f.Z)(p.l0)(y||(y=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n"]))),B=(f.Z.img(j||(j=(0,x.Z)(["\n  position: relative;\n  bottom: 0px;\n\n  max-width: 100%;\n  height: auto;\n"]))),t(1087)),$=f.Z.div(v||(v=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n"]))),L=f.Z.button(z||(z=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 44px;\n  padding: 8px 37px;\n  width: 100%;\n\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  letter-spacing: ",";\n  color: ",";\n\n  border: ",";\n  border-color: ",";\n  border-radius: ",";\n\n  cursor: pointer;\n  transition: border-color 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    color: ",";\n    background-color: ",";\n    transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);\n    /* border: ",";\n    border-color: ","; */\n  }\n  @media (min-width: 768px) {\n    padding: 10px 28px;\n    height: 48px;\n  }\n"])),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.lineHeights.normal}),(function(n){return n.theme.letterSpacings.normal}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.borders.medium}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.radii.big}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.borders.medium}),(function(n){return n.theme.colors.focus})),M=f.Z.button(k||(k=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 100%;\n  height: 44px;\n  padding: 8px 37px;\n\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  letter-spacing: ",";\n  color: ",";\n  background-color: ",";\n  border: none;\n  border-radius: ",";\n\n  cursor: pointer;\n  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n\n  @media (min-width: 768px) {\n    padding: 10px 28px;\n    height: 48px;\n  }\n"])),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.lineHeights.normal}),(function(n){return n.theme.letterSpacings.normal}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.radii.big}),(function(n){return n.theme.colors.focus})),R=f.Z.div(S||(S=(0,x.Z)(["\n  display: flex;\n  margin-top: 40px;\n"]))),T=f.Z.p(_||(_=(0,x.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n  letter-spacing: ",";\n  margin: 0;\n  color: ",";\n"])),(function(n){return n.theme.fontSizes.xxxs}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.lineHeights.min}),(function(n){return n.theme.letterSpacings.normal}),(function(n){return n.theme.colors.muted})),E=(0,f.Z)(B.OL)(A||(A=(0,x.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n  letter-spacing: ",";\n  margin-left: 5px;\n  text-decoration-line: underline;\n  color: ",";\n"])),(function(n){return n.theme.fontSizes.xxxs}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.lineHeights.min}),(function(n){return n.theme.letterSpacings.normal}),(function(n){return n.theme.colors.secondary})),K=f.Z.div(C||(C=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  @media screen and (min-width: 498px) {\n    width: 458px;\n  }\n"]))),V=f.Z.div(q||(q=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 12px;\n  width: 100%;\n  @media screen and (min-width: 498px) {\n    width: 458px;\n  }\n"])));function J(n){return(0,w.jsxs)($,{children:[(0,w.jsx)(K,{children:(0,w.jsx)(M,{type:"submit",name:"register",children:n.isLastStep?"Register":"Next"})}),(0,w.jsx)(V,{children:n.hasPrevious&&(0,w.jsx)(L,{type:"button",name:"back",onClick:n.onBackClick,children:"Back"})}),(0,w.jsx)(R,{children:(0,w.jsxs)(T,{children:["Already have an account?",(0,w.jsx)(E,{to:"/login",children:"Login"})]})})]})}function U(n){var e=n.children,t=n.initialValues,r=n.onSubmit,i=(0,a.useState)(0),c=(0,o.Z)(i,2),s=c[0],d=c[1],l=a.Children.toArray(e),m=(0,a.useState)(t),u=(0,o.Z)(m,2),h=u[0],x=u[1],f=l[s],g=l.length,b=s===g-1,Z=function(n){x(n),d(s+1)},y=function(){var n=(0,H.Z)(N().mark((function n(e,t){return N().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!f.props.onSubmit){n.next=3;break}return n.next=3,f.props.onSubmit(e);case 3:if(!b){n.next=7;break}return n.abrupt("return",r(e,t));case 7:t.setTouched({}),Z(e);case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(p.J9,{initialValues:h,onSubmit:y,validationSchema:f.props.validationSchema,children:function(n){return(0,w.jsxs)(P,{onSubmit:n.handleSubmit,children:[f,(0,w.jsx)(J,{isLastStep:b,hasPrevious:s>0,onBackClick:function(){return e=n.values,x(e),void d(s-1);var e}})]})}})})}var I,O,D,G,Q,X,Y,nn,en,tn,rn,on,an=function(n){n.stepName;return n.children},cn=t(1213),sn=f.Z.div(I||(I=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  margin: 0 auto;\n\n  @media screen and (max-width: 319px) {\n    padding: 0 10px;\n  }\n  @media screen and (min-width: 320px) {\n    padding: 0 20px;\n  }\n  @media screen and (min-width: 768px) {\n    width: 608px;\n    margin: 0 auto;\n    padding-top: 60px;\n    padding-right: 80px;\n    padding-left: 80px;\n    padding-bottom: 40px;\n    background-color: ",";\n    box-shadow: ",";\n    border-radius: 40px;\n  }\n  @media screen and (min-width: 1280px) {\n    margin: 0 auto;\n    padding: 60px 80px;\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.shadows.form})),dn=function(n){var e=n.children;return(0,w.jsx)(sn,{children:e})},ln=f.Z.h2(O||(O=(0,x.Z)(["\n  margin: 0;\n  margin-bottom: 40px;\n  font-family: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n  letter-spacing: ",";\n  color: ",";\n  @media screen and (min-width: 768px) {\n    font-size: ",";\n    line-height: ",";\n    font-weight: ",";\n  }\n"])),(function(n){return n.theme.fonts.body}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.lineHeights.max}),(function(n){return n.theme.letterSpacings.normal}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.fontSizes.xl}),(function(n){return n.theme.lineHeights.max}),(function(n){return n.theme.fontWeights.medium})),mn=((0,f.Z)(p.l0)(D||(D=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  @media screen and (min-width: 320px) {\n    width: 320px;\n  }\n  @media screen and (max-width: 767px) {\n    max-width: 448px;\n  }\n  @media screen and (min-width: 1280) {\n    width: 458px;\n  }\n"]))),f.Z.label(G||(G=(0,x.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n  width: 100%;\n\n  @media screen and (max-width: 767px) {\n    max-width: 448px;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 458px;\n  }\n"])))),un=f.Z.label(Q||(Q=(0,x.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n  width: 100%;\n\n  @media screen and (max-width: 767px) {\n    max-width: 448px;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 458px;\n  }\n"]))),hn=f.Z.label(X||(X=(0,x.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 40px;\n  width: 100%;\n\n  @media screen and (max-width: 767px) {\n    max-width: 448px;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 458px;\n  }\n"]))),pn=f.Z.label(Y||(Y=(0,x.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 28px;\n  width: 100%;\n\n  @media screen and (max-width: 767px) {\n    max-width: 448px;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 458px;\n  }\n"]))),xn=(f.Z.div(nn||(nn=(0,x.Z)(["\n  display: flex;\n"]))),f.Z.p(en||(en=(0,x.Z)(["\n  font-size: ",";\n  font-weight: ",";\n\n  color: ",";\n"])),(function(n){return n.theme.fontSizes.xxxs}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.colors.muted})),f.Z.span(tn||(tn=(0,x.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  margin-left: 5px;\n  margin-bottom: 5px;\n  color: ",";\n"])),(function(n){return n.theme.fontSizes.xxxs}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.colors.secondary})),f.Z.button(rn||(rn=(0,x.Z)(["\n  position: absolute;\n  top: 3px;\n  right: 9px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 35px;\n  height: 35px;\n  padding: 5px;\n\n  border: none;\n  border-radius: ",";\n  background-color: ",";\n\n  cursor: pointer;\n  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  @media screen and (min-width: 768px) {\n    top: 8px;\n    right: 22px;\n  }\n\n  svg {\n    width: 16px;\n    height: 16px;\n    @media screen and (min-width: 768px) {\n      width: 25px;\n      height: 25px;\n    }\n  }\n\n  &:hover *,\n  &:focus * {\n    fill: ",";\n  }\n"])),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.primary}))),fn=f.Z.button(on||(on=(0,x.Z)(["\n  position: absolute;\n  top: 3px;\n  right: 9px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 35px;\n  height: 35px;\n  padding: 5px;\n\n  border: none;\n  border-radius: ",";\n  background-color: ",";\n\n  cursor: pointer;\n  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  @media screen and (min-width: 768px) {\n    top: 8px;\n    right: 22px;\n  }\n\n  svg {\n    width: 16px;\n    height: 16px;\n    @media screen and (min-width: 768px) {\n      width: 25px;\n      height: 25px;\n    }\n  }\n\n  &:hover *,\n  &:focus * {\n    fill: ",";\n  }\n"])),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.primary})),gn=(0,F.x0)(),bn=(0,F.x0)(),wn=(0,F.x0)(),Zn=(0,F.x0)(),yn=(0,F.x0)(),jn={email:"",password:"",confirm_password:"",name:"",location:"",phone:""};function vn(){var n=(0,a.useState)("password"),e=(0,o.Z)(n,2),t=e[0],r=e[1],i=(0,a.useState)("password"),d=(0,o.Z)(i,2),h=d[0],p=d[1],x=(0,c.I0)();return(0,w.jsxs)(dn,{children:[(0,w.jsx)(ln,{children:"Registration"}),(0,w.jsxs)(U,{initialValues:jn,onSubmit:function(n,e,t){var r=e.resetForm,i=n.email,o=n.password,a=n.confirm_password,c=n.name,d=n.location,l=n.phone;if(o===a)x((0,s.z2)({email:i,password:o,name:c,location:d,phone:l}));else if(t)return;r()},children:[(0,w.jsxs)(an,{stepName:"Person",validationSchema:l,children:[(0,w.jsx)(mn,{htmlFor:gn,children:(0,w.jsx)(Z,{autoComplete:"off",type:"text",name:"email",placeholder:"Email"})}),(0,w.jsxs)(un,{htmlFor:bn,children:[(0,w.jsx)(Z,{type:t,name:"password",placeholder:"Password"}),(0,w.jsx)(xn,{type:"button",onClick:function(){r("password"!==t?"password":"text")},children:"password"===t?(0,w.jsx)(cn.hdl,{style:{color:"rgba(17, 17, 17, 0.6)"}}):(0,w.jsx)(cn.xs2,{style:{color:"rgba(17, 17, 17, 0.6)"}})})]}),(0,w.jsxs)(hn,{children:[(0,w.jsx)(Z,{type:h,name:"confirm_password",placeholder:"Confirm Password"}),(0,w.jsx)(fn,{type:"button",onClick:function(){p("password"!==h?"password":"text")},children:"password"===h?(0,w.jsx)(cn.hdl,{style:{color:"rgba(17, 17, 17, 0.6)"}}):(0,w.jsx)(cn.xs2,{style:{color:"rgba(17, 17, 17, 0.6)"}})})]})]}),(0,w.jsxs)(an,{stepName:"Address",validationSchema:m,children:[(0,w.jsx)(mn,{htmlFor:wn,children:(0,w.jsx)(Z,{type:"text",name:"name",placeholder:"Name",title:"Name may contain any letters. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})}),(0,w.jsx)(mn,{htmlFor:Zn,children:(0,w.jsx)(Z,{type:"text",name:"location",placeholder:"City, region",title:"The location must consist of two words separated by a comma, for example: Kyiv, Kyiv"})}),(0,w.jsx)(pn,{htmlFor:yn,children:(0,w.jsx)(Z,{type:"text",name:"phone",placeholder:"Mobile phone",title:"The phone number must be in the format +380123456789"})})]})]}),(0,w.jsx)(u.Ix,{})]})}var zn,kn,Sn=t(5778),_n=t(9782),An=t(3365),Cn=f.Z.main(zn||(zn=(0,x.Z)(["\n  min-height: calc(100vh - 100px);\n"]))),qn=f.Z.section(kn||(kn=(0,x.Z)(["\n  min-height: 100vh;\n  background-repeat: no-repeat;\n  background-image: url(",");\n  background-position: center bottom;\n  background-size: contain;\n  background-color: ",";\n  margin: 0 auto;\n  padding: 100px 0;\n\n  @media screen and (min-width: 768px) {\n    padding-top: 169px;\n    padding-bottom: 266px;\n    background-image: url(",");\n  }\n  @media screen and (min-width: 1280px) {\n    padding-top: 114px;\n    padding-bottom: 113px;\n    background-image: url(",");\n  }\n"])),An,(function(n){return n.theme.colors.background}),_n,Sn),Fn=function(){return(0,w.jsx)(Cn,{children:(0,w.jsx)(qn,{children:(0,w.jsx)(vn,{})})})}},5462:function(){},5984:function(n,e,t){t.d(e,{x0:function(){return r}});var r=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=77.fb3ef500.chunk.js.map