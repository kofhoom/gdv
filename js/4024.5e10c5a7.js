"use strict";(self["webpackChunkgdv_frontend"]=self["webpackChunkgdv_frontend"]||[]).push([[4024,4364],{14364:function(e,t,s){s.r(t),s.d(t,{default:function(){return l}});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"info-navi-wrap"},[t("ul",{staticClass:"info-navi-ul"},[t("li",{staticClass:"info-navi-li"},[t("img",{staticClass:"navi-images",attrs:{src:s(1363),alt:"네비게이션이미지"}})]),t("li",{staticClass:"info-navi-li lines"},[e._v("·")]),t("li",{staticClass:"info-navi-li"},[e._v(e._s(e.headerMenu.menuNm))]),t("li",{staticClass:"info-navi-li lines"},[e._v("·")]),t("li",{staticClass:"info-navi-li"},[e._v(" "+e._s(e.getMenuList(e.headerMenu.menuId).filter((t=>t.menuId==(void 0==e.path[1]?e.path[0]:e.path[1])))[0].menuNm)+" ")]),void 0!=e.path[1]?t("li",{staticClass:"info-navi-li lines"},[e._v("·")]):e._e(),t("li",{staticClass:"info-navi-li"},e._l(e.getMenuList(e.headerMenu.menuId),(function(s){return t("div",{key:s.menuId},e._l(e.getMenuList(s.menuId),(function(s){return t("div",{key:s.menuId},[t("span",{staticClass:"v"},[e._v(e._s(e.path[0]==s["menuId"]?s["menuNm"]:""))])])})),0)})),0)])])},a=[],n=(s(57658),s(20629)),o={data(){return{headerMenu:null,path:[]}},computed:{...(0,n.rn)("global",["menuList"]),...(0,n.Se)("global",["getMenuList","getAuthentication"])},methods:{init(){this.path=[],this.headerMenu=this.getHeaderMenu(this.menuList,this.getAuthentication().mid),this.headerMenu||setTimeout(this.init(),1e3)},getHeaderMenu(e,t){if(e&&t){const s=e.find((({menuId:e})=>e===t));return s?"0100000000"===s.upMenuId?s:(["com015001","com015002"].includes(s.pgmClssCd)&&this.path.push(s.menuId),this.getHeaderMenu(e,s.upMenuId)):(this.$seedsToken.setAuthentication({token:null,key:null,mid:this.$route.meta.mid}),null)}}},created(){this.init()}},r=o,d=s(1001),u=(0,d.Z)(r,i,a,!1,null,"6d1063dd",null),l=u.exports},87882:function(e,t,s){s.r(t),s.d(t,{default:function(){return f}});var i=s(64562),a=s(63486),n=s(10626),o=s(45517),r=s(81402),d=s(98064),u=function(){var e=this,t=e._self._c;return t("div",{staticClass:"total-info-content-wrap"},[t("div",{staticClass:"total-header-wrap"},[t("p",{staticClass:"total-header-title"},[e._v("설문참여")]),t("InfoNavigation")],1),t("div",{staticClass:"total-tap-box tap-box-900 survey"},[t(r.Z,{model:{value:e.currentTabIndex,callback:function(t){e.currentTabIndex=t},expression:"currentTabIndex"}},e._l(e.tabs,(function(s){return t(n.Z,{key:s.tabIndex,attrs:{tabindex:s.tabIndex}},[e._v(" "+e._s(s.title)+" ")])})),1)],1),0===e.currentTabIndex?t("div",{staticClass:"total-info-section"},[t("div",{staticClass:"total-info-content-wrap"},[t("div",{attrs:{id:"div-total-info-header"}}),t("div",{staticClass:"total-info-section"},[t("div",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading,expression:"!isLoading"}],staticClass:"total-tap-box tap-box-900 survey"},[t(d.Z,{model:{value:e.currentTabIndex,callback:function(t){e.currentTabIndex=t},expression:"currentTabIndex"}},e._l(e.tabs,(function(s){return t(o.Z,{key:s.tabIndex},[0===e.currentTabIndex?t("div",{staticClass:"survy-agree-box active"},[t("form",{attrs:{action:""}},[t("div",{staticClass:"survy-question-box mt61"},[t("div",{staticClass:"survy-question-list"},[t("div",{staticClass:"survy-question-list-title-box survy-box-p-900"},[t("p",[e._v(e._s(e.srvyTtl))])]),t("div",{staticClass:"survy-question-list-content survy-box-p-900"},[t("p",{staticClass:"survy-question-list-content-text"},[e._v(e._s(e.srvyGoal))])])])]),t("div",{staticClass:"survy-question-box mt26"},[t("div",{staticClass:"survy-question-list"},[t("div",{staticClass:"survy-question-list-title-box survy-box-p-900"},[t("p",{staticStyle:{"font-size":"16px"}},[e._v("개인정보 이용안내")])]),t("div",{staticClass:"survy-question-list-content survy-box-p-900"},[t("div",{staticClass:"agree-box"},[e._v(" "+e._s(e.prvcAgre)+" ")])]),t("div",{staticClass:"survy-question-check-box survy-box-check-900"},[t(a.Z,{staticClass:"survy-agree",staticStyle:{width:"19rem !important"},attrs:{loading:e.isLoading,label:"개인정보 수집 및 이용에 동의합니다."},model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}})],1)])]),t("div",{staticClass:"vue-bt-wrap align-right mt48"},[t(i.Z,{staticClass:"vue-bt",staticStyle:{background:"#707070"},attrs:{elevation:"0",height:"40px",width:"113px",loading:e.isLoading},on:{click:function(t){e.currentTabIndex=1}}},[e._v("다음")])],1)])]):e._e()])})),1)],1)])])]):t("DoSurvey")],1)},l=[],c=s(20629),v=s(35600),h=s(14364),p=s(25108),g={components:{DoSurvey:v["default"],InfoNavigation:h["default"]},data(){return{tabs:[{tabIndex:0,title:"설문안내 및 개인정보 동의"},{tabIndex:1,title:"설문하기"}],currentTabIndex:0,items:["예시1","예시2","예시3","예시4","예시5","예시6","예시7","예시8","예시9"],checkbox:!1,radioGroup:1,prvcAgre:"개인정보",srvyTtl:"",srvyGoal:""}},computed:{...(0,c.rn)("gdv-app",["srvyRegNo","gbn","survey","linkNo"]),...(0,c.Se)("global",["isLoading"])},watch:{currentTabIndex(e,t){1===e&&""!==this.prvcAgre&&!1===this.checkbox&&(this.showLoading(),this.$nextTick((()=>{this.currentTabIndex=0,setTimeout((()=>{this.hideLoading()}),300)})),this.showSuccess("개인정보 수집 및 이용에 동의하세요."))}},mounted(){""===this.prvcAgre?this.$parent.$emit("moveTabIndex",3):"5"!==this.gbn&&"7"!==this.gbn||this.$parent.$emit("moveTabIndex",3)},methods:{...(0,c.nv)("global",["showLoading","hideLoading","showSuccess","showError"]),...(0,c.nv)("gdv-app",["setGbn","setSrvyRegNo","setQuestionList","setSurvey","setDaesang"]),getSurv(){this.showLoading(),"1"===this.gbn||"4"===this.gbn?this.$apis.survey.getGetSurv(this.srvyRegNo,this.gbn).then((e=>{p.log2(e),"1"!==this.gbn?"0"!==e.data.response.doubleCheck&&"0"!==e.data.response.giganCheck&&"0"!==e.data.response.processCheck&&"N"!==e.data.response.sLimit?(this.setSurvey(e.data.response.survey[0]),this.prvcAgre=e.data.response.survey[0].prvcAgre,this.srvyTtl=e.data.response.survey[0].srvyTtl,this.srvyGoal=e.data.response.survey[0].srvyGoal,this.setDaesang(e.data.response.daesang),this.setQuestionList(e.data.response.questionList)):"0"===e.data.response.doubleCheck?(this.showError({message:"이미 완료한 설문입니다."}),this.$emit("moveTabIndex",0)):"0"===e.data.response.giganCheck?(this.showError({message:"설문 가능한 기간이 아닙니다."}),this.$emit("moveTabIndex",0)):"0"===e.data.response.processCheck?(this.showError({message:"진행중인 설문이 아닙니다."}),this.$emit("moveTabIndex",0)):"N"===e.data.response.sLimit&&(this.showError({message:"설문 가능 인원이 마감되었습니다."}),this.$emit("moveTabIndex",0)):(this.setSurvey(e.data.response.survey[0]),this.prvcAgre=e.data.response.survey[0].prvcAgre,this.srvyTtl=e.data.response.survey[0].srvyTtl,this.srvyGoal=e.data.response.survey[0].srvyGoal,this.setDaesang(e.data.response.daesang),this.setQuestionList(e.data.response.questionList))})).catch((e=>{p.log(e)})).finally((()=>{this.hideLoading()})):"5"===this.gbn||"7"===this.gbn?(this.showLoading(),this.$apis.survey.getGetOutSurvey(this.$route.query.linkNo).then((e=>{p.log2(e),"0"!==e.data.response.doubleCheck&&"0"!==e.data.response.giganCheck&&"0"!==e.data.response.processCheck&&"N"!==e.data.response.sLimit?(this.setSurvey(e.data.response.survey[0]),this.prvcAgre=e.data.response.survey[0].prvcAgre,this.srvyTtl=e.data.response.survey[0].srvyTtl,this.srvyGoal=e.data.response.survey[0].srvyGoal,this.setDaesang(e.data.response.daesang),this.setSrvyRegNo(e.data.response.srvyRegNo),this.setQuestionList(e.data.response.questionList)):"0"===e.data.response.doubleCheck?(alert("이미 완료한 설문입니다."),window.close()):"0"===e.data.response.giganCheck?(alert("신청 가능한 기간이 아닙니다."),window.close()):"0"===e.data.response.processCheck?(alert("진행중인 설문이 아닙니다."),window.close()):"N"===e.data.response.sLimit&&(alert("신청 가능 인원이 마감되었습니다."),window.close())})).catch((e=>{p.log(e)})).finally((()=>{this.hideLoading()}))):"3"!==this.gbn&&"6"!==this.gbn||(this.showLoading(),this.$apis.survey.getGetEmailSurvey(this.$route.query.idNo).then((e=>{p.log2(e),"0"!==e.data.response.doubleCheck&&"0"!==e.data.response.giganCheck&&"0"!==e.data.response.processCheck&&"N"!==e.data.response.sLimit?(this.setSurvey(e.data.response.survey[0]),this.prvcAgre=e.data.response.survey[0].prvcAgre,this.srvyTtl=e.data.response.survey[0].srvyTtl,this.srvyGoal=e.data.response.survey[0].srvyGoal,this.setDaesang(e.data.response.daesang),this.setSrvyRegNo(e.data.response.srvyRegNo),this.setQuestionList(e.data.response.questionList)):"0"===e.data.response.doubleCheck?(alert("이미 완료한 설문입니다."),window.close()):"0"===e.data.response.giganCheck?(alert("신청 가능한 기간이 아닙니다."),window.close()):"0"===e.data.response.processCheck?(alert("진행중인 설문이 아닙니다."),window.close()):"N"===e.data.response.sLimit&&(alert("신청 가능 인원이 마감되었습니다."),window.close())})).catch((e=>{p.log(e)})).finally((()=>{this.hideLoading()})))}},created(){this.getSurv()}},y=g,m=s(1001),b=(0,m.Z)(y,u,l,!1,null,null,null),f=b.exports},4245:function(){},45517:function(e,t,s){var i=s(40352);t["Z"]=i.Z.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem(){const e=i.Z.options.methods.genWindowItem.call(this);return e.data.domProps=e.data.domProps||{},e.data.domProps.id=this.id||this.value,e}}})},25942:function(e,t,s){s(57658);var i=s(98856);function a(){return!0}function n(e,t,s){if(!e||!1===o(e,s))return!1;const a=(0,i.e)(t);if("undefined"!==typeof ShadowRoot&&a instanceof ShadowRoot&&a.host===e.target)return!1;const n=("object"===typeof s.value&&s.value.include||(()=>[]))();return n.push(t),!n.some((t=>t.contains(e.target)))}function o(e,t){const s="object"===typeof t.value&&t.value.closeConditional||a;return s(e)}function r(e,t,s){const i="function"===typeof s.value?s.value:s.value.handler;t._clickOutside.lastMousedownWasOutside&&n(e,t,s)&&setTimeout((()=>{o(e,s)&&i&&i(e)}),0)}function d(e,t){const s=(0,i.e)(e);t(document),"undefined"!==typeof ShadowRoot&&s instanceof ShadowRoot&&t(s)}const u={inserted(e,t,s){const i=s=>r(s,e,t),a=s=>{e._clickOutside.lastMousedownWasOutside=n(s,e,t)};d(e,(e=>{e.addEventListener("click",i,!0),e.addEventListener("mousedown",a,!0)})),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[s.context._uid]={onClick:i,onMousedown:a}},unbind(e,t,s){e._clickOutside&&(d(e,(t=>{var i;if(!t||!(null===(i=e._clickOutside)||void 0===i?void 0:i[s.context._uid]))return;const{onClick:a,onMousedown:n}=e._clickOutside[s.context._uid];t.removeEventListener("click",a,!0),t.removeEventListener("mousedown",n,!0)})),delete e._clickOutside[s.context._uid])}};t["Z"]=u},1363:function(e,t,s){e.exports=s.p+"img/navi_icons.87406534.svg"}}]);