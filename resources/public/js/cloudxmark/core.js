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
var args52215 = [];
var len__19538__auto___52218 = arguments.length;
var i__19539__auto___52219 = (0);
while(true){
if((i__19539__auto___52219 < len__19538__auto___52218)){
args52215.push((arguments[i__19539__auto___52219]));

var G__52220 = (i__19539__auto___52219 + (1));
i__19539__auto___52219 = G__52220;
continue;
} else {
}
break;
}

var G__52217 = args52215.length;
switch (G__52217) {
case 1:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52215.length)].join('')));

}
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return cloudxmark.core.jsonp.call(null,cljs.core.async.chan.call(null),uri);
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2 = (function (c,uri){
var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));
cljs.core.println.call(null,[cljs.core.str("before send "),cljs.core.str(uri)].join(''));

gjsonp.send(null,((function (gjsonp){
return (function (p1__52213_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__52213_SHARP_);
});})(gjsonp))
,((function (gjsonp){
return (function (p1__52214_SHARP_){
return cljs.core.println.call(null,[cljs.core.str("error!"),cljs.core.str(p1__52214_SHARP_)].join(''));
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
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),(function (p__52222,_,p__52223){
var map__52224 = p__52222;
var map__52224__$1 = ((((!((map__52224 == null)))?((((map__52224.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52224.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52224):map__52224);
var env = map__52224__$1;
var state = cljs.core.get.call(null,map__52224__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__52224__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__52225 = p__52223;
var map__52225__$1 = ((((!((map__52225 == null)))?((((map__52225.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52225.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52225):map__52225);
var query = cljs.core.get.call(null,map__52225__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wiki","wiki",1946329928),new cljs.core.Keyword(null,"lst","lst",269745987)], null),cljs.core.PersistentVector.EMPTY)], null),(((clojure.string.blank_QMARK_.call(null,query)) || ((cljs.core.count.call(null,query) < (3))))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122),ast], null)));
}));
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword(null,"lst","lst",269745987),(function (p__52228,_,p__52229){
var map__52230 = p__52228;
var map__52230__$1 = ((((!((map__52230 == null)))?((((map__52230.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52230.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52230):map__52230);
var env = map__52230__$1;
var state = cljs.core.get.call(null,map__52230__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__52230__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__52231 = p__52229;
var map__52231__$1 = ((((!((map__52231 == null)))?((((map__52231.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52231.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52231):map__52231);
var query_ver = cljs.core.get.call(null,map__52231__$1,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var query_user = cljs.core.get.call(null,map__52231__$1,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var query_password = cljs.core.get.call(null,map__52231__$1,new cljs.core.Keyword(null,"query-password","query-password",-2133925446));
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var map__52234 = lst;
var map__52234__$1 = ((((!((map__52234 == null)))?((((map__52234.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52234.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52234):map__52234);
var lsts = cljs.core.get.call(null,map__52234__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr = cljs.core.get.call(null,map__52234__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var ver = cljs.core.get.call(null,map__52234__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__52234__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var status = cljs.core.get.call(null,map__52234__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
cljs.core.println.call(null,[cljs.core.str("curruser:"),cljs.core.str(user_id),cljs.core.str(",query ver:"),cljs.core.str(query_ver),cljs.core.str(", ver:"),cljs.core.str(ver),cljs.core.str(",query-user:"),cljs.core.str(query_user),cljs.core.str(",query-pw:"),cljs.core.str(query_password)].join(''));

if(cljs.core._EQ_.call(null,query_user,new cljs.core.Keyword(null,"logout","logout",1418564329))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst-search","lst-search",371565861),ast], null);
} else {
if((cljs.core.some_QMARK_.call(null,user_id)) && (((query_ver > ver)) || ((lsts == null)))){
cljs.core.println.call(null,[cljs.core.str("remote query lists:"),cljs.core.str((lsts == null))].join(''));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst-search","lst-search",371565861),ast], null);
} else {
if(((user_id == null)) && (cljs.core.some_QMARK_.call(null,query_user))){
cljs.core.println.call(null,[cljs.core.str("remote query lists ast:"),cljs.core.str(ast)].join(''));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst-search","lst-search",371565861),ast], null);
} else {
cljs.core.println.call(null,[cljs.core.str("no query, lst: "),cljs.core.str(lst)].join(''));

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
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null),(function (p__52236,_,p__52237){
var map__52238 = p__52236;
var map__52238__$1 = ((((!((map__52238 == null)))?((((map__52238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52238):map__52238);
var env = map__52238__$1;
var state = cljs.core.get.call(null,map__52238__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__52239 = p__52237;
var map__52239__$1 = ((((!((map__52239 == null)))?((((map__52239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52239):map__52239);
var field_id = cljs.core.get.call(null,map__52239__$1,new cljs.core.Keyword(null,"field-id","field-id",-353751335));
var value = cljs.core.get.call(null,map__52239__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__52238,map__52238__$1,env,state,map__52239,map__52239__$1,field_id,value){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before setfield: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),field_id], null),value);

return cljs.core.println.call(null,[cljs.core.str("state after setfield: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});})(map__52238,map__52238__$1,env,state,map__52239,map__52239__$1,field_id,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-curr","lst/set-curr",1109194929,null),(function (p__52242,_,p__52243){
var map__52244 = p__52242;
var map__52244__$1 = ((((!((map__52244 == null)))?((((map__52244.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52244.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52244):map__52244);
var env = map__52244__$1;
var state = cljs.core.get.call(null,map__52244__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__52245 = p__52243;
var map__52245__$1 = ((((!((map__52245 == null)))?((((map__52245.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52245.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52245):map__52245);
var curr = cljs.core.get.call(null,map__52245__$1,new cljs.core.Keyword("lst","curr","lst/curr",-1092232479));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__52244,map__52244__$1,env,state,map__52245,map__52245__$1,curr){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lst","curr","lst/curr",-1092232479)], null),cljs.core.constantly.call(null,curr));

return cljs.core.println.call(null,[cljs.core.str("set to "),cljs.core.str(curr)].join(''));
});})(map__52244,map__52244__$1,env,state,map__52245,map__52245__$1,curr))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null),(function (p__52248,_,data_map){
var map__52249 = p__52248;
var map__52249__$1 = ((((!((map__52249 == null)))?((((map__52249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52249):map__52249);
var env = map__52249__$1;
var state = cljs.core.get.call(null,map__52249__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__52249,map__52249__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("data-map:"),cljs.core.str(data_map)].join(''));

var map__52251_52253 = data_map;
var map__52251_52254__$1 = ((((!((map__52251_52253 == null)))?((((map__52251_52253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52251_52253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52251_52253):map__52251_52253);
var status_52255 = cljs.core.get.call(null,map__52251_52254__$1,"status");
var lsts_52256 = cljs.core.get.call(null,map__52251_52254__$1,"lsts");
var user_id_52257 = cljs.core.get.call(null,map__52251_52254__$1,"user_id");
if(cljs.core.truth_(cljs.core.get.call(null,status_52255,"error"))){
} else {
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),cljs.core.merge.call(null,new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),data_map.call(null,"lsts"),new cljs.core.Keyword(null,"ver","ver",1683769565),data_map.call(null,"ver"),new cljs.core.Keyword(null,"user-id","user-id",-206822291),data_map.call(null,"user_id")], null)));
}

return cljs.core.println.call(null,[cljs.core.str("state after setlist:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});})(map__52249,map__52249__$1,env,state))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("wiki","set-lst","wiki/set-lst",-1532354153,null),(function (p__52258,_,lst){
var map__52259 = p__52258;
var map__52259__$1 = ((((!((map__52259 == null)))?((((map__52259.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52259.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52259):map__52259);
var env = map__52259__$1;
var state = cljs.core.get.call(null,map__52259__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__52259,map__52259__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("before wiki update list:"),cljs.core.str(lst)].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wiki","wiki",1946329928),new cljs.core.Keyword(null,"lst","lst",269745987)], null),new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(lst));

return cljs.core.println.call(null,[cljs.core.str("state after wiki update:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});})(map__52259,map__52259__$1,env,state))
], null);
}));
cloudxmark.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wiki","wiki",1946329928),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst","lst",269745987),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0),new cljs.core.Keyword(null,"curr","curr",-1092372808),(0),new cljs.core.Keyword(null,"user-id","user-id",-206822291),null], null)], null));
cloudxmark.core.result_list = (function cloudxmark$core$result_list(results){
return React.DOM.ul({"key": "result-list"},om.util.force_children.call(null,cljs.core.map_indexed.call(null,(function (idx,itm){
return React.DOM.li({"key": idx},om.util.force_children.call(null,itm));
}),results)));
});
cloudxmark.core.status_line = (function cloudxmark$core$status_line(p__52261){
var map__52265 = p__52261;
var map__52265__$1 = ((((!((map__52265 == null)))?((((map__52265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52265):map__52265);
var info = cljs.core.get.call(null,map__52265__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var warn = cljs.core.get.call(null,map__52265__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var error = cljs.core.get.call(null,map__52265__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var vec__52267 = (cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",error], null):(cljs.core.truth_(warn)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange",warn], null):(cljs.core.truth_(info)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black",info], null):null)));
var color = cljs.core.nth.call(null,vec__52267,(0),null);
var msg = cljs.core.nth.call(null,vec__52267,(1),null);
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
var vec__52270 = (function (){var G__52271 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__52271) {
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
var elem_key = cljs.core.nth.call(null,vec__52270,(0),null);
var query_key = cljs.core.nth.call(null,vec__52270,(1),null);
return om.dom.input.call(null,{"key": elem_key, "value": query, "onChange": ((function (vec__52270,elem_key,query_key){
return (function (e){
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.fromArray([query_key,e.target.value], true, false)], null));
});})(vec__52270,elem_key,query_key))
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
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),user_id,new cljs.core.Keyword(null,"query-password","query-password",-2133925446),password,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(ver + (1))], null)], null));
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

var x52277_52289 = cloudxmark.core.Lsts.prototype;
x52277_52289.componentWillUpdate = ((function (x52277_52289){
return (function (next_props__21519__auto__,next_state__21520__auto__){
var this__21518__auto__ = this;
if(((!((this__21518__auto__ == null)))?(((false) || (this__21518__auto__.om$next$Ident$))?true:false):false)){
var ident__21522__auto___52290 = om.next.ident.call(null,this__21518__auto__,om.next.props.call(null,this__21518__auto__));
var next_ident__21523__auto___52291 = om.next.ident.call(null,this__21518__auto__,om.next._next_props.call(null,next_props__21519__auto__,this__21518__auto__));
if(cljs.core.not_EQ_.call(null,ident__21522__auto___52290,next_ident__21523__auto___52291)){
var idxr__21524__auto___52292 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21518__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__21524__auto___52292 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__21524__auto___52292),((function (idxr__21524__auto___52292,ident__21522__auto___52290,next_ident__21523__auto___52291,this__21518__auto__,x52277_52289){
return (function (indexes__21525__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__21525__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__21522__auto___52290], null),cljs.core.disj,this__21518__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__21523__auto___52291], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__21518__auto__);
});})(idxr__21524__auto___52292,ident__21522__auto___52290,next_ident__21523__auto___52291,this__21518__auto__,x52277_52289))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__21518__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21518__auto__);
});})(x52277_52289))
;

x52277_52289.shouldComponentUpdate = ((function (x52277_52289){
return (function (next_props__21519__auto__,next_state__21520__auto__){
var this__21518__auto__ = this;
var next_children__21521__auto__ = next_props__21519__auto__.children;
var next_props__21519__auto____$1 = goog.object.get(next_props__21519__auto__,"omcljs$value");
var next_props__21519__auto____$2 = (function (){var G__52279 = next_props__21519__auto____$1;
if((next_props__21519__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__52279);
} else {
return G__52279;
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
});})(x52277_52289))
;

x52277_52289.componentWillUnmount = ((function (x52277_52289){
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
});})(x52277_52289))
;

x52277_52289.componentDidUpdate = ((function (x52277_52289){
return (function (prev_props__21526__auto__,prev_state__21527__auto__){
var this__21518__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21518__auto__);
});})(x52277_52289))
;

x52277_52289.isMounted = ((function (x52277_52289){
return (function (){
var this__21518__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21518__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x52277_52289))
;

x52277_52289.componentWillMount = ((function (x52277_52289){
return (function (){
var this__21518__auto__ = this;
var indexer__21528__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21518__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21528__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21528__auto__,this__21518__auto__);
}
});})(x52277_52289))
;

x52277_52289.render = ((function (x52277_52289){
return (function (){
var this__21517__auto__ = this;
var this$ = this__21517__auto__;
var _STAR_reconciler_STAR_52280 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_52281 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_52282 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_52283 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_52284 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21517__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21517__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21517__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21517__auto__);

om.next._STAR_parent_STAR_ = this__21517__auto__;

try{var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__52285 = lst;
var map__52285__$1 = ((((!((map__52285 == null)))?((((map__52285.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52285.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52285):map__52285);
var lsts = cljs.core.get.call(null,map__52285__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr = cljs.core.get.call(null,map__52285__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var ver = cljs.core.get.call(null,map__52285__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__52285__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var status = cljs.core.get.call(null,map__52285__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if((user_id == null)){
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Please login"))),om.util.force_children.call(null,"User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"user-id-field","user-id-field",2116160486))),om.util.force_children.call(null,"Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"password-field","password-field",-1811673649))),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.login_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(status))));
} else {
return React.DOM.div(null,om.util.force_children.call(null,cloudxmark.core.logout_button.call(null,this$)),om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Lists"))),om.util.force_children.call(null,cloudxmark.core.refresh_lists_button.call(null,this$,user_id,ver)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"refresh_lists","refresh_lists",1467404952).cljs$core$IFn$_invoke$arity$1(status))),om.util.force_children.call(null,((!(cljs.core.empty_QMARK_.call(null,lsts)))?cloudxmark.core.lst_list.call(null,this$,lsts,(((curr == null))?(0):curr)):null)));
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_52284;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_52283;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_52282;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_52281;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_52280;
}});})(x52277_52289))
;


cloudxmark.core.Lsts.prototype.constructor = cloudxmark.core.Lsts;

cloudxmark.core.Lsts.prototype.constructor.displayName = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.prototype.om$isComponent = true;

var x52287_52293 = cloudxmark.core.Lsts;
x52287_52293.om$next$IQueryParams$ = true;

x52287_52293.om$next$IQueryParams$params$arity$1 = ((function (x52287_52293){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-password","query-password",-2133925446),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0)], null);
});})(x52287_52293))
;

x52287_52293.om$next$IQuery$ = true;

x52287_52293.om$next$IQuery$query$arity$1 = ((function (x52287_52293){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-password","query-password",-2133925446),new cljs.core.Symbol(null,"?query-password","?query-password",1376893065,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null)], null))], null);
});})(x52287_52293))
;


var x52288_52294 = cloudxmark.core.Lsts.prototype;
x52288_52294.om$next$IQueryParams$ = true;

x52288_52294.om$next$IQueryParams$params$arity$1 = ((function (x52288_52294){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-password","query-password",-2133925446),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0)], null);
});})(x52288_52294))
;

x52288_52294.om$next$IQuery$ = true;

x52288_52294.om$next$IQuery$query$arity$1 = ((function (x52288_52294){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-password","query-password",-2133925446),new cljs.core.Symbol(null,"?query-password","?query-password",1376893065,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null)], null))], null);
});})(x52288_52294))
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

var x52299_52312 = cloudxmark.core.AutoCompleter.prototype;
x52299_52312.componentWillUpdate = ((function (x52299_52312){
return (function (next_props__21519__auto__,next_state__21520__auto__){
var this__21518__auto__ = this;
if(((!((this__21518__auto__ == null)))?(((false) || (this__21518__auto__.om$next$Ident$))?true:false):false)){
var ident__21522__auto___52313 = om.next.ident.call(null,this__21518__auto__,om.next.props.call(null,this__21518__auto__));
var next_ident__21523__auto___52314 = om.next.ident.call(null,this__21518__auto__,om.next._next_props.call(null,next_props__21519__auto__,this__21518__auto__));
if(cljs.core.not_EQ_.call(null,ident__21522__auto___52313,next_ident__21523__auto___52314)){
var idxr__21524__auto___52315 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21518__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__21524__auto___52315 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__21524__auto___52315),((function (idxr__21524__auto___52315,ident__21522__auto___52313,next_ident__21523__auto___52314,this__21518__auto__,x52299_52312){
return (function (indexes__21525__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__21525__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__21522__auto___52313], null),cljs.core.disj,this__21518__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__21523__auto___52314], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__21518__auto__);
});})(idxr__21524__auto___52315,ident__21522__auto___52313,next_ident__21523__auto___52314,this__21518__auto__,x52299_52312))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__21518__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21518__auto__);
});})(x52299_52312))
;

x52299_52312.shouldComponentUpdate = ((function (x52299_52312){
return (function (next_props__21519__auto__,next_state__21520__auto__){
var this__21518__auto__ = this;
var next_children__21521__auto__ = next_props__21519__auto__.children;
var next_props__21519__auto____$1 = goog.object.get(next_props__21519__auto__,"omcljs$value");
var next_props__21519__auto____$2 = (function (){var G__52301 = next_props__21519__auto____$1;
if((next_props__21519__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__52301);
} else {
return G__52301;
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
});})(x52299_52312))
;

x52299_52312.componentWillUnmount = ((function (x52299_52312){
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
});})(x52299_52312))
;

x52299_52312.componentDidUpdate = ((function (x52299_52312){
return (function (prev_props__21526__auto__,prev_state__21527__auto__){
var this__21518__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21518__auto__);
});})(x52299_52312))
;

x52299_52312.isMounted = ((function (x52299_52312){
return (function (){
var this__21518__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21518__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x52299_52312))
;

x52299_52312.componentWillMount = ((function (x52299_52312){
return (function (){
var this__21518__auto__ = this;
var indexer__21528__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21518__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21528__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21528__auto__,this__21518__auto__);
}
});})(x52299_52312))
;

x52299_52312.render = ((function (x52299_52312){
return (function (){
var this__21517__auto__ = this;
var this$ = this__21517__auto__;
var _STAR_reconciler_STAR_52302 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_52303 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_52304 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_52305 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_52306 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21517__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21517__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21517__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21517__auto__);

om.next._STAR_parent_STAR_ = this__21517__auto__;

try{var map__52307 = om.next.props.call(null,this$);
var map__52307__$1 = ((((!((map__52307 == null)))?((((map__52307.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52307.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52307):map__52307);
var lst = cljs.core.get.call(null,map__52307__$1,new cljs.core.Keyword("wiki","lst","wiki/lst",270705683));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"AutoCompleter"))),om.util.force_children.call(null,(function (){var G__52309 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloudxmark.core.search_field.call(null,this$,new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648).cljs$core$IFn$_invoke$arity$1(om.next.get_params.call(null,this$)),new cljs.core.Keyword(null,"wiki","wiki",1946329928))], null);
if(!(cljs.core.empty_QMARK_.call(null,lst))){
return cljs.core.conj.call(null,G__52309,cloudxmark.core.result_list.call(null,lst));
} else {
return G__52309;
}
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_52306;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_52305;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_52304;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_52303;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_52302;
}});})(x52299_52312))
;


cloudxmark.core.AutoCompleter.prototype.constructor = cloudxmark.core.AutoCompleter;

cloudxmark.core.AutoCompleter.prototype.constructor.displayName = "cloudxmark.core/AutoCompleter";

cloudxmark.core.AutoCompleter.prototype.om$isComponent = true;

var x52310_52316 = cloudxmark.core.AutoCompleter;
x52310_52316.om$next$IQueryParams$ = true;

x52310_52316.om$next$IQueryParams$params$arity$1 = ((function (x52310_52316){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648),""], null);
});})(x52310_52316))
;

x52310_52316.om$next$IQuery$ = true;

x52310_52316.om$next$IQuery$query$arity$1 = ((function (x52310_52316){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?wiki-query","?wiki-query",-1723016161,null)], null))], null);
});})(x52310_52316))
;


var x52311_52317 = cloudxmark.core.AutoCompleter.prototype;
x52311_52317.om$next$IQueryParams$ = true;

x52311_52317.om$next$IQueryParams$params$arity$1 = ((function (x52311_52317){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648),""], null);
});})(x52311_52317))
;

x52311_52317.om$next$IQuery$ = true;

x52311_52317.om$next$IQuery$query$arity$1 = ((function (x52311_52317){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?wiki-query","?wiki-query",-1723016161,null)], null))], null);
});})(x52311_52317))
;


cloudxmark.core.AutoCompleter.cljs$lang$type = true;

cloudxmark.core.AutoCompleter.cljs$lang$ctorStr = "cloudxmark.core/AutoCompleter";

cloudxmark.core.AutoCompleter.cljs$lang$ctorPrWriter = (function (this__21585__auto__,writer__21586__auto__,opt__21587__auto__){
return cljs.core._write.call(null,writer__21586__auto__,"cloudxmark.core/AutoCompleter");
});
cloudxmark.core.send_to_chan = (function cloudxmark$core$send_to_chan(c){
return (function (p__52327,cb){
var map__52328 = p__52327;
var map__52328__$1 = ((((!((map__52328 == null)))?((((map__52328.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52328.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52328):map__52328);
var wiki_search = cljs.core.get.call(null,map__52328__$1,new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122));
var lst_search = cljs.core.get.call(null,map__52328__$1,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
if(cljs.core.truth_(wiki_search)){
var map__52330 = om.next.query__GT_ast.call(null,wiki_search);
var map__52330__$1 = ((((!((map__52330 == null)))?((((map__52330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52330):map__52330);
var vec__52331 = cljs.core.get.call(null,map__52330__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var wiki_search__$1 = cljs.core.nth.call(null,vec__52331,(0),null);
var dontcare = cljs.core.println.call(null,[cljs.core.str(wiki_search__$1)].join(''));
var query_params = cljs.core.get_in.call(null,wiki_search__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"query","query",-1288509510)], null));
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122),query_params,cb], null));
} else {
if(cljs.core.truth_(lst_search)){
var map__52333 = om.next.query__GT_ast.call(null,lst_search);
var map__52333__$1 = ((((!((map__52333 == null)))?((((map__52333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52333):map__52333);
var vec__52334 = cljs.core.get.call(null,map__52333__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var lst_search__$1 = cljs.core.nth.call(null,vec__52334,(0),null);
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
return (function (state_52651){
var state_val_52652 = (state_52651[(1)]);
if((state_val_52652 === (7))){
var inst_52644 = (state_52651[(2)]);
var state_52651__$1 = (function (){var statearr_52653 = state_52651;
(statearr_52653[(7)] = inst_52644);

return statearr_52653;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52651__$1,(34),c);
} else {
if((state_val_52652 === (20))){
var inst_52594 = (state_52651[(8)]);
var inst_52593 = (state_52651[(2)]);
var inst_52594__$1 = cljs.core.get.call(null,inst_52593,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var inst_52595 = cljs.core.get.call(null,inst_52593,new cljs.core.Keyword(null,"query-password","query-password",-2133925446));
var inst_52596 = cljs.core.get.call(null,inst_52593,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var inst_52597 = (inst_52594__$1 == null);
var state_52651__$1 = (function (){var statearr_52654 = state_52651;
(statearr_52654[(9)] = inst_52595);

(statearr_52654[(8)] = inst_52594__$1);

(statearr_52654[(10)] = inst_52596);

return statearr_52654;
})();
if(cljs.core.truth_(inst_52597)){
var statearr_52655_52706 = state_52651__$1;
(statearr_52655_52706[(1)] = (21));

} else {
var statearr_52656_52707 = state_52651__$1;
(statearr_52656_52707[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52652 === (27))){
var inst_52595 = (state_52651[(9)]);
var inst_52594 = (state_52651[(8)]);
var inst_52605 = [cljs.core.str("/loginGetItems/"),cljs.core.str(inst_52594),cljs.core.str("/"),cljs.core.str(inst_52595)].join('');
var state_52651__$1 = state_52651;
var statearr_52657_52708 = state_52651__$1;
(statearr_52657_52708[(2)] = inst_52605);

(statearr_52657_52708[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52652 === (1))){
var state_52651__$1 = state_52651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52651__$1,(2),c);
} else {
if((state_val_52652 === (24))){
var inst_52602 = [cljs.core.str("/logout")].join('');
var state_52651__$1 = state_52651;
var statearr_52658_52709 = state_52651__$1;
(statearr_52658_52709[(2)] = inst_52602);

(statearr_52658_52709[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52652 === (4))){
var inst_52649 = (state_52651[(2)]);
var state_52651__$1 = state_52651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52651__$1,inst_52649);
} else {
if((state_val_52652 === (15))){
var state_52651__$1 = state_52651;
var statearr_52659_52710 = state_52651__$1;
(statearr_52659_52710[(2)] = true);

(statearr_52659_52710[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52652 === (21))){
var state_52651__$1 = state_52651;
var statearr_52660_52711 = state_52651__$1;
(statearr_52660_52711[(2)] = "/getItems");

(statearr_52660_52711[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52652 === (31))){
var state_52651__$1 = state_52651;
var statearr_52661_52712 = state_52651__$1;
(statearr_52661_52712[(2)] = null);

(statearr_52661_52712[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52652 === (32))){
var state_52651__$1 = state_52651;
var statearr_52662_52713 = state_52651__$1;
(statearr_52662_52713[(2)] = null);

(statearr_52662_52713[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52652 === (33))){
var inst_52640 = (state_52651[(2)]);
var state_52651__$1 = state_52651;
var statearr_52663_52714 = state_52651__$1;
(statearr_52663_52714[(2)] = inst_52640);

(statearr_52663_52714[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52652 === (13))){
var state_52651__$1 = state_52651;
var statearr_52664_52715 = state_52651__$1;
(statearr_52664_52715[(2)] = false);

(statearr_52664_52715[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52652 === (22))){
var inst_52594 = (state_52651[(8)]);
var inst_52600 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"logout","logout",1418564329),inst_52594);
var state_52651__$1 = state_52651;
if(inst_52600){
var statearr_52665_52716 = state_52651__$1;
(statearr_52665_52716[(1)] = (24));

} else {
var statearr_52666_52717 = state_52651__$1;
(statearr_52666_52717[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52652 === (29))){
var inst_52608 = (state_52651[(2)]);
var state_52651__$1 = state_52651;
var statearr_52667_52718 = state_52651__$1;
(statearr_52667_52718[(2)] = inst_52608);

(statearr_52667_52718[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52652 === (6))){
var inst_52532 = (state_52651[(11)]);
var inst_52569 = cljs.core._EQ_.call(null,inst_52532,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
var state_52651__$1 = state_52651;
if(inst_52569){
var statearr_52668_52719 = state_52651__$1;
(statearr_52668_52719[(1)] = (9));

} else {
var statearr_52669_52720 = state_52651__$1;
(statearr_52669_52720[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52652 === (28))){
var state_52651__$1 = state_52651;
var statearr_52670_52721 = state_52651__$1;
(statearr_52670_52721[(2)] = null);

(statearr_52670_52721[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52652 === (25))){
var state_52651__$1 = state_52651;
var statearr_52671_52722 = state_52651__$1;
(statearr_52671_52722[(1)] = (27));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52652 === (34))){
var inst_52646 = (state_52651[(2)]);
var inst_52529 = inst_52646;
var state_52651__$1 = (function (){var statearr_52673 = state_52651;
(statearr_52673[(12)] = inst_52529);

return statearr_52673;
})();
var statearr_52674_52723 = state_52651__$1;
(statearr_52674_52723[(2)] = null);

(statearr_52674_52723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52652 === (17))){
var inst_52585 = (state_52651[(2)]);
var state_52651__$1 = state_52651;
var statearr_52675_52724 = state_52651__$1;
(statearr_52675_52724[(2)] = inst_52585);

(statearr_52675_52724[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52652 === (3))){
var inst_52532 = (state_52651[(11)]);
var inst_52529 = (state_52651[(12)]);
var inst_52532__$1 = cljs.core.nth.call(null,inst_52529,(0),null);
var inst_52533 = cljs.core.nth.call(null,inst_52529,(1),null);
var inst_52534 = cljs.core.nth.call(null,inst_52529,(2),null);
var inst_52535 = cljs.core._EQ_.call(null,inst_52532__$1,new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122));
var state_52651__$1 = (function (){var statearr_52676 = state_52651;
(statearr_52676[(13)] = inst_52534);

(statearr_52676[(14)] = inst_52533);

(statearr_52676[(11)] = inst_52532__$1);

return statearr_52676;
})();
if(inst_52535){
var statearr_52677_52725 = state_52651__$1;
(statearr_52677_52725[(1)] = (5));

} else {
var statearr_52678_52726 = state_52651__$1;
(statearr_52678_52726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52652 === (12))){
var inst_52533 = (state_52651[(14)]);
var inst_52578 = inst_52533.cljs$lang$protocol_mask$partition0$;
var inst_52579 = (inst_52578 & (64));
var inst_52580 = inst_52533.cljs$core$ISeq$;
var inst_52581 = (inst_52579) || (inst_52580);
var state_52651__$1 = state_52651;
if(cljs.core.truth_(inst_52581)){
var statearr_52679_52727 = state_52651__$1;
(statearr_52679_52727[(1)] = (15));

} else {
var statearr_52680_52728 = state_52651__$1;
(statearr_52680_52728[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52652 === (2))){
var inst_52525 = (state_52651[(2)]);
var inst_52526 = cljs.core.nth.call(null,inst_52525,(0),null);
var inst_52527 = cljs.core.nth.call(null,inst_52525,(1),null);
var inst_52528 = cljs.core.nth.call(null,inst_52525,(2),null);
var inst_52529 = inst_52525;
var state_52651__$1 = (function (){var statearr_52681 = state_52651;
(statearr_52681[(15)] = inst_52526);

(statearr_52681[(16)] = inst_52528);

(statearr_52681[(12)] = inst_52529);

(statearr_52681[(17)] = inst_52527);

return statearr_52681;
})();
var statearr_52682_52729 = state_52651__$1;
(statearr_52682_52729[(2)] = null);

(statearr_52682_52729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52652 === (23))){
var inst_52612 = (state_52651[(2)]);
var inst_52613 = cloudxmark.core.jsonp.call(null,inst_52612);
var state_52651__$1 = state_52651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52651__$1,(30),inst_52613);
} else {
if((state_val_52652 === (19))){
var inst_52533 = (state_52651[(14)]);
var state_52651__$1 = state_52651;
var statearr_52683_52730 = state_52651__$1;
(statearr_52683_52730[(2)] = inst_52533);

(statearr_52683_52730[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52652 === (11))){
var inst_52642 = (state_52651[(2)]);
var state_52651__$1 = state_52651;
var statearr_52684_52731 = state_52651__$1;
(statearr_52684_52731[(2)] = inst_52642);

(statearr_52684_52731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52652 === (9))){
var inst_52533 = (state_52651[(14)]);
var inst_52572 = [cljs.core.str("lst query data:"),cljs.core.str(inst_52533)].join('');
var inst_52573 = cljs.core.println.call(null,inst_52572);
var inst_52575 = (inst_52533 == null);
var inst_52576 = cljs.core.not.call(null,inst_52575);
var state_52651__$1 = (function (){var statearr_52685 = state_52651;
(statearr_52685[(18)] = inst_52573);

return statearr_52685;
})();
if(inst_52576){
var statearr_52686_52732 = state_52651__$1;
(statearr_52686_52732[(1)] = (12));

} else {
var statearr_52687_52733 = state_52651__$1;
(statearr_52687_52733[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52652 === (5))){
var inst_52533 = (state_52651[(14)]);
var inst_52538 = [cljs.core.str(cloudxmark.core.wiki_url),cljs.core.str(inst_52533)].join('');
var inst_52539 = cloudxmark.core.jsonp.call(null,inst_52538);
var state_52651__$1 = state_52651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52651__$1,(8),inst_52539);
} else {
if((state_val_52652 === (14))){
var inst_52588 = (state_52651[(2)]);
var state_52651__$1 = state_52651;
if(cljs.core.truth_(inst_52588)){
var statearr_52688_52734 = state_52651__$1;
(statearr_52688_52734[(1)] = (18));

} else {
var statearr_52689_52735 = state_52651__$1;
(statearr_52689_52735[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52652 === (26))){
var inst_52610 = (state_52651[(2)]);
var state_52651__$1 = state_52651;
var statearr_52690_52736 = state_52651__$1;
(statearr_52690_52736[(2)] = inst_52610);

(statearr_52690_52736[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52652 === (16))){
var state_52651__$1 = state_52651;
var statearr_52691_52737 = state_52651__$1;
(statearr_52691_52737[(2)] = false);

(statearr_52691_52737[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52652 === (30))){
var inst_52596 = (state_52651[(10)]);
var inst_52615 = (state_52651[(2)]);
var inst_52616 = cljs.core.js__GT_clj.call(null,inst_52615);
var inst_52617 = cljs.core.assoc.call(null,inst_52616,"ver",inst_52596);
var inst_52618 = inst_52617.call(null,"user_id");
var inst_52619 = [cljs.core.str("results is:"),cljs.core.str(inst_52617),cljs.core.str("user_id:"),cljs.core.str(inst_52618)].join('');
var inst_52620 = cljs.core.println.call(null,inst_52619);
var inst_52621 = cljs.core.List.EMPTY;
var inst_52622 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_52623 = cljs.core._conj.call(null,inst_52621,inst_52622);
var inst_52624 = cljs.core.List.EMPTY;
var inst_52625 = cljs.core._conj.call(null,inst_52624,inst_52617);
var inst_52626 = cljs.core.concat.call(null,inst_52623,inst_52625);
var inst_52627 = cljs.core.seq.call(null,inst_52626);
var inst_52628 = cljs.core.sequence.call(null,inst_52627);
var inst_52629 = cljs.core.List.EMPTY;
var inst_52630 = cljs.core._conj.call(null,inst_52629,inst_52628);
var inst_52631 = cljs.core.concat.call(null,inst_52630);
var inst_52632 = cljs.core.seq.call(null,inst_52631);
var inst_52633 = cljs.core.sequence.call(null,inst_52632);
var inst_52634 = cljs.core.vec.call(null,inst_52633);
var inst_52635 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_52634);
var state_52651__$1 = (function (){var statearr_52692 = state_52651;
(statearr_52692[(19)] = inst_52620);

return statearr_52692;
})();
var statearr_52693_52738 = state_52651__$1;
(statearr_52693_52738[(2)] = inst_52635);

(statearr_52693_52738[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52652 === (10))){
var state_52651__$1 = state_52651;
var statearr_52694_52739 = state_52651__$1;
(statearr_52694_52739[(1)] = (31));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52652 === (18))){
var inst_52533 = (state_52651[(14)]);
var inst_52590 = cljs.core.apply.call(null,cljs.core.hash_map,inst_52533);
var state_52651__$1 = state_52651;
var statearr_52696_52740 = state_52651__$1;
(statearr_52696_52740[(2)] = inst_52590);

(statearr_52696_52740[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52652 === (8))){
var inst_52541 = (state_52651[(2)]);
var inst_52542 = cljs.core.nth.call(null,inst_52541,(0),null);
var inst_52543 = cljs.core.nth.call(null,inst_52541,(1),null);
var inst_52544 = cljs.core.js__GT_clj.call(null,inst_52543);
var inst_52545 = cljs.core.List.EMPTY;
var inst_52546 = new cljs.core.Symbol("wiki","set-lst","wiki/set-lst",-1532354153,null);
var inst_52547 = cljs.core._conj.call(null,inst_52545,inst_52546);
var inst_52548 = cljs.core.List.EMPTY;
var inst_52549 = cljs.core._conj.call(null,inst_52548,new cljs.core.Keyword(null,"lst","lst",269745987));
var inst_52550 = cljs.core.List.EMPTY;
var inst_52551 = cljs.core._conj.call(null,inst_52550,inst_52544);
var inst_52552 = cljs.core.concat.call(null,inst_52549,inst_52551);
var inst_52553 = cljs.core.seq.call(null,inst_52552);
var inst_52554 = cljs.core.sequence.call(null,inst_52553);
var inst_52555 = cljs.core.apply.call(null,cljs.core.array_map,inst_52554);
var inst_52556 = cljs.core.List.EMPTY;
var inst_52557 = cljs.core._conj.call(null,inst_52556,inst_52555);
var inst_52558 = cljs.core.concat.call(null,inst_52547,inst_52557);
var inst_52559 = cljs.core.seq.call(null,inst_52558);
var inst_52560 = cljs.core.sequence.call(null,inst_52559);
var inst_52561 = cljs.core.List.EMPTY;
var inst_52562 = cljs.core._conj.call(null,inst_52561,inst_52560);
var inst_52563 = cljs.core.concat.call(null,inst_52562);
var inst_52564 = cljs.core.seq.call(null,inst_52563);
var inst_52565 = cljs.core.sequence.call(null,inst_52564);
var inst_52566 = cljs.core.vec.call(null,inst_52565);
var inst_52567 = om.next.transact_BANG_.call(null,cloudxmark.core.wiki_reconciler,inst_52566);
var state_52651__$1 = (function (){var statearr_52697 = state_52651;
(statearr_52697[(20)] = inst_52542);

return statearr_52697;
})();
var statearr_52698_52741 = state_52651__$1;
(statearr_52698_52741[(2)] = inst_52567);

(statearr_52698_52741[(1)] = (7));


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
var statearr_52702 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52702[(0)] = cloudxmark$core$search_loop_$_state_machine__21390__auto__);

(statearr_52702[(1)] = (1));

return statearr_52702;
});
var cloudxmark$core$search_loop_$_state_machine__21390__auto____1 = (function (state_52651){
while(true){
var ret_value__21391__auto__ = (function (){try{while(true){
var result__21392__auto__ = switch__21389__auto__.call(null,state_52651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21392__auto__;
}
break;
}
}catch (e52703){if((e52703 instanceof Object)){
var ex__21393__auto__ = e52703;
var statearr_52704_52742 = state_52651;
(statearr_52704_52742[(5)] = ex__21393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52743 = state_52651;
state_52651 = G__52743;
continue;
} else {
return ret_value__21391__auto__;
}
break;
}
});
cloudxmark$core$search_loop_$_state_machine__21390__auto__ = function(state_52651){
switch(arguments.length){
case 0:
return cloudxmark$core$search_loop_$_state_machine__21390__auto____0.call(this);
case 1:
return cloudxmark$core$search_loop_$_state_machine__21390__auto____1.call(this,state_52651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cloudxmark$core$search_loop_$_state_machine__21390__auto__.cljs$core$IFn$_invoke$arity$0 = cloudxmark$core$search_loop_$_state_machine__21390__auto____0;
cloudxmark$core$search_loop_$_state_machine__21390__auto__.cljs$core$IFn$_invoke$arity$1 = cloudxmark$core$search_loop_$_state_machine__21390__auto____1;
return cloudxmark$core$search_loop_$_state_machine__21390__auto__;
})()
;})(switch__21389__auto__,c__21410__auto__))
})();
var state__21412__auto__ = (function (){var statearr_52705 = f__21411__auto__.call(null);
(statearr_52705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21410__auto__);

return statearr_52705;
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