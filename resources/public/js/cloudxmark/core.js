// Compiled by ClojureScript 1.8.51 {}
goog.provide('cloudxmark.core');
goog.require('cljs.core');
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
var args64438 = [];
var len__19538__auto___64441 = arguments.length;
var i__19539__auto___64442 = (0);
while(true){
if((i__19539__auto___64442 < len__19538__auto___64441)){
args64438.push((arguments[i__19539__auto___64442]));

var G__64443 = (i__19539__auto___64442 + (1));
i__19539__auto___64442 = G__64443;
continue;
} else {
}
break;
}

var G__64440 = args64438.length;
switch (G__64440) {
case 1:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64438.length)].join('')));

}
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return cloudxmark.core.jsonp.call(null,cljs.core.async.chan.call(null),uri);
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2 = (function (c,uri){
var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));
cljs.core.println.call(null,[cljs.core.str("before send "),cljs.core.str(uri)].join(''));

gjsonp.send(null,((function (gjsonp){
return (function (p1__64436_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__64436_SHARP_);
});})(gjsonp))
,((function (gjsonp){
return (function (p1__64437_SHARP_){
return cljs.core.println.call(null,[cljs.core.str("error!"),cljs.core.str(p1__64437_SHARP_)].join(''));
});})(gjsonp))
);

return c;
});

cloudxmark.core.jsonp.cljs$lang$maxFixedArity = 2;
cloudxmark.core.event_chan = cljs.core.async.chan.call(null);
if(typeof cloudxmark.core.read !== 'undefined'){
} else {
cloudxmark.core.read = (function (){var method_table__19393__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19394__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19395__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19396__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19397__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cloudxmark.core","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19397__auto__,method_table__19393__auto__,prefer_table__19394__auto__,method_cache__19395__auto__,cached_hierarchy__19396__auto__));
})();
}
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),(function (p__64445,_,p__64446){
var map__64447 = p__64445;
var map__64447__$1 = ((((!((map__64447 == null)))?((((map__64447.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64447.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64447):map__64447);
var env = map__64447__$1;
var state = cljs.core.get.call(null,map__64447__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__64447__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__64448 = p__64446;
var map__64448__$1 = ((((!((map__64448 == null)))?((((map__64448.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64448.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64448):map__64448);
var query = cljs.core.get.call(null,map__64448__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wiki","wiki",1946329928),new cljs.core.Keyword(null,"lst","lst",269745987)], null),cljs.core.PersistentVector.EMPTY)], null),(((clojure.string.blank_QMARK_.call(null,query)) || ((cljs.core.count.call(null,query) < (3))))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122),ast], null)));
}));
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword(null,"lst","lst",269745987),(function (p__64451,_,p__64452){
var map__64453 = p__64451;
var map__64453__$1 = ((((!((map__64453 == null)))?((((map__64453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64453):map__64453);
var env = map__64453__$1;
var state = cljs.core.get.call(null,map__64453__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__64453__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__64454 = p__64452;
var map__64454__$1 = ((((!((map__64454 == null)))?((((map__64454.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64454.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64454):map__64454);
var query_ver = cljs.core.get.call(null,map__64454__$1,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var query_user = cljs.core.get.call(null,map__64454__$1,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var query_password = cljs.core.get.call(null,map__64454__$1,new cljs.core.Keyword(null,"query-password","query-password",-2133925446));
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var map__64457 = lst;
var map__64457__$1 = ((((!((map__64457 == null)))?((((map__64457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64457):map__64457);
var lsts = cljs.core.get.call(null,map__64457__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr = cljs.core.get.call(null,map__64457__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var ver = cljs.core.get.call(null,map__64457__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__64457__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var status = cljs.core.get.call(null,map__64457__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
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
cloudxmark.core.mutate = (function (){var method_table__19393__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19394__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19395__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19396__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19397__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cloudxmark.core","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19397__auto__,method_table__19393__auto__,prefer_table__19394__auto__,method_cache__19395__auto__,cached_hierarchy__19396__auto__));
})();
}
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null),(function (p__64459,_,p__64460){
var map__64461 = p__64459;
var map__64461__$1 = ((((!((map__64461 == null)))?((((map__64461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64461):map__64461);
var env = map__64461__$1;
var state = cljs.core.get.call(null,map__64461__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__64462 = p__64460;
var map__64462__$1 = ((((!((map__64462 == null)))?((((map__64462.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64462.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64462):map__64462);
var field_id = cljs.core.get.call(null,map__64462__$1,new cljs.core.Keyword(null,"field-id","field-id",-353751335));
var value = cljs.core.get.call(null,map__64462__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__64461,map__64461__$1,env,state,map__64462,map__64462__$1,field_id,value){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before setfield: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),field_id], null),value);

return cljs.core.println.call(null,[cljs.core.str("state after setfield: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});})(map__64461,map__64461__$1,env,state,map__64462,map__64462__$1,field_id,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null),(function (p__64465,_,p__64466){
var map__64467 = p__64465;
var map__64467__$1 = ((((!((map__64467 == null)))?((((map__64467.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64467.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64467):map__64467);
var env = map__64467__$1;
var state = cljs.core.get.call(null,map__64467__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__64468 = p__64466;
var map__64468__$1 = ((((!((map__64468 == null)))?((((map__64468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64468):map__64468);
var field_id = cljs.core.get.call(null,map__64468__$1,new cljs.core.Keyword(null,"field-id","field-id",-353751335));
var status = cljs.core.get.call(null,map__64468__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__64467,map__64467__$1,env,state,map__64468,map__64468__$1,field_id,status){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before setfield: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),field_id], null),status);

return cljs.core.println.call(null,[cljs.core.str("state after setfield: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});})(map__64467,map__64467__$1,env,state,map__64468,map__64468__$1,field_id,status))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-curr","lst/set-curr",1109194929,null),(function (p__64471,_,p__64472){
var map__64473 = p__64471;
var map__64473__$1 = ((((!((map__64473 == null)))?((((map__64473.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64473.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64473):map__64473);
var env = map__64473__$1;
var state = cljs.core.get.call(null,map__64473__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__64474 = p__64472;
var map__64474__$1 = ((((!((map__64474 == null)))?((((map__64474.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64474.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64474):map__64474);
var curr = cljs.core.get.call(null,map__64474__$1,new cljs.core.Keyword("lst","curr","lst/curr",-1092232479));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__64473,map__64473__$1,env,state,map__64474,map__64474__$1,curr){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lst","curr","lst/curr",-1092232479)], null),cljs.core.constantly.call(null,curr));

return cljs.core.println.call(null,[cljs.core.str("set to "),cljs.core.str(curr)].join(''));
});})(map__64473,map__64473__$1,env,state,map__64474,map__64474__$1,curr))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null),(function (p__64477,_,data_map){
var map__64478 = p__64477;
var map__64478__$1 = ((((!((map__64478 == null)))?((((map__64478.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64478.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64478):map__64478);
var env = map__64478__$1;
var state = cljs.core.get.call(null,map__64478__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__64478,map__64478__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("data-map:"),cljs.core.str(data_map)].join(''));

var map__64480_64482 = data_map;
var map__64480_64483__$1 = ((((!((map__64480_64482 == null)))?((((map__64480_64482.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64480_64482.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64480_64482):map__64480_64482);
var status_64484 = cljs.core.get.call(null,map__64480_64483__$1,"status");
var lsts_64485 = cljs.core.get.call(null,map__64480_64483__$1,"lsts");
var user_id_64486 = cljs.core.get.call(null,map__64480_64483__$1,"user_id");
var status_id_64487 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(status_64484);
var status1_64488 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),status_64484.call(null,"info"),new cljs.core.Keyword(null,"warn","warn",-436710552),status_64484.call(null,"warn"),new cljs.core.Keyword(null,"error","error",-978969032),status_64484.call(null,"error")], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(status1_64488))){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413),status_id_64487], null),status1_64488);
} else {
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),cljs.core.merge.call(null,new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),data_map.call(null,"lsts"),new cljs.core.Keyword(null,"ver","ver",1683769565),data_map.call(null,"ver"),new cljs.core.Keyword(null,"user-id","user-id",-206822291),data_map.call(null,"user_id"),new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.merge.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),cljs.core.PersistentArrayMap.fromArray([status_id_64487,status1_64488], true, false))], null)));
}

return cljs.core.println.call(null,[cljs.core.str("state after setlist:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});})(map__64478,map__64478__$1,env,state))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("wiki","set-lst","wiki/set-lst",-1532354153,null),(function (p__64489,_,lst){
var map__64490 = p__64489;
var map__64490__$1 = ((((!((map__64490 == null)))?((((map__64490.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64490.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64490):map__64490);
var env = map__64490__$1;
var state = cljs.core.get.call(null,map__64490__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__64490,map__64490__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("before wiki update list:"),cljs.core.str(lst)].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wiki","wiki",1946329928),new cljs.core.Keyword(null,"lst","lst",269745987)], null),new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(lst));

return cljs.core.println.call(null,[cljs.core.str("state after wiki update:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});})(map__64490,map__64490__$1,env,state))
], null);
}));
cloudxmark.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wiki","wiki",1946329928),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst","lst",269745987),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0),new cljs.core.Keyword(null,"curr","curr",-1092372808),(0),new cljs.core.Keyword(null,"user-id","user-id",-206822291),null], null)], null));
cloudxmark.core.result_list = (function cloudxmark$core$result_list(results){
return React.DOM.ul({"key": "result-list"},om.util.force_children.call(null,cljs.core.map_indexed.call(null,(function (idx,itm){
return React.DOM.li({"key": idx},om.util.force_children.call(null,itm));
}),results)));
});
cloudxmark.core.status_line = (function cloudxmark$core$status_line(p__64492){
var map__64496 = p__64492;
var map__64496__$1 = ((((!((map__64496 == null)))?((((map__64496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64496):map__64496);
var info = cljs.core.get.call(null,map__64496__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var warn = cljs.core.get.call(null,map__64496__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var error = cljs.core.get.call(null,map__64496__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.println.call(null,[cljs.core.str("info:"),cljs.core.str(info),cljs.core.str(",warn:"),cljs.core.str(warn),cljs.core.str(",error:"),cljs.core.str(error)].join(''));

var vec__64498 = (cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",error], null):(cljs.core.truth_(warn)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange",warn], null):(cljs.core.truth_(info)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black",info], null):null)));
var color = cljs.core.nth.call(null,vec__64498,(0),null);
var msg = cljs.core.nth.call(null,vec__64498,(1),null);
return React.DOM.span({"style": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null)},om.util.force_children.call(null,msg));
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
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__19302__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-curr","lst/set-curr",1109194929,null)),(function (){var x__19302__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("lst","curr","lst/curr",-1092232479)),(function (){var x__19302__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19302__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19302__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19302__auto__);
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
var vec__64501 = (function (){var G__64502 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__64502) {
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
var elem_key = cljs.core.nth.call(null,vec__64501,(0),null);
var query_key = cljs.core.nth.call(null,vec__64501,(1),null);
return om.dom.input.call(null,{"key": elem_key, "value": query, "onChange": ((function (vec__64501,elem_key,query_key){
return (function (e){
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.fromArray([query_key,e.target.value], true, false)], null));
});})(vec__64501,elem_key,query_key))
});
});
cloudxmark.core.logout_button = (function cloudxmark$core$logout_button(comp){
return React.DOM.button({"type": "button", "onClick": (function (e){
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Keyword(null,"logout","logout",1418564329)], null)], null));
})},om.util.force_children.call(null,"Log out"));
});
cloudxmark.core.lst_field = (function cloudxmark$core$lst_field(comp,field_id){
var dontcare = cljs.core.println.call(null,[cljs.core.str("comp props"),cljs.core.str(om.next.props.call(null,comp))].join(''));
var field_state = cljs.core.get_in.call(null,om.next.props.call(null,comp),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),field_id], null));
var dontcare2 = cljs.core.println.call(null,[cljs.core.str("fieldstate for "),cljs.core.str(field_id),cljs.core.str(" is: "),cljs.core.str(cljs.core.get.call(null,om.next.props.call(null,comp),field_id))].join(''));
return om.dom.input.call(null,{"key": [cljs.core.str("lst-field-"),cljs.core.str(field_id)].join(''), "value": (function (){var or__18468__auto__ = field_state;
if(cljs.core.truth_(or__18468__auto__)){
return or__18468__auto__;
} else {
return "";
}
})(), "onChange": ((function (dontcare,field_state,dontcare2){
return (function (e){
var value = e.target.value;
cljs.core.println.call(null,[cljs.core.str("the field:"),cljs.core.str(field_id),cljs.core.str(":"),cljs.core.str(value)].join(''));

return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__19302__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null)),(function (){var x__19302__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__19302__auto__ = field_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19302__auto__);
})(),(function (){var x__19302__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19302__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19302__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19302__auto__);
})())))));
});})(dontcare,field_state,dontcare2))
});
});
cloudxmark.core.login_button = (function cloudxmark$core$login_button(comp){
return React.DOM.button({"type": "button", "onClick": (function (e){
var lst_map = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var ver = new cljs.core.Keyword(null,"ver","ver",1683769565).cljs$core$IFn$_invoke$arity$1(lst_map);
var user_id = new cljs.core.Keyword(null,"user-id-field","user-id-field",2116160486).cljs$core$IFn$_invoke$arity$1(lst_map);
var password = new cljs.core.Keyword(null,"password-field","password-field",-1811673649).cljs$core$IFn$_invoke$arity$1(lst_map);
var error = ((clojure.string.blank_QMARK_.call(null,user_id))?"User name required":((clojure.string.blank_QMARK_.call(null,password))?"Password required":null
));
var dontcare = cljs.core.println.call(null,"error is:",error);
if(clojure.string.blank_QMARK_.call(null,error)){
om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),user_id,new cljs.core.Keyword(null,"query-password","query-password",-2133925446),password,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(ver + (1))], null)], null));
} else {
om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__19302__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__19302__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"field-id","field-id",-353751335)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"login","login",55217519)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"status","status",-1997798413)),(function (){var x__19302__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),(function (){var x__19302__auto__ = error;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19302__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19302__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19302__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19302__auto__);
})())))));
}

return cljs.core.println.call(null,[cljs.core.str("stateafterclick:"),cljs.core.str(cljs.core.deref.call(null,cloudxmark.core.app_state))].join(''));
})},om.util.force_children.call(null,"Login"));
});
/**
 * @constructor
 */
cloudxmark.core.Lsts = (function cloudxmark$core$Lsts(){
var this__21583__auto__ = this;
React.Component.apply(this__21583__auto__,arguments);

if(!((this__21583__auto__.initLocalState == null))){
this__21583__auto__.state = this__21583__auto__.initLocalState();
} else {
this__21583__auto__.state = {};
}

return this__21583__auto__;
});

cloudxmark.core.Lsts.prototype = goog.object.clone(React.Component.prototype);

var x64508_64520 = cloudxmark.core.Lsts.prototype;
x64508_64520.componentWillUpdate = ((function (x64508_64520){
return (function (next_props__21519__auto__,next_state__21520__auto__){
var this__21518__auto__ = this;
if(((!((this__21518__auto__ == null)))?(((false) || (this__21518__auto__.om$next$Ident$))?true:false):false)){
var ident__21522__auto___64521 = om.next.ident.call(null,this__21518__auto__,om.next.props.call(null,this__21518__auto__));
var next_ident__21523__auto___64522 = om.next.ident.call(null,this__21518__auto__,om.next._next_props.call(null,next_props__21519__auto__,this__21518__auto__));
if(cljs.core.not_EQ_.call(null,ident__21522__auto___64521,next_ident__21523__auto___64522)){
var idxr__21524__auto___64523 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21518__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__21524__auto___64523 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__21524__auto___64523),((function (idxr__21524__auto___64523,ident__21522__auto___64521,next_ident__21523__auto___64522,this__21518__auto__,x64508_64520){
return (function (indexes__21525__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__21525__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__21522__auto___64521], null),cljs.core.disj,this__21518__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__21523__auto___64522], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__21518__auto__);
});})(idxr__21524__auto___64523,ident__21522__auto___64521,next_ident__21523__auto___64522,this__21518__auto__,x64508_64520))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__21518__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21518__auto__);
});})(x64508_64520))
;

x64508_64520.shouldComponentUpdate = ((function (x64508_64520){
return (function (next_props__21519__auto__,next_state__21520__auto__){
var this__21518__auto__ = this;
var next_children__21521__auto__ = next_props__21519__auto__.children;
var next_props__21519__auto____$1 = goog.object.get(next_props__21519__auto__,"omcljs$value");
var next_props__21519__auto____$2 = (function (){var G__64510 = next_props__21519__auto____$1;
if((next_props__21519__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__64510);
} else {
return G__64510;
}
})();
var or__18468__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__21518__auto__),next_props__21519__auto____$2);
if(or__18468__auto__){
return or__18468__auto__;
} else {
var or__18468__auto____$1 = (function (){var and__18456__auto__ = this__21518__auto__.state;
if(cljs.core.truth_(and__18456__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__21518__auto__.state,"omcljs$state"),goog.object.get(next_state__21520__auto__,"omcljs$state"));
} else {
return and__18456__auto__;
}
})();
if(cljs.core.truth_(or__18468__auto____$1)){
return or__18468__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__21518__auto__.props.children,next_children__21521__auto__);
}
}
});})(x64508_64520))
;

x64508_64520.componentWillUnmount = ((function (x64508_64520){
return (function (){
var this__21518__auto__ = this;
var r__21529__auto__ = om.next.get_reconciler.call(null,this__21518__auto__);
var cfg__21530__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__21529__auto__);
var st__21531__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__21530__auto__);
var indexer__21528__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__21530__auto__);
if(cljs.core.truth_((function (){var and__18456__auto__ = !((st__21531__auto__ == null));
if(and__18456__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__21531__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__21518__auto__], null));
} else {
return and__18456__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__21531__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__21518__auto__);
} else {
}

if((indexer__21528__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__21528__auto__,this__21518__auto__);
}
});})(x64508_64520))
;

x64508_64520.componentDidUpdate = ((function (x64508_64520){
return (function (prev_props__21526__auto__,prev_state__21527__auto__){
var this__21518__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21518__auto__);
});})(x64508_64520))
;

x64508_64520.isMounted = ((function (x64508_64520){
return (function (){
var this__21518__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21518__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x64508_64520))
;

x64508_64520.componentWillMount = ((function (x64508_64520){
return (function (){
var this__21518__auto__ = this;
var indexer__21528__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21518__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21528__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21528__auto__,this__21518__auto__);
}
});})(x64508_64520))
;

x64508_64520.render = ((function (x64508_64520){
return (function (){
var this__21517__auto__ = this;
var this$ = this__21517__auto__;
var _STAR_reconciler_STAR_64511 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_64512 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_64513 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_64514 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_64515 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21517__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21517__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21517__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21517__auto__);

om.next._STAR_parent_STAR_ = this__21517__auto__;

try{var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__64516 = lst;
var map__64516__$1 = ((((!((map__64516 == null)))?((((map__64516.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64516.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64516):map__64516);
var lsts = cljs.core.get.call(null,map__64516__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr = cljs.core.get.call(null,map__64516__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var ver = cljs.core.get.call(null,map__64516__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__64516__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var status = cljs.core.get.call(null,map__64516__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if((user_id == null)){
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Please login"))),om.util.force_children.call(null,"User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"user-id-field","user-id-field",2116160486))),om.util.force_children.call(null,"Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"password-field","password-field",-1811673649))),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.login_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(status))));
} else {
return React.DOM.div(null,om.util.force_children.call(null,cloudxmark.core.logout_button.call(null,this$)),om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Lists"))),om.util.force_children.call(null,cloudxmark.core.refresh_lists_button.call(null,this$,user_id,ver)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"refresh_lists","refresh_lists",1467404952).cljs$core$IFn$_invoke$arity$1(status))),om.util.force_children.call(null,((!(cljs.core.empty_QMARK_.call(null,lsts)))?cloudxmark.core.lst_list.call(null,this$,lsts,(((curr == null))?(0):curr)):null)));
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_64515;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_64514;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_64513;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_64512;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_64511;
}});})(x64508_64520))
;


cloudxmark.core.Lsts.prototype.constructor = cloudxmark.core.Lsts;

cloudxmark.core.Lsts.prototype.constructor.displayName = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.prototype.om$isComponent = true;

var x64518_64524 = cloudxmark.core.Lsts;
x64518_64524.om$next$IQueryParams$ = true;

x64518_64524.om$next$IQueryParams$params$arity$1 = ((function (x64518_64524){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-password","query-password",-2133925446),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0)], null);
});})(x64518_64524))
;

x64518_64524.om$next$IQuery$ = true;

x64518_64524.om$next$IQuery$query$arity$1 = ((function (x64518_64524){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-password","query-password",-2133925446),new cljs.core.Symbol(null,"?query-password","?query-password",1376893065,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null)], null))], null);
});})(x64518_64524))
;


var x64519_64525 = cloudxmark.core.Lsts.prototype;
x64519_64525.om$next$IQueryParams$ = true;

x64519_64525.om$next$IQueryParams$params$arity$1 = ((function (x64519_64525){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-password","query-password",-2133925446),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0)], null);
});})(x64519_64525))
;

x64519_64525.om$next$IQuery$ = true;

x64519_64525.om$next$IQuery$query$arity$1 = ((function (x64519_64525){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-password","query-password",-2133925446),new cljs.core.Symbol(null,"?query-password","?query-password",1376893065,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null)], null))], null);
});})(x64519_64525))
;


cloudxmark.core.Lsts.cljs$lang$type = true;

cloudxmark.core.Lsts.cljs$lang$ctorStr = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.cljs$lang$ctorPrWriter = (function (this__21585__auto__,writer__21586__auto__,opt__21587__auto__){
return cljs.core._write.call(null,writer__21586__auto__,"cloudxmark.core/Lsts");
});
/**
 * @constructor
 */
cloudxmark.core.AutoCompleter = (function cloudxmark$core$AutoCompleter(){
var this__21583__auto__ = this;
React.Component.apply(this__21583__auto__,arguments);

if(!((this__21583__auto__.initLocalState == null))){
this__21583__auto__.state = this__21583__auto__.initLocalState();
} else {
this__21583__auto__.state = {};
}

return this__21583__auto__;
});

cloudxmark.core.AutoCompleter.prototype = goog.object.clone(React.Component.prototype);

var x64530_64543 = cloudxmark.core.AutoCompleter.prototype;
x64530_64543.componentWillUpdate = ((function (x64530_64543){
return (function (next_props__21519__auto__,next_state__21520__auto__){
var this__21518__auto__ = this;
if(((!((this__21518__auto__ == null)))?(((false) || (this__21518__auto__.om$next$Ident$))?true:false):false)){
var ident__21522__auto___64544 = om.next.ident.call(null,this__21518__auto__,om.next.props.call(null,this__21518__auto__));
var next_ident__21523__auto___64545 = om.next.ident.call(null,this__21518__auto__,om.next._next_props.call(null,next_props__21519__auto__,this__21518__auto__));
if(cljs.core.not_EQ_.call(null,ident__21522__auto___64544,next_ident__21523__auto___64545)){
var idxr__21524__auto___64546 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21518__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__21524__auto___64546 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__21524__auto___64546),((function (idxr__21524__auto___64546,ident__21522__auto___64544,next_ident__21523__auto___64545,this__21518__auto__,x64530_64543){
return (function (indexes__21525__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__21525__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__21522__auto___64544], null),cljs.core.disj,this__21518__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__21523__auto___64545], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__21518__auto__);
});})(idxr__21524__auto___64546,ident__21522__auto___64544,next_ident__21523__auto___64545,this__21518__auto__,x64530_64543))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__21518__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21518__auto__);
});})(x64530_64543))
;

x64530_64543.shouldComponentUpdate = ((function (x64530_64543){
return (function (next_props__21519__auto__,next_state__21520__auto__){
var this__21518__auto__ = this;
var next_children__21521__auto__ = next_props__21519__auto__.children;
var next_props__21519__auto____$1 = goog.object.get(next_props__21519__auto__,"omcljs$value");
var next_props__21519__auto____$2 = (function (){var G__64532 = next_props__21519__auto____$1;
if((next_props__21519__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__64532);
} else {
return G__64532;
}
})();
var or__18468__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__21518__auto__),next_props__21519__auto____$2);
if(or__18468__auto__){
return or__18468__auto__;
} else {
var or__18468__auto____$1 = (function (){var and__18456__auto__ = this__21518__auto__.state;
if(cljs.core.truth_(and__18456__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__21518__auto__.state,"omcljs$state"),goog.object.get(next_state__21520__auto__,"omcljs$state"));
} else {
return and__18456__auto__;
}
})();
if(cljs.core.truth_(or__18468__auto____$1)){
return or__18468__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__21518__auto__.props.children,next_children__21521__auto__);
}
}
});})(x64530_64543))
;

x64530_64543.componentWillUnmount = ((function (x64530_64543){
return (function (){
var this__21518__auto__ = this;
var r__21529__auto__ = om.next.get_reconciler.call(null,this__21518__auto__);
var cfg__21530__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__21529__auto__);
var st__21531__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__21530__auto__);
var indexer__21528__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__21530__auto__);
if(cljs.core.truth_((function (){var and__18456__auto__ = !((st__21531__auto__ == null));
if(and__18456__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__21531__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__21518__auto__], null));
} else {
return and__18456__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__21531__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__21518__auto__);
} else {
}

if((indexer__21528__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__21528__auto__,this__21518__auto__);
}
});})(x64530_64543))
;

x64530_64543.componentDidUpdate = ((function (x64530_64543){
return (function (prev_props__21526__auto__,prev_state__21527__auto__){
var this__21518__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21518__auto__);
});})(x64530_64543))
;

x64530_64543.isMounted = ((function (x64530_64543){
return (function (){
var this__21518__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21518__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x64530_64543))
;

x64530_64543.componentWillMount = ((function (x64530_64543){
return (function (){
var this__21518__auto__ = this;
var indexer__21528__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21518__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21528__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21528__auto__,this__21518__auto__);
}
});})(x64530_64543))
;

x64530_64543.render = ((function (x64530_64543){
return (function (){
var this__21517__auto__ = this;
var this$ = this__21517__auto__;
var _STAR_reconciler_STAR_64533 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_64534 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_64535 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_64536 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_64537 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21517__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21517__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21517__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21517__auto__);

om.next._STAR_parent_STAR_ = this__21517__auto__;

try{var map__64538 = om.next.props.call(null,this$);
var map__64538__$1 = ((((!((map__64538 == null)))?((((map__64538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64538):map__64538);
var lst = cljs.core.get.call(null,map__64538__$1,new cljs.core.Keyword("wiki","lst","wiki/lst",270705683));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"AutoCompleter"))),om.util.force_children.call(null,(function (){var G__64540 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloudxmark.core.search_field.call(null,this$,new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648).cljs$core$IFn$_invoke$arity$1(om.next.get_params.call(null,this$)),new cljs.core.Keyword(null,"wiki","wiki",1946329928))], null);
if(!(cljs.core.empty_QMARK_.call(null,lst))){
return cljs.core.conj.call(null,G__64540,cloudxmark.core.result_list.call(null,lst));
} else {
return G__64540;
}
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_64537;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_64536;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_64535;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_64534;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_64533;
}});})(x64530_64543))
;


cloudxmark.core.AutoCompleter.prototype.constructor = cloudxmark.core.AutoCompleter;

cloudxmark.core.AutoCompleter.prototype.constructor.displayName = "cloudxmark.core/AutoCompleter";

cloudxmark.core.AutoCompleter.prototype.om$isComponent = true;

var x64541_64547 = cloudxmark.core.AutoCompleter;
x64541_64547.om$next$IQueryParams$ = true;

x64541_64547.om$next$IQueryParams$params$arity$1 = ((function (x64541_64547){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648),""], null);
});})(x64541_64547))
;

x64541_64547.om$next$IQuery$ = true;

x64541_64547.om$next$IQuery$query$arity$1 = ((function (x64541_64547){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?wiki-query","?wiki-query",-1723016161,null)], null))], null);
});})(x64541_64547))
;


var x64542_64548 = cloudxmark.core.AutoCompleter.prototype;
x64542_64548.om$next$IQueryParams$ = true;

x64542_64548.om$next$IQueryParams$params$arity$1 = ((function (x64542_64548){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648),""], null);
});})(x64542_64548))
;

x64542_64548.om$next$IQuery$ = true;

x64542_64548.om$next$IQuery$query$arity$1 = ((function (x64542_64548){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?wiki-query","?wiki-query",-1723016161,null)], null))], null);
});})(x64542_64548))
;


cloudxmark.core.AutoCompleter.cljs$lang$type = true;

cloudxmark.core.AutoCompleter.cljs$lang$ctorStr = "cloudxmark.core/AutoCompleter";

cloudxmark.core.AutoCompleter.cljs$lang$ctorPrWriter = (function (this__21585__auto__,writer__21586__auto__,opt__21587__auto__){
return cljs.core._write.call(null,writer__21586__auto__,"cloudxmark.core/AutoCompleter");
});
cloudxmark.core.send_to_chan = (function cloudxmark$core$send_to_chan(c){
return (function (p__64558,cb){
var map__64559 = p__64558;
var map__64559__$1 = ((((!((map__64559 == null)))?((((map__64559.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64559.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64559):map__64559);
var wiki_search = cljs.core.get.call(null,map__64559__$1,new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122));
var lst_search = cljs.core.get.call(null,map__64559__$1,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
if(cljs.core.truth_(wiki_search)){
var map__64561 = om.next.query__GT_ast.call(null,wiki_search);
var map__64561__$1 = ((((!((map__64561 == null)))?((((map__64561.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64561.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64561):map__64561);
var vec__64562 = cljs.core.get.call(null,map__64561__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var wiki_search__$1 = cljs.core.nth.call(null,vec__64562,(0),null);
var dontcare = cljs.core.println.call(null,[cljs.core.str(wiki_search__$1)].join(''));
var query_params = cljs.core.get_in.call(null,wiki_search__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"query","query",-1288509510)], null));
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122),query_params,cb], null));
} else {
if(cljs.core.truth_(lst_search)){
var map__64564 = om.next.query__GT_ast.call(null,lst_search);
var map__64564__$1 = ((((!((map__64564 == null)))?((((map__64564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64564):map__64564);
var vec__64565 = cljs.core.get.call(null,map__64564__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var lst_search__$1 = cljs.core.nth.call(null,vec__64565,(0),null);
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
cloudxmark.core.lst_reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),cloudxmark.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),cloudxmark.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),cloudxmark.core.mutate], null)),new cljs.core.Keyword(null,"send","send",-652151114),cloudxmark.core.send_to_chan.call(null,cloudxmark.core.event_chan),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-search","lst-search",371565861)], null)], null));
cloudxmark.core.search_loop = (function cloudxmark$core$search_loop(c){
var c__21410__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21410__auto__){
return (function (){
var f__21411__auto__ = (function (){var switch__21389__auto__ = ((function (c__21410__auto__){
return (function (state_64908){
var state_val_64909 = (state_64908[(1)]);
if((state_val_64909 === (7))){
var inst_64901 = (state_64908[(2)]);
var state_64908__$1 = (function (){var statearr_64910 = state_64908;
(statearr_64910[(7)] = inst_64901);

return statearr_64910;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64908__$1,(34),c);
} else {
if((state_val_64909 === (20))){
var inst_64839 = (state_64908[(8)]);
var inst_64838 = (state_64908[(2)]);
var inst_64839__$1 = cljs.core.get.call(null,inst_64838,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var inst_64840 = cljs.core.get.call(null,inst_64838,new cljs.core.Keyword(null,"query-password","query-password",-2133925446));
var inst_64841 = cljs.core.get.call(null,inst_64838,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var inst_64842 = (inst_64839__$1 == null);
var state_64908__$1 = (function (){var statearr_64911 = state_64908;
(statearr_64911[(9)] = inst_64841);

(statearr_64911[(10)] = inst_64840);

(statearr_64911[(8)] = inst_64839__$1);

return statearr_64911;
})();
if(cljs.core.truth_(inst_64842)){
var statearr_64912_64963 = state_64908__$1;
(statearr_64912_64963[(1)] = (21));

} else {
var statearr_64913_64964 = state_64908__$1;
(statearr_64913_64964[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64909 === (27))){
var inst_64840 = (state_64908[(10)]);
var inst_64839 = (state_64908[(8)]);
var inst_64856 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64857 = [cljs.core.str("/loginGetItems/"),cljs.core.str(inst_64839),cljs.core.str("/"),cljs.core.str(inst_64840)].join('');
var inst_64858 = [new cljs.core.Keyword(null,"login","login",55217519),inst_64857];
var inst_64859 = (new cljs.core.PersistentVector(null,2,(5),inst_64856,inst_64858,null));
var state_64908__$1 = state_64908;
var statearr_64914_64965 = state_64908__$1;
(statearr_64914_64965[(2)] = inst_64859);

(statearr_64914_64965[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64909 === (1))){
var state_64908__$1 = state_64908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64908__$1,(2),c);
} else {
if((state_val_64909 === (24))){
var inst_64850 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64851 = [cljs.core.str("/logout")].join('');
var inst_64852 = [new cljs.core.Keyword(null,"logout","logout",1418564329),inst_64851];
var inst_64853 = (new cljs.core.PersistentVector(null,2,(5),inst_64850,inst_64852,null));
var state_64908__$1 = state_64908;
var statearr_64915_64966 = state_64908__$1;
(statearr_64915_64966[(2)] = inst_64853);

(statearr_64915_64966[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64909 === (4))){
var inst_64906 = (state_64908[(2)]);
var state_64908__$1 = state_64908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64908__$1,inst_64906);
} else {
if((state_val_64909 === (15))){
var state_64908__$1 = state_64908;
var statearr_64916_64967 = state_64908__$1;
(statearr_64916_64967[(2)] = true);

(statearr_64916_64967[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64909 === (21))){
var inst_64844 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64845 = [new cljs.core.Keyword(null,"refresh-lists","refresh-lists",27332375),"/getItems"];
var inst_64846 = (new cljs.core.PersistentVector(null,2,(5),inst_64844,inst_64845,null));
var state_64908__$1 = state_64908;
var statearr_64917_64968 = state_64908__$1;
(statearr_64917_64968[(2)] = inst_64846);

(statearr_64917_64968[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64909 === (31))){
var state_64908__$1 = state_64908;
var statearr_64918_64969 = state_64908__$1;
(statearr_64918_64969[(2)] = null);

(statearr_64918_64969[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64909 === (32))){
var state_64908__$1 = state_64908;
var statearr_64919_64970 = state_64908__$1;
(statearr_64919_64970[(2)] = null);

(statearr_64919_64970[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64909 === (33))){
var inst_64897 = (state_64908[(2)]);
var state_64908__$1 = state_64908;
var statearr_64920_64971 = state_64908__$1;
(statearr_64920_64971[(2)] = inst_64897);

(statearr_64920_64971[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64909 === (13))){
var state_64908__$1 = state_64908;
var statearr_64921_64972 = state_64908__$1;
(statearr_64921_64972[(2)] = false);

(statearr_64921_64972[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64909 === (22))){
var inst_64839 = (state_64908[(8)]);
var inst_64848 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"logout","logout",1418564329),inst_64839);
var state_64908__$1 = state_64908;
if(inst_64848){
var statearr_64922_64973 = state_64908__$1;
(statearr_64922_64973[(1)] = (24));

} else {
var statearr_64923_64974 = state_64908__$1;
(statearr_64923_64974[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64909 === (29))){
var inst_64862 = (state_64908[(2)]);
var state_64908__$1 = state_64908;
var statearr_64924_64975 = state_64908__$1;
(statearr_64924_64975[(2)] = inst_64862);

(statearr_64924_64975[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64909 === (6))){
var inst_64776 = (state_64908[(11)]);
var inst_64813 = cljs.core._EQ_.call(null,inst_64776,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
var state_64908__$1 = state_64908;
if(inst_64813){
var statearr_64925_64976 = state_64908__$1;
(statearr_64925_64976[(1)] = (9));

} else {
var statearr_64926_64977 = state_64908__$1;
(statearr_64926_64977[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64909 === (28))){
var state_64908__$1 = state_64908;
var statearr_64927_64978 = state_64908__$1;
(statearr_64927_64978[(2)] = null);

(statearr_64927_64978[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64909 === (25))){
var state_64908__$1 = state_64908;
var statearr_64928_64979 = state_64908__$1;
(statearr_64928_64979[(1)] = (27));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64909 === (34))){
var inst_64903 = (state_64908[(2)]);
var inst_64773 = inst_64903;
var state_64908__$1 = (function (){var statearr_64930 = state_64908;
(statearr_64930[(12)] = inst_64773);

return statearr_64930;
})();
var statearr_64931_64980 = state_64908__$1;
(statearr_64931_64980[(2)] = null);

(statearr_64931_64980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64909 === (17))){
var inst_64830 = (state_64908[(2)]);
var state_64908__$1 = state_64908;
var statearr_64932_64981 = state_64908__$1;
(statearr_64932_64981[(2)] = inst_64830);

(statearr_64932_64981[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64909 === (3))){
var inst_64773 = (state_64908[(12)]);
var inst_64776 = (state_64908[(11)]);
var inst_64776__$1 = cljs.core.nth.call(null,inst_64773,(0),null);
var inst_64777 = cljs.core.nth.call(null,inst_64773,(1),null);
var inst_64778 = cljs.core.nth.call(null,inst_64773,(2),null);
var inst_64779 = cljs.core._EQ_.call(null,inst_64776__$1,new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122));
var state_64908__$1 = (function (){var statearr_64933 = state_64908;
(statearr_64933[(13)] = inst_64778);

(statearr_64933[(11)] = inst_64776__$1);

(statearr_64933[(14)] = inst_64777);

return statearr_64933;
})();
if(inst_64779){
var statearr_64934_64982 = state_64908__$1;
(statearr_64934_64982[(1)] = (5));

} else {
var statearr_64935_64983 = state_64908__$1;
(statearr_64935_64983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64909 === (12))){
var inst_64777 = (state_64908[(14)]);
var inst_64823 = inst_64777.cljs$lang$protocol_mask$partition0$;
var inst_64824 = (inst_64823 & (64));
var inst_64825 = inst_64777.cljs$core$ISeq$;
var inst_64826 = (inst_64824) || (inst_64825);
var state_64908__$1 = state_64908;
if(cljs.core.truth_(inst_64826)){
var statearr_64936_64984 = state_64908__$1;
(statearr_64936_64984[(1)] = (15));

} else {
var statearr_64937_64985 = state_64908__$1;
(statearr_64937_64985[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64909 === (2))){
var inst_64769 = (state_64908[(2)]);
var inst_64770 = cljs.core.nth.call(null,inst_64769,(0),null);
var inst_64771 = cljs.core.nth.call(null,inst_64769,(1),null);
var inst_64772 = cljs.core.nth.call(null,inst_64769,(2),null);
var inst_64773 = inst_64769;
var state_64908__$1 = (function (){var statearr_64938 = state_64908;
(statearr_64938[(12)] = inst_64773);

(statearr_64938[(15)] = inst_64771);

(statearr_64938[(16)] = inst_64772);

(statearr_64938[(17)] = inst_64770);

return statearr_64938;
})();
var statearr_64939_64986 = state_64908__$1;
(statearr_64939_64986[(2)] = null);

(statearr_64939_64986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64909 === (23))){
var inst_64866 = (state_64908[(2)]);
var inst_64867 = cljs.core.nth.call(null,inst_64866,(0),null);
var inst_64868 = cljs.core.nth.call(null,inst_64866,(1),null);
var inst_64869 = cloudxmark.core.jsonp.call(null,inst_64868);
var state_64908__$1 = (function (){var statearr_64940 = state_64908;
(statearr_64940[(18)] = inst_64867);

return statearr_64940;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64908__$1,(30),inst_64869);
} else {
if((state_val_64909 === (19))){
var inst_64777 = (state_64908[(14)]);
var state_64908__$1 = state_64908;
var statearr_64941_64987 = state_64908__$1;
(statearr_64941_64987[(2)] = inst_64777);

(statearr_64941_64987[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64909 === (11))){
var inst_64899 = (state_64908[(2)]);
var state_64908__$1 = state_64908;
var statearr_64942_64988 = state_64908__$1;
(statearr_64942_64988[(2)] = inst_64899);

(statearr_64942_64988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64909 === (9))){
var inst_64777 = (state_64908[(14)]);
var inst_64817 = [cljs.core.str("lst query data:"),cljs.core.str(inst_64777)].join('');
var inst_64818 = cljs.core.println.call(null,inst_64817);
var inst_64820 = (inst_64777 == null);
var inst_64821 = cljs.core.not.call(null,inst_64820);
var state_64908__$1 = (function (){var statearr_64943 = state_64908;
(statearr_64943[(19)] = inst_64818);

return statearr_64943;
})();
if(inst_64821){
var statearr_64944_64989 = state_64908__$1;
(statearr_64944_64989[(1)] = (12));

} else {
var statearr_64945_64990 = state_64908__$1;
(statearr_64945_64990[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64909 === (5))){
var inst_64777 = (state_64908[(14)]);
var inst_64782 = [cljs.core.str(cloudxmark.core.wiki_url),cljs.core.str(inst_64777)].join('');
var inst_64783 = cloudxmark.core.jsonp.call(null,inst_64782);
var state_64908__$1 = state_64908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64908__$1,(8),inst_64783);
} else {
if((state_val_64909 === (14))){
var inst_64833 = (state_64908[(2)]);
var state_64908__$1 = state_64908;
if(cljs.core.truth_(inst_64833)){
var statearr_64946_64991 = state_64908__$1;
(statearr_64946_64991[(1)] = (18));

} else {
var statearr_64947_64992 = state_64908__$1;
(statearr_64947_64992[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64909 === (26))){
var inst_64864 = (state_64908[(2)]);
var state_64908__$1 = state_64908;
var statearr_64948_64993 = state_64908__$1;
(statearr_64948_64993[(2)] = inst_64864);

(statearr_64948_64993[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64909 === (16))){
var state_64908__$1 = state_64908;
var statearr_64949_64994 = state_64908__$1;
(statearr_64949_64994[(2)] = false);

(statearr_64949_64994[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64909 === (30))){
var inst_64867 = (state_64908[(18)]);
var inst_64841 = (state_64908[(9)]);
var inst_64871 = (state_64908[(2)]);
var inst_64872 = cljs.core.js__GT_clj.call(null,inst_64871);
var inst_64873 = cljs.core.assoc.call(null,inst_64872,"ver",inst_64841);
var inst_64874 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_64873);
var inst_64875 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_64867);
var inst_64876 = cljs.core.merge.call(null,inst_64874,inst_64875);
var inst_64877 = cljs.core.assoc.call(null,inst_64873,new cljs.core.Keyword(null,"status","status",-1997798413),inst_64876);
var inst_64878 = cljs.core.List.EMPTY;
var inst_64879 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_64880 = cljs.core._conj.call(null,inst_64878,inst_64879);
var inst_64881 = cljs.core.List.EMPTY;
var inst_64882 = cljs.core._conj.call(null,inst_64881,inst_64877);
var inst_64883 = cljs.core.concat.call(null,inst_64880,inst_64882);
var inst_64884 = cljs.core.seq.call(null,inst_64883);
var inst_64885 = cljs.core.sequence.call(null,inst_64884);
var inst_64886 = cljs.core.List.EMPTY;
var inst_64887 = cljs.core._conj.call(null,inst_64886,inst_64885);
var inst_64888 = cljs.core.concat.call(null,inst_64887);
var inst_64889 = cljs.core.seq.call(null,inst_64888);
var inst_64890 = cljs.core.sequence.call(null,inst_64889);
var inst_64891 = cljs.core.vec.call(null,inst_64890);
var inst_64892 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_64891);
var state_64908__$1 = state_64908;
var statearr_64950_64995 = state_64908__$1;
(statearr_64950_64995[(2)] = inst_64892);

(statearr_64950_64995[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64909 === (10))){
var state_64908__$1 = state_64908;
var statearr_64951_64996 = state_64908__$1;
(statearr_64951_64996[(1)] = (31));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64909 === (18))){
var inst_64777 = (state_64908[(14)]);
var inst_64835 = cljs.core.apply.call(null,cljs.core.hash_map,inst_64777);
var state_64908__$1 = state_64908;
var statearr_64953_64997 = state_64908__$1;
(statearr_64953_64997[(2)] = inst_64835);

(statearr_64953_64997[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64909 === (8))){
var inst_64785 = (state_64908[(2)]);
var inst_64786 = cljs.core.nth.call(null,inst_64785,(0),null);
var inst_64787 = cljs.core.nth.call(null,inst_64785,(1),null);
var inst_64788 = cljs.core.js__GT_clj.call(null,inst_64787);
var inst_64789 = cljs.core.List.EMPTY;
var inst_64790 = new cljs.core.Symbol("wiki","set-lst","wiki/set-lst",-1532354153,null);
var inst_64791 = cljs.core._conj.call(null,inst_64789,inst_64790);
var inst_64792 = cljs.core.List.EMPTY;
var inst_64793 = cljs.core._conj.call(null,inst_64792,new cljs.core.Keyword(null,"lst","lst",269745987));
var inst_64794 = cljs.core.List.EMPTY;
var inst_64795 = cljs.core._conj.call(null,inst_64794,inst_64788);
var inst_64796 = cljs.core.concat.call(null,inst_64793,inst_64795);
var inst_64797 = cljs.core.seq.call(null,inst_64796);
var inst_64798 = cljs.core.sequence.call(null,inst_64797);
var inst_64799 = cljs.core.apply.call(null,cljs.core.array_map,inst_64798);
var inst_64800 = cljs.core.List.EMPTY;
var inst_64801 = cljs.core._conj.call(null,inst_64800,inst_64799);
var inst_64802 = cljs.core.concat.call(null,inst_64791,inst_64801);
var inst_64803 = cljs.core.seq.call(null,inst_64802);
var inst_64804 = cljs.core.sequence.call(null,inst_64803);
var inst_64805 = cljs.core.List.EMPTY;
var inst_64806 = cljs.core._conj.call(null,inst_64805,inst_64804);
var inst_64807 = cljs.core.concat.call(null,inst_64806);
var inst_64808 = cljs.core.seq.call(null,inst_64807);
var inst_64809 = cljs.core.sequence.call(null,inst_64808);
var inst_64810 = cljs.core.vec.call(null,inst_64809);
var inst_64811 = om.next.transact_BANG_.call(null,cloudxmark.core.wiki_reconciler,inst_64810);
var state_64908__$1 = (function (){var statearr_64954 = state_64908;
(statearr_64954[(20)] = inst_64786);

return statearr_64954;
})();
var statearr_64955_64998 = state_64908__$1;
(statearr_64955_64998[(2)] = inst_64811);

(statearr_64955_64998[(1)] = (7));


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
});})(c__21410__auto__))
;
return ((function (switch__21389__auto__,c__21410__auto__){
return (function() {
var cloudxmark$core$search_loop_$_state_machine__21390__auto__ = null;
var cloudxmark$core$search_loop_$_state_machine__21390__auto____0 = (function (){
var statearr_64959 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64959[(0)] = cloudxmark$core$search_loop_$_state_machine__21390__auto__);

(statearr_64959[(1)] = (1));

return statearr_64959;
});
var cloudxmark$core$search_loop_$_state_machine__21390__auto____1 = (function (state_64908){
while(true){
var ret_value__21391__auto__ = (function (){try{while(true){
var result__21392__auto__ = switch__21389__auto__.call(null,state_64908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21392__auto__;
}
break;
}
}catch (e64960){if((e64960 instanceof Object)){
var ex__21393__auto__ = e64960;
var statearr_64961_64999 = state_64908;
(statearr_64961_64999[(5)] = ex__21393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65000 = state_64908;
state_64908 = G__65000;
continue;
} else {
return ret_value__21391__auto__;
}
break;
}
});
cloudxmark$core$search_loop_$_state_machine__21390__auto__ = function(state_64908){
switch(arguments.length){
case 0:
return cloudxmark$core$search_loop_$_state_machine__21390__auto____0.call(this);
case 1:
return cloudxmark$core$search_loop_$_state_machine__21390__auto____1.call(this,state_64908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cloudxmark$core$search_loop_$_state_machine__21390__auto__.cljs$core$IFn$_invoke$arity$0 = cloudxmark$core$search_loop_$_state_machine__21390__auto____0;
cloudxmark$core$search_loop_$_state_machine__21390__auto__.cljs$core$IFn$_invoke$arity$1 = cloudxmark$core$search_loop_$_state_machine__21390__auto____1;
return cloudxmark$core$search_loop_$_state_machine__21390__auto__;
})()
;})(switch__21389__auto__,c__21410__auto__))
})();
var state__21412__auto__ = (function (){var statearr_64962 = f__21411__auto__.call(null);
(statearr_64962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21410__auto__);

return statearr_64962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21412__auto__);
});})(c__21410__auto__))
);

return c__21410__auto__;
});
cloudxmark.core.search_loop.call(null,cloudxmark.core.event_chan);
om.next.add_root_BANG_.call(null,cloudxmark.core.wiki_reconciler,cloudxmark.core.AutoCompleter,goog.dom.getElement("wiki"));
om.next.add_root_BANG_.call(null,cloudxmark.core.lst_reconciler,cloudxmark.core.Lsts,goog.dom.getElement("lsts"));

//# sourceMappingURL=core.js.map