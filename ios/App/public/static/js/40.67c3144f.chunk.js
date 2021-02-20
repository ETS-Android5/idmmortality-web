(this["webpackJsonpquantic-react"]=this["webpackJsonpquantic-react"]||[]).push([[40],{196:function(i,n,t){"use strict";t.r(n),t.d(n,"ion_infinite_scroll",(function(){return s})),t.d(n,"ion_infinite_scroll_content",(function(){return c}));var e=t(2),r=t(27),o=t(8),l=t(289),s=function(){function i(i){var n=this;Object(r.l)(this,i),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom",this.onScroll=function(){var i=n.scrollEl;if(!i||!n.canStart())return 1;var t=n.el.offsetHeight;if(0===t)return 2;var e=i.scrollTop,r=i.scrollHeight,o=i.offsetHeight,l=0!==n.thrPc?o*n.thrPc:n.thrPx;if(("bottom"===n.position?r-t-e-l-o:e-t-l)<0){if(!n.didFire)return n.isLoading=!0,n.didFire=!0,n.ionInfinite.emit(),3}else n.didFire=!1;return 4},this.ionInfinite=Object(r.e)(this,"ionInfinite",7)}return i.prototype.thresholdChanged=function(){var i=this.threshold;i.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(i)/100):(this.thrPx=parseFloat(i),this.thrPc=0)},i.prototype.disabledChanged=function(){var i=this.disabled;i&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!i)},i.prototype.connectedCallback=function(){return Object(e.a)(this,void 0,void 0,(function(){var i,n,t=this;return Object(e.c)(this,(function(e){switch(e.label){case 0:return(i=this.el.closest("ion-content"))?(n=this,[4,i.getScrollElement()]):(console.error("<ion-infinite-scroll> must be used inside an <ion-content>"),[2]);case 1:return n.scrollEl=e.sent(),this.thresholdChanged(),this.disabledChanged(),"top"===this.position&&Object(r.m)((function(){t.scrollEl&&(t.scrollEl.scrollTop=t.scrollEl.scrollHeight-t.scrollEl.clientHeight)})),[2]}}))}))},i.prototype.disconnectedCallback=function(){this.enableScrollEvents(!1),this.scrollEl=void 0},i.prototype.complete=function(){return Object(e.a)(this,void 0,void 0,(function(){var i,n,t=this;return Object(e.c)(this,(function(e){return i=this.scrollEl,this.isLoading&&i?(this.isLoading=!1,"top"===this.position&&(this.isBusy=!0,n=i.scrollHeight-i.scrollTop,requestAnimationFrame((function(){Object(r.g)((function(){var e=i.scrollHeight-n;requestAnimationFrame((function(){Object(r.m)((function(){i.scrollTop=e,t.isBusy=!1}))}))}))}))),[2]):[2]}))}))},i.prototype.canStart=function(){return!this.disabled&&!this.isBusy&&!!this.scrollEl&&!this.isLoading},i.prototype.enableScrollEvents=function(i){this.scrollEl&&(i?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))},i.prototype.render=function(){var i,n=Object(r.d)(this),t=this.disabled;return Object(r.i)(r.a,{class:(i={},i[n]=!0,i["infinite-scroll-loading"]=this.isLoading,i["infinite-scroll-enabled"]=!t,i)})},Object.defineProperty(i.prototype,"el",{get:function(){return Object(r.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(i,"watchers",{get:function(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(i,"style",{get:function(){return"ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}"},enumerable:!0,configurable:!0}),i}(),c=function(){function i(i){Object(r.l)(this,i)}return i.prototype.componentDidLoad=function(){if(void 0===this.loadingSpinner){var i=Object(r.d)(this);this.loadingSpinner=o.b.get("infiniteLoadingSpinner",o.b.get("spinner","ios"===i?"lines":"crescent"))}},i.prototype.render=function(){var i,n=Object(r.d)(this);return Object(r.i)(r.a,{class:(i={},i[n]=!0,i["infinite-scroll-content-"+n]=!0,i)},Object(r.i)("div",{class:"infinite-loading"},this.loadingSpinner&&Object(r.i)("div",{class:"infinite-loading-spinner"},Object(r.i)("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&Object(r.i)("div",{class:"infinite-loading-text",innerHTML:Object(l.a)(this.loadingText)})))},Object.defineProperty(i,"style",{get:function(){return"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600,#666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line{stroke:var(--ion-color-step-600,#666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600,#666)}"},enumerable:!0,configurable:!0}),i}()},289:function(i,n,t){"use strict";t.d(n,"a",(function(){return e}));var e=function(i){try{if("string"!==typeof i||""===i)return i;var n=document.createDocumentFragment(),t=document.createElement("div");n.appendChild(t),t.innerHTML=i,s.forEach((function(i){for(var t=n.querySelectorAll(i),e=t.length-1;e>=0;e--){var l=t[e];l.parentNode?l.parentNode.removeChild(l):n.removeChild(l);for(var s=o(l),c=0;c<s.length;c++)r(s[c])}}));for(var e=o(n),l=0;l<e.length;l++)r(e[l]);var c=document.createElement("div");c.appendChild(n);var a=c.querySelector("div");return null!==a?a.innerHTML:c.innerHTML}catch(d){return console.error(d),""}},r=function i(n){if(!n.nodeType||1===n.nodeType){for(var t=n.attributes.length-1;t>=0;t--){var e=n.attributes.item(t),r=e.name;if(l.includes(r.toLowerCase())){var s=e.value;null!=s&&s.toLowerCase().includes("javascript:")&&n.removeAttribute(r)}else n.removeAttribute(r)}var c=o(n);for(t=0;t<c.length;t++)i(c[t])}},o=function(i){return null!=i.children?i.children:i.childNodes},l=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"]}}]);
//# sourceMappingURL=40.67c3144f.chunk.js.map