/*    HTTP Host:  static.ak.fbcdn.net                                          */
/*    Generated:  April 21st 2009 8:30:20 PM PDT                               */
/*      Machine:  10.16.140.105                                                */
/*       Source:  Local Cache                                                  */
/*     Location:  rsrc:psg1kyu7:en_US:/html/js/3xqcncv2s4g0804o.pkg.js:141     */
/*       Locale:  en_US                                                        */
/*         Path:  js/3xqcncv2s4g0804o.pkg.js                                   */


var Emote={_initialized:false,_imageBase:null,_emoteMap:null,_emoteOrderMap:null,_imageURLs:null,_regex:null,initImageURL:function(imageURL){Emote._imageURL=imageURL;},_init:function(){var staticBase=env_get('static_base');Emote._imageBase=staticBase+'images/emote/';Emote._blankImgSrc=staticBase+'images/blank.gif';var emoteOrder=['smile','frown','tongue','grin','gasp','wink','glasses','sunglasses','grumpy','unsure','cry','devil','angel','kiss','heart','kiki','squint','confused','upset','pacman','colonthree'];Emote._emoteMap={':-)':['\\:\\-\\)','smile'],':)':['\\:\\)','smile'],':]':['\\:\\]','smile'],'=)':['=\\)','smile'],':-(':['\\:\\-\\(','frown'],':(':['\\:\\(','frown'],':[':['\\:\\[','frown'],'=(':['=\\(','frown'],':-P':['\\:\\-P','tongue'],':P':['\\:P','tongue'],':-p':['\\:\\-p','tongue'],':p':['\\:p','tongue'],'=P':['=P','tongue'],':-D':['\\:\\-D','grin'],':D':['\\:D','grin'],'=D':['=D','grin'],':-O':['\\:\\-O','gasp'],':O':['\\:O','gasp'],':-o':['\\:\\-o','gasp'],':o':['\\:o','gasp'],';-)':['\\;\\-\\)','wink'],';)':['\\;\\)','wink'],'8-)':['8\\-\\)','glasses'],'8)':['8\\)','glasses'],'B-)':['B\\-\\)','glasses'],'B)':['B\\)','glasses'],'8-|':['8\\-\\|','sunglasses'],'8|':['8\\|','sunglasses'],'B-|':['B\\-\\|','sunglasses'],'B|':['B\\|','sunglasses'],'>:(':['>\\:\\(','grumpy'],'>:-(':['>\\:\\-\\(','grumpy'],':/':['\\:/','unsure'],':-/':['\\:\\-/','unsure'],':\\':['\\:\\\\','unsure'],':-\\':['\\:\\-\\\\','unsure'],":'(":["\\:'\\(",'cry'],'3:)':['3\\:\\)','devil'],'3:-)':['3\\:\\-\\)','devil'],'O:)':['O\\:\\)','angel'],'O:-)':['O\\:\\-\\)','angel'],':-*':['\\:\\-\\*','kiss'],':*':['\\:\\*','kiss'],'<3':['<3','heart'],'^_^':['\\^_\\^','kiki'],'-_-':['\\-_\\-','squint'],'o.O':['o\\.O','confused'],'O.o':['O\\.o','confused'],'>:O':['>\\:O','upset'],'>:-O':['>\\:\\-O','upset'],'>:o':['>\\:o','upset'],'>:-o':['>\\:\\-o','upset'],':v':['\\:v','pacman'],':|]':['\\:\\|\\]','robot'],':3':['\\:3','colonthree'],':putnam:':['\\:putnam\\:','putnam']};var regexArr=[];for(var match in Emote._emoteMap){regexArr.push(Emote._emoteMap[match][0]);}
var regexStr='(?:^|\\s|\'|"|\\.)('+regexArr.join('|')+')(?:\\s|\'|"|\\.|,|!|\\?|<br>|$)';Emote._regex=new RegExp(regexStr);Emote._emoteOrderMap={};for(var i=0;i<emoteOrder.length;i++){Emote._emoteOrderMap[emoteOrder[i]]=i;}
Emote._initialized=true;},htmlEmote:function(str,txtFn){if(typeof txtFn!='function'){txtFn=htmlize;}
if(!Emote._initialized){Emote._init();}
var start=0;var strRemaining=str;var retArr=[];while(true){var matchObj=Emote._regex.exec(strRemaining);if(!matchObj||!matchObj.length){break;}
var match=matchObj[1];var matchKey=Emote._emoteMap[match][1];var matchIndex=strRemaining.indexOf(match);var chunk=strRemaining.substring(0,matchIndex);if(chunk){retArr.push(txtFn(chunk));}
retArr.push('<span class="emote_text">');retArr.push(match);retArr.push('</span><img class="emote_img" ');var matchOrder;if(typeof(matchOrder=Emote._emoteOrderMap[matchKey])=='undefined'){retArr.push('src="');retArr.push(Emote._imageBase);retArr.push(matchKey);retArr.push('.gif" ');}else{var matchPos=((matchOrder*-16)-590);retArr.push('src="');retArr.push(Emote._blankImgSrc);retArr.push('" style="background:url(');retArr.push(Emote._imageURL);retArr.push(') ');retArr.push(matchPos);retArr.push('px -84px no-repeat" ');}
retArr.push('alt="');retArr.push(match);retArr.push('" />');strRemaining=strRemaining.substring(matchIndex+match.length);}
if(strRemaining){retArr.push(txtFn(strRemaining));}
return retArr.join('');}};

function typeaheadpro(obj,source,properties){if(!typeaheadpro.hacks){typeaheadpro.should_check_missing_events=ua.safari()<500;typeaheadpro.should_simulate_keypress=(ua.ie()<8)||(ua.safari()>500&&ua.safari()<523||ua.safari()>=525);if(typeaheadpro.should_use_iframe==undefined){typeaheadpro.should_use_iframe=typeaheadpro.should_simulate_keypress;}
typeaheadpro.should_use_overflow=ua.opera()<9.5||ua.safari()<500;if(ua.firefox()){this.activate_poll_on_focus_events=true;}
typeaheadpro.hacks=true;}
typeaheadpro.instances=(typeaheadpro.instances||[]);typeaheadpro.instances.push(this);this.instance=typeaheadpro.instances.length-1;copy_properties(this,properties||{});this.obj=obj;this.obj.typeahead=this;this.obj.onfocus=this._onfocus.bind(this);this.obj.onblur=chain(this.obj.onblur,this._onblur.bind(this));this.obj.onchange=this._onchange.bind(this);this.obj.onkeyup=function(event){return this._onkeyup(event||window.event);}.bind(this);this.obj.onkeydown=function(event){return this._onkeydown(event||window.event);}.bind(this);this.obj.onkeypress=function(event){return this._onkeypress(event||window.event);}.bind(this);this.want_icon_list=false;this.showing_icon_list=false;this.stop_suggestion_select=false;if(this.typeahead_icon_class&&this.typeahead_icon_get_return){this.typeahead_icon=document.createElement('div');CSS.addClass(this.typeahead_icon,'typeahead_list_icon');CSS.addClass(this.typeahead_icon,this.typeahead_icon_class);this.typeahead_icon.innerHTML='&nbsp;';this.setup_typeahead_icon();setTimeout(function(){this.focus();}.bind(this),50);this.typeahead_icon.onmousedown=function(event){return this.typeahead_icon_onclick(event||window.event);}.bind(this);}
this.focused=this.focused||this.obj.offsetWidth?true:false;this.anchor=this.setup_anchor();this.dropdown=document.createElement('div');CSS.addClass(this.dropdown,'typeahead_list');if(!this.focused){this.dropdown.style.display='none';}
this.anchor_block=this.anchor_block||this.anchor.tagName.toLowerCase()=='div';DOMScroll.getScrollRoot().appendChild(this.dropdown);this.dropdown.className+=' typeahead_list_absolute';this.dropdown.appendChild(this.list=document.createElement('div'));this.dropdown.onmousedown=function(event){return this.dropdown_onmousedown(event||window.event);}.bind(this);if(typeaheadpro.should_use_iframe&&!typeaheadpro.iframe){typeaheadpro.iframe=document.createElement('iframe');typeaheadpro.iframe.src="/common/blank.html";CSS.setClass(typeaheadpro.iframe,'typeahead_iframe');typeaheadpro.iframe.style.display='none';typeaheadpro.iframe.frameBorder=0;DOMScroll.getScrollRoot().appendChild(typeaheadpro.iframe);}
if(typeaheadpro.should_use_iframe&&typeaheadpro.iframe){typeaheadpro.iframe.style.zIndex=parseInt(CSS.getStyle(this.dropdown,'zIndex'))-1;}
this.log_data={'kt':0,'kp':0,'sm':null,'ty':0,'f':1};this.results_text='';this.last_key_suggestion=0;this.status=typeaheadpro.STATUS_BLOCK_ON_SOURCE_BOOTSTRAP;this.clear_placeholder();if(source){this.set_source(source);}
if(this.source){this.selectedindex=-1;if(this.focused){this._onfocus();this.show();this._onkeyup();this.set_class('');this.capture_submit();}}else{this.hide();}
onunloadRegister(this._onunload.bind(this),true);}
typeaheadpro.prototype.enumerate=false;typeaheadpro.prototype.interactive=false;typeaheadpro.prototype.changed=false;typeaheadpro.prototype.render_block_size=50;typeaheadpro.prototype.typeahead_icon_class=false;typeaheadpro.prototype.typeahead_icon_get_return=false;typeaheadpro.prototype.old_value=null;typeaheadpro.prototype.poll_handle=null;typeaheadpro.prototype.activate_poll_on_focus_events=false;typeaheadpro.prototype.suggestion_count=0;typeaheadpro.STATUS_IDLE=0;typeaheadpro.STATUS_WAITING_ON_SOURCE=1;typeaheadpro.STATUS_BLOCK_ON_SOURCE_BOOTSTRAP=2;typeaheadpro.prototype.clear_value_on_blur=true;typeaheadpro.prototype.max_results=0;typeaheadpro.prototype.max_display=10;typeaheadpro.prototype.allow_placeholders=false;typeaheadpro.prototype.auto_select=true;typeaheadpro.dirty_instances=function(){if(typeaheadpro.instances){typeaheadpro.instances.forEach(function(instance){instance.update_status(typeaheadpro.STATUS_BLOCK_ON_SOURCE_BOOTSTRAP);if(instance.source){instance.source.is_ready=false;}});}}
typeaheadpro.prototype.set_source=function(source){this.source=source;this.source.set_owner(this);this.status=typeaheadpro.STATUS_IDLE;this.cache={};this.last_search=0;this.suggestions=[];}
typeaheadpro.prototype.setup_anchor=function(){return this.obj;}
typeaheadpro.prototype.destroy=function(){if(this.typeahead_icon){DOM.remove(this.typeahead_icon);this.toggle_icon_list=function(){};}
this.clear_render_timeouts();if(!this.anchor_block&&this.anchor.nextSibling.tagName.toLowerCase()=='br'){DOM.remove(this.anchor.nextSibling);}
if(this.dropdown){DOM.remove(this.dropdown);}
if(this.obj){this.obj.onfocus=this.obj.onblur=this.obj.onkeyup=this.obj.onkeydown=this.obj.onkeypress=this.obj.typeahead=null;DOM.remove(this.obj);}
this.anchor=this.obj=this.dropdown=null;delete typeaheadpro.instances[this.instance];}
typeaheadpro.prototype.check_value=function(){if(this.obj){var new_value=this.obj.value;if(new_value!=this.old_value){this.dirty_results();this.old_value=new_value;}}}
typeaheadpro.prototype._onkeyup=function(e){e=$E(e);this.last_key=e?e.keyCode:-1;if(this.key_down==this.last_key){this.key_down=0;}
var return_val=true;switch(this.last_key){case KEYS.ESC:this.selectedindex=-1;this._onselect(false);this.hide();e.stop();return_val=false;break;}
return return_val;}
typeaheadpro.prototype._onkeydown=function(e){e=$E(e);this.key_down=this.last_key=e?e.keyCode:-1;this.interactive=true;switch(this.last_key){case 33:case 34:case KEYS.UP:case KEYS.DOWN:this.log_data.kt+=1;if(typeaheadpro.should_simulate_keypress){this._onkeypress({keyCode:this.last_key});}
return false;case KEYS.TAB:this.log_data.kt+=1;this.select_suggestion(this.selectedindex);if(e.shiftKey){this.reverse_focus();}else{this.advance_focus();}
break;case KEYS.RETURN:this.log_data.sm='key_ret';if(this.select_suggestion(this.selectedindex)){this.hide();}
if(typeof(this.submit_keydown_return)!='undefined'){this.submit_keydown_return=this._onsubmit(this.get_current_selection());}
return this.submit_keydown_return;case 229:if(!this.poll_handle){this.poll_handle=setInterval(this.check_value.bind(this),100);}
break;default:this.log_data.kp+=1;setTimeout(bind(this,'check_value'),10);}}
typeaheadpro.prototype._onkeypress=function(e){e=$E(e);var multiplier=1;this.last_key=e?event_get_keypress_keycode(e):-1;this.interactive=true;switch(this.last_key){case 33:multiplier=this.max_display;case KEYS.UP:this.set_suggestion(multiplier>1&&this.selectedindex>0&&this.selectedindex<multiplier?0:this.selectedindex-multiplier);this.last_key_suggestion=(new Date()).getTime();return false;case 34:multiplier=this.max_display;case KEYS.DOWN:if(trim(this.get_value())==''&&!this.enumerate){this.enumerate=true;this.results_text=null;this.dirty_results();}else{this.set_suggestion(this.suggestions.length<=this.selectedindex+multiplier?this.suggestions.length-1:this.selectedindex+multiplier);this.last_key_suggestion=(new Date()).getTime();}
return false;case KEYS.RETURN:var ret=null;if(typeof(this.submit_keydown_return)=='undefined'){ret=this.submit_keydown_return=this._onsubmit(this.get_current_selection());}else{ret=this.submit_keydown_return;delete this.submit_keydown_return;}
return ret;default:setTimeout(bind(this,'check_value'),10);break;}
return true;}
typeaheadpro.prototype._onchange=function(){this.changed=true;}
typeaheadpro.prototype._onfound=function(obj){return this.onfound?this.onfound.call(this,obj):true;}
typeaheadpro.prototype._onsubmit=function(obj){if(this.onsubmit){var ret=this.onsubmit.call(this,obj);if(ret&&this.obj.form){if(!this.obj.form.onsubmit||this.obj.form.onsubmit()){this.obj.form.submit();}
return false;}
return ret;}else{this.advance_focus();return false;}}
typeaheadpro.prototype._onselect=function(obj){var call_select_handler=(function(){if(this.onselect){this.onselect.call(this,obj);}}).bind(this);if(obj.no_email){var async=new AsyncRequest().setData({action:'require',require_field:'email',uid:obj.i}).setMethod('GET').setReadOnly(true).setURI('/friends/ajax/external.php');new Dialog().setCloseHandler(function(typeahead){var email=this.getUserData();if(email){call_select_handler();}else{typeahead.set_value('');}}.bind(null,this)).setAsync(async).show();}else{call_select_handler();}}
typeaheadpro.prototype._onfocus=function(){if(!this.poll_handle&&this.activate_poll_on_focus_events){this.poll_handle=setInterval(this.check_value.bind(this),100);}
if(this.source){this.source.bootstrap();}
if(this.last_dropdown_mouse>(new Date()).getTime()-10||this.focused){return;}
if(this.changed){this.dirty_results();}
this.focused=true;this.changed=false;this.clear_placeholder();this.results_text='';this.set_class('');this.show();this.capture_submit();if(this.typeahead_icon){show(this.typeahead_icon);}}
typeaheadpro.prototype._onblur=function(event){if(this.last_dropdown_mouse&&this.last_dropdown_mouse>(new Date()).getTime()-10){Event.kill(event);setTimeout(function(){this.focus();}.bind(this),0);return false;}
if(!this.stop_hiding){if(this.showing_icon_list){this.toggle_icon_list(true);}}else{this.focus();return false;}
this.focused=false;if(this.changed&&!this.interactive){this.dirty_results();this.changed=false;return;}
if(!this.suggestions){this._onselect(false);}else if(this.selectedindex>=0&&this.auto_select){this.select_suggestion(this.selectedindex);}
this.hide();this.update_class();if(this.clear_value_on_blur&&!this.get_value()){var noinput=this.allow_placeholders?this.source.gen_noinput():'';this.set_value(noinput?noinput:'');this.set_class('typeahead_placeholder')}
if(this.poll_handle){clearInterval(this.poll_handle);this.poll_handle=null;}}
typeaheadpro.prototype._onunload=function(){if(typeaheadpro.instances[this.instance]){this.hide();}}
typeaheadpro.prototype.typeahead_icon_onclick=function(event){this.stop_hiding=true;this.focus();setTimeout(function(){this.toggle_icon_list();}.bind(this),50);Event.kill(event);return false;}
typeaheadpro.prototype.dropdown_onmousedown=function(event){this.last_dropdown_mouse=(new Date()).getTime();}
typeaheadpro.prototype.setup_typeahead_icon=function(){this.typeahead_parent=document.createElement('div');CSS.addClass(this.typeahead_parent,'typeahead_parent');this.typeahead_parent.appendChild(this.typeahead_icon);this.obj.parentNode.insertBefore(this.typeahead_parent,this.obj);}
typeaheadpro.prototype.mouse_set_suggestion=function(index){if(!this.visible){return;}
if((new Date()).getTime()-this.last_key_suggestion>50){this.set_suggestion(index);}}
typeaheadpro.prototype.capture_submit=function(){if(!typeaheadpro.should_check_missing_events)return;if((!this.captured_form||this.captured_substitute!=this.captured_form.onsubmit)&&this.obj.form){this.captured_form=this.obj.form;this.captured_event=this.obj.form.onsubmit;this.captured_substitute=this.obj.form.onsubmit=function(){return((this.key_down&&this.key_down!=KEYS.RETURN&&this.key_down!=KEYS.TAB)?this.submit_keydown_return:(this.captured_event?this.captured_event.apply(arguments,this.captured_form):true))?true:false;}.bind(this);}}
typeaheadpro.prototype.set_suggestion=function(index){this.stop_suggestion_select=false;if(!this.suggestions||this.suggestions.length<=index){return}
var old_node=this.get_suggestion_node(this.selectedindex);this.selectedindex=(index<=-1)?-1:index;var cur_node=this.get_suggestion_node(this.selectedindex);if(old_node){CSS.removeClass(old_node,'typeahead_selected');CSS.addClass(old_node,'typeahead_not_selected');}
if(cur_node){CSS.removeClass(cur_node,'typeahead_not_selected');CSS.addClass(cur_node,'typeahead_selected');}
this.recalc_scroll();this._onfound(this.get_current_selection());}
typeaheadpro.prototype.get_suggestion_node=function(index){var nodes=this.list.childNodes;return index==-1?null:nodes[Math.floor(index/this.render_block_size)].childNodes[index%this.render_block_size];}
typeaheadpro.prototype.get_current_selection=function(){return this.selectedindex==-1?false:this.suggestions[this.selectedindex];}
typeaheadpro.prototype.update_class=function(){if(this.suggestions&&this.selectedindex!=-1&&typeahead_source.flatten_string(this.get_current_selection().t)==typeahead_source.flatten_string(this.get_value())){this.set_class('typeahead_found');}else{this.set_class('');}}
typeaheadpro.prototype.select_suggestion=function(index){if(!this.stop_suggestion_select&&this.current_selecting!=index){this.current_selecting=index;}
var suggestion_found=true;if(!this.suggestions||index==undefined||index===false||this.suggestions.length<=index||index<0){this._onfound(false);this._onselect(false);this.selectedindex=-1;this.set_class('');suggestion_found=false;}else{this.selectedindex=index;var type=this.suggestions[index].ty;if(type!='web'&&type!='search'){this.set_value(this.suggestions[index].t);}
this.set_class('typeahead_found');this._onfound(this.suggestions[this.selectedindex]);this._onselect(this.suggestions[this.selectedindex]);}
if(!this.interactive){this.hide();this.blur();}
this.current_selecting=null;if(!suggestion_found&&this.ignore_invalid_suggestion){return false;}
return true;}
typeaheadpro.prototype.is_showing_suggestions=function(){return(this.suggestions)&&(this.suggestions.length>0);}
typeaheadpro.prototype.set_value=function(value){this.obj.value=value;}
typeaheadpro.prototype.get_value=function(){if(this.showing_icon_list&&this.old_typeahead_value!=this.obj.value){this.toggle_icon_list();}
if(this.want_icon_list){return this.typeahead_icon_get_return;}else{if(this.showing_icon_list){this.toggle_icon_list();}}
return this.obj.value;}
typeaheadpro.prototype.found_suggestions=function(suggestions,text,fake_data){if(!suggestions){suggestions=[];}
this.suggestion_count=suggestions.length;if(!fake_data){this.status=typeaheadpro.STATUS_IDLE;this.add_cache(text,suggestions);}
this.clear_render_timeouts();if(this.get_value()==this.results_text){return;}else if(!fake_data){this.results_text=typeahead_source.flatten_string(text);if(this.enumerate&&trim(this.results_text)!=''){this.enumerate=false;}}
var current_selection=-1;if(this.selectedindex!=-1){var selected_id=this.suggestions[this.selectedindex].i;for(var i=0,l=suggestions.length;i<l;i++){if(suggestions[i].i==selected_id){current_selection=i;break;}}}
if(current_selection==-1&&this.auto_select&&suggestions.length){current_selection=0;this._onfound(suggestions[0]);}
this.selectedindex=current_selection;this.suggestions=suggestions;if(!fake_data){this.real_suggestions=suggestions;}
if(suggestions.length){var html=[],blocks=Math.ceil(suggestions.length/this.render_block_size),must_render={},firstblock,samplenode=null;DOM.empty(this.list);for(var i=0;i<blocks;i++){this.list.appendChild(document.createElement('div'));}
if(current_selection>-1){firstblock=Math.floor(current_selection/this.render_block_size);must_render[firstblock]=true;if(current_selection%this.render_block_size>this.render_block_size/2){must_render[firstblock+1]=true;}else if(firstblock!=0){must_render[firstblock-1]=true;}}else{must_render[0]=true;}
for(var node in must_render){this.render_block(node);sample=this.list.childNodes[node].firstChild;}
this.show();if(blocks){var suggestion_height=sample.offsetHeight;this.render_timeouts=[];for(var i=1;i<blocks;i++){if(!must_render[i]){this.list.childNodes[i].style.height=suggestion_height*Math.min(this.render_block_size,suggestions.length-i*this.render_block_size)+'px';this.render_timeouts.push(setTimeout(this.render_block.bind(this,i),700+i*50));}}}}else{this.selectedindex=-1;this.set_message(this.status==typeaheadpro.STATUS_IDLE?this.source.gen_nomatch():this.source.gen_loading());this._onfound(false);}
this.recalc_scroll();if(!fake_data&&this.results_text!=typeahead_source.flatten_string(this.get_value())){this.dirty_results();}}
typeaheadpro.prototype.render_block=function(block,stack){var suggestions=this.suggestions,selectedindex=this.selectedindex,text=this.get_value(),instance=this.instance,html=[],node=this.list.childNodes[block];for(var i=block*this.render_block_size,l=Math.min(suggestions.length,(block+1)*this.render_block_size);i<l;i++){html.push('<div class="');if(selectedindex==i){html.push('typeahead_suggestion typeahead_selected');}else{html.push('typeahead_suggestion typeahead_not_selected');}
if(i>0&&suggestions[i-1].o<0&&suggestions[i].o>=0){html.push(' typeahead_delimiter');}
html.push('" onmouseover="typeaheadpro.instances[',instance,'].mouse_set_suggestion(',i,')" ','onmousedown="var instance=typeaheadpro.instances[',instance,']; instance.select_suggestion(',i,');instance.hide();Event.kill(event);">',this.source.gen_html(suggestions[i],text),'</div>');}
node.innerHTML=html.join('');node.style.height='auto';CSS.addClass(node,'typeahead_suggestions');}
typeaheadpro.prototype.clear_render_timeouts=function(){if(this.render_timeouts){for(var i=0;i<this.render_timeouts.length;i++){clearTimeout(this.render_timeouts[i]);}
this.render_timeouts=null;}}
typeaheadpro.prototype.recalc_scroll=function(){var cn=this.list.firstChild;if(!cn){return;}
if(cn.childNodes.length>this.max_display){var last_child=cn.childNodes[this.max_display-1];var height=last_child.offsetTop+last_child.offsetHeight;this.dropdown.style.height=height+'px';var selected=this.get_suggestion_node(this.selectedindex);if(selected){var scrollTop=this.dropdown.scrollTop;if(selected.offsetTop<scrollTop){this.dropdown.scrollTop=selected.offsetTop;}else if(selected.offsetTop+selected.offsetHeight>height+scrollTop){this.dropdown.scrollTop=selected.offsetTop+selected.offsetHeight-height;}}
if(!typeaheadpro.should_use_overflow){this.dropdown.style.overflowY='scroll';this.dropdown.style.overflowX='hidden';}}else{this.dropdown.style.height='auto';if(!typeaheadpro.should_use_overflow){this.dropdown.style.overflowY='hidden';}}}
typeaheadpro.prototype.search_cache=function(text){return this.cache[typeahead_source.flatten_string(text)];}
typeaheadpro.prototype.add_cache=function(text,results){if(this.source.cache_results){this.cache[typeahead_source.flatten_string(text)]=results;}}
typeaheadpro.prototype.update_status=function(status){this.status=status;this.dirty_results();}
typeaheadpro.prototype.set_class=function(name){CSS.setClass(this.obj,(this.obj.className.replace(/typeahead_[^\s]+/g,'')+' '+name).replace(/ {2,}/g,' '));}
typeaheadpro.prototype.dirty_results=function(){if(!this.enumerate&&trim(this.get_value())==''){DOM.empty(this.list);this.results_text='';this.set_message(this.source.gen_placeholder());this.suggestions=[];this.selectedindex=-1;return;}else if(this.results_text==typeahead_source.flatten_string(this.get_value())){return;}else if(this.status==typeaheadpro.STATUS_BLOCK_ON_SOURCE_BOOTSTRAP){this.set_message(this.source.gen_loading());return;}
var time=(new Date).getTime();var updated=false;if(this.last_search<=(time-this.source.search_limit)&&this.status==typeaheadpro.STATUS_IDLE){updated=this.perform_search();}else{if(this.status==typeaheadpro.STATUS_IDLE){if(!this.search_timeout){this.search_timeout=setTimeout(function(){this.search_timeout=false;if(this.status==typeaheadpro.STATUS_IDLE){this.dirty_results();}}.bind(this),this.source.search_limit-(time-this.last_search));}}}
if(this.source.allow_fake_results&&this.real_suggestions&&!updated){var ttext=typeahead_source.tokenize(this.get_value()).sort(typeahead_source._sort);var fake_results=[];for(var i=0;i<this.real_suggestions.length;i++){if(typeahead_source.check_match(ttext,this.real_suggestions[i].t+' '+this.real_suggestions[i].n)){fake_results.push(this.real_suggestions[i]);}}
if(fake_results.length){this.found_suggestions(fake_results,this.get_value(),true);}else{this.selectedindex=-1;this.set_message(this.source.gen_loading());}}}
typeaheadpro.prototype.perform_search=function(){if(this.get_value()==this.results_text){return true;}
var results;if((results=this.search_cache(this.get_value()))===undefined&&!(results=this.source.search_value(this.get_value()))){this.status=typeaheadpro.STATUS_WAITING_ON_SOURCE;this.last_search=(new Date).getTime();return false;}
this.found_suggestions(results,this.get_value(),false);return true;}
typeaheadpro.prototype.set_message=function(text){this.clear_render_timeouts();if(text){this.list.innerHTML='<div class="typeahead_message">'+text+'</div>';this.reset_iframe();}else{this.hide();}
this.recalc_scroll();}
typeaheadpro.prototype.reset_iframe=function(){if(!typeaheadpro.should_use_iframe){return}
typeaheadpro.iframe.style.top=this.dropdown.style.top;typeaheadpro.iframe.style.left=this.dropdown.style.left;typeaheadpro.iframe.style.width=this.dropdown.offsetWidth+'px';typeaheadpro.iframe.style.height=this.dropdown.offsetHeight+'px';typeaheadpro.iframe.style.display='';}
typeaheadpro.prototype.advance_focus=function(){return this._move_focus(true);}
typeaheadpro.prototype.reverse_focus=function(){return this._move_focus(false);}
typeaheadpro.prototype._move_focus=function(move_forward){var inputs=this.obj.form?get_all_form_inputs(this.obj.form):get_all_form_inputs();var next_inputs=[];next_inputs._insert=move_forward?next_inputs.push:next_inputs.unshift;var should_insert=!move_forward;for(var i=0;i<inputs.length;i++){if(!move_forward&&inputs[i]==this.obj){should_insert=false;}else if(should_insert&&inputs[i].type!='hidden'&&inputs[i].tabIndex!=-1&&inputs[i].offsetParent){next_inputs._insert(inputs[i]);}else if(inputs[i]==this.obj){should_insert=true;}}
setTimeout(function(){for(var i=0;i<this.length;i++){try{if(this[i].offsetParent){this[i].focus();setTimeout(function(){try{this.focus();}catch(e){}}.bind(this[i]),0);return;}}catch(e){}}}.bind(next_inputs?next_inputs:[]),0);this.blur();this.hide();}
typeaheadpro.prototype.clear_placeholder=function(){if(this.obj.className.indexOf('typeahead_placeholder')!=-1){this.set_value('');this.set_class('');}}
typeaheadpro.prototype.clear=function(){this.set_value('');this.set_class('');this.selectedindex=-1;this.enumerate=false;this.dirty_results();}
typeaheadpro.prototype.hide=function(){if(this.stop_hiding){return;}
this.visible=false;this.dropdown.style.display='none';this.clear_render_timeouts();if(typeaheadpro.should_use_iframe){typeaheadpro.iframe.style.display='none';}}
typeaheadpro.prototype.show=function(){this.visible=true;if(this.focused){this.dropdown.style.top=elementY(this.anchor)+this.anchor.offsetHeight+'px';this.dropdown.style.left=elementX(this.anchor)+'px';this.dropdown.style.width=(this.anchor.offsetWidth-2)+'px';this.dropdown.style.display='';if(typeaheadpro.should_use_iframe){typeaheadpro.iframe.style.display='';this.reset_iframe();}}}
typeaheadpro.prototype.toggle_icon_list=function(no_focus){if(this.showing_icon_list){this.showing_icon_list=false;this.source.showing_icon_list=false;if(!no_focus){this.focus();}
CSS.removeClass(this.typeahead_icon,'on_selected');this.want_icon_list=false;this.showing_icon_list=false;this.stop_suggestion_select=true;if(this.obj){this.dirty_results();}}else{this.source.showing_icon_list=true;this.old_typeahead_value=this.obj.value;this.stop_suggestion_select=true;this.want_icon_list=true;this.dirty_results();this.focus();CSS.addClass(this.typeahead_icon,'on_selected');this.show();this.set_suggestion(-1);this.showing_icon_list=true;}
setTimeout(function(){this.stop_hiding=false;}.bind(this),100)}
typeaheadpro.prototype.focus=function(){this.obj.focus();}
typeaheadpro.prototype.blur=function(){if(this.obj){this.obj.blur();}}
typeaheadpro.kill_typeahead=function(obj){if(obj.typeahead){if(!this.anchor_block){obj.parentNode.removeChild(obj.nextSibling);}
obj.parentNode.removeChild(obj.nextSibling);if(obj.typeahead.source){obj.typeahead.source=obj.typeahead.source.owner=null;}
obj.onfocus=obj.onblur=obj.onkeypress=obj.onkeyup=obj.onkeydown=obj.typeahead=null;}}

function typeahead_source(){}
typeahead_source.prototype.cache_results=false;typeahead_source.prototype.enumerable=false;typeahead_source.prototype.allow_fake_results=false;typeahead_source.prototype.search_limit=10;typeahead_source.prototype.bootstrap=bagofholding;typeahead_source.check_match=function(search,value){value=typeahead_source.tokenize(value);for(var i=0,il=search.length;i<il;i++){if(search[i].length){var found=false;for(var j=0,jl=value.length;j<jl;j++){if(value[j].length>=search[i].length&&value[j].substring(0,search[i].length)==search[i]){found=true;value[j]='';break;}}
if(!found){return false;}}}
return true;}
typeahead_source.tokenize=function(text,capture,noflatten){return(noflatten?text:typeahead_source.flatten_string(text)).split(capture?typeahead_source.normalizer_regex_capture:typeahead_source.normalizer_regex);}
typeahead_source.normalizer_regex_str='(?:(?:^| +)["\'.\\-]+ *)|(?: *[\'".\\-]+(?: +|$)|[@_]| +)';typeahead_source.normalizer_regex=new RegExp(typeahead_source.normalizer_regex_str,'g');typeahead_source.normalizer_regex_capture=new RegExp('('+typeahead_source.normalizer_regex_str+')','g');typeahead_source.flatten_string=function(text){if(!typeahead_source.accents){typeahead_source.accents={a:/\u0430|\u00e0|\u00e1|\u00e2|\u00e3|\u00e4|\u00e5/g,b:/\u0431/g,c:/\u0446|\u00e7/g,d:/\u0434|\u00f0/g,e:/\u044d|\u0435|\u00e8|\u00e9|\u00ea|\u00eb/g,f:/\u0444/g,g:/\u0433/g,h:/\u0445/g,i:/\u0438|\u00ec|\u00ed|\u00ee|\u00ef/g,j:/\u0439/g,k:/\u043a/g,l:/\u043b/g,m:/\u043c/g,n:/\u043d|\u00f1/g,o:/\u043e|\u00f8|\u00f6|\u00f5|\u00f4|\u00f3|\u00f2/g,p:/\u043f/g,r:/\u0440/g,s:/\u0441/g,t:/\u0442/g,u:/\u0443|\u044e|\u00fc|\u00fb|\u00fa|\u00f9/g,v:/\u0432/g,y:/\u044b|\u00ff|\u00fd/g,z:/\u0437/g,ae:/\u00e6/g,oe:/\u0153/g,ts:/\u0446/g,ch:/\u0447/g,sh:/\u0448/g,ya:/\u044f/g}}
text=text.toLowerCase();for(var i in typeahead_source.accents){text=text.replace(typeahead_source.accents[i],i);}
return text;}
typeahead_source.prototype.set_owner=function(obj){this.owner=obj;if(this.is_ready){this.owner.update_status(typeaheadpro.STATUS_IDLE);}}
typeahead_source.prototype.ready=function(){if(this.owner&&!this.is_ready){this.is_ready=true;this.owner.update_status(typeaheadpro.STATUS_IDLE);}else{this.is_ready=true;}}
typeahead_source.highlight_found=function(result,search){var html=[];resultv=typeahead_source.tokenize(result,true,true);result=typeahead_source.tokenize(result,true);search=typeahead_source.tokenize(search);search.sort(typeahead_source._sort);for(var i=0,il=resultv.length;i<il;i++){var found=false;for(var j=0,jl=search.length;j<jl;j++){if(search[j]&&result[i].lastIndexOf(search[j],0)!=-1){html.push('<em>',htmlspecialchars(resultv[i].substring(0,search[j].length)),'</em>',htmlspecialchars(resultv[i].substring(search[j].length,resultv[i].length)));found=true;break;}}
if(!found){html.push(htmlspecialchars(resultv[i]));}}
return html.join('');}
typeahead_source._sort=function(a,b){return b.length-a.length;}
typeahead_source.prototype.gen_nomatch=function(){return this.text_nomatch!=null?this.text_nomatch:_tx("No matches found");}
typeahead_source.prototype.gen_loading=function(){return this.text_loading!=null?this.text_loading:_tx("Loading...");}
typeahead_source.prototype.gen_placeholder=function(){return this.text_placeholder!=null?this.text_placeholder:_tx("Start typing...");}
typeahead_source.prototype.gen_noinput=function(){return this.text_noinput!=null?this.text_noinput:_tx("Start typing...");}
typeahead_source.prototype.onselect_not_found=function(){if(typeof this.tokenizer._ontokennotfound!='undefined'){this.tokenizer._ontokennotfound(this.obj.value);}
if(typeof this.tokenizer.onselect!='undefined'){return this.tokenizer.onselect();}}

function static_source(){this.values=null;this.index=null;this.index_includes_hints=false;this.exclude_ids={};this.parent.construct(this);}
static_source.extend('typeahead_source');static_source.prototype.enumerable=true;static_source.prototype.filter_excluded=function(values){return values.filter((function(value){return!this.exclude_ids[value.i];}).bind(this));}
static_source.prototype.build_index=function(){var index=[];var values=this.values;var gen_id=values.length&&typeof values[0].i=='undefined';for(var i=0,il=values.length;i<il;i++){var tokens=typeahead_source.tokenize(values[i].t);for(var j=0,jl=tokens.length;j<jl;j++){index.push({t:tokens[j],o:values[i]});}
if(this.index_includes_hints&&values[i].s){var tokens=typeahead_source.tokenize(values[i].s);for(var j=0,jl=tokens.length;j<jl;j++){index.push({t:tokens[j],o:values[i]});}}
if(gen_id){values[i].i=i;}}
index.sort(function(a,b){return(a.t==b.t)?0:(a.t<b.t?-1:1)});this.index=index;this.ready();}
static_source.prototype._sort_text_obj=function(a,b){if(a.e&&!b.e){return 1;}
if(!a.e&&b.e){return-1;}
return a.t.localeCompare(b.t);}
static_source.prototype.search_value=function(text){if(!this.is_ready){return;}
var results;if(text==''){results=this.values;}else{var ttext=typeahead_source.tokenize(text).sort(typeahead_source._sort);var index=this.index;var lo=0;var hi=this.index.length-1;var p=Math.floor(hi/2);while(lo<=hi){if(index[p].t>=ttext[0]){hi=p-1;}else{lo=p+1;}
p=Math.floor(lo+((hi-lo)/2));}
var results=[];var stale_keys={};var check_ignore=typeof _ignoreList!='undefined';for(var i=lo;i<index.length&&index[i].t.lastIndexOf(ttext[0],0)!=-1;i++){var elem_id=index[i].o.flid?index[i].o.flid:index[i].o.i;if(typeof stale_keys[elem_id]!='undefined'){continue;}else{stale_keys[elem_id]=true;}
if((!check_ignore||!_ignoreList[elem_id])&&!this.exclude_ids[elem_id]&&(ttext.length==1||typeahead_source.check_match(ttext,index[i].o.t))){results.push(index[i].o);}}}
results.sort(this._sort_text_obj.bind(this));if(this.owner&&this.owner.max_results){results=results.slice(0,this.owner.max_results);}
return results;}
static_source.prototype.set_exclude_ids=function(ids){this.exclude_ids=ids;}

var HistoryManager={_IFRAME_BASE_URI:'http://static.ak.facebook.com/common/history_manager.html',history:null,current:0,fragment:null,_setIframeSrcFragment:function(src){src=src.toString();var index=HistoryManager.history.length-1;HistoryManager.iframe.src=HistoryManager._IFRAME_BASE_URI+'?|index='+index+'#'+encodeURIComponent(src);return HistoryManager;},getIframeSrcFragment:function(){return decodeURIComponent(URI(HistoryManager.iframe.contentWindow.document.location.href).getFragment());},nextframe:function(frame,replace){if(replace){HistoryManager._setIframeSrcFragment(frame);return;}
if(frame!==undefined){HistoryManager.iframeQueue.push(frame);}else{HistoryManager.iframeQueue.splice(0,1);HistoryManager.iframeTimeout=null;HistoryManager.checkURI();}
if(HistoryManager.iframeQueue.length&&!HistoryManager.iframeTimeout){var src=HistoryManager.iframeQueue[0];HistoryManager.iframeTimeout=setTimeout(function(){HistoryManager._setIframeSrcFragment(src);},100,false);}},isInitialized:function(){return!!HistoryManager._initialized;},init:function(){if(URI.getRequestURI(false).getProtocol().toLowerCase()=='https'){return;}
if(!env_get('ALLOW_TRANSITION_IN_IFRAME')&&window!=window.top){return;}
if(HistoryManager._initialized){return HistoryManager;}
var uri=URI();var cur_fragment=uri.getFragment()||'';copy_properties(HistoryManager,{_initialized:true,fragment:cur_fragment,orig_fragment:cur_fragment,history:[uri],callbacks:[],lastChanged:new Date().getTime(),canonical:URI('#'),fragmentTimeout:null,user:0,iframeTimeout:null,iframeQueue:[],enabled:true,debug:bagofholding});if(ua.safari()<500||ua.firefox()<2){HistoryManager.enabled=false;return HistoryManager;}
if(ua.ie()<8){HistoryManager.iframe=document.createElement('iframe');copy_properties(HistoryManager.iframe.style,{width:'0',height:'0',frameborder:'0',left:'0',top:'0',position:'absolute'});onloadRegister(function(){HistoryManager._setIframeSrcFragment(cur_fragment);document.body.insertBefore(HistoryManager.iframe,document.body.firstChild);});}else{setInterval(HistoryManager.checkURI,42,false);}
HistoryManager._updateRefererURI(URI.getRequestURI(false));return HistoryManager;},registerURIHandler:function(callback){HistoryManager.callbacks.push(callback);return HistoryManager;},setCanonicalLocation:function(loc){HistoryManager.canonical=URI(loc);return HistoryManager;},notify:function(uri){if(uri==HistoryManager.orig_fragment){uri=HistoryManager.canonical.getFragment();}
for(var ii=0;ii<HistoryManager.callbacks.length;ii++){try{if(HistoryManager.callbacks[ii](uri)){return true;}}catch(ex){Util.error('Uncaught exception in HistoryManager URI handler callback: %x',ex);}}
return false;},checkURI:function(){if(new Date().getTime()-HistoryManager.lastChanged<400){return;}
if(HistoryManager.iframeQueue.length){return;}
if(ua.safari()&&window.history.length==200){if(!HistoryManager.warned){HistoryManager.warned=true;Util.error('Your history length is over 200 and you are in Safari; things will '+'start behaving oddly now. This is a known bug.');}
return;}
var frag=URI().getFragment();if(ua.ie()<8){frag=HistoryManager.getIframeSrcFragment();}
if(frag!=HistoryManager.fragment){HistoryManager.debug([frag,' vs ',HistoryManager.fragment,'whl: ',window.history.length,'QHL: ',HistoryManager.history.length].join(' '));for(var ii=HistoryManager.history.length-1;ii>=0;--ii){if(HistoryManager.history[ii].getFragment()==frag){break;}}
++HistoryManager.user;if(ii>=0){HistoryManager.go(ii-HistoryManager.current);}else{HistoryManager.go('#'+frag);}
--HistoryManager.user;}
delete frag;},_updateRefererURI:function(uri){uri=uri.toString();if(uri.charAt(0)!='/'&&uri.indexOf('//')==-1){return;}
setCookie('x-referer',URI(uri).getQualifiedURI().setFragment('').toString());},go:function(href,now,replace){HistoryManager.debug('go: '+href);if(now===undefined){now=true;}
if(!HistoryManager.enabled){if(!now){return false;}}
if(typeof(href)=='number'){if(!href){return false;}
var dst=href+HistoryManager.current;var loc=Math.max(0,Math.min(HistoryManager.history.length-1,dst));HistoryManager.current=loc;dst=HistoryManager.history[loc].getFragment()||HistoryManager.orig_fragment;HistoryManager.fragment=dst;HistoryManager.lastChanged=new Date().getTime();if(ua.ie()<8){if(HistoryManager.fragmentTimeout){clearTimeout(HistoryManager.fragmentTimeout);}
HistoryManager._temporary_fragment=dst;HistoryManager.fragmentTimeout=setTimeout(function(){window.location.hash='#'+dst;delete HistoryManager._temporary_fragment;},750,false);if(!HistoryManager.user){HistoryManager.nextframe(dst,replace);}}else if(!HistoryManager.user){go_or_replace(window.location,window.location.href.split('#')[0]+'#'+dst,replace);}
if(now){HistoryManager.notify(dst);}
HistoryManager._updateRefererURI(dst);return false;}
href=URI(href);if(href.getDomain()==URI().getDomain()){href=URI('#'+href.getUnqualifiedURI());}
var cur=HistoryManager.history[HistoryManager.current].getFragment();var tgt=href.getFragment();if(tgt==cur||(cur==HistoryManager.orig_fragment&&tgt==HistoryManager.canonical.getFragment())){if(now){HistoryManager.notify(tgt);}
HistoryManager._updateRefererURI(tgt);return false;}
if(replace){HistoryManager.current--;}
var wipe=(HistoryManager.history.length-HistoryManager.current)-1;HistoryManager.history.splice(HistoryManager.current+1,wipe);HistoryManager.history.push(URI(href));return HistoryManager.go(1,now,replace);},getCurrentFragment:function(){var cur_fragment=HistoryManager._temporary_fragment!==undefined?HistoryManager._temporary_fragment:URI.getRequestURI(false).getFragment();return cur_fragment==HistoryManager.orig_fragment?HistoryManager.canonical.getFragment():cur_fragment;}};var PageTransitions={_transition_handlers:[],_scroll_positions:{},isInitialized:function(){return!!PageTransitions._initialized;},_init:function(){if(URI.getRequestURI(false).getProtocol().toLowerCase()=='https'){return;}
if(!env_get('ALLOW_TRANSITION_IN_IFRAME')&&window!=window.top){return;}
if(PageTransitions._initialized){return PageTransitions;}
PageTransitions._initialized=true;var req_uri=URI.getRequestURI(false);var canonical_uri=req_uri.getUnqualifiedURI();copy_properties(PageTransitions,{_current_uri:canonical_uri,_most_recent_uri:canonical_uri,_next_uri:canonical_uri});var canonical_uri_frag;if(req_uri.getFragment().startsWith('/')){canonical_uri_frag=req_uri.getFragment();}else{canonical_uri_frag=canonical_uri;}
HistoryManager.init().setCanonicalLocation('#'+canonical_uri_frag).registerURIHandler(PageTransitions._historyManagerHandler);LinkController.registerFallbackHandler(PageTransitions._rewriteHref,LinkController.ALL_TARGETS|LinkController.ALL_KEY_MODIFIERS);LinkController.registerFallbackHandler(PageTransitions._onlinkclick);FormController.registerFallbackHandler(PageTransitions._onformsubmit);window.onscroll=chain(window.onscroll,function(){var frag=HistoryManager.getCurrentFragment();if(PageTransitions._current_uri==frag){PageTransitions._scroll_positions[frag]=Vector2.getScrollPosition();}});return PageTransitions;},registerHandler:function(transition_handler,prepend){PageTransitions._init();if(PageTransitions._transition_handlers.contains(transition_handler)){Util.warn('Registering a transition handler that\'s already been '
+'registered.  Ur probably doin it wrong.');}
if(prepend){PageTransitions._transition_handlers.unshift(transition_handler);}else{PageTransitions._transition_handlers.push(transition_handler);}},getCurrentURI:function(){if(!PageTransitions._current_uri){Util.warn('You\'ve requested the current URI, but there is no "current" '
+'URI.  This is probably because you\'re in the middle of a '
+'page transition.  That\'s an awkward time to ask for the '
+'current URI, and you should probably avoid this situation.  '
+'For now, I\'m just gonna return the most recent page URI, '
+'since that\'s better than returning null.');return new URI(PageTransitions._most_recent_uri);}
return new URI(PageTransitions._current_uri);},getMostRecentURI:function(){return new URI(PageTransitions._most_recent_uri);},getNextURI:function(){return new URI(PageTransitions._next_uri);},_rewriteHref:function(link){var old_href=link.getAttribute('href');var new_href=_computeRelativeURI(PageTransitions._most_recent_uri.getQualifiedURI(),old_href).toString();if(old_href!=new_href){link.setAttribute('href',new_href);}},_onlinkclick:function(link){_BusyUIManager.lookBusy(link);PageTransitions.go(link.getAttribute('href'));return false;},_rewriteSubDomain:function(uri){uri=URI(uri);var domain=uri.getDomain();if(domain.indexOf('apps.')===0){var cur_domain=URI.getRequestURI().getDomain();uri.addQueryData({_fb_qsub:domain}).setDomain(cur_domain);}
return uri;},_revertSubDomain:function(uri){uri=URI(uri);var query_data=uri.getQueryData();if('_fb_qsub'in query_data){var old_domain=query_data._fb_qsub;uri.removeQueryData('_fb_qsub').setDomain(old_domain).setProtocol(URI().getProtocol());}
return uri;},go:function(uri,replace){var qualified_uri=new URI(uri).removeQueryData('quickling').getQualifiedURI();qualified_uri=PageTransitions._rewriteSubDomain(qualified_uri);var unqualified_uri=qualified_uri.getUnqualifiedURI();delete PageTransitions._scroll_positions[unqualified_uri];_BusyUIManager.lookBusy();PageTransitions._loadPage(qualified_uri,function(handled){if(handled){HistoryManager.go(qualified_uri.toString(),false,replace);}else{qualified_uri=PageTransitions._revertSubDomain(qualified_uri);go_or_replace(window.location,qualified_uri,replace);}});},_historyManagerHandler:function(uri_s){if(uri_s.charAt(0)!='/'){return false;}
PageTransitions._loadPage(new URI(uri_s),function(handled){if(!handled){uri_s=PageTransitions._revertSubDomain(uri_s);go_or_replace(window.location,uri_s,true);}});return true;},_loadPage:function(uri,ondone){if(uri.getFragment()&&are_equal(URI(uri).setFragment(null).getQualifiedURI(),URI(PageTransitions._current_uri).setFragment(null).getQualifiedURI())){PageTransitions._current_uri=PageTransitions._most_recent_uri=uri;PageTransitions.restoreScrollPosition();_BusyUIManager.stopLookingBusy();return;}
var scroll_position=PageTransitions._scroll_positions[PageTransitions._current_uri];PageTransitions._current_uri=null;PageTransitions._next_uri=uri;if(scroll_position){DOMScroll.scrollTo(scroll_position,false);}
var handle_transition=function(){var handled=PageTransitions._handleTransition(uri);ondone&&ondone(handled);};var beforeleave_warning=_runHooks('onbeforeleavehooks');if(beforeleave_warning){_BusyUIManager.stopLookingBusy();PageTransitions._warnBeforeLeaving(beforeleave_warning,handle_transition);}else{handle_transition();}},_handleTransition:function(uri){window.onbeforeleavehooks=undefined;_BusyUIManager.lookBusy();for(var i=PageTransitions._transition_handlers.length-1;i>=0;--i){if(PageTransitions._transition_handlers[i](uri)===true){var message={sender:this,uri:uri};Arbiter.inform(Arbiter.PAGE_TRANSITION,message);return true;}else{PageTransitions._transition_handlers.splice(i,1);}}
return false;},transitionComplete:function(){_BusyUIManager.stopLookingBusy();PageTransitions._current_uri=PageTransitions._most_recent_uri=PageTransitions._next_uri;PageTransitions.restoreScrollPosition();},_warnBeforeLeaving:function(warning_text,continuation){new Dialog().setTitle(_tx("Are you sure you want to navigate away from this page?")).setSummary(_tx("Press {ok} to continue, or {cancel} to stay on the current page.",{ok:_tx("Okay"),cancel:_tx("Cancel")})).setBody(htmlize(warning_text)).setButtons(Dialog.OK_AND_CANCEL).setHandler(continuation).setModal().show();},restoreScrollPosition:function(){var current_uri=PageTransitions._current_uri;var scroll_position=PageTransitions._scroll_positions[current_uri];if(scroll_position){DOMScroll.scrollTo(scroll_position,false);return;}
function get_anchor(name){return(name||null)&&($$(sprintf('a[name=%e]',name))[0]||ge(name));}
var anchor=get_anchor(current_uri.getFragment());if(anchor){var anchor_position=Vector2.getElementPosition(anchor);anchor_position.x=0;DOMScroll.scrollTo(anchor_position);}},_onformsubmit:function(form){var old_action=new URI(form.getAttribute('action')||'');var new_action=_computeRelativeURI(PageTransitions._most_recent_uri,old_action);form.setAttribute('action',new_action.toString());var method=form.method?form.method.toUpperCase():'GET';if(method=='GET'){PageTransitions.go(new_action.addQueryData(serialize_form(form)));return false;}else{}}};function _computeRelativeURI(original,delta){var ret=new URI(),delta_=delta;original=new URI(original);delta=new URI(delta);if(!delta.isFacebookURI()){return delta_;}
var source=original;var components=['Protocol','Domain','Port','Path','QueryData','Fragment'];components.forEach(function(component){var combine_paths=component=='Path'&&source===original;if(combine_paths){ret.setPath(_computeRelativePath(original.getPath(),delta.getPath()));}
if(!is_empty(delta['get'+component]())){source=delta;}
if(!combine_paths){ret['set'+component](source['get'+component]());}});return ret;}
function _computeRelativePath(original,delta){if(!delta){return original;}
if(delta.charAt(0)=='/'){return delta;}
var parts=original.split('/').slice(0,-1);if(parts[0]!==''){Util.warn('Original path is not absolute.');}
delta.split('/').forEach(function(part){if(part=='.'){}else if(part=='..'){if(parts.length>1){parts=parts.slice(0,-1);}}else{parts.push(part);}});return parts.join('/');}
function go_or_replace(location_obj,target_url,replace){target_url=target_url.toString();if(replace&&!(ua.ie()<8)){location_obj.replace(target_url);}else if(location_obj.href==target_url){location_obj.reload();}else{location_obj.href=target_url;}}
var _BusyUIManager={_looking_busy:false,_original_cursors:[],lookBusy:function(link_element){if(link_element){_BusyUIManager._giveProgressCursor(link_element);}
if(_BusyUIManager._looking_busy){return;}
_BusyUIManager._looking_busy=true;_BusyUIManager._giveProgressCursor(document.body);},stopLookingBusy:function(){if(!_BusyUIManager._looking_busy){return;}
_BusyUIManager._looking_busy=false;while(_BusyUIManager._original_cursors.length){var element_and_cursor=_BusyUIManager._original_cursors.pop();var element=element_and_cursor[0];var cursor=element_and_cursor[1];if(element.style){element.style.cursor=cursor||'';}}},_giveProgressCursor:function(element){if(!ua.safari()){_BusyUIManager._original_cursors.push([element,element.style.cursor]);element.style.cursor='progress';}}};

if(typeof deconcept=="undefined")var deconcept={};if(typeof deconcept.util=="undefined")deconcept.util={};if(typeof deconcept.SWFObjectUtil=="undefined")deconcept.SWFObjectUtil={};deconcept.SWFObject=function(swf,id,w,h,ver,c,quality,xiRedirectUrl,redirectUrl,detectKey){if(!document.getElementById){return;}
this.DETECT_KEY=detectKey?detectKey:'detectflash';this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);this.params={};this.variables={};this.attributes=[];this.fallback_html='';this.fallback_js_fcn=function(){};if(swf){this.setAttribute('swf',swf);}
if(id){this.setAttribute('id',id);}
if(w){this.setAttribute('width',w);}
if(h){this.setAttribute('height',h);}
if(ver){this.setAttribute('version',new deconcept.PlayerVersion(ver.toString().split(".")));}
this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion();if(!window.opera&&document.all&&this.installedVer.major>7){if(!deconcept.unloadSet){deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};window.attachEvent("onunload",deconcept.SWFObjectUtil.cleanupSWFs);}
window.attachEvent("onbeforeunload",deconcept.SWFObjectUtil.prepUnload);deconcept.unloadSet=true;}}
if(c){this.addParam('bgcolor',c);}
var q=quality?quality:'high';this.addParam('quality',q);this.setAttribute('useExpressInstall',false);this.setAttribute('doExpressInstall',false);var xir=(xiRedirectUrl)?xiRedirectUrl:window.location;this.setAttribute('xiRedirectUrl',xir);this.setAttribute('redirectUrl','');if(redirectUrl){this.setAttribute('redirectUrl',redirectUrl);}}
deconcept.SWFObject.prototype={useExpressInstall:function(path){this.xiSWFPath=!path?"/swf/expressinstall.swf":path;this.setAttribute('useExpressInstall',true);},setAttribute:function(name,value){this.attributes[name]=value;},getAttribute:function(name){return this.attributes[name]||"";},addParam:function(name,value){this.params[name]=value;},getParams:function(){return this.params;},addVariable:function(name,value){this.variables[name]=value;},getVariable:function(name){return this.variables[name]||"";},getVariables:function(){return this.variables;},getVariablePairs:function(){var variablePairs=[];var key;var variables=this.getVariables();for(key in variables){variablePairs[variablePairs.length]=key+"="+variables[key];}
return variablePairs;},getSWFHTML:function(){var swfNode="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");this.setAttribute('swf',this.xiSWFPath);}
swfNode='<embed type="application/x-shockwave-flash" src="'+htmlspecialchars(this.getAttribute('swf'))+'" width="'+htmlspecialchars(this.getAttribute('width'))+'" height="'+htmlspecialchars(this.getAttribute('height'))+'" style="'+htmlspecialchars(this.getAttribute('style')||"")+'"';swfNode+=' id="'+htmlspecialchars(this.getAttribute('id'))+'" name="'+htmlspecialchars(this.getAttribute('id'))+'" ';var params=this.getParams();for(var key in params){swfNode+=htmlspecialchars(key)+'="'+htmlspecialchars(params[key])+'" ';}
var pairs=this.getVariablePairs().join("&");if(pairs.length>0){swfNode+='flashvars="'+pairs+'"';}
swfNode+='/>';}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");this.setAttribute('swf',this.xiSWFPath);}
swfNode='<object id="'+this.getAttribute('id')+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+this.getAttribute('width')+'" height="'+this.getAttribute('height')+'" style="'+(this.getAttribute('style')||"")+'">';swfNode+='<param name="movie" value="'+this.getAttribute('swf')+'" />';var params=this.getParams();for(var key in params){swfNode+='<param name="'+key+'" value="'+params[key]+'" />';}
var pairs=this.getVariablePairs().join("&");if(pairs.length>0){swfNode+='<param name="flashvars" value="'+pairs+'" />';}
swfNode+="</object>";}
return swfNode;},write:function(elementId){if(this.getAttribute('useExpressInstall')){var expressInstallReqVer=new deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(expressInstallReqVer)&&!this.installedVer.versionIsValid(this.getAttribute('version'))){this.setAttribute('doExpressInstall',true);this.addVariable("MMredirectURL",escape(this.getAttribute('xiRedirectUrl')));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}
var n=(typeof elementId=='string')?document.getElementById(elementId):elementId;if(this.skipDetect||this.getAttribute('doExpressInstall')||this.installedVer.versionIsValid(this.getAttribute('version'))){n.innerHTML=this.getSWFHTML();return true;}else{if(this.getAttribute('redirectUrl')!=""){document.location.replace(this.getAttribute('redirectUrl'));}
need_version=this.getAttribute('version').major+'.'+this.getAttribute('version').minor+'.'+this.getAttribute('version').rev;have_version=this.installedVer.major+'.'+this.installedVer.minor+'.'+this.installedVer.rev;this.fallback_js_fcn(have_version,need_version);n.innerHTML=this.fallback_html;}
return false;}}
deconcept.SWFObjectUtil.getPlayerVersion=function(){var PlayerVersion=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){for(k=0;k<navigator.plugins.length;k++){try{x=navigator.plugins[k];if(x.name=='Shockwave Flash'){PlayerVersion_tmp=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));if(typeof PlayerVersion=='undefined'||PlayerVersion_tmp.major>PlayerVersion.major||(PlayerVersion_tmp.major==PlayerVersion.major&&(PlayerVersion_tmp.minor>PlayerVersion.minor||(PlayerVersion_tmp.minor==PlayerVersion.minor&&PlayerVersion_tmp.rev>PlayerVersion.rev)))){PlayerVersion=PlayerVersion_tmp;}}}catch(honk){}}}else if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var axo=1;var counter=3;while(axo){try{counter++;axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+counter);PlayerVersion=new deconcept.PlayerVersion([counter,0,0]);}catch(e){axo=null;}}}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");PlayerVersion=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always";}catch(e){if(PlayerVersion.major==6){return PlayerVersion;}}
try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(e){}}
if(axo!=null){PlayerVersion=new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));}}
return PlayerVersion;}
deconcept.PlayerVersion=function(arrVersion){this.major=arrVersion[0]!=null?parseInt(arrVersion[0]):0;this.minor=arrVersion[1]!=null?parseInt(arrVersion[1]):0;this.rev=arrVersion[2]!=null?parseInt(arrVersion[2]):0;}
deconcept.PlayerVersion.prototype.versionIsValid=function(fv){if(this.major<fv.major)return false;if(this.major>fv.major)return true;if(this.minor<fv.minor)return false;if(this.minor>fv.minor)return true;if(this.rev<fv.rev)return false;return true;}
deconcept.util={getRequestParameter:function(param){var q=document.location.search||document.location.hash;if(param==null){return q;}
if(q){var pairs=q.substring(1).split("&");for(var i=0;i<pairs.length;i++){if(pairs[i].substring(0,pairs[i].indexOf("="))==param){return pairs[i].substring((pairs[i].indexOf("=")+1));}}}
return"";}}
deconcept.SWFObjectUtil.cleanupSWFs=function(){var objects=document.getElementsByTagName("OBJECT");for(var i=objects.length-1;i>=0;i--){objects[i].style.display='none';for(var x in objects[i]){if(typeof objects[i][x]=='function'){objects[i][x]=function(){};}}}}
if(!document.getElementById&&document.all){document.getElementById=function(id){return document.all[id];}}
var getQueryParamValue=deconcept.util.getRequestParameter;var FlashObject=deconcept.SWFObject;var SWFObject=deconcept.SWFObject;var flash_update_dialog_shown=false;function spawn_flash_update_dialog(have_version,need_version){if(flash_update_dialog_shown){return;}
flash_update_dialog_shown=true;new AsyncRequest().setURI('/ajax/flash_update_dialog.php').setData({have_version:have_version,need_version:need_version}).setHandler(function(response){message_data=response.getPayload();new Dialog().setClassName('errorDialog').setTitle(message_data.title).setBody(message_data.body).setButtons([Dialog.CLOSE]).show();}).send();}
function setFlashFallback(id,required_version){var fallback=ge(id);var version=deconcept.SWFObjectUtil.getPlayerVersion();if(fallback&&version['major']>0){var current_version=version['major']+'.'+version['minor']+'.'+version['rev'];fallback.innerHTML=_tx("Flash {required-version} is required to view this content. Your current version is {current-version}. Please download the latest Flash Player.",{'required-version':required_version,'current-version':current_version});}}
function getFlashPlayer(){goURI('http://adobe.com/go/getflashplayer');return false;}

if (window.Bootloader) { Bootloader.done(["js\/3xqcncv2s4g0804o.pkg.js"]); }