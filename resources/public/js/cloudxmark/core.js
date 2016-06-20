// Compiled by ClojureScript 1.8.51 {}
goog.provide('cloudxmark.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.Uri');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('goog.net.Jsonp');
goog.require('clojure.string');
goog.require('om.next');
cljs.core.enable_console_print_BANG_.call(null);
cloudxmark.core.wiki_url = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
cloudxmark.core.lst_url = "http://localhost:5000/getItems";
cloudxmark.core.jsonp = (function cloudxmark$core$jsonp(var_args){
var args32074 = [];
var len__19538__auto___32077 = arguments.length;
var i__19539__auto___32078 = (0);
while(true){
if((i__19539__auto___32078 < len__19538__auto___32077)){
args32074.push((arguments[i__19539__auto___32078]));

var G__32079 = (i__19539__auto___32078 + (1));
i__19539__auto___32078 = G__32079;
continue;
} else {
}
break;
}

var G__32076 = args32074.length;
switch (G__32076) {
case 1:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32074.length)].join('')));

}
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return cloudxmark.core.jsonp.call(null,cljs.core.async.chan.call(null),uri);
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2 = (function (c,uri){
var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));
cljs.core.println.call(null,[cljs.core.str("before send "),cljs.core.str(uri)].join(''));

gjsonp.send(null,((function (gjsonp){
return (function (p1__32072_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__32072_SHARP_);
});})(gjsonp))
,((function (gjsonp){
return (function (p1__32073_SHARP_){
return cljs.core.println.call(null,[cljs.core.str("error!"),cljs.core.str(p1__32073_SHARP_)].join(''));
});})(gjsonp))
);

return c;
});

cloudxmark.core.jsonp.cljs$lang$maxFixedArity = 2;
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
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),(function (p__32081,k,p__32082){
var map__32083 = p__32081;
var map__32083__$1 = ((((!((map__32083 == null)))?((((map__32083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32083):map__32083);
var env = map__32083__$1;
var state = cljs.core.get.call(null,map__32083__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__32083__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__32084 = p__32082;
var map__32084__$1 = ((((!((map__32084 == null)))?((((map__32084.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32084.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32084):map__32084);
var query = cljs.core.get.call(null,map__32084__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cljs.core.deref.call(null,state),k,cljs.core.PersistentVector.EMPTY)], null),(((clojure.string.blank_QMARK_.call(null,query)) || ((cljs.core.count.call(null,query) < (3))))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122),ast], null)));
}));
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword("lst","lst","lst/lst",269787192),(function (p__32087,_,p__32088){
var map__32089 = p__32087;
var map__32089__$1 = ((((!((map__32089 == null)))?((((map__32089.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32089.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32089):map__32089);
var env = map__32089__$1;
var state = cljs.core.get.call(null,map__32089__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__32089__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__32090 = p__32088;
var map__32090__$1 = ((((!((map__32090 == null)))?((((map__32090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32090):map__32090);
var query = cljs.core.get.call(null,map__32090__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var curr_list = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("lst","lst","lst/lst",269787192));
var curr_ver = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("lst","lst-ver","lst/lst-ver",-959623844));
cljs.core.println.call(null,[cljs.core.str("query:"),cljs.core.str(query),cljs.core.str(", curr-list"),cljs.core.str(curr_list),cljs.core.str(", curr-ver:"),cljs.core.str(curr_ver)].join(''));

if(((query > curr_ver)) || ((curr_list == null))){
cljs.core.println.call(null,[cljs.core.str("query lists:"),cljs.core.str((curr_list == null))].join(''));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst-search","lst-search",371565861),ast], null);
} else {
cljs.core.println.call(null,[cljs.core.str("no query, lst: "),cljs.core.str(curr_list),cljs.core.str(", ver:"),cljs.core.str(curr_ver)].join(''));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),curr_list], null);
}
}));
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword("lst","curr","lst/curr",-1092232479),(function (p__32093,_,___$1){
var map__32094 = p__32093;
var map__32094__$1 = ((((!((map__32094 == null)))?((((map__32094.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32094.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32094):map__32094);
var env = map__32094__$1;
var state = cljs.core.get.call(null,map__32094__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__32094__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("list","curr","list/curr",-1095309870),cljs.core.PersistentVector.EMPTY)], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword("lst","user-id","lst/user-id",-206796772),(function (p__32096,_,___$1){
var map__32097 = p__32096;
var map__32097__$1 = ((((!((map__32097 == null)))?((((map__32097.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32097.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32097):map__32097);
var env = map__32097__$1;
var state = cljs.core.get.call(null,map__32097__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__32097__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("lst","user-id","lst/user-id",-206796772),null)], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword("lst","lst-ver","lst/lst-ver",-959623844),(function (p__32099,k,_){
var map__32100 = p__32099;
var map__32100__$1 = ((((!((map__32100 == null)))?((((map__32100.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32100.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32100):map__32100);
var env = map__32100__$1;
var state = cljs.core.get.call(null,map__32100__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__32100__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cljs.core.deref.call(null,state),k,cljs.core.PersistentVector.EMPTY)], null);
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
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-curr","lst/set-curr",1109194929,null),(function (p__32102,_,p__32103){
var map__32104 = p__32102;
var map__32104__$1 = ((((!((map__32104 == null)))?((((map__32104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32104):map__32104);
var env = map__32104__$1;
var state = cljs.core.get.call(null,map__32104__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__32105 = p__32103;
var map__32105__$1 = ((((!((map__32105 == null)))?((((map__32105.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32105.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32105):map__32105);
var curr = cljs.core.get.call(null,map__32105__$1,new cljs.core.Keyword("lst","curr","lst/curr",-1092232479));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__32104,map__32104__$1,env,state,map__32105,map__32105__$1,curr){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lst","curr","lst/curr",-1092232479)], null),cljs.core.constantly.call(null,curr));

return cljs.core.println.call(null,[cljs.core.str("set to "),cljs.core.str(curr)].join(''));
});})(map__32104,map__32104__$1,env,state,map__32105,map__32105__$1,curr))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-list","lst/set-list",1651440369,null),(function (p__32108,_,data_map){
var map__32109 = p__32108;
var map__32109__$1 = ((((!((map__32109 == null)))?((((map__32109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32109):map__32109);
var env = map__32109__$1;
var state = cljs.core.get.call(null,map__32109__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__32109,map__32109__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("data-map:"),cljs.core.str(data_map)].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lst","lst","lst/lst",269787192)], null),cljs.core.constantly.call(null,cljs.core.get.call(null,data_map,"lst",cljs.core.PersistentVector.EMPTY)));

cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lst","user-id","lst/user-id",-206796772)], null),cljs.core.constantly.call(null,cljs.core.get.call(null,data_map,"user_id",null)));

return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lst","lst-ver","lst/lst-ver",-959623844)], null),cljs.core.inc);
});})(map__32109,map__32109__$1,env,state))
], null);
}));
cloudxmark.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("lst","lst","lst/lst",269787192),null,new cljs.core.Keyword("lst","lst-ver","lst/lst-ver",-959623844),(0),new cljs.core.Keyword("lst","curr","lst/curr",-1092232479),(0),new cljs.core.Keyword("lst","user-id","lst/user-id",-206796772),null], null));
cloudxmark.core.result_list = (function cloudxmark$core$result_list(results){
return React.DOM.ul({"key": "result-list"},om.util.force_children.call(null,cljs.core.map_indexed.call(null,(function (idx,itm){
return React.DOM.li({"key": idx},om.util.force_children.call(null,itm));
}),results)));
});
cloudxmark.core.refresh_lists_button = (function cloudxmark$core$refresh_lists_button(comp,lst_ver){
return React.DOM.button({"type": "button", "key": "refreshPwButton", "onClick": (function (e){
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst-query","lst-query",-2040921098),(lst_ver + (1))], null)], null));
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
cloudxmark.core.lst_list = (function cloudxmark$core$lst_list(comp,results,curr_idx){
return React.DOM.div({"key": "lst-list"},om.util.force_children.call(null,cljs.core.map_indexed.call(null,(function (idx,itm){
return React.DOM.div({"key": [cljs.core.str(cloudxmark$core$lst_list),cljs.core.str(idx)].join('')},om.util.force_children.call(null,cloudxmark.core.list_select_field.call(null,comp,idx,curr_idx)),om.util.force_children.call(null,React.DOM.span({"key": [cljs.core.str(cloudxmark$core$lst_list),cljs.core.str(idx),cljs.core.str("span")].join('')},om.util.force_children.call(null,itm.call(null,"name","?")))),om.util.force_children.call(null,((cljs.core._EQ_.call(null,idx,curr_idx))?cloudxmark.core.list_edit_area.call(null,comp,idx,curr_idx,results):null)));
}),results)),om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Add new list:"))),om.util.force_children.call(null,cloudxmark.core.list_add_area.call(null,comp)));
});
cloudxmark.core.search_field = (function cloudxmark$core$search_field(comp,query,type){
var vec__32113 = (function (){var G__32114 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__32114) {
case "wiki":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["wiki-search-field",new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648)], null);

break;
case "lst":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lst-search-field",new cljs.core.Keyword(null,"lst-query","lst-query",-2040921098)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
var elem_key = cljs.core.nth.call(null,vec__32113,(0),null);
var query_key = cljs.core.nth.call(null,vec__32113,(1),null);
cljs.core.println.call(null,[cljs.core.str("elem-key"),cljs.core.str(elem_key),cljs.core.str(" query-key:"),cljs.core.str(query_key)].join(''));

return om.dom.input.call(null,{"key": elem_key, "value": query, "onChange": ((function (vec__32113,elem_key,query_key){
return (function (e){
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.fromArray([query_key,e.target.value], true, false)], null));
});})(vec__32113,elem_key,query_key))
});
});
/**
 * @constructor
 */
cloudxmark.core.Lsts = (function cloudxmark$core$Lsts(){
var this__21566__auto__ = this;
React.Component.apply(this__21566__auto__,arguments);

if(!((this__21566__auto__.initLocalState == null))){
this__21566__auto__.state = this__21566__auto__.initLocalState();
} else {
this__21566__auto__.state = {};
}

return this__21566__auto__;
});

cloudxmark.core.Lsts.prototype = goog.object.clone(React.Component.prototype);

var x32120_32132 = cloudxmark.core.Lsts.prototype;
x32120_32132.componentWillUpdate = ((function (x32120_32132){
return (function (next_props__21502__auto__,next_state__21503__auto__){
var this__21501__auto__ = this;
if(((!((this__21501__auto__ == null)))?(((false) || (this__21501__auto__.om$next$Ident$))?true:false):false)){
var ident__21505__auto___32133 = om.next.ident.call(null,this__21501__auto__,om.next.props.call(null,this__21501__auto__));
var next_ident__21506__auto___32134 = om.next.ident.call(null,this__21501__auto__,om.next._next_props.call(null,next_props__21502__auto__,this__21501__auto__));
if(cljs.core.not_EQ_.call(null,ident__21505__auto___32133,next_ident__21506__auto___32134)){
var idxr__21507__auto___32135 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__21507__auto___32135 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__21507__auto___32135),((function (idxr__21507__auto___32135,ident__21505__auto___32133,next_ident__21506__auto___32134,this__21501__auto__,x32120_32132){
return (function (indexes__21508__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__21508__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__21505__auto___32133], null),cljs.core.disj,this__21501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__21506__auto___32134], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__21501__auto__);
});})(idxr__21507__auto___32135,ident__21505__auto___32133,next_ident__21506__auto___32134,this__21501__auto__,x32120_32132))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__21501__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21501__auto__);
});})(x32120_32132))
;

x32120_32132.shouldComponentUpdate = ((function (x32120_32132){
return (function (next_props__21502__auto__,next_state__21503__auto__){
var this__21501__auto__ = this;
var next_children__21504__auto__ = next_props__21502__auto__.children;
var next_props__21502__auto____$1 = goog.object.get(next_props__21502__auto__,"omcljs$value");
var next_props__21502__auto____$2 = (function (){var G__32122 = next_props__21502__auto____$1;
if((next_props__21502__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__32122);
} else {
return G__32122;
}
})();
var or__18468__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__21501__auto__),next_props__21502__auto____$2);
if(or__18468__auto__){
return or__18468__auto__;
} else {
var or__18468__auto____$1 = (function (){var and__18456__auto__ = this__21501__auto__.state;
if(cljs.core.truth_(and__18456__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__21501__auto__.state,"omcljs$state"),goog.object.get(next_state__21503__auto__,"omcljs$state"));
} else {
return and__18456__auto__;
}
})();
if(cljs.core.truth_(or__18468__auto____$1)){
return or__18468__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__21501__auto__.props.children,next_children__21504__auto__);
}
}
});})(x32120_32132))
;

x32120_32132.componentWillUnmount = ((function (x32120_32132){
return (function (){
var this__21501__auto__ = this;
var r__21512__auto__ = om.next.get_reconciler.call(null,this__21501__auto__);
var cfg__21513__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__21512__auto__);
var st__21514__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__21513__auto__);
var indexer__21511__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__21513__auto__);
if(cljs.core.truth_((function (){var and__18456__auto__ = !((st__21514__auto__ == null));
if(and__18456__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__21514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__21501__auto__], null));
} else {
return and__18456__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__21514__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__21501__auto__);
} else {
}

if((indexer__21511__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__21511__auto__,this__21501__auto__);
}
});})(x32120_32132))
;

x32120_32132.componentDidUpdate = ((function (x32120_32132){
return (function (prev_props__21509__auto__,prev_state__21510__auto__){
var this__21501__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21501__auto__);
});})(x32120_32132))
;

x32120_32132.isMounted = ((function (x32120_32132){
return (function (){
var this__21501__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21501__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x32120_32132))
;

x32120_32132.componentWillMount = ((function (x32120_32132){
return (function (){
var this__21501__auto__ = this;
var indexer__21511__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21511__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21511__auto__,this__21501__auto__);
}
});})(x32120_32132))
;

x32120_32132.render = ((function (x32120_32132){
return (function (){
var this__21500__auto__ = this;
var this$ = this__21500__auto__;
var _STAR_reconciler_STAR_32123 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_32124 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_32125 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_32126 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_32127 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21500__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21500__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21500__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21500__auto__);

om.next._STAR_parent_STAR_ = this__21500__auto__;

try{var map__32128 = om.next.props.call(null,this$);
var map__32128__$1 = ((((!((map__32128 == null)))?((((map__32128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32128):map__32128);
var user_id = cljs.core.get.call(null,map__32128__$1,new cljs.core.Keyword("lst","user-id","lst/user-id",-206796772));
var lst = cljs.core.get.call(null,map__32128__$1,new cljs.core.Keyword("lst","lst","lst/lst",269787192));
var lst_ver = cljs.core.get.call(null,map__32128__$1,new cljs.core.Keyword("lst","lst-ver","lst/lst-ver",-959623844));
var curr = cljs.core.get.call(null,map__32128__$1,new cljs.core.Keyword("lst","curr","lst/curr",-1092232479));
if((user_id == null)){
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Please login"))));
} else {
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Lists"))),om.util.force_children.call(null,cloudxmark.core.refresh_lists_button.call(null,this$,lst_ver)),om.util.force_children.call(null,((!(cljs.core.empty_QMARK_.call(null,lst)))?cloudxmark.core.lst_list.call(null,this$,lst,(((curr == null))?(0):curr)):null)));
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_32127;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_32126;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_32125;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_32124;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_32123;
}});})(x32120_32132))
;


cloudxmark.core.Lsts.prototype.constructor = cloudxmark.core.Lsts;

cloudxmark.core.Lsts.prototype.constructor.displayName = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.prototype.om$isComponent = true;

var x32130_32136 = cloudxmark.core.Lsts;
x32130_32136.om$next$IQueryParams$ = true;

x32130_32136.om$next$IQueryParams$params$arity$1 = ((function (x32130_32136){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst-query","lst-query",-2040921098),(1)], null);
});})(x32130_32136))
;

x32130_32136.om$next$IQuery$ = true;

x32130_32136.om$next$IQuery$query$arity$1 = ((function (x32130_32136){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lst","user-id","lst/user-id",-206796772),new cljs.core.Keyword("lst","curr","lst/curr",-1092232479),new cljs.core.Keyword("lst","lst-ver","lst/lst-ver",-959623844),cljs.core.list(new cljs.core.Keyword("lst","lst","lst/lst",269787192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?lst-query","?lst-query",-2084239327,null)], null))], null);
});})(x32130_32136))
;


var x32131_32137 = cloudxmark.core.Lsts.prototype;
x32131_32137.om$next$IQueryParams$ = true;

x32131_32137.om$next$IQueryParams$params$arity$1 = ((function (x32131_32137){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst-query","lst-query",-2040921098),(1)], null);
});})(x32131_32137))
;

x32131_32137.om$next$IQuery$ = true;

x32131_32137.om$next$IQuery$query$arity$1 = ((function (x32131_32137){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lst","user-id","lst/user-id",-206796772),new cljs.core.Keyword("lst","curr","lst/curr",-1092232479),new cljs.core.Keyword("lst","lst-ver","lst/lst-ver",-959623844),cljs.core.list(new cljs.core.Keyword("lst","lst","lst/lst",269787192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?lst-query","?lst-query",-2084239327,null)], null))], null);
});})(x32131_32137))
;


cloudxmark.core.Lsts.cljs$lang$type = true;

cloudxmark.core.Lsts.cljs$lang$ctorStr = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.cljs$lang$ctorPrWriter = (function (this__21568__auto__,writer__21569__auto__,opt__21570__auto__){
return cljs.core._write.call(null,writer__21569__auto__,"cloudxmark.core/Lsts");
});
/**
 * @constructor
 */
cloudxmark.core.AutoCompleter = (function cloudxmark$core$AutoCompleter(){
var this__21566__auto__ = this;
React.Component.apply(this__21566__auto__,arguments);

if(!((this__21566__auto__.initLocalState == null))){
this__21566__auto__.state = this__21566__auto__.initLocalState();
} else {
this__21566__auto__.state = {};
}

return this__21566__auto__;
});

cloudxmark.core.AutoCompleter.prototype = goog.object.clone(React.Component.prototype);

var x32142_32155 = cloudxmark.core.AutoCompleter.prototype;
x32142_32155.componentWillUpdate = ((function (x32142_32155){
return (function (next_props__21502__auto__,next_state__21503__auto__){
var this__21501__auto__ = this;
if(((!((this__21501__auto__ == null)))?(((false) || (this__21501__auto__.om$next$Ident$))?true:false):false)){
var ident__21505__auto___32156 = om.next.ident.call(null,this__21501__auto__,om.next.props.call(null,this__21501__auto__));
var next_ident__21506__auto___32157 = om.next.ident.call(null,this__21501__auto__,om.next._next_props.call(null,next_props__21502__auto__,this__21501__auto__));
if(cljs.core.not_EQ_.call(null,ident__21505__auto___32156,next_ident__21506__auto___32157)){
var idxr__21507__auto___32158 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__21507__auto___32158 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__21507__auto___32158),((function (idxr__21507__auto___32158,ident__21505__auto___32156,next_ident__21506__auto___32157,this__21501__auto__,x32142_32155){
return (function (indexes__21508__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__21508__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__21505__auto___32156], null),cljs.core.disj,this__21501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__21506__auto___32157], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__21501__auto__);
});})(idxr__21507__auto___32158,ident__21505__auto___32156,next_ident__21506__auto___32157,this__21501__auto__,x32142_32155))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__21501__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21501__auto__);
});})(x32142_32155))
;

x32142_32155.shouldComponentUpdate = ((function (x32142_32155){
return (function (next_props__21502__auto__,next_state__21503__auto__){
var this__21501__auto__ = this;
var next_children__21504__auto__ = next_props__21502__auto__.children;
var next_props__21502__auto____$1 = goog.object.get(next_props__21502__auto__,"omcljs$value");
var next_props__21502__auto____$2 = (function (){var G__32144 = next_props__21502__auto____$1;
if((next_props__21502__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__32144);
} else {
return G__32144;
}
})();
var or__18468__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__21501__auto__),next_props__21502__auto____$2);
if(or__18468__auto__){
return or__18468__auto__;
} else {
var or__18468__auto____$1 = (function (){var and__18456__auto__ = this__21501__auto__.state;
if(cljs.core.truth_(and__18456__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__21501__auto__.state,"omcljs$state"),goog.object.get(next_state__21503__auto__,"omcljs$state"));
} else {
return and__18456__auto__;
}
})();
if(cljs.core.truth_(or__18468__auto____$1)){
return or__18468__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__21501__auto__.props.children,next_children__21504__auto__);
}
}
});})(x32142_32155))
;

x32142_32155.componentWillUnmount = ((function (x32142_32155){
return (function (){
var this__21501__auto__ = this;
var r__21512__auto__ = om.next.get_reconciler.call(null,this__21501__auto__);
var cfg__21513__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__21512__auto__);
var st__21514__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__21513__auto__);
var indexer__21511__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__21513__auto__);
if(cljs.core.truth_((function (){var and__18456__auto__ = !((st__21514__auto__ == null));
if(and__18456__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__21514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__21501__auto__], null));
} else {
return and__18456__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__21514__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__21501__auto__);
} else {
}

if((indexer__21511__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__21511__auto__,this__21501__auto__);
}
});})(x32142_32155))
;

x32142_32155.componentDidUpdate = ((function (x32142_32155){
return (function (prev_props__21509__auto__,prev_state__21510__auto__){
var this__21501__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21501__auto__);
});})(x32142_32155))
;

x32142_32155.isMounted = ((function (x32142_32155){
return (function (){
var this__21501__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21501__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x32142_32155))
;

x32142_32155.componentWillMount = ((function (x32142_32155){
return (function (){
var this__21501__auto__ = this;
var indexer__21511__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21511__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21511__auto__,this__21501__auto__);
}
});})(x32142_32155))
;

x32142_32155.render = ((function (x32142_32155){
return (function (){
var this__21500__auto__ = this;
var this$ = this__21500__auto__;
var _STAR_reconciler_STAR_32145 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_32146 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_32147 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_32148 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_32149 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21500__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21500__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21500__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21500__auto__);

om.next._STAR_parent_STAR_ = this__21500__auto__;

try{var map__32150 = om.next.props.call(null,this$);
var map__32150__$1 = ((((!((map__32150 == null)))?((((map__32150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32150):map__32150);
var lst = cljs.core.get.call(null,map__32150__$1,new cljs.core.Keyword("wiki","lst","wiki/lst",270705683));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"AutoCompleter"))),om.util.force_children.call(null,(function (){var G__32152 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloudxmark.core.search_field.call(null,this$,new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648).cljs$core$IFn$_invoke$arity$1(om.next.get_params.call(null,this$)),new cljs.core.Keyword(null,"wiki","wiki",1946329928))], null);
if(!(cljs.core.empty_QMARK_.call(null,lst))){
return cljs.core.conj.call(null,G__32152,cloudxmark.core.result_list.call(null,lst));
} else {
return G__32152;
}
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_32149;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_32148;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_32147;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_32146;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_32145;
}});})(x32142_32155))
;


cloudxmark.core.AutoCompleter.prototype.constructor = cloudxmark.core.AutoCompleter;

cloudxmark.core.AutoCompleter.prototype.constructor.displayName = "cloudxmark.core/AutoCompleter";

cloudxmark.core.AutoCompleter.prototype.om$isComponent = true;

var x32153_32159 = cloudxmark.core.AutoCompleter;
x32153_32159.om$next$IQueryParams$ = true;

x32153_32159.om$next$IQueryParams$params$arity$1 = ((function (x32153_32159){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648),""], null);
});})(x32153_32159))
;

x32153_32159.om$next$IQuery$ = true;

x32153_32159.om$next$IQuery$query$arity$1 = ((function (x32153_32159){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?wiki-query","?wiki-query",-1723016161,null)], null))], null);
});})(x32153_32159))
;


var x32154_32160 = cloudxmark.core.AutoCompleter.prototype;
x32154_32160.om$next$IQueryParams$ = true;

x32154_32160.om$next$IQueryParams$params$arity$1 = ((function (x32154_32160){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648),""], null);
});})(x32154_32160))
;

x32154_32160.om$next$IQuery$ = true;

x32154_32160.om$next$IQuery$query$arity$1 = ((function (x32154_32160){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?wiki-query","?wiki-query",-1723016161,null)], null))], null);
});})(x32154_32160))
;


cloudxmark.core.AutoCompleter.cljs$lang$type = true;

cloudxmark.core.AutoCompleter.cljs$lang$ctorStr = "cloudxmark.core/AutoCompleter";

cloudxmark.core.AutoCompleter.cljs$lang$ctorPrWriter = (function (this__21568__auto__,writer__21569__auto__,opt__21570__auto__){
return cljs.core._write.call(null,writer__21569__auto__,"cloudxmark.core/AutoCompleter");
});
cloudxmark.core.send_to_chan = (function cloudxmark$core$send_to_chan(c){
return (function (p__32170,cb){
var map__32171 = p__32170;
var map__32171__$1 = ((((!((map__32171 == null)))?((((map__32171.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32171.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32171):map__32171);
var wiki_search = cljs.core.get.call(null,map__32171__$1,new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122));
var lst_search = cljs.core.get.call(null,map__32171__$1,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
if(cljs.core.truth_(wiki_search)){
var map__32173 = om.next.query__GT_ast.call(null,wiki_search);
var map__32173__$1 = ((((!((map__32173 == null)))?((((map__32173.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32173.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32173):map__32173);
var vec__32174 = cljs.core.get.call(null,map__32173__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var wiki_search__$1 = cljs.core.nth.call(null,vec__32174,(0),null);
var query = cljs.core.get_in.call(null,wiki_search__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"query","query",-1288509510)], null));
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [query,new cljs.core.Keyword(null,"wiki","wiki",1946329928),cb], null));
} else {
if(cljs.core.truth_(lst_search)){
var map__32176 = om.next.query__GT_ast.call(null,lst_search);
var map__32176__$1 = ((((!((map__32176 == null)))?((((map__32176.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32176.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32176):map__32176);
var vec__32177 = cljs.core.get.call(null,map__32176__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var lst_search__$1 = cljs.core.nth.call(null,vec__32177,(0),null);
var query = cljs.core.get_in.call(null,lst_search__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"query","query",-1288509510)], null));
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [query,new cljs.core.Keyword(null,"lst","lst",269745987),cb], null));
} else {
return null;
}
}
});
});
cloudxmark.core.send_chan = cljs.core.async.chan.call(null);
cloudxmark.core.wiki_reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),cloudxmark.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),cloudxmark.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),cloudxmark.core.mutate], null)),new cljs.core.Keyword(null,"send","send",-652151114),cloudxmark.core.send_to_chan.call(null,cloudxmark.core.send_chan),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122)], null)], null));
cloudxmark.core.lst_reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),cloudxmark.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),cloudxmark.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),cloudxmark.core.mutate], null)),new cljs.core.Keyword(null,"send","send",-652151114),cloudxmark.core.send_to_chan.call(null,cloudxmark.core.send_chan),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-search","lst-search",371565861)], null)], null));
cloudxmark.core.search_loop = (function cloudxmark$core$search_loop(c){
var c__21409__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21409__auto__){
return (function (){
var f__21410__auto__ = (function (){var switch__21388__auto__ = ((function (c__21409__auto__){
return (function (state_32344){
var state_val_32345 = (state_32344[(1)]);
if((state_val_32345 === (7))){
var inst_32337 = (state_32344[(2)]);
var state_32344__$1 = (function (){var statearr_32346 = state_32344;
(statearr_32346[(7)] = inst_32337);

return statearr_32346;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32344__$1,(16),c);
} else {
if((state_val_32345 === (1))){
var state_32344__$1 = state_32344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32344__$1,(2),c);
} else {
if((state_val_32345 === (4))){
var inst_32342 = (state_32344[(2)]);
var state_32344__$1 = state_32344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32344__$1,inst_32342);
} else {
if((state_val_32345 === (15))){
var inst_32333 = (state_32344[(2)]);
var state_32344__$1 = state_32344;
var statearr_32347_32373 = state_32344__$1;
(statearr_32347_32373[(2)] = inst_32333);

(statearr_32347_32373[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (13))){
var state_32344__$1 = state_32344;
var statearr_32348_32374 = state_32344__$1;
(statearr_32348_32374[(2)] = null);

(statearr_32348_32374[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (6))){
var inst_32288 = (state_32344[(8)]);
var inst_32306 = cljs.core._EQ_.call(null,inst_32288,new cljs.core.Keyword(null,"lst","lst",269745987));
var state_32344__$1 = state_32344;
if(inst_32306){
var statearr_32349_32375 = state_32344__$1;
(statearr_32349_32375[(1)] = (9));

} else {
var statearr_32350_32376 = state_32344__$1;
(statearr_32350_32376[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (3))){
var inst_32284 = (state_32344[(9)]);
var inst_32288 = (state_32344[(8)]);
var inst_32287 = cljs.core.nth.call(null,inst_32284,(0),null);
var inst_32288__$1 = cljs.core.nth.call(null,inst_32284,(1),null);
var inst_32289 = cljs.core.nth.call(null,inst_32284,(2),null);
var inst_32290 = cljs.core._EQ_.call(null,inst_32288__$1,new cljs.core.Keyword(null,"wiki","wiki",1946329928));
var state_32344__$1 = (function (){var statearr_32351 = state_32344;
(statearr_32351[(10)] = inst_32289);

(statearr_32351[(11)] = inst_32287);

(statearr_32351[(8)] = inst_32288__$1);

return statearr_32351;
})();
if(inst_32290){
var statearr_32352_32377 = state_32344__$1;
(statearr_32352_32377[(1)] = (5));

} else {
var statearr_32353_32378 = state_32344__$1;
(statearr_32353_32378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (12))){
var inst_32310 = (state_32344[(2)]);
var inst_32311 = cljs.core.js__GT_clj.call(null,inst_32310);
var inst_32312 = [cljs.core.str("lst: "),cljs.core.str("results: "),cljs.core.str(inst_32311)].join('');
var inst_32313 = cljs.core.println.call(null,inst_32312);
var inst_32314 = cljs.core.List.EMPTY;
var inst_32315 = new cljs.core.Symbol("lst","set-list","lst/set-list",1651440369,null);
var inst_32316 = cljs.core._conj.call(null,inst_32314,inst_32315);
var inst_32317 = cljs.core.List.EMPTY;
var inst_32318 = cljs.core._conj.call(null,inst_32317,inst_32311);
var inst_32319 = cljs.core.concat.call(null,inst_32316,inst_32318);
var inst_32320 = cljs.core.seq.call(null,inst_32319);
var inst_32321 = cljs.core.sequence.call(null,inst_32320);
var inst_32322 = cljs.core.List.EMPTY;
var inst_32323 = cljs.core._conj.call(null,inst_32322,inst_32321);
var inst_32324 = cljs.core.concat.call(null,inst_32323);
var inst_32325 = cljs.core.seq.call(null,inst_32324);
var inst_32326 = cljs.core.sequence.call(null,inst_32325);
var inst_32327 = cljs.core.vec.call(null,inst_32326);
var inst_32328 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_32327);
var state_32344__$1 = (function (){var statearr_32354 = state_32344;
(statearr_32354[(12)] = inst_32313);

return statearr_32354;
})();
var statearr_32355_32379 = state_32344__$1;
(statearr_32355_32379[(2)] = inst_32328);

(statearr_32355_32379[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (2))){
var inst_32280 = (state_32344[(2)]);
var inst_32281 = cljs.core.nth.call(null,inst_32280,(0),null);
var inst_32282 = cljs.core.nth.call(null,inst_32280,(1),null);
var inst_32283 = cljs.core.nth.call(null,inst_32280,(2),null);
var inst_32284 = inst_32280;
var state_32344__$1 = (function (){var statearr_32356 = state_32344;
(statearr_32356[(13)] = inst_32283);

(statearr_32356[(14)] = inst_32281);

(statearr_32356[(9)] = inst_32284);

(statearr_32356[(15)] = inst_32282);

return statearr_32356;
})();
var statearr_32357_32380 = state_32344__$1;
(statearr_32357_32380[(2)] = null);

(statearr_32357_32380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (11))){
var inst_32335 = (state_32344[(2)]);
var state_32344__$1 = state_32344;
var statearr_32358_32381 = state_32344__$1;
(statearr_32358_32381[(2)] = inst_32335);

(statearr_32358_32381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (9))){
var inst_32308 = cloudxmark.core.jsonp.call(null,cloudxmark.core.lst_url);
var state_32344__$1 = state_32344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32344__$1,(12),inst_32308);
} else {
if((state_val_32345 === (5))){
var inst_32287 = (state_32344[(11)]);
var inst_32293 = [cljs.core.str(cloudxmark.core.wiki_url),cljs.core.str(inst_32287)].join('');
var inst_32294 = cloudxmark.core.jsonp.call(null,inst_32293);
var state_32344__$1 = state_32344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32344__$1,(8),inst_32294);
} else {
if((state_val_32345 === (14))){
var state_32344__$1 = state_32344;
var statearr_32359_32382 = state_32344__$1;
(statearr_32359_32382[(2)] = null);

(statearr_32359_32382[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (16))){
var inst_32339 = (state_32344[(2)]);
var inst_32284 = inst_32339;
var state_32344__$1 = (function (){var statearr_32360 = state_32344;
(statearr_32360[(9)] = inst_32284);

return statearr_32360;
})();
var statearr_32361_32383 = state_32344__$1;
(statearr_32361_32383[(2)] = null);

(statearr_32361_32383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (10))){
var state_32344__$1 = state_32344;
var statearr_32362_32384 = state_32344__$1;
(statearr_32362_32384[(1)] = (13));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32345 === (8))){
var inst_32289 = (state_32344[(10)]);
var inst_32296 = (state_32344[(2)]);
var inst_32297 = cljs.core.nth.call(null,inst_32296,(0),null);
var inst_32298 = cljs.core.nth.call(null,inst_32296,(1),null);
var inst_32299 = [cljs.core.str("wiki: "),cljs.core.str("results: "),cljs.core.str(inst_32298)].join('');
var inst_32300 = cljs.core.println.call(null,inst_32299);
var inst_32301 = [new cljs.core.Keyword("wiki","lst","wiki/lst",270705683)];
var inst_32302 = [inst_32298];
var inst_32303 = cljs.core.PersistentHashMap.fromArrays(inst_32301,inst_32302);
var inst_32304 = inst_32289.call(null,inst_32303);
var state_32344__$1 = (function (){var statearr_32364 = state_32344;
(statearr_32364[(16)] = inst_32297);

(statearr_32364[(17)] = inst_32300);

return statearr_32364;
})();
var statearr_32365_32385 = state_32344__$1;
(statearr_32365_32385[(2)] = inst_32304);

(statearr_32365_32385[(1)] = (7));


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
});})(c__21409__auto__))
;
return ((function (switch__21388__auto__,c__21409__auto__){
return (function() {
var cloudxmark$core$search_loop_$_state_machine__21389__auto__ = null;
var cloudxmark$core$search_loop_$_state_machine__21389__auto____0 = (function (){
var statearr_32369 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32369[(0)] = cloudxmark$core$search_loop_$_state_machine__21389__auto__);

(statearr_32369[(1)] = (1));

return statearr_32369;
});
var cloudxmark$core$search_loop_$_state_machine__21389__auto____1 = (function (state_32344){
while(true){
var ret_value__21390__auto__ = (function (){try{while(true){
var result__21391__auto__ = switch__21388__auto__.call(null,state_32344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21391__auto__;
}
break;
}
}catch (e32370){if((e32370 instanceof Object)){
var ex__21392__auto__ = e32370;
var statearr_32371_32386 = state_32344;
(statearr_32371_32386[(5)] = ex__21392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32387 = state_32344;
state_32344 = G__32387;
continue;
} else {
return ret_value__21390__auto__;
}
break;
}
});
cloudxmark$core$search_loop_$_state_machine__21389__auto__ = function(state_32344){
switch(arguments.length){
case 0:
return cloudxmark$core$search_loop_$_state_machine__21389__auto____0.call(this);
case 1:
return cloudxmark$core$search_loop_$_state_machine__21389__auto____1.call(this,state_32344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cloudxmark$core$search_loop_$_state_machine__21389__auto__.cljs$core$IFn$_invoke$arity$0 = cloudxmark$core$search_loop_$_state_machine__21389__auto____0;
cloudxmark$core$search_loop_$_state_machine__21389__auto__.cljs$core$IFn$_invoke$arity$1 = cloudxmark$core$search_loop_$_state_machine__21389__auto____1;
return cloudxmark$core$search_loop_$_state_machine__21389__auto__;
})()
;})(switch__21388__auto__,c__21409__auto__))
})();
var state__21411__auto__ = (function (){var statearr_32372 = f__21410__auto__.call(null);
(statearr_32372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21409__auto__);

return statearr_32372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21411__auto__);
});})(c__21409__auto__))
);

return c__21409__auto__;
});
cloudxmark.core.search_loop.call(null,cloudxmark.core.send_chan);
om.next.add_root_BANG_.call(null,cloudxmark.core.wiki_reconciler,cloudxmark.core.AutoCompleter,goog.dom.getElement("wiki"));
om.next.add_root_BANG_.call(null,cloudxmark.core.lst_reconciler,cloudxmark.core.Lsts,goog.dom.getElement("lsts"));

//# sourceMappingURL=core.js.map