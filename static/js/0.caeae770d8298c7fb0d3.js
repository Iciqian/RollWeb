webpackJsonp([0],{174:function(t,o,i){function a(t){i(178)}var e=i(0)(i(176),i(180),a,"data-v-0bf1c2c2",null);t.exports=e.exports},176:function(t,o,i){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=i(2),e=i.n(a),c=i(28),n=i.n(c),s=i(27),A=i.n(s),r=i(5),d=i.n(r);o.default={data:function(){return{id:this.$route.query.id,topMenu:[],subSort:[],multi_block3:"",jsonPage:1,jsonParams:[{unique:"",cid:"312",zy_id:"c3_l1_18_51_5",platform:"m",_:"1499758549650"},{unique:"",cid:"313",zy_id:"c3_l1_18_51_5",platform:"m",_:"1499759333744"},{unique:"",cid:"314",zy_id:"c3_l1_18_51_5",platform:"m",_:"1499759378134"},{unique:"",cid:"1296",zy_id:"c3_l1_18_51_5",platform:"m",_:"1499759396339"},{unique:"",cid:"1295",zy_id:"c3_l1_18_51_5",platform:"m",_:"1499759535079"},{unique:"",cid:"316",zy_id:"c3_l1_18_51_5",platform:"m",_:"1499759547844"},{unique:"",cid:"317",zy_id:"c3_l1_18_51_5",platform:"m",_:"1499759560242"},{unique:"",cid:"318",zy_id:"c3_l1_18_51_5",platform:"m",_:"1499759574522"}],jsonParams1:[{key:"312",type:"6",zhouyi_ids:"p8_c3_l1_18_51_5",machining:"gsortzxg",page:1,rows:"10",dtype:"JSONP",cm:"1",cm_cate:"312"},{key:"313",type:"6",zhouyi_ids:"p8_c3_l1_18_51_5",machining:"gsortzxg",page:1,rows:"10",dtype:"JSONP",cm:"1",cm_cate:"313"},{key:"314",type:"6",zhouyi_ids:"p8_c3_l1_18_51_5",machining:"gsortzxg",page:1,rows:"10",dtype:"JSONP",cm:"1",cm_cate:"314"},{key:"1296",type:"6",zhouyi_ids:"p8_c3_l1_18_51_5",machining:"gsortzxg",page:1,rows:"10",dtype:"JSONP",cm:"1",cm_cate:"1296"},{key:"1295",type:"6",zhouyi_ids:"p8_c3_l1_18_51_5",machining:"gsortzxg",page:1,rows:"10",dtype:"JSONP",cm:"1",cm_cate:"1295"},{key:"316",type:"6",zhouyi_ids:"p8_c3_l1_18_51_5",machining:"gsortzxg",page:1,rows:"10",dtype:"JSONP",cm:"1",cm_cate:"316"},{key:"317",type:"6",zhouyi_ids:"p8_c3_l1_18_51_5",machining:"gsortzxg",page:1,rows:"10",dtype:"JSONP",cm:"1",cm_cate:"317"},{key:"318",type:"6",zhouyi_ids:"p8_c3_l1_18_51_5",machining:"gsortzxg",page:1,rows:"10",dtype:"JSONP",cm:"1",cm_cate:"318"}],showData:[]}},methods:{getSlideNav:function(){this.$http.get("../../static/json/SlideNav.json").then(function(t){console.log(t.body),this.topMenu=t.body.homeNav})},getSubSort:function(t){this.$http.jsonp("https://jas.juanpi.com/pagetag/page",{params:this.jsonParams[t-1]}).then(function(t){var o=t.body.module_ads.multi_block;this.subSort=o[0].data[0].child.concat(o[1].data[0].child),this.multi_block3=o[2].data[0].child[0].pic})},getShopData:function(t){this.jsonParams1[t-1].page=this.jsonPage,console.log(t-1),console.log(this.jsonParams1[t-1].page,"数组page"),this.$http.jsonp("https://shop.juanpi.com/zxg",{params:this.jsonParams1[t-1]}).then(function(t){console.log(t.body),this.showData=this.showData.concat(t.body.list)})},scrollLoad:function(){var t=this,o=81*parseFloat(document.documentElement.style.fontSize),i=16*parseFloat(document.documentElement.style.fontSize);window.onscroll=function(){((window.scrollTop||document.body.scrollTop||document.documentElement.scrollTop)-i)/o>=t.jsonPage&&(t.jsonPage++,t.getShopData(t.id))}}},watch:{$route:function(t,o){this.getSubSort(t.query.id),this.getShopData(t.query.id),this.showData=[],this.jsonPage=1}},components:{SlideNav:n.a,ShopShow:A.a,MenuBar:e.a,ToTop:d.a},computed:{menubarData:function(){return this.$store.getters.menubarData}},created:function(){window.onscroll=null,this.getSubSort(this.id),this.getSlideNav(),this.getShopData(this.id),this.scrollLoad()}}},177:function(t,o,i){var a=i(172);o=t.exports=i(171)(!0),o.push([t.i,".common-bgcolor[data-v-0bf1c2c2]{background-color:#fff}.header[data-v-0bf1c2c2]{position:relative;height:1.5rem;padding-top:.1px}.header>span[data-v-0bf1c2c2]{width:28px;height:28px;position:absolute;right:.45rem;top:.35rem;background:url("+a(i(173))+") no-repeat;background-size:28px 28px;display:inline-block}.header>img[data-v-0bf1c2c2]{height:.71rem;display:block;margin:.4rem auto}.sub-sort[data-v-0bf1c2c2]{margin-bottom:.5rem}.sub-sort img[data-v-0bf1c2c2]{width:25%}.multi-block3[data-v-0bf1c2c2]{background:#fff}.multi-block3 a[data-v-0bf1c2c2]{display:block}.multi-block3 a img[data-v-0bf1c2c2]{width:100%}.back-top>.slide-box[data-v-0bf1c2c2]{bottom:3rem}","",{version:3,sources:["/Users/iciqian/learn/RollWeb/src/pages/DressToFoods.vue"],names:[],mappings:"AACA,iCACE,qBAAwB,CACzB,AACD,yBACE,kBAAmB,AACnB,cAAe,AACf,gBAAmB,CACpB,AACD,8BACE,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,aAAc,AACd,WAAY,AACZ,mDAAgD,AAChD,0BAA2B,AAC3B,oBAAsB,CACvB,AACD,6BACE,cAAe,AACf,cAAe,AACf,iBAAmB,CACpB,AACD,2BACE,mBAAqB,CACtB,AACD,+BACI,SAAW,CACd,AACD,+BACE,eAAkB,CACnB,AACD,iCACI,aAAe,CAClB,AACD,qCACE,UAAY,CACb,AACD,sCACE,WAAa,CACd",file:"DressToFoods.vue",sourcesContent:["\n.common-bgcolor[data-v-0bf1c2c2] {\n  background-color: white;\n}\n.header[data-v-0bf1c2c2] {\n  position: relative;\n  height: 1.5rem;\n  padding-top: 0.1px;\n}\n.header > span[data-v-0bf1c2c2] {\n  width: 28px;\n  height: 28px;\n  position: absolute;\n  right: .45rem;\n  top: .35rem;\n  background: url(../assets/fenlei.png) no-repeat;\n  background-size: 28px 28px;\n  display: inline-block;\n}\n.header > img[data-v-0bf1c2c2] {\n  height: .71rem;\n  display: block;\n  margin: .4rem auto;\n}\n.sub-sort[data-v-0bf1c2c2] {\n  margin-bottom: .5rem;\n}\n.sub-sort img[data-v-0bf1c2c2] {\n    width: 25%;\n}\n.multi-block3[data-v-0bf1c2c2] {\n  background: white;\n}\n.multi-block3 a[data-v-0bf1c2c2] {\n    display: block;\n}\n.multi-block3 a img[data-v-0bf1c2c2] {\n  width: 100%;\n}\n.back-top > .slide-box[data-v-0bf1c2c2] {\n  bottom: 3rem;\n}\n"],sourceRoot:""}])},178:function(t,o,i){var a=i(177);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(175)("572cb080",a,!0,{})},179:function(t,o){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAwCAYAAAGZEU9ZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1MjNkZDMyYS1jZTJhLTRlNDUtOTQxYy0yMTE4OGQyZWM0NzYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkYzNkY0MzgwMDUzMTFFNkFFQTJDMTc1NTJCRTdCNTgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkYzNkY0MzcwMDUzMTFFNkFFQTJDMTc1NTJCRTdCNTgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4Yjk5YTMzNi1jZTEyLTRkOTItOGQwNS1lMjFjYWVmNzM4MGIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjdFRTYyOURFMEQ4RTQxMThCNzdCRkE1OTQ0NEIyQTYiLz4g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"},180:function(t,o,i){t.exports={render:function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("div",[t._m(0),t._v(" "),i("SlideNav",{attrs:{topMenu:t.topMenu,actIndex:this.$route.query.id}}),t._v(" "),i("div",{staticClass:"sub-sort common-bgcolor"},t._l(t.subSort,function(t){return i("img",{key:t.pic,attrs:{src:t.pic}})})),t._v(" "),i("div",{staticClass:"multi-block3"},[i("router-link",{attrs:{to:"/"}},[i("img",{attrs:{src:t.multi_block3}})])],1),t._v(" "),i("ShopShow",{attrs:{showData:t.showData}}),t._v(" "),i("MenuBar",{attrs:{menubarData:t.menubarData}}),t._v(" "),i("div",{staticClass:"back-top"},[i("ToTop")],1)],1)},staticRenderFns:[function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"header common-bgcolor"},[a("img",{attrs:{src:i(179)}}),t._v(" "),a("span",{staticClass:"sort"})])}]}}});
//# sourceMappingURL=0.caeae770d8298c7fb0d3.js.map