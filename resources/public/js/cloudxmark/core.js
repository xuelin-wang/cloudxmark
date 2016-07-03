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
var args59949 = [];
var len__22617__auto___59952 = arguments.length;
var i__22618__auto___59953 = (0);
while(true){
if((i__22618__auto___59953 < len__22617__auto___59952)){
args59949.push((arguments[i__22618__auto___59953]));

var G__59954 = (i__22618__auto___59953 + (1));
i__22618__auto___59953 = G__59954;
continue;
} else {
}
break;
}

var G__59951 = args59949.length;
switch (G__59951) {
case 1:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59949.length)].join('')));

}
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return cloudxmark.core.jsonp.call(null,cljs.core.async.chan.call(null),uri);
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2 = (function (c,uri){
var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));
cljs.core.println.call(null,[cljs.core.str("before send "),cljs.core.str(uri)].join(''));

gjsonp.send(null,((function (gjsonp){
return (function (p1__59947_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__59947_SHARP_);
});})(gjsonp))
,((function (gjsonp){
return (function (p1__59948_SHARP_){
return cljs.core.println.call(null,[cljs.core.str("error!"),cljs.core.str(p1__59948_SHARP_)].join(''));
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
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),(function (p__59956,_,p__59957){
var map__59958 = p__59956;
var map__59958__$1 = ((((!((map__59958 == null)))?((((map__59958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59958):map__59958);
var env = map__59958__$1;
var state = cljs.core.get.call(null,map__59958__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__59958__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__59959 = p__59957;
var map__59959__$1 = ((((!((map__59959 == null)))?((((map__59959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59959):map__59959);
var query = cljs.core.get.call(null,map__59959__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wiki","wiki",1946329928),new cljs.core.Keyword(null,"lst","lst",269745987)], null),cljs.core.PersistentVector.EMPTY)], null),(((clojure.string.blank_QMARK_.call(null,query)) || ((cljs.core.count.call(null,query) < (3))))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122),ast], null)));
}));
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword(null,"lst","lst",269745987),(function (p__59962,_,p__59963){
var map__59964 = p__59962;
var map__59964__$1 = ((((!((map__59964 == null)))?((((map__59964.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59964.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59964):map__59964);
var env = map__59964__$1;
var state = cljs.core.get.call(null,map__59964__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__59964__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__59965 = p__59963;
var map__59965__$1 = ((((!((map__59965 == null)))?((((map__59965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59965):map__59965);
var query_ver = cljs.core.get.call(null,map__59965__$1,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var query_user = cljs.core.get.call(null,map__59965__$1,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var map__59968 = lst;
var map__59968__$1 = ((((!((map__59968 == null)))?((((map__59968.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59968.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59968):map__59968);
var lsts = cljs.core.get.call(null,map__59968__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr = cljs.core.get.call(null,map__59968__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var ver = cljs.core.get.call(null,map__59968__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__59968__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var status = cljs.core.get.call(null,map__59968__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
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
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null),(function (p__59970,_,p__59971){
var map__59972 = p__59970;
var map__59972__$1 = ((((!((map__59972 == null)))?((((map__59972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59972):map__59972);
var env = map__59972__$1;
var state = cljs.core.get.call(null,map__59972__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__59973 = p__59971;
var map__59973__$1 = ((((!((map__59973 == null)))?((((map__59973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59973):map__59973);
var status = map__59973__$1;
var id = cljs.core.get.call(null,map__59973__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__59972,map__59972__$1,env,state,map__59973,map__59973__$1,status,id){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before setfield: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),id], null),status);

return cljs.core.println.call(null,[cljs.core.str("state after setfield: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});})(map__59972,map__59972__$1,env,state,map__59973,map__59973__$1,status,id))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-curr","lst/set-curr",1109194929,null),(function (p__59976,_,p__59977){
var map__59978 = p__59976;
var map__59978__$1 = ((((!((map__59978 == null)))?((((map__59978.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59978.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59978):map__59978);
var env = map__59978__$1;
var state = cljs.core.get.call(null,map__59978__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__59979 = p__59977;
var map__59979__$1 = ((((!((map__59979 == null)))?((((map__59979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59979):map__59979);
var curr = cljs.core.get.call(null,map__59979__$1,new cljs.core.Keyword("lst","curr","lst/curr",-1092232479));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__59978,map__59978__$1,env,state,map__59979,map__59979__$1,curr){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lst","curr","lst/curr",-1092232479)], null),cljs.core.constantly.call(null,curr));

return cljs.core.println.call(null,[cljs.core.str("set to "),cljs.core.str(curr)].join(''));
});})(map__59978,map__59978__$1,env,state,map__59979,map__59979__$1,curr))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null),(function (p__59982,_,data_map){
var map__59983 = p__59982;
var map__59983__$1 = ((((!((map__59983 == null)))?((((map__59983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59983):map__59983);
var env = map__59983__$1;
var state = cljs.core.get.call(null,map__59983__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__59983,map__59983__$1,env,state){
return (function (){
var map__59985 = data_map;
var map__59985__$1 = ((((!((map__59985 == null)))?((((map__59985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59985):map__59985);
var field_id = cljs.core.get.call(null,map__59985__$1,new cljs.core.Keyword(null,"field-id","field-id",-353751335));
var value = cljs.core.get.call(null,map__59985__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),field_id], null),value);
});})(map__59983,map__59983__$1,env,state))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","login","lst/login",1697497083,null),(function (p__59987,_,data_map){
var map__59988 = p__59987;
var map__59988__$1 = ((((!((map__59988 == null)))?((((map__59988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59988):map__59988);
var env = map__59988__$1;
var state = cljs.core.get.call(null,map__59988__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__59988,map__59988__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("data-map:"),cljs.core.str(data_map)].join(''));

var map__59990 = data_map;
var map__59990__$1 = ((((!((map__59990 == null)))?((((map__59990.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59990.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59990):map__59990);
var user_id = cljs.core.get.call(null,map__59990__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__59990__$1,new cljs.core.Keyword(null,"password","password",417022471));
var ver = cljs.core.get.call(null,map__59990__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
cljs.core.println.call(null,[cljs.core.str("state in login:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-login","lst-login",246498853),data_map,null], null));
});})(map__59988,map__59988__$1,env,state))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-lst","lst/add-lst",-756724467,null),(function (p__59992,_,data_map){
var map__59993 = p__59992;
var map__59993__$1 = ((((!((map__59993 == null)))?((((map__59993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59993):map__59993);
var env = map__59993__$1;
var state = cljs.core.get.call(null,map__59993__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__59993,map__59993__$1,env,state){
return (function (){
var map__59995 = data_map;
var map__59995__$1 = ((((!((map__59995 == null)))?((((map__59995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59995):map__59995);
var name = cljs.core.get.call(null,map__59995__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__59995__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
cljs.core.println.call(null,[cljs.core.str("data-map:"),cljs.core.str(data_map)].join(''));

cljs.core.println.call(null,[cljs.core.str("state in add-lst:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"description","description",-1428560544)], null),null], null));
});})(map__59993,map__59993__$1,env,state))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","logout","lst/logout",-1235763963,null),(function (p__59997,_,___$1){
var map__59998 = p__59997;
var map__59998__$1 = ((((!((map__59998 == null)))?((((map__59998.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59998.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59998):map__59998);
var env = map__59998__$1;
var state = cljs.core.get.call(null,map__59998__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__59998,map__59998__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state in logout:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),null,new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0)], null));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521),cljs.core.PersistentArrayMap.EMPTY,null], null));
});})(map__59998,map__59998__$1,env,state))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null),(function (p__60000,_,data_map){
var map__60001 = p__60000;
var map__60001__$1 = ((((!((map__60001 == null)))?((((map__60001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60001):map__60001);
var env = map__60001__$1;
var state = cljs.core.get.call(null,map__60001__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__60001,map__60001__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("data-map in set-lst:"),cljs.core.str(data_map)].join(''));

var map__60003 = data_map;
var map__60003__$1 = ((((!((map__60003 == null)))?((((map__60003.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60003.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60003):map__60003);
var status = cljs.core.get.call(null,map__60003__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var lsts = cljs.core.get.call(null,map__60003__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var user_id = cljs.core.get.call(null,map__60003__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var ver = cljs.core.get.call(null,map__60003__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
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
});})(map__60001,map__60001__$1,env,state))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("wiki","set-lst","wiki/set-lst",-1532354153,null),(function (p__60005,_,lst){
var map__60006 = p__60005;
var map__60006__$1 = ((((!((map__60006 == null)))?((((map__60006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60006):map__60006);
var env = map__60006__$1;
var state = cljs.core.get.call(null,map__60006__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__60006,map__60006__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("before wiki update list:"),cljs.core.str(lst)].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wiki","wiki",1946329928),new cljs.core.Keyword(null,"lst","lst",269745987)], null),new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(lst));

return cljs.core.println.call(null,[cljs.core.str("state after wiki update:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});})(map__60006,map__60006__$1,env,state))
], null);
}));
cloudxmark.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wiki","wiki",1946329928),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst","lst",269745987),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0),new cljs.core.Keyword(null,"curr","curr",-1092372808),(0),new cljs.core.Keyword(null,"user-id","user-id",-206822291),null], null)], null));
cloudxmark.core.lst_field = (function cloudxmark$core$lst_field(var_args){
var args60008 = [];
var len__22617__auto___60011 = arguments.length;
var i__22618__auto___60012 = (0);
while(true){
if((i__22618__auto___60012 < len__22617__auto___60011)){
args60008.push((arguments[i__22618__auto___60012]));

var G__60013 = (i__22618__auto___60012 + (1));
i__22618__auto___60012 = G__60013;
continue;
} else {
}
break;
}

var G__60010 = args60008.length;
switch (G__60010) {
case 2:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args60008.length)].join('')));

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
cloudxmark.core.status_line = (function cloudxmark$core$status_line(p__60015){
var map__60021 = p__60015;
var map__60021__$1 = ((((!((map__60021 == null)))?((((map__60021.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60021.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60021):map__60021);
var info = cljs.core.get.call(null,map__60021__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var warn = cljs.core.get.call(null,map__60021__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var error = cljs.core.get.call(null,map__60021__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.println.call(null,[cljs.core.str("info:"),cljs.core.str(info),cljs.core.str(",warn:"),cljs.core.str(warn),cljs.core.str(",error:"),cljs.core.str(error)].join(''));

var vec__60023 = (cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",error], null):(cljs.core.truth_(warn)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange",warn], null):(cljs.core.truth_(info)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black",info], null):null)));
var color = cljs.core.nth.call(null,vec__60023,(0),null);
var msg = cljs.core.nth.call(null,vec__60023,(1),null);
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
cloudxmark.core.add_lst_button = (function cloudxmark$core$add_lst_button(comp){
return React.DOM.button({"type": "button", "key": "addListButton", "onClick": (function (e){
var lst_map = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var new_lst_name = new cljs.core.Keyword(null,"new-lst-name-field","new-lst-name-field",1430372825).cljs$core$IFn$_invoke$arity$1(lst_map);
var new_lst_description = new cljs.core.Keyword(null,"new-lst-description-field","new-lst-description-field",584843127).cljs$core$IFn$_invoke$arity$1(lst_map);
var error = ((clojure.string.blank_QMARK_.call(null,new_lst_name))?"New List Name Required":((clojure.string.blank_QMARK_.call(null,new_lst_description))?"New List Description Required":null
));
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
cloudxmark.core.list_select_field = (function cloudxmark$core$list_select_field(comp,idx,curr_idx){
return om.dom.input.call(null,{"key": [cljs.core.str("lst-lst-check-"),cljs.core.str(idx)].join(''), "type": "radio", "checked": cljs.core._EQ_.call(null,idx,curr_idx), "onChange": (function (e){
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
cloudxmark.core.lst_add_area = (function cloudxmark$core$lst_add_area(comp){
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__60028 = lst;
var map__60028__$1 = ((((!((map__60028 == null)))?((((map__60028.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60028.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60028):map__60028);
var status = cljs.core.get.call(null,map__60028__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return React.DOM.div({"key": [cljs.core.str("list-edit-area-"),cljs.core.str((-1))].join('')},om.util.force_children.call(null,"New List: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-lst-name-field","new-lst-name-field",1430372825))),om.util.force_children.call(null,"Description: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-lst-description-field","new-lst-description-field",584843127))),om.util.force_children.call(null,cloudxmark.core.add_lst_button.call(null,comp)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483).cljs$core$IFn$_invoke$arity$1(status))));
});
cloudxmark.core.lst_lst = (function cloudxmark$core$lst_lst(comp,lsts,curr_idx){
return React.DOM.div({"key": "lst-lst"},om.util.force_children.call(null,((cljs.core.seq.call(null,lsts))?cljs.core.map_indexed.call(null,(function (idx,itm){
return React.DOM.div({"key": [cljs.core.str(cloudxmark$core$lst_lst),cljs.core.str(idx)].join('')},om.util.force_children.call(null,cloudxmark.core.list_select_field.call(null,comp,idx,curr_idx)),om.util.force_children.call(null,React.DOM.span({"key": [cljs.core.str(cloudxmark$core$lst_lst),cljs.core.str(idx),cljs.core.str("span")].join('')},om.util.force_children.call(null,itm.call(null,"name","?")))),om.util.force_children.call(null,((cljs.core._EQ_.call(null,idx,curr_idx))?cloudxmark.core.list_edit_area.call(null,comp,idx,curr_idx,lsts):null)));
}),lsts):null)),om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Add new list:"))),om.util.force_children.call(null,cloudxmark.core.lst_add_area.call(null,comp)));
});
cloudxmark.core.search_field = (function cloudxmark$core$search_field(comp,query,type){
var vec__60034 = (function (){var G__60037 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__60037) {
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
var elem_key = cljs.core.nth.call(null,vec__60034,(0),null);
var query_key = cljs.core.nth.call(null,vec__60034,(1),null);
return om.dom.input.call(null,{"key": elem_key, "value": query, "onChange": ((function (vec__60034,elem_key,query_key){
return (function (e){
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.fromArray([query_key,e.target.value], true, false)], null));
});})(vec__60034,elem_key,query_key))
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

var x60043_60055 = cloudxmark.core.Lsts.prototype;
x60043_60055.componentWillUpdate = ((function (x60043_60055){
return (function (next_props__26858__auto__,next_state__26859__auto__){
var this__26857__auto__ = this;
if(((!((this__26857__auto__ == null)))?(((false) || (this__26857__auto__.om$next$Ident$))?true:false):false)){
var ident__26861__auto___60056 = om.next.ident.call(null,this__26857__auto__,om.next.props.call(null,this__26857__auto__));
var next_ident__26862__auto___60057 = om.next.ident.call(null,this__26857__auto__,om.next._next_props.call(null,next_props__26858__auto__,this__26857__auto__));
if(cljs.core.not_EQ_.call(null,ident__26861__auto___60056,next_ident__26862__auto___60057)){
var idxr__26863__auto___60058 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__26857__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__26863__auto___60058 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__26863__auto___60058),((function (idxr__26863__auto___60058,ident__26861__auto___60056,next_ident__26862__auto___60057,this__26857__auto__,x60043_60055){
return (function (indexes__26864__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__26864__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__26861__auto___60056], null),cljs.core.disj,this__26857__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__26862__auto___60057], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__26857__auto__);
});})(idxr__26863__auto___60058,ident__26861__auto___60056,next_ident__26862__auto___60057,this__26857__auto__,x60043_60055))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__26857__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__26857__auto__);
});})(x60043_60055))
;

x60043_60055.shouldComponentUpdate = ((function (x60043_60055){
return (function (next_props__26858__auto__,next_state__26859__auto__){
var this__26857__auto__ = this;
var next_children__26860__auto__ = next_props__26858__auto__.children;
var next_props__26858__auto____$1 = goog.object.get(next_props__26858__auto__,"omcljs$value");
var next_props__26858__auto____$2 = (function (){var G__60045 = next_props__26858__auto____$1;
if((next_props__26858__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__60045);
} else {
return G__60045;
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
});})(x60043_60055))
;

x60043_60055.componentWillUnmount = ((function (x60043_60055){
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
});})(x60043_60055))
;

x60043_60055.componentDidUpdate = ((function (x60043_60055){
return (function (prev_props__26865__auto__,prev_state__26866__auto__){
var this__26857__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__26857__auto__);
});})(x60043_60055))
;

x60043_60055.isMounted = ((function (x60043_60055){
return (function (){
var this__26857__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__26857__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x60043_60055))
;

x60043_60055.componentWillMount = ((function (x60043_60055){
return (function (){
var this__26857__auto__ = this;
var indexer__26867__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__26857__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__26867__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__26867__auto__,this__26857__auto__);
}
});})(x60043_60055))
;

x60043_60055.render = ((function (x60043_60055){
return (function (){
var this__26856__auto__ = this;
var this$ = this__26856__auto__;
var _STAR_reconciler_STAR_60046 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_60047 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_60048 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_60049 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_60050 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__26856__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__26856__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__26856__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__26856__auto__);

om.next._STAR_parent_STAR_ = this__26856__auto__;

try{cljs.core.println.call(null,[cljs.core.str("om/props in render:"),cljs.core.str(om.next.props.call(null,this$))].join(''));

var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__60051 = lst;
var map__60051__$1 = ((((!((map__60051 == null)))?((((map__60051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60051):map__60051);
var lsts = cljs.core.get.call(null,map__60051__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr = cljs.core.get.call(null,map__60051__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var ver = cljs.core.get.call(null,map__60051__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__60051__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var status = cljs.core.get.call(null,map__60051__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if((user_id == null)){
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Please login"))),om.util.force_children.call(null,"User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"user-id-field","user-id-field",2116160486))),om.util.force_children.call(null,"Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"password-field","password-field",-1811673649),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.login_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(status))));
} else {
return React.DOM.div(null,om.util.force_children.call(null,cloudxmark.core.logout_button.call(null,this$)),om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Lists"))),om.util.force_children.call(null,cloudxmark.core.refresh_lists_button.call(null,this$,user_id,ver)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"refresh_lists","refresh_lists",1467404952).cljs$core$IFn$_invoke$arity$1(status))),om.util.force_children.call(null,cloudxmark.core.lst_lst.call(null,this$,lsts,(((curr == null))?(0):curr))));
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_60050;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_60049;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_60048;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_60047;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_60046;
}});})(x60043_60055))
;


cloudxmark.core.Lsts.prototype.constructor = cloudxmark.core.Lsts;

cloudxmark.core.Lsts.prototype.constructor.displayName = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.prototype.om$isComponent = true;

var x60053_60059 = cloudxmark.core.Lsts;
x60053_60059.om$next$IQueryParams$ = true;

x60053_60059.om$next$IQueryParams$params$arity$1 = ((function (x60053_60059){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0)], null);
});})(x60053_60059))
;

x60053_60059.om$next$IQuery$ = true;

x60053_60059.om$next$IQuery$query$arity$1 = ((function (x60053_60059){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null)], null))], null);
});})(x60053_60059))
;


var x60054_60060 = cloudxmark.core.Lsts.prototype;
x60054_60060.om$next$IQueryParams$ = true;

x60054_60060.om$next$IQueryParams$params$arity$1 = ((function (x60054_60060){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0)], null);
});})(x60054_60060))
;

x60054_60060.om$next$IQuery$ = true;

x60054_60060.om$next$IQuery$query$arity$1 = ((function (x60054_60060){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null)], null))], null);
});})(x60054_60060))
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

var x60065_60078 = cloudxmark.core.AutoCompleter.prototype;
x60065_60078.componentWillUpdate = ((function (x60065_60078){
return (function (next_props__26858__auto__,next_state__26859__auto__){
var this__26857__auto__ = this;
if(((!((this__26857__auto__ == null)))?(((false) || (this__26857__auto__.om$next$Ident$))?true:false):false)){
var ident__26861__auto___60079 = om.next.ident.call(null,this__26857__auto__,om.next.props.call(null,this__26857__auto__));
var next_ident__26862__auto___60080 = om.next.ident.call(null,this__26857__auto__,om.next._next_props.call(null,next_props__26858__auto__,this__26857__auto__));
if(cljs.core.not_EQ_.call(null,ident__26861__auto___60079,next_ident__26862__auto___60080)){
var idxr__26863__auto___60081 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__26857__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__26863__auto___60081 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__26863__auto___60081),((function (idxr__26863__auto___60081,ident__26861__auto___60079,next_ident__26862__auto___60080,this__26857__auto__,x60065_60078){
return (function (indexes__26864__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__26864__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__26861__auto___60079], null),cljs.core.disj,this__26857__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__26862__auto___60080], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__26857__auto__);
});})(idxr__26863__auto___60081,ident__26861__auto___60079,next_ident__26862__auto___60080,this__26857__auto__,x60065_60078))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__26857__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__26857__auto__);
});})(x60065_60078))
;

x60065_60078.shouldComponentUpdate = ((function (x60065_60078){
return (function (next_props__26858__auto__,next_state__26859__auto__){
var this__26857__auto__ = this;
var next_children__26860__auto__ = next_props__26858__auto__.children;
var next_props__26858__auto____$1 = goog.object.get(next_props__26858__auto__,"omcljs$value");
var next_props__26858__auto____$2 = (function (){var G__60067 = next_props__26858__auto____$1;
if((next_props__26858__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__60067);
} else {
return G__60067;
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
});})(x60065_60078))
;

x60065_60078.componentWillUnmount = ((function (x60065_60078){
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
});})(x60065_60078))
;

x60065_60078.componentDidUpdate = ((function (x60065_60078){
return (function (prev_props__26865__auto__,prev_state__26866__auto__){
var this__26857__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__26857__auto__);
});})(x60065_60078))
;

x60065_60078.isMounted = ((function (x60065_60078){
return (function (){
var this__26857__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__26857__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x60065_60078))
;

x60065_60078.componentWillMount = ((function (x60065_60078){
return (function (){
var this__26857__auto__ = this;
var indexer__26867__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__26857__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__26867__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__26867__auto__,this__26857__auto__);
}
});})(x60065_60078))
;

x60065_60078.render = ((function (x60065_60078){
return (function (){
var this__26856__auto__ = this;
var this$ = this__26856__auto__;
var _STAR_reconciler_STAR_60068 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_60069 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_60070 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_60071 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_60072 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__26856__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__26856__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__26856__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__26856__auto__);

om.next._STAR_parent_STAR_ = this__26856__auto__;

try{var map__60073 = om.next.props.call(null,this$);
var map__60073__$1 = ((((!((map__60073 == null)))?((((map__60073.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60073.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60073):map__60073);
var lst = cljs.core.get.call(null,map__60073__$1,new cljs.core.Keyword("wiki","lst","wiki/lst",270705683));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"AutoCompleter"))),om.util.force_children.call(null,(function (){var G__60075 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloudxmark.core.search_field.call(null,this$,new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648).cljs$core$IFn$_invoke$arity$1(om.next.get_params.call(null,this$)),new cljs.core.Keyword(null,"wiki","wiki",1946329928))], null);
if(!(cljs.core.empty_QMARK_.call(null,lst))){
return cljs.core.conj.call(null,G__60075,cloudxmark.core.result_list.call(null,lst));
} else {
return G__60075;
}
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_60072;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_60071;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_60070;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_60069;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_60068;
}});})(x60065_60078))
;


cloudxmark.core.AutoCompleter.prototype.constructor = cloudxmark.core.AutoCompleter;

cloudxmark.core.AutoCompleter.prototype.constructor.displayName = "cloudxmark.core/AutoCompleter";

cloudxmark.core.AutoCompleter.prototype.om$isComponent = true;

var x60076_60082 = cloudxmark.core.AutoCompleter;
x60076_60082.om$next$IQueryParams$ = true;

x60076_60082.om$next$IQueryParams$params$arity$1 = ((function (x60076_60082){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648),""], null);
});})(x60076_60082))
;

x60076_60082.om$next$IQuery$ = true;

x60076_60082.om$next$IQuery$query$arity$1 = ((function (x60076_60082){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?wiki-query","?wiki-query",-1723016161,null)], null))], null);
});})(x60076_60082))
;


var x60077_60083 = cloudxmark.core.AutoCompleter.prototype;
x60077_60083.om$next$IQueryParams$ = true;

x60077_60083.om$next$IQueryParams$params$arity$1 = ((function (x60077_60083){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648),""], null);
});})(x60077_60083))
;

x60077_60083.om$next$IQuery$ = true;

x60077_60083.om$next$IQuery$query$arity$1 = ((function (x60077_60083){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?wiki-query","?wiki-query",-1723016161,null)], null))], null);
});})(x60077_60083))
;


cloudxmark.core.AutoCompleter.cljs$lang$type = true;

cloudxmark.core.AutoCompleter.cljs$lang$ctorStr = "cloudxmark.core/AutoCompleter";

cloudxmark.core.AutoCompleter.cljs$lang$ctorPrWriter = (function (this__26958__auto__,writer__26959__auto__,opt__26960__auto__){
return cljs.core._write.call(null,writer__26959__auto__,"cloudxmark.core/AutoCompleter");
});
cloudxmark.core.send_to_chan = (function cloudxmark$core$send_to_chan(c){
return (function (p__60097,cb){
var map__60098 = p__60097;
var map__60098__$1 = ((((!((map__60098 == null)))?((((map__60098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60098):map__60098);
var wiki_search = cljs.core.get.call(null,map__60098__$1,new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122));
var lst_search = cljs.core.get.call(null,map__60098__$1,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
if(cljs.core.truth_(wiki_search)){
var map__60100 = om.next.query__GT_ast.call(null,wiki_search);
var map__60100__$1 = ((((!((map__60100 == null)))?((((map__60100.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60100.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60100):map__60100);
var vec__60101 = cljs.core.get.call(null,map__60100__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var wiki_search__$1 = cljs.core.nth.call(null,vec__60101,(0),null);
var dontcare = cljs.core.println.call(null,[cljs.core.str(wiki_search__$1)].join(''));
var query_params = cljs.core.get_in.call(null,wiki_search__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"query","query",-1288509510)], null));
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122),query_params,cb], null));
} else {
if(cljs.core.truth_(lst_search)){
var map__60105 = om.next.query__GT_ast.call(null,lst_search);
var map__60105__$1 = ((((!((map__60105 == null)))?((((map__60105.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60105.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60105):map__60105);
var vec__60106 = cljs.core.get.call(null,map__60105__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var lst_search__$1 = cljs.core.nth.call(null,vec__60106,(0),null);
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
var map__60114 = result;
var map__60114__$1 = ((((!((map__60114 == null)))?((((map__60114.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60114.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60114):map__60114);
var lsts = cljs.core.get.call(null,map__60114__$1,"lsts");
var user_id = cljs.core.get.call(null,map__60114__$1,"user_id");
var dontcare = cljs.core.println.call(null,[cljs.core.str("result: "),cljs.core.str(result)].join(''));
var json_status = cljs.core.get.call(null,result,"status");
var map__60115 = json_status;
var map__60115__$1 = ((((!((map__60115 == null)))?((((map__60115.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60115.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60115):map__60115);
var info = cljs.core.get.call(null,map__60115__$1,"info");
var warn = cljs.core.get.call(null,map__60115__$1,"warn");
var error = cljs.core.get.call(null,map__60115__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),lsts,new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"ver","ver",1683769565),ver,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id)], null);
});
cloudxmark.core.search_loop = (function cloudxmark$core$search_loop(c){
var c__26725__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26725__auto__){
return (function (){
var f__26726__auto__ = (function (){var switch__26702__auto__ = ((function (c__26725__auto__){
return (function (state_60753){
var state_val_60754 = (state_60753[(1)]);
if((state_val_60754 === (62))){
var state_60753__$1 = state_60753;
var statearr_60755_60846 = state_60753__$1;
(statearr_60755_60846[(2)] = null);

(statearr_60755_60846[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (7))){
var inst_60746 = (state_60753[(2)]);
var state_60753__$1 = (function (){var statearr_60756 = state_60753;
(statearr_60756[(7)] = inst_60746);

return statearr_60756;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60753__$1,(64),c);
} else {
if((state_val_60754 === (59))){
var inst_60709 = (state_60753[(2)]);
var inst_60710 = cljs.core.get.call(null,inst_60709,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var inst_60711 = cljs.core.get.call(null,inst_60709,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var inst_60712 = cloudxmark.core.jsonp.call(null,"/getItems");
var state_60753__$1 = (function (){var statearr_60757 = state_60753;
(statearr_60757[(8)] = inst_60710);

(statearr_60757[(9)] = inst_60711);

return statearr_60757;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60753__$1,(60),inst_60712);
} else {
if((state_val_60754 === (20))){
var inst_60562 = (state_60753[(2)]);
var inst_60563 = cljs.core.get.call(null,inst_60562,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_60564 = cljs.core.get.call(null,inst_60562,new cljs.core.Keyword(null,"password","password",417022471));
var inst_60565 = cljs.core.get.call(null,inst_60562,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_60566 = [cljs.core.str("/loginGetItems/"),cljs.core.str(inst_60563),cljs.core.str("/"),cljs.core.str(inst_60564)].join('');
var inst_60567 = cloudxmark.core.jsonp.call(null,inst_60566);
var state_60753__$1 = (function (){var statearr_60758 = state_60753;
(statearr_60758[(10)] = inst_60565);

return statearr_60758;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60753__$1,(21),inst_60567);
} else {
if((state_val_60754 === (58))){
var inst_60500 = (state_60753[(11)]);
var state_60753__$1 = state_60753;
var statearr_60759_60847 = state_60753__$1;
(statearr_60759_60847[(2)] = inst_60500);

(statearr_60759_60847[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (60))){
var inst_60711 = (state_60753[(9)]);
var inst_60714 = (state_60753[(2)]);
var inst_60715 = cljs.core.js__GT_clj.call(null,inst_60714);
var inst_60716 = cloudxmark.core.convert_json_lsts_result.call(null,inst_60715,inst_60711,new cljs.core.Keyword(null,"refresh-lists","refresh-lists",27332375));
var inst_60717 = cljs.core.List.EMPTY;
var inst_60718 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_60719 = cljs.core._conj.call(null,inst_60717,inst_60718);
var inst_60720 = cljs.core.List.EMPTY;
var inst_60721 = cljs.core._conj.call(null,inst_60720,inst_60716);
var inst_60722 = cljs.core.concat.call(null,inst_60719,inst_60721);
var inst_60723 = cljs.core.seq.call(null,inst_60722);
var inst_60724 = cljs.core.sequence.call(null,inst_60723);
var inst_60725 = cljs.core.List.EMPTY;
var inst_60726 = cljs.core._conj.call(null,inst_60725,inst_60724);
var inst_60727 = cljs.core.concat.call(null,inst_60726);
var inst_60728 = cljs.core.seq.call(null,inst_60727);
var inst_60729 = cljs.core.sequence.call(null,inst_60728);
var inst_60730 = cljs.core.vec.call(null,inst_60729);
var inst_60731 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_60730);
var state_60753__$1 = state_60753;
var statearr_60760_60848 = state_60753__$1;
(statearr_60760_60848[(2)] = inst_60731);

(statearr_60760_60848[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (27))){
var state_60753__$1 = state_60753;
var statearr_60761_60849 = state_60753__$1;
(statearr_60761_60849[(2)] = false);

(statearr_60761_60849[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (1))){
var state_60753__$1 = state_60753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60753__$1,(2),c);
} else {
if((state_val_60754 === (24))){
var inst_60742 = (state_60753[(2)]);
var state_60753__$1 = state_60753;
var statearr_60762_60850 = state_60753__$1;
(statearr_60762_60850[(2)] = inst_60742);

(statearr_60762_60850[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (55))){
var state_60753__$1 = state_60753;
var statearr_60763_60851 = state_60753__$1;
(statearr_60763_60851[(2)] = false);

(statearr_60763_60851[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (39))){
var state_60753__$1 = state_60753;
var statearr_60764_60852 = state_60753__$1;
(statearr_60764_60852[(2)] = false);

(statearr_60764_60852[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (46))){
var inst_60660 = (state_60753[(2)]);
var inst_60661 = cljs.core.get.call(null,inst_60660,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_60662 = cljs.core.get.call(null,inst_60660,new cljs.core.Keyword(null,"description","description",-1428560544));
var inst_60663 = [cljs.core.str("/addLst/"),cljs.core.str(inst_60661),cljs.core.str("/"),cljs.core.str(inst_60662)].join('');
var inst_60664 = cloudxmark.core.jsonp.call(null,inst_60663);
var state_60753__$1 = state_60753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60753__$1,(47),inst_60664);
} else {
if((state_val_60754 === (4))){
var inst_60751 = (state_60753[(2)]);
var state_60753__$1 = state_60753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60753__$1,inst_60751);
} else {
if((state_val_60754 === (54))){
var state_60753__$1 = state_60753;
var statearr_60765_60853 = state_60753__$1;
(statearr_60765_60853[(2)] = true);

(statearr_60765_60853[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (15))){
var state_60753__$1 = state_60753;
var statearr_60766_60854 = state_60753__$1;
(statearr_60766_60854[(2)] = true);

(statearr_60766_60854[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (48))){
var inst_60500 = (state_60753[(11)]);
var inst_60688 = [cljs.core.str("lst query data:"),cljs.core.str(inst_60500)].join('');
var inst_60689 = cljs.core.println.call(null,inst_60688);
var inst_60691 = (inst_60500 == null);
var inst_60692 = cljs.core.not.call(null,inst_60691);
var state_60753__$1 = (function (){var statearr_60767 = state_60753;
(statearr_60767[(12)] = inst_60689);

return statearr_60767;
})();
if(inst_60692){
var statearr_60768_60855 = state_60753__$1;
(statearr_60768_60855[(1)] = (51));

} else {
var statearr_60769_60856 = state_60753__$1;
(statearr_60769_60856[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (50))){
var inst_60738 = (state_60753[(2)]);
var state_60753__$1 = state_60753;
var statearr_60770_60857 = state_60753__$1;
(statearr_60770_60857[(2)] = inst_60738);

(statearr_60770_60857[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (21))){
var inst_60565 = (state_60753[(10)]);
var inst_60569 = (state_60753[(2)]);
var inst_60570 = cljs.core.js__GT_clj.call(null,inst_60569);
var inst_60571 = cloudxmark.core.convert_json_lsts_result.call(null,inst_60570,inst_60565,new cljs.core.Keyword(null,"login","login",55217519));
var inst_60572 = cljs.core.List.EMPTY;
var inst_60573 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_60574 = cljs.core._conj.call(null,inst_60572,inst_60573);
var inst_60575 = cljs.core.List.EMPTY;
var inst_60576 = cljs.core._conj.call(null,inst_60575,inst_60571);
var inst_60577 = cljs.core.concat.call(null,inst_60574,inst_60576);
var inst_60578 = cljs.core.seq.call(null,inst_60577);
var inst_60579 = cljs.core.sequence.call(null,inst_60578);
var inst_60580 = cljs.core.List.EMPTY;
var inst_60581 = cljs.core._conj.call(null,inst_60580,inst_60579);
var inst_60582 = cljs.core.concat.call(null,inst_60581);
var inst_60583 = cljs.core.seq.call(null,inst_60582);
var inst_60584 = cljs.core.sequence.call(null,inst_60583);
var inst_60585 = cljs.core.vec.call(null,inst_60584);
var inst_60586 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_60585);
var state_60753__$1 = state_60753;
var statearr_60771_60858 = state_60753__$1;
(statearr_60771_60858[(2)] = inst_60586);

(statearr_60771_60858[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (31))){
var inst_60607 = (state_60753[(2)]);
var state_60753__$1 = state_60753;
var statearr_60772_60859 = state_60753__$1;
(statearr_60772_60859[(2)] = inst_60607);

(statearr_60772_60859[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (32))){
var inst_60595 = (state_60753[(13)]);
var inst_60612 = cljs.core.apply.call(null,cljs.core.hash_map,inst_60595);
var state_60753__$1 = state_60753;
var statearr_60773_60860 = state_60753__$1;
(statearr_60773_60860[(2)] = inst_60612);

(statearr_60773_60860[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (40))){
var inst_60655 = (state_60753[(2)]);
var state_60753__$1 = state_60753;
if(cljs.core.truth_(inst_60655)){
var statearr_60774_60861 = state_60753__$1;
(statearr_60774_60861[(1)] = (44));

} else {
var statearr_60775_60862 = state_60753__$1;
(statearr_60775_60862[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (56))){
var inst_60701 = (state_60753[(2)]);
var state_60753__$1 = state_60753;
var statearr_60776_60863 = state_60753__$1;
(statearr_60776_60863[(2)] = inst_60701);

(statearr_60776_60863[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (33))){
var inst_60595 = (state_60753[(13)]);
var state_60753__$1 = state_60753;
var statearr_60777_60864 = state_60753__$1;
(statearr_60777_60864[(2)] = inst_60595);

(statearr_60777_60864[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (13))){
var state_60753__$1 = state_60753;
var statearr_60778_60865 = state_60753__$1;
(statearr_60778_60865[(2)] = false);

(statearr_60778_60865[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (22))){
var inst_60591 = cloudxmark.core.jsonp.call(null,"/logout");
var state_60753__$1 = state_60753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60753__$1,(25),inst_60591);
} else {
if((state_val_60754 === (36))){
var inst_60499 = (state_60753[(14)]);
var inst_60685 = cljs.core._EQ_.call(null,inst_60499,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
var state_60753__$1 = state_60753;
if(inst_60685){
var statearr_60779_60866 = state_60753__$1;
(statearr_60779_60866[(1)] = (48));

} else {
var statearr_60780_60867 = state_60753__$1;
(statearr_60780_60867[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (41))){
var state_60753__$1 = state_60753;
var statearr_60781_60868 = state_60753__$1;
(statearr_60781_60868[(2)] = true);

(statearr_60781_60868[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (43))){
var inst_60652 = (state_60753[(2)]);
var state_60753__$1 = state_60753;
var statearr_60782_60869 = state_60753__$1;
(statearr_60782_60869[(2)] = inst_60652);

(statearr_60782_60869[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (61))){
var state_60753__$1 = state_60753;
var statearr_60783_60870 = state_60753__$1;
(statearr_60783_60870[(2)] = null);

(statearr_60783_60870[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (29))){
var state_60753__$1 = state_60753;
var statearr_60784_60871 = state_60753__$1;
(statearr_60784_60871[(2)] = true);

(statearr_60784_60871[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (44))){
var inst_60500 = (state_60753[(11)]);
var inst_60657 = cljs.core.apply.call(null,cljs.core.hash_map,inst_60500);
var state_60753__$1 = state_60753;
var statearr_60785_60872 = state_60753__$1;
(statearr_60785_60872[(2)] = inst_60657);

(statearr_60785_60872[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (6))){
var inst_60499 = (state_60753[(14)]);
var inst_60538 = cljs.core._EQ_.call(null,inst_60499,new cljs.core.Keyword(null,"lst-login","lst-login",246498853));
var state_60753__$1 = state_60753;
if(inst_60538){
var statearr_60786_60873 = state_60753__$1;
(statearr_60786_60873[(1)] = (9));

} else {
var statearr_60787_60874 = state_60753__$1;
(statearr_60787_60874[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (28))){
var inst_60610 = (state_60753[(2)]);
var state_60753__$1 = state_60753;
if(cljs.core.truth_(inst_60610)){
var statearr_60788_60875 = state_60753__$1;
(statearr_60788_60875[(1)] = (32));

} else {
var statearr_60789_60876 = state_60753__$1;
(statearr_60789_60876[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (64))){
var inst_60748 = (state_60753[(2)]);
var inst_60494 = inst_60748;
var state_60753__$1 = (function (){var statearr_60790 = state_60753;
(statearr_60790[(15)] = inst_60494);

return statearr_60790;
})();
var statearr_60791_60877 = state_60753__$1;
(statearr_60791_60877[(2)] = null);

(statearr_60791_60877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (51))){
var inst_60500 = (state_60753[(11)]);
var inst_60694 = inst_60500.cljs$lang$protocol_mask$partition0$;
var inst_60695 = (inst_60694 & (64));
var inst_60696 = inst_60500.cljs$core$ISeq$;
var inst_60697 = (inst_60695) || (inst_60696);
var state_60753__$1 = state_60753;
if(cljs.core.truth_(inst_60697)){
var statearr_60792_60878 = state_60753__$1;
(statearr_60792_60878[(1)] = (54));

} else {
var statearr_60793_60879 = state_60753__$1;
(statearr_60793_60879[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (25))){
var inst_60595 = (state_60753[(13)]);
var inst_60593 = (state_60753[(2)]);
var inst_60594 = cljs.core.js__GT_clj.call(null,inst_60593);
var inst_60595__$1 = cljs.core.get.call(null,inst_60594,"status");
var inst_60597 = (inst_60595__$1 == null);
var inst_60598 = cljs.core.not.call(null,inst_60597);
var state_60753__$1 = (function (){var statearr_60794 = state_60753;
(statearr_60794[(13)] = inst_60595__$1);

return statearr_60794;
})();
if(inst_60598){
var statearr_60795_60880 = state_60753__$1;
(statearr_60795_60880[(1)] = (26));

} else {
var statearr_60796_60881 = state_60753__$1;
(statearr_60796_60881[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (34))){
var inst_60615 = (state_60753[(2)]);
var inst_60616 = cljs.core.get.call(null,inst_60615,"info");
var inst_60617 = cljs.core.get.call(null,inst_60615,"warn");
var inst_60618 = cljs.core.get.call(null,inst_60615,"error");
var inst_60619 = [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_60620 = [new cljs.core.Keyword(null,"logout","logout",1418564329),inst_60616,inst_60617,inst_60618];
var inst_60621 = cljs.core.PersistentHashMap.fromArrays(inst_60619,inst_60620);
var inst_60622 = cljs.core.List.EMPTY;
var inst_60623 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_60624 = cljs.core._conj.call(null,inst_60622,inst_60623);
var inst_60625 = cljs.core.List.EMPTY;
var inst_60626 = cljs.core._conj.call(null,inst_60625,inst_60621);
var inst_60627 = cljs.core.concat.call(null,inst_60624,inst_60626);
var inst_60628 = cljs.core.seq.call(null,inst_60627);
var inst_60629 = cljs.core.sequence.call(null,inst_60628);
var inst_60630 = cljs.core.List.EMPTY;
var inst_60631 = cljs.core._conj.call(null,inst_60630,inst_60629);
var inst_60632 = cljs.core.concat.call(null,inst_60631);
var inst_60633 = cljs.core.seq.call(null,inst_60632);
var inst_60634 = cljs.core.sequence.call(null,inst_60633);
var inst_60635 = cljs.core.vec.call(null,inst_60634);
var inst_60636 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_60635);
var state_60753__$1 = state_60753;
var statearr_60797_60882 = state_60753__$1;
(statearr_60797_60882[(2)] = inst_60636);

(statearr_60797_60882[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (17))){
var inst_60554 = (state_60753[(2)]);
var state_60753__$1 = state_60753;
var statearr_60798_60883 = state_60753__$1;
(statearr_60798_60883[(2)] = inst_60554);

(statearr_60798_60883[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (3))){
var inst_60499 = (state_60753[(14)]);
var inst_60494 = (state_60753[(15)]);
var inst_60499__$1 = cljs.core.nth.call(null,inst_60494,(0),null);
var inst_60500 = cljs.core.nth.call(null,inst_60494,(1),null);
var inst_60501 = cljs.core.nth.call(null,inst_60494,(2),null);
var inst_60502 = cljs.core._EQ_.call(null,inst_60499__$1,new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122));
var state_60753__$1 = (function (){var statearr_60799 = state_60753;
(statearr_60799[(14)] = inst_60499__$1);

(statearr_60799[(11)] = inst_60500);

(statearr_60799[(16)] = inst_60501);

return statearr_60799;
})();
if(inst_60502){
var statearr_60800_60884 = state_60753__$1;
(statearr_60800_60884[(1)] = (5));

} else {
var statearr_60801_60885 = state_60753__$1;
(statearr_60801_60885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (12))){
var inst_60500 = (state_60753[(11)]);
var inst_60547 = inst_60500.cljs$lang$protocol_mask$partition0$;
var inst_60548 = (inst_60547 & (64));
var inst_60549 = inst_60500.cljs$core$ISeq$;
var inst_60550 = (inst_60548) || (inst_60549);
var state_60753__$1 = state_60753;
if(cljs.core.truth_(inst_60550)){
var statearr_60802_60886 = state_60753__$1;
(statearr_60802_60886[(1)] = (15));

} else {
var statearr_60803_60887 = state_60753__$1;
(statearr_60803_60887[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (2))){
var inst_60490 = (state_60753[(2)]);
var inst_60491 = cljs.core.nth.call(null,inst_60490,(0),null);
var inst_60492 = cljs.core.nth.call(null,inst_60490,(1),null);
var inst_60493 = cljs.core.nth.call(null,inst_60490,(2),null);
var inst_60494 = inst_60490;
var state_60753__$1 = (function (){var statearr_60804 = state_60753;
(statearr_60804[(17)] = inst_60491);

(statearr_60804[(18)] = inst_60493);

(statearr_60804[(19)] = inst_60492);

(statearr_60804[(15)] = inst_60494);

return statearr_60804;
})();
var statearr_60805_60888 = state_60753__$1;
(statearr_60805_60888[(2)] = null);

(statearr_60805_60888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (23))){
var inst_60499 = (state_60753[(14)]);
var inst_60638 = cljs.core._EQ_.call(null,inst_60499,new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626));
var state_60753__$1 = state_60753;
if(inst_60638){
var statearr_60806_60889 = state_60753__$1;
(statearr_60806_60889[(1)] = (35));

} else {
var statearr_60807_60890 = state_60753__$1;
(statearr_60807_60890[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (47))){
var inst_60666 = (state_60753[(2)]);
var inst_60667 = cljs.core.js__GT_clj.call(null,inst_60666);
var inst_60668 = cloudxmark.core.convert_json_lsts_result.call(null,inst_60667,null,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483));
var inst_60669 = cljs.core.List.EMPTY;
var inst_60670 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_60671 = cljs.core._conj.call(null,inst_60669,inst_60670);
var inst_60672 = cljs.core.List.EMPTY;
var inst_60673 = cljs.core._conj.call(null,inst_60672,inst_60668);
var inst_60674 = cljs.core.concat.call(null,inst_60671,inst_60673);
var inst_60675 = cljs.core.seq.call(null,inst_60674);
var inst_60676 = cljs.core.sequence.call(null,inst_60675);
var inst_60677 = cljs.core.List.EMPTY;
var inst_60678 = cljs.core._conj.call(null,inst_60677,inst_60676);
var inst_60679 = cljs.core.concat.call(null,inst_60678);
var inst_60680 = cljs.core.seq.call(null,inst_60679);
var inst_60681 = cljs.core.sequence.call(null,inst_60680);
var inst_60682 = cljs.core.vec.call(null,inst_60681);
var inst_60683 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_60682);
var state_60753__$1 = state_60753;
var statearr_60808_60891 = state_60753__$1;
(statearr_60808_60891[(2)] = inst_60683);

(statearr_60808_60891[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (35))){
var inst_60500 = (state_60753[(11)]);
var inst_60642 = (inst_60500 == null);
var inst_60643 = cljs.core.not.call(null,inst_60642);
var state_60753__$1 = state_60753;
if(inst_60643){
var statearr_60809_60892 = state_60753__$1;
(statearr_60809_60892[(1)] = (38));

} else {
var statearr_60810_60893 = state_60753__$1;
(statearr_60810_60893[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (19))){
var inst_60500 = (state_60753[(11)]);
var state_60753__$1 = state_60753;
var statearr_60811_60894 = state_60753__$1;
(statearr_60811_60894[(2)] = inst_60500);

(statearr_60811_60894[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (57))){
var inst_60500 = (state_60753[(11)]);
var inst_60706 = cljs.core.apply.call(null,cljs.core.hash_map,inst_60500);
var state_60753__$1 = state_60753;
var statearr_60812_60895 = state_60753__$1;
(statearr_60812_60895[(2)] = inst_60706);

(statearr_60812_60895[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (11))){
var inst_60744 = (state_60753[(2)]);
var state_60753__$1 = state_60753;
var statearr_60813_60896 = state_60753__$1;
(statearr_60813_60896[(2)] = inst_60744);

(statearr_60813_60896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (9))){
var inst_60500 = (state_60753[(11)]);
var inst_60541 = [cljs.core.str("lst login data:"),cljs.core.str(inst_60500)].join('');
var inst_60542 = cljs.core.println.call(null,inst_60541);
var inst_60544 = (inst_60500 == null);
var inst_60545 = cljs.core.not.call(null,inst_60544);
var state_60753__$1 = (function (){var statearr_60814 = state_60753;
(statearr_60814[(20)] = inst_60542);

return statearr_60814;
})();
if(inst_60545){
var statearr_60815_60897 = state_60753__$1;
(statearr_60815_60897[(1)] = (12));

} else {
var statearr_60816_60898 = state_60753__$1;
(statearr_60816_60898[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (5))){
var inst_60500 = (state_60753[(11)]);
var inst_60507 = [cljs.core.str(cloudxmark.core.wiki_url),cljs.core.str(inst_60500)].join('');
var inst_60508 = cloudxmark.core.jsonp.call(null,inst_60507);
var state_60753__$1 = state_60753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60753__$1,(8),inst_60508);
} else {
if((state_val_60754 === (14))){
var inst_60557 = (state_60753[(2)]);
var state_60753__$1 = state_60753;
if(cljs.core.truth_(inst_60557)){
var statearr_60817_60899 = state_60753__$1;
(statearr_60817_60899[(1)] = (18));

} else {
var statearr_60818_60900 = state_60753__$1;
(statearr_60818_60900[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (45))){
var inst_60500 = (state_60753[(11)]);
var state_60753__$1 = state_60753;
var statearr_60819_60901 = state_60753__$1;
(statearr_60819_60901[(2)] = inst_60500);

(statearr_60819_60901[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (53))){
var inst_60704 = (state_60753[(2)]);
var state_60753__$1 = state_60753;
if(cljs.core.truth_(inst_60704)){
var statearr_60820_60902 = state_60753__$1;
(statearr_60820_60902[(1)] = (57));

} else {
var statearr_60821_60903 = state_60753__$1;
(statearr_60821_60903[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (26))){
var inst_60595 = (state_60753[(13)]);
var inst_60600 = inst_60595.cljs$lang$protocol_mask$partition0$;
var inst_60601 = (inst_60600 & (64));
var inst_60602 = inst_60595.cljs$core$ISeq$;
var inst_60603 = (inst_60601) || (inst_60602);
var state_60753__$1 = state_60753;
if(cljs.core.truth_(inst_60603)){
var statearr_60822_60904 = state_60753__$1;
(statearr_60822_60904[(1)] = (29));

} else {
var statearr_60823_60905 = state_60753__$1;
(statearr_60823_60905[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (16))){
var state_60753__$1 = state_60753;
var statearr_60824_60906 = state_60753__$1;
(statearr_60824_60906[(2)] = false);

(statearr_60824_60906[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (38))){
var inst_60500 = (state_60753[(11)]);
var inst_60645 = inst_60500.cljs$lang$protocol_mask$partition0$;
var inst_60646 = (inst_60645 & (64));
var inst_60647 = inst_60500.cljs$core$ISeq$;
var inst_60648 = (inst_60646) || (inst_60647);
var state_60753__$1 = state_60753;
if(cljs.core.truth_(inst_60648)){
var statearr_60825_60907 = state_60753__$1;
(statearr_60825_60907[(1)] = (41));

} else {
var statearr_60826_60908 = state_60753__$1;
(statearr_60826_60908[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (30))){
var state_60753__$1 = state_60753;
var statearr_60827_60909 = state_60753__$1;
(statearr_60827_60909[(2)] = false);

(statearr_60827_60909[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (10))){
var inst_60499 = (state_60753[(14)]);
var inst_60588 = cljs.core._EQ_.call(null,inst_60499,new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521));
var state_60753__$1 = state_60753;
if(inst_60588){
var statearr_60828_60910 = state_60753__$1;
(statearr_60828_60910[(1)] = (22));

} else {
var statearr_60829_60911 = state_60753__$1;
(statearr_60829_60911[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (18))){
var inst_60500 = (state_60753[(11)]);
var inst_60559 = cljs.core.apply.call(null,cljs.core.hash_map,inst_60500);
var state_60753__$1 = state_60753;
var statearr_60830_60912 = state_60753__$1;
(statearr_60830_60912[(2)] = inst_60559);

(statearr_60830_60912[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (52))){
var state_60753__$1 = state_60753;
var statearr_60831_60913 = state_60753__$1;
(statearr_60831_60913[(2)] = false);

(statearr_60831_60913[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (42))){
var state_60753__$1 = state_60753;
var statearr_60832_60914 = state_60753__$1;
(statearr_60832_60914[(2)] = false);

(statearr_60832_60914[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (37))){
var inst_60740 = (state_60753[(2)]);
var state_60753__$1 = state_60753;
var statearr_60833_60915 = state_60753__$1;
(statearr_60833_60915[(2)] = inst_60740);

(statearr_60833_60915[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (63))){
var inst_60736 = (state_60753[(2)]);
var state_60753__$1 = state_60753;
var statearr_60834_60916 = state_60753__$1;
(statearr_60834_60916[(2)] = inst_60736);

(statearr_60834_60916[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (8))){
var inst_60510 = (state_60753[(2)]);
var inst_60511 = cljs.core.nth.call(null,inst_60510,(0),null);
var inst_60512 = cljs.core.nth.call(null,inst_60510,(1),null);
var inst_60513 = cljs.core.js__GT_clj.call(null,inst_60512);
var inst_60514 = cljs.core.List.EMPTY;
var inst_60515 = new cljs.core.Symbol("wiki","set-lst","wiki/set-lst",-1532354153,null);
var inst_60516 = cljs.core._conj.call(null,inst_60514,inst_60515);
var inst_60517 = cljs.core.List.EMPTY;
var inst_60518 = cljs.core._conj.call(null,inst_60517,new cljs.core.Keyword(null,"lst","lst",269745987));
var inst_60519 = cljs.core.List.EMPTY;
var inst_60520 = cljs.core._conj.call(null,inst_60519,inst_60513);
var inst_60521 = cljs.core.concat.call(null,inst_60518,inst_60520);
var inst_60522 = cljs.core.seq.call(null,inst_60521);
var inst_60523 = cljs.core.sequence.call(null,inst_60522);
var inst_60524 = cljs.core.apply.call(null,cljs.core.array_map,inst_60523);
var inst_60525 = cljs.core.List.EMPTY;
var inst_60526 = cljs.core._conj.call(null,inst_60525,inst_60524);
var inst_60527 = cljs.core.concat.call(null,inst_60516,inst_60526);
var inst_60528 = cljs.core.seq.call(null,inst_60527);
var inst_60529 = cljs.core.sequence.call(null,inst_60528);
var inst_60530 = cljs.core.List.EMPTY;
var inst_60531 = cljs.core._conj.call(null,inst_60530,inst_60529);
var inst_60532 = cljs.core.concat.call(null,inst_60531);
var inst_60533 = cljs.core.seq.call(null,inst_60532);
var inst_60534 = cljs.core.sequence.call(null,inst_60533);
var inst_60535 = cljs.core.vec.call(null,inst_60534);
var inst_60536 = om.next.transact_BANG_.call(null,cloudxmark.core.wiki_reconciler,inst_60535);
var state_60753__$1 = (function (){var statearr_60835 = state_60753;
(statearr_60835[(21)] = inst_60511);

return statearr_60835;
})();
var statearr_60836_60917 = state_60753__$1;
(statearr_60836_60917[(2)] = inst_60536);

(statearr_60836_60917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60754 === (49))){
var state_60753__$1 = state_60753;
var statearr_60837_60918 = state_60753__$1;
(statearr_60837_60918[(1)] = (61));



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
});})(c__26725__auto__))
;
return ((function (switch__26702__auto__,c__26725__auto__){
return (function() {
var cloudxmark$core$search_loop_$_state_machine__26703__auto__ = null;
var cloudxmark$core$search_loop_$_state_machine__26703__auto____0 = (function (){
var statearr_60842 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60842[(0)] = cloudxmark$core$search_loop_$_state_machine__26703__auto__);

(statearr_60842[(1)] = (1));

return statearr_60842;
});
var cloudxmark$core$search_loop_$_state_machine__26703__auto____1 = (function (state_60753){
while(true){
var ret_value__26704__auto__ = (function (){try{while(true){
var result__26705__auto__ = switch__26702__auto__.call(null,state_60753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26705__auto__;
}
break;
}
}catch (e60843){if((e60843 instanceof Object)){
var ex__26706__auto__ = e60843;
var statearr_60844_60919 = state_60753;
(statearr_60844_60919[(5)] = ex__26706__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60920 = state_60753;
state_60753 = G__60920;
continue;
} else {
return ret_value__26704__auto__;
}
break;
}
});
cloudxmark$core$search_loop_$_state_machine__26703__auto__ = function(state_60753){
switch(arguments.length){
case 0:
return cloudxmark$core$search_loop_$_state_machine__26703__auto____0.call(this);
case 1:
return cloudxmark$core$search_loop_$_state_machine__26703__auto____1.call(this,state_60753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cloudxmark$core$search_loop_$_state_machine__26703__auto__.cljs$core$IFn$_invoke$arity$0 = cloudxmark$core$search_loop_$_state_machine__26703__auto____0;
cloudxmark$core$search_loop_$_state_machine__26703__auto__.cljs$core$IFn$_invoke$arity$1 = cloudxmark$core$search_loop_$_state_machine__26703__auto____1;
return cloudxmark$core$search_loop_$_state_machine__26703__auto__;
})()
;})(switch__26702__auto__,c__26725__auto__))
})();
var state__26727__auto__ = (function (){var statearr_60845 = f__26726__auto__.call(null);
(statearr_60845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26725__auto__);

return statearr_60845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26727__auto__);
});})(c__26725__auto__))
);

return c__26725__auto__;
});
cloudxmark.core.search_loop.call(null,cloudxmark.core.event_chan);
om.next.add_root_BANG_.call(null,cloudxmark.core.wiki_reconciler,cloudxmark.core.AutoCompleter,goog.dom.getElement("wiki"));
om.next.add_root_BANG_.call(null,cloudxmark.core.lst_reconciler,cloudxmark.core.Lsts,goog.dom.getElement("lsts"));

//# sourceMappingURL=core.js.map?rel=1467577536922