/*    HTTP Host:  b.static.ak.fbcdn.net                                        */
/*    Generated:  April 22nd 2009 1:34:35 AM PDT                               */
/*      Machine:  10.16.139.107                                                */
/*       Source:  Global Cache                                                 */
/*     Location:  js/6a1bbnrfz64os8cc.pkg.js h:85gaprte                        */
/*       Locale:  en_US                                                        */
/*         Path:  js/6a1bbnrfz64os8cc.pkg.js                                   */


var onloadRegister=window.onloadRegister||function(h){onloadhooks.push(h);};var onloadhooks=window.onloadhooks||[];var onafterloadRegister=window.onafterloadRegister||function(h){onafterloadhooks.push(h);};var onafterloadhooks=window.onafterloadhooks||[];function wait_for_load(element,e,f){f=bind(element,f,e);if(window.loaded){return f();}
switch((e||event).type){case'load':case'focus':onloadRegister(f);return;case'click':if(element.original_cursor===undefined){element.original_cursor=element.style.cursor;}
if(document.body.original_cursor===undefined){document.body.original_cursor=document.body.style.cursor;}
element.style.cursor=document.body.style.cursor='progress';onafterloadRegister(function(){element.style.cursor=element.original_cursor;document.body.style.cursor=document.body.original_cursor;element.original_cursor=document.body.original_cursor=undefined;if(element.tagName.toLowerCase()=='a'){var original_event=window.event;window.event=e;var ret_value=element.onclick.call(element,e);window.event=original_event;if(ret_value!==false&&element.href){window.location.href=element.href;}}else if(element.click){element.click();}});break;}
return false;};function bind(obj,method){var args=[];for(var ii=2;ii<arguments.length;ii++){args.push(arguments[ii]);}
var fn=function(){var _obj=obj||(this==window?false:this);var _args=args.slice();for(var jj=0;jj<arguments.length;jj++){_args.push(arguments[jj]);}
if(typeof(method)=="string"){if(_obj[method]){return _obj[method].apply(_obj,_args);}}else{return method.apply(_obj,_args);}};if(typeof method=='string'){fn.name=method;}else if(method&&method.name){fn.name=method.name;}
fn.toString=function(){return bind._toString(obj,args,method);};return fn;};var curry=bind(null,bind,null);bind._toString=bind._toString||function(obj,args,method){return(typeof method=='string')?('late bind<'+method+'>'):('bound<'+method.toString()+'>');};function goURI(uri,force_reload){uri=uri.toString();if(!force_reload&&window.PageTransitions&&PageTransitions.isInitialized()){PageTransitions.go(uri);}else if(window.location.href==uri){window.location.reload();}else{window.location.href=uri;}}
var PrimordialBootloader=window.PrimordialBootloader||{loaded:[],done:function(names){PrimordialBootloader.loaded.push(names);}};var Bootloader=window.Bootloader||{done:PrimordialBootloader.done};function loadExternalJavascript(urls,callback,body){if(urls instanceof Array){var url=urls.shift(0);loadExternalJavascript(url,function(){if(urls.length){loadExternalJavascript(urls,callback,body);}else{callback&&callback();}},body);}else{var node=body?document.body:document.getElementsByTagName('head')[0];var script=document.createElement('script');script.type='text/javascript';script.src=urls;if(callback){script.onerror=script.onload=callback;script.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){callback();}}}
node.appendChild(script);return script;}}
window.loadFirebugConsole&&window.loadFirebugConsole();

function hasArrayNature(obj){if(!obj){return false;}
if(typeof obj!='object'){return false;}
if(obj instanceof Array){return true;}
if(!('length'in obj)){return false;}
if('callee'in obj){return true;}
if('push'in obj&&'pop'in obj){return true;}
return false;}
function copy_properties(u,v){if(!u||!v){throw new TypeError("Can not copy between types "+typeof(u)+" and "+typeof(v)+".");}
for(var k in v){u[k]=v[k];}
if(v.hasOwnProperty&&v.hasOwnProperty('toString')&&(typeof v.toString!='undefined')&&(u.toString!==v.toString)){u.toString=v.toString;}
return u;}
function arrayize(obj){if(!hasArrayNature(obj)){return[obj];}
return obj;}
function is_empty(obj){if(obj instanceof Array){return obj.length==0;}else if(obj instanceof Object){for(var i in obj){return false;}
return true;}else{return!obj;}}
var Bootloader={configurePage:function(reverse_map){var links=document.getElementsByTagName('link');this._cssLinks=[];for(var ii=0;ii<links.length;++ii){if(links[ii].rel!='stylesheet'){continue;}
for(var k in reverse_map){if(links[ii].href.indexOf(k)!==-1){var name=reverse_map[k][0],permanent=reverse_map[k][1];this._cssLinkMap[name]=this._cssLinks.length;if(permanent){this._permanent[name]=true;}
delete reverse_map[k];break;}}
this._cssLinks.push(links[ii]);}},loadComponents:function(components,callback){components=arrayize(components);var required_resources=[];for(var ii=0;ii<components.length;++ii){var component_resource_list=this._componentMap[components[ii]];if(!component_resource_list){throw new Error("Can not bootload `"+components[ii]+"'.");}
for(var jj=0;jj<component_resource_list.length;++jj){required_resources.push(component_resource_list[jj]);}}
this.loadResources(required_resources,callback);},loadResources:function(resources,callback,replace,append){resources=arrayize(resources);if(replace){var map={};for(var ii=0;ii<resources.length;++ii){map[resources[ii].name]=true;}
for(var k in this._requested){if(!(k in this._permanent)&&!(k in map)){this._unloadResource(k);}}}
var request_index=append&&this._pending.length?this._pending.length-1:this._pending.length;var will_request=[];var pending_request=false;for(var ii=0;ii<resources.length;++ii){var rsrc=resources[ii];if(rsrc.permanent){this._permanent[rsrc.name]=true;}
if(this._loaded[rsrc.name]){continue;}
if(callback){if(!this._pending[request_index]){this._pending[request_index]={names:{},callback:callback};}
this._pending[request_index].names[rsrc.name]=true;pending_request=true;}
if(!this._requested[rsrc.name]){this.requested(rsrc.name);will_request.push(rsrc);}}
for(var ii=0;ii<will_request.length;++ii){this.requestResource(will_request[ii].type,will_request[ii].src,will_request[ii].name);}
if(!pending_request&&callback){this._invoke(callback);}},requestResource:function(type,source,name){var h=this._getHardpoint();switch(type){case'js':var script=document.createElement('script');script.src=source;script.type='text/javascript';h.appendChild(script);break;case'css':var link=null;for(var jj=0;jj<this._cssLinks.length;++jj){if(this._cssLinks[jj]._unused){link=this._cssLinks[jj];if(name){this._cssLinkMap[name]=jj;}
break;}}
if(!link){var link=document.createElement('link');link.rel="stylesheet";link.type="text/css";link.media="all";link.href=source;this._cssLinks.push(link);h.appendChild(link);}else{link.href=source;}
link._unused=false;var id=Bootloader._getDivIdForCSSComponent(name);var div=document.getElementById(id);if(!div){div=document.createElement('div');div.id=id;document.body.appendChild(div);setTimeout(Bootloader._pollCSS.bind(Bootloader,name,Bootloader._CSS_POLL_EXPIRATION),Bootloader._CSS_POLL_INTERVAL,false);}
break;default:throw new TypeError("Bad resource type `"+type+"'.");}},_getDivIdForCSSComponent:function(name){return'bootloader_'+name.replace(/[^a-z0-9]/ig,'_');},_pollCSS:function(name,remaining){var id=Bootloader._getDivIdForCSSComponent(name);var div=document.getElementById(id);if(!div){return;}
var expected='42';var computedStyle;var done=div.offsetHeight==expected||div.currentStyle&&div.currentStyle['height']==expected+'px'||window.getComputedStyle&&(computedStyle=document.defaultView.getComputedStyle(div,null))&&computedStyle.getPropertyValue('height')==expected+'px';if(done||remaining<=0){Bootloader.done([name]);div.parentNode.removeChild(div);}else{setTimeout(Bootloader._pollCSS.bind(Bootloader,name,remaining-Bootloader._CSS_POLL_INTERVAL),Bootloader._CSS_POLL_INTERVAL,false);}},done:function(names){var preloaded=PrimordialBootloader.loaded;PrimordialBootloader.loaded=[];for(var ii=0;ii<preloaded.length;++ii){Bootloader.done(preloaded[ii]);}
this.requested(names);for(var ii=0;ii<names.length;++ii){var loaded_resource=names[ii];this._loaded[loaded_resource]=true;for(var jj=0;jj<this._pending.length;++jj){var required_resources=this._pending[jj].names;delete required_resources[loaded_resource];if(is_empty(required_resources)){var callback=this._pending[jj].callback;this._pending.splice(jj,1);--jj;if(callback){this._invoke(callback);}}}}
if(window.Arbiter){var message={sender:this};Arbiter.inform(Arbiter.BOOTLOAD,message,Arbiter.BEHAVIOR_EVENT);}},requested:function(resources){resources=arrayize(resources);for(var ii=0;ii<resources.length;++ii){this._requested[resources[ii]]=true;}},enableBootload:function(map){copy_properties(this._componentMap,map);},_unloadResource:function(name){if(this._cssLinks&&(name in this._cssLinkMap)){var link_id=this._cssLinkMap[name];var link=this._cssLinks[link_id];link.href=Bootloader._UNUSED_CSS_URL;link._unused=true;delete this._cssLinkMap[name];delete this._requested[name];delete this._loaded[name];}},_invoke:function(callback){setTimeout(callback,0);},_getHardpoint:function(){if(!this._hardpoint){var n,heads=document.getElementsByTagName('head');if(heads.length){n=heads[0];}else{n=document.body;}
this._hardpoint=n;}
return this._hardpoint;},initialResourcesReady:function(){return this._initialResourcesReady;},loadInitialResources:function(resources){this._initialResourcesReady=false;this.loadResources(resources,bind(this,function(){this._initialResourcesReady=true;window.onResourceReady&&window.onResourceReady();},false,true));},_initialResourcesReady:true,_requested:{},_permanent:{},_loaded:{},_pending:[],_componentMap:{},_cssLinkMap:{},_cssLinks:[],_hardpoint:null,_CSS_POLL_EXPIRATION:5000,_CSS_POLL_INTERVAL:20,_UNUSED_CSS_URL:'javascript:void(0)'};

function Arbiter(){copy_properties(this,{_listeners:[],_events:{}});copy_properties(this,Arbiter);}
copy_properties(Arbiter,{SUBSCRIBE_NEW:'new',SUBSCRIBE_ALL:'all',BEHAVIOR_EVENT:'event',BEHAVIOR_PERSISTENT:'persistent',BEHAVIOR_STATE:'state',ALL:'all',LIVEMESSAGE:'livemessage',BOOTLOAD:'bootload',PAGE_TRANSITION:'pagetransitions/transition',CONTEXT_CHANGE:'ui/context-change',PROFILE_PUBLISHER:'profile/publisher',REPLAYABLE_AJAX:'ajax/replayable',PAGECACHE_INVALIDATE:'pagecache/invalidate',NEW_NOTIFICATIONS:'chat/new_notifications',BEEPS_EXPIRED:'beeper/beeps_expired',USER_ACTIVITY:'useractivity/activity',subscribe:function(types,callback,subscription_policy){var a=Arbiter._getInstance(this);types=types||Arbiter.ALL;a._listeners.push({callback:callback,types:types});subscription_policy=subscription_policy||Arbiter.SUBSCRIBE_ALL;if(subscription_policy==Arbiter.SUBSCRIBE_ALL){if(!(types instanceof Array)){types=[types];}
var e;var type;var ret;for(var idx=0;idx<types.length;idx++){type=types[idx];if(typeof type!="string"){throw new TypeError("Event types must be strings.");}
if(type in a._events){for(var ii=0;ii<a._events[type].length;ii++){e=a._events[type][ii];if(Arbiter._checkType(e[0],types)){ret=callback.apply(null,e);if(ret===false){a._events[type].splice(ii,1);ii--;}}}}}}else if(subscription_policy!=Arbiter.SUBSCRIBE_NEW){throw new TypeError("Bad subscription policy.");}
return{arbiterID:a._listeners.length-1};},unsubscribe:function(token){if(!('arbiterID'in token)){throw new TypeError("Not an arbiter token.");}
delete Arbiter._getInstance(this)._listeners[token.arbiterID];},inform:function(type,data,behavior){var a=Arbiter._getInstance(this);var e=[type,data];var idx=null;behavior=behavior||Arbiter.BEHAVIOR_EVENT;if(behavior==Arbiter.BEHAVIOR_PERSISTENT){idx=a._events.length;if(!(type in a._events)){a._events[type]=[];}
a._events[type].push(e);a._events[type]._stateful=false;}else if(behavior==Arbiter.BEHAVIOR_STATE){idx=0;a._events[type]=[e];a._events[type]._stateful=true;}else if(type in a._events){a._events[type]._stateful=false;}
var res;for(var ii=0;ii<a._listeners.length;ii++){if(a._listeners[ii]){if(Arbiter._checkType(e[0],a._listeners[ii].types)){res=a._listeners[ii].callback.apply(null,e);if(res===false){if(idx!==null){a._events[type].splice(idx,1);}
break;}}}}},query:function(type){var a=Arbiter._getInstance(this);if(!(type in a._events)){return null;}
if(!a._events[type]._stateful){throw new Error("Querying state of an unstateful event.");}
if(a._events[type].length){return a._events[type][0];}
return null;},_instance:null,_getInstance:function(self){if(self instanceof Arbiter){return self;}
if(!Arbiter._instance){Arbiter._instance=new Arbiter();}
return Arbiter._instance;},_checkType:function(event_type,callback_type){if(callback_type==Arbiter.ALL){return true;}
if(event_type==callback_type){return true;}
if(callback_type.length){for(var ii=0;ii<callback_type.length;ii++){if(callback_type[ii]==event_type){return true;}}}
return false;}});

Function.prototype.extend=function(superclass){if(typeof superclass!='string'){throw new TypeError('You must extend() with the name of a class, not the function object. '+'This generally means you need to replace "Dog.extend(Animal);" with '+'"Dog.extend(\'Animal\');".');}
if(!Metaprototype._arbiterHandle){Metaprototype._arbiterHandle=Arbiter.subscribe(Arbiter.BOOTLOAD,Metaprototype._onbootload.bind(Metaprototype));}
Metaprototype._queue(this,superclass);}
function Metaprototype(){}
copy_properties(Metaprototype,{_pending:[],_queue:function(subclass,superclass){this._pending.push({subclass:subclass,superclass:superclass});var src=this._pending;var dst=[];for(var ii=0;ii<src.length;++ii){var node=src[ii];for(var jj=0;jj<dst.length;++jj){if(window[dst[jj].superclass]==node.subclass){dst.splice(jj,0,node);break;}}
if(jj==dst.length){dst.push(node);}}
this._pending=dst;},_onbootload:function(type,data){this._update();},_update:function(){for(var ii=0;ii<this._pending.length;++ii){var node=this._pending[ii];var super_object=window[node.superclass];if(!super_object){continue;}
for(var jj=0;jj<this._pending.length;++jj){if(this._pending[jj].subclass==super_object){break;}}
if(jj==this._pending.length){this._pending.splice(ii,1);--ii;this._apply(node.subclass,super_object);}}},_apply:function(subclass,superclass){var superprototype=__metaprototype(superclass,0);var subprototype=__metaprototype(subclass,superprototype.prototype.__level+1);subprototype.parent=superprototype;}});function __metaprototype(obj,level){if(obj.__metaprototype){return obj.__metaprototype;}
var metaprototype=new Function();metaprototype.construct=__metaprototype_construct;metaprototype.prototype.construct=__metaprototype_wrap(obj,level,true);metaprototype.prototype.__level=level;metaprototype.base=obj;obj.prototype.parent=metaprototype;obj.__metaprototype=metaprototype;return metaprototype;}
function __metaprototype_construct(instance){__metaprototype_init(instance.parent);var parents=[];var obj=instance;while(obj.parent){parents.push(new_obj=new obj.parent());new_obj.__instance=instance;obj=obj.parent;}
instance.parent=parents[1];parents.reverse();parents.pop();instance.__parents=parents;instance.__instance=instance;return instance.parent.construct.apply(instance.parent,arguments);}
function __metaprototype_init(metaprototype){if(metaprototype.initialized)return;var base=metaprototype.base.prototype;if(metaprototype.parent){__metaprototype_init(metaprototype.parent);var parent_prototype=metaprototype.parent.prototype;for(i in parent_prototype){if(i!='__level'&&i!='construct'&&base[i]===undefined){base[i]=metaprototype.prototype[i]=parent_prototype[i]}}}
metaprototype.initialized=true;var level=metaprototype.prototype.__level;for(i in base){if(i!='parent'){base[i]=metaprototype.prototype[i]=__metaprototype_wrap(base[i],level);}}}
function __metaprototype_wrap(method,level,shift){if(typeof method!='function'||method.__prototyped){return method;}
var func=function(){var instance=this.__instance;if(instance){var old_parent=instance.parent;instance.parent=level?instance.__parents[level-1]:null;if(shift){var args=[];for(var i=1;i<arguments.length;i++){args.push(arguments[i]);}
var ret=method.apply(instance,args);}else{var ret=method.apply(instance,arguments);}
instance.parent=old_parent;return ret;}else{return method.apply(this,arguments);}}
func.__prototyped=true;return func;}
Function.prototype.mixin=function(){for(var i=0;i<arguments.length;i++){mixin=arguments[i];if((typeof mixin=='string'&&typeof Mixins[mixin]!='object')&&typeof mixin!='object'&&typeof mixin!='function'){throw new TypeError('mixin was called with an invalid argument. mixin '+'may be called with a variable number of '+'arguments, but each must either be an object or '+'the name of a mixin in "Mixins"');}
mixin=Mixins[mixin]||mixin;copy_properties(this.prototype,mixin);if(typeof mixin.mixin_initialize=='function'){this.prototype.mixin_initialize();delete this.prototype.mixin_initialize;}}}
Function.prototype.bind=function(context){var argv=[arguments[0],this];var argc=arguments.length;for(var ii=1;ii<argc;ii++){argv.push(arguments[ii]);}
return bind.apply(null,argv);}
Function.prototype.curry=Function.prototype.bind.bind(null,null);Function.prototype.shield=function(context){if(typeof this!='function'){throw new TypeException();}
var bound=this.bind.apply(this,to_array(arguments));return function(){return bound();}};Function.prototype.defer=function(msec){if(typeof this!='function'){throw new TypeError();}
msec=msec||0;return setTimeout(this,msec);};Function.prototype.deferUntil=function(callback,timeout){if(typeof this!='function'){throw new TypeError();}
if(timeout&&typeof timeout!='number'){throw new TypeError();}
if(callback()){this();return;}
var orig=this,interval=null,start_time=(new Date()).getTime();var fn=function(){if(callback()||timeout&&((new Date()).getTime()-start_time)>=timeout){orig();interval&&clearInterval(interval);}}
interval=setInterval(fn,50)
return interval;};Function.prototype.recur=function(msec){if(typeof this!='function'){throw new TypeError();}
return setInterval(this,msec);};Function.prototype.occur=function(){if(typeof this!='function'){throw new TypeError();}
return this.apply(this,arguments);};Function.prototype.memoize=function(){if(typeof this!='function'){throw new TypeError();}
var cache={};var functor=this;return function(){var key=JSON.encode(arguments);if(!(key in cache)){cache[key]=functor.apply(this,arguments);}
return cache[key];};};Function.prototype.toString=(function(native_fn){return function(full){var raw_output=native_fn.call(this);if(full){return raw_output;}
var lines=raw_output.split('\n'),max_lines=5;if(lines.length>max_lines){lines.splice(3,lines.length-max_lines,'    ...');}
return lines.join('\n');};})(Function.prototype.toString);function bagofholding(){return undefined;}
function abstractMethod(){throw new Error('You must implement this function in your base class.');}
function identity(input){return input;}
function truth(){return true;}
function fireonce(fn){var fired=false;return function(){if(!fired){fired=true;return fn();}}}
function call_or_eval(obj,func,args_map){if(!func){return undefined;}
args_map=args_map||{};if(typeof(func)=='string'){var params=keys(args_map).join(', ');func=eval('({f: function('+params+') { '+func+'}})').f;}
if(typeof(func)!='function'){Util.error('handler was neither a function nor a string of JS code');return undefined;}
return func.apply(obj,values(args_map));}

var Mixins={Arbiter:{mixin_initialize:function(){this._arbiter=new Arbiter();},subscribe:Arbiter.subscribe.bind(this._arbiter),inform:Arbiter.inform.bind(this._arbiter),unsubscribe:Arbiter.unsubscribe.bind(this._arbiter)}};

function object(o){var F=new Function();F.prototype=o;return new F();}
function is_scalar(v){switch(typeof(v)){case'string':case'number':case'null':case'boolean':return true;}
return false;}
function keys(obj){if(hasArrayNature(obj)){throw new TypeError('keys() was passed an array.');}
var keys=[];for(var i in obj){keys.push(i);}
return keys;}
function values(obj){if(hasArrayNature(obj)){throw new TypeError('values() was passed an array; use to_array().');}
var values=[];for(var i in obj){values.push(obj[i]);}
return values;}
function count(obj){if(hasArrayNature(obj)){throw new TypeError('count() was passed an array.');}
var count=0;for(var i in obj){count++;}
return count;}
function are_equal(a,b){return JSON.encode(a)==JSON.encode(b);}
function merge(){var ret={};for(var i=0;i<arguments.length;i++){copy_properties(ret,arguments[i]);}
return ret;}
function obj_filter_keys(obj,keys){var ret={};for(var ii=0;ii<keys.length;ii++){var key=keys[ii];if(key in obj){ret[key]=obj[key];}}
return ret;}
function obj_intersect_keys(){var ret={};var _obj=arguments[0];oloop:for(var j in _obj){if(!_obj.hasOwnProperty(j)){continue;}
iloop:for(var ii=1;ii<arguments.length;ii++){var obj=arguments[ii];for(var k in obj){if(k===j){if(arguments.length-1===ii){ret[j]=_obj[j];}
continue iloop;}}
continue oloop;}}
return ret;}
function head(obj){for(var i in obj){return obj[i];}
return null;}
Object.from=function(keys,values){if(!hasArrayNature(keys)){throw new TypeError('Must pass an array of keys.');}
var object={};var is_array=hasArrayNature(values);if(typeof values=='undefined'){values=true;}
for(var i=keys.length;i--;){object[keys[i]]=is_array?values[i]:values;}
return object;};function coalesce(){for(var i=0;i<arguments.length;++i){if(arguments[i]!=null){return arguments[i];}}
return null;}

function to_array(obj){var ret=[]
for(var i=0,l=obj.length;i<l;++i){ret.push(obj[i]);}
return ret;}
var $A=to_array;Array.prototype.alloc=function(length){return length?new Array(length):[];}
Array.prototype.map=function(callback,thisObject){if(this==window){throw new TypeError();}
if(typeof(callback)!=="function"){throw new TypeError();}
var ii;var len=this.length;var r=this.alloc(len);for(ii=0;ii<len;++ii){if(ii in this){r[ii]=callback.call(thisObject,this[ii],ii,this);}}
return r;};Array.prototype.forEach=function(callback,thisObject){this.map(callback,thisObject);return this;};Array.prototype.each=function(callback,thisObject){return this.forEach.apply(this,arguments);}
Array.prototype.filter=function(callback,thisObject){callback=callback||identity;if(this==window){throw new TypeError();}
if(typeof(callback)!=="function"){throw new TypeError();}
var ii,val,len=this.length,r=this.alloc();for(ii=0;ii<len;++ii){if(ii in this){val=this[ii];if(callback.call(thisObject,val,ii,this)){r.push(val);}}}
return r;};Array.prototype.every=function(callback,thisObject){return(this.filter(callback,thisObject).length==this.length);}
Array.prototype.some=function(callback,thisObject){return(this.filter(callback,thisObject).length>0);}
Array.prototype.pull=function(callback){if(this==window){throw new TypeError();}
if(typeof(callback)=='string'){var grip_key=callback;callback=function(){return this[grip_key]};}
if(typeof(callback)!=='function'){throw new TypeError();}
var args=Array.prototype.slice.call(arguments,1);var len=this.length;var r=this.alloc(len);for(ii=0;ii<len;++ii){if(ii in this){r[ii]=callback.apply(this[ii],args);}}
return r;}
Array.prototype.pullEach=function(callback){this.pull.apply(this,arguments);return this;}
Array.prototype.filterEach=function(callback){var map=this.pull.apply(this,arguments);var len=this.length;var r=this.alloc();for(var ii=0;ii<len;++ii){if(ii in this){r.push(this[ii]);}}
return r;}
Array.prototype.reduce=null;Array.prototype.reduceRight=null;Array.prototype.sort=(function(sort){return function(callback){return(this==window)?null:(callback?sort.call(this,function(a,b){return callback(a,b)}):sort.call(this));}})(Array.prototype.sort);Array.prototype.reverse=(function(reverse){return function(){return(this==window)?null:reverse.call(this);}})(Array.prototype.reverse);Array.prototype.concat=(function(concat){return function(){return(this==window)?null:concat.apply(this,arguments);}})(Array.prototype.concat);Array.prototype.slice=(function(slice){return function(){return(this==window)?null:slice.apply(this,arguments);}})(Array.prototype.slice);Array.prototype.clone=Array.prototype.slice;if(Array.prototype.indexOf){Array.prototype.indexOf=(function(indexOf){return function(val,index){return(this==window)?null:indexOf.apply(this,arguments);}})(Array.prototype.indexOf);}else{Array.prototype.indexOf=function(val,index){if(this==window){throw new TypeError();}
var len=this.length;var from=Number(index)||0;from=(from<0)?Math.ceil(from):Math.floor(from);if(from<0){from+=len;}
for(;from<len;from++){if(from in this&&this[from]===val){return from;}}
return-1;};}
Array.prototype.contains=function(val){return this.indexOf(val)!=-1;};Array.prototype.remove=function(val){var index=this.indexOf(val);if(index!=-1){this.splice(index,1);}}
function mapToInt(array){return array.map(function(val,i){return parseInt(val,10);});}
function unique(array){var obj={};var res=[];for(var i=0;i<array.length;i++){var val=array[i];if(!obj[val]){res.push(val);}
obj[val]=1;}
return res;}
function array_set_add(elements,item){if(!elements.contains(item)){elements.push(item);}
return elements;}

var ua={ie:function(){return ua._populate()||this._ie;},firefox:function(){return ua._populate()||this._firefox;},opera:function(){return ua._populate()||this._opera;},safari:function(){return ua._populate()||this._safari;},safariPreWebkit:function(){return ua._populate()||this._safari<500;},windows:function(){return ua._populate()||this._windows;},osx:function(){return ua._populate()||this._osx;},linux:function(){return ua._populate()||this._linux;},_populated:false,_populate:function(){if(ua._populated){return;}
ua._populated=true;var agent=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera.(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))/.exec(navigator.userAgent);var os=/(Mac OS X)|(Windows;)|(Linux)/.exec(navigator.userAgent);if(agent){ua._ie=agent[1]?parseFloat(agent[1]):NaN;if(ua._ie>=8&&!window.HTMLCollection){ua._ie=7;}
ua._firefox=agent[2]?parseFloat(agent[2]):NaN;ua._opera=agent[3]?parseFloat(agent[3]):NaN;ua._safari=agent[4]?parseFloat(agent[4]):NaN;}else{ua._ie=ua._firefox=ua._opera=ua._safari=NaN;}
if(os){ua._osx=!!os[1];ua._windows=!!os[2];ua._linux=!!os[3];}else{ua._osx=ua._windows=ua._linux=false;}}};

DOMStorage={_storage:{},_elements:{},_tokenCounter:1,_NOT_IN_DOM_CONST:1,_getElementStorage:function(elem){var token;token=(elem.__FB_TOKEN||(elem.__FB_TOKEN=[DOMStorage._tokenCounter++]))[0];DOMStorage._elements[token]=elem;return DOMStorage._storage[token]||(DOMStorage._storage[token]={});},_shouldDeleteData:function(element){if(!element.nodeName){return false;}
try{if(null!=element.offsetParent){return false;}}catch(ex){}
if(document.documentElement.contains){return!document.documentElement.contains(element);}else{return(document.documentElement.compareDocumentPosition(element)&DOMStorage._NOT_IN_DOM_CONST);}},setData:function(element,key,value){var element_store=DOMStorage._getElementStorage(element);element_store[key]=value;return element;},getData:function(element,key,default_value){var element_store=DOMStorage._getElementStorage(element);var value=element_store[key];if((undefined===value)&&(typeof element.getAttribute=='function')){var attr_val=element.getAttribute('data-'+key);value=(null===attr_val)?undefined:attr_val;}
if((default_value!==undefined)&&(value===undefined)){value=element_store[key]=default_value;}
return value;},removeData:function(element,key){var element_store=DOMStorage._getElementStorage(element);delete element_store[key];return element;},cleanup:function(){var elem_token,elem;for(elem_token in DOMStorage._elements){elem=DOMStorage._elements[elem_token];if(DOMStorage._shouldDeleteData(elem)){delete DOMStorage._storage[elem_token];delete DOMStorage._elements[elem_token];}}}};

function chain(u,v){var fn,calls=[];for(var ii=0;ii<arguments.length;ii++){calls.push(arguments[ii]);}
fn=function(event){event=event||window.event;for(var ii=0;ii<calls.length;ii++){if(calls[ii]&&calls[ii].apply(this,arguments)===false){return false;}else if(event&&event.cancelBubble){return true;}}
return true;};fn.toString=function(){return chain._toString(calls);};return fn;}
chain._toString=chain._toString||function(calls){var ret='chained fns',call=calls.filter();for(var i=0;i<calls.length;i++){ret+='\n'+calls[i].toString();}
return ret;};function addEventBase(obj,type,fn,name_hash)
{if(obj.addEventListener){obj.addEventListener(type,fn,false);}
else if(obj.attachEvent)
{var fn_name=type+fn+name_hash;obj["e"+fn_name]=fn;obj[fn_name]=function(){obj["e"+fn_name](window.event);}
obj.attachEvent("on"+type,obj[fn_name]);}
return fn;}
function removeEventBase(obj,type,fn,name_hash)
{if(obj.removeEventListener){obj.removeEventListener(type,fn,false);}
else if(obj.detachEvent)
{var fn_name=type+fn+name_hash;if(obj[fn_name]){obj.detachEvent("on"+type,obj[fn_name]);obj[fn_name]=null;obj["e"+fn_name]=null;}}}
window.Event=window.Event||function(){};Event.prototype=Event.prototype||{};Event.prototype._inherits_from_prototype=true;function $E(e){e=e||window.event;e=e||{};if(!e._inherits_from_prototype){for(var k in Event.prototype){try{e[k]=Event.prototype[k];}catch(ignored){}}}
return e;}
Event.prototype.kill=function(){this.stop();this.prevent();return false;}
Event.prototype.prevent=function(){this.returnValue=false;this.preventDefault&&this.preventDefault();}
Event.prototype.stop=function(){this.cancelBubble=true;this.stopPropagation&&this.stopPropagation();}
Event.stop=function(e){return $E(e).stop();}
Event.kill=function(e){return $E(e).kill();}
Event.prevent=function(e){return $E(e).prevent();}
Event._DOMSTORAGE_KEY='Event.listeners';Event.Priority={URGENT:-20,TRADITIONAL:-10,NORMAL:0,LINK_CONTROLLER:100};Event.listen=function(element,event_name,handler,priority){if(typeof element=='string'){element=$(element,true);}
if(typeof priority=='undefined'){priority=Event.Priority.NORMAL;}
var handlers=DOMStorage.getData(element,Event._DOMSTORAGE_KEY,{});event_name=Event._normalizeName(event_name);Event._attachHandler(element,event_name);var type_handlers=handlers[event_name];if(!(priority in type_handlers)){type_handlers[priority]=[];}
var id=type_handlers[priority].length;var ref=new EventHandlerRef(handler,type_handlers[priority],id);type_handlers[priority].push(ref);return ref;};Event._normalizeName=function(event_name){event_name=event_name.toLowerCase();if(event_name.match(/^on/)){throw new TypeError("Bad event name `"+event_name+"': use `click', not `onclick'.");}
return event_name;};Event._attachHandler=function(element,event_name){var full_event_name='on'+event_name;var handlers=DOMStorage.getData(element,Event._DOMSTORAGE_KEY);if(event_name in handlers){if(element[full_event_name]!==Event._listenHandler){throw new Error("`"+full_event_name+"' listen handler gone!");}
return;}
handlers[event_name]={};var old_handler=element[full_event_name];element[full_event_name]=Event._listenHandler;if(old_handler){Event.listen(element,event_name,old_handler,Event.Priority.TRADITIONAL);}};Event._listenHandler=function(event){event=$E(event);var type=event.type;if(!DOMStorage.getData(this,Event._DOMSTORAGE_KEY)){throw new Error("Bad _listenHandler() context.");}
var type_handlers=DOMStorage.getData(this,Event._DOMSTORAGE_KEY)[type];if(!type_handlers){throw new Error("No registered handlers for `"+type+"'.");}
var priorities=Event._getOrderedPriorities();for(var pri_idx=0;pri_idx<priorities.length;pri_idx++){var priority=priorities[pri_idx];if(priority in type_handlers){var handlers=type_handlers[priority];for(var idx=0;idx<handlers.length;idx++){if(!handlers[idx]){continue;}
var result=handlers[idx].fire(this,event);if(result===false){return event.kill();}else if(event.returnValue===false){return false;}else if(event.cancelBubble){return event.stop();}}}}};Event._listenHandler.toString=function _toString(){return'Use Util.listeners() to see the list of listeners on an element.';};Event._getOrderedPriorities=function(){if(!Event._listenHandler._orderedPriorities){var ordered=values(Event.Priority);ordered.sort(function(a,b){return a-b;});Event._listenHandler._orderedPriorities=ordered;}
return Event._listenHandler._orderedPriorities;}
function EventHandlerRef(handler,container,index){this._handler=handler;this._container=container;this._index=index;}
copy_properties(EventHandlerRef.prototype,{remove:function(){delete this._handler;delete this._container[this._index];},fire:function(element,event){return this._handler.call(element,event);}});Event.prototype.getTarget=function(){var target=this.target||this.srcElement;if(target){return $(target);}
return null;}
Event.prototype.getModifiers=function(){var m={control:!!this.ctrlKey,shift:!!this.shiftKey,alt:!!this.altKey,meta:!!this.metaKey};m.access=ua.osx()?m.control:m.alt;m.any=m.control||m.shift||m.alt||m.meta;return m;}
function event_get_keypress_keycode(event){event=$E(event);if(!event){return false;}
switch(event.keyCode){case 63232:return 38;case 63233:return 40;case 63234:return 37;case 63235:return 39;case 63272:case 63273:case 63275:return null;case 63276:return 33;case 63277:return 34;}
if(event.shiftKey){switch(event.keyCode){case 33:case 34:case 37:case 38:case 39:case 40:return null;}}
return event.keyCode;}

function Stack(){this.stack=[];try{var metaStack=[];try{({}).llama();}catch(e){if(e.stack){var regex=/^[^@]*?@(.+?):([0-9]+)$/mg;for(line=regex.exec(e.stack);line;line=regex.exec()){metaStack.push([line[1],line[2]]);}}}
var frame=arguments.callee,stale=[];for(var frame=arguments.callee,i=0;frame;frame=frame.caller,++i){i&&this.stack.push({func:frame,args:frame.arguments,file:metaStack[i]?metaStack[i][0]:null,line:metaStack[i]?metaStack[i][1]:null,toString:Stack.frameToString});if(stale.indexOf(frame)>=0){break;}
stale.push(frame);}}catch(e){}}
Stack.prototype.shift=function(n){this.stack.splice(0,n);return this;}
Stack.recursion={toString:bind(Stack,'frameToString')};Stack.functionGetName=function(fn,default_name){return(fn&&fn.name)||(/^function *([^(]*)\(/.exec(fn)||[]).pop()||(default_name===undefined?'(no name)':default_name);}
Stack.frameSrcToString=function(file,line){if(!file){return'?';}else if(file.indexOf('TabConsole.getInstance().onresult')>0){return'IceSpider';}else if(file.indexOf('with (__scope__.vars)')>0){return'FireBug';}else{return file+(line?':'+line:'');}}
Stack.frameToString=function(){if(this==Stack.recursion){return'* * recursion * *';}
var str=Stack.argToString(this.func)+'(';for(var i=0;i<this.args.length;i++){str+=(i?', ':'')+Stack.argToString(this.args[i]);}
return str+') @ '+Stack.frameSrcToString(this.file,this.line);}
Stack.argToString=function(arg){if(arg instanceof Function){return Stack.functionGetName(arg);}if(arg instanceof Array){return'Array';}else if(arg instanceof Object){return'Object';}else if(typeof arg=='string'){return'"'+arg.replace(/("|\\)/g,'\\$1')+'"';}else{return arg+'';}}
Stack.prototype.toString=function(){if(!this.stack.length){return'No stack trace available.';}
var str='';for(var i=0;i<this.stack.length;i++){str+=(i?'\n':'')+'#'+i+' '+this.stack[i];}
return str;}

String.prototype.trim=function(){if(this==window){return null;}
return this.replace(/^\s*|\s*$/g,'');}
function trim(text){try{return String(text.toString()).trim();}catch(ignored){return'';}}
String.prototype.startsWith=function(substr){if(this==window){return null;}
return this.substring(0,substr.length)==substr;};String.prototype.endsWith=function(substr){if(this==window){return null;}
return this.length>=substr.length&&this.substring(this.length-substr.length)==substr;};String.prototype.split=(function(split){return function(separator,limit){var flags="";if(separator===null||limit===null){return[];}else if(typeof separator=='string'){return split.call(this,separator,limit);}else if(separator===undefined){return[this.toString()];}else if(separator instanceof RegExp){if(!separator._2||!separator._1){flags=separator.toString().replace(/^[\S\s]+\//,"");if(!separator._1){if(!separator.global){separator._1=new RegExp(separator.source,"g"+flags);}else{separator._1=1;}}}
separator1=separator._1===1?separator:separator._1;var separator2=(separator._2?separator._2:separator._2=new RegExp("^"+separator1.source+"$",flags));if(limit===undefined||limit<0){limit=false;}else{limit=Math.floor(limit);if(!limit)return[];}
var match,output=[],lastLastIndex=0,i=0;while((limit?i++<=limit:true)&&(match=separator1.exec(this))){if((match[0].length===0)&&(separator1.lastIndex>match.index)){separator1.lastIndex--;}
if(separator1.lastIndex>lastLastIndex){if(match.length>1){match[0].replace(separator2,function(){for(var j=1;j<arguments.length-2;j++){if(arguments[j]===undefined)match[j]=undefined;}});}
output=output.concat(this.substring(lastLastIndex,match.index),(match.index===this.length?[]:match.slice(1)));lastLastIndex=separator1.lastIndex;}
if(match[0].length===0){separator1.lastIndex++;}}
return(lastLastIndex===this.length)?(separator1.test("")?output:output.concat("")):(limit?output:output.concat(this.substring(lastLastIndex)));}else{return split.call(this,separator,limit);}}})(String.prototype.split);

function escapeURI(u)
{if(encodeURIComponent){return encodeURIComponent(u);}
if(escape){return escape(u);}}
function htmlspecialchars(text){if(typeof(text)=='undefined'||text===null||!text.toString){return'';}
if(text===false){return'0';}else if(text===true){return'1';}
return text.toString().replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#039;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function htmlize(text){return htmlspecialchars(text).replace(/\n/g,'<br />');}
function escape_js_quotes(text){if(typeof(text)=='undefined'||!text.toString){return'';}
return text.toString().replace(/\\/g,'\\\\').replace(/\n/g,'\\n').replace(/\r/g,'\\r').replace(/"/g,'\\x22').replace(/'/g,'\\\'').replace(/</g,'\\x3c').replace(/>/g,'\\x3e').replace(/&/g,'\\x26');}

function sprintf(){if(arguments.length==0){Util.warn('sprintf() was called with no arguments; it should be called with at '+'least one argument.');return'';}
var args=['This is an argument vector.'];for(var ii=arguments.length-1;ii>0;ii--){if(typeof(arguments[ii])=="undefined"){Util.log('You passed an undefined argument (argument '+ii+') to sprintf(). '+'Pattern was: `'+(arguments[0])+'\'.','error');args.push('');}else if(arguments[ii]===null){args.push('');}else if(arguments[ii]===true){args.push('true');}else if(arguments[ii]===false){args.push('false');}else{if(!arguments[ii].toString){Util.log('Argument '+(ii+1)+' to sprintf() does not have a toString() '+'method. The pattern was: `'+(arguments[0])+'\'.','error');return'';}
args.push(arguments[ii]);}}
var pattern=arguments[0];pattern=pattern.toString().split('%');var patlen=pattern.length;var result=pattern[0];for(var ii=1;ii<patlen;ii++){if(args.length==0){Util.log('Not enough arguments were provide to sprintf(). The pattern was: '+'`'+(arguments[0])+'\'.','error');return'';}
if(!pattern[ii].length){result+="%";continue;}
var p=0;var m=0;var r='';var padChar=' ';var padSize=null;var maxSize=null;var rawPad='';var pos=0;if(m=pattern[ii].match(/^('.)?(?:(-?\d+\.)?(-?\d+)?)/)){if(m[2]!==undefined&&m[2].length){padSize=parseInt(rawPad=m[2]);}
if(m[3]!==undefined&&m[3].length){if(padSize!==null){maxSize=parseInt(m[3]);}else{padSize=parseInt(rawPad=m[3]);}}
pos=m[0].length;if(m[1]!==undefined&&m[1].length){padChar=m[1].charAt(1);}else{if(rawPad.charAt(0)==0){padChar='0';}}}
switch(pattern[ii].charAt(pos)){case's':case'#':raw=htmlspecialchars(args.pop().toString());break;case'h':raw=args.pop().toString();break;case'd':raw=parseInt(args.pop()).toString();break;case'f':raw=parseFloat(args.pop()).toString();break;case'q':raw="`"+htmlspecialchars(args.pop().toString())+"'";break;case'e':raw="'"+escape_js_quotes(args.pop().toString())+"'";break;case'L':var list=args.pop();for(var ii=0;ii<list.length;ii++){list[ii]="`"+htmlspecialchars(args.pop().toString())+"'";}
if(list.length>1){list[list.length-1]='and '+list[list.length-1];}
raw=list.join(', ');break;case'x':var x=args.pop();var line=null;var src=null;try{if(typeof(x['line'])!='undefined'){line=x.line;}else if(typeof(x['lineNumber'])!='undefined'){line=x.lineNumber;}
if(typeof(x['sourceURL'])!='undefined'){src=x['sourceURL'];}else if(typeof(x['fileName'])!='undefined'){src=x['fileName'];}}catch(exception){}
var s='[An Exception]';try{s=x.message||x.toString();}catch(exception){}
raw=s+' [at '+Stack.frameSrcToString(src,line)+']';break;default:raw="%"+pattern[ii].charAt(pos+1);break;}
if(padSize!==null){if(raw.length<Math.abs(padSize)){var padding='';var padlen=(Math.abs(padSize)-raw.length);for(var ll=0;ll<padlen;ll++){padding+=padChar;}
if(padSize<0){raw+=padding;}else{raw=padding+raw;}}}
if(maxSize!==null){if(raw.length>maxSize){raw=raw.substr(0,maxSize);}}
result+=raw+pattern[ii].substring(pos+1);}
if(args.length>1){Util.log('Too many arguments ('+(args.length-1)+' extras) were passed to '+'sprintf(). Pattern was: `'+(arguments[0])+'\'.','error');}
return result;}

function env_get(k){return typeof(window['Env'])!='undefined'&&Env[k];}
function muffinize(str){var muffin_top='a';var muffin_bottom='d';var muffin=[muffin_top,muffin_bottom].join('')
return str.replace(/muffin/g,muffin);}
var Util={_suppress:false,fallbackErrorHandler:function(msg){aiert(msg);},isDevelopmentEnvironment:function(){return env_get('dev');},warn:function(){Util.log(sprintf.apply(null,arguments),'warn');},error:function(){Util.log(sprintf.apply(null,arguments),'error');},log:function(msg,type){if(Util._suppress){return;}
if(Util.isDevelopmentEnvironment()){type=type||'log';if(typeof(console)!='undefined'&&console[type]){console[type](msg);}else if(typeof(window.TabConsole)!='undefined'){var con=TabConsole.getInstance();if(con){con.log(HTML(msg),type);}}else if(Util.fallbackErrorHandler){Util.fallbackErrorHandler(msg);}}else{if(type=='error'){if((typeof(window['Env'])!='undefined')&&(Env.rlog)&&(typeof(window['debug_rlog'])=='function')){msg+='\n\n'+Util.stack();debug_rlog(msg);}}}},setSuppressed:function(suppress){Util._suppress=suppress;},stack:function(){return(new Stack()).toString();},trace:function(){Util.log(Util.stack());},keyForValue:function(obj,val){for(var i in obj){if(obj[i]==val){return i;}}},listeners:function(element,type){if(type.indexOf('on')!==0){type='on'+type;}
var none_found='Sorry, no listeners were found';if(!element[type]){return none_found;}else if(typeof element[type]=='string'){return element[type]||none_found;}else if(element[type]!==Event._listenHandler){return element[type].toString()||none_found;}else{var all_handlers=DOMStorage.getData(element,Event._DOMSTORAGE_KEY),type_handlers=(all_handlers&&all_handlers[type.substring(2)])||{},output=[],priorities=Event._getOrderedPriorities(),found=false;for(var ii=0;ii<priorities.length;ii++){var pri_val=priorities[ii];if(pri_val in type_handlers){var pri_name=Util.keyForValue(Event.Priority,pri_val);if(found){output.push('\n');}
output.push('*** '+pri_name+' Listeners ***');var handlers=type_handlers[pri_val];for(var idx=0;idx<handlers.length;idx++){if(handlers[idx]){found=true;output.push('    '+handlers[idx]._handler.toString().replace(/\n/g,'\n    '));}}}}
return found?output.join('\n'):none_found;}}};chain._toString=function(calls){var indent='\n |  ',first_indent=' |--',last_indent='\n    ',filtered_fns=calls.filter(),output=['Chained Functions ('+filtered_fns.length+')'+indent];for(var ii=0;ii<filtered_fns.length;ii++){var last=(ii==filtered_fns.length-1),ind=last?last_indent:indent;output.push(filtered_fns[ii]?first_indent
+filtered_fns[ii].toString().replace(/\n/g,ind)
+(!last?indent:''):'');}
return output.join('\n');};bind._toString=function(obj,args,method){if(typeof method!='string'&&typeof method!='function'){return'';}
var env=Stack.functionGetName(obj&&obj.constructor,'UnknownType'),late=(typeof method=='string'),b_type=late?'Late Binding Function':'Bound Function',m_name=(late&&method)||(method.toString==Function.prototype.toString&&Stack.functionGetName(method,false))||Util.keyForValue(obj,method)||method.toString().replace(/\n/g,'\n           '),arg_list;if(late){arg_list=args.map(Stack.argToString).join(', ');}else{var fn_str=Function.prototype.toString.call(method);fn_str=fn_str.substr(fn_str.indexOf('(')+1);fn_str=fn_str.substr(0,fn_str.indexOf(')'));arg_list=fn_str.split(',').pull(''.trim).concat(args.slice(method.length).map(function(elm,i){return'undeclared_'+(i+1);})).filter().map(function(param,i){return args[i]===undefined?'<'+param+'>':param+' = '+Stack.argToString(args[i]);}).join(', ')||'no arguments';}
return b_type
+'\n  scope  : '+env
+'\n  params : '+arg_list
+'\n  method : '+m_name;};

window.onloadRegister=function(handler){window.loaded?_runHook(handler):_addHook('onloadhooks',handler);};function onafterloadRegister(handler){window.afterloaded?setTimeout(function(){_runHook(handler);},0):_addHook('onafterloadhooks',handler);}
function onpagecacheRegister(handler,id){id=(id===undefined?'':String(id));window.Quickling&&Quickling.registerPageCacheHook(handler,id);}
function _include_quickling_events_default(){return!window.loading_page_chrome;}
function onbeforeunloadRegister(handler,include_quickling_events){if(include_quickling_events===undefined){include_quickling_events=_include_quickling_events_default();}
if(include_quickling_events){_addHook('onbeforeleavehooks',handler);}else{_addHook('onbeforeunloadhooks',handler);}}
function onunloadRegister(handler,include_quickling_events){if(include_quickling_events===undefined){include_quickling_events=_include_quickling_events_default();}
if(include_quickling_events){_addHook('onleavehooks',handler);}else{_addHook('onunloadhooks',handler);}}
function _readyToLoad(){return!window.bootloader_pending&&(!window.Bootloader||Bootloader.initialResourcesReady())&&window.loading_begun;}
function onResourceReady(){if(_readyToLoad()){_onloadHook();if(window.afterloading_begun){_onafterloadHook();}}}
function _onloadHook(){window.loading_begun=true;if(_readyToLoad()){!window.loaded&&window.Env&&(Env.t_willonloadhooks=(new Date()).getTime());_runHooks('onloadhooks');!window.loaded&&window.Env&&(Env.t_doneonloadhooks=(new Date()).getTime());window.loaded=true;}}
function _onafterloadHook(){window.afterloading_begun=true;if(_readyToLoad()){_runHooks('onafterloadhooks');window.afterloaded=true;}}
function _runHook(handler){try{handler();}catch(ex){Util.error('Uncaught exception in hook (run after page load): %x',ex);}}
function _runHooks(hooks){var isbeforeunload=hooks=='onbeforeleavehooks'||hooks=='onbeforeunloadhooks';var warn=null;do{var h=window[hooks];if(!isbeforeunload){window[hooks]=null;}
if(!h){break;}
for(var ii=0;ii<h.length;ii++){try{if(isbeforeunload){warn=warn||h[ii]();}else{h[ii]();}}catch(ex){Util.error('Uncaught exception in hook (%q) %q: %x',hooks,h[ii],ex);}}
if(isbeforeunload){break;}}while(window[hooks]);if(isbeforeunload&&warn){return warn;}}
function _addHook(hooks,handler){(window[hooks]?window[hooks]:(window[hooks]=[])).push(handler);}
function removeHook(hooks){window[hooks]=[];}
function _bootstrapEventHandlers(){if(document.addEventListener){if(ua.safari()){var timeout=setInterval(function(){if(/loaded|complete/.test(document.readyState)){(window.Env&&(Env.t_domcontent=(new Date()).getTime()));_onloadHook();clearTimeout(timeout);}},3);}else{document.addEventListener("DOMContentLoaded",function(){(window.Env&&(Env.t_domcontent=(new Date()).getTime()));_onloadHook();},true);}}else{var src='javascript:void(0)';if(window.location.protocol=='https:'){src='//:';}
document.write('<script onreadystatechange="if (this.readyState==\'complete\') {'+'(window.Env&&(Env.t_domcontent=(new Date()).getTime()));'+'this.parentNode.removeChild(this);_onloadHook();}" defer="defer" '+'src="'+src+'"><\/script\>');}
window.onload=chain(window.onload,function(){(window.Env&&(Env.t_layout=(new Date()).getTime()));var force_layout=document&&document.body&&document.body.offsetWidth;(window.Env&&(Env.t_onload=(new Date()).getTime()));_onloadHook();_onafterloadHook();});window.onbeforeunload=function(){var warn=_runHooks('onbeforeleavehooks')||_runHooks('onbeforeunloadhooks');if(!warn){window.loaded=false;window.afterloaded=false;}
return warn;};window.onunload=chain(window.onunload,function(){_runHooks('onleavehooks');_runHooks('onunloadhooks');});}
function keep_window_set_as_loaded(){if(window.loaded==false){window.loaded=true;_runHooks('onloadhooks');}
if(window.afterloaded==false){window.afterloaded=true;_runHooks('onafterloadhooks');}}

window.aiert=(function(a){var aiert=function _aiert(m){if(window.last_alert){(window.alerts=window.alerts||[]).push((new Date()).getTime()-window.last_alert);window.alerts.splice(0,window.alerts.length-3);if(window.alerts.length==3&&window.alerts[0]+window.alerts[1]+window.alerts[2]<200){if(!confirm(m+'\n\nThis page may be caught in an infinite loop. Press "Cancel" to abort, or "Ok" to continue.')){window.aiert=bagofholding;}
window.last_alert=(new Date()).getTime();return;}}
a(m);window.last_alert=(new Date()).getTime();}
return aiert;})(window.alert);window.alert=function _alert(m){if(m!==undefined){(new Image()).src='/ajax/typeahead_callback.php?l='+escapeURI(document.location)+'&m='+
escapeURI(m)+(typeof Env!='undefined'?'&t='+Math.round(((new Date()).getTime()-Env.start)/100):'')+'&d='+escapeURI((typeof fbpd!='undefined')?JSON.encode(fbpd):'')+'&s='+escapeURI(typeof Util!='undefined'?Util.stack():'')+'&ai='+escapeURI(window.aiert)+'&al='+escapeURI(window.alert);return window.aiert(m);}}

function _fbt(text){return fbt(arguments);}
function fbt(text){if(arguments.length==1){return text;}
var name_map=new Object();var match;var arg_index=1;var fbt_reg=/(?:[^\{]|^)(\{\w\})(?!\})/g;while((match=fbt_reg.exec(text))!=null){var token=match[1].slice(1,-1);while(!(token in name_map)){if(arg_index<arguments.length){var arg=arguments[arg_index++];var t_arg=typeof arg;if(arg==null){Util.error('fbt: null value for arg for text: %s',text);}else if(arg instanceof Array||t_arg=="array"){Util.error(sprintf('fbt: cannot use Array type as arg in js fbt. '+'Use Object instead. text: %s',text));}else if(t_arg=='number'||t_arg=='string'){name_map[token]=arg;}else if(t_arg=='object'){copy_properties(name_map,arg);}else{Util.error(sprintf('fbt: cannot use %s type as arg in fbt: %s',t_arg,text));}}else{Util.error('fbt: Too few arguments for text: %s',text);break;}}}
if(arg_index<arguments.length&&typeof arguments[arg_index++]=="string"&&arg_index<arguments.length){Util.error('fbt: Too many arguments.');}
return fbt_replace_braces(text,name_map);}
function fbts(project,text){return fbt.apply(this,to_array(arguments).slice(1));}
function fbt_replace_braces(text,args){if(args){if(typeof args!='object'){Util.error('intl.js: the 2nd argument must be a keyed array (not a string) for tx('+text+', ...)');}else{for(var key in args){var reg=new RegExp("([^\\{]|^)\\{"+key+"\\}(?!\\})",'g');text=text.replace(reg,'$1'+args[key]);}}}
return text.replace(/\{\{/g,'{').replace(/\}\}/g,'}');}
function tx(str,args){if(typeof _string_table=='undefined'){return;}
str=_string_table[str];return _tx(str,args);}
function intl_ends_in_punct(str){if(typeof str!='string'){return false;}
return str.match(new RegExp(intl_ends_in_punct.punct_char_class+'['+')"'+"'"+'\u00BB'+'\u0F3B'+'\u0F3D'+'\u2019'+'\u201D'+'\u203A'+'\u3009'+'\u300B'+'\u300D'+'\u300F'+'\u3011'+'\u3015'+'\u3017'+'\u3019'+'\u301B'+'\u301E'+'\u301F'+'\uFD3F'+'\uFF07'+'\uFF09'+'\uFF3D'+'\s'+']*$'));}
intl_ends_in_punct.punct_char_class='['+'.!?'+'\u3002'+'\uFF01'+'\uFF1F'+'\u0964'+'\u2026'+'\u0EAF'+'\u1801'+'\u0E2F'+'\uFF0E'+']';function intl_phonological_rules(str){var rules=window.intl_locale_rewrites;var regexp;if(rules){var pats=[];var reps=[];for(var p in rules['patterns']){var pat=p;var rep=rules['patterns'][p];for(var m in rules['meta']){regexp=new RegExp(m.slice(1,-1),'g');pat=pat.replace(regexp,rules['meta'][m]);rep=rep.replace(regexp,rules['meta'][m]);}
regexp=new RegExp("\\+",'g');pats[pats.length]=pat.replace(regexp,'\x01');reps[reps.length]=rep.replace(regexp,'\x01');}
for(var ii=0;ii<pats.length;ii++){regexp=new RegExp(pats[ii].slice(1,-1),'g');str=str.replace(regexp,reps[ii]);}}
regexp=new RegExp('\x01','g');str=str.replace(regexp,'');return str;}
function _tx(str,args){if(args){if(typeof args!='object'){Util.error('intl.js: the 2nd argument must be a keyed array (not a string) for tx('+str+', ...)');}else{var regexp;for(var key in args){if(intl_ends_in_punct(args[key])){regexp=new RegExp('\{'+key+'\}'+
intl_ends_in_punct.punct_char_class+'*','g');}else{regexp=new RegExp('\{'+key+'\}','g');}
str=str.replace(regexp,'\x01'+args[key]+'\x01');}
str=intl_phonological_rules(str);}}
return str;}

0;

function List(length){if(arguments.length>1){for(var ii=0;ii<arguments.length;ii++){this.push(arguments[ii]);}}else{this.resize(length||0);}}
List.prototype.length=0;List.prototype.size=function(){return this.length;}
List.prototype.resize=function(new_size){this.length=new_size;return this;}
List.prototype.alloc=function(n){return new List(n);}
List.prototype.toString=function(){return'['+this.join(', ')+']';}
List.prototype.push=Array.prototype.push;List.prototype.pop=Array.prototype.pop;List.prototype.join=Array.prototype.join;List.prototype.map=Array.prototype.map;List.prototype.forEach=Array.prototype.forEach;List.prototype.each=Array.prototype.each;List.prototype.filter=Array.prototype.filter;List.prototype.every=Array.prototype.every;List.prototype.some=Array.prototype.some;List.prototype.pull=Array.prototype.pull;List.prototype.pullEach=Array.prototype.pullEach;List.prototype.pullFilter=Array.prototype.pullFilter;List.prototype.splice=Array.prototype.splice;

function Augment(name,generator){this.name=name;this.generator=generator;this.properties=null;}
copy_properties(Augment.prototype,{augmentObject:function(target){if(!target){return target;}
try{if(!target.__augment){target.__augment={};}
if(!target.__augment[this.name]){target.__augment[this.name]=true;copy_properties(target,this.getProperties());}}catch(e){}
return target;},getProperties:function(){if(!this.properties){this.properties=this.generator();}
return this.properties;}});

function HTML(content){if(this===window){if(content instanceof HTML){return content;}
return new HTML(content);}
this._content=content;this._defer=false;this._extra_action='';this._nodes=null;this._inline_js=bagofholding;this._has_option_elements=false;return this;}
copy_properties(HTML.prototype,{toString:function(){var str=this._content;if(this._extra_action){str+='<script type="text/javascript">'+this._extra_action
+'</scr'+'ipt>';}
return str;},setAction:function(js){this._extra_action=js;return this;},getAction:function(){this._fillCache();var fn=function(){this._inline_js();eval_global(this._extra_action);}.bind(this);if(this.getDeferred()){return fn.defer.bind(fn);}else{return fn;}},setDeferred:function(defer){this._defer=!!defer;return this;},getDeferred:function(){return this._defer;},getContent:function(){return this._content;},getNodes:function(){this._fillCache();return this._nodes;},getRootNode:function(){return this.getNodes()[0];},hasOptionElements:function(){this._fillCache();return this._has_option_elements;},_fillCache:function(){if(null!==this._nodes){return;}
var html=this._content;if(!html){this._nodes=[];return;}
html=html.replace(/(<(\w+)[^>]*?)\/>/g,function(all,front,tag){return tag.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?all:front+'></'+tag+'>';});var tags=html.trim().toLowerCase(),wrapper_elem=document.createElement('div'),dummy_span=false;var wrap=(!tags.indexOf('<opt')&&[1,'<select multiple="multiple" class="__WRAPPER">','</select>'])||(!tags.indexOf('<leg')&&[1,'<fieldset class="__WRAPPER">','</fieldset>'])||(tags.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,'<table class="__WRAPPER">','</table>'])||(!tags.indexOf('<tr')&&[2,'<table><tbody class="__WRAPPER">','</tbody></table>'])||((!tags.indexOf('<td')||!tags.indexOf('<th'))&&[3,'<table><tbody><tr class="__WRAPPER">','</tr></tbody></table>'])||(!tags.indexOf('<col')&&[2,'<table><tbody></tbody><colgroup class="__WRAPPER">','</colgroup></table>'])||null;if(null===wrap){wrapper_elem.className='__WRAPPER';if(ua.ie()){wrap=[0,'<span style="display:none">&nbsp;</span>',''];dummy_span=true;}else{wrap=[0,'',''];}}
wrapper_elem.innerHTML=wrap[1]+html+wrap[2];;while(wrap[0]--){wrapper_elem=wrapper_elem.lastChild;}
if(dummy_span){wrapper_elem.removeChild(wrapper_elem.firstChild);}
if(wrapper_elem.className!='__WRAPPER'){Util.warn('HTML._fillCache: HTML markup is not well formed.');}
if(0!=wrapper_elem.getElementsByTagName('option').length){this._has_option_elements=true;}
if(ua.ie()){var tbody;if(!tags.indexOf('<table')&&-1==tags.indexOf('<tbody')){tbody=wrapper_elem.firstChild&&wrapper_elem.firstChild.childNodes;}else if(wrap[1]=='<table>'&&-1==tags.indexOf('<tbody')){tbody=wrapper_elem.childNodes;}else{tbody=[];}
for(var ii=tbody.length-1;ii>=0;--ii){if(tbody[ii].nodeName&&tbody[ii].nodeName.toLowerCase()=='tbody'&&tbody[ii].childNodes.length==0){tbody[ii].parentNode.removeChild(tbody[ii]);}}}
var scripts=wrapper_elem.getElementsByTagName('script');var callbacks=[];for(var i=0;i<scripts.length;i++){if(scripts[i].src){callbacks.push(Bootloader.requestResource.bind(Bootloader,'js',scripts[i].src));}else{callbacks.push(eval_global.bind(null,scripts[i].innerHTML));}}
for(var i=scripts.length-1;i>=0;i--){scripts[i].parentNode.removeChild(scripts[i]);}
var extracted_js=function(){for(var ii=0;ii<callbacks.length;ii++){callbacks[ii]();}};this._nodes=to_array(wrapper_elem.childNodes);this._inline_js=extracted_js;}});

function Vector2(x,y,domain){copy_properties(this,{x:parseFloat(x),y:parseFloat(y),domain:domain||'pure'});};copy_properties(Vector2.prototype,{toString:function(){return'('+this.x+', '+this.y+')';},add:function(vx,vy){var x=this.x,y=this.y,l=arguments.length;if(l==1){if(vx.domain!='pure'){vx=vx.convertTo(this.domain);}
x+=vx.x;y+=vx.y;}else if(l==2){x+=parseFloat(vx);y+=parseFloat(arguments[1]);}else{Util.warn('Vector2.add called with %d arguments, should be one (a vector) or '+'two (x and y coordinates).',l);}
return new Vector2(x,y,this.domain);},mul:function(sx,sy){if(typeof(sy)=="undefined"){sy=sx;}
return new Vector2(this.x*sx,this.y*sy,this.domain);},sub:function(v){var x=this.x,y=this.y,l=arguments.length;if(l==1){if(v.domain!='pure'){v=v.convertTo(this.domain);}
x-=v.x;y-=v.y;}else if(l==2){x-=parseFloat(v);y-=parseFloat(arguments[1]);}else{Util.warn('Vector2.add called with %d arguments, should be one (a vector) or '+'two (x and y coordinates).',l);}
return new Vector2(x,y,this.domain);},distanceTo:function(v){return this.sub(v).magnitude();},magnitude:function(){return Math.sqrt((this.x*this.x)+(this.y*this.y));},convertTo:function(newDomain){if(newDomain!='pure'&&newDomain!='viewport'&&newDomain!='document'){Util.error('Domain %q is not valid; legitimate coordinate domains are %q, %q, '+'%q.',newDomain,'pure','viewport','document');return new Vector2(0,0);}
if(newDomain==this.domain){return new Vector2(this.x,this.y,this.domain);}
if(newDomain=='pure'){return new Vector2(this.x,this.y);}
if(this.domain=='pure'){Util.error('Unable to covert a pure vector to %q coordinates; a pure vector is '+'abstract and does not exist in any document coordinate system. If '+'you need to hack around this, create the vector explicitly in some '+'document coordinate domain, by passing a third argument to the '+'constructor. But you probably don\'t, and are just using the class '+'wrong. Stop doing that.',newDomain);return new Vector2(0,0);}
var o=Vector2.getScrollPosition('document');var x=this.x,y=this.y;if(this.domain=='document'){x-=o.x;y-=o.y;}else{x+=o.x;y+=o.y;}
return new Vector2(x,y,newDomain);},setElementPosition:function(el){var p=this.convertTo('document');el.style.left=parseInt(p.x)+'px';el.style.top=parseInt(p.y)+'px';return this;},setElementDimensions:function(el){return this.setElementWidth(el).setElementHeight(el);},setElementWidth:function(el){el.style.width=parseInt(this.x,10)+'px';return this;},setElementHeight:function(el){el.style.height=parseInt(this.y,10)+'px';return this;},scrollElementBy:function(el){if(el==document.body){el=DOMScroll.getScrollRoot();}
if(el==document.body){window.scrollBy(this.x,this.y);}else{el.scrollLeft+=this.x;el.scrollTop+=this.y;}
return this;}});copy_properties(Vector2,{compass:{east:'e',west:'w',north:'n',south:'s',center:'center',northeast:'ne',northwest:'nw',southeast:'se',southwest:'sw'},getEventPosition:function(e,domain){domain=domain||'document';e=$E(e);var x=e.pageX||(e.clientX+
(document.documentElement.scrollLeft||document.body.scrollLeft));var y=e.pageY||(e.clientY+
(document.documentElement.scrollTop||document.body.scrollTop));var v=new Vector2(x,y,'document');if(DOMScroll.getScrollWrapper()){v=v.add(Vector2.getScrollPosition());}
return v.convertTo(domain);},getScrollPosition:function(domain){domain=domain||'document';var wrapper=DOMScroll.getScrollWrapper();if(wrapper){var x=wrapper.scrollLeft;var y=wrapper.scrollTop;}else{var x=document.body.scrollLeft||document.documentElement.scrollLeft;var y=document.body.scrollTop||document.documentElement.scrollTop;}
return(new Vector2(x,y,'document').convertTo(domain));},getElementPosition:function(el,domain){domain=domain||'document';if(!el){return;}
if(ua.safari()<500&&el.tagName=='TR'){el=el.firstChild;}
var left=el.offsetLeft;var top=el.offsetTop;var op=el.offsetParent;var root=DOMScroll.getScrollWrapper()||document.body;var fixed=false;while(el.parentNode&&root!=el.parentNode&&document.body!=el.parentNode){el=el.parentNode;if(!isNaN(el.scrollTop)){if(!(ua.opera()<9.50)||!operaIgnoreScroll[window.getComputedStyle(el,'').getPropertyValue('display')]){top-=el.scrollTop;left-=el.scrollLeft;}}
if(op==el){if(ua.safari()<500&&el.tagName=='TR'){top+=el.firstChild.offsetTop;left+=el.firstChild.offsetLeft;}else{top+=el.offsetTop;left+=el.offsetLeft;}
op=el.offsetParent;}
if(op&&CSS.getStyle(op,'position')=='fixed'){fixed=true;top+=op.offsetTop;left+=op.offsetLeft;break;}}
if(fixed){var scrollPosition=Vector2.getScrollPosition('document');left+=scrollPosition.x;top+=scrollPosition.y;}
return(new Vector2(left,top,'document').convertTo(domain));},getElementDimensions:function(el,useClient){if(ua.safariPreWebkit()&&el.nodeName=='TR'){var tds=el.getElementsByTagName('td');var dimensions=Vector2.getElementCompassPoint(tds[tds.length-1],Vector2.compass.southeast,useClient).sub(Vector2.getElementPosition(tds[0],'document',useClient));return dimensions;}
var x=(useClient?el.clientWidth:el.offsetWidth)||0;var y=(useClient?el.clientHeight:el.offsetHeight)||0;return new Vector2(x,y);},getHiddenElementDimensions:function(el){var element=$(el);var els=element.style;var originalVisibility=els.visibility;var originalPosition=els.position;var originalDisplay=els.display;if(originalDisplay=='none'){els.visibility='hidden';els.position='absolute';els.display='block';}
var originalDimensions=Vector2.getElementDimensions(element);els.display=originalDisplay;els.position=originalPosition;els.visibility=originalVisibility;return originalDimensions;},getElementCompassPoint:function(el,which,useClient){which=which||Vector2.compass.southeast;var p=Vector2.getElementPosition(el);var d=Vector2.getElementDimensions(el,useClient);var c=Vector2.compass;switch(which){case c.east:return p.add(d.x,d.y*.5);case c.west:return p.add(0,d.y*.5);case c.north:return p.add(d.x*.5,0);case c.south:return p.add(d.x*.5,d.y);case c.center:return p.add(d.mul(.5));case c.northwest:return p;case c.northeast:return p.add(d.x,0);case c.southwest:return p.add(0,d.y);case c.southeast:return p.add(d);}
Util.error('Unknown compass point %s.',which);return p;},getViewportDimensions:function(){var x=(window&&window.innerWidth)||(document&&document.documentElement&&document.documentElement.clientWidth)||(document&&document.body&&document.body.clientWidth)||0;var y=(window&&window.innerHeight)||(document&&document.documentElement&&document.documentElement.clientHeight)||(document&&document.body&&document.body.clientHeight)||0;return new Vector2(x,y,'viewport');},getDocumentDimensions:function(){var wrapper=DOMScroll.getScrollWrapper();var x=(wrapper&&wrapper.scrollWidth)||(document&&document.documentElement&&document.documentElement.scrollWidth)||(document&&document.body&&document.body.scrollWidth)||0;var y=(wrapper&&wrapper.scrollHeight)||(document&&document.documentElement&&document.documentElement.scrollHeight)||(document&&document.body&&document.body.scrollHeight)||0;return new Vector2(x,y,'document');},scrollIntoView:function(el){var offsetParent=el.offsetParent;var rect=Rect(el);var position=rect.boundWithin(Rect(offsetParent)).getPositionVector();rect.getPositionVector().sub(position).scrollElementBy(offsetParent);}});var mouseX=function(e){return Vector2.getEventPosition(e).x;}
var mouseY=function(e){return Vector2.getEventPosition(e).y;}
var pageScrollX=function(){return Vector2.getScrollPosition().x;}
var pageScrollY=function(){return Vector2.getScrollPosition().y;}
var getViewportWidth=function(){return Vector2.getViewportDimensions().x;}
var getViewportHeight=function(){return Vector2.getViewportDimensions().y;}
var operaIgnoreScroll={'table':true,'inline-table':true,'inline':true};function elementX(obj){return Vector2.getElementPosition(obj,'document').x;}
function elementY(obj){return Vector2.getElementPosition(obj,'document').y;}

var DOMScroll={_scrollWrapper:0,usingScrollWrapper:function(){return env_get('use_scroll_wrapper');},getScrollWrapper:function(){if(DOMScroll._scrollWrapper===0){DOMScroll._scrollWrapper=DOMScroll.usingScrollWrapper()?ge('scroll_wrapper'):null;}
return DOMScroll._scrollWrapper;},getScrollRoot:function(){return DOMScroll.getScrollWrapper()||document.body;},SCROLL_CHANGE:'scroll_change',_hasScrollListeners:false,_isScrolled:null,registerScrollChangeHandler:function(cb){Arbiter.subscribe(DOMScroll.SCROLL_CHANGE,cb);if(!DOMScroll._hasScrollListeners){DOMScroll._hasScrollListeners=true;Event.listen(window,'resize',DOMScroll.updateScrollState);}},updateScrollState:function(){if(DOMScroll.usingScrollWrapper()){var wrapper=DOMScroll.getScrollWrapper();var offset_dim=Vector2.getElementDimensions(wrapper);var client_dim=Vector2.getElementDimensions(wrapper,true);var is_scrolled_x=(offset_dim.y>client_dim.y);var is_scrolled_y=(offset_dim.x>client_dim.x);}else{var viewport_dim=Vector2.getViewportDimensions();var document_dim=Vector2.getDocumentDimensions();var is_scrolled_x=(document_dim.x>viewport_dim.x);var is_scrolled_y=(document_dim.y>viewport_dim.y);}
is_scrolled_x+=0;is_scrolled_y+=0;var changed=(DOMScroll._isScrolled===null)||(is_scrolled_x!=DOMScroll._isScrolled.x)||(is_scrolled_y!=DOMScroll._isScrolled.y);if(changed){DOMScroll._isScrolled=new Vector2(is_scrolled_x,is_scrolled_y);var message={sender:DOMScroll,is_scrolled:DOMScroll.getScrollState()};Arbiter.inform(DOMScroll.SCROLL_CHANGE,message,Arbiter.BEHAVIOR_STATE);}},getScrollState:function(){if(DOMScroll._isScrolled===null){DOMScroll.updateScrollState();}
return DOMScroll._isScrolled;},_scrollbarSize:null,_initScrollbarSize:function(){var inner=$N('p');inner.style.width='100%';inner.style.height='200px';var outer=$N('div');outer.style.position='absolute';outer.style.top='0px';outer.style.left='0px';outer.style.visibility='hidden';outer.style.width='200px';outer.style.height='150px';outer.style.overflow='hidden';outer.appendChild(inner);document.body.appendChild(outer);var w1=inner.offsetWidth;outer.style.overflow='scroll';var w2=inner.offsetWidth;if(w1==w2){w2=outer.clientWidth;}
document.body.removeChild(outer);DOMScroll._scrollbarSize=w1-w2;if(DOMScroll._scrollbarSize<5){DOMScroll._scrollbarSize=15;}},getScrollbarSize:function(){if(DOMScroll._scrollbarSize===null){DOMScroll._initScrollbarSize();}
return DOMScroll._scrollbarSize;},scrollTo:function(v,use_animation,center){use_animation=use_animation||use_animation===undefined;if(!(v instanceof Vector2)){var x=Vector2.getScrollPosition().x;var y=Vector2.getElementPosition($(v)).y;y=y-Math.min(0,Math.max(Vector2.getViewportDimensions().y/3,100));v=new Vector2(x,y,'document');}
if(center){v.y-=Vector2.getViewportDimensions().y/2;}
v=v.convertTo('document');var wrapper=DOMScroll.getScrollWrapper();if(use_animation&&window.animation){var root=wrapper||document.body;animation(root).to('scrollTop',v.y).to('scrollLeft',v.x).ease(animation.ease.end).duration(750).go();}else if(wrapper){wrapper.scrollTop=v.y;wrapper.scrollLeft=v.x;}else if(window.scrollTo){window.scrollTo(v.x,v.y);}}};

function show(){for(var i=0;i<arguments.length;i++){var element=ge(arguments[i]);if(element&&element.style)element.style.display='';}
return false;}
function hide(){for(var i=0;i<arguments.length;i++){var element=ge(arguments[i]);if(element&&element.style)element.style.display='none';}
return false;}
function shown(el){el=ge(el);return(el.style.display!='none'&&!(el.style.display==''&&el.offsetWidth==0));}
function toggle(){for(var i=0;i<arguments.length;i++){var element=$(arguments[i]);element.style.display=CSS.getStyle(element,"display")=='block'?'none':'block';}
return false;}
function toggleDisplayNone(){for(var i=0;i<arguments.length;i++){var element=$(arguments[i]);if(shown(element)){hide(element);}else{show(element);}}
return false;}
function set_inner_html(obj,html,defer_js_execution){DOM.setContent(obj,HTML(html).setDeferred(!!defer_js_execution));}
function eval_global(js){if('string'!=typeof(js)){throw new Error('JS sent to eval_global is not a string.  Only strings '+'are permitted.');}else if(''==js){return;}
var obj=document.createElement('script');obj.type='text/javascript';try{obj.appendChild(document.createTextNode(js));}catch(e){obj.text=js;}
document.body.appendChild(obj);}
function expandCollapseInplace(topElemId,bottomElemId){topElem=ge(topElemId);bottomElem=ge(bottomElemId);if(!topElem||!bottomElem){return false;}
topElemHeight=topElem.clientHeight;if(shown(bottomElemId)){bottomElemHeight=bottomElem.clientHeight;newHeight=topElemHeight+bottomElemHeight;topElem.style.height=newHeight+'px';CSS.addClass(bottomElem,'hidden_elem');}else{CSS.removeClass(bottomElem,'hidden_elem');bottomElemHeight=bottomElem.clientHeight;newHeight=topElemHeight-bottomElemHeight;topElem.style.height=newHeight+'px';}
return true;}

var DOM={tryElement:function(id,no_augment){if(typeof(id)=='undefined'){Util.error('Tried to get "undefined" element!');return null;}
var obj;var aug=no_augment?identity:DOM._getNodeAugment();if(typeof(id)=='string'){if(id=='book'){Util.error('FB95: Trying to get #book element from JS. #book no'+'longer exists.');}
obj=document.getElementById(id);if(!(ua.ie()>=7&&ua.ie()<8)){return aug(obj);}
if(!obj){return null;}else if(typeof(obj.id)=='string'&&obj.id==id){return aug(obj);}else{var candidates=document.getElementsByName(id);if(!candidates||!candidates.length){return null;}
var maybe=[];for(var ii=0;ii<candidates.length;ii++){var c=candidates[ii];if(!c.id&&id){continue;}
if(typeof(c.id)=='string'&&c.id!=id){continue;}
maybe.push(candidates[ii]);}
if(!maybe.length){return null;}
return aug(maybe[0]);}}
return aug(id);},getElement:function(id,no_augment){var el=DOM.tryElement.apply(null,$A(arguments),no_augment);if(!el){Util.warn('Tried to get element %q, but it is not present in the page. (Use '+'ge() to test for the presence of an element.)',arguments[0]);}
return el;},find:function(element,selector_str){var elements=DOM.scry(element,selector_str);if(1!=elements.length){Util.error('DOM.find located %d elements that matched the selector `%s\''+'.  Please only use find when you are sure that 1 element '+'should match (like $).  Otherwise, please use DOM.scry.',elements.length,selector_str);return null;}
return elements[0];},scry:function(element,selector_str,no_augment){var selectors=selector_str.split(' ');var candidates=[element||document];for(var i=0;i<selectors.length;i++){if(candidates.length==0){break;}
if(selectors[i]==''){continue;}
var selector=selectors[i];var new_candidates=[];selector=selector.replace(/\./g,' .');selector=selector.replace(/\#/g,' #');selector=selector.replace(/\[/g,' [');var sub_selectors=selector.split(' ');var tag=sub_selectors[0]||'*';var id_selector=sub_selectors[1]&&sub_selectors[1].charAt(0)=='#';if(i==0&&tag=='*'&&Util.isDevelopmentEnvironment()&&!id_selector){Util.error('DOM.scry was called without a tag in the selector. You '+'should probably use DOM.scry like `%s` instead of `%s`.','div'+selector_str,selector_str);}
if(id_selector){var elem=ge(sub_selectors[1].slice(1),true);if(elem&&('*'==tag||elem.tagName.toLowerCase()==tag)){for(var iter=0;iter<candidates.length;iter++){if(document==candidates[iter]||DOM.contains(candidates[iter],elem)){new_candidates=[elem];break;}}}}else{var tag_candidates=[];var candidate_l=candidates.length;for(var ii=0;ii<candidate_l;ii++){var elements=candidates[ii].getElementsByTagName(tag);var elements_l=elements.length;for(var jj=0;jj<elements_l;jj++){tag_candidates.push(elements[jj]);}}
var is_class;var class_regexp;for(var sub_iter=1;sub_iter<sub_selectors.length;sub_iter++){var sub_selector=sub_selectors[sub_iter];if(sub_selector.charAt(0)=='.'){is_class=true;class_regexp=new RegExp('\\b'+sub_selector.substring(1)+'\\b');}else{is_class=false;}
for(var ii=0;ii<tag_candidates.length;ii++){var tag_candidate=tag_candidates[ii];if(!tag_candidate){continue;}
if(is_class){if(!class_regexp.test(tag_candidate.className)){delete tag_candidates[ii];}
continue;}else{var class_selector=sub_selector.slice(1,sub_selector.length-1);if(class_selector.indexOf('=')==-1){if(tag_candidate.getAttribute(class_selector)===null){delete tag_candidates[ii];continue;}}else{var parts=class_selector.split('=');var attr=parts[0];var value=parts[1];value=value.slice(1,value.length-1);if(tag_candidate.getAttribute(attr)!=value){delete tag_candidates[ii];continue;}}}}}
for(var ii=0;ii<tag_candidates.length;ii++){if(tag_candidates[ii]){new_candidates.push(tag_candidates[ii]);}}}
candidates=new_candidates;}
var list=null;if(!no_augment){var augment=DOM._getNodeAugment();for(var ii=0;ii<candidates.length;ii++){augment(candidates[ii]);}
list=new NodeList();list.push.apply(list,$A(candidates));}else{list=candidates;}
return list;},getBoxWidth:function(obj){var pL=parseInt(CSS.getStyle(obj,'paddingLeft'),10),pR=parseInt(CSS.getStyle(obj,'paddingRight'),10),bL=parseInt(CSS.getStyle(obj,'borderLeftWidth'),10),bR=parseInt(CSS.getStyle(obj,'borderRightWidth'),10);return obj.offsetWidth-(pL?pL:0)-(pR?pR:0)-(bL?bL:0)-
(bR?bR:0);},getBoxHeight:function(obj){var pT=parseInt(CSS.getStyle(obj,'paddingTop'),10),pB=parseInt(CSS.getStyle(obj,'paddingBottom'),10),bT=parseInt(CSS.getStyle(obj,'borderTopWidth'),10),bW=parseInt(CSS.getStyle(obj,'borderBottomWidth'),10);return obj.offsetHeight-(pT?pT:0)-(pB?pB:0)-(bT?bT:0)-
(bW?bW:0);},setText:function(el,text){if(ua.firefox()){el.textContent=text;}else{el.innerText=text;}},getText:function(el){if(!el){return'';}else if(el.nodeType==DOM.NODE_TYPES.TEXT){return el.data;}else{return ua.firefox()?el.textContent:el.innerText;}},_getSelectionPrivate:function(onlyTestForSupport){var result=onlyTestForSupport?false:'';if(document.selection&&document.selection.createRange&&document.selection.createRange.text){result=onlyTestForSupport?true:document.selection.createRange().text;}
else if(document.getSelection){result=onlyTestForSupport?true:document.getSelection();}
else if(window.getSelection){result=onlyTestForSupport?true:window.getSelection();}
return result;},getSelectionSupported:function(){return DOM._getSelectionPrivate(true);},getSelection:function(){return DOM._getSelectionPrivate(false);},create:function(element,attributes,children,no_augment){element=document.createElement(element);if(attributes){attributes=copy_properties({},attributes);if(attributes.style){copy_properties(element.style,attributes.style);delete attributes.style;}
for(var k in attributes){if(k.toLowerCase().indexOf('on')==0){Event.listen(element,k.substr(2),attributes[k]);delete attributes[k];}}
copy_properties(element,attributes);}
if(children!=undefined){DOM.setContent(element,children);}
var aug=no_augment?identity:DOM._getNodeAugment();return aug(element);},setID:function(element,id){element.id=id;},prependContent:function(parent,content){if(!DOM.isNode(parent)){throw new Error('DOM.prependContent: reference element is not a node');}
var append_fn=function(fragment){if(parent.firstChild){parent.insertBefore(fragment,parent.firstChild);}else{parent.appendChild(fragment);}};return DOM._addContent(content,append_fn,parent);},insertAfter:function(reference_element,content){if(!DOM.isNode(reference_element)||!reference_element.parentNode){throw new Error('DOM.insertAfter: reference element is not a node');}
var append_fn=function(fragment){if(reference_element.nextSibling){reference_element.parentNode.insertBefore(fragment,reference_element.nextSibling);}else{reference_element.parentNode.appendChild(fragment);}};return DOM._addContent(content,append_fn,reference_element.parentNode);},insertBefore:function(content,reference_element){if(!DOM.isNode(reference_element)||!reference_element.parentNode){throw new Error('DOM.insertBefore: reference element is not a node or '+'does not have a parent.');}
var append_fn=function(fragment){reference_element.parentNode.insertBefore(fragment,reference_element);};return DOM._addContent(content,append_fn,reference_element.parentNode);},setContent:function(el,content){if(!DOM.isNode(el)){throw new Error('DOM.setContent: reference element is not a node');}
DOM.empty(el);return DOM.appendContent(el,content,el);},appendContent:function(reference_element,content){if(!DOM.isNode(reference_element)){throw new Error('DOM.appendContent: reference element is not a node');}
var append_fn=function(fragment){reference_element.appendChild(fragment);};return DOM._addContent(content,append_fn,reference_element);},replace:function(reference_element,content){if(!DOM.isNode(reference_element)||!reference_element.parentNode){throw new Error('DOM.replace: reference element must be a node with a'+' parent');}
var append_fn=function(fragment){reference_element.parentNode.replaceChild(fragment,reference_element);};DOM._addContent(content,append_fn,reference_element.parentNode);},_gettingCaretPosition:false,getCaretPosition:function(element){element=$(element);if(!DOM.isNode(element,['input','textarea'])){return{start:undefined,end:undefined};}
if(!document.selection){return{start:element.selectionStart,end:element.selectionEnd};}
if(DOM.isNode(element,'input')){var range=document.selection.createRange();return{start:-range.moveStart('character',-element.value.length),end:-range.moveEnd('character',-element.value.length)};}else{if(!DOM._gettingCaretPosition){DOM._gettingCaretPosition=true;element.focus();DOM._gettingCaretPosition=false;}
var range=document.selection.createRange();var range2=range.duplicate();range2.moveToElementText(element);range2.setEndPoint('StartToEnd',range);var end=element.value.length-range2.text.length;range2.setEndPoint('StartToStart',range);return{start:element.value.length-range2.text.length,end:end};}},setCaretPosition:function(obj,start,end){obj=$(obj);if(document.selection){if(obj.tagName=='TEXTAREA'){var i=obj.value.indexOf("\r",0);while(i!=-1&&i<end){end--;if(i<start){start--;}
i=obj.value.indexOf("\r",i+1);}}
var range=obj.createTextRange();range.collapse(true);range.moveStart('character',start);if(end!=undefined){range.moveEnd('character',end-start);}
range.select();}else{obj.selectionStart=start;var sel_end=end==undefined?start:end;obj.selectionEnd=Math.min(sel_end,obj.value.length);obj.focus();}},remove:function(element){element=$(element,true);if(element.parentNode){element.parentNode.removeChild(element);if(ua.ie()<8){try{element.outerHTML='';}catch(ignored){}}}},empty:function(element){element=$(element,true);while(element.firstChild){DOM.remove(element.firstChild);}},contains:function(outer_obj,inner_obj){outer_obj=ge(outer_obj,true);inner_obj=ge(inner_obj,true);if(!outer_obj||!inner_obj){return false;}else if(outer_obj===inner_obj){return true;}else if(DOM.isNode(outer_obj,'#text')){return false;}else if(DOM.isNode(inner_obj,'#text')){return DOM.contains(outer_obj,inner_obj.parentNode);}else if(outer_obj.contains){return outer_obj.contains(inner_obj);}else if(outer_obj.compareDocumentPosition){return!!(outer_obj.compareDocumentPosition(inner_obj)&16);}else{return false;}},getRootElement:function(){var elem=null;if(window.Quickling&&Quickling.isActive()){elem=ge('content');}
return elem||DOMScroll.getScrollRoot();},isNode:function(o,of_type){if(typeof(Node)=='undefined'){Node=null;}
try{if(!o||!((Node!=undefined&&o instanceof Node)||o.nodeName)){return false;}}catch(ignored){return false;}
if(typeof(of_type)!=='undefined'){of_type=arrayize(of_type).map(function(i){return(i+'').toUpperCase()});var name,type;try{name=new String(o.nodeName).toUpperCase();type=o.nodeType;}catch(ignored){return false;}
for(var ii=0;ii<of_type.length;ii++){try{if(name==of_type[ii]||type==of_type[ii]){return true;}}catch(ignored){}}
return false;}
return true;},NODE_TYPES:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION_NODE:12},_addContent:function(content,append_fn,target_element){var item,elements=[],callbacks=[];var fragment=document.createDocumentFragment();if(!(content instanceof Array)){content=[content];}
for(var ii=0;ii<content.length;ii++){item=content[ii];if(item instanceof HTML){callbacks.push(item.getAction());var new_nodes=item.getNodes(),cloned_item;for(var jj=0;jj<new_nodes.length;jj++){cloned_item=(ua.safari()||(ua.ie()&&item.hasOptionElements()))?new_nodes[jj]:new_nodes[jj].cloneNode(true);elements.push(cloned_item);fragment.appendChild(cloned_item);}}else if(is_scalar(item)){var text=document.createTextNode(item);elements.push(text);fragment.appendChild(text);}else if(DOM.isNode(item)){elements.push(item);fragment.appendChild(item);}else if(item instanceof Array){Util.error('DOM._addContent: Nested arrays not supported');}else if(item!==null){Util.error('DOM._addContent: No way to set content %q.',item);}}
append_fn(fragment);for(var ii=0;ii<callbacks.length;ii++){callbacks[ii]();}
if(0<elements.length&&DOM.contains(document.documentElement,target_element)){Arbiter.inform('DOM.contentJustAdded',elements);Arbiter.inform.bind(Arbiter,'DOM.contentAdded',elements).defer();}
return elements;},_nodeAugment:null,_getNodeAugment:function(){if(!DOM._nodeAugment){var aug=new Augment('NodeAugment',function(){var bind1st=function(fn){return function(){return fn.apply(null,[this].concat($A(arguments)));}}
return{toString:function(){return'[Node]';},setContent:bind1st(DOM.setContent),prependContent:bind1st(DOM.prependContent),appendContent:bind1st(DOM.appendContent),replace:bind1st(DOM.replace),remove:bind1st(DOM.remove),empty:bind1st(DOM.empty),scry:bind1st(DOM.scry),find:bind1st(DOM.find),listen:bind1st(Event.listen),addClass:bind1st(CSS.addClass),removeClass:bind1st(CSS.removeClass),hasClass:bind1st(CSS.hasClass),toggleClass:bind1st(CSS.toggleClass),getStyle:bind1st(CSS.getStyle),setStyle:bind1st(CSS.setStyle)}});DOM._nodeAugment=aug.augmentObject.bind(aug);}
return DOM._nodeAugment;}};function NodeList(length){if(!NodeList._augmented){var augment=NodeList._getAugment();augment.augmentObject(NodeList.prototype);NodeList._augmented=true;}
List.call(this,length);}
NodeList.prototype=new List();copy_properties(NodeList.prototype,{toString:function(){return'[NodeList]';}});copy_properties(NodeList,{_augmented:false,_getAugment:function(){return new Augment('NodeListAugment',function(){var binditerator=function(iterator,fn){return function(){var args=$A(arguments);return this[iterator](function(value,idx,list){return fn.apply(null,[value].concat(args));});}}
var selfreduce=function(fn){return function(){fn.apply(this,$A(arguments));return this;}};var mergereduce=function(type,fn){return function(){var unmerged=fn.apply(this,$A(arguments));var result=new type();for(var ii=0;ii<unmerged.length;ii++){result.push.apply(result,$A(unmerged[ii]));}
return result;}}
return{scry:mergereduce(NodeList,binditerator('map',DOM.scry)),addClass:selfreduce(binditerator('map',CSS.addClass)),removeClass:selfreduce(binditerator('map',CSS.removeClass)),hasClass:binditerator('every',CSS.hasClass),toggleClass:selfreduce(binditerator('map',CSS.toggleClass)),getStyle:binditerator('map',CSS.getStyle),setStyle:selfreduce(binditerator('map',CSS.setStyle))};});}});function $N(element,attributes,content){if(typeof attributes!='object'||DOM.isNode(attributes)||attributes instanceof Array||attributes instanceof HTML){content=attributes;attributes=null;}
return DOM.create(element,attributes,content);}
var ge=DOM.tryElement;var $$=function _$$(rules){if(Util.isDevelopmentEnvironment()&&rules&&!/^[a-zA-Z1-6]+$/.test(rules)&&-1==rules.indexOf('#')){Util.warn('$$() has been called with `%s\' as a selector. You should not use only '+'class or attribute selectors from the document element, because these '+'can not be efficiently queried. Call DOM.find() or DOM.scry() with a '+'root element, or look at DOM.scry() for more information.',rules);}
return DOM.scry.apply(null,[document].concat($A(arguments)));}
var $=DOM.getElement;

function DOMControl(root){copy_properties(this,{root:root&&$(root),updating:false});if(root){root.getControl=identity.bind(null,this);}}
copy_properties(DOMControl.prototype,{getRoot:function(){return this.root;},beginUpdate:function(){if(this.updating){return false;}
this.updating=true;return true;},endUpdate:function(){this.updating=false;},update:function(e){if(!this.beginUpdate()){return this;}
this.onupdate(e);this.endUpdate();}});

function TextInputControl(textinput){this.parent.construct(this,textinput);copy_properties(this,{placeholderText:null,maxLength:this.getRoot().maxLength||null,radio:null,focused:false,interval:null,nativePlaceholder:false});var r=this.getRoot();if((String(r.type).toLowerCase()=='search')&&ua.safari()){this.nativePlaceholder=true;this.setPlaceholderText(r.getAttribute('placeholder'));}
addEventBase(r,'focus',this.onfocus.bind(this));addEventBase(r,'blur',this.onblur.bind(this));var up=this.update.bind(this);Event.listen(r,'keydown',up);Event.listen(r,'keyup',up);Event.listen(r,'keypress',up);this.setFocused(false);}
TextInputControl.extend('DOMControl');copy_properties(TextInputControl.prototype,{associateWithRadioButton:function(element){this.radio=element&&$(element);return this;},setMaxLength:function(maxlength){this.maxLength=maxlength;this.getRoot().maxLength=this.maxLength||null;return this;},getValue:function(){if(!this.focused&&this.getRoot().value==this.placeholderText){return null;}
return this.getRoot().value;},isEmpty:function(){var v=this.getValue();return(v===null||v=='');},setValue:function(value){this.getRoot().value=value;this.update();return this;},clear:function(){return this.setValue('');},isFocused:function(){return this.focused;},setFocused:function(focused){var empty=this.isEmpty();this.focused=focused;if(this.placeholderText&&!this.nativePlaceholder){var r=this.getRoot();var v=r.value;if(this.focused){CSS.removeClass(r,'DOMControl_placeholder');if(empty){this.clear();}}else if(empty){CSS.addClass(r,'DOMControl_placeholder');this.setValue(this.placeholderText);}}
this.update();return this;},setPlaceholderText:function(text){this.placeholderText=text;if(this.nativePlaceholder){this.getRoot().setAttribute('placeholder',text);}
return this.setFocused(this.isFocused());},getPlaceholderText:function(){return this.placeholderText;},onupdate:function(){if(this.radio){if(this.focused){this.radio.checked=true;}}
var root=this.getRoot();if(this.maxLength>0){if(root.value.length>this.maxLength){var value=root.value;var remove_length=value.length-this.maxLength;var pos_pair=DOM.getCaretPosition(root);var remove_behind_pos=pos_pair.end||value.length;root.value=value.substring(0,remove_behind_pos-remove_length)+
value.substring(remove_behind_pos);if(typeof pos_pair.start!='undefined'){DOM.setCaretPosition(root,pos_pair.start,Math.max(pos_pair.start,pos_pair.end-remove_length));}}}
this.setFocused(this.focused);},onfocus:function(){this.setFocused(true);if(this.interval){clearInterval(this.interval);}
this.interval=setInterval(this.update.bind(this),150);return this;},onblur:function(){this.setFocused(false);if(this.interval){this.interval=clearInterval(this.interval);}
return this;}});function placeholderSetup(id){if(!ge(id)){Util.warn('Setting up a placeholder for an element which does not exist: %q.',id);return;}
if(!$(id).getAttribute('placeholder')){Util.warn('Setting up a placeholder for an element with no placeholder text: %q.',id);return;}
return new TextInputControl($(id)).setPlaceholderText($(id).getAttribute('placeholder'));}

function TextAreaControl(textarea){copy_properties(this,{autogrow:false,shadow:null,originalHeight:null,metricsValue:null});this.parent.construct(this,textarea);};TextAreaControl.extend('TextInputControl');copy_properties(TextAreaControl.prototype,{setAutogrow:function(autogrow){this.autogrow=autogrow;this.refreshShadow();CSS.addClass(this.getRoot(),'DOMControl_autogrow');return this;},onupdate:function(){this.parent.onupdate();var r=this.getRoot();if(this.autogrow&&r.value!=this.metricsValue){this.metricsValue=r.value;if(CSS.getStyle(r,'fontSize')==""){return false;}
copy_properties(this.shadow.style,{fontSize:parseInt(CSS.getStyle(r,'fontSize'),10)+'px',fontFamily:CSS.getStyle(r,'fontFamily'),width:(Vector2.getElementDimensions(r).x-8)+'px'});DOM.setContent(this.shadow,HTML(htmlize(r.value)));if(this.isEmpty()&&this.originalHeight){r.style.height=this.originalHeight+'px';}else{r.style.height=Math.max(this.originalHeight,Vector2.getElementDimensions(this.shadow).y+15)+'px';}}},refreshShadow:function(){if(this.autogrow){this.shadow=$N('div',{className:'DOMControl_shadow'});DOM.getRootElement().appendChild(this.shadow);var r=this.getRoot();this.originalHeight=parseInt(CSS.getStyle(r,'height'))||Vector2.getElementDimensions(this.getRoot()).y;}else{if(this.shadow){DOM.remove(this.shadow);}
this.shadow=null;}}});function autogrow_textarea(element){element=$(element);if(!element._hascontrol){element._hascontrol=true;new TextAreaControl(element).setAutogrow(true);}}

var CSS={hasClass:function(element,className){element=$(element);if(element&&className&&element.className){return new RegExp('(?: |^)'+trim(className)+'(?: |$)').test(element.className);}
return false;},addClass:function(element,className){element=$(element);if(element&&className){if(!CSS.hasClass(element,className)){className=trim(className);if(element.className){element.className+=' '+className;}else{element.className=className;}}}
return this;},removeClass:function(element,className){element=$(element);if(element&&className&&element.className){className=trim(className);element.className=element.className.split(' ').filter(function(ii){if(ii!=className){return true;}}).join(' ');}
return this;},conditionClass:function(element,className,shouldShow){element=$(element);if(shouldShow){CSS.addClass(element,className);}else{CSS.removeClass(element,className);}},chooseClass:function(element,expression,trueClass,falseClass){CSS.conditionClass(element,trueClass,expression);CSS.conditionClass(element,falseClass,!expression);},setClass:function(element,className){element=$(element,true);element.className=className;return this;},toggleClass:function(element,className){element=$(element);if(CSS.hasClass(element,className)){return CSS.removeClass(element,className);}else{return CSS.addClass(element,className);}},setStyle:function(element,name,value){element.style[name]=value;return element;},getStyle:function(element,property){element=$(element);function hyphenate(property){return property.replace(/[A-Z]/g,function(match){return'-'+match.toLowerCase();});}
if(window.getComputedStyle){return window.getComputedStyle(element,null).getPropertyValue(hyphenate(property));}
if(document.defaultView&&document.defaultView.getComputedStyle){var computedStyle=document.defaultView.getComputedStyle(element,null);if(computedStyle)
return computedStyle.getPropertyValue(hyphenate(property));if(property=="display")
return"none";Util.error("Can't retrieve requested style %q due to a bug in Safari",property);}
if(element.currentStyle){return element.currentStyle[property];}
return element.style[property];},setOpacity:function(element,opacity){element=$(element);var opaque=(opacity==1);try{element.style.opacity=(opaque?'':''+opacity);}catch(ignored){}
try{element.style.filter=(opaque?'':'alpha(opacity='+(opacity*100)+')');}catch(ignored){}},getOpacity:function(element){element=$(element);var opacity=CSS.getStyle(element,'filter');var val=null;if(opacity&&(val=/(\d+(?:\.\d+)?)/.exec(opacity))){return parseFloat(val.pop())/100;}else if(opacity=CSS.getStyle(element,'opacity')){return parseFloat(opacity);}else{return 1.0;}},Cursor:{kGrabbable:'grabbable',kGrabbing:'grabbing',kEditable:'editable',set:function(element,name){element=$(element);element=element||document.body;switch(name){case CSS.Cursor.kEditable:name='text';break;case CSS.Cursor.kGrabbable:if(ua.firefox()){name='-moz-grab';}else{name='move';}
break;case CSS.Cursor.kGrabbing:if(ua.firefox()){name='-moz-grabbing';}else{name='move';}
break;}
element.style.cursor=name;}}};

function _ElementController(tag_name,event_name){copy_properties(this,{_controlled_tag_name:tag_name,_controlled_event_name:event_name,_handlers:[],_fallback_handlers:[]});var controller=this;this._onevent=function(e){return controller._handle.bind(controller)(this,$E(e));};}
copy_properties(_ElementController.prototype,{ALL:1,ALL_TARGETS:2,ALL_KEY_MODIFIERS:4,_ALL_UNUSED_1:8,_ALL_UNUSED_2:16,registerHandler:function(callback,filters,prepend){this._registerHandler(this._handlers,callback,filters,prepend);},registerFallbackHandler:function(callback,filters,prepend){this._registerHandler(this._fallback_handlers,callback,filters,prepend);},bindAll:function(root_element){if(!root_element||root_element.nodeType!=DOM.NODE_TYPES.ELEMENT){return;}
var tabconsole=ge('tabconsole');if(tabconsole){if((root_element.id&&root_element.id.substring(0,8)=='cacheobs')||DOM.contains(tabconsole,root_element)){return;}}
var should_insert=ua.firefox()&&!DOM.contains(document.documentElement,root_element);if(should_insert){var invisible_div=ge('an_invisible_div');if(!invisible_div){invisible_div=DOM.create('div',{id:'an_invisible_div'});invisible_div.style.display='none';DOMScroll.getScrollRoot().appendChild(invisible_div);}
invisible_div.appendChild(root_element);}
var element,event_name=this._controlled_event_name.substring(2),onevent=this._onevent,elements=root_element.getElementsByTagName(this._controlled_tag_name);try{for(var i=elements.length-1;i>=0;--i){element=elements[i];Event.listen(element,event_name,onevent,Event.Priority.LINK_CONTROLLER);}
if(DOM.isNode(root_element,this._controlled_tag_name)){Event.listen(root_element,event_name,onevent,Event.Priority.LINK_CONTROLLER);}}catch(ex){Util.error('Uncaught exception while reading %s handler for element with contents %h: %s',event_name,element.innerHTML,ex);}
if(should_insert){invisible_div.removeChild(root_element);}},_handle:function(element,event){var handlers=this.getHandlers();for(var i=0;i<handlers.length;++i){var callback=handlers[i].callback;var filters=handlers[i].filters;try{if(this._filter(filters,element,event)){var abort=callback(element,event);if(abort===false){return Event.kill(event);}}}catch(exception){Util.error('Uncaught exception in %s handler: %x',this._controlled_event_name,exception);}}},getHandlers:function(){return this._handlers.concat(this._fallback_handlers);},_init:function(){if(this._initialized){return;}
this._initialized=true;onloadRegister(function(){this.bindAll(document.body);Arbiter.subscribe('DOM.contentAdded',function(type,data){for(var ii=0;ii<data.length;ii++){this.bindAll(data[ii]);}}.bind(this),Arbiter.SUBSCRIBE_NEW);}.bind(this));},_registerHandler:function(handler_array,callback,filters,prepend){this._init();var args={callback:callback,filters:filters||0};if(prepend){handler_array.unshift(args);}else{handler_array.push(args);}},_filter:function(filters,element,event){if(filters&this.ALL){return true;}
if(!(filters&this.ALL_TARGETS)){if(element.target){return false;}}
if(!(filters&this.ALL_KEY_MODIFIERS)){if(event&&$E(event).getModifiers().any){return false;}}
return true;}});var LinkController=new _ElementController('a','onclick');copy_properties(LinkController,{ALL_PROTOCOLS:LinkController._ALL_UNUSED_1,ALL_BUTTONS:LinkController._ALL_UNUSED_2,_filter:function(filters,element,event){if(!_ElementController.prototype._filter.apply(this,arguments)){return false;}
var href=element.getAttribute('href');if(!href||href=='#'){return false;}
if(!(filters&this.ALL_PROTOCOLS)){if(!LinkController.usesWebProtocol(element)){return false;}}
if(!(filters&this.ALL_BUTTONS)){if(ua.safari()>=525&&event&&event.which!=1){return false;}}
return true;},getProtocol:function(link){var href,protocol;return(href=link.getAttribute('href'))&&(protocol=href.match(/^(\w+):/))&&protocol[1].toLowerCase();},usesWebProtocol:function(link){var protocol=LinkController.getProtocol(link);return!protocol||protocol=='http'||protocol=='https';}});var FormController=new _ElementController('form','onsubmit');

function AsyncSignal(uri,data){this.data=data||{};this.uri=uri;this.handler=null;}
AsyncSignal.prototype.setHandler=function(h){this.handler=h;return this;}
AsyncSignal.prototype.send=function(){var h=this.handler,d=this.data,u=this.uri,s=[],i=new Image(),a=document.getElementById('post_form_id');d.asyncSignal=Math.floor(Math.random()*10000)+1;if(a){d.post_form_id=a.value;}
for(var k in d){s.push(encodeURIComponent(k)+'='+encodeURIComponent(d[k]));}
if(u.indexOf('?')==-1){u+='?';}
u+=s.join('&');if(h){i.onload=i.onerror=(function(i,h){return function(){h((i.height==1));}})(i,h);}
i.src=u;return this;}

function setCookie(cookieName,cookieValue,nMilliSecs){if(nMilliSecs){var thisMoment=new Date();var expire=new Date();expire.setTime(thisMoment.getTime()+nMilliSecs);}
document.cookie=cookieName+"="+encodeURIComponent(cookieValue)+"; "+
(nMilliSecs?"expires="+expire.toGMTString()+"; ":"")+"path=/; domain=."+
window.location.hostname.replace(/^.*(facebook\..*)$/i,'$1');}
function clearCookie(cookieName){document.cookie=cookieName+"=; expires=Mon, 26 Jul 1997 05:00:00 GMT; "+"path=/; domain=."+
window.location.hostname.replace(/^.*(facebook\..*)$/i,'$1');}
function getCookie(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0){return decodeURIComponent(c.substring(nameEQ.length,c.length))}}
return null;}
function transferCookieToComTld(cookieName,handler){handler=handler||bagofholding;var cookieNames;if(cookieName instanceof Array){cookieNames=cookieName;}else{cookieNames=[cookieName];}
var data={};for(var i=0;i<cookieNames.length;i++){var value=getCookie(cookieNames[i]);if(value){data[cookieNames[i]]=value;}}
var domain=window.location.hostname.replace(/facebook.*/,'facebook.com');var uri='http://'+domain+'/common/cookie_transfer.php';new AsyncSignal(uri,data).setHandler(handler).send();}

function gen_unique(){return++gen_unique._counter;}
gen_unique._counter=0;function create_hidden_input(name,value){return $N('input',{name:name,id:name,value:value,type:'hidden'});}
var KEYS={BACKSPACE:8,TAB:9,RETURN:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46};var KeyCodes={Up:63232,Down:63233,Left:63234,Right:63235};function getTableRowShownDisplayProperty(){if(ua.ie()<8){return'inline';}else{return'table-row';}}
function showTableRow()
{for(var i=0;i<arguments.length;i++){var element=ge(arguments[i]);if(element&&element.style)element.style.display=getTableRowShownDisplayProperty();}
return false;}
function getParentRow(el){el=ge(el);while(el.tagName&&el.tagName!="TR"){el=el.parentNode;}
return el;}
function adjustImage(obj){var block=obj.parentNode;while(CSS.getStyle(block,'display')!='block'&&block.parentNode){block=block.parentNode;}
var width=block.offsetWidth;if(obj.offsetWidth>width){try{if(ua.ie()<8){var img_div=document.createElement('div');img_div.style.filter='progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+obj.src.replace('"','%22')+'", sizingMethod="scale")';img_div.style.width=width+'px';img_div.style.height=Math.floor(((width/obj.offsetWidth)*obj.offsetHeight))+'px';if(obj.parentNode.tagName=='A'){img_div.style.cursor='pointer';}
obj.parentNode.insertBefore(img_div,obj);obj.parentNode.removeChild(obj);}else{throw 1;}}catch(e){obj.style.width=width+'px';}}
CSS.removeClass(obj,'img_loading');}
function imageConstrainSize(src,maxX,maxY,placeholderid){var image=new Image();image.onload=function(){if(image.width>0&&image.height>0){var width=image.width;var height=image.height;if(width>maxX||height>maxY){var desired_ratio=maxY/maxX;var actual_ratio=height/width;if(actual_ratio>desired_ratio){width=width*(maxY/height);height=maxY;}else{height=height*(maxX/width);width=maxX;}}
var placeholder=ge(placeholderid);if(placeholder){var newimage=document.createElement('img');newimage.src=src;newimage.width=width;newimage.height=height;placeholder.parentNode.insertBefore(newimage,placeholder);placeholder.parentNode.removeChild(placeholder);}}}
image.src=src;}
function require_password_confirmation(onsuccess,oncancel){if((!getCookie('sid')||getCookie('sid')=='0')||getCookie('pk')){onsuccess();return;}
require_password_confirmation.onsuccess=onsuccess;require_password_confirmation.oncancel=oncancel;(new pop_dialog()).show_ajax_dialog('/ajax/password_check_dialog.php');}
function search_validate(search_input_id){var search_input=$(search_input_id);if(search_input.value!=""&&search_input.value!=search_input.getAttribute('placeholder')){return true;}else{search_input.focus();return false;}}
function abTest(data,inline)
{AsyncRequest.pingURI('/ajax/abtest.php',{data:data,"post_form_id":null},true);if(!inline){return true;}}
function ac(metadata)
{new AsyncSignal('/ajax/ac.php',{'meta':metadata}).send();return true;}
function alc(metadata)
{AsyncRequest.pingURI('/ajax/alc.php',{'meta':metadata},true);return true;}
function scribe_log(category,message){AsyncRequest.pingURI('/ajax/scribe_log.php',{'category':category,'message':message,'post_form_id':null},true);}
function image_has_loaded(obj){try{if((obj.mimeType!=null&&obj.complete&&obj.mimeType!='')||(obj.naturalHeight!=null&&obj.complete&&obj.naturalHeight!=0)){return true;}else if(ua.safari()<3){var new_image=new Image();new_image.src=obj.src;if(new_image.complete==true){return true;}
delete new_image;}}catch(exception){return true;}}
function image_has_failed(obj){if((obj.complete==null&&obj.width==20&&obj.height==20)||(obj.mimeType!=null&&obj.complete&&obj.mimeType=='')||(obj.naturalHeight!=null&&obj.complete&&obj.naturalHeight==0)){return true;}}
function show_search_profile(user_id){var async=new AsyncRequest().setURI('/ajax/search_profile.php').setData({id:user_id}).setMethod('GET').setReadOnly(true);new Dialog().setAsync(async).setButtons(Dialog.CLOSE).setContentWidth(490).show();}
function _search_profile_link_handler(link){var uri=new URI(link.href);if(uri.getPath()=='/s.php'){var query=uri.getQueryData();if(query.k==100000080){show_search_profile(query.id);return false;}}}
onloadRegister(function(){LinkController.registerHandler(_search_profile_link_handler);});function warn_if_unsaved(form_id){var form=ge(form_id);if(!form){Util.error("warn_if_unsaved couldn't find form in order to save its "
+"original state.  This is probably because you called "
+"render_start_form_with_unsaved_warning to render a form, "
+"but then didn't echo it into page.  To get around this, you "
+"can call render_start_form, and then call warn_if_unsaved "
+"yourself once you've caused the form to appear.");return;}
if(!_unsaved_forms_to_check_for){_unsaved_forms_to_check_for={};LinkController.registerHandler(_check_for_unsaved_forms);}
form.original_state=serialize_form(form);_unsaved_forms_to_check_for[form_id]=true;}
function _check_for_unsaved_forms(link){for(var form_id in _unsaved_forms_to_check_for){var form=ge(form_id);if(form&&form.original_state&&!are_equal(form.original_state,serialize_form(form))){var href=link.href;var submit=_find_first_submit_button(form);var buttons=[];if(submit){buttons.push({name:'save',label:_tx("Save"),handler:function(){submit.click();}});}
buttons.push({name:'dont_save',label:_tx("Don't Save"),className:'inputaux',handler:function(){window.location.href=href;}});buttons.push(Dialog.CANCEL);new Dialog().setTitle(_tx("Unsaved Changes")).setBody(_tx("Some of your changes have not been saved.  Would you like to save your changes now?")).setButtons(buttons).setModal().show();return false;}}}
function _find_first_submit_button(root_element){var inputs=root_element.getElementsByTagName('input');for(var i=0;i<inputs.length;++i){if(inputs[i].type.toUpperCase()=='SUBMIT'){return inputs[i];}}
return null;}
_unsaved_forms_to_check_for=undefined;function textLimit(ta,count){var text=ge(ta);if(text.value.length>count){text.value=text.value.substring(0,count);if(arguments.length>2){$(arguments[2]).style.display='block';}}}
function textLimitStrict(text_id,limit,message_id,count_id,submit_id){var text=ge(text_id);if(text){var len=text.value.length;var diff=len-limit;if(diff>0){if(diff>25000){text.value=text.value.substring(0,limit+25000);diff=25000;}
$(message_id).style.display='block';$(count_id).innerHTML=diff;$(submit_id).disabled=true;}else if(len==0){$(message_id).style.display='none';$(submit_id).disabled=true;$(count_id).innerHTML=1;}else{if($(count_id).innerHTML!=0){$(count_id).innerHTML=0;$(message_id).style.display='none';$(submit_id).disabled=false;}}}}
function city_selector_onfound(input,obj){input.value=obj?obj.i:-1;}
function city_selector_onselect(success){if(window[success]){window[success]();}}
_bootstrapEventHandlers();if(navigator&&navigator.userAgent&&document.domain.toLowerCase().match(/(^|\.)facebook\..*/)&&!(parseInt((/Gecko\/([0-9]+)/.exec(navigator.userAgent)||[]).pop())<=20060508)){document.domain=window.location.hostname.replace(/^.*(facebook\..*)$/i,'$1');}

function getRadioFormValue(obj){for(i=0;i<obj.length;i++){if(obj[i].checked){return obj[i].value;}}
return null;}
function getElementsByTagNames(list,obj){if(!obj)var obj=document;var tagNames=list.split(',');var resultArray=new Array();for(var i=0;i<tagNames.length;i++){var tags=obj.getElementsByTagName(tagNames[i]);for(var j=0;j<tags.length;j++){resultArray.push(tags[j]);}}
var testNode=resultArray[0];if(!testNode)return[];if(testNode.sourceIndex){resultArray.sort(function(a,b){return a.sourceIndex-b.sourceIndex;});}
else if(testNode.compareDocumentPosition){resultArray.sort(function(a,b){return 3-(a.compareDocumentPosition(b)&6);});}
return resultArray;}
function get_all_form_inputs(root_element){if(!root_element){root_element=document;}
return getElementsByTagNames('input,select,textarea,button',root_element);}
function get_form_select_value(select){return select.options[select.selectedIndex].value;}
function set_form_select_value(select,value){for(var i=0;i<select.options.length;++i){if(select.options[i].value==value){select.selectedIndex=i;break;}}}
function get_form_attr(form,attr){var val=form[attr];if(typeof val=='object'&&val.tagName=='INPUT'){var pn=val.parentNode,ns=val.nextSibling,node=val;pn.removeChild(node);val=form[attr];ns?pn.insertBefore(node,ns):pn.appendChild(node);}
return val;}
function serialize_form_helper(data,name,value){var match=/([^\]]+)\[([^\]]*)\](.*)/.exec(name);if(match){data[match[1]]=data[match[1]]||{};if(match[2]==''){var i=0;while(data[match[1]][i]!=undefined){i++;}}else{i=match[2];}
if(match[3]==''){data[match[1]][i]=value;}else{serialize_form_helper(data[match[1]],i.concat(match[3]),value);}}else{data[name]=value;}}
function serialize_form_fix(data){var keys=[];for(var i in data){if(data instanceof Object){data[i]=serialize_form_fix(data[i]);}
keys.push(i);}
var j=0,is_array=true;keys.sort().each(function(i){if(i!=j++){is_array=false;}});if(is_array){var ret={};keys.each(function(i){ret[i]=data[i];});return ret;}else{return data;}}
function serialize_form(obj){var data={};var elements=obj.tagName=='FORM'?obj.elements:get_all_form_inputs(obj);for(var i=elements.length-1;i>=0;i--){if(elements[i].name&&!elements[i].disabled){if(!elements[i].type||((elements[i].type=='radio'||elements[i].type=='checkbox')&&elements[i].checked)||elements[i].type=='text'||elements[i].type=='password'||elements[i].type=='hidden'||elements[i].tagName=='TEXTAREA'||elements[i].tagName=='SELECT'){serialize_form_helper(data,elements[i].name,elements[i].value);}}}
return serialize_form_fix(data);}
function do_post(uri){var pieces=/(^([^?])+)\??(.*)$/.exec(uri.toString());var form=document.createElement('form');form.action=pieces[1];form.method='post';form.style.display='none';var sparam=/([\w]+)(?:=([^&]+)|&|$)/g;var param=null;if(ge('post_form_id')){pieces[3]+='&post_form_id='+$('post_form_id').value;}
while(param=sparam.exec(pieces[3])){var input=document.createElement('input');input.type='hidden';input.name=decodeURIComponent(param[1]);input.value=decodeURIComponent(param[2]);form.appendChild(input);}
DOM.getRootElement().appendChild(form);form.submit();return false;}
function dynamic_post(uri,params,target){var form=document.createElement('form');form.action=uri.toString();form.method='POST';form.style.display='none';if(target){form.target=target;}
if(ge('post_form_id')){params['post_form_id']=$('post_form_id').value;}
params['post_form_id_source']='dynamic_post';params['next']=htmlspecialchars(document.location.href);create_hidden_inputs(params,form);DOM.getRootElement().appendChild(form);form.submit();return false;}
function create_hidden_inputs(params,form){var inputs={},input;for(var param in params){if(typeof params[param]=='object'){if(params[param]instanceof Array){for(var i=0;i<params[param].length;i++){var v=params[param][i];var n=param+'['+i+']';input=$N('input',{type:'hidden',name:n,value:v});inputs[n]=input;form.appendChild(input);}}else{for(var k in params[param]){var v=params[param][k];var n=param+'['+k+']';input=$N('input',{type:'hidden',name:n,value:v});inputs[n]=input;form.appendChild(input);}}}else{input=$N('input',{type:'hidden',name:param,value:params[param]});form.appendChild(input);inputs[param]=input;}}
return inputs;}

function URI(uri){if(uri===window){Util.error('what the hell are you doing');return;}
if(this===window){return new URI(uri||window.location.href);}
this.parse(uri||'');}
copy_properties(URI,{getRequestURI:function(respect_page_transitions){respect_page_transitions=respect_page_transitions===undefined||respect_page_transitions;if(respect_page_transitions&&window.PageTransitions&&PageTransitions.isInitialized()){return PageTransitions.getCurrentURI().getQualifiedURI();}else{return new URI(window.location.href);}},getMostRecentURI:function(){if(window.PageTransitions&&PageTransitions.isInitialized()){return PageTransitions.getMostRecentURI().getQualifiedURI();}else{return new URI(window.location.href);}},expression:/(((\w+):\/\/)([^\/:]*)(:(\d+))?)?([^#?]*)(\?([^#]*))?(#(.*))?/,arrayQueryExpression:/^(\w+)((?:\[\w*\])+)=?(.*)/,explodeQuery:function(q){if(!q){return{};}
var result={};q=q.replace(/%5B/ig,'[').replace(/%5D/ig,']');q=q.split('&');for(var ii=0,length=q.length;ii<length;ii++){var match=q[ii].match(URI.arrayQueryExpression);if(!match){var term=q[ii].split('=');result[URI.decodeComponent(term[0])]=term[1]===undefined?null:URI.decodeComponent(term[1]);}else{var indices=match[2].split(/\]\[|\[|\]/).slice(0,-1);var name=match[1];var value=URI.decodeComponent(match[3]||'');indices[0]=name;var resultNode=result;for(var i=0;i<indices.length-1;i++){if(indices[i]){if(resultNode[indices[i]]===undefined){if(indices[i+1]&&!indices[i+1].match(/\d+$/)){resultNode[indices[i]]={};}else{resultNode[indices[i]]=[];}}
resultNode=resultNode[indices[i]];}else{if(indices[i+1]&&!indices[i+1].match(/\d+$/)){resultNode.push({});}else{resultNode.push([]);}
resultNode=resultNode[resultNode.length-1];}}
if(resultNode instanceof Array&&indices[indices.length-1]==''){resultNode.push(value);}else{resultNode[indices[indices.length-1]]=value;}}}
return result;},implodeQuery:function(obj,name){name=name||'';var r=[];if(obj===null){r.push(URI.encodeComponent(name));}else if(obj instanceof Array){for(var ii=0;ii<obj.length;++ii){try{if(obj[ii]!==undefined){r.push(URI.implodeQuery(obj[ii],name?(name+'['+ii+']'):ii));}}catch(ignored){}}}else if(typeof(obj)=='object'){if(DOM.isNode(obj)){r.push('{node}');}else{for(var k in obj){try{if(obj[k]!==undefined){r.push(URI.implodeQuery(obj[k],name?(name+'['+k+']'):k));}}catch(ignored){}}}}else{r.push(URI.encodeComponent(name)+'='+URI.encodeComponent(obj));}
return r.join('&');},encodeComponent:function(raw){var parts=String(raw).split(/([\[\]])/);for(var i=0,length=parts.length;i<length;i+=2){parts[i]=window.encodeURIComponent(parts[i]);}
return parts.join('');},decodeComponent:function(encoded_s){return window.decodeURIComponent(encoded_s.replace(/\+/g,' '));}});copy_properties(URI.prototype,{parse:function(uri){var m=uri.toString().match(URI.expression);copy_properties(this,{protocol:m[3]||'',domain:m[4]||'',port:m[6]||'',path:m[7]||'',query_s:m[9]||'',fragment:m[11]||''});return this;},setProtocol:function(p){this.protocol=p;return this;},getProtocol:function(){return this.protocol;},setQueryData:function(o){this.query_s=URI.implodeQuery(o);return this;},addQueryData:function(o){return this.setQueryData(copy_properties(this.getQueryData(),o));},removeQueryData:function(keys){if(!(keys instanceof Array)){keys=[keys];}
var query=this.getQueryData();for(var i=0,length=keys.length;i<length;++i){delete query[keys[i]];}
return this.setQueryData(query);},getQueryData:function(){return URI.explodeQuery(this.query_s);},setFragment:function(f){this.fragment=f;return this;},getFragment:function(){return this.fragment;},setDomain:function(d){this.domain=d;return this;},getDomain:function(){return this.domain;},setPort:function(p){this.port=p;return this;},getPort:function(){return this.port;},setPath:function(p){this.path=p;return this;},getPath:function(){return this.path.replace(/^\/+/,'/');},toString:function(){var r='';this.protocol&&(r+=this.protocol+'://');this.domain&&(r+=this.domain);this.port&&(r+=':'+this.port);if(this.domain&&!this.path){r+='/';}
this.path&&(r+=this.path);this.query_s&&(r+='?'+this.query_s);this.fragment&&(r+='#'+this.fragment);return r;},valueOf:function(){return this.toString();},isFacebookURI:function(){if(!URI._facebookURIRegex){URI._facebookURIRegex=new RegExp('(^|\.)facebook\.('+env_get('tlds').join('|')+')([^.]*)$','i');}
return!this.domain||URI._facebookURIRegex.test(this.domain);},getRegisteredDomain:function(){if(!this.domain){return'';}
if(!this.isFacebookURI()){return null;}
var parts=this.domain.split('.');var index=parts.indexOf('facebook');return parts.slice(index).join('.');},getTld:function(true_tld){if(!this.domain){return'';}
var parts=this.domain.split('.');var tld=parts[parts.length-1];if(true_tld){return tld;}
var launched_tlds=env_get('tlds');if(launched_tlds.indexOf(tld)==-1){for(var i=0;i<launched_tlds.length;++i){var launched_tld=launched_tlds[i];if(new RegExp(launched_tld+'$').test(this.domain)){tld=launched_tld;break;}}}
return tld;},getUnqualifiedURI:function(){return new URI(this).setProtocol(null).setDomain(null).setPort(null);},getQualifiedURI:function(){var uri=new URI(this);if(!uri.getDomain()){var current=URI();uri.setProtocol(current.getProtocol()).setDomain(current.getDomain()).setPort(current.getPort());}
return uri;},isSameOrigin:function(asThisURI){var uri=asThisURI||window.location.href;if(!(uri instanceof URI)){uri=new URI(uri.toString());}
if(this.getProtocol()&&this.getProtocol()!=uri.getProtocol()){return false;}
if(this.getDomain()&&this.getDomain()!=uri.getDomain()){return false;}
return true;},coerceToSameOrigin:function(targetURI){var uri=targetURI||window.location.href;if(!(uri instanceof URI)){uri=new URI(uri.toString());}
if(this.isSameOrigin(uri)){return true;}
if(this.getProtocol()!=uri.getProtocol()){return false;}
var dst=uri.getDomain().split('.');var src=this.getDomain().split('.');var dst_part;if(uri.isFacebookURI()){while((dst_part=dst.pop())&&dst_part==src.pop()){if(dst_part=='facebook'){this.setDomain(uri.getDomain());return true;}}}
return false;},go:function(){goURI(this);},setSubdomain:function(subdomain){var uri=new URI(this).getQualifiedURI();var domains=uri.getDomain().split('.');if(domains.length<=2){domains.unshift(subdomain);}else{domains[0]=subdomain;}
return uri.setDomain(domains.join('.'));},getSubdomain:function(){if(!this.getDomain()){return'';}
var domains=this.getDomain().split('.');if(domains.length<=2){return'';}else{return domains[0];}}});

function Nectar(){}
copy_properties(Nectar,{linkHandler:function(ret_val,link){var nctr_params=Nectar.getNectarParams();nctr_params['ia']=true;nctr_params['url']=link.href;var uri='/ajax/nectar.php'+'?'
+URI.implodeQuery({'nctr':nctr_params})+'&';new AsyncSignal(uri,{}).send();return ret_val;},getNectarParams:function(){var nctr_params={};var impid=env_get('nctrlid');if(impid){nctr_params['id']=impid;}
var navimpid=env_get('nctrlnid');if(navimpid){nctr_params['nid']=navimpid;}
if(impid||navimpid){nctr_params['ct']=(new Date()).getTime();}
return nctr_params;}});onafterloadRegister(function(){PageTransitions.registerHandler(bind(null,Nectar.linkHandler,false),true);LinkController.registerFallbackHandler(bind(null,Nectar.linkHandler,true),LinkController.ALL_TARGETS|LinkController.ALL_KEY_MODIFIERS);});

function AsyncRequest(uri){var dispatchResponse=bind(this,function(asyncResponse){if(!this._asyncResponse){this._asyncResponse=asyncResponse;}
try{this.clearStatusIndicator();if(this.initialHandler(asyncResponse)!==false){if(this.handler){try{this.handler(asyncResponse);}catch(exception){this.finallyHandler(asyncResponse);throw exception;}}
this.finallyHandler(asyncResponse);if(asyncResponse.instrument){Env.t_domcontent=(new Date()).getTime();Env.t_layout=Env.t_domcontent;var force_layout=document&&DOMScroll.getScrollRoot()&&DOMScroll.getScrollRoot().offsetWidth;Env.t_onload=(new Date()).getTime();Env.t_willonloadhooks=Env.t_onload;}
var onload=asyncResponse.onload;if(onload){for(var ii=0;ii<onload.length;ii++){try{eval('(function() {'+onload[ii]+'})();');}catch(exception){Util.error('An onload hook in response to a request to to URI %q threw an '+'exception: %x. (This is not a problem with AsyncRequest, it is '+'a problem with the registered hook.)',this.getURI(),exception);}}}
if(asyncResponse.instrument){Env.t_doneonloadhooks=(new Date()).getTime();}
var onafterload=asyncResponse.onafterload;if(onafterload){for(var ii=0;ii<onafterload.length;ii++){try{eval('(function() {'+onafterload[ii]+'})();');}catch(exception){Util.error('An onafterload hook in response to a request to to URI %q threw an '+'exception: %x. (This is not a problem with AsyncRequest, it is '+'a problem with the registered hook.)',this.getURI(),exception);}}}
var invalidate_cache=asyncResponse.invalidate_cache;if(invalidate_cache&&invalidate_cache.length){Arbiter.inform(Arbiter.PAGECACHE_INVALIDATE,invalidate_cache);}}
if(asyncResponse.cacheObservation&&typeof(TabConsoleCacheobserver)!='undefined'&&TabConsoleCacheobserver.instance){TabConsoleCacheobserver.getInstance().addAsyncObservation(asyncResponse.cacheObservation);}}catch(exception){Util.error('The user supplied handler function for an AsyncRequest to URI %q '+'threw an exception: %x. (This is not a problem with AsyncRequest, it '+'is a problem with the callback, which failed to catch the exception.)',this.getURI(),exception);}});var replayResponse=bind(this,function(){if(!this._asyncResponse){Util.warn('Unable to replay AsyncResponse for an AsyncRequest to '+this.getURI());return;}
Util.log('replaying the response for '+this.getURI());this._asyncResponse.setReplay(true);dispatchResponse(this._asyncResponse);});var dispatchErrorResponse=bind(this,function(asyncResponse,isTransport){try{this.clearStatusIndicator();var async_error=asyncResponse.getError();if(async_error==kError_Async_InternalCaptchaRequired){this._captchaHtml=asyncResponse.getPayload().captcha_html;this._displayCaptcha();}else if(async_error==kError_Async_ConfirmationRequired){var payload=asyncResponse.getPayload();this.requireConfirmation(payload.confirmation_message,payload.confirmation_title,payload.confirmation_button);this._displayConfirmation();}else if(this.initialHandler(asyncResponse)!==false){try{if(isTransport){this.transportErrorHandler(asyncResponse);}else{this.errorHandler(asyncResponse);}}catch(exception){this.finallyHandler(asyncResponse);throw exception;}
this.finallyHandler(asyncResponse);}}catch(exception){Util.error('Async error handler threw an exception for URI %q, when processing a '+'%d error: %x.',this.getURI(),asyncResponse.getError(),exception);}});var _interpretTransportResponse=bind(this,function(){if(this.getOption('suppressEvaluation')){var r=new AsyncResponse();r.payload=this.transport;return{asyncResponse:r};}
var shield="for (;;);";var shieldlen=shield.length;if(this.transport.responseText.length<=shieldlen){var kind=this.transport.responseText.length?('a '+this.transport.responseText.length+' byte'):'an empty';return{transportError:sprintf('An error occurred when making an AsyncRequest to %q. '+'The server returned '+kind+' response.',this.getURI())};}
var text=this.transport.responseText;var offset=0;while(text.charAt(offset)==" "||text.charAt(offset)=="\n"){offset++;}
if(offset&&text.substring(offset,offset+shieldlen)==shield){Util.error('Response for request to endpoint %q seems to be valid, but was '+'preceeded by whitespace. (This probably means that someone '+'committed whitespace in a header file.)',this.getURI());}
var safeResponse=text.substring(offset+shieldlen);var response;try{eval('response = ('+safeResponse+')');}catch(exception){return{transportError:sprintf('Evaluation failed for <a href="javascript:aiert(%e);">'+'response from %q</a>: %x.',this.transport.responseText,this.getURI(),exception)};}
return interpretResponse(response);});var interpretResponse=bind(this,function(response){if(response.redirect){return{redirect:response.redirect};}
var r=new AsyncResponse();if(typeof(response.payload)=='undefined'||typeof(response.error)=='undefined'||typeof(response.errorDescription)=='undefined'||typeof(response.errorSummary)=='undefined'||typeof(response.errorIsWarning)=='undefined'){Util.warn('AsyncRequest to endpoint %q returned a JSON response, but it '+'is not properly formatted. The endpoint needs to provide a '+'response including both error and payload information; use '+'the AsyncResponse PHP class to do this easily.',this.getURI());r.payload=response;}else{copy_properties(r,response);}
return{asyncResponse:r};});var invokeResponseHandler=bind(this,function(interp){if(typeof(interp.redirect)!='undefined'){(function(){this.setURI(interp.redirect).send();}).bind(this).defer();return;}
if(this.handler||this.errorHandler||this.transportErrorHandler){if(typeof(interp.transportError)!='undefined'){var r=new AsyncResponse();var errorDescription=Util.isDevelopmentEnvironment()?interp.transportError:_tx("Something went wrong. We're working on getting this fixed as soon as we can. You may be able to try again.");copy_properties(r,{error:1000,errorSummary:_tx("Oops"),errorDescription:errorDescription});if(this.transportErrorHandler){dispatchErrorResponse(r,true);}else{Util.error('Something bad happened; provide a transport error handler for '+'complete details.');}
return;}
var r=interp.asyncResponse;document.cookie="cvr_tx=;"
+" expires=Mon, 26 Jul 1997 05:00:00 GMT;"
+" path=/;"
+" domain=.facebook.com";if(r.instrument){if(window.___t_measuring){r.instrument=false;}else{window.___t_arrival=(new Date()).getTime();window.___t_measuring=true;window.Env=window.Env||{};Env.start=(new Date()).getTime();cavalry_measure=[];}}
if(r.instrument){___tcss=0;___thtml=0;___tjs=(new Date()).getTime()-Env.start;}
if(r.getError()&&!r.getErrorIsWarning()){var fn=dispatchErrorResponse;}else{var fn=dispatchResponse;}
fn=fn.shield(null,r);fn=fn.defer.bind(fn);if(r.bootload){var is_transitional=false;if(this.preBootloadHandler){is_transitional=this.preBootloadHandler(r);}
Bootloader.loadResources(r.bootload,fn,is_transitional);}else{fn();}}});var invokeErrorHandler=bind(this,function(explicitError){try{if(!window.loaded){return;}}catch(ex){return;}
var r=new AsyncResponse();var err;try{err=explicitError||this.transport.status||1001;}catch(ex){err=1001;}
try{if(this.responseText==''){err=1002;}}catch(ignore){}
if(this.transportErrorHandler){var desc=sprintf('Transport error (#%d) while retrieving data from endpoint %q: %s',err,this.getURI(),AsyncRequest.getHTTPErrorDescription(err));if(!this.getOption('suppressErrorAlerts')){Util.error(desc);}
copy_properties(r,{error:err,errorSummary:AsyncRequest.getHTTPErrorSummary(err),errorDescription:desc});dispatchErrorResponse(r,true);}else{Util.error('Async request to %q failed with a %d error, but there was no error '+'handler available to deal with it.',this.getURI(),err);}});var handleResponse=function(response){var asyncResponse=this.interpretResponse(response);this.invokeResponseHandler(asyncResponse);}
var onStateChange=function(){try{if(this.transport.readyState==4){if(this.transport.status>=200&&this.transport.status<300){invokeResponseHandler(_interpretTransportResponse());}else{if(ua.safari()&&(typeof(this.transport.status)=='undefined')){invokeErrorHandler(1002);}else{invokeErrorHandler();}}
if(this.getOption('asynchronous')!==false){delete this.transport;}}}catch(exception){try{if(!window.loaded){return;}}catch(ex){return;}
delete this.transport;if(this.remainingRetries){--this.remainingRetries;this.send(true);}else{if(!this.getOption('suppressErrorAlerts')){Util.error('AsyncRequest exception when attempting to handle a state change: %x.',exception);}
invokeErrorHandler(1001);}}};copy_properties(this,{onstatechange:onStateChange,replayResponse:replayResponse,invokeResponseHandler:invokeResponseHandler,interpretResponse:interpretResponse,handleResponse:handleResponse,transport:null,method:'POST',uri:'',initialHandler:bagofholding,handler:null,errorHandler:null,transportErrorHandler:null,finallyHandler:bagofholding,statusElement:null,logNectar:true,data:{},context:{},readOnly:false,writeRequiredParams:['post_form_id'],remainingRetries:0,option:{asynchronous:true,suppressErrorHandlerWarning:false,suppressEvaluation:false,suppressErrorAlerts:false,retries:1,jsonp:false,bundle:false,useIframeTransport:false},_captchaHtml:'',_confirmationMessage:'',_confirmationTitle:'',_confirmationButton:'',_confirmationCallback:bagofholding,_requiresConfirmation:false,_replayable:undefined,_replayKey:''});if(typeof ErrorDialog!="undefined"){this.errorHandler=ErrorDialog.showAsyncError;this.transportErrorHandler=ErrorDialog.showAsyncError;}
if(uri!=undefined){this.setURI(uri);}
return this;}
copy_properties(AsyncRequest,{getHTTPErrorSummary:function(errCode){return AsyncRequest._getHTTPError(errCode).summary;},getHTTPErrorDescription:function(errCode){return AsyncRequest._getHTTPError(errCode).description;},pingURI:function(uri,data,synchronous){data=data||{};return new AsyncRequest().setURI(uri).setData(data).setOption('asynchronous',!synchronous).setOption('suppressErrorHandlerWarning',true).setErrorHandler(bagofholding).setTransportErrorHandler(bagofholding).send();},receiveJSONPResponse:function(path,data){if(this._JSONPReceivers[path]){for(var ii=0;ii<this._JSONPReceivers[path].length;ii++){var request=this._JSONPReceivers[path][ii];if(request.transportIframe){(function(x){DOMScroll.getScrollRoot().removeChild(x);}).bind(null,request.transportIframe).defer();}
request.invokeResponseHandler(request.interpretResponse(data));}
delete this._JSONPReceivers[path];}},_hasBundledRequest:function(){return!is_empty(AsyncRequest._allBundledRequests);},registerBundledRequestProperties:function(properties){if(!AsyncRequest._hasBundledRequest()){var callback=properties.callback;callback&&callback();}else{copy_properties(AsyncRequest._bundledRequestProperties,properties);}},_bundleRequest:function(request){if(request.getOption('jsonp')||request.getOption('useIframeTransport')){Util.error('You cannot bundle AsyncRequest that uses jsonp or iframe transport.');request.setOption('bundle',false);return false;}else if(!request.uri.isFacebookURI()){Util.error('You can not bundle AsyncRequest sent to non-facebook URIs');request.setOption('bundle',false);return false;}else if(!request.getOption('asynchronous')){Util.error('We cannot bundle synchronous AsyncRequests');request.setOption('bundle',false);return false;}
var path=request.uri.getPath();if(path in AsyncRequest._allBundledRequests){Util.warn('Bundling multiple AsyncRequests to the same endpoint is not '+'supported. They will still be sent seqentially. Only the last '+'AsyncRequest to a unique endpoint is included in the bundle.');var old_request=AsyncRequest._allBundledRequests[path];old_request.setOption('bundle',false).send();}
if(is_empty(AsyncRequest._allBundledRequests)){setTimeout(function(){AsyncRequest._sendBundledRequests();},0);}
AsyncRequest._allBundledRequests[path]=request;return true;},_sendBundledRequests:function(){var bundled_requests=AsyncRequest._allBundledRequests;AsyncRequest._allBundledRequests={};var property={};copy_properties(property,AsyncRequest._bundledRequestProperties);AsyncRequest._bundledRequestProperties={};var on_done=function(){property.callback&&property.callback();};if(is_empty(bundled_requests)){on_done();return;}
var data={};for(var path in bundled_requests){var request=bundled_requests[path];data[path]=URI.implodeQuery(request.data);}
var query_data={data:data}
if(property.extra_data){copy_properties(query_data,property.extra_data);}
new AsyncRequest().setURI('/ajax/proxy.php').setData(query_data).setMethod('POST').setInitialHandler(property.onInitialResponse||truth).setHandler(function(r){var payload=r.getPayload();var responses=payload.responses;for(var path in bundled_requests){var request=bundled_requests[path];if(path in responses){var asyncResponse=request.interpretResponse(responses[path]);request.invokeResponseHandler(asyncResponse);}else{var response={transportError:sprintf('An error occurred when making an AsyncRequest to %q '+' in a bundled request.',path)};request.invokeResponseHandler(response);}}}).setTransportErrorHandler(function(response){var paths=[];var interp={transportError:response.errorDescription};for(var path in bundled_requests){paths.push(path);var request=bundled_requests[path];request.invokeResponseHandler(interp);}
Util.error('Transport error occured for bundled requests to '+
paths.join(', '));}).setFinallyHandler(function(r){on_done();}).send()},_getHTTPError:function(errCode){var e=AsyncRequest._HTTPErrors[errCode]||AsyncRequest._HTTPErrors[errCode-(errCode%100)]||{summary:'HTTP Error',description:'Unknown HTTP error #'+errCode};return e;},_HTTPErrors:{400:{summary:'Bad Request',description:'Bad HTTP request.'},401:{summary:'Unauthorized',description:'Not authorized.'},403:{summary:'Forbidden',description:'Access forbidden.'},404:{summary:'Not Found',description:'Web address does not exist.'},1000:{summary:'Bad Response',description:'Invalid response.'},1001:{summary:'No Network',description:'A network error occurred. Check that you are connected to the '+'internet.'},1002:{summary:'No Data',description:'The server did not return a response.'},1003:{summary:'Eval Error',description:'Exception thrown during JSON evaluation.'}},_JSONPReceivers:[],_allBundledRequests:{},_bundledRequestProperties:{}});copy_properties(AsyncRequest.prototype,{setMethod:function(m){this.method=m.toString().toUpperCase();return this;},getMethod:function(){return this.method;},setData:function(obj){this.data=obj;return this;},getData:function(){return this.data;},setContextData:function(key,value,enabled){enabled=enabled===undefined?true:enabled;if(enabled){this.context['_log_'+key]=value;}
return this;},setURI:function(uri){var uri_obj=URI(uri);if(this.getOption('useIframeTransport')&&!uri_obj.isFacebookURI()){Util.error('IframeTransport requests should only be used when going between '+'different Facebook subdomains.  This probably won\'t do what you want '+'if you\'re going to a non-Facebook URI.  Check out JSONP for that, '+'but that\'s also a bad idea to use.');return this;}
if(!this.getOption('jsonp')&&!this.getOption('useIframeTransport')&&!uri_obj.isSameOrigin()){Util.error('Asynchronous requests must specify relative URIs (like %q); this '+'ensures they conform to the Same Origin Policy (see %q). The '+'provided absolute URI (%q) is invalid, use a relative URI instead. '+'If you need to dispatch cross-domain requests, you can use JSONP, '+'but consider this decision carefully because there are tradeoffs and '+'JSONP is completely insecure.','/path/to/endpoint.php','http://www.mozilla.org/projects/security/components/same-origin.html',uri_obj.toString());return this;}
this.uri=uri_obj;return this;},getURI:function(){return this.uri.toString();},setInitialHandler:function(fn){this.initialHandler=fn;return this;},setHandler:function(fn){if(typeof(fn)!='function'){Util.error('AsyncRequest response handlers must be functions. Pass a function, '+'or use bind() to build one.');}else{this.handler=fn;}
return this;},getHandler:function(){return this.handler;},setErrorHandler:function(fn){if(typeof(fn)!='function'){Util.error('AsyncRequest error handlers must be functions. Pass a function, or '+'use bind() to build one.');}else{this.errorHandler=fn;}
return this;},setTransportErrorHandler:function(fn){this.transportErrorHandler=fn;return this;},getErrorHandler:function(){return this.errorHandler;},getTransportErrorHandler:function(){return this.transportErrorHandler;},setFinallyHandler:function(fn){this.finallyHandler=fn;return this;},setPreBootloadHandler:function(fn){this.preBootloadHandler=fn;return this;},disableNectar:function(){this.logNectar=false;return this;},setReadOnly:function(readOnly){if(typeof(readOnly)!='boolean'){Util.error('AsyncRequest readOnly value must be a boolean.');}else{this.readOnly=readOnly;}
return this;},setFBMLForm:function(){this.writeRequiredParams=["fb_sig"];return this;},getReadOnly:function(){return this.readOnly;},setStatusElement:function(element){this.statusElement=element;return this;},getStatusElement:function(){return this.statusElement;},clearStatusIndicator:function(){if(this.getStatusElement()){CSS.removeClass($(this.getStatusElement()),'async_saving');}},addStatusIndicator:function(){if(this.getStatusElement()){CSS.addClass($(this.getStatusElement()),'async_saving');}},specifiesWriteRequiredParams:function(){return this.writeRequiredParams.every(function(param){this.data[param]=this.data[param]||Env[param]||(ge(param)||{}).value;if(this.data[param]!==undefined){return true;}},this);},setReplayable:function(replayable,key){this._replayable=replayable;this._replayKey=key||'';return this;},setOption:function(opt,v){if(typeof(this.option[opt])!='undefined'){this.option[opt]=v;}else{Util.warn('AsyncRequest option %q does not exist; request to set it was ignored.',opt);}
return this;},getOption:function(opt){if(typeof(this.option[opt])=='undefined'){Util.warn('AsyncRequest option %q does not exist, get request failed.',opt);}
return this.option[opt];},abort:function(){if(this.transport){var old_handler=this.getTransportErrorHandler();this.setTransportErrorHandler(bagofholding);this.transport.abort();this.setTransportErrorHandler(old_handler);}},addNectarParams:function(){var nctr_params;if(!this.logNectar){nctr_params={};nctr_params['n']=true;}else{nctr_params=Nectar.getNectarParams();var nctr_ia=this.data['_log_nectar_isaction'];if(nctr_ia!==undefined){nctr_params['ia']=nctr_ia;delete this.data['_log_nectar_isaction'];}}
this.data['nctr']=nctr_params;},send:function(isRetry){isRetry=isRetry||false;if(this.requiresConfirmation()){this._displayConfirmation();return true;}
if(!this.uri){Util.error('Attempt to dispatch an AsyncRequest without an endpoint URI! This is '+'all sorts of silly and impossible, so the request failed.');return false;}
if(!this.errorHandler&&!this.getOption('suppressErrorHandlerWarning')){Util.warn('Dispatching an AsyncRequest that does not have an error handler. '+'You SHOULD supply one, or use AsyncRequest.pingURI(). If this '+'omission is intentional and well-considered, set the %q option to '+'suppress this warning.','suppressErrorHandlerWarning');}
if(this.getOption('jsonp')&&this.method!='GET'){this.setMethod('GET');}
if(this.getOption('useIframeTransport')&&this.method!='GET'){Util.warn('Iframe transport currently works only with GET.');this.setMethod('GET');}
if(!this.getReadOnly()){if(!this.specifiesWriteRequiredParams()){Util.error('You are making a POST request to %s without one or more of the '+'required parameters: %s. Requests which modify data and do not '+'verify the request origin through parameter validation are '+'vulnerable to CSRF attacks. You should either specify values for '+'these parameters explicitly by using setData(), put them in the '+'page as inputs, or mark this request as safe and idempotent by '+'using setReadOnly(). Consult the setReadOnly() documentation for '+'more information.',this.uri.toString(),this.writeRequiredParams.join(','));return false;}
if(this.method!='POST'){Util.error('You are making a GET request which modifies data; this violates '+'the HTTP spec and is generally a bad idea. Either change this '+'request to use POST or use setReadOnly() to mark the request as '+'idempotent and appropriate for HTTP GET. Consult the setReadOnly() '+'documentation for more information.');return false;}}
if(this.method=='POST'){this.data.fb_dtsg=Env.fb_dtsg;}
if((!this.getReadOnly()&&this._replayable!==false)||this._replayable){Arbiter.inform(Arbiter.REPLAYABLE_AJAX,this);}
if(!is_empty(this.context)){copy_properties(this.data,this.context);this.data['ajax_log']=1;}
if(!this.getReadOnly()&&this.method=='POST'&&this.data['post_form_id_source']===undefined){this.data['post_form_id_source']='AsyncRequest';}
if(this.getOption('bundle')&&env_get('ajax_bundle')&&AsyncRequest._bundleRequest(this)){return true;}
this.addNectarParams();var uri_str,query;if(this.method=='GET'){uri_str=this.uri.addQueryData(this.data).toString();query='';}else{uri_str=this.uri.toString();query=URI.implodeQuery(this.data);}
if(this.getOption('jsonp')||this.getOption('useIframeTransport')){var path=this.uri.getPath();if(!AsyncRequest._JSONPReceivers[path]){AsyncRequest._JSONPReceivers[path]=[];}
AsyncRequest._JSONPReceivers[path].push(this);if(this.getOption('jsonp')){(function(){DOMScroll.getScrollRoot().appendChild($N('script',{src:uri_str,type:"text/javascript"}))}).bind(this).defer();}else{var style={position:'absolute',top:'-1000px',left:'-1000px',width:'80px',height:'80px'};this.transportIframe=$N('iframe',{src:uri_str,style:style});DOMScroll.getScrollRoot().appendChild(this.transportIframe);}
return true;}
if(this.transport){Util.error('You must wait for an AsyncRequest to complete before sending another '+'request with the same object. To send two simultaneous requests, '+'create a second AsyncRequest object.');return false;}
var transport=null;try{transport=new XMLHttpRequest();}catch(ignored){};if(!transport){try{transport=new ActiveXObject("Msxml2.XMLHTTP");}catch(ignored){};}
if(!transport){try{transport=new ActiveXObject("Microsoft.XMLHTTP");}catch(ignored){};}
if(!transport){Util.error('Unable to build XMLHTTPRequest transport.');return false;}
transport.onreadystatechange=bind(this,'onstatechange');if(!isRetry){this.remainingRetries=0;if(this.getReadOnly()){this.remainingRetries=this.getOption('retries');}}
this.transport=transport;try{this.transport.open(this.method,uri_str,this.getOption('asynchronous'));}catch(ex){Util.error('Exception when opening Async transport to %q: %x',uri,ex);return false;}
var svn_rev=env_get('svn_rev');if(svn_rev){this.transport.setRequestHeader('X-SVN-Rev',String(svn_rev));}
if(this.method=='POST'){this.transport.setRequestHeader('Content-Type','application/x-www-form-urlencoded');}
this.addStatusIndicator();this.transport.send(query);return true;},_displayCaptcha:function(){Dialog.createCaptchaDialog(this._captchaHtml,this.finallyHandler).setHandler(this._displayCaptchaDialogHandler.bind(this)).show();},_displayCaptchaDialogHandler:function(){var captcha_data=serialize_form($('captcha'));copy_properties(this.data,captcha_data);this.send();},requireConfirmation:function(message,title,button,callback){this._confirmationMessage=message;this._confirmationTitle=title;this._confirmationButton=button;this._confirmationCallback=callback||bagofholding;this._requiresConfirmation=true;return this;},requiresConfirmation:function(){if(this._requiresConfirmation){if(this.data.confirmed){this._requriesConfirmation=false;}}
return this._requiresConfirmation;},_displayConfirmation:function(){var message=this._confirmationMessage||_tx("Are you sure you want to perform this action?");var html='<div class="confirmation_message">'
+HTML(message)
+'</div>';var title=this._confirmationTitle||_tx("Confirmation Required");var button=this._confirmationButton||Dialog.CONFIRM;Dialog.createConfirmationDialog(html,title,button,this.finallyHandler.bind(this)).setHandler(this._displayConfirmationHandler.bind(this)).setCancelHandler(this._confirmationCallback.curry(false)).show();},_displayConfirmationHandler:function(){this.data.confirmed=1;this._requiresConfirmation=false;this._confirmationCallback(true);this.send();}});function AsyncResponse(payload){copy_properties(this,{error:0,errorSummary:null,errorDescription:null,onload:null,replay:false,payload:payload||null});return this;}
copy_properties(AsyncResponse.prototype,{getPayload:function(){return this.payload;},getError:function(){return this.error;},getErrorSummary:function(){return this.errorSummary;},getErrorDescription:function(){return this.errorDescription;},getErrorIsWarning:function(){return this.errorIsWarning;},setReplay:function(replay){replay=(replay===undefined?true:replay);this.replay=!!replay;return this;},isReplay:function(){return this.replay;}});

function intl_set_xmode(xmode){(new AsyncRequest()).setURI('/ajax/intl/save_xmode.php').setData({xmode:xmode}).setHandler(function(){document.location.reload();}).send();}
function intl_set_cmode(cmode){(new AsyncRequest()).setURI('/ajax/intl/save_xmode.php').setData({cmode:cmode}).setHandler(function(){document.location.reload();}).send();}
function intl_set_vmode(vmode){(new AsyncRequest()).setURI('/ajax/intl/save_xmode.php').setData({vmode:vmode}).setHandler(function(){document.location.reload();}).send();}
function intl_set_amode(amode){(new AsyncRequest()).setURI('/ajax/intl/save_xmode.php').setData({amode:amode,app:false}).setHandler(function(){document.location.reload();}).send();}
function intl_set_locale(obj,source,locale){if(!locale){var locale=obj.options[obj.selectedIndex].value;}
new AsyncRequest().setURI('/ajax/intl/beta_locale_check.php').setData({locale:locale}).setHandler(function(response){data=response.getPayload();if(data.rtl_unsupported){if(data.app_is_installed){new Dialog().setTitle('Limited Support For This Language').setBody('Although you can browse Facebook using this language, translation for this language '+'is only supported for Safari 3, Firefox 3 and Opera browsers for now. Please switch to one of those '+'browsers to translate Facebook to help us launch this language sooner! ').setButtons([Dialog.OK]).setHandler(intl_save_locale.bind(null,locale,true,null,source)).show();}}else if(data.locale_is_beta){if(data.app_is_installed){intl_save_locale(locale,true,null,source);}else{var async=new AsyncRequest().setURI('/ajax/intl/beta_locale_dialog.php?locale='+locale);new Dialog().setAsync(async).show();}}else{intl_save_locale(locale,true,null,source);}}).send();}
function intl_save_locale(locale,reload,location,source){new AsyncRequest().setURI('/ajax/intl/save_locale.php').setData({locale:locale,source:source}).setHandler(function(response){if(reload){document.location.reload();}else{document.location=location;}}).send();}
function intl_toggle_beta_locale_install(obj){if(obj.checked){show($('beta_locale_install'));}else{hide($('beta_locale_install'));}}
function intl_set_cookie_locale(locale,uri){var old_locale=getCookie('locale');new AsyncRequest().setURI('/ajax/intl/save_locale_cookie_logging.php').setData({new_locale:locale,old_locale:old_locale,source:'LOGGED_OUT'}).setReadOnly(true).send();setCookie('locale',locale,7*24*3600000);if(URI.getRequestURI().getTld()!='com'){transferCookieToComTld('locale',function(success){if(success){clearCookie('locale');}
goURI(uri);});}else{goURI(uri);}}
function intl_disable_rooster_save(obj){var save=document.getElementById('install_translation_app');save.disabled=!obj.checked;var container=document.getElementById('install_container');if(obj.checked){container.style.display='block';}else{container.style.display='none';}}
function intl_confirm_rooster_and_install_app(uid,divid){document.location='add.php?api_key=efa7a7045708fcadede8d705e39b1642';}
function intl_locale_is_rtl(){var body=DOM.find(document,'body');return('rtl'==CSS.getStyle(body,'direction'));}
function intl_is_left_click(e){if(e.which==null){if(e.button<2)return true;}else{if(e.which<2)return true;}
return false;}
function intl_left_click_cancelBubble(e){if(intl_is_left_click(e)){e.cancelBubble=true;}}

function animation(obj){if(obj==undefined){Util.error("Creating animation on non-existant object");return;}
if(this==window){return new animation(obj);}else{this.obj=obj;this._reset_state();this.queue=[];this.last_attr=null;}}
animation.resolution=20;animation.offset=0;animation.prototype._reset_state=function(){this.state={attrs:{},duration:500}}
animation.prototype.stop=function(){this._reset_state();this.queue=[];return this;}
animation.prototype._build_container=function(){if(this.container_div){this._refresh_container();return;}
if(this.obj.firstChild&&this.obj.firstChild.__animation_refs){this.container_div=this.obj.firstChild;this.container_div.__animation_refs++;this._refresh_container();return;}
var container=document.createElement('div');container.style.padding='0px';container.style.margin='0px';container.style.border='0px';container.__animation_refs=1;var children=this.obj.childNodes;while(children.length){container.appendChild(children[0]);}
this.obj.appendChild(container);this.obj.style.overflow='hidden';this.container_div=container;this._refresh_container();}
animation.prototype._refresh_container=function(){this.container_div.style.height='auto';this.container_div.style.width='auto';this.container_div.style.height=this.container_div.offsetHeight+'px';this.container_div.style.width=this.container_div.offsetWidth+'px';}
animation.prototype._destroy_container=function(){if(!this.container_div){return;}
if(!--this.container_div.__animation_refs){var children=this.container_div.childNodes;while(children.length){this.obj.appendChild(children[0]);}
this.obj.removeChild(this.container_div);}
this.container_div=null;}
animation.ATTR_TO=1;animation.ATTR_BY=2;animation.ATTR_FROM=3;animation.prototype._attr=function(attr,value,mode){attr=attr.replace(/-[a-z]/gi,function(l){return l.substring(1).toUpperCase();});var auto=false;switch(attr){case'background':this._attr('backgroundColor',value,mode);return this;case'margin':value=animation.parse_group(value);this._attr('marginBottom',value[0],mode);this._attr('marginLeft',value[1],mode);this._attr('marginRight',value[2],mode);this._attr('marginTop',value[3],mode);return this;case'padding':value=animation.parse_group(value);this._attr('paddingBottom',value[0],mode);this._attr('paddingLeft',value[1],mode);this._attr('paddingRight',value[2],mode);this._attr('paddingTop',value[3],mode);return this;case'backgroundColor':case'borderColor':case'color':value=animation.parse_color(value);break;case'opacity':value=parseFloat(value,10);break;case'height':case'width':if(value=='auto'){auto=true;}else{value=parseInt(value,10);}
break;case'borderWidth':case'lineHeight':case'fontSize':case'marginBottom':case'marginLeft':case'marginRight':case'marginTop':case'paddingBottom':case'paddingLeft':case'paddingRight':case'paddingTop':case'bottom':case'left':case'right':case'top':case'scrollTop':case'scrollLeft':value=parseInt(value,10);break;default:throw new Error(attr+' is not a supported attribute!');}
if(this.state.attrs[attr]===undefined){this.state.attrs[attr]={};}
if(auto){this.state.attrs[attr].auto=true;}
switch(mode){case animation.ATTR_FROM:this.state.attrs[attr].start=value;break;case animation.ATTR_BY:this.state.attrs[attr].by=true;case animation.ATTR_TO:this.state.attrs[attr].value=value;break;}}
animation.prototype.to=function(attr,value){if(value===undefined){this._attr(this.last_attr,attr,animation.ATTR_TO);}else{this._attr(attr,value,animation.ATTR_TO);this.last_attr=attr;}
return this;}
animation.prototype.by=function(attr,value){if(value===undefined){this._attr(this.last_attr,attr,animation.ATTR_BY);}else{this._attr(attr,value,animation.ATTR_BY);this.last_attr=attr;}
return this;}
animation.prototype.from=function(attr,value){if(value===undefined){this._attr(this.last_attr,attr,animation.ATTR_FROM);}else{this._attr(attr,value,animation.ATTR_FROM);this.last_attr=attr;}
return this;}
animation.prototype.duration=function(duration){this.state.duration=duration?duration:0;return this;}
animation.prototype.checkpoint=function(distance,callback){if(distance===undefined){distance=1;}
this.state.checkpoint=distance;this.queue.push(this.state);this._reset_state();this.state.checkpointcb=callback;return this;}
animation.prototype.blind=function(){this.state.blind=true;return this;}
animation.prototype.hide=function(){this.state.hide=true;return this;}
animation.prototype.show=function(){this.state.show=true;return this;}
animation.prototype.ease=function(ease){this.state.ease=ease;return this;}
animation.prototype.go=function(){var time=(new Date()).getTime();this.queue.push(this.state);for(var i=0;i<this.queue.length;i++){this.queue[i].start=time-animation.offset;if(this.queue[i].checkpoint){time+=this.queue[i].checkpoint*this.queue[i].duration;}}
animation.push(this);return this;}
animation.prototype._frame=function(time){var done=true;var still_needs_container=false;var whacky_firefox=false;for(var i=0;i<this.queue.length;i++){var cur=this.queue[i];if(cur.start>time){done=false;continue;}
if(cur.checkpointcb){this._callback(cur.checkpointcb,time-cur.start);cur.checkpointcb=null;}
if(cur.started===undefined){if(cur.show){this.obj.style.display='block';}
for(var a in cur.attrs){if(cur.attrs[a].start!==undefined){continue;}
switch(a){case'backgroundColor':case'borderColor':case'color':var val=animation.parse_color(CSS.getStyle(this.obj,a=='borderColor'?'borderLeftColor':a));if(cur.attrs[a].by){cur.attrs[a].value[0]=Math.min(255,Math.max(0,cur.attrs[a].value[0]+val[0]));cur.attrs[a].value[1]=Math.min(255,Math.max(0,cur.attrs[a].value[1]+val[1]));cur.attrs[a].value[2]=Math.min(255,Math.max(0,cur.attrs[a].value[2]+val[2]));}
break;case'opacity':var val=CSS.getOpacity(this.obj);if(cur.attrs[a].by){cur.attrs[a].value=Math.min(1,Math.max(0,cur.attrs[a].value+val));}
break;case'height':var val=DOM.getBoxHeight(this.obj);if(cur.attrs[a].by){cur.attrs[a].value+=val;}
break;case'width':var val=DOM.getBoxWidth(this.obj);if(cur.attrs[a].by){cur.attrs[a].value+=val;}
break;case'scrollLeft':case'scrollTop':var val=(this.obj==document.body)?(document.documentElement[a]||document.body[a]):this.obj[a];if(cur.attrs[a].by){cur.attrs[a].value+=val;}
cur['last'+a]=val;break;default:var val=parseInt(CSS.getStyle(this.obj,a),10)||0;if(cur.attrs[a].by){cur.attrs[a].value+=val;}
break;}
cur.attrs[a].start=val;}
if((cur.attrs.height&&cur.attrs.height.auto)||(cur.attrs.width&&cur.attrs.width.auto)){if(ua.firefox()<3){whacky_firefox=true;}
this._destroy_container();for(var a in{height:1,width:1,fontSize:1,borderLeftWidth:1,borderRightWidth:1,borderTopWidth:1,borderBottomWidth:1,paddingLeft:1,paddingRight:1,paddingTop:1,paddingBottom:1}){if(cur.attrs[a]){this.obj.style[a]=cur.attrs[a].value+(typeof cur.attrs[a].value=='number'?'px':'');}}
if(cur.attrs.height&&cur.attrs.height.auto){cur.attrs.height.value=DOM.getBoxHeight(this.obj);}
if(cur.attrs.width&&cur.attrs.width.auto){cur.attrs.width.value=DOM.getBoxWidth(this.obj);}}
cur.started=true;if(cur.blind){this._build_container();}}
var p=(time-cur.start)/cur.duration;if(p>=1){p=1;if(cur.hide){this.obj.style.display='none';}}else{done=false;}
var pc=cur.ease?cur.ease(p):p;if(!still_needs_container&&p!=1&&cur.blind){still_needs_container=true;}
if(whacky_firefox&&this.obj.parentNode){var parentNode=this.obj.parentNode;var nextChild=this.obj.nextSibling;parentNode.removeChild(this.obj);}
for(var a in cur.attrs){switch(a){case'backgroundColor':case'borderColor':case'color':this.obj.style[a]='rgb('+
animation.calc_tween(pc,cur.attrs[a].start[0],cur.attrs[a].value[0],true)+','+
animation.calc_tween(pc,cur.attrs[a].start[1],cur.attrs[a].value[1],true)+','+
animation.calc_tween(pc,cur.attrs[a].start[2],cur.attrs[a].value[2],true)+')';break;case'opacity':CSS.setOpacity(this.obj,animation.calc_tween(pc,cur.attrs[a].start,cur.attrs[a].value));break;case'height':case'width':this.obj.style[a]=pc==1&&cur.attrs[a].auto?'auto':animation.calc_tween(pc,cur.attrs[a].start,cur.attrs[a].value,true)+'px';break;case'scrollLeft':case'scrollTop':var val=(this.obj==document.body)?(document.documentElement[a]||document.body[a]):this.obj[a];if(cur['last'+a]!=val){delete cur.attrs[a];}else{var diff=animation.calc_tween(pc,cur.attrs[a].start,cur.attrs[a].value,true)-val;if(DOMScroll.usingScrollWrapper()){this.obj[a]=diff+val;}else{if(a=='scrollLeft'){window.scrollBy(diff,0);}else{window.scrollBy(0,diff);}}
cur['last'+a]=diff+val;}
break;default:this.obj.style[a]=animation.calc_tween(pc,cur.attrs[a].start,cur.attrs[a].value,true)+'px';break;}}
if(p==1){this.queue.splice(i--,1);this._callback(cur.ondone,time-cur.start-cur.duration);}}
if(whacky_firefox){parentNode[nextChild?'insertBefore':'appendChild'](this.obj,nextChild);}
if(!still_needs_container&&this.container_div){this._destroy_container();}
return!done;}
animation.prototype.ondone=function(fn){this.state.ondone=fn;return this;}
animation.prototype._callback=function(callback,offset){if(callback){animation.offset=offset;callback.call(this);animation.offset=0;}}
animation.calc_tween=function(p,v1,v2,whole){return(whole?parseInt:parseFloat)((v2-v1)*p+v1,10);}
animation.parse_color=function(color){var hex=/^#([a-f0-9]{1,2})([a-f0-9]{1,2})([a-f0-9]{1,2})$/i.exec(color);if(hex){return[parseInt(hex[1].length==1?hex[1]+hex[1]:hex[1],16),parseInt(hex[2].length==1?hex[2]+hex[2]:hex[2],16),parseInt(hex[3].length==1?hex[3]+hex[3]:hex[3],16)];}else{var rgb=/^rgba? *\(([0-9]+), *([0-9]+), *([0-9]+)(?:, *([0-9]+))?\)$/.exec(color);if(rgb){if(rgb[4]==='0'){return[255,255,255];}else{return[parseInt(rgb[1],10),parseInt(rgb[2],10),parseInt(rgb[3],10)];}}else if(color=='transparent'){return[255,255,255];}else{throw'Named color attributes are not supported.';}}}
animation.parse_group=function(value){var value=trim(value).split(/ +/);if(value.length==4){return value;}else if(value.length==3){return[value[0],value[1],value[2],value[1]];}else if(value.length==2){return[value[0],value[1],value[0],value[1]];}else{return[value[0],value[0],value[0],value[0]];}}
animation.push=function(instance){if(!animation.active){animation.active=[];}
animation.active.push(instance);if(!animation.timeout){animation.timeout=setInterval(animation.animate.bind(animation),animation.resolution,false);}
animation.animate(true);}
animation.animate=function(last){var time=(new Date()).getTime();for(var i=last===true?animation.active.length-1:0;i<animation.active.length;i++){try{if(!animation.active[i]._frame(time)){animation.active.splice(i--,1);}}catch(e){animation.active.splice(i--,1);}}
if(animation.active.length==0){clearInterval(animation.timeout);animation.timeout=null;}}
animation.ease={}
animation.ease.begin=function(p){return Math.sin(Math.PI/2*(p-1))+1;}
animation.ease.end=function(p){return Math.sin(0.5*Math.PI*p);}
animation.ease.both=function(p){return 0.5*Math.sin(Math.PI*(p-0.5))+0.5;}

function generic_dialog(className,modal){this.className=className;this.content=null;this.obj=null;this.popup=null;this.overlay=null;this.modal=null;this.modal_settings={},this.iframe=null;this.hidden_objects=[];if(modal==true){this.modal=true;}
this.auto_focus=true;}
generic_dialog.dialog_stack=null;generic_dialog.prototype.setClassName=function(className){if(this.obj){CSS.addClass(this.obj,className);}
this.className=className;};generic_dialog.hide_all=function(){if(generic_dialog.dialog_stack!==null){var stack=generic_dialog.dialog_stack.clone();generic_dialog.dialog_stack=null;for(var i=stack.length-1;i>=0;i--){stack[i].hide();}}};generic_dialog.prototype.should_hide_objects=!ua.windows();generic_dialog.prototype.should_use_iframe=ua.ie()<7||(ua.osx()&&ua.firefox());generic_dialog.prototype.set_auto_focus=function(auto_focus){this.auto_focus=auto_focus;}
generic_dialog.prototype.show_dialog=function(html){if(generic_dialog.dialog_stack===null){onunloadRegister(generic_dialog.hide_all,true);}
if(!this.obj){this.build_dialog();}
set_inner_html(this.content,html,true);var imgs=this.content.getElementsByTagName('img');for(var i=0;i<imgs.length;i++){imgs[i].onload=chain(imgs[i].onload,this.hide_objects.bind(this));}
this.show();if(this.auto_focus){this.focus_first_textbox_or_button.bind(this).defer();}
this.on_show_callback&&this.on_show_callback();return this;}
generic_dialog.prototype.set_callback=function(callback){this.on_show_callback=callback;return this;}
generic_dialog.prototype.focus_first_textbox_or_button=function(){var selectors=['input[type="text"]','textarea','input[type="password"]','input[type="button"]','input[type="submit"]'];var nodes=[];for(var ii=0;ii<selectors.length&&nodes.length==0;ii++){nodes=DOM.scry(this.content,selectors[ii]);}
if(nodes.length>0){var node=nodes[0];try{if(elementY(node)>0&&elementX(node)>0){node.focus();}}catch(e){};}
return true;}
generic_dialog.prototype.set_top=function(top){return this;}
generic_dialog.prototype.set_modal_setting=function(key,val){this.modal_settings[key]=val;return this;}
generic_dialog.prototype.get_modal_setting=function(key){return this.modal_settings[key];}
generic_dialog.prototype.make_modal=function(dark){if(dark){this.set_modal_setting(dark,true);}
if(this.modal){return;}
this.modal=true;if(ua.ie()==7){this.build_iframe();}
this.build_overlay();this.reset_iframe();}
generic_dialog.prototype.show_loading=function(loading_html){if(!loading_html){loading_html=_tx("Loading...");}
return this.show_dialog('<div class="dialog_loading">'+loading_html+'</div>');}
generic_dialog.prototype.show_ajax_dialog_custom_loader=function(html,src,post_vars,use_async_response){if(html){this.show_loading(html);}
var handler=function(use_async_response,response){var html=use_async_response?response.getPayload():response.getPayload().responseText;this.show_dialog(html);}.bind(this,use_async_response);var error_handler=function(response){ErrorDialog.showAsyncError(response);this.hide(false);}.bind(this);var async=new AsyncRequest().setOption('suppressEvaluation',!use_async_response).setURI(src).setData(post_vars||{}).setHandler(handler).setErrorHandler(error_handler).setTransportErrorHandler(error_handler);if(!post_vars){async.setMethod('GET').setReadOnly(true);}
async.send();return this;}
generic_dialog.prototype.show_ajax_dialog=function(src,post_vars,use_async_response){post_vars=post_vars||false;var load=_tx("Loading...");return this.show_ajax_dialog_custom_loader(load,src,post_vars,use_async_response);}
generic_dialog.prototype.show_prompt=function(title,content){return this.show_dialog('<h2 class="dialog_title"><span>'+title+'</span></h2><div class="dialog_content">'+content+'</div>');}
generic_dialog.prototype.show_message=function(title,content,button){if(button==null){button=_tx("Okay");}
return this.show_choice(title,content,button,function(){generic_dialog.get_dialog(this).fade_out(100)});}
generic_dialog.prototype.show_choice=function(title,content,button1,button1js,button2,button2js,buttons_msg,button3,button3js){var buttons='<div class="dialog_buttons" id="dialog_buttons">';if(typeof(buttons_msg)!='undefined'){buttons+='<div class="dialog_buttons_msg">';buttons+=buttons_msg;buttons+='</div>';}
buttons+='<input class="inputsubmit" type="button" value="'+button1+'" id="dialog_button1" />';if(button2){var button2_class='inputsubmit';if(button2==_tx("Cancel")){button2_class+=' inputaux';}
buttons+='<input class="'+button2_class+'" type="button" value="'+button2+'" id="dialog_button2" />';}
if(button3){var button3_class='inputsubmit';if(button3==_tx("Cancel")){button3_class+=' inputaux';}
buttons+='<input class="'+button3_class+'" type="button" value="'+button3+'" id="dialog_button3" />';}
this.show_prompt(title,this.content_to_markup(content)+buttons);var inputs=this.obj.getElementsByTagName('input');if(button3){button1obj=inputs[inputs.length-3];button2obj=inputs[inputs.length-2];button3obj=inputs[inputs.length-1];}else if(button2){button1obj=inputs[inputs.length-2];button2obj=inputs[inputs.length-1];}else{button1obj=inputs[inputs.length-1];}
if(button1js&&button1){if(typeof button1js=='string'){eval('button1js = function() {'+button1js+'}');}
button1obj.onclick=button1js;}
if(button2js&&button2){if(typeof button2js=='string'){eval('button2js = function() {'+button2js+'}');}
button2obj.onclick=button2js;}
if(button3js&&button3){if(typeof button3js=='string'){eval('button3js = function() {'+button3js+'}');}
button3obj.onclick=button3js;}
if(!this.modal){document.onkeyup=function(e){var keycode=(e&&e.which)?e.which:event.keyCode;var btn2_exists=(typeof button2obj!='undefined');var btn3_exists=(typeof button3obj!='undefined');var is_webkit=ua.safari();if(is_webkit&&keycode==13){button1obj.click();}
if(keycode==27){if(btn3_exists){button3obj.click();}else if(btn2_exists){button2obj.click();}else{button1obj.click();}}
document.onkeyup=function(){}}
this.button_to_focus=button1obj;button1obj.offsetWidth&&button1obj.focus();}
return this;}
generic_dialog.prototype.content_to_markup=function(content){return(typeof content=='string')?'<div class="dialog_body">'+content+'</div>':'<div class="dialog_summary">'+content.summary+'</div><div class="dialog_body">'+content.body+'</div>';}
generic_dialog.prototype.hide=function(temporary){if(this.obj){this.obj.style.display='none';}
if(this.iframe){this.iframe.style.display='none';}
if(this.overlay){this.overlay.style.display='none';}
if(this.timeout){clearTimeout(this.timeout);this.timeout=null;return;}
if(this.hidden_objects.length){for(var i=0,il=this.hidden_objects.length;i<il;i++){this.hidden_objects[i].style.visibility='';}
this.hidden_objects=[];}
clearInterval(this.active_hiding);if(!temporary){if(generic_dialog.dialog_stack){var stack=generic_dialog.dialog_stack;for(var i=stack.length-1;i>=0;i--){if(stack[i]==this){stack.splice(i,1);}}
if(stack.length){stack[stack.length-1].show();}}
if(this.obj){this.obj.parentNode.removeChild(this.obj);this.obj=null;}
if(this.close_handler){this.close_handler();}}
return this;}
generic_dialog.prototype.fade_out=function(interval,timeout,callback){if(!this.popup){return this;}
try{animation(this.obj).duration(timeout||0).checkpoint().to('opacity',0).hide().duration(interval||350).ondone(function(){callback&&callback();this.hide();}.bind(this)).go();}catch(e){this.hide();}
return this;}
generic_dialog.prototype.show=function(){if(this.obj&&this.obj.style.display){this.obj.style.visibility='hidden';this.obj.style.display='';this.reset_dialog();this.obj.style.visibility='';this.obj.dialog=this;}else{this.reset_dialog();}
this.hide_objects();clearInterval(this.active_hiding);this.active_hiding=setInterval(this.active_resize.bind(this),500);var stack=generic_dialog.dialog_stack?generic_dialog.dialog_stack:generic_dialog.dialog_stack=[];if(stack.length){var current_dialog=stack[stack.length-1];if(current_dialog!=this&&!current_dialog.is_stackable){current_dialog.hide();}}
for(var i=stack.length-1;i>=0;i--){if(stack[i]==this){stack.splice(i,1);}else{stack[i].hide(true);}}
stack.push(this);return this;}
generic_dialog.prototype.active_resize=function(){if(this.last_offset_height!=this.content.offsetHeight){this.hide_objects();this.last_offset_height=this.content.offsetHeight;}}
generic_dialog.prototype.hide_objects=function(){var hide=[],objects=[];var ad_locs=['',0,1,2,4,5,9,3];for(var i=0;i<ad_locs.length;i++){var ad_div=ge('ad_'+ad_locs[i]);if(ad_div!=null){hide.push(ad_div);}}
var rect={x:elementX(this.content),y:elementY(this.content),w:this.content.offsetWidth,h:this.content.offsetHeight};if(this.should_hide_objects){var iframes=document.getElementsByTagName('iframe');for(var i=0;i<iframes.length;i++){if(iframes[i].className.indexOf('share_hide_on_dialog')!=-1){objects.push(iframes[i]);}}}
var swfs=getElementsByTagNames('embed,object');for(var i=0;i<swfs.length;i++){if((swfs[i].getAttribute('wmode')||'').toLowerCase()!='transparent'||this.should_hide_objects){objects.push(swfs[i]);}}
for(var i=0;i<objects.length;i++){var node=objects[i].offsetHeight?objects[i]:objects[i].parentNode;swf_rect={x:elementX(node),y:elementY(node),w:node.offsetWidth,h:node.offsetHeight};if(!DOM.contains(this.content,objects[i])&&rect.y+rect.h>swf_rect.y&&swf_rect.y+swf_rect.h>rect.y&&rect.x+rect.w>swf_rect.x&&swf_rect.x+swf_rect.w>rect.w&&this.hidden_objects.indexOf(node)==-1){hide.push(node);}}
for(var i=0;i<hide.length;i++){this.hidden_objects.push(hide[i]);hide[i].style.visibility='hidden';}}
generic_dialog.prototype.build_dialog=function(){if(!this.obj){this.obj=document.createElement('div');}
CSS.setClass(this.obj,'generic_dialog'+(this.className?' '+this.className:''));this.obj.style.display='none';onloadRegister(function(){DOM.getRootElement().appendChild(this.obj);}.bind(this));if(this.should_use_iframe||(this.modal&&ua.ie()==7)){this.build_iframe();}
if(!this.popup){this.popup=document.createElement('div');CSS.setClass(this.popup,'generic_dialog_popup');}
this.popup.style.left=this.popup.style.top='';this.obj.appendChild(this.popup);if(this.modal){this.build_overlay();}}
generic_dialog.prototype.build_iframe=function(){if(!this.iframe&&!(this.iframe=ge('generic_dialog_iframe'))){this.iframe=document.createElement('iframe');this.iframe.id='generic_dialog_iframe';this.iframe.src="/common/blank.html";}
this.iframe.frameBorder='0';onloadRegister(function(){DOM.getRootElement().appendChild(this.iframe);}.bind(this));}
generic_dialog.prototype.build_overlay=function(){this.overlay=document.createElement('div');this.overlay.id='generic_dialog_overlay';if(this.get_modal_setting('dark')){CSS.addClass(this.overlay,'dark_dialog_overlay');}
this.overlay.style.height=Vector2.getDocumentDimensions().y+'px';onloadRegister(function(){DOM.getRootElement().appendChild(this.overlay);}.bind(this));}
generic_dialog.prototype.reset_dialog=function(){if(!this.popup){return;}
onloadRegister(function(){this.reset_dialog_obj();this.reset_iframe();}.bind(this));}
generic_dialog.prototype.reset_iframe=function(){if(!this.should_use_iframe&&!(this.modal&&ua.ie()==7)){return;}
if(this.modal){this.iframe.style.left='0px';this.iframe.style.top='0px';this.iframe.style.width='100%';var documentHeight=Vector2.getDocumentDimensions().y;if(documentHeight>10000){documentHeight=10000;}
this.iframe.style.height=documentHeight+'px';}else{this.iframe.style.left=elementX(this.frame)+'px';this.iframe.style.top=elementY(this.frame)+'px';this.iframe.style.width=this.frame.offsetWidth+'px';this.iframe.style.height=this.frame.offsetHeight+'px';}
this.iframe.style.display='';}
generic_dialog.prototype.reset_dialog_obj=function(){}
generic_dialog.get_dialog=function(obj){while(!obj.dialog&&obj.parentNode){obj=obj.parentNode;}
return obj.dialog?obj.dialog:false;}
function pop_dialog(className,callback_function,modal){this.top=125;this.parent.construct(this,className,modal);this.on_show_callback=callback_function;}
pop_dialog.extend('generic_dialog');pop_dialog.prototype.do_expand_animation=false;pop_dialog.prototype.kill_expand_animation=true;pop_dialog.prototype.show_ajax_dialog=function(src,post_vars,title,use_async_response){post_vars=post_vars||false;if(this.do_expand_animation&&!this.kill_expand_animation){var load=null;this.show_loading_title(title);}else{var load=_tx("Loading...");}
return this.show_ajax_dialog_custom_loader(load,src,post_vars,use_async_response);}
pop_dialog.prototype.show_message=function(title,content,button){if(this.do_expand_animation&&!this.kill_expand_animation){this.show_loading_title(title);}else{this.show_loading();}
return this.parent.show_message(title,content,button);}
pop_dialog.prototype.show_dialog=function(html,prevent_expand_animation){var new_dialog=this.parent.show_dialog(html);if(this.do_expand_animation&&!prevent_expand_animation&&!this.kill_expand_animation){function check_done_loading_title(callback,i){var i=(i?i:0);if(this.done_loading_title!=true&&i<10){i++;setTimeout(check_done_loading_title.bind(this,callback,i),50);}else{callback&&callback();}}
function check_for_complete_images(content,callback,attempt){var complete_images=0;var images=content.getElementsByTagName('img');var safari2=ua.safari()<3;for(var i=0;i<images.length;i++){var imageobj=images[i];if(image_has_loaded(imageobj)){complete_images++;}}
if(complete_images!=images.length){if(attempt<20){attempt++;setTimeout(function(){check_for_complete_images(content,callback,attempt);},100);}else{callback();}}else{callback();}}
var divs=this.content.getElementsByTagName('div');for(var i=0;i<divs.length;i++){if(divs[i].className=='dialog_content'){expand_animation_div=divs[i];break;}}
var container_div=document.createElement('div');container_div.style.padding='0px';container_div.style.margin='0px';container_div.style.overflow='visible';expand_animation_div.parentNode.insertBefore(container_div,expand_animation_div);container_div.appendChild(expand_animation_div);expand_animation_div.style.overflow='hidden';check_for_complete_images(expand_animation_div,function(){check_done_loading_title.bind(this,function(){this.content.getElementsByTagName('h2')[0].className='';animation(expand_animation_div).to('height','auto').from(0).from('opacity',0).to(1).ease(animation.ease.both).show().duration(200).ondone(function(){container_div.parentNode.insertBefore(expand_animation_div,container_div);container_div.parentNode.removeChild(container_div);if(!this.button_to_focus){var inputs=this.obj.getElementsByTagName('input');for(var i=0;i<inputs.length;i++){if(inputs[i].type=='button'&&inputs[i].id=='dialog_button1'){this.button_to_focus=inputs[i];break;}}}
if(this.button_to_focus){setTimeout(function(){this.button_to_focus.focus();}.bind(this),50);}
expand_animation_div.style.overflow='visible'
this.do_expand_animation=false;this.show();}.bind(this,{expand_animation_div:expand_animation_div,container_div:container_div})).go();}.bind(this))();}.bind(this,{expand_animation_div:expand_animation_div}),0);}
return new_dialog;}
pop_dialog.prototype.build_dialog=function(){this.parent.build_dialog();CSS.addClass(this.obj,'pop_dialog');if(intl_locale_is_rtl()){CSS.addClass(this.obj,'pop_dialog_rtl');}
set_inner_html(this.popup,'<table id="pop_dialog_table" class="pop_dialog_table">'+'<tr><td class="pop_topleft"></td><td class="pop_border pop_top"></td><td class="pop_topright"></td></tr>'+'<tr><td class="pop_border pop_side"></td><td class="pop_content" id="pop_content"></td><td class="pop_border pop_side"></td></tr>'+'<tr><td class="pop_bottomleft"></td><td class="pop_border pop_bottom"></td><td class="pop_bottomright"></td></tr>'+'</table>');this.frame=this.popup.getElementsByTagName('tbody')[0];this.content=this.popup.getElementsByTagName('td')[4];}
pop_dialog.prototype.reset_dialog_obj=function(){this.popup.style.top=Vector2.getScrollPosition().y+this.top+'px';}
pop_dialog.prototype.set_top=function(top){this.top=top;}
pop_dialog.prototype.show_prompt=function(title,content){if(!this.do_expand_animation||this.kill_expand_animation){return this.show_dialog('<h2 class="dialog_title"><span>'+title+'</span></h2><div class="dialog_content">'+content+'</div>');}
return this.show_dialog('<h2 class="dialog_loading"><span>'+title+'</span></h2><div class="dialog_content" style="display:none;">'+content+'</div>');}
pop_dialog.prototype.show_loading_title=function(title){if(!this.kill_expand_animation){this.do_expand_animation=true;this.show_dialog('<h2 class="dialog_loading"><span>'+title+'</span></h2>',true);setTimeout(function(){this.done_loading_title=true;}.bind(this),200);}else{this.show_loading();}}
pop_dialog.prototype.get_popup_dialog=function(){return DOM.find(this.popup,"table.pop_dialog_table");}
function contextual_dialog(className){this.parent.construct(this,className);}
contextual_dialog.extend('generic_dialog');contextual_dialog.prototype.set_context=function(obj){this.context=obj;return this;}
contextual_dialog.prototype.set_modal=function(mod){this.modal=mod;return this;}
contextual_dialog.prototype.build_dialog=function(){this.parent.build_dialog();this.obj.className+=' contextual_dialog';this.popup.innerHTML='<div class="contextual_arrow"><span>^_^keke1</span></div><div class="contextual_dialog_content"></div>';this.arrow=this.popup.getElementsByTagName('div')[0];this.content=this.frame=this.popup.getElementsByTagName('div')[1];}
contextual_dialog.prototype.reset_dialog_obj=function(){var x=elementX(this.context);var documentOffsetWidth=DOMScroll.getScrollRoot().offsetWidth;var center=(documentOffsetWidth-this.popup.offsetWidth)/2;if(x<documentOffsetWidth/2){this.arrow.className='contextual_arrow_rev';var left=Math.min(center,x+this.context.offsetWidth-this.arrow_padding_x);var arrow=x-left+this.context.offsetWidth+this.arrow_padding_x;}else{this.arrow.className='contextual_arrow';var left=Math.max(center,x-this.popup.offsetWidth+this.arrow_padding_x);var arrow=x-left-this.arrow_padding_x-this.arrow_width;}
if(isNaN(left)){left=0;}
if(isNaN(arrow)){arrow=0;}
this.popup.style.top=(elementY(this.context)+this.context.offsetHeight-this.arrow.offsetHeight+this.arrow_padding_y)+'px';this.popup.style.left=left+'px';this.arrow.style.backgroundPosition=arrow+'px';}
contextual_dialog.prototype._remove_resize_events=function(){if(this._scroll_events){for(var i=0;i<this._scroll_events.length;i++){removeEventBase(this._scroll_events[i].obj,this._scroll_events[i].event,this._scroll_events[i].func);}}
this._scroll_events=[];}
contextual_dialog.prototype.show=function(){this._remove_resize_events();var obj=this.context;while(obj){if(obj.id!='content'&&(obj.scrollHeight&&obj.offsetHeight&&obj.scrollHeight!=obj.offsetHeight)||(obj.scrollWidth&&obj.offsetWidth&&obj.scrollWidth!=obj.offsetWidth)){var evt={obj:obj,event:'scroll',func:this.reset_dialog_obj.bind(this)};addEventBase(evt.obj,evt.event,evt.func);}
obj=obj.parentNode;}
var evt={obj:window,event:'resize',func:this.reset_dialog_obj.bind(this)};addEventBase(evt.obj,evt.event,evt.func);this.parent.show();}
contextual_dialog.prototype.hide=function(temp){this._remove_resize_events();this.parent.hide(temp);}
contextual_dialog.prototype.arrow_padding_x=5;contextual_dialog.prototype.arrow_padding_y=10;contextual_dialog.prototype.arrow_width=13;contextual_dialog.hide_all=function(callback){if(generic_dialog.dialog_stack){for(var i=0;i<generic_dialog.dialog_stack.length;i++){if(generic_dialog.dialog_stack[i].context&&generic_dialog.dialog_stack[i].arrow){generic_dialog.dialog_stack[i].hide();}}}
callback&&callback();}

function Dialog(model){Dialog._setup();this._pd=new pop_dialog();this._pd._dialog_object=this;this._show_loading=true;this._onload_handlers=[];if(model){this._setFromModel(model);}}
copy_properties(Dialog,{OK:{name:'ok',label:_tx("Okay")},CANCEL:{name:'cancel',label:_tx("Cancel"),className:'inputaux'},CLOSE:{name:'close',label:_tx("Close")},SAVE:{name:'save',label:_tx("Save")},SUBMIT:{name:'submit',label:_tx("Submit")},CONFIRM:{name:'confirm',label:_tx("Confirm")},DELETE:{name:'delete',label:_tx("Delete")}});copy_properties(Dialog,{OK_AND_CANCEL:[Dialog.OK,Dialog.CANCEL],_STANDARD_BUTTONS:[Dialog.OK,Dialog.CANCEL,Dialog.CLOSE,Dialog.SAVE,Dialog.SUBMIT,Dialog.CONFIRM,Dialog.DELETE],newButton:function(name,label,className,handler){var button={name:name,label:label}
if(className){button.className=className;}
if(handler){button.handler=handler;}
return button;},getCurrent:function(){var stack=generic_dialog.dialog_stack;if(!stack||stack.length==0){return null;}
return stack[stack.length-1]._dialog_object||null;},createCaptchaDialog:function(captchaHtml,closeHandler){var dialog=new Dialog().setClassName('captcha_dialog').setTitle(_tx("Security Check")).setBody(captchaHtml).setButtons([Dialog.SUBMIT,Dialog.CANCEL]).setCloseHandler(closeHandler).setModal().onloadRegister(create_captcha);return dialog;},createConfirmationDialog:function(confirmationHtml,title,button,closeHandler){var dialog=new Dialog().setClassName('confirm_dialog').setTitle(title).setBody(confirmationHtml).setButtons([button,Dialog.CANCEL]).setCloseHandler(closeHandler).setModal();return dialog;},showFormAjax:function(title,uri,button_label,reload_page_on_success){var dialog=new Dialog().setTitle(title);var form_id='dialog_ajax_form__'+gen_unique();var buttons=[Dialog.newButton(button_label.toLowerCase(),button_label),Dialog.CANCEL];dialog.setShowLoading(true).show();var preSubmitErrorHandler=function(response){if(response.getError()!=true){dialog.hide();ErrorDialog.showAsyncError(response);}else{dialog.setBody(response.getPayload()).setButtons(Dialog.OK).clearHandler().show();}};var preSubmitHandler=function(response){var contents='<form id="'+
form_id+'" onsubmit="return false;">'+
response.getPayload()+'</form>';dialog.setBody(contents).setButtons(buttons).setHandler(submitHandler).show();};var submitHandler=function(){new AsyncRequest().setURI(uri).setData(serialize_form(ge(form_id))).setHandler(postSubmitHandler).setErrorHandler(postSubmitErrorHandler).send();};var postSubmitHandler=function(response){dialog.setBody(response.getPayload()).setButtons([Dialog.OK]).show();if(reload_page_on_success){window.location.reload();}else{dialog.setAutohide(750);}};var postSubmitErrorHandler=function(response){if(response.getError()==kError_Global_ValidationError){preSubmitHandler(response);}else if(response.getError()!=true){ErrorDialog.showAsyncError(response);}else{preSubmitErrorHandler(response);}};new AsyncRequest().setURI(uri).setReadOnly(true).setHandler(preSubmitHandler).setErrorHandler(preSubmitErrorHandler).send();},_basicMutator:function(private_key){return function(value){this[private_key]=value;this._dirty();return this;};},_findButton:function(buttons,name){for(var i=0;i<buttons.length;++i){if(buttons[i].name==name){return buttons[i];}}
return null;},_setup:function(){if(Dialog._is_set_up){return;}
Dialog._is_set_up=true;var filter=function(event,type){return type=='onkeyup'&&KeyEventController.filterEventModifiers(event,type);};KeyEventController.registerKey('ESCAPE',Dialog._handleEscapeKey,filter);},_handleEscapeKey:function(event,type){var dialog=Dialog.getCurrent();if(!dialog){return true;}
var buttons=dialog._buttons;if(!buttons){return true;}
var cancel_button=Dialog._findButton(buttons,'cancel');if(cancel_button){var button_to_simulate=cancel_button;}else if(buttons.length==1){var button_to_simulate=buttons[0];}else{return true;}
dialog.handleButton(button_to_simulate);return false;}});copy_properties(Dialog.prototype,{show:function(){this._showing=true;this._dirty();return this;},hide:function(){this._showing=false;if(this._autohide_timeout){clearTimeout(this._autohide_timeout);this._autohide_timeout=null;}
if(!generic_dialog.dialog_stack||generic_dialog.dialog_stack.length==1){this._pd.fade_out(250);}else{this._pd.hide();}
return this;},getRoot:function(){return this._pd.obj;},setShowing:function(){this.show();return this;},setHiding:function(){this.hide();return this;},setTitle:Dialog._basicMutator('_title'),setBody:Dialog._basicMutator('_body'),setExtraData:Dialog._basicMutator('_extra_data'),setShowLoading:Dialog._basicMutator('_show_loading'),setFullBleed:Dialog._basicMutator('_full_bleed'),setImmediateRendering:Dialog._basicMutator('_immediate_rendering'),setUserData:Dialog._basicMutator('_user_data'),getUserData:function(){return this._user_data;},setAutohide:function(autohide){if(autohide){if(this._showing){this._autohide_timeout=setTimeout(bind(this,'hide'),autohide);}else{this._autohide=autohide;}}else{this._autohide=null;if(this._autohide_timeout){clearTimeout(this._autohide_timeout);this._autohide_timeout=null;}}
return this;},setSummary:Dialog._basicMutator('_summary'),setButtons:function(buttons){if(!(buttons instanceof Array)){buttons=[buttons];}
for(var i=0;i<buttons.length;++i){if(typeof(buttons[i])=='string'){var button=Dialog._findButton(Dialog._STANDARD_BUTTONS,buttons[i]);if(!button){Util.error('Unknown button: '+buttons[i]);}
buttons[i]=button;}}
this._buttons=buttons;this._dirty();return this;},setButtonsMessage:Dialog._basicMutator('_buttons_message'),setStackable:Dialog._basicMutator('_is_stackable'),setHandler:function(handler){this._handler=handler;return this;},setCancelHandler:function(cancelHandler){this._cancelHandler=cancelHandler;return this;},clearHandler:function(){return this.setHandler(null);},setPostURI:function(post_uri,asynchronous){if(asynchronous===undefined){asynchronous=true;}
if(asynchronous){this.setHandler(this._submitForm.bind(this,'POST',post_uri));}else{this.setHandler(function(){dynamic_post(post_uri,this.getFormData());this.hide();}.bind(this));}
return this;},setGetURI:function(get_uri){this.setHandler(this._submitForm.bind(this,'GET',get_uri));return this;},setModal:function(modal){if(modal===undefined){modal=true;}
if(this._showing&&this._modal&&!modal){Util.error("At the moment we don't support un-modal-ing a modal dialog");}
this._modal=modal;return this;},setDarkModal:function(dark){if(dark===undefined){dark=true;}
if(dark){this.setModal();}
this._pd.set_modal_setting('dark',dark);return this;},setContentWidth:function(width,fixed){this._content_width=width;if(fixed){this._resize(fixed);}else{this._dirty();}
return this;},setTitleLoading:function(loading){if(loading===undefined){loading=true;}
var header=DOM.find(this._pd.popup,'h2.dialog_title');CSS.conditionClass(header,'loading',loading);return this;},setClassName:Dialog._basicMutator('_class_name'),setCloseHandler:function(close_handler){this._close_handler=call_or_eval.bind(null,this,close_handler);this._pd.close_handler=this._close_handler;return this;},setFooter:Dialog._basicMutator('_footer'),setAutoFocus:Dialog._basicMutator('_auto_focus'),onloadRegister:function(handler){this._onload_handlers.push(handler.bind(this));return this;},setAsync:function(async_request){var handler=function(response){if(this._async_request!=async_request){return;}
this._async_request=null;var payload=response.getPayload();if(typeof(payload)=='string'){this.setBody(payload);}else{this._setFromModel(payload);}
this._update(true);}.bind(this);var hide=bind(this,'hide');async_request.setHandler(chain(async_request.getHandler(),handler)).setErrorHandler(chain(hide,async_request.getErrorHandler())).setTransportErrorHandler(chain(hide,async_request.getTransportErrorHandler())).send();this._async_request=async_request;this._dirty();return this;},_dirty:function(){if(!this._is_dirty){this._is_dirty=true;if(this._immediate_rendering){this._update();}else{bind(this,'_update').defer();}}},_update:function(even_if_not_dirty){if(!this._is_dirty&&even_if_not_dirty!==true){return;}
this._is_dirty=false;if(!this._showing){return;}
if(this._autohide&&!this._async_request&&!this._autohide_timeout){this._autohide_timeout=setTimeout(bind(this,'hide'),this._autohide);}
if(this._class_name){this._pd.setClassName(this._class_name);}
if(this._full_bleed){this._pd.setClassName('full_bleed');}
this._pd.set_auto_focus(this._auto_focus===undefined||this._auto_focus);if(!this._async_request||!this._show_loading){var html=[];if(this._title){html.push('<h2 class="dialog_title"><span>'+this._title+'</span></h2>');}
html.push('<div class="dialog_content">');if(this._summary){html.push('<div class="dialog_summary">');html.push(this._summary);html.push('</div>');}
html.push('<div class="dialog_body">');html.push(this._body);html.push('</div>');if((this._buttons&&this._buttons.length>0)||this._buttons_message){html.push('<div class="dialog_buttons">');if(this._buttons_message){html.push('<div class="dialog_buttons_msg">');html.push(this._buttons_message);html.push('</div>');}
if(this._buttons){this._buttons.forEach(function(button){html.push('<input class="inputsubmit '+(button.className||'')+'"'
+' type="button"'
+(button.name?(' name="'+button.name+'"'):'')
+' value="'+htmlspecialchars(button.label)+'"'
+' onclick="Dialog.getCurrent().handleButton(this.name);" />');},this);}
html.push('</div>');}
if(this._footer){html.push('<div class="dialog_footer">');html.push(this._footer);html.push('</div>');}
html.push('</div>');this._pd.show_dialog(html.join(''));for(var i=0;i<this._onload_handlers.length;++i){try{this._onload_handlers[i]();}catch(ex){Util.error('Uncaught exception in dialog onload hook: %x',ex);}}
this._onload_handlers=[];}else{var title=this._title||_tx("Loading...");this._pd.show_loading_title(title);}
if(this._modal){this._pd.make_modal();}
if(this._content_width){this._resize();}
this._pd.is_stackable=this._is_stackable;this._pd.close_handler=this._close_handler;},handleButton:function(button){if(typeof(button)=='string'){button=Dialog._findButton(this._buttons,button);}
if(!button){Util.error('Huh?  How did this button get here?');return;}
var value=call_or_eval(button,button.handler);if(value===false){return;}
if(button==Dialog.CANCEL){call_or_eval(this,this._cancelHandler);}else{if(call_or_eval(this,this._handler,{button:button})===false){return;}}
this.hide();},getButtonElement:function(button){if(typeof(button)=='string'){button=Dialog._findButton(this._buttons,button);}
if(!button||!button.name){return null;}
var inputs=DOM.scry(this._pd.popup,'input');var name_filter=function(elem){return elem.name==button.name;};return inputs.filter(name_filter)[0]||null;},_submitForm:function(method,uri,button){var data=this.getFormData();data[button.name]=button.label;if(this._extra_data){copy_properties(data,this._extra_data);}
var async_request=new AsyncRequest().setURI(uri).setData(data).setMethod(method).setReadOnly(method=='GET');this.setAsync(async_request);return false;},getFormData:function(){var dialog_content_divs=DOM.scry(this._pd.content,'div.dialog_content');if(dialog_content_divs.length!=1){Util.error(dialog_content_divs.length
+" dialog_content divs in this dialog?  Weird.");}
return serialize_form(dialog_content_divs[0]);},_setFromModel:function(model){for(var propertyName in model){var mutator=this['set'+propertyName.substr(0,1).toUpperCase()
+propertyName.substr(1)];if(!mutator){Util.error("Unknown Dialog property: "+propertyName);}
mutator.call(this,model[propertyName]);}},_resize:function(fixed){var popup=this._pd.get_popup_dialog();var offsetLeft=popup.offsetLeft;popup.style.width=(this._content_width+42)+'px';if(fixed){popup.style.marginLeft=offsetLeft+'px';}}});function ErrorDialog(){this.parent.construct(this);this.setClassName('errorDialog').setModal(true);this.setStackable(true);return this;}
ErrorDialog.extend('Dialog');copy_properties(ErrorDialog,{showAsyncError:function(response){try{return(new ErrorDialog()).showError(response.getErrorSummary(),response.getErrorDescription());}catch(ex){aiert(response);}}});copy_properties(ErrorDialog.prototype,{showError:function(title,message){return this.setTitle(title).setBody(message).setButtons([Dialog.OK]).show();}});

function resend_confirmation_email(){hide($('confirm_error'));hide($('confirm_status'));show($('confirm_progress'));new AsyncRequest().setURI('/ajax/confirm_email.php').setData({resend:1}).setHandler(function(response){hide($('confirm_progress'));if(response){var payload=response.getPayload();if(payload&&payload.success){DOM.setContent($('confirm_status'),HTML(payload.msg));show($('confirm_status'));}else{DOM.setContent($('confirm_error'),HTML(payload.msg));show($('confirm_error'));}}else{DOM.setContent($('confirm_error'),HTML(payload.msg));show($('confirm_error'));}}).send();}
function verify_confirmation_code(on_success_fn){hide($('confirm_error'));hide($('confirm_status'));show($('confirm_progress'));var data=serialize_form($('confirm_form'));new AsyncRequest().setURI('/ajax/confirm_email.php').setData(data).setHandler(function(response){hide($('confirm_progress'));if(response){var payload=response.getPayload();if(payload&&payload.success){DOM.setContent($('confirm_status'),HTML(payload.msg));show($('confirm_status'));if(ge('confirm_email_banner')){hide('confirm_email_banner');}
on_success_fn();}else{DOM.setContent($('confirm_error'),HTML(payload.msg));show($('confirm_error'));}}else{DOM.setContent($('confirm_error'),HTML(payload.msg));show($('confirm_error'));}}).send();return false;}
function handle_require_email_conf_response(target_fn,error_fn,precursor_fn,response){if(precursor_fn){precursor_fn();}
if(response){var payload=response.getPayload();if(payload&&payload.require_conf){var confirm_button=Dialog.newButton('confirm_email',_tx("Confirm"),null,bind(null,verify_confirmation_code,function(){Dialog.getCurrent().setAutohide(750);}));var dialog=new Dialog().setTitle(payload.dialog_title).setBody(payload.dialog_body).setButtons([confirm_button,Dialog.CANCEL]).show();}else if(target_fn){target_fn(response);}}else if(error_fn){error_fn(response);}}

var
kError_Global_ValidationError=1346001,kError_Login_GenericError=1348009,kError_Chat_NotAvailable=1356002,kError_Chat_SendOtherNotAvailable=1356003,kError_Async_NotLoggedIn=1357001,kError_Async_LoginChanged=1357003,kError_Async_CSRFCheckFailed=1357004,kError_Chat_TooManyMessages=1356008,kError_Platform_CallbackValidationFailure=1349007,kError_Platform_ApplicationResponseInvalid=1349008,kError_Gifts_NoGiftSelected=1391001,kError_Gifts_NoReceiverSpecified=1391003,kError_Gifts_NoMessageAttached=1391004,kError_RestrictionMessage_Featureblock=1395001,kError_RestrictionMessage_Featurewarning=1395002,kError_RestrictionMessage_Spamwarning=1395003,kError_Async_InternalCaptchaRequired=1357007,kError_Recruiting_MessageDeliveryFailed=1405001,kError_Intern_UnknownError=1408001,kError_Privacy_FriendListNameAlreadyExists=1409001,kError_Mobile_InvalidWapLocale=1347008,kError_Gifts_MessageTooLong=1391007,kError_Inbox_DuplicateMessages=1415001,kError_Async_ConfirmationRequired=1357008,kError_Gifter_GiftNotMoved=1416001,kError_Gifter_GiftNotCreated=1416002,kError_Gifter_GiftNotUpdated=1416003,kError_Gifter_DesignerNotAdded=1416004,kError_Gifter_GiftsNotLoaded=1416005,kError_Megaphone_InvalidHideData=1419001,kError_Megaphone_StoryNotFound=1419002,kError_Megaphone_InternalError=1419003,kError_Megaphone_HandleHideFailed=1419004,kError_Screenname_LimiteExceeded=1423001,kError_Screenname_AllocationError=1423002,kError_OpenId_RegistrationGeneralError=1428001,kError_OpenId_SignatureError=1428002,kError_OpenId_MissingRequiredInformation=1428003,kError_OpenId_ProtocolError=1428004,kError_OpenId_ProtocolErrorWithMessage=1428005,kError_OpenId_EmailAlreadyTaken=1428006,kError_Inbox_ThreadsUnavailable=1415002,kError_OpenId_CancelResponse=1428010,kError_OpenId_SetupNeededResponse=1428011;

function Rect(t,r,b,l,domain){if(this===window){if(t instanceof Rect){return t;}
return Rect.getElementBounds($(t));}
copy_properties(this,{t:t,r:r,b:b,l:l,domain:domain||'pure'});};copy_properties(Rect.prototype,{w:function(){return this.r-this.l;},h:function(){return this.b-this.t;},area:function(){return this.w()*this.h();},toString:function(){return'(('+this.l+', '+this.t+'), ('+this.r+', '+this.b+'))';},intersects:function(v){v=Rect(v).convertTo(this.domain);var u=this;if(u.l>v.r||v.l>u.r||u.t>v.b||v.t>u.b){return false;}
return true;},intersectingArea:function(v){v=Rect(v).convertTo(this.domain);var u=this;if(!this.intersects(v)){return null;}
return new Rect(Math.max(u.t,v.t),Math.min(u.r,v.r),Math.min(u.b,v.b),Math.max(u.l,v.l)).area();},contains:function(v){v=Rect(v).convertTo(this.domain);var u=this;if(v instanceof Vector2){return(u.l<=v.x&&u.r>=v.x&&u.t<=v.y&&u.b>=v.y);}else{return(u.l<=v.l&&u.r>=u.r&&u.t<=v.t&&u.b>=v.b);}},canContain:function(v){v=Rect(v).convertTo(this.domain);return(v.h()<=this.h())&&(v.w()<=this.w());},forceBelow:function(v,min){min=min||0;v=Rect(v).convertTo(this.domain);if(v.b>this.t){return this.offset(0,(v.b-this.t)+min);}
return this;},offset:function(x,y){return new Rect(this.t+y,this.r+x,this.b+y,this.l+x,this.domain);},expand:function(x,y){return new Rect(this.t,this.r+x,this.b+y,this.l,this.domain);},scale:function(x,y){y=y||x;return new Rect(this.t,this.l+(this.w()*x),this.t+(this.h()*y),this.l,this.domain);},setDimensions:function(x,y){return new Rect(this.t,this.l+x,this.t+y,this.l,this.domain);},setPosition:function(x,y){return new Rect(x,this.w(),this.h(),y,this.domain);},boundWithin:function(v){var x=0,y=0;if(this.l<v.l){x=v.l-this.l;}else if(this.r>v.r){x=v.r-this.r;}
if(this.t<v.t){y=v.t-this.t;}else if(this.b>v.b){y=v.b-this.b;}
return this.offset(x,y);},setElementBounds:function(el){this.getPositionVector().setElementPosition(el);this.getDimensionVector().setElementDimensions(el);return this;},getPositionVector:function(){return new Vector2(this.l,this.t,this.domain);},getDimensionVector:function(){return new Vector2(this.w(),this.h(),'pure');},convertTo:function(newDomain){if(this.domain==newDomain){return this;}
if(newDomain=='pure'){return new Rect(this.t,this.r,this.b,this.l,'pure');}
if(this.domain=='pure'){Util.error('Unable to convert a pure rect to %q coordinates.',newDomain);return new Rect(0,0,0,0);}
var p=new Vector2(this.l,this.t,this.domain).convertTo(newDomain);return new Rect(p.y,p.x+this.w(),p.y+this.h(),p.x,newDomain);},constrict:function(x,y){if(typeof(y)=='undefined'){y=x;}
x=x||0;return new Rect(this.t+y,this.r-x,this.b-y,this.l+x,this.domain);},expandX:function(){return new Rect(this.t,Number.POSITIVE_INFINITY,this.b,Number.NEGATIVE_INFINITY);},expandY:function(){return new Rect(number.NEGATIVE_INFINITY,this.r,Number.POSITIVE_INFINITY,this.l);},drawBox:function(color){var d=$N('div',{style:{position:'absolute',border:'2px solid '+(color||'red'),zIndex:'10000'}});this.setElementBounds(d);document.body.appendChild(d);}});copy_properties(Rect,{newFromVectors:function(pos,dim){return new Rect(pos.y,pos.x+dim.x,pos.y+dim.y,pos.x,pos.domain);},getElementBounds:function(el){return Rect.newFromVectors(Vector2.getElementPosition(el),Vector2.getElementDimensions(el));},getViewportBounds:function(){return Rect.newFromVectors(Vector2.getScrollPosition(),Vector2.getViewportDimensions());},getDocumentBounds:function(){return Rect.newFromVectors(new Vector2(0,0,'document'),Vector2.getDocumentDimensions());}});

function dropmenu(clickTarget){if(this==window){return new dropmenu(clickTarget);}else{this.className=null;this.menu=null;this.menuClickArea=null;this.showHandler=null;this.hideHandler=null;this.alignment=null;this.direction=null;this.isShown=false;this.canHide=false;this.show_hooks=[];this.hide_hooks=[];this.clickTarget=$(clickTarget);this.displayTarget=$(clickTarget);this.id=null;this.rtl=false;this._clickToHide=true;this._markupContentCallback=bagofholding;this.clickHandle=this.clickTarget.listen('click',this.toggle.bind(this));this.container=$('dropmenu_container')||document.body;return this;}}
dropmenu.ALIGN_RIGHT=1;dropmenu.ALIGN_LEFT=2;dropmenu.DIRECTION_UP=3;dropmenu.DIRECTION_DOWN=4;dropmenu.INSTANCES={};dropmenu.prototype.setPosition=function(alignment){this.alignment=alignment;return this;}
dropmenu.prototype.setDirection=function(direction){this.direction=direction;return this;}
dropmenu.prototype.setMenuClickArea=function(id){this.menuClickArea=$(id);return this;}
dropmenu.prototype.setDisplayTarget=function(id){this.displayTarget=$(id);return this;}
dropmenu.prototype.setClickToHide=function(click_to_hide){this._clickToHide=click_to_hide;return this;}
dropmenu.prototype.setMarkupContent=function(id,className,markup){this.menuContent=markup;this.className=className;this.id=id;return this;}
dropmenu.prototype.setMarkupContentCallback=function(fn){this._markupContentCallback=fn;return this;}
dropmenu.prototype._getMarkupContent=function(){return this.menuContent||this._markupContentCallback();}
dropmenu.prototype.registerHTMLMenu=function(menu_id){this.registered_menu_id=menu_id;return this;}
dropmenu.prototype.addHook=function(type,fn){this[type+'_hooks'].push(fn);return this;}
dropmenu.prototype.removeHook=function(type,fn){for(var i=0;i<this[type+'_hooks'].length;i++){if(fn==this[type+'_hooks'][i]){this[type+'_hooks'].splice(i,1);return true;}}
return this;}
dropmenu.prototype.toggle=function(e){if(!this.isShown){this._show();this.canHide=false;}else{this._hide();}
$E(e).prevent();}
dropmenu.prototype.show=function(){this._show();}
dropmenu.prototype.hide=function(){if(!this.menu){return;}
this._hide();}
dropmenu.prototype.destroy=function(){if(this.menu&&this.menu.parentNode){this.menu.parentNode.removeChild(this.menu);this.menu=null;}}
dropmenu.prototype._buildMenu=function(){if(intl_locale_is_rtl()&&!this.rtl){this.alignment=(this.alignment==dropmenu.ALIGN_RIGHT)?dropmenu.ALIGN_LEFT:dropmenu.ALIGN_RIGHT;this.rtl=true;}
if(this.registered_menu_id){this.menu=$(this.registered_menu_id);if(this.alignment||this.direction){this.container.appendChild(this.menu);}}else{this._buildDynamicMenu();}
dropmenu.INSTANCES[this.id]=this;this.menuClickArea=this.menuClickArea||DOM.scry(this.menu,'div.menu_content');this.menuClickArea.onclick=chain(this.menuClickArea.onclick,Event.stop);var menu_links=DOM.scry(this.menu,'a');for(var i=0;i<menu_links.length;i++){addEventBase(menu_links[i],'click',function(){if(this._clickToHide){this._hide();}}.bind(this),this.menu_id+'_link_'+i);}}
dropmenu.prototype._buildDynamicMenu=function(){this.menu=document.createElement('div');this.menu.className='dropdown_menu hidden_elem '+(this.className?' '+this.className:'');this.menu.id='dropdown_menu_'+this.id;var markupContent=this._getMarkupContent();if(!is_scalar(markupContent)){DOM.setContent(this.menu,markupContent);}else{set_inner_html(this.menu,markupContent);}
this.container.appendChild(this.menu);}
dropmenu.prototype._positionMenu=function(){if(this.alignment||this.direction||(!this.alignment&&!this.direction&&!this.registered_menu_id)){if(this.menu.parentNode!=this.container){this.container.appendChild(this.menu);}
var menuPos=Vector2.getElementPosition(this.displayTarget,'document');var contPos=Vector2.getElementPosition(this.container,'document');var x=menuPos.x-contPos.x;var y=menuPos.y-contPos.y+this.displayTarget.offsetHeight;if(this.alignment==dropmenu.ALIGN_RIGHT||this.direction==dropmenu.DIRECTION_UP){CSS.removeClass(this.menu,'hidden_elem');this.menu.style.left='-9999px';this.menu.style.top='-9999px';if(this.alignment==dropmenu.ALIGN_RIGHT){var menu_width=this.menu.offsetWidth;x=x+this.displayTarget.offsetWidth-menu_width;}
if(this.direction==dropmenu.DIRECTION_UP){var menu_height=this.menu.offsetHeight;y=y-this.displayTarget.offsetHeight-menu_height+1;}
CSS.addClass(this.menu,'hidden_elem');}
this.menu.style.left=x+'px';this.menu.style.top=y+'px';}}
dropmenu.prototype._onclick=function(event){this._hide();return false;}
dropmenu.prototype._show=function(){if(!this.menu){this._buildMenu();}
this._positionMenu();CSS.removeClass(this.menu,'hidden_elem');var hide=this._documentHideHandler.bind(this);this.click_event=addEventBase(document.body,'click',hide,this.menu.id);onbeforeunloadRegister(hide);this.isShown=true;for(var i=0;i<this.show_hooks.length;i++){this.show_hooks[i]();}}
dropmenu.prototype._documentHideHandler=function(e){if(!this.canHide){this.canHide=true;}else{this._hide();}}
dropmenu.prototype._hide=function(){if(this.menu){CSS.addClass(this.menu,'hidden_elem');removeEventBase(document.body,'click',this.click_event,this.menu.id);}
this.click_event=null;this.isShown=false;for(var i=0;i<this.hide_hooks.length;i++){this.hide_hooks[i]();}
if(!this.registered_menu_id){this.destroy();}}
dropmenu.prototype._build_menu_shim=function(){this.shim=null;if(ua.ie()<7){this.shim=document.createElement('iframe');CSS.setClass(shim,'iframe_shim');this.container.appendChild(this.shim);}}
dropmenu.getExistingInstance=function(id){return dropmenu.INSTANCES[id];}
function flyout_menu(clickTarget){if(this==window){return new flyout_menu(clickTarget);}else{this.title='';this.parent.construct(this,clickTarget);}}
flyout_menu.extend('dropmenu');flyout_menu.prototype.setMarkupContent=function(id,className,title,markup){this.parent.setMarkupContent(id,className,markup);this.title=title;return this;}
flyout_menu.prototype.setIconPosition=function(iconElem){this.iconElem=iconElem;return this;}
flyout_menu.prototype._buildDynamicMenu=function(){this.menu=document.createElement('div');CSS.addClass(this.menu,(this.className||'')+' flyout_menu hidden_elem');if(this.alignment==dropmenu.ALIGN_RIGHT){CSS.addClass(this.menu,'flyout_menu_left');}
this.menu.id='flyout_menu_'+this.id;var menuContentId='content_'+this.id;var html=[];html.push('<div class="flyout_menu_header_shadow">');html.push('<div class="flyout_menu_header clearfix">');html.push('<div class="flyout_menu_mask"></div>');html.push('<div class="flyout_menu_title">'+this.title+'</div>');html.push('</div></div>');html.push('<div class="flyout_menu_content_shadow">');html.push('<div class="menu_content" id="content_'+this.id+'">');html.push('</div></div>');set_inner_html(this.menu,html.join(''));this.container.appendChild(this.menu);var markupContent=this._getMarkupContent();if(!is_scalar(markupContent)){DOM.setContent($(menuContentId),markupContent);}else{set_inner_html($(menuContentId),markupContent);}
this.menuClickArea=$(menuContentId);}
flyout_menu.prototype._positionMenu=function(){if(this.alignment||(!this.alignment&&!this.registered_menu_id)){var x;var icon_anchor=this.iconElem?this.iconElem:this.clickTarget;switch(this.alignment){case dropmenu.ALIGN_LEFT:case null:x=elementX(icon_anchor)-elementX(this.container);break;case dropmenu.ALIGN_RIGHT:this.menu.style.left='-9999px';this.menu.style.top='-9999px';CSS.removeClass(this.menu,'hidden_elem');var menuWidth=Vector2.getElementDimensions(this.menu).x;var right_anchor_pos=Rect.getElementBounds(icon_anchor).r-elementX(this.container);var padding=4;x=right_anchor_pos-menuWidth+padding*2;CSS.addClass(this.menu,'hidden_elem');break;}
var y=elementY(icon_anchor)-elementY(this.container);this.menu.style.left=x+'px';this.menu.style.top=y+'px';}}
function hover_menu(clickTarget){if(this==window){return new hover_menu(clickTarget);}else{this.parent.construct(this,clickTarget);this.timeOut=0;this.clickHandle.remove();this.enterTimer=null;this.exitTimer=null;}}
hover_menu.extend('dropmenu');hover_menu.prototype.setTimeoutInterval=function(time){this.timeOut=time;return this;}
hover_menu.prototype._clickTarget_onmouseover=function(target,e){this.enterTimer=setTimeout(function(){this._show();}.bind(this),this.timeOut);clearTimeout(this.exitTimer);}
hover_menu.prototype._clickTarget_onmouseout=function(target,e){e=e||window.event;var relatedTarget=(e.relatedTarget)?e.relatedTarget:e.toElement;if(DOM.contains(target,relatedTarget)){return;}
if(!DOM.contains(this.menu,relatedTarget)){this.exitTimer=setTimeout(function(){this._hide();}.bind(this),this.timeOut);}
clearTimeout(this.enterTimer);}
hover_menu.prototype._menu_onmouseover=function(target,e){clearTimeout(this.exitTimer);}
hover_menu.prototype._menu_onmouseout=function(target,e){e=e||window.event;var relatedTarget=(e.relatedTarget)?e.relatedTarget:e.toElement;if(DOM.contains(target,relatedTarget)){return;}
this.exitTimer=setTimeout(function(){this._hide();}.bind(this),this.timeOut);clearTimeout(this.enterTimer);}
hover_menu.prototype.initialize=function(){if(!this.menu){this._buildMenu();}
this.clickTarget.listen('mouseover',this._clickTarget_onmouseover.bind(this,this.clickTarget));this.clickTarget.listen('mouseout',this._clickTarget_onmouseout.bind(this,this.clickTarget));this.menu.listen('mouseout',this._menu_onmouseout.bind(this,this.menu));this.menu.listen('mouseover',this._menu_onmouseover.bind(this,this.menu));this._positionMenu();}

function KeyEventController(){copy_properties(this,{handlers:{}});document.onkeyup=this.onkeyevent.bind(this,'onkeyup');document.onkeydown=this.onkeyevent.bind(this,'onkeydown');document.onkeypress=this.onkeyevent.bind(this,'onkeypress');}
copy_properties(KeyEventController,{instance:null,getInstance:function(){return KeyEventController.instance||(KeyEventController.instance=new KeyEventController());},defaultFilter:function(event,type){event=$E(event);return KeyEventController.filterEventTypes(event,type)&&KeyEventController.filterEventTargets(event,type)&&KeyEventController.filterEventModifiers(event,type);},filterEventTypes:function(event,type){if(type==='onkeydown'){return true;}
return false;},filterEventTargets:function(event,type){var target=$E(event).getTarget();if(DOM.isNode(target,['input','select','textarea','object','embed'])){if(target.type!='checkbox'&&target.type!='radio'){return false;}}
return true;},filterEventModifiers:function(event,type){if(event.ctrlKey||event.altKey||event.metaKey||event.repeat){return false;}
return true;},registerKey:function(key,callback,filter_callback){if(filter_callback===undefined){filter_callback=KeyEventController.defaultFilter;}
var ctl=KeyEventController.getInstance();var eqv=ctl.mapKey(key);if(is_empty(ctl.handlers)){onunloadRegister(ctl.resetHandlers.bind(ctl));}
for(var ii=0;ii<eqv.length;ii++){key=eqv[ii];if(!ctl.handlers[key]){ctl.handlers[key]=[];}
ctl.handlers[key].push({callback:callback,filter:filter_callback});}},keyCodeMap:{'[':[219],']':[221],'`':[192],'LEFT':[KEYS.LEFT,KeyCodes.Left],'RIGHT':[KEYS.RIGHT,KeyCodes.Right],'RETURN':[KEYS.RETURN],'TAB':[KEYS.TAB],'DOWN':[KEYS.DOWN,KeyCodes.Down],'UP':[KEYS.UP,KeyCodes.Up],'ESCAPE':[KEYS.ESC]}});copy_properties(KeyEventController.prototype,{mapKey:function(k){if(typeof(k)=='number'){return[k];}
if(KeyEventController.keyCodeMap[k.toUpperCase()]){return KeyEventController.keyCodeMap[k.toUpperCase()];}
var l=k.charCodeAt(0);var u=k.toUpperCase().charCodeAt(0);if(l!=u){return[l,u];}
return[l];},onkeyevent:function(type,e){e=$E(e);var evt=null;var handlers=this.handlers[e.keyCode];var callback,filter,abort;if(handlers){for(var ii=0;ii<handlers.length;ii++){callback=handlers[ii].callback;filter=handlers[ii].filter;try{if(!filter||filter(e,type)){abort=callback(e,type);if(abort===false){return Event.kill(e);}}}catch(exception){Util.error('Uncaught exception in key handler: %x',exception);}}}
return true;},resetHandlers:function(){this.handlers={};}});

function rand32(){return Math.floor(Math.random()*4294967295);}

function html_wordwrap(str,wrap_limit,txt_fn){if(typeof wrap_limit=='undefined'){wrap_limit=60;}
if(typeof txt_fn!='function'){txt_fn=htmlize;}
var regex=new RegExp("\\S{"+(wrap_limit+1)+"}",'g');var start=0;var str_remaining=str;var ret_arr=[];var matches=str.match(regex);if(matches){for(var i=0;i<matches.length;i++){var match=matches[i];var match_index=start+str_remaining.indexOf(match);var chunk=str.substring(start,match_index);if(chunk){ret_arr.push(txt_fn(chunk));}
ret_arr.push(txt_fn(match)+'<wbr/>');start=match_index+match.length;str_remaining=str.substring(start);}}
if(str_remaining){ret_arr.push(txt_fn(str_remaining));}
return ret_arr.join('');}
function text_get_hyperlinks(str){if(typeof(str)!='string'){return[];}
return str.match(/(?:(?:ht|f)tps?):\/\/[^\s<]*[^\s<\.)]/ig);}
function html_hyperlink(str,txt_fn,url_fn,reroute){var accepted_delims={'<':'>','*':'*','{':'}','[':']',"'":"'",'"':'"','#':'#','+':'+','-':'-','(':')'};if(typeof(str)=='undefined'||!str.toString){return'';}
if(typeof txt_fn!='function'){txt_fn=htmlize;}
if(typeof url_fn!='function'){url_fn=htmlize;}
var str=str.toString();var http_matches=text_get_hyperlinks(str);var start=0;var str_remaining=str;var ret_arr=[];var str_remaining=str;if(http_matches){var post_form_elem=reroute?ge('post_form_id'):null;var post_form_id=post_form_elem?post_form_elem.value:'';for(var i=0;i<http_matches.length;i++){var http_url=http_matches[i];var http_index=start+str_remaining.indexOf(http_url);var str_len=http_url.length;var non_url=str.substring(start,http_index);if(non_url){ret_arr.push(txt_fn(non_url));}
var trailing='';if(http_index>0){var delim=str[http_index-1];if(typeof accepted_delims[delim]!='undefined'){var end_delim=accepted_delims[delim];var end_delim_index=http_url.indexOf(end_delim);if(end_delim_index!=-1){trailing=txt_fn(http_url.substring(end_delim_index));http_url=http_url.substring(0,end_delim_index);}}}
var http_str=url_fn(http_url);if(reroute){var http_url_quote_escape="http://www.facebook.com/l.php?u="+
URI.encodeComponent(http_url)+'&h='+post_form_id;}else{var http_url_quote_escape=http_url.replace(/"/g,'%22');}
ret_arr.push('<a href="'+http_url_quote_escape+'" target="_blank" rel="nofollow">'+
http_str+'</a>'+trailing);start=http_index+str_len;str_remaining=str.substring(start);}}
if(str_remaining){ret_arr.push(txt_fn(str_remaining));}
return ret_arr.join('');}
function nl2br(text){if(typeof(text)=='undefined'||!text.toString){return'';}
return text.toString().replace(/\n/g,'<br />');}
function is_email(email){return/^([\w!.%+\-])+@([\w\-])+(?:\.[\w\-]+)+$/.test(email);}

function UISelectList(){this._callback=bagofholding;this.container=$N('div',{className:'UISelectList clearfix'});this._mode=UISelectList.MULTI_SELECT_MODE;this._inputName='UISelectList_name_'+gen_unique();this._inputs=null;this._labels=null;}
copy_properties(UISelectList,{MULTI_SELECT_MODE:1,SINGLE_SELECT_MODE:2,MULTI_SELECT_MODE_CHECKED_CLASS_NAME:'UISelectList_check_Checked',SINGLE_SELECT_MODE_CHECKED_CLASS_NAME:'UISelectList_radio_Checked'});UISelectList.prototype={setMode:function(mode){if(mode!=UISelectList.MULTI_SELECT_MODE&&mode!=UISelectList.SINGLE_SELECT_MODE){Util.error('invalid mode %s passed to UISelectList.selectMode',mode);return this;}
if(DOM.scry(this.container,'div.UISelectList_Item').length){Util.error("You have to set `mode' before adding any items to "+"UISelectList");return this;}
this._mode=mode;return this;},setCallback:function(fn){this._callback=fn;return this;},addItem:function(label,checked,key){var item={label:label,checked:checked,key:key};this._renderItem(item);return this;},addItems:function(new_items){for(var k=0;k<new_items.length;k++){this.addItem(new_items[k].label,new_items[k].checked,new_items[k].key);}
return this;},clearItems:function(){DOM.empty(this.container);return this;},getElement:function(){return this.container;},reset:function(){var inputs=this._getInputs();var labels=this._getLabels();for(var i=0;i<inputs.length;i++){inputs[i].checked=inputs[i].defaultChecked;CSS.conditionClass(labels[i],this._getCheckedClass(),inputs[i].checked);}},_renderItem:function(item){var input_id='UISelectList'+gen_unique();var input=$N('input',{type:this._getInputType(),id:input_id,name:this._inputName});input.checked=item.checked;input.defaultChecked=item.checked;var link=$N('a',{className:'UISelectList_Label',href:'#'},item.label);if(item.checked){link.addClass(this._getCheckedClass());}
link.listen('click',Event.kill);link.listen('mouseup',this._linkClicked.bind(this,input));input.listen('click',this._clicked.bind(this,input,link,item.key));this.container.appendContent($N('div',{className:'UISelectList_Item'},[input,link]));},_getInputs:function(){return this._inputs||(this._inputs=DOM.scry(this.container,'input'));},_getLabels:function(){return this._labels||(this._labels=DOM.scry(this.container,'a.UISelectList_Label'));},_getInputType:function(){if(this._mode==UISelectList.MULTI_SELECT_MODE){return'checkbox';}
return'radio';},_getCheckedClass:function(){if(this._mode==UISelectList.MULTI_SELECT_MODE){return UISelectList.MULTI_SELECT_MODE_CHECKED_CLASS_NAME;}
return UISelectList.SINGLE_SELECT_MODE_CHECKED_CLASS_NAME;},_linkClicked:function(input,e){input.click();},_clicked:function(input,label,key,e){var clickedElemChecked;if(this._mode==UISelectList.SINGLE_SELECT_MODE){var inputs=this._getInputs();var labels=this._getLabels();if(inputs.length!=labels.length){Util.log('error');return $E(e).stop();}
for(var i=0;i<inputs.length;i++){var checked=input==inputs[i];CSS.conditionClass(labels[i],this._getCheckedClass(),checked);}
clickedElemChecked=true;}else{clickedElemChecked=input.checked;CSS.conditionClass(label,this._getCheckedClass(),input.checked);}
this._callback(clickedElemChecked,key);$E(e).stop();}};

function MenuBar(core_menu_id){this.core_menu_id=core_menu_id;this.core_menu=$(core_menu_id);this.menus=DOM.scry(this.core_menu,'li.fb_menu');this.timeout=250;}
copy_properties(MenuBar.prototype,{setTimeoutInterval:function(timeout){this.timeout=timeout;return this;},init:function(){var i;for(i=0;i<this.menus.length;i++){var menu=this.menus[i];var dropdown_id=menu.id+'_dropdown';if(ge(dropdown_id)){var menu_anchor=menu.firstChild.firstChild;var dropdown=$(dropdown_id);hover_menu(menu_anchor).registerHTMLMenu(dropdown_id).setPosition(dropmenu.ALIGN_LEFT).setTimeoutInterval(this.timeout).addHook('show',bind(this,'_onShowCallback',menu_anchor,dropdown)).addHook('hide',bind(this,'_onHideCallback',menu_anchor)).initialize();}}},_onShowCallback:function(clickTarget,menuElement){CSS.addClass(clickTarget,'hover');var scroller=window['ScrollArea']&&ScrollArea.getInnerInstance(menuElement);if(scroller){scroller.moveTo(0);}},_onHideCallback:function(clickTarget){CSS.removeClass(clickTarget,'hover');}});

function search_selector_onfound(result){var n;if(!(n=ge('n'))){return;}
n.value=result?result.i:-1;}
function search_result_selector_onsubmit(result){$('search').init.value=ge('filter_init')?$('filter_init').value:'';$('search').sf.value=ge('filter_sf')?$('filter_sf').value:'';$('search').submit();this.hide();this.advance_focus();}
function search_logged_ajax(data){new AsyncSignal('/ajax/search_log.php',data).send();}
function search_log_2nd_action(data){new AsyncRequest().setURI('/ajax/search_log_2nd_action.php').setMethod('POST').setReadOnly(true).setContextData('clicktype',data).setHandler(function(){}).send();}
function search_typeahead_log(data,evt,timestart){if(!data){return;}
var moddata=data;if(evt){moddata.evt=evt;}
moddata.t=(new Date()).getTime();if(timestart){moddata.dt=moddata.t-timestart;}
new AsyncSignal('/ajax/typeahead_log.php',moddata).send();}
var SearchDashboardKeyboardHandler=function(){return{right_arrow_key_handler:function(event,type){if(event.ctrlKey){if($('search_dashboard_next_session').href){goURI($('search_dashboard_next_session').href);}}else{if($('search_dashboard_next_query').href){goURI($('search_dashboard_next_query').href);}}
return false;},left_arrow_key_handler:function(event,type){if(event.ctrlKey){if($('search_dashboard_prev_session').href){goURI($('search_dashboard_prev_session').href);}}else{if($('search_dashboard_prev_query').href){goURI($('search_dashboard_prev_query').href);}}
return false;},right_arrow_key_filter:function(event,type){return true;}}}();

if(!this.JSON){this.JSON=function(){function f(n){return n<10?'0'+n:n;}
Date.prototype.toJSON=function(){return this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z';};var m={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};function stringify(value,whitelist){var a,i,k,l,v;switch(typeof value){case'string':return(new RegExp('[\x00-\x1f\\\\"]')).test(value)?'"'+value.replace(/[\x00-\x1f\\"]/g,function(a){var c=m[a];if(c){return c;}
c=a.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+
(c%16).toString(16);})+'"':'"'+value+'"';case'number':return isFinite(value)?String(value):'null';case'boolean':return String(value);case'null':return'null';case'object':if(DOM.isNode(value)){return null;}
if(!value){return'null';}
if(typeof value.toJSON==='function'){return stringify(value.toJSON());}
a=[];if(typeof value.length==='number'&&!(propertyIsEnumerable(value,'length'))){l=value.length;for(i=0;i<l;i+=1){a.push(stringify(value[i],whitelist)||'null');}
return'['+a.join(',')+']';}
if(whitelist){l=whitelist.length;for(i=0;i<l;i+=1){k=whitelist[i];if(typeof k==='string'){v=stringify(value[k],whitelist);if(v){a.push(stringify(k)+':'+v);}}}}else{for(k in value){if(typeof k==='string'){v=stringify(value[k],whitelist);if(v){a.push(stringify(k)+':'+v);}}}}
return'{'+a.join(',')+'}';}}
return{stringify:stringify,parse:function(text,filter){var j;function walk(k,v){var i,n;if(v&&typeof v==='object'){for(i in v){if(Object.prototype.hasOwnProperty.apply(v,[i])){n=walk(i,v[i]);if(n!==undefined){v[i]=n;}}}}
return filter(k,v);}
if(text&&/^[\],:{}\s]*$/.test(text.replace(/\\./g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(:?[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof filter==='function'?walk('',j):j;}
throw new SyntaxError('decodeJSON');}};}();}
this.JSON.encode=this.JSON.stringify;this.JSON.decode=this.JSON.parse;function propertyIsEnumerable(o,p){if(o.propertyIsEnumerable){return o.propertyIsEnumerable(p);}
for(var prop in o){if(prop==p)return true;}
return false;}

if (window.Bootloader) { Bootloader.done(["js\/6a1bbnrfz64os8cc.pkg.js"]); }