(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{288:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),s=h(a(1)),l=(h(a(11)),a(45)),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(55)),i=a(61),o=a(23),u=h(a(62)),p=h(a(44)),c=h(a(30)),m=h(a(43)),d=a(18),f=a(34);function h(e){return e&&e.__esModule?e:{default:e}}var v=s.default.createElement("div",{className:"small-3"}),y=s.default.createElement("div",{className:"small-3"}),E=s.default.createElement("div",{className:"small-3"}),b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default.Component),r(t,[{key:"componentDidMount",value:function(){this.props.stepAstate.firstname&&this.props.stepAstate.lastname&&this.props.stepAstate.title&&(this.props.setTouched({title:!0,firstname:!0,lastname:!0}),this.props.setFieldValue("title",this.props.stepAstate.title,!0),this.props.setFieldValue("firstname",this.props.stepAstate.firstname,!0),this.props.setFieldValue("lastname",this.props.stepAstate.lastname,!0))}},{key:"isValid",value:function(){var e=this.props,t=e.errors,a=e.touched;return!(!e.dirty||(0,i.isEmpty)(a)||!(0,i.isEmpty)(t))}},{key:"render",value:function(){return s.default.createElement(s.default.Fragment,null,s.default.createElement(c.default,{backAction:null,titles:f.getSectionTitles.StepA,progressPercentage:20}),s.default.createElement("section",{className:"grid-container"},s.default.createElement("div",{className:"grid-x"},v,s.default.createElement("div",{className:"m1 small-6"},s.default.createElement(u.default,{autoFocus:!0,options:(0,f.getTitles)(),label:"TITLE",name:"title",type:"text",error:this.props.errors.title,touched:this.props.touched.title,value:this.props.values.title,onBlur:this.props.setFieldTouched,onChange:this.props.setFieldValue,placeholder:"Select title",isOptional:!1,searchable:!1}))),s.default.createElement("div",{className:"grid-x"},y,s.default.createElement("div",{className:"m1 small-6"},s.default.createElement(p.default,{name:"firstname",type:"text",label:"FIRST NAME",value:this.props.values.firstname,error:this.props.errors.firstname,touched:this.props.touched.firstname,onBlur:this.props.setFieldTouched,onChange:this.props.handleChange,placeholder:"Enter your first name",isOptional:!1,isClearable:!0,maxlength:16}))),s.default.createElement("div",{className:"grid-x"},E,s.default.createElement("div",{className:"m1 small-6"},s.default.createElement(p.default,{name:"lastname",type:"text",label:"LAST NAME",value:this.props.values.lastname,error:this.props.errors.lastname,touched:this.props.touched.lastname,onBlur:this.props.setFieldTouched,onChange:this.props.handleChange,placeholder:"Enter your last name",isOptional:!1,isClearable:!0,maxlength:24}))),s.default.createElement("div",{className:"grid-x m2"},s.default.createElement("div",{className:"small-12 text-center"},s.default.createElement(m.default,{variation:"flat",key:"continue",onClick:this.props.submitForm,className:this.props.isValid?"":"invalid"},"Next")))))}}]),t}();t.default=(0,o.connect)(function(e){return{stepAstate:e.views.stepA}})((0,l.withFormik)({mapPropsToValues:function(e){return{title:"",firstname:"",lastname:""}},validationSchema:n.object().shape({title:n.string().required("Required"),firstname:n.string().required("Please enter your First Name").min(3,"Minimum 3 letters"),lastname:n.string().required("Please enter your Last Name").min(3,"Minimum 3 letters")}),handleSubmit:function(e,t){var a=t.props;a.dispatch({type:d.SET_STEPA_CONTENT,payload:{title:e.title,firstname:e.firstname,lastname:e.lastname}}),a.gotoView("StepB")}})(b))}}]);
//# sourceMappingURL=7.bundle.4d5a605f7510d0bc27a9.js.map