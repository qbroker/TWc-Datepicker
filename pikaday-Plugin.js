/***
|Name|pikaday-Plugin.js |
|Version|1.0.2 |
|Version library|1.8.2 |
|Description| |
|Source|pikaday-Source |
|Documentation| |
|Author|Okido |
|License| |
|~CoreVersion| |
|Type| |
|Status|EXPERIMENTAL - SUBJECT TO CHANGE |

!!!Documentation
<<<
This plugin provides a datepicker for TWc.
Localization is only available for the button version.
<<<
!!!Usage
<<<
{{{
Invoke with <<pikaday>> for input elements with an id datepicker0 or datepicker1
Invoke with <<pikadayjquery>> for input elements that have the class datepicker
Invoke with <<pikadayfield buttonname fieldname>> for a button that stores the result in a custom field 
}}}
{{{
The date output string for the button version can be defined with following tokens: YYYY, YY, MMM, mmm, 0MM, MM, DDD, ddd, 0DD, DD
}}}
<<<
!!!Configuration
<<<
You can set the styling, number of months and localization here below in the code part. 
After editing save and reload.
<<<
!!!Revisions
<<<
19.12.2020 1.0.2 Added localization for the pikaday popup, only the months and days, basic token formatting is added
13.12.2020 1.0.1 Added settings to set localizations, the CSS tiddler is split, the only CSS that is needed for this plugin is [[Pikaday-CSS]]
04.12.2020 1.0.0 Added pikadayfield macro that provides a button to open the pikaday.js date popup to select a date and store the date in a field
28.06.2020 0.0.1 Rebuild [[pikaday-Core-Plugin.js]], [[pikaday-jQuery-Plugin.js]] and [[pikaday-Macro-Plugin.js]] into [[pikaday-Plugin.js]]
<<<
!!!License
<<<
{{preblue{
  License for the pikaday code
}}}
Copyright (c) 2014 David Bushell BSD & MIT license

The MIT License (MIT)

Copyright (c) 2014 David Bushell

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

The BSD License

Copyright (c) 2014 David Bushell
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

{{preblue{
  License for the ~TWc plugin code
}}}
The MIT License (MIT)

Copyright (c) 2017 - 2020 Okido
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
<<<
!!!Code
***/
//{{{
/* Pikaday SETTINGS START HERE */
/* Last updated 19-12-2020 */
/* You can edit these settings to style the pikaday popup and stored date */

/* To style the button set the class name here */
config.options.txtPikadayButtonClass = "pure-button pure-button-primary pure-u-1-12" // "button"

/* To set the number of months set the number here, 1 to 4 */
config.options.txtPikadayNumberMonths = 3

/* Date formatting */
config.options.txtPikadayDateFormat = "0DD-0MM-YYYY" // YYYY, YY, MMM, mmm, 0MM, MM, DDD, ddd, 0DD, DD

/* To set the localization here */
config.options.txtPikadayLocalization = "en-US" // Examples "en-GB", "en-US", "de-DL", "de-AT", "es-ES", "ja-JP" etc.
config.options.txtPikadayLocalizationOptions = { "year": "numeric", "month": "long", "day": "2-digit"}

/* Possible options for localization:
  "weekday": "narrow", "short", "long"
  "year": "numeric", "2-digit"
  "month": "numeric", "2-digit", "narrow", "short", "long"
  "day": "numeric", "2-digit" */
 
/* Pikaday SETTINGS END HERE */
//}}}
//{{{
/* JS CODE STARTS HERE */
/* Minified with UglifyJS - 01-11-2020 */
!function(e,t){"use strict";var n;if("object"==typeof exports){try{n=require("moment")}catch(e){}module.exports=t(n)}else"function"==typeof define&&define.amd?define(function(e){try{n=e("moment")}catch(e){}return t(n)}):e.Pikaday=t(e.moment)}(this,function(e){"use strict";var t="function"==typeof e,n=!!window.addEventListener,a=window.document,i=window.setTimeout,s=function(e,t,a,i){n?e.addEventListener(t,a,!!i):e.attachEvent("on"+t,a)},o=function(e,t,a,i){n?e.removeEventListener(t,a,!!i):e.detachEvent("on"+t,a)},r=function(e,t){return-1!==(" "+e.className+" ").indexOf(" "+t+" ")},l=function(e,t){r(e,t)||(e.className=""===e.className?t:e.className+" "+t)},h=function(e,t){var n;e.className=(n=(" "+e.className+" ").replace(" "+t+" "," ")).trim?n.trim():n.replace(/^\s+|\s+$/g,"")},d=function(e){return/Array/.test(Object.prototype.toString.call(e))},u=function(e){return/Date/.test(Object.prototype.toString.call(e))&&!isNaN(e.getTime())},c=function(e){var t=e.getDay();return 0===t||6===t},f=function(e,t){return[31,function(e){return e%4==0&&e%100!=0||e%400==0}(e)?29:28,31,30,31,30,31,31,30,31,30,31][t]},g=function(e){u(e)&&e.setHours(0,0,0,0)},m=function(e,t){return e.getTime()===t.getTime()},p=function(e,t,n){var a,i;for(a in t)(i=void 0!==e[a])&&"object"==typeof t[a]&&null!==t[a]&&void 0===t[a].nodeName?u(t[a])?n&&(e[a]=new Date(t[a].getTime())):d(t[a])?n&&(e[a]=t[a].slice(0)):e[a]=p({},t[a],n):!n&&i||(e[a]=t[a]);return e},y=function(e,t,n){var i;a.createEvent?((i=a.createEvent("HTMLEvents")).initEvent(t,!0,!1),i=p(i,n),e.dispatchEvent(i)):a.createEventObject&&(i=a.createEventObject(),i=p(i,n),e.fireEvent("on"+t,i))},D=function(e){return e.month<0&&(e.year-=Math.ceil(Math.abs(e.month)/12),e.month+=12),e.month>11&&(e.year+=Math.floor(Math.abs(e.month)/12),e.month-=12),e},b={field:null,bound:void 0,ariaLabel:"Use the arrow keys to pick a date",position:"bottom left",reposition:!0,format:"YYYY-MM-DD",toString:null,parse:null,defaultDate:null,setDefaultDate:!1,firstDay:0,firstWeekOfYearMinDays:4,formatStrict:!1,minDate:null,maxDate:null,yearRange:10,showWeekNumber:!1,pickWholeWeek:!1,minYear:0,maxYear:9999,minMonth:void 0,maxMonth:void 0,startRange:null,endRange:null,isRTL:!1,yearSuffix:"",showMonthAfterYear:!1,showDaysInNextAndPreviousMonths:!1,enableSelectionDaysInNextAndPreviousMonths:!1,numberOfMonths:1,mainCalendar:"left",container:void 0,blurFieldOnSelect:!0,i18n:{previousMonth:"Previous Month",nextMonth:"Next Month",months:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},theme:null,events:[],onSelect:null,onOpen:null,onClose:null,onDraw:null,keyboardInput:!0},v=function(e,t,n){for(t+=e.firstDay;t>=7;)t-=7;return n?e.i18n.weekdaysShort[t]:e.i18n.weekdays[t]},_=function(e){var t=[],n="false";if(e.isEmpty){if(!e.showDaysInNextAndPreviousMonths)return'<td class="is-empty"></td>';t.push("is-outside-current-month"),e.enableSelectionDaysInNextAndPreviousMonths||t.push("is-selection-disabled")}return e.isDisabled&&t.push("is-disabled"),e.isToday&&t.push("is-today"),e.isSelected&&(t.push("is-selected"),n="true"),e.hasEvent&&t.push("has-event"),e.isInRange&&t.push("is-inrange"),e.isStartRange&&t.push("is-startrange"),e.isEndRange&&t.push("is-endrange"),'<td data-day="'+e.day+'" class="'+t.join(" ")+'" aria-selected="'+n+'"><button class="pika-button pika-day" type="button" data-pika-year="'+e.year+'" data-pika-month="'+e.month+'" data-pika-day="'+e.day+'">'+e.day+"</button></td>"},w=function(n,a,i,s){var o=new Date(i,a,n);return'<td class="pika-week">'+(t?e(o).isoWeek():function(e,t){e.setHours(0,0,0,0);var n=e.getDate(),a=e.getDay(),i=t,s=i-1,o=function(e){return(e+7-1)%7};e.setDate(n+s-o(a));var r=new Date(e.getFullYear(),0,i),l=(e.getTime()-r.getTime())/864e5;return 1+Math.round((l-s+o(r.getDay()))/7)}(o,s))+"</td>"},k=function(e,t,n,a){return'<tr class="pika-row'+(n?" pick-whole-week":"")+(a?" is-selected":"")+'">'+(t?e.reverse():e).join("")+"</tr>"},M=function(e,t,n,a,i,s){var o,r,l,h,u,c=e._o,f=n===c.minYear,g=n===c.maxYear,m='<div id="'+s+'" class="pika-title" role="heading" aria-live="assertive">',p=!0,y=!0;for(l=[],o=0;o<12;o++)l.push('<option value="'+(n===i?o-t:12+o-t)+'"'+(o===a?' selected="selected"':"")+(f&&o<c.minMonth||g&&o>c.maxMonth?' disabled="disabled"':"")+">"+c.i18n.months[o]+"</option>");for(h='<div class="pika-label">'+c.i18n.months[a]+'<select class="pika-select pika-select-month" tabindex="-1">'+l.join("")+"</select></div>",d(c.yearRange)?(o=c.yearRange[0],r=c.yearRange[1]+1):(o=n-c.yearRange,r=1+n+c.yearRange),l=[];o<r&&o<=c.maxYear;o++)o>=c.minYear&&l.push('<option value="'+o+'"'+(o===n?' selected="selected"':"")+">"+o+"</option>");return u='<div class="pika-label">'+n+c.yearSuffix+'<select class="pika-select pika-select-year" tabindex="-1">'+l.join("")+"</select></div>",c.showMonthAfterYear?m+=u+h:m+=h+u,f&&(0===a||c.minMonth>=a)&&(p=!1),g&&(11===a||c.maxMonth<=a)&&(y=!1),0===t&&(m+='<button class="pika-prev'+(p?"":" is-disabled")+'" type="button">'+c.i18n.previousMonth+"</button>"),t===e._o.numberOfMonths-1&&(m+='<button class="pika-next'+(y?"":" is-disabled")+'" type="button">'+c.i18n.nextMonth+"</button>"),m+"</div>"},x=function(e,t,n){return'<table cellpadding="0" cellspacing="0" class="pika-table" role="grid" aria-labelledby="'+n+'">'+function(e){var t,n=[];for(e.showWeekNumber&&n.push("<th></th>"),t=0;t<7;t++)n.push('<th scope="col"><abbr title="'+v(e,t)+'">'+v(e,t,!0)+"</abbr></th>");return"<thead><tr>"+(e.isRTL?n.reverse():n).join("")+"</tr></thead>"}(e)+("<tbody>"+t.join("")+"</tbody>")+"</table>"},R=function(o){var l=this,h=l.config(o);l._onMouseDown=function(e){if(l._v){var t=(e=e||window.event).target||e.srcElement;if(t)if(r(t,"is-disabled")||(!r(t,"pika-button")||r(t,"is-empty")||r(t.parentNode,"is-disabled")?r(t,"pika-prev")?l.prevMonth():r(t,"pika-next")&&l.nextMonth():(l.setDate(new Date(t.getAttribute("data-pika-year"),t.getAttribute("data-pika-month"),t.getAttribute("data-pika-day"))),h.bound&&i(function(){l.hide(),h.blurFieldOnSelect&&h.field&&h.field.blur()},100))),r(t,"pika-select"))l._c=!0;else{if(!e.preventDefault)return e.returnValue=!1,!1;e.preventDefault()}}},l._onChange=function(e){var t=(e=e||window.event).target||e.srcElement;t&&(r(t,"pika-select-month")?l.gotoMonth(t.value):r(t,"pika-select-year")&&l.gotoYear(t.value))},l._onKeyChange=function(e){if(e=e||window.event,l.isVisible())switch(e.keyCode){case 13:case 27:h.field&&h.field.blur();break;case 37:l.adjustDate("subtract",1);break;case 38:l.adjustDate("subtract",7);break;case 39:l.adjustDate("add",1);break;case 40:l.adjustDate("add",7);break;case 8:case 46:l.setDate(null)}},l._parseFieldValue=function(){if(h.parse)return h.parse(h.field.value,h.format);if(t){var n=e(h.field.value,h.format,h.formatStrict);return n&&n.isValid()?n.toDate():null}return new Date(Date.parse(h.field.value))},l._onInputChange=function(e){var t;e.firedBy!==l&&(t=l._parseFieldValue(),u(t)&&l.setDate(t),l._v||l.show())},l._onInputFocus=function(){l.show()},l._onInputClick=function(){l.show()},l._onInputBlur=function(){var e=a.activeElement;do{if(r(e,"pika-single"))return}while(e=e.parentNode);l._c||(l._b=i(function(){l.hide()},50)),l._c=!1},l._onClick=function(e){var t=(e=e||window.event).target||e.srcElement,a=t;if(t){!n&&r(t,"pika-select")&&(t.onchange||(t.setAttribute("onchange","return;"),s(t,"change",l._onChange)));do{if(r(a,"pika-single")||a===h.trigger)return}while(a=a.parentNode);l._v&&t!==h.trigger&&a!==h.trigger&&l.hide()}},l.el=a.createElement("div"),l.el.className="pika-single"+(h.isRTL?" is-rtl":"")+(h.theme?" "+h.theme:""),s(l.el,"mousedown",l._onMouseDown,!0),s(l.el,"touchend",l._onMouseDown,!0),s(l.el,"change",l._onChange),h.keyboardInput&&s(a,"keydown",l._onKeyChange),h.field&&(h.container?h.container.appendChild(l.el):h.bound?a.body.appendChild(l.el):h.field.parentNode.insertBefore(l.el,h.field.nextSibling),s(h.field,"change",l._onInputChange),h.defaultDate||(h.defaultDate=l._parseFieldValue(),h.setDefaultDate=!0));var d=h.defaultDate;u(d)?h.setDefaultDate?l.setDate(d,!0):l.gotoDate(d):l.gotoDate(new Date),h.bound?(this.hide(),l.el.className+=" is-bound",s(h.trigger,"click",l._onInputClick),s(h.trigger,"focus",l._onInputFocus),s(h.trigger,"blur",l._onInputBlur)):this.show()};return R.prototype={config:function(e){this._o||(this._o=p({},b,!0));var t=p(this._o,e,!0);t.isRTL=!!t.isRTL,t.field=t.field&&t.field.nodeName?t.field:null,t.theme="string"==typeof t.theme&&t.theme?t.theme:null,t.bound=!!(void 0!==t.bound?t.field&&t.bound:t.field),t.trigger=t.trigger&&t.trigger.nodeName?t.trigger:t.field,t.disableWeekends=!!t.disableWeekends,t.disableDayFn="function"==typeof t.disableDayFn?t.disableDayFn:null;var n=parseInt(t.numberOfMonths,10)||1;if(t.numberOfMonths=n>4?4:n,u(t.minDate)||(t.minDate=!1),u(t.maxDate)||(t.maxDate=!1),t.minDate&&t.maxDate&&t.maxDate<t.minDate&&(t.maxDate=t.minDate=!1),t.minDate&&this.setMinDate(t.minDate),t.maxDate&&this.setMaxDate(t.maxDate),d(t.yearRange)){var a=(new Date).getFullYear()-10;t.yearRange[0]=parseInt(t.yearRange[0],10)||a,t.yearRange[1]=parseInt(t.yearRange[1],10)||a}else t.yearRange=Math.abs(parseInt(t.yearRange,10))||b.yearRange,t.yearRange>100&&(t.yearRange=100);return t},toString:function(n){return n=n||this._o.format,u(this._d)?this._o.toString?this._o.toString(this._d,n):t?e(this._d).format(n):this._d.toDateString():""},getMoment:function(){return t?e(this._d):null},setMoment:function(n,a){t&&e.isMoment(n)&&this.setDate(n.toDate(),a)},getDate:function(){return u(this._d)?new Date(this._d.getTime()):null},setDate:function(e,t){if(!e)return this._d=null,this._o.field&&(this._o.field.value="",y(this._o.field,"change",{firedBy:this})),this.draw();if("string"==typeof e&&(e=new Date(Date.parse(e))),u(e)){var n=this._o.minDate,a=this._o.maxDate;u(n)&&e<n?e=n:u(a)&&e>a&&(e=a),this._d=new Date(e.getTime()),g(this._d),this.gotoDate(this._d),this._o.field&&(this._o.field.value=this.toString(),y(this._o.field,"change",{firedBy:this})),t||"function"!=typeof this._o.onSelect||this._o.onSelect.call(this,this.getDate())}},clear:function(){this.setDate(null)},gotoDate:function(e){var t=!0;if(u(e)){if(this.calendars){var n=new Date(this.calendars[0].year,this.calendars[0].month,1),a=new Date(this.calendars[this.calendars.length-1].year,this.calendars[this.calendars.length-1].month,1),i=e.getTime();a.setMonth(a.getMonth()+1),a.setDate(a.getDate()-1),t=i<n.getTime()||a.getTime()<i}t&&(this.calendars=[{month:e.getMonth(),year:e.getFullYear()}],"right"===this._o.mainCalendar&&(this.calendars[0].month+=1-this._o.numberOfMonths)),this.adjustCalendars()}},adjustDate:function(e,t){var n,a=this.getDate()||new Date,i=24*parseInt(t)*60*60*1e3;"add"===e?n=new Date(a.valueOf()+i):"subtract"===e&&(n=new Date(a.valueOf()-i)),this.setDate(n)},adjustCalendars:function(){this.calendars[0]=D(this.calendars[0]);for(var e=1;e<this._o.numberOfMonths;e++)this.calendars[e]=D({month:this.calendars[0].month+e,year:this.calendars[0].year});this.draw()},gotoToday:function(){this.gotoDate(new Date)},gotoMonth:function(e){isNaN(e)||(this.calendars[0].month=parseInt(e,10),this.adjustCalendars())},nextMonth:function(){this.calendars[0].month++,this.adjustCalendars()},prevMonth:function(){this.calendars[0].month--,this.adjustCalendars()},gotoYear:function(e){isNaN(e)||(this.calendars[0].year=parseInt(e,10),this.adjustCalendars())},setMinDate:function(e){e instanceof Date?(g(e),this._o.minDate=e,this._o.minYear=e.getFullYear(),this._o.minMonth=e.getMonth()):(this._o.minDate=b.minDate,this._o.minYear=b.minYear,this._o.minMonth=b.minMonth,this._o.startRange=b.startRange),this.draw()},setMaxDate:function(e){e instanceof Date?(g(e),this._o.maxDate=e,this._o.maxYear=e.getFullYear(),this._o.maxMonth=e.getMonth()):(this._o.maxDate=b.maxDate,this._o.maxYear=b.maxYear,this._o.maxMonth=b.maxMonth,this._o.endRange=b.endRange),this.draw()},setStartRange:function(e){this._o.startRange=e},setEndRange:function(e){this._o.endRange=e},draw:function(e){if(this._v||e){var t,n=this._o,a=n.minYear,s=n.maxYear,o=n.minMonth,r=n.maxMonth,l="";this._y<=a&&(this._y=a,!isNaN(o)&&this._m<o&&(this._m=o)),this._y>=s&&(this._y=s,!isNaN(r)&&this._m>r&&(this._m=r));for(var h=0;h<n.numberOfMonths;h++)t="pika-title-"+Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,2),l+='<div class="pika-lendar">'+M(this,h,this.calendars[h].year,this.calendars[h].month,this.calendars[0].year,t)+this.render(this.calendars[h].year,this.calendars[h].month,t)+"</div>";this.el.innerHTML=l,n.bound&&"hidden"!==n.field.type&&i(function(){n.trigger.focus()},1),"function"==typeof this._o.onDraw&&this._o.onDraw(this),n.bound&&n.field.setAttribute("aria-label",n.ariaLabel)}},adjustPosition:function(){var e,t,n,i,s,o,r,d,u,c,f,g;if(!this._o.container){if(this.el.style.position="absolute",t=e=this._o.trigger,n=this.el.offsetWidth,i=this.el.offsetHeight,s=window.innerWidth||a.documentElement.clientWidth,o=window.innerHeight||a.documentElement.clientHeight,r=window.pageYOffset||a.body.scrollTop||a.documentElement.scrollTop,f=!0,g=!0,"function"==typeof e.getBoundingClientRect)d=(c=e.getBoundingClientRect()).left+window.pageXOffset,u=c.bottom+window.pageYOffset;else for(d=t.offsetLeft,u=t.offsetTop+t.offsetHeight;t=t.offsetParent;)d+=t.offsetLeft,u+=t.offsetTop;(this._o.reposition&&d+n>s||this._o.position.indexOf("right")>-1&&d-n+e.offsetWidth>0)&&(d=d-n+e.offsetWidth,f=!1),(this._o.reposition&&u+i>o+r||this._o.position.indexOf("top")>-1&&u-i-e.offsetHeight>0)&&(u=u-i-e.offsetHeight,g=!1),this.el.style.left=d+"px",this.el.style.top=u+"px",l(this.el,f?"left-aligned":"right-aligned"),l(this.el,g?"bottom-aligned":"top-aligned"),h(this.el,f?"right-aligned":"left-aligned"),h(this.el,g?"top-aligned":"bottom-aligned")}},render:function(e,t,n){var a=this._o,i=new Date,s=f(e,t),o=new Date(e,t,1).getDay(),r=[],l=[];g(i),a.firstDay>0&&(o-=a.firstDay)<0&&(o+=7);for(var h=0===t?11:t-1,d=11===t?0:t+1,p=0===t?e-1:e,y=11===t?e+1:e,D=f(p,h),b=s+o,v=b;v>7;)v-=7;b+=7-v;for(var M=!1,R=0,N=0;R<b;R++){var S=new Date(e,t,R-o+1),C=!!u(this._d)&&m(S,this._d),I=m(S,i),T=-1!==a.events.indexOf(S.toDateString()),Y=R<o||R>=s+o,E=R-o+1,O=t,j=e,W=a.startRange&&m(a.startRange,S),F=a.endRange&&m(a.endRange,S),A=a.startRange&&a.endRange&&a.startRange<S&&S<a.endRange,L=a.minDate&&S<a.minDate||a.maxDate&&S>a.maxDate||a.disableWeekends&&c(S)||a.disableDayFn&&a.disableDayFn(S);Y&&(R<o?(E=D+E,O=h,j=p):(E-=s,O=d,j=y));var P={day:E,month:O,year:j,hasEvent:T,isSelected:C,isToday:I,isDisabled:L,isEmpty:Y,isStartRange:W,isEndRange:F,isInRange:A,showDaysInNextAndPreviousMonths:a.showDaysInNextAndPreviousMonths,enableSelectionDaysInNextAndPreviousMonths:a.enableSelectionDaysInNextAndPreviousMonths};a.pickWholeWeek&&C&&(M=!0),l.push(_(P)),7==++N&&(a.showWeekNumber&&l.unshift(w(R-o,t,e,a.firstWeekOfYearMinDays)),r.push(k(l,a.isRTL,a.pickWholeWeek,M)),l=[],N=0,M=!1)}return x(a,r,n)},isVisible:function(){return this._v},show:function(){this.isVisible()||(this._v=!0,this.draw(),h(this.el,"is-hidden"),this._o.bound&&(s(a,"click",this._onClick),this.adjustPosition()),"function"==typeof this._o.onOpen&&this._o.onOpen.call(this))},hide:function(){var e=this._v;!1!==e&&(this._o.bound&&o(a,"click",this._onClick),this._o.container||(this.el.style.position="static",this.el.style.left="auto",this.el.style.top="auto"),l(this.el,"is-hidden"),this._v=!1,void 0!==e&&"function"==typeof this._o.onClose&&this._o.onClose.call(this))},destroy:function(){var e=this._o;this.hide(),o(this.el,"mousedown",this._onMouseDown,!0),o(this.el,"touchend",this._onMouseDown,!0),o(this.el,"change",this._onChange),e.keyboardInput&&o(a,"keydown",this._onKeyChange),e.field&&(o(e.field,"change",this._onInputChange),e.bound&&(o(e.trigger,"click",this._onInputClick),o(e.trigger,"focus",this._onInputFocus),o(e.trigger,"blur",this._onInputBlur))),this.el.parentNode&&this.el.parentNode.removeChild(this.el)}},R});
//}}}
//{{{
/* JS CODE STARTS HERE */
/* Minified with UglifyJS - 01-11-2020 */
!function(e,t){"use strict";"object"==typeof exports?t(require("jquery"),require("pikaday")):"function"==typeof define&&define.amd?define(["jquery","pikaday"],t):t(e.jQuery,e.Pikaday)}(this,function(e,t){"use strict";e.fn.pikaday=function(){var a=arguments;return a&&a.length||(a=[{}]),this.each(function(){var i=e(this),n=i.data("pikaday");if(n instanceof t)"string"==typeof a[0]&&"function"==typeof n[a[0]]&&(n[a[0]].apply(n,Array.prototype.slice.call(a,1)),"destroy"===a[0]&&i.removeData("pikaday"));else if("object"==typeof a[0]){var r=e.extend({},a[0]);r.field=i[0],i.data("pikaday",new t(r))}})}});
//}}}
//{{{
/* JS CODE STARTS HERE */
/* Minified with UglifyJS - 19-12-2020 */
config.macros.pikadayjquery={handler:function(e,t,a,n,o,r){const i=config.options;let m=void 0===i.txtPikadayLocalization?(new Intl.NumberFormat).resolvedOptions().locale:i.txtPikadayLocalization;jQuery(".datepicker").pikaday({i18n:{previousMonth:"Previous Month",nextMonth:"Next Month",months:new Array(12).fill("").map((e,t)=>new Intl.DateTimeFormat(m,{month:"long"}).format(new Date(`2021-${t+1}-03`))),weekdays:new Array(7).fill("").map((e,t)=>new Intl.DateTimeFormat(m,{weekday:"long"}).format(new Date(`2021-1-${t+3}`))),weekdaysShort:new Array(7).fill("").map((e,t)=>new Intl.DateTimeFormat(m,{weekday:"short"}).format(new Date(`2021-1-${t+3}`)))},firstDay:1,showWeekNumber:!0,setDefaultDate:!0,defaultDate:(new Date).formatString("DD-MM-YYYY"),format:"0DD-0MM-YYYY",numberOfMonths:3,toString:(e,t)=>e.formatString("0DD-0MM-YYYY")})}},config.macros.pikaday={handler:function(e,t,a,n,o,r){const i=config.options;let m=void 0===i.txtPikadayLocalization?(new Intl.NumberFormat).resolvedOptions().locale:i.txtPikadayLocalization;new Pikaday({i18n:{previousMonth:"Previous Month",nextMonth:"Next Month",months:new Array(12).fill("").map((e,t)=>new Intl.DateTimeFormat(m,{month:"long"}).format(new Date(`2021-${t+1}-03`))),weekdays:new Array(7).fill("").map((e,t)=>new Intl.DateTimeFormat(m,{weekday:"long"}).format(new Date(`2021-1-${t+3}`))),weekdaysShort:new Array(7).fill("").map((e,t)=>new Intl.DateTimeFormat(m,{weekday:"short"}).format(new Date(`2021-1-${t+3}`)))},field:document.getElementById("datepicker0"),showWeekNumber:!0,setDefaultDate:!0,defaultDate:(new Date).formatString("DD-MM-YYYY"),format:"0DD-0MM-YYYY",numberOfMonths:3,toString:(e,t)=>e.formatString("0DD-0MM-YYYY")}),new Pikaday({i18n:{previousMonth:"Previous Month",nextMonth:"Next Month",months:new Array(12).fill("").map((e,t)=>new Intl.DateTimeFormat(m,{month:"long"}).format(new Date(`2021-${t+1}-03`))),weekdays:new Array(7).fill("").map((e,t)=>new Intl.DateTimeFormat(m,{weekday:"long"}).format(new Date(`2021-1-${t+3}`))),weekdaysShort:new Array(7).fill("").map((e,t)=>new Intl.DateTimeFormat(m,{weekday:"short"}).format(new Date(`2021-1-${t+3}`)))},field:document.getElementById("datepicker1"),showWeekNumber:!0,setDefaultDate:!0,defaultDate:(new Date).formatString("DD-MM-YYYY"),format:"0DD-0MM-YYYY",numberOfMonths:3,toString:(e,t)=>e.formatString("0DD-0MM-YYYY")})}};
/* JS CODE ENDS HERE */
//}}}
//{{{
/* JS CODE STARTS HERE */
/* Minified with UglifyJS - 19-12-2020 */
config.macros.pikadayfield={},config.macros.pikadayfield.handler=function(e,t,a,n,o,i){const r=config.options;void 0===a[0]&&(a[0]="Undefined"),void 0===a[1]&&(a[1]="undefinedvalue");let d=void 0===r.txtPikadayButtonClass?"button":r.txtPikadayButtonClass,l=void 0===r.txtPikadayNumberMonths?3:r.txtPikadayNumberMonths,m=void 0===r.txtPikadayLocalization?(new Intl.NumberFormat).resolvedOptions().locale:r.txtPikadayLocalization,c=(void 0===r.txtPikadayLocalizationOptions||r.txtPikadayLocalizationOptions,void 0===r.txtPikadayDateFormat?"DD-MM-YYYY":r.txtPikadayDateFormat);const s=store.getTiddler(story.findContainingTiddler(e).getAttribute("tiddler")).title;let y=s.replace(/\s+/g,"_")+a[0].replace(/\s+/g,"_");createTiddlyButton(e,a[0],"date","",d,y);new Pikaday({field:document.getElementById(y),i18n:{previousMonth:"Previous Month",nextMonth:"Next Month",months:new Array(12).fill("").map((e,t)=>new Intl.DateTimeFormat(m,{month:"long"}).format(new Date(`2021-${t+1}-03`))),weekdays:new Array(7).fill("").map((e,t)=>new Intl.DateTimeFormat(m,{weekday:"long"}).format(new Date(`2021-1-${t+3}`))),weekdaysShort:new Array(7).fill("").map((e,t)=>new Intl.DateTimeFormat(m,{weekday:"short"}).format(new Date(`2021-1-${t+3}`)))},firstDay:1,setDefaultDate:!1,showWeekNumber:!0,numberOfMonths:l,onSelect:function(){let e=function(e,t,a="en-US"){const n=t=>new Intl.DateTimeFormat(a,t).formatToParts(e)[0].value;return""!==t?t=(t=(t=(t=(t=(t=(t=(t=(t=(t=t.replace(/YYYY/g,n({year:"numeric"}))).replace(/YY/g,n({year:"2-digit"}))).replace(/MMM/g,n({month:"long"}))).replace(/mmm/g,n({month:"short"}))).replace(/0MM/g,n({month:"2-digit"}))).replace(/MM/g,n({month:"numeric"}))).replace(/DDD/g,n({weekday:"long"}))).replace(/ddd/g,n({weekday:"short"}))).replace(/0DD/g,n({day:"2-digit"}))).replace(/DD/g,n({day:"numeric"})):new Intl.DateTimeFormat(a,{year:"numeric",month:"numeric",day:"numeric"}).format(e)}(this._d,c,m);store.setValue(s,a[1],e)}})};
/* JS CODE ENDS HERE */
//}}}