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
cloudxmark.core.base_url = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
cloudxmark.core.jsonp = (function cloudxmark$core$jsonp(var_args){
var args23070 = [];
var len__19538__auto___23073 = arguments.length;
var i__19539__auto___23074 = (0);
while(true){
if((i__19539__auto___23074 < len__19538__auto___23073)){
args23070.push((arguments[i__19539__auto___23074]));

var G__23075 = (i__19539__auto___23074 + (1));
i__19539__auto___23074 = G__23075;
continue;
} else {
}
break;
}

var G__23072 = args23070.length;
switch (G__23072) {
case 1:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23070.length)].join('')));

}
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return cloudxmark.core.jsonp.call(null,cljs.core.async.chan.call(null),uri);
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2 = (function (c,uri){
var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));
gjsonp.send(null,((function (gjsonp){
return (function (p1__23069_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__23069_SHARP_);
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
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword("search","results","search/results",107824727),(function (p__23077,k,p__23078){
var map__23079 = p__23077;
var map__23079__$1 = ((((!((map__23079 == null)))?((((map__23079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23079):map__23079);
var env = map__23079__$1;
var state = cljs.core.get.call(null,map__23079__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__23079__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__23080 = p__23078;
var map__23080__$1 = ((((!((map__23080 == null)))?((((map__23080.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23080.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23080):map__23080);
var query = cljs.core.get.call(null,map__23080__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cljs.core.deref.call(null,state),k,cljs.core.PersistentVector.EMPTY)], null),(((clojure.string.blank_QMARK_.call(null,query)) || ((cljs.core.count.call(null,query) < (3))))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search","search",1564939822),ast], null)));
}));
cloudxmark.core.result_list = (function cloudxmark$core$result_list(results){
return React.DOM.ul({"key": "result-list"},om.util.force_children.call(null,cljs.core.map_indexed.call(null,(function (idx,itm){
return React.DOM.li({"key": idx},om.util.force_children.call(null,itm));
}),results)));
});
cloudxmark.core.search_field = (function cloudxmark$core$search_field(ac,query){
return om.dom.input.call(null,{"key": "search-field", "value": query, "onChange": (function (e){
return om.next.set_query_BANG_.call(null,ac,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),e.target.value], null)], null));
})});
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

var x23087_23100 = cloudxmark.core.AutoCompleter.prototype;
x23087_23100.componentWillUpdate = ((function (x23087_23100){
return (function (next_props__21502__auto__,next_state__21503__auto__){
var this__21501__auto__ = this;
if(((!((this__21501__auto__ == null)))?(((false) || (this__21501__auto__.om$next$Ident$))?true:false):false)){
var ident__21505__auto___23101 = om.next.ident.call(null,this__21501__auto__,om.next.props.call(null,this__21501__auto__));
var next_ident__21506__auto___23102 = om.next.ident.call(null,this__21501__auto__,om.next._next_props.call(null,next_props__21502__auto__,this__21501__auto__));
if(cljs.core.not_EQ_.call(null,ident__21505__auto___23101,next_ident__21506__auto___23102)){
var idxr__21507__auto___23103 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__21507__auto___23103 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__21507__auto___23103),((function (idxr__21507__auto___23103,ident__21505__auto___23101,next_ident__21506__auto___23102,this__21501__auto__,x23087_23100){
return (function (indexes__21508__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__21508__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__21505__auto___23101], null),cljs.core.disj,this__21501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__21506__auto___23102], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__21501__auto__);
});})(idxr__21507__auto___23103,ident__21505__auto___23101,next_ident__21506__auto___23102,this__21501__auto__,x23087_23100))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__21501__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21501__auto__);
});})(x23087_23100))
;

x23087_23100.shouldComponentUpdate = ((function (x23087_23100){
return (function (next_props__21502__auto__,next_state__21503__auto__){
var this__21501__auto__ = this;
var next_children__21504__auto__ = next_props__21502__auto__.children;
var next_props__21502__auto____$1 = goog.object.get(next_props__21502__auto__,"omcljs$value");
var next_props__21502__auto____$2 = (function (){var G__23089 = next_props__21502__auto____$1;
if((next_props__21502__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__23089);
} else {
return G__23089;
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
});})(x23087_23100))
;

x23087_23100.componentWillUnmount = ((function (x23087_23100){
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
});})(x23087_23100))
;

x23087_23100.componentDidUpdate = ((function (x23087_23100){
return (function (prev_props__21509__auto__,prev_state__21510__auto__){
var this__21501__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21501__auto__);
});})(x23087_23100))
;

x23087_23100.isMounted = ((function (x23087_23100){
return (function (){
var this__21501__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21501__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x23087_23100))
;

x23087_23100.componentWillMount = ((function (x23087_23100){
return (function (){
var this__21501__auto__ = this;
var indexer__21511__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21511__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21511__auto__,this__21501__auto__);
}
});})(x23087_23100))
;

x23087_23100.render = ((function (x23087_23100){
return (function (){
var this__21500__auto__ = this;
var this$ = this__21500__auto__;
var _STAR_reconciler_STAR_23090 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_23091 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_23092 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_23093 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_23094 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21500__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21500__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21500__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21500__auto__);

om.next._STAR_parent_STAR_ = this__21500__auto__;

try{var map__23095 = om.next.props.call(null,this$);
var map__23095__$1 = ((((!((map__23095 == null)))?((((map__23095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23095):map__23095);
var results = cljs.core.get.call(null,map__23095__$1,new cljs.core.Keyword("search","results","search/results",107824727));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Lists"))),om.util.force_children.call(null,(function (){var G__23097 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloudxmark.core.search_field.call(null,this$,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(om.next.get_params.call(null,this$)))], null);
if(!(cljs.core.empty_QMARK_.call(null,results))){
return cljs.core.conj.call(null,G__23097,cloudxmark.core.result_list.call(null,results));
} else {
return G__23097;
}
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_23094;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_23093;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_23092;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_23091;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_23090;
}});})(x23087_23100))
;


cloudxmark.core.AutoCompleter.prototype.constructor = cloudxmark.core.AutoCompleter;

cloudxmark.core.AutoCompleter.prototype.constructor.displayName = "cloudxmark.core/AutoCompleter";

cloudxmark.core.AutoCompleter.prototype.om$isComponent = true;

var x23098_23104 = cloudxmark.core.AutoCompleter;
x23098_23104.om$next$IQueryParams$ = true;

x23098_23104.om$next$IQueryParams$params$arity$1 = ((function (x23098_23104){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),""], null);
});})(x23098_23104))
;

x23098_23104.om$next$IQuery$ = true;

x23098_23104.om$next$IQuery$query$arity$1 = ((function (x23098_23104){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword("search","results","search/results",107824727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?query","?query",891204063,null)], null))], null);
});})(x23098_23104))
;


var x23099_23105 = cloudxmark.core.AutoCompleter.prototype;
x23099_23105.om$next$IQueryParams$ = true;

x23099_23105.om$next$IQueryParams$params$arity$1 = ((function (x23099_23105){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),""], null);
});})(x23099_23105))
;

x23099_23105.om$next$IQuery$ = true;

x23099_23105.om$next$IQuery$query$arity$1 = ((function (x23099_23105){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword("search","results","search/results",107824727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?query","?query",891204063,null)], null))], null);
});})(x23099_23105))
;


cloudxmark.core.AutoCompleter.cljs$lang$type = true;

cloudxmark.core.AutoCompleter.cljs$lang$ctorStr = "cloudxmark.core/AutoCompleter";

cloudxmark.core.AutoCompleter.cljs$lang$ctorPrWriter = (function (this__21568__auto__,writer__21569__auto__,opt__21570__auto__){
return cljs.core._write.call(null,writer__21569__auto__,"cloudxmark.core/AutoCompleter");
});
cloudxmark.core.search_loop = (function cloudxmark$core$search_loop(c){
var c__21409__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21409__auto__){
return (function (){
var f__21410__auto__ = (function (){var switch__21388__auto__ = ((function (c__21409__auto__){
return (function (state_23179){
var state_val_23180 = (state_23179[(1)]);
if((state_val_23180 === (1))){
var state_23179__$1 = state_23179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23179__$1,(2),c);
} else {
if((state_val_23180 === (2))){
var inst_23154 = (state_23179[(2)]);
var inst_23155 = cljs.core.nth.call(null,inst_23154,(0),null);
var inst_23156 = cljs.core.nth.call(null,inst_23154,(1),null);
var inst_23157 = inst_23154;
var state_23179__$1 = (function (){var statearr_23181 = state_23179;
(statearr_23181[(7)] = inst_23156);

(statearr_23181[(8)] = inst_23155);

(statearr_23181[(9)] = inst_23157);

return statearr_23181;
})();
var statearr_23182_23194 = state_23179__$1;
(statearr_23182_23194[(2)] = null);

(statearr_23182_23194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (3))){
var inst_23157 = (state_23179[(9)]);
var inst_23160 = cljs.core.nth.call(null,inst_23157,(0),null);
var inst_23161 = cljs.core.nth.call(null,inst_23157,(1),null);
var inst_23163 = [cljs.core.str(cloudxmark.core.base_url),cljs.core.str(inst_23160)].join('');
var inst_23164 = cloudxmark.core.jsonp.call(null,inst_23163);
var state_23179__$1 = (function (){var statearr_23183 = state_23179;
(statearr_23183[(10)] = inst_23161);

return statearr_23183;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23179__$1,(5),inst_23164);
} else {
if((state_val_23180 === (4))){
var inst_23177 = (state_23179[(2)]);
var state_23179__$1 = state_23179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23179__$1,inst_23177);
} else {
if((state_val_23180 === (5))){
var inst_23161 = (state_23179[(10)]);
var inst_23166 = (state_23179[(2)]);
var inst_23167 = cljs.core.nth.call(null,inst_23166,(0),null);
var inst_23168 = cljs.core.nth.call(null,inst_23166,(1),null);
var inst_23169 = [new cljs.core.Keyword("search","results","search/results",107824727)];
var inst_23170 = [inst_23168];
var inst_23171 = cljs.core.PersistentHashMap.fromArrays(inst_23169,inst_23170);
var inst_23172 = inst_23161.call(null,inst_23171);
var state_23179__$1 = (function (){var statearr_23184 = state_23179;
(statearr_23184[(11)] = inst_23172);

(statearr_23184[(12)] = inst_23167);

return statearr_23184;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23179__$1,(6),c);
} else {
if((state_val_23180 === (6))){
var inst_23174 = (state_23179[(2)]);
var inst_23157 = inst_23174;
var state_23179__$1 = (function (){var statearr_23185 = state_23179;
(statearr_23185[(9)] = inst_23157);

return statearr_23185;
})();
var statearr_23186_23195 = state_23179__$1;
(statearr_23186_23195[(2)] = null);

(statearr_23186_23195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
var statearr_23190 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23190[(0)] = cloudxmark$core$search_loop_$_state_machine__21389__auto__);

(statearr_23190[(1)] = (1));

return statearr_23190;
});
var cloudxmark$core$search_loop_$_state_machine__21389__auto____1 = (function (state_23179){
while(true){
var ret_value__21390__auto__ = (function (){try{while(true){
var result__21391__auto__ = switch__21388__auto__.call(null,state_23179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21391__auto__;
}
break;
}
}catch (e23191){if((e23191 instanceof Object)){
var ex__21392__auto__ = e23191;
var statearr_23192_23196 = state_23179;
(statearr_23192_23196[(5)] = ex__21392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23197 = state_23179;
state_23179 = G__23197;
continue;
} else {
return ret_value__21390__auto__;
}
break;
}
});
cloudxmark$core$search_loop_$_state_machine__21389__auto__ = function(state_23179){
switch(arguments.length){
case 0:
return cloudxmark$core$search_loop_$_state_machine__21389__auto____0.call(this);
case 1:
return cloudxmark$core$search_loop_$_state_machine__21389__auto____1.call(this,state_23179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cloudxmark$core$search_loop_$_state_machine__21389__auto__.cljs$core$IFn$_invoke$arity$0 = cloudxmark$core$search_loop_$_state_machine__21389__auto____0;
cloudxmark$core$search_loop_$_state_machine__21389__auto__.cljs$core$IFn$_invoke$arity$1 = cloudxmark$core$search_loop_$_state_machine__21389__auto____1;
return cloudxmark$core$search_loop_$_state_machine__21389__auto__;
})()
;})(switch__21388__auto__,c__21409__auto__))
})();
var state__21411__auto__ = (function (){var statearr_23193 = f__21410__auto__.call(null);
(statearr_23193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21409__auto__);

return statearr_23193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21411__auto__);
});})(c__21409__auto__))
);

return c__21409__auto__;
});
cloudxmark.core.send_to_chan = (function cloudxmark$core$send_to_chan(c){
return (function (p__23204,cb){
var map__23205 = p__23204;
var map__23205__$1 = ((((!((map__23205 == null)))?((((map__23205.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23205.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23205):map__23205);
var search = cljs.core.get.call(null,map__23205__$1,new cljs.core.Keyword(null,"search","search",1564939822));
if(cljs.core.truth_(search)){
var map__23207 = om.next.query__GT_ast.call(null,search);
var map__23207__$1 = ((((!((map__23207 == null)))?((((map__23207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23207):map__23207);
var vec__23208 = cljs.core.get.call(null,map__23207__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var search__$1 = cljs.core.nth.call(null,vec__23208,(0),null);
var query = cljs.core.get_in.call(null,search__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"query","query",-1288509510)], null));
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query,cb], null));
} else {
return null;
}
});
});
cloudxmark.core.send_chan = cljs.core.async.chan.call(null);
cloudxmark.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("search","results","search/results",107824727),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read","read",1140058661),cloudxmark.core.read], null)),new cljs.core.Keyword(null,"send","send",-652151114),cloudxmark.core.send_to_chan.call(null,cloudxmark.core.send_chan),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"passwordlist","passwordlist",-835770409)], null)], null));
cloudxmark.core.search_loop.call(null,cloudxmark.core.send_chan);
om.next.add_root_BANG_.call(null,cloudxmark.core.reconciler,cloudxmark.core.AutoCompleter,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map