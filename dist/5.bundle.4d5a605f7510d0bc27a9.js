(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{142:function(e,a,l){(e.exports=l(60)(!0)).push([e.i,".switch{border:none;width:44px;height:20px;border-radius:12px;cursor:pointer;display:inline-block;background-color:#2b364c}.switch.disabled{cursor:not-allowed}.switch.on>.switchToggle{background:#0d54e1;left:24px}.switchToggle{border:none;width:20px;height:20px;left:0;border-radius:12px;background:#fff;position:relative;transition:left .2s ease-in-out}","",{version:3,sources:["/Users/tarsingh4/Git/code/swevens/git/formik-yup-react-forms/src/components/atoms/ToggleButton/toggle.css"],names:[],mappings:"AAAA,QACI,YAAY,AACZ,WAAW,AACX,YAAY,AACZ,mBAAmB,AACnB,eAAe,AACf,qBAAqB,AACrB,wBAAyB,CAC5B,AACD,iBAEE,kBAAmB,CACpB,AACD,yBAEI,mBAAmB,AACnB,SAAU,CACb,AACD,cACI,YAAY,AACZ,WAAW,AACX,YAAY,AACZ,OAAO,AACP,mBAAmB,AACnB,gBAAiB,AACjB,kBAAkB,AAClB,+BAAgC,CACnC",file:"toggle.css",sourcesContent:[".switch {\n    border: none;\n    width: 44px;\n    height: 20px;\n    border-radius: 12px;\n    cursor: pointer;\n    display: inline-block;\n    background-color: #2b364c;\n}\n.switch.disabled\n{\n  cursor: not-allowed;\n}\n.switch.on > .switchToggle\n{\n    background: #0d54e1;\n    left: 24px;\n}\n.switchToggle {\n    border: none;\n    width: 20px;\n    height: 20px;\n    left: 0;\n    border-radius: 12px;\n    background: white;\n    position: relative;\n    transition: left .2s ease-in-out;\n}"],sourceRoot:""}])},143:function(e,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=function(){function e(e,a){for(var l=0;l<a.length;l++){var t=a[l];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(a,l,t){return l&&e(a.prototype,l),t&&e(a,t),a}}(),n=i(l(11)),r=i(l(1)),o=i(l(80)),u=i(l(142));function i(e){return e&&e.__esModule?e:{default:e}}n.default.bool,n.default.func.isRequired,n.default.bool,n.default.string,n.default.object;var s=r.default.createElement(o.default,{type:"toggleEnabled",height:"20",width:"20"}),b=function(e){function a(e){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var l=function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return l.getIcon=l.getIcon.bind(l),l.onKeyUp=l.onKeyUp.bind(l),l}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,r.default.Component),t(a,[{key:"onKeyUp",value:function(e){e.preventDefault(),13===e.keyCode&&this.props.onToggle()}},{key:"getIcon",value:function(){return this.props.on?s:""}},{key:"render",value:function(){var e=this.props,a=e.on,l=e.onToggle,t=e.className,n=[u.default.switch,t,a?u.default.on:""].join(" ");return r.default.createElement("a",{className:n,tabIndex:"0",onClick:function(e){l(e)},onKeyUp:this.onKeyUp},r.default.createElement("div",{className:u.default.switchToggle},this.getIcon()))}}]),a}();b.defaultProps={enabled:!0,className:""},a.default=b},144:function(e,a,l){(e.exports=l(60)(!0)).push([e.i,".round{border-radius:10000px;height:50px!important;margin:0 .7rem;width:50px;background:transparent;border:1px solid #fff;cursor:pointer;font-size:20px;color:#fff}.flat,.round{font-weight:300}.flat{height:48px!important;border:none;background:#fff;color:#333;border:1px solid #ccc;font-size:16px;padding:0 10px;min-width:160px}.invalid{opacity:.5;background:#f92b21!important;border:1px solid #ff6f61!important;color:#fff!important}","",{version:3,sources:["/Users/tarsingh4/Git/code/swevens/git/formik-yup-react-forms/src/components/atoms/Button/button.css"],names:[],mappings:"AAAA,OACI,sBAAsB,AACtB,sBAAuB,AACvB,eAAiB,AACjB,WAAW,AACX,uBAAwB,AACxB,sBAAsB,AAEtB,eAAe,AACf,eAAe,AACf,UAAY,CAEf,AAED,aAHI,eAAgB,CAanB,AAVD,MACI,sBAAuB,AACvB,YAAY,AACZ,gBAAkC,AAClC,WAAW,AACX,sBAAsB,AACtB,eAAe,AAEf,eAAsB,AACtB,eAAgB,CACnB,AAED,SACI,WAAY,AACZ,6BAA8B,AAC9B,mCAAoC,AACpC,oBAAsB,CACzB",file:"button.css",sourcesContent:[".round {\n    border-radius: 10000px;\n    height: 50px !important;\n    margin: 0px .7rem;\n    width: 50px;\n    background:rgba(0,0,0,0);\n    border: 1px solid #fff;\n    font-weight: 300;\n    cursor: pointer;\n    font-size: 20px;\n    color: white;\n    font-weight: 300;\n}\n\n.flat {\n    height: 48px !important;\n    border: none;\n    background: rgba(255, 255, 255, 1);\n    color: #333;\n    border: 1px solid #ccc;\n    font-size: 16px;\n    font-weight: 300;\n    padding: 0 10px 0 10px;\n    min-width: 160px;\n}\n\n.invalid {\n    opacity: 0.5;\n    background: #f92b21 !important;\n    border: 1px solid #ff6f61 !important;\n    color: #fff !important;\n}"],sourceRoot:""}])},145:function(e,a,l){(e.exports=l(60)(!0)).push([e.i,".input{background:transparent;border:none;border-bottom:1px solid hsla(0,0%,100%,.75);height:56px;width:100%;padding:0;color:#fff}.error{border-bottom:1px solid #fff}.errorLabel{color:#fff;font-size:16px;padding-left:3px}.errorItem{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-top:3px}.input:focus{outline:none;border-bottom:3px solid #fff}:-ms-input-placeholder{opacity:1}::placeholder{color:hsla(0,0%,100%,.5);opacity:1}:-ms-input-placeholder,::-ms-input-placeholder{color:hsla(0,0%,100%,.5)}","",{version:3,sources:["/Users/tarsingh4/Git/code/swevens/git/formik-yup-react-forms/src/components/molecules/Input/input.css"],names:[],mappings:"AAAA,OACE,uBAA4B,AAC5B,YAAY,AACZ,4CAAkD,AAClD,YAAY,AACZ,WAAW,AACX,UAAY,AACZ,UAAW,CACZ,AAED,OACE,4BAA6B,CAC9B,AAED,YACE,WAAW,AACX,eAAe,AACf,gBAAiB,CAClB,AAED,WACE,oBAAa,AAAb,aAAa,AACb,sBAAmB,AAAnB,mBAAmB,AACnB,cAAe,CAChB,AAED,aACE,aAAa,AACb,4BAA6B,CAC9B,AAED,uBAGE,SAAU,CACX,AAJD,cAEE,yBAA+B,AAC/B,SAAU,CACX,AAOD,+CAEE,wBAA+B,CAChC",file:"input.css",sourcesContent:[".input {\n  background: rgba(0, 0, 0, 0);\n  border: none;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.75);\n  height: 56px;\n  width: 100%;\n  padding: 0px;\n  color: #fff;\n}\n\n.error {\n  border-bottom: 1px solid #fff;\n}\n\n.errorLabel {\n  color: #fff;\n  font-size: 16px;\n  padding-left: 3px;\n}\n\n.errorItem {\n  display: flex;\n  align-items: center;\n  margin-top: 3px;\n}\n\n.input:focus {\n  outline: none;\n  border-bottom: 3px solid #fff;\n}\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: rgba(255, 255, 255, 0.5);\n  opacity: 1; /* Firefox */\n}\n\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: rgba(255, 255, 255, 0.5);\n}\n\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: rgba(255, 255, 255, 0.5);\n}\n"],sourceRoot:""}])},146:function(e,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.overEighteen=function(e){var a=e.day,l=e.month,t=e.year;if(a&&l&&t){var n=new Date,r=Number(l)-1;n.setFullYear(t,r,a);var o=new Date;return o.setFullYear(o.getFullYear()-18),o>=n}},a.emailSpecialChar=function(e){if(e&&0===e.length||!e)return!0;var a=e.match(/^[a-zA-Z0-9\-\_\@\-\+\.]+/);if(null!==a&&a[0].length===e.length)return!0;return!1},a.specialRequired=function(e){if(e){return e.search("^[a-zA-Z]*[(0-9)|(\\?\\_\\!\\@\\#\\$\\%\\-\\+)]+[a-zA-Z0-9\\?\\_\\!\\@\\#\\$\\%\\-\\+]*$")>=0}return!1},a.special=function(e){if(e){var a=e.match("^[a-zA-Z0-9\\?\\_\\!\\@\\#\\$\\%\\-\\+]+");return a==e}return!1},a.datePattern=function(e){if(e){var a=e.match(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/);return a[0]===e}return!1}},286:function(e,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=function(){function e(e,a){for(var l=0;l<a.length;l++){var t=a[l];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(a,l,t){return l&&e(a.prototype,l),t&&e(a,t),a}}(),n=v(l(1)),r=(v(l(11)),l(45)),o=function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(a[l]=e[l]);return a.default=e,a}(l(55)),u=l(23),i=l(18),s=l(146),b=v(l(44)),c=v(l(43)),d=v(l(30)),p=l(34),f=v(l(87));function v(e){return e&&e.__esModule?e:{default:e}}var A=n.default.createElement("div",{className:"small-3"}),h=n.default.createElement("div",{className:"small-3"}),m=function(e){function a(){return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,n.default.Component),t(a,[{key:"componentDidMount",value:function(){this.props.stepCView.email&&(this.props.setTouched({email:!0}),this.props.setFieldValue("email",this.props.stepCView.email,!0),this.props.setTouched({subscribe:!0}),this.props.setFieldValue("subscribe",this.props.stepCView.subscribe,!0))}},{key:"render",value:function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement(d.default,{backAction:this.props.previousStep,titles:p.getSectionTitles.StepC,progressPercentage:60}),n.default.createElement("section",{className:"grid-container"},n.default.createElement("div",{className:"grid-x"},A,n.default.createElement("div",{className:"small-6 m2"},n.default.createElement(b.default,{name:"email",type:"email",label:"EMAIL ADDRESS",placeholder:"Email address",isOptional:!1,isClearable:!0,value:this.props.values.email,error:this.props.errors.email,touched:this.props.touched.email,onBlur:this.props.setFieldTouched,onChange:this.props.handleChange,autoFocus:!0,maxlength:60}))),n.default.createElement("div",{className:"grid-x m2"},h,n.default.createElement("div",{className:"small-6 m2"},n.default.createElement(f.default,{onChange:this.props.setFieldValue,name:"subscribe",value:this.props.values.subscribe,label:"subscribe to promotions?"}))),n.default.createElement("div",{className:"grid-x"},n.default.createElement("div",{className:"small-12 text-center"},n.default.createElement(c.default,{variation:"flat",onClick:this.props.submitForm,className:this.props.isValid?"":"invalid"},"Next")))))}}]),a}();a.default=(0,u.connect)(function(e){return{stepCView:e.views.stepC}})((0,r.withFormik)({mapPropsToValues:function(){return{email:"",subscribe:!0}},validationSchema:o.object().shape({email:o.string().required("Please enter a valid email").email("Please enter a valid email").min(8,"Minimum 8 characters").max(60,"Maximum 60 characters").test("emailSpecialChar","Only @ - _ .+ special characters",s.emailSpecialChar)}),handleSubmit:function(e,a){var l=a.props;l.dispatch({type:i.SET_STEPC_CONTENT,payload:{email:e.email,subscribe:e.subscribe}}),l.gotoView("StepD")}})(m))},34:function(e,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=a.getCountries=function(){return[{value:"AF",label:"Afghanistan"},{value:"AX",label:"Aland Islands"},{value:"AL",label:"Albania"},{value:"DZ",label:"Algeria"},{value:"AS",label:"American Samoa"},{value:"AD",label:"Andorra"},{value:"AO",label:"Angola"},{value:"AI",label:"Anguilla"},{value:"AQ",label:"Antarctica"},{value:"AG",label:"Antigua and Barbuda"},{value:"AR",label:"Argentina"},{value:"AM",label:"Armenia"},{value:"AW",label:"Aruba"},{value:"AU",label:"Australia"},{value:"AT",label:"Austria"},{value:"AZ",label:"Azerbaijan"},{value:"BS",label:"Bahamas"},{value:"BH",label:"Bahrain"},{value:"BD",label:"Bangladesh"},{value:"BB",label:"Barbados"},{value:"BY",label:"Belarus"},{value:"BE",label:"Belgium"},{value:"BZ",label:"Belize"},{value:"BJ",label:"Benin"},{value:"BM",label:"Bermuda"},{value:"BT",label:"Bhutan"},{value:"BO",label:"Bolivia"},{value:"BA",label:"Bosnia and Herzegovina"},{value:"BW",label:"Botswana"},{value:"BV",label:"Bouvet Island"},{value:"BR",label:"Brazil"},{value:"IO",label:"British Indian Ocean Territory"},{value:"VG",label:"British Virgin Islands"},{value:"BN",label:"Brunei"},{value:"BG",label:"Bulgaria"},{value:"BF",label:"Burkina Faso"},{value:"BI",label:"Burundi"},{value:"KH",label:"Cambodia"},{value:"CM",label:"Cameroon"},{value:"CA",label:"Canada"},{value:"CV",label:"Cape Verde"},{value:"BQ",label:"Caribbean Netherlands"},{value:"KY",label:"Cayman Islands"},{value:"CF",label:"Central African Republic"},{value:"TD",label:"Chad"},{value:"CL",label:"Chile"},{value:"CN",label:"China"},{value:"CX",label:"Christmas Island"},{value:"CC",label:"Cocos (Keeling) Islands"},{value:"CO",label:"Colombia"},{value:"KM",label:"Comoros"},{value:"CG",label:"Congo (Brazzaville)"},{value:"CD",label:"Congo (Kinshasa)"},{value:"CK",label:"Cook Islands"},{value:"CR",label:"Costa Rica"},{value:"HR",label:"Croatia"},{value:"CU",label:"Cuba"},{value:"CW",label:"Curaçao"},{value:"CY",label:"Cyprus"},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"},{value:"DJ",label:"Djibouti"},{value:"DM",label:"Dominica"},{value:"DO",label:"Dominican Republic"},{value:"EC",label:"Ecuador"},{value:"EG",label:"Egypt"},{value:"SV",label:"El Salvador"},{value:"GQ",label:"Equatorial Guinea"},{value:"ER",label:"Eritrea"},{value:"EE",label:"Estonia"},{value:"ET",label:"Ethiopia"},{value:"FK",label:"Falkland Islands"},{value:"FO",label:"Faroe Islands"},{value:"FJ",label:"Fiji"},{value:"FI",label:"Finland"},{value:"FR",label:"France"},{value:"GF",label:"French Guiana"},{value:"PF",label:"French Polynesia"},{value:"TF",label:"French Southern Territories"},{value:"GA",label:"Gabon"},{value:"GM",label:"Gambia"},{value:"GE",label:"Georgia"},{value:"DE",label:"Germany"},{value:"GH",label:"Ghana"},{value:"GI",label:"Gibraltar"},{value:"GR",label:"Greece"},{value:"GL",label:"Greenland"},{value:"GD",label:"Grenada"},{value:"GP",label:"Guadeloupe"},{value:"GU",label:"Guam"},{value:"GT",label:"Guatemala"},{value:"GG",label:"Guernsey"},{value:"GN",label:"Guinea"},{value:"GW",label:"Guinea-Bissau"},{value:"GY",label:"Guyana"},{value:"HT",label:"Haiti"},{value:"HM",label:"Heard Island and McDonald Islands"},{value:"HN",label:"Honduras"},{value:"HK",label:"Hong Kong S.A.R."},{value:"HU",label:"Hungary"},{value:"IS",label:"Iceland"},{value:"IN",label:"India"},{value:"ID",label:"Indonesia"},{value:"IR",label:"Iran"},{value:"IQ",label:"Iraq"},{value:"IE",label:"Ireland"},{value:"IM",label:"Isle of Man"},{value:"IL",label:"Israel"},{value:"IT",label:"Italy"},{value:"CI",label:"Ivory Coast"},{value:"JM",label:"Jamaica"},{value:"JP",label:"Japan"},{value:"JE",label:"Jersey"},{value:"JO",label:"Jordan"},{value:"KZ",label:"Kazakhstan"},{value:"KE",label:"Kenya"},{value:"KI",label:"Kiribati"},{value:"KW",label:"Kuwait"},{value:"KG",label:"Kyrgyzstan"},{value:"LA",label:"Laos"},{value:"LV",label:"Latvia"},{value:"LB",label:"Lebanon"},{value:"LS",label:"Lesotho"},{value:"LR",label:"Liberia"},{value:"LY",label:"Libya"},{value:"LI",label:"Liechtenstein"},{value:"LT",label:"Lithuania"},{value:"LU",label:"Luxembourg"},{value:"MO",label:"Macao S.A.R."},{value:"MK",label:"Macedonia"},{value:"MG",label:"Madagascar"},{value:"MW",label:"Malawi"},{value:"MY",label:"Malaysia"},{value:"MV",label:"Maldives"},{value:"ML",label:"Mali"},{value:"MT",label:"Malta"},{value:"MH",label:"Marshall Islands"},{value:"MQ",label:"Martinique"},{value:"MR",label:"Mauritania"},{value:"MU",label:"Mauritius"},{value:"YT",label:"Mayotte"},{value:"MX",label:"Mexico"},{value:"FM",label:"Micronesia"},{value:"MD",label:"Moldova"},{value:"MC",label:"Monaco"},{value:"MN",label:"Mongolia"},{value:"ME",label:"Montenegro"},{value:"MS",label:"Montserrat"},{value:"MA",label:"Morocco"},{value:"MZ",label:"Mozambique"},{value:"MM",label:"Myanmar"},{value:"NA",label:"Namibia"},{value:"NR",label:"Nauru"},{value:"NP",label:"Nepal"},{value:"NL",label:"Netherlands"},{value:"AN",label:"Netherlands Antilles"},{value:"NC",label:"New Caledonia"},{value:"NZ",label:"New Zealand"},{value:"NI",label:"Nicaragua"},{value:"NE",label:"Niger"},{value:"NG",label:"Nigeria"},{value:"NU",label:"Niue"},{value:"NF",label:"Norfolk Island"},{value:"KP",label:"North Korea"},{value:"MP",label:"Northern Mariana Islands"},{value:"NO",label:"Norway"},{value:"OM",label:"Oman"},{value:"PK",label:"Pakistan"},{value:"PW",label:"Palau"},{value:"PS",label:"Palestinian Territory"},{value:"PA",label:"Panama"},{value:"PG",label:"Papua New Guinea"},{value:"PY",label:"Paraguay"},{value:"PE",label:"Peru"},{value:"PH",label:"Philippines"},{value:"PN",label:"Pitcairn"},{value:"PL",label:"Poland"},{value:"PT",label:"Portugal"},{value:"PR",label:"Puerto Rico"},{value:"QA",label:"Qatar"},{value:"RE",label:"Reunion"},{value:"RO",label:"Romania"},{value:"RU",label:"Russia"},{value:"RW",label:"Rwanda"},{value:"BL",label:"Saint Barthélemy"},{value:"SH",label:"Saint Helena"},{value:"KN",label:"Saint Kitts and Nevis"},{value:"LC",label:"Saint Lucia"},{value:"MF",label:"Saint Martin (French part)"},{value:"PM",label:"Saint Pierre and Miquelon"},{value:"VC",label:"Saint Vincent and the Grenadines"},{value:"WS",label:"Samoa"},{value:"SM",label:"San Marino"},{value:"ST",label:"Sao Tome and Principe"},{value:"SA",label:"Saudi Arabia"},{value:"SN",label:"Senegal"},{value:"RS",label:"Serbia"},{value:"SC",label:"Seychelles"},{value:"SL",label:"Sierra Leone"},{value:"SG",label:"Singapore"},{value:"SX",label:"Sint Maarten"},{value:"SK",label:"Slovakia"},{value:"SI",label:"Slovenia"},{value:"SB",label:"Solomon Islands"},{value:"SO",label:"Somalia"},{value:"ZA",label:"South Africa"},{value:"GS",label:"South Georgia and the South Sandwich Islands"},{value:"KR",label:"South Korea"},{value:"SS",label:"South Sudan"},{value:"ES",label:"Spain"},{value:"LK",label:"Sri Lanka"},{value:"SD",label:"Sudan"},{value:"SR",label:"Suriname"},{value:"SJ",label:"Svalbard and Jan Mayen"},{value:"SZ",label:"Swaziland"},{value:"SE",label:"Sweden"},{value:"CH",label:"Switzerland"},{value:"SY",label:"Syria"},{value:"TW",label:"Taiwan"},{value:"TJ",label:"Tajikistan"},{value:"TZ",label:"Tanzania"},{value:"TH",label:"Thailand"},{value:"TL",label:"Timor-Leste"},{value:"TG",label:"Togo"},{value:"TK",label:"Tokelau"},{value:"TO",label:"Tonga"},{value:"TT",label:"Trinidad and Tobago"},{value:"TN",label:"Tunisia"},{value:"TR",label:"Turkey"},{value:"TM",label:"Turkmenistan"},{value:"TC",label:"Turks and Caicos Islands"},{value:"TV",label:"Tuvalu"},{value:"VI",label:"U.S. Virgin Islands"},{value:"UG",label:"Uganda"},{value:"UA",label:"Ukraine"},{value:"AE",label:"United Arab Emirates"},{value:"GB",label:"United Kingdom"},{value:"US",label:"United States"},{value:"UM",label:"United States Minor Outlying Islands"},{value:"UY",label:"Uruguay"},{value:"UZ",label:"Uzbekistan"},{value:"VU",label:"Vanuatu"},{value:"VA",label:"Vatican"},{value:"VE",label:"Venezuela"},{value:"VN",label:"Vietnam"},{value:"WF",label:"Wallis and Futuna"},{value:"EH",label:"Western Sahara"},{value:"YE",label:"Yemen"},{value:"ZM",label:"Zambia"},{value:"ZW",label:"Zimbabwe"}]};a.getCountryName=function(e){return t().filter(function(a){return a.value===e})[0].label},a.getMonths=function(){return Array.apply(0,Array(12)).map(function(e,a){return{value:a+1,label:a+1}})},a.getYears=function(){var e=(new Date).getFullYear();return Array.apply(0,Array(10)).map(function(a,l){return{value:l+e,label:(e+l).toString()}})},a.getTitles=function(){return[{label:"Mr",value:"Mr"},{label:"Ms",value:"Ms"},{label:"Mrs",value:"Mrs"}]},a.getSectionTitles={StepA:{stepTitle:"Enter your details",subTitle:""},StepB:{stepTitle:"Select Destination and dates",subTitle:""},StepC:{stepTitle:"Contact details",subTitle:""},StepD:{stepTitle:"Payment Details",subTitle:""},StepE:{stepTitle:"Congratulations",subTitle:"Your booking is confirmed"}}},43:function(e,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t])}return e},n=s(l(1)),r=s(l(11)),o=s(l(12)),u=s(l(80)),i=s(l(144));function s(e){return e&&e.__esModule?e:{default:e}}r.default.string,r.default.string,r.default.string,r.default.node,r.default.object,r.default.bool,r.default.bool,r.default.bool,r.default.func;var b=n.default.createElement(u.default,{key:"loader",width:"31",height:"31",type:"loader"}),c=function(e,a){return n.default.createElement(u.default,t({className:(0,o.default)(e.className,a),key:e.type,width:e.width,height:e.height,type:e.type},e.attr))},d=function(e,a,l,t){var n=t?b:e;return a?l?[n,c(a,"m-l-2")]:[c(a,"m-r-2"),n]:n},p=function(e){var a=e.children,l=e.iconProps,r=e.IconAfterContent,u=e.variation,s=e.isFetching,b=e.onClick,c=e.className,p=function(e,a){var l={};for(var t in e)a.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(l[t]=e[t]);return l}(e,["children","iconProps","IconAfterContent","variation","isFetching","onClick","className"]),f=[(0,o.default)(i.default[u],i.default[c])];return n.default.createElement("button",t({type:"button"},p,{className:f,onClick:function(e){b(e)}}),d(a,l,r,s))};p.defaultProps={className:null,IconAfterContent:!1,disabled:!1},a.default=p},44:function(e,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=function(){function e(e,a){for(var l=0;l<a.length;l++){var t=a[l];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(a,l,t){return l&&e(a.prototype,l),t&&e(a,t),a}}(),n=i(l(1)),r=(i(l(11)),i(l(61))),o=i(l(145)),u=i(l(12));function i(e){return e&&e.__esModule?e:{default:e}}var s=n.default.createElement("span",null," (Optional)"),b=n.default.createElement("span",null," "),c=function(e){function a(e){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var l=function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return l.state={dirty:!1},l.getLabelElement=l.getLabelElement.bind(l),l.handleChange=l.handleChange.bind(l),l.handleReset=l.handleReset.bind(l),l.onBlur=l.onBlur.bind(l),l.getValidationMessage=l.getValidationMessage.bind(l),l.getValidationFailElement=l.getValidationFailElement.bind(l),l.handleResetInput=l.handleResetInput.bind(l),l}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,n.default.Component),t(a,[{key:"getIsOptional",value:function(e){return e?s:null}},{key:"getLabelElement",value:function(e,a){return!r.default.isNil(e)&&e.length>0?n.default.createElement("label",{htmlFor:this.props.name},b,n.default.createElement("span",null,this.getIsOptional(a)),a?null:this.getValidationMessage()):null}},{key:"getValidationFailElement",value:function(){return n.default.createElement("div",{className:o.default.errorItem},n.default.createElement("span",{className:o.default.errorLabel},"* ",this.props.error))}},{key:"isError",value:function(){return!(!this.state.dirty&&!this.props.touched||!this.props.error)}},{key:"getValidationMessage",value:function(){return(this.state.dirty||this.props.touched)&&this.props.error?this.getValidationFailElement():""}},{key:"disableSubmit",value:function(e){13==(e.charCode||e.keyCode||0)&&e.preventDefault()}},{key:"handleReset",value:function(){this.currentInput.setFocus()}},{key:"getInput",value:function(){var e=this,a=this.props,l=a.placeholder,t=a.type,r=a.disabled,i=a.name,s=a.value,b=a.maxlength,c=a.autoFocus;return n.default.createElement("input",{name:i,id:i,value:s,onChange:this.handleChange,onBlur:this.onBlur,onFocus:this.onFocus,placeholder:l,className:this.isError()?(0,u.default)(o.default.input,o.default.error):(0,u.default)(o.default.input),type:t,ref:function(a){e.currentInput=a},disabled:r,onKeyDown:this.onKeyDown,maxLength:b,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",autoFocus:c})}},{key:"handleChange",value:function(e){e.target.name=this.props.name,this.props.onChange(e),this.props.liveValidate&&this.setState({dirty:!0})}},{key:"handleResetInput",value:function(e){e.target.name=this.props.name,e.target.value="",this.props.onChange(e),this.props.onBlur(this.props.name,!1),this.setState({dirty:!1})}},{key:"onBlur",value:function(){this.props.onBlur(this.props.name,!0),this.setState({dirty:!0})}},{key:"render",value:function(){var e=this.props,a=e.label,l=e.isOptional;return n.default.createElement(n.default.Fragment,null,n.default.createElement("div",null,this.getInput()),this.getLabelElement(a,l))}}]),a}();c.defaultProps={placeholder:"",label:null,isOptional:!1,disabled:!1,error:""},a.default=c},87:function(e,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=function(){function e(e,a){for(var l=0;l<a.length;l++){var t=a[l];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(a,l,t){return l&&e(a.prototype,l),t&&e(a,t),a}}(),n=u(l(11)),r=u(l(1)),o=u(l(143));function u(e){return e&&e.__esModule?e:{default:e}}n.default.func.isRequired,n.default.bool,n.default.string,n.default.bool,n.default.string,n.default.string;var i=function(e){function a(e){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var l=function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return l.onChange=l.onChange.bind(l),l}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,r.default.Component),t(a,[{key:"onChange",value:function(){window.lastTouched=this.props.name,this.props.onChange(this.props.name,!this.props.value)}},{key:"render",value:function(){return r.default.createElement("div",{className:"flex-container align-right align-middle"},this.props.labelLeft?r.default.createElement("span",{className:"mr1"},this.props.labelLeft):"",r.default.createElement(o.default,{onToggle:this.onChange,on:this.props.value,name:this.props.name}),this.props.label?r.default.createElement("span",{className:"ml1"},this.props.label):"")}}]),a}();i.defaultProps={enabled:!0,onDisabledClick:function(){}},a.default=i}}]);
//# sourceMappingURL=5.bundle.4d5a605f7510d0bc27a9.js.map