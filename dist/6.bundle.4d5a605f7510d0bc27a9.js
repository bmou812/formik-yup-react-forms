(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{142:function(e,t,n){(e.exports=n(60)(!0)).push([e.i,".switch{border:none;width:44px;height:20px;border-radius:12px;cursor:pointer;display:inline-block;background-color:#2b364c}.switch.disabled{cursor:not-allowed}.switch.on>.switchToggle{background:#0d54e1;left:24px}.switchToggle{border:none;width:20px;height:20px;left:0;border-radius:12px;background:#fff;position:relative;transition:left .2s ease-in-out}","",{version:3,sources:["/Users/tarsingh4/Git/code/swevens/git/formik-yup-react-forms/src/components/atoms/ToggleButton/toggle.css"],names:[],mappings:"AAAA,QACI,YAAY,AACZ,WAAW,AACX,YAAY,AACZ,mBAAmB,AACnB,eAAe,AACf,qBAAqB,AACrB,wBAAyB,CAC5B,AACD,iBAEE,kBAAmB,CACpB,AACD,yBAEI,mBAAmB,AACnB,SAAU,CACb,AACD,cACI,YAAY,AACZ,WAAW,AACX,YAAY,AACZ,OAAO,AACP,mBAAmB,AACnB,gBAAiB,AACjB,kBAAkB,AAClB,+BAAgC,CACnC",file:"toggle.css",sourcesContent:[".switch {\n    border: none;\n    width: 44px;\n    height: 20px;\n    border-radius: 12px;\n    cursor: pointer;\n    display: inline-block;\n    background-color: #2b364c;\n}\n.switch.disabled\n{\n  cursor: not-allowed;\n}\n.switch.on > .switchToggle\n{\n    background: #0d54e1;\n    left: 24px;\n}\n.switchToggle {\n    border: none;\n    width: 20px;\n    height: 20px;\n    left: 0;\n    border-radius: 12px;\n    background: white;\n    position: relative;\n    transition: left .2s ease-in-out;\n}"],sourceRoot:""}])},143:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=i(n(11)),a=i(n(1)),l=i(n(80)),s=i(n(142));function i(e){return e&&e.__esModule?e:{default:e}}o.default.bool,o.default.func.isRequired,o.default.bool,o.default.string,o.default.object;var u=a.default.createElement(l.default,{type:"toggleEnabled",height:"20",width:"20"}),c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getIcon=n.getIcon.bind(n),n.onKeyUp=n.onKeyUp.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r(t,[{key:"onKeyUp",value:function(e){e.preventDefault(),13===e.keyCode&&this.props.onToggle()}},{key:"getIcon",value:function(){return this.props.on?u:""}},{key:"render",value:function(){var e=this.props,t=e.on,n=e.onToggle,r=e.className,o=[s.default.switch,r,t?s.default.on:""].join(" ");return a.default.createElement("a",{className:o,tabIndex:"0",onClick:function(e){n(e)},onKeyUp:this.onKeyUp},a.default.createElement("div",{className:s.default.switchToggle},this.getIcon()))}}]),t}();c.defaultProps={enabled:!0,className:""},t.default=c},287:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=m(n(1)),a=(m(n(11)),n(45)),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(55)),s=n(23),i=m(n(62)),u=m(n(44)),c=m(n(43)),p=m(n(30)),d=n(34),f=n(18),h=m(n(87));function m(e){return e&&e.__esModule?e:{default:e}}var b=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onCountrySelected=n.onCountrySelected.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"componentDidMount",value:function(){this.props.stepBState.address&&this.props.stepBState.country&&(this.props.setTouched({country1:!0,country2:!0,date1:!0,date2:!0,return:!0}),this.props.setFieldValue("country1",this.props.stepBState.country1,!0),this.props.setFieldValue("country2",this.props.stepBState.country2,!0),this.props.setFieldValue("date1",this.props.stepBState.date1,!0),this.props.setFieldValue("date2",this.props.stepBState.date2,!0),this.props.setFieldValue("return",this.props.stepBState.return,!0))}},{key:"onCountrySelected",value:function(e,t){this.props.setFieldValue(e,t)}},{key:"render",value:function(){return o.default.createElement(o.default.Fragment,null,o.default.createElement(p.default,{backAction:this.props.previousStep,titles:d.getSectionTitles.StepB,progressPercentage:40}),o.default.createElement("section",{className:"grid-container"},o.default.createElement("div",{className:"grid-x m2"},o.default.createElement("div",{className:"small-6 m2 small-offset-3"},o.default.createElement(h.default,{onChange:this.props.setFieldValue,name:"returning",value:this.props.values.returning,label:"Return",labelLeft:"One Way"}))),o.default.createElement("div",{className:"grid-x m2"},o.default.createElement("div",{className:"small-6 small-offset-3"},o.default.createElement(i.default,{options:(0,d.getCountries)(),label:"",name:"country1",placeholder:"Boarding From:",isOptional:!1,searchable:!0,showIcons:!1,error:this.props.errors.country1,value:this.props.values.country1,touched:this.props.touched.country1,onBlur:this.props.setFieldTouched,onChange:this.onCountrySelected,inputMaxLength:50}))),o.default.createElement("div",{className:"grid-x m2"},o.default.createElement("div",{className:"small-6 small-offset-3"},o.default.createElement(i.default,{options:(0,d.getCountries)(),label:"",name:"country2",placeholder:"Travelling to:",isOptional:!1,searchable:!0,showIcons:!1,error:this.props.errors.country2,value:this.props.values.country2,touched:this.props.touched.country2,onBlur:this.props.setFieldTouched,onChange:this.onCountrySelected,inputMaxLength:50}))),o.default.createElement("div",{className:"grid-x m2"},o.default.createElement("div",{className:"small-3 small-offset-3"},o.default.createElement("div",{className:"panel"},o.default.createElement(u.default,{name:"date1",type:"date",label:"departure",value:this.props.values.date1,error:this.props.errors.date1,touched:this.props.touched.date1,onBlur:this.props.setFieldTouched,onChange:this.props.handleChange,placeholder:"Depart:",isOptional:!1,maxlength:16}))),o.default.createElement("div",{className:"small-3"},o.default.createElement("div",{className:"panel"},this.props.values.returning&&o.default.createElement(u.default,{name:"date2",type:"date",label:"Return",value:this.props.values.date2,error:this.props.errors.date2,touched:this.props.touched.date2,onBlur:this.props.setFieldTouched,onChange:this.props.handleChange,placeholder:"Return:",isOptional:!1,maxlength:16})))),o.default.createElement("div",{className:"grid-x"},o.default.createElement("div",{className:"small-12  text-center"},o.default.createElement(c.default,{variation:"flat",key:"continue",onClick:this.props.submitForm,className:this.props.isValid?"":"invalid"},"Next")))))}}]),t}();t.default=(0,s.connect)(function(e){return{stepBState:e.views.stepB}})((0,a.withFormik)({mapPropsToValues:function(e){return{country1:"AU",country2:"",date1:"",date2:"",returning:!0}},validationSchema:l.object().shape({country1:l.string().required("Required"),country2:l.string().required("Required"),date1:l.date().required("Required").min((new Date).toISOString(),"**Less than today?"),date2:l.date().when(["date1","returning"],function(e,t,n){return t?n.required("Required").test("datecheck","**Less than Start?",function(t){return t>=e}):n.notRequired()})}),handleSubmit:function(e,t){var n=t.props;n.dispatch({type:f.SET_STEPB_CONTENT,payload:{country1:e.country1,country2:e.country2,date1:e.date1,date2:e.date2,return:e.return}}),n.gotoView("StepC")}})(b))},87:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=s(n(11)),a=s(n(1)),l=s(n(143));function s(e){return e&&e.__esModule?e:{default:e}}o.default.func.isRequired,o.default.bool,o.default.string,o.default.bool,o.default.string,o.default.string;var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onChange=n.onChange.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r(t,[{key:"onChange",value:function(){window.lastTouched=this.props.name,this.props.onChange(this.props.name,!this.props.value)}},{key:"render",value:function(){return a.default.createElement("div",{className:"flex-container align-right align-middle"},this.props.labelLeft?a.default.createElement("span",{className:"mr1"},this.props.labelLeft):"",a.default.createElement(l.default,{onToggle:this.onChange,on:this.props.value,name:this.props.name}),this.props.label?a.default.createElement("span",{className:"ml1"},this.props.label):"")}}]),t}();i.defaultProps={enabled:!0,onDisabledClick:function(){}},t.default=i}}]);
//# sourceMappingURL=6.bundle.4d5a605f7510d0bc27a9.js.map