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
var args22211 = [];
var len__19538__auto___22214 = arguments.length;
var i__19539__auto___22215 = (0);
while(true){
if((i__19539__auto___22215 < len__19538__auto___22214)){
args22211.push((arguments[i__19539__auto___22215]));

var G__22216 = (i__19539__auto___22215 + (1));
i__19539__auto___22215 = G__22216;
continue;
} else {
}
break;
}

var G__22213 = args22211.length;
switch (G__22213) {
case 1:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22211.length)].join('')));

}
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return cloudxmark.core.jsonp.call(null,cljs.core.async.chan.call(null),uri);
});

cloudxmark.core.jsonp.cljs$core$IFn$_invoke$arity$2 = (function (c,uri){
var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));
cljs.core.println.call(null,[cljs.core.str("before send "),cljs.core.str(uri)].join(''));

gjsonp.send(null,((function (gjsonp){
return (function (p1__22209_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__22209_SHARP_);
});})(gjsonp))
,((function (gjsonp){
return (function (p1__22210_SHARP_){
return cljs.core.println.call(null,[cljs.core.str("error!"),cljs.core.str(p1__22210_SHARP_)].join(''));
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
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),(function (p__22218,k,p__22219){
var map__22220 = p__22218;
var map__22220__$1 = ((((!((map__22220 == null)))?((((map__22220.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22220.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22220):map__22220);
var env = map__22220__$1;
var state = cljs.core.get.call(null,map__22220__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__22220__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__22221 = p__22219;
var map__22221__$1 = ((((!((map__22221 == null)))?((((map__22221.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22221.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22221):map__22221);
var query = cljs.core.get.call(null,map__22221__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cljs.core.deref.call(null,state),k,cljs.core.PersistentVector.EMPTY)], null),(((clojure.string.blank_QMARK_.call(null,query)) || ((cljs.core.count.call(null,query) < (3))))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122),ast], null)));
}));
cljs.core._add_method.call(null,cloudxmark.core.read,new cljs.core.Keyword("password","lst","password/lst",-678643482),(function (p__22224,k,p__22225){
var map__22226 = p__22224;
var map__22226__$1 = ((((!((map__22226 == null)))?((((map__22226.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22226.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22226):map__22226);
var env = map__22226__$1;
var state = cljs.core.get.call(null,map__22226__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__22226__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__22227 = p__22225;
var map__22227__$1 = ((((!((map__22227 == null)))?((((map__22227.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22227.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22227):map__22227);
var query = cljs.core.get.call(null,map__22227__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cljs.core.deref.call(null,state),k,cljs.core.PersistentVector.EMPTY)], null),(((clojure.string.blank_QMARK_.call(null,query)) || ((cljs.core.count.call(null,query) < (3))))?null:(function (){
cljs.core.println.call(null,[cljs.core.str("pw search: "),cljs.core.str(query)].join(''));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"password-search","password-search",918521380),ast], null);
})()
));
}));
cloudxmark.core.result_list = (function cloudxmark$core$result_list(results){
return React.DOM.ul({"key": "result-list"},om.util.force_children.call(null,cljs.core.map_indexed.call(null,(function (idx,itm){
return React.DOM.li({"key": idx},om.util.force_children.call(null,itm));
}),results)));
});
cloudxmark.core.password_list = (function cloudxmark$core$password_list(results){
return React.DOM.div({"key": "password-list"},om.util.force_children.call(null,cljs.core.map_indexed.call(null,(function (idx,itm){
return React.DOM.div({"key": [cljs.core.str(cloudxmark$core$password_list),cljs.core.str(idx)].join('')},om.util.force_children.call(null,om.dom.input.call(null,{"type": "checkbox"})),om.util.force_children.call(null,React.DOM.span({"key": [cljs.core.str(cloudxmark$core$password_list),cljs.core.str(idx),cljs.core.str("span")].join('')},om.util.force_children.call(null,itm))));
}),results)));
});
cloudxmark.core.search_field = (function cloudxmark$core$search_field(comp,query,type){
var vec__22232 = (function (){var G__22233 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22233) {
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
var elem_key = cljs.core.nth.call(null,vec__22232,(0),null);
var query_key = cljs.core.nth.call(null,vec__22232,(1),null);
cljs.core.println.call(null,[cljs.core.str("elem-key"),cljs.core.str(elem_key),cljs.core.str(" query-key:"),cljs.core.str(query_key)].join(''));

return om.dom.input.call(null,{"key": elem_key, "value": query, "onChange": ((function (vec__22232,elem_key,query_key){
return (function (e){
return om.next.set_query_BANG_.call(null,comp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.fromArray([query_key,e.target.value], true, false)], null));
});})(vec__22232,elem_key,query_key))
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

var x22239_22252 = cloudxmark.core.PasswordList.prototype;
x22239_22252.componentWillUpdate = ((function (x22239_22252){
return (function (next_props__21502__auto__,next_state__21503__auto__){
var this__21501__auto__ = this;
if(((!((this__21501__auto__ == null)))?(((false) || (this__21501__auto__.om$next$Ident$))?true:false):false)){
var ident__21505__auto___22253 = om.next.ident.call(null,this__21501__auto__,om.next.props.call(null,this__21501__auto__));
var next_ident__21506__auto___22254 = om.next.ident.call(null,this__21501__auto__,om.next._next_props.call(null,next_props__21502__auto__,this__21501__auto__));
if(cljs.core.not_EQ_.call(null,ident__21505__auto___22253,next_ident__21506__auto___22254)){
var idxr__21507__auto___22255 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__21507__auto___22255 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__21507__auto___22255),((function (idxr__21507__auto___22255,ident__21505__auto___22253,next_ident__21506__auto___22254,this__21501__auto__,x22239_22252){
return (function (indexes__21508__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__21508__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__21505__auto___22253], null),cljs.core.disj,this__21501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__21506__auto___22254], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__21501__auto__);
});})(idxr__21507__auto___22255,ident__21505__auto___22253,next_ident__21506__auto___22254,this__21501__auto__,x22239_22252))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__21501__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21501__auto__);
});})(x22239_22252))
;

x22239_22252.shouldComponentUpdate = ((function (x22239_22252){
return (function (next_props__21502__auto__,next_state__21503__auto__){
var this__21501__auto__ = this;
var next_children__21504__auto__ = next_props__21502__auto__.children;
var next_props__21502__auto____$1 = goog.object.get(next_props__21502__auto__,"omcljs$value");
var next_props__21502__auto____$2 = (function (){var G__22241 = next_props__21502__auto____$1;
if((next_props__21502__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__22241);
} else {
return G__22241;
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
});})(x22239_22252))
;

x22239_22252.componentWillUnmount = ((function (x22239_22252){
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
});})(x22239_22252))
;

x22239_22252.componentDidUpdate = ((function (x22239_22252){
return (function (prev_props__21509__auto__,prev_state__21510__auto__){
var this__21501__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21501__auto__);
});})(x22239_22252))
;

x22239_22252.isMounted = ((function (x22239_22252){
return (function (){
var this__21501__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21501__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22239_22252))
;

x22239_22252.componentWillMount = ((function (x22239_22252){
return (function (){
var this__21501__auto__ = this;
var indexer__21511__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21511__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21511__auto__,this__21501__auto__);
}
});})(x22239_22252))
;

x22239_22252.render = ((function (x22239_22252){
return (function (){
var this__21500__auto__ = this;
var this$ = this__21500__auto__;
var _STAR_reconciler_STAR_22242 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_22243 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_22244 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_22245 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_22246 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21500__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21500__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21500__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21500__auto__);

om.next._STAR_parent_STAR_ = this__21500__auto__;

try{var map__22247 = om.next.props.call(null,this$);
var map__22247__$1 = ((((!((map__22247 == null)))?((((map__22247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22247):map__22247);
var lst = cljs.core.get.call(null,map__22247__$1,new cljs.core.Keyword("password","lst","password/lst",-678643482));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Password List"))),om.util.force_children.call(null,(function (){var G__22249 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloudxmark.core.search_field.call(null,this$,new cljs.core.Keyword(null,"password-query","password-query",-226681249).cljs$core$IFn$_invoke$arity$1(om.next.get_params.call(null,this$)),new cljs.core.Keyword(null,"password","password",417022471))], null);
if(!(cljs.core.empty_QMARK_.call(null,lst))){
return cljs.core.conj.call(null,G__22249,cloudxmark.core.password_list.call(null,lst));
} else {
return G__22249;
}
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_22246;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_22245;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_22244;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_22243;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_22242;
}});})(x22239_22252))
;


cloudxmark.core.PasswordList.prototype.constructor = cloudxmark.core.PasswordList;

cloudxmark.core.PasswordList.prototype.constructor.displayName = "cloudxmark.core/PasswordList";

cloudxmark.core.PasswordList.prototype.om$isComponent = true;

var x22250_22256 = cloudxmark.core.PasswordList;
x22250_22256.om$next$IQueryParams$ = true;

x22250_22256.om$next$IQueryParams$params$arity$1 = ((function (x22250_22256){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"password-query","password-query",-226681249),""], null);
});})(x22250_22256))
;

x22250_22256.om$next$IQuery$ = true;

x22250_22256.om$next$IQuery$query$arity$1 = ((function (x22250_22256){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword("password","lst","password/lst",-678643482),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?password-query","?password-query",117781522,null)], null))], null);
});})(x22250_22256))
;


var x22251_22257 = cloudxmark.core.PasswordList.prototype;
x22251_22257.om$next$IQueryParams$ = true;

x22251_22257.om$next$IQueryParams$params$arity$1 = ((function (x22251_22257){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"password-query","password-query",-226681249),""], null);
});})(x22251_22257))
;

x22251_22257.om$next$IQuery$ = true;

x22251_22257.om$next$IQuery$query$arity$1 = ((function (x22251_22257){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword("password","lst","password/lst",-678643482),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?password-query","?password-query",117781522,null)], null))], null);
});})(x22251_22257))
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

var x22262_22275 = cloudxmark.core.AutoCompleter.prototype;
x22262_22275.componentWillUpdate = ((function (x22262_22275){
return (function (next_props__21502__auto__,next_state__21503__auto__){
var this__21501__auto__ = this;
if(((!((this__21501__auto__ == null)))?(((false) || (this__21501__auto__.om$next$Ident$))?true:false):false)){
var ident__21505__auto___22276 = om.next.ident.call(null,this__21501__auto__,om.next.props.call(null,this__21501__auto__));
var next_ident__21506__auto___22277 = om.next.ident.call(null,this__21501__auto__,om.next._next_props.call(null,next_props__21502__auto__,this__21501__auto__));
if(cljs.core.not_EQ_.call(null,ident__21505__auto___22276,next_ident__21506__auto___22277)){
var idxr__21507__auto___22278 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__21507__auto___22278 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__21507__auto___22278),((function (idxr__21507__auto___22278,ident__21505__auto___22276,next_ident__21506__auto___22277,this__21501__auto__,x22262_22275){
return (function (indexes__21508__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__21508__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__21505__auto___22276], null),cljs.core.disj,this__21501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__21506__auto___22277], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__21501__auto__);
});})(idxr__21507__auto___22278,ident__21505__auto___22276,next_ident__21506__auto___22277,this__21501__auto__,x22262_22275))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__21501__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21501__auto__);
});})(x22262_22275))
;

x22262_22275.shouldComponentUpdate = ((function (x22262_22275){
return (function (next_props__21502__auto__,next_state__21503__auto__){
var this__21501__auto__ = this;
var next_children__21504__auto__ = next_props__21502__auto__.children;
var next_props__21502__auto____$1 = goog.object.get(next_props__21502__auto__,"omcljs$value");
var next_props__21502__auto____$2 = (function (){var G__22264 = next_props__21502__auto____$1;
if((next_props__21502__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__22264);
} else {
return G__22264;
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
});})(x22262_22275))
;

x22262_22275.componentWillUnmount = ((function (x22262_22275){
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
});})(x22262_22275))
;

x22262_22275.componentDidUpdate = ((function (x22262_22275){
return (function (prev_props__21509__auto__,prev_state__21510__auto__){
var this__21501__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21501__auto__);
});})(x22262_22275))
;

x22262_22275.isMounted = ((function (x22262_22275){
return (function (){
var this__21501__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21501__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22262_22275))
;

x22262_22275.componentWillMount = ((function (x22262_22275){
return (function (){
var this__21501__auto__ = this;
var indexer__21511__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21501__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21511__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21511__auto__,this__21501__auto__);
}
});})(x22262_22275))
;

x22262_22275.render = ((function (x22262_22275){
return (function (){
var this__21500__auto__ = this;
var this$ = this__21500__auto__;
var _STAR_reconciler_STAR_22265 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_22266 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_22267 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_22268 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_22269 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21500__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21500__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21500__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21500__auto__);

om.next._STAR_parent_STAR_ = this__21500__auto__;

try{var map__22270 = om.next.props.call(null,this$);
var map__22270__$1 = ((((!((map__22270 == null)))?((((map__22270.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22270.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22270):map__22270);
var lst = cljs.core.get.call(null,map__22270__$1,new cljs.core.Keyword("wiki","lst","wiki/lst",270705683));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"AutoCompleter"))),om.util.force_children.call(null,(function (){var G__22272 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloudxmark.core.search_field.call(null,this$,new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648).cljs$core$IFn$_invoke$arity$1(om.next.get_params.call(null,this$)),new cljs.core.Keyword(null,"wiki","wiki",1946329928))], null);
if(!(cljs.core.empty_QMARK_.call(null,lst))){
return cljs.core.conj.call(null,G__22272,cloudxmark.core.result_list.call(null,lst));
} else {
return G__22272;
}
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_22269;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_22268;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_22267;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_22266;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_22265;
}});})(x22262_22275))
;


cloudxmark.core.AutoCompleter.prototype.constructor = cloudxmark.core.AutoCompleter;

cloudxmark.core.AutoCompleter.prototype.constructor.displayName = "cloudxmark.core/AutoCompleter";

cloudxmark.core.AutoCompleter.prototype.om$isComponent = true;

var x22273_22279 = cloudxmark.core.AutoCompleter;
x22273_22279.om$next$IQueryParams$ = true;

x22273_22279.om$next$IQueryParams$params$arity$1 = ((function (x22273_22279){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648),""], null);
});})(x22273_22279))
;

x22273_22279.om$next$IQuery$ = true;

x22273_22279.om$next$IQuery$query$arity$1 = ((function (x22273_22279){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?wiki-query","?wiki-query",-1723016161,null)], null))], null);
});})(x22273_22279))
;


var x22274_22280 = cloudxmark.core.AutoCompleter.prototype;
x22274_22280.om$next$IQueryParams$ = true;

x22274_22280.om$next$IQueryParams$params$arity$1 = ((function (x22274_22280){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wiki-query","wiki-query",-1319255648),""], null);
});})(x22274_22280))
;

x22274_22280.om$next$IQuery$ = true;

x22274_22280.om$next$IQuery$query$arity$1 = ((function (x22274_22280){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?wiki-query","?wiki-query",-1723016161,null)], null))], null);
});})(x22274_22280))
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
return (function (state_22394){
var state_val_22395 = (state_22394[(1)]);
if((state_val_22395 === (1))){
var state_22394__$1 = state_22394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22394__$1,(2),c);
} else {
if((state_val_22395 === (2))){
var inst_22352 = (state_22394[(2)]);
var inst_22353 = cljs.core.nth.call(null,inst_22352,(0),null);
var inst_22354 = cljs.core.nth.call(null,inst_22352,(1),null);
var inst_22355 = cljs.core.nth.call(null,inst_22352,(2),null);
var inst_22356 = inst_22352;
var state_22394__$1 = (function (){var statearr_22396 = state_22394;
(statearr_22396[(7)] = inst_22355);

(statearr_22396[(8)] = inst_22356);

(statearr_22396[(9)] = inst_22354);

(statearr_22396[(10)] = inst_22353);

return statearr_22396;
})();
var statearr_22397_22415 = state_22394__$1;
(statearr_22397_22415[(2)] = null);

(statearr_22397_22415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22395 === (3))){
var inst_22356 = (state_22394[(8)]);
var inst_22359 = cljs.core.nth.call(null,inst_22356,(0),null);
var inst_22360 = cljs.core.nth.call(null,inst_22356,(1),null);
var inst_22361 = cljs.core.nth.call(null,inst_22356,(2),null);
var state_22394__$1 = (function (){var statearr_22398 = state_22394;
(statearr_22398[(11)] = inst_22361);

(statearr_22398[(12)] = inst_22359);

return statearr_22398;
})();
var G__22399_22416 = (((inst_22360 instanceof cljs.core.Keyword))?inst_22360.fqn:null);
switch (G__22399_22416) {
case "wiki":
var statearr_22400_22418 = state_22394__$1;
(statearr_22400_22418[(1)] = (6));


break;
case "password":
var statearr_22401_22419 = state_22394__$1;
(statearr_22401_22419[(1)] = (7));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_22360)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22395 === (4))){
var inst_22392 = (state_22394[(2)]);
var state_22394__$1 = state_22394;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22394__$1,inst_22392);
} else {
if((state_val_22395 === (5))){
var inst_22359 = (state_22394[(12)]);
var inst_22373 = (state_22394[(2)]);
var inst_22374 = cljs.core.nth.call(null,inst_22373,(0),null);
var inst_22375 = cljs.core.nth.call(null,inst_22373,(1),null);
var inst_22376 = [cljs.core.str(inst_22375),cljs.core.str(inst_22359)].join('');
var inst_22377 = cloudxmark.core.jsonp.call(null,inst_22376);
var state_22394__$1 = (function (){var statearr_22402 = state_22394;
(statearr_22402[(13)] = inst_22374);

return statearr_22402;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22394__$1,(8),inst_22377);
} else {
if((state_val_22395 === (6))){
var inst_22364 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22365 = [new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),cloudxmark.core.wiki_url];
var inst_22366 = (new cljs.core.PersistentVector(null,2,(5),inst_22364,inst_22365,null));
var state_22394__$1 = state_22394;
var statearr_22403_22420 = state_22394__$1;
(statearr_22403_22420[(2)] = inst_22366);

(statearr_22403_22420[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22395 === (7))){
var inst_22368 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22369 = [new cljs.core.Keyword("password","lst","password/lst",-678643482),cloudxmark.core.password_url];
var inst_22370 = (new cljs.core.PersistentVector(null,2,(5),inst_22368,inst_22369,null));
var state_22394__$1 = state_22394;
var statearr_22404_22421 = state_22394__$1;
(statearr_22404_22421[(2)] = inst_22370);

(statearr_22404_22421[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22395 === (8))){
var inst_22361 = (state_22394[(11)]);
var inst_22374 = (state_22394[(13)]);
var inst_22379 = (state_22394[(2)]);
var inst_22380 = cljs.core.nth.call(null,inst_22379,(0),null);
var inst_22381 = cljs.core.nth.call(null,inst_22379,(1),null);
var inst_22382 = [cljs.core.str(inst_22374),cljs.core.str(": "),cljs.core.str("results: "),cljs.core.str(inst_22381)].join('');
var inst_22383 = cljs.core.println.call(null,inst_22382);
var inst_22384 = [inst_22374];
var inst_22385 = [inst_22381];
var inst_22386 = cljs.core.PersistentHashMap.fromArrays(inst_22384,inst_22385);
var inst_22387 = inst_22361.call(null,inst_22386);
var state_22394__$1 = (function (){var statearr_22405 = state_22394;
(statearr_22405[(14)] = inst_22380);

(statearr_22405[(15)] = inst_22387);

(statearr_22405[(16)] = inst_22383);

return statearr_22405;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22394__$1,(9),c);
} else {
if((state_val_22395 === (9))){
var inst_22389 = (state_22394[(2)]);
var inst_22356 = inst_22389;
var state_22394__$1 = (function (){var statearr_22406 = state_22394;
(statearr_22406[(8)] = inst_22356);

return statearr_22406;
})();
var statearr_22407_22422 = state_22394__$1;
(statearr_22407_22422[(2)] = null);

(statearr_22407_22422[(1)] = (3));


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
});})(c__21409__auto__))
;
return ((function (switch__21388__auto__,c__21409__auto__){
return (function() {
var cloudxmark$core$search_loop_$_state_machine__21389__auto__ = null;
var cloudxmark$core$search_loop_$_state_machine__21389__auto____0 = (function (){
var statearr_22411 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22411[(0)] = cloudxmark$core$search_loop_$_state_machine__21389__auto__);

(statearr_22411[(1)] = (1));

return statearr_22411;
});
var cloudxmark$core$search_loop_$_state_machine__21389__auto____1 = (function (state_22394){
while(true){
var ret_value__21390__auto__ = (function (){try{while(true){
var result__21391__auto__ = switch__21388__auto__.call(null,state_22394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21391__auto__;
}
break;
}
}catch (e22412){if((e22412 instanceof Object)){
var ex__21392__auto__ = e22412;
var statearr_22413_22423 = state_22394;
(statearr_22413_22423[(5)] = ex__21392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22424 = state_22394;
state_22394 = G__22424;
continue;
} else {
return ret_value__21390__auto__;
}
break;
}
});
cloudxmark$core$search_loop_$_state_machine__21389__auto__ = function(state_22394){
switch(arguments.length){
case 0:
return cloudxmark$core$search_loop_$_state_machine__21389__auto____0.call(this);
case 1:
return cloudxmark$core$search_loop_$_state_machine__21389__auto____1.call(this,state_22394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cloudxmark$core$search_loop_$_state_machine__21389__auto__.cljs$core$IFn$_invoke$arity$0 = cloudxmark$core$search_loop_$_state_machine__21389__auto____0;
cloudxmark$core$search_loop_$_state_machine__21389__auto__.cljs$core$IFn$_invoke$arity$1 = cloudxmark$core$search_loop_$_state_machine__21389__auto____1;
return cloudxmark$core$search_loop_$_state_machine__21389__auto__;
})()
;})(switch__21388__auto__,c__21409__auto__))
})();
var state__21411__auto__ = (function (){var statearr_22414 = f__21410__auto__.call(null);
(statearr_22414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21409__auto__);

return statearr_22414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21411__auto__);
});})(c__21409__auto__))
);

return c__21409__auto__;
});
cloudxmark.core.send_to_chan = (function cloudxmark$core$send_to_chan(c){
return (function (p__22434,cb){
var map__22435 = p__22434;
var map__22435__$1 = ((((!((map__22435 == null)))?((((map__22435.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22435.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22435):map__22435);
var wiki_search = cljs.core.get.call(null,map__22435__$1,new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122));
var password_search = cljs.core.get.call(null,map__22435__$1,new cljs.core.Keyword(null,"password-search","password-search",918521380));
if(cljs.core.truth_(wiki_search)){
var map__22437 = om.next.query__GT_ast.call(null,wiki_search);
var map__22437__$1 = ((((!((map__22437 == null)))?((((map__22437.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22437.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22437):map__22437);
var vec__22438 = cljs.core.get.call(null,map__22437__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var wiki_search__$1 = cljs.core.nth.call(null,vec__22438,(0),null);
var query = cljs.core.get_in.call(null,wiki_search__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"query","query",-1288509510)], null));
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [query,new cljs.core.Keyword(null,"wiki","wiki",1946329928),cb], null));
} else {
if(cljs.core.truth_(password_search)){
var map__22440 = om.next.query__GT_ast.call(null,password_search);
var map__22440__$1 = ((((!((map__22440 == null)))?((((map__22440.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22440.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22440):map__22440);
var vec__22441 = cljs.core.get.call(null,map__22440__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var password_search__$1 = cljs.core.nth.call(null,vec__22441,(0),null);
var query = cljs.core.get_in.call(null,password_search__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"query","query",-1288509510)], null));
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [query,new cljs.core.Keyword(null,"password","password",417022471),cb], null));
} else {
return null;
}
}
});
});
cloudxmark.core.send_chan = cljs.core.async.chan.call(null);
cloudxmark.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("wiki","lst","wiki/lst",270705683),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("password","lst","password/lst",-678643482),cljs.core.PersistentVector.EMPTY], null));
cloudxmark.core.wiki_reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),cloudxmark.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read","read",1140058661),cloudxmark.core.read], null)),new cljs.core.Keyword(null,"send","send",-652151114),cloudxmark.core.send_to_chan.call(null,cloudxmark.core.send_chan),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122),new cljs.core.Keyword(null,"password-search","password-search",918521380)], null)], null));
cloudxmark.core.password_reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),cloudxmark.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read","read",1140058661),cloudxmark.core.read], null)),new cljs.core.Keyword(null,"send","send",-652151114),cloudxmark.core.send_to_chan.call(null,cloudxmark.core.send_chan),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"wiki-search","wiki-search",-1857707122),new cljs.core.Keyword(null,"password-search","password-search",918521380)], null)], null));
cloudxmark.core.search_loop.call(null,cloudxmark.core.send_chan);
om.next.add_root_BANG_.call(null,cloudxmark.core.wiki_reconciler,cloudxmark.core.AutoCompleter,goog.dom.getElement("wiki"));
om.next.add_root_BANG_.call(null,cloudxmark.core.password_reconciler,cloudxmark.core.PasswordList,goog.dom.getElement("password"));

//# sourceMappingURL=core.js.map