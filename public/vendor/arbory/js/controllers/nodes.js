(self.webpackChunkarbory=self.webpackChunkarbory||[]).push([[42],{5007:(e,t,n)=>{var i=n(9755);function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function a(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var s="nodes",r=function(){function e(t){l(this,e),this.element=t,this.id=t.data("id"),this.level=t.data("level")}return a(e,[{key:"getStorage",value:function(){return u.get(this.id)}},{key:"makeSortable",value:function(e){return this.element.parent().sortable(e)}},{key:"toggleChildVisibility",value:function(){this.getStorage().setCollapsed(!this.getStorage().isCollapsed()),this.isCollapsed()?this.element.removeClass("collapsed"):this.element.addClass("collapsed")}},{key:"isCollapsed",value:function(){return this.element.hasClass("collapsed")}},{key:"getParent",value:function(){var t="li[data-level="+--this.level+"]";return new e(this.element.closest(t))}},{key:"getLeftSibling",value:function(){return new e(this.element.prev("li[data-id]"))}},{key:"getRightSibling",value:function(){return new e(this.element.next("li[data-id]"))}}]),e}(),u=function(){function e(){l(this,e)}return a(e,null,[{key:"getStored",value:function(){return void 0===i.cookie(s)&&e.save({}),JSON.parse(i.cookie(s))}},{key:"get",value:function(t){var n=this.getStored();return void 0===n[t]&&(n[t]=!0,e.save(n)),new c(t,n[t])}},{key:"saveItem",value:function(t){var n=this.getStored();n[t.id]=t.getContents(),e.save(n)}},{key:"save",value:function(e){i.cookie(s,JSON.stringify(e))}}]),e}(),c=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};l(this,e),this.id=t,this.contents=n}return a(e,[{key:"getContents",value:function(){return this.contents}},{key:"isCollapsed",value:function(){return this.contents}},{key:"setCollapsed",value:function(e){this.contents=e,this.save()}},{key:"save",value:function(){u.saveItem(this)}}]),e}();i(document).ready((function(){var e=i("body.controller-nodes"),t=i(".collection");e.on("click",".dialog .node-cell label",(function(){i(".dialog .node-cell label").removeClass("selected"),i(this).addClass("selected")})),t.ready((function(){var e=i("[name=_token]:first").val();t.find("ul[data-level] > li").each((function(){var t=new r(i(this));t.element.on("click","> .collapser-cell > .collapser",(function(){return t.toggleChildVisibility()})),t.makeSortable({items:"> li",stop:function(n,l){t=new r(l.item),i.post(window.NODE_REPOSITION_BASEPATH,{_token:e,id:t.id,toLeftId:t.getLeftSibling().id,toRightId:t.getRightSibling().id})}})}))}))}))},9824:()=>{},2374:()=>{},5147:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[672,628,990,898],(()=>(t(5007),t(9824),t(2374),t(5147))));e.O()}]);