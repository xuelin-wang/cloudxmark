// Compiled by ClojureScript 1.9.89 {}
goog.provide('cloudxmark.core');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('goog.dom');
goog.require('goog.Uri');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('goog.net.Jsonp');
goog.require('clojure.string');
goog.require('om.core');
goog.require('om.next');
cljs.core.enable_console_print_BANG_.call(null);
cloudxmark.core.wiki_url = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
cloudxmark.core.jsonp = (function cloudxmark$core$jsonp(var_args){
var args98334 = [];
var len__22617__auto___98337 = arguments.length;
var i__22618__auto___98338 = (0);
while(true){
if((i__22618__auto___98338 < len__22617__auto___98337)){
args98334.push((arguments[i__22618__auto___98338]));

var G__98339 = (i__22618__auto___98338 + (1));
i__22618__auto___98338 = G__98339;
continue;
} else {
}
break;
}

var G__98336 = args98334.length;
switch (G__98336) {
case 1:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args98334.length)].join('')));

}
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return cloudxmark.core.jsonp.call(null,cljs.core.async.chan.call(null),uri);
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2 = (function (c,uri){
var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));
cljs.core.println.call(null,[cljs.core.str("before send "),cljs.core.str(uri)].join(''));

gjsonp.send(null,((function (gjsonp){
return (function (p1__98332_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__98332_SHARP_);
});})(gjsonp))
,((function (gjsonp){
return (function (p1__98333_SHARP_){
return cljs.core.println.call(null,[cljs.core.str("error!"),cljs.core.str(p1__98333_SHARP_)].join(''));
});})(gjsonp))
);

return c;
});

cloudxmark.core.jsonp.cljs$lang$maxFixedArity = 2;

cloudxmark.core.event_chan = cljs.core.async.chan.call(null);
if(typeof cloudxmark.core.read !== 'undefined'){
} else {
cloudxmark.core.read = (function (){var method_table__22457__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22458__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22459__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22460__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22461__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cloudxmark.core","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22461__auto__,method_table__22457__auto__,prefer_table__22458__auto__,method_cache__22459__auto__,cached_hierarchy__22460__auto__));
})();
}
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),(function (p__98341,_,p__98342){
var map__98343 = p__98341;
var map__98343__$1 = ((((!((map__98343 == null)))?((((map__98343.cljs$lang$protocol_mask$partition0$ & (64))) || (map__98343.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__98343):map__98343);
var env = map__98343__$1;
var state = cljs.core.get.call(null,map__98343__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__98343__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__98344 = p__98342;
var map__98344__$1 = ((((!((map__98344 == null)))?((((map__98344.cljs$lang$protocol_mask$partition0$ & (64))) || (map__98344.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__98344):map__98344);
var query = cljs.core.get.call(null,map__98344__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wiki","wiki",1946329928),new cljs.core.Keyword(null,"lst","lst",269745987)], null),cljs.core.PersistentVector.EMPTY)], null),(((clojure.string.blank_QMARK_.call(null,query)) || ((cljs.core.count.call(null,query) < (3))))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122),ast], null)));
}));
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword(null,"lst","lst",269745987),(function (p__98347,_,p__98348){
var map__98349 = p__98347;
var map__98349__$1 = ((((!((map__98349 == null)))?((((map__98349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__98349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__98349):map__98349);
var env = map__98349__$1;
var state = cljs.core.get.call(null,map__98349__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__98349__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__98350 = p__98348;
var map__98350__$1 = ((((!((map__98350 == null)))?((((map__98350.cljs$lang$protocol_mask$partition0$ & (64))) || (map__98350.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__98350):map__98350);
var query_ver = cljs.core.get.call(null,map__98350__$1,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var query_user = cljs.core.get.call(null,map__98350__$1,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var map__98353 = lst;
var map__98353__$1 = ((((!((map__98353 == null)))?((((map__98353.cljs$lang$protocol_mask$partition0$ & (64))) || (map__98353.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__98353):map__98353);
var lsts = cljs.core.get.call(null,map__98353__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr = cljs.core.get.call(null,map__98353__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var ver = cljs.core.get.call(null,map__98353__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__98353__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var status = cljs.core.get.call(null,map__98353__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
cljs.core.println.call(null,[cljs.core.str("curruser:"),cljs.core.str(user_id),cljs.core.str(",query ver:"),cljs.core.str(query_ver),cljs.core.str(", ver:"),cljs.core.str(ver),cljs.core.str(",query-user:"),cljs.core.str(query_user)].join(''));

if(cljs.core._EQ_.call(null,query_user,new cljs.core.Keyword(null,"logout","logout",1418564329))){
if(cljs.core.some_QMARK_.call(null,user_id)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst-search","lst-search",371565861),ast], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),lst], null);
}
} else {
if((cljs.core.some_QMARK_.call(null,user_id)) && (((query_ver > ver)) || ((lsts == null)))){
cljs.core.println.call(null,[cljs.core.str("remote query lists:"),cljs.core.str((lsts == null))].join(''));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst-search","lst-search",371565861),ast], null);
} else {
if(((user_id == null)) && (cljs.core.some_QMARK_.call(null,query_user))){
cljs.core.println.call(null,[cljs.core.str("remote query lists ast:"),cljs.core.str(ast)].join(''));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst-search","lst-search",371565861),ast], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),lst], null);

}
}
}
}));
if(typeof cloudxmark.core.mutate !== 'undefined'){
} else {
cloudxmark.core.mutate = (function (){var method_table__22457__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22458__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22459__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22460__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22461__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cloudxmark.core","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22461__auto__,method_table__22457__auto__,prefer_table__22458__auto__,method_cache__22459__auto__,cached_hierarchy__22460__auto__));
})();
}
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null),(function (p__98355,_,p__98356){
var map__98357 = p__98355;
var map__98357__$1 = ((((!((map__98357 == null)))?((((map__98357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__98357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__98357):map__98357);
var env = map__98357__$1;
var state = cljs.core.get.call(null,map__98357__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__98358 = p__98356;
var map__98358__$1 = ((((!((map__98358 == null)))?((((map__98358.cljs$lang$protocol_mask$partition0$ & (64))) || (map__98358.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__98358):map__98358);
var status = map__98358__$1;
var id = cljs.core.get.call(null,map__98358__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__98357,map__98357__$1,env,state,map__98358,map__98358__$1,status,id){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before setfield: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),id], null),status);

return cljs.core.println.call(null,[cljs.core.str("state after setfield: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});})(map__98357,map__98357__$1,env,state,map__98358,map__98358__$1,status,id))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-state","lst/set-state",-1310328019,null),(function (p__98361,_,p__98362){
var map__98363 = p__98361;
var map__98363__$1 = ((((!((map__98363 == null)))?((((map__98363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__98363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__98363):map__98363);
var env = map__98363__$1;
var state = cljs.core.get.call(null,map__98363__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__98364 = p__98362;
var map__98364__$1 = ((((!((map__98364 == null)))?((((map__98364.cljs$lang$protocol_mask$partition0$ & (64))) || (map__98364.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__98364):map__98364);
var path = cljs.core.get.call(null,map__98364__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var merge_QMARK_ = cljs.core.get.call(null,map__98364__$1,new cljs.core.Keyword(null,"merge?","merge?",-2004416151));
var value = cljs.core.get.call(null,map__98364__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__98363,map__98363__$1,env,state,map__98364,map__98364__$1,path,merge_QMARK_,value){
return (function (){
var new_value = (cljs.core.truth_(merge_QMARK_)?cljs.core.merge.call(null,cljs.core.get_in.call(null,state,path),value):value);
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,path,new_value);
});})(map__98363,map__98363__$1,env,state,map__98364,map__98364__$1,path,merge_QMARK_,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null),(function (p__98367,_,data_map){
var map__98368 = p__98367;
var map__98368__$1 = ((((!((map__98368 == null)))?((((map__98368.cljs$lang$protocol_mask$partition0$ & (64))) || (map__98368.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__98368):map__98368);
var env = map__98368__$1;
var state = cljs.core.get.call(null,map__98368__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__98368,map__98368__$1,env,state){
return (function (){
var map__98370 = data_map;
var map__98370__$1 = ((((!((map__98370 == null)))?((((map__98370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__98370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__98370):map__98370);
var field_id = cljs.core.get.call(null,map__98370__$1,new cljs.core.Keyword(null,"field-id","field-id",-353751335));
var value = cljs.core.get.call(null,map__98370__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),field_id], null),value);
});})(map__98368,map__98368__$1,env,state))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","login","lst/login",1697497083,null),(function (p__98372,_,data_map){
var map__98373 = p__98372;
var map__98373__$1 = ((((!((map__98373 == null)))?((((map__98373.cljs$lang$protocol_mask$partition0$ & (64))) || (map__98373.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__98373):map__98373);
var env = map__98373__$1;
var state = cljs.core.get.call(null,map__98373__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__98373,map__98373__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("data-map:"),cljs.core.str(data_map)].join(''));

var map__98375 = data_map;
var map__98375__$1 = ((((!((map__98375 == null)))?((((map__98375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__98375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__98375):map__98375);
var user_id = cljs.core.get.call(null,map__98375__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__98375__$1,new cljs.core.Keyword(null,"password","password",417022471));
var ver = cljs.core.get.call(null,map__98375__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-login","lst-login",246498853),data_map,null], null));
});})(map__98373,map__98373__$1,env,state))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-lst","lst/add-lst",-756724467,null),(function (p__98377,_,data_map){
var map__98378 = p__98377;
var map__98378__$1 = ((((!((map__98378 == null)))?((((map__98378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__98378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__98378):map__98378);
var env = map__98378__$1;
var state = cljs.core.get.call(null,map__98378__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__98378,map__98378__$1,env,state){
return (function (){
var map__98380 = data_map;
var map__98380__$1 = ((((!((map__98380 == null)))?((((map__98380.cljs$lang$protocol_mask$partition0$ & (64))) || (map__98380.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__98380):map__98380);
var name = cljs.core.get.call(null,map__98380__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__98380__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
cljs.core.println.call(null,[cljs.core.str("data-map:"),cljs.core.str(data_map)].join(''));

cljs.core.println.call(null,[cljs.core.str("state in add-lst:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"description","description",-1428560544),description], null),null], null));
});})(map__98378,map__98378__$1,env,state))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-item","lst/add-item",-1938532833,null),(function (p__98382,_,data_map){
var map__98383 = p__98382;
var map__98383__$1 = ((((!((map__98383 == null)))?((((map__98383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__98383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__98383):map__98383);
var env = map__98383__$1;
var state = cljs.core.get.call(null,map__98383__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__98383,map__98383__$1,env,state){
return (function (){
var map__98385 = data_map;
var map__98385__$1 = ((((!((map__98385 == null)))?((((map__98385.cljs$lang$protocol_mask$partition0$ & (64))) || (map__98385.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__98385):map__98385);
var name = cljs.core.get.call(null,map__98385__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.call(null,map__98385__$1,new cljs.core.Keyword(null,"value","value",305978217));
var lsts = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"lsts","lsts",-459731441)], null));
var curr = (function (){var or__21434__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"curr","curr",-1092372808)], null));
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
} else {
return (0);
}
})();
var lst_id = cljs.core.get.call(null,cljs.core.nth.call(null,lsts,curr),"lst_id");
cljs.core.println.call(null,[cljs.core.str("data-map:"),cljs.core.str(data_map)].join(''));

cljs.core.println.call(null,[cljs.core.str("state in add-item:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-item","lst-add-item",-1337170134),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lst-id","lst-id",296172009),lst_id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),value], null),null], null));
});})(map__98383,map__98383__$1,env,state))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","logout","lst/logout",-1235763963,null),(function (p__98387,_,___$1){
var map__98388 = p__98387;
var map__98388__$1 = ((((!((map__98388 == null)))?((((map__98388.cljs$lang$protocol_mask$partition0$ & (64))) || (map__98388.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__98388):map__98388);
var env = map__98388__$1;
var state = cljs.core.get.call(null,map__98388__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__98388,map__98388__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state in logout:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),null,new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0)], null));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521),cljs.core.PersistentArrayMap.EMPTY,null], null));
});})(map__98388,map__98388__$1,env,state))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null),(function (p__98390,_,data_map){
var map__98391 = p__98390;
var map__98391__$1 = ((((!((map__98391 == null)))?((((map__98391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__98391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__98391):map__98391);
var env = map__98391__$1;
var state = cljs.core.get.call(null,map__98391__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__98391,map__98391__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("data-map in set-lst:"),cljs.core.str(data_map)].join(''));

var map__98393 = data_map;
var map__98393__$1 = ((((!((map__98393 == null)))?((((map__98393.cljs$lang$protocol_mask$partition0$ & (64))) || (map__98393.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__98393):map__98393);
var status = cljs.core.get.call(null,map__98393__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var lsts = cljs.core.get.call(null,map__98393__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var user_id = cljs.core.get.call(null,map__98393__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var ver = cljs.core.get.call(null,map__98393__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var status_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(status);
var new_ver = (((ver == null))?(cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"ver","ver",1683769565)], null)) + (1)):ver);
if(cljs.core.truth_((function (){var and__21422__auto__ = status;
if(cljs.core.truth_(and__21422__auto__)){
return status_id;
} else {
return and__21422__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),status_id], null),status);
} else {
}

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),cljs.core.merge.call(null,new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),lsts,new cljs.core.Keyword(null,"ver","ver",1683769565),new_ver,new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id], null)));

return cljs.core.println.call(null,[cljs.core.str("state after setlist:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});})(map__98391,map__98391__$1,env,state))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("wiki","set-lst","wiki/set-lst",-1532354153,null),(function (p__98395,_,lst){
var map__98396 = p__98395;
var map__98396__$1 = ((((!((map__98396 == null)))?((((map__98396.cljs$lang$protocol_mask$partition0$ & (64))) || (map__98396.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__98396):map__98396);
var env = map__98396__$1;
var state = cljs.core.get.call(null,map__98396__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__98396,map__98396__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("before wiki update list:"),cljs.core.str(lst)].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wiki","wiki",1946329928),new cljs.core.Keyword(null,"lst","lst",269745987)], null),new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(lst));

return cljs.core.println.call(null,[cljs.core.str("state after wiki update:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});})(map__98396,map__98396__$1,env,state))
], null);
}));
cloudxmark.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wiki","wiki",1946329928),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst","lst",269745987),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0),new cljs.core.Keyword(null,"curr","curr",-1092372808),(0),new cljs.core.Keyword(null,"user-id","user-id",-206822291),null], null)], null));
cloudxmark.core.lst_field = (function cloudxmark$core$lst_field(var_args){
var args98398 = [];
var len__22617__auto___98401 = arguments.length;
var i__22618__auto___98402 = (0);
while(true){
if((i__22618__auto___98402 < len__22617__auto___98401)){
args98398.push((arguments[i__22618__auto___98402]));

var G__98403 = (i__22618__auto___98402 + (1));
i__22618__auto___98402 = G__98403;
continue;
} else {
}
break;
}

var G__98400 = args98398.length;
switch (G__98400) {
case 2:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args98398.length)].join('')));

}
});

cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$2 = (function (comp,field_id){
return cloudxmark.core.lst_field.call(null,comp,field_id,"text");
});

cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$3 = (function (comp,field_id,type){
var dontcare = cljs.core.println.call(null,[cljs.core.str("comp props"),cljs.core.str(om.next.props.call(null,comp))].join(''));
var field_state = cljs.core.get_in.call(null,om.next.props.call(null,comp),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),field_id], null));
var dontcare2 = cljs.core.println.call(null,[cljs.core.str("fieldstate for "),cljs.core.str(field_id),cljs.core.str(" is: "),cljs.core.str(cljs.core.get.call(null,om.next.props.call(null,comp),field_id))].join(''));
return om.dom.input.call(null,{"key": [cljs.core.str("lst-field-"),cljs.core.str(field_id)].join(''), "type": type, "value": (function (){var or__21434__auto__ = field_state;
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
} else {
return "";
}
})(), "onChange": ((function (dontcare,field_state,dontcare2){
return (function (e){
var value = e.target.value;
cljs.core.println.call(null,[cljs.core.str("the field:"),cljs.core.str(field_id),cljs.core.str(":"),cljs.core.str(value)].join(''));

return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"field-id","field-id",-353751335)),(function (){var x__22360__auto__ = field_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__22360__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())))));
});})(dontcare,field_state,dontcare2))
});
});

cloudxmark.core.lst_field.cljs$lang$maxFixedArity = 3;

cloudxmark.core.result_list = (function cloudxmark$core$result_list(results){
return React.DOM.ul({"key": "result-list"},om.util.force_children.call(null,cljs.core.map_indexed.call(null,(function (idx,itm){
return React.DOM.li({"key": idx},om.util.force_children.call(null,itm));
}),results)));
});
cloudxmark.core.status_line = (function cloudxmark$core$status_line(p__98405){
var map__98411 = p__98405;
var map__98411__$1 = ((((!((map__98411 == null)))?((((map__98411.cljs$lang$protocol_mask$partition0$ & (64))) || (map__98411.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__98411):map__98411);
var info = cljs.core.get.call(null,map__98411__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var warn = cljs.core.get.call(null,map__98411__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var error = cljs.core.get.call(null,map__98411__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.println.call(null,[cljs.core.str("info:"),cljs.core.str(info),cljs.core.str(",warn:"),cljs.core.str(warn),cljs.core.str(",error:"),cljs.core.str(error)].join(''));

var vec__98413 = (cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",error], null):(cljs.core.truth_(warn)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange",warn], null):(cljs.core.truth_(info)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black",info], null):null)));
var color = cljs.core.nth.call(null,vec__98413,(0),null);
var msg = cljs.core.nth.call(null,vec__98413,(1),null);
return React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null)),om.util.force_children.call(null,msg));
});
cloudxmark.core.refresh_lists_button = (function cloudxmark$core$refresh_lists_button(comp,user_id,lst_ver){
return React.DOM.button({"type": "button", "key": "refreshButton", "onClick": (function (e){
if((user_id == null)){
return cljs.core.swap_BANG_.call(null,cloudxmark.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"refresh-lists","refresh-lists",27332375)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),"Permission denied"], null));
} else {
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(lst_ver + (1))], null)], null));
}
})},om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,"Refresh List"))));
});
cloudxmark.core.add_item_button = (function cloudxmark$core$add_item_button(comp){
return React.DOM.button({"type": "button", "key": "addItemButton", "onClick": (function (e){
var lst_map = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var new_item_name = new cljs.core.Keyword(null,"new-item-name-field","new-item-name-field",-2039875139).cljs$core$IFn$_invoke$arity$1(lst_map);
var new_item_value = (function (){var or__21434__auto__ = new cljs.core.Keyword(null,"new-item-value-field","new-item-value-field",2061625312).cljs$core$IFn$_invoke$arity$1(lst_map);
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
} else {
return "";
}
})();
var error = ((clojure.string.blank_QMARK_.call(null,new_item_name))?"New Item Name Required":null);
if(clojure.string.blank_QMARK_.call(null,error)){
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","add-item","lst/add-item",-1938532833,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177)),(function (){var x__22360__auto__ = new_item_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__22360__auto__ = new_item_value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())))));
} else {
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"add-item","add-item",715813891)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),(function (){var x__22360__auto__ = error;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())))));
}
})},om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,"Add Item"))));
});
cloudxmark.core.lst_select_field = (function cloudxmark$core$lst_select_field(comp,idx,curr_idx){
return om.dom.input.call(null,{"key": [cljs.core.str("lst-lst-check-"),cljs.core.str(idx)].join(''), "type": "radio", "checked": cljs.core._EQ_.call(null,idx,curr_idx), "onChange": (function (e){
if(cljs.core.truth_(e.target.checked)){
var path = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"curr","curr",-1092372808)], null);
var merge_QMARK_ = false;
var value = idx;
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-state","lst/set-state",-1310328019,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"path","path",-188191168)),(function (){var x__22360__auto__ = path;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"merge?","merge?",-2004416151)),(function (){var x__22360__auto__ = merge_QMARK_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__22360__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())))));
} else {
return cljs.core.println.call(null,[cljs.core.str("unchecked: "),cljs.core.str(idx)].join(''));
}
})});
});
cloudxmark.core.add_lst_button = (function cloudxmark$core$add_lst_button(comp){
return React.DOM.button({"type": "button", "key": "addLstButton", "onClick": (function (e){
var lst_map = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var new_lst_name = new cljs.core.Keyword(null,"new-lst-name-field","new-lst-name-field",1430372825).cljs$core$IFn$_invoke$arity$1(lst_map);
var new_lst_description = (function (){var or__21434__auto__ = new cljs.core.Keyword(null,"new-lst-description-field","new-lst-description-field",584843127).cljs$core$IFn$_invoke$arity$1(lst_map);
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
} else {
return "";
}
})();
var error = ((clojure.string.blank_QMARK_.call(null,new_lst_name))?"New List Name Required":null);
if(clojure.string.blank_QMARK_.call(null,error)){
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","add-lst","lst/add-lst",-756724467,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177)),(function (){var x__22360__auto__ = new_lst_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"description","description",-1428560544)),(function (){var x__22360__auto__ = new_lst_description;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())))));
} else {
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),(function (){var x__22360__auto__ = error;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())))));
}
})},om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,"Add List"))));
});
cloudxmark.core.lst_edit_area = (function cloudxmark$core$lst_edit_area(comp){
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var map__98418 = lst;
var map__98418__$1 = ((((!((map__98418 == null)))?((((map__98418.cljs$lang$protocol_mask$partition0$ & (64))) || (map__98418.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__98418):map__98418);
var lsts = cljs.core.get.call(null,map__98418__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var status = cljs.core.get.call(null,map__98418__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var curr = cljs.core.get.call(null,map__98418__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var curr_idx = (function (){var or__21434__auto__ = curr;
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
} else {
return (0);
}
})();
var items = ((cljs.core.seq.call(null,lsts))?cljs.core.get.call(null,cljs.core.nth.call(null,lsts,curr_idx),"items"):null);
cljs.core.println.call(null,[cljs.core.str("items are: "),cljs.core.str(items)].join(''));

return React.DOM.div({},om.util.force_children.call(null,((cljs.core.seq.call(null,items))?React.DOM.div({"key": [cljs.core.str("lst-edit-area-"),cljs.core.str(curr_idx)].join('')},om.util.force_children.call(null,cljs.core.map_indexed.call(null,((function (lst,map__98418,map__98418__$1,lsts,status,curr,curr_idx,items){
return (function (idx,item){
return React.DOM.div({"key": [cljs.core.str("item-"),cljs.core.str(idx)].join('')},om.util.force_children.call(null,[cljs.core.str(cljs.core.get.call(null,item,"name")),cljs.core.str(": ")].join('')),om.util.force_children.call(null,om.dom.input.call(null,{"value": cljs.core.get.call(null,item,"value")})));
});})(lst,map__98418,map__98418__$1,lsts,status,curr,curr_idx,items))
,items))):null)),om.util.force_children.call(null,React.DOM.div({"key": [cljs.core.str("lst-add-item-"),cljs.core.str(curr_idx)].join('')},om.util.force_children.call(null,"New Item Name: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-name-field","new-item-name-field",-2039875139))),om.util.force_children.call(null," Value: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-value-field","new-item-value-field",2061625312))),om.util.force_children.call(null,cloudxmark.core.add_item_button.call(null,comp)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-item","add-item",715813891).cljs$core$IFn$_invoke$arity$1(status))))));
});
cloudxmark.core.lst_add_area = (function cloudxmark$core$lst_add_area(comp){
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__98422 = lst;
var map__98422__$1 = ((((!((map__98422 == null)))?((((map__98422.cljs$lang$protocol_mask$partition0$ & (64))) || (map__98422.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__98422):map__98422);
var status = cljs.core.get.call(null,map__98422__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return React.DOM.div({"key": [cljs.core.str("lst-edit-area-"),cljs.core.str((-1))].join('')},om.util.force_children.call(null,"New List: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-lst-name-field","new-lst-name-field",1430372825))),om.util.force_children.call(null,"Description: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-lst-description-field","new-lst-description-field",584843127))),om.util.force_children.call(null,cloudxmark.core.add_lst_button.call(null,comp)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483).cljs$core$IFn$_invoke$arity$1(status))));
});
cloudxmark.core.lst_lst = (function cloudxmark$core$lst_lst(comp,lsts,curr_idx){
return React.DOM.div({"key": "lst-lst"},om.util.force_children.call(null,((cljs.core.seq.call(null,lsts))?cljs.core.map_indexed.call(null,(function (idx,item){
return React.DOM.div({"key": [cljs.core.str(cloudxmark$core$lst_lst),cljs.core.str(idx)].join('')},om.util.force_children.call(null,cloudxmark.core.lst_select_field.call(null,comp,idx,curr_idx)),om.util.force_children.call(null,React.DOM.span({"key": [cljs.core.str(cloudxmark$core$lst_lst),cljs.core.str(idx),cljs.core.str("span")].join('')},om.util.force_children.call(null,item.call(null,"name","?")))),om.util.force_children.call(null,((cljs.core._EQ_.call(null,idx,curr_idx))?cloudxmark.core.lst_edit_area.call(null,comp):null)));
}),lsts):null)),om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Add new list:"))),om.util.force_children.call(null,cloudxmark.core.lst_add_area.call(null,comp)));
});
cloudxmark.core.search_field = (function cloudxmark$core$search_field(comp,query,type){
var vec__98428 = (function (){var G__98431 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__98431) {
case "wiki":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["wiki-search-field",new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648)], null);

break;
case "lst":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lst-search-field",new cljs.core.Keyword(null,"ver","ver",1683769565)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
var elem_key = cljs.core.nth.call(null,vec__98428,(0),null);
var query_key = cljs.core.nth.call(null,vec__98428,(1),null);
return om.dom.input.call(null,{"key": elem_key, "value": query, "onChange": ((function (vec__98428,elem_key,query_key){
return (function (e){
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.fromArray([query_key,e.target.value], true, false)], null));
});})(vec__98428,elem_key,query_key))
});
});
cloudxmark.core.logout_button = (function cloudxmark$core$logout_button(comp){
return React.DOM.button({"type": "button", "onClick": (function (e){
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","logout","lst/logout",-1235763963,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())))));
})},om.util.force_children.call(null,"Log out"));
});
cloudxmark.core.login_button = (function cloudxmark$core$login_button(comp){
return React.DOM.button({"type": "button", "onClick": (function (e){
var lst_map = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var dontcare0 = cljs.core.println.call(null,"lst-map",om.next.props.call(null,comp));
var ver = new cljs.core.Keyword(null,"ver","ver",1683769565).cljs$core$IFn$_invoke$arity$1(lst_map);
var new_ver = (ver + (1));
var user_id = new cljs.core.Keyword(null,"user-id-field","user-id-field",2116160486).cljs$core$IFn$_invoke$arity$1(lst_map);
var password = new cljs.core.Keyword(null,"password-field","password-field",-1811673649).cljs$core$IFn$_invoke$arity$1(lst_map);
var error = ((clojure.string.blank_QMARK_.call(null,user_id))?"User name required":((clojure.string.blank_QMARK_.call(null,password))?"Password required":null
));
var dontcare = cljs.core.println.call(null,"error is:",error);
if(clojure.string.blank_QMARK_.call(null,error)){
om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","login","lst/login",1697497083,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"user-id","user-id",-206822291)),(function (){var x__22360__auto__ = user_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"password","password",417022471)),(function (){var x__22360__auto__ = password;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ver","ver",1683769565)),(function (){var x__22360__auto__ = new_ver;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())))));
} else {
om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"login","login",55217519)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),(function (){var x__22360__auto__ = error;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())))));
}

return cljs.core.println.call(null,[cljs.core.str("stateafterclick:"),cljs.core.str(cljs.core.deref.call(null,cloudxmark.core.app_state))].join(''));
})},om.util.force_children.call(null,"Login"));
});
/**
 * @constructor
 */
cloudxmark.core.Lsts = (function cloudxmark$core$Lsts(){
var this__26956__auto__ = this;
React.Component.apply(this__26956__auto__,arguments);

if(!((this__26956__auto__.initLocalState == null))){
this__26956__auto__.state = this__26956__auto__.initLocalState();
} else {
this__26956__auto__.state = {};
}

return this__26956__auto__;
});

cloudxmark.core.Lsts.prototype = goog.object.clone(React.Component.prototype);

var x98437_98449 = cloudxmark.core.Lsts.prototype;
x98437_98449.componentWillUpdate = ((function (x98437_98449){
return (function (next_props__26858__auto__,next_state__26859__auto__){
var this__26857__auto__ = this;
if(((!((this__26857__auto__ == null)))?(((false) || (this__26857__auto__.om$next$Ident$))?true:false):false)){
var ident__26861__auto___98450 = om.next.ident.call(null,this__26857__auto__,om.next.props.call(null,this__26857__auto__));
var next_ident__26862__auto___98451 = om.next.ident.call(null,this__26857__auto__,om.next._next_props.call(null,next_props__26858__auto__,this__26857__auto__));
if(cljs.core.not_EQ_.call(null,ident__26861__auto___98450,next_ident__26862__auto___98451)){
var idxr__26863__auto___98452 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__26857__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__26863__auto___98452 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__26863__auto___98452),((function (idxr__26863__auto___98452,ident__26861__auto___98450,next_ident__26862__auto___98451,this__26857__auto__,x98437_98449){
return (function (indexes__26864__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__26864__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__26861__auto___98450], null),cljs.core.disj,this__26857__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__26862__auto___98451], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__26857__auto__);
});})(idxr__26863__auto___98452,ident__26861__auto___98450,next_ident__26862__auto___98451,this__26857__auto__,x98437_98449))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__26857__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__26857__auto__);
});})(x98437_98449))
;

x98437_98449.shouldComponentUpdate = ((function (x98437_98449){
return (function (next_props__26858__auto__,next_state__26859__auto__){
var this__26857__auto__ = this;
var next_children__26860__auto__ = next_props__26858__auto__.children;
var next_props__26858__auto____$1 = goog.object.get(next_props__26858__auto__,"omcljs$value");
var next_props__26858__auto____$2 = (function (){var G__98439 = next_props__26858__auto____$1;
if((next_props__26858__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__98439);
} else {
return G__98439;
}
})();
var or__21434__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__26857__auto__),next_props__26858__auto____$2);
if(or__21434__auto__){
return or__21434__auto__;
} else {
var or__21434__auto____$1 = (function (){var and__21422__auto__ = this__26857__auto__.state;
if(cljs.core.truth_(and__21422__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__26857__auto__.state,"omcljs$state"),goog.object.get(next_state__26859__auto__,"omcljs$state"));
} else {
return and__21422__auto__;
}
})();
if(cljs.core.truth_(or__21434__auto____$1)){
return or__21434__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__26857__auto__.props.children,next_children__26860__auto__);
}
}
});})(x98437_98449))
;

x98437_98449.componentWillUnmount = ((function (x98437_98449){
return (function (){
var this__26857__auto__ = this;
var r__26868__auto__ = om.next.get_reconciler.call(null,this__26857__auto__);
var cfg__26869__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__26868__auto__);
var st__26870__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__26869__auto__);
var indexer__26867__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__26869__auto__);
if(cljs.core.truth_((function (){var and__21422__auto__ = !((st__26870__auto__ == null));
if(and__21422__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__26870__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__26857__auto__], null));
} else {
return and__21422__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__26870__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__26857__auto__);
} else {
}

if((indexer__26867__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__26867__auto__,this__26857__auto__);
}
});})(x98437_98449))
;

x98437_98449.componentDidUpdate = ((function (x98437_98449){
return (function (prev_props__26865__auto__,prev_state__26866__auto__){
var this__26857__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__26857__auto__);
});})(x98437_98449))
;

x98437_98449.isMounted = ((function (x98437_98449){
return (function (){
var this__26857__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__26857__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x98437_98449))
;

x98437_98449.componentWillMount = ((function (x98437_98449){
return (function (){
var this__26857__auto__ = this;
var indexer__26867__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__26857__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__26867__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__26867__auto__,this__26857__auto__);
}
});})(x98437_98449))
;

x98437_98449.render = ((function (x98437_98449){
return (function (){
var this__26856__auto__ = this;
var this$ = this__26856__auto__;
var _STAR_reconciler_STAR_98440 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_98441 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_98442 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_98443 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_98444 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__26856__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__26856__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__26856__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__26856__auto__);

om.next._STAR_parent_STAR_ = this__26856__auto__;

try{cljs.core.println.call(null,[cljs.core.str("om/props in render:"),cljs.core.str(om.next.props.call(null,this$))].join(''));

var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__98445 = lst;
var map__98445__$1 = ((((!((map__98445 == null)))?((((map__98445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__98445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__98445):map__98445);
var lsts = cljs.core.get.call(null,map__98445__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr = cljs.core.get.call(null,map__98445__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var ver = cljs.core.get.call(null,map__98445__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__98445__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var status = cljs.core.get.call(null,map__98445__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if((user_id == null)){
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Please login"))),om.util.force_children.call(null,"User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"user-id-field","user-id-field",2116160486))),om.util.force_children.call(null,"Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"password-field","password-field",-1811673649),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.login_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(status))));
} else {
return React.DOM.div(null,om.util.force_children.call(null,cloudxmark.core.logout_button.call(null,this$)),om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Lists"))),om.util.force_children.call(null,cloudxmark.core.refresh_lists_button.call(null,this$,user_id,ver)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"refresh_lists","refresh_lists",1467404952).cljs$core$IFn$_invoke$arity$1(status))),om.util.force_children.call(null,cloudxmark.core.lst_lst.call(null,this$,lsts,(((curr == null))?(0):curr))));
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_98444;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_98443;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_98442;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_98441;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_98440;
}});})(x98437_98449))
;


cloudxmark.core.Lsts.prototype.constructor = cloudxmark.core.Lsts;

cloudxmark.core.Lsts.prototype.constructor.displayName = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.prototype.om$isComponent = true;

var x98447_98453 = cloudxmark.core.Lsts;
x98447_98453.om$next$IQueryParams$ = true;

x98447_98453.om$next$IQueryParams$params$arity$1 = ((function (x98447_98453){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0)], null);
});})(x98447_98453))
;

x98447_98453.om$next$IQuery$ = true;

x98447_98453.om$next$IQuery$query$arity$1 = ((function (x98447_98453){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null)], null))], null);
});})(x98447_98453))
;


var x98448_98454 = cloudxmark.core.Lsts.prototype;
x98448_98454.om$next$IQueryParams$ = true;

x98448_98454.om$next$IQueryParams$params$arity$1 = ((function (x98448_98454){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0)], null);
});})(x98448_98454))
;

x98448_98454.om$next$IQuery$ = true;

x98448_98454.om$next$IQuery$query$arity$1 = ((function (x98448_98454){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null)], null))], null);
});})(x98448_98454))
;


cloudxmark.core.Lsts.cljs$lang$type = true;

cloudxmark.core.Lsts.cljs$lang$ctorStr = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.cljs$lang$ctorPrWriter = (function (this__26958__auto__,writer__26959__auto__,opt__26960__auto__){
return cljs.core._write.call(null,writer__26959__auto__,"cloudxmark.core/Lsts");
});
/**
 * @constructor
 */
cloudxmark.core.AutoCompleter = (function cloudxmark$core$AutoCompleter(){
var this__26956__auto__ = this;
React.Component.apply(this__26956__auto__,arguments);

if(!((this__26956__auto__.initLocalState == null))){
this__26956__auto__.state = this__26956__auto__.initLocalState();
} else {
this__26956__auto__.state = {};
}

return this__26956__auto__;
});

cloudxmark.core.AutoCompleter.prototype = goog.object.clone(React.Component.prototype);

var x98459_98472 = cloudxmark.core.AutoCompleter.prototype;
x98459_98472.componentWillUpdate = ((function (x98459_98472){
return (function (next_props__26858__auto__,next_state__26859__auto__){
var this__26857__auto__ = this;
if(((!((this__26857__auto__ == null)))?(((false) || (this__26857__auto__.om$next$Ident$))?true:false):false)){
var ident__26861__auto___98473 = om.next.ident.call(null,this__26857__auto__,om.next.props.call(null,this__26857__auto__));
var next_ident__26862__auto___98474 = om.next.ident.call(null,this__26857__auto__,om.next._next_props.call(null,next_props__26858__auto__,this__26857__auto__));
if(cljs.core.not_EQ_.call(null,ident__26861__auto___98473,next_ident__26862__auto___98474)){
var idxr__26863__auto___98475 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__26857__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__26863__auto___98475 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__26863__auto___98475),((function (idxr__26863__auto___98475,ident__26861__auto___98473,next_ident__26862__auto___98474,this__26857__auto__,x98459_98472){
return (function (indexes__26864__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__26864__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__26861__auto___98473], null),cljs.core.disj,this__26857__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__26862__auto___98474], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__26857__auto__);
});})(idxr__26863__auto___98475,ident__26861__auto___98473,next_ident__26862__auto___98474,this__26857__auto__,x98459_98472))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__26857__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__26857__auto__);
});})(x98459_98472))
;

x98459_98472.shouldComponentUpdate = ((function (x98459_98472){
return (function (next_props__26858__auto__,next_state__26859__auto__){
var this__26857__auto__ = this;
var next_children__26860__auto__ = next_props__26858__auto__.children;
var next_props__26858__auto____$1 = goog.object.get(next_props__26858__auto__,"omcljs$value");
var next_props__26858__auto____$2 = (function (){var G__98461 = next_props__26858__auto____$1;
if((next_props__26858__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__98461);
} else {
return G__98461;
}
})();
var or__21434__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__26857__auto__),next_props__26858__auto____$2);
if(or__21434__auto__){
return or__21434__auto__;
} else {
var or__21434__auto____$1 = (function (){var and__21422__auto__ = this__26857__auto__.state;
if(cljs.core.truth_(and__21422__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__26857__auto__.state,"omcljs$state"),goog.object.get(next_state__26859__auto__,"omcljs$state"));
} else {
return and__21422__auto__;
}
})();
if(cljs.core.truth_(or__21434__auto____$1)){
return or__21434__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__26857__auto__.props.children,next_children__26860__auto__);
}
}
});})(x98459_98472))
;

x98459_98472.componentWillUnmount = ((function (x98459_98472){
return (function (){
var this__26857__auto__ = this;
var r__26868__auto__ = om.next.get_reconciler.call(null,this__26857__auto__);
var cfg__26869__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__26868__auto__);
var st__26870__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__26869__auto__);
var indexer__26867__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__26869__auto__);
if(cljs.core.truth_((function (){var and__21422__auto__ = !((st__26870__auto__ == null));
if(and__21422__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__26870__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__26857__auto__], null));
} else {
return and__21422__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__26870__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__26857__auto__);
} else {
}

if((indexer__26867__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__26867__auto__,this__26857__auto__);
}
});})(x98459_98472))
;

x98459_98472.componentDidUpdate = ((function (x98459_98472){
return (function (prev_props__26865__auto__,prev_state__26866__auto__){
var this__26857__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__26857__auto__);
});})(x98459_98472))
;

x98459_98472.isMounted = ((function (x98459_98472){
return (function (){
var this__26857__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__26857__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x98459_98472))
;

x98459_98472.componentWillMount = ((function (x98459_98472){
return (function (){
var this__26857__auto__ = this;
var indexer__26867__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__26857__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__26867__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__26867__auto__,this__26857__auto__);
}
});})(x98459_98472))
;

x98459_98472.render = ((function (x98459_98472){
return (function (){
var this__26856__auto__ = this;
var this$ = this__26856__auto__;
var _STAR_reconciler_STAR_98462 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_98463 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_98464 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_98465 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_98466 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__26856__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__26856__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__26856__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__26856__auto__);

om.next._STAR_parent_STAR_ = this__26856__auto__;

try{var map__98467 = om.next.props.call(null,this$);
var map__98467__$1 = ((((!((map__98467 == null)))?((((map__98467.cljs$lang$protocol_mask$partition0$ & (64))) || (map__98467.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__98467):map__98467);
var lst = cljs.core.get.call(null,map__98467__$1,new cljs.core.Keyword("wiki","lst","wiki/lst",270705683));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"AutoCompleter"))),om.util.force_children.call(null,(function (){var G__98469 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloudxmark.core.search_field.call(null,this$,new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648).cljs$core$IFn$_invoke$arity$1(om.next.get_params.call(null,this$)),new cljs.core.Keyword(null,"wiki","wiki",1946329928))], null);
if(!(cljs.core.empty_QMARK_.call(null,lst))){
return cljs.core.conj.call(null,G__98469,cloudxmark.core.result_list.call(null,lst));
} else {
return G__98469;
}
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_98466;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_98465;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_98464;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_98463;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_98462;
}});})(x98459_98472))
;


cloudxmark.core.AutoCompleter.prototype.constructor = cloudxmark.core.AutoCompleter;

cloudxmark.core.AutoCompleter.prototype.constructor.displayName = "cloudxmark.core/AutoCompleter";

cloudxmark.core.AutoCompleter.prototype.om$isComponent = true;

var x98470_98476 = cloudxmark.core.AutoCompleter;
x98470_98476.om$next$IQueryParams$ = true;

x98470_98476.om$next$IQueryParams$params$arity$1 = ((function (x98470_98476){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648),""], null);
});})(x98470_98476))
;

x98470_98476.om$next$IQuery$ = true;

x98470_98476.om$next$IQuery$query$arity$1 = ((function (x98470_98476){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?wiki-query","?wiki-query",-1723016161,null)], null))], null);
});})(x98470_98476))
;


var x98471_98477 = cloudxmark.core.AutoCompleter.prototype;
x98471_98477.om$next$IQueryParams$ = true;

x98471_98477.om$next$IQueryParams$params$arity$1 = ((function (x98471_98477){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648),""], null);
});})(x98471_98477))
;

x98471_98477.om$next$IQuery$ = true;

x98471_98477.om$next$IQuery$query$arity$1 = ((function (x98471_98477){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?wiki-query","?wiki-query",-1723016161,null)], null))], null);
});})(x98471_98477))
;


cloudxmark.core.AutoCompleter.cljs$lang$type = true;

cloudxmark.core.AutoCompleter.cljs$lang$ctorStr = "cloudxmark.core/AutoCompleter";

cloudxmark.core.AutoCompleter.cljs$lang$ctorPrWriter = (function (this__26958__auto__,writer__26959__auto__,opt__26960__auto__){
return cljs.core._write.call(null,writer__26959__auto__,"cloudxmark.core/AutoCompleter");
});
cloudxmark.core.send_to_chan = (function cloudxmark$core$send_to_chan(c){
return (function (p__98491,cb){
var map__98492 = p__98491;
var map__98492__$1 = ((((!((map__98492 == null)))?((((map__98492.cljs$lang$protocol_mask$partition0$ & (64))) || (map__98492.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__98492):map__98492);
var wiki_search = cljs.core.get.call(null,map__98492__$1,new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122));
var lst_search = cljs.core.get.call(null,map__98492__$1,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
if(cljs.core.truth_(wiki_search)){
var map__98494 = om.next.query__GT_ast.call(null,wiki_search);
var map__98494__$1 = ((((!((map__98494 == null)))?((((map__98494.cljs$lang$protocol_mask$partition0$ & (64))) || (map__98494.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__98494):map__98494);
var vec__98495 = cljs.core.get.call(null,map__98494__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var wiki_search__$1 = cljs.core.nth.call(null,vec__98495,(0),null);
var dontcare = cljs.core.println.call(null,[cljs.core.str(wiki_search__$1)].join(''));
var query_params = cljs.core.get_in.call(null,wiki_search__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"query","query",-1288509510)], null));
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122),query_params,cb], null));
} else {
if(cljs.core.truth_(lst_search)){
var map__98499 = om.next.query__GT_ast.call(null,lst_search);
var map__98499__$1 = ((((!((map__98499 == null)))?((((map__98499.cljs$lang$protocol_mask$partition0$ & (64))) || (map__98499.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__98499):map__98499);
var vec__98500 = cljs.core.get.call(null,map__98499__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var lst_search__$1 = cljs.core.nth.call(null,vec__98500,(0),null);
var dontcare = cljs.core.println.call(null,[cljs.core.str(lst_search__$1)].join(''));
var query_params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(lst_search__$1);
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-search","lst-search",371565861),query_params,cb], null));
} else {
return null;
}
}
});
});
cloudxmark.core.wiki_reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),cloudxmark.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),cloudxmark.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),cloudxmark.core.mutate], null)),new cljs.core.Keyword(null,"send","send",-652151114),cloudxmark.core.send_to_chan.call(null,cloudxmark.core.event_chan),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122)], null)], null));
cloudxmark.core.lst_reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),cloudxmark.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),cloudxmark.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),cloudxmark.core.mutate], null)),new cljs.core.Keyword(null,"send","send",-652151114),cloudxmark.core.send_to_chan.call(null,cloudxmark.core.event_chan),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-search","lst-search",371565861),new cljs.core.Keyword(null,"lst-login","lst-login",246498853),new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521)], null)], null));
cloudxmark.core.convert_json_lsts_result = (function cloudxmark$core$convert_json_lsts_result(result,ver,status_id){
var map__98508 = result;
var map__98508__$1 = ((((!((map__98508 == null)))?((((map__98508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__98508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__98508):map__98508);
var lsts = cljs.core.get.call(null,map__98508__$1,"lsts");
var user_id = cljs.core.get.call(null,map__98508__$1,"user_id");
var dontcare = cljs.core.println.call(null,[cljs.core.str("result: "),cljs.core.str(result)].join(''));
var json_status = cljs.core.get.call(null,result,"status");
var map__98509 = json_status;
var map__98509__$1 = ((((!((map__98509 == null)))?((((map__98509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__98509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__98509):map__98509);
var info = cljs.core.get.call(null,map__98509__$1,"info");
var warn = cljs.core.get.call(null,map__98509__$1,"warn");
var error = cljs.core.get.call(null,map__98509__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),lsts,new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"ver","ver",1683769565),ver,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id)], null);
});
cloudxmark.core.search_loop = (function cloudxmark$core$search_loop(c){
var c__26725__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26725__auto__){
return (function (){
var f__26726__auto__ = (function (){var switch__26702__auto__ = ((function (c__26725__auto__){
return (function (state_99263){
var state_val_99264 = (state_99263[(1)]);
if((state_val_99264 === (65))){
var state_99263__$1 = state_99263;
var statearr_99265_99372 = state_99263__$1;
(statearr_99265_99372[(2)] = false);

(statearr_99265_99372[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (70))){
var inst_98960 = (state_99263[(7)]);
var inst_99214 = cljs.core.apply.call(null,cljs.core.hash_map,inst_98960);
var state_99263__$1 = state_99263;
var statearr_99266_99373 = state_99263__$1;
(statearr_99266_99373[(2)] = inst_99214);

(statearr_99266_99373[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (62))){
var state_99263__$1 = state_99263;
var statearr_99267_99374 = state_99263__$1;
(statearr_99267_99374[(1)] = (74));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (74))){
var state_99263__$1 = state_99263;
var statearr_99269_99375 = state_99263__$1;
(statearr_99269_99375[(2)] = null);

(statearr_99269_99375[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (7))){
var inst_99256 = (state_99263[(2)]);
var state_99263__$1 = (function (){var statearr_99270 = state_99263;
(statearr_99270[(8)] = inst_99256);

return statearr_99270;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_99263__$1,(77),c);
} else {
if((state_val_99264 === (59))){
var inst_99167 = (state_99263[(2)]);
var inst_99168 = cljs.core.get.call(null,inst_99167,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_99169 = cljs.core.get.call(null,inst_99167,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_99170 = cljs.core.get.call(null,inst_99167,new cljs.core.Keyword(null,"value","value",305978217));
var inst_99171 = [cljs.core.str("/addItem/"),cljs.core.str(inst_99168),cljs.core.str("/"),cljs.core.str(inst_99169),cljs.core.str("/"),cljs.core.str(inst_99170)].join('');
var inst_99172 = cloudxmark.core.jsonp.call(null,inst_99171);
var state_99263__$1 = state_99263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_99263__$1,(60),inst_99172);
} else {
if((state_val_99264 === (20))){
var inst_99022 = (state_99263[(2)]);
var inst_99023 = cljs.core.get.call(null,inst_99022,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_99024 = cljs.core.get.call(null,inst_99022,new cljs.core.Keyword(null,"password","password",417022471));
var inst_99025 = cljs.core.get.call(null,inst_99022,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_99026 = [cljs.core.str("/loginGetItems/"),cljs.core.str(inst_99023),cljs.core.str("/"),cljs.core.str(inst_99024)].join('');
var inst_99027 = cloudxmark.core.jsonp.call(null,inst_99026);
var state_99263__$1 = (function (){var statearr_99271 = state_99263;
(statearr_99271[(9)] = inst_99025);

return statearr_99271;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_99263__$1,(21),inst_99027);
} else {
if((state_val_99264 === (72))){
var inst_99217 = (state_99263[(2)]);
var inst_99218 = cljs.core.get.call(null,inst_99217,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var inst_99219 = cljs.core.get.call(null,inst_99217,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var inst_99220 = cloudxmark.core.jsonp.call(null,"/getItems");
var state_99263__$1 = (function (){var statearr_99272 = state_99263;
(statearr_99272[(10)] = inst_99218);

(statearr_99272[(11)] = inst_99219);

return statearr_99272;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_99263__$1,(73),inst_99220);
} else {
if((state_val_99264 === (58))){
var inst_98960 = (state_99263[(7)]);
var state_99263__$1 = state_99263;
var statearr_99273_99376 = state_99263__$1;
(statearr_99273_99376[(2)] = inst_98960);

(statearr_99273_99376[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (60))){
var inst_99174 = (state_99263[(2)]);
var inst_99175 = cljs.core.js__GT_clj.call(null,inst_99174);
var inst_99176 = cloudxmark.core.convert_json_lsts_result.call(null,inst_99175,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_99177 = cljs.core.List.EMPTY;
var inst_99178 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_99179 = cljs.core._conj.call(null,inst_99177,inst_99178);
var inst_99180 = cljs.core.List.EMPTY;
var inst_99181 = cljs.core._conj.call(null,inst_99180,inst_99176);
var inst_99182 = cljs.core.concat.call(null,inst_99179,inst_99181);
var inst_99183 = cljs.core.seq.call(null,inst_99182);
var inst_99184 = cljs.core.sequence.call(null,inst_99183);
var inst_99185 = cljs.core.List.EMPTY;
var inst_99186 = cljs.core._conj.call(null,inst_99185,inst_99184);
var inst_99187 = cljs.core.concat.call(null,inst_99186);
var inst_99188 = cljs.core.seq.call(null,inst_99187);
var inst_99189 = cljs.core.sequence.call(null,inst_99188);
var inst_99190 = cljs.core.vec.call(null,inst_99189);
var inst_99191 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_99190);
var state_99263__$1 = state_99263;
var statearr_99274_99377 = state_99263__$1;
(statearr_99274_99377[(2)] = inst_99191);

(statearr_99274_99377[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (27))){
var state_99263__$1 = state_99263;
var statearr_99275_99378 = state_99263__$1;
(statearr_99275_99378[(2)] = false);

(statearr_99275_99378[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (1))){
var state_99263__$1 = state_99263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_99263__$1,(2),c);
} else {
if((state_val_99264 === (69))){
var inst_99209 = (state_99263[(2)]);
var state_99263__$1 = state_99263;
var statearr_99276_99379 = state_99263__$1;
(statearr_99276_99379[(2)] = inst_99209);

(statearr_99276_99379[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (24))){
var inst_99252 = (state_99263[(2)]);
var state_99263__$1 = state_99263;
var statearr_99277_99380 = state_99263__$1;
(statearr_99277_99380[(2)] = inst_99252);

(statearr_99277_99380[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (55))){
var state_99263__$1 = state_99263;
var statearr_99278_99381 = state_99263__$1;
(statearr_99278_99381[(2)] = false);

(statearr_99278_99381[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (39))){
var state_99263__$1 = state_99263;
var statearr_99279_99382 = state_99263__$1;
(statearr_99279_99382[(2)] = false);

(statearr_99279_99382[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (46))){
var inst_99120 = (state_99263[(2)]);
var inst_99121 = cljs.core.get.call(null,inst_99120,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_99122 = cljs.core.get.call(null,inst_99120,new cljs.core.Keyword(null,"description","description",-1428560544));
var inst_99123 = [cljs.core.str("/addLst/"),cljs.core.str(inst_99121),cljs.core.str("/"),cljs.core.str(inst_99122)].join('');
var inst_99124 = cloudxmark.core.jsonp.call(null,inst_99123);
var state_99263__$1 = state_99263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_99263__$1,(47),inst_99124);
} else {
if((state_val_99264 === (4))){
var inst_99261 = (state_99263[(2)]);
var state_99263__$1 = state_99263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_99263__$1,inst_99261);
} else {
if((state_val_99264 === (77))){
var inst_99258 = (state_99263[(2)]);
var inst_98954 = inst_99258;
var state_99263__$1 = (function (){var statearr_99280 = state_99263;
(statearr_99280[(12)] = inst_98954);

return statearr_99280;
})();
var statearr_99281_99383 = state_99263__$1;
(statearr_99281_99383[(2)] = null);

(statearr_99281_99383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (54))){
var state_99263__$1 = state_99263;
var statearr_99282_99384 = state_99263__$1;
(statearr_99282_99384[(2)] = true);

(statearr_99282_99384[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (15))){
var state_99263__$1 = state_99263;
var statearr_99283_99385 = state_99263__$1;
(statearr_99283_99385[(2)] = true);

(statearr_99283_99385[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (48))){
var inst_98960 = (state_99263[(7)]);
var inst_99149 = (inst_98960 == null);
var inst_99150 = cljs.core.not.call(null,inst_99149);
var state_99263__$1 = state_99263;
if(inst_99150){
var statearr_99284_99386 = state_99263__$1;
(statearr_99284_99386[(1)] = (51));

} else {
var statearr_99285_99387 = state_99263__$1;
(statearr_99285_99387[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (50))){
var inst_99248 = (state_99263[(2)]);
var state_99263__$1 = state_99263;
var statearr_99286_99388 = state_99263__$1;
(statearr_99286_99388[(2)] = inst_99248);

(statearr_99286_99388[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (75))){
var state_99263__$1 = state_99263;
var statearr_99287_99389 = state_99263__$1;
(statearr_99287_99389[(2)] = null);

(statearr_99287_99389[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (21))){
var inst_99025 = (state_99263[(9)]);
var inst_99029 = (state_99263[(2)]);
var inst_99030 = cljs.core.js__GT_clj.call(null,inst_99029);
var inst_99031 = cloudxmark.core.convert_json_lsts_result.call(null,inst_99030,inst_99025,new cljs.core.Keyword(null,"login","login",55217519));
var inst_99032 = cljs.core.List.EMPTY;
var inst_99033 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_99034 = cljs.core._conj.call(null,inst_99032,inst_99033);
var inst_99035 = cljs.core.List.EMPTY;
var inst_99036 = cljs.core._conj.call(null,inst_99035,inst_99031);
var inst_99037 = cljs.core.concat.call(null,inst_99034,inst_99036);
var inst_99038 = cljs.core.seq.call(null,inst_99037);
var inst_99039 = cljs.core.sequence.call(null,inst_99038);
var inst_99040 = cljs.core.List.EMPTY;
var inst_99041 = cljs.core._conj.call(null,inst_99040,inst_99039);
var inst_99042 = cljs.core.concat.call(null,inst_99041);
var inst_99043 = cljs.core.seq.call(null,inst_99042);
var inst_99044 = cljs.core.sequence.call(null,inst_99043);
var inst_99045 = cljs.core.vec.call(null,inst_99044);
var inst_99046 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_99045);
var state_99263__$1 = state_99263;
var statearr_99288_99390 = state_99263__$1;
(statearr_99288_99390[(2)] = inst_99046);

(statearr_99288_99390[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (31))){
var inst_99067 = (state_99263[(2)]);
var state_99263__$1 = state_99263;
var statearr_99289_99391 = state_99263__$1;
(statearr_99289_99391[(2)] = inst_99067);

(statearr_99289_99391[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (32))){
var inst_99055 = (state_99263[(13)]);
var inst_99072 = cljs.core.apply.call(null,cljs.core.hash_map,inst_99055);
var state_99263__$1 = state_99263;
var statearr_99290_99392 = state_99263__$1;
(statearr_99290_99392[(2)] = inst_99072);

(statearr_99290_99392[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (40))){
var inst_99115 = (state_99263[(2)]);
var state_99263__$1 = state_99263;
if(cljs.core.truth_(inst_99115)){
var statearr_99291_99393 = state_99263__$1;
(statearr_99291_99393[(1)] = (44));

} else {
var statearr_99292_99394 = state_99263__$1;
(statearr_99292_99394[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (56))){
var inst_99159 = (state_99263[(2)]);
var state_99263__$1 = state_99263;
var statearr_99293_99395 = state_99263__$1;
(statearr_99293_99395[(2)] = inst_99159);

(statearr_99293_99395[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (33))){
var inst_99055 = (state_99263[(13)]);
var state_99263__$1 = state_99263;
var statearr_99294_99396 = state_99263__$1;
(statearr_99294_99396[(2)] = inst_99055);

(statearr_99294_99396[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (13))){
var state_99263__$1 = state_99263;
var statearr_99295_99397 = state_99263__$1;
(statearr_99295_99397[(2)] = false);

(statearr_99295_99397[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (22))){
var inst_99051 = cloudxmark.core.jsonp.call(null,"/logout");
var state_99263__$1 = state_99263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_99263__$1,(25),inst_99051);
} else {
if((state_val_99264 === (36))){
var inst_98959 = (state_99263[(14)]);
var inst_99145 = cljs.core._EQ_.call(null,inst_98959,new cljs.core.Keyword(null,"lst-add-item","lst-add-item",-1337170134));
var state_99263__$1 = state_99263;
if(inst_99145){
var statearr_99296_99398 = state_99263__$1;
(statearr_99296_99398[(1)] = (48));

} else {
var statearr_99297_99399 = state_99263__$1;
(statearr_99297_99399[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (41))){
var state_99263__$1 = state_99263;
var statearr_99298_99400 = state_99263__$1;
(statearr_99298_99400[(2)] = true);

(statearr_99298_99400[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (43))){
var inst_99112 = (state_99263[(2)]);
var state_99263__$1 = state_99263;
var statearr_99299_99401 = state_99263__$1;
(statearr_99299_99401[(2)] = inst_99112);

(statearr_99299_99401[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (61))){
var inst_98960 = (state_99263[(7)]);
var inst_99196 = [cljs.core.str("lst query data:"),cljs.core.str(inst_98960)].join('');
var inst_99197 = cljs.core.println.call(null,inst_99196);
var inst_99199 = (inst_98960 == null);
var inst_99200 = cljs.core.not.call(null,inst_99199);
var state_99263__$1 = (function (){var statearr_99300 = state_99263;
(statearr_99300[(15)] = inst_99197);

return statearr_99300;
})();
if(inst_99200){
var statearr_99301_99402 = state_99263__$1;
(statearr_99301_99402[(1)] = (64));

} else {
var statearr_99302_99403 = state_99263__$1;
(statearr_99302_99403[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (29))){
var state_99263__$1 = state_99263;
var statearr_99303_99404 = state_99263__$1;
(statearr_99303_99404[(2)] = true);

(statearr_99303_99404[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (44))){
var inst_98960 = (state_99263[(7)]);
var inst_99117 = cljs.core.apply.call(null,cljs.core.hash_map,inst_98960);
var state_99263__$1 = state_99263;
var statearr_99304_99405 = state_99263__$1;
(statearr_99304_99405[(2)] = inst_99117);

(statearr_99304_99405[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (6))){
var inst_98959 = (state_99263[(14)]);
var inst_98998 = cljs.core._EQ_.call(null,inst_98959,new cljs.core.Keyword(null,"lst-login","lst-login",246498853));
var state_99263__$1 = state_99263;
if(inst_98998){
var statearr_99305_99406 = state_99263__$1;
(statearr_99305_99406[(1)] = (9));

} else {
var statearr_99306_99407 = state_99263__$1;
(statearr_99306_99407[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (28))){
var inst_99070 = (state_99263[(2)]);
var state_99263__$1 = state_99263;
if(cljs.core.truth_(inst_99070)){
var statearr_99307_99408 = state_99263__$1;
(statearr_99307_99408[(1)] = (32));

} else {
var statearr_99308_99409 = state_99263__$1;
(statearr_99308_99409[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (64))){
var inst_98960 = (state_99263[(7)]);
var inst_99202 = inst_98960.cljs$lang$protocol_mask$partition0$;
var inst_99203 = (inst_99202 & (64));
var inst_99204 = inst_98960.cljs$core$ISeq$;
var inst_99205 = (inst_99203) || (inst_99204);
var state_99263__$1 = state_99263;
if(cljs.core.truth_(inst_99205)){
var statearr_99309_99410 = state_99263__$1;
(statearr_99309_99410[(1)] = (67));

} else {
var statearr_99310_99411 = state_99263__$1;
(statearr_99310_99411[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (51))){
var inst_98960 = (state_99263[(7)]);
var inst_99152 = inst_98960.cljs$lang$protocol_mask$partition0$;
var inst_99153 = (inst_99152 & (64));
var inst_99154 = inst_98960.cljs$core$ISeq$;
var inst_99155 = (inst_99153) || (inst_99154);
var state_99263__$1 = state_99263;
if(cljs.core.truth_(inst_99155)){
var statearr_99311_99412 = state_99263__$1;
(statearr_99311_99412[(1)] = (54));

} else {
var statearr_99312_99413 = state_99263__$1;
(statearr_99312_99413[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (25))){
var inst_99055 = (state_99263[(13)]);
var inst_99053 = (state_99263[(2)]);
var inst_99054 = cljs.core.js__GT_clj.call(null,inst_99053);
var inst_99055__$1 = cljs.core.get.call(null,inst_99054,"status");
var inst_99057 = (inst_99055__$1 == null);
var inst_99058 = cljs.core.not.call(null,inst_99057);
var state_99263__$1 = (function (){var statearr_99313 = state_99263;
(statearr_99313[(13)] = inst_99055__$1);

return statearr_99313;
})();
if(inst_99058){
var statearr_99314_99414 = state_99263__$1;
(statearr_99314_99414[(1)] = (26));

} else {
var statearr_99315_99415 = state_99263__$1;
(statearr_99315_99415[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (34))){
var inst_99075 = (state_99263[(2)]);
var inst_99076 = cljs.core.get.call(null,inst_99075,"info");
var inst_99077 = cljs.core.get.call(null,inst_99075,"warn");
var inst_99078 = cljs.core.get.call(null,inst_99075,"error");
var inst_99079 = [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_99080 = [new cljs.core.Keyword(null,"logout","logout",1418564329),inst_99076,inst_99077,inst_99078];
var inst_99081 = cljs.core.PersistentHashMap.fromArrays(inst_99079,inst_99080);
var inst_99082 = cljs.core.List.EMPTY;
var inst_99083 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_99084 = cljs.core._conj.call(null,inst_99082,inst_99083);
var inst_99085 = cljs.core.List.EMPTY;
var inst_99086 = cljs.core._conj.call(null,inst_99085,inst_99081);
var inst_99087 = cljs.core.concat.call(null,inst_99084,inst_99086);
var inst_99088 = cljs.core.seq.call(null,inst_99087);
var inst_99089 = cljs.core.sequence.call(null,inst_99088);
var inst_99090 = cljs.core.List.EMPTY;
var inst_99091 = cljs.core._conj.call(null,inst_99090,inst_99089);
var inst_99092 = cljs.core.concat.call(null,inst_99091);
var inst_99093 = cljs.core.seq.call(null,inst_99092);
var inst_99094 = cljs.core.sequence.call(null,inst_99093);
var inst_99095 = cljs.core.vec.call(null,inst_99094);
var inst_99096 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_99095);
var state_99263__$1 = state_99263;
var statearr_99316_99416 = state_99263__$1;
(statearr_99316_99416[(2)] = inst_99096);

(statearr_99316_99416[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (17))){
var inst_99014 = (state_99263[(2)]);
var state_99263__$1 = state_99263;
var statearr_99317_99417 = state_99263__$1;
(statearr_99317_99417[(2)] = inst_99014);

(statearr_99317_99417[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (3))){
var inst_98954 = (state_99263[(12)]);
var inst_98959 = (state_99263[(14)]);
var inst_98959__$1 = cljs.core.nth.call(null,inst_98954,(0),null);
var inst_98960 = cljs.core.nth.call(null,inst_98954,(1),null);
var inst_98961 = cljs.core.nth.call(null,inst_98954,(2),null);
var inst_98962 = cljs.core._EQ_.call(null,inst_98959__$1,new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122));
var state_99263__$1 = (function (){var statearr_99318 = state_99263;
(statearr_99318[(7)] = inst_98960);

(statearr_99318[(14)] = inst_98959__$1);

(statearr_99318[(16)] = inst_98961);

return statearr_99318;
})();
if(inst_98962){
var statearr_99319_99418 = state_99263__$1;
(statearr_99319_99418[(1)] = (5));

} else {
var statearr_99320_99419 = state_99263__$1;
(statearr_99320_99419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (12))){
var inst_98960 = (state_99263[(7)]);
var inst_99007 = inst_98960.cljs$lang$protocol_mask$partition0$;
var inst_99008 = (inst_99007 & (64));
var inst_99009 = inst_98960.cljs$core$ISeq$;
var inst_99010 = (inst_99008) || (inst_99009);
var state_99263__$1 = state_99263;
if(cljs.core.truth_(inst_99010)){
var statearr_99321_99420 = state_99263__$1;
(statearr_99321_99420[(1)] = (15));

} else {
var statearr_99322_99421 = state_99263__$1;
(statearr_99322_99421[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (2))){
var inst_98950 = (state_99263[(2)]);
var inst_98951 = cljs.core.nth.call(null,inst_98950,(0),null);
var inst_98952 = cljs.core.nth.call(null,inst_98950,(1),null);
var inst_98953 = cljs.core.nth.call(null,inst_98950,(2),null);
var inst_98954 = inst_98950;
var state_99263__$1 = (function (){var statearr_99323 = state_99263;
(statearr_99323[(12)] = inst_98954);

(statearr_99323[(17)] = inst_98951);

(statearr_99323[(18)] = inst_98953);

(statearr_99323[(19)] = inst_98952);

return statearr_99323;
})();
var statearr_99324_99422 = state_99263__$1;
(statearr_99324_99422[(2)] = null);

(statearr_99324_99422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (66))){
var inst_99212 = (state_99263[(2)]);
var state_99263__$1 = state_99263;
if(cljs.core.truth_(inst_99212)){
var statearr_99325_99423 = state_99263__$1;
(statearr_99325_99423[(1)] = (70));

} else {
var statearr_99326_99424 = state_99263__$1;
(statearr_99326_99424[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (23))){
var inst_98959 = (state_99263[(14)]);
var inst_99098 = cljs.core._EQ_.call(null,inst_98959,new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626));
var state_99263__$1 = state_99263;
if(inst_99098){
var statearr_99327_99425 = state_99263__$1;
(statearr_99327_99425[(1)] = (35));

} else {
var statearr_99328_99426 = state_99263__$1;
(statearr_99328_99426[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (47))){
var inst_99126 = (state_99263[(2)]);
var inst_99127 = cljs.core.js__GT_clj.call(null,inst_99126);
var inst_99128 = cloudxmark.core.convert_json_lsts_result.call(null,inst_99127,null,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483));
var inst_99129 = cljs.core.List.EMPTY;
var inst_99130 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_99131 = cljs.core._conj.call(null,inst_99129,inst_99130);
var inst_99132 = cljs.core.List.EMPTY;
var inst_99133 = cljs.core._conj.call(null,inst_99132,inst_99128);
var inst_99134 = cljs.core.concat.call(null,inst_99131,inst_99133);
var inst_99135 = cljs.core.seq.call(null,inst_99134);
var inst_99136 = cljs.core.sequence.call(null,inst_99135);
var inst_99137 = cljs.core.List.EMPTY;
var inst_99138 = cljs.core._conj.call(null,inst_99137,inst_99136);
var inst_99139 = cljs.core.concat.call(null,inst_99138);
var inst_99140 = cljs.core.seq.call(null,inst_99139);
var inst_99141 = cljs.core.sequence.call(null,inst_99140);
var inst_99142 = cljs.core.vec.call(null,inst_99141);
var inst_99143 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_99142);
var state_99263__$1 = state_99263;
var statearr_99329_99427 = state_99263__$1;
(statearr_99329_99427[(2)] = inst_99143);

(statearr_99329_99427[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (35))){
var inst_98960 = (state_99263[(7)]);
var inst_99102 = (inst_98960 == null);
var inst_99103 = cljs.core.not.call(null,inst_99102);
var state_99263__$1 = state_99263;
if(inst_99103){
var statearr_99330_99428 = state_99263__$1;
(statearr_99330_99428[(1)] = (38));

} else {
var statearr_99331_99429 = state_99263__$1;
(statearr_99331_99429[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (76))){
var inst_99244 = (state_99263[(2)]);
var state_99263__$1 = state_99263;
var statearr_99332_99430 = state_99263__$1;
(statearr_99332_99430[(2)] = inst_99244);

(statearr_99332_99430[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (19))){
var inst_98960 = (state_99263[(7)]);
var state_99263__$1 = state_99263;
var statearr_99333_99431 = state_99263__$1;
(statearr_99333_99431[(2)] = inst_98960);

(statearr_99333_99431[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (57))){
var inst_98960 = (state_99263[(7)]);
var inst_99164 = cljs.core.apply.call(null,cljs.core.hash_map,inst_98960);
var state_99263__$1 = state_99263;
var statearr_99334_99432 = state_99263__$1;
(statearr_99334_99432[(2)] = inst_99164);

(statearr_99334_99432[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (68))){
var state_99263__$1 = state_99263;
var statearr_99335_99433 = state_99263__$1;
(statearr_99335_99433[(2)] = false);

(statearr_99335_99433[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (11))){
var inst_99254 = (state_99263[(2)]);
var state_99263__$1 = state_99263;
var statearr_99336_99434 = state_99263__$1;
(statearr_99336_99434[(2)] = inst_99254);

(statearr_99336_99434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (9))){
var inst_98960 = (state_99263[(7)]);
var inst_99001 = [cljs.core.str("lst login data:"),cljs.core.str(inst_98960)].join('');
var inst_99002 = cljs.core.println.call(null,inst_99001);
var inst_99004 = (inst_98960 == null);
var inst_99005 = cljs.core.not.call(null,inst_99004);
var state_99263__$1 = (function (){var statearr_99337 = state_99263;
(statearr_99337[(20)] = inst_99002);

return statearr_99337;
})();
if(inst_99005){
var statearr_99338_99435 = state_99263__$1;
(statearr_99338_99435[(1)] = (12));

} else {
var statearr_99339_99436 = state_99263__$1;
(statearr_99339_99436[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (5))){
var inst_98960 = (state_99263[(7)]);
var inst_98967 = [cljs.core.str(cloudxmark.core.wiki_url),cljs.core.str(inst_98960)].join('');
var inst_98968 = cloudxmark.core.jsonp.call(null,inst_98967);
var state_99263__$1 = state_99263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_99263__$1,(8),inst_98968);
} else {
if((state_val_99264 === (14))){
var inst_99017 = (state_99263[(2)]);
var state_99263__$1 = state_99263;
if(cljs.core.truth_(inst_99017)){
var statearr_99340_99437 = state_99263__$1;
(statearr_99340_99437[(1)] = (18));

} else {
var statearr_99341_99438 = state_99263__$1;
(statearr_99341_99438[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (45))){
var inst_98960 = (state_99263[(7)]);
var state_99263__$1 = state_99263;
var statearr_99342_99439 = state_99263__$1;
(statearr_99342_99439[(2)] = inst_98960);

(statearr_99342_99439[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (53))){
var inst_99162 = (state_99263[(2)]);
var state_99263__$1 = state_99263;
if(cljs.core.truth_(inst_99162)){
var statearr_99343_99440 = state_99263__$1;
(statearr_99343_99440[(1)] = (57));

} else {
var statearr_99344_99441 = state_99263__$1;
(statearr_99344_99441[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (26))){
var inst_99055 = (state_99263[(13)]);
var inst_99060 = inst_99055.cljs$lang$protocol_mask$partition0$;
var inst_99061 = (inst_99060 & (64));
var inst_99062 = inst_99055.cljs$core$ISeq$;
var inst_99063 = (inst_99061) || (inst_99062);
var state_99263__$1 = state_99263;
if(cljs.core.truth_(inst_99063)){
var statearr_99345_99442 = state_99263__$1;
(statearr_99345_99442[(1)] = (29));

} else {
var statearr_99346_99443 = state_99263__$1;
(statearr_99346_99443[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (16))){
var state_99263__$1 = state_99263;
var statearr_99347_99444 = state_99263__$1;
(statearr_99347_99444[(2)] = false);

(statearr_99347_99444[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (38))){
var inst_98960 = (state_99263[(7)]);
var inst_99105 = inst_98960.cljs$lang$protocol_mask$partition0$;
var inst_99106 = (inst_99105 & (64));
var inst_99107 = inst_98960.cljs$core$ISeq$;
var inst_99108 = (inst_99106) || (inst_99107);
var state_99263__$1 = state_99263;
if(cljs.core.truth_(inst_99108)){
var statearr_99348_99445 = state_99263__$1;
(statearr_99348_99445[(1)] = (41));

} else {
var statearr_99349_99446 = state_99263__$1;
(statearr_99349_99446[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (30))){
var state_99263__$1 = state_99263;
var statearr_99350_99447 = state_99263__$1;
(statearr_99350_99447[(2)] = false);

(statearr_99350_99447[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (73))){
var inst_99219 = (state_99263[(11)]);
var inst_99222 = (state_99263[(2)]);
var inst_99223 = cljs.core.js__GT_clj.call(null,inst_99222);
var inst_99224 = cloudxmark.core.convert_json_lsts_result.call(null,inst_99223,inst_99219,new cljs.core.Keyword(null,"refresh-lists","refresh-lists",27332375));
var inst_99225 = cljs.core.List.EMPTY;
var inst_99226 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_99227 = cljs.core._conj.call(null,inst_99225,inst_99226);
var inst_99228 = cljs.core.List.EMPTY;
var inst_99229 = cljs.core._conj.call(null,inst_99228,inst_99224);
var inst_99230 = cljs.core.concat.call(null,inst_99227,inst_99229);
var inst_99231 = cljs.core.seq.call(null,inst_99230);
var inst_99232 = cljs.core.sequence.call(null,inst_99231);
var inst_99233 = cljs.core.List.EMPTY;
var inst_99234 = cljs.core._conj.call(null,inst_99233,inst_99232);
var inst_99235 = cljs.core.concat.call(null,inst_99234);
var inst_99236 = cljs.core.seq.call(null,inst_99235);
var inst_99237 = cljs.core.sequence.call(null,inst_99236);
var inst_99238 = cljs.core.vec.call(null,inst_99237);
var inst_99239 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_99238);
var state_99263__$1 = state_99263;
var statearr_99351_99448 = state_99263__$1;
(statearr_99351_99448[(2)] = inst_99239);

(statearr_99351_99448[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (10))){
var inst_98959 = (state_99263[(14)]);
var inst_99048 = cljs.core._EQ_.call(null,inst_98959,new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521));
var state_99263__$1 = state_99263;
if(inst_99048){
var statearr_99352_99449 = state_99263__$1;
(statearr_99352_99449[(1)] = (22));

} else {
var statearr_99353_99450 = state_99263__$1;
(statearr_99353_99450[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (18))){
var inst_98960 = (state_99263[(7)]);
var inst_99019 = cljs.core.apply.call(null,cljs.core.hash_map,inst_98960);
var state_99263__$1 = state_99263;
var statearr_99354_99451 = state_99263__$1;
(statearr_99354_99451[(2)] = inst_99019);

(statearr_99354_99451[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (52))){
var state_99263__$1 = state_99263;
var statearr_99355_99452 = state_99263__$1;
(statearr_99355_99452[(2)] = false);

(statearr_99355_99452[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (67))){
var state_99263__$1 = state_99263;
var statearr_99356_99453 = state_99263__$1;
(statearr_99356_99453[(2)] = true);

(statearr_99356_99453[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (71))){
var inst_98960 = (state_99263[(7)]);
var state_99263__$1 = state_99263;
var statearr_99357_99454 = state_99263__$1;
(statearr_99357_99454[(2)] = inst_98960);

(statearr_99357_99454[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (42))){
var state_99263__$1 = state_99263;
var statearr_99358_99455 = state_99263__$1;
(statearr_99358_99455[(2)] = false);

(statearr_99358_99455[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (37))){
var inst_99250 = (state_99263[(2)]);
var state_99263__$1 = state_99263;
var statearr_99359_99456 = state_99263__$1;
(statearr_99359_99456[(2)] = inst_99250);

(statearr_99359_99456[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (63))){
var inst_99246 = (state_99263[(2)]);
var state_99263__$1 = state_99263;
var statearr_99360_99457 = state_99263__$1;
(statearr_99360_99457[(2)] = inst_99246);

(statearr_99360_99457[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (8))){
var inst_98970 = (state_99263[(2)]);
var inst_98971 = cljs.core.nth.call(null,inst_98970,(0),null);
var inst_98972 = cljs.core.nth.call(null,inst_98970,(1),null);
var inst_98973 = cljs.core.js__GT_clj.call(null,inst_98972);
var inst_98974 = cljs.core.List.EMPTY;
var inst_98975 = new cljs.core.Symbol("wiki","set-lst","wiki/set-lst",-1532354153,null);
var inst_98976 = cljs.core._conj.call(null,inst_98974,inst_98975);
var inst_98977 = cljs.core.List.EMPTY;
var inst_98978 = cljs.core._conj.call(null,inst_98977,new cljs.core.Keyword(null,"lst","lst",269745987));
var inst_98979 = cljs.core.List.EMPTY;
var inst_98980 = cljs.core._conj.call(null,inst_98979,inst_98973);
var inst_98981 = cljs.core.concat.call(null,inst_98978,inst_98980);
var inst_98982 = cljs.core.seq.call(null,inst_98981);
var inst_98983 = cljs.core.sequence.call(null,inst_98982);
var inst_98984 = cljs.core.apply.call(null,cljs.core.array_map,inst_98983);
var inst_98985 = cljs.core.List.EMPTY;
var inst_98986 = cljs.core._conj.call(null,inst_98985,inst_98984);
var inst_98987 = cljs.core.concat.call(null,inst_98976,inst_98986);
var inst_98988 = cljs.core.seq.call(null,inst_98987);
var inst_98989 = cljs.core.sequence.call(null,inst_98988);
var inst_98990 = cljs.core.List.EMPTY;
var inst_98991 = cljs.core._conj.call(null,inst_98990,inst_98989);
var inst_98992 = cljs.core.concat.call(null,inst_98991);
var inst_98993 = cljs.core.seq.call(null,inst_98992);
var inst_98994 = cljs.core.sequence.call(null,inst_98993);
var inst_98995 = cljs.core.vec.call(null,inst_98994);
var inst_98996 = om.next.transact_BANG_.call(null,cloudxmark.core.wiki_reconciler,inst_98995);
var state_99263__$1 = (function (){var statearr_99361 = state_99263;
(statearr_99361[(21)] = inst_98971);

return statearr_99361;
})();
var statearr_99362_99458 = state_99263__$1;
(statearr_99362_99458[(2)] = inst_98996);

(statearr_99362_99458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99264 === (49))){
var inst_98959 = (state_99263[(14)]);
var inst_99193 = cljs.core._EQ_.call(null,inst_98959,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
var state_99263__$1 = state_99263;
if(inst_99193){
var statearr_99363_99459 = state_99263__$1;
(statearr_99363_99459[(1)] = (61));

} else {
var statearr_99364_99460 = state_99263__$1;
(statearr_99364_99460[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26725__auto__))
;
return ((function (switch__26702__auto__,c__26725__auto__){
return (function() {
var cloudxmark$core$search_loop_$_state_machine__26703__auto__ = null;
var cloudxmark$core$search_loop_$_state_machine__26703__auto____0 = (function (){
var statearr_99368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_99368[(0)] = cloudxmark$core$search_loop_$_state_machine__26703__auto__);

(statearr_99368[(1)] = (1));

return statearr_99368;
});
var cloudxmark$core$search_loop_$_state_machine__26703__auto____1 = (function (state_99263){
while(true){
var ret_value__26704__auto__ = (function (){try{while(true){
var result__26705__auto__ = switch__26702__auto__.call(null,state_99263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26705__auto__;
}
break;
}
}catch (e99369){if((e99369 instanceof Object)){
var ex__26706__auto__ = e99369;
var statearr_99370_99461 = state_99263;
(statearr_99370_99461[(5)] = ex__26706__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_99263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e99369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__99462 = state_99263;
state_99263 = G__99462;
continue;
} else {
return ret_value__26704__auto__;
}
break;
}
});
cloudxmark$core$search_loop_$_state_machine__26703__auto__ = function(state_99263){
switch(arguments.length){
case 0:
return cloudxmark$core$search_loop_$_state_machine__26703__auto____0.call(this);
case 1:
return cloudxmark$core$search_loop_$_state_machine__26703__auto____1.call(this,state_99263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cloudxmark$core$search_loop_$_state_machine__26703__auto__.cljs$core$IFn$_invoke$arity$0 = cloudxmark$core$search_loop_$_state_machine__26703__auto____0;
cloudxmark$core$search_loop_$_state_machine__26703__auto__.cljs$core$IFn$_invoke$arity$1 = cloudxmark$core$search_loop_$_state_machine__26703__auto____1;
return cloudxmark$core$search_loop_$_state_machine__26703__auto__;
})()
;})(switch__26702__auto__,c__26725__auto__))
})();
var state__26727__auto__ = (function (){var statearr_99371 = f__26726__auto__.call(null);
(statearr_99371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26725__auto__);

return statearr_99371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26727__auto__);
});})(c__26725__auto__))
);

return c__26725__auto__;
});
cloudxmark.core.search_loop.call(null,cloudxmark.core.event_chan);
om.next.add_root_BANG_.call(null,cloudxmark.core.wiki_reconciler,cloudxmark.core.AutoCompleter,goog.dom.getElement("wiki"));
om.next.add_root_BANG_.call(null,cloudxmark.core.lst_reconciler,cloudxmark.core.Lsts,goog.dom.getElement("lsts"));

//# sourceMappingURL=core.js.map?rel=1467662650898