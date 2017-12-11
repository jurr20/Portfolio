// FOR CIRCLE-BG ANIMATI0N
/*!
* Lettering.JS 0.7.0
*
* Copyright 2010, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Thanks to Paul Irish - http://paulirish.com - for the feedback.
*
* Date: Mon Sep 20 17:14:00 2010 -0600
*/
(function(b){function c(e,f,g,h){var j=e.text(),k=j.split(f),l='';k.length&&(b(k).each(function(m,n){l+='<span class="'+g+(m+1)+'" aria-hidden="true">'+n+'</span>'+h}),e.attr('aria-label',j).empty().append(l))}var d={init:function(){return this.each(function(){c(b(this),'','char','')})},words:function(){return this.each(function(){c(b(this),' ','word',' ')})},lines:function(){return this.each(function(){var e='eefec303079ad17405c889e092e105b0';c(b(this).children('br').replaceWith(e).end(),e,'line','')})}};b.fn.lettering=function(e){return e&&d[e]?d[e].apply(this,[].slice.call(arguments,1)):'letters'!==e&&e?(b.error('Method '+e+' does not exist on jQuery.lettering'),this):d.init.apply(this,[].slice.call(arguments,0))}})(jQuery);