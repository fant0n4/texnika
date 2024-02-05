!function(o){"function"==typeof define&&define.amd?define("scripts",o):o()}((function(){"use strict";function o(o,e,n){document.cookie=[encodeURIComponent(o)+"="+encodeURIComponent(e),"max-age="+n,"path=/"].join("; ")}function e(o){for(var e=encodeURIComponent(o)+"=",n=document.cookie.split(";"),t=0;t<n.length;t++){for(var i=n[t];" "===i.charAt(0);)i=i.substring(1,i.length);if(0===i.indexOf(e))return decodeURIComponent(i.substring(e.length,i.length))}return null}var n=1e3,t=6e4,i=36e5,p=24*i,s=function(s){if(s&&!(s.length<0)){var a,c,u,r,l,d=JSON.parse(s.getAttribute("data-options")),_=(a=d.locale,u={day:{en:["day","days"],ru:["день","дня","дней"]},hour:{en:["hour","hours"],ru:["час","часа","часов"]},minute:{en:["minute","minutes"],ru:["минута","минуты","минут"]},second:{en:["second","seconds"],ru:["секунда","секунды","секунд"]}},r=void 0!==(c={en:function(o){return 1===o?0:1},ru:function(o){return o%10==1&&o%100!=11?0:o%10>=2&&o%10<=4&&(o%100<10||o%100>=20)?1:2}})[a]?c[a]:c.en,function(o){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(void 0!==u[o]&&void 0!==u[o][a]){var n=r(e);if(void 0!==u[o][a][n])return u[o][a][n]}return o}),m=e(d.identity);if(null!==m){var f=m.split(".");m=parseInt(f[0]),l=f[1],parseInt(l)!==parseInt(d.time)&&(m=(new Date).getTime()+1e3*d.time,o(d.identity,[m,d.time].join("."),d.time))}else m=(new Date).getTime()+1e3*d.time,o(d.identity,[m,d.time].join("."),d.time);var w,h=new Date(m),v=(new Date).getTime(),y=Math.max(0,h-v),b=Math.floor(y/p),g=Math.floor(y%p/i),k=Math.floor(y%i/t),j=Math.floor(y%t/n),T="",x=!d.hide_empty||b>0,C=!d.hide_empty||g>0||x,M=!d.hide_empty||k>0||C;x&&(T+='<div class="'+d.class_prefix+'countdown__item js-mypopup-countdown-days"><div class="'+d.class_prefix+'countdown__num"><span class="js-mypopup-countdown-num"></span></div><div class="'+d.class_prefix+'countdown__label"><span class="js-mypopup-countdown-label"></span></div></div>'),C&&(T+='<div class="'+d.class_prefix+'countdown__item js-mypopup-countdown-hours"><div class="'+d.class_prefix+'countdown__num"><span class="js-mypopup-countdown-num"></span></div><div class="'+d.class_prefix+'countdown__label"><span class="js-mypopup-countdown-label"></span></div></div>'),M&&(T+='<div class="'+d.class_prefix+'countdown__item js-mypopup-countdown-minutes"><div class="'+d.class_prefix+'countdown__num"><span class="js-mypopup-countdown-num"></span></div><div class="'+d.class_prefix+'countdown__label"><span class="js-mypopup-countdown-label"></span></div></div>'),T+='<div class="'+d.class_prefix+'countdown__item js-mypopup-countdown-seconds"><div class="'+d.class_prefix+'countdown__num"><span class="js-mypopup-countdown-num"></span></div><div class="'+d.class_prefix+'countdown__label"><span class="js-mypopup-countdown-label"></span></div></div>',s.innerHTML=T;var E=function(){v=(new Date).getTime(),y=Math.max(0,h-v),b=Math.floor(y/p),g=Math.floor(y%p/i),k=Math.floor(y%i/t),j=Math.floor(y%t/n);var o=s.querySelector(".js-mypopup-countdown-days");null!==o&&(o.querySelector(".js-mypopup-countdown-num").innerHTML=b,o.querySelector(".js-mypopup-countdown-label").innerHTML=_("day",b));var e=s.querySelector(".js-mypopup-countdown-hours");null!==e&&(e.querySelector(".js-mypopup-countdown-num").innerHTML=d.start_with_zero&&g<10?"0"+g:g,e.querySelector(".js-mypopup-countdown-label").innerHTML=_("hour",g));var a=s.querySelector(".js-mypopup-countdown-minutes");null!==a&&(a.querySelector(".js-mypopup-countdown-num").innerHTML=d.start_with_zero&&k<10?"0"+k:k,a.querySelector(".js-mypopup-countdown-label").innerHTML=_("minute",k));var c=s.querySelector(".js-mypopup-countdown-seconds");c.querySelector(".js-mypopup-countdown-num").innerHTML=d.start_with_zero&&j<10?"0"+j:j,c.querySelector(".js-mypopup-countdown-label").innerHTML=_("second",j),y<=0&&(clearInterval(w),document.dispatchEvent(new CustomEvent("mypopup_countdown_elapsed",{detail:{el:s,identity:d.identity}})))};E(),w=setInterval(E,1e3)}},a=function(o){NodeList.prototype.isPrototypeOf(o)?o.forEach(s):s(o)};function c(o,e){for(var n=0;n<e.length;n++){var t=e[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(o,t.key,t)}}function u(o){try{return JSON.parse(e(o))||[]}catch(o){console.error(o)}return[]}var r=function(){function o(e,n){!function(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),this._cookieName=e,this.isPreview=n,this._popups=u(e)}var e,n,t;return e=o,(n=[{key:"getPopupsExcept",value:function(o){return this._popups.filter((function(e){return e.id!==o})).map((function(o){return{id:o.id,time:o.time,show_on:!!o.show_on}}))}},{key:"setAllPopups",value:function(o){return this._popups=o,function(o,e,n){var t;if(n){var i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3),t="; expires="+i.toGMTString()}else t="";document.cookie=encodeURIComponent(o)+"="+encodeURIComponent(e)+t+"; path=/"}(this._cookieName,JSON.stringify(o),this.isPreview?0:"3650"),this}},{key:"isHidden",value:function(o){var e=Math.floor((new Date).getTime()/1e3),n=!1;return this._popups.filter((function(e){return e.id===o.id})).forEach((function(o){o.time>e&&(n=!0)})),n}}])&&c(e.prototype,n),t&&c(e,t),Object.defineProperty(e,"prototype",{writable:!1}),o}();jQuery((function(o){var e=150,n=!!(my_popup_ajax||{}).is_preview,t=new r(n?"my_popup_hide__preview":"my_popup_hide",n),i=function(){this.stack=[],o(document).keyup(function(o){if(27===o.keyCode){var e=this.stack.pop();e&&"function"==typeof e.callback&&e.callback()}}.bind(this))};i.prototype.push=function(o,e){return this.off(o),this.stack.push({name:o,callback:e}),this},i.prototype.off=function(o){return this.stack=this.stack.filter((function(e){return e.name!==o})),this};var p=new i,s=!1,c=!1,u=!1,l=!1,d=!1,_=!1,m=!1;function f(){s&&h.forEach((function(o){o.show_popup_time_enabled&&void 0===o._showTimout&&(o._showTimout=setTimeout((function(){o.is_show||(b(o),o.is_show=!0)}),o.show_popup_time_value))})),c&&!_&&(window.addEventListener("scroll",x(v),!0),window.addEventListener("resize",x(v),!0),_=!0),u&&!m&&(window.addEventListener("scroll",x(y),!0),m=!0),l&&h.forEach((function(e){if(e.show_popup_inactive_enabled){var n=0;o(document).ready((function(){var t=setInterval((function(){n+=1,!e.is_show&&n>e.show_popup_inactive_value&&(b(e),e.is_show=!0,clearInterval(t))}),1e3);o(this).mousemove((function(o){n=0})),o(this).keypress((function(o){n=0}))}))}})),d&&h.forEach((function(e){e.show_popup_leaves_page&&o(document).mouseleave((function(o){!e.is_show&&o.clientY<100&&(b(e),e.is_show=!0)}))}))}function w(e){o("body").append(e);var n=e.attr("id"),t=e.data("options");t.show_popup_time_enabled&&(s=!0),t.show_popup_scroll_enabled&&(c=!0),t.show_popup_element_enabled&&(u=!0),t.show_popup_inactive_enabled&&(l=!0),t.show_popup_leaves_page&&(d=!0);var i={id:n,is_show:!1,popup_position:t.popup_position,cookies_enabled:!!parseInt(t.cookies_enabled),cookies_type:t.cookies_type,cookies_value:t.cookies_value,enable_overlay:t.enable_overlay,close_button_enabled:t.close_button_enabled,close_button_time:t.close_button_time,close_overlay:t.close_overlay,close_esc:t.close_esc,scroll_lock:t.scroll_lock,close_popup_enabled:t.close_popup_enabled,close_popup_time:t.close_popup_time,overlay_color:t.overlay_color,overlay_opacity:t.overlay_opacity,show_popup_time_enabled:t.show_popup_time_enabled,show_popup_time_value:t.show_popup_time_value,show_popup_scroll_enabled:t.show_popup_scroll_enabled,show_popup_scroll_value:t.show_popup_scroll_value,show_popup_element_enabled:t.show_popup_element_enabled,show_popup_element_value:t.show_popup_element_value,show_popup_inactive_enabled:t.show_popup_inactive_enabled,show_popup_inactive_value:t.show_popup_inactive_value,show_popup_leaves_page:t.show_popup_leaves_page,show_on_click:t.show_popup_on_click,show_on_click_selector:t.show_popup_on_click_selector};i.show_on_click&&i.show_on_click_selector&&o(document).on("click",i.show_on_click_selector,(function(o){o.preventDefault(),b(i,!1),i.is_show=!0})),h.push(i)}window.appendMyPopup=w,window.initMyPopups=f;var h=[];function v(){h.forEach((function(o){o.show_popup_scroll_enabled&&function(){var o=window.hasOwnProperty("pageYOffset")?window.pageYOffset:window.scrollTop,e=isNaN(window.innerHeight)?window.clientHeight:window.innerHeight,n=parseInt(100*o/(t=document.body,i=document.documentElement,Math.max(t.scrollHeight,t.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight)-e));var t,i;n<=0&&(n=0);n>=100&&(n=100);return n}()>=o.show_popup_scroll_value&&!o.is_show&&(b(o),o.is_show=!0)}))}function y(){h.forEach((function(e){if(e.show_popup_element_enabled){var n=o(e.show_popup_element_value).offset().top;(window.hasOwnProperty("pageYOffset")?window.pageYOffset:window.scrollTop)>n-(isNaN(window.innerHeight)?window.clientHeight:window.innerHeight)&&!e.is_show&&(b(e),e.is_show=!0)}}))}function b(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];n&&t.isHidden(e)||(e.enable_overlay&&(T(e.id),e.overlay_color&&o(".mypopup-over").css({"background-color":e.overlay_color}),e.overlay_opacity&&o(".mypopup-over").css({opacity:e.overlay_opacity})),setTimeout((function(){j(e);var n=o("#"+e.id),t=C(n);n.append(t),n.show((function(){document.dispatchEvent(new CustomEvent("my_popup_show",{detail:{$popup:n}}))})),n.find(".mypopup-modal-close.js-mypopup-modal-close").hide(),e.close_button_enabled&&setTimeout((function(){n.find(".mypopup-modal-close.js-mypopup-modal-close").show()}),e.close_button_time),g(e.id),[100,500,1e3,2e3].forEach((function(o){return setTimeout((function(){return g(e.id)}),o)})),o(window).resize((function(){g(e.id)})),n.on("click",(function(o){o.target===o.currentTarget&&k(e.id)})),e.close_esc||p.push(e.id,(function(){k(e.id)})),e.close_popup_enabled&&setTimeout((function(){k(e.id)}),e.close_popup_time),a(document.querySelectorAll("#"+e.id+" .js-mypopup-countdown"))}),10))}function g(e){var n=o(window).height();h.filter((function(o){return o.id===e})).forEach((function(e){var t=o("#modal_"+e.id).outerHeight();t+120>n?o("#modal_content_"+e.id).css({"max-height":n-40,"overflow-y":"auto"}):"center_left"!==e.popup_position&&"center_center"!==e.popup_position&&"center_right"!==e.popup_position||o("#modal_"+e.id).css({"margin-top":(n-t)/2})}))}function k(i){if(!n){var s=h.filter((function(o){return o.id===i}));if(!s.length)return!1;s=s[0],p.off(s.id);var a=t.getPopupsExcept(i),c=Math.floor((new Date).getTime()/1e3),u=s.cookies_enabled,r=Math.floor((new Date).getTime()/1e3);s.cookies_enabled?s.cookies_value&&("minutes"===s.cookies_type?c=r+60*s.cookies_value:"hours"===s.cookies_type?c=r+60*s.cookies_value*60:"days"===s.cookies_type?c=r+24*s.cookies_value*60*60:"months"===s.cookies_type&&(c=r+30*s.cookies_value*24*60*60)):c=r+31536e4,a.push({id:i,time:c,show_on:u}),t.setAllPopups(a),o(document.body).removeClass("mypopup-open"),o(document.body).removeClass("mypopup-scroll-lock"),setTimeout((function(){o("#"+i+"_over").remove(),o("#"+i).hide()}),e)}}function j(n){o(document.body).addClass("mypopup-open"),n.scroll_lock&&setTimeout((function(){o(document.body).addClass("mypopup-scroll-lock")}),e)}function T(e){var n=document.createElement("div");n.className="mypopup-over",n.id=e+"_over",h.forEach((function(t){t.overlay_color&&o("mypopup-over").css({"background-color":t.overlay_color}),t.overlay_opacity&&o("mypopup-over").css({opacity:t.overlay_opacity,"filter: alpha(opacity=":t.overlay_opacity}),t.close_overlay||o(n).on("click",(function(o){k(e)}))})),document.body.append(n)}function x(o,e){void 0===e&&(e=250);var n,t,i=!1;return function p(){if(i)return n=arguments,void(t=o);o.apply(o,arguments),i=!0,setTimeout((function(){i=!1,n&&(p.apply(t,n),n=t=null)}),e)}}function C(o){if(void 0===o.data("content"))return"";try{var e=decodeURIComponent(M(o.data("content")));return o.removeData("content"),o.removeAttr("data-content"),e}catch(o){console.error(o)}return""}function M(o){if("undefined"==typeof window)return new Buffer(o,"base64").toString("utf-8");if(void 0!==window.atob)return decodeURIComponent(escape(window.atob(o)));var e,n,t,i,p,s,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",c=0,u=0,r="",l=[];if(!o)return o;o+="";do{e=(s=a.indexOf(o.charAt(c++))<<18|a.indexOf(o.charAt(c++))<<12|(i=a.indexOf(o.charAt(c++)))<<6|(p=a.indexOf(o.charAt(c++))))>>16&255,n=s>>8&255,t=255&s,l[u++]=64===i?String.fromCharCode(e):64===p?String.fromCharCode(e,n):String.fromCharCode(e,n,t)}while(c<o.length);return r=l.join(""),decodeURIComponent(escape(r.replace(/\0+$/,"")))}o(".js-mypopup-container").each((function(){w(o(this))})),f(),function(){if(void 0===window.myPopupInitData)return;o.ajax({type:"post",url:my_popup_ajax.url,data:{nonce:my_popup_ajax.nonce,action:"my_popup_init_data",params:window.myPopupInitData.params}}).done((function(e){e.success?(e.data.items.forEach((function(e){w(o(e))})),f()):console.log(e)}))}(),window.myPopupShow=function(o){return h.filter((function(e){return e.id===o})).forEach((function(o){o.show_on_click&&(b(o),o.is_show=!0)})),!1},window.myPopupClose=function(e){if("string"==typeof e)k(e);else{var n=o(e).parents(".mypopup-modal");n.length&&k(n.attr("id").substring(6))}},document.addEventListener("click",(function(e){n&&(o(e.target).blur(),e.stopPropagation(),e.preventDefault(),console.warn("prevent all clicks in preview mode"))}),!0),o(document).on("click",".js-mypopup-modal-close",(function(){k(o(this).parents(".js-mypopup-container").attr("id"))})),o(document).on("click",".js-mypopup-link",(function(){var e=o(this).data("href");if(e){var n;try{n=new URL(e)}catch(o){}if(void 0===n)try{n=new URL(M(e))}catch(o){console.error("Unable to parse encoded url")}void 0!==n&&window.open(n)}})),o(document).on("submit",".mypopup-body form",(function(e){var n=o(e.target),t=n.find('input[data-name="my-popup-form-options"]');if(t.length){e.preventDefault();var i=function(e,t){var i=o("<span>").addClass("mypopup-modal__message mypopup-modal__message--"+t);i.text(e),n.find(".mypopup-modal__message").remove(),n.prepend(i)};o.ajax({type:"POST",url:n.attr("action"),data:n.serialize(),beforeSend:function(){n.find('*[type="submit"]').attr("disabled",!0)},success:function(o){o.success?(o.data&&o.data.message&&i(o.data.message,"success"),t.data("close_time")&&setTimeout((function(){return myPopupClose(n)}),t.data("close_time"))):o.data&&o.data.message&&i(o.data.message,"error")}}).always((function(){n.find('*[type="submit"]').attr("false",!0)}))}}))}))}));