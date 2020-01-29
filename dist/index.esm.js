import e from"react";import t,{css as r,keyframes as o,ThemeProvider as a}from"styled-components";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function s(e,t){return e(t={exports:{}},t.exports),t.exports}var l=s(function(e){!function(){var t={}.hasOwnProperty;function r(){for(var e=[],o=0;o<arguments.length;o++){var a=arguments[o];if(a){var n=typeof a;if("string"===n||"number"===n)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===n)for(var s in a)t.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r}()}),d=s(function(e,t){e.exports=function(){var e=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var r=Object.prototype.toString.call(e);return"[object RegExp]"===r||"[object Date]"===r||function(e){return e.$$typeof===t}(e)}(e)},t="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function r(e,t){return!1!==t.clone&&t.isMergeableObject(e)?i((r=e,Array.isArray(r)?[]:{}),e,t):e;var r}function o(e,t,o){return e.concat(t).map(function(e){return r(e,o)})}function a(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return e.propertyIsEnumerable(t)}):[]}(e))}function n(e,t,o){var n={};return o.isMergeableObject(e)&&a(e).forEach(function(t){n[t]=r(e[t],o)}),a(t).forEach(function(a){o.isMergeableObject(t[a])&&e[a]?n[a]=function(e,t){if(!t.customMerge)return i;var r=t.customMerge(e);return"function"==typeof r?r:i}(a,o)(e[a],t[a],o):n[a]=r(t[a],o)}),n}function i(t,a,i){(i=i||{}).arrayMerge=i.arrayMerge||o,i.isMergeableObject=i.isMergeableObject||e;var s=Array.isArray(a),l=Array.isArray(t),d=s===l;return d?s?i.arrayMerge(t,a,i):n(t,a,i):r(a,i)}return i.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(e,r){return i(e,r,t)},{})},i}()}),c={"checkbox.option":"Send url with feedback",close:"close","error.archived":"Channel is Archived!","error.badrequest":"Bad Request!","error.forbidden":"Forbidden!","error.internal":"Server Error!","error.notfound":"Channel Not Found!","error.unexpected":"Unexpected error!","error.upload":"Error uploading image!","feedback.type.improvement":"Improvement","feedback.type.bug":"Bug","feedback.type.feature":"Feature","header.title":"Send Feedback","image.remove":"Remove","label.channel":"Channel","label.message":"Message","label.type":"Feedback Type",placeholder:"Your message...","submit.sending":"Sending feedback...","submit.sent":"Sent!","submit.text":"Send Feedback","upload.text":"Attach Image","trigger.text":"Send Feedback","footer.text":"React Slack Feedback"};var p=t(t=>e.createElement("svg",i({id:"SlackIcon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 60 60",width:"20",height:"20","aria-label":"Slack"},t),e.createElement("path",{d:"M21.902.148c-3.299 0-5.973 2.68-5.973 5.985a5.979 5.979 0 0 0 5.973 5.985h5.974V6.133A5.98 5.98 0 0 0 21.902.148m0 15.96H5.973C2.674 16.108 0 18.788 0 22.094c0 3.305 2.674 5.985 5.973 5.985h15.93c3.298 0 5.973-2.68 5.973-5.985 0-3.306-2.675-5.986-5.974-5.986",fill:"#36C5F0"}),e.createElement("path",{d:"M59.734 22.094c0-3.306-2.675-5.986-5.974-5.986-3.299 0-5.973 2.68-5.973 5.986v5.985h5.973a5.98 5.98 0 0 0 5.974-5.985m-15.929 0V6.133A5.98 5.98 0 0 0 37.831.148c-3.299 0-5.973 2.68-5.973 5.985v15.96c0 3.307 2.674 5.987 5.973 5.987a5.98 5.98 0 0 0 5.974-5.985",fill:"#2EB67D"}),e.createElement("path",{d:"M37.831 60a5.98 5.98 0 0 0 5.974-5.985 5.98 5.98 0 0 0-5.974-5.985h-5.973v5.985c0 3.305 2.674 5.985 5.973 5.985m0-15.96h15.93c3.298 0 5.973-2.68 5.973-5.986a5.98 5.98 0 0 0-5.974-5.985H37.831c-3.299 0-5.973 2.68-5.973 5.985a5.979 5.979 0 0 0 5.973 5.985",fill:"#ECB22E"}),e.createElement("path",{d:"M0 38.054a5.979 5.979 0 0 0 5.973 5.985 5.98 5.98 0 0 0 5.974-5.985v-5.985H5.973C2.674 32.069 0 34.749 0 38.054m15.929 0v15.96c0 3.306 2.674 5.986 5.973 5.986a5.98 5.98 0 0 0 5.974-5.985V38.054a5.979 5.979 0 0 0-5.974-5.985c-3.299 0-5.973 2.68-5.973 5.985",fill:"#E01E5A"})))`
  margin-right: 8px;
`;const u=(e,t=1)=>{const r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return r?`rgba(${parseInt(r[1],16)}, ${parseInt(r[2],16)}, ${parseInt(r[3],16)}, ${isNaN(parseInt(t,10))?1:t})`:"inherit"},h=(e,t="inherit")=>(r={})=>((e,t,r)=>(e||"object"==typeof e)&&t.split(".").reduce((e,t)=>e&&e[t]?e[t]:null,e)||r)(r.theme,e,t),g=r(["box-shadow:none;color:inherit;margin:inherit;padding:inherit;"]),b=r(["",";box-sizing:border-box;"],g),m=r(["animation:"," 0.4s ease;animation-fill-mode:both;"],o(["from{opacity:0;transform:translate3d(0,40px,0);}to{opacity:1;transform:none;}"])),f=r(["animation:"," 0.4s ease;animation-fill-mode:both;"],o(["from{opacity:1;transform:none;}to{opacity:0;display:none;transform:translate3d(0,10%,0);}"])),x=o(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"]),v=t.div`
  position: fixed;
  z-index: 99999998;
  bottom: 12px;
  right: 0;
  margin: 1em;
  text-align: left;
  width: calc(100% - 2em);
  font-weight: ${h("content.fontWeight",400)};

  * {
    box-sizing: border-box;
  }

  textarea {
    min-height: 150px;
  }
`,y=t.div`
  margin: 50px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: ${h("loader.width")} solid rgba(255, 255, 255, 0.2);
  border-right: ${h("loader.width")} solid rgba(255, 255, 255, 0.2);
  border-bottom: ${h("loader.width")} solid rgba(255, 255, 255, 0.2);
  border-left: ${h("loader.width")} solid ${h("loader.color")};
  transform: translateZ(0);
  animation: ${x} 0.5s infinite linear;
  border-radius: 50%;
  width: ${h("loader.size")};
  height: ${h("loader.size")};

  &:after {
    border-radius: 50%;
    width: ${h("loader.width")};
    height: ${h("loader.size")};
  }
`,k=t.div`
  display: none;
  background: ${h("colors.background")};
  position: relative;
  z-index: 999999999;
  width: calc(100% - 2em);
  border-radius: 4px;
  width: ${h("content.width","360px")};
  bottom: ${h("content.bottom","65px")};
  right: 0;
  box-shadow: ${h("content.boxShadow")};
  ${f};

  &.active {
    ${m};
    display: block;
  }
`,w=t.div`
  cursor: pointer;
  font-weight: ${h("closeButton.fontWeight","normal")};
  opacity: ${h("closeButton.opacity",.7)};
  color: ${h("closeButton.color","white")};
  margin-left: auto;
  font-size: 11px;

  &:hover {
    opacity: ${h("closeButton.hoverOpacity",1)};
    color: ${h("closeButton.hoverColor","inherit")};
  }
`,$=t.div`
  display: flex;
  color: ${h("header.color")};
  background: ${h("colors.secondary")};
  padding: 0.75em 1em;
  font-weight: ${h("header.fontWeight","normal")};
  border-radius: 3px 3px 0 0;
  font-size: ${h("header.fontSize","14px")};
  align-items: center;

  > img {
    margin-right: 0.5em;
  }
`,S=t.div`
  padding: ${h("content.padding")};
`,C=(t.div`
  margin-right: 0.5em;
`,t.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: 0;
  align-items: center;
  font-weight: ${h("trigger.fontWeight","normal")};
  background: ${h("trigger.backgroundColor")};
  color: ${h("trigger.color")};
  border: ${h("trigger.border")};
  white-space: nowrap;
  padding: ${h("trigger.padding")};
  border-radius: ${h("trigger.borderRadius")};
  cursor: pointer;
  font-size: ${h("trigger.fontSize")};
  box-shadow: ${h("trigger.boxShadow")};
  transition: box-shadow 0.3s, transform 0.2s ease-in, color 0.2s;

  &:hover {
    box-shadow: ${h("trigger.hoverBoxShadow")};
    background-color: ${h("trigger.hoverBackgroundColor","inherit")};
    transform: translateY(-1px);
    color: ${h("trigger.hoverColor")};
    border-color: ${h("colors.border")};
  }

  img {
    margin-right: 8px;
  }
`,t.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 0.85em;

  > li {
    flex: 1 0 calc(100% / 3);
    user-select: none;
    background: ${h("tab.backgroundColor")};
    color: ${h("tab.color")};
    text-align: center;
    padding: ${h("tab.padding","0.75em")};
    font-size: 13px;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border: ${h("tab.border")};

    &.selected {
      border-color: ${h("colors.primary")};
      background: ${h("colors.primary")};
      color: white;
      position: relative;
    }

    &:hover:not(.selected) {
      border: ${h("tab.border")};
    }

    &:first-of-type {
      border-radius: 4px 0 0 4px;
      margin-right: -1px;
    }

    &:last-of-type {
      border-radius: 0 4px 4px 0;
      margin-left: -1px;
    }
  }
`),E=t.div`
  > input {
    display: none;
  }
`,I=t.label`
  color: ${h("uploadButton.color")};
  background: ${h("uploadButton.backgroundColor")};
  border: ${h("uploadButton.border")};
  padding: 0.75em 3em;
  text-align: center;
  font-size: ${h("uploadButton.fontSize","13px")};
  margin: auto;
  margin-bottom: 1em;
  width: 100%;
  display: table;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background: ${h("uploadButton.hoverBackgroundColor")};
    color: ${h("uploadButton.hoverColor")};
  }
`,z=t.label`
  color: ${h("colors.textColor")};
  display: block;
  font-size: ${h("label.fontSize")};
  margin: 5px 0;
`,B=t.input`
  ${b};

  width: 100%;
  color: ${h("input.color","#000000")};
  border: ${h("input.border","none")};
  border-radius: ${h("input.borderRadius","3px")};
  padding: ${h("input.padding",0)};
  font-size: ${h("input.fontSize","14px")};
  background: ${h("input.backgroundColor","#ffffff")};
  margin-bottom: 0.75em;
  outline: none;
  resize: none;

  &:focus {
    border: 1px solid ${h("colors.primary")};
    box-shadow: ${h("input.boxShadow","none")};
  }

  &[disabled],
  &.disabled {
    background: ${h("input.backgroundColor","#ffffff")};
    pointer-events: none;
    color: ${h("input.color")};
  }
`,T=t.button`
  display: block;
  width: 100%;
  padding: ${h("button.padding","1em 0.75em")};
  text-align: center;
  background: ${h("colors.primary")};
  color: ${h("button.color","white")};
  font-weight: ${h("button.fontWeight",400)};
  outline: none;
  border: none;
  font-size: ${h("button.fontSize","11px")};
  text-transform: ${h("button.textTransform","uppercase")};
  letter-spacing: 0.5px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s;

  &[disabled],
  &.disabled {
    pointer-events: none;
    opacity: ${h("button.opacity")};
  }

  &.sent {
    background: ${h("colors.success")};
    pointer-events: none;
    opacity: 1;
  }

  &.error {
    background: ${h("colors.error")};
    pointer-events: none;
    opacity: 1;
  }

  &:hover {
    background: ${h("colors.primary")};
    box-shadow: none;
  }
`,O=t.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  background: ${h("overlay.backgroundColor")};
  opacity: 0;

  &:hover {
    opacity: 1;
  }

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    transform: translate(-50%, -50%);
    padding: 1em 3em;
    font-size: 12px;
    text-transform: uppercase;
    color: #ffffff;
    border-radius: 4px;
    cursor: pointer;
    background: 'rgba(255, 255, 255, 0.8)';
    transition: background 0.15s;
  }
`,j=t.div`
  display: flex;
  background-size: cover;
  background-position: center center;
  position: relative;
  width: 100%;
  height: ${h("image.height")};
  border-radius: ${h("image.borderRadius","4px")};
  margin-bottom: 0.5em;
  border: ${h("image.border")};
`;t.div`
  margin-bottom: 0.5em;
`;var F={fontFamily:'-apple-system, BlinkMacSystemFont, Arial, Arial Unicode, "Helvetica Neue", Helvetica, "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif',colors:{border:"#d0d8e1",primary:"#0088ff",secondary:"#222c4f",background:"#f4f4f7",success:"#3dc86f",error:"#ec3c3c",text:"#333333"},content:{width:"380px",padding:"0.6em",borderRadius:"4px",fontSize:"14px",fontWeight:500,boxShadow:`0 6px 30px 2px ${u("#222c4f",.3)}`},header:{color:"white",fontWeight:400,backgroundColor:"#222c4f"},loader:{color:"#ffffff",size:"4em",width:"3px"},button:{fontWeight:500,boxShadow:`0 2px 8px 2px ${u("#0087ff",.2)}`,opacity:.8},trigger:{color:"#ffffff",hoverColor:"#ffffff",backgroundColor:"#222c4f",border:"none",padding:"12px 1.25em",borderRadius:"6px",fontSize:"14px",fontWeight:"400",boxShadow:"0 3px 12px 1px rgba(34, 44, 79, 0.1)",hoverBoxShadow:"0 6px 16px 2px rgba(0, 0, 0, 0.2)",hoverBackgroundColor:"inherit"},input:{backgroundColor:"white",padding:"0.5em",color:"#444444",fontSize:"14px",borderRadius:"4px",border:"1px solid #d0d8e1",boxShadow:`0 0 8px ${u("#0087ff",.3)}`},label:{color:"#222c4f",fontSize:"12px"},tab:{color:"#333333",selectedColor:"white",selectedBackgroundColor:"#0087ff",border:"1px solid #d0d8e1",borderRadius:"4px",backgroundColor:"rgba(255, 255, 255, 0.5)"},image:{height:"140px",borderRadius:"4px",border:"1px solid #d0d8e1"},uploadButton:{color:"#333333",hoverColor:"#333333",backgroundColor:"white",hoverBackgroundColor:"rgba(255, 255, 255, 0.6)",border:"1px solid #d0d8e1"},overlay:{backgroundColor:u("#222c4f",.4)}};const A="bug",R="improvement",M="feature";class U extends e.Component{constructor(t){super(t),n(this,"translate",e=>{const{translations:t}=this.props;return"object"==typeof t&&e in t?t[e]:c[e]||""}),n(this,"handleChange",e=>t=>this.setState({[e]:t.target.value})),n(this,"toggle",()=>{this.state.open?this.close():this.activate()}),n(this,"activate",()=>{this.setState(({open:e})=>({open:!e}),this.props.onOpen),document.addEventListener("click",this.handleClickOutside)}),n(this,"handleClickOutside",e=>{e.defaultPrevented||this.SlackFeedback&&this.SlackFeedback.current&&!this.SlackFeedback.current.contains(e.target)&&this.close()}),n(this,"close",()=>{this.setState({open:!1},()=>{this.props.onClose()}),document.removeEventListener("click",this.handleClickOutside)}),n(this,"selectType",e=>()=>this.setState({selectedType:e})),n(this,"resetSentState",()=>{this.setState({message:""},()=>{setTimeout(()=>{this.setState({sent:!1})},this.props.sentTimeout)})}),n(this,"onSubmitSuccess",()=>{this.setState({sending:!1,sent:!0,image:{},error:!1},()=>this.resetSentState())}),n(this,"onSubmitError",e=>this.setState({sending:!1,error:this.determineErrorType(e)},()=>{setTimeout(()=>{this.setState({error:null})},this.props.errorTimeout)})),n(this,"determineErrorType",e=>{if(!e)return this.translate("error.unexpected");if("string"==typeof e)return e;switch(e.status){case 400:return this.translate("error.badrequest");case 403:return this.translate("error.forbidden");case 404:return this.translate("error.notfound");case 410:return this.translate("error.archived");case 500:return this.translate("error.internal");default:return this.translate("error.unexpected")}}),n(this,"send",()=>{const{selectedType:e,image:t}=this.state;let r="warning";switch(this.setState({sending:!0}),e){case A:r="danger";break;case M:r="good";break;case R:default:r="warning"}const o={attachments:[{fallback:`Feedback (${e})`,author_name:this.props.user,color:r,title:e,title_link:document.location.href,text:this.state.message,footer:this.translate("footer.text")}]};t.url&&(o.attachments[0].image_url=t.url),this.props.onSubmit(o,this.onSubmitSuccess.bind(this),this.onSubmitError.bind(this))}),n(this,"attachImage",e=>{const{files:t}=e.target,r=t[0];r.preview=window.URL.createObjectURL(r),this.setState({image:r,uploadingImage:!0},()=>{this.props.onImageUpload(r,this.onImageUploadSuccess.bind(this),this.onImageUploadError.bind(this))})}),n(this,"onImageUploadError",e=>{let t=this.translate("error.upload");e&&"string"==typeof e&&(t=e),this.setState({uploadingImage:!1,error:t},()=>{this.removeImage(),setTimeout(()=>{this.setState({error:null})},this.props.errorTimeout)})}),n(this,"onImageUploadSuccess",e=>{if("string"!=typeof e)return console.error("[SlackFeedback] `url` argument in `imageUploaded` method must be a string"),void this.removeImage();this.setState(({image:t})=>({uploadingImage:!1,image:{...t,url:e}}))}),n(this,"renderImageUpload",()=>this.state.image.preview?this.renderImagePreview():e.createElement(E,null,e.createElement(I,{htmlFor:"imageUpload"},this.translate("upload.text")),e.createElement(B,{as:"input",type:"file",id:"imageUpload",accept:"image/*",onChange:e=>this.attachImage(e)}))),n(this,"removeImage",e=>{e&&e.preventDefault(),this.setState({image:{},uploadingImage:!1})}),n(this,"renderImagePreview",()=>{const{image:t={},uploadingImage:r}=this.state;return t.preview?e.createElement(j,{style:{backgroundImage:`url(${t.preview})`}},r?e.createElement(y,null):e.createElement(O,null,e.createElement("span",{onClick:this.removeImage},this.translate("image.remove")))):null}),this.state={open:t.open,sending:!1,sent:!1,error:!1,uploadingImage:!1,selectedType:t.defaultSelectedType||this.props.feedbackTypes[0].value,image:{},message:""},this.SlackFeedback=e.createRef()}render(){if(this.props.disabled)return null;const{open:t,sending:r,sent:o,error:n,selectedType:i,uploadingImage:s}=this.state,{channel:c}=this.props,p=this.props.icon,u=Boolean(c)&&this.props.showChannel;let h=this.translate("submit.text");o&&(h=this.translate("submit.sent")),r&&!o&&(h=this.translate("submit.sending")),n&&(h=n);const g=d(F,this.props.theme);return e.createElement(a,{theme:g},e.createElement(v,{ref:this.SlackFeedback,className:l({active:t})},e.createElement(k,{className:l("fadeInUp",{active:t})},e.createElement($,null,this.props.showIcon?e.createElement(p,null):null," ",this.translate("header.title"),e.createElement(w,{className:"close",onClick:this.close},this.translate("close"))),e.createElement(S,null,u&&e.createElement("span",{id:"channel"},e.createElement(z,{htmlFor:"channel"},this.translate("label.channel")),e.createElement(B,{disabled:!0,as:"input",value:this.props.channel})),e.createElement(z,null,this.translate("label.type")),e.createElement(C,null,this.props.feedbackTypes.map(t=>e.createElement("li",{key:t.value,className:l({selected:i===t.value}),title:t.label,onClick:this.selectType(t.value)},t.label))),e.createElement(z,null,this.translate("label.message")),e.createElement(B,{as:"textarea",name:"message",value:this.state.message,placeholder:this.translate("placeholder"),onChange:this.handleChange("message")}),this.props.onImageUpload?this.renderImageUpload():null,e.createElement(T,{disabled:r||s||!this.state.message,className:l({sent:o,error:n}),onClick:this.send},h)))))}}U.defaultProps={channel:"",defaultSelectedType:null,disabled:!1,errorTimeout:8e3,feedbackTypes:[{value:A,label:c["feedback.type.bug"]},{value:R,label:c["feedback.type.improvement"]},{value:M,label:c["feedback.type.feature"]}],icon:()=>e.createElement(p,null),onClose:()=>{},onOpen:()=>{},open:!1,sentTimeout:5e3,showChannel:!0,showIcon:!0,theme:F,translations:c,user:"Anonymous"},U.defaultTheme=F,U.SlackIcon=p;var N=Object.freeze({__proto__:null,dark:{colors:{primary:"#d90368",secondary:"rgba(255, 255, 255, 0.8)",background:"#f1e9da",textColor:"white"},content:{padding:"0 0.75em 1em",width:"100%"},trigger:{color:"white",hoverColor:"white",backgroundColor:"black",border:"none",padding:"14px 1.25em",borderRadius:"6px",fontSize:"14px"},input:{backgroundColor:"rgba(255, 255, 255, 0.8)",padding:"1em",color:"white",fontSize:"14px",borderRadius:"4px",border:"none"},label:{fontSize:"12px"},tab:{color:"rgba(255, 255, 255, 0.8)",border:"none",borderRadius:"4px",padding:"1em",backgroundColor:"rgba(255, 255, 255, 0.8)"},uploadButton:{color:"white",hoverColor:"white",border:"none",hoverBorder:"none",backgroundColor:"#222",hoverBackgroundColor:"#323232"},image:{border:"none"}}});export default U;export{N as themes};
//# sourceMappingURL=index.esm.js.map
