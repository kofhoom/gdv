"use strict";(self["webpackChunkgdv_frontend"]=self["webpackChunkgdv_frontend"]||[]).push([[4363],{84363:function(t,i,e){e.r(i),e.d(i,{default:function(){return r}});var n=function(){var t=this,i=t._self._c;return i("div",{staticClass:"info-navi-wrap"},[i("ul",{staticClass:"info-navi-ul"},[i("li",{staticClass:"info-navi-li"},[i("img",{staticClass:"navi-images",attrs:{src:e(1363),alt:"네비게이션이미지"}})]),i("li",{staticClass:"info-navi-li lines"},[t._v("·")]),i("li",{staticClass:"info-navi-li"},[t._v(t._s(t.headerMenu.menuNm))]),i("li",{staticClass:"info-navi-li lines"},[t._v("·")]),i("li",{staticClass:"info-navi-li"},[t._v(t._s(t.getMenuList(t.headerMenu.menuId).filter((i=>i.menuId==(void 0==t.path[1]?t.path[0]:t.path[1])))[0].menuNm))]),void 0!=t.path[1]?i("li",{staticClass:"info-navi-li lines"},[t._v("·")]):t._e(),i("li",{staticClass:"info-navi-li"},t._l(t.getMenuList(t.headerMenu.menuId),(function(e){return i("div",{key:e.menuId},t._l(t.getMenuList(e.menuId),(function(e){return i("div",{key:e.menuId},[i("span",{staticClass:"v"},[t._v(t._s(t.path[0]==e["menuId"]?e["menuNm"]:""))])])})),0)})),0)])])},s=[],a=(e(57658),e(20629)),u={data(){return{headerMenu:null,path:[]}},computed:{...(0,a.rn)("global",["menuList"]),...(0,a.Se)("global",["getMenuList","getAuthentication"])},methods:{init(){this.path=[],this.headerMenu=this.getHeaderMenu(this.menuList,this.getAuthentication().mid),this.headerMenu||setTimeout(this.init(),1e3)},getHeaderMenu(t,i){if(t&&i){const e=t.find((({menuId:t})=>t===i));return e?"0100000000"===e.upMenuId?e:(["com015001","com015002"].includes(e.pgmClssCd)&&this.path.push(e.menuId),this.getHeaderMenu(t,e.upMenuId)):(this.$seedsToken.setAuthentication({token:null,key:null,mid:this.$route.meta.mid}),null)}}},created(){this.init()}},l=u,d=e(1001),o=(0,d.Z)(l,n,s,!1,null,"557b428b",null),r=o.exports},1363:function(t,i,e){t.exports=e.p+"img/navi_icons.87406534.svg"}}]);