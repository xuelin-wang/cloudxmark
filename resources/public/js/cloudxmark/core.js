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
var args26783 = [];
var len__19538__auto___26786 = arguments.length;
var i__19539__auto___26787 = (0);
while(true){
if((i__19539__auto___26787 < len__19538__auto___26786)){
args26783.push((arguments[i__19539__auto___26787]));

var G__26788 = (i__19539__auto___26787 + (1));
i__19539__auto___26787 = G__26788;
continue;
} else {
}
break;
}

var G__26785 = args26783.length;
switch (G__26785) {
case 1:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26783.length)].join('')));

}
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return cloudxmark.core.jsonp.call(null,cljs.core.async.chan.call(null),uri);
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2 = (function (c,uri){
var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));
cljs.core.println.call(null,[cljs.core.str("before send "),cljs.core.str(uri)].join(''));

gjsonp.send(null,((function (gjsonp){
return (function (p1__26781_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__26781_SHARP_);
});})(gjsonp))
,((function (gjsonp){
return (function (p1__26782_SHARP_){
return cljs.core.println.call(null,[cljs.core.str("error!"),cljs.core.str(p1__26782_SHARP_)].join(''));
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
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),(function (p__26790,k,p__26791){
var map__26792 = p__26790;
var map__26792__$1 = ((((!((map__26792 == null)))?((((map__26792.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26792.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26792):map__26792);
var env = map__26792__$1;
var state = cljs.core.get.call(null,map__26792__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__26792__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__26793 = p__26791;
var map__26793__$1 = ((((!((map__26793 == null)))?((((map__26793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26793):map__26793);
var query = cljs.core.get.call(null,map__26793__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cljs.core.deref.call(null,state),k,cljs.core.PersistentVector.EMPTY)], null),(((clojure.string.blank_QMARK_.call(null,query)) || ((cljs.core.count.call(null,query) < (3))))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122),ast], null)));
}));
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword("lst","lst","lst/lst",269787192),(function (p__26796,_,p__26797){
var map__26798 = p__26796;
var map__26798__$1 = ((((!((map__26798 == null)))?((((map__26798.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26798.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26798):map__26798);
var env = map__26798__$1;
var state = cljs.core.get.call(null,map__26798__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__26798__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__26799 = p__26797;
var map__26799__$1 = ((((!((map__26799 == null)))?((((map__26799.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26799.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26799):map__26799);
var query = cljs.core.get.call(null,map__26799__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var curr_list = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("lst","lst","lst/lst",269787192));
var curr_ver = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("lst","lst-ver","lst/lst-ver",-959623844));
cljs.core.println.call(null,[cljs.core.str("query:"),cljs.core.str(query),cljs.core.str(", curr-list"),cljs.core.str(curr_list),cljs.core.str(", curr-ver:"),cljs.core.str(curr_ver)].join(''));

if(((query > curr_ver)) || ((curr_list == null))){
cljs.core.println.call(null,[cljs.core.str("query lists:"),cljs.core.str((curr_list == null))].join(''));

return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst-search","lst-search",371565861),ast], null));
} else {
cljs.core.println.call(null,[cljs.core.str("no query, lst: "),cljs.core.str(curr_list),cljs.core.str(", ver:"),cljs.core.str(curr_ver)].join(''));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),curr_list], null);
}
}));
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword("lst","curr","lst/curr",-1092232479),(function (p__26802,k,_){
var map__26803 = p__26802;
var map__26803__$1 = ((((!((map__26803 == null)))?((((map__26803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26803):map__26803);
var env = map__26803__$1;
var state = cljs.core.get.call(null,map__26803__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__26803__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cljs.core.deref.call(null,state),k,cljs.core.PersistentVector.EMPTY)], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword("lst","lst-ver","lst/lst-ver",-959623844),(function (p__26805,k,_){
var map__26806 = p__26805;
var map__26806__$1 = ((((!((map__26806 == null)))?((((map__26806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26806):map__26806);
var env = map__26806__$1;
var state = cljs.core.get.call(null,map__26806__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__26806__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
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
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-curr","lst/set-curr",1109194929,null),(function (p__26808,_,p__26809){
var map__26810 = p__26808;
var map__26810__$1 = ((((!((map__26810 == null)))?((((map__26810.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26810.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26810):map__26810);
var env = map__26810__$1;
var state = cljs.core.get.call(null,map__26810__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__26811 = p__26809;
var map__26811__$1 = ((((!((map__26811 == null)))?((((map__26811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26811):map__26811);
var curr = cljs.core.get.call(null,map__26811__$1,new cljs.core.Keyword("lst","curr","lst/curr",-1092232479));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__26810,map__26810__$1,env,state,map__26811,map__26811__$1,curr){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lst","curr","lst/curr",-1092232479)], null),cljs.core.constantly.call(null,curr));

return cljs.core.println.call(null,[cljs.core.str("set to "),cljs.core.str(curr)].join(''));
});})(map__26810,map__26810__$1,env,state,map__26811,map__26811__$1,curr))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("lst","set-list","lst/set-list",1651440369,null),(function (p__26814,_,p__26815){
var map__26816 = p__26814;
var map__26816__$1 = ((((!((map__26816 == null)))?((((map__26816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26816):map__26816);
var env = map__26816__$1;
var state = cljs.core.get.call(null,map__26816__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__26817 = p__26815;
var map__26817__$1 = ((((!((map__26817 == null)))?((((map__26817.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26817.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26817):map__26817);
var lst = cljs.core.get.call(null,map__26817__$1,new cljs.core.Keyword("lst","lst","lst/lst",269787192));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__26816,map__26816__$1,env,state,map__26817,map__26817__$1,lst){
return (function (){
cljs.core.println.call(null,[cljs.core.str("ver:"),cljs.core.str(cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("lst","lst-ver","lst/lst-ver",-959623844))),cljs.core.str("list:"),cljs.core.str(cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("lst","lst","lst/lst",269787192)))].join(''));

cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lst","lst","lst/lst",269787192)], null),cljs.core.constantly.call(null,cljs.core.js__GT_clj.call(null,lst)));

cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lst","lst-ver","lst/lst-ver",-959623844)], null),cljs.core.inc);

return cljs.core.println.call(null,[cljs.core.str("set list to "),cljs.core.str(lst),cljs.core.str(", list becomes: "),cljs.core.str(cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("lst","lst","lst/lst",269787192)))].join(''));
});})(map__26816,map__26816__$1,env,state,map__26817,map__26817__$1,lst))
], null);
}));
cloudxmark.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("lst","lst","lst/lst",269787192),null,new cljs.core.Keyword("lst","lst-ver","lst/lst-ver",-959623844),(0),new cljs.core.Keyword("lst","curr","lst/curr",-1092232479),(0)], null));
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
var vec__26822 = (function (){var G__26823 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26823) {
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
var elem_key = cljs.core.nth.call(null,vec__26822,(0),null);
var query_key = cljs.core.nth.call(null,vec__26822,(1),null);
cljs.core.println.call(null,[cljs.core.str("elem-key"),cljs.core.str(elem_key),cljs.core.str(" query-key:"),cljs.core.str(query_key)].join(''));

return om.dom.input.call(null,{"key": elem_key, "value": query, "onChange": ((function (vec__26822,elem_key,query_key){
return (function (e){
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.fromArray([query_key,e.target.value], true, false)], null));
});})(vec__26822,elem_key,query_key))
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

var x26829_26841 = cloudxmark.core.Lsts.prototype;
x26829_26841.componentWillUpdate = ((function (x26829_26841){
return (function (next_props__21502__auto__,next_state__21503__auto__){
var this__21501__auto__ = this;
if(((!((this__21501__auto__ == null)))?(((false) || (this__21501__auto__.om$next$Ident$))?true:false):false)){
var ident__21505__auto___26842 = om.next.ident.call(null,this__21501__auto__,om.next.props.call(null,this__21501__auto__));
var next_ident__21506__auto___26843 = om.next.ident.call(null,this__21501__auto__,om.next._next_props.call(null,next_props__21502__auto__,this__21501__auto__));
if(cljs.core.not_EQ_.call(null,ident__21505__auto___26842,next_ident__21506__auto___26843)){
var idxr__21507__auto___26844 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__21507__auto___26844 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__21507__auto___26844),((function (idxr__21507__auto___26844,ident__21505__auto___26842,next_ident__21506__auto___26843,this__21501__auto__,x26829_26841){
return (function (indexes__21508__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__21508__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__21505__auto___26842], null),cljs.core.disj,this__21501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__21506__auto___26843], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__21501__auto__);
});})(idxr__21507__auto___26844,ident__21505__auto___26842,next_ident__21506__auto___26843,this__21501__auto__,x26829_26841))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__21501__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21501__auto__);
});})(x26829_26841))
;

x26829_26841.shouldComponentUpdate = ((function (x26829_26841){
return (function (next_props__21502__auto__,next_state__21503__auto__){
var this__21501__auto__ = this;
var next_children__21504__auto__ = next_props__21502__auto__.children;
var next_props__21502__auto____$1 = goog.object.get(next_props__21502__auto__,"omcljs$value");
var next_props__21502__auto____$2 = (function (){var G__26831 = next_props__21502__auto____$1;
if((next_props__21502__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__26831);
} else {
return G__26831;
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
});})(x26829_26841))
;

x26829_26841.componentWillUnmount = ((function (x26829_26841){
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
});})(x26829_26841))
;

x26829_26841.componentDidUpdate = ((function (x26829_26841){
return (function (prev_props__21509__auto__,prev_state__21510__auto__){
var this__21501__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21501__auto__);
});})(x26829_26841))
;

x26829_26841.isMounted = ((function (x26829_26841){
return (function (){
var this__21501__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21501__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x26829_26841))
;

x26829_26841.componentWillMount = ((function (x26829_26841){
return (function (){
var this__21501__auto__ = this;
var indexer__21511__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21511__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21511__auto__,this__21501__auto__);
}
});})(x26829_26841))
;

x26829_26841.render = ((function (x26829_26841){
return (function (){
var this__21500__auto__ = this;
var this$ = this__21500__auto__;
var _STAR_reconciler_STAR_26832 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_26833 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_26834 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_26835 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_26836 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21500__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21500__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21500__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21500__auto__);

om.next._STAR_parent_STAR_ = this__21500__auto__;

try{var map__26837 = om.next.props.call(null,this$);
var map__26837__$1 = ((((!((map__26837 == null)))?((((map__26837.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26837.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26837):map__26837);
var lst = cljs.core.get.call(null,map__26837__$1,new cljs.core.Keyword("lst","lst","lst/lst",269787192));
var lst_ver = cljs.core.get.call(null,map__26837__$1,new cljs.core.Keyword("lst","lst-ver","lst/lst-ver",-959623844));
var curr = cljs.core.get.call(null,map__26837__$1,new cljs.core.Keyword("lst","curr","lst/curr",-1092232479));
cljs.core.println.call(null,[cljs.core.str("in render list: "),cljs.core.str(lst),cljs.core.str(", ver:"),cljs.core.str(lst_ver),cljs.core.str(", curr:"),cljs.core.str(curr)].join(''));

return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Lists"))),om.util.force_children.call(null,cloudxmark.core.refresh_lists_button.call(null,this$,lst_ver)),om.util.force_children.call(null,((!(cljs.core.empty_QMARK_.call(null,lst)))?cloudxmark.core.lst_list.call(null,this$,lst,(((curr == null))?(0):curr)):null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_26836;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_26835;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_26834;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_26833;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_26832;
}});})(x26829_26841))
;


cloudxmark.core.Lsts.prototype.constructor = cloudxmark.core.Lsts;

cloudxmark.core.Lsts.prototype.constructor.displayName = "cloudxmark.core/Lsts";

cloudxmark.core.Lsts.prototype.om$isComponent = true;

var x26839_26845 = cloudxmark.core.Lsts;
x26839_26845.om$next$IQueryParams$ = true;

x26839_26845.om$next$IQueryParams$params$arity$1 = ((function (x26839_26845){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst-query","lst-query",-2040921098),(1)], null);
});})(x26839_26845))
;

x26839_26845.om$next$IQuery$ = true;

x26839_26845.om$next$IQuery$query$arity$1 = ((function (x26839_26845){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lst","curr","lst/curr",-1092232479),new cljs.core.Keyword("lst","lst-ver","lst/lst-ver",-959623844),cljs.core.list(new cljs.core.Keyword("lst","lst","lst/lst",269787192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?lst-query","?lst-query",-2084239327,null)], null))], null);
});})(x26839_26845))
;


var x26840_26846 = cloudxmark.core.Lsts.prototype;
x26840_26846.om$next$IQueryParams$ = true;

x26840_26846.om$next$IQueryParams$params$arity$1 = ((function (x26840_26846){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lst-query","lst-query",-2040921098),(1)], null);
});})(x26840_26846))
;

x26840_26846.om$next$IQuery$ = true;

x26840_26846.om$next$IQuery$query$arity$1 = ((function (x26840_26846){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lst","curr","lst/curr",-1092232479),new cljs.core.Keyword("lst","lst-ver","lst/lst-ver",-959623844),cljs.core.list(new cljs.core.Keyword("lst","lst","lst/lst",269787192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?lst-query","?lst-query",-2084239327,null)], null))], null);
});})(x26840_26846))
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

var x26851_26864 = cloudxmark.core.AutoCompleter.prototype;
x26851_26864.componentWillUpdate = ((function (x26851_26864){
return (function (next_props__21502__auto__,next_state__21503__auto__){
var this__21501__auto__ = this;
if(((!((this__21501__auto__ == null)))?(((false) || (this__21501__auto__.om$next$Ident$))?true:false):false)){
var ident__21505__auto___26865 = om.next.ident.call(null,this__21501__auto__,om.next.props.call(null,this__21501__auto__));
var next_ident__21506__auto___26866 = om.next.ident.call(null,this__21501__auto__,om.next._next_props.call(null,next_props__21502__auto__,this__21501__auto__));
if(cljs.core.not_EQ_.call(null,ident__21505__auto___26865,next_ident__21506__auto___26866)){
var idxr__21507__auto___26867 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__21507__auto___26867 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__21507__auto___26867),((function (idxr__21507__auto___26867,ident__21505__auto___26865,next_ident__21506__auto___26866,this__21501__auto__,x26851_26864){
return (function (indexes__21508__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__21508__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__21505__auto___26865], null),cljs.core.disj,this__21501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__21506__auto___26866], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__21501__auto__);
});})(idxr__21507__auto___26867,ident__21505__auto___26865,next_ident__21506__auto___26866,this__21501__auto__,x26851_26864))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__21501__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21501__auto__);
});})(x26851_26864))
;

x26851_26864.shouldComponentUpdate = ((function (x26851_26864){
return (function (next_props__21502__auto__,next_state__21503__auto__){
var this__21501__auto__ = this;
var next_children__21504__auto__ = next_props__21502__auto__.children;
var next_props__21502__auto____$1 = goog.object.get(next_props__21502__auto__,"omcljs$value");
var next_props__21502__auto____$2 = (function (){var G__26853 = next_props__21502__auto____$1;
if((next_props__21502__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__26853);
} else {
return G__26853;
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
});})(x26851_26864))
;

x26851_26864.componentWillUnmount = ((function (x26851_26864){
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
});})(x26851_26864))
;

x26851_26864.componentDidUpdate = ((function (x26851_26864){
return (function (prev_props__21509__auto__,prev_state__21510__auto__){
var this__21501__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21501__auto__);
});})(x26851_26864))
;

x26851_26864.isMounted = ((function (x26851_26864){
return (function (){
var this__21501__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21501__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x26851_26864))
;

x26851_26864.componentWillMount = ((function (x26851_26864){
return (function (){
var this__21501__auto__ = this;
var indexer__21511__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21511__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21511__auto__,this__21501__auto__);
}
});})(x26851_26864))
;

x26851_26864.render = ((function (x26851_26864){
return (function (){
var this__21500__auto__ = this;
var this$ = this__21500__auto__;
var _STAR_reconciler_STAR_26854 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_26855 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_26856 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_26857 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_26858 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21500__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21500__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21500__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21500__auto__);

om.next._STAR_parent_STAR_ = this__21500__auto__;

try{var map__26859 = om.next.props.call(null,this$);
var map__26859__$1 = ((((!((map__26859 == null)))?((((map__26859.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26859.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26859):map__26859);
var lst = cljs.core.get.call(null,map__26859__$1,new cljs.core.Keyword("wiki","lst","wiki/lst",270705683));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"AutoCompleter"))),om.util.force_children.call(null,(function (){var G__26861 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloudxmark.core.search_field.call(null,this$,new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648).cljs$core$IFn$_invoke$arity$1(om.next.get_params.call(null,this$)),new cljs.core.Keyword(null,"wiki","wiki",1946329928))], null);
if(!(cljs.core.empty_QMARK_.call(null,lst))){
return cljs.core.conj.call(null,G__26861,cloudxmark.core.result_list.call(null,lst));
} else {
return G__26861;
}
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_26858;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_26857;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_26856;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_26855;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_26854;
}});})(x26851_26864))
;


cloudxmark.core.AutoCompleter.prototype.constructor = cloudxmark.core.AutoCompleter;

cloudxmark.core.AutoCompleter.prototype.constructor.displayName = "cloudxmark.core/AutoCompleter";

cloudxmark.core.AutoCompleter.prototype.om$isComponent = true;

var x26862_26868 = cloudxmark.core.AutoCompleter;
x26862_26868.om$next$IQueryParams$ = true;

x26862_26868.om$next$IQueryParams$params$arity$1 = ((function (x26862_26868){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648),""], null);
});})(x26862_26868))
;

x26862_26868.om$next$IQuery$ = true;

x26862_26868.om$next$IQuery$query$arity$1 = ((function (x26862_26868){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?wiki-query","?wiki-query",-1723016161,null)], null))], null);
});})(x26862_26868))
;


var x26863_26869 = cloudxmark.core.AutoCompleter.prototype;
x26863_26869.om$next$IQueryParams$ = true;

x26863_26869.om$next$IQueryParams$params$arity$1 = ((function (x26863_26869){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648),""], null);
});})(x26863_26869))
;

x26863_26869.om$next$IQuery$ = true;

x26863_26869.om$next$IQuery$query$arity$1 = ((function (x26863_26869){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?wiki-query","?wiki-query",-1723016161,null)], null))], null);
});})(x26863_26869))
;


cloudxmark.core.AutoCompleter.cljs$lang$type = true;

cloudxmark.core.AutoCompleter.cljs$lang$ctorStr = "cloudxmark.core/AutoCompleter";

cloudxmark.core.AutoCompleter.cljs$lang$ctorPrWriter = (function (this__21568__auto__,writer__21569__auto__,opt__21570__auto__){
return cljs.core._write.call(null,writer__21569__auto__,"cloudxmark.core/AutoCompleter");
});
cloudxmark.core.send_to_chan = (function cloudxmark$core$send_to_chan(c){
return (function (p__26879,cb){
var map__26880 = p__26879;
var map__26880__$1 = ((((!((map__26880 == null)))?((((map__26880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26880):map__26880);
var wiki_search = cljs.core.get.call(null,map__26880__$1,new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122));
var lst_search = cljs.core.get.call(null,map__26880__$1,new cljs.core.Keyword(null,"lst-search","lst-search",371565861));
if(cljs.core.truth_(wiki_search)){
var map__26882 = om.next.query__GT_ast.call(null,wiki_search);
var map__26882__$1 = ((((!((map__26882 == null)))?((((map__26882.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26882.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26882):map__26882);
var vec__26883 = cljs.core.get.call(null,map__26882__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var wiki_search__$1 = cljs.core.nth.call(null,vec__26883,(0),null);
var query = cljs.core.get_in.call(null,wiki_search__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"query","query",-1288509510)], null));
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [query,new cljs.core.Keyword(null,"wiki","wiki",1946329928),cb], null));
} else {
if(cljs.core.truth_(lst_search)){
var map__26885 = om.next.query__GT_ast.call(null,lst_search);
var map__26885__$1 = ((((!((map__26885 == null)))?((((map__26885.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26885.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26885):map__26885);
var vec__26886 = cljs.core.get.call(null,map__26885__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var lst_search__$1 = cljs.core.nth.call(null,vec__26886,(0),null);
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
return (function (state_27067){
var state_val_27068 = (state_27067[(1)]);
if((state_val_27068 === (7))){
var inst_27060 = (state_27067[(2)]);
var state_27067__$1 = (function (){var statearr_27069 = state_27067;
(statearr_27069[(7)] = inst_27060);

return statearr_27069;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27067__$1,(16),c);
} else {
if((state_val_27068 === (1))){
var state_27067__$1 = state_27067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27067__$1,(2),c);
} else {
if((state_val_27068 === (4))){
var inst_27065 = (state_27067[(2)]);
var state_27067__$1 = state_27067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27067__$1,inst_27065);
} else {
if((state_val_27068 === (15))){
var inst_27056 = (state_27067[(2)]);
var state_27067__$1 = state_27067;
var statearr_27070_27096 = state_27067__$1;
(statearr_27070_27096[(2)] = inst_27056);

(statearr_27070_27096[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27068 === (13))){
var state_27067__$1 = state_27067;
var statearr_27071_27097 = state_27067__$1;
(statearr_27071_27097[(2)] = null);

(statearr_27071_27097[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27068 === (6))){
var inst_27004 = (state_27067[(8)]);
var inst_27022 = cljs.core._EQ_.call(null,inst_27004,new cljs.core.Keyword(null,"lst","lst",269745987));
var state_27067__$1 = state_27067;
if(inst_27022){
var statearr_27072_27098 = state_27067__$1;
(statearr_27072_27098[(1)] = (9));

} else {
var statearr_27073_27099 = state_27067__$1;
(statearr_27073_27099[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27068 === (3))){
var inst_27004 = (state_27067[(8)]);
var inst_27000 = (state_27067[(9)]);
var inst_27003 = cljs.core.nth.call(null,inst_27000,(0),null);
var inst_27004__$1 = cljs.core.nth.call(null,inst_27000,(1),null);
var inst_27005 = cljs.core.nth.call(null,inst_27000,(2),null);
var inst_27006 = cljs.core._EQ_.call(null,inst_27004__$1,new cljs.core.Keyword(null,"wiki","wiki",1946329928));
var state_27067__$1 = (function (){var statearr_27074 = state_27067;
(statearr_27074[(8)] = inst_27004__$1);

(statearr_27074[(10)] = inst_27005);

(statearr_27074[(11)] = inst_27003);

return statearr_27074;
})();
if(inst_27006){
var statearr_27075_27100 = state_27067__$1;
(statearr_27075_27100[(1)] = (5));

} else {
var statearr_27076_27101 = state_27067__$1;
(statearr_27076_27101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27068 === (12))){
var inst_27026 = (state_27067[(2)]);
var inst_27027 = [cljs.core.str("lst: "),cljs.core.str("results: "),cljs.core.str(inst_27026)].join('');
var inst_27028 = cljs.core.println.call(null,inst_27027);
var inst_27029 = cljs.core.List.EMPTY;
var inst_27030 = new cljs.core.Symbol("lst","set-list","lst/set-list",1651440369,null);
var inst_27031 = cljs.core._conj.call(null,inst_27029,inst_27030);
var inst_27032 = cljs.core.List.EMPTY;
var inst_27033 = cljs.core._conj.call(null,inst_27032,new cljs.core.Keyword("lst","lst","lst/lst",269787192));
var inst_27034 = cljs.core.List.EMPTY;
var inst_27035 = cljs.core._conj.call(null,inst_27034,inst_27026);
var inst_27036 = cljs.core.concat.call(null,inst_27033,inst_27035);
var inst_27037 = cljs.core.seq.call(null,inst_27036);
var inst_27038 = cljs.core.sequence.call(null,inst_27037);
var inst_27039 = cljs.core.apply.call(null,cljs.core.array_map,inst_27038);
var inst_27040 = cljs.core.List.EMPTY;
var inst_27041 = cljs.core._conj.call(null,inst_27040,inst_27039);
var inst_27042 = cljs.core.concat.call(null,inst_27031,inst_27041);
var inst_27043 = cljs.core.seq.call(null,inst_27042);
var inst_27044 = cljs.core.sequence.call(null,inst_27043);
var inst_27045 = cljs.core.List.EMPTY;
var inst_27046 = cljs.core._conj.call(null,inst_27045,inst_27044);
var inst_27047 = cljs.core.concat.call(null,inst_27046);
var inst_27048 = cljs.core.seq.call(null,inst_27047);
var inst_27049 = cljs.core.sequence.call(null,inst_27048);
var inst_27050 = cljs.core.vec.call(null,inst_27049);
var inst_27051 = om.next.transact_BANG_.call(null,cloudxmark.core.lst_reconciler,inst_27050);
var state_27067__$1 = (function (){var statearr_27077 = state_27067;
(statearr_27077[(12)] = inst_27028);

return statearr_27077;
})();
var statearr_27078_27102 = state_27067__$1;
(statearr_27078_27102[(2)] = inst_27051);

(statearr_27078_27102[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27068 === (2))){
var inst_26996 = (state_27067[(2)]);
var inst_26997 = cljs.core.nth.call(null,inst_26996,(0),null);
var inst_26998 = cljs.core.nth.call(null,inst_26996,(1),null);
var inst_26999 = cljs.core.nth.call(null,inst_26996,(2),null);
var inst_27000 = inst_26996;
var state_27067__$1 = (function (){var statearr_27079 = state_27067;
(statearr_27079[(13)] = inst_26998);

(statearr_27079[(14)] = inst_26997);

(statearr_27079[(15)] = inst_26999);

(statearr_27079[(9)] = inst_27000);

return statearr_27079;
})();
var statearr_27080_27103 = state_27067__$1;
(statearr_27080_27103[(2)] = null);

(statearr_27080_27103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27068 === (11))){
var inst_27058 = (state_27067[(2)]);
var state_27067__$1 = state_27067;
var statearr_27081_27104 = state_27067__$1;
(statearr_27081_27104[(2)] = inst_27058);

(statearr_27081_27104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27068 === (9))){
var inst_27024 = cloudxmark.core.jsonp.call(null,cloudxmark.core.lst_url);
var state_27067__$1 = state_27067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27067__$1,(12),inst_27024);
} else {
if((state_val_27068 === (5))){
var inst_27003 = (state_27067[(11)]);
var inst_27009 = [cljs.core.str(cloudxmark.core.wiki_url),cljs.core.str(inst_27003)].join('');
var inst_27010 = cloudxmark.core.jsonp.call(null,inst_27009);
var state_27067__$1 = state_27067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27067__$1,(8),inst_27010);
} else {
if((state_val_27068 === (14))){
var state_27067__$1 = state_27067;
var statearr_27082_27105 = state_27067__$1;
(statearr_27082_27105[(2)] = null);

(statearr_27082_27105[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27068 === (16))){
var inst_27062 = (state_27067[(2)]);
var inst_27000 = inst_27062;
var state_27067__$1 = (function (){var statearr_27083 = state_27067;
(statearr_27083[(9)] = inst_27000);

return statearr_27083;
})();
var statearr_27084_27106 = state_27067__$1;
(statearr_27084_27106[(2)] = null);

(statearr_27084_27106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27068 === (10))){
var state_27067__$1 = state_27067;
var statearr_27085_27107 = state_27067__$1;
(statearr_27085_27107[(1)] = (13));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27068 === (8))){
var inst_27005 = (state_27067[(10)]);
var inst_27012 = (state_27067[(2)]);
var inst_27013 = cljs.core.nth.call(null,inst_27012,(0),null);
var inst_27014 = cljs.core.nth.call(null,inst_27012,(1),null);
var inst_27015 = [cljs.core.str("wiki: "),cljs.core.str("results: "),cljs.core.str(inst_27014)].join('');
var inst_27016 = cljs.core.println.call(null,inst_27015);
var inst_27017 = [new cljs.core.Keyword("wiki","lst","wiki/lst",270705683)];
var inst_27018 = [inst_27014];
var inst_27019 = cljs.core.PersistentHashMap.fromArrays(inst_27017,inst_27018);
var inst_27020 = inst_27005.call(null,inst_27019);
var state_27067__$1 = (function (){var statearr_27087 = state_27067;
(statearr_27087[(16)] = inst_27013);

(statearr_27087[(17)] = inst_27016);

return statearr_27087;
})();
var statearr_27088_27108 = state_27067__$1;
(statearr_27088_27108[(2)] = inst_27020);

(statearr_27088_27108[(1)] = (7));


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
var statearr_27092 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27092[(0)] = cloudxmark$core$search_loop_$_state_machine__21389__auto__);

(statearr_27092[(1)] = (1));

return statearr_27092;
});
var cloudxmark$core$search_loop_$_state_machine__21389__auto____1 = (function (state_27067){
while(true){
var ret_value__21390__auto__ = (function (){try{while(true){
var result__21391__auto__ = switch__21388__auto__.call(null,state_27067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21391__auto__;
}
break;
}
}catch (e27093){if((e27093 instanceof Object)){
var ex__21392__auto__ = e27093;
var statearr_27094_27109 = state_27067;
(statearr_27094_27109[(5)] = ex__21392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27110 = state_27067;
state_27067 = G__27110;
continue;
} else {
return ret_value__21390__auto__;
}
break;
}
});
cloudxmark$core$search_loop_$_state_machine__21389__auto__ = function(state_27067){
switch(arguments.length){
case 0:
return cloudxmark$core$search_loop_$_state_machine__21389__auto____0.call(this);
case 1:
return cloudxmark$core$search_loop_$_state_machine__21389__auto____1.call(this,state_27067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cloudxmark$core$search_loop_$_state_machine__21389__auto__.cljs$core$IFn$_invoke$arity$0 = cloudxmark$core$search_loop_$_state_machine__21389__auto____0;
cloudxmark$core$search_loop_$_state_machine__21389__auto__.cljs$core$IFn$_invoke$arity$1 = cloudxmark$core$search_loop_$_state_machine__21389__auto____1;
return cloudxmark$core$search_loop_$_state_machine__21389__auto__;
})()
;})(switch__21388__auto__,c__21409__auto__))
})();
var state__21411__auto__ = (function (){var statearr_27095 = f__21410__auto__.call(null);
(statearr_27095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21409__auto__);

return statearr_27095;
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