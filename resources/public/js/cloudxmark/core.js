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
var args32635 = [];
var len__22617__auto___32638 = arguments.length;
var i__22618__auto___32639 = (0);
while(true){
if((i__22618__auto___32639 < len__22617__auto___32638)){
args32635.push((arguments[i__22618__auto___32639]));

var G__32640 = (i__22618__auto___32639 + (1));
i__22618__auto___32639 = G__32640;
continue;
} else {
}
break;
}

var G__32637 = args32635.length;
switch (G__32637) {
case 1:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32635.length)].join('')));

}
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return cloudxmark.core.jsonp.call(null,cljs.core.async.chan.call(null),uri);
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2 = (function (c,uri){
var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));
cljs.core.println.call(null,[cljs.core.str("before send "),cljs.core.str(uri)].join(''));

gjsonp.send(null,((function (gjsonp){
return (function (p1__32633_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__32633_SHARP_);
});})(gjsonp))
,((function (gjsonp){
return (function (p1__32634_SHARP_){
return cljs.core.println.call(null,[cljs.core.str("error!"),cljs.core.str(p1__32634_SHARP_)].join(''));
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
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),(function (p__32642,_,p__32643){
var map__32644 = p__32642;
var map__32644__$1 = ((((!((map__32644 == null)))?((((map__32644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32644):map__32644);
var env = map__32644__$1;
var state = cljs.core.get.call(null,map__32644__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__32644__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__32645 = p__32643;
var map__32645__$1 = ((((!((map__32645 == null)))?((((map__32645.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32645.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32645):map__32645);
var query = cljs.core.get.call(null,map__32645__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wiki","wiki",1946329928),new cljs.core.Keyword(null,"lst","lst",269745987)], null),cljs.core.PersistentVector.EMPTY)], null),(((clojure.string.blank_QMARK_.call(null,query)) || ((cljs.core.count.call(null,query) < (3))))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122),ast], null)));
}));
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword(null,"lst","lst",269745987),(function (p__32648,_,p__32649){
var map__32650 = p__32648;
var map__32650__$1 = ((((!((map__32650 == null)))?((((map__32650.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32650.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32650):map__32650);
var env = map__32650__$1;
var state = cljs.core.get.call(null,map__32650__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__32650__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__32651 = p__32649;
var map__32651__$1 = ((((!((map__32651 == null)))?((((map__32651.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32651.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32651):map__32651);
var query_ver = cljs.core.get.call(null,map__32651__$1,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var query_user = cljs.core.get.call(null,map__32651__$1,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var map__32654 = lst;
var map__32654__$1 = ((((!((map__32654 == null)))?((((map__32654.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32654.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32654):map__32654);
var lsts = cljs.core.get.call(null,map__32654__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr = cljs.core.get.call(null,map__32654__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var ver = cljs.core.get.call(null,map__32654__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__32654__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var status = cljs.core.get.call(null,map__32654__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
cljs.core.println.call(null,[cljs.core.str("curruser:"),cljs.core.str(user_id),cljs.core.str(",query ver:"),cljs.core.str(query_ver),cljs.core.str(", ver:"),cljs.core.str(ver),cljs.core.str(",query-user:"),cljs.core.str(query_user)].join(''));

if((cljs.core.some_QMARK_.call(null,user_id)) && (((query_ver > ver)) || ((lsts == null)))){
cljs.core.println.call(null,[cljs.core.str("remote query lists:"),cljs.core.str((lsts == null))].join(''));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst-search","lst-search",371565861),ast], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),lst], null);
}
}));
cloudxmark.core.update_state_by_path = (function cloudxmark$core$update_state_by_path(state,path,merge_QMARK_,value){
cljs.core.println.call(null,[cljs.core.str("state before update-state: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

var new_value_32656 = (cljs.core.truth_(merge_QMARK_)?cljs.core.merge.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),value):value);
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,path,new_value_32656);

return cljs.core.println.call(null,[cljs.core.str("state after update-state: "),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});
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
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null),(function (p__32657,_,p__32658){
var map__32659 = p__32657;
var map__32659__$1 = ((((!((map__32659 == null)))?((((map__32659.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32659.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32659):map__32659);
var env = map__32659__$1;
var state = cljs.core.get.call(null,map__32659__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__32660 = p__32658;
var map__32660__$1 = ((((!((map__32660 == null)))?((((map__32660.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32660.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32660):map__32660);
var status = map__32660__$1;
var id = cljs.core.get.call(null,map__32660__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__32659,map__32659__$1,env,state,map__32660,map__32660__$1,status,id){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"status","status",-1997798413),id], null),false,status);
});})(map__32659,map__32659__$1,env,state,map__32660,map__32660__$1,status,id))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","update-state","lst/update-state",987025747,null),(function (p__32663,_,p__32664){
var map__32665 = p__32663;
var map__32665__$1 = ((((!((map__32665 == null)))?((((map__32665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32665):map__32665);
var env = map__32665__$1;
var state = cljs.core.get.call(null,map__32665__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__32666 = p__32664;
var map__32666__$1 = ((((!((map__32666 == null)))?((((map__32666.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32666.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32666):map__32666);
var path = cljs.core.get.call(null,map__32666__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var merge_QMARK_ = cljs.core.get.call(null,map__32666__$1,new cljs.core.Keyword(null,"merge?","merge?",-2004416151));
var value = cljs.core.get.call(null,map__32666__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__32665,map__32665__$1,env,state,map__32666,map__32666__$1,path,merge_QMARK_,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,path,merge_QMARK_,value);
});})(map__32665,map__32665__$1,env,state,map__32666,map__32666__$1,path,merge_QMARK_,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-item-col","lst/set-item-col",2044881169,null),(function (p__32669,_,p__32670){
var map__32671 = p__32669;
var map__32671__$1 = ((((!((map__32671 == null)))?((((map__32671.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32671.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32671):map__32671);
var env = map__32671__$1;
var state = cljs.core.get.call(null,map__32671__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__32672 = p__32670;
var map__32672__$1 = ((((!((map__32672 == null)))?((((map__32672.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32672.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32672):map__32672);
var data_map = map__32672__$1;
var lst_idx = cljs.core.get.call(null,map__32672__$1,new cljs.core.Keyword(null,"lst-idx","lst-idx",1989217330));
var item_idx = cljs.core.get.call(null,map__32672__$1,new cljs.core.Keyword(null,"item-idx","item-idx",1600888161));
var col_name = cljs.core.get.call(null,map__32672__$1,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var value = cljs.core.get.call(null,map__32672__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__32671,map__32671__$1,env,state,map__32672,map__32672__$1,data_map,lst_idx,item_idx,col_name,value){
return (function (){
var lst = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"lsts","lsts",-459731441),lst_idx], null));
var lst_id = cljs.core.get.call(null,lst,"lst_id");
var orig_name = cljs.core.get_in.call(null,lst,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["items",item_idx,"name"], null));
cljs.core.println.call(null,[cljs.core.str("data-map in set-item-col:"),cljs.core.str(data_map),cljs.core.str("lst-id:"),cljs.core.str(lst_id)].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"lsts","lsts",-459731441),lst_idx,"items",item_idx,col_name], null),value);

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lst-id","lst-id",296172009),lst_id,new cljs.core.Keyword(null,"orig-name","orig-name",-1968092053),orig_name,new cljs.core.Keyword(null,"col-name","col-name",-1773922845),col_name,new cljs.core.Keyword(null,"value","value",305978217),value], null),null], null));
});})(map__32671,map__32671__$1,env,state,map__32672,map__32672__$1,data_map,lst_idx,item_idx,col_name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-field-state","lst/set-field-state",-1240622787,null),(function (p__32675,_,p__32676){
var map__32677 = p__32675;
var map__32677__$1 = ((((!((map__32677 == null)))?((((map__32677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32677):map__32677);
var env = map__32677__$1;
var state = cljs.core.get.call(null,map__32677__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__32678 = p__32676;
var map__32678__$1 = ((((!((map__32678 == null)))?((((map__32678.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32678.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32678):map__32678);
var field_id = cljs.core.get.call(null,map__32678__$1,new cljs.core.Keyword(null,"field-id","field-id",-353751335));
var value = cljs.core.get.call(null,map__32678__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__32677,map__32677__$1,env,state,map__32678,map__32678__$1,field_id,value){
return (function (){
return cloudxmark.core.update_state_by_path.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),field_id], null),false,value);
});})(map__32677,map__32677__$1,env,state,map__32678,map__32678__$1,field_id,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","login","lst/login",1697497083,null),(function (p__32681,_,p__32682){
var map__32683 = p__32681;
var map__32683__$1 = ((((!((map__32683 == null)))?((((map__32683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32683):map__32683);
var env = map__32683__$1;
var state = cljs.core.get.call(null,map__32683__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__32684 = p__32682;
var map__32684__$1 = ((((!((map__32684 == null)))?((((map__32684.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32684.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32684):map__32684);
var data_map = map__32684__$1;
var user_id = cljs.core.get.call(null,map__32684__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var password = cljs.core.get.call(null,map__32684__$1,new cljs.core.Keyword(null,"password","password",417022471));
var ver = cljs.core.get.call(null,map__32684__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__32683,map__32683__$1,env,state,map__32684,map__32684__$1,data_map,user_id,password,ver){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-login","lst-login",246498853),data_map,null], null));
});})(map__32683,map__32683__$1,env,state,map__32684,map__32684__$1,data_map,user_id,password,ver))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-lst","lst/add-lst",-756724467,null),(function (p__32687,_,p__32688){
var map__32689 = p__32687;
var map__32689__$1 = ((((!((map__32689 == null)))?((((map__32689.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32689.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32689):map__32689);
var env = map__32689__$1;
var state = cljs.core.get.call(null,map__32689__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__32690 = p__32688;
var map__32690__$1 = ((((!((map__32690 == null)))?((((map__32690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32690):map__32690);
var data_map = map__32690__$1;
var name = cljs.core.get.call(null,map__32690__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__32690__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__32689,map__32689__$1,env,state,map__32690,map__32690__$1,data_map,name,description){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"description","description",-1428560544),description], null),null], null));
});})(map__32689,map__32689__$1,env,state,map__32690,map__32690__$1,data_map,name,description))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","add-item","lst/add-item",-1938532833,null),(function (p__32693,_,p__32694){
var map__32695 = p__32693;
var map__32695__$1 = ((((!((map__32695 == null)))?((((map__32695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32695):map__32695);
var env = map__32695__$1;
var state = cljs.core.get.call(null,map__32695__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__32696 = p__32694;
var map__32696__$1 = ((((!((map__32696 == null)))?((((map__32696.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32696.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32696):map__32696);
var data_map = map__32696__$1;
var name = cljs.core.get.call(null,map__32696__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.call(null,map__32696__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__32695,map__32695__$1,env,state,map__32696,map__32696__$1,data_map,name,value){
return (function (){
var lsts = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"lsts","lsts",-459731441)], null));
var curr = (function (){var or__21434__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.Keyword(null,"curr","curr",-1092372808)], null));
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
} else {
return (0);
}
})();
var lst_id = cljs.core.get.call(null,cljs.core.nth.call(null,lsts,curr),"lst_id");
cljs.core.println.call(null,[cljs.core.str("state before add-item put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-add-item","lst-add-item",-1337170134),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lst-id","lst-id",296172009),lst_id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),value], null),null], null));
});})(map__32695,map__32695__$1,env,state,map__32696,map__32696__$1,data_map,name,value))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","logout","lst/logout",-1235763963,null),(function (p__32699,_,___$1){
var map__32700 = p__32699;
var map__32700__$1 = ((((!((map__32700 == null)))?((((map__32700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32700):map__32700);
var env = map__32700__$1;
var state = cljs.core.get.call(null,map__32700__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__32700,map__32700__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state in logout:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),null,new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0)], null));

return cljs.core.async.put_BANG_.call(null,cloudxmark.core.event_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521),cljs.core.PersistentArrayMap.EMPTY,null], null));
});})(map__32700,map__32700__$1,env,state))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null),(function (p__32702,_,p__32703){
var map__32704 = p__32702;
var map__32704__$1 = ((((!((map__32704 == null)))?((((map__32704.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32704.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32704):map__32704);
var env = map__32704__$1;
var state = cljs.core.get.call(null,map__32704__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__32705 = p__32703;
var map__32705__$1 = ((((!((map__32705 == null)))?((((map__32705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32705):map__32705);
var data_map = map__32705__$1;
var status = cljs.core.get.call(null,map__32705__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var lsts = cljs.core.get.call(null,map__32705__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var user_id = cljs.core.get.call(null,map__32705__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var ver = cljs.core.get.call(null,map__32705__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__32704,map__32704__$1,env,state,map__32705,map__32705__$1,data_map,status,lsts,user_id,ver){
return (function (){
cljs.core.println.call(null,[cljs.core.str("state before set-lst put chan:"),cljs.core.str(cljs.core.deref.call(null,state)),cljs.core.str(" datamap:"),cljs.core.str(data_map)].join(''));

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
});})(map__32704,map__32704__$1,env,state,map__32705,map__32705__$1,data_map,status,lsts,user_id,ver))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("wiki","set-lst","wiki/set-lst",-1532354153,null),(function (p__32708,_,lst){
var map__32709 = p__32708;
var map__32709__$1 = ((((!((map__32709 == null)))?((((map__32709.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32709.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32709):map__32709);
var env = map__32709__$1;
var state = cljs.core.get.call(null,map__32709__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__32709,map__32709__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("before wiki update list:"),cljs.core.str(lst)].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wiki","wiki",1946329928),new cljs.core.Keyword(null,"lst","lst",269745987)], null),new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(lst));

return cljs.core.println.call(null,[cljs.core.str("state after wiki update:"),cljs.core.str(cljs.core.deref.call(null,state))].join(''));
});})(map__32709,map__32709__$1,env,state))
], null);
}));
cloudxmark.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wiki","wiki",1946329928),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst","lst",269745987),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),null,new cljs.core.Keyword(null,"ver","ver",1683769565),(0),new cljs.core.Keyword(null,"curr","curr",-1092372808),(0),new cljs.core.Keyword(null,"user-id","user-id",-206822291),null], null)], null));
cloudxmark.core.lst_field = (function cloudxmark$core$lst_field(var_args){
var args32711 = [];
var len__22617__auto___32714 = arguments.length;
var i__22618__auto___32715 = (0);
while(true){
if((i__22618__auto___32715 < len__22617__auto___32714)){
args32711.push((arguments[i__22618__auto___32715]));

var G__32716 = (i__22618__auto___32715 + (1));
i__22618__auto___32715 = G__32716;
continue;
} else {
}
break;
}

var G__32713 = args32711.length;
switch (G__32713) {
case 2:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cloudxmark.core.lst_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32711.length)].join('')));

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

cloudxmark.core.item_field = (function cloudxmark$core$item_field(comp,lst_idx,item_idx,item,col_name){
var field_val = (function (){var or__21434__auto__ = cljs.core.get.call(null,item,col_name);
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
} else {
return "";
}
})();
return om.dom.input.call(null,{"key": [cljs.core.str("item-field-"),cljs.core.str(lst_idx),cljs.core.str("-"),cljs.core.str(item_idx),cljs.core.str("-"),cljs.core.str(col_name)].join(''), "value": field_val, "onChange": ((function (field_val){
return (function (e){
var value = e.target.value;
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-item-col","lst/set-item-col",2044881169,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lst-idx","lst-idx",1989217330)),(function (){var x__22360__auto__ = lst_idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"item-idx","item-idx",1600888161)),(function (){var x__22360__auto__ = item_idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"col-name","col-name",-1773922845)),(function (){var x__22360__auto__ = col_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),(function (){var x__22360__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())))));
});})(field_val))
});
});
cloudxmark.core.result_list = (function cloudxmark$core$result_list(results){
return React.DOM.ul({"key": "result-list"},om.util.force_children.call(null,cljs.core.map_indexed.call(null,(function (idx,itm){
return React.DOM.li({"key": idx},om.util.force_children.call(null,itm));
}),results)));
});
cloudxmark.core.status_line = (function cloudxmark$core$status_line(p__32718){
var map__32724 = p__32718;
var map__32724__$1 = ((((!((map__32724 == null)))?((((map__32724.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32724.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32724):map__32724);
var info = cljs.core.get.call(null,map__32724__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var warn = cljs.core.get.call(null,map__32724__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var error = cljs.core.get.call(null,map__32724__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.println.call(null,[cljs.core.str("info:"),cljs.core.str(info),cljs.core.str(",warn:"),cljs.core.str(warn),cljs.core.str(",error:"),cljs.core.str(error)].join(''));

var vec__32726 = (cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red",error], null):(cljs.core.truth_(warn)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange",warn], null):(cljs.core.truth_(info)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black",info], null):null)));
var color = cljs.core.nth.call(null,vec__32726,(0),null);
var msg = cljs.core.nth.call(null,vec__32726,(1),null);
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
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","update-state","lst/update-state",987025747,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"path","path",-188191168)),(function (){var x__22360__auto__ = path;
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
var map__32731 = lst;
var map__32731__$1 = ((((!((map__32731 == null)))?((((map__32731.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32731.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32731):map__32731);
var lsts = cljs.core.get.call(null,map__32731__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var status = cljs.core.get.call(null,map__32731__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var curr = cljs.core.get.call(null,map__32731__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var curr_idx = (function (){var or__21434__auto__ = curr;
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
} else {
return (0);
}
})();
var items = ((cljs.core.seq.call(null,lsts))?cljs.core.get.call(null,cljs.core.nth.call(null,lsts,curr_idx),"items"):null);
cljs.core.println.call(null,[cljs.core.str("items are: "),cljs.core.str(items)].join(''));

return React.DOM.div({},om.util.force_children.call(null,((cljs.core.seq.call(null,items))?React.DOM.div({"key": [cljs.core.str("lst-edit-area-"),cljs.core.str(curr_idx)].join('')},om.util.force_children.call(null,cljs.core.map_indexed.call(null,((function (lst,map__32731,map__32731__$1,lsts,status,curr,curr_idx,items){
return (function (idx,item){
return React.DOM.div({"key": [cljs.core.str("item-"),cljs.core.str(idx)].join('')},om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,curr_idx,idx,item,"name")),om.util.force_children.call(null,cloudxmark.core.item_field.call(null,comp,curr_idx,idx,item,"value")));
});})(lst,map__32731,map__32731__$1,lsts,status,curr,curr_idx,items))
,items))):null)),om.util.force_children.call(null,React.DOM.div({"key": [cljs.core.str("lst-add-item-"),cljs.core.str(curr_idx)].join('')},om.util.force_children.call(null,"New Item Name: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-name-field","new-item-name-field",-2039875139))),om.util.force_children.call(null," Value: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-item-value-field","new-item-value-field",2061625312))),om.util.force_children.call(null,cloudxmark.core.add_item_button.call(null,comp)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-item","add-item",715813891).cljs$core$IFn$_invoke$arity$1(status))))));
});
cloudxmark.core.lst_add_area = (function cloudxmark$core$lst_add_area(comp){
var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,comp));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__32735 = lst;
var map__32735__$1 = ((((!((map__32735 == null)))?((((map__32735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32735):map__32735);
var status = cljs.core.get.call(null,map__32735__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return React.DOM.div({"key": [cljs.core.str("lst-edit-area-"),cljs.core.str((-1))].join('')},om.util.force_children.call(null,"New List: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-lst-name-field","new-lst-name-field",1430372825))),om.util.force_children.call(null,"Description: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,comp,new cljs.core.Keyword(null,"new-lst-description-field","new-lst-description-field",584843127))),om.util.force_children.call(null,cloudxmark.core.add_lst_button.call(null,comp)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483).cljs$core$IFn$_invoke$arity$1(status))));
});
cloudxmark.core.lst_lst = (function cloudxmark$core$lst_lst(comp,lsts,curr_idx){
return React.DOM.div({"key": "lst-lst"},om.util.force_children.call(null,((cljs.core.seq.call(null,lsts))?cljs.core.map_indexed.call(null,(function (idx,item){
return React.DOM.div({"key": [cljs.core.str(cloudxmark$core$lst_lst),cljs.core.str(idx)].join('')},om.util.force_children.call(null,cloudxmark.core.lst_select_field.call(null,comp,idx,curr_idx)),om.util.force_children.call(null,React.DOM.span({"key": [cljs.core.str(cloudxmark$core$lst_lst),cljs.core.str(idx),cljs.core.str("span")].join('')},om.util.force_children.call(null,item.call(null,"name","?")))),om.util.force_children.call(null,((cljs.core._EQ_.call(null,idx,curr_idx))?cloudxmark.core.lst_edit_area.call(null,comp):null)));
}),lsts):null)),om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Add new list:"))),om.util.force_children.call(null,cloudxmark.core.lst_add_area.call(null,comp)));
});
cloudxmark.core.search_field = (function cloudxmark$core$search_field(comp,query,type){
var vec__32741 = (function (){var G__32744 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__32744) {
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
var elem_key = cljs.core.nth.call(null,vec__32741,(0),null);
var query_key = cljs.core.nth.call(null,vec__32741,(1),null);
return om.dom.input.call(null,{"key": elem_key, "value": query, "onChange": ((function (vec__32741,elem_key,query_key){
return (function (e){
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.fromArray([query_key,e.target.value], true, false)], null));
});})(vec__32741,elem_key,query_key))
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

om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null)),(function (){var x__22360__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"login","login",55217519)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null)))));
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
var this__26957__auto__ = this;
React.Component.apply(this__26957__auto__,arguments);

if(!((this__26957__auto__.initLocalState == null))){
this__26957__auto__.state = this__26957__auto__.initLocalState();
} else {
this__26957__auto__.state = {};
}

return this__26957__auto__;
});

cloudxmark.core.Lsts.prototype = goog.object.clone(React.Component.prototype);

var x32750_32762 = cloudxmark.core.Lsts.prototype;
x32750_32762.componentWillUpdate = ((function (x32750_32762){
return (function (next_props__26859__auto__,next_state__26860__auto__){
var this__26858__auto__ = this;
if(((!((this__26858__auto__ == null)))?(((false) || (this__26858__auto__.om$next$Ident$))?true:false):false)){
var ident__26862__auto___32763 = om.next.ident.call(null,this__26858__auto__,om.next.props.call(null,this__26858__auto__));
var next_ident__26863__auto___32764 = om.next.ident.call(null,this__26858__auto__,om.next._next_props.call(null,next_props__26859__auto__,this__26858__auto__));
if(cljs.core.not_EQ_.call(null,ident__26862__auto___32763,next_ident__26863__auto___32764)){
var idxr__26864__auto___32765 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__26858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__26864__auto___32765 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__26864__auto___32765),((function (idxr__26864__auto___32765,ident__26862__auto___32763,next_ident__26863__auto___32764,this__26858__auto__,x32750_32762){
return (function (indexes__26865__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__26865__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__26862__auto___32763], null),cljs.core.disj,this__26858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__26863__auto___32764], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__26858__auto__);
});})(idxr__26864__auto___32765,ident__26862__auto___32763,next_ident__26863__auto___32764,this__26858__auto__,x32750_32762))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__26858__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__26858__auto__);
});})(x32750_32762))
;

x32750_32762.shouldComponentUpdate = ((function (x32750_32762){
return (function (next_props__26859__auto__,next_state__26860__auto__){
var this__26858__auto__ = this;
var next_children__26861__auto__ = next_props__26859__auto__.children;
var next_props__26859__auto____$1 = goog.object.get(next_props__26859__auto__,"omcljs$value");
var next_props__26859__auto____$2 = (function (){var G__32752 = next_props__26859__auto____$1;
if((next_props__26859__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__32752);
} else {
return G__32752;
}
})();
var or__21434__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__26858__auto__),next_props__26859__auto____$2);
if(or__21434__auto__){
return or__21434__auto__;
} else {
var or__21434__auto____$1 = (function (){var and__21422__auto__ = this__26858__auto__.state;
if(cljs.core.truth_(and__21422__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__26858__auto__.state,"omcljs$state"),goog.object.get(next_state__26860__auto__,"omcljs$state"));
} else {
return and__21422__auto__;
}
})();
if(cljs.core.truth_(or__21434__auto____$1)){
return or__21434__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__26858__auto__.props.children,next_children__26861__auto__);
}
}
});})(x32750_32762))
;

x32750_32762.componentWillUnmount = ((function (x32750_32762){
return (function (){
var this__26858__auto__ = this;
var r__26869__auto__ = om.next.get_reconciler.call(null,this__26858__auto__);
var cfg__26870__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__26869__auto__);
var st__26871__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__26870__auto__);
var indexer__26868__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__26870__auto__);
if(cljs.core.truth_((function (){var and__21422__auto__ = !((st__26871__auto__ == null));
if(and__21422__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__26871__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__26858__auto__], null));
} else {
return and__21422__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__26871__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__26858__auto__);
} else {
}

if((indexer__26868__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__26868__auto__,this__26858__auto__);
}
});})(x32750_32762))
;

x32750_32762.componentDidUpdate = ((function (x32750_32762){
return (function (prev_props__26866__auto__,prev_state__26867__auto__){
var this__26858__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__26858__auto__);
});})(x32750_32762))
;

x32750_32762.isMounted = ((function (x32750_32762){
return (function (){
var this__26858__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__26858__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x32750_32762))
;

x32750_32762.componentWillMount = ((function (x32750_32762){
return (function (){
var this__26858__auto__ = this;
var indexer__26868__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__26858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__26868__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__26868__auto__,this__26858__auto__);
}
});})(x32750_32762))
;

x32750_32762.render = ((function (x32750_32762){
return (function (){
var this__26857__auto__ = this;
var this$ = this__26857__auto__;
var _STAR_reconciler_STAR_32753 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_32754 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_32755 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_32756 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_32757 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__26857__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__26857__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__26857__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__26857__auto__);

om.next._STAR_parent_STAR_ = this__26857__auto__;

try{cljs.core.println.call(null,[cljs.core.str("om/props in render:"),cljs.core.str(om.next.props.call(null,this$))].join(''));

var lst = new cljs.core.Keyword(null,"lst","lst",269745987).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var dontcare = cljs.core.println.call(null,"lists props:",lst);
var map__32758 = lst;
var map__32758__$1 = ((((!((map__32758 == null)))?((((map__32758.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32758.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32758):map__32758);
var lsts = cljs.core.get.call(null,map__32758__$1,new cljs.core.Keyword(null,"lsts","lsts",-459731441));
var curr = cljs.core.get.call(null,map__32758__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808));
var ver = cljs.core.get.call(null,map__32758__$1,new cljs.core.Keyword(null,"ver","ver",1683769565));
var user_id = cljs.core.get.call(null,map__32758__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var status = cljs.core.get.call(null,map__32758__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if((user_id == null)){
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Please login"))),om.util.force_children.call(null,"User id: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"user-id-field","user-id-field",2116160486))),om.util.force_children.call(null,"Password: "),om.util.force_children.call(null,cloudxmark.core.lst_field.call(null,this$,new cljs.core.Keyword(null,"password-field","password-field",-1811673649),"password")),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,cloudxmark.core.login_button.call(null,this$)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(status))));
} else {
return React.DOM.div(null,om.util.force_children.call(null,cloudxmark.core.logout_button.call(null,this$)),om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Lists"))),om.util.force_children.call(null,cloudxmark.core.refresh_lists_button.call(null,this$,user_id,ver)),om.util.force_children.call(null,cloudxmark.core.status_line.call(null,new cljs.core.Keyword(null,"refresh_lists","refresh_lists",1467404952).cljs$core$IFn$_invoke$arity$1(status))),om.util.force_children.call(null,cloudxmark.core.lst_lst.call(null,this$,lsts,(((curr == null))?(0):curr))));
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_32757;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_32756;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_32755;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_32754;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_32753;
}});})(x32750_32762))
;


cloudxmark.core.Lsts.prototype.constructor = cloudxmark.core.Lsts;

cloudxmark.core.Lsts.prototype.constructor.displayName = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.prototype.om$isComponent = true;

var x32760_32766 = cloudxmark.core.Lsts;
x32760_32766.om$next$IQueryParams$ = true;

x32760_32766.om$next$IQueryParams$params$arity$1 = ((function (x32760_32766){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0)], null);
});})(x32760_32766))
;

x32760_32766.om$next$IQuery$ = true;

x32760_32766.om$next$IQuery$query$arity$1 = ((function (x32760_32766){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null)], null))], null);
});})(x32760_32766))
;


var x32761_32767 = cloudxmark.core.Lsts.prototype;
x32761_32767.om$next$IQueryParams$ = true;

x32761_32767.om$next$IQueryParams$params$arity$1 = ((function (x32761_32767){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),null,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),(0)], null);
});})(x32761_32767))
;

x32761_32767.om$next$IQuery$ = true;

x32761_32767.om$next$IQuery$query$arity$1 = ((function (x32761_32767){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword(null,"lst","lst",269745987),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-user","query-user",-1501080168),new cljs.core.Symbol(null,"?query-user","?query-user",925338460,null),new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099),new cljs.core.Symbol(null,"?query-ver","?query-ver",-686772103,null)], null))], null);
});})(x32761_32767))
;


cloudxmark.core.Lsts.cljs$lang$type = true;

cloudxmark.core.Lsts.cljs$lang$ctorStr = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.cljs$lang$ctorPrWriter = (function (this__26959__auto__,writer__26960__auto__,opt__26961__auto__){
return cljs.core._write.call(null,writer__26960__auto__,"cloudxmark.core/Lsts");
});
/**
 * @constructor
 */
cloudxmark.core.AutoCompleter = (function cloudxmark$core$AutoCompleter(){
var this__26957__auto__ = this;
React.Component.apply(this__26957__auto__,arguments);

if(!((this__26957__auto__.initLocalState == null))){
this__26957__auto__.state = this__26957__auto__.initLocalState();
} else {
this__26957__auto__.state = {};
}

return this__26957__auto__;
});

cloudxmark.core.AutoCompleter.prototype = goog.object.clone(React.Component.prototype);

var x32772_32785 = cloudxmark.core.AutoCompleter.prototype;
x32772_32785.componentWillUpdate = ((function (x32772_32785){
return (function (next_props__26859__auto__,next_state__26860__auto__){
var this__26858__auto__ = this;
if(((!((this__26858__auto__ == null)))?(((false) || (this__26858__auto__.om$next$Ident$))?true:false):false)){
var ident__26862__auto___32786 = om.next.ident.call(null,this__26858__auto__,om.next.props.call(null,this__26858__auto__));
var next_ident__26863__auto___32787 = om.next.ident.call(null,this__26858__auto__,om.next._next_props.call(null,next_props__26859__auto__,this__26858__auto__));
if(cljs.core.not_EQ_.call(null,ident__26862__auto___32786,next_ident__26863__auto___32787)){
var idxr__26864__auto___32788 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__26858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__26864__auto___32788 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__26864__auto___32788),((function (idxr__26864__auto___32788,ident__26862__auto___32786,next_ident__26863__auto___32787,this__26858__auto__,x32772_32785){
return (function (indexes__26865__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__26865__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__26862__auto___32786], null),cljs.core.disj,this__26858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__26863__auto___32787], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__26858__auto__);
});})(idxr__26864__auto___32788,ident__26862__auto___32786,next_ident__26863__auto___32787,this__26858__auto__,x32772_32785))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__26858__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__26858__auto__);
});})(x32772_32785))
;

x32772_32785.shouldComponentUpdate = ((function (x32772_32785){
return (function (next_props__26859__auto__,next_state__26860__auto__){
var this__26858__auto__ = this;
var next_children__26861__auto__ = next_props__26859__auto__.children;
var next_props__26859__auto____$1 = goog.object.get(next_props__26859__auto__,"omcljs$value");
var next_props__26859__auto____$2 = (function (){var G__32774 = next_props__26859__auto____$1;
if((next_props__26859__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__32774);
} else {
return G__32774;
}
})();
var or__21434__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__26858__auto__),next_props__26859__auto____$2);
if(or__21434__auto__){
return or__21434__auto__;
} else {
var or__21434__auto____$1 = (function (){var and__21422__auto__ = this__26858__auto__.state;
if(cljs.core.truth_(and__21422__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__26858__auto__.state,"omcljs$state"),goog.object.get(next_state__26860__auto__,"omcljs$state"));
} else {
return and__21422__auto__;
}
})();
if(cljs.core.truth_(or__21434__auto____$1)){
return or__21434__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__26858__auto__.props.children,next_children__26861__auto__);
}
}
});})(x32772_32785))
;

x32772_32785.componentWillUnmount = ((function (x32772_32785){
return (function (){
var this__26858__auto__ = this;
var r__26869__auto__ = om.next.get_reconciler.call(null,this__26858__auto__);
var cfg__26870__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__26869__auto__);
var st__26871__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__26870__auto__);
var indexer__26868__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__26870__auto__);
if(cljs.core.truth_((function (){var and__21422__auto__ = !((st__26871__auto__ == null));
if(and__21422__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__26871__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__26858__auto__], null));
} else {
return and__21422__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__26871__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__26858__auto__);
} else {
}

if((indexer__26868__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__26868__auto__,this__26858__auto__);
}
});})(x32772_32785))
;

x32772_32785.componentDidUpdate = ((function (x32772_32785){
return (function (prev_props__26866__auto__,prev_state__26867__auto__){
var this__26858__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__26858__auto__);
});})(x32772_32785))
;

x32772_32785.isMounted = ((function (x32772_32785){
return (function (){
var this__26858__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__26858__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x32772_32785))
;

x32772_32785.componentWillMount = ((function (x32772_32785){
return (function (){
var this__26858__auto__ = this;
var indexer__26868__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__26858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__26868__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__26868__auto__,this__26858__auto__);
}
});})(x32772_32785))
;

x32772_32785.render = ((function (x32772_32785){
return (function (){
var this__26857__auto__ = this;
var this$ = this__26857__auto__;
var _STAR_reconciler_STAR_32775 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_32776 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_32777 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_32778 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_32779 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__26857__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__26857__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__26857__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__26857__auto__);

om.next._STAR_parent_STAR_ = this__26857__auto__;

try{var map__32780 = om.next.props.call(null,this$);
var map__32780__$1 = ((((!((map__32780 == null)))?((((map__32780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32780):map__32780);
var lst = cljs.core.get.call(null,map__32780__$1,new cljs.core.Keyword("wiki","lst","wiki/lst",270705683));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"AutoCompleter"))),om.util.force_children.call(null,(function (){var G__32782 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloudxmark.core.search_field.call(null,this$,new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648).cljs$core$IFn$_invoke$arity$1(om.next.get_params.call(null,this$)),new cljs.core.Keyword(null,"wiki","wiki",1946329928))], null);
if(!(cljs.core.empty_QMARK_.call(null,lst))){
return cljs.core.conj.call(null,G__32782,cloudxmark.core.result_list.call(null,lst));
} else {
return G__32782;
}
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_32779;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_32778;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_32777;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_32776;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_32775;
}});})(x32772_32785))
;


cloudxmark.core.AutoCompleter.prototype.constructor = cloudxmark.core.AutoCompleter;

cloudxmark.core.AutoCompleter.prototype.constructor.displayName = "cloudxmark.core/AutoCompleter";

cloudxmark.core.AutoCompleter.prototype.om$isComponent = true;

var x32783_32789 = cloudxmark.core.AutoCompleter;
x32783_32789.om$next$IQueryParams$ = true;

x32783_32789.om$next$IQueryParams$params$arity$1 = ((function (x32783_32789){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648),""], null);
});})(x32783_32789))
;

x32783_32789.om$next$IQuery$ = true;

x32783_32789.om$next$IQuery$query$arity$1 = ((function (x32783_32789){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?wiki-query","?wiki-query",-1723016161,null)], null))], null);
});})(x32783_32789))
;


var x32784_32790 = cloudxmark.core.AutoCompleter.prototype;
x32784_32790.om$next$IQueryParams$ = true;

x32784_32790.om$next$IQueryParams$params$arity$1 = ((function (x32784_32790){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648),""], null);
});})(x32784_32790))
;

x32784_32790.om$next$IQuery$ = true;

x32784_32790.om$next$IQuery$query$arity$1 = ((function (x32784_32790){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?wiki-query","?wiki-query",-1723016161,null)], null))], null);
});})(x32784_32790))
;


cloudxmark.core.AutoCompleter.cljs$lang$type = true;

cloudxmark.core.AutoCompleter.cljs$lang$ctorStr = "cloudxmark.core/AutoCompleter";

cloudxmark.core.AutoCompleter.cljs$lang$ctorPrWriter = (function (this__26959__auto__,writer__26960__auto__,opt__26961__auto__){
return cljs.core._write.call(null,writer__26960__auto__,"cloudxmark.core/AutoCompleter");
});
cloudxmark.core.send_to_chan = (function cloudxmark$core$send_to_chan(c){
return (function (p__32804,cb){
var map__32805 = p__32804;
var map__32805__$1 = ((((!((map__32805 == null)))?((((map__32805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32805):map__32805);
var wiki_search = cljs.core.get.call(null,map__32805__$1,new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122));
var lst_search = cljs.core.get.call(null,map__32805__$1,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
if(cljs.core.truth_(wiki_search)){
var map__32807 = om.next.query__GT_ast.call(null,wiki_search);
var map__32807__$1 = ((((!((map__32807 == null)))?((((map__32807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32807):map__32807);
var vec__32808 = cljs.core.get.call(null,map__32807__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var wiki_search__$1 = cljs.core.nth.call(null,vec__32808,(0),null);
var dontcare = cljs.core.println.call(null,[cljs.core.str(wiki_search__$1)].join(''));
var query_params = cljs.core.get_in.call(null,wiki_search__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"query","query",-1288509510)], null));
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122),query_params,cb], null));
} else {
if(cljs.core.truth_(lst_search)){
var map__32812 = om.next.query__GT_ast.call(null,lst_search);
var map__32812__$1 = ((((!((map__32812 == null)))?((((map__32812.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32812.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32812):map__32812);
var vec__32813 = cljs.core.get.call(null,map__32812__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var lst_search__$1 = cljs.core.nth.call(null,vec__32813,(0),null);
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
var map__32821 = result;
var map__32821__$1 = ((((!((map__32821 == null)))?((((map__32821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32821):map__32821);
var lsts = cljs.core.get.call(null,map__32821__$1,"lsts");
var user_id = cljs.core.get.call(null,map__32821__$1,"user_id");
var dontcare = cljs.core.println.call(null,[cljs.core.str("result: "),cljs.core.str(result)].join(''));
var json_status = cljs.core.get.call(null,result,"status");
var map__32822 = json_status;
var map__32822__$1 = ((((!((map__32822 == null)))?((((map__32822.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32822.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32822):map__32822);
var info = cljs.core.get.call(null,map__32822__$1,"info");
var warn = cljs.core.get.call(null,map__32822__$1,"warn");
var error = cljs.core.get.call(null,map__32822__$1,"error");
var status = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"warn","warn",-436710552),warn,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lsts","lsts",-459731441),lsts,new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"ver","ver",1683769565),ver,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.assoc.call(null,status,new cljs.core.Keyword(null,"id","id",-1388402092),status_id)], null);
});
cloudxmark.core.search_loop = (function cloudxmark$core$search_loop(c){
var c__26726__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26726__auto__){
return (function (){
var f__26727__auto__ = (function (){var switch__26703__auto__ = ((function (c__26726__auto__){
return (function (state_33694){
var state_val_33695 = (state_33694[(1)]);
if((state_val_33695 === (65))){
var state_33694__$1 = state_33694;
var statearr_33696_33819 = state_33694__$1;
(statearr_33696_33819[(2)] = false);

(statearr_33696_33819[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (70))){
var inst_33340 = (state_33694[(7)]);
var inst_33592 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33340);
var state_33694__$1 = state_33694;
var statearr_33697_33820 = state_33694__$1;
(statearr_33697_33820[(2)] = inst_33592);

(statearr_33697_33820[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (62))){
var inst_33339 = (state_33694[(8)]);
var inst_33622 = cljs.core._EQ_.call(null,inst_33339,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
var state_33694__$1 = state_33694;
if(inst_33622){
var statearr_33698_33821 = state_33694__$1;
(statearr_33698_33821[(1)] = (74));

} else {
var statearr_33699_33822 = state_33694__$1;
(statearr_33699_33822[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (74))){
var inst_33340 = (state_33694[(7)]);
var inst_33625 = [cljs.core.str("lst query data:"),cljs.core.str(inst_33340)].join('');
var inst_33626 = cljs.core.println.call(null,inst_33625);
var inst_33628 = (inst_33340 == null);
var inst_33629 = cljs.core.not.call(null,inst_33628);
var state_33694__$1 = (function (){var statearr_33700 = state_33694;
(statearr_33700[(9)] = inst_33626);

return statearr_33700;
})();
if(inst_33629){
var statearr_33701_33823 = state_33694__$1;
(statearr_33701_33823[(1)] = (77));

} else {
var statearr_33702_33824 = state_33694__$1;
(statearr_33702_33824[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (7))){
var inst_33687 = (state_33694[(2)]);
var state_33694__$1 = (function (){var statearr_33703 = state_33694;
(statearr_33703[(10)] = inst_33687);

return statearr_33703;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33694__$1,(90),c);
} else {
if((state_val_33695 === (59))){
var inst_33547 = (state_33694[(2)]);
var inst_33548 = cljs.core.get.call(null,inst_33547,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_33549 = cljs.core.get.call(null,inst_33547,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_33550 = cljs.core.get.call(null,inst_33547,new cljs.core.Keyword(null,"value","value",305978217));
var inst_33551 = [cljs.core.str("/addItem/"),cljs.core.str(inst_33548),cljs.core.str("/"),cljs.core.str(inst_33549),cljs.core.str("/"),cljs.core.str(inst_33550)].join('');
var inst_33552 = cloudxmark.core.jsonp.call(null,inst_33551);
var state_33694__$1 = state_33694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33694__$1,(60),inst_33552);
} else {
if((state_val_33695 === (86))){
var inst_33648 = (state_33694[(11)]);
var inst_33651 = (state_33694[(2)]);
var inst_33652 = cljs.core.js__GT_clj.call(null,inst_33651);
var inst_33653 = cloudxmark.core.convert_json_lsts_result.call(null,inst_33652,inst_33648,new cljs.core.Keyword(null,"refresh-lists","refresh-lists",27332375));
var inst_33654 = cljs.core.List.EMPTY;
var inst_33655 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_33656 = cljs.core._conj.call(null,inst_33654,inst_33655);
var inst_33657 = cljs.core.List.EMPTY;
var inst_33658 = cljs.core._conj.call(null,inst_33657,inst_33653);
var inst_33659 = cljs.core.concat.call(null,inst_33656,inst_33658);
var inst_33660 = cljs.core.seq.call(null,inst_33659);
var inst_33661 = cljs.core.sequence.call(null,inst_33660);
var inst_33662 = cljs.core.List.EMPTY;
var inst_33663 = cljs.core._conj.call(null,inst_33662,inst_33661);
var inst_33664 = cljs.core.concat.call(null,inst_33663);
var inst_33665 = cljs.core.seq.call(null,inst_33664);
var inst_33666 = cljs.core.sequence.call(null,inst_33665);
var inst_33667 = cljs.core.vec.call(null,inst_33666);
var inst_33668 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_33667);
var state_33694__$1 = state_33694;
var statearr_33704_33825 = state_33694__$1;
(statearr_33704_33825[(2)] = inst_33668);

(statearr_33704_33825[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (20))){
var inst_33402 = (state_33694[(2)]);
var inst_33403 = cljs.core.get.call(null,inst_33402,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var inst_33404 = cljs.core.get.call(null,inst_33402,new cljs.core.Keyword(null,"password","password",417022471));
var inst_33405 = cljs.core.get.call(null,inst_33402,new cljs.core.Keyword(null,"ver","ver",1683769565));
var inst_33406 = [cljs.core.str("/loginGetItems/"),cljs.core.str(inst_33403),cljs.core.str("/"),cljs.core.str(inst_33404)].join('');
var inst_33407 = cloudxmark.core.jsonp.call(null,inst_33406);
var state_33694__$1 = (function (){var statearr_33705 = state_33694;
(statearr_33705[(12)] = inst_33405);

return statearr_33705;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33694__$1,(21),inst_33407);
} else {
if((state_val_33695 === (72))){
var inst_33595 = (state_33694[(2)]);
var inst_33596 = cljs.core.get.call(null,inst_33595,new cljs.core.Keyword(null,"lst-id","lst-id",296172009));
var inst_33597 = cljs.core.get.call(null,inst_33595,new cljs.core.Keyword(null,"orig-name","orig-name",-1968092053));
var inst_33598 = cljs.core.get.call(null,inst_33595,new cljs.core.Keyword(null,"col-name","col-name",-1773922845));
var inst_33599 = cljs.core.get.call(null,inst_33595,new cljs.core.Keyword(null,"value","value",305978217));
var inst_33600 = [cljs.core.str("/updateItem/"),cljs.core.str(inst_33596),cljs.core.str("/"),cljs.core.str(inst_33597),cljs.core.str("/"),cljs.core.str(inst_33598),cljs.core.str("/"),cljs.core.str(inst_33599)].join('');
var inst_33601 = cloudxmark.core.jsonp.call(null,inst_33600);
var state_33694__$1 = state_33694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33694__$1,(73),inst_33601);
} else {
if((state_val_33695 === (58))){
var inst_33340 = (state_33694[(7)]);
var state_33694__$1 = state_33694;
var statearr_33706_33826 = state_33694__$1;
(statearr_33706_33826[(2)] = inst_33340);

(statearr_33706_33826[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (60))){
var inst_33554 = (state_33694[(2)]);
var inst_33555 = cljs.core.js__GT_clj.call(null,inst_33554);
var inst_33556 = cloudxmark.core.convert_json_lsts_result.call(null,inst_33555,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_33557 = cljs.core.List.EMPTY;
var inst_33558 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_33559 = cljs.core._conj.call(null,inst_33557,inst_33558);
var inst_33560 = cljs.core.List.EMPTY;
var inst_33561 = cljs.core._conj.call(null,inst_33560,inst_33556);
var inst_33562 = cljs.core.concat.call(null,inst_33559,inst_33561);
var inst_33563 = cljs.core.seq.call(null,inst_33562);
var inst_33564 = cljs.core.sequence.call(null,inst_33563);
var inst_33565 = cljs.core.List.EMPTY;
var inst_33566 = cljs.core._conj.call(null,inst_33565,inst_33564);
var inst_33567 = cljs.core.concat.call(null,inst_33566);
var inst_33568 = cljs.core.seq.call(null,inst_33567);
var inst_33569 = cljs.core.sequence.call(null,inst_33568);
var inst_33570 = cljs.core.vec.call(null,inst_33569);
var inst_33571 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_33570);
var state_33694__$1 = state_33694;
var statearr_33707_33827 = state_33694__$1;
(statearr_33707_33827[(2)] = inst_33571);

(statearr_33707_33827[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (27))){
var state_33694__$1 = state_33694;
var statearr_33708_33828 = state_33694__$1;
(statearr_33708_33828[(2)] = false);

(statearr_33708_33828[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (1))){
var state_33694__$1 = state_33694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33694__$1,(2),c);
} else {
if((state_val_33695 === (69))){
var inst_33587 = (state_33694[(2)]);
var state_33694__$1 = state_33694;
var statearr_33709_33829 = state_33694__$1;
(statearr_33709_33829[(2)] = inst_33587);

(statearr_33709_33829[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (24))){
var inst_33683 = (state_33694[(2)]);
var state_33694__$1 = state_33694;
var statearr_33710_33830 = state_33694__$1;
(statearr_33710_33830[(2)] = inst_33683);

(statearr_33710_33830[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (55))){
var state_33694__$1 = state_33694;
var statearr_33711_33831 = state_33694__$1;
(statearr_33711_33831[(2)] = false);

(statearr_33711_33831[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (85))){
var inst_33646 = (state_33694[(2)]);
var inst_33647 = cljs.core.get.call(null,inst_33646,new cljs.core.Keyword(null,"query-user","query-user",-1501080168));
var inst_33648 = cljs.core.get.call(null,inst_33646,new cljs.core.Keyword(null,"query-ver","query-ver",-2057502099));
var inst_33649 = cloudxmark.core.jsonp.call(null,"/getItems");
var state_33694__$1 = (function (){var statearr_33712 = state_33694;
(statearr_33712[(13)] = inst_33647);

(statearr_33712[(11)] = inst_33648);

return statearr_33712;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33694__$1,(86),inst_33649);
} else {
if((state_val_33695 === (39))){
var state_33694__$1 = state_33694;
var statearr_33713_33832 = state_33694__$1;
(statearr_33713_33832[(2)] = false);

(statearr_33713_33832[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (88))){
var state_33694__$1 = state_33694;
var statearr_33714_33833 = state_33694__$1;
(statearr_33714_33833[(2)] = null);

(statearr_33714_33833[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (46))){
var inst_33500 = (state_33694[(2)]);
var inst_33501 = cljs.core.get.call(null,inst_33500,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_33502 = cljs.core.get.call(null,inst_33500,new cljs.core.Keyword(null,"description","description",-1428560544));
var inst_33503 = [cljs.core.str("/addLst/"),cljs.core.str(inst_33501),cljs.core.str("/"),cljs.core.str(inst_33502)].join('');
var inst_33504 = cloudxmark.core.jsonp.call(null,inst_33503);
var state_33694__$1 = state_33694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33694__$1,(47),inst_33504);
} else {
if((state_val_33695 === (4))){
var inst_33692 = (state_33694[(2)]);
var state_33694__$1 = state_33694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33694__$1,inst_33692);
} else {
if((state_val_33695 === (77))){
var inst_33340 = (state_33694[(7)]);
var inst_33631 = inst_33340.cljs$lang$protocol_mask$partition0$;
var inst_33632 = (inst_33631 & (64));
var inst_33633 = inst_33340.cljs$core$ISeq$;
var inst_33634 = (inst_33632) || (inst_33633);
var state_33694__$1 = state_33694;
if(cljs.core.truth_(inst_33634)){
var statearr_33715_33834 = state_33694__$1;
(statearr_33715_33834[(1)] = (80));

} else {
var statearr_33716_33835 = state_33694__$1;
(statearr_33716_33835[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (54))){
var state_33694__$1 = state_33694;
var statearr_33717_33836 = state_33694__$1;
(statearr_33717_33836[(2)] = true);

(statearr_33717_33836[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (15))){
var state_33694__$1 = state_33694;
var statearr_33718_33837 = state_33694__$1;
(statearr_33718_33837[(2)] = true);

(statearr_33718_33837[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (48))){
var inst_33340 = (state_33694[(7)]);
var inst_33529 = (inst_33340 == null);
var inst_33530 = cljs.core.not.call(null,inst_33529);
var state_33694__$1 = state_33694;
if(inst_33530){
var statearr_33719_33838 = state_33694__$1;
(statearr_33719_33838[(1)] = (51));

} else {
var statearr_33720_33839 = state_33694__$1;
(statearr_33720_33839[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (50))){
var inst_33679 = (state_33694[(2)]);
var state_33694__$1 = state_33694;
var statearr_33721_33840 = state_33694__$1;
(statearr_33721_33840[(2)] = inst_33679);

(statearr_33721_33840[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (75))){
var state_33694__$1 = state_33694;
var statearr_33722_33841 = state_33694__$1;
(statearr_33722_33841[(1)] = (87));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (21))){
var inst_33405 = (state_33694[(12)]);
var inst_33409 = (state_33694[(2)]);
var inst_33410 = cljs.core.js__GT_clj.call(null,inst_33409);
var inst_33411 = cloudxmark.core.convert_json_lsts_result.call(null,inst_33410,inst_33405,new cljs.core.Keyword(null,"login","login",55217519));
var inst_33412 = cljs.core.List.EMPTY;
var inst_33413 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_33414 = cljs.core._conj.call(null,inst_33412,inst_33413);
var inst_33415 = cljs.core.List.EMPTY;
var inst_33416 = cljs.core._conj.call(null,inst_33415,inst_33411);
var inst_33417 = cljs.core.concat.call(null,inst_33414,inst_33416);
var inst_33418 = cljs.core.seq.call(null,inst_33417);
var inst_33419 = cljs.core.sequence.call(null,inst_33418);
var inst_33420 = cljs.core.List.EMPTY;
var inst_33421 = cljs.core._conj.call(null,inst_33420,inst_33419);
var inst_33422 = cljs.core.concat.call(null,inst_33421);
var inst_33423 = cljs.core.seq.call(null,inst_33422);
var inst_33424 = cljs.core.sequence.call(null,inst_33423);
var inst_33425 = cljs.core.vec.call(null,inst_33424);
var inst_33426 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_33425);
var state_33694__$1 = state_33694;
var statearr_33724_33842 = state_33694__$1;
(statearr_33724_33842[(2)] = inst_33426);

(statearr_33724_33842[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (31))){
var inst_33447 = (state_33694[(2)]);
var state_33694__$1 = state_33694;
var statearr_33725_33843 = state_33694__$1;
(statearr_33725_33843[(2)] = inst_33447);

(statearr_33725_33843[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (32))){
var inst_33435 = (state_33694[(14)]);
var inst_33452 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33435);
var state_33694__$1 = state_33694;
var statearr_33726_33844 = state_33694__$1;
(statearr_33726_33844[(2)] = inst_33452);

(statearr_33726_33844[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (40))){
var inst_33495 = (state_33694[(2)]);
var state_33694__$1 = state_33694;
if(cljs.core.truth_(inst_33495)){
var statearr_33727_33845 = state_33694__$1;
(statearr_33727_33845[(1)] = (44));

} else {
var statearr_33728_33846 = state_33694__$1;
(statearr_33728_33846[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (56))){
var inst_33539 = (state_33694[(2)]);
var state_33694__$1 = state_33694;
var statearr_33729_33847 = state_33694__$1;
(statearr_33729_33847[(2)] = inst_33539);

(statearr_33729_33847[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (33))){
var inst_33435 = (state_33694[(14)]);
var state_33694__$1 = state_33694;
var statearr_33730_33848 = state_33694__$1;
(statearr_33730_33848[(2)] = inst_33435);

(statearr_33730_33848[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (13))){
var state_33694__$1 = state_33694;
var statearr_33731_33849 = state_33694__$1;
(statearr_33731_33849[(2)] = false);

(statearr_33731_33849[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (22))){
var inst_33431 = cloudxmark.core.jsonp.call(null,"/logout");
var state_33694__$1 = state_33694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33694__$1,(25),inst_33431);
} else {
if((state_val_33695 === (90))){
var inst_33689 = (state_33694[(2)]);
var inst_33334 = inst_33689;
var state_33694__$1 = (function (){var statearr_33732 = state_33694;
(statearr_33732[(15)] = inst_33334);

return statearr_33732;
})();
var statearr_33733_33850 = state_33694__$1;
(statearr_33733_33850[(2)] = null);

(statearr_33733_33850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (36))){
var inst_33339 = (state_33694[(8)]);
var inst_33525 = cljs.core._EQ_.call(null,inst_33339,new cljs.core.Keyword(null,"lst-add-item","lst-add-item",-1337170134));
var state_33694__$1 = state_33694;
if(inst_33525){
var statearr_33734_33851 = state_33694__$1;
(statearr_33734_33851[(1)] = (48));

} else {
var statearr_33735_33852 = state_33694__$1;
(statearr_33735_33852[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (41))){
var state_33694__$1 = state_33694;
var statearr_33736_33853 = state_33694__$1;
(statearr_33736_33853[(2)] = true);

(statearr_33736_33853[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (89))){
var inst_33673 = (state_33694[(2)]);
var state_33694__$1 = state_33694;
var statearr_33737_33854 = state_33694__$1;
(statearr_33737_33854[(2)] = inst_33673);

(statearr_33737_33854[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (43))){
var inst_33492 = (state_33694[(2)]);
var state_33694__$1 = state_33694;
var statearr_33738_33855 = state_33694__$1;
(statearr_33738_33855[(2)] = inst_33492);

(statearr_33738_33855[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (61))){
var inst_33340 = (state_33694[(7)]);
var inst_33577 = (inst_33340 == null);
var inst_33578 = cljs.core.not.call(null,inst_33577);
var state_33694__$1 = state_33694;
if(inst_33578){
var statearr_33739_33856 = state_33694__$1;
(statearr_33739_33856[(1)] = (64));

} else {
var statearr_33740_33857 = state_33694__$1;
(statearr_33740_33857[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (29))){
var state_33694__$1 = state_33694;
var statearr_33741_33858 = state_33694__$1;
(statearr_33741_33858[(2)] = true);

(statearr_33741_33858[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (44))){
var inst_33340 = (state_33694[(7)]);
var inst_33497 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33340);
var state_33694__$1 = state_33694;
var statearr_33742_33859 = state_33694__$1;
(statearr_33742_33859[(2)] = inst_33497);

(statearr_33742_33859[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (6))){
var inst_33339 = (state_33694[(8)]);
var inst_33378 = cljs.core._EQ_.call(null,inst_33339,new cljs.core.Keyword(null,"lst-login","lst-login",246498853));
var state_33694__$1 = state_33694;
if(inst_33378){
var statearr_33743_33860 = state_33694__$1;
(statearr_33743_33860[(1)] = (9));

} else {
var statearr_33744_33861 = state_33694__$1;
(statearr_33744_33861[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (28))){
var inst_33450 = (state_33694[(2)]);
var state_33694__$1 = state_33694;
if(cljs.core.truth_(inst_33450)){
var statearr_33745_33862 = state_33694__$1;
(statearr_33745_33862[(1)] = (32));

} else {
var statearr_33746_33863 = state_33694__$1;
(statearr_33746_33863[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (64))){
var inst_33340 = (state_33694[(7)]);
var inst_33580 = inst_33340.cljs$lang$protocol_mask$partition0$;
var inst_33581 = (inst_33580 & (64));
var inst_33582 = inst_33340.cljs$core$ISeq$;
var inst_33583 = (inst_33581) || (inst_33582);
var state_33694__$1 = state_33694;
if(cljs.core.truth_(inst_33583)){
var statearr_33747_33864 = state_33694__$1;
(statearr_33747_33864[(1)] = (67));

} else {
var statearr_33748_33865 = state_33694__$1;
(statearr_33748_33865[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (51))){
var inst_33340 = (state_33694[(7)]);
var inst_33532 = inst_33340.cljs$lang$protocol_mask$partition0$;
var inst_33533 = (inst_33532 & (64));
var inst_33534 = inst_33340.cljs$core$ISeq$;
var inst_33535 = (inst_33533) || (inst_33534);
var state_33694__$1 = state_33694;
if(cljs.core.truth_(inst_33535)){
var statearr_33749_33866 = state_33694__$1;
(statearr_33749_33866[(1)] = (54));

} else {
var statearr_33750_33867 = state_33694__$1;
(statearr_33750_33867[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (25))){
var inst_33435 = (state_33694[(14)]);
var inst_33433 = (state_33694[(2)]);
var inst_33434 = cljs.core.js__GT_clj.call(null,inst_33433);
var inst_33435__$1 = cljs.core.get.call(null,inst_33434,"status");
var inst_33437 = (inst_33435__$1 == null);
var inst_33438 = cljs.core.not.call(null,inst_33437);
var state_33694__$1 = (function (){var statearr_33751 = state_33694;
(statearr_33751[(14)] = inst_33435__$1);

return statearr_33751;
})();
if(inst_33438){
var statearr_33752_33868 = state_33694__$1;
(statearr_33752_33868[(1)] = (26));

} else {
var statearr_33753_33869 = state_33694__$1;
(statearr_33753_33869[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (34))){
var inst_33455 = (state_33694[(2)]);
var inst_33456 = cljs.core.get.call(null,inst_33455,"info");
var inst_33457 = cljs.core.get.call(null,inst_33455,"warn");
var inst_33458 = cljs.core.get.call(null,inst_33455,"error");
var inst_33459 = [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_33460 = [new cljs.core.Keyword(null,"logout","logout",1418564329),inst_33456,inst_33457,inst_33458];
var inst_33461 = cljs.core.PersistentHashMap.fromArrays(inst_33459,inst_33460);
var inst_33462 = cljs.core.List.EMPTY;
var inst_33463 = new cljs.core.Symbol("lst","set-status","lst/set-status",1436453365,null);
var inst_33464 = cljs.core._conj.call(null,inst_33462,inst_33463);
var inst_33465 = cljs.core.List.EMPTY;
var inst_33466 = cljs.core._conj.call(null,inst_33465,inst_33461);
var inst_33467 = cljs.core.concat.call(null,inst_33464,inst_33466);
var inst_33468 = cljs.core.seq.call(null,inst_33467);
var inst_33469 = cljs.core.sequence.call(null,inst_33468);
var inst_33470 = cljs.core.List.EMPTY;
var inst_33471 = cljs.core._conj.call(null,inst_33470,inst_33469);
var inst_33472 = cljs.core.concat.call(null,inst_33471);
var inst_33473 = cljs.core.seq.call(null,inst_33472);
var inst_33474 = cljs.core.sequence.call(null,inst_33473);
var inst_33475 = cljs.core.vec.call(null,inst_33474);
var inst_33476 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_33475);
var state_33694__$1 = state_33694;
var statearr_33754_33870 = state_33694__$1;
(statearr_33754_33870[(2)] = inst_33476);

(statearr_33754_33870[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (17))){
var inst_33394 = (state_33694[(2)]);
var state_33694__$1 = state_33694;
var statearr_33755_33871 = state_33694__$1;
(statearr_33755_33871[(2)] = inst_33394);

(statearr_33755_33871[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (3))){
var inst_33334 = (state_33694[(15)]);
var inst_33339 = (state_33694[(8)]);
var inst_33339__$1 = cljs.core.nth.call(null,inst_33334,(0),null);
var inst_33340 = cljs.core.nth.call(null,inst_33334,(1),null);
var inst_33341 = cljs.core.nth.call(null,inst_33334,(2),null);
var inst_33342 = cljs.core._EQ_.call(null,inst_33339__$1,new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122));
var state_33694__$1 = (function (){var statearr_33756 = state_33694;
(statearr_33756[(16)] = inst_33341);

(statearr_33756[(7)] = inst_33340);

(statearr_33756[(8)] = inst_33339__$1);

return statearr_33756;
})();
if(inst_33342){
var statearr_33757_33872 = state_33694__$1;
(statearr_33757_33872[(1)] = (5));

} else {
var statearr_33758_33873 = state_33694__$1;
(statearr_33758_33873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (12))){
var inst_33340 = (state_33694[(7)]);
var inst_33387 = inst_33340.cljs$lang$protocol_mask$partition0$;
var inst_33388 = (inst_33387 & (64));
var inst_33389 = inst_33340.cljs$core$ISeq$;
var inst_33390 = (inst_33388) || (inst_33389);
var state_33694__$1 = state_33694;
if(cljs.core.truth_(inst_33390)){
var statearr_33759_33874 = state_33694__$1;
(statearr_33759_33874[(1)] = (15));

} else {
var statearr_33760_33875 = state_33694__$1;
(statearr_33760_33875[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (2))){
var inst_33330 = (state_33694[(2)]);
var inst_33331 = cljs.core.nth.call(null,inst_33330,(0),null);
var inst_33332 = cljs.core.nth.call(null,inst_33330,(1),null);
var inst_33333 = cljs.core.nth.call(null,inst_33330,(2),null);
var inst_33334 = inst_33330;
var state_33694__$1 = (function (){var statearr_33761 = state_33694;
(statearr_33761[(15)] = inst_33334);

(statearr_33761[(17)] = inst_33332);

(statearr_33761[(18)] = inst_33331);

(statearr_33761[(19)] = inst_33333);

return statearr_33761;
})();
var statearr_33762_33876 = state_33694__$1;
(statearr_33762_33876[(2)] = null);

(statearr_33762_33876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (66))){
var inst_33590 = (state_33694[(2)]);
var state_33694__$1 = state_33694;
if(cljs.core.truth_(inst_33590)){
var statearr_33763_33877 = state_33694__$1;
(statearr_33763_33877[(1)] = (70));

} else {
var statearr_33764_33878 = state_33694__$1;
(statearr_33764_33878[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (23))){
var inst_33339 = (state_33694[(8)]);
var inst_33478 = cljs.core._EQ_.call(null,inst_33339,new cljs.core.Keyword(null,"lst-add-lst","lst-add-lst",-1736593626));
var state_33694__$1 = state_33694;
if(inst_33478){
var statearr_33765_33879 = state_33694__$1;
(statearr_33765_33879[(1)] = (35));

} else {
var statearr_33766_33880 = state_33694__$1;
(statearr_33766_33880[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (47))){
var inst_33506 = (state_33694[(2)]);
var inst_33507 = cljs.core.js__GT_clj.call(null,inst_33506);
var inst_33508 = cloudxmark.core.convert_json_lsts_result.call(null,inst_33507,null,new cljs.core.Keyword(null,"add-lst","add-lst",1884447483));
var inst_33509 = cljs.core.List.EMPTY;
var inst_33510 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_33511 = cljs.core._conj.call(null,inst_33509,inst_33510);
var inst_33512 = cljs.core.List.EMPTY;
var inst_33513 = cljs.core._conj.call(null,inst_33512,inst_33508);
var inst_33514 = cljs.core.concat.call(null,inst_33511,inst_33513);
var inst_33515 = cljs.core.seq.call(null,inst_33514);
var inst_33516 = cljs.core.sequence.call(null,inst_33515);
var inst_33517 = cljs.core.List.EMPTY;
var inst_33518 = cljs.core._conj.call(null,inst_33517,inst_33516);
var inst_33519 = cljs.core.concat.call(null,inst_33518);
var inst_33520 = cljs.core.seq.call(null,inst_33519);
var inst_33521 = cljs.core.sequence.call(null,inst_33520);
var inst_33522 = cljs.core.vec.call(null,inst_33521);
var inst_33523 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_33522);
var state_33694__$1 = state_33694;
var statearr_33767_33881 = state_33694__$1;
(statearr_33767_33881[(2)] = inst_33523);

(statearr_33767_33881[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (35))){
var inst_33340 = (state_33694[(7)]);
var inst_33482 = (inst_33340 == null);
var inst_33483 = cljs.core.not.call(null,inst_33482);
var state_33694__$1 = state_33694;
if(inst_33483){
var statearr_33768_33882 = state_33694__$1;
(statearr_33768_33882[(1)] = (38));

} else {
var statearr_33769_33883 = state_33694__$1;
(statearr_33769_33883[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (82))){
var inst_33638 = (state_33694[(2)]);
var state_33694__$1 = state_33694;
var statearr_33770_33884 = state_33694__$1;
(statearr_33770_33884[(2)] = inst_33638);

(statearr_33770_33884[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (76))){
var inst_33675 = (state_33694[(2)]);
var state_33694__$1 = state_33694;
var statearr_33771_33885 = state_33694__$1;
(statearr_33771_33885[(2)] = inst_33675);

(statearr_33771_33885[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (19))){
var inst_33340 = (state_33694[(7)]);
var state_33694__$1 = state_33694;
var statearr_33772_33886 = state_33694__$1;
(statearr_33772_33886[(2)] = inst_33340);

(statearr_33772_33886[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (57))){
var inst_33340 = (state_33694[(7)]);
var inst_33544 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33340);
var state_33694__$1 = state_33694;
var statearr_33773_33887 = state_33694__$1;
(statearr_33773_33887[(2)] = inst_33544);

(statearr_33773_33887[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (68))){
var state_33694__$1 = state_33694;
var statearr_33774_33888 = state_33694__$1;
(statearr_33774_33888[(2)] = false);

(statearr_33774_33888[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (11))){
var inst_33685 = (state_33694[(2)]);
var state_33694__$1 = state_33694;
var statearr_33775_33889 = state_33694__$1;
(statearr_33775_33889[(2)] = inst_33685);

(statearr_33775_33889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (9))){
var inst_33340 = (state_33694[(7)]);
var inst_33381 = [cljs.core.str("lst login data:"),cljs.core.str(inst_33340)].join('');
var inst_33382 = cljs.core.println.call(null,inst_33381);
var inst_33384 = (inst_33340 == null);
var inst_33385 = cljs.core.not.call(null,inst_33384);
var state_33694__$1 = (function (){var statearr_33776 = state_33694;
(statearr_33776[(20)] = inst_33382);

return statearr_33776;
})();
if(inst_33385){
var statearr_33777_33890 = state_33694__$1;
(statearr_33777_33890[(1)] = (12));

} else {
var statearr_33778_33891 = state_33694__$1;
(statearr_33778_33891[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (5))){
var inst_33340 = (state_33694[(7)]);
var inst_33347 = [cljs.core.str(cloudxmark.core.wiki_url),cljs.core.str(inst_33340)].join('');
var inst_33348 = cloudxmark.core.jsonp.call(null,inst_33347);
var state_33694__$1 = state_33694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33694__$1,(8),inst_33348);
} else {
if((state_val_33695 === (83))){
var inst_33340 = (state_33694[(7)]);
var inst_33643 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33340);
var state_33694__$1 = state_33694;
var statearr_33779_33892 = state_33694__$1;
(statearr_33779_33892[(2)] = inst_33643);

(statearr_33779_33892[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (14))){
var inst_33397 = (state_33694[(2)]);
var state_33694__$1 = state_33694;
if(cljs.core.truth_(inst_33397)){
var statearr_33780_33893 = state_33694__$1;
(statearr_33780_33893[(1)] = (18));

} else {
var statearr_33781_33894 = state_33694__$1;
(statearr_33781_33894[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (45))){
var inst_33340 = (state_33694[(7)]);
var state_33694__$1 = state_33694;
var statearr_33782_33895 = state_33694__$1;
(statearr_33782_33895[(2)] = inst_33340);

(statearr_33782_33895[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (53))){
var inst_33542 = (state_33694[(2)]);
var state_33694__$1 = state_33694;
if(cljs.core.truth_(inst_33542)){
var statearr_33783_33896 = state_33694__$1;
(statearr_33783_33896[(1)] = (57));

} else {
var statearr_33784_33897 = state_33694__$1;
(statearr_33784_33897[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (78))){
var state_33694__$1 = state_33694;
var statearr_33785_33898 = state_33694__$1;
(statearr_33785_33898[(2)] = false);

(statearr_33785_33898[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (26))){
var inst_33435 = (state_33694[(14)]);
var inst_33440 = inst_33435.cljs$lang$protocol_mask$partition0$;
var inst_33441 = (inst_33440 & (64));
var inst_33442 = inst_33435.cljs$core$ISeq$;
var inst_33443 = (inst_33441) || (inst_33442);
var state_33694__$1 = state_33694;
if(cljs.core.truth_(inst_33443)){
var statearr_33786_33899 = state_33694__$1;
(statearr_33786_33899[(1)] = (29));

} else {
var statearr_33787_33900 = state_33694__$1;
(statearr_33787_33900[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (16))){
var state_33694__$1 = state_33694;
var statearr_33788_33901 = state_33694__$1;
(statearr_33788_33901[(2)] = false);

(statearr_33788_33901[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (81))){
var state_33694__$1 = state_33694;
var statearr_33789_33902 = state_33694__$1;
(statearr_33789_33902[(2)] = false);

(statearr_33789_33902[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (79))){
var inst_33641 = (state_33694[(2)]);
var state_33694__$1 = state_33694;
if(cljs.core.truth_(inst_33641)){
var statearr_33790_33903 = state_33694__$1;
(statearr_33790_33903[(1)] = (83));

} else {
var statearr_33791_33904 = state_33694__$1;
(statearr_33791_33904[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (38))){
var inst_33340 = (state_33694[(7)]);
var inst_33485 = inst_33340.cljs$lang$protocol_mask$partition0$;
var inst_33486 = (inst_33485 & (64));
var inst_33487 = inst_33340.cljs$core$ISeq$;
var inst_33488 = (inst_33486) || (inst_33487);
var state_33694__$1 = state_33694;
if(cljs.core.truth_(inst_33488)){
var statearr_33792_33905 = state_33694__$1;
(statearr_33792_33905[(1)] = (41));

} else {
var statearr_33793_33906 = state_33694__$1;
(statearr_33793_33906[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (87))){
var state_33694__$1 = state_33694;
var statearr_33794_33907 = state_33694__$1;
(statearr_33794_33907[(2)] = null);

(statearr_33794_33907[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (30))){
var state_33694__$1 = state_33694;
var statearr_33795_33908 = state_33694__$1;
(statearr_33795_33908[(2)] = false);

(statearr_33795_33908[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (73))){
var inst_33603 = (state_33694[(2)]);
var inst_33604 = cljs.core.js__GT_clj.call(null,inst_33603);
var inst_33605 = cloudxmark.core.convert_json_lsts_result.call(null,inst_33604,null,new cljs.core.Keyword(null,"add-item","add-item",715813891));
var inst_33606 = cljs.core.List.EMPTY;
var inst_33607 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_33608 = cljs.core._conj.call(null,inst_33606,inst_33607);
var inst_33609 = cljs.core.List.EMPTY;
var inst_33610 = cljs.core._conj.call(null,inst_33609,inst_33605);
var inst_33611 = cljs.core.concat.call(null,inst_33608,inst_33610);
var inst_33612 = cljs.core.seq.call(null,inst_33611);
var inst_33613 = cljs.core.sequence.call(null,inst_33612);
var inst_33614 = cljs.core.List.EMPTY;
var inst_33615 = cljs.core._conj.call(null,inst_33614,inst_33613);
var inst_33616 = cljs.core.concat.call(null,inst_33615);
var inst_33617 = cljs.core.seq.call(null,inst_33616);
var inst_33618 = cljs.core.sequence.call(null,inst_33617);
var inst_33619 = cljs.core.vec.call(null,inst_33618);
var inst_33620 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_33619);
var state_33694__$1 = state_33694;
var statearr_33796_33909 = state_33694__$1;
(statearr_33796_33909[(2)] = inst_33620);

(statearr_33796_33909[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (10))){
var inst_33339 = (state_33694[(8)]);
var inst_33428 = cljs.core._EQ_.call(null,inst_33339,new cljs.core.Keyword(null,"lst-logout","lst-logout",-72866521));
var state_33694__$1 = state_33694;
if(inst_33428){
var statearr_33797_33910 = state_33694__$1;
(statearr_33797_33910[(1)] = (22));

} else {
var statearr_33798_33911 = state_33694__$1;
(statearr_33798_33911[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (18))){
var inst_33340 = (state_33694[(7)]);
var inst_33399 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33340);
var state_33694__$1 = state_33694;
var statearr_33799_33912 = state_33694__$1;
(statearr_33799_33912[(2)] = inst_33399);

(statearr_33799_33912[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (52))){
var state_33694__$1 = state_33694;
var statearr_33800_33913 = state_33694__$1;
(statearr_33800_33913[(2)] = false);

(statearr_33800_33913[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (67))){
var state_33694__$1 = state_33694;
var statearr_33801_33914 = state_33694__$1;
(statearr_33801_33914[(2)] = true);

(statearr_33801_33914[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (71))){
var inst_33340 = (state_33694[(7)]);
var state_33694__$1 = state_33694;
var statearr_33802_33915 = state_33694__$1;
(statearr_33802_33915[(2)] = inst_33340);

(statearr_33802_33915[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (42))){
var state_33694__$1 = state_33694;
var statearr_33803_33916 = state_33694__$1;
(statearr_33803_33916[(2)] = false);

(statearr_33803_33916[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (80))){
var state_33694__$1 = state_33694;
var statearr_33804_33917 = state_33694__$1;
(statearr_33804_33917[(2)] = true);

(statearr_33804_33917[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (37))){
var inst_33681 = (state_33694[(2)]);
var state_33694__$1 = state_33694;
var statearr_33805_33918 = state_33694__$1;
(statearr_33805_33918[(2)] = inst_33681);

(statearr_33805_33918[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (63))){
var inst_33677 = (state_33694[(2)]);
var state_33694__$1 = state_33694;
var statearr_33806_33919 = state_33694__$1;
(statearr_33806_33919[(2)] = inst_33677);

(statearr_33806_33919[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (8))){
var inst_33350 = (state_33694[(2)]);
var inst_33351 = cljs.core.nth.call(null,inst_33350,(0),null);
var inst_33352 = cljs.core.nth.call(null,inst_33350,(1),null);
var inst_33353 = cljs.core.js__GT_clj.call(null,inst_33352);
var inst_33354 = cljs.core.List.EMPTY;
var inst_33355 = new cljs.core.Symbol("wiki","set-lst","wiki/set-lst",-1532354153,null);
var inst_33356 = cljs.core._conj.call(null,inst_33354,inst_33355);
var inst_33357 = cljs.core.List.EMPTY;
var inst_33358 = cljs.core._conj.call(null,inst_33357,new cljs.core.Keyword(null,"lst","lst",269745987));
var inst_33359 = cljs.core.List.EMPTY;
var inst_33360 = cljs.core._conj.call(null,inst_33359,inst_33353);
var inst_33361 = cljs.core.concat.call(null,inst_33358,inst_33360);
var inst_33362 = cljs.core.seq.call(null,inst_33361);
var inst_33363 = cljs.core.sequence.call(null,inst_33362);
var inst_33364 = cljs.core.apply.call(null,cljs.core.array_map,inst_33363);
var inst_33365 = cljs.core.List.EMPTY;
var inst_33366 = cljs.core._conj.call(null,inst_33365,inst_33364);
var inst_33367 = cljs.core.concat.call(null,inst_33356,inst_33366);
var inst_33368 = cljs.core.seq.call(null,inst_33367);
var inst_33369 = cljs.core.sequence.call(null,inst_33368);
var inst_33370 = cljs.core.List.EMPTY;
var inst_33371 = cljs.core._conj.call(null,inst_33370,inst_33369);
var inst_33372 = cljs.core.concat.call(null,inst_33371);
var inst_33373 = cljs.core.seq.call(null,inst_33372);
var inst_33374 = cljs.core.sequence.call(null,inst_33373);
var inst_33375 = cljs.core.vec.call(null,inst_33374);
var inst_33376 = om.next.transact_BANG_.call(null,cloudxmark.core.wiki_reconciler,inst_33375);
var state_33694__$1 = (function (){var statearr_33807 = state_33694;
(statearr_33807[(21)] = inst_33351);

return statearr_33807;
})();
var statearr_33808_33920 = state_33694__$1;
(statearr_33808_33920[(2)] = inst_33376);

(statearr_33808_33920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (49))){
var inst_33339 = (state_33694[(8)]);
var inst_33573 = cljs.core._EQ_.call(null,inst_33339,new cljs.core.Keyword(null,"lst-set-item-col","lst-set-item-col",773112702));
var state_33694__$1 = state_33694;
if(inst_33573){
var statearr_33809_33921 = state_33694__$1;
(statearr_33809_33921[(1)] = (61));

} else {
var statearr_33810_33922 = state_33694__$1;
(statearr_33810_33922[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33695 === (84))){
var inst_33340 = (state_33694[(7)]);
var state_33694__$1 = state_33694;
var statearr_33811_33923 = state_33694__$1;
(statearr_33811_33923[(2)] = inst_33340);

(statearr_33811_33923[(1)] = (85));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26726__auto__))
;
return ((function (switch__26703__auto__,c__26726__auto__){
return (function() {
var cloudxmark$core$search_loop_$_state_machine__26704__auto__ = null;
var cloudxmark$core$search_loop_$_state_machine__26704__auto____0 = (function (){
var statearr_33815 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33815[(0)] = cloudxmark$core$search_loop_$_state_machine__26704__auto__);

(statearr_33815[(1)] = (1));

return statearr_33815;
});
var cloudxmark$core$search_loop_$_state_machine__26704__auto____1 = (function (state_33694){
while(true){
var ret_value__26705__auto__ = (function (){try{while(true){
var result__26706__auto__ = switch__26703__auto__.call(null,state_33694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26706__auto__;
}
break;
}
}catch (e33816){if((e33816 instanceof Object)){
var ex__26707__auto__ = e33816;
var statearr_33817_33924 = state_33694;
(statearr_33817_33924[(5)] = ex__26707__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33925 = state_33694;
state_33694 = G__33925;
continue;
} else {
return ret_value__26705__auto__;
}
break;
}
});
cloudxmark$core$search_loop_$_state_machine__26704__auto__ = function(state_33694){
switch(arguments.length){
case 0:
return cloudxmark$core$search_loop_$_state_machine__26704__auto____0.call(this);
case 1:
return cloudxmark$core$search_loop_$_state_machine__26704__auto____1.call(this,state_33694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cloudxmark$core$search_loop_$_state_machine__26704__auto__.cljs$core$IFn$_invoke$arity$0 = cloudxmark$core$search_loop_$_state_machine__26704__auto____0;
cloudxmark$core$search_loop_$_state_machine__26704__auto__.cljs$core$IFn$_invoke$arity$1 = cloudxmark$core$search_loop_$_state_machine__26704__auto____1;
return cloudxmark$core$search_loop_$_state_machine__26704__auto__;
})()
;})(switch__26703__auto__,c__26726__auto__))
})();
var state__26728__auto__ = (function (){var statearr_33818 = f__26727__auto__.call(null);
(statearr_33818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26726__auto__);

return statearr_33818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26728__auto__);
});})(c__26726__auto__))
);

return c__26726__auto__;
});
cloudxmark.core.search_loop.call(null,cloudxmark.core.event_chan);
om.next.add_root_BANG_.call(null,cloudxmark.core.wiki_reconciler,cloudxmark.core.AutoCompleter,goog.dom.getElement("wiki"));
om.next.add_root_BANG_.call(null,cloudxmark.core.lst_reconciler,cloudxmark.core.Lsts,goog.dom.getElement("lsts"));

//# sourceMappingURL=core.js.map?rel=1467981703913