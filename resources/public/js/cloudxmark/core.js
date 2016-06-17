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
cloudxmark.core.password_url = "http://localhost:5000/getPasswordList?owner=abc";
cloudxmark.core.jsonp = (function cloudxmark$core$jsonp(var_args){
var args27998 = [];
var len__19538__auto___28001 = arguments.length;
var i__19539__auto___28002 = (0);
while(true){
if((i__19539__auto___28002 < len__19538__auto___28001)){
args27998.push((arguments[i__19539__auto___28002]));

var G__28003 = (i__19539__auto___28002 + (1));
i__19539__auto___28002 = G__28003;
continue;
} else {
}
break;
}

var G__28000 = args27998.length;
switch (G__28000) {
case 1:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27998.length)].join('')));

}
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return cloudxmark.core.jsonp.call(null,cljs.core.async.chan.call(null),uri);
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2 = (function (c,uri){
var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));
cljs.core.println.call(null,[cljs.core.str("before send "),cljs.core.str(uri)].join(''));

gjsonp.send(null,((function (gjsonp){
return (function (p1__27996_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__27996_SHARP_);
});})(gjsonp))
,((function (gjsonp){
return (function (p1__27997_SHARP_){
return cljs.core.println.call(null,[cljs.core.str("error!"),cljs.core.str(p1__27997_SHARP_)].join(''));
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
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),(function (p__28005,k,p__28006){
var map__28007 = p__28005;
var map__28007__$1 = ((((!((map__28007 == null)))?((((map__28007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28007):map__28007);
var env = map__28007__$1;
var state = cljs.core.get.call(null,map__28007__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__28007__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__28008 = p__28006;
var map__28008__$1 = ((((!((map__28008 == null)))?((((map__28008.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28008.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28008):map__28008);
var query = cljs.core.get.call(null,map__28008__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cljs.core.deref.call(null,state),k,cljs.core.PersistentVector.EMPTY)], null),(((clojure.string.blank_QMARK_.call(null,query)) || ((cljs.core.count.call(null,query) < (3))))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122),ast], null)));
}));
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword("password","lst","password/lst",-678643482),(function (p__28011,k,p__28012){
var map__28013 = p__28011;
var map__28013__$1 = ((((!((map__28013 == null)))?((((map__28013.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28013.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28013):map__28013);
var env = map__28013__$1;
var state = cljs.core.get.call(null,map__28013__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__28013__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__28014 = p__28012;
var map__28014__$1 = ((((!((map__28014 == null)))?((((map__28014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28014):map__28014);
var query = cljs.core.get.call(null,map__28014__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cljs.core.deref.call(null,state),k,cljs.core.PersistentVector.EMPTY)], null),(((cljs.core.get.call(null,cljs.core.deref.call(null,state),k) == null))?(function (){
cljs.core.println.call(null,[cljs.core.str("query pw list:"),cljs.core.str(k),cljs.core.str((cljs.core.get.call(null,cljs.core.deref.call(null,state),k) == null))].join(''));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"password-search","password-search",918521380),ast], null);
})()
:null));
}));
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword("password","curr","password/curr",940438483),(function (p__28017,k,_){
var map__28018 = p__28017;
var map__28018__$1 = ((((!((map__28018 == null)))?((((map__28018.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28018.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28018):map__28018);
var env = map__28018__$1;
var state = cljs.core.get.call(null,map__28018__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__28018__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
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
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("password","set-curr","password/set-curr",-1971006873,null),(function (p__28020,_,p__28021){
var map__28022 = p__28020;
var map__28022__$1 = ((((!((map__28022 == null)))?((((map__28022.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28022.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28022):map__28022);
var env = map__28022__$1;
var state = cljs.core.get.call(null,map__28022__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__28023 = p__28021;
var map__28023__$1 = ((((!((map__28023 == null)))?((((map__28023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28023):map__28023);
var curr = cljs.core.get.call(null,map__28023__$1,new cljs.core.Keyword("password","curr","password/curr",940438483));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__28022,map__28022__$1,env,state,map__28023,map__28023__$1,curr){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("password","curr","password/curr",940438483)], null),cljs.core.constantly.call(null,curr));

return cljs.core.println.call(null,[cljs.core.str("set to "),cljs.core.str(curr)].join(''));
});})(map__28022,map__28022__$1,env,state,map__28023,map__28023__$1,curr))
], null);
}));
cljs.core._add_method.call(null,cloudxmark.core.mutate,new cljs.core.Symbol("password","set-list","password/set-list",-1410931761,null),(function (p__28026,_,p__28027){
var map__28028 = p__28026;
var map__28028__$1 = ((((!((map__28028 == null)))?((((map__28028.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28028.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28028):map__28028);
var env = map__28028__$1;
var state = cljs.core.get.call(null,map__28028__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__28029 = p__28027;
var map__28029__$1 = ((((!((map__28029 == null)))?((((map__28029.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28029.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28029):map__28029);
var lst = cljs.core.get.call(null,map__28029__$1,new cljs.core.Keyword("password","lst","password/lst",-678643482));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__28028,map__28028__$1,env,state,map__28029,map__28029__$1,lst){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("password","lst","password/lst",-678643482)], null),cljs.core.constantly.call(null,lst));

return cljs.core.println.call(null,[cljs.core.str("set to "),cljs.core.str(lst)].join(''));
});})(map__28028,map__28028__$1,env,state,map__28029,map__28029__$1,lst))
], null);
}));
cloudxmark.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("password","lst","password/lst",-678643482),null,new cljs.core.Keyword("password","curr","password/curr",940438483),(0)], null));
cloudxmark.core.result_list = (function cloudxmark$core$result_list(results){
return React.DOM.ul({"key": "result-list"},om.util.force_children.call(null,cljs.core.map_indexed.call(null,(function (idx,itm){
return React.DOM.li({"key": idx},om.util.force_children.call(null,itm));
}),results)));
});
cloudxmark.core.list_select_field = (function cloudxmark$core$list_select_field(comp,idx,curr_idx){
return om.dom.input.call(null,{"key": [cljs.core.str("password-list-check-"),cljs.core.str(idx)].join(''), "type": "radio", "checked": cljs.core._EQ_.call(null,idx,curr_idx), "onChange": (function (e){
if(cljs.core.truth_(e.target.checked)){
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__19302__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("password","set-curr","password/set-curr",-1971006873,null)),(function (){var x__19302__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("password","curr","password/curr",940438483)),(function (){var x__19302__auto__ = idx;
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
cloudxmark.core.password_list = (function cloudxmark$core$password_list(comp,results,curr_idx){
return React.DOM.div({"key": "password-list"},om.util.force_children.call(null,cljs.core.map_indexed.call(null,(function (idx,itm){
return React.DOM.div({"key": [cljs.core.str(cloudxmark$core$password_list),cljs.core.str(idx)].join('')},om.util.force_children.call(null,cloudxmark.core.list_select_field.call(null,comp,idx,curr_idx)),om.util.force_children.call(null,React.DOM.span({"key": [cljs.core.str(cloudxmark$core$password_list),cljs.core.str(idx),cljs.core.str("span")].join('')},om.util.force_children.call(null,itm))));
}),results)));
});
cloudxmark.core.search_field = (function cloudxmark$core$search_field(comp,query,type){
var vec__28034 = (function (){var G__28035 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28035) {
case "wiki":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["wiki-search-field",new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648)], null);

break;
case "password":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["password-search-field",new cljs.core.Keyword(null,"password-query","password-query",-226681249)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
var elem_key = cljs.core.nth.call(null,vec__28034,(0),null);
var query_key = cljs.core.nth.call(null,vec__28034,(1),null);
cljs.core.println.call(null,[cljs.core.str("elem-key"),cljs.core.str(elem_key),cljs.core.str(" query-key:"),cljs.core.str(query_key)].join(''));

return om.dom.input.call(null,{"key": elem_key, "value": query, "onChange": ((function (vec__28034,elem_key,query_key){
return (function (e){
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.fromArray([query_key,e.target.value], true, false)], null));
});})(vec__28034,elem_key,query_key))
});
});
/**
 * @constructor
 */
cloudxmark.core.PasswordList = (function cloudxmark$core$PasswordList(){
var this__21566__auto__ = this;
React.Component.apply(this__21566__auto__,arguments);

if(!((this__21566__auto__.initLocalState == null))){
this__21566__auto__.state = this__21566__auto__.initLocalState();
} else {
this__21566__auto__.state = {};
}

return this__21566__auto__;
});

cloudxmark.core.PasswordList.prototype = goog.object.clone(React.Component.prototype);

var x28041_28053 = cloudxmark.core.PasswordList.prototype;
x28041_28053.componentWillUpdate = ((function (x28041_28053){
return (function (next_props__21502__auto__,next_state__21503__auto__){
var this__21501__auto__ = this;
if(((!((this__21501__auto__ == null)))?(((false) || (this__21501__auto__.om$next$Ident$))?true:false):false)){
var ident__21505__auto___28054 = om.next.ident.call(null,this__21501__auto__,om.next.props.call(null,this__21501__auto__));
var next_ident__21506__auto___28055 = om.next.ident.call(null,this__21501__auto__,om.next._next_props.call(null,next_props__21502__auto__,this__21501__auto__));
if(cljs.core.not_EQ_.call(null,ident__21505__auto___28054,next_ident__21506__auto___28055)){
var idxr__21507__auto___28056 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__21507__auto___28056 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__21507__auto___28056),((function (idxr__21507__auto___28056,ident__21505__auto___28054,next_ident__21506__auto___28055,this__21501__auto__,x28041_28053){
return (function (indexes__21508__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__21508__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__21505__auto___28054], null),cljs.core.disj,this__21501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__21506__auto___28055], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__21501__auto__);
});})(idxr__21507__auto___28056,ident__21505__auto___28054,next_ident__21506__auto___28055,this__21501__auto__,x28041_28053))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__21501__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21501__auto__);
});})(x28041_28053))
;

x28041_28053.shouldComponentUpdate = ((function (x28041_28053){
return (function (next_props__21502__auto__,next_state__21503__auto__){
var this__21501__auto__ = this;
var next_children__21504__auto__ = next_props__21502__auto__.children;
var next_props__21502__auto____$1 = goog.object.get(next_props__21502__auto__,"omcljs$value");
var next_props__21502__auto____$2 = (function (){var G__28043 = next_props__21502__auto____$1;
if((next_props__21502__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__28043);
} else {
return G__28043;
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
});})(x28041_28053))
;

x28041_28053.componentWillUnmount = ((function (x28041_28053){
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
});})(x28041_28053))
;

x28041_28053.componentDidUpdate = ((function (x28041_28053){
return (function (prev_props__21509__auto__,prev_state__21510__auto__){
var this__21501__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21501__auto__);
});})(x28041_28053))
;

x28041_28053.isMounted = ((function (x28041_28053){
return (function (){
var this__21501__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21501__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x28041_28053))
;

x28041_28053.componentWillMount = ((function (x28041_28053){
return (function (){
var this__21501__auto__ = this;
var indexer__21511__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21511__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21511__auto__,this__21501__auto__);
}
});})(x28041_28053))
;

x28041_28053.render = ((function (x28041_28053){
return (function (){
var this__21500__auto__ = this;
var this$ = this__21500__auto__;
var _STAR_reconciler_STAR_28044 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_28045 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_28046 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_28047 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_28048 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21500__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21500__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21500__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21500__auto__);

om.next._STAR_parent_STAR_ = this__21500__auto__;

try{var map__28049 = om.next.props.call(null,this$);
var map__28049__$1 = ((((!((map__28049 == null)))?((((map__28049.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28049.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28049):map__28049);
var lst = cljs.core.get.call(null,map__28049__$1,new cljs.core.Keyword("password","lst","password/lst",-678643482));
var curr = cljs.core.get.call(null,map__28049__$1,new cljs.core.Keyword("password","curr","password/curr",940438483));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Password List"))),om.util.force_children.call(null,((!(cljs.core.empty_QMARK_.call(null,lst)))?cloudxmark.core.password_list.call(null,this$,lst,(((curr == null))?(0):curr)):null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_28048;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_28047;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_28046;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_28045;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_28044;
}});})(x28041_28053))
;


cloudxmark.core.PasswordList.prototype.constructor = cloudxmark.core.PasswordList;

cloudxmark.core.PasswordList.prototype.constructor.displayName = "cloudxmark.core/PasswordList";

cloudxmark.core.PasswordList.prototype.om$isComponent = true;

var x28051_28057 = cloudxmark.core.PasswordList;
x28051_28057.om$next$IQueryParams$ = true;

x28051_28057.om$next$IQueryParams$params$arity$1 = ((function (x28051_28057){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"password-query","password-query",-226681249),"list"], null);
});})(x28051_28057))
;

x28051_28057.om$next$IQuery$ = true;

x28051_28057.om$next$IQuery$query$arity$1 = ((function (x28051_28057){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("password","curr","password/curr",940438483),cljs.core.list(new cljs.core.Keyword("password","lst","password/lst",-678643482),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?password-query","?password-query",117781522,null)], null))], null);
});})(x28051_28057))
;


var x28052_28058 = cloudxmark.core.PasswordList.prototype;
x28052_28058.om$next$IQueryParams$ = true;

x28052_28058.om$next$IQueryParams$params$arity$1 = ((function (x28052_28058){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"password-query","password-query",-226681249),"list"], null);
});})(x28052_28058))
;

x28052_28058.om$next$IQuery$ = true;

x28052_28058.om$next$IQuery$query$arity$1 = ((function (x28052_28058){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("password","curr","password/curr",940438483),cljs.core.list(new cljs.core.Keyword("password","lst","password/lst",-678643482),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?password-query","?password-query",117781522,null)], null))], null);
});})(x28052_28058))
;


cloudxmark.core.PasswordList.cljs$lang$type = true;

cloudxmark.core.PasswordList.cljs$lang$ctorStr = "cloudxmark.core/PasswordList";

cloudxmark.core.PasswordList.cljs$lang$ctorPrWriter = (function (this__21568__auto__,writer__21569__auto__,opt__21570__auto__){
return cljs.core._write.call(null,writer__21569__auto__,"cloudxmark.core/PasswordList");
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

var x28063_28076 = cloudxmark.core.AutoCompleter.prototype;
x28063_28076.componentWillUpdate = ((function (x28063_28076){
return (function (next_props__21502__auto__,next_state__21503__auto__){
var this__21501__auto__ = this;
if(((!((this__21501__auto__ == null)))?(((false) || (this__21501__auto__.om$next$Ident$))?true:false):false)){
var ident__21505__auto___28077 = om.next.ident.call(null,this__21501__auto__,om.next.props.call(null,this__21501__auto__));
var next_ident__21506__auto___28078 = om.next.ident.call(null,this__21501__auto__,om.next._next_props.call(null,next_props__21502__auto__,this__21501__auto__));
if(cljs.core.not_EQ_.call(null,ident__21505__auto___28077,next_ident__21506__auto___28078)){
var idxr__21507__auto___28079 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__21507__auto___28079 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__21507__auto___28079),((function (idxr__21507__auto___28079,ident__21505__auto___28077,next_ident__21506__auto___28078,this__21501__auto__,x28063_28076){
return (function (indexes__21508__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__21508__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__21505__auto___28077], null),cljs.core.disj,this__21501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__21506__auto___28078], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__21501__auto__);
});})(idxr__21507__auto___28079,ident__21505__auto___28077,next_ident__21506__auto___28078,this__21501__auto__,x28063_28076))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__21501__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21501__auto__);
});})(x28063_28076))
;

x28063_28076.shouldComponentUpdate = ((function (x28063_28076){
return (function (next_props__21502__auto__,next_state__21503__auto__){
var this__21501__auto__ = this;
var next_children__21504__auto__ = next_props__21502__auto__.children;
var next_props__21502__auto____$1 = goog.object.get(next_props__21502__auto__,"omcljs$value");
var next_props__21502__auto____$2 = (function (){var G__28065 = next_props__21502__auto____$1;
if((next_props__21502__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__28065);
} else {
return G__28065;
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
});})(x28063_28076))
;

x28063_28076.componentWillUnmount = ((function (x28063_28076){
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
});})(x28063_28076))
;

x28063_28076.componentDidUpdate = ((function (x28063_28076){
return (function (prev_props__21509__auto__,prev_state__21510__auto__){
var this__21501__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21501__auto__);
});})(x28063_28076))
;

x28063_28076.isMounted = ((function (x28063_28076){
return (function (){
var this__21501__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21501__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x28063_28076))
;

x28063_28076.componentWillMount = ((function (x28063_28076){
return (function (){
var this__21501__auto__ = this;
var indexer__21511__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21511__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21511__auto__,this__21501__auto__);
}
});})(x28063_28076))
;

x28063_28076.render = ((function (x28063_28076){
return (function (){
var this__21500__auto__ = this;
var this$ = this__21500__auto__;
var _STAR_reconciler_STAR_28066 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_28067 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_28068 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_28069 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_28070 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21500__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21500__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21500__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21500__auto__);

om.next._STAR_parent_STAR_ = this__21500__auto__;

try{var map__28071 = om.next.props.call(null,this$);
var map__28071__$1 = ((((!((map__28071 == null)))?((((map__28071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28071):map__28071);
var lst = cljs.core.get.call(null,map__28071__$1,new cljs.core.Keyword("wiki","lst","wiki/lst",270705683));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"AutoCompleter"))),om.util.force_children.call(null,(function (){var G__28073 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloudxmark.core.search_field.call(null,this$,new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648).cljs$core$IFn$_invoke$arity$1(om.next.get_params.call(null,this$)),new cljs.core.Keyword(null,"wiki","wiki",1946329928))], null);
if(!(cljs.core.empty_QMARK_.call(null,lst))){
return cljs.core.conj.call(null,G__28073,cloudxmark.core.result_list.call(null,lst));
} else {
return G__28073;
}
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_28070;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_28069;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_28068;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_28067;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_28066;
}});})(x28063_28076))
;


cloudxmark.core.AutoCompleter.prototype.constructor = cloudxmark.core.AutoCompleter;

cloudxmark.core.AutoCompleter.prototype.constructor.displayName = "cloudxmark.core/AutoCompleter";

cloudxmark.core.AutoCompleter.prototype.om$isComponent = true;

var x28074_28080 = cloudxmark.core.AutoCompleter;
x28074_28080.om$next$IQueryParams$ = true;

x28074_28080.om$next$IQueryParams$params$arity$1 = ((function (x28074_28080){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648),""], null);
});})(x28074_28080))
;

x28074_28080.om$next$IQuery$ = true;

x28074_28080.om$next$IQuery$query$arity$1 = ((function (x28074_28080){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?wiki-query","?wiki-query",-1723016161,null)], null))], null);
});})(x28074_28080))
;


var x28075_28081 = cloudxmark.core.AutoCompleter.prototype;
x28075_28081.om$next$IQueryParams$ = true;

x28075_28081.om$next$IQueryParams$params$arity$1 = ((function (x28075_28081){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648),""], null);
});})(x28075_28081))
;

x28075_28081.om$next$IQuery$ = true;

x28075_28081.om$next$IQuery$query$arity$1 = ((function (x28075_28081){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?wiki-query","?wiki-query",-1723016161,null)], null))], null);
});})(x28075_28081))
;


cloudxmark.core.AutoCompleter.cljs$lang$type = true;

cloudxmark.core.AutoCompleter.cljs$lang$ctorStr = "cloudxmark.core/AutoCompleter";

cloudxmark.core.AutoCompleter.cljs$lang$ctorPrWriter = (function (this__21568__auto__,writer__21569__auto__,opt__21570__auto__){
return cljs.core._write.call(null,writer__21569__auto__,"cloudxmark.core/AutoCompleter");
});
cloudxmark.core.send_to_chan = (function cloudxmark$core$send_to_chan(c){
return (function (p__28091,cb){
var map__28092 = p__28091;
var map__28092__$1 = ((((!((map__28092 == null)))?((((map__28092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28092):map__28092);
var wiki_search = cljs.core.get.call(null,map__28092__$1,new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122));
var password_search = cljs.core.get.call(null,map__28092__$1,new cljs.core.Keyword(null,"password-search","password-search",918521380));
if(cljs.core.truth_(wiki_search)){
var map__28094 = om.next.query__GT_ast.call(null,wiki_search);
var map__28094__$1 = ((((!((map__28094 == null)))?((((map__28094.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28094.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28094):map__28094);
var vec__28095 = cljs.core.get.call(null,map__28094__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var wiki_search__$1 = cljs.core.nth.call(null,vec__28095,(0),null);
var query = cljs.core.get_in.call(null,wiki_search__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"query","query",-1288509510)], null));
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [query,new cljs.core.Keyword(null,"wiki","wiki",1946329928),cb], null));
} else {
if(cljs.core.truth_(password_search)){
var map__28097 = om.next.query__GT_ast.call(null,password_search);
var map__28097__$1 = ((((!((map__28097 == null)))?((((map__28097.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28097.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28097):map__28097);
var vec__28098 = cljs.core.get.call(null,map__28097__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var password_search__$1 = cljs.core.nth.call(null,vec__28098,(0),null);
var query = cljs.core.get_in.call(null,password_search__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"query","query",-1288509510)], null));
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [query,new cljs.core.Keyword(null,"password","password",417022471),cb], null));
} else {
return null;
}
}
});
});
cloudxmark.core.send_chan = cljs.core.async.chan.call(null);
cloudxmark.core.wiki_reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),cloudxmark.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),cloudxmark.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),cloudxmark.core.mutate], null)),new cljs.core.Keyword(null,"send","send",-652151114),cloudxmark.core.send_to_chan.call(null,cloudxmark.core.send_chan),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122),new cljs.core.Keyword(null,"password-search","password-search",918521380)], null)], null));
cloudxmark.core.password_reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),cloudxmark.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),cloudxmark.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),cloudxmark.core.mutate], null)),new cljs.core.Keyword(null,"send","send",-652151114),cloudxmark.core.send_to_chan.call(null,cloudxmark.core.send_chan),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122),new cljs.core.Keyword(null,"password-search","password-search",918521380)], null)], null));
cloudxmark.core.search_loop = (function cloudxmark$core$search_loop(c){
var c__21409__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21409__auto__){
return (function (){
var f__21410__auto__ = (function (){var switch__21388__auto__ = ((function (c__21409__auto__){
return (function (state_28281){
var state_val_28282 = (state_28281[(1)]);
if((state_val_28282 === (7))){
var inst_28224 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28225 = [new cljs.core.Keyword("password","lst","password/lst",-678643482),cloudxmark.core.password_url];
var inst_28226 = (new cljs.core.PersistentVector(null,2,(5),inst_28224,inst_28225,null));
var state_28281__$1 = state_28281;
var statearr_28283_28308 = state_28281__$1;
(statearr_28283_28308[(2)] = inst_28226);

(statearr_28283_28308[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (1))){
var state_28281__$1 = state_28281;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28281__$1,(2),c);
} else {
if((state_val_28282 === (4))){
var inst_28279 = (state_28281[(2)]);
var state_28281__$1 = state_28281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28281__$1,inst_28279);
} else {
if((state_val_28282 === (6))){
var inst_28220 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28221 = [new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),cloudxmark.core.wiki_url];
var inst_28222 = (new cljs.core.PersistentVector(null,2,(5),inst_28220,inst_28221,null));
var state_28281__$1 = state_28281;
var statearr_28284_28309 = state_28281__$1;
(statearr_28284_28309[(2)] = inst_28222);

(statearr_28284_28309[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (3))){
var inst_28212 = (state_28281[(7)]);
var inst_28216 = (state_28281[(8)]);
var inst_28215 = cljs.core.nth.call(null,inst_28212,(0),null);
var inst_28216__$1 = cljs.core.nth.call(null,inst_28212,(1),null);
var inst_28217 = cljs.core.nth.call(null,inst_28212,(2),null);
var state_28281__$1 = (function (){var statearr_28285 = state_28281;
(statearr_28285[(9)] = inst_28217);

(statearr_28285[(8)] = inst_28216__$1);

(statearr_28285[(10)] = inst_28215);

return statearr_28285;
})();
var G__28286_28310 = (((inst_28216__$1 instanceof cljs.core.Keyword))?inst_28216__$1.fqn:null);
switch (G__28286_28310) {
case "wiki":
var statearr_28287_28312 = state_28281__$1;
(statearr_28287_28312[(1)] = (6));


break;
case "password":
var statearr_28288_28313 = state_28281__$1;
(statearr_28288_28313[(1)] = (7));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_28216__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (12))){
var inst_28276 = (state_28281[(2)]);
var inst_28212 = inst_28276;
var state_28281__$1 = (function (){var statearr_28289 = state_28281;
(statearr_28289[(7)] = inst_28212);

return statearr_28289;
})();
var statearr_28290_28314 = state_28281__$1;
(statearr_28290_28314[(2)] = null);

(statearr_28290_28314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (2))){
var inst_28208 = (state_28281[(2)]);
var inst_28209 = cljs.core.nth.call(null,inst_28208,(0),null);
var inst_28210 = cljs.core.nth.call(null,inst_28208,(1),null);
var inst_28211 = cljs.core.nth.call(null,inst_28208,(2),null);
var inst_28212 = inst_28208;
var state_28281__$1 = (function (){var statearr_28291 = state_28281;
(statearr_28291[(7)] = inst_28212);

(statearr_28291[(11)] = inst_28209);

(statearr_28291[(12)] = inst_28211);

(statearr_28291[(13)] = inst_28210);

return statearr_28291;
})();
var statearr_28292_28315 = state_28281__$1;
(statearr_28292_28315[(2)] = null);

(statearr_28292_28315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (11))){
var inst_28237 = (state_28281[(14)]);
var inst_28249 = cljs.core.List.EMPTY;
var inst_28250 = new cljs.core.Symbol("password","set-list","password/set-list",-1410931761,null);
var inst_28251 = cljs.core._conj.call(null,inst_28249,inst_28250);
var inst_28252 = cljs.core.List.EMPTY;
var inst_28253 = cljs.core._conj.call(null,inst_28252,new cljs.core.Keyword("password","lst","password/lst",-678643482));
var inst_28254 = cljs.core.List.EMPTY;
var inst_28255 = cljs.core._conj.call(null,inst_28254,inst_28237);
var inst_28256 = cljs.core.concat.call(null,inst_28253,inst_28255);
var inst_28257 = cljs.core.seq.call(null,inst_28256);
var inst_28258 = cljs.core.sequence.call(null,inst_28257);
var inst_28259 = cljs.core.apply.call(null,cljs.core.array_map,inst_28258);
var inst_28260 = cljs.core.List.EMPTY;
var inst_28261 = cljs.core._conj.call(null,inst_28260,inst_28259);
var inst_28262 = cljs.core.concat.call(null,inst_28251,inst_28261);
var inst_28263 = cljs.core.seq.call(null,inst_28262);
var inst_28264 = cljs.core.sequence.call(null,inst_28263);
var inst_28265 = cljs.core.List.EMPTY;
var inst_28266 = cljs.core._conj.call(null,inst_28265,inst_28264);
var inst_28267 = cljs.core.concat.call(null,inst_28266);
var inst_28268 = cljs.core.seq.call(null,inst_28267);
var inst_28269 = cljs.core.sequence.call(null,inst_28268);
var inst_28270 = cljs.core.vec.call(null,inst_28269);
var inst_28271 = om.next.transact_BANG_.call(null,cloudxmark.core.password_reconciler,inst_28270);
var state_28281__$1 = state_28281;
var statearr_28293_28316 = state_28281__$1;
(statearr_28293_28316[(2)] = inst_28271);

(statearr_28293_28316[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (9))){
var inst_28274 = (state_28281[(2)]);
var state_28281__$1 = (function (){var statearr_28294 = state_28281;
(statearr_28294[(15)] = inst_28274);

return statearr_28294;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28281__$1,(12),c);
} else {
if((state_val_28282 === (5))){
var inst_28215 = (state_28281[(10)]);
var inst_28229 = (state_28281[(2)]);
var inst_28230 = cljs.core.nth.call(null,inst_28229,(0),null);
var inst_28231 = cljs.core.nth.call(null,inst_28229,(1),null);
var inst_28232 = [cljs.core.str(inst_28231),cljs.core.str(inst_28215)].join('');
var inst_28233 = cloudxmark.core.jsonp.call(null,inst_28232);
var state_28281__$1 = (function (){var statearr_28295 = state_28281;
(statearr_28295[(16)] = inst_28230);

return statearr_28295;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28281__$1,(8),inst_28233);
} else {
if((state_val_28282 === (10))){
var inst_28217 = (state_28281[(9)]);
var inst_28230 = (state_28281[(16)]);
var inst_28237 = (state_28281[(14)]);
var inst_28244 = [inst_28230];
var inst_28245 = [inst_28237];
var inst_28246 = cljs.core.PersistentHashMap.fromArrays(inst_28244,inst_28245);
var inst_28247 = inst_28217.call(null,inst_28246);
var state_28281__$1 = state_28281;
var statearr_28296_28317 = state_28281__$1;
(statearr_28296_28317[(2)] = inst_28247);

(statearr_28296_28317[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (8))){
var inst_28217 = (state_28281[(9)]);
var inst_28230 = (state_28281[(16)]);
var inst_28237 = (state_28281[(14)]);
var inst_28216 = (state_28281[(8)]);
var inst_28235 = (state_28281[(2)]);
var inst_28236 = cljs.core.nth.call(null,inst_28235,(0),null);
var inst_28237__$1 = cljs.core.nth.call(null,inst_28235,(1),null);
var inst_28238 = [cljs.core.str(inst_28230),cljs.core.str(": "),cljs.core.str("results: "),cljs.core.str(inst_28237__$1)].join('');
var inst_28239 = cljs.core.println.call(null,inst_28238);
var inst_28240 = [inst_28230];
var inst_28241 = [inst_28237__$1];
var inst_28242 = cljs.core.PersistentHashMap.fromArrays(inst_28240,inst_28241);
var inst_28243 = inst_28217.call(null,inst_28242);
var state_28281__$1 = (function (){var statearr_28297 = state_28281;
(statearr_28297[(17)] = inst_28239);

(statearr_28297[(18)] = inst_28243);

(statearr_28297[(14)] = inst_28237__$1);

(statearr_28297[(19)] = inst_28236);

return statearr_28297;
})();
var G__28298_28318 = (((inst_28216 instanceof cljs.core.Keyword))?inst_28216.fqn:null);
switch (G__28298_28318) {
case "wiki":
var statearr_28299_28320 = state_28281__$1;
(statearr_28299_28320[(1)] = (10));


break;
case "password":
var statearr_28300_28321 = state_28281__$1;
(statearr_28300_28321[(1)] = (11));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_28216)].join('')));

}

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
});})(c__21409__auto__))
;
return ((function (switch__21388__auto__,c__21409__auto__){
return (function() {
var cloudxmark$core$search_loop_$_state_machine__21389__auto__ = null;
var cloudxmark$core$search_loop_$_state_machine__21389__auto____0 = (function (){
var statearr_28304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28304[(0)] = cloudxmark$core$search_loop_$_state_machine__21389__auto__);

(statearr_28304[(1)] = (1));

return statearr_28304;
});
var cloudxmark$core$search_loop_$_state_machine__21389__auto____1 = (function (state_28281){
while(true){
var ret_value__21390__auto__ = (function (){try{while(true){
var result__21391__auto__ = switch__21388__auto__.call(null,state_28281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21391__auto__;
}
break;
}
}catch (e28305){if((e28305 instanceof Object)){
var ex__21392__auto__ = e28305;
var statearr_28306_28322 = state_28281;
(statearr_28306_28322[(5)] = ex__21392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28323 = state_28281;
state_28281 = G__28323;
continue;
} else {
return ret_value__21390__auto__;
}
break;
}
});
cloudxmark$core$search_loop_$_state_machine__21389__auto__ = function(state_28281){
switch(arguments.length){
case 0:
return cloudxmark$core$search_loop_$_state_machine__21389__auto____0.call(this);
case 1:
return cloudxmark$core$search_loop_$_state_machine__21389__auto____1.call(this,state_28281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cloudxmark$core$search_loop_$_state_machine__21389__auto__.cljs$core$IFn$_invoke$arity$0 = cloudxmark$core$search_loop_$_state_machine__21389__auto____0;
cloudxmark$core$search_loop_$_state_machine__21389__auto__.cljs$core$IFn$_invoke$arity$1 = cloudxmark$core$search_loop_$_state_machine__21389__auto____1;
return cloudxmark$core$search_loop_$_state_machine__21389__auto__;
})()
;})(switch__21388__auto__,c__21409__auto__))
})();
var state__21411__auto__ = (function (){var statearr_28307 = f__21410__auto__.call(null);
(statearr_28307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21409__auto__);

return statearr_28307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21411__auto__);
});})(c__21409__auto__))
);

return c__21409__auto__;
});
cloudxmark.core.search_loop.call(null,cloudxmark.core.send_chan);
om.next.add_root_BANG_.call(null,cloudxmark.core.wiki_reconciler,cloudxmark.core.AutoCompleter,goog.dom.getElement("wiki"));
om.next.add_root_BANG_.call(null,cloudxmark.core.password_reconciler,cloudxmark.core.PasswordList,goog.dom.getElement("password"));

//# sourceMappingURL=core.js.map