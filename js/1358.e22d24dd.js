"use strict";(self["webpackChunkgdv_frontend"]=self["webpackChunkgdv_frontend"]||[]).push([[1358],{38642:function(t,e,i){i.r(e),i.d(e,{default:function(){return f}});var s=i(64562),n=i(63486),a=i(31625),l=i(85166),o=i(89780),r=function(){var t=this,e=t._self._c;return t.tabIndex===t.viewIndex?e("div",{staticClass:"total-info-content-wrap"},[e("div",{staticClass:"total-info-section"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.preview,expression:"!preview"}],staticClass:"total-info-content-wrap"},[e("div",{attrs:{id:"div-total-info-header"}}),e("div",{staticClass:"total-info-section"},[t._m(0),e("div",{staticClass:"common-row-total mt15 mb47"},[e("div",{staticClass:"common-row-wrap half-900"},[e("div",{staticClass:"common-row-wrap half input-half"},[t._m(1),e("div",{staticClass:"common-row-content small"},[e(n.Z,{attrs:{value:t.items.ntcYn,color:"blue",width:"100%","true-value":"Y","false-value":"N",loading:t.isLoading,"hide-details":""},model:{value:t.items.ntcYn,callback:function(e){t.$set(t.items,"ntcYn",e)},expression:"items.ntcYn"}}),e("span",[t._v("공지여부 선택")])],1)]),e("div",{staticClass:"common-row-wrap half input-half"},[t._m(2),e("div",{staticClass:"common-row-content"},[e(n.Z,{attrs:{value:t.items.brdTfxYn,color:"blue",width:"100%","true-value":"Y","false-value":"N",loading:t.isLoading,"hide-details":""},model:{value:t.items.brdTfxYn,callback:function(e){t.$set(t.items,"brdTfxYn",e)},expression:"items.brdTfxYn"}}),e("span",[t._v("메인화면 상단 고정 여부 선택")])],1)])]),e("div",{staticClass:"common-row-wrap half-900"},[t._m(3),e("div",{staticClass:"common-row-content"},[e(o.Z,{attrs:{value:t.items.ttl,maxlength:"80",label:"",placeholder:"제목을 입력해주세요.",outlined:"",loading:t.isLoading,dense:"","hide-details":""},model:{value:t.items.ttl,callback:function(e){t.$set(t.items,"ttl",e)},expression:"items.ttl"}})],1)]),e("div",{staticClass:"common-row-wrap half-900"},[t._m(4),e("div",{staticClass:"common-row-content adress"},[e(o.Z,{attrs:{label:"",placeholder:"",value:t.items.wrtrNm,outlined:"",dense:"",loading:t.isLoading,"hide-details":"",disabled:""}})],1)]),e("div",{staticClass:"common-row-wrap half-900"},[t._m(5),t.isLoading?t._e():e("div",{staticClass:"common-row-content"},[e("froala",{attrs:{tag:"textarea",config:t.option},model:{value:t.items.cn,callback:function(e){t.$set(t.items,"cn",e)},expression:"items.cn"}},[t._v(t._s(t.items.cn))])],1)]),e("div",{staticClass:"common-row-wrap half-900"},[t._m(6),e("div",{staticClass:"w100p"},[t._l(t.files,(function(i){return e("div",{key:i.sn,staticClass:"common-row-content adress w100p",staticStyle:{"border-bottom":"1px solid #b8b8b8"}},[e("div",{staticClass:"common-flex-start w100p"},[e(n.Z,{staticClass:"table-checkbox check-expand-900",attrs:{value:i.sn,label:i.orgnFileNm,color:"blue",width:"100%","hide-details":"","off-icon":""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),t.selected.includes(i.sn)?e(s.Z,{staticClass:"vue-bt mla flex-shirink",attrs:{elevation:"0"},on:{click:function(e){return t.deleteFileCheck(i.sn)}}},[t._v("취소")]):e(s.Z,{staticClass:"vue-bt button-type-red mla flex-shirink",attrs:{elevation:"0"},on:{click:function(e){return t.deleteFileCheck(i.sn)}}},[t._v("삭제")])],1)])})),e("div",{staticClass:"common-row-content adress w100p",staticStyle:{"border-bottom":"1px solid #b8b8b8"}},[e("div",{staticClass:"common-flex-start fw-w-900"},[e(l.Z,{staticClass:"center-search-select mr10",staticStyle:{"max-width":"150px"},attrs:{items:t.fileCnt,"item-text":"name","item-value":"value",outlined:"","hide-details":"",loading:t.isLoading,dense:""},on:{change:t.changeFileCount},model:{value:t.fileCntVal,callback:function(e){t.fileCntVal=e},expression:"fileCntVal"}}),t._m(7)],1)]),t._l(t.newfileList,(function(i){return e("div",{key:i.name,staticClass:"common-row-content w100p"},[e(a.Z,{ref:`vfi-${i.name}`,refInFor:!0,staticClass:"adress-input mr10",attrs:{id:i.name,label:"첨부파일 등록","show-size":"",loading:t.isLoading,"truncate-length":"40",rules:t.rules,accept:"image/jpeg, image/jpg, image/png, image/gif, .pdf, .ppt, .pptx, .xls, .xlsx, .hwp, .hwpx, .docx, .txt"}}),e(s.Z,{staticClass:"vue-bt mla flex-shirink button-type-gray",staticStyle:{width:"123px"},attrs:{elevation:"0",loading:t.isLoading},on:{click:function(e){return t.onClickUpload(i.name)}}},[t._v("찾아보기")])],1)}))],2)])])]),e("div",{staticClass:"vue-bt-wrap align-right mt42 mo-right"},[e(s.Z,{staticClass:"vue-bt",attrs:{elevation:"0",loading:t.isLoading},on:{click:function(e){return t.$parent.moveTabIndex(1)}}},[t._v("취소")]),e(s.Z,{staticClass:"vue-bt",attrs:{elevation:"0",loading:t.isLoading},on:{click:function(e){return t.showPreview(!0)}}},[t._v("미리보기")]),e(s.Z,{staticClass:"vue-bt",attrs:{elevation:"0",loading:t.isLoading},on:{click:t.updateBoard}},[t._v("저장")])],1)]),e("NoticeDtlPreview",{directives:[{name:"show",rawName:"v-show",value:t.preview,expression:"preview"}],attrs:{items:t.items},on:{showPreview:t.showPreview}})],1)]):t._e()},h=[function(){var t=this,e=t._self._c;return e("h3",{staticClass:"total-info-subtitle"},[e("span",{staticClass:"info-middot"},[t._v("·")]),t._v(" 공지사항 수정 ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"common-row-label"},[e("h6",[t._v("공지여부")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"common-row-label"},[e("h6",[t._v("메인화면"),e("br"),t._v("상단고정")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"common-row-label half input-half"},[e("h6",[t._v(" 제목 "),e("span",{staticClass:"require-star"},[t._v("*")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"common-row-label half input-half"},[e("h6",[t._v(" 작성자 ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"common-row-label half input-half"},[e("h6",[t._v(" 내용 "),e("span",{staticClass:"require-star"},[t._v("*")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"common-row-label half input-half"},[e("h6",[t._v("첨부파일")])])},function(){var t=this,e=t._self._c;return e("article",[e("p",{staticClass:"h-a"},[t._v("파일 개수를 지정해 주십시오")]),e("p",{staticClass:"h-a"},[t._v("※ 용량제한: 5M, 허용 확장자: jpg, jpeg, png, gif, pdf, ppt, pptx, xls, xlsx, hwp, hwpx, docx, txt")]),e("p",{staticClass:"h-a",staticStyle:{color:"#d30303"}},[t._v(" ※ 악성파일 또는 저작권 침해 파일 업로드 금지 ")])])}],c=(i(57658),i(20629)),u=i(25108),d={name:"NoticeEdit",components:{NoticeDtlPreview:()=>i.e(3871).then(i.bind(i,93871))},mounted(){this.$nextTick((()=>{this.tabIndex=this.$parent.tabIndex,this.tabIndex===this.viewIndex&&(this.boardNo?this.getNoticeDetail():(this.showError({message:"조회할 데이터의 정보가 없습니다."}),this.$parent.moveTabIndex(0)))}))},watch:{vKey:function(){this.$seedsToken.setAuthentication({token:this.vToken,key:this.vKey,mid:this.$route.meta.mid})}},computed:{...(0,c.rn)("gdv-app",["boardNo"]),...(0,c.Se)("global",["isLoading"])},data(t){return{dutyCd:"com001001",bbsClssCd:"com007001",tabIndex:0,viewIndex:3,items:{},files:[],fileCnt:[{name:"1",value:"1"},{name:"2",value:"2"},{name:"3",value:"3"},{name:"4",value:"4"}],fileCntVal:"1",newfileList:[{name:"1-1",value:"1"}],selected:[],noticeYn:"N",mainNoticeYn:"N",preview:!1,imageUploadURL:"/api/common/bbs-edtr-img_uld",rules:[t=>!t||t.size<5e6||"파일크기는 최대 5M로 제한됩니다."],option:{placeholderText:"내용을 입력해주세요.",requestHeaders:{"X-AUTH-TOKEN":"","X-AUTH-KEY":"","X-AUTH-MID":""},imageUploadURL:"",events:{"image.beforeUpload":function(e){const{token:i,key:s,mid:n}=t.$seedsToken.getAuthentication();this.opts.requestHeaders["X-AUTH-TOKEN"]=i,this.opts.requestHeaders["X-AUTH-KEY"]=s,this.opts.requestHeaders["X-AUTH-MID"]=n,this.opts.imageUploadURL=`${t.imageUploadURL}/${t.dutyCd}/${t.bbsClssCd}/${t.boardNo}`},"image.uploaded":function(e){const{token:i,key:s,link:n}=JSON.parse(e);return t.vToken=i,t.vKey=s,e=JSON.stringify({link:n}),this.image.insert(n,!1,null,this.image.get(),e),!1}}}}},methods:{...(0,c.nv)("global",["showLoading","hideLoading","showSuccess","showError"]),getNoticeDetail(){this.showLoading(),this.fileCntVal="1",this.newfileList=[{name:"1-1",value:"1"}],this.selected=[],this.$apis.common.getBbsDtl(this.dutyCd,this.bbsClssCd,this.boardNo).then((t=>{this.items=t.data.response.data,this.files=t.data.response.fileList})).catch((t=>{u.log(t)})).finally((()=>{this.hideLoading()}))},changeFileCount(){"1"===this.fileCntVal?this.newfileList=[{name:"1-1",value:"1"}]:"2"===this.fileCntVal?this.newfileList=[{name:"2-1",value:"1"},{name:"2-2",value:"2"}]:"3"===this.fileCntVal?this.newfileList=[{name:"3-1",value:"1"},{name:"3-2",value:"2"},{name:"3-3",value:"3"}]:"4"===this.fileCntVal&&(this.newfileList=[{name:"4-1",value:"1"},{name:"4-2",value:"2"},{name:"4-3",value:"3"},{name:"4-4",value:"4"}])},deleteFileCheck(t){if(this.selected.includes(t))for(let e=0;e<this.selected.length;e++)this.selected[e]===t&&(this.selected.splice(e,1),e--);else this.selected.push(t)},onClickUpload(t){const e=document.getElementById(t);e.click()},updateBoard(){if(""===this.items.ttl)return this.showSuccess("제목은 필수입력 입니다."),!1;if(""===this.items.cn)return this.showSuccess("내용은 필수입력 입니다."),!1;let t=!0;if(this.newfileList.forEach((e=>{if(this.$refs[`vfi-${e.name}`][0].valid){if(""!==document.getElementById(e.name).value){const i=document.getElementById(e.name).files[0].name,s=i.lastIndexOf("."),n=i.substring(s+1,i.length),a=n.toLowerCase(),l=["jpeg","jpg","png","gif","pdf","ppt","pptx","xls","xlsx","hwp","hwpx","docx","txt"];-1===l.indexOf(a)&&(t=!1)}}else t=!1})),!t)return this.showError({message:"파일 형식이 올바르지 않습니다.\n[허용된 파일타입과 용량 확인바랍니다.]"}),!1;if(confirm("수정된 정보로 공지사항에 반영됩니다.")){const t=new FormData;t.append("brdSttsCd",this.items.brdSttsCd),t.append("brdNo",this.items.brdNo),t.append("ttl",this.items.ttl),t.append("abstr",this.items.abstr),t.append("brdTfxYn",this.items.brdTfxYn),t.append("ntcYn",this.items.ntcYn),t.append("dutyCd",this.items.dutyCd),t.append("bbsClssCd",this.items.bbsClssCd),t.append("cn",this.items.cn),t.append("deleteFileList",this.selected);let e=0;this.newfileList.forEach((i=>{""!==document.getElementById(i.name).value&&t.append(`file[${e++}]`,document.getElementById(i.name).files[0])})),e>0?t.append("atchFileYn","Y"):this.selected.length===this.files.length?t.append("atchFileYn","N"):t.append("atchFileYn",this.items.atchFileYn),this.showLoading(),this.$apis.common.postBbsMdfcn(t).then((t=>{t?.data.code>"300"?this.showError({message:t?.data.message}):(this.showSuccess("수정이 완료되었습니다."),this.$parent.moveTabIndex(1))})).catch((t=>{u.error(t),this.showError({message:"통신 중 오류가 발생하였습니다."})})).finally((()=>{this.hideLoading()}))}},cancel(){confirm("취소 시 작성된 정보는 초기화 됩니다.")&&this.$parent.moveTabIndex(1)},showPreview(t){this.preview=t}}},p=d,m=i(1001),v=(0,m.Z)(p,r,h,!1,null,null,null),f=v.exports},47393:function(){},63486:function(t,e,i){i.d(e,{Z:function(){return l}});i(47393);var s=i(42240),n=i(40573),a=i(29022),l=a.Z.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...n.Z.options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(t){this.$nextTick((()=>this.inputIndeterminate=t))},inputIndeterminate(t){this.$emit("update:indeterminate",t)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){const{title:t,...e}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(s.Z,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...e,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}})},99223:function(t,e,i){i.d(e,{Z:function(){return n}});var s=i(96669),n=s.Z.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})},31625:function(t,e,i){i.d(e,{Z:function(){return h}});i(57658);var s=i(89780),n=s.Z,a=i(44127),l=i(75352),o=i(74101),r=i(51767),h=n.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:t=>"boolean"===typeof t||[1e3,1024].includes(t)},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:t=>(0,l.TI)(t).every((t=>null!=t&&"object"===typeof t))}},computed:{classes(){return{...n.options.computed.classes.call(this),"v-file-input":!0}},computedCounterValue(){const t=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);const e=this.internalArrayValue.reduce(((t,{size:e=0})=>t+e),0);return this.$vuetify.lang.t(this.counterSizeString,t,(0,l.XE)(e,1024===this.base))},internalArrayValue(){return(0,l.TI)(this.internalValue)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty(){return this.internalArrayValue.length>0},isLabelActive(){return this.isDirty},text(){return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map((t=>{const{name:e="",size:i=0}=t,s=this.truncateText(e);return this.showSize?`${s} (${(0,l.XE)(i,1024===this.base)})`:s})):[this.placeholder]},base(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips(){return this.chips||this.smallChips}},watch:{readonly:{handler(t){!0===t&&(0,o.N6)("readonly is not supported on <v-file-input>",this)},immediate:!0},value(t){const e=this.multiple?t:t?[t]:[];(0,l.vZ)(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips(){return this.isDirty?this.text.map(((t,e)=>this.$createElement(a.Z,{props:{small:this.smallChips},on:{"click:close":()=>{const t=this.internalValue;t.splice(e,1),this.internalValue=t}}},[t]))):[]},genControl(){const t=n.options.methods.genControl.call(this);return this.hideInput&&(t.data.style=(0,r.y0)(t.data.style,{display:"none"})),t},genInput(){const t=n.options.methods.genInput.call(this);return t.data.attrs.multiple=this.multiple,delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot(){if(!this.prependIcon)return null;const t=this.genIcon("prepend",(()=>{this.$refs.input.click()}));return this.genSlot("prepend","outer",[t])},genSelectionText(){const t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections(){const t=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach(((e,i)=>{this.$scopedSlots.selection&&t.push(this.$scopedSlots.selection({text:this.text[i],file:e,index:i}))})):t.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},t)},genTextFieldSlot(){const t=n.options.methods.genTextFieldSlot.call(this);return t.data.on={...t.data.on||{},click:t=>{t.target&&"LABEL"===t.target.nodeName||this.$refs.input.click()}},t},onInput(t){const e=[...t.target.files||[]];this.internalValue=this.multiple?e:e[0],this.initialValue=this.internalValue},onKeyDown(t){this.$emit("keydown",t)},truncateText(t){if(t.length<Number(this.truncateLength))return t;const e=Math.floor((Number(this.truncateLength)-1)/2);return`${t.slice(0,e)}…${t.slice(t.length-e)}`}}})},7550:function(t,e,i){i(57658);var s=i(37069),n=i(20144);e["Z"]=n.ZP.extend({name:"rippleable",directives:{ripple:s.Z},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}})},29022:function(t,e,i){i.d(e,{X:function(){return o}});i(57658);var s=i(40573),n=i(7550),a=i(26174),l=i(67678);function o(t){t.preventDefault()}e["Z"]=(0,l.Z)(s.Z,n.Z,a.Z).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some((e=>this.valueComparator(e,t))):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=s.Z.options.methods.genLabel.call(this);return t?(t.data.on={click:o},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:o},ref:"input"})},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const i=e.length;e=e.filter((e=>!this.valueComparator(e,t))),e.length===i&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown(t){}}})}}]);