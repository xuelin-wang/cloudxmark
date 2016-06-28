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
var args23458 = [];
var len__19538__auto___23461 = arguments.length;
var i__19539__auto___23462 = (0);
while(true){
if((i__19539__auto___23462 < len__19538__auto___23461)){
args23458.push((arguments[i__19539__auto___23462]));

var G__23463 = (i__19539__auto___23462 + (1));
i__19539__auto___23462 = G__23463;
continue;
} else {
}
break;
}

var G__23460 = args23458.length;
switch (G__23460) {
case 1:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23458.length)].join('')));

}
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return cloudxmark.core.jsonp.call(null,cljs.core.async.chan.call(null),uri);
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2 = (function (c,uri){
var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));
cljs.core.println.call(null,[cljs.core.str("before send "),cljs.core.str(uri)].join(''));

gjsonp.send(null,((function (gjsonp){
return (function (p1__23456_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__23456_SHARP_);
});})(gjsonp))
,((function (gjsonp){
return (function (p1__23457_SHARP_){
return cljs.core.println.call(null,[cljs.core.str("error!"),cljs.core.str(p1__23457_SHARP_)].join(''));
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
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),(function (p__23465,_,p__23466){
var map__23467 = p__23465;
var map__23467__$1 = ((((!((map__23467 == null)))?((((map__23467.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23467.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23467):map__23467);
var env = map__23467__$1;
var state = cljs.core.get.call(null,map__23467__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__23467__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__23468 = p__23466;
var map__23468__$1 = ((((!((map__23468 == null)))?((((map__23468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23468):map__23468);
var query = cljs.core.get.call(null,map__23468__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wiki","wiki",1946329928),new cljs.core.Keyword(null,"lst","lst",269745987)], null),cljs.core.PersistentVector.EMPTY)], null),(((clojure.string.blank_QMARK_.call(null,query)) || ((cljs.core.count.call(null,query) < (3))))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122),ast], null)));
}));
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword(null,"lst","lst",269745987),(function (p__23471,_,p__23472){
var map__23473 = p__23471;
var map__23473__$1 = ((((!((map__23473 == null)))?((((map__23473.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23473.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23473):map__23473);
var env = map__23473__$1;
var state = cljs.core.get.call(null,map__23473__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__23473__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__23474 = p__23472;
var map__23474__$1 = ((((!((map__23474 == null)))?((((map__23474.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23474.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23474):map__23474);
var query_ver = cljs.core.get.call(null,map__23474__$1,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var query_user = cljs.core.get.call(null,map__23474__$1,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var query_password = cljs.core.get.call(null,map__23474__$1,new cljs.core.Keyword(null,"query-password","query-password",-2133925446));
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var map__23477 = lst;
var map__23477__$1 = ((((!((map__23477 == null)))?((((map__23477.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23477.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23477):map__23477);
var lsts = cljs.core.get.call(null,map__23477__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr = cljs.core.get.call(null,map__23477__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var ver = cljs.core.get.call(null,map__23477__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__23477__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var status = cljs.core.get.call(null,map__23477__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
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
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null),(function (p__23479,_,p__23480){
var map__23481 = p__23479;
var map__23481__$1 = ((((!((map__23481 == null)))?((((map__23481.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23481.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23481):map__23481);
var env = map__23481__$1;
var state = cljs.core.get.call(null,map__23481__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__23482 = p__23480;
var map__23482__$1 = ((((!((map__23482 == null)))?((((map__23482.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23482.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23482):map__23482);
var field_id = cljs.core.get.call(null,map__23482__$1,new cljs.core.Keyword(null,"field-id","field-id",-353751335));
var value = cljs.core.get.call(null,map__23482__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23481,map__23481__$1,env,state,map__23482,map__23482__$1,field_id,value){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before setfield: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),field_id], null),value);

return cljs.core.println.call(null,[cljs.core.str("state after setfield: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});})(map__23481,map__23481__$1,env,state,map__23482,map__23482__$1,field_id,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null),(function (p__23485,_,p__23486){
var map__23487 = p__23485;
var map__23487__$1 = ((((!((map__23487 == null)))?((((map__23487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23487):map__23487);
var env = map__23487__$1;
var state = cljs.core.get.call(null,map__23487__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__23488 = p__23486;
var map__23488__$1 = ((((!((map__23488 == null)))?((((map__23488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23488):map__23488);
var field_id = cljs.core.get.call(null,map__23488__$1,new cljs.core.Keyword(null,"field-id","field-id",-353751335));
var status = cljs.core.get.call(null,map__23488__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23487,map__23487__$1,env,state,map__23488,map__23488__$1,field_id,status){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before setfield: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),field_id], null),status);

return cljs.core.println.call(null,[cljs.core.str("state after setfield: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});})(map__23487,map__23487__$1,env,state,map__23488,map__23488__$1,field_id,status))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-curr","lst/set-curr",1109194929,null),(function (p__23491,_,p__23492){
var map__23493 = p__23491;
var map__23493__$1 = ((((!((map__23493 == null)))?((((map__23493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23493):map__23493);
var env = map__23493__$1;
var state = cljs.core.get.call(null,map__23493__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__23494 = p__23492;
var map__23494__$1 = ((((!((map__23494 == null)))?((((map__23494.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23494.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23494):map__23494);
var curr = cljs.core.get.call(null,map__23494__$1,new cljs.core.Keyword("lst","curr","lst/curr",-1092232479));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23493,map__23493__$1,env,state,map__23494,map__23494__$1,curr){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lst","curr","lst/curr",-1092232479)], null),cljs.core.constantly.call(null,curr));

return cljs.core.println.call(null,[cljs.core.str("set to "),cljs.core.str(curr)].join(''));
});})(map__23493,map__23493__$1,env,state,map__23494,map__23494__$1,curr))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null),(function (p__23497,_,data_map){
var map__23498 = p__23497;
var map__23498__$1 = ((((!((map__23498 == null)))?((((map__23498.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23498.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23498):map__23498);
var env = map__23498__$1;
var state = cljs.core.get.call(null,map__23498__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23498,map__23498__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("data-map:"),cljs.core.str(data_map)].join(''));

var map__23500_23502 = data_map;
var map__23500_23503__$1 = ((((!((map__23500_23502 == null)))?((((map__23500_23502.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23500_23502.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23500_23502):map__23500_23502);
var status_23504 = cljs.core.get.call(null,map__23500_23503__$1,"status");
var lsts_23505 = cljs.core.get.call(null,map__23500_23503__$1,"lsts");
var user_id_23506 = cljs.core.get.call(null,map__23500_23503__$1,"user_id");
var status_id_23507 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(status_23504);
var status1_23508 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),status_23504.call(null,"info"),new cljs.core.Keyword(null,"warn","warn",-436710552),status_23504.call(null,"warn"),new cljs.core.Keyword(null,"error","error",-978969032),status_23504.call(null,"error")], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(status1_23508))){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413),status_id_23507], null),status1_23508);
} else {
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),cljs.core.merge.call(null,new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),data_map.call(null,"lsts"),new cljs.core.Keyword(null,"ver","ver",1683769565),data_map.call(null,"ver"),new cljs.core.Keyword(null,"user-id","user-id",-206822291),data_map.call(null,"user_id"),new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.merge.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),cljs.core.PersistentArrayMap.fromArray([status_id_23507,status1_23508], true, false))], null)));
}

return cljs.core.println.call(null,[cljs.core.str("state after setlist:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});})(map__23498,map__23498__$1,env,state))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("wiki","set-lst","wiki/set-lst",-1532354153,null),(function (p__23509,_,lst){
var map__23510 = p__23509;
var map__23510__$1 = ((((!((map__23510 == null)))?((((map__23510.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23510.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23510):map__23510);
var env = map__23510__$1;
var state = cljs.core.get.call(null,map__23510__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23510,map__23510__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("before wiki update list:"),cljs.core.str(lst)].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wiki","wiki",1946329928),new cljs.core.Keyword(null,"lst","lst",269745987)], null),new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(lst));

return cljs.core.println.call(null,[cljs.core.str("state after wiki update:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});})(map__23510,map__23510__$1,env,state))
], null);
}));
cloudxmark.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wiki","wiki",1946329928),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst","lst",269745987),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0),new cljs.core.Keyword(null,"curr","curr",-1092372808),(0),new cljs.core.Keyword(null,"user-id","user-id",-206822291),null], null)], null));
cloudxmark.core.result_list = (function cloudxmark$core$result_list(results){
return React.DOM.ul({"key": "result-list"},om.util.force_children.call(null,cljs.core.map_indexed.call(null,(function (idx,itm){
return React.DOM.li({"key": idx},om.util.force_children.call(null,itm));
}),results)));
});
cloudxmark.core.status_line = (function cloudxmark$core$status_line(p__23512){
var map__23516 = p__23512;
var map__23516__$1 = ((((!((map__23516 == null)))?((((map__23516.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23516.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23516):map__23516);
var info = cljs.core.get.call(null,map__23516__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var warn = cljs.core.get.call(null,map__23516__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var error = cljs.core.get.call(null,map__23516__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.println.call(null,[cljs.core.str("info:"),cljs.core.str(info),cljs.core.str(",warn:"),cljs.core.str(warn),cljs.core.str(",error:"),cljs.core.str(error)].join(''));

var vec__23518 = (cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",error], null):(cljs.core.truth_(warn)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange",warn], null):(cljs.core.truth_(info)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black",info], null):null)));
var color = cljs.core.nth.call(null,vec__23518,(0),null);
var msg = cljs.core.nth.call(null,vec__23518,(1),null);
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
var vec__23521 = (function (){var G__23522 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23522) {
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
var elem_key = cljs.core.nth.call(null,vec__23521,(0),null);
var query_key = cljs.core.nth.call(null,vec__23521,(1),null);
return om.dom.input.call(null,{"key": elem_key, "value": query, "onChange": ((function (vec__23521,elem_key,query_key){
return (function (e){
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.fromArray([query_key,e.target.value], true, false)], null));
});})(vec__23521,elem_key,query_key))
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

return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__19302__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null)),(function (){var x__19302__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"field-id","field-id",-353751335)),(function (){var x__19302__auto__ = field_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19302__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__19302__auto__ = value;
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
var this__21582__auto__ = this;
React.Component.apply(this__21582__auto__,arguments);

if(!((this__21582__auto__.initLocalState == null))){
this__21582__auto__.state = this__21582__auto__.initLocalState();
} else {
this__21582__auto__.state = {};
}

return this__21582__auto__;
});

cloudxmark.core.Lsts.prototype = goog.object.clone(React.Component.prototype);

var x23528_23540 = cloudxmark.core.Lsts.prototype;
x23528_23540.componentWillUpdate = ((function (x23528_23540){
return (function (next_props__21518__auto__,next_state__21519__auto__){
var this__21517__auto__ = this;
if(((!((this__21517__auto__ == null)))?(((false) || (this__21517__auto__.om$next$Ident$))?true:false):false)){
var ident__21521__auto___23541 = om.next.ident.call(null,this__21517__auto__,om.next.props.call(null,this__21517__auto__));
var next_ident__21522__auto___23542 = om.next.ident.call(null,this__21517__auto__,om.next._next_props.call(null,next_props__21518__auto__,this__21517__auto__));
if(cljs.core.not_EQ_.call(null,ident__21521__auto___23541,next_ident__21522__auto___23542)){
var idxr__21523__auto___23543 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21517__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__21523__auto___23543 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__21523__auto___23543),((function (idxr__21523__auto___23543,ident__21521__auto___23541,next_ident__21522__auto___23542,this__21517__auto__,x23528_23540){
return (function (indexes__21524__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__21524__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__21521__auto___23541], null),cljs.core.disj,this__21517__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__21522__auto___23542], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__21517__auto__);
});})(idxr__21523__auto___23543,ident__21521__auto___23541,next_ident__21522__auto___23542,this__21517__auto__,x23528_23540))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__21517__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21517__auto__);
});})(x23528_23540))
;

x23528_23540.shouldComponentUpdate = ((function (x23528_23540){
return (function (next_props__21518__auto__,next_state__21519__auto__){
var this__21517__auto__ = this;
var next_children__21520__auto__ = next_props__21518__auto__.children;
var next_props__21518__auto____$1 = goog.object.get(next_props__21518__auto__,"omcljs$value");
var next_props__21518__auto____$2 = (function (){var G__23530 = next_props__21518__auto____$1;
if((next_props__21518__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__23530);
} else {
return G__23530;
}
})();
var or__18468__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__21517__auto__),next_props__21518__auto____$2);
if(or__18468__auto__){
return or__18468__auto__;
} else {
var or__18468__auto____$1 = (function (){var and__18456__auto__ = this__21517__auto__.state;
if(cljs.core.truth_(and__18456__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__21517__auto__.state,"omcljs$state"),goog.object.get(next_state__21519__auto__,"omcljs$state"));
} else {
return and__18456__auto__;
}
})();
if(cljs.core.truth_(or__18468__auto____$1)){
return or__18468__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__21517__auto__.props.children,next_children__21520__auto__);
}
}
});})(x23528_23540))
;

x23528_23540.componentWillUnmount = ((function (x23528_23540){
return (function (){
var this__21517__auto__ = this;
var r__21528__auto__ = om.next.get_reconciler.call(null,this__21517__auto__);
var cfg__21529__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__21528__auto__);
var st__21530__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__21529__auto__);
var indexer__21527__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__21529__auto__);
if(cljs.core.truth_((function (){var and__18456__auto__ = !((st__21530__auto__ == null));
if(and__18456__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__21530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__21517__auto__], null));
} else {
return and__18456__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__21530__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__21517__auto__);
} else {
}

if((indexer__21527__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__21527__auto__,this__21517__auto__);
}
});})(x23528_23540))
;

x23528_23540.componentDidUpdate = ((function (x23528_23540){
return (function (prev_props__21525__auto__,prev_state__21526__auto__){
var this__21517__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21517__auto__);
});})(x23528_23540))
;

x23528_23540.isMounted = ((function (x23528_23540){
return (function (){
var this__21517__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21517__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x23528_23540))
;

x23528_23540.componentWillMount = ((function (x23528_23540){
return (function (){
var this__21517__auto__ = this;
var indexer__21527__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21517__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21527__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21527__auto__,this__21517__auto__);
}
});})(x23528_23540))
;

x23528_23540.render = ((function (x23528_23540){
return (function (){
var this__21516__auto__ = this;
var this$ = this__21516__auto__;
var _STAR_reconciler_STAR_23531 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_23532 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_23533 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_23534 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_23535 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21516__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21516__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21516__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21516__auto__);

om.next._STAR_parent_STAR_ = this__21516__auto__;

try{var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__23536 = lst;
var map__23536__$1 = ((((!((map__23536 == null)))?((((map__23536.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23536.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23536):map__23536);
var lsts = cljs.core.get.call(null,map__23536__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr = cljs.core.get.call(null,map__23536__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var ver = cljs.core.get.call(null,map__23536__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__23536__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var status = cljs.core.get.call(null,map__23536__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if((user_id == null)){
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Please login"))),om.util.force_children.call(null,"User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"user-id-field","user-id-field",2116160486))),om.util.force_children.call(null,"Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"password-field","password-field",-1811673649))),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.login_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(status))));
} else {
return React.DOM.div(null,om.util.force_children.call(null,cloudxmark.core.logout_button.call(null,this$)),om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Lists"))),om.util.force_children.call(null,cloudxmark.core.refresh_lists_button.call(null,this$,user_id,ver)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"refresh_lists","refresh_lists",1467404952).cljs$core$IFn$_invoke$arity$1(status))),om.util.force_children.call(null,((!(cljs.core.empty_QMARK_.call(null,lsts)))?cloudxmark.core.lst_list.call(null,this$,lsts,(((curr == null))?(0):curr)):null)));
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_23535;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_23534;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_23533;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_23532;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_23531;
}});})(x23528_23540))
;


cloudxmark.core.Lsts.prototype.constructor = cloudxmark.core.Lsts;

cloudxmark.core.Lsts.prototype.constructor.displayName = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.prototype.om$isComponent = true;

var x23538_23544 = cloudxmark.core.Lsts;
x23538_23544.om$next$IQueryParams$ = true;

x23538_23544.om$next$IQueryParams$params$arity$1 = ((function (x23538_23544){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-password","query-password",-2133925446),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0)], null);
});})(x23538_23544))
;

x23538_23544.om$next$IQuery$ = true;

x23538_23544.om$next$IQuery$query$arity$1 = ((function (x23538_23544){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-password","query-password",-2133925446),new cljs.core.Symbol(null,"?query-password","?query-password",1376893065,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null)], null))], null);
});})(x23538_23544))
;


var x23539_23545 = cloudxmark.core.Lsts.prototype;
x23539_23545.om$next$IQueryParams$ = true;

x23539_23545.om$next$IQueryParams$params$arity$1 = ((function (x23539_23545){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-password","query-password",-2133925446),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0)], null);
});})(x23539_23545))
;

x23539_23545.om$next$IQuery$ = true;

x23539_23545.om$next$IQuery$query$arity$1 = ((function (x23539_23545){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-password","query-password",-2133925446),new cljs.core.Symbol(null,"?query-password","?query-password",1376893065,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null)], null))], null);
});})(x23539_23545))
;


cloudxmark.core.Lsts.cljs$lang$type = true;

cloudxmark.core.Lsts.cljs$lang$ctorStr = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.cljs$lang$ctorPrWriter = (function (this__21584__auto__,writer__21585__auto__,opt__21586__auto__){
return cljs.core._write.call(null,writer__21585__auto__,"cloudxmark.core/Lsts");
});
/**
 * @constructor
 */
cloudxmark.core.AutoCompleter = (function cloudxmark$core$AutoCompleter(){
var this__21582__auto__ = this;
React.Component.apply(this__21582__auto__,arguments);

if(!((this__21582__auto__.initLocalState == null))){
this__21582__auto__.state = this__21582__auto__.initLocalState();
} else {
this__21582__auto__.state = {};
}

return this__21582__auto__;
});

cloudxmark.core.AutoCompleter.prototype = goog.object.clone(React.Component.prototype);

var x23550_23563 = cloudxmark.core.AutoCompleter.prototype;
x23550_23563.componentWillUpdate = ((function (x23550_23563){
return (function (next_props__21518__auto__,next_state__21519__auto__){
var this__21517__auto__ = this;
if(((!((this__21517__auto__ == null)))?(((false) || (this__21517__auto__.om$next$Ident$))?true:false):false)){
var ident__21521__auto___23564 = om.next.ident.call(null,this__21517__auto__,om.next.props.call(null,this__21517__auto__));
var next_ident__21522__auto___23565 = om.next.ident.call(null,this__21517__auto__,om.next._next_props.call(null,next_props__21518__auto__,this__21517__auto__));
if(cljs.core.not_EQ_.call(null,ident__21521__auto___23564,next_ident__21522__auto___23565)){
var idxr__21523__auto___23566 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21517__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__21523__auto___23566 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__21523__auto___23566),((function (idxr__21523__auto___23566,ident__21521__auto___23564,next_ident__21522__auto___23565,this__21517__auto__,x23550_23563){
return (function (indexes__21524__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__21524__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__21521__auto___23564], null),cljs.core.disj,this__21517__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__21522__auto___23565], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__21517__auto__);
});})(idxr__21523__auto___23566,ident__21521__auto___23564,next_ident__21522__auto___23565,this__21517__auto__,x23550_23563))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__21517__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21517__auto__);
});})(x23550_23563))
;

x23550_23563.shouldComponentUpdate = ((function (x23550_23563){
return (function (next_props__21518__auto__,next_state__21519__auto__){
var this__21517__auto__ = this;
var next_children__21520__auto__ = next_props__21518__auto__.children;
var next_props__21518__auto____$1 = goog.object.get(next_props__21518__auto__,"omcljs$value");
var next_props__21518__auto____$2 = (function (){var G__23552 = next_props__21518__auto____$1;
if((next_props__21518__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__23552);
} else {
return G__23552;
}
})();
var or__18468__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__21517__auto__),next_props__21518__auto____$2);
if(or__18468__auto__){
return or__18468__auto__;
} else {
var or__18468__auto____$1 = (function (){var and__18456__auto__ = this__21517__auto__.state;
if(cljs.core.truth_(and__18456__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__21517__auto__.state,"omcljs$state"),goog.object.get(next_state__21519__auto__,"omcljs$state"));
} else {
return and__18456__auto__;
}
})();
if(cljs.core.truth_(or__18468__auto____$1)){
return or__18468__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__21517__auto__.props.children,next_children__21520__auto__);
}
}
});})(x23550_23563))
;

x23550_23563.componentWillUnmount = ((function (x23550_23563){
return (function (){
var this__21517__auto__ = this;
var r__21528__auto__ = om.next.get_reconciler.call(null,this__21517__auto__);
var cfg__21529__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__21528__auto__);
var st__21530__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__21529__auto__);
var indexer__21527__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__21529__auto__);
if(cljs.core.truth_((function (){var and__18456__auto__ = !((st__21530__auto__ == null));
if(and__18456__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__21530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__21517__auto__], null));
} else {
return and__18456__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__21530__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__21517__auto__);
} else {
}

if((indexer__21527__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__21527__auto__,this__21517__auto__);
}
});})(x23550_23563))
;

x23550_23563.componentDidUpdate = ((function (x23550_23563){
return (function (prev_props__21525__auto__,prev_state__21526__auto__){
var this__21517__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21517__auto__);
});})(x23550_23563))
;

x23550_23563.isMounted = ((function (x23550_23563){
return (function (){
var this__21517__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21517__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x23550_23563))
;

x23550_23563.componentWillMount = ((function (x23550_23563){
return (function (){
var this__21517__auto__ = this;
var indexer__21527__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21517__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21527__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21527__auto__,this__21517__auto__);
}
});})(x23550_23563))
;

x23550_23563.render = ((function (x23550_23563){
return (function (){
var this__21516__auto__ = this;
var this$ = this__21516__auto__;
var _STAR_reconciler_STAR_23553 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_23554 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_23555 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_23556 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_23557 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21516__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21516__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21516__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21516__auto__);

om.next._STAR_parent_STAR_ = this__21516__auto__;

try{var map__23558 = om.next.props.call(null,this$);
var map__23558__$1 = ((((!((map__23558 == null)))?((((map__23558.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23558.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23558):map__23558);
var lst = cljs.core.get.call(null,map__23558__$1,new cljs.core.Keyword("wiki","lst","wiki/lst",270705683));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"AutoCompleter"))),om.util.force_children.call(null,(function (){var G__23560 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloudxmark.core.search_field.call(null,this$,new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648).cljs$core$IFn$_invoke$arity$1(om.next.get_params.call(null,this$)),new cljs.core.Keyword(null,"wiki","wiki",1946329928))], null);
if(!(cljs.core.empty_QMARK_.call(null,lst))){
return cljs.core.conj.call(null,G__23560,cloudxmark.core.result_list.call(null,lst));
} else {
return G__23560;
}
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_23557;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_23556;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_23555;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_23554;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_23553;
}});})(x23550_23563))
;


cloudxmark.core.AutoCompleter.prototype.constructor = cloudxmark.core.AutoCompleter;

cloudxmark.core.AutoCompleter.prototype.constructor.displayName = "cloudxmark.core/AutoCompleter";

cloudxmark.core.AutoCompleter.prototype.om$isComponent = true;

var x23561_23567 = cloudxmark.core.AutoCompleter;
x23561_23567.om$next$IQueryParams$ = true;

x23561_23567.om$next$IQueryParams$params$arity$1 = ((function (x23561_23567){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648),""], null);
});})(x23561_23567))
;

x23561_23567.om$next$IQuery$ = true;

x23561_23567.om$next$IQuery$query$arity$1 = ((function (x23561_23567){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?wiki-query","?wiki-query",-1723016161,null)], null))], null);
});})(x23561_23567))
;


var x23562_23568 = cloudxmark.core.AutoCompleter.prototype;
x23562_23568.om$next$IQueryParams$ = true;

x23562_23568.om$next$IQueryParams$params$arity$1 = ((function (x23562_23568){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648),""], null);
});})(x23562_23568))
;

x23562_23568.om$next$IQuery$ = true;

x23562_23568.om$next$IQuery$query$arity$1 = ((function (x23562_23568){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?wiki-query","?wiki-query",-1723016161,null)], null))], null);
});})(x23562_23568))
;


cloudxmark.core.AutoCompleter.cljs$lang$type = true;

cloudxmark.core.AutoCompleter.cljs$lang$ctorStr = "cloudxmark.core/AutoCompleter";

cloudxmark.core.AutoCompleter.cljs$lang$ctorPrWriter = (function (this__21584__auto__,writer__21585__auto__,opt__21586__auto__){
return cljs.core._write.call(null,writer__21585__auto__,"cloudxmark.core/AutoCompleter");
});
cloudxmark.core.send_to_chan = (function cloudxmark$core$send_to_chan(c){
return (function (p__23578,cb){
var map__23579 = p__23578;
var map__23579__$1 = ((((!((map__23579 == null)))?((((map__23579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23579):map__23579);
var wiki_search = cljs.core.get.call(null,map__23579__$1,new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122));
var lst_search = cljs.core.get.call(null,map__23579__$1,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
if(cljs.core.truth_(wiki_search)){
var map__23581 = om.next.query__GT_ast.call(null,wiki_search);
var map__23581__$1 = ((((!((map__23581 == null)))?((((map__23581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23581):map__23581);
var vec__23582 = cljs.core.get.call(null,map__23581__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var wiki_search__$1 = cljs.core.nth.call(null,vec__23582,(0),null);
var dontcare = cljs.core.println.call(null,[cljs.core.str(wiki_search__$1)].join(''));
var query_params = cljs.core.get_in.call(null,wiki_search__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"query","query",-1288509510)], null));
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122),query_params,cb], null));
} else {
if(cljs.core.truth_(lst_search)){
var map__23584 = om.next.query__GT_ast.call(null,lst_search);
var map__23584__$1 = ((((!((map__23584 == null)))?((((map__23584.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23584.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23584):map__23584);
var vec__23585 = cljs.core.get.call(null,map__23584__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var lst_search__$1 = cljs.core.nth.call(null,vec__23585,(0),null);
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
var c__21409__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21409__auto__){
return (function (){
var f__21410__auto__ = (function (){var switch__21388__auto__ = ((function (c__21409__auto__){
return (function (state_23928){
var state_val_23929 = (state_23928[(1)]);
if((state_val_23929 === (7))){
var inst_23921 = (state_23928[(2)]);
var state_23928__$1 = (function (){var statearr_23930 = state_23928;
(statearr_23930[(7)] = inst_23921);

return statearr_23930;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23928__$1,(34),c);
} else {
if((state_val_23929 === (20))){
var inst_23859 = (state_23928[(8)]);
var inst_23858 = (state_23928[(2)]);
var inst_23859__$1 = cljs.core.get.call(null,inst_23858,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var inst_23860 = cljs.core.get.call(null,inst_23858,new cljs.core.Keyword(null,"query-password","query-password",-2133925446));
var inst_23861 = cljs.core.get.call(null,inst_23858,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var inst_23862 = (inst_23859__$1 == null);
var state_23928__$1 = (function (){var statearr_23931 = state_23928;
(statearr_23931[(9)] = inst_23861);

(statearr_23931[(10)] = inst_23860);

(statearr_23931[(8)] = inst_23859__$1);

return statearr_23931;
})();
if(cljs.core.truth_(inst_23862)){
var statearr_23932_23983 = state_23928__$1;
(statearr_23932_23983[(1)] = (21));

} else {
var statearr_23933_23984 = state_23928__$1;
(statearr_23933_23984[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (27))){
var inst_23860 = (state_23928[(10)]);
var inst_23859 = (state_23928[(8)]);
var inst_23876 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23877 = [cljs.core.str("/loginGetItems/"),cljs.core.str(inst_23859),cljs.core.str("/"),cljs.core.str(inst_23860)].join('');
var inst_23878 = [new cljs.core.Keyword(null,"login","login",55217519),inst_23877];
var inst_23879 = (new cljs.core.PersistentVector(null,2,(5),inst_23876,inst_23878,null));
var state_23928__$1 = state_23928;
var statearr_23934_23985 = state_23928__$1;
(statearr_23934_23985[(2)] = inst_23879);

(statearr_23934_23985[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (1))){
var state_23928__$1 = state_23928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23928__$1,(2),c);
} else {
if((state_val_23929 === (24))){
var inst_23870 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23871 = [cljs.core.str("/logout")].join('');
var inst_23872 = [new cljs.core.Keyword(null,"logout","logout",1418564329),inst_23871];
var inst_23873 = (new cljs.core.PersistentVector(null,2,(5),inst_23870,inst_23872,null));
var state_23928__$1 = state_23928;
var statearr_23935_23986 = state_23928__$1;
(statearr_23935_23986[(2)] = inst_23873);

(statearr_23935_23986[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (4))){
var inst_23926 = (state_23928[(2)]);
var state_23928__$1 = state_23928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23928__$1,inst_23926);
} else {
if((state_val_23929 === (15))){
var state_23928__$1 = state_23928;
var statearr_23936_23987 = state_23928__$1;
(statearr_23936_23987[(2)] = true);

(statearr_23936_23987[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (21))){
var inst_23864 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23865 = [new cljs.core.Keyword(null,"refresh-lists","refresh-lists",27332375),"/getItems"];
var inst_23866 = (new cljs.core.PersistentVector(null,2,(5),inst_23864,inst_23865,null));
var state_23928__$1 = state_23928;
var statearr_23937_23988 = state_23928__$1;
(statearr_23937_23988[(2)] = inst_23866);

(statearr_23937_23988[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (31))){
var state_23928__$1 = state_23928;
var statearr_23938_23989 = state_23928__$1;
(statearr_23938_23989[(2)] = null);

(statearr_23938_23989[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (32))){
var state_23928__$1 = state_23928;
var statearr_23939_23990 = state_23928__$1;
(statearr_23939_23990[(2)] = null);

(statearr_23939_23990[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (33))){
var inst_23917 = (state_23928[(2)]);
var state_23928__$1 = state_23928;
var statearr_23940_23991 = state_23928__$1;
(statearr_23940_23991[(2)] = inst_23917);

(statearr_23940_23991[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (13))){
var state_23928__$1 = state_23928;
var statearr_23941_23992 = state_23928__$1;
(statearr_23941_23992[(2)] = false);

(statearr_23941_23992[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (22))){
var inst_23859 = (state_23928[(8)]);
var inst_23868 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"logout","logout",1418564329),inst_23859);
var state_23928__$1 = state_23928;
if(inst_23868){
var statearr_23942_23993 = state_23928__$1;
(statearr_23942_23993[(1)] = (24));

} else {
var statearr_23943_23994 = state_23928__$1;
(statearr_23943_23994[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (29))){
var inst_23882 = (state_23928[(2)]);
var state_23928__$1 = state_23928;
var statearr_23944_23995 = state_23928__$1;
(statearr_23944_23995[(2)] = inst_23882);

(statearr_23944_23995[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (6))){
var inst_23796 = (state_23928[(11)]);
var inst_23833 = cljs.core._EQ_.call(null,inst_23796,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
var state_23928__$1 = state_23928;
if(inst_23833){
var statearr_23945_23996 = state_23928__$1;
(statearr_23945_23996[(1)] = (9));

} else {
var statearr_23946_23997 = state_23928__$1;
(statearr_23946_23997[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (28))){
var state_23928__$1 = state_23928;
var statearr_23947_23998 = state_23928__$1;
(statearr_23947_23998[(2)] = null);

(statearr_23947_23998[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (25))){
var state_23928__$1 = state_23928;
var statearr_23948_23999 = state_23928__$1;
(statearr_23948_23999[(1)] = (27));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (34))){
var inst_23923 = (state_23928[(2)]);
var inst_23793 = inst_23923;
var state_23928__$1 = (function (){var statearr_23950 = state_23928;
(statearr_23950[(12)] = inst_23793);

return statearr_23950;
})();
var statearr_23951_24000 = state_23928__$1;
(statearr_23951_24000[(2)] = null);

(statearr_23951_24000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (17))){
var inst_23850 = (state_23928[(2)]);
var state_23928__$1 = state_23928;
var statearr_23952_24001 = state_23928__$1;
(statearr_23952_24001[(2)] = inst_23850);

(statearr_23952_24001[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (3))){
var inst_23793 = (state_23928[(12)]);
var inst_23796 = (state_23928[(11)]);
var inst_23796__$1 = cljs.core.nth.call(null,inst_23793,(0),null);
var inst_23797 = cljs.core.nth.call(null,inst_23793,(1),null);
var inst_23798 = cljs.core.nth.call(null,inst_23793,(2),null);
var inst_23799 = cljs.core._EQ_.call(null,inst_23796__$1,new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122));
var state_23928__$1 = (function (){var statearr_23953 = state_23928;
(statearr_23953[(13)] = inst_23798);

(statearr_23953[(14)] = inst_23797);

(statearr_23953[(11)] = inst_23796__$1);

return statearr_23953;
})();
if(inst_23799){
var statearr_23954_24002 = state_23928__$1;
(statearr_23954_24002[(1)] = (5));

} else {
var statearr_23955_24003 = state_23928__$1;
(statearr_23955_24003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (12))){
var inst_23797 = (state_23928[(14)]);
var inst_23843 = inst_23797.cljs$lang$protocol_mask$partition0$;
var inst_23844 = (inst_23843 & (64));
var inst_23845 = inst_23797.cljs$core$ISeq$;
var inst_23846 = (inst_23844) || (inst_23845);
var state_23928__$1 = state_23928;
if(cljs.core.truth_(inst_23846)){
var statearr_23956_24004 = state_23928__$1;
(statearr_23956_24004[(1)] = (15));

} else {
var statearr_23957_24005 = state_23928__$1;
(statearr_23957_24005[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (2))){
var inst_23789 = (state_23928[(2)]);
var inst_23790 = cljs.core.nth.call(null,inst_23789,(0),null);
var inst_23791 = cljs.core.nth.call(null,inst_23789,(1),null);
var inst_23792 = cljs.core.nth.call(null,inst_23789,(2),null);
var inst_23793 = inst_23789;
var state_23928__$1 = (function (){var statearr_23958 = state_23928;
(statearr_23958[(15)] = inst_23791);

(statearr_23958[(16)] = inst_23790);

(statearr_23958[(12)] = inst_23793);

(statearr_23958[(17)] = inst_23792);

return statearr_23958;
})();
var statearr_23959_24006 = state_23928__$1;
(statearr_23959_24006[(2)] = null);

(statearr_23959_24006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (23))){
var inst_23886 = (state_23928[(2)]);
var inst_23887 = cljs.core.nth.call(null,inst_23886,(0),null);
var inst_23888 = cljs.core.nth.call(null,inst_23886,(1),null);
var inst_23889 = cloudxmark.core.jsonp.call(null,inst_23888);
var state_23928__$1 = (function (){var statearr_23960 = state_23928;
(statearr_23960[(18)] = inst_23887);

return statearr_23960;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23928__$1,(30),inst_23889);
} else {
if((state_val_23929 === (19))){
var inst_23797 = (state_23928[(14)]);
var state_23928__$1 = state_23928;
var statearr_23961_24007 = state_23928__$1;
(statearr_23961_24007[(2)] = inst_23797);

(statearr_23961_24007[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (11))){
var inst_23919 = (state_23928[(2)]);
var state_23928__$1 = state_23928;
var statearr_23962_24008 = state_23928__$1;
(statearr_23962_24008[(2)] = inst_23919);

(statearr_23962_24008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (9))){
var inst_23797 = (state_23928[(14)]);
var inst_23837 = [cljs.core.str("lst query data:"),cljs.core.str(inst_23797)].join('');
var inst_23838 = cljs.core.println.call(null,inst_23837);
var inst_23840 = (inst_23797 == null);
var inst_23841 = cljs.core.not.call(null,inst_23840);
var state_23928__$1 = (function (){var statearr_23963 = state_23928;
(statearr_23963[(19)] = inst_23838);

return statearr_23963;
})();
if(inst_23841){
var statearr_23964_24009 = state_23928__$1;
(statearr_23964_24009[(1)] = (12));

} else {
var statearr_23965_24010 = state_23928__$1;
(statearr_23965_24010[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (5))){
var inst_23797 = (state_23928[(14)]);
var inst_23802 = [cljs.core.str(cloudxmark.core.wiki_url),cljs.core.str(inst_23797)].join('');
var inst_23803 = cloudxmark.core.jsonp.call(null,inst_23802);
var state_23928__$1 = state_23928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23928__$1,(8),inst_23803);
} else {
if((state_val_23929 === (14))){
var inst_23853 = (state_23928[(2)]);
var state_23928__$1 = state_23928;
if(cljs.core.truth_(inst_23853)){
var statearr_23966_24011 = state_23928__$1;
(statearr_23966_24011[(1)] = (18));

} else {
var statearr_23967_24012 = state_23928__$1;
(statearr_23967_24012[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (26))){
var inst_23884 = (state_23928[(2)]);
var state_23928__$1 = state_23928;
var statearr_23968_24013 = state_23928__$1;
(statearr_23968_24013[(2)] = inst_23884);

(statearr_23968_24013[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (16))){
var state_23928__$1 = state_23928;
var statearr_23969_24014 = state_23928__$1;
(statearr_23969_24014[(2)] = false);

(statearr_23969_24014[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (30))){
var inst_23887 = (state_23928[(18)]);
var inst_23861 = (state_23928[(9)]);
var inst_23891 = (state_23928[(2)]);
var inst_23892 = cljs.core.js__GT_clj.call(null,inst_23891);
var inst_23893 = cljs.core.assoc.call(null,inst_23892,"ver",inst_23861);
var inst_23894 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_23893);
var inst_23895 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_23887);
var inst_23896 = cljs.core.merge.call(null,inst_23894,inst_23895);
var inst_23897 = cljs.core.assoc.call(null,inst_23893,new cljs.core.Keyword(null,"status","status",-1997798413),inst_23896);
var inst_23898 = cljs.core.List.EMPTY;
var inst_23899 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_23900 = cljs.core._conj.call(null,inst_23898,inst_23899);
var inst_23901 = cljs.core.List.EMPTY;
var inst_23902 = cljs.core._conj.call(null,inst_23901,inst_23897);
var inst_23903 = cljs.core.concat.call(null,inst_23900,inst_23902);
var inst_23904 = cljs.core.seq.call(null,inst_23903);
var inst_23905 = cljs.core.sequence.call(null,inst_23904);
var inst_23906 = cljs.core.List.EMPTY;
var inst_23907 = cljs.core._conj.call(null,inst_23906,inst_23905);
var inst_23908 = cljs.core.concat.call(null,inst_23907);
var inst_23909 = cljs.core.seq.call(null,inst_23908);
var inst_23910 = cljs.core.sequence.call(null,inst_23909);
var inst_23911 = cljs.core.vec.call(null,inst_23910);
var inst_23912 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_23911);
var state_23928__$1 = state_23928;
var statearr_23970_24015 = state_23928__$1;
(statearr_23970_24015[(2)] = inst_23912);

(statearr_23970_24015[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (10))){
var state_23928__$1 = state_23928;
var statearr_23971_24016 = state_23928__$1;
(statearr_23971_24016[(1)] = (31));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (18))){
var inst_23797 = (state_23928[(14)]);
var inst_23855 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23797);
var state_23928__$1 = state_23928;
var statearr_23973_24017 = state_23928__$1;
(statearr_23973_24017[(2)] = inst_23855);

(statearr_23973_24017[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (8))){
var inst_23805 = (state_23928[(2)]);
var inst_23806 = cljs.core.nth.call(null,inst_23805,(0),null);
var inst_23807 = cljs.core.nth.call(null,inst_23805,(1),null);
var inst_23808 = cljs.core.js__GT_clj.call(null,inst_23807);
var inst_23809 = cljs.core.List.EMPTY;
var inst_23810 = new cljs.core.Symbol("wiki","set-lst","wiki/set-lst",-1532354153,null);
var inst_23811 = cljs.core._conj.call(null,inst_23809,inst_23810);
var inst_23812 = cljs.core.List.EMPTY;
var inst_23813 = cljs.core._conj.call(null,inst_23812,new cljs.core.Keyword(null,"lst","lst",269745987));
var inst_23814 = cljs.core.List.EMPTY;
var inst_23815 = cljs.core._conj.call(null,inst_23814,inst_23808);
var inst_23816 = cljs.core.concat.call(null,inst_23813,inst_23815);
var inst_23817 = cljs.core.seq.call(null,inst_23816);
var inst_23818 = cljs.core.sequence.call(null,inst_23817);
var inst_23819 = cljs.core.apply.call(null,cljs.core.array_map,inst_23818);
var inst_23820 = cljs.core.List.EMPTY;
var inst_23821 = cljs.core._conj.call(null,inst_23820,inst_23819);
var inst_23822 = cljs.core.concat.call(null,inst_23811,inst_23821);
var inst_23823 = cljs.core.seq.call(null,inst_23822);
var inst_23824 = cljs.core.sequence.call(null,inst_23823);
var inst_23825 = cljs.core.List.EMPTY;
var inst_23826 = cljs.core._conj.call(null,inst_23825,inst_23824);
var inst_23827 = cljs.core.concat.call(null,inst_23826);
var inst_23828 = cljs.core.seq.call(null,inst_23827);
var inst_23829 = cljs.core.sequence.call(null,inst_23828);
var inst_23830 = cljs.core.vec.call(null,inst_23829);
var inst_23831 = om.next.transact_BANG_.call(null,cloudxmark.core.wiki_reconciler,inst_23830);
var state_23928__$1 = (function (){var statearr_23974 = state_23928;
(statearr_23974[(20)] = inst_23806);

return statearr_23974;
})();
var statearr_23975_24018 = state_23928__$1;
(statearr_23975_24018[(2)] = inst_23831);

(statearr_23975_24018[(1)] = (7));


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
});})(c__21409__auto__))
;
return ((function (switch__21388__auto__,c__21409__auto__){
return (function() {
var cloudxmark$core$search_loop_$_state_machine__21389__auto__ = null;
var cloudxmark$core$search_loop_$_state_machine__21389__auto____0 = (function (){
var statearr_23979 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23979[(0)] = cloudxmark$core$search_loop_$_state_machine__21389__auto__);

(statearr_23979[(1)] = (1));

return statearr_23979;
});
var cloudxmark$core$search_loop_$_state_machine__21389__auto____1 = (function (state_23928){
while(true){
var ret_value__21390__auto__ = (function (){try{while(true){
var result__21391__auto__ = switch__21388__auto__.call(null,state_23928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21391__auto__;
}
break;
}
}catch (e23980){if((e23980 instanceof Object)){
var ex__21392__auto__ = e23980;
var statearr_23981_24019 = state_23928;
(statearr_23981_24019[(5)] = ex__21392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24020 = state_23928;
state_23928 = G__24020;
continue;
} else {
return ret_value__21390__auto__;
}
break;
}
});
cloudxmark$core$search_loop_$_state_machine__21389__auto__ = function(state_23928){
switch(arguments.length){
case 0:
return cloudxmark$core$search_loop_$_state_machine__21389__auto____0.call(this);
case 1:
return cloudxmark$core$search_loop_$_state_machine__21389__auto____1.call(this,state_23928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cloudxmark$core$search_loop_$_state_machine__21389__auto__.cljs$core$IFn$_invoke$arity$0 = cloudxmark$core$search_loop_$_state_machine__21389__auto____0;
cloudxmark$core$search_loop_$_state_machine__21389__auto__.cljs$core$IFn$_invoke$arity$1 = cloudxmark$core$search_loop_$_state_machine__21389__auto____1;
return cloudxmark$core$search_loop_$_state_machine__21389__auto__;
})()
;})(switch__21388__auto__,c__21409__auto__))
})();
var state__21411__auto__ = (function (){var statearr_23982 = f__21410__auto__.call(null);
(statearr_23982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21409__auto__);

return statearr_23982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21411__auto__);
});})(c__21409__auto__))
);

return c__21409__auto__;
});
cloudxmark.core.search_loop.call(null,cloudxmark.core.event_chan);
om.next.add_root_BANG_.call(null,cloudxmark.core.wiki_reconciler,cloudxmark.core.AutoCompleter,goog.dom.getElement("wiki"));
om.next.add_root_BANG_.call(null,cloudxmark.core.lst_reconciler,cloudxmark.core.Lsts,goog.dom.getElement("lsts"));

//# sourceMappingURL=core.js.map