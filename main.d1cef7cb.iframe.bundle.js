(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{486:function(module,exports,__webpack_require__){__webpack_require__(487),__webpack_require__(646),__webpack_require__(647),__webpack_require__(858),__webpack_require__(853),__webpack_require__(860),__webpack_require__(861),__webpack_require__(859),__webpack_require__(855),__webpack_require__(862),__webpack_require__(856),__webpack_require__(857),__webpack_require__(863),module.exports=__webpack_require__(844)},554:function(module,exports){},647:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(347)},844:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(347).configure)([__webpack_require__(845),__webpack_require__(846)],module,!1)}).call(this,__webpack_require__(199)(module))},845:function(module,exports,__webpack_require__){var map={"./stories/Introduction.stories.mdx":854};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=845},846:function(module,exports,__webpack_require__){var map={"./components/Button/Button.stories.jsx":847,"./components/Modal/Modal.stories.jsx":851,"./components/ToggleButtonGroup/ToggleButtonGroup.stories.jsx":852};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=846},847:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Button_Story",(function(){return Button_Story}));var D_fpt_ReactJS_react_bootstrap_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(47),_index__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(0),__webpack_require__(85)),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6);__webpack_exports__.default={title:"components/Button",component:_index__WEBPACK_IMPORTED_MODULE_2__.a,argTypes:{}};var Button_Story=function Button_Story(args){return Object.values(_index__WEBPACK_IMPORTED_MODULE_2__.d).map((function(variant){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{style:{margin:5},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.a,Object(D_fpt_ReactJS_react_bootstrap_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(D_fpt_ReactJS_react_bootstrap_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args),{},{variant:variant,children:"Button"}))},variant)}))};Button_Story.parameters=Object(D_fpt_ReactJS_react_bootstrap_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => {\n  return Object.values(buttonVariant).map(variant => (\n    <span key={variant} style={{ margin: 5 }}>\n      <Button {...args} variant={variant}>\n        Button\n      </Button>\n    </span>\n  ));\n}"}},Button_Story.parameters)},85:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Button_ButtonB})),__webpack_require__.d(__webpack_exports__,"d",(function(){return buttonVariant})),__webpack_require__.d(__webpack_exports__,"c",(function(){return ToggleButtonGroup_ToggleButtonGroupB})),__webpack_require__.d(__webpack_exports__,"b",(function(){return Modal_ModalB}));__webpack_require__(848);var objectSpread2=__webpack_require__(47),react=__webpack_require__(0),react_default=__webpack_require__.n(react),Button=__webpack_require__(467),jsx_runtime=__webpack_require__(6),buttonVariant={PRIMARY:"primary",SECONDARY:"secondary",SUCCESS:"success",DANGER:"danger",WARNING:"warning",INFO:"info",DARK:"dark",LIGHT:"light",LINK:"link",OUTLINE_PRIMARY:"outline-primary",OUTLINE_SECONDARY:"outline-secondary",OUTLINE_SUCCESS:"outline-success",OUTLINE_DANGER:"outline-danger",OUTLINE_WARNING:"outline-warning",OUTLINE_INFO:"outline-info",OUTLINE_DARK:"outline-dark",OUTLINE_LIGHT:"outline-light"},Button_ButtonB=function ButtonB(_ref){var props=Object.assign({},_ref);return Object(jsx_runtime.jsx)(Button.a,Object(objectSpread2.a)({},props))};Button_ButtonB.defaultProps={children:"",variant:"secondary",size:"sm",active:!1,disabled:!1,onClick:void 0},Button_ButtonB.__docgenInfo={description:"",methods:[],displayName:"ButtonB",props:{children:{defaultValue:{value:"''",computed:!1},type:{name:"any"},required:!1,description:""},variant:{defaultValue:{value:"'secondary'",computed:!1},type:{name:"enum",value:[{value:'"danger"',computed:!1},{value:'"dark"',computed:!1},{value:'"info"',computed:!1},{value:'"light"',computed:!1},{value:'"link"',computed:!1},{value:'"outline-danger"',computed:!1},{value:'"outline-dark"',computed:!1},{value:'"outline-info"',computed:!1},{value:'"outline-light"',computed:!1},{value:'"outline-primary"',computed:!1},{value:'"outline-secondary"',computed:!1},{value:'"outline-success"',computed:!1},{value:'"outline-warning"',computed:!1},{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"success"',computed:!1},{value:'"warning"',computed:!1}]},required:!1,description:""},size:{defaultValue:{value:"'sm'",computed:!1},type:{name:"enum",value:[{value:'"lg"',computed:!1},{value:'"sm"',computed:!1}]},required:!1,description:""},active:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},disabled:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},onClick:{defaultValue:{value:"undefined",computed:!0},type:{name:"func"},required:!1,description:""}}};"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Button\\index.js"]={name:"ButtonB",docgenInfo:Button_ButtonB.__docgenInfo,path:"src\\components\\Button\\index.js"});var objectWithoutProperties=__webpack_require__(220),ToggleButtonGroup=__webpack_require__(872),ToggleButton=__webpack_require__(464),_excluded=["options","value","name","onChange","type","variant","labelKey","valueKey"],ToggleButtonGroup_ToggleButtonGroupB=function ToggleButtonGroupB(_ref){var options=_ref.options,value=_ref.value,name=_ref.name,onChange=_ref.onChange,type=_ref.type,variant=_ref.variant,labelKey=_ref.labelKey,valueKey=_ref.valueKey,props=Object(objectWithoutProperties.a)(_ref,_excluded);return Object(jsx_runtime.jsx)(ToggleButtonGroup.a,Object(objectSpread2.a)(Object(objectSpread2.a)({type:type,name:name,value:value,onChange:onChange},props),{},{children:options.map((function(radio){var optId=radio[valueKey];return Object(jsx_runtime.jsx)(ToggleButton.a,{id:"option-".concat(optId),type:type,variant:"outline-".concat(variant),name:"option-name",value:optId,children:radio[labelKey]},optId)}))}))};ToggleButtonGroup_ToggleButtonGroupB.defaultProps={type:"radio",variant:"primary",labelKey:"name",valueKey:"value",options:[],name:"toggle-button-group",value:"",onChange:function onChange(){}},ToggleButtonGroup_ToggleButtonGroupB.__docgenInfo={description:"",methods:[],displayName:"ToggleButtonGroupB",props:{type:{defaultValue:{value:"'radio'",computed:!1},type:{name:"enum",value:[{value:'"checkbox"',computed:!1},{value:'"radio"',computed:!1}]},required:!1,description:""},variant:{defaultValue:{value:"'primary'",computed:!1},type:{name:"enum",value:[{value:'"danger"',computed:!1},{value:'"dark"',computed:!1},{value:'"info"',computed:!1},{value:'"light"',computed:!1},{value:'"link"',computed:!1},{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"success"',computed:!1},{value:'"warning"',computed:!1}]},required:!1,description:""},labelKey:{defaultValue:{value:"'name'",computed:!1},type:{name:"string"},required:!1,description:""},valueKey:{defaultValue:{value:"'value'",computed:!1},type:{name:"string"},required:!1,description:""},options:{defaultValue:{value:"[]",computed:!1},type:{name:"arrayOf",value:{name:"custom",raw:"Object"}},required:!1,description:""},name:{defaultValue:{value:"'toggle-button-group'",computed:!1},type:{name:"string"},required:!1,description:""},value:{defaultValue:{value:"''",computed:!1},type:{name:"union",value:[{name:"string"},{name:"instanceOf",value:"Array"}]},required:!1,description:""},onChange:{defaultValue:{value:"() => { }",computed:!1},type:{name:"func"},required:!1,description:""}}};"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\ToggleButtonGroup\\index.js"]={name:"ToggleButtonGroupB",docgenInfo:ToggleButtonGroup_ToggleButtonGroupB.__docgenInfo,path:"src\\components\\ToggleButtonGroup\\index.js"});var Modal=__webpack_require__(871),Modal_excluded=(__webpack_require__(850),["title","children","footer","show","onHide","onSave","onCancel","backdrop"]),Modal_ModalB=function ModalB(_ref){var title=_ref.title,children=_ref.children,footer=_ref.footer,show=_ref.show,onHide=_ref.onHide,onSave=_ref.onSave,onCancel=_ref.onCancel,backdrop=_ref.backdrop,props=Object(objectWithoutProperties.a)(_ref,Modal_excluded),footerComponent=Object(jsx_runtime.jsxs)(react_default.a.Fragment,{children:[Object(jsx_runtime.jsx)(Button.a,{className:"button-cancel",variant:"secondary",size:"sm",onClick:onCancel,children:"Cancel"}),Object(jsx_runtime.jsx)(Button.a,{className:"button-save",variant:"primary",size:"sm",onClick:onSave,children:"Save"})]});return(footer||!1===footer)&&(footerComponent=footer),Object(jsx_runtime.jsxs)(Modal.a,Object(objectSpread2.a)(Object(objectSpread2.a)({show:show,onHide:onHide,backdrop:backdrop||"static",keyboard:!0===backdrop},props),{},{children:[Object(jsx_runtime.jsx)(Modal.a.Header,{closeButton:!0,children:Object(jsx_runtime.jsx)(Modal.a.Title,{children:title})}),Object(jsx_runtime.jsx)(Modal.a.Body,{children:children}),footerComponent&&Object(jsx_runtime.jsx)(Modal.a.Footer,{children:footerComponent})]}))};Modal_ModalB.defaultProps={title:"",children:"",footer:"",show:!1,backdrop:!0,size:"lg",centered:!0,fullscreen:!1,scrollable:!1,dialogClassName:"bootstrap-dialog",contentClassName:"bootstrap-dialog-content",backdropClassName:"bootstrap-dialog-backdrop",onHide:void 0,onSave:void 0,onCancel:void 0},Modal_ModalB.__docgenInfo={description:"",methods:[],displayName:"ModalB",props:{title:{defaultValue:{value:"''",computed:!1},type:{name:"any"},required:!1,description:""},children:{defaultValue:{value:"''",computed:!1},type:{name:"any"},required:!1,description:""},footer:{defaultValue:{value:"''",computed:!1},type:{name:"any"},required:!1,description:""},show:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},backdrop:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},size:{defaultValue:{value:"'lg'",computed:!1},type:{name:"enum",value:[{value:'"lg"',computed:!1},{value:'"sm"',computed:!1},{value:'"xl"',computed:!1}]},required:!1,description:""},centered:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},fullscreen:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},scrollable:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},dialogClassName:{defaultValue:{value:"'bootstrap-dialog'",computed:!1},type:{name:"string"},required:!1,description:""},contentClassName:{defaultValue:{value:"'bootstrap-dialog-content'",computed:!1},type:{name:"string"},required:!1,description:""},backdropClassName:{defaultValue:{value:"'bootstrap-dialog-backdrop'",computed:!1},type:{name:"string"},required:!1,description:""},onHide:{defaultValue:{value:"undefined",computed:!0},type:{name:"func"},required:!1,description:""},onSave:{defaultValue:{value:"undefined",computed:!0},type:{name:"func"},required:!1,description:""},onCancel:{defaultValue:{value:"undefined",computed:!0},type:{name:"func"},required:!1,description:""}}};"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Modal\\index.js"]={name:"ModalB",docgenInfo:Modal_ModalB.__docgenInfo,path:"src\\components\\Modal\\index.js"})},850:function(module,exports,__webpack_require__){},851:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Modal_Story",(function(){return Modal_Story}));var D_fpt_ReactJS_react_bootstrap_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(47),D_fpt_ReactJS_react_bootstrap_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(219),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(85),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6);__webpack_exports__.default={title:"components/Modal",component:_index__WEBPACK_IMPORTED_MODULE_3__.b,argTypes:{}};var Modal_Story=function Template(args){var _React$useState=react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(!1),_React$useState2=Object(D_fpt_ReactJS_react_bootstrap_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_React$useState,2),show=_React$useState2[0],setShow=_React$useState2[1],onClose=function onClose(){return setShow(!1)};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_index__WEBPACK_IMPORTED_MODULE_3__.a,{onClick:function onClick(){return setShow(!0)},children:"Open modal"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_index__WEBPACK_IMPORTED_MODULE_3__.b,Object(D_fpt_ReactJS_react_bootstrap_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(D_fpt_ReactJS_react_bootstrap_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args),{},{show:show,onHide:onClose,onCancel:onClose,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:{height:200},children:"dsfdsfsdf"})}))]})}.bind({});Modal_Story.args={title:"Modal title",footer:""},Modal_Story.parameters=Object(D_fpt_ReactJS_react_bootstrap_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => {\n  const [show, setShow] = React.useState(false);\n  const onClose = () => setShow(false);\n\n  return (\n    <>\n      <Button onClick={() => setShow(true)}>Open modal</Button>\n\n      <Modal {...args} show={show} onHide={onClose} onCancel={onClose} >\n        <div style={{ height: 200 }}>\n          dsfdsfsdf\n        </div>\n      </Modal>\n    </>\n  );\n}"}},Modal_Story.parameters)},852:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ToggleButtonGroup_Story",(function(){return ToggleButtonGroup_Story}));var D_fpt_ReactJS_react_bootstrap_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(47),D_fpt_ReactJS_react_bootstrap_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(219),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(85),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6);__webpack_exports__.default={title:"components/ToggleButtonGroup",component:_index__WEBPACK_IMPORTED_MODULE_3__.c,argTypes:{}};var ToggleButtonGroup_Story=function Template(args){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)("1"),_useState2=Object(D_fpt_ReactJS_react_bootstrap_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState,2),value=_useState2[0],setValue=_useState2[1];return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_index__WEBPACK_IMPORTED_MODULE_3__.c,Object(D_fpt_ReactJS_react_bootstrap_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(D_fpt_ReactJS_react_bootstrap_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args),{},{value:value,onChange:setValue}))}.bind({});ToggleButtonGroup_Story.args={options:[{name:"Active",value:"1"},{name:"Radio",value:"2"},{name:"Radio",value:"3"}],name:"toggle-button-group"},ToggleButtonGroup_Story.parameters=Object(D_fpt_ReactJS_react_bootstrap_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => {\n  const [value, setValue] = useState('1');\n  return <ToggleButtonGroup {...args} value={value} onChange={setValue} />;\n}"}},ToggleButtonGroup_Story.parameters)},854:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(0);var esm=__webpack_require__(13),dist_esm=__webpack_require__(217),code_brackets=__webpack_require__.p+"static/media/code-brackets.2e1112d7.svg",colors=__webpack_require__.p+"static/media/colors.a4bd0486.svg",comments=__webpack_require__.p+"static/media/comments.a3859089.svg",direction=__webpack_require__.p+"static/media/direction.b770f9af.svg",flow=__webpack_require__.p+"static/media/flow.edad2ac1.svg",assets_plugin=__webpack_require__.p+"static/media/plugin.d494b228.svg",repo=__webpack_require__.p+"static/media/repo.6d496322.svg",stackalt=__webpack_require__.p+"static/media/stackalt.dba9fbb3.svg";function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}const layoutProps={};function MDXContent({components:components,...props}){return Object(esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)(dist_esm.b,{title:"Example/Introduction",mdxType:"Meta"}),Object(esm.b)("style",null,"\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n  \n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n  \n"),Object(esm.b)("h1",{id:"welcome-to-storybook"},"Welcome to Storybook"),Object(esm.b)("p",null,"Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",Object(esm.b)("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."),Object(esm.b)("p",null,"Browse example stories now by navigating to them in the sidebar.\nView their code in the ",Object(esm.b)("inlineCode",{parentName:"p"},"src/stories")," directory to learn how they work.\nWe recommend building UIs with a ",Object(esm.b)("a",{parentName:"p",href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer"},Object(esm.b)("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),Object(esm.b)("div",{className:"subheading"},"Configure"),Object(esm.b)("div",{className:"link-list"},Object(esm.b)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},Object(esm.b)("img",{src:assets_plugin,alt:"plugin"}),Object(esm.b)("span",null,Object(esm.b)("strong",null,"Presets for popular tools"),"Easy setup for TypeScript, SCSS and more.")),Object(esm.b)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank"},Object(esm.b)("img",{src:stackalt,alt:"Build"}),Object(esm.b)("span",null,Object(esm.b)("strong",null,"Build configuration"),"How to customize webpack and Babel")),Object(esm.b)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank"},Object(esm.b)("img",{src:colors,alt:"colors"}),Object(esm.b)("span",null,Object(esm.b)("strong",null,"Styling"),"How to load and configure CSS libraries")),Object(esm.b)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank"},Object(esm.b)("img",{src:flow,alt:"flow"}),Object(esm.b)("span",null,Object(esm.b)("strong",null,"Data"),"Providers and mocking for data libraries"))),Object(esm.b)("div",{className:"subheading"},"Learn"),Object(esm.b)("div",{className:"link-list"},Object(esm.b)("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank"},Object(esm.b)("img",{src:repo,alt:"repo"}),Object(esm.b)("span",null,Object(esm.b)("strong",null,"Storybook documentation"),"Configure, customize, and extend")),Object(esm.b)("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank"},Object(esm.b)("img",{src:direction,alt:"direction"}),Object(esm.b)("span",null,Object(esm.b)("strong",null,"In-depth guides"),"Best practices from leading teams")),Object(esm.b)("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank"},Object(esm.b)("img",{src:code_brackets,alt:"code"}),Object(esm.b)("span",null,Object(esm.b)("strong",null,"GitHub project"),"View the source and add issues")),Object(esm.b)("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank"},Object(esm.b)("img",{src:comments,alt:"comments"}),Object(esm.b)("span",null,Object(esm.b)("strong",null,"Discord chat"),"Chat with maintainers and the community"))),Object(esm.b)("div",{className:"tip-wrapper"},Object(esm.b)("span",{className:"tip"},"Tip"),"Edit the Markdown in"," ",Object(esm.b)("code",null,"src/stories/Introduction.stories.mdx")))}MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Example/Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>Object(esm.b)(dist_esm.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(esm.b)(MDXContent,null))};__webpack_exports__.default=componentMeta},863:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var client_api=__webpack_require__(873),esm=__webpack_require__(4),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[486,2,3]]]);