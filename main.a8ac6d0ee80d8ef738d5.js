(()=>{"use strict";function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function e(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var i=function(){function i(t,s){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),e(this,"_autoplay",(function(t){if(this._config.autoplay)return"stop"===t?(clearInterval(this._intervalId),void(this._intervalId=null)):void(null===this._intervalId&&(this._intervalId=setInterval(function(){this._direction="next",this._move()}.bind(this),this._config.interval)))})),this._el="string"==typeof t?document.querySelector(t):t,this._elWrapper=this._el.querySelector(i.SELECTOR_WRAPPER),this._elItems=this._el.querySelector(i.SELECTOR_ITEMS),this._elsItem=this._el.querySelectorAll(i.SELECTOR_ITEM),this._currentIndex=0,this._minOrder=0,this._maxOrder=0,this._$itemWithMinOrder=null,this._$itemWithMaxOrder=null,this._minTranslate=0,this._maxTranslate=0,this._direction="next",this._balancingItemsFlag=!1,this._transform=0,this._width=this._elWrapper.getBoundingClientRect().width,this._supportResizeObserver=void 0!==window.ResizeObserver,this._hasSwipeState=!1,this._swipeStartPosX=0,this._intervalId=null,this._config=Object.assign({autoplay:!1,loop:!0,indicators:!0,interval:5e3,swipe:!0},s),this._elItems.dataset.translate=0,this._elsItem.forEach((function(t,e){t.dataset.order=e,t.dataset.index=e,t.dataset.translate=0})),this._config.loop){var n=this._elsItem.length-1,r=-this._elsItem.length;this._elsItem[n].dataset.order=-1,this._elsItem[n].dataset.translate=-this._elsItem.length;var a=r*this._width;this._elsItem[n].style.transform="translateX("+a+"px)"}this._addIndicators(),this._refreshExtremeValues(),this._setActiveClass(),this._addEventListener(),this._autoplay()}var s,n;return s=i,(n=[{key:"_setActiveClass",value:function(){var t=this._el.querySelector(i.SELECTOR_ITEM_ACTIVE);t&&t.classList.remove(i.CLASS_NAME_ITEM_ACTIVE);var e=this._el.querySelector('[data-index="'.concat(this._currentIndex,'"]'));e&&e.classList.add(i.CLASS_NAME_ITEM_ACTIVE);var s=this._el.querySelector(i.SELECTOR_INDICATOR_ACTIVE);s&&s.classList.remove(i.CLASS_NAME_INDICATOR_ACTIVE);var n=this._el.querySelector('[data-slide-to="'.concat(this._currentIndex,'"]'));n&&n.classList.add(i.CLASS_NAME_INDICATOR_ACTIVE);var r=this._el.querySelector(i.SELECTOR_CONTROL_PREV),a=this._el.querySelector(i.SELECTOR_CONTROL_NEXT);r&&r.classList.add(i.CLASS_NAME_CONTROL_SHOW),a&&a.classList.add(i.CLASS_NAME_CONTROL_SHOW),this._config.loop||0!==this._currentIndex?this._config.loop||this._currentIndex!==this._elsItem.length-1||a.classList.remove(i.CLASS_NAME_CONTROL_SHOW):r.classList.remove(i.CLASS_NAME_CONTROL_SHOW),this._el.dispatchEvent(new CustomEvent("active.itc.slider",{bubbles:!0}))}},{key:"_move",value:function(t){var e;if(this._elItems.classList.remove(i.TRANSITION_NONE),!1===t&&this._elItems.classList.add(i.TRANSITION_NONE),"none"===this._direction)return e=this._transform*this._width,void(this._elItems.style.transform="translateX("+e+"px)");if(!this._config.loop){if(this._currentIndex+1>=this._elsItem.length&&"next"===this._direction)return void this._autoplay("stop");if(this._currentIndex<=0&&"prev"===this._direction)return}var s="next"===this._direction?-1:1,n=this._transform+s;"next"===this._direction?++this._currentIndex>this._elsItem.length-1&&(this._currentIndex-=this._elsItem.length):--this._currentIndex<0&&(this._currentIndex+=this._elsItem.length),this._transform=n,this._elItems.dataset.translate=n,e=n*this._width,this._elItems.style.transform="translateX("+e+"px)",this._elItems.dispatchEvent(new CustomEvent("transition-start",{bubbles:!0})),this._setActiveClass()}},{key:"_moveTo",value:function(t,e){var i=this._currentIndex;this._direction=t>i?"next":"prev";for(var s=0;s<Math.abs(t-i);s++)this._move(e)}},{key:"_addIndicators",value:function(){if(!this._el.querySelector(i.SELECTOR_INDICATORS)&&this._config.indicators){for(var t="",e=0,s=this._elsItem.length;e<s;e++)t+='<li class="'.concat(i.CLASS_NAME_INDICATOR,'" data-slide-to="').concat(e,'"></li>');this._el.insertAdjacentHTML("beforeend",'<ol class="'.concat(i.CLASS_NAME_INDICATORS,'">').concat(t,"</ol>"))}}},{key:"_refreshExtremeValues",value:function(){this._minOrder=parseInt(this._elsItem[0].dataset.order),this._maxOrder=this._minOrder,this._$itemWithMinOrder=this._elsItem[0],this._$itemWithMaxOrder=this._$itemWithMinOrder,this._minTranslate=parseInt(this._elsItem[0].dataset.translate),this._maxTranslate=this._minTranslate;for(var t=0,e=this._elsItem.length;t<e;t++){var i=this._elsItem[t],s=parseInt(i.dataset.order);s<this._minOrder?(this._minOrder=s,this._$itemWithMinOrder=i,this._minTranslate=parseInt(i.dataset.translate)):s>this._maxOrder&&(this._maxOrder=s,this._$itemWithMaxOrder=i,this._maxTranslate=parseInt(i.dataset.translate))}}},{key:"_balancingItems",value:function(){if(this._balancingItemsFlag){var t,e,i=this._elWrapper.getBoundingClientRect(),s=i.width/2,n=this._elsItem.length;if("next"===this._direction){var r=i.left,a=this._$itemWithMinOrder;t=this._minTranslate,a.getBoundingClientRect().right<r-s&&(a.dataset.order=this._minOrder+n,t+=n,a.dataset.translate=t,e=t*this._width,a.style.transform="translateX("+e+"px)",this._refreshExtremeValues())}else if("prev"===this._direction){var o=i.right,_=this._$itemWithMaxOrder;t=this._maxTranslate,_.getBoundingClientRect().left>o+s&&(_.dataset.order=this._maxOrder-n,t-=n,_.dataset.translate=t,e=t*this._width,_.style.transform="translateX("+e+"px)",this._refreshExtremeValues())}requestAnimationFrame(this._balancingItems.bind(this))}}},{key:"_addEventListener",value:function(){var t=this._elItems;function e(t){if(this._autoplay("stop"),!t.target.closest(i.CLASS_NAME_CONTROL)){var e=0===t.type.search("touch")?t.touches[0]:t;this._swipeStartPosX=e.clientX,this._swipeStartPosY=e.clientY,this._hasSwipeState=!0,this._hasSwiping=!1}}function s(t){if(this._hasSwipeState){var e=0===t.type.search("touch")?t.touches[0]:t,s=this._swipeStartPosX-e.clientX,n=this._swipeStartPosY-e.clientY;if(!this._hasSwiping){if(Math.abs(n)>Math.abs(s)||0===Math.abs(s))return void(this._hasSwipeState=!1);this._hasSwiping=!0}t.preventDefault(),this._config.loop||(this._currentIndex+1>=this._elsItem.length&&s>=0&&(s/=4),this._currentIndex<=0&&s<=0&&(s/=4));var r=s/this._elWrapper.getBoundingClientRect().width,a=this._transform-r;this._elItems.classList.add(i.TRANSITION_NONE),a*=this._width,this._elItems.style.transform="translateX("+a+"px)"}}function n(t){if(this._hasSwipeState){var e=0===t.type.search("touch")?t.changedTouches[0]:t,s=this._swipeStartPosX-e.clientX;if(0!==s){this._config.loop||(this._currentIndex+1>=this._elsItem.length&&s>=0&&(s/=7),this._currentIndex<=0&&s<=0&&(s/=7));var n=s/this._elWrapper.getBoundingClientRect().width*100;this._elItems.classList.remove(i.TRANSITION_NONE),n>i.SWIPE_THRESHOLD?(this._direction="next",this._move()):n<-i.SWIPE_THRESHOLD?(this._direction="prev",this._move()):(this._direction="none",this._move()),this._hasSwipeState=!1,this._config.loop&&this._autoplay()}else this._hasSwipeState=!1}}if(this._el.addEventListener("click",function(t){var e=t.target;if(this._autoplay("stop"),e.classList.contains(i.CLASS_NAME_CONTROL))t.preventDefault(),this._direction=e.dataset.slide,this._move();else if(e.dataset.slideTo){t.preventDefault();var s=parseInt(e.dataset.slideTo);this._moveTo(s)}this._config.loop&&this._autoplay()}.bind(this)),this._config.loop&&(t.addEventListener("transition-start",function(){this._balancingItemsFlag||(this._balancingItemsFlag=!0,window.requestAnimationFrame(this._balancingItems.bind(this)))}.bind(this)),t.addEventListener("transitionend",function(){this._balancingItemsFlag=!1,this._el.dispatchEvent(new CustomEvent("transition-end",{bubbles:!0}))}.bind(this))),this._config.autoplay&&(this._el.addEventListener("mouseenter",function(){this._autoplay("stop")}.bind(this)),this._el.addEventListener("mouseleave",function(){this._config.loop&&this._autoplay()}.bind(this))),this._config.swipe){var r=!1;try{var a=Object.defineProperty({},"passive",{get:function(){r=!0}});window.addEventListener("testPassiveListener",null,a)}catch(t){}this._el.addEventListener("touchstart",e.bind(this),!!r&&{passive:!1}),this._el.addEventListener("touchmove",s.bind(this),!!r&&{passive:!1}),this._el.addEventListener("mousedown",e.bind(this)),this._el.addEventListener("mousemove",s.bind(this)),document.addEventListener("touchend",n.bind(this)),document.addEventListener("mouseup",n.bind(this)),document.addEventListener("mouseout",n.bind(this))}if(this._el.addEventListener("dragstart",function(t){t.preventDefault()}.bind(this)),document.addEventListener("visibilitychange",function(){"hidden"===document.visibilityState?this._autoplay("stop"):"visible"===document.visibilityState&&this._config.loop&&this._autoplay()}.bind(this)),this._supportResizeObserver){var o=new ResizeObserver(function(t){var e,s=t[0].contentBoxSize,n=t[0].contentRect,r=n?n.width:(s[0]||s).inlineSize;if(this._width.toFixed(1)!==r.toFixed(1)){this._autoplay("stop"),this._elItems.classList.add(i.TRANSITION_NONE),this._width=parseInt(r.toFixed(1),10),e=r*parseInt(this._elItems.dataset.translate,10),this._elItems.style.transform="translateX("+e+"px)";for(var a=this._elsItem,o=0;o<a.length;o++)e=parseInt(a[o].dataset.translate)*r,a[o].style.transform="translateX("+e+"px)";this._config.loop&&this._autoplay()}}.bind(this));o.observe(this._elWrapper)}}},{key:"next",value:function(){this._direction="next",this._move()}},{key:"prev",value:function(){this._direction="prev",this._move()}},{key:"autoplay",value:function(t){this._autoplay("stop")}},{key:"moveTo",value:function(t,e){this._moveTo(t,e)}}])&&t(s.prototype,n),Object.defineProperty(s,"prototype",{writable:!1}),i}();function s(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}e(i,"PREFIX","slider"),e(i,"CLASS_NAME_ITEM","".concat(i.PREFIX,"__item")),e(i,"CLASS_NAME_ITEM_ACTIVE","".concat(i.PREFIX,"__item_active")),e(i,"CLASS_NAME_ITEMS","".concat(i.PREFIX,"__items")),e(i,"CLASS_NAME_INDICATOR","".concat(i.PREFIX,"__indicator")),e(i,"CLASS_NAME_INDICATOR_ACTIVE","".concat(i.PREFIX,"__indicator_active")),e(i,"CLASS_NAME_INDICATORS","".concat(i.PREFIX,"__indicators")),e(i,"CLASS_NAME_CONTROL","".concat(i.PREFIX,"__control")),e(i,"CLASS_NAME_CONTROL_PREV","".concat(i.PREFIX,"__control_prev")),e(i,"CLASS_NAME_CONTROL_NEXT","".concat(i.PREFIX,"__control_next")),e(i,"CLASS_NAME_CONTROL_SHOW","".concat(i.PREFIX,"__control_show")),e(i,"SELECTOR_ITEMS",".".concat(i.CLASS_NAME_ITEMS)),e(i,"SELECTOR_ITEM",".".concat(i.CLASS_NAME_ITEM)),e(i,"SELECTOR_ITEM_ACTIVE",".".concat(i.CLASS_NAME_ITEM_ACTIVE)),e(i,"SELECTOR_INDICATOR_ACTIVE",".".concat(i.CLASS_NAME_INDICATOR_ACTIVE)),e(i,"SELECTOR_INDICATORS",".".concat(i.CLASS_NAME_INDICATORS)),e(i,"SELECTOR_WRAPPER",".".concat(i.PREFIX,"__wrapper")),e(i,"SELECTOR_CONTROL",".".concat(i.CLASS_NAME_CONTROL)),e(i,"SELECTOR_CONTROL_NEXT",".".concat(i.CLASS_NAME_CONTROL_NEXT)),e(i,"SELECTOR_CONTROL_PREV",".".concat(i.CLASS_NAME_CONTROL_PREV)),e(i,"SWIPE_THRESHOLD",20),e(i,"TRANSITION_NONE","transition-none");var n=function(){function t(e,i){var s=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=s,this._container=document.querySelector(i)}var e,i;return e=t,(i=[{key:"renderCards",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.append(t)}}])&&s(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),t}(),r=(document.querySelector(".carousel"),".card-template");function a(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var o,_,h,l=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._title=e.title,this._text=e.description,this._author=e.author,this._date=e.publishedAt,this._selector=i}var e,i;return e=t,(i=[{key:"_getTemplate",value:function(){return document.querySelector(this._selector).content.querySelector(".card").cloneNode(!0)}},{key:"_changeMonth",value:function(e){return t.MONTH[e-1]}},{key:"_checkAuthor",value:function(t){return null===t?"Unknown":t}},{key:"_exchangeDate",value:function(t){var e=t.substr(0,10).split("-"),i=this._changeMonth(Number(e[1]));return"".concat(e[2]," ").concat(i," ").concat(e[0])}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._element.querySelector(".card__title").textContent=this._title,this._element.querySelector(".card__text").textContent=this._text,this._element.querySelector(".card__author").textContent=this._checkAuthor(this._author),this._element.querySelector(".card__date").textContent=this._exchangeDate(this._date),this._element}}])&&a(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}h=["яиваря","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],(_="MONTH")in(o=l)?Object.defineProperty(o,_,{value:h,enumerable:!0,configurable:!0,writable:!0}):o[_]=h;var d=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.url=e.url,this.headers=e.headers}var e,i;return e=t,(i=[{key:"getCards",value:function(){return fetch(this.url,{headers:this.headers}).then(this._checkPromise)}},{key:"_checkPromise",value:function(t){return t.ok||Promise.reject("Error ".concat(t.status)),t.json()}}])&&c(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();document.addEventListener("DOMContentLoaded",(function(){new i(".slider",{loop:!0,autoplay:!0,interval:3e3,swipe:!0})}));var u=function(t){alert("Всё идёт не по плану. ".concat(t.status))},v=new d({url:"https://mocki.io/v1/a5814d24-4e22-49fc-96d1-0e9ae2952afc",headers:{"Content-Type":"application/json"}}),m=new n({renderer:function(t){!function(t){var e=new l(t,r).generateCard();m.addItem(e)}(t)}},".cards__list");Promise.all([v.getCards().then((function(t){return t})).catch(u)]).then((function(t){var e=t.map((function(t){return t.articles}))[0];m.renderCards(e)})).catch(u)})();