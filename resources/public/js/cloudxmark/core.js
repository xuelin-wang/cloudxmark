// Compiled by ClojureScript 1.9.89 {}
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
var args30958 = [];
var len__22617__auto___30961 = arguments.length;
var i__22618__auto___30962 = (0);
while(true){
if((i__22618__auto___30962 < len__22617__auto___30961)){
args30958.push((arguments[i__22618__auto___30962]));

var G__30963 = (i__22618__auto___30962 + (1));
i__22618__auto___30962 = G__30963;
continue;
} else {
}
break;
}

var G__30960 = args30958.length;
switch (G__30960) {
case 1:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30958.length)].join('')));

}
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return cloudxmark.core.jsonp.call(null,cljs.core.async.chan.call(null),uri);
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2 = (function (c,uri){
var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));
cljs.core.println.call(null,[cljs.core.str("before send "),cljs.core.str(uri)].join(''));

gjsonp.send(null,((function (gjsonp){
return (function (p1__30956_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__30956_SHARP_);
});})(gjsonp))
,((function (gjsonp){
return (function (p1__30957_SHARP_){
return cljs.core.println.call(null,[cljs.core.str("error!"),cljs.core.str(p1__30957_SHARP_)].join(''));
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
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),(function (p__30965,_,p__30966){
var map__30967 = p__30965;
var map__30967__$1 = ((((!((map__30967 == null)))?((((map__30967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30967):map__30967);
var env = map__30967__$1;
var state = cljs.core.get.call(null,map__30967__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__30967__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__30968 = p__30966;
var map__30968__$1 = ((((!((map__30968 == null)))?((((map__30968.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30968.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30968):map__30968);
var query = cljs.core.get.call(null,map__30968__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wiki","wiki",1946329928),new cljs.core.Keyword(null,"lst","lst",269745987)], null),cljs.core.PersistentVector.EMPTY)], null),(((clojure.string.blank_QMARK_.call(null,query)) || ((cljs.core.count.call(null,query) < (3))))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122),ast], null)));
}));
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword(null,"lst","lst",269745987),(function (p__30971,_,p__30972){
var map__30973 = p__30971;
var map__30973__$1 = ((((!((map__30973 == null)))?((((map__30973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30973):map__30973);
var env = map__30973__$1;
var state = cljs.core.get.call(null,map__30973__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__30973__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__30974 = p__30972;
var map__30974__$1 = ((((!((map__30974 == null)))?((((map__30974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30974):map__30974);
var query_ver = cljs.core.get.call(null,map__30974__$1,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var query_user = cljs.core.get.call(null,map__30974__$1,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var query_password = cljs.core.get.call(null,map__30974__$1,new cljs.core.Keyword(null,"query-password","query-password",-2133925446));
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var map__30977 = lst;
var map__30977__$1 = ((((!((map__30977 == null)))?((((map__30977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30977):map__30977);
var lsts = cljs.core.get.call(null,map__30977__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr = cljs.core.get.call(null,map__30977__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var ver = cljs.core.get.call(null,map__30977__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__30977__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var status = cljs.core.get.call(null,map__30977__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
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
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null),(function (p__30979,_,p__30980){
var map__30981 = p__30979;
var map__30981__$1 = ((((!((map__30981 == null)))?((((map__30981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30981):map__30981);
var env = map__30981__$1;
var state = cljs.core.get.call(null,map__30981__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__30982 = p__30980;
var map__30982__$1 = ((((!((map__30982 == null)))?((((map__30982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30982):map__30982);
var field_id = cljs.core.get.call(null,map__30982__$1,new cljs.core.Keyword(null,"field-id","field-id",-353751335));
var value = cljs.core.get.call(null,map__30982__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__30981,map__30981__$1,env,state,map__30982,map__30982__$1,field_id,value){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before setfield: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),field_id], null),value);

return cljs.core.println.call(null,[cljs.core.str("state after setfield: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});})(map__30981,map__30981__$1,env,state,map__30982,map__30982__$1,field_id,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","login","lst/login",1697497083,null),(function (p__30985,_,p__30986){
var map__30987 = p__30985;
var map__30987__$1 = ((((!((map__30987 == null)))?((((map__30987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30987):map__30987);
var env = map__30987__$1;
var state = cljs.core.get.call(null,map__30987__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__30988 = p__30986;
var map__30988__$1 = ((((!((map__30988 == null)))?((((map__30988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30988):map__30988);
var user_id = cljs.core.get.call(null,map__30988__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__30988__$1,new cljs.core.Keyword(null,"password","password",417022471));
var ver = cljs.core.get.call(null,map__30988__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__30987,map__30987__$1,env,state,map__30988,map__30988__$1,user_id,password,ver){
return (function (){
return cljs.core.println.call(null,[cljs.core.str("state in login: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});})(map__30987,map__30987__$1,env,state,map__30988,map__30988__$1,user_id,password,ver))
,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst-search","lst-search",371565861),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),user_id,new cljs.core.Keyword(null,"query-password","query-password",-2133925446),password,new cljs.core.Keyword(null,"ver","ver",1683769565),ver], null)], null)], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null),(function (p__30991,_,p__30992){
var map__30993 = p__30991;
var map__30993__$1 = ((((!((map__30993 == null)))?((((map__30993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30993):map__30993);
var env = map__30993__$1;
var state = cljs.core.get.call(null,map__30993__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__30994 = p__30992;
var map__30994__$1 = ((((!((map__30994 == null)))?((((map__30994.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30994.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30994):map__30994);
var field_id = cljs.core.get.call(null,map__30994__$1,new cljs.core.Keyword(null,"field-id","field-id",-353751335));
var status = cljs.core.get.call(null,map__30994__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__30993,map__30993__$1,env,state,map__30994,map__30994__$1,field_id,status){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before setfield: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),field_id], null),status);

return cljs.core.println.call(null,[cljs.core.str("state after setfield: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});})(map__30993,map__30993__$1,env,state,map__30994,map__30994__$1,field_id,status))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-curr","lst/set-curr",1109194929,null),(function (p__30997,_,p__30998){
var map__30999 = p__30997;
var map__30999__$1 = ((((!((map__30999 == null)))?((((map__30999.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30999.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30999):map__30999);
var env = map__30999__$1;
var state = cljs.core.get.call(null,map__30999__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__31000 = p__30998;
var map__31000__$1 = ((((!((map__31000 == null)))?((((map__31000.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31000.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31000):map__31000);
var curr = cljs.core.get.call(null,map__31000__$1,new cljs.core.Keyword("lst","curr","lst/curr",-1092232479));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__30999,map__30999__$1,env,state,map__31000,map__31000__$1,curr){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lst","curr","lst/curr",-1092232479)], null),cljs.core.constantly.call(null,curr));

return cljs.core.println.call(null,[cljs.core.str("set to "),cljs.core.str(curr)].join(''));
});})(map__30999,map__30999__$1,env,state,map__31000,map__31000__$1,curr))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null),(function (p__31003,_,data_map){
var map__31004 = p__31003;
var map__31004__$1 = ((((!((map__31004 == null)))?((((map__31004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31004):map__31004);
var env = map__31004__$1;
var state = cljs.core.get.call(null,map__31004__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__31004,map__31004__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("data-map:"),cljs.core.str(data_map)].join(''));

var map__31006_31008 = data_map;
var map__31006_31009__$1 = ((((!((map__31006_31008 == null)))?((((map__31006_31008.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31006_31008.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31006_31008):map__31006_31008);
var status_31010 = cljs.core.get.call(null,map__31006_31009__$1,"status");
var lsts_31011 = cljs.core.get.call(null,map__31006_31009__$1,"lsts");
var user_id_31012 = cljs.core.get.call(null,map__31006_31009__$1,"user_id");
var status_id_31013 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(status_31010);
var status1_31014 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),status_31010.call(null,"info"),new cljs.core.Keyword(null,"warn","warn",-436710552),status_31010.call(null,"warn"),new cljs.core.Keyword(null,"error","error",-978969032),status_31010.call(null,"error")], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(status1_31014))){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413),status_id_31013], null),status1_31014);
} else {
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),cljs.core.merge.call(null,new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),data_map.call(null,"lsts"),new cljs.core.Keyword(null,"ver","ver",1683769565),data_map.call(null,"ver"),new cljs.core.Keyword(null,"user-id","user-id",-206822291),data_map.call(null,"user_id"),new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.merge.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),cljs.core.PersistentArrayMap.fromArray([status_id_31013,status1_31014], true, false))], null)));
}

return cljs.core.println.call(null,[cljs.core.str("state after setlist:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});})(map__31004,map__31004__$1,env,state))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("wiki","set-lst","wiki/set-lst",-1532354153,null),(function (p__31015,_,lst){
var map__31016 = p__31015;
var map__31016__$1 = ((((!((map__31016 == null)))?((((map__31016.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31016.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31016):map__31016);
var env = map__31016__$1;
var state = cljs.core.get.call(null,map__31016__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__31016,map__31016__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("before wiki update list:"),cljs.core.str(lst)].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wiki","wiki",1946329928),new cljs.core.Keyword(null,"lst","lst",269745987)], null),new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(lst));

return cljs.core.println.call(null,[cljs.core.str("state after wiki update:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});})(map__31016,map__31016__$1,env,state))
], null);
}));
cloudxmark.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wiki","wiki",1946329928),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst","lst",269745987),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0),new cljs.core.Keyword(null,"curr","curr",-1092372808),(0),new cljs.core.Keyword(null,"user-id","user-id",-206822291),null], null)], null));
cloudxmark.core.result_list = (function cloudxmark$core$result_list(results){
return React.DOM.ul({"key": "result-list"},om.util.force_children.call(null,cljs.core.map_indexed.call(null,(function (idx,itm){
return React.DOM.li({"key": idx},om.util.force_children.call(null,itm));
}),results)));
});
cloudxmark.core.status_line = (function cloudxmark$core$status_line(p__31018){
var map__31024 = p__31018;
var map__31024__$1 = ((((!((map__31024 == null)))?((((map__31024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31024):map__31024);
var info = cljs.core.get.call(null,map__31024__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var warn = cljs.core.get.call(null,map__31024__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var error = cljs.core.get.call(null,map__31024__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.println.call(null,[cljs.core.str("info:"),cljs.core.str(info),cljs.core.str(",warn:"),cljs.core.str(warn),cljs.core.str(",error:"),cljs.core.str(error)].join(''));

var vec__31026 = (cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",error], null):(cljs.core.truth_(warn)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange",warn], null):(cljs.core.truth_(info)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black",info], null):null)));
var color = cljs.core.nth.call(null,vec__31026,(0),null);
var msg = cljs.core.nth.call(null,vec__31026,(1),null);
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
var vec__31033 = (function (){var G__31036 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31036) {
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
var elem_key = cljs.core.nth.call(null,vec__31033,(0),null);
var query_key = cljs.core.nth.call(null,vec__31033,(1),null);
return om.dom.input.call(null,{"key": elem_key, "value": query, "onChange": ((function (vec__31033,elem_key,query_key){
return (function (e){
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.fromArray([query_key,e.target.value], true, false)], null));
});})(vec__31033,elem_key,query_key))
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
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ver","ver",1683769565)),(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())))));
} else {
om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"field-id","field-id",-353751335)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"login","login",55217519)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"status","status",-1997798413)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),(function (){var x__22360__auto__ = error;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})()))));
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
var this__29912__auto__ = this;
React.Component.apply(this__29912__auto__,arguments);

if(!((this__29912__auto__.initLocalState == null))){
this__29912__auto__.state = this__29912__auto__.initLocalState();
} else {
this__29912__auto__.state = {};
}

return this__29912__auto__;
});

cloudxmark.core.Lsts.prototype = goog.object.clone(React.Component.prototype);

var x31042_31054 = cloudxmark.core.Lsts.prototype;
x31042_31054.componentWillUpdate = ((function (x31042_31054){
return (function (next_props__29814__auto__,next_state__29815__auto__){
var this__29813__auto__ = this;
if(((!((this__29813__auto__ == null)))?(((false) || (this__29813__auto__.om$next$Ident$))?true:false):false)){
var ident__29817__auto___31055 = om.next.ident.call(null,this__29813__auto__,om.next.props.call(null,this__29813__auto__));
var next_ident__29818__auto___31056 = om.next.ident.call(null,this__29813__auto__,om.next._next_props.call(null,next_props__29814__auto__,this__29813__auto__));
if(cljs.core.not_EQ_.call(null,ident__29817__auto___31055,next_ident__29818__auto___31056)){
var idxr__29819__auto___31057 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29813__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29819__auto___31057 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29819__auto___31057),((function (idxr__29819__auto___31057,ident__29817__auto___31055,next_ident__29818__auto___31056,this__29813__auto__,x31042_31054){
return (function (indexes__29820__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29820__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29817__auto___31055], null),cljs.core.disj,this__29813__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29818__auto___31056], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29813__auto__);
});})(idxr__29819__auto___31057,ident__29817__auto___31055,next_ident__29818__auto___31056,this__29813__auto__,x31042_31054))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29813__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29813__auto__);
});})(x31042_31054))
;

x31042_31054.shouldComponentUpdate = ((function (x31042_31054){
return (function (next_props__29814__auto__,next_state__29815__auto__){
var this__29813__auto__ = this;
var next_children__29816__auto__ = next_props__29814__auto__.children;
var next_props__29814__auto____$1 = goog.object.get(next_props__29814__auto__,"omcljs$value");
var next_props__29814__auto____$2 = (function (){var G__31044 = next_props__29814__auto____$1;
if((next_props__29814__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__31044);
} else {
return G__31044;
}
})();
var or__21434__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__29813__auto__),next_props__29814__auto____$2);
if(or__21434__auto__){
return or__21434__auto__;
} else {
var or__21434__auto____$1 = (function (){var and__21422__auto__ = this__29813__auto__.state;
if(cljs.core.truth_(and__21422__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__29813__auto__.state,"omcljs$state"),goog.object.get(next_state__29815__auto__,"omcljs$state"));
} else {
return and__21422__auto__;
}
})();
if(cljs.core.truth_(or__21434__auto____$1)){
return or__21434__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__29813__auto__.props.children,next_children__29816__auto__);
}
}
});})(x31042_31054))
;

x31042_31054.componentWillUnmount = ((function (x31042_31054){
return (function (){
var this__29813__auto__ = this;
var r__29824__auto__ = om.next.get_reconciler.call(null,this__29813__auto__);
var cfg__29825__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__29824__auto__);
var st__29826__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__29825__auto__);
var indexer__29823__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__29825__auto__);
if(cljs.core.truth_((function (){var and__21422__auto__ = !((st__29826__auto__ == null));
if(and__21422__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__29826__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__29813__auto__], null));
} else {
return and__21422__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__29826__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__29813__auto__);
} else {
}

if((indexer__29823__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__29823__auto__,this__29813__auto__);
}
});})(x31042_31054))
;

x31042_31054.componentDidUpdate = ((function (x31042_31054){
return (function (prev_props__29821__auto__,prev_state__29822__auto__){
var this__29813__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__29813__auto__);
});})(x31042_31054))
;

x31042_31054.isMounted = ((function (x31042_31054){
return (function (){
var this__29813__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29813__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x31042_31054))
;

x31042_31054.componentWillMount = ((function (x31042_31054){
return (function (){
var this__29813__auto__ = this;
var indexer__29823__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29813__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29823__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29823__auto__,this__29813__auto__);
}
});})(x31042_31054))
;

x31042_31054.render = ((function (x31042_31054){
return (function (){
var this__29812__auto__ = this;
var this$ = this__29812__auto__;
var _STAR_reconciler_STAR_31045 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_31046 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_31047 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_31048 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_31049 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__29812__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__29812__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__29812__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__29812__auto__);

om.next._STAR_parent_STAR_ = this__29812__auto__;

try{var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__31050 = lst;
var map__31050__$1 = ((((!((map__31050 == null)))?((((map__31050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31050):map__31050);
var lsts = cljs.core.get.call(null,map__31050__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr = cljs.core.get.call(null,map__31050__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var ver = cljs.core.get.call(null,map__31050__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__31050__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var status = cljs.core.get.call(null,map__31050__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if((user_id == null)){
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Please login"))),om.util.force_children.call(null,"User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"user-id-field","user-id-field",2116160486))),om.util.force_children.call(null,"Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"password-field","password-field",-1811673649))),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.login_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(status))));
} else {
return React.DOM.div(null,om.util.force_children.call(null,cloudxmark.core.logout_button.call(null,this$)),om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Lists"))),om.util.force_children.call(null,cloudxmark.core.refresh_lists_button.call(null,this$,user_id,ver)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"refresh_lists","refresh_lists",1467404952).cljs$core$IFn$_invoke$arity$1(status))),om.util.force_children.call(null,((!(cljs.core.empty_QMARK_.call(null,lsts)))?cloudxmark.core.lst_list.call(null,this$,lsts,(((curr == null))?(0):curr)):null)));
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_31049;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_31048;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_31047;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_31046;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_31045;
}});})(x31042_31054))
;


cloudxmark.core.Lsts.prototype.constructor = cloudxmark.core.Lsts;

cloudxmark.core.Lsts.prototype.constructor.displayName = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.prototype.om$isComponent = true;

var x31052_31058 = cloudxmark.core.Lsts;
x31052_31058.om$next$IQueryParams$ = true;

x31052_31058.om$next$IQueryParams$params$arity$1 = ((function (x31052_31058){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-password","query-password",-2133925446),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0)], null);
});})(x31052_31058))
;

x31052_31058.om$next$IQuery$ = true;

x31052_31058.om$next$IQuery$query$arity$1 = ((function (x31052_31058){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-password","query-password",-2133925446),new cljs.core.Symbol(null,"?query-password","?query-password",1376893065,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null)], null))], null);
});})(x31052_31058))
;


var x31053_31059 = cloudxmark.core.Lsts.prototype;
x31053_31059.om$next$IQueryParams$ = true;

x31053_31059.om$next$IQueryParams$params$arity$1 = ((function (x31053_31059){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-password","query-password",-2133925446),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0)], null);
});})(x31053_31059))
;

x31053_31059.om$next$IQuery$ = true;

x31053_31059.om$next$IQuery$query$arity$1 = ((function (x31053_31059){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-password","query-password",-2133925446),new cljs.core.Symbol(null,"?query-password","?query-password",1376893065,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null)], null))], null);
});})(x31053_31059))
;


cloudxmark.core.Lsts.cljs$lang$type = true;

cloudxmark.core.Lsts.cljs$lang$ctorStr = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.cljs$lang$ctorPrWriter = (function (this__29914__auto__,writer__29915__auto__,opt__29916__auto__){
return cljs.core._write.call(null,writer__29915__auto__,"cloudxmark.core/Lsts");
});
/**
 * @constructor
 */
cloudxmark.core.AutoCompleter = (function cloudxmark$core$AutoCompleter(){
var this__29912__auto__ = this;
React.Component.apply(this__29912__auto__,arguments);

if(!((this__29912__auto__.initLocalState == null))){
this__29912__auto__.state = this__29912__auto__.initLocalState();
} else {
this__29912__auto__.state = {};
}

return this__29912__auto__;
});

cloudxmark.core.AutoCompleter.prototype = goog.object.clone(React.Component.prototype);

var x31064_31077 = cloudxmark.core.AutoCompleter.prototype;
x31064_31077.componentWillUpdate = ((function (x31064_31077){
return (function (next_props__29814__auto__,next_state__29815__auto__){
var this__29813__auto__ = this;
if(((!((this__29813__auto__ == null)))?(((false) || (this__29813__auto__.om$next$Ident$))?true:false):false)){
var ident__29817__auto___31078 = om.next.ident.call(null,this__29813__auto__,om.next.props.call(null,this__29813__auto__));
var next_ident__29818__auto___31079 = om.next.ident.call(null,this__29813__auto__,om.next._next_props.call(null,next_props__29814__auto__,this__29813__auto__));
if(cljs.core.not_EQ_.call(null,ident__29817__auto___31078,next_ident__29818__auto___31079)){
var idxr__29819__auto___31080 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29813__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29819__auto___31080 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29819__auto___31080),((function (idxr__29819__auto___31080,ident__29817__auto___31078,next_ident__29818__auto___31079,this__29813__auto__,x31064_31077){
return (function (indexes__29820__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29820__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29817__auto___31078], null),cljs.core.disj,this__29813__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29818__auto___31079], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29813__auto__);
});})(idxr__29819__auto___31080,ident__29817__auto___31078,next_ident__29818__auto___31079,this__29813__auto__,x31064_31077))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29813__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29813__auto__);
});})(x31064_31077))
;

x31064_31077.shouldComponentUpdate = ((function (x31064_31077){
return (function (next_props__29814__auto__,next_state__29815__auto__){
var this__29813__auto__ = this;
var next_children__29816__auto__ = next_props__29814__auto__.children;
var next_props__29814__auto____$1 = goog.object.get(next_props__29814__auto__,"omcljs$value");
var next_props__29814__auto____$2 = (function (){var G__31066 = next_props__29814__auto____$1;
if((next_props__29814__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__31066);
} else {
return G__31066;
}
})();
var or__21434__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__29813__auto__),next_props__29814__auto____$2);
if(or__21434__auto__){
return or__21434__auto__;
} else {
var or__21434__auto____$1 = (function (){var and__21422__auto__ = this__29813__auto__.state;
if(cljs.core.truth_(and__21422__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__29813__auto__.state,"omcljs$state"),goog.object.get(next_state__29815__auto__,"omcljs$state"));
} else {
return and__21422__auto__;
}
})();
if(cljs.core.truth_(or__21434__auto____$1)){
return or__21434__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__29813__auto__.props.children,next_children__29816__auto__);
}
}
});})(x31064_31077))
;

x31064_31077.componentWillUnmount = ((function (x31064_31077){
return (function (){
var this__29813__auto__ = this;
var r__29824__auto__ = om.next.get_reconciler.call(null,this__29813__auto__);
var cfg__29825__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__29824__auto__);
var st__29826__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__29825__auto__);
var indexer__29823__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__29825__auto__);
if(cljs.core.truth_((function (){var and__21422__auto__ = !((st__29826__auto__ == null));
if(and__21422__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__29826__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__29813__auto__], null));
} else {
return and__21422__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__29826__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__29813__auto__);
} else {
}

if((indexer__29823__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__29823__auto__,this__29813__auto__);
}
});})(x31064_31077))
;

x31064_31077.componentDidUpdate = ((function (x31064_31077){
return (function (prev_props__29821__auto__,prev_state__29822__auto__){
var this__29813__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__29813__auto__);
});})(x31064_31077))
;

x31064_31077.isMounted = ((function (x31064_31077){
return (function (){
var this__29813__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29813__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x31064_31077))
;

x31064_31077.componentWillMount = ((function (x31064_31077){
return (function (){
var this__29813__auto__ = this;
var indexer__29823__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29813__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29823__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29823__auto__,this__29813__auto__);
}
});})(x31064_31077))
;

x31064_31077.render = ((function (x31064_31077){
return (function (){
var this__29812__auto__ = this;
var this$ = this__29812__auto__;
var _STAR_reconciler_STAR_31067 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_31068 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_31069 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_31070 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_31071 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__29812__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__29812__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__29812__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__29812__auto__);

om.next._STAR_parent_STAR_ = this__29812__auto__;

try{var map__31072 = om.next.props.call(null,this$);
var map__31072__$1 = ((((!((map__31072 == null)))?((((map__31072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31072):map__31072);
var lst = cljs.core.get.call(null,map__31072__$1,new cljs.core.Keyword("wiki","lst","wiki/lst",270705683));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"AutoCompleter"))),om.util.force_children.call(null,(function (){var G__31074 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloudxmark.core.search_field.call(null,this$,new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648).cljs$core$IFn$_invoke$arity$1(om.next.get_params.call(null,this$)),new cljs.core.Keyword(null,"wiki","wiki",1946329928))], null);
if(!(cljs.core.empty_QMARK_.call(null,lst))){
return cljs.core.conj.call(null,G__31074,cloudxmark.core.result_list.call(null,lst));
} else {
return G__31074;
}
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_31071;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_31070;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_31069;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_31068;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_31067;
}});})(x31064_31077))
;


cloudxmark.core.AutoCompleter.prototype.constructor = cloudxmark.core.AutoCompleter;

cloudxmark.core.AutoCompleter.prototype.constructor.displayName = "cloudxmark.core/AutoCompleter";

cloudxmark.core.AutoCompleter.prototype.om$isComponent = true;

var x31075_31081 = cloudxmark.core.AutoCompleter;
x31075_31081.om$next$IQueryParams$ = true;

x31075_31081.om$next$IQueryParams$params$arity$1 = ((function (x31075_31081){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648),""], null);
});})(x31075_31081))
;

x31075_31081.om$next$IQuery$ = true;

x31075_31081.om$next$IQuery$query$arity$1 = ((function (x31075_31081){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?wiki-query","?wiki-query",-1723016161,null)], null))], null);
});})(x31075_31081))
;


var x31076_31082 = cloudxmark.core.AutoCompleter.prototype;
x31076_31082.om$next$IQueryParams$ = true;

x31076_31082.om$next$IQueryParams$params$arity$1 = ((function (x31076_31082){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648),""], null);
});})(x31076_31082))
;

x31076_31082.om$next$IQuery$ = true;

x31076_31082.om$next$IQuery$query$arity$1 = ((function (x31076_31082){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?wiki-query","?wiki-query",-1723016161,null)], null))], null);
});})(x31076_31082))
;


cloudxmark.core.AutoCompleter.cljs$lang$type = true;

cloudxmark.core.AutoCompleter.cljs$lang$ctorStr = "cloudxmark.core/AutoCompleter";

cloudxmark.core.AutoCompleter.cljs$lang$ctorPrWriter = (function (this__29914__auto__,writer__29915__auto__,opt__29916__auto__){
return cljs.core._write.call(null,writer__29915__auto__,"cloudxmark.core/AutoCompleter");
});
cloudxmark.core.send_to_chan = (function cloudxmark$core$send_to_chan(c){
return (function (p__31096,cb){
var map__31097 = p__31096;
var map__31097__$1 = ((((!((map__31097 == null)))?((((map__31097.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31097.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31097):map__31097);
var wiki_search = cljs.core.get.call(null,map__31097__$1,new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122));
var lst_search = cljs.core.get.call(null,map__31097__$1,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
if(cljs.core.truth_(wiki_search)){
var map__31099 = om.next.query__GT_ast.call(null,wiki_search);
var map__31099__$1 = ((((!((map__31099 == null)))?((((map__31099.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31099.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31099):map__31099);
var vec__31100 = cljs.core.get.call(null,map__31099__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var wiki_search__$1 = cljs.core.nth.call(null,vec__31100,(0),null);
var dontcare = cljs.core.println.call(null,[cljs.core.str(wiki_search__$1)].join(''));
var query_params = cljs.core.get_in.call(null,wiki_search__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"query","query",-1288509510)], null));
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122),query_params,cb], null));
} else {
if(cljs.core.truth_(lst_search)){
var map__31104 = om.next.query__GT_ast.call(null,lst_search);
var map__31104__$1 = ((((!((map__31104 == null)))?((((map__31104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31104):map__31104);
var vec__31105 = cljs.core.get.call(null,map__31104__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var lst_search__$1 = cljs.core.nth.call(null,vec__31105,(0),null);
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
var c__25730__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25730__auto__){
return (function (){
var f__25731__auto__ = (function (){var switch__25616__auto__ = ((function (c__25730__auto__){
return (function (state_31470){
var state_val_31471 = (state_31470[(1)]);
if((state_val_31471 === (7))){
var inst_31463 = (state_31470[(2)]);
var state_31470__$1 = (function (){var statearr_31472 = state_31470;
(statearr_31472[(7)] = inst_31463);

return statearr_31472;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31470__$1,(34),c);
} else {
if((state_val_31471 === (20))){
var inst_31401 = (state_31470[(8)]);
var inst_31400 = (state_31470[(2)]);
var inst_31401__$1 = cljs.core.get.call(null,inst_31400,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var inst_31402 = cljs.core.get.call(null,inst_31400,new cljs.core.Keyword(null,"query-password","query-password",-2133925446));
var inst_31403 = cljs.core.get.call(null,inst_31400,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var inst_31404 = (inst_31401__$1 == null);
var state_31470__$1 = (function (){var statearr_31473 = state_31470;
(statearr_31473[(9)] = inst_31402);

(statearr_31473[(10)] = inst_31403);

(statearr_31473[(8)] = inst_31401__$1);

return statearr_31473;
})();
if(cljs.core.truth_(inst_31404)){
var statearr_31474_31525 = state_31470__$1;
(statearr_31474_31525[(1)] = (21));

} else {
var statearr_31475_31526 = state_31470__$1;
(statearr_31475_31526[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (27))){
var inst_31402 = (state_31470[(9)]);
var inst_31401 = (state_31470[(8)]);
var inst_31418 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31419 = [cljs.core.str("/loginGetItems/"),cljs.core.str(inst_31401),cljs.core.str("/"),cljs.core.str(inst_31402)].join('');
var inst_31420 = [new cljs.core.Keyword(null,"login","login",55217519),inst_31419];
var inst_31421 = (new cljs.core.PersistentVector(null,2,(5),inst_31418,inst_31420,null));
var state_31470__$1 = state_31470;
var statearr_31476_31527 = state_31470__$1;
(statearr_31476_31527[(2)] = inst_31421);

(statearr_31476_31527[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (1))){
var state_31470__$1 = state_31470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31470__$1,(2),c);
} else {
if((state_val_31471 === (24))){
var inst_31412 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31413 = [cljs.core.str("/logout")].join('');
var inst_31414 = [new cljs.core.Keyword(null,"logout","logout",1418564329),inst_31413];
var inst_31415 = (new cljs.core.PersistentVector(null,2,(5),inst_31412,inst_31414,null));
var state_31470__$1 = state_31470;
var statearr_31477_31528 = state_31470__$1;
(statearr_31477_31528[(2)] = inst_31415);

(statearr_31477_31528[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (4))){
var inst_31468 = (state_31470[(2)]);
var state_31470__$1 = state_31470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31470__$1,inst_31468);
} else {
if((state_val_31471 === (15))){
var state_31470__$1 = state_31470;
var statearr_31478_31529 = state_31470__$1;
(statearr_31478_31529[(2)] = true);

(statearr_31478_31529[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (21))){
var inst_31406 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31407 = [new cljs.core.Keyword(null,"refresh-lists","refresh-lists",27332375),"/getItems"];
var inst_31408 = (new cljs.core.PersistentVector(null,2,(5),inst_31406,inst_31407,null));
var state_31470__$1 = state_31470;
var statearr_31479_31530 = state_31470__$1;
(statearr_31479_31530[(2)] = inst_31408);

(statearr_31479_31530[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (31))){
var state_31470__$1 = state_31470;
var statearr_31480_31531 = state_31470__$1;
(statearr_31480_31531[(2)] = null);

(statearr_31480_31531[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (32))){
var state_31470__$1 = state_31470;
var statearr_31481_31532 = state_31470__$1;
(statearr_31481_31532[(2)] = null);

(statearr_31481_31532[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (33))){
var inst_31459 = (state_31470[(2)]);
var state_31470__$1 = state_31470;
var statearr_31482_31533 = state_31470__$1;
(statearr_31482_31533[(2)] = inst_31459);

(statearr_31482_31533[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (13))){
var state_31470__$1 = state_31470;
var statearr_31483_31534 = state_31470__$1;
(statearr_31483_31534[(2)] = false);

(statearr_31483_31534[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (22))){
var inst_31401 = (state_31470[(8)]);
var inst_31410 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"logout","logout",1418564329),inst_31401);
var state_31470__$1 = state_31470;
if(inst_31410){
var statearr_31484_31535 = state_31470__$1;
(statearr_31484_31535[(1)] = (24));

} else {
var statearr_31485_31536 = state_31470__$1;
(statearr_31485_31536[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (29))){
var inst_31424 = (state_31470[(2)]);
var state_31470__$1 = state_31470;
var statearr_31486_31537 = state_31470__$1;
(statearr_31486_31537[(2)] = inst_31424);

(statearr_31486_31537[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (6))){
var inst_31334 = (state_31470[(11)]);
var inst_31373 = cljs.core._EQ_.call(null,inst_31334,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
var state_31470__$1 = state_31470;
if(inst_31373){
var statearr_31487_31538 = state_31470__$1;
(statearr_31487_31538[(1)] = (9));

} else {
var statearr_31488_31539 = state_31470__$1;
(statearr_31488_31539[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (28))){
var state_31470__$1 = state_31470;
var statearr_31489_31540 = state_31470__$1;
(statearr_31489_31540[(2)] = null);

(statearr_31489_31540[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (25))){
var state_31470__$1 = state_31470;
var statearr_31490_31541 = state_31470__$1;
(statearr_31490_31541[(1)] = (27));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (34))){
var inst_31465 = (state_31470[(2)]);
var inst_31329 = inst_31465;
var state_31470__$1 = (function (){var statearr_31492 = state_31470;
(statearr_31492[(12)] = inst_31329);

return statearr_31492;
})();
var statearr_31493_31542 = state_31470__$1;
(statearr_31493_31542[(2)] = null);

(statearr_31493_31542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (17))){
var inst_31392 = (state_31470[(2)]);
var state_31470__$1 = state_31470;
var statearr_31494_31543 = state_31470__$1;
(statearr_31494_31543[(2)] = inst_31392);

(statearr_31494_31543[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (3))){
var inst_31334 = (state_31470[(11)]);
var inst_31329 = (state_31470[(12)]);
var inst_31334__$1 = cljs.core.nth.call(null,inst_31329,(0),null);
var inst_31335 = cljs.core.nth.call(null,inst_31329,(1),null);
var inst_31336 = cljs.core.nth.call(null,inst_31329,(2),null);
var inst_31337 = cljs.core._EQ_.call(null,inst_31334__$1,new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122));
var state_31470__$1 = (function (){var statearr_31495 = state_31470;
(statearr_31495[(11)] = inst_31334__$1);

(statearr_31495[(13)] = inst_31335);

(statearr_31495[(14)] = inst_31336);

return statearr_31495;
})();
if(inst_31337){
var statearr_31496_31544 = state_31470__$1;
(statearr_31496_31544[(1)] = (5));

} else {
var statearr_31497_31545 = state_31470__$1;
(statearr_31497_31545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (12))){
var inst_31335 = (state_31470[(13)]);
var inst_31385 = inst_31335.cljs$lang$protocol_mask$partition0$;
var inst_31386 = (inst_31385 & (64));
var inst_31387 = inst_31335.cljs$core$ISeq$;
var inst_31388 = (inst_31386) || (inst_31387);
var state_31470__$1 = state_31470;
if(cljs.core.truth_(inst_31388)){
var statearr_31498_31546 = state_31470__$1;
(statearr_31498_31546[(1)] = (15));

} else {
var statearr_31499_31547 = state_31470__$1;
(statearr_31499_31547[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (2))){
var inst_31325 = (state_31470[(2)]);
var inst_31326 = cljs.core.nth.call(null,inst_31325,(0),null);
var inst_31327 = cljs.core.nth.call(null,inst_31325,(1),null);
var inst_31328 = cljs.core.nth.call(null,inst_31325,(2),null);
var inst_31329 = inst_31325;
var state_31470__$1 = (function (){var statearr_31500 = state_31470;
(statearr_31500[(15)] = inst_31328);

(statearr_31500[(16)] = inst_31326);

(statearr_31500[(17)] = inst_31327);

(statearr_31500[(12)] = inst_31329);

return statearr_31500;
})();
var statearr_31501_31548 = state_31470__$1;
(statearr_31501_31548[(2)] = null);

(statearr_31501_31548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (23))){
var inst_31428 = (state_31470[(2)]);
var inst_31429 = cljs.core.nth.call(null,inst_31428,(0),null);
var inst_31430 = cljs.core.nth.call(null,inst_31428,(1),null);
var inst_31431 = cloudxmark.core.jsonp.call(null,inst_31430);
var state_31470__$1 = (function (){var statearr_31502 = state_31470;
(statearr_31502[(18)] = inst_31429);

return statearr_31502;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31470__$1,(30),inst_31431);
} else {
if((state_val_31471 === (19))){
var inst_31335 = (state_31470[(13)]);
var state_31470__$1 = state_31470;
var statearr_31503_31549 = state_31470__$1;
(statearr_31503_31549[(2)] = inst_31335);

(statearr_31503_31549[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (11))){
var inst_31461 = (state_31470[(2)]);
var state_31470__$1 = state_31470;
var statearr_31504_31550 = state_31470__$1;
(statearr_31504_31550[(2)] = inst_31461);

(statearr_31504_31550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (9))){
var inst_31335 = (state_31470[(13)]);
var inst_31379 = [cljs.core.str("lst query data:"),cljs.core.str(inst_31335)].join('');
var inst_31380 = cljs.core.println.call(null,inst_31379);
var inst_31382 = (inst_31335 == null);
var inst_31383 = cljs.core.not.call(null,inst_31382);
var state_31470__$1 = (function (){var statearr_31505 = state_31470;
(statearr_31505[(19)] = inst_31380);

return statearr_31505;
})();
if(inst_31383){
var statearr_31506_31551 = state_31470__$1;
(statearr_31506_31551[(1)] = (12));

} else {
var statearr_31507_31552 = state_31470__$1;
(statearr_31507_31552[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (5))){
var inst_31335 = (state_31470[(13)]);
var inst_31342 = [cljs.core.str(cloudxmark.core.wiki_url),cljs.core.str(inst_31335)].join('');
var inst_31343 = cloudxmark.core.jsonp.call(null,inst_31342);
var state_31470__$1 = state_31470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31470__$1,(8),inst_31343);
} else {
if((state_val_31471 === (14))){
var inst_31395 = (state_31470[(2)]);
var state_31470__$1 = state_31470;
if(cljs.core.truth_(inst_31395)){
var statearr_31508_31553 = state_31470__$1;
(statearr_31508_31553[(1)] = (18));

} else {
var statearr_31509_31554 = state_31470__$1;
(statearr_31509_31554[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (26))){
var inst_31426 = (state_31470[(2)]);
var state_31470__$1 = state_31470;
var statearr_31510_31555 = state_31470__$1;
(statearr_31510_31555[(2)] = inst_31426);

(statearr_31510_31555[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (16))){
var state_31470__$1 = state_31470;
var statearr_31511_31556 = state_31470__$1;
(statearr_31511_31556[(2)] = false);

(statearr_31511_31556[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (30))){
var inst_31429 = (state_31470[(18)]);
var inst_31403 = (state_31470[(10)]);
var inst_31433 = (state_31470[(2)]);
var inst_31434 = cljs.core.js__GT_clj.call(null,inst_31433);
var inst_31435 = cljs.core.assoc.call(null,inst_31434,"ver",inst_31403);
var inst_31436 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_31435);
var inst_31437 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_31429);
var inst_31438 = cljs.core.merge.call(null,inst_31436,inst_31437);
var inst_31439 = cljs.core.assoc.call(null,inst_31435,new cljs.core.Keyword(null,"status","status",-1997798413),inst_31438);
var inst_31440 = cljs.core.List.EMPTY;
var inst_31441 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_31442 = cljs.core._conj.call(null,inst_31440,inst_31441);
var inst_31443 = cljs.core.List.EMPTY;
var inst_31444 = cljs.core._conj.call(null,inst_31443,inst_31439);
var inst_31445 = cljs.core.concat.call(null,inst_31442,inst_31444);
var inst_31446 = cljs.core.seq.call(null,inst_31445);
var inst_31447 = cljs.core.sequence.call(null,inst_31446);
var inst_31448 = cljs.core.List.EMPTY;
var inst_31449 = cljs.core._conj.call(null,inst_31448,inst_31447);
var inst_31450 = cljs.core.concat.call(null,inst_31449);
var inst_31451 = cljs.core.seq.call(null,inst_31450);
var inst_31452 = cljs.core.sequence.call(null,inst_31451);
var inst_31453 = cljs.core.vec.call(null,inst_31452);
var inst_31454 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_31453);
var state_31470__$1 = state_31470;
var statearr_31512_31557 = state_31470__$1;
(statearr_31512_31557[(2)] = inst_31454);

(statearr_31512_31557[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (10))){
var state_31470__$1 = state_31470;
var statearr_31513_31558 = state_31470__$1;
(statearr_31513_31558[(1)] = (31));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (18))){
var inst_31335 = (state_31470[(13)]);
var inst_31397 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31335);
var state_31470__$1 = state_31470;
var statearr_31515_31559 = state_31470__$1;
(statearr_31515_31559[(2)] = inst_31397);

(statearr_31515_31559[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (8))){
var inst_31345 = (state_31470[(2)]);
var inst_31346 = cljs.core.nth.call(null,inst_31345,(0),null);
var inst_31347 = cljs.core.nth.call(null,inst_31345,(1),null);
var inst_31348 = cljs.core.js__GT_clj.call(null,inst_31347);
var inst_31349 = cljs.core.List.EMPTY;
var inst_31350 = new cljs.core.Symbol("wiki","set-lst","wiki/set-lst",-1532354153,null);
var inst_31351 = cljs.core._conj.call(null,inst_31349,inst_31350);
var inst_31352 = cljs.core.List.EMPTY;
var inst_31353 = cljs.core._conj.call(null,inst_31352,new cljs.core.Keyword(null,"lst","lst",269745987));
var inst_31354 = cljs.core.List.EMPTY;
var inst_31355 = cljs.core._conj.call(null,inst_31354,inst_31348);
var inst_31356 = cljs.core.concat.call(null,inst_31353,inst_31355);
var inst_31357 = cljs.core.seq.call(null,inst_31356);
var inst_31358 = cljs.core.sequence.call(null,inst_31357);
var inst_31359 = cljs.core.apply.call(null,cljs.core.array_map,inst_31358);
var inst_31360 = cljs.core.List.EMPTY;
var inst_31361 = cljs.core._conj.call(null,inst_31360,inst_31359);
var inst_31362 = cljs.core.concat.call(null,inst_31351,inst_31361);
var inst_31363 = cljs.core.seq.call(null,inst_31362);
var inst_31364 = cljs.core.sequence.call(null,inst_31363);
var inst_31365 = cljs.core.List.EMPTY;
var inst_31366 = cljs.core._conj.call(null,inst_31365,inst_31364);
var inst_31367 = cljs.core.concat.call(null,inst_31366);
var inst_31368 = cljs.core.seq.call(null,inst_31367);
var inst_31369 = cljs.core.sequence.call(null,inst_31368);
var inst_31370 = cljs.core.vec.call(null,inst_31369);
var inst_31371 = om.next.transact_BANG_.call(null,cloudxmark.core.wiki_reconciler,inst_31370);
var state_31470__$1 = (function (){var statearr_31516 = state_31470;
(statearr_31516[(20)] = inst_31346);

return statearr_31516;
})();
var statearr_31517_31560 = state_31470__$1;
(statearr_31517_31560[(2)] = inst_31371);

(statearr_31517_31560[(1)] = (7));


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
});})(c__25730__auto__))
;
return ((function (switch__25616__auto__,c__25730__auto__){
return (function() {
var cloudxmark$core$search_loop_$_state_machine__25617__auto__ = null;
var cloudxmark$core$search_loop_$_state_machine__25617__auto____0 = (function (){
var statearr_31521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31521[(0)] = cloudxmark$core$search_loop_$_state_machine__25617__auto__);

(statearr_31521[(1)] = (1));

return statearr_31521;
});
var cloudxmark$core$search_loop_$_state_machine__25617__auto____1 = (function (state_31470){
while(true){
var ret_value__25618__auto__ = (function (){try{while(true){
var result__25619__auto__ = switch__25616__auto__.call(null,state_31470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25619__auto__;
}
break;
}
}catch (e31522){if((e31522 instanceof Object)){
var ex__25620__auto__ = e31522;
var statearr_31523_31561 = state_31470;
(statearr_31523_31561[(5)] = ex__25620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31562 = state_31470;
state_31470 = G__31562;
continue;
} else {
return ret_value__25618__auto__;
}
break;
}
});
cloudxmark$core$search_loop_$_state_machine__25617__auto__ = function(state_31470){
switch(arguments.length){
case 0:
return cloudxmark$core$search_loop_$_state_machine__25617__auto____0.call(this);
case 1:
return cloudxmark$core$search_loop_$_state_machine__25617__auto____1.call(this,state_31470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cloudxmark$core$search_loop_$_state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$0 = cloudxmark$core$search_loop_$_state_machine__25617__auto____0;
cloudxmark$core$search_loop_$_state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$1 = cloudxmark$core$search_loop_$_state_machine__25617__auto____1;
return cloudxmark$core$search_loop_$_state_machine__25617__auto__;
})()
;})(switch__25616__auto__,c__25730__auto__))
})();
var state__25732__auto__ = (function (){var statearr_31524 = f__25731__auto__.call(null);
(statearr_31524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25730__auto__);

return statearr_31524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25732__auto__);
});})(c__25730__auto__))
);

return c__25730__auto__;
});
cloudxmark.core.search_loop.call(null,cloudxmark.core.event_chan);
om.next.add_root_BANG_.call(null,cloudxmark.core.wiki_reconciler,cloudxmark.core.AutoCompleter,goog.dom.getElement("wiki"));
om.next.add_root_BANG_.call(null,cloudxmark.core.lst_reconciler,cloudxmark.core.Lsts,goog.dom.getElement("lsts"));

//# sourceMappingURL=core.js.map?rel=1467159063769