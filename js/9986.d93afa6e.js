"use strict";(self["webpackChunkgdv_frontend"]=self["webpackChunkgdv_frontend"]||[]).push([[9986],{9986:function(t,s,o){o.r(s),o.d(s,{default:function(){return g}});var A=o(64562),e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"register-wrap"},[s("div",{staticClass:"register-header-box long"},[s("img",{attrs:{src:o(81283),alt:"확인 아이콘"}}),s("p",[t._v("회원가입이 완료되었습니다.")]),s("p",{staticClass:"register-content-small"},[t._v(" 강원대학교 산학협력통합정보시스템 회원가입이 정상적으로 처리되었습니다. ")])]),s("div",{staticClass:"register-content-box long"},[s("div",{staticClass:"button-wrap"},[s(A.Z,{staticClass:"register-button-long button-type-blue to-left-m",attrs:{elevation:"0",ripple:{class:"white--text"},id:"to-main"},on:{click:function(s){return t.goMenu("0130000000")}}},[t._v(" 메인페이지로 이동 ")]),s(A.Z,{staticClass:"login-orange button-type-orange",attrs:{elevation:"0",ripple:{class:"white--text"}},on:{click:function(s){return t.goMenu("0131000000")}}},[t._v(" 로그인하기 ")])],1)])])},n=[],r=(o(57658),o(20629)),a={data(){return{tabIndex:4}},computed:{...(0,r.Se)("global",["getMenuList"])},methods:{...(0,r.nv)("global",["showToast","showError","showSuccess"]),goMenu(t){if(this.$route.path!==`/mid/${t}`){const s=this.$router.options.routes.find((({meta:s})=>s.mid===t));if(!s||this.$route.path.replace("/mid/","")===t)return null;this.$router.push({path:`/mid/${t}`})}}}},i=a,l=o(1001),u=(0,l.Z)(i,e,n,!1,null,null,null),g=u.exports},81283:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABLCAYAAAA8u6rXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASOSURBVHgB7ZzRcaMwEIbXucvz+SqIOjjPpAGng7zkOe4g6cBcBfFVgDvIXQX4Ksh1gDuIU8GeNogxwSshgSTkDN+MRjEB7fKzWgshDDAxMTExMfHZmMEIIKKQ1VKWH7LMZVmous1eloOq/1I9m83+wWdEijKXZSlLLssrDqNU7dzCZ4AiRpa1B2G6BBNwbihxcoxLHkosrzlJOkl55UGWR+BzDMcejnnn0NguVK3LVzoyWX7J3HWA1MAq55QWV7yQJVP7W508HnPaRpYXCxsl7Q8pIR16sHA6sxXFwh515y12X5R1RxsFxshnaM49pSwrCAi1j3qxMs0xonFMGUworLpAYRDIW+RY+FJHlqtAGFQog0BkcAEjgMe8mGn+zwlU8ww+kQ0+6QzFih6Db3PNdpNAL179xmpwyLGFRIkt0EJjaAOJElugucaY377skagCKYNrxlCJI+cgHWMIJDTGBCRIdIGU0ZwxlkGCjCUQF0UlJMgoAinDOWNwBYnRVyD0cSPMGE4uigYIlGM1Idg/wuTBt6lH0UCBapbQF+S7moBE8CQQkUNfGAcKSAQckKTx9Ob8FfqA/C3IIyQADvwWw2qGs82Vbv8LQ1uC2Tb6My+sujtFtGD+Tf7dWMxv75htN9DDGU7tsadBvIyDsLoPbaO9STdFUjv8DmM+gfAUQe+o/dr7ftPtbxJpzjgyCj4FarBvfdbOprrmJGvkid2jh+FCIIGIfeuztquaROpqVAsJJKutLMUQoQIKRLzZ7ugikhUNgQgBPYUKLJATXkXCaqXHtrVZgKNQKQlEuIj03WKfHfAJXoClUBEFuoKh4Okz9xfL4+aof15fmoTyNQ6y9LNote9+y4XVM7QPJ+hwrLNQMQVS9tprpn6DKzhwxO0i1AgCOY24TQ2tmIaWjm10ChVbIOXXkrF1C66gp1kAC6HKmAIpnx4Ze4u+jbX7ba/5pA6hogqk/Cla9vpPSePpchbs67yDUKEF4p7+GGcmu8ZJO2Zbr4k3NbahORvTjXKMgeKS2fYH+qKu/qu30ARjRAWNoIb90uf51I1yQ4EVDIARKpZAK9euZtsw93VZDj2phlBRBFI2S+ZcBPgA+aV/GQxECRVLoHWQKGoY4MZMlKv6jS0ig7FWxSCfm8pYkdAX1C8+y8A3eIYr3Qg8vVF/v7gQCuSTOOGvb3sE9auEBYQEq0XsHE+QEKh/UyGDGGhCGDGRddwG/9ynQwY60mv2MbBfC9TPKsRf7IHdN6xriITyZW3wpcCxIhzNoV1H1QoCgua3lIgtpADqk/kHsdBTN2xETtlhN4OUwGrpYJfTRIHVzCANJ1zfnFyj+fWx5kVZgid8v4MroHoH9t7hMJo7queY9o3tJKBo1Lb8lGWT5Du4TZB/SS80OSb6hoKRhlihfheA2t2cpThtsMoplLifcbhgdHyODjltKGP9VglNsQio5pvpmbwu79T56k3VO5lr9jAxMTExMTFxRtBwYya//iHLMnq8fnF3d/dF1l+pXF9fX9Z/y3LZ/Kz2ez9GHj/KsCUFZnAcs7X/btaj8B+TAznN9BYD7AAAAABJRU5ErkJggg=="}}]);