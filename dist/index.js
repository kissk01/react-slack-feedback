"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=_interopDefault(require("react")),styled=require("styled-components"),styled__default=_interopDefault(styled);function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}var classnames=createCommonjsModule(function(e){!function(){var t={}.hasOwnProperty;function r(){for(var e=[],o=0;o<arguments.length;o++){var a=arguments[o];if(a){var n=typeof a;if("string"===n||"number"===n)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===n)for(var s in a)t.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r}()}),umd=createCommonjsModule(function(e,t){e.exports=function(){var e=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var r=Object.prototype.toString.call(e);return"[object RegExp]"===r||"[object Date]"===r||function(e){return e.$$typeof===t}(e)}(e)},t="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function r(e,t){return!1!==t.clone&&t.isMergeableObject(e)?i((r=e,Array.isArray(r)?[]:{}),e,t):e;var r}function o(e,t,o){return e.concat(t).map(function(e){return r(e,o)})}function a(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return e.propertyIsEnumerable(t)}):[]}(e))}function n(e,t,o){var n={};return o.isMergeableObject(e)&&a(e).forEach(function(t){n[t]=r(e[t],o)}),a(t).forEach(function(a){o.isMergeableObject(t[a])&&e[a]?n[a]=function(e,t){if(!t.customMerge)return i;var r=t.customMerge(e);return"function"==typeof r?r:i}(a,o)(e[a],t[a],o):n[a]=r(t[a],o)}),n}function i(t,a,i){(i=i||{}).arrayMerge=i.arrayMerge||o,i.isMergeableObject=i.isMergeableObject||e;var s=Array.isArray(a),l=Array.isArray(t),d=s===l;return d?s?i.arrayMerge(t,a,i):n(t,a,i):r(a,i)}return i.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(e,r){return i(e,r,t)},{})},i}()}),close="close",placeholder="Your message...",defaultTranslations={"checkbox.option":"Send url with feedback",close:close,"error.archived":"Channel is Archived!","error.badrequest":"Bad Request!","error.forbidden":"Forbidden!","error.internal":"Server Error!","error.notfound":"Channel Not Found!","error.unexpected":"Unexpected error!","error.upload":"Error uploading image!","feedback.type.improvement":"Improvement","feedback.type.bug":"Bug","feedback.type.feature":"Feature","header.title":"Send Feedback","image.remove":"Remove","label.channel":"Channel","label.message":"Message","label.type":"Feedback Type",placeholder:placeholder,"submit.sending":"Sending feedback...","submit.sent":"Sent!","submit.text":"Send Feedback","upload.text":"Attach Image","trigger.text":"Send Feedback","footer.text":"React Slack Feedback"};const SlackIcon=e=>React.createElement("svg",_extends({id:"SlackIcon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 60 60",width:"20",height:"20","aria-label":"Slack"},e),React.createElement("path",{d:"M21.902.148c-3.299 0-5.973 2.68-5.973 5.985a5.979 5.979 0 0 0 5.973 5.985h5.974V6.133A5.98 5.98 0 0 0 21.902.148m0 15.96H5.973C2.674 16.108 0 18.788 0 22.094c0 3.305 2.674 5.985 5.973 5.985h15.93c3.298 0 5.973-2.68 5.973-5.985 0-3.306-2.675-5.986-5.974-5.986",fill:"#36C5F0"}),React.createElement("path",{d:"M59.734 22.094c0-3.306-2.675-5.986-5.974-5.986-3.299 0-5.973 2.68-5.973 5.986v5.985h5.973a5.98 5.98 0 0 0 5.974-5.985m-15.929 0V6.133A5.98 5.98 0 0 0 37.831.148c-3.299 0-5.973 2.68-5.973 5.985v15.96c0 3.307 2.674 5.987 5.973 5.987a5.98 5.98 0 0 0 5.974-5.985",fill:"#2EB67D"}),React.createElement("path",{d:"M37.831 60a5.98 5.98 0 0 0 5.974-5.985 5.98 5.98 0 0 0-5.974-5.985h-5.973v5.985c0 3.305 2.674 5.985 5.973 5.985m0-15.96h15.93c3.298 0 5.973-2.68 5.973-5.986a5.98 5.98 0 0 0-5.974-5.985H37.831c-3.299 0-5.973 2.68-5.973 5.985a5.979 5.979 0 0 0 5.973 5.985",fill:"#ECB22E"}),React.createElement("path",{d:"M0 38.054a5.979 5.979 0 0 0 5.973 5.985 5.98 5.98 0 0 0 5.974-5.985v-5.985H5.973C2.674 32.069 0 34.749 0 38.054m15.929 0v15.96c0 3.306 2.674 5.986 5.973 5.986a5.98 5.98 0 0 0 5.974-5.985V38.054a5.979 5.979 0 0 0-5.974-5.985c-3.299 0-5.973 2.68-5.973 5.985",fill:"#E01E5A"}));var SlackIcon$1=styled__default(SlackIcon)`
  margin-right: 8px;
`;const rgba=(e,t=1)=>{const r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return r?`rgba(${parseInt(r[1],16)}, ${parseInt(r[2],16)}, ${parseInt(r[3],16)}, ${isNaN(parseInt(t,10))?1:t})`:"inherit"},get=(e,t,r)=>(e||"object"==typeof e)&&t.split(".").reduce((e,t)=>e&&e[t]?e[t]:null,e)||r,theme=(e,t="inherit")=>(r={})=>get(r.theme,e,t),resets=styled.css(["box-shadow:none;color:inherit;margin:inherit;padding:inherit;"]),formStyles=styled.css(["",";box-sizing:border-box;"],resets),fadeInUp=styled.keyframes(["from{opacity:0;transform:translate3d(0,40px,0);}to{opacity:1;transform:none;}"]),animationFadeInUp=styled.css(["animation:"," 0.4s ease;animation-fill-mode:both;"],fadeInUp),fadeOutDown=styled.keyframes(["from{opacity:1;transform:none;}to{opacity:0;display:none;transform:translate3d(0,10%,0);}"]),animationFadeOutDown=styled.css(["animation:"," 0.4s ease;animation-fill-mode:both;"],fadeOutDown),load=styled.keyframes(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"]),SlackFeedback=styled__default.div`
  position: fixed;
  z-index: 99999998;
  bottom: 12px;
  right: 0;
  margin: 1em;
  text-align: left;
  width: calc(100% - 2em);
  font-weight: ${theme("content.fontWeight",400)};

  * {
    box-sizing: border-box;
  }

  textarea {
    min-height: 150px;
  }
`,Loader=styled__default.div`
  margin: 50px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: ${theme("loader.width")} solid rgba(255, 255, 255, 0.2);
  border-right: ${theme("loader.width")} solid rgba(255, 255, 255, 0.2);
  border-bottom: ${theme("loader.width")} solid rgba(255, 255, 255, 0.2);
  border-left: ${theme("loader.width")} solid ${theme("loader.color")};
  transform: translateZ(0);
  animation: ${load} 0.5s infinite linear;
  border-radius: 50%;
  width: ${theme("loader.size")};
  height: ${theme("loader.size")};

  &:after {
    border-radius: 50%;
    width: ${theme("loader.width")};
    height: ${theme("loader.size")};
  }
`,Container=styled__default.div`
  display: none;
  background: ${theme("colors.background")};
  position: relative;
  z-index: 999999999;
  width: calc(100% - 2em);
  border-radius: 4px;
  width: ${theme("content.width","360px")};
  bottom: ${theme("content.bottom","65px")};
  right: 0;
  box-shadow: ${theme("content.boxShadow")};
  ${animationFadeOutDown};

  &.active {
    ${animationFadeInUp};
    display: block;
  }
`,CloseButton=styled__default.div`
  cursor: pointer;
  font-weight: ${theme("closeButton.fontWeight","normal")};
  opacity: ${theme("closeButton.opacity",.7)};
  color: ${theme("closeButton.color","white")};
  margin-left: auto;
  font-size: 11px;

  &:hover {
    opacity: ${theme("closeButton.hoverOpacity",1)};
    color: ${theme("closeButton.hoverColor","inherit")};
  }
`,Header=styled__default.div`
  display: flex;
  color: ${theme("header.color")};
  background: ${theme("colors.secondary")};
  padding: 0.75em 1em;
  font-weight: ${theme("header.fontWeight","normal")};
  border-radius: 3px 3px 0 0;
  font-size: ${theme("header.fontSize","14px")};
  align-items: center;

  > img {
    margin-right: 0.5em;
  }
`,Content=styled__default.div`
  padding: ${theme("content.padding")};
`,Icon=styled__default.div`
  margin-right: 0.5em;
`,Trigger=styled__default.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: 0;
  align-items: center;
  font-weight: ${theme("trigger.fontWeight","normal")};
  background: ${theme("trigger.backgroundColor")};
  color: ${theme("trigger.color")};
  border: ${theme("trigger.border")};
  white-space: nowrap;
  padding: ${theme("trigger.padding")};
  border-radius: ${theme("trigger.borderRadius")};
  cursor: pointer;
  font-size: ${theme("trigger.fontSize")};
  box-shadow: ${theme("trigger.boxShadow")};
  transition: box-shadow 0.3s, transform 0.2s ease-in, color 0.2s;

  &:hover {
    box-shadow: ${theme("trigger.hoverBoxShadow")};
    background-color: ${theme("trigger.hoverBackgroundColor","inherit")};
    transform: translateY(-1px);
    color: ${theme("trigger.hoverColor")};
    border-color: ${theme("colors.border")};
  }

  img {
    margin-right: 8px;
  }
`,Tabs=styled__default.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 0.85em;

  > li {
    flex: 1 0 calc(100% / 3);
    user-select: none;
    background: ${theme("tab.backgroundColor")};
    color: ${theme("tab.color")};
    text-align: center;
    padding: ${theme("tab.padding","0.75em")};
    font-size: 13px;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border: ${theme("tab.border")};

    &.selected {
      border-color: ${theme("colors.primary")};
      background: ${theme("colors.primary")};
      color: white;
      position: relative;
    }

    &:hover:not(.selected) {
      border: ${theme("tab.border")};
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
`,ImageUpload=styled__default.div`
  > input {
    display: none;
  }
`,UploadButton=styled__default.label`
  color: ${theme("uploadButton.color")};
  background: ${theme("uploadButton.backgroundColor")};
  border: ${theme("uploadButton.border")};
  padding: 0.75em 3em;
  text-align: center;
  font-size: ${theme("uploadButton.fontSize","13px")};
  margin: auto;
  margin-bottom: 1em;
  width: 100%;
  display: table;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background: ${theme("uploadButton.hoverBackgroundColor")};
    color: ${theme("uploadButton.hoverColor")};
  }
`,Label=styled__default.label`
  color: ${theme("colors.textColor")};
  display: block;
  font-size: ${theme("label.fontSize")};
  margin: 5px 0;
`,FormElement=styled__default.input`
  ${formStyles};

  width: 100%;
  color: ${theme("input.color","#000000")};
  border: ${theme("input.border","none")};
  border-radius: ${theme("input.borderRadius","3px")};
  padding: ${theme("input.padding",0)};
  font-size: ${theme("input.fontSize","14px")};
  background: ${theme("input.backgroundColor","#ffffff")};
  margin-bottom: 0.75em;
  outline: none;
  resize: none;

  &:focus {
    border: 1px solid ${theme("colors.primary")};
    box-shadow: ${theme("input.boxShadow","none")};
  }

  &[disabled],
  &.disabled {
    background: ${theme("input.backgroundColor","#ffffff")};
    pointer-events: none;
    color: ${theme("input.color")};
  }
`,SubmitButton=styled__default.button`
  display: block;
  width: 100%;
  padding: ${theme("button.padding","1em 0.75em")};
  text-align: center;
  background: ${theme("colors.primary")};
  color: ${theme("button.color","white")};
  font-weight: ${theme("button.fontWeight",400)};
  outline: none;
  border: none;
  font-size: ${theme("button.fontSize","11px")};
  text-transform: ${theme("button.textTransform","uppercase")};
  letter-spacing: 0.5px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s;

  &[disabled],
  &.disabled {
    pointer-events: none;
    opacity: ${theme("button.opacity")};
  }

  &.sent {
    background: ${theme("colors.success")};
    pointer-events: none;
    opacity: 1;
  }

  &.error {
    background: ${theme("colors.error")};
    pointer-events: none;
    opacity: 1;
  }

  &:hover {
    background: ${theme("colors.primary")};
    box-shadow: none;
  }
`,PreviewOverlay=styled__default.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  background: ${theme("overlay.backgroundColor")};
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
`,ImagePreview=styled__default.div`
  display: flex;
  background-size: cover;
  background-position: center center;
  position: relative;
  width: 100%;
  height: ${theme("image.height")};
  border-radius: ${theme("image.borderRadius","4px")};
  margin-bottom: 0.5em;
  border: ${theme("image.border")};
`,Select=styled__default.div`
  margin-bottom: 0.5em;
`;var defaultTheme={fontFamily:'-apple-system, BlinkMacSystemFont, Arial, Arial Unicode, "Helvetica Neue", Helvetica, "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif',colors:{border:"#d0d8e1",primary:"#0088ff",secondary:"#222c4f",background:"#f4f4f7",success:"#3dc86f",error:"#ec3c3c",text:"#333333"},content:{width:"380px",padding:"0.6em",borderRadius:"4px",fontSize:"14px",fontWeight:500,boxShadow:`0 6px 30px 2px ${rgba("#222c4f",.3)}`},header:{color:"white",fontWeight:400,backgroundColor:"#222c4f"},loader:{color:"#ffffff",size:"4em",width:"3px"},button:{fontWeight:500,boxShadow:`0 2px 8px 2px ${rgba("#0087ff",.2)}`,opacity:.8},trigger:{color:"#ffffff",hoverColor:"#ffffff",backgroundColor:"#222c4f",border:"none",padding:"12px 1.25em",borderRadius:"6px",fontSize:"14px",fontWeight:"400",boxShadow:"0 3px 12px 1px rgba(34, 44, 79, 0.1)",hoverBoxShadow:"0 6px 16px 2px rgba(0, 0, 0, 0.2)",hoverBackgroundColor:"inherit"},input:{backgroundColor:"white",padding:"0.5em",color:"#444444",fontSize:"14px",borderRadius:"4px",border:"1px solid #d0d8e1",boxShadow:`0 0 8px ${rgba("#0087ff",.3)}`},label:{color:"#222c4f",fontSize:"12px"},tab:{color:"#333333",selectedColor:"white",selectedBackgroundColor:"#0087ff",border:"1px solid #d0d8e1",borderRadius:"4px",backgroundColor:"rgba(255, 255, 255, 0.5)"},image:{height:"140px",borderRadius:"4px",border:"1px solid #d0d8e1"},uploadButton:{color:"#333333",hoverColor:"#333333",backgroundColor:"white",hoverBackgroundColor:"rgba(255, 255, 255, 0.6)",border:"1px solid #d0d8e1"},overlay:{backgroundColor:rgba("#222c4f",.4)}};const BUG="bug",IMPROVEMENT="improvement",FEATURE="feature";class SlackFeedback$1 extends React.Component{constructor(e){super(e),_defineProperty(this,"translate",e=>{const{translations:t}=this.props;return"object"==typeof t&&e in t?t[e]:defaultTranslations[e]||""}),_defineProperty(this,"handleChange",e=>t=>this.setState({[e]:t.target.value})),_defineProperty(this,"toggle",()=>{this.state.open?this.close():this.activate()}),_defineProperty(this,"activate",()=>{this.setState(({open:e})=>({open:!e}),this.props.onOpen),document.addEventListener("click",this.handleClickOutside)}),_defineProperty(this,"handleClickOutside",e=>{e.defaultPrevented||this.SlackFeedback&&this.SlackFeedback.current&&!this.SlackFeedback.current.contains(e.target)&&this.close()}),_defineProperty(this,"close",()=>{this.setState({open:!1},()=>{this.props.onClose()}),document.removeEventListener("click",this.handleClickOutside)}),_defineProperty(this,"selectType",e=>()=>this.setState({selectedType:e})),_defineProperty(this,"resetSentState",()=>{this.setState({message:""},()=>{setTimeout(()=>{this.setState({sent:!1})},this.props.sentTimeout)})}),_defineProperty(this,"onSubmitSuccess",()=>{this.setState({sending:!1,sent:!0,image:{},error:!1},()=>this.resetSentState())}),_defineProperty(this,"onSubmitError",e=>this.setState({sending:!1,error:this.determineErrorType(e)},()=>{setTimeout(()=>{this.setState({error:null})},this.props.errorTimeout)})),_defineProperty(this,"determineErrorType",e=>{if(!e)return this.translate("error.unexpected");if("string"==typeof e)return e;switch(e.status){case 400:return this.translate("error.badrequest");case 403:return this.translate("error.forbidden");case 404:return this.translate("error.notfound");case 410:return this.translate("error.archived");case 500:return this.translate("error.internal");default:return this.translate("error.unexpected")}}),_defineProperty(this,"send",()=>{const{selectedType:e,image:t}=this.state;let r="warning";switch(this.setState({sending:!0}),e){case BUG:r="danger";break;case FEATURE:r="good";break;case IMPROVEMENT:default:r="warning"}const o={attachments:[{fallback:`Feedback (${e})`,author_name:this.props.user,color:r,title:e,title_link:document.location.href,text:this.state.message,footer:this.translate("footer.text")}]};t.url&&(o.attachments[0].image_url=t.url),this.props.onSubmit(o,this.onSubmitSuccess.bind(this),this.onSubmitError.bind(this))}),_defineProperty(this,"attachImage",e=>{const{files:t}=e.target,r=t[0];r.preview=window.URL.createObjectURL(r),this.setState({image:r,uploadingImage:!0},()=>{this.props.onImageUpload(r,this.onImageUploadSuccess.bind(this),this.onImageUploadError.bind(this))})}),_defineProperty(this,"onImageUploadError",e=>{let t=this.translate("error.upload");e&&"string"==typeof e&&(t=e),this.setState({uploadingImage:!1,error:t},()=>{this.removeImage(),setTimeout(()=>{this.setState({error:null})},this.props.errorTimeout)})}),_defineProperty(this,"onImageUploadSuccess",e=>{if("string"!=typeof e)return console.error("[SlackFeedback] `url` argument in `imageUploaded` method must be a string"),void this.removeImage();this.setState(({image:t})=>({uploadingImage:!1,image:{...t,url:e}}))}),_defineProperty(this,"renderImageUpload",()=>this.state.image.preview?this.renderImagePreview():React.createElement(ImageUpload,null,React.createElement(UploadButton,{htmlFor:"imageUpload"},this.translate("upload.text")),React.createElement(FormElement,{as:"input",type:"file",id:"imageUpload",accept:"image/*",onChange:e=>this.attachImage(e)}))),_defineProperty(this,"removeImage",e=>{e&&e.preventDefault(),this.setState({image:{},uploadingImage:!1})}),_defineProperty(this,"renderImagePreview",()=>{const{image:e={},uploadingImage:t}=this.state;return e.preview?React.createElement(ImagePreview,{style:{backgroundImage:`url(${e.preview})`}},t?React.createElement(Loader,null):React.createElement(PreviewOverlay,null,React.createElement("span",{onClick:this.removeImage},this.translate("image.remove")))):null}),this.state={open:e.open,sending:!1,sent:!1,error:!1,uploadingImage:!1,selectedType:e.defaultSelectedType||this.props.feedbackTypes[0].value,image:{},message:""},this.SlackFeedback=React.createRef()}render(){if(this.props.disabled)return null;const{open:e,sending:t,sent:r,error:o,selectedType:a,uploadingImage:n}=this.state,{channel:i}=this.props,s=this.props.icon,l=Boolean(i)&&this.props.showChannel;let d=this.translate("submit.text");r&&(d=this.translate("submit.sent")),t&&!r&&(d=this.translate("submit.sending")),o&&(d=o);const c=umd(defaultTheme,this.props.theme);return React.createElement(styled.ThemeProvider,{theme:c},React.createElement(SlackFeedback,{ref:this.SlackFeedback,className:classnames({active:e})},React.createElement(Container,{className:classnames("fadeInUp",{active:e})},React.createElement(Header,null,this.props.showIcon?React.createElement(s,null):null," ",this.translate("header.title"),React.createElement(CloseButton,{className:"close",onClick:this.close},this.translate("close"))),React.createElement(Content,null,l&&React.createElement("span",{id:"channel"},React.createElement(Label,{htmlFor:"channel"},this.translate("label.channel")),React.createElement(FormElement,{disabled:!0,as:"input",value:this.props.channel})),React.createElement(Label,null,this.translate("label.type")),React.createElement(Tabs,null,this.props.feedbackTypes.map(e=>React.createElement("li",{key:e.value,className:classnames({selected:a===e.value}),title:e.label,onClick:this.selectType(e.value)},e.label))),React.createElement(Label,null,this.translate("label.message")),React.createElement(FormElement,{as:"textarea",name:"message",value:this.state.message,placeholder:this.translate("placeholder"),onChange:this.handleChange("message")}),this.props.onImageUpload?this.renderImageUpload():null,React.createElement(SubmitButton,{disabled:t||n||!this.state.message,className:classnames({sent:r,error:o}),onClick:this.send},d)))))}}SlackFeedback$1.defaultProps={channel:"",defaultSelectedType:null,disabled:!1,errorTimeout:8e3,feedbackTypes:[{value:BUG,label:defaultTranslations["feedback.type.bug"]},{value:IMPROVEMENT,label:defaultTranslations["feedback.type.improvement"]},{value:FEATURE,label:defaultTranslations["feedback.type.feature"]}],icon:()=>React.createElement(SlackIcon$1,null),onClose:()=>{},onOpen:()=>{},open:!1,sentTimeout:5e3,showChannel:!0,showIcon:!0,theme:defaultTheme,translations:defaultTranslations,user:"Anonymous"},SlackFeedback$1.defaultTheme=defaultTheme,SlackFeedback$1.SlackIcon=SlackIcon$1;var dark={colors:{primary:"#d90368",secondary:"rgba(255, 255, 255, 0.8)",background:"#f1e9da",textColor:"white"},content:{padding:"0 0.75em 1em",width:"100%"},trigger:{color:"white",hoverColor:"white",backgroundColor:"black",border:"none",padding:"14px 1.25em",borderRadius:"6px",fontSize:"14px"},input:{backgroundColor:"rgba(255, 255, 255, 0.8)",padding:"1em",color:"white",fontSize:"14px",borderRadius:"4px",border:"none"},label:{fontSize:"12px"},tab:{color:"rgba(255, 255, 255, 0.8)",border:"none",borderRadius:"4px",padding:"1em",backgroundColor:"rgba(255, 255, 255, 0.8)"},uploadButton:{color:"white",hoverColor:"white",border:"none",hoverBorder:"none",backgroundColor:"#222",hoverBackgroundColor:"#323232"},image:{border:"none"}},index=Object.freeze({__proto__:null,dark:dark});exports.default=SlackFeedback$1,exports.themes=index;
//# sourceMappingURL=index.js.map
