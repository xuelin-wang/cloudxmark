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
var args28263 = [];
var len__22617__auto___28266 = arguments.length;
var i__22618__auto___28267 = (0);
while(true){
if((i__22618__auto___28267 < len__22617__auto___28266)){
args28263.push((arguments[i__22618__auto___28267]));

var G__28268 = (i__22618__auto___28267 + (1));
i__22618__auto___28267 = G__28268;
continue;
} else {
}
break;
}

var G__28265 = args28263.length;
switch (G__28265) {
case 1:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28263.length)].join('')));

}
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return cloudxmark.core.jsonp.call(null,cljs.core.async.chan.call(null),uri);
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2 = (function (c,uri){
var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));
cljs.core.println.call(null,[cljs.core.str("before send "),cljs.core.str(uri)].join(''));

gjsonp.send(null,((function (gjsonp){
return (function (p1__28261_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__28261_SHARP_);
});})(gjsonp))
,((function (gjsonp){
return (function (p1__28262_SHARP_){
return cljs.core.println.call(null,[cljs.core.str("error!"),cljs.core.str(p1__28262_SHARP_)].join(''));
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
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),(function (p__28270,_,p__28271){
var map__28272 = p__28270;
var map__28272__$1 = ((((!((map__28272 == null)))?((((map__28272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28272):map__28272);
var env = map__28272__$1;
var state = cljs.core.get.call(null,map__28272__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__28272__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__28273 = p__28271;
var map__28273__$1 = ((((!((map__28273 == null)))?((((map__28273.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28273.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28273):map__28273);
var query = cljs.core.get.call(null,map__28273__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wiki","wiki",1946329928),new cljs.core.Keyword(null,"lst","lst",269745987)], null),cljs.core.PersistentVector.EMPTY)], null),(((clojure.string.blank_QMARK_.call(null,query)) || ((cljs.core.count.call(null,query) < (3))))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122),ast], null)));
}));
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword(null,"lst","lst",269745987),(function (p__28276,_,p__28277){
var map__28278 = p__28276;
var map__28278__$1 = ((((!((map__28278 == null)))?((((map__28278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28278):map__28278);
var env = map__28278__$1;
var state = cljs.core.get.call(null,map__28278__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__28278__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__28279 = p__28277;
var map__28279__$1 = ((((!((map__28279 == null)))?((((map__28279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28279):map__28279);
var query_ver = cljs.core.get.call(null,map__28279__$1,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var query_user = cljs.core.get.call(null,map__28279__$1,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var query_password = cljs.core.get.call(null,map__28279__$1,new cljs.core.Keyword(null,"query-password","query-password",-2133925446));
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var map__28282 = lst;
var map__28282__$1 = ((((!((map__28282 == null)))?((((map__28282.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28282.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28282):map__28282);
var lsts = cljs.core.get.call(null,map__28282__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr = cljs.core.get.call(null,map__28282__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var ver = cljs.core.get.call(null,map__28282__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__28282__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var status = cljs.core.get.call(null,map__28282__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
cljs.core.println.call(null,[cljs.core.str("curruser:"),cljs.core.str(user_id),cljs.core.str(",query ver:"),cljs.core.str(query_ver),cljs.core.str(", ver:"),cljs.core.str(ver),cljs.core.str(",query-user:"),cljs.core.str(query_user),cljs.core.str(",query-pw:"),cljs.core.str(query_password)].join(''));

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
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null),(function (p__28284,_,p__28285){
var map__28286 = p__28284;
var map__28286__$1 = ((((!((map__28286 == null)))?((((map__28286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28286):map__28286);
var env = map__28286__$1;
var state = cljs.core.get.call(null,map__28286__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__28287 = p__28285;
var map__28287__$1 = ((((!((map__28287 == null)))?((((map__28287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28287):map__28287);
var status = map__28287__$1;
var id = cljs.core.get.call(null,map__28287__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__28286,map__28286__$1,env,state,map__28287,map__28287__$1,status,id){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before setfield: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),id], null),status);

return cljs.core.println.call(null,[cljs.core.str("state after setfield: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});})(map__28286,map__28286__$1,env,state,map__28287,map__28287__$1,status,id))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-curr","lst/set-curr",1109194929,null),(function (p__28290,_,p__28291){
var map__28292 = p__28290;
var map__28292__$1 = ((((!((map__28292 == null)))?((((map__28292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28292):map__28292);
var env = map__28292__$1;
var state = cljs.core.get.call(null,map__28292__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__28293 = p__28291;
var map__28293__$1 = ((((!((map__28293 == null)))?((((map__28293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28293):map__28293);
var curr = cljs.core.get.call(null,map__28293__$1,new cljs.core.Keyword("lst","curr","lst/curr",-1092232479));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__28292,map__28292__$1,env,state,map__28293,map__28293__$1,curr){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lst","curr","lst/curr",-1092232479)], null),cljs.core.constantly.call(null,curr));

return cljs.core.println.call(null,[cljs.core.str("set to "),cljs.core.str(curr)].join(''));
});})(map__28292,map__28292__$1,env,state,map__28293,map__28293__$1,curr))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null),(function (p__28296,_,data_map){
var map__28297 = p__28296;
var map__28297__$1 = ((((!((map__28297 == null)))?((((map__28297.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28297.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28297):map__28297);
var env = map__28297__$1;
var state = cljs.core.get.call(null,map__28297__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__28297,map__28297__$1,env,state){
return (function (){
var map__28299 = data_map;
var map__28299__$1 = ((((!((map__28299 == null)))?((((map__28299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28299):map__28299);
var field_id = cljs.core.get.call(null,map__28299__$1,new cljs.core.Keyword(null,"field-id","field-id",-353751335));
var value = cljs.core.get.call(null,map__28299__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),field_id], null),value);
});})(map__28297,map__28297__$1,env,state))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","login","lst/login",1697497083,null),(function (p__28301,_,data_map){
var map__28302 = p__28301;
var map__28302__$1 = ((((!((map__28302 == null)))?((((map__28302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28302):map__28302);
var env = map__28302__$1;
var state = cljs.core.get.call(null,map__28302__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__28302,map__28302__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("data-map:"),cljs.core.str(data_map)].join(''));

var map__28304 = data_map;
var map__28304__$1 = ((((!((map__28304 == null)))?((((map__28304.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28304.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28304):map__28304);
var user_id = cljs.core.get.call(null,map__28304__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__28304__$1,new cljs.core.Keyword(null,"password","password",417022471));
var ver = cljs.core.get.call(null,map__28304__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
cljs.core.println.call(null,[cljs.core.str("state in login:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-login","lst-login",246498853),data_map,null], null));
});})(map__28302,map__28302__$1,env,state))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","logout","lst/logout",-1235763963,null),(function (p__28306,_,___$1){
var map__28307 = p__28306;
var map__28307__$1 = ((((!((map__28307 == null)))?((((map__28307.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28307.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28307):map__28307);
var env = map__28307__$1;
var state = cljs.core.get.call(null,map__28307__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__28307,map__28307__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state in logout:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),null,new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0)], null));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521),cljs.core.PersistentArrayMap.EMPTY,null], null));
});})(map__28307,map__28307__$1,env,state))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null),(function (p__28309,_,data_map){
var map__28310 = p__28309;
var map__28310__$1 = ((((!((map__28310 == null)))?((((map__28310.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28310.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28310):map__28310);
var env = map__28310__$1;
var state = cljs.core.get.call(null,map__28310__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__28310,map__28310__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("data-map in set-lst:"),cljs.core.str(data_map)].join(''));

var map__28312 = data_map;
var map__28312__$1 = ((((!((map__28312 == null)))?((((map__28312.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28312.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28312):map__28312);
var status = cljs.core.get.call(null,map__28312__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var lsts = cljs.core.get.call(null,map__28312__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var user_id = cljs.core.get.call(null,map__28312__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var ver = cljs.core.get.call(null,map__28312__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var status_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(status);
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

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),cljs.core.merge.call(null,new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),lsts,new cljs.core.Keyword(null,"ver","ver",1683769565),ver,new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id], null)));

return cljs.core.println.call(null,[cljs.core.str("state after setlist:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});})(map__28310,map__28310__$1,env,state))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("wiki","set-lst","wiki/set-lst",-1532354153,null),(function (p__28314,_,lst){
var map__28315 = p__28314;
var map__28315__$1 = ((((!((map__28315 == null)))?((((map__28315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28315):map__28315);
var env = map__28315__$1;
var state = cljs.core.get.call(null,map__28315__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__28315,map__28315__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("before wiki update list:"),cljs.core.str(lst)].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wiki","wiki",1946329928),new cljs.core.Keyword(null,"lst","lst",269745987)], null),new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(lst));

return cljs.core.println.call(null,[cljs.core.str("state after wiki update:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});})(map__28315,map__28315__$1,env,state))
], null);
}));
cloudxmark.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wiki","wiki",1946329928),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst","lst",269745987),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0),new cljs.core.Keyword(null,"curr","curr",-1092372808),(0),new cljs.core.Keyword(null,"user-id","user-id",-206822291),null], null)], null));
cloudxmark.core.result_list = (function cloudxmark$core$result_list(results){
return React.DOM.ul({"key": "result-list"},om.util.force_children.call(null,cljs.core.map_indexed.call(null,(function (idx,itm){
return React.DOM.li({"key": idx},om.util.force_children.call(null,itm));
}),results)));
});
cloudxmark.core.status_line = (function cloudxmark$core$status_line(p__28317){
var map__28323 = p__28317;
var map__28323__$1 = ((((!((map__28323 == null)))?((((map__28323.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28323.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28323):map__28323);
var info = cljs.core.get.call(null,map__28323__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var warn = cljs.core.get.call(null,map__28323__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var error = cljs.core.get.call(null,map__28323__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.println.call(null,[cljs.core.str("info:"),cljs.core.str(info),cljs.core.str(",warn:"),cljs.core.str(warn),cljs.core.str(",error:"),cljs.core.str(error)].join(''));

var vec__28325 = (cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",error], null):(cljs.core.truth_(warn)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange",warn], null):(cljs.core.truth_(info)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black",info], null):null)));
var color = cljs.core.nth.call(null,vec__28325,(0),null);
var msg = cljs.core.nth.call(null,vec__28325,(1),null);
return React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null)),om.util.force_children.call(null,msg));
});
cloudxmark.core.refresh_lists_button = (function cloudxmark$core$refresh_lists_button(comp,user_id,lst_ver){
return React.DOM.button({"type": "button", "key": "refreshPwButton", "onClick": (function (e){
if((user_id == null)){
return cljs.core.swap_BANG_.call(null,cloudxmark.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"refresh-lists","refresh-lists",27332375)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),"Permission denied"], null));
} else {
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(lst_ver + (1))], null)], null));
}
})},om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,"Refresh List"))));
});
cloudxmark.core.add_list_button = (function cloudxmark$core$add_list_button(comp){
return React.DOM.button({"type": "button", "key": "addListButton", "onClick": (function (e){
return null;
})},om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,"Add List"))));
});
cloudxmark.core.list_select_field = (function cloudxmark$core$list_select_field(comp,idx,curr_idx){
return om.dom.input.call(null,{"key": [cljs.core.str("lst-list-check-"),cljs.core.str(idx)].join(''), "type": "radio", "checked": cljs.core._EQ_.call(null,idx,curr_idx), "onChange": (function (e){
if(cljs.core.truth_(e.target.checked)){
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-curr","lst/set-curr",1109194929,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("lst","curr","lst/curr",-1092232479)),(function (){var x__22360__auto__ = idx;
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
cloudxmark.core.list_edit_area = (function cloudxmark$core$list_edit_area(comp,idx,curr_idx,lsts){
var items = cljs.core.get.call(null,cljs.core.nth.call(null,lsts,curr_idx),"items");
React.DOM.div({});

return React.DOM.div({"key": [cljs.core.str("list-edit-area-"),cljs.core.str(idx)].join('')},om.util.force_children.call(null,cljs.core.map_indexed.call(null,((function (items){
return (function (idx__$1,itm){
return React.DOM.div({"key": [cljs.core.str("itm-"),cljs.core.str(idx__$1)].join('')},om.util.force_children.call(null,[cljs.core.str(cljs.core.get.call(null,itm,"name")),cljs.core.str(": ")].join('')),om.util.force_children.call(null,om.dom.input.call(null,{"value": cljs.core.get.call(null,itm,"value")})));
});})(items))
,items)));
});
cloudxmark.core.list_add_area = (function cloudxmark$core$list_add_area(comp){
return React.DOM.div({"key": [cljs.core.str("list-edit-area-"),cljs.core.str((-1))].join('')},om.util.force_children.call(null,"List name: "),om.util.force_children.call(null,om.dom.input.call(null,null)),om.util.force_children.call(null,cloudxmark.core.add_list_button.call(null,comp)));
});
cloudxmark.core.lst_list = (function cloudxmark$core$lst_list(comp,lsts,curr_idx){
return React.DOM.div({"key": "lst-list"},om.util.force_children.call(null,cljs.core.map_indexed.call(null,(function (idx,itm){
return React.DOM.div({"key": [cljs.core.str(cloudxmark$core$lst_list),cljs.core.str(idx)].join('')},om.util.force_children.call(null,cloudxmark.core.list_select_field.call(null,comp,idx,curr_idx)),om.util.force_children.call(null,React.DOM.span({"key": [cljs.core.str(cloudxmark$core$lst_list),cljs.core.str(idx),cljs.core.str("span")].join('')},om.util.force_children.call(null,itm.call(null,"name","?")))),om.util.force_children.call(null,((cljs.core._EQ_.call(null,idx,curr_idx))?cloudxmark.core.list_edit_area.call(null,comp,idx,curr_idx,lsts):null)));
}),lsts)),om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Add new list:"))),om.util.force_children.call(null,cloudxmark.core.list_add_area.call(null,comp)));
});
cloudxmark.core.search_field = (function cloudxmark$core$search_field(comp,query,type){
var vec__28332 = (function (){var G__28335 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28335) {
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
var elem_key = cljs.core.nth.call(null,vec__28332,(0),null);
var query_key = cljs.core.nth.call(null,vec__28332,(1),null);
return om.dom.input.call(null,{"key": elem_key, "value": query, "onChange": ((function (vec__28332,elem_key,query_key){
return (function (e){
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.fromArray([query_key,e.target.value], true, false)], null));
});})(vec__28332,elem_key,query_key))
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
cloudxmark.core.lst_field = (function cloudxmark$core$lst_field(comp,field_id){
var dontcare = cljs.core.println.call(null,[cljs.core.str("comp props"),cljs.core.str(om.next.props.call(null,comp))].join(''));
var field_state = cljs.core.get_in.call(null,om.next.props.call(null,comp),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),field_id], null));
var dontcare2 = cljs.core.println.call(null,[cljs.core.str("fieldstate for "),cljs.core.str(field_id),cljs.core.str(" is: "),cljs.core.str(cljs.core.get.call(null,om.next.props.call(null,comp),field_id))].join(''));
return om.dom.input.call(null,{"key": [cljs.core.str("lst-field-"),cljs.core.str(field_id)].join(''), "value": (function (){var or__21434__auto__ = field_state;
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

var x28341_28353 = cloudxmark.core.Lsts.prototype;
x28341_28353.componentWillUpdate = ((function (x28341_28353){
return (function (next_props__26858__auto__,next_state__26859__auto__){
var this__26857__auto__ = this;
if(((!((this__26857__auto__ == null)))?(((false) || (this__26857__auto__.om$next$Ident$))?true:false):false)){
var ident__26861__auto___28354 = om.next.ident.call(null,this__26857__auto__,om.next.props.call(null,this__26857__auto__));
var next_ident__26862__auto___28355 = om.next.ident.call(null,this__26857__auto__,om.next._next_props.call(null,next_props__26858__auto__,this__26857__auto__));
if(cljs.core.not_EQ_.call(null,ident__26861__auto___28354,next_ident__26862__auto___28355)){
var idxr__26863__auto___28356 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__26857__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__26863__auto___28356 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__26863__auto___28356),((function (idxr__26863__auto___28356,ident__26861__auto___28354,next_ident__26862__auto___28355,this__26857__auto__,x28341_28353){
return (function (indexes__26864__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__26864__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__26861__auto___28354], null),cljs.core.disj,this__26857__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__26862__auto___28355], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__26857__auto__);
});})(idxr__26863__auto___28356,ident__26861__auto___28354,next_ident__26862__auto___28355,this__26857__auto__,x28341_28353))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__26857__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__26857__auto__);
});})(x28341_28353))
;

x28341_28353.shouldComponentUpdate = ((function (x28341_28353){
return (function (next_props__26858__auto__,next_state__26859__auto__){
var this__26857__auto__ = this;
var next_children__26860__auto__ = next_props__26858__auto__.children;
var next_props__26858__auto____$1 = goog.object.get(next_props__26858__auto__,"omcljs$value");
var next_props__26858__auto____$2 = (function (){var G__28343 = next_props__26858__auto____$1;
if((next_props__26858__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__28343);
} else {
return G__28343;
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
});})(x28341_28353))
;

x28341_28353.componentWillUnmount = ((function (x28341_28353){
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
});})(x28341_28353))
;

x28341_28353.componentDidUpdate = ((function (x28341_28353){
return (function (prev_props__26865__auto__,prev_state__26866__auto__){
var this__26857__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__26857__auto__);
});})(x28341_28353))
;

x28341_28353.isMounted = ((function (x28341_28353){
return (function (){
var this__26857__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__26857__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x28341_28353))
;

x28341_28353.componentWillMount = ((function (x28341_28353){
return (function (){
var this__26857__auto__ = this;
var indexer__26867__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__26857__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__26867__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__26867__auto__,this__26857__auto__);
}
});})(x28341_28353))
;

x28341_28353.render = ((function (x28341_28353){
return (function (){
var this__26856__auto__ = this;
var this$ = this__26856__auto__;
var _STAR_reconciler_STAR_28344 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_28345 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_28346 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_28347 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_28348 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__26856__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__26856__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__26856__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__26856__auto__);

om.next._STAR_parent_STAR_ = this__26856__auto__;

try{cljs.core.println.call(null,[cljs.core.str("om/props in render:"),cljs.core.str(om.next.props.call(null,this$))].join(''));

var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__28349 = lst;
var map__28349__$1 = ((((!((map__28349 == null)))?((((map__28349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28349):map__28349);
var lsts = cljs.core.get.call(null,map__28349__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr = cljs.core.get.call(null,map__28349__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var ver = cljs.core.get.call(null,map__28349__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__28349__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var status = cljs.core.get.call(null,map__28349__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if((user_id == null)){
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Please login"))),om.util.force_children.call(null,"User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"user-id-field","user-id-field",2116160486))),om.util.force_children.call(null,"Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"password-field","password-field",-1811673649))),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.login_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(status))));
} else {
return React.DOM.div(null,om.util.force_children.call(null,cloudxmark.core.logout_button.call(null,this$)),om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Lists"))),om.util.force_children.call(null,cloudxmark.core.refresh_lists_button.call(null,this$,user_id,ver)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"refresh_lists","refresh_lists",1467404952).cljs$core$IFn$_invoke$arity$1(status))),om.util.force_children.call(null,((!(cljs.core.empty_QMARK_.call(null,lsts)))?cloudxmark.core.lst_list.call(null,this$,lsts,(((curr == null))?(0):curr)):null)));
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_28348;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_28347;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_28346;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_28345;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_28344;
}});})(x28341_28353))
;


cloudxmark.core.Lsts.prototype.constructor = cloudxmark.core.Lsts;

cloudxmark.core.Lsts.prototype.constructor.displayName = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.prototype.om$isComponent = true;

var x28351_28357 = cloudxmark.core.Lsts;
x28351_28357.om$next$IQueryParams$ = true;

x28351_28357.om$next$IQueryParams$params$arity$1 = ((function (x28351_28357){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0)], null);
});})(x28351_28357))
;

x28351_28357.om$next$IQuery$ = true;

x28351_28357.om$next$IQuery$query$arity$1 = ((function (x28351_28357){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null)], null))], null);
});})(x28351_28357))
;


var x28352_28358 = cloudxmark.core.Lsts.prototype;
x28352_28358.om$next$IQueryParams$ = true;

x28352_28358.om$next$IQueryParams$params$arity$1 = ((function (x28352_28358){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0)], null);
});})(x28352_28358))
;

x28352_28358.om$next$IQuery$ = true;

x28352_28358.om$next$IQuery$query$arity$1 = ((function (x28352_28358){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null)], null))], null);
});})(x28352_28358))
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

var x28363_28376 = cloudxmark.core.AutoCompleter.prototype;
x28363_28376.componentWillUpdate = ((function (x28363_28376){
return (function (next_props__26858__auto__,next_state__26859__auto__){
var this__26857__auto__ = this;
if(((!((this__26857__auto__ == null)))?(((false) || (this__26857__auto__.om$next$Ident$))?true:false):false)){
var ident__26861__auto___28377 = om.next.ident.call(null,this__26857__auto__,om.next.props.call(null,this__26857__auto__));
var next_ident__26862__auto___28378 = om.next.ident.call(null,this__26857__auto__,om.next._next_props.call(null,next_props__26858__auto__,this__26857__auto__));
if(cljs.core.not_EQ_.call(null,ident__26861__auto___28377,next_ident__26862__auto___28378)){
var idxr__26863__auto___28379 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__26857__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__26863__auto___28379 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__26863__auto___28379),((function (idxr__26863__auto___28379,ident__26861__auto___28377,next_ident__26862__auto___28378,this__26857__auto__,x28363_28376){
return (function (indexes__26864__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__26864__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__26861__auto___28377], null),cljs.core.disj,this__26857__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__26862__auto___28378], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__26857__auto__);
});})(idxr__26863__auto___28379,ident__26861__auto___28377,next_ident__26862__auto___28378,this__26857__auto__,x28363_28376))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__26857__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__26857__auto__);
});})(x28363_28376))
;

x28363_28376.shouldComponentUpdate = ((function (x28363_28376){
return (function (next_props__26858__auto__,next_state__26859__auto__){
var this__26857__auto__ = this;
var next_children__26860__auto__ = next_props__26858__auto__.children;
var next_props__26858__auto____$1 = goog.object.get(next_props__26858__auto__,"omcljs$value");
var next_props__26858__auto____$2 = (function (){var G__28365 = next_props__26858__auto____$1;
if((next_props__26858__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__28365);
} else {
return G__28365;
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
});})(x28363_28376))
;

x28363_28376.componentWillUnmount = ((function (x28363_28376){
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
});})(x28363_28376))
;

x28363_28376.componentDidUpdate = ((function (x28363_28376){
return (function (prev_props__26865__auto__,prev_state__26866__auto__){
var this__26857__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__26857__auto__);
});})(x28363_28376))
;

x28363_28376.isMounted = ((function (x28363_28376){
return (function (){
var this__26857__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__26857__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x28363_28376))
;

x28363_28376.componentWillMount = ((function (x28363_28376){
return (function (){
var this__26857__auto__ = this;
var indexer__26867__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__26857__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__26867__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__26867__auto__,this__26857__auto__);
}
});})(x28363_28376))
;

x28363_28376.render = ((function (x28363_28376){
return (function (){
var this__26856__auto__ = this;
var this$ = this__26856__auto__;
var _STAR_reconciler_STAR_28366 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_28367 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_28368 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_28369 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_28370 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__26856__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__26856__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__26856__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__26856__auto__);

om.next._STAR_parent_STAR_ = this__26856__auto__;

try{var map__28371 = om.next.props.call(null,this$);
var map__28371__$1 = ((((!((map__28371 == null)))?((((map__28371.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28371.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28371):map__28371);
var lst = cljs.core.get.call(null,map__28371__$1,new cljs.core.Keyword("wiki","lst","wiki/lst",270705683));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"AutoCompleter"))),om.util.force_children.call(null,(function (){var G__28373 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloudxmark.core.search_field.call(null,this$,new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648).cljs$core$IFn$_invoke$arity$1(om.next.get_params.call(null,this$)),new cljs.core.Keyword(null,"wiki","wiki",1946329928))], null);
if(!(cljs.core.empty_QMARK_.call(null,lst))){
return cljs.core.conj.call(null,G__28373,cloudxmark.core.result_list.call(null,lst));
} else {
return G__28373;
}
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_28370;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_28369;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_28368;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_28367;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_28366;
}});})(x28363_28376))
;


cloudxmark.core.AutoCompleter.prototype.constructor = cloudxmark.core.AutoCompleter;

cloudxmark.core.AutoCompleter.prototype.constructor.displayName = "cloudxmark.core/AutoCompleter";

cloudxmark.core.AutoCompleter.prototype.om$isComponent = true;

var x28374_28380 = cloudxmark.core.AutoCompleter;
x28374_28380.om$next$IQueryParams$ = true;

x28374_28380.om$next$IQueryParams$params$arity$1 = ((function (x28374_28380){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648),""], null);
});})(x28374_28380))
;

x28374_28380.om$next$IQuery$ = true;

x28374_28380.om$next$IQuery$query$arity$1 = ((function (x28374_28380){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?wiki-query","?wiki-query",-1723016161,null)], null))], null);
});})(x28374_28380))
;


var x28375_28381 = cloudxmark.core.AutoCompleter.prototype;
x28375_28381.om$next$IQueryParams$ = true;

x28375_28381.om$next$IQueryParams$params$arity$1 = ((function (x28375_28381){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648),""], null);
});})(x28375_28381))
;

x28375_28381.om$next$IQuery$ = true;

x28375_28381.om$next$IQuery$query$arity$1 = ((function (x28375_28381){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?wiki-query","?wiki-query",-1723016161,null)], null))], null);
});})(x28375_28381))
;


cloudxmark.core.AutoCompleter.cljs$lang$type = true;

cloudxmark.core.AutoCompleter.cljs$lang$ctorStr = "cloudxmark.core/AutoCompleter";

cloudxmark.core.AutoCompleter.cljs$lang$ctorPrWriter = (function (this__26958__auto__,writer__26959__auto__,opt__26960__auto__){
return cljs.core._write.call(null,writer__26959__auto__,"cloudxmark.core/AutoCompleter");
});
cloudxmark.core.send_to_chan = (function cloudxmark$core$send_to_chan(c){
return (function (p__28395,cb){
var map__28396 = p__28395;
var map__28396__$1 = ((((!((map__28396 == null)))?((((map__28396.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28396.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28396):map__28396);
var wiki_search = cljs.core.get.call(null,map__28396__$1,new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122));
var lst_search = cljs.core.get.call(null,map__28396__$1,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
if(cljs.core.truth_(wiki_search)){
var map__28398 = om.next.query__GT_ast.call(null,wiki_search);
var map__28398__$1 = ((((!((map__28398 == null)))?((((map__28398.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28398.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28398):map__28398);
var vec__28399 = cljs.core.get.call(null,map__28398__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var wiki_search__$1 = cljs.core.nth.call(null,vec__28399,(0),null);
var dontcare = cljs.core.println.call(null,[cljs.core.str(wiki_search__$1)].join(''));
var query_params = cljs.core.get_in.call(null,wiki_search__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"query","query",-1288509510)], null));
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122),query_params,cb], null));
} else {
if(cljs.core.truth_(lst_search)){
var map__28403 = om.next.query__GT_ast.call(null,lst_search);
var map__28403__$1 = ((((!((map__28403 == null)))?((((map__28403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28403):map__28403);
var vec__28404 = cljs.core.get.call(null,map__28403__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var lst_search__$1 = cljs.core.nth.call(null,vec__28404,(0),null);
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
var map__28412 = result;
var map__28412__$1 = ((((!((map__28412 == null)))?((((map__28412.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28412.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28412):map__28412);
var lsts = cljs.core.get.call(null,map__28412__$1,"lsts");
var user_id = cljs.core.get.call(null,map__28412__$1,"user_id");
var dontcare = cljs.core.println.call(null,[cljs.core.str("result: "),cljs.core.str(result)].join(''));
var json_status = cljs.core.get.call(null,result,"status");
var map__28413 = json_status;
var map__28413__$1 = ((((!((map__28413 == null)))?((((map__28413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28413):map__28413);
var info = cljs.core.get.call(null,map__28413__$1,"info");
var warn = cljs.core.get.call(null,map__28413__$1,"warn");
var error = cljs.core.get.call(null,map__28413__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),lsts,new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"ver","ver",1683769565),ver,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id)], null);
});
cloudxmark.core.search_loop = (function cloudxmark$core$search_loop(c){
var c__26725__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26725__auto__){
return (function (){
var f__26726__auto__ = (function (){var switch__26702__auto__ = ((function (c__26725__auto__){
return (function (state_28938){
var state_val_28939 = (state_28938[(1)]);
if((state_val_28939 === (7))){
var inst_28931 = (state_28938[(2)]);
var state_28938__$1 = (function (){var statearr_28940 = state_28938;
(statearr_28940[(7)] = inst_28931);

return statearr_28940;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28938__$1,(51),c);
} else {
if((state_val_28939 === (20))){
var inst_28796 = (state_28938[(2)]);
var inst_28797 = cljs.core.get.call(null,inst_28796,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_28798 = cljs.core.get.call(null,inst_28796,new cljs.core.Keyword(null,"password","password",417022471));
var inst_28799 = cljs.core.get.call(null,inst_28796,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_28800 = [cljs.core.str("/loginGetItems/"),cljs.core.str(inst_28797),cljs.core.str("/"),cljs.core.str(inst_28798)].join('');
var inst_28801 = cloudxmark.core.jsonp.call(null,inst_28800);
var state_28938__$1 = (function (){var statearr_28941 = state_28938;
(statearr_28941[(8)] = inst_28799);

return statearr_28941;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28938__$1,(21),inst_28801);
} else {
if((state_val_28939 === (27))){
var state_28938__$1 = state_28938;
var statearr_28942_29016 = state_28938__$1;
(statearr_28942_29016[(2)] = false);

(statearr_28942_29016[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (1))){
var state_28938__$1 = state_28938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28938__$1,(2),c);
} else {
if((state_val_28939 === (24))){
var inst_28927 = (state_28938[(2)]);
var state_28938__$1 = state_28938;
var statearr_28943_29017 = state_28938__$1;
(statearr_28943_29017[(2)] = inst_28927);

(statearr_28943_29017[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (39))){
var state_28938__$1 = state_28938;
var statearr_28944_29018 = state_28938__$1;
(statearr_28944_29018[(2)] = false);

(statearr_28944_29018[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (46))){
var inst_28896 = (state_28938[(2)]);
var inst_28897 = cljs.core.get.call(null,inst_28896,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var inst_28898 = cljs.core.get.call(null,inst_28896,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var inst_28899 = cloudxmark.core.jsonp.call(null,"/getItems");
var state_28938__$1 = (function (){var statearr_28945 = state_28938;
(statearr_28945[(9)] = inst_28897);

(statearr_28945[(10)] = inst_28898);

return statearr_28945;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28938__$1,(47),inst_28899);
} else {
if((state_val_28939 === (4))){
var inst_28936 = (state_28938[(2)]);
var state_28938__$1 = state_28938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28938__$1,inst_28936);
} else {
if((state_val_28939 === (15))){
var state_28938__$1 = state_28938;
var statearr_28946_29019 = state_28938__$1;
(statearr_28946_29019[(2)] = true);

(statearr_28946_29019[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (48))){
var state_28938__$1 = state_28938;
var statearr_28947_29020 = state_28938__$1;
(statearr_28947_29020[(2)] = null);

(statearr_28947_29020[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (50))){
var inst_28923 = (state_28938[(2)]);
var state_28938__$1 = state_28938;
var statearr_28948_29021 = state_28938__$1;
(statearr_28948_29021[(2)] = inst_28923);

(statearr_28948_29021[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (21))){
var inst_28799 = (state_28938[(8)]);
var inst_28803 = (state_28938[(2)]);
var inst_28804 = cljs.core.js__GT_clj.call(null,inst_28803);
var inst_28805 = cloudxmark.core.convert_json_lsts_result.call(null,inst_28804,inst_28799,new cljs.core.Keyword(null,"login","login",55217519));
var inst_28806 = cljs.core.List.EMPTY;
var inst_28807 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_28808 = cljs.core._conj.call(null,inst_28806,inst_28807);
var inst_28809 = cljs.core.List.EMPTY;
var inst_28810 = cljs.core._conj.call(null,inst_28809,inst_28805);
var inst_28811 = cljs.core.concat.call(null,inst_28808,inst_28810);
var inst_28812 = cljs.core.seq.call(null,inst_28811);
var inst_28813 = cljs.core.sequence.call(null,inst_28812);
var inst_28814 = cljs.core.List.EMPTY;
var inst_28815 = cljs.core._conj.call(null,inst_28814,inst_28813);
var inst_28816 = cljs.core.concat.call(null,inst_28815);
var inst_28817 = cljs.core.seq.call(null,inst_28816);
var inst_28818 = cljs.core.sequence.call(null,inst_28817);
var inst_28819 = cljs.core.vec.call(null,inst_28818);
var inst_28820 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_28819);
var state_28938__$1 = state_28938;
var statearr_28949_29022 = state_28938__$1;
(statearr_28949_29022[(2)] = inst_28820);

(statearr_28949_29022[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (31))){
var inst_28841 = (state_28938[(2)]);
var state_28938__$1 = state_28938;
var statearr_28950_29023 = state_28938__$1;
(statearr_28950_29023[(2)] = inst_28841);

(statearr_28950_29023[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (32))){
var inst_28829 = (state_28938[(11)]);
var inst_28846 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28829);
var state_28938__$1 = state_28938;
var statearr_28951_29024 = state_28938__$1;
(statearr_28951_29024[(2)] = inst_28846);

(statearr_28951_29024[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (40))){
var inst_28891 = (state_28938[(2)]);
var state_28938__$1 = state_28938;
if(cljs.core.truth_(inst_28891)){
var statearr_28952_29025 = state_28938__$1;
(statearr_28952_29025[(1)] = (44));

} else {
var statearr_28953_29026 = state_28938__$1;
(statearr_28953_29026[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (33))){
var inst_28829 = (state_28938[(11)]);
var state_28938__$1 = state_28938;
var statearr_28954_29027 = state_28938__$1;
(statearr_28954_29027[(2)] = inst_28829);

(statearr_28954_29027[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (13))){
var state_28938__$1 = state_28938;
var statearr_28955_29028 = state_28938__$1;
(statearr_28955_29028[(2)] = false);

(statearr_28955_29028[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (22))){
var inst_28825 = cloudxmark.core.jsonp.call(null,"/logout");
var state_28938__$1 = state_28938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28938__$1,(25),inst_28825);
} else {
if((state_val_28939 === (36))){
var state_28938__$1 = state_28938;
var statearr_28956_29029 = state_28938__$1;
(statearr_28956_29029[(1)] = (48));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (41))){
var state_28938__$1 = state_28938;
var statearr_28958_29030 = state_28938__$1;
(statearr_28958_29030[(2)] = true);

(statearr_28958_29030[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (43))){
var inst_28888 = (state_28938[(2)]);
var state_28938__$1 = state_28938;
var statearr_28959_29031 = state_28938__$1;
(statearr_28959_29031[(2)] = inst_28888);

(statearr_28959_29031[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (29))){
var state_28938__$1 = state_28938;
var statearr_28960_29032 = state_28938__$1;
(statearr_28960_29032[(2)] = true);

(statearr_28960_29032[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (44))){
var inst_28734 = (state_28938[(12)]);
var inst_28893 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28734);
var state_28938__$1 = state_28938;
var statearr_28961_29033 = state_28938__$1;
(statearr_28961_29033[(2)] = inst_28893);

(statearr_28961_29033[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (6))){
var inst_28733 = (state_28938[(13)]);
var inst_28772 = cljs.core._EQ_.call(null,inst_28733,new cljs.core.Keyword(null,"lst-login","lst-login",246498853));
var state_28938__$1 = state_28938;
if(inst_28772){
var statearr_28962_29034 = state_28938__$1;
(statearr_28962_29034[(1)] = (9));

} else {
var statearr_28963_29035 = state_28938__$1;
(statearr_28963_29035[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (28))){
var inst_28844 = (state_28938[(2)]);
var state_28938__$1 = state_28938;
if(cljs.core.truth_(inst_28844)){
var statearr_28964_29036 = state_28938__$1;
(statearr_28964_29036[(1)] = (32));

} else {
var statearr_28965_29037 = state_28938__$1;
(statearr_28965_29037[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (51))){
var inst_28933 = (state_28938[(2)]);
var inst_28728 = inst_28933;
var state_28938__$1 = (function (){var statearr_28966 = state_28938;
(statearr_28966[(14)] = inst_28728);

return statearr_28966;
})();
var statearr_28967_29038 = state_28938__$1;
(statearr_28967_29038[(2)] = null);

(statearr_28967_29038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (25))){
var inst_28829 = (state_28938[(11)]);
var inst_28827 = (state_28938[(2)]);
var inst_28828 = cljs.core.js__GT_clj.call(null,inst_28827);
var inst_28829__$1 = cljs.core.get.call(null,inst_28828,"status");
var inst_28831 = (inst_28829__$1 == null);
var inst_28832 = cljs.core.not.call(null,inst_28831);
var state_28938__$1 = (function (){var statearr_28968 = state_28938;
(statearr_28968[(11)] = inst_28829__$1);

return statearr_28968;
})();
if(inst_28832){
var statearr_28969_29039 = state_28938__$1;
(statearr_28969_29039[(1)] = (26));

} else {
var statearr_28970_29040 = state_28938__$1;
(statearr_28970_29040[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (34))){
var inst_28849 = (state_28938[(2)]);
var inst_28850 = cljs.core.get.call(null,inst_28849,"info");
var inst_28851 = cljs.core.get.call(null,inst_28849,"warn");
var inst_28852 = cljs.core.get.call(null,inst_28849,"error");
var inst_28853 = [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_28854 = [new cljs.core.Keyword(null,"logout","logout",1418564329),inst_28850,inst_28851,inst_28852];
var inst_28855 = cljs.core.PersistentHashMap.fromArrays(inst_28853,inst_28854);
var inst_28856 = cljs.core.List.EMPTY;
var inst_28857 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_28858 = cljs.core._conj.call(null,inst_28856,inst_28857);
var inst_28859 = cljs.core.List.EMPTY;
var inst_28860 = cljs.core._conj.call(null,inst_28859,inst_28855);
var inst_28861 = cljs.core.concat.call(null,inst_28858,inst_28860);
var inst_28862 = cljs.core.seq.call(null,inst_28861);
var inst_28863 = cljs.core.sequence.call(null,inst_28862);
var inst_28864 = cljs.core.List.EMPTY;
var inst_28865 = cljs.core._conj.call(null,inst_28864,inst_28863);
var inst_28866 = cljs.core.concat.call(null,inst_28865);
var inst_28867 = cljs.core.seq.call(null,inst_28866);
var inst_28868 = cljs.core.sequence.call(null,inst_28867);
var inst_28869 = cljs.core.vec.call(null,inst_28868);
var inst_28870 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_28869);
var state_28938__$1 = state_28938;
var statearr_28971_29041 = state_28938__$1;
(statearr_28971_29041[(2)] = inst_28870);

(statearr_28971_29041[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (17))){
var inst_28788 = (state_28938[(2)]);
var state_28938__$1 = state_28938;
var statearr_28972_29042 = state_28938__$1;
(statearr_28972_29042[(2)] = inst_28788);

(statearr_28972_29042[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (3))){
var inst_28733 = (state_28938[(13)]);
var inst_28728 = (state_28938[(14)]);
var inst_28733__$1 = cljs.core.nth.call(null,inst_28728,(0),null);
var inst_28734 = cljs.core.nth.call(null,inst_28728,(1),null);
var inst_28735 = cljs.core.nth.call(null,inst_28728,(2),null);
var inst_28736 = cljs.core._EQ_.call(null,inst_28733__$1,new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122));
var state_28938__$1 = (function (){var statearr_28973 = state_28938;
(statearr_28973[(13)] = inst_28733__$1);

(statearr_28973[(15)] = inst_28735);

(statearr_28973[(12)] = inst_28734);

return statearr_28973;
})();
if(inst_28736){
var statearr_28974_29043 = state_28938__$1;
(statearr_28974_29043[(1)] = (5));

} else {
var statearr_28975_29044 = state_28938__$1;
(statearr_28975_29044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (12))){
var inst_28734 = (state_28938[(12)]);
var inst_28781 = inst_28734.cljs$lang$protocol_mask$partition0$;
var inst_28782 = (inst_28781 & (64));
var inst_28783 = inst_28734.cljs$core$ISeq$;
var inst_28784 = (inst_28782) || (inst_28783);
var state_28938__$1 = state_28938;
if(cljs.core.truth_(inst_28784)){
var statearr_28976_29045 = state_28938__$1;
(statearr_28976_29045[(1)] = (15));

} else {
var statearr_28977_29046 = state_28938__$1;
(statearr_28977_29046[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (2))){
var inst_28724 = (state_28938[(2)]);
var inst_28725 = cljs.core.nth.call(null,inst_28724,(0),null);
var inst_28726 = cljs.core.nth.call(null,inst_28724,(1),null);
var inst_28727 = cljs.core.nth.call(null,inst_28724,(2),null);
var inst_28728 = inst_28724;
var state_28938__$1 = (function (){var statearr_28978 = state_28938;
(statearr_28978[(16)] = inst_28725);

(statearr_28978[(14)] = inst_28728);

(statearr_28978[(17)] = inst_28726);

(statearr_28978[(18)] = inst_28727);

return statearr_28978;
})();
var statearr_28979_29047 = state_28938__$1;
(statearr_28979_29047[(2)] = null);

(statearr_28979_29047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (23))){
var inst_28733 = (state_28938[(13)]);
var inst_28872 = cljs.core._EQ_.call(null,inst_28733,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
var state_28938__$1 = state_28938;
if(inst_28872){
var statearr_28980_29048 = state_28938__$1;
(statearr_28980_29048[(1)] = (35));

} else {
var statearr_28981_29049 = state_28938__$1;
(statearr_28981_29049[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (47))){
var inst_28898 = (state_28938[(10)]);
var inst_28901 = (state_28938[(2)]);
var inst_28902 = cljs.core.js__GT_clj.call(null,inst_28901);
var inst_28903 = cloudxmark.core.convert_json_lsts_result.call(null,cloudxmark.core.result1,inst_28898,new cljs.core.Keyword(null,"refresh-lists","refresh-lists",27332375));
var inst_28904 = cljs.core.List.EMPTY;
var inst_28905 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_28906 = cljs.core._conj.call(null,inst_28904,inst_28905);
var inst_28907 = cljs.core.List.EMPTY;
var inst_28908 = cljs.core._conj.call(null,inst_28907,inst_28903);
var inst_28909 = cljs.core.concat.call(null,inst_28906,inst_28908);
var inst_28910 = cljs.core.seq.call(null,inst_28909);
var inst_28911 = cljs.core.sequence.call(null,inst_28910);
var inst_28912 = cljs.core.List.EMPTY;
var inst_28913 = cljs.core._conj.call(null,inst_28912,inst_28911);
var inst_28914 = cljs.core.concat.call(null,inst_28913);
var inst_28915 = cljs.core.seq.call(null,inst_28914);
var inst_28916 = cljs.core.sequence.call(null,inst_28915);
var inst_28917 = cljs.core.vec.call(null,inst_28916);
var inst_28918 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_28917);
var state_28938__$1 = (function (){var statearr_28982 = state_28938;
(statearr_28982[(19)] = inst_28902);

return statearr_28982;
})();
var statearr_28983_29050 = state_28938__$1;
(statearr_28983_29050[(2)] = inst_28918);

(statearr_28983_29050[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (35))){
var inst_28734 = (state_28938[(12)]);
var inst_28875 = [cljs.core.str("lst query data:"),cljs.core.str(inst_28734)].join('');
var inst_28876 = cljs.core.println.call(null,inst_28875);
var inst_28878 = (inst_28734 == null);
var inst_28879 = cljs.core.not.call(null,inst_28878);
var state_28938__$1 = (function (){var statearr_28984 = state_28938;
(statearr_28984[(20)] = inst_28876);

return statearr_28984;
})();
if(inst_28879){
var statearr_28985_29051 = state_28938__$1;
(statearr_28985_29051[(1)] = (38));

} else {
var statearr_28986_29052 = state_28938__$1;
(statearr_28986_29052[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (19))){
var inst_28734 = (state_28938[(12)]);
var state_28938__$1 = state_28938;
var statearr_28987_29053 = state_28938__$1;
(statearr_28987_29053[(2)] = inst_28734);

(statearr_28987_29053[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (11))){
var inst_28929 = (state_28938[(2)]);
var state_28938__$1 = state_28938;
var statearr_28988_29054 = state_28938__$1;
(statearr_28988_29054[(2)] = inst_28929);

(statearr_28988_29054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (9))){
var inst_28734 = (state_28938[(12)]);
var inst_28775 = [cljs.core.str("lst login data:"),cljs.core.str(inst_28734)].join('');
var inst_28776 = cljs.core.println.call(null,inst_28775);
var inst_28778 = (inst_28734 == null);
var inst_28779 = cljs.core.not.call(null,inst_28778);
var state_28938__$1 = (function (){var statearr_28989 = state_28938;
(statearr_28989[(21)] = inst_28776);

return statearr_28989;
})();
if(inst_28779){
var statearr_28990_29055 = state_28938__$1;
(statearr_28990_29055[(1)] = (12));

} else {
var statearr_28991_29056 = state_28938__$1;
(statearr_28991_29056[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (5))){
var inst_28734 = (state_28938[(12)]);
var inst_28741 = [cljs.core.str(cloudxmark.core.wiki_url),cljs.core.str(inst_28734)].join('');
var inst_28742 = cloudxmark.core.jsonp.call(null,inst_28741);
var state_28938__$1 = state_28938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28938__$1,(8),inst_28742);
} else {
if((state_val_28939 === (14))){
var inst_28791 = (state_28938[(2)]);
var state_28938__$1 = state_28938;
if(cljs.core.truth_(inst_28791)){
var statearr_28992_29057 = state_28938__$1;
(statearr_28992_29057[(1)] = (18));

} else {
var statearr_28993_29058 = state_28938__$1;
(statearr_28993_29058[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (45))){
var inst_28734 = (state_28938[(12)]);
var state_28938__$1 = state_28938;
var statearr_28994_29059 = state_28938__$1;
(statearr_28994_29059[(2)] = inst_28734);

(statearr_28994_29059[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (26))){
var inst_28829 = (state_28938[(11)]);
var inst_28834 = inst_28829.cljs$lang$protocol_mask$partition0$;
var inst_28835 = (inst_28834 & (64));
var inst_28836 = inst_28829.cljs$core$ISeq$;
var inst_28837 = (inst_28835) || (inst_28836);
var state_28938__$1 = state_28938;
if(cljs.core.truth_(inst_28837)){
var statearr_28995_29060 = state_28938__$1;
(statearr_28995_29060[(1)] = (29));

} else {
var statearr_28996_29061 = state_28938__$1;
(statearr_28996_29061[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (16))){
var state_28938__$1 = state_28938;
var statearr_28997_29062 = state_28938__$1;
(statearr_28997_29062[(2)] = false);

(statearr_28997_29062[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (38))){
var inst_28734 = (state_28938[(12)]);
var inst_28881 = inst_28734.cljs$lang$protocol_mask$partition0$;
var inst_28882 = (inst_28881 & (64));
var inst_28883 = inst_28734.cljs$core$ISeq$;
var inst_28884 = (inst_28882) || (inst_28883);
var state_28938__$1 = state_28938;
if(cljs.core.truth_(inst_28884)){
var statearr_28998_29063 = state_28938__$1;
(statearr_28998_29063[(1)] = (41));

} else {
var statearr_28999_29064 = state_28938__$1;
(statearr_28999_29064[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (30))){
var state_28938__$1 = state_28938;
var statearr_29000_29065 = state_28938__$1;
(statearr_29000_29065[(2)] = false);

(statearr_29000_29065[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (10))){
var inst_28733 = (state_28938[(13)]);
var inst_28822 = cljs.core._EQ_.call(null,inst_28733,new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521));
var state_28938__$1 = state_28938;
if(inst_28822){
var statearr_29001_29066 = state_28938__$1;
(statearr_29001_29066[(1)] = (22));

} else {
var statearr_29002_29067 = state_28938__$1;
(statearr_29002_29067[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (18))){
var inst_28734 = (state_28938[(12)]);
var inst_28793 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28734);
var state_28938__$1 = state_28938;
var statearr_29003_29068 = state_28938__$1;
(statearr_29003_29068[(2)] = inst_28793);

(statearr_29003_29068[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (42))){
var state_28938__$1 = state_28938;
var statearr_29004_29069 = state_28938__$1;
(statearr_29004_29069[(2)] = false);

(statearr_29004_29069[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (37))){
var inst_28925 = (state_28938[(2)]);
var state_28938__$1 = state_28938;
var statearr_29005_29070 = state_28938__$1;
(statearr_29005_29070[(2)] = inst_28925);

(statearr_29005_29070[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (8))){
var inst_28744 = (state_28938[(2)]);
var inst_28745 = cljs.core.nth.call(null,inst_28744,(0),null);
var inst_28746 = cljs.core.nth.call(null,inst_28744,(1),null);
var inst_28747 = cljs.core.js__GT_clj.call(null,inst_28746);
var inst_28748 = cljs.core.List.EMPTY;
var inst_28749 = new cljs.core.Symbol("wiki","set-lst","wiki/set-lst",-1532354153,null);
var inst_28750 = cljs.core._conj.call(null,inst_28748,inst_28749);
var inst_28751 = cljs.core.List.EMPTY;
var inst_28752 = cljs.core._conj.call(null,inst_28751,new cljs.core.Keyword(null,"lst","lst",269745987));
var inst_28753 = cljs.core.List.EMPTY;
var inst_28754 = cljs.core._conj.call(null,inst_28753,inst_28747);
var inst_28755 = cljs.core.concat.call(null,inst_28752,inst_28754);
var inst_28756 = cljs.core.seq.call(null,inst_28755);
var inst_28757 = cljs.core.sequence.call(null,inst_28756);
var inst_28758 = cljs.core.apply.call(null,cljs.core.array_map,inst_28757);
var inst_28759 = cljs.core.List.EMPTY;
var inst_28760 = cljs.core._conj.call(null,inst_28759,inst_28758);
var inst_28761 = cljs.core.concat.call(null,inst_28750,inst_28760);
var inst_28762 = cljs.core.seq.call(null,inst_28761);
var inst_28763 = cljs.core.sequence.call(null,inst_28762);
var inst_28764 = cljs.core.List.EMPTY;
var inst_28765 = cljs.core._conj.call(null,inst_28764,inst_28763);
var inst_28766 = cljs.core.concat.call(null,inst_28765);
var inst_28767 = cljs.core.seq.call(null,inst_28766);
var inst_28768 = cljs.core.sequence.call(null,inst_28767);
var inst_28769 = cljs.core.vec.call(null,inst_28768);
var inst_28770 = om.next.transact_BANG_.call(null,cloudxmark.core.wiki_reconciler,inst_28769);
var state_28938__$1 = (function (){var statearr_29006 = state_28938;
(statearr_29006[(22)] = inst_28745);

return statearr_29006;
})();
var statearr_29007_29071 = state_28938__$1;
(statearr_29007_29071[(2)] = inst_28770);

(statearr_29007_29071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (49))){
var state_28938__$1 = state_28938;
var statearr_29008_29072 = state_28938__$1;
(statearr_29008_29072[(2)] = null);

(statearr_29008_29072[(1)] = (50));


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
});})(c__26725__auto__))
;
return ((function (switch__26702__auto__,c__26725__auto__){
return (function() {
var cloudxmark$core$search_loop_$_state_machine__26703__auto__ = null;
var cloudxmark$core$search_loop_$_state_machine__26703__auto____0 = (function (){
var statearr_29012 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29012[(0)] = cloudxmark$core$search_loop_$_state_machine__26703__auto__);

(statearr_29012[(1)] = (1));

return statearr_29012;
});
var cloudxmark$core$search_loop_$_state_machine__26703__auto____1 = (function (state_28938){
while(true){
var ret_value__26704__auto__ = (function (){try{while(true){
var result__26705__auto__ = switch__26702__auto__.call(null,state_28938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26705__auto__;
}
break;
}
}catch (e29013){if((e29013 instanceof Object)){
var ex__26706__auto__ = e29013;
var statearr_29014_29073 = state_28938;
(statearr_29014_29073[(5)] = ex__26706__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29074 = state_28938;
state_28938 = G__29074;
continue;
} else {
return ret_value__26704__auto__;
}
break;
}
});
cloudxmark$core$search_loop_$_state_machine__26703__auto__ = function(state_28938){
switch(arguments.length){
case 0:
return cloudxmark$core$search_loop_$_state_machine__26703__auto____0.call(this);
case 1:
return cloudxmark$core$search_loop_$_state_machine__26703__auto____1.call(this,state_28938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cloudxmark$core$search_loop_$_state_machine__26703__auto__.cljs$core$IFn$_invoke$arity$0 = cloudxmark$core$search_loop_$_state_machine__26703__auto____0;
cloudxmark$core$search_loop_$_state_machine__26703__auto__.cljs$core$IFn$_invoke$arity$1 = cloudxmark$core$search_loop_$_state_machine__26703__auto____1;
return cloudxmark$core$search_loop_$_state_machine__26703__auto__;
})()
;})(switch__26702__auto__,c__26725__auto__))
})();
var state__26727__auto__ = (function (){var statearr_29015 = f__26726__auto__.call(null);
(statearr_29015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26725__auto__);

return statearr_29015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26727__auto__);
});})(c__26725__auto__))
);

return c__26725__auto__;
});
cloudxmark.core.search_loop.call(null,cloudxmark.core.event_chan);
om.next.add_root_BANG_.call(null,cloudxmark.core.wiki_reconciler,cloudxmark.core.AutoCompleter,goog.dom.getElement("wiki"));
om.next.add_root_BANG_.call(null,cloudxmark.core.lst_reconciler,cloudxmark.core.Lsts,goog.dom.getElement("lsts"));

//# sourceMappingURL=core.js.map?rel=1467563874777