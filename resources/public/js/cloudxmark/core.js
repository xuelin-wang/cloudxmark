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
cloudxmark.core.jsonp = (function cloudxmark$core$jsonp(var_args){
var args36678 = [];
var len__19538__auto___36681 = arguments.length;
var i__19539__auto___36682 = (0);
while(true){
if((i__19539__auto___36682 < len__19538__auto___36681)){
args36678.push((arguments[i__19539__auto___36682]));

var G__36683 = (i__19539__auto___36682 + (1));
i__19539__auto___36682 = G__36683;
continue;
} else {
}
break;
}

var G__36680 = args36678.length;
switch (G__36680) {
case 1:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36678.length)].join('')));

}
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return cloudxmark.core.jsonp.call(null,cljs.core.async.chan.call(null),uri);
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2 = (function (c,uri){
var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));
cljs.core.println.call(null,[cljs.core.str("before send "),cljs.core.str(uri)].join(''));

gjsonp.send(null,((function (gjsonp){
return (function (p1__36676_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__36676_SHARP_);
});})(gjsonp))
,((function (gjsonp){
return (function (p1__36677_SHARP_){
return cljs.core.println.call(null,[cljs.core.str("error!"),cljs.core.str(p1__36677_SHARP_)].join(''));
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
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),(function (p__36685,k,p__36686){
var map__36687 = p__36685;
var map__36687__$1 = ((((!((map__36687 == null)))?((((map__36687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36687):map__36687);
var env = map__36687__$1;
var state = cljs.core.get.call(null,map__36687__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__36687__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__36688 = p__36686;
var map__36688__$1 = ((((!((map__36688 == null)))?((((map__36688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36688):map__36688);
var query = cljs.core.get.call(null,map__36688__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cljs.core.deref.call(null,state),k,cljs.core.PersistentVector.EMPTY)], null),(((clojure.string.blank_QMARK_.call(null,query)) || ((cljs.core.count.call(null,query) < (3))))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122),ast], null)));
}));
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword("lst","lst","lst/lst",269787192),(function (p__36691,_,p__36692){
var map__36693 = p__36691;
var map__36693__$1 = ((((!((map__36693 == null)))?((((map__36693.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36693.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36693):map__36693);
var env = map__36693__$1;
var state = cljs.core.get.call(null,map__36693__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__36693__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__36694 = p__36692;
var map__36694__$1 = ((((!((map__36694 == null)))?((((map__36694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36694):map__36694);
var query = cljs.core.get.call(null,map__36694__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var curr_list = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("lst","lst","lst/lst",269787192));
var curr_ver = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("lst","lst-ver","lst/lst-ver",-959623844));
if(((query > curr_ver)) || ((curr_list == null))){
cljs.core.println.call(null,[cljs.core.str("query lists:"),cljs.core.str((curr_list == null))].join(''));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst-search","lst-search",371565861),ast], null);
} else {
cljs.core.println.call(null,[cljs.core.str("no query, lst: "),cljs.core.str(curr_list),cljs.core.str(", ver:"),cljs.core.str(curr_ver)].join(''));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),curr_list], null);
}
}));
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword("lst","curr","lst/curr",-1092232479),(function (p__36697,_,___$1){
var map__36698 = p__36697;
var map__36698__$1 = ((((!((map__36698 == null)))?((((map__36698.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36698.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36698):map__36698);
var env = map__36698__$1;
var state = cljs.core.get.call(null,map__36698__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__36698__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("list","curr","list/curr",-1095309870),cljs.core.PersistentVector.EMPTY)], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword("lst","user-id","lst/user-id",-206796772),(function (p__36700,_,___$1){
var map__36701 = p__36700;
var map__36701__$1 = ((((!((map__36701 == null)))?((((map__36701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36701):map__36701);
var env = map__36701__$1;
var state = cljs.core.get.call(null,map__36701__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__36701__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("lst","user-id","lst/user-id",-206796772),null)], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword("lst","lst-ver","lst/lst-ver",-959623844),(function (p__36703,k,_){
var map__36704 = p__36703;
var map__36704__$1 = ((((!((map__36704 == null)))?((((map__36704.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36704.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36704):map__36704);
var env = map__36704__$1;
var state = cljs.core.get.call(null,map__36704__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__36704__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
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
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","logout","lst/logout",-1235763963,null),(function (p__36706,_,___$1){
var map__36707 = p__36706;
var map__36707__$1 = ((((!((map__36707 == null)))?((((map__36707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36707):map__36707);
var env = map__36707__$1;
var state = cljs.core.get.call(null,map__36707__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__36707,map__36707__$1,env,state){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lst","lst","lst/lst",269787192)], null),cljs.core.constantly.call(null,cljs.core.PersistentVector.EMPTY));

return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lst","user-id","lst/user-id",-206796772)], null),cljs.core.constantly.call(null,null));
});})(map__36707,map__36707__$1,env,state))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-curr","lst/set-curr",1109194929,null),(function (p__36709,_,p__36710){
var map__36711 = p__36709;
var map__36711__$1 = ((((!((map__36711 == null)))?((((map__36711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36711):map__36711);
var env = map__36711__$1;
var state = cljs.core.get.call(null,map__36711__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__36712 = p__36710;
var map__36712__$1 = ((((!((map__36712 == null)))?((((map__36712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36712):map__36712);
var curr = cljs.core.get.call(null,map__36712__$1,new cljs.core.Keyword("lst","curr","lst/curr",-1092232479));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__36711,map__36711__$1,env,state,map__36712,map__36712__$1,curr){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lst","curr","lst/curr",-1092232479)], null),cljs.core.constantly.call(null,curr));

return cljs.core.println.call(null,[cljs.core.str("set to "),cljs.core.str(curr)].join(''));
});})(map__36711,map__36711__$1,env,state,map__36712,map__36712__$1,curr))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null),(function (p__36715,_,data_map){
var map__36716 = p__36715;
var map__36716__$1 = ((((!((map__36716 == null)))?((((map__36716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36716):map__36716);
var env = map__36716__$1;
var state = cljs.core.get.call(null,map__36716__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__36716,map__36716__$1,env,state){
return (function (){
cljs.core.println.call(null,[cljs.core.str("data-map:"),cljs.core.str(data_map)].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lst","lst","lst/lst",269787192)], null),cljs.core.constantly.call(null,cljs.core.get.call(null,data_map,"lst",cljs.core.PersistentVector.EMPTY)));

cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lst","user-id","lst/user-id",-206796772)], null),cljs.core.constantly.call(null,cljs.core.get.call(null,data_map,"user_id",null)));

return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lst","lst-ver","lst/lst-ver",-959623844)], null),cljs.core.inc);
});})(map__36716,map__36716__$1,env,state))
], null);
}));
cloudxmark.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("lst","lst","lst/lst",269787192),null,new cljs.core.Keyword("lst","lst-ver","lst/lst-ver",-959623844),(0),new cljs.core.Keyword("lst","curr","lst/curr",-1092232479),(0),new cljs.core.Keyword("lst","user-id","lst/user-id",-206796772),null], null));
cloudxmark.core.send_chan = cljs.core.async.chan.call(null);
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
var vec__36720 = (function (){var G__36721 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36721) {
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
var elem_key = cljs.core.nth.call(null,vec__36720,(0),null);
var query_key = cljs.core.nth.call(null,vec__36720,(1),null);
cljs.core.println.call(null,[cljs.core.str("elem-key"),cljs.core.str(elem_key),cljs.core.str(" query-key:"),cljs.core.str(query_key)].join(''));

return om.dom.input.call(null,{"key": elem_key, "value": query, "onChange": ((function (vec__36720,elem_key,query_key){
return (function (e){
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.fromArray([query_key,e.target.value], true, false)], null));
});})(vec__36720,elem_key,query_key))
});
});
cloudxmark.core.logout_button = (function cloudxmark$core$logout_button(comp){
return React.DOM.button({"type": "button", "onClick": (function (e){
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__19302__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","logout","lst/logout",-1235763963,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19302__auto__);
})())))));
})},om.util.force_children.call(null,"Log out"));
});
cloudxmark.core.login_button = (function cloudxmark$core$login_button(comp){
return React.DOM.button({"type": "button", "onClick": (function (e){
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__19302__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lst","logout","lst/logout",-1235763963,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19302__auto__);
})())))));
})},om.util.force_children.call(null,"Login"));
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

var x36727_36739 = cloudxmark.core.Lsts.prototype;
x36727_36739.componentWillUpdate = ((function (x36727_36739){
return (function (next_props__21502__auto__,next_state__21503__auto__){
var this__21501__auto__ = this;
if(((!((this__21501__auto__ == null)))?(((false) || (this__21501__auto__.om$next$Ident$))?true:false):false)){
var ident__21505__auto___36740 = om.next.ident.call(null,this__21501__auto__,om.next.props.call(null,this__21501__auto__));
var next_ident__21506__auto___36741 = om.next.ident.call(null,this__21501__auto__,om.next._next_props.call(null,next_props__21502__auto__,this__21501__auto__));
if(cljs.core.not_EQ_.call(null,ident__21505__auto___36740,next_ident__21506__auto___36741)){
var idxr__21507__auto___36742 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__21507__auto___36742 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__21507__auto___36742),((function (idxr__21507__auto___36742,ident__21505__auto___36740,next_ident__21506__auto___36741,this__21501__auto__,x36727_36739){
return (function (indexes__21508__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__21508__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__21505__auto___36740], null),cljs.core.disj,this__21501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__21506__auto___36741], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__21501__auto__);
});})(idxr__21507__auto___36742,ident__21505__auto___36740,next_ident__21506__auto___36741,this__21501__auto__,x36727_36739))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__21501__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21501__auto__);
});})(x36727_36739))
;

x36727_36739.shouldComponentUpdate = ((function (x36727_36739){
return (function (next_props__21502__auto__,next_state__21503__auto__){
var this__21501__auto__ = this;
var next_children__21504__auto__ = next_props__21502__auto__.children;
var next_props__21502__auto____$1 = goog.object.get(next_props__21502__auto__,"omcljs$value");
var next_props__21502__auto____$2 = (function (){var G__36729 = next_props__21502__auto____$1;
if((next_props__21502__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__36729);
} else {
return G__36729;
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
});})(x36727_36739))
;

x36727_36739.componentWillUnmount = ((function (x36727_36739){
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
});})(x36727_36739))
;

x36727_36739.componentDidUpdate = ((function (x36727_36739){
return (function (prev_props__21509__auto__,prev_state__21510__auto__){
var this__21501__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21501__auto__);
});})(x36727_36739))
;

x36727_36739.isMounted = ((function (x36727_36739){
return (function (){
var this__21501__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21501__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x36727_36739))
;

x36727_36739.componentWillMount = ((function (x36727_36739){
return (function (){
var this__21501__auto__ = this;
var indexer__21511__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21511__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21511__auto__,this__21501__auto__);
}
});})(x36727_36739))
;

x36727_36739.render = ((function (x36727_36739){
return (function (){
var this__21500__auto__ = this;
var this$ = this__21500__auto__;
var _STAR_reconciler_STAR_36730 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_36731 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_36732 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_36733 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_36734 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21500__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21500__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21500__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21500__auto__);

om.next._STAR_parent_STAR_ = this__21500__auto__;

try{var map__36735 = om.next.props.call(null,this$);
var map__36735__$1 = ((((!((map__36735 == null)))?((((map__36735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36735):map__36735);
var user_id = cljs.core.get.call(null,map__36735__$1,new cljs.core.Keyword("lst","user-id","lst/user-id",-206796772));
var lst = cljs.core.get.call(null,map__36735__$1,new cljs.core.Keyword("lst","lst","lst/lst",269787192));
var lst_ver = cljs.core.get.call(null,map__36735__$1,new cljs.core.Keyword("lst","lst-ver","lst/lst-ver",-959623844));
var curr = cljs.core.get.call(null,map__36735__$1,new cljs.core.Keyword("lst","curr","lst/curr",-1092232479));
if((user_id == null)){
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,"Please login"))),om.util.force_children.call(null,"User id: "),om.util.force_children.call(null,om.dom.input.call(null,null)),om.util.force_children.call(null,"Password: "),om.util.force_children.call(null,om.dom.input.call(null,null)),om.util.force_children.call(null,cloudxmark.core.login_button.call(null,this$)));
} else {
return React.DOM.div(null,om.util.force_children.call(null,cloudxmark.core.logout_button.call(null,this$)),om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Lists"))),om.util.force_children.call(null,cloudxmark.core.refresh_lists_button.call(null,this$,lst_ver)),om.util.force_children.call(null,((!(cljs.core.empty_QMARK_.call(null,lst)))?cloudxmark.core.lst_list.call(null,this$,lst,(((curr == null))?(0):curr)):null)));
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_36734;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_36733;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_36732;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_36731;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_36730;
}});})(x36727_36739))
;


cloudxmark.core.Lsts.prototype.constructor = cloudxmark.core.Lsts;

cloudxmark.core.Lsts.prototype.constructor.displayName = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.prototype.om$isComponent = true;

var x36737_36743 = cloudxmark.core.Lsts;
x36737_36743.om$next$IQueryParams$ = true;

x36737_36743.om$next$IQueryParams$params$arity$1 = ((function (x36737_36743){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst-query","lst-query",-2040921098),(1)], null);
});})(x36737_36743))
;

x36737_36743.om$next$IQuery$ = true;

x36737_36743.om$next$IQuery$query$arity$1 = ((function (x36737_36743){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lst","user-id","lst/user-id",-206796772),new cljs.core.Keyword("lst","curr","lst/curr",-1092232479),new cljs.core.Keyword("lst","lst-ver","lst/lst-ver",-959623844),cljs.core.list(new cljs.core.Keyword("lst","lst","lst/lst",269787192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?lst-query","?lst-query",-2084239327,null)], null))], null);
});})(x36737_36743))
;


var x36738_36744 = cloudxmark.core.Lsts.prototype;
x36738_36744.om$next$IQueryParams$ = true;

x36738_36744.om$next$IQueryParams$params$arity$1 = ((function (x36738_36744){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst-query","lst-query",-2040921098),(1)], null);
});})(x36738_36744))
;

x36738_36744.om$next$IQuery$ = true;

x36738_36744.om$next$IQuery$query$arity$1 = ((function (x36738_36744){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lst","user-id","lst/user-id",-206796772),new cljs.core.Keyword("lst","curr","lst/curr",-1092232479),new cljs.core.Keyword("lst","lst-ver","lst/lst-ver",-959623844),cljs.core.list(new cljs.core.Keyword("lst","lst","lst/lst",269787192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?lst-query","?lst-query",-2084239327,null)], null))], null);
});})(x36738_36744))
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

var x36749_36762 = cloudxmark.core.AutoCompleter.prototype;
x36749_36762.componentWillUpdate = ((function (x36749_36762){
return (function (next_props__21502__auto__,next_state__21503__auto__){
var this__21501__auto__ = this;
if(((!((this__21501__auto__ == null)))?(((false) || (this__21501__auto__.om$next$Ident$))?true:false):false)){
var ident__21505__auto___36763 = om.next.ident.call(null,this__21501__auto__,om.next.props.call(null,this__21501__auto__));
var next_ident__21506__auto___36764 = om.next.ident.call(null,this__21501__auto__,om.next._next_props.call(null,next_props__21502__auto__,this__21501__auto__));
if(cljs.core.not_EQ_.call(null,ident__21505__auto___36763,next_ident__21506__auto___36764)){
var idxr__21507__auto___36765 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__21507__auto___36765 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__21507__auto___36765),((function (idxr__21507__auto___36765,ident__21505__auto___36763,next_ident__21506__auto___36764,this__21501__auto__,x36749_36762){
return (function (indexes__21508__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__21508__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__21505__auto___36763], null),cljs.core.disj,this__21501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__21506__auto___36764], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__21501__auto__);
});})(idxr__21507__auto___36765,ident__21505__auto___36763,next_ident__21506__auto___36764,this__21501__auto__,x36749_36762))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__21501__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21501__auto__);
});})(x36749_36762))
;

x36749_36762.shouldComponentUpdate = ((function (x36749_36762){
return (function (next_props__21502__auto__,next_state__21503__auto__){
var this__21501__auto__ = this;
var next_children__21504__auto__ = next_props__21502__auto__.children;
var next_props__21502__auto____$1 = goog.object.get(next_props__21502__auto__,"omcljs$value");
var next_props__21502__auto____$2 = (function (){var G__36751 = next_props__21502__auto____$1;
if((next_props__21502__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__36751);
} else {
return G__36751;
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
});})(x36749_36762))
;

x36749_36762.componentWillUnmount = ((function (x36749_36762){
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
});})(x36749_36762))
;

x36749_36762.componentDidUpdate = ((function (x36749_36762){
return (function (prev_props__21509__auto__,prev_state__21510__auto__){
var this__21501__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21501__auto__);
});})(x36749_36762))
;

x36749_36762.isMounted = ((function (x36749_36762){
return (function (){
var this__21501__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21501__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x36749_36762))
;

x36749_36762.componentWillMount = ((function (x36749_36762){
return (function (){
var this__21501__auto__ = this;
var indexer__21511__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21511__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21511__auto__,this__21501__auto__);
}
});})(x36749_36762))
;

x36749_36762.render = ((function (x36749_36762){
return (function (){
var this__21500__auto__ = this;
var this$ = this__21500__auto__;
var _STAR_reconciler_STAR_36752 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_36753 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_36754 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_36755 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_36756 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21500__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21500__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21500__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21500__auto__);

om.next._STAR_parent_STAR_ = this__21500__auto__;

try{var map__36757 = om.next.props.call(null,this$);
var map__36757__$1 = ((((!((map__36757 == null)))?((((map__36757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36757):map__36757);
var lst = cljs.core.get.call(null,map__36757__$1,new cljs.core.Keyword("wiki","lst","wiki/lst",270705683));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"AutoCompleter"))),om.util.force_children.call(null,(function (){var G__36759 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloudxmark.core.search_field.call(null,this$,new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648).cljs$core$IFn$_invoke$arity$1(om.next.get_params.call(null,this$)),new cljs.core.Keyword(null,"wiki","wiki",1946329928))], null);
if(!(cljs.core.empty_QMARK_.call(null,lst))){
return cljs.core.conj.call(null,G__36759,cloudxmark.core.result_list.call(null,lst));
} else {
return G__36759;
}
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_36756;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_36755;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_36754;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_36753;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_36752;
}});})(x36749_36762))
;


cloudxmark.core.AutoCompleter.prototype.constructor = cloudxmark.core.AutoCompleter;

cloudxmark.core.AutoCompleter.prototype.constructor.displayName = "cloudxmark.core/AutoCompleter";

cloudxmark.core.AutoCompleter.prototype.om$isComponent = true;

var x36760_36766 = cloudxmark.core.AutoCompleter;
x36760_36766.om$next$IQueryParams$ = true;

x36760_36766.om$next$IQueryParams$params$arity$1 = ((function (x36760_36766){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648),""], null);
});})(x36760_36766))
;

x36760_36766.om$next$IQuery$ = true;

x36760_36766.om$next$IQuery$query$arity$1 = ((function (x36760_36766){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?wiki-query","?wiki-query",-1723016161,null)], null))], null);
});})(x36760_36766))
;


var x36761_36767 = cloudxmark.core.AutoCompleter.prototype;
x36761_36767.om$next$IQueryParams$ = true;

x36761_36767.om$next$IQueryParams$params$arity$1 = ((function (x36761_36767){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648),""], null);
});})(x36761_36767))
;

x36761_36767.om$next$IQuery$ = true;

x36761_36767.om$next$IQuery$query$arity$1 = ((function (x36761_36767){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?wiki-query","?wiki-query",-1723016161,null)], null))], null);
});})(x36761_36767))
;


cloudxmark.core.AutoCompleter.cljs$lang$type = true;

cloudxmark.core.AutoCompleter.cljs$lang$ctorStr = "cloudxmark.core/AutoCompleter";

cloudxmark.core.AutoCompleter.cljs$lang$ctorPrWriter = (function (this__21568__auto__,writer__21569__auto__,opt__21570__auto__){
return cljs.core._write.call(null,writer__21569__auto__,"cloudxmark.core/AutoCompleter");
});
cloudxmark.core.send_to_chan = (function cloudxmark$core$send_to_chan(c){
return (function (p__36777,cb){
var map__36778 = p__36777;
var map__36778__$1 = ((((!((map__36778 == null)))?((((map__36778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36778):map__36778);
var wiki_search = cljs.core.get.call(null,map__36778__$1,new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122));
var lst_search = cljs.core.get.call(null,map__36778__$1,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
if(cljs.core.truth_(wiki_search)){
var map__36780 = om.next.query__GT_ast.call(null,wiki_search);
var map__36780__$1 = ((((!((map__36780 == null)))?((((map__36780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36780):map__36780);
var vec__36781 = cljs.core.get.call(null,map__36780__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var wiki_search__$1 = cljs.core.nth.call(null,vec__36781,(0),null);
var query = cljs.core.get_in.call(null,wiki_search__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"query","query",-1288509510)], null));
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [query,new cljs.core.Keyword(null,"wiki","wiki",1946329928),cb], null));
} else {
if(cljs.core.truth_(lst_search)){
var map__36783 = om.next.query__GT_ast.call(null,lst_search);
var map__36783__$1 = ((((!((map__36783 == null)))?((((map__36783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36783):map__36783);
var vec__36784 = cljs.core.get.call(null,map__36783__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var lst_search__$1 = cljs.core.nth.call(null,vec__36784,(0),null);
var query = cljs.core.get_in.call(null,lst_search__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"query","query",-1288509510)], null));
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [query,new cljs.core.Keyword(null,"lst","lst",269745987),cb], null));
} else {
return null;
}
}
});
});
cloudxmark.core.wiki_reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),cloudxmark.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),cloudxmark.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),cloudxmark.core.mutate], null)),new cljs.core.Keyword(null,"send","send",-652151114),cloudxmark.core.send_to_chan.call(null,cloudxmark.core.send_chan),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122)], null)], null));
cloudxmark.core.lst_reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),cloudxmark.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),cloudxmark.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),cloudxmark.core.mutate], null)),new cljs.core.Keyword(null,"send","send",-652151114),cloudxmark.core.send_to_chan.call(null,cloudxmark.core.send_chan),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lst-search","lst-search",371565861)], null)], null));
cloudxmark.core.search_loop = (function cloudxmark$core$search_loop(c){
var c__21409__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21409__auto__){
return (function (){
var f__21410__auto__ = (function (){var switch__21388__auto__ = ((function (c__21409__auto__){
return (function (state_36942){
var state_val_36943 = (state_36942[(1)]);
if((state_val_36943 === (7))){
var inst_36935 = (state_36942[(2)]);
var state_36942__$1 = (function (){var statearr_36944 = state_36942;
(statearr_36944[(7)] = inst_36935);

return statearr_36944;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36942__$1,(16),c);
} else {
if((state_val_36943 === (1))){
var state_36942__$1 = state_36942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36942__$1,(2),c);
} else {
if((state_val_36943 === (4))){
var inst_36940 = (state_36942[(2)]);
var state_36942__$1 = state_36942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36942__$1,inst_36940);
} else {
if((state_val_36943 === (15))){
var inst_36931 = (state_36942[(2)]);
var state_36942__$1 = state_36942;
var statearr_36945_36970 = state_36942__$1;
(statearr_36945_36970[(2)] = inst_36931);

(statearr_36945_36970[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36943 === (13))){
var state_36942__$1 = state_36942;
var statearr_36946_36971 = state_36942__$1;
(statearr_36946_36971[(2)] = null);

(statearr_36946_36971[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36943 === (6))){
var inst_36890 = (state_36942[(8)]);
var inst_36906 = cljs.core._EQ_.call(null,inst_36890,new cljs.core.Keyword(null,"lst","lst",269745987));
var state_36942__$1 = state_36942;
if(inst_36906){
var statearr_36947_36972 = state_36942__$1;
(statearr_36947_36972[(1)] = (9));

} else {
var statearr_36948_36973 = state_36942__$1;
(statearr_36948_36973[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36943 === (3))){
var inst_36890 = (state_36942[(8)]);
var inst_36886 = (state_36942[(9)]);
var inst_36889 = cljs.core.nth.call(null,inst_36886,(0),null);
var inst_36890__$1 = cljs.core.nth.call(null,inst_36886,(1),null);
var inst_36891 = cljs.core.nth.call(null,inst_36886,(2),null);
var inst_36892 = cljs.core._EQ_.call(null,inst_36890__$1,new cljs.core.Keyword(null,"wiki","wiki",1946329928));
var state_36942__$1 = (function (){var statearr_36949 = state_36942;
(statearr_36949[(8)] = inst_36890__$1);

(statearr_36949[(10)] = inst_36889);

(statearr_36949[(11)] = inst_36891);

return statearr_36949;
})();
if(inst_36892){
var statearr_36950_36974 = state_36942__$1;
(statearr_36950_36974[(1)] = (5));

} else {
var statearr_36951_36975 = state_36942__$1;
(statearr_36951_36975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36943 === (12))){
var inst_36910 = (state_36942[(2)]);
var inst_36911 = cljs.core.js__GT_clj.call(null,inst_36910);
var inst_36912 = cljs.core.List.EMPTY;
var inst_36913 = new cljs.core.Symbol("lst","set-lst","lst/set-lst",-1534044806,null);
var inst_36914 = cljs.core._conj.call(null,inst_36912,inst_36913);
var inst_36915 = cljs.core.List.EMPTY;
var inst_36916 = cljs.core._conj.call(null,inst_36915,inst_36911);
var inst_36917 = cljs.core.concat.call(null,inst_36914,inst_36916);
var inst_36918 = cljs.core.seq.call(null,inst_36917);
var inst_36919 = cljs.core.sequence.call(null,inst_36918);
var inst_36920 = cljs.core.List.EMPTY;
var inst_36921 = cljs.core._conj.call(null,inst_36920,inst_36919);
var inst_36922 = cljs.core.concat.call(null,inst_36921);
var inst_36923 = cljs.core.seq.call(null,inst_36922);
var inst_36924 = cljs.core.sequence.call(null,inst_36923);
var inst_36925 = cljs.core.vec.call(null,inst_36924);
var inst_36926 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_36925);
var state_36942__$1 = state_36942;
var statearr_36952_36976 = state_36942__$1;
(statearr_36952_36976[(2)] = inst_36926);

(statearr_36952_36976[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36943 === (2))){
var inst_36882 = (state_36942[(2)]);
var inst_36883 = cljs.core.nth.call(null,inst_36882,(0),null);
var inst_36884 = cljs.core.nth.call(null,inst_36882,(1),null);
var inst_36885 = cljs.core.nth.call(null,inst_36882,(2),null);
var inst_36886 = inst_36882;
var state_36942__$1 = (function (){var statearr_36953 = state_36942;
(statearr_36953[(12)] = inst_36884);

(statearr_36953[(13)] = inst_36883);

(statearr_36953[(9)] = inst_36886);

(statearr_36953[(14)] = inst_36885);

return statearr_36953;
})();
var statearr_36954_36977 = state_36942__$1;
(statearr_36954_36977[(2)] = null);

(statearr_36954_36977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36943 === (11))){
var inst_36933 = (state_36942[(2)]);
var state_36942__$1 = state_36942;
var statearr_36955_36978 = state_36942__$1;
(statearr_36955_36978[(2)] = inst_36933);

(statearr_36955_36978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36943 === (9))){
var inst_36908 = cloudxmark.core.jsonp.call(null,"/getItems");
var state_36942__$1 = state_36942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36942__$1,(12),inst_36908);
} else {
if((state_val_36943 === (5))){
var inst_36889 = (state_36942[(10)]);
var inst_36895 = [cljs.core.str(cloudxmark.core.wiki_url),cljs.core.str(inst_36889)].join('');
var inst_36896 = cloudxmark.core.jsonp.call(null,inst_36895);
var state_36942__$1 = state_36942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36942__$1,(8),inst_36896);
} else {
if((state_val_36943 === (14))){
var state_36942__$1 = state_36942;
var statearr_36956_36979 = state_36942__$1;
(statearr_36956_36979[(2)] = null);

(statearr_36956_36979[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36943 === (16))){
var inst_36937 = (state_36942[(2)]);
var inst_36886 = inst_36937;
var state_36942__$1 = (function (){var statearr_36957 = state_36942;
(statearr_36957[(9)] = inst_36886);

return statearr_36957;
})();
var statearr_36958_36980 = state_36942__$1;
(statearr_36958_36980[(2)] = null);

(statearr_36958_36980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36943 === (10))){
var state_36942__$1 = state_36942;
var statearr_36959_36981 = state_36942__$1;
(statearr_36959_36981[(1)] = (13));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36943 === (8))){
var inst_36891 = (state_36942[(11)]);
var inst_36898 = (state_36942[(2)]);
var inst_36899 = cljs.core.nth.call(null,inst_36898,(0),null);
var inst_36900 = cljs.core.nth.call(null,inst_36898,(1),null);
var inst_36901 = [new cljs.core.Keyword("wiki","lst","wiki/lst",270705683)];
var inst_36902 = [inst_36900];
var inst_36903 = cljs.core.PersistentHashMap.fromArrays(inst_36901,inst_36902);
var inst_36904 = inst_36891.call(null,inst_36903);
var state_36942__$1 = (function (){var statearr_36961 = state_36942;
(statearr_36961[(15)] = inst_36899);

return statearr_36961;
})();
var statearr_36962_36982 = state_36942__$1;
(statearr_36962_36982[(2)] = inst_36904);

(statearr_36962_36982[(1)] = (7));


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
var statearr_36966 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36966[(0)] = cloudxmark$core$search_loop_$_state_machine__21389__auto__);

(statearr_36966[(1)] = (1));

return statearr_36966;
});
var cloudxmark$core$search_loop_$_state_machine__21389__auto____1 = (function (state_36942){
while(true){
var ret_value__21390__auto__ = (function (){try{while(true){
var result__21391__auto__ = switch__21388__auto__.call(null,state_36942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21391__auto__;
}
break;
}
}catch (e36967){if((e36967 instanceof Object)){
var ex__21392__auto__ = e36967;
var statearr_36968_36983 = state_36942;
(statearr_36968_36983[(5)] = ex__21392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36984 = state_36942;
state_36942 = G__36984;
continue;
} else {
return ret_value__21390__auto__;
}
break;
}
});
cloudxmark$core$search_loop_$_state_machine__21389__auto__ = function(state_36942){
switch(arguments.length){
case 0:
return cloudxmark$core$search_loop_$_state_machine__21389__auto____0.call(this);
case 1:
return cloudxmark$core$search_loop_$_state_machine__21389__auto____1.call(this,state_36942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cloudxmark$core$search_loop_$_state_machine__21389__auto__.cljs$core$IFn$_invoke$arity$0 = cloudxmark$core$search_loop_$_state_machine__21389__auto____0;
cloudxmark$core$search_loop_$_state_machine__21389__auto__.cljs$core$IFn$_invoke$arity$1 = cloudxmark$core$search_loop_$_state_machine__21389__auto____1;
return cloudxmark$core$search_loop_$_state_machine__21389__auto__;
})()
;})(switch__21388__auto__,c__21409__auto__))
})();
var state__21411__auto__ = (function (){var statearr_36969 = f__21410__auto__.call(null);
(statearr_36969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21409__auto__);

return statearr_36969;
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