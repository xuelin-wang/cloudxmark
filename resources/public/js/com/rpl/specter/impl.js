// Compiled by ClojureScript 1.9.89 {}
goog.provide('com.rpl.specter.impl');
goog.require('cljs.core');
goog.require('com.rpl.specter.protocols');
goog.require('clojure.walk');
goog.require('clojure.string');
com.rpl.specter.impl.spy = (function com$rpl$specter$impl$spy(e){
cljs.core.println.call(null,"SPY:");

cljs.core.println.call(null,cljs.core.pr_str.call(null,e));

return e;
});
com.rpl.specter.impl.smart_str_STAR_ = (function com$rpl$specter$impl$smart_str_STAR_(o){
if(cljs.core.coll_QMARK_.call(null,o)){
return cljs.core.pr_str.call(null,o);
} else {
return [cljs.core.str(o)].join('');
}
});
com.rpl.specter.impl.smart_str = (function com$rpl$specter$impl$smart_str(var_args){
var args__22624__auto__ = [];
var len__22617__auto___25727 = arguments.length;
var i__22618__auto___25728 = (0);
while(true){
if((i__22618__auto___25728 < len__22617__auto___25727)){
args__22624__auto__.push((arguments[i__22618__auto___25728]));

var G__25729 = (i__22618__auto___25728 + (1));
i__22618__auto___25728 = G__25729;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});

com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic = (function (elems){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,com.rpl.specter.impl.smart_str_STAR_,elems));
});

com.rpl.specter.impl.smart_str.cljs$lang$maxFixedArity = (0);

com.rpl.specter.impl.smart_str.cljs$lang$applyTo = (function (seq25726){
return com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25726));
});

com.rpl.specter.impl.throw_illegal = (function com$rpl$specter$impl$throw_illegal(var_args){
var args__22624__auto__ = [];
var len__22617__auto___25731 = arguments.length;
var i__22618__auto___25732 = (0);
while(true){
if((i__22618__auto___25732 < len__22617__auto___25731)){
args__22624__auto__.push((arguments[i__22618__auto___25732]));

var G__25733 = (i__22618__auto___25732 + (1));
i__22618__auto___25732 = G__25733;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});

com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw (new Error(cljs.core.apply.call(null,cljs.core.str,args)));
});

com.rpl.specter.impl.throw_illegal.cljs$lang$maxFixedArity = (0);

com.rpl.specter.impl.throw_illegal.cljs$lang$applyTo = (function (seq25730){
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25730));
});

com.rpl.specter.impl.macroexpand_SINGLEQUOTE_ = (function com$rpl$specter$impl$macroexpand_SINGLEQUOTE_(form){
var orig_eval_fn = cljs.js._STAR_eval_fn_STAR_;
try{cljs.js._STAR_eval_fn_STAR_ = cljs.js.js_eval;

return cljs.js.eval.call(null,cljs.js.empty_state.call(null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","macroexpand","cljs.core/macroexpand",1715305549,null)),(function (){var x__22360__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__22360__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22360__auto__);
})()))),cljs.core.identity);
}finally {cljs.js._STAR_eval_fn_STAR_ = orig_eval_fn;
}});
/**
 * Recursively performs all possible macroexpansions in form.
 */
com.rpl.specter.impl.do_macroexpand_all = (function com$rpl$specter$impl$do_macroexpand_all(form){
return clojure.walk.prewalk.call(null,(function (x){
if(cljs.core.seq_QMARK_.call(null,x)){
return com.rpl.specter.impl.macroexpand_SINGLEQUOTE_.call(null,x);
} else {
return x;
}
}),form);
});
com.rpl.specter.impl.intern_STAR_ = (function com$rpl$specter$impl$intern_STAR_(ns,name,val){
return com.rpl.specter.impl.throw_illegal.call(null,"intern not supported in ClojureScript");
});
com.rpl.specter.impl.gen_uuid_str = (function com$rpl$specter$impl$gen_uuid_str(){
return com.rpl.specter.impl.throw_illegal.call(null,"Cannot get UUID in Javascript");
});
com.rpl.specter.impl.benchmark = (function com$rpl$specter$impl$benchmark(iters,afn){
var start__22472__auto__ = cljs.core.system_time.call(null);
var ret__22473__auto__ = (function (){var n__22447__auto__ = iters;
var _ = (0);
while(true){
if((_ < n__22447__auto__)){
afn.call(null);

var G__25734 = (_ + (1));
_ = G__25734;
continue;
} else {
return null;
}
break;
}
})();
cljs.core.prn.call(null,[cljs.core.str("Elapsed time: "),cljs.core.str((cljs.core.system_time.call(null) - start__22472__auto__).toFixed((6))),cljs.core.str(" msecs")].join(''));

return ret__22473__auto__;
});

/**
* @constructor
*/
com.rpl.specter.impl.ExecutorFunctions = (function (type,select_executor,transform_executor){
this.type = type;
this.select_executor = select_executor;
this.transform_executor = transform_executor;
})

com.rpl.specter.impl.ExecutorFunctions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"select-executor","select-executor",140452237,null),new cljs.core.Symbol(null,"transform-executor","transform-executor",-31221519,null)], null);
});

com.rpl.specter.impl.ExecutorFunctions.cljs$lang$type = true;

com.rpl.specter.impl.ExecutorFunctions.cljs$lang$ctorStr = "com.rpl.specter.impl/ExecutorFunctions";

com.rpl.specter.impl.ExecutorFunctions.cljs$lang$ctorPrWriter = (function (this__22086__auto__,writer__22087__auto__,opt__22088__auto__){
return cljs.core._write.call(null,writer__22087__auto__,"com.rpl.specter.impl/ExecutorFunctions");
});

com.rpl.specter.impl.__GT_ExecutorFunctions = (function com$rpl$specter$impl$__GT_ExecutorFunctions(type,select_executor,transform_executor){
return (new com.rpl.specter.impl.ExecutorFunctions(type,select_executor,transform_executor));
});

com.rpl.specter.impl.RichPathExecutor = com.rpl.specter.impl.__GT_ExecutorFunctions.call(null,new cljs.core.Keyword(null,"richpath","richpath",-150197948),(function (params,params_idx,selector,structure){
return selector.call(null,params,params_idx,cljs.core.PersistentVector.EMPTY,structure,(function (_,___$1,vals,structure__$1){
if(!((cljs.core.PersistentVector.EMPTY === vals))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,vals,structure__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [structure__$1], null);
}
}));
}),(function (params,params_idx,transformer,transform_fn,structure){
return transformer.call(null,params,params_idx,cljs.core.PersistentVector.EMPTY,structure,(function (_,___$1,vals,structure__$1){
if((cljs.core.PersistentVector.EMPTY === vals)){
return transform_fn.call(null,structure__$1);
} else {
return cljs.core.apply.call(null,transform_fn,cljs.core.conj.call(null,vals,structure__$1));
}
}));
}));
com.rpl.specter.impl.LeanPathExecutor = com.rpl.specter.impl.__GT_ExecutorFunctions.call(null,new cljs.core.Keyword(null,"leanpath","leanpath",7838331),(function (params,params_idx,selector,structure){
return selector.call(null,structure,(function (structure__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [structure__$1], null);
}));
}),(function (params,params_idx,transformer,transform_fn,structure){
return transformer.call(null,structure,transform_fn);
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.TransformFunctions = (function (executors,selector,transformer,__meta,__extmap,__hash){
this.executors = executors;
this.selector = selector;
this.transformer = transformer;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22104__auto__,k__22105__auto__){
var self__ = this;
var this__22104__auto____$1 = this;
return cljs.core._lookup.call(null,this__22104__auto____$1,k__22105__auto__,null);
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22106__auto__,k25736,else__22107__auto__){
var self__ = this;
var this__22106__auto____$1 = this;
var G__25738 = (((k25736 instanceof cljs.core.Keyword))?k25736.fqn:null);
switch (G__25738) {
case "executors":
return self__.executors;

break;
case "selector":
return self__.selector;

break;
case "transformer":
return self__.transformer;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25736,else__22107__auto__);

}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22118__auto__,writer__22119__auto__,opts__22120__auto__){
var self__ = this;
var this__22118__auto____$1 = this;
var pr_pair__22121__auto__ = ((function (this__22118__auto____$1){
return (function (keyval__22122__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22119__auto__,cljs.core.pr_writer,""," ","",opts__22120__auto__,keyval__22122__auto__);
});})(this__22118__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22119__auto__,pr_pair__22121__auto__,"#com.rpl.specter.impl.TransformFunctions{",", ","}",opts__22120__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"executors","executors",-331073403),self__.executors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selector","selector",762528866),self__.selector],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transformer","transformer",-1493470620),self__.transformer],null))], null),self__.__extmap));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25735){
var self__ = this;
var G__25735__$1 = this;
return (new cljs.core.RecordIter((0),G__25735__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"executors","executors",-331073403),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Keyword(null,"transformer","transformer",-1493470620)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22102__auto__){
var self__ = this;
var this__22102__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22098__auto__){
var self__ = this;
var this__22098__auto____$1 = this;
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22108__auto__){
var self__ = this;
var this__22108__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22099__auto__){
var self__ = this;
var this__22099__auto____$1 = this;
var h__21871__auto__ = self__.__hash;
if(!((h__21871__auto__ == null))){
return h__21871__auto__;
} else {
var h__21871__auto____$1 = cljs.core.hash_imap.call(null,this__22099__auto____$1);
self__.__hash = h__21871__auto____$1;

return h__21871__auto____$1;
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22100__auto__,other__22101__auto__){
var self__ = this;
var this__22100__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21422__auto__ = other__22101__auto__;
if(cljs.core.truth_(and__21422__auto__)){
var and__21422__auto____$1 = (this__22100__auto____$1.constructor === other__22101__auto__.constructor);
if(and__21422__auto____$1){
return cljs.core.equiv_map.call(null,this__22100__auto____$1,other__22101__auto__);
} else {
return and__21422__auto____$1;
}
} else {
return and__21422__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22113__auto__,k__22114__auto__){
var self__ = this;
var this__22113__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selector","selector",762528866),null,new cljs.core.Keyword(null,"transformer","transformer",-1493470620),null,new cljs.core.Keyword(null,"executors","executors",-331073403),null], null), null),k__22114__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22113__auto____$1),self__.__meta),k__22114__auto__);
} else {
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22114__auto__)),null));
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22111__auto__,k__22112__auto__,G__25735){
var self__ = this;
var this__22111__auto____$1 = this;
var pred__25739 = cljs.core.keyword_identical_QMARK_;
var expr__25740 = k__22112__auto__;
if(cljs.core.truth_(pred__25739.call(null,new cljs.core.Keyword(null,"executors","executors",-331073403),expr__25740))){
return (new com.rpl.specter.impl.TransformFunctions(G__25735,self__.selector,self__.transformer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25739.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),expr__25740))){
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,G__25735,self__.transformer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25739.call(null,new cljs.core.Keyword(null,"transformer","transformer",-1493470620),expr__25740))){
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,G__25735,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22112__auto__,G__25735),null));
}
}
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22116__auto__){
var self__ = this;
var this__22116__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"executors","executors",-331073403),self__.executors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selector","selector",762528866),self__.selector],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transformer","transformer",-1493470620),self__.transformer],null))], null),self__.__extmap));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22103__auto__,G__25735){
var self__ = this;
var this__22103__auto____$1 = this;
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,G__25735,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22109__auto__,entry__22110__auto__){
var self__ = this;
var this__22109__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22110__auto__)){
return cljs.core._assoc.call(null,this__22109__auto____$1,cljs.core._nth.call(null,entry__22110__auto__,(0)),cljs.core._nth.call(null,entry__22110__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22109__auto____$1,entry__22110__auto__);
}
});

com.rpl.specter.impl.TransformFunctions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"executors","executors",1309458124,null),new cljs.core.Symbol(null,"selector","selector",-1891906903,null),new cljs.core.Symbol(null,"transformer","transformer",147060907,null)], null);
});

com.rpl.specter.impl.TransformFunctions.cljs$lang$type = true;

com.rpl.specter.impl.TransformFunctions.cljs$lang$ctorPrSeq = (function (this__22140__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/TransformFunctions");
});

com.rpl.specter.impl.TransformFunctions.cljs$lang$ctorPrWriter = (function (this__22140__auto__,writer__22141__auto__){
return cljs.core._write.call(null,writer__22141__auto__,"com.rpl.specter.impl/TransformFunctions");
});

com.rpl.specter.impl.__GT_TransformFunctions = (function com$rpl$specter$impl$__GT_TransformFunctions(executors,selector,transformer){
return (new com.rpl.specter.impl.TransformFunctions(executors,selector,transformer,null,null,null));
});

com.rpl.specter.impl.map__GT_TransformFunctions = (function com$rpl$specter$impl$map__GT_TransformFunctions(G__25737){
return (new com.rpl.specter.impl.TransformFunctions(new cljs.core.Keyword(null,"executors","executors",-331073403).cljs$core$IFn$_invoke$arity$1(G__25737),new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(G__25737),new cljs.core.Keyword(null,"transformer","transformer",-1493470620).cljs$core$IFn$_invoke$arity$1(G__25737),null,cljs.core.dissoc.call(null,G__25737,new cljs.core.Keyword(null,"executors","executors",-331073403),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Keyword(null,"transformer","transformer",-1493470620)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.CompiledPath = (function (transform_fns,params,params_idx,__meta,__extmap,__hash){
this.transform_fns = transform_fns;
this.params = params;
this.params_idx = params_idx;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22104__auto__,k__22105__auto__){
var self__ = this;
var this__22104__auto____$1 = this;
return cljs.core._lookup.call(null,this__22104__auto____$1,k__22105__auto__,null);
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22106__auto__,k25744,else__22107__auto__){
var self__ = this;
var this__22106__auto____$1 = this;
var G__25746 = (((k25744 instanceof cljs.core.Keyword))?k25744.fqn:null);
switch (G__25746) {
case "transform-fns":
return self__.transform_fns;

break;
case "params":
return self__.params;

break;
case "params-idx":
return self__.params_idx;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25744,else__22107__auto__);

}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22118__auto__,writer__22119__auto__,opts__22120__auto__){
var self__ = this;
var this__22118__auto____$1 = this;
var pr_pair__22121__auto__ = ((function (this__22118__auto____$1){
return (function (keyval__22122__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22119__auto__,cljs.core.pr_writer,""," ","",opts__22120__auto__,keyval__22122__auto__);
});})(this__22118__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22119__auto__,pr_pair__22121__auto__,"#com.rpl.specter.impl.CompiledPath{",", ","}",opts__22120__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-idx","params-idx",340984624),self__.params_idx],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25743){
var self__ = this;
var G__25743__$1 = this;
return (new cljs.core.RecordIter((0),G__25743__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params-idx","params-idx",340984624)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22102__auto__){
var self__ = this;
var this__22102__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22098__auto__){
var self__ = this;
var this__22098__auto____$1 = this;
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22108__auto__){
var self__ = this;
var this__22108__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22099__auto__){
var self__ = this;
var this__22099__auto____$1 = this;
var h__21871__auto__ = self__.__hash;
if(!((h__21871__auto__ == null))){
return h__21871__auto__;
} else {
var h__21871__auto____$1 = cljs.core.hash_imap.call(null,this__22099__auto____$1);
self__.__hash = h__21871__auto____$1;

return h__21871__auto____$1;
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22100__auto__,other__22101__auto__){
var self__ = this;
var this__22100__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21422__auto__ = other__22101__auto__;
if(cljs.core.truth_(and__21422__auto__)){
var and__21422__auto____$1 = (this__22100__auto____$1.constructor === other__22101__auto__.constructor);
if(and__21422__auto____$1){
return cljs.core.equiv_map.call(null,this__22100__auto____$1,other__22101__auto__);
} else {
return and__21422__auto____$1;
}
} else {
return and__21422__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22113__auto__,k__22114__auto__){
var self__ = this;
var this__22113__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"params-idx","params-idx",340984624),null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),null], null), null),k__22114__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22113__auto____$1),self__.__meta),k__22114__auto__);
} else {
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22114__auto__)),null));
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22111__auto__,k__22112__auto__,G__25743){
var self__ = this;
var this__22111__auto____$1 = this;
var pred__25747 = cljs.core.keyword_identical_QMARK_;
var expr__25748 = k__22112__auto__;
if(cljs.core.truth_(pred__25747.call(null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),expr__25748))){
return (new com.rpl.specter.impl.CompiledPath(G__25743,self__.params,self__.params_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25747.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__25748))){
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,G__25743,self__.params_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25747.call(null,new cljs.core.Keyword(null,"params-idx","params-idx",340984624),expr__25748))){
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,G__25743,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22112__auto__,G__25743),null));
}
}
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22116__auto__){
var self__ = this;
var this__22116__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-idx","params-idx",340984624),self__.params_idx],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22103__auto__,G__25743){
var self__ = this;
var this__22103__auto____$1 = this;
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,G__25743,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22109__auto__,entry__22110__auto__){
var self__ = this;
var this__22109__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22110__auto__)){
return cljs.core._assoc.call(null,this__22109__auto____$1,cljs.core._nth.call(null,entry__22110__auto__,(0)),cljs.core._nth.call(null,entry__22110__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22109__auto____$1,entry__22110__auto__);
}
});

com.rpl.specter.impl.CompiledPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transform-fns","transform-fns",-1985393120,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"params-idx","params-idx",1981516151,null)], null);
});

com.rpl.specter.impl.CompiledPath.cljs$lang$type = true;

com.rpl.specter.impl.CompiledPath.cljs$lang$ctorPrSeq = (function (this__22140__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/CompiledPath");
});

com.rpl.specter.impl.CompiledPath.cljs$lang$ctorPrWriter = (function (this__22140__auto__,writer__22141__auto__){
return cljs.core._write.call(null,writer__22141__auto__,"com.rpl.specter.impl/CompiledPath");
});

com.rpl.specter.impl.__GT_CompiledPath = (function com$rpl$specter$impl$__GT_CompiledPath(transform_fns,params,params_idx){
return (new com.rpl.specter.impl.CompiledPath(transform_fns,params,params_idx,null,null,null));
});

com.rpl.specter.impl.map__GT_CompiledPath = (function com$rpl$specter$impl$map__GT_CompiledPath(G__25745){
return (new com.rpl.specter.impl.CompiledPath(new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(G__25745),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__25745),new cljs.core.Keyword(null,"params-idx","params-idx",340984624).cljs$core$IFn$_invoke$arity$1(G__25745),null,cljs.core.dissoc.call(null,G__25745,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params-idx","params-idx",340984624)),null));
});

com.rpl.specter.impl.compiled_path_QMARK_ = (function com$rpl$specter$impl$compiled_path_QMARK_(o){
return (o instanceof com.rpl.specter.impl.CompiledPath);
});
com.rpl.specter.impl.no_params_compiled_path = (function com$rpl$specter$impl$no_params_compiled_path(transform_fns){
return com.rpl.specter.impl.__GT_CompiledPath.call(null,transform_fns,null,(0));
});
com.rpl.specter.impl.fast_object_array = (function com$rpl$specter$impl$fast_object_array(i){
return cljs.core.object_array.call(null,i);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.ParamsNeededPath = (function (transform_fns,num_needed_params,__meta,__extmap,__hash){
this.transform_fns = transform_fns;
this.num_needed_params = num_needed_params;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667595;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22104__auto__,k__22105__auto__){
var self__ = this;
var this__22104__auto____$1 = this;
return cljs.core._lookup.call(null,this__22104__auto____$1,k__22105__auto__,null);
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22106__auto__,k25963,else__22107__auto__){
var self__ = this;
var this__22106__auto____$1 = this;
var G__25966 = (((k25963 instanceof cljs.core.Keyword))?k25963.fqn:null);
switch (G__25966) {
case "transform-fns":
return self__.transform_fns;

break;
case "num-needed-params":
return self__.num_needed_params;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25963,else__22107__auto__);

}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22118__auto__,writer__22119__auto__,opts__22120__auto__){
var self__ = this;
var this__22118__auto____$1 = this;
var pr_pair__22121__auto__ = ((function (this__22118__auto____$1){
return (function (keyval__22122__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22119__auto__,cljs.core.pr_writer,""," ","",opts__22120__auto__,keyval__22122__auto__);
});})(this__22118__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22119__auto__,pr_pair__22121__auto__,"#com.rpl.specter.impl.ParamsNeededPath{",", ","}",opts__22120__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),self__.num_needed_params],null))], null),self__.__extmap));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25962){
var self__ = this;
var G__25962__$1 = this;
return (new cljs.core.RecordIter((0),G__25962__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.call = (function() {
var G__25971 = null;
var G__25971__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var this__25676__auto__ = self____$1;
var array25751 = cljs.core.object_array.call(null,(0));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});
var G__25971__2 = (function (self__,G__25752){
var self__ = this;
var self____$1 = this;
var this__25676__auto__ = self____$1;
var array25751 = cljs.core.object_array.call(null,(1));
(array25751[(0)] = G__25752);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});
var G__25971__3 = (function (self__,G__25753,G__25754){
var self__ = this;
var self____$1 = this;
var this__25676__auto__ = self____$1;
var array25751 = cljs.core.object_array.call(null,(2));
(array25751[(0)] = G__25753);

(array25751[(1)] = G__25754);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});
var G__25971__4 = (function (self__,G__25755,G__25756,G__25757){
var self__ = this;
var self____$1 = this;
var this__25676__auto__ = self____$1;
var array25751 = cljs.core.object_array.call(null,(3));
(array25751[(0)] = G__25755);

(array25751[(1)] = G__25756);

(array25751[(2)] = G__25757);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});
var G__25971__5 = (function (self__,G__25758,G__25759,G__25760,G__25761){
var self__ = this;
var self____$1 = this;
var this__25676__auto__ = self____$1;
var array25751 = cljs.core.object_array.call(null,(4));
(array25751[(0)] = G__25758);

(array25751[(1)] = G__25759);

(array25751[(2)] = G__25760);

(array25751[(3)] = G__25761);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});
var G__25971__6 = (function (self__,G__25762,G__25763,G__25764,G__25765,G__25766){
var self__ = this;
var self____$1 = this;
var this__25676__auto__ = self____$1;
var array25751 = cljs.core.object_array.call(null,(5));
(array25751[(0)] = G__25762);

(array25751[(1)] = G__25763);

(array25751[(2)] = G__25764);

(array25751[(3)] = G__25765);

(array25751[(4)] = G__25766);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});
var G__25971__7 = (function (self__,G__25767,G__25768,G__25769,G__25770,G__25771,G__25772){
var self__ = this;
var self____$1 = this;
var this__25676__auto__ = self____$1;
var array25751 = cljs.core.object_array.call(null,(6));
(array25751[(0)] = G__25767);

(array25751[(1)] = G__25768);

(array25751[(2)] = G__25769);

(array25751[(3)] = G__25770);

(array25751[(4)] = G__25771);

(array25751[(5)] = G__25772);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});
var G__25971__8 = (function (self__,G__25773,G__25774,G__25775,G__25776,G__25777,G__25778,G__25779){
var self__ = this;
var self____$1 = this;
var this__25676__auto__ = self____$1;
var array25751 = cljs.core.object_array.call(null,(7));
(array25751[(0)] = G__25773);

(array25751[(1)] = G__25774);

(array25751[(2)] = G__25775);

(array25751[(3)] = G__25776);

(array25751[(4)] = G__25777);

(array25751[(5)] = G__25778);

(array25751[(6)] = G__25779);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});
var G__25971__9 = (function (self__,G__25780,G__25781,G__25782,G__25783,G__25784,G__25785,G__25786,G__25787){
var self__ = this;
var self____$1 = this;
var this__25676__auto__ = self____$1;
var array25751 = cljs.core.object_array.call(null,(8));
(array25751[(0)] = G__25780);

(array25751[(1)] = G__25781);

(array25751[(2)] = G__25782);

(array25751[(3)] = G__25783);

(array25751[(4)] = G__25784);

(array25751[(5)] = G__25785);

(array25751[(6)] = G__25786);

(array25751[(7)] = G__25787);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});
var G__25971__10 = (function (self__,G__25788,G__25789,G__25790,G__25791,G__25792,G__25793,G__25794,G__25795,G__25796){
var self__ = this;
var self____$1 = this;
var this__25676__auto__ = self____$1;
var array25751 = cljs.core.object_array.call(null,(9));
(array25751[(0)] = G__25788);

(array25751[(1)] = G__25789);

(array25751[(2)] = G__25790);

(array25751[(3)] = G__25791);

(array25751[(4)] = G__25792);

(array25751[(5)] = G__25793);

(array25751[(6)] = G__25794);

(array25751[(7)] = G__25795);

(array25751[(8)] = G__25796);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});
var G__25971__11 = (function (self__,G__25797,G__25798,G__25799,G__25800,G__25801,G__25802,G__25803,G__25804,G__25805,G__25806){
var self__ = this;
var self____$1 = this;
var this__25676__auto__ = self____$1;
var array25751 = cljs.core.object_array.call(null,(10));
(array25751[(0)] = G__25797);

(array25751[(1)] = G__25798);

(array25751[(2)] = G__25799);

(array25751[(3)] = G__25800);

(array25751[(4)] = G__25801);

(array25751[(5)] = G__25802);

(array25751[(6)] = G__25803);

(array25751[(7)] = G__25804);

(array25751[(8)] = G__25805);

(array25751[(9)] = G__25806);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});
var G__25971__12 = (function (self__,G__25807,G__25808,G__25809,G__25810,G__25811,G__25812,G__25813,G__25814,G__25815,G__25816,G__25817){
var self__ = this;
var self____$1 = this;
var this__25676__auto__ = self____$1;
var array25751 = cljs.core.object_array.call(null,(11));
(array25751[(0)] = G__25807);

(array25751[(1)] = G__25808);

(array25751[(2)] = G__25809);

(array25751[(3)] = G__25810);

(array25751[(4)] = G__25811);

(array25751[(5)] = G__25812);

(array25751[(6)] = G__25813);

(array25751[(7)] = G__25814);

(array25751[(8)] = G__25815);

(array25751[(9)] = G__25816);

(array25751[(10)] = G__25817);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});
var G__25971__13 = (function (self__,G__25818,G__25819,G__25820,G__25821,G__25822,G__25823,G__25824,G__25825,G__25826,G__25827,G__25828,G__25829){
var self__ = this;
var self____$1 = this;
var this__25676__auto__ = self____$1;
var array25751 = cljs.core.object_array.call(null,(12));
(array25751[(0)] = G__25818);

(array25751[(1)] = G__25819);

(array25751[(2)] = G__25820);

(array25751[(3)] = G__25821);

(array25751[(4)] = G__25822);

(array25751[(5)] = G__25823);

(array25751[(6)] = G__25824);

(array25751[(7)] = G__25825);

(array25751[(8)] = G__25826);

(array25751[(9)] = G__25827);

(array25751[(10)] = G__25828);

(array25751[(11)] = G__25829);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});
var G__25971__14 = (function (self__,G__25830,G__25831,G__25832,G__25833,G__25834,G__25835,G__25836,G__25837,G__25838,G__25839,G__25840,G__25841,G__25842){
var self__ = this;
var self____$1 = this;
var this__25676__auto__ = self____$1;
var array25751 = cljs.core.object_array.call(null,(13));
(array25751[(0)] = G__25830);

(array25751[(1)] = G__25831);

(array25751[(2)] = G__25832);

(array25751[(3)] = G__25833);

(array25751[(4)] = G__25834);

(array25751[(5)] = G__25835);

(array25751[(6)] = G__25836);

(array25751[(7)] = G__25837);

(array25751[(8)] = G__25838);

(array25751[(9)] = G__25839);

(array25751[(10)] = G__25840);

(array25751[(11)] = G__25841);

(array25751[(12)] = G__25842);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});
var G__25971__15 = (function (self__,G__25843,G__25844,G__25845,G__25846,G__25847,G__25848,G__25849,G__25850,G__25851,G__25852,G__25853,G__25854,G__25855,G__25856){
var self__ = this;
var self____$1 = this;
var this__25676__auto__ = self____$1;
var array25751 = cljs.core.object_array.call(null,(14));
(array25751[(0)] = G__25843);

(array25751[(1)] = G__25844);

(array25751[(2)] = G__25845);

(array25751[(3)] = G__25846);

(array25751[(4)] = G__25847);

(array25751[(5)] = G__25848);

(array25751[(6)] = G__25849);

(array25751[(7)] = G__25850);

(array25751[(8)] = G__25851);

(array25751[(9)] = G__25852);

(array25751[(10)] = G__25853);

(array25751[(11)] = G__25854);

(array25751[(12)] = G__25855);

(array25751[(13)] = G__25856);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});
var G__25971__16 = (function (self__,G__25857,G__25858,G__25859,G__25860,G__25861,G__25862,G__25863,G__25864,G__25865,G__25866,G__25867,G__25868,G__25869,G__25870,G__25871){
var self__ = this;
var self____$1 = this;
var this__25676__auto__ = self____$1;
var array25751 = cljs.core.object_array.call(null,(15));
(array25751[(0)] = G__25857);

(array25751[(1)] = G__25858);

(array25751[(2)] = G__25859);

(array25751[(3)] = G__25860);

(array25751[(4)] = G__25861);

(array25751[(5)] = G__25862);

(array25751[(6)] = G__25863);

(array25751[(7)] = G__25864);

(array25751[(8)] = G__25865);

(array25751[(9)] = G__25866);

(array25751[(10)] = G__25867);

(array25751[(11)] = G__25868);

(array25751[(12)] = G__25869);

(array25751[(13)] = G__25870);

(array25751[(14)] = G__25871);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});
var G__25971__17 = (function (self__,G__25872,G__25873,G__25874,G__25875,G__25876,G__25877,G__25878,G__25879,G__25880,G__25881,G__25882,G__25883,G__25884,G__25885,G__25886,G__25887){
var self__ = this;
var self____$1 = this;
var this__25676__auto__ = self____$1;
var array25751 = cljs.core.object_array.call(null,(16));
(array25751[(0)] = G__25872);

(array25751[(1)] = G__25873);

(array25751[(2)] = G__25874);

(array25751[(3)] = G__25875);

(array25751[(4)] = G__25876);

(array25751[(5)] = G__25877);

(array25751[(6)] = G__25878);

(array25751[(7)] = G__25879);

(array25751[(8)] = G__25880);

(array25751[(9)] = G__25881);

(array25751[(10)] = G__25882);

(array25751[(11)] = G__25883);

(array25751[(12)] = G__25884);

(array25751[(13)] = G__25885);

(array25751[(14)] = G__25886);

(array25751[(15)] = G__25887);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});
var G__25971__18 = (function (self__,G__25888,G__25889,G__25890,G__25891,G__25892,G__25893,G__25894,G__25895,G__25896,G__25897,G__25898,G__25899,G__25900,G__25901,G__25902,G__25903,G__25904){
var self__ = this;
var self____$1 = this;
var this__25676__auto__ = self____$1;
var array25751 = cljs.core.object_array.call(null,(17));
(array25751[(0)] = G__25888);

(array25751[(1)] = G__25889);

(array25751[(2)] = G__25890);

(array25751[(3)] = G__25891);

(array25751[(4)] = G__25892);

(array25751[(5)] = G__25893);

(array25751[(6)] = G__25894);

(array25751[(7)] = G__25895);

(array25751[(8)] = G__25896);

(array25751[(9)] = G__25897);

(array25751[(10)] = G__25898);

(array25751[(11)] = G__25899);

(array25751[(12)] = G__25900);

(array25751[(13)] = G__25901);

(array25751[(14)] = G__25902);

(array25751[(15)] = G__25903);

(array25751[(16)] = G__25904);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});
var G__25971__19 = (function (self__,G__25905,G__25906,G__25907,G__25908,G__25909,G__25910,G__25911,G__25912,G__25913,G__25914,G__25915,G__25916,G__25917,G__25918,G__25919,G__25920,G__25921,G__25922){
var self__ = this;
var self____$1 = this;
var this__25676__auto__ = self____$1;
var array25751 = cljs.core.object_array.call(null,(18));
(array25751[(0)] = G__25905);

(array25751[(1)] = G__25906);

(array25751[(2)] = G__25907);

(array25751[(3)] = G__25908);

(array25751[(4)] = G__25909);

(array25751[(5)] = G__25910);

(array25751[(6)] = G__25911);

(array25751[(7)] = G__25912);

(array25751[(8)] = G__25913);

(array25751[(9)] = G__25914);

(array25751[(10)] = G__25915);

(array25751[(11)] = G__25916);

(array25751[(12)] = G__25917);

(array25751[(13)] = G__25918);

(array25751[(14)] = G__25919);

(array25751[(15)] = G__25920);

(array25751[(16)] = G__25921);

(array25751[(17)] = G__25922);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});
var G__25971__20 = (function (self__,G__25923,G__25924,G__25925,G__25926,G__25927,G__25928,G__25929,G__25930,G__25931,G__25932,G__25933,G__25934,G__25935,G__25936,G__25937,G__25938,G__25939,G__25940,G__25941){
var self__ = this;
var self____$1 = this;
var this__25676__auto__ = self____$1;
var array25751 = cljs.core.object_array.call(null,(19));
(array25751[(0)] = G__25923);

(array25751[(1)] = G__25924);

(array25751[(2)] = G__25925);

(array25751[(3)] = G__25926);

(array25751[(4)] = G__25927);

(array25751[(5)] = G__25928);

(array25751[(6)] = G__25929);

(array25751[(7)] = G__25930);

(array25751[(8)] = G__25931);

(array25751[(9)] = G__25932);

(array25751[(10)] = G__25933);

(array25751[(11)] = G__25934);

(array25751[(12)] = G__25935);

(array25751[(13)] = G__25936);

(array25751[(14)] = G__25937);

(array25751[(15)] = G__25938);

(array25751[(16)] = G__25939);

(array25751[(17)] = G__25940);

(array25751[(18)] = G__25941);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});
var G__25971__21 = (function (self__,G__25942,G__25943,G__25944,G__25945,G__25946,G__25947,G__25948,G__25949,G__25950,G__25951,G__25952,G__25953,G__25954,G__25955,G__25956,G__25957,G__25958,G__25959,G__25960,G__25961){
var self__ = this;
var self____$1 = this;
var this__25676__auto__ = self____$1;
var array25751 = cljs.core.object_array.call(null,(20));
(array25751[(0)] = G__25942);

(array25751[(1)] = G__25943);

(array25751[(2)] = G__25944);

(array25751[(3)] = G__25945);

(array25751[(4)] = G__25946);

(array25751[(5)] = G__25947);

(array25751[(6)] = G__25948);

(array25751[(7)] = G__25949);

(array25751[(8)] = G__25950);

(array25751[(9)] = G__25951);

(array25751[(10)] = G__25952);

(array25751[(11)] = G__25953);

(array25751[(12)] = G__25954);

(array25751[(13)] = G__25955);

(array25751[(14)] = G__25956);

(array25751[(15)] = G__25957);

(array25751[(16)] = G__25958);

(array25751[(17)] = G__25959);

(array25751[(18)] = G__25960);

(array25751[(19)] = G__25961);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});
var G__25971__22 = (function (self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var a = cljs.core.object_array.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20], null),rest));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this$,a,(0));
});
G__25971 = function(self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest){
switch(arguments.length){
case 1:
return G__25971__1.call(this,self__);
case 2:
return G__25971__2.call(this,self__,p01);
case 3:
return G__25971__3.call(this,self__,p01,p02);
case 4:
return G__25971__4.call(this,self__,p01,p02,p03);
case 5:
return G__25971__5.call(this,self__,p01,p02,p03,p04);
case 6:
return G__25971__6.call(this,self__,p01,p02,p03,p04,p05);
case 7:
return G__25971__7.call(this,self__,p01,p02,p03,p04,p05,p06);
case 8:
return G__25971__8.call(this,self__,p01,p02,p03,p04,p05,p06,p07);
case 9:
return G__25971__9.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08);
case 10:
return G__25971__10.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09);
case 11:
return G__25971__11.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10);
case 12:
return G__25971__12.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11);
case 13:
return G__25971__13.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12);
case 14:
return G__25971__14.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13);
case 15:
return G__25971__15.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14);
case 16:
return G__25971__16.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15);
case 17:
return G__25971__17.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16);
case 18:
return G__25971__18.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17);
case 19:
return G__25971__19.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18);
case 20:
return G__25971__20.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19);
case 21:
return G__25971__21.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20);
case 22:
return G__25971__22.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25971.cljs$core$IFn$_invoke$arity$1 = G__25971__1;
G__25971.cljs$core$IFn$_invoke$arity$2 = G__25971__2;
G__25971.cljs$core$IFn$_invoke$arity$3 = G__25971__3;
G__25971.cljs$core$IFn$_invoke$arity$4 = G__25971__4;
G__25971.cljs$core$IFn$_invoke$arity$5 = G__25971__5;
G__25971.cljs$core$IFn$_invoke$arity$6 = G__25971__6;
G__25971.cljs$core$IFn$_invoke$arity$7 = G__25971__7;
G__25971.cljs$core$IFn$_invoke$arity$8 = G__25971__8;
G__25971.cljs$core$IFn$_invoke$arity$9 = G__25971__9;
G__25971.cljs$core$IFn$_invoke$arity$10 = G__25971__10;
G__25971.cljs$core$IFn$_invoke$arity$11 = G__25971__11;
G__25971.cljs$core$IFn$_invoke$arity$12 = G__25971__12;
G__25971.cljs$core$IFn$_invoke$arity$13 = G__25971__13;
G__25971.cljs$core$IFn$_invoke$arity$14 = G__25971__14;
G__25971.cljs$core$IFn$_invoke$arity$15 = G__25971__15;
G__25971.cljs$core$IFn$_invoke$arity$16 = G__25971__16;
G__25971.cljs$core$IFn$_invoke$arity$17 = G__25971__17;
G__25971.cljs$core$IFn$_invoke$arity$18 = G__25971__18;
G__25971.cljs$core$IFn$_invoke$arity$19 = G__25971__19;
G__25971.cljs$core$IFn$_invoke$arity$20 = G__25971__20;
G__25971.cljs$core$IFn$_invoke$arity$21 = G__25971__21;
G__25971.cljs$core$IFn$_invoke$arity$22 = G__25971__22;
return G__25971;
})()
;

com.rpl.specter.impl.ParamsNeededPath.prototype.apply = (function (self__,args25965){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args25965)));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this__25676__auto__ = this;
var array25751 = cljs.core.object_array.call(null,(0));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$1 = (function (G__25752){
var self__ = this;
var this__25676__auto__ = this;
var array25751 = cljs.core.object_array.call(null,(1));
(array25751[(0)] = G__25752);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$2 = (function (G__25753,G__25754){
var self__ = this;
var this__25676__auto__ = this;
var array25751 = cljs.core.object_array.call(null,(2));
(array25751[(0)] = G__25753);

(array25751[(1)] = G__25754);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$3 = (function (G__25755,G__25756,G__25757){
var self__ = this;
var this__25676__auto__ = this;
var array25751 = cljs.core.object_array.call(null,(3));
(array25751[(0)] = G__25755);

(array25751[(1)] = G__25756);

(array25751[(2)] = G__25757);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$4 = (function (G__25758,G__25759,G__25760,G__25761){
var self__ = this;
var this__25676__auto__ = this;
var array25751 = cljs.core.object_array.call(null,(4));
(array25751[(0)] = G__25758);

(array25751[(1)] = G__25759);

(array25751[(2)] = G__25760);

(array25751[(3)] = G__25761);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$5 = (function (G__25762,G__25763,G__25764,G__25765,G__25766){
var self__ = this;
var this__25676__auto__ = this;
var array25751 = cljs.core.object_array.call(null,(5));
(array25751[(0)] = G__25762);

(array25751[(1)] = G__25763);

(array25751[(2)] = G__25764);

(array25751[(3)] = G__25765);

(array25751[(4)] = G__25766);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$6 = (function (G__25767,G__25768,G__25769,G__25770,G__25771,G__25772){
var self__ = this;
var this__25676__auto__ = this;
var array25751 = cljs.core.object_array.call(null,(6));
(array25751[(0)] = G__25767);

(array25751[(1)] = G__25768);

(array25751[(2)] = G__25769);

(array25751[(3)] = G__25770);

(array25751[(4)] = G__25771);

(array25751[(5)] = G__25772);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$7 = (function (G__25773,G__25774,G__25775,G__25776,G__25777,G__25778,G__25779){
var self__ = this;
var this__25676__auto__ = this;
var array25751 = cljs.core.object_array.call(null,(7));
(array25751[(0)] = G__25773);

(array25751[(1)] = G__25774);

(array25751[(2)] = G__25775);

(array25751[(3)] = G__25776);

(array25751[(4)] = G__25777);

(array25751[(5)] = G__25778);

(array25751[(6)] = G__25779);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$8 = (function (G__25780,G__25781,G__25782,G__25783,G__25784,G__25785,G__25786,G__25787){
var self__ = this;
var this__25676__auto__ = this;
var array25751 = cljs.core.object_array.call(null,(8));
(array25751[(0)] = G__25780);

(array25751[(1)] = G__25781);

(array25751[(2)] = G__25782);

(array25751[(3)] = G__25783);

(array25751[(4)] = G__25784);

(array25751[(5)] = G__25785);

(array25751[(6)] = G__25786);

(array25751[(7)] = G__25787);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$9 = (function (G__25788,G__25789,G__25790,G__25791,G__25792,G__25793,G__25794,G__25795,G__25796){
var self__ = this;
var this__25676__auto__ = this;
var array25751 = cljs.core.object_array.call(null,(9));
(array25751[(0)] = G__25788);

(array25751[(1)] = G__25789);

(array25751[(2)] = G__25790);

(array25751[(3)] = G__25791);

(array25751[(4)] = G__25792);

(array25751[(5)] = G__25793);

(array25751[(6)] = G__25794);

(array25751[(7)] = G__25795);

(array25751[(8)] = G__25796);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$10 = (function (G__25797,G__25798,G__25799,G__25800,G__25801,G__25802,G__25803,G__25804,G__25805,G__25806){
var self__ = this;
var this__25676__auto__ = this;
var array25751 = cljs.core.object_array.call(null,(10));
(array25751[(0)] = G__25797);

(array25751[(1)] = G__25798);

(array25751[(2)] = G__25799);

(array25751[(3)] = G__25800);

(array25751[(4)] = G__25801);

(array25751[(5)] = G__25802);

(array25751[(6)] = G__25803);

(array25751[(7)] = G__25804);

(array25751[(8)] = G__25805);

(array25751[(9)] = G__25806);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$11 = (function (G__25807,G__25808,G__25809,G__25810,G__25811,G__25812,G__25813,G__25814,G__25815,G__25816,G__25817){
var self__ = this;
var this__25676__auto__ = this;
var array25751 = cljs.core.object_array.call(null,(11));
(array25751[(0)] = G__25807);

(array25751[(1)] = G__25808);

(array25751[(2)] = G__25809);

(array25751[(3)] = G__25810);

(array25751[(4)] = G__25811);

(array25751[(5)] = G__25812);

(array25751[(6)] = G__25813);

(array25751[(7)] = G__25814);

(array25751[(8)] = G__25815);

(array25751[(9)] = G__25816);

(array25751[(10)] = G__25817);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$12 = (function (G__25818,G__25819,G__25820,G__25821,G__25822,G__25823,G__25824,G__25825,G__25826,G__25827,G__25828,G__25829){
var self__ = this;
var this__25676__auto__ = this;
var array25751 = cljs.core.object_array.call(null,(12));
(array25751[(0)] = G__25818);

(array25751[(1)] = G__25819);

(array25751[(2)] = G__25820);

(array25751[(3)] = G__25821);

(array25751[(4)] = G__25822);

(array25751[(5)] = G__25823);

(array25751[(6)] = G__25824);

(array25751[(7)] = G__25825);

(array25751[(8)] = G__25826);

(array25751[(9)] = G__25827);

(array25751[(10)] = G__25828);

(array25751[(11)] = G__25829);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$13 = (function (G__25830,G__25831,G__25832,G__25833,G__25834,G__25835,G__25836,G__25837,G__25838,G__25839,G__25840,G__25841,G__25842){
var self__ = this;
var this__25676__auto__ = this;
var array25751 = cljs.core.object_array.call(null,(13));
(array25751[(0)] = G__25830);

(array25751[(1)] = G__25831);

(array25751[(2)] = G__25832);

(array25751[(3)] = G__25833);

(array25751[(4)] = G__25834);

(array25751[(5)] = G__25835);

(array25751[(6)] = G__25836);

(array25751[(7)] = G__25837);

(array25751[(8)] = G__25838);

(array25751[(9)] = G__25839);

(array25751[(10)] = G__25840);

(array25751[(11)] = G__25841);

(array25751[(12)] = G__25842);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$14 = (function (G__25843,G__25844,G__25845,G__25846,G__25847,G__25848,G__25849,G__25850,G__25851,G__25852,G__25853,G__25854,G__25855,G__25856){
var self__ = this;
var this__25676__auto__ = this;
var array25751 = cljs.core.object_array.call(null,(14));
(array25751[(0)] = G__25843);

(array25751[(1)] = G__25844);

(array25751[(2)] = G__25845);

(array25751[(3)] = G__25846);

(array25751[(4)] = G__25847);

(array25751[(5)] = G__25848);

(array25751[(6)] = G__25849);

(array25751[(7)] = G__25850);

(array25751[(8)] = G__25851);

(array25751[(9)] = G__25852);

(array25751[(10)] = G__25853);

(array25751[(11)] = G__25854);

(array25751[(12)] = G__25855);

(array25751[(13)] = G__25856);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$15 = (function (G__25857,G__25858,G__25859,G__25860,G__25861,G__25862,G__25863,G__25864,G__25865,G__25866,G__25867,G__25868,G__25869,G__25870,G__25871){
var self__ = this;
var this__25676__auto__ = this;
var array25751 = cljs.core.object_array.call(null,(15));
(array25751[(0)] = G__25857);

(array25751[(1)] = G__25858);

(array25751[(2)] = G__25859);

(array25751[(3)] = G__25860);

(array25751[(4)] = G__25861);

(array25751[(5)] = G__25862);

(array25751[(6)] = G__25863);

(array25751[(7)] = G__25864);

(array25751[(8)] = G__25865);

(array25751[(9)] = G__25866);

(array25751[(10)] = G__25867);

(array25751[(11)] = G__25868);

(array25751[(12)] = G__25869);

(array25751[(13)] = G__25870);

(array25751[(14)] = G__25871);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$16 = (function (G__25872,G__25873,G__25874,G__25875,G__25876,G__25877,G__25878,G__25879,G__25880,G__25881,G__25882,G__25883,G__25884,G__25885,G__25886,G__25887){
var self__ = this;
var this__25676__auto__ = this;
var array25751 = cljs.core.object_array.call(null,(16));
(array25751[(0)] = G__25872);

(array25751[(1)] = G__25873);

(array25751[(2)] = G__25874);

(array25751[(3)] = G__25875);

(array25751[(4)] = G__25876);

(array25751[(5)] = G__25877);

(array25751[(6)] = G__25878);

(array25751[(7)] = G__25879);

(array25751[(8)] = G__25880);

(array25751[(9)] = G__25881);

(array25751[(10)] = G__25882);

(array25751[(11)] = G__25883);

(array25751[(12)] = G__25884);

(array25751[(13)] = G__25885);

(array25751[(14)] = G__25886);

(array25751[(15)] = G__25887);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$17 = (function (G__25888,G__25889,G__25890,G__25891,G__25892,G__25893,G__25894,G__25895,G__25896,G__25897,G__25898,G__25899,G__25900,G__25901,G__25902,G__25903,G__25904){
var self__ = this;
var this__25676__auto__ = this;
var array25751 = cljs.core.object_array.call(null,(17));
(array25751[(0)] = G__25888);

(array25751[(1)] = G__25889);

(array25751[(2)] = G__25890);

(array25751[(3)] = G__25891);

(array25751[(4)] = G__25892);

(array25751[(5)] = G__25893);

(array25751[(6)] = G__25894);

(array25751[(7)] = G__25895);

(array25751[(8)] = G__25896);

(array25751[(9)] = G__25897);

(array25751[(10)] = G__25898);

(array25751[(11)] = G__25899);

(array25751[(12)] = G__25900);

(array25751[(13)] = G__25901);

(array25751[(14)] = G__25902);

(array25751[(15)] = G__25903);

(array25751[(16)] = G__25904);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$18 = (function (G__25905,G__25906,G__25907,G__25908,G__25909,G__25910,G__25911,G__25912,G__25913,G__25914,G__25915,G__25916,G__25917,G__25918,G__25919,G__25920,G__25921,G__25922){
var self__ = this;
var this__25676__auto__ = this;
var array25751 = cljs.core.object_array.call(null,(18));
(array25751[(0)] = G__25905);

(array25751[(1)] = G__25906);

(array25751[(2)] = G__25907);

(array25751[(3)] = G__25908);

(array25751[(4)] = G__25909);

(array25751[(5)] = G__25910);

(array25751[(6)] = G__25911);

(array25751[(7)] = G__25912);

(array25751[(8)] = G__25913);

(array25751[(9)] = G__25914);

(array25751[(10)] = G__25915);

(array25751[(11)] = G__25916);

(array25751[(12)] = G__25917);

(array25751[(13)] = G__25918);

(array25751[(14)] = G__25919);

(array25751[(15)] = G__25920);

(array25751[(16)] = G__25921);

(array25751[(17)] = G__25922);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$19 = (function (G__25923,G__25924,G__25925,G__25926,G__25927,G__25928,G__25929,G__25930,G__25931,G__25932,G__25933,G__25934,G__25935,G__25936,G__25937,G__25938,G__25939,G__25940,G__25941){
var self__ = this;
var this__25676__auto__ = this;
var array25751 = cljs.core.object_array.call(null,(19));
(array25751[(0)] = G__25923);

(array25751[(1)] = G__25924);

(array25751[(2)] = G__25925);

(array25751[(3)] = G__25926);

(array25751[(4)] = G__25927);

(array25751[(5)] = G__25928);

(array25751[(6)] = G__25929);

(array25751[(7)] = G__25930);

(array25751[(8)] = G__25931);

(array25751[(9)] = G__25932);

(array25751[(10)] = G__25933);

(array25751[(11)] = G__25934);

(array25751[(12)] = G__25935);

(array25751[(13)] = G__25936);

(array25751[(14)] = G__25937);

(array25751[(15)] = G__25938);

(array25751[(16)] = G__25939);

(array25751[(17)] = G__25940);

(array25751[(18)] = G__25941);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$20 = (function (G__25942,G__25943,G__25944,G__25945,G__25946,G__25947,G__25948,G__25949,G__25950,G__25951,G__25952,G__25953,G__25954,G__25955,G__25956,G__25957,G__25958,G__25959,G__25960,G__25961){
var self__ = this;
var this__25676__auto__ = this;
var array25751 = cljs.core.object_array.call(null,(20));
(array25751[(0)] = G__25942);

(array25751[(1)] = G__25943);

(array25751[(2)] = G__25944);

(array25751[(3)] = G__25945);

(array25751[(4)] = G__25946);

(array25751[(5)] = G__25947);

(array25751[(6)] = G__25948);

(array25751[(7)] = G__25949);

(array25751[(8)] = G__25950);

(array25751[(9)] = G__25951);

(array25751[(10)] = G__25952);

(array25751[(11)] = G__25953);

(array25751[(12)] = G__25954);

(array25751[(13)] = G__25955);

(array25751[(14)] = G__25956);

(array25751[(15)] = G__25957);

(array25751[(16)] = G__25958);

(array25751[(17)] = G__25959);

(array25751[(18)] = G__25960);

(array25751[(19)] = G__25961);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__25676__auto__,array25751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$21 = (function (p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest){
var self__ = this;
var this$ = this;
var a = cljs.core.object_array.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20], null),rest));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this$,a,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22102__auto__){
var self__ = this;
var this__22102__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22098__auto__){
var self__ = this;
var this__22098__auto____$1 = this;
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22108__auto__){
var self__ = this;
var this__22108__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22099__auto__){
var self__ = this;
var this__22099__auto____$1 = this;
var h__21871__auto__ = self__.__hash;
if(!((h__21871__auto__ == null))){
return h__21871__auto__;
} else {
var h__21871__auto____$1 = cljs.core.hash_imap.call(null,this__22099__auto____$1);
self__.__hash = h__21871__auto____$1;

return h__21871__auto____$1;
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22100__auto__,other__22101__auto__){
var self__ = this;
var this__22100__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21422__auto__ = other__22101__auto__;
if(cljs.core.truth_(and__21422__auto__)){
var and__21422__auto____$1 = (this__22100__auto____$1.constructor === other__22101__auto__.constructor);
if(and__21422__auto____$1){
return cljs.core.equiv_map.call(null,this__22100__auto____$1,other__22101__auto__);
} else {
return and__21422__auto____$1;
}
} else {
return and__21422__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22113__auto__,k__22114__auto__){
var self__ = this;
var this__22113__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),null], null), null),k__22114__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22113__auto____$1),self__.__meta),k__22114__auto__);
} else {
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22114__auto__)),null));
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22111__auto__,k__22112__auto__,G__25962){
var self__ = this;
var this__22111__auto____$1 = this;
var pred__25967 = cljs.core.keyword_identical_QMARK_;
var expr__25968 = k__22112__auto__;
if(cljs.core.truth_(pred__25967.call(null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),expr__25968))){
return (new com.rpl.specter.impl.ParamsNeededPath(G__25962,self__.num_needed_params,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25967.call(null,new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),expr__25968))){
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,G__25962,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22112__auto__,G__25962),null));
}
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22116__auto__){
var self__ = this;
var this__22116__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),self__.num_needed_params],null))], null),self__.__extmap));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22103__auto__,G__25962){
var self__ = this;
var this__22103__auto____$1 = this;
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,G__25962,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22109__auto__,entry__22110__auto__){
var self__ = this;
var this__22109__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22110__auto__)){
return cljs.core._assoc.call(null,this__22109__auto____$1,cljs.core._nth.call(null,entry__22110__auto__,(0)),cljs.core._nth.call(null,entry__22110__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22109__auto____$1,entry__22110__auto__);
}
});

com.rpl.specter.impl.ParamsNeededPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transform-fns","transform-fns",-1985393120,null),new cljs.core.Symbol(null,"num-needed-params","num-needed-params",421205430,null)], null);
});

com.rpl.specter.impl.ParamsNeededPath.cljs$lang$type = true;

com.rpl.specter.impl.ParamsNeededPath.cljs$lang$ctorPrSeq = (function (this__22140__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/ParamsNeededPath");
});

com.rpl.specter.impl.ParamsNeededPath.cljs$lang$ctorPrWriter = (function (this__22140__auto__,writer__22141__auto__){
return cljs.core._write.call(null,writer__22141__auto__,"com.rpl.specter.impl/ParamsNeededPath");
});

com.rpl.specter.impl.__GT_ParamsNeededPath = (function com$rpl$specter$impl$__GT_ParamsNeededPath(transform_fns,num_needed_params){
return (new com.rpl.specter.impl.ParamsNeededPath(transform_fns,num_needed_params,null,null,null));
});

com.rpl.specter.impl.map__GT_ParamsNeededPath = (function com$rpl$specter$impl$map__GT_ParamsNeededPath(G__25964){
return (new com.rpl.specter.impl.ParamsNeededPath(new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(G__25964),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097).cljs$core$IFn$_invoke$arity$1(G__25964),null,cljs.core.dissoc.call(null,G__25964,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097)),null));
});

com.rpl.specter.impl.params_needed_path_QMARK_ = (function com$rpl$specter$impl$params_needed_path_QMARK_(o){
return (o instanceof com.rpl.specter.impl.ParamsNeededPath);
});
com.rpl.specter.impl.bind_params_STAR_ = (function com$rpl$specter$impl$bind_params_STAR_(params_needed_path,params,idx){
return com.rpl.specter.impl.__GT_CompiledPath.call(null,params_needed_path.transform_fns,params,idx);
});

/**
 * @interface
 */
com.rpl.specter.impl.PathComposer = function(){};

com.rpl.specter.impl.do_comp_paths = (function com$rpl$specter$impl$do_comp_paths(paths){
if((!((paths == null))) && (!((paths.com$rpl$specter$impl$PathComposer$do_comp_paths$arity$1 == null)))){
return paths.com$rpl$specter$impl$PathComposer$do_comp_paths$arity$1(paths);
} else {
var x__22147__auto__ = (((paths == null))?null:paths);
var m__22148__auto__ = (com.rpl.specter.impl.do_comp_paths[goog.typeOf(x__22147__auto__)]);
if(!((m__22148__auto__ == null))){
return m__22148__auto__.call(null,paths);
} else {
var m__22148__auto____$1 = (com.rpl.specter.impl.do_comp_paths["_"]);
if(!((m__22148__auto____$1 == null))){
return m__22148__auto____$1.call(null,paths);
} else {
throw cljs.core.missing_protocol.call(null,"PathComposer.do-comp-paths",paths);
}
}
}
});

com.rpl.specter.impl.comp_paths_STAR_ = (function com$rpl$specter$impl$comp_paths_STAR_(p){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p))){
return p;
} else {
return com.rpl.specter.impl.do_comp_paths.call(null,p);
}
});
com.rpl.specter.impl.seq_contains_QMARK_ = (function com$rpl$specter$impl$seq_contains_QMARK_(aseq,val){
return !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core._EQ_,val),aseq)));
});
com.rpl.specter.impl.no_prot_error_str = (function com$rpl$specter$impl$no_prot_error_str(obj){
return [cljs.core.str("Protocol implementation cannot be found for object.\n        Extending Specter protocols should not be done inline in a deftype definition\n        because that prevents Specter from finding the protocol implementations for\n        optimized performance. Instead, you should extend the protocols via an\n        explicit extend-protocol call. \n"),cljs.core.str(obj)].join('');
});
com.rpl.specter.impl.structure_path_impl = (function com$rpl$specter$impl$structure_path_impl(obj){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"select*","select*",-1829914060),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$Navigator$))?true:false):false))?(function (G__25980,G__25981,G__25982){
return com.rpl.specter.protocols.select_STAR_.call(null,G__25980,G__25981,G__25982);
}):com.rpl.specter.protocols.select_STAR_),new cljs.core.Keyword(null,"transform*","transform*",-1613794522),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$Navigator$))?true:false):false))?(function (G__25984,G__25985,G__25986){
return com.rpl.specter.protocols.transform_STAR_.call(null,G__25984,G__25985,G__25986);
}):com.rpl.specter.protocols.transform_STAR_)], null);
});
com.rpl.specter.impl.collector_impl = (function com$rpl$specter$impl$collector_impl(obj){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collect-val","collect-val",801894069),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$Collector$))?true:false):false))?(function (G__25991,G__25992){
return com.rpl.specter.protocols.collect_val.call(null,G__25991,G__25992);
}):com.rpl.specter.protocols.collect_val)], null);
});
com.rpl.specter.impl.coerce_collector = (function com$rpl$specter$impl$coerce_collector(this$){
var cfn = new cljs.core.Keyword(null,"collect-val","collect-val",801894069).cljs$core$IFn$_invoke$arity$1(com.rpl.specter.impl.collector_impl.call(null,this$));
var afn = ((function (cfn){
return (function (params,params_idx,vals,structure,next_fn){
return next_fn.call(null,params,params_idx,cljs.core.conj.call(null,vals,cfn.call(null,this$,structure)),structure);
});})(cfn))
;
return com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,afn,afn));
});
com.rpl.specter.impl.coerce_structure_path = (function com$rpl$specter$impl$coerce_structure_path(this$){
var pimpl = com.rpl.specter.impl.structure_path_impl.call(null,this$);
var selector = new cljs.core.Keyword(null,"select*","select*",-1829914060).cljs$core$IFn$_invoke$arity$1(pimpl);
var transformer = new cljs.core.Keyword(null,"transform*","transform*",-1613794522).cljs$core$IFn$_invoke$arity$1(pimpl);
return com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.LeanPathExecutor,((function (pimpl,selector,transformer){
return (function (structure,next_fn){
return selector.call(null,this$,structure,next_fn);
});})(pimpl,selector,transformer))
,((function (pimpl,selector,transformer){
return (function (structure,next_fn){
return transformer.call(null,this$,structure,next_fn);
});})(pimpl,selector,transformer))
));
});
com.rpl.specter.impl.coerce_structure_path_rich = (function com$rpl$specter$impl$coerce_structure_path_rich(this$){
var pimpl = com.rpl.specter.impl.structure_path_impl.call(null,this$);
var selector = new cljs.core.Keyword(null,"select*","select*",-1829914060).cljs$core$IFn$_invoke$arity$1(pimpl);
var transformer = new cljs.core.Keyword(null,"transform*","transform*",-1613794522).cljs$core$IFn$_invoke$arity$1(pimpl);
return com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (pimpl,selector,transformer){
return (function (params,params_idx,vals,structure,next_fn){
return selector.call(null,this$,structure,((function (pimpl,selector,transformer){
return (function (structure__$1){
return next_fn.call(null,params,params_idx,vals,structure__$1);
});})(pimpl,selector,transformer))
);
});})(pimpl,selector,transformer))
,((function (pimpl,selector,transformer){
return (function (params,params_idx,vals,structure,next_fn){
return transformer.call(null,this$,structure,((function (pimpl,selector,transformer){
return (function (structure__$1){
return next_fn.call(null,params,params_idx,vals,structure__$1);
});})(pimpl,selector,transformer))
);
});})(pimpl,selector,transformer))
));
});
com.rpl.specter.impl.structure_path_QMARK_ = (function com$rpl$specter$impl$structure_path_QMARK_(obj){
var or__21434__auto__ = cljs.core.fn_QMARK_.call(null,obj);
if(or__21434__auto__){
return or__21434__auto__;
} else {
if(!((obj == null))){
if((false) || (obj.com$rpl$specter$protocols$Navigator$)){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,com.rpl.specter.protocols.Navigator,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,com.rpl.specter.protocols.Navigator,obj);
}
}
});

/**
 * @interface
 */
com.rpl.specter.impl.CoercePath = function(){};

com.rpl.specter.impl.coerce_path = (function com$rpl$specter$impl$coerce_path(this$){
if((!((this$ == null))) && (!((this$.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 == null)))){
return this$.com$rpl$specter$impl$CoercePath$coerce_path$arity$1(this$);
} else {
var x__22147__auto__ = (((this$ == null))?null:this$);
var m__22148__auto__ = (com.rpl.specter.impl.coerce_path[goog.typeOf(x__22147__auto__)]);
if(!((m__22148__auto__ == null))){
return m__22148__auto__.call(null,this$);
} else {
var m__22148__auto____$1 = (com.rpl.specter.impl.coerce_path["_"]);
if(!((m__22148__auto____$1 == null))){
return m__22148__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"CoercePath.coerce-path",this$);
}
}
}
});

(com.rpl.specter.impl.CoercePath["null"] = true);

(com.rpl.specter.impl.coerce_path["null"] = (function (this$){
return com.rpl.specter.impl.coerce_structure_path.call(null,null);
}));

com.rpl.specter.impl.CompiledPath.prototype.com$rpl$specter$impl$CoercePath$ = true;

com.rpl.specter.impl.CompiledPath.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

com.rpl.specter.impl.ParamsNeededPath.prototype.com$rpl$specter$impl$CoercePath$ = true;

com.rpl.specter.impl.ParamsNeededPath.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$CoercePath$ = true;

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.do_comp_paths.call(null,this$__$1);
});

cljs.core.IndexedSeq.prototype.com$rpl$specter$impl$CoercePath$ = true;

cljs.core.IndexedSeq.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path.call(null,cljs.core.vec.call(null,this$__$1));
});

cljs.core.EmptyList.prototype.com$rpl$specter$impl$CoercePath$ = true;

cljs.core.EmptyList.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path.call(null,cljs.core.vec.call(null,this$__$1));
});

cljs.core.List.prototype.com$rpl$specter$impl$CoercePath$ = true;

cljs.core.List.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path.call(null,cljs.core.vec.call(null,this$__$1));
});

cljs.core.LazySeq.prototype.com$rpl$specter$impl$CoercePath$ = true;

cljs.core.LazySeq.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path.call(null,cljs.core.vec.call(null,this$__$1));
});

(com.rpl.specter.impl.CoercePath["_"] = true);

(com.rpl.specter.impl.coerce_path["_"] = (function (this$){
if(cljs.core.truth_(com.rpl.specter.impl.structure_path_QMARK_.call(null,this$))){
return com.rpl.specter.impl.coerce_structure_path.call(null,this$);
} else {
if(((!((this$ == null)))?(((false) || (this$.com$rpl$specter$protocols$Collector$))?true:(((!this$.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,com.rpl.specter.protocols.Collector,this$):false)):cljs.core.native_satisfies_QMARK_.call(null,com.rpl.specter.protocols.Collector,this$))){
return com.rpl.specter.impl.coerce_collector.call(null,this$);
} else {
return com.rpl.specter.impl.throw_illegal.call(null,com.rpl.specter.impl.no_prot_error_str.call(null,this$));

}
}
}));
com.rpl.specter.impl.extype = (function com$rpl$specter$impl$extype(f){
var exs = f.executors;
return exs.type;
});
com.rpl.specter.impl.combine_same_types = (function com$rpl$specter$impl$combine_same_types(p__25999){
var vec__26003 = p__25999;
var seq__26004 = cljs.core.seq.call(null,vec__26003);
var first__26005 = cljs.core.first.call(null,seq__26004);
var seq__26004__$1 = cljs.core.next.call(null,seq__26004);
var f = first__26005;
var _ = seq__26004__$1;
var all = vec__26003;
var exs = f.executors;
var t = exs.type;
var combiner = ((cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"richpath","richpath",-150197948)))?((function (exs,t,vec__26003,seq__26004,first__26005,seq__26004__$1,f,_,all){
return (function (curr,next){
return ((function (exs,t,vec__26003,seq__26004,first__26005,seq__26004__$1,f,_,all){
return (function (params,params_idx,vals,structure,next_fn){
return curr.call(null,params,params_idx,vals,structure,((function (exs,t,vec__26003,seq__26004,first__26005,seq__26004__$1,f,_,all){
return (function (params_next,params_idx_next,vals_next,structure_next){
return next.call(null,params_next,params_idx_next,vals_next,structure_next,next_fn);
});})(exs,t,vec__26003,seq__26004,first__26005,seq__26004__$1,f,_,all))
);
});
;})(exs,t,vec__26003,seq__26004,first__26005,seq__26004__$1,f,_,all))
});})(exs,t,vec__26003,seq__26004,first__26005,seq__26004__$1,f,_,all))
:((function (exs,t,vec__26003,seq__26004,first__26005,seq__26004__$1,f,_,all){
return (function (curr,next){
return ((function (exs,t,vec__26003,seq__26004,first__26005,seq__26004__$1,f,_,all){
return (function (structure,next_fn){
return curr.call(null,structure,((function (exs,t,vec__26003,seq__26004,first__26005,seq__26004__$1,f,_,all){
return (function (structure__$1){
return next.call(null,structure__$1,next_fn);
});})(exs,t,vec__26003,seq__26004,first__26005,seq__26004__$1,f,_,all))
);
});
;})(exs,t,vec__26003,seq__26004,first__26005,seq__26004__$1,f,_,all))
});})(exs,t,vec__26003,seq__26004,first__26005,seq__26004__$1,f,_,all))
);
return cljs.core.reduce.call(null,((function (exs,t,combiner,vec__26003,seq__26004,first__26005,seq__26004__$1,f,_,all){
return (function (curr,next){
return com.rpl.specter.impl.__GT_TransformFunctions.call(null,exs,combiner.call(null,curr.selector,next.selector),combiner.call(null,curr.transformer,next.transformer));
});})(exs,t,combiner,vec__26003,seq__26004,first__26005,seq__26004__$1,f,_,all))
,all);
});
com.rpl.specter.impl.coerce_tfns_rich = (function com$rpl$specter$impl$coerce_tfns_rich(tfns){
if(cljs.core._EQ_.call(null,com.rpl.specter.impl.extype.call(null,tfns),new cljs.core.Keyword(null,"richpath","richpath",-150197948))){
return tfns;
} else {
var selector = tfns.selector;
var transformer = tfns.transformer;
return com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (selector,transformer){
return (function (params,params_idx,vals,structure,next_fn){
return selector.call(null,structure,((function (selector,transformer){
return (function (structure__$1){
return next_fn.call(null,params,params_idx,vals,structure__$1);
});})(selector,transformer))
);
});})(selector,transformer))
,((function (selector,transformer){
return (function (params,params_idx,vals,structure,next_fn){
return transformer.call(null,structure,((function (selector,transformer){
return (function (structure__$1){
return next_fn.call(null,params,params_idx,vals,structure__$1);
});})(selector,transformer))
);
});})(selector,transformer))
);
}
});
com.rpl.specter.impl.capture_params_internally = (function com$rpl$specter$impl$capture_params_internally(path){
if(!((path instanceof com.rpl.specter.impl.CompiledPath))){
return path;
} else {
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(path);
var params_idx = new cljs.core.Keyword(null,"params-idx","params-idx",340984624).cljs$core$IFn$_invoke$arity$1(path);
var selector = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(path));
var transformer = new cljs.core.Keyword(null,"transformer","transformer",-1493470620).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(path));
if(cljs.core.empty_QMARK_.call(null,params)){
return path;
} else {
return com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (params,params_idx,selector,transformer){
return (function (x_params,x_params_idx,vals,structure,next_fn){
return selector.call(null,params,params_idx,vals,structure,((function (params,params_idx,selector,transformer){
return (function (_,___$1,vals_next,structure_next){
return next_fn.call(null,x_params,x_params_idx,vals_next,structure_next);
});})(params,params_idx,selector,transformer))
);
});})(params,params_idx,selector,transformer))
,((function (params,params_idx,selector,transformer){
return (function (x_params,x_params_idx,vals,structure,next_fn){
return transformer.call(null,params,params_idx,vals,structure,((function (params,params_idx,selector,transformer){
return (function (_,___$1,vals_next,structure_next){
return next_fn.call(null,x_params,x_params_idx,vals_next,structure_next);
});})(params,params_idx,selector,transformer))
);
});})(params,params_idx,selector,transformer))
));
}
}
});
(com.rpl.specter.impl.PathComposer["null"] = true);

(com.rpl.specter.impl.do_comp_paths["null"] = (function (sp){
return com.rpl.specter.impl.coerce_path.call(null,sp);
}));

(com.rpl.specter.impl.PathComposer["_"] = true);

(com.rpl.specter.impl.do_comp_paths["_"] = (function (sp){
return com.rpl.specter.impl.coerce_path.call(null,sp);
}));

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$PathComposer$ = true;

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$PathComposer$do_comp_paths$arity$1 = (function (structure_paths){
var structure_paths__$1 = this;
if(cljs.core.empty_QMARK_.call(null,structure_paths__$1)){
return com.rpl.specter.impl.coerce_path.call(null,null);
} else {
var coerced = cljs.core.map.call(null,com.rpl.specter.impl.capture_params_internally,cljs.core.map.call(null,com.rpl.specter.impl.coerce_path,structure_paths__$1));
var combined = cljs.core.map.call(null,com.rpl.specter.impl.combine_same_types,cljs.core.partition_by.call(null,com.rpl.specter.impl.extype,cljs.core.map.call(null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),coerced)));
var result_tfn = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,combined)))?cljs.core.first.call(null,combined):com.rpl.specter.impl.combine_same_types.call(null,cljs.core.map.call(null,com.rpl.specter.impl.coerce_tfns_rich,combined)));
var needs_params_paths = cljs.core.filter.call(null,((function (coerced,combined,result_tfn,structure_paths__$1){
return (function (p1__26006_SHARP_){
return (p1__26006_SHARP_ instanceof com.rpl.specter.impl.ParamsNeededPath);
});})(coerced,combined,result_tfn,structure_paths__$1))
,coerced);
if(cljs.core.empty_QMARK_.call(null,needs_params_paths)){
return com.rpl.specter.impl.no_params_compiled_path.call(null,result_tfn);
} else {
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.coerce_tfns_rich.call(null,result_tfn),cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),needs_params_paths)));
}
}
});
com.rpl.specter.impl.num_needed_params = (function com$rpl$specter$impl$num_needed_params(path){
if((path instanceof com.rpl.specter.impl.CompiledPath)){
return (0);
} else {
return new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097).cljs$core$IFn$_invoke$arity$1(path);
}
});

/**
 * @interface
 */
com.rpl.specter.impl.PMutableCell = function(){};

com.rpl.specter.impl.set_cell = (function com$rpl$specter$impl$set_cell(cell,x){
if((!((cell == null))) && (!((cell.com$rpl$specter$impl$PMutableCell$set_cell$arity$2 == null)))){
return cell.com$rpl$specter$impl$PMutableCell$set_cell$arity$2(cell,x);
} else {
var x__22147__auto__ = (((cell == null))?null:cell);
var m__22148__auto__ = (com.rpl.specter.impl.set_cell[goog.typeOf(x__22147__auto__)]);
if(!((m__22148__auto__ == null))){
return m__22148__auto__.call(null,cell,x);
} else {
var m__22148__auto____$1 = (com.rpl.specter.impl.set_cell["_"]);
if(!((m__22148__auto____$1 == null))){
return m__22148__auto____$1.call(null,cell,x);
} else {
throw cljs.core.missing_protocol.call(null,"PMutableCell.set_cell",cell);
}
}
}
});


/**
* @constructor
 * @implements {com.rpl.specter.impl.PMutableCell}
*/
com.rpl.specter.impl.MutableCell = (function (q){
this.q = q;
})
com.rpl.specter.impl.MutableCell.prototype.com$rpl$specter$impl$PMutableCell$ = true;

com.rpl.specter.impl.MutableCell.prototype.com$rpl$specter$impl$PMutableCell$set_cell$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return self__.q = x;
});

com.rpl.specter.impl.MutableCell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"q","q",-1965434072,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411),true], null))], null);
});

com.rpl.specter.impl.MutableCell.cljs$lang$type = true;

com.rpl.specter.impl.MutableCell.cljs$lang$ctorStr = "com.rpl.specter.impl/MutableCell";

com.rpl.specter.impl.MutableCell.cljs$lang$ctorPrWriter = (function (this__22086__auto__,writer__22087__auto__,opt__22088__auto__){
return cljs.core._write.call(null,writer__22087__auto__,"com.rpl.specter.impl/MutableCell");
});

com.rpl.specter.impl.__GT_MutableCell = (function com$rpl$specter$impl$__GT_MutableCell(q){
return (new com.rpl.specter.impl.MutableCell(q));
});

com.rpl.specter.impl.mutable_cell = (function com$rpl$specter$impl$mutable_cell(var_args){
var args26007 = [];
var len__22617__auto___26010 = arguments.length;
var i__22618__auto___26011 = (0);
while(true){
if((i__22618__auto___26011 < len__22617__auto___26010)){
args26007.push((arguments[i__22618__auto___26011]));

var G__26012 = (i__22618__auto___26011 + (1));
i__22618__auto___26011 = G__26012;
continue;
} else {
}
break;
}

var G__26009 = args26007.length;
switch (G__26009) {
case 0:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26007.length)].join('')));

}
});

com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.rpl.specter.impl.mutable_cell.call(null,null);
});

com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1 = (function (init){
return (new com.rpl.specter.impl.MutableCell(init));
});

com.rpl.specter.impl.mutable_cell.cljs$lang$maxFixedArity = 1;

com.rpl.specter.impl.set_cell_BANG_ = (function com$rpl$specter$impl$set_cell_BANG_(cell,val){
return com.rpl.specter.impl.set_cell.call(null,cell,val);
});
com.rpl.specter.impl.get_cell = (function com$rpl$specter$impl$get_cell(cell){
return cell.q;
});
com.rpl.specter.impl.update_cell_BANG_ = (function com$rpl$specter$impl$update_cell_BANG_(cell,afn){
var ret = afn.call(null,com.rpl.specter.impl.get_cell.call(null,cell));
com.rpl.specter.impl.set_cell_BANG_.call(null,cell,ret);

return ret;
});
com.rpl.specter.impl.append = (function com$rpl$specter$impl$append(coll,elem){
return cljs.core.conj.call(null,cljs.core.vec.call(null,coll),elem);
});

/**
 * @interface
 */
com.rpl.specter.impl.AddExtremes = function(){};

com.rpl.specter.impl.append_all = (function com$rpl$specter$impl$append_all(structure,elements){
if((!((structure == null))) && (!((structure.com$rpl$specter$impl$AddExtremes$append_all$arity$2 == null)))){
return structure.com$rpl$specter$impl$AddExtremes$append_all$arity$2(structure,elements);
} else {
var x__22147__auto__ = (((structure == null))?null:structure);
var m__22148__auto__ = (com.rpl.specter.impl.append_all[goog.typeOf(x__22147__auto__)]);
if(!((m__22148__auto__ == null))){
return m__22148__auto__.call(null,structure,elements);
} else {
var m__22148__auto____$1 = (com.rpl.specter.impl.append_all["_"]);
if(!((m__22148__auto____$1 == null))){
return m__22148__auto____$1.call(null,structure,elements);
} else {
throw cljs.core.missing_protocol.call(null,"AddExtremes.append-all",structure);
}
}
}
});

com.rpl.specter.impl.prepend_all = (function com$rpl$specter$impl$prepend_all(structure,elements){
if((!((structure == null))) && (!((structure.com$rpl$specter$impl$AddExtremes$prepend_all$arity$2 == null)))){
return structure.com$rpl$specter$impl$AddExtremes$prepend_all$arity$2(structure,elements);
} else {
var x__22147__auto__ = (((structure == null))?null:structure);
var m__22148__auto__ = (com.rpl.specter.impl.prepend_all[goog.typeOf(x__22147__auto__)]);
if(!((m__22148__auto__ == null))){
return m__22148__auto__.call(null,structure,elements);
} else {
var m__22148__auto____$1 = (com.rpl.specter.impl.prepend_all["_"]);
if(!((m__22148__auto____$1 == null))){
return m__22148__auto____$1.call(null,structure,elements);
} else {
throw cljs.core.missing_protocol.call(null,"AddExtremes.prepend-all",structure);
}
}
}
});

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$AddExtremes$ = true;

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$AddExtremes$append_all$arity$2 = (function (structure,elements){
var structure__$1 = this;
return cljs.core.reduce.call(null,cljs.core.conj,structure__$1,elements);
});

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$AddExtremes$prepend_all$arity$2 = (function (structure,elements){
var structure__$1 = this;
var ret = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var _LT__GT_ = ret;
var _LT__GT___$1 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,_LT__GT_,elements);
var _LT__GT___$2 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,_LT__GT___$1,structure__$1);
return cljs.core.persistent_BANG_.call(null,_LT__GT___$2);
});

(com.rpl.specter.impl.AddExtremes["_"] = true);

(com.rpl.specter.impl.append_all["_"] = (function (structure,elements){
return cljs.core.concat.call(null,structure,elements);
}));

(com.rpl.specter.impl.prepend_all["_"] = (function (structure,elements){
return cljs.core.concat.call(null,elements,structure);
}));

/**
 * @interface
 */
com.rpl.specter.impl.UpdateExtremes = function(){};

com.rpl.specter.impl.update_first = (function com$rpl$specter$impl$update_first(s,afn){
if((!((s == null))) && (!((s.com$rpl$specter$impl$UpdateExtremes$update_first$arity$2 == null)))){
return s.com$rpl$specter$impl$UpdateExtremes$update_first$arity$2(s,afn);
} else {
var x__22147__auto__ = (((s == null))?null:s);
var m__22148__auto__ = (com.rpl.specter.impl.update_first[goog.typeOf(x__22147__auto__)]);
if(!((m__22148__auto__ == null))){
return m__22148__auto__.call(null,s,afn);
} else {
var m__22148__auto____$1 = (com.rpl.specter.impl.update_first["_"]);
if(!((m__22148__auto____$1 == null))){
return m__22148__auto____$1.call(null,s,afn);
} else {
throw cljs.core.missing_protocol.call(null,"UpdateExtremes.update-first",s);
}
}
}
});

com.rpl.specter.impl.update_last = (function com$rpl$specter$impl$update_last(s,afn){
if((!((s == null))) && (!((s.com$rpl$specter$impl$UpdateExtremes$update_last$arity$2 == null)))){
return s.com$rpl$specter$impl$UpdateExtremes$update_last$arity$2(s,afn);
} else {
var x__22147__auto__ = (((s == null))?null:s);
var m__22148__auto__ = (com.rpl.specter.impl.update_last[goog.typeOf(x__22147__auto__)]);
if(!((m__22148__auto__ == null))){
return m__22148__auto__.call(null,s,afn);
} else {
var m__22148__auto____$1 = (com.rpl.specter.impl.update_last["_"]);
if(!((m__22148__auto____$1 == null))){
return m__22148__auto____$1.call(null,s,afn);
} else {
throw cljs.core.missing_protocol.call(null,"UpdateExtremes.update-last",s);
}
}
}
});


/**
 * @interface
 */
com.rpl.specter.impl.GetExtremes = function(){};

com.rpl.specter.impl.get_first = (function com$rpl$specter$impl$get_first(s){
if((!((s == null))) && (!((s.com$rpl$specter$impl$GetExtremes$get_first$arity$1 == null)))){
return s.com$rpl$specter$impl$GetExtremes$get_first$arity$1(s);
} else {
var x__22147__auto__ = (((s == null))?null:s);
var m__22148__auto__ = (com.rpl.specter.impl.get_first[goog.typeOf(x__22147__auto__)]);
if(!((m__22148__auto__ == null))){
return m__22148__auto__.call(null,s);
} else {
var m__22148__auto____$1 = (com.rpl.specter.impl.get_first["_"]);
if(!((m__22148__auto____$1 == null))){
return m__22148__auto____$1.call(null,s);
} else {
throw cljs.core.missing_protocol.call(null,"GetExtremes.get-first",s);
}
}
}
});

com.rpl.specter.impl.get_last = (function com$rpl$specter$impl$get_last(s){
if((!((s == null))) && (!((s.com$rpl$specter$impl$GetExtremes$get_last$arity$1 == null)))){
return s.com$rpl$specter$impl$GetExtremes$get_last$arity$1(s);
} else {
var x__22147__auto__ = (((s == null))?null:s);
var m__22148__auto__ = (com.rpl.specter.impl.get_last[goog.typeOf(x__22147__auto__)]);
if(!((m__22148__auto__ == null))){
return m__22148__auto__.call(null,s);
} else {
var m__22148__auto____$1 = (com.rpl.specter.impl.get_last["_"]);
if(!((m__22148__auto____$1 == null))){
return m__22148__auto____$1.call(null,s);
} else {
throw cljs.core.missing_protocol.call(null,"GetExtremes.get-last",s);
}
}
}
});


/**
 * @interface
 */
com.rpl.specter.impl.FastEmpty = function(){};

com.rpl.specter.impl.fast_empty_QMARK_ = (function com$rpl$specter$impl$fast_empty_QMARK_(s){
if((!((s == null))) && (!((s.com$rpl$specter$impl$FastEmpty$fast_empty_QMARK_$arity$1 == null)))){
return s.com$rpl$specter$impl$FastEmpty$fast_empty_QMARK_$arity$1(s);
} else {
var x__22147__auto__ = (((s == null))?null:s);
var m__22148__auto__ = (com.rpl.specter.impl.fast_empty_QMARK_[goog.typeOf(x__22147__auto__)]);
if(!((m__22148__auto__ == null))){
return m__22148__auto__.call(null,s);
} else {
var m__22148__auto____$1 = (com.rpl.specter.impl.fast_empty_QMARK_["_"]);
if(!((m__22148__auto____$1 == null))){
return m__22148__auto____$1.call(null,s);
} else {
throw cljs.core.missing_protocol.call(null,"FastEmpty.fast-empty?",s);
}
}
}
});

com.rpl.specter.impl.update_first_list = (function com$rpl$specter$impl$update_first_list(l,afn){
return cljs.core.cons.call(null,afn.call(null,cljs.core.first.call(null,l)),cljs.core.rest.call(null,l));
});
com.rpl.specter.impl.update_last_list = (function com$rpl$specter$impl$update_last_list(l,afn){
return com.rpl.specter.impl.append.call(null,cljs.core.butlast.call(null,l),afn.call(null,cljs.core.last.call(null,l)));
});
com.rpl.specter.impl.vec_count = (function com$rpl$specter$impl$vec_count(v){
return cljs.core.count.call(null,v);
});
com.rpl.specter.impl.transient_vec_count = (function com$rpl$specter$impl$transient_vec_count(v){
return cljs.core.count.call(null,v);
});
cljs.core.PersistentVector.prototype.com$rpl$specter$impl$UpdateExtremes$ = true;

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$UpdateExtremes$update_first$arity$2 = (function (v,afn){
var v__$1 = this;
var val = cljs.core.nth.call(null,v__$1,(0));
return cljs.core.assoc.call(null,v__$1,(0),afn.call(null,val));
});

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$UpdateExtremes$update_last$arity$2 = (function (v,afn){
var v__$1 = this;
var c = com.rpl.specter.impl.vec_count.call(null,v__$1);
var G__26014 = c;
switch (G__26014) {
case (1):
var vec__26015 = v__$1;
var e = cljs.core.nth.call(null,vec__26015,(0),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [afn.call(null,e)], null);

break;
case (2):
var vec__26018 = v__$1;
var e1 = cljs.core.nth.call(null,vec__26018,(0),null);
var e2 = cljs.core.nth.call(null,vec__26018,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,afn.call(null,e2)], null);

break;
default:
var i = (c - (1));
return cljs.core.assoc.call(null,v__$1,i,afn.call(null,cljs.core.nth.call(null,v__$1,i)));

}
});

(com.rpl.specter.impl.UpdateExtremes["_"] = true);

(com.rpl.specter.impl.update_first["_"] = (function (l,val){
return com.rpl.specter.impl.update_first_list.call(null,l,val);
}));

(com.rpl.specter.impl.update_last["_"] = (function (l,val){
return com.rpl.specter.impl.update_last_list.call(null,l,val);
}));
cljs.core.PersistentVector.prototype.com$rpl$specter$impl$GetExtremes$ = true;

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$GetExtremes$get_first$arity$1 = (function (v){
var v__$1 = this;
return cljs.core.nth.call(null,v__$1,(0));
});

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$GetExtremes$get_last$arity$1 = (function (v){
var v__$1 = this;
return cljs.core.peek.call(null,v__$1);
});

(com.rpl.specter.impl.GetExtremes["_"] = true);

(com.rpl.specter.impl.get_first["_"] = (function (s){
return cljs.core.first.call(null,s);
}));

(com.rpl.specter.impl.get_last["_"] = (function (s){
return cljs.core.last.call(null,s);
}));
cljs.core.PersistentVector.prototype.com$rpl$specter$impl$FastEmpty$ = true;

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$FastEmpty$fast_empty_QMARK_$arity$1 = (function (v){
var v__$1 = this;
return cljs.core._EQ_.call(null,(0),com.rpl.specter.impl.vec_count.call(null,v__$1));
});

cljs.core.TransientVector.prototype.com$rpl$specter$impl$FastEmpty$ = true;

cljs.core.TransientVector.prototype.com$rpl$specter$impl$FastEmpty$fast_empty_QMARK_$arity$1 = (function (v){
var v__$1 = this;
return cljs.core._EQ_.call(null,(0),com.rpl.specter.impl.transient_vec_count.call(null,v__$1));
});

(com.rpl.specter.impl.FastEmpty["_"] = true);

(com.rpl.specter.impl.fast_empty_QMARK_["_"] = (function (s){
return cljs.core.empty_QMARK_.call(null,s);
}));
com.rpl.specter.impl.walk_until = (function com$rpl$specter$impl$walk_until(pred,on_match_fn,structure){
if(cljs.core.truth_(pred.call(null,structure))){
return on_match_fn.call(null,structure);
} else {
return clojure.walk.walk.call(null,cljs.core.partial.call(null,com$rpl$specter$impl$walk_until,pred,on_match_fn),cljs.core.identity,structure);
}
});
com.rpl.specter.impl.fn_invocation_QMARK_ = (function com$rpl$specter$impl$fn_invocation_QMARK_(f){
return ((f instanceof cljs.core.LazySeq)) || (cljs.core.list_QMARK_.call(null,f));
});
com.rpl.specter.impl.codewalk_until = (function com$rpl$specter$impl$codewalk_until(pred,on_match_fn,structure){
if(cljs.core.truth_(pred.call(null,structure))){
return on_match_fn.call(null,structure);
} else {
var ret = clojure.walk.walk.call(null,cljs.core.partial.call(null,com$rpl$specter$impl$codewalk_until,pred,on_match_fn),cljs.core.identity,structure);
if(cljs.core.truth_((function (){var and__21422__auto__ = com.rpl.specter.impl.fn_invocation_QMARK_.call(null,structure);
if(cljs.core.truth_(and__21422__auto__)){
return com.rpl.specter.impl.fn_invocation_QMARK_.call(null,ret);
} else {
return and__21422__auto__;
}
})())){
return cljs.core.with_meta.call(null,ret,cljs.core.meta.call(null,structure));
} else {
return ret;
}
}
});
com.rpl.specter.impl.conj_all_BANG_ = (function com$rpl$specter$impl$conj_all_BANG_(cell,elems){
return com.rpl.specter.impl.set_cell_BANG_.call(null,cell,cljs.core.concat.call(null,com.rpl.specter.impl.get_cell.call(null,cell),elems));
});
com.rpl.specter.impl.compiled_select_STAR_ = (function com$rpl$specter$impl$compiled_select_STAR_(path,structure){
var tfns = path.transform_fns;
var ex = tfns.executors;
return ex.select_executor.call(null,path.params,path.params_idx,tfns.selector,structure);
});
com.rpl.specter.impl.compiled_transform_STAR_ = (function com$rpl$specter$impl$compiled_transform_STAR_(path,transform_fn,structure){
var tfns = path.transform_fns;
var ex = tfns.executors;
return ex.transform_executor.call(null,path.params,path.params_idx,tfns.transformer,transform_fn,structure);
});
com.rpl.specter.impl.not_selected_QMARK__STAR_ = (function com$rpl$specter$impl$not_selected_QMARK__STAR_(compiled_path,structure){
return cljs.core.empty_QMARK_.call(null,com.rpl.specter.impl.compiled_select_STAR_.call(null,compiled_path,structure));
});
com.rpl.specter.impl.selected_QMARK__STAR_ = (function com$rpl$specter$impl$selected_QMARK__STAR_(compiled_path,structure){
return cljs.core.not.call(null,com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,compiled_path,structure));
});
com.rpl.specter.impl.walk_select = (function com$rpl$specter$impl$walk_select(pred,continue_fn,structure){
var ret = com.rpl.specter.impl.mutable_cell.call(null,cljs.core.PersistentVector.EMPTY);
var walker = ((function (ret){
return (function com$rpl$specter$impl$walk_select_$_this(structure__$1){
if(cljs.core.truth_(pred.call(null,structure__$1))){
return com.rpl.specter.impl.conj_all_BANG_.call(null,ret,continue_fn.call(null,structure__$1));
} else {
return clojure.walk.walk.call(null,com$rpl$specter$impl$walk_select_$_this,cljs.core.identity,structure__$1);
}
});})(ret))
;
walker.call(null,structure);

return com.rpl.specter.impl.get_cell.call(null,ret);
});
com.rpl.specter.impl.key_select = (function com$rpl$specter$impl$key_select(akey,structure,next_fn){
return next_fn.call(null,cljs.core.get.call(null,structure,akey));
});
com.rpl.specter.impl.key_transform = (function com$rpl$specter$impl$key_transform(akey,structure,next_fn){
return cljs.core.assoc.call(null,structure,akey,next_fn.call(null,cljs.core.get.call(null,structure,akey)));
});
com.rpl.specter.impl.all_select = (function com$rpl$specter$impl$all_select(structure,next_fn){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.call(null,(function (p1__26022_SHARP_){
return next_fn.call(null,p1__26022_SHARP_);
})),structure);
});
com.rpl.specter.impl.queue_QMARK_ = (function com$rpl$specter$impl$queue_QMARK_(coll){
return cljs.core._EQ_.call(null,cljs.core.type.call(null,coll),cljs.core.type.call(null,cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY)));
});

/**
 * @interface
 */
com.rpl.specter.impl.AllTransformProtocol = function(){};

com.rpl.specter.impl.all_transform = (function com$rpl$specter$impl$all_transform(structure,next_fn){
if((!((structure == null))) && (!((structure.com$rpl$specter$impl$AllTransformProtocol$all_transform$arity$2 == null)))){
return structure.com$rpl$specter$impl$AllTransformProtocol$all_transform$arity$2(structure,next_fn);
} else {
var x__22147__auto__ = (((structure == null))?null:structure);
var m__22148__auto__ = (com.rpl.specter.impl.all_transform[goog.typeOf(x__22147__auto__)]);
if(!((m__22148__auto__ == null))){
return m__22148__auto__.call(null,structure,next_fn);
} else {
var m__22148__auto____$1 = (com.rpl.specter.impl.all_transform["_"]);
if(!((m__22148__auto____$1 == null))){
return m__22148__auto____$1.call(null,structure,next_fn);
} else {
throw cljs.core.missing_protocol.call(null,"AllTransformProtocol.all-transform",structure);
}
}
}
});

com.rpl.specter.impl.non_transient_map_all_transform = (function com$rpl$specter$impl$non_transient_map_all_transform(structure,next_fn,empty_map){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
var vec__26026 = next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
var newk = cljs.core.nth.call(null,vec__26026,(0),null);
var newv = cljs.core.nth.call(null,vec__26026,(1),null);
return cljs.core.assoc.call(null,m,newk,newv);
}),empty_map,structure);
});
(com.rpl.specter.impl.AllTransformProtocol["null"] = true);

(com.rpl.specter.impl.all_transform["null"] = (function (structure,next_fn){
return null;
}));

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$AllTransformProtocol$ = true;

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.mapv.call(null,next_fn,structure__$1);
});

cljs.core.PersistentArrayMap.prototype.com$rpl$specter$impl$AllTransformProtocol$ = true;

cljs.core.PersistentArrayMap.prototype.com$rpl$specter$impl$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.impl.non_transient_map_all_transform.call(null,structure__$1,next_fn,cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.PersistentTreeMap.prototype.com$rpl$specter$impl$AllTransformProtocol$ = true;

cljs.core.PersistentTreeMap.prototype.com$rpl$specter$impl$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.impl.non_transient_map_all_transform.call(null,structure__$1,next_fn,cljs.core.sorted_map.call(null));
});

cljs.core.PersistentHashMap.prototype.com$rpl$specter$impl$AllTransformProtocol$ = true;

cljs.core.PersistentHashMap.prototype.com$rpl$specter$impl$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (structure__$1){
return (function (m,k,v){
var vec__26030 = next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
var newk = cljs.core.nth.call(null,vec__26030,(0),null);
var newv = cljs.core.nth.call(null,vec__26030,(1),null);
return cljs.core.assoc_BANG_.call(null,m,newk,newv);
});})(structure__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY),structure__$1));
});

(com.rpl.specter.impl.AllTransformProtocol["_"] = true);

(com.rpl.specter.impl.all_transform["_"] = (function (structure,next_fn){
var empty_structure = cljs.core.empty.call(null,structure);
if((cljs.core.list_QMARK_.call(null,empty_structure)) && (cljs.core.not.call(null,com.rpl.specter.impl.queue_QMARK_.call(null,empty_structure)))){
return cljs.core.doall.call(null,cljs.core.map.call(null,next_fn,structure));
} else {
return cljs.core.into.call(null,empty_structure,cljs.core.map.call(null,((function (empty_structure){
return (function (p1__26029_SHARP_){
return next_fn.call(null,p1__26029_SHARP_);
});})(empty_structure))
),structure);
}
}));

/**
* @constructor
*/
com.rpl.specter.impl.AllNavigator = (function (){
})

com.rpl.specter.impl.AllNavigator.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

com.rpl.specter.impl.AllNavigator.cljs$lang$type = true;

com.rpl.specter.impl.AllNavigator.cljs$lang$ctorStr = "com.rpl.specter.impl/AllNavigator";

com.rpl.specter.impl.AllNavigator.cljs$lang$ctorPrWriter = (function (this__22086__auto__,writer__22087__auto__,opt__22088__auto__){
return cljs.core._write.call(null,writer__22087__auto__,"com.rpl.specter.impl/AllNavigator");
});

com.rpl.specter.impl.__GT_AllNavigator = (function com$rpl$specter$impl$__GT_AllNavigator(){
return (new com.rpl.specter.impl.AllNavigator());
});

com.rpl.specter.impl.AllNavigator.prototype.com$rpl$specter$protocols$Navigator$ = true;

com.rpl.specter.impl.AllNavigator.prototype.com$rpl$specter$protocols$Navigator$select_STAR_$arity$3 = (function (this$,structure,next_fn){
var this$__$1 = this;
return com.rpl.specter.impl.all_select.call(null,structure,next_fn);
});

com.rpl.specter.impl.AllNavigator.prototype.com$rpl$specter$protocols$Navigator$transform_STAR_$arity$3 = (function (this$,structure,next_fn){
var this$__$1 = this;
return com.rpl.specter.impl.all_transform.call(null,structure,next_fn);
});

/**
 * @interface
 */
com.rpl.specter.impl.MapValsTransformProtocol = function(){};

com.rpl.specter.impl.map_vals_transform = (function com$rpl$specter$impl$map_vals_transform(structure,next_fn){
if((!((structure == null))) && (!((structure.com$rpl$specter$impl$MapValsTransformProtocol$map_vals_transform$arity$2 == null)))){
return structure.com$rpl$specter$impl$MapValsTransformProtocol$map_vals_transform$arity$2(structure,next_fn);
} else {
var x__22147__auto__ = (((structure == null))?null:structure);
var m__22148__auto__ = (com.rpl.specter.impl.map_vals_transform[goog.typeOf(x__22147__auto__)]);
if(!((m__22148__auto__ == null))){
return m__22148__auto__.call(null,structure,next_fn);
} else {
var m__22148__auto____$1 = (com.rpl.specter.impl.map_vals_transform["_"]);
if(!((m__22148__auto____$1 == null))){
return m__22148__auto____$1.call(null,structure,next_fn);
} else {
throw cljs.core.missing_protocol.call(null,"MapValsTransformProtocol.map-vals-transform",structure);
}
}
}
});

com.rpl.specter.impl.map_vals_non_transient_transform = (function com$rpl$specter$impl$map_vals_non_transient_transform(structure,empty_map,next_fn){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,k,next_fn.call(null,v));
}),empty_map,structure);
});
cljs.core.PersistentArrayMap.prototype.com$rpl$specter$impl$MapValsTransformProtocol$ = true;

cljs.core.PersistentArrayMap.prototype.com$rpl$specter$impl$MapValsTransformProtocol$map_vals_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.impl.map_vals_non_transient_transform.call(null,structure__$1,cljs.core.PersistentArrayMap.EMPTY,next_fn);
});

cljs.core.PersistentTreeMap.prototype.com$rpl$specter$impl$MapValsTransformProtocol$ = true;

cljs.core.PersistentTreeMap.prototype.com$rpl$specter$impl$MapValsTransformProtocol$map_vals_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.impl.map_vals_non_transient_transform.call(null,structure__$1,cljs.core.sorted_map.call(null),next_fn);
});

cljs.core.PersistentHashMap.prototype.com$rpl$specter$impl$MapValsTransformProtocol$ = true;

cljs.core.PersistentHashMap.prototype.com$rpl$specter$impl$MapValsTransformProtocol$map_vals_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (structure__$1){
return (function (m,k,v){
return cljs.core.assoc_BANG_.call(null,m,k,next_fn.call(null,v));
});})(structure__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY),structure__$1));
});

(com.rpl.specter.impl.MapValsTransformProtocol["_"] = true);

(com.rpl.specter.impl.map_vals_transform["_"] = (function (structure,next_fn){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,k,next_fn.call(null,v));
}),cljs.core.empty.call(null,structure),structure);
}));

/**
* @constructor
*/
com.rpl.specter.impl.ValCollect = (function (){
})

com.rpl.specter.impl.ValCollect.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

com.rpl.specter.impl.ValCollect.cljs$lang$type = true;

com.rpl.specter.impl.ValCollect.cljs$lang$ctorStr = "com.rpl.specter.impl/ValCollect";

com.rpl.specter.impl.ValCollect.cljs$lang$ctorPrWriter = (function (this__22086__auto__,writer__22087__auto__,opt__22088__auto__){
return cljs.core._write.call(null,writer__22087__auto__,"com.rpl.specter.impl/ValCollect");
});

com.rpl.specter.impl.__GT_ValCollect = (function com$rpl$specter$impl$__GT_ValCollect(){
return (new com.rpl.specter.impl.ValCollect());
});

com.rpl.specter.impl.ValCollect.prototype.com$rpl$specter$protocols$Collector$ = true;

com.rpl.specter.impl.ValCollect.prototype.com$rpl$specter$protocols$Collector$collect_val$arity$2 = (function (this$,structure){
var this$__$1 = this;
return structure;
});

/**
* @constructor
*/
com.rpl.specter.impl.PosNavigator = (function (getter,updater){
this.getter = getter;
this.updater = updater;
})

com.rpl.specter.impl.PosNavigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"getter","getter",1725376382,null),new cljs.core.Symbol(null,"updater","updater",2107748764,null)], null);
});

com.rpl.specter.impl.PosNavigator.cljs$lang$type = true;

com.rpl.specter.impl.PosNavigator.cljs$lang$ctorStr = "com.rpl.specter.impl/PosNavigator";

com.rpl.specter.impl.PosNavigator.cljs$lang$ctorPrWriter = (function (this__22086__auto__,writer__22087__auto__,opt__22088__auto__){
return cljs.core._write.call(null,writer__22087__auto__,"com.rpl.specter.impl/PosNavigator");
});

com.rpl.specter.impl.__GT_PosNavigator = (function com$rpl$specter$impl$__GT_PosNavigator(getter,updater){
return (new com.rpl.specter.impl.PosNavigator(getter,updater));
});

com.rpl.specter.impl.PosNavigator.prototype.com$rpl$specter$protocols$Navigator$ = true;

com.rpl.specter.impl.PosNavigator.prototype.com$rpl$specter$protocols$Navigator$select_STAR_$arity$3 = (function (this$,structure,next_fn){
var this$__$1 = this;
if(cljs.core.not.call(null,com.rpl.specter.impl.fast_empty_QMARK_.call(null,structure))){
return next_fn.call(null,this$__$1.getter.call(null,structure));
} else {
return null;
}
});

com.rpl.specter.impl.PosNavigator.prototype.com$rpl$specter$protocols$Navigator$transform_STAR_$arity$3 = (function (this$,structure,next_fn){
var this$__$1 = this;
if(cljs.core.truth_(com.rpl.specter.impl.fast_empty_QMARK_.call(null,structure))){
return structure;
} else {
return this$__$1.updater.call(null,structure,next_fn);
}
});
com.rpl.specter.impl.srange_select = (function com$rpl$specter$impl$srange_select(structure,start,end,next_fn){
return next_fn.call(null,cljs.core.subvec.call(null,cljs.core.vec.call(null,structure),start,end));
});
com.rpl.specter.impl.srange_transform = (function com$rpl$specter$impl$srange_transform(structure,start,end,next_fn){
var structurev = cljs.core.vec.call(null,structure);
var newpart = next_fn.call(null,cljs.core.subvec.call(null,structurev,start,end));
var res = cljs.core.concat.call(null,cljs.core.subvec.call(null,structurev,(0),start),newpart,cljs.core.subvec.call(null,structurev,end,cljs.core.count.call(null,structure)));
if(cljs.core.vector_QMARK_.call(null,structure)){
return cljs.core.vec.call(null,res);
} else {
return res;
}
});
com.rpl.specter.impl.matching_indices = (function com$rpl$specter$impl$matching_indices(aseq,p){
return cljs.core.keep_indexed.call(null,(function (i,e){
if(cljs.core.truth_(p.call(null,e))){
return i;
} else {
return null;
}
}),aseq);
});
com.rpl.specter.impl.matching_ranges = (function com$rpl$specter$impl$matching_ranges(aseq,p){
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p__26037,i){
var vec__26038 = p__26037;
var ranges = cljs.core.nth.call(null,vec__26038,(0),null);
var curr_start = cljs.core.nth.call(null,vec__26038,(1),null);
var curr_last = cljs.core.nth.call(null,vec__26038,(2),null);
var curr = vec__26038;
if((curr_start == null)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ranges,i,i], null);
} else {
if(cljs.core._EQ_.call(null,i,(curr_last + (1)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ranges,curr_start,i], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,ranges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr_start,(curr_last + (1))], null)),i,i], null);

}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,null,null], null),cljs.core.concat.call(null,com.rpl.specter.impl.matching_indices.call(null,aseq,p),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1)], null))));
});
(com.rpl.specter.protocols.Navigator["null"] = true);

(com.rpl.specter.protocols.select_STAR_["null"] = (function (this$,structure,next_fn){
return next_fn.call(null,structure);
}));

(com.rpl.specter.protocols.transform_STAR_["null"] = (function (this$,structure,next_fn){
return next_fn.call(null,structure);
}));

/**
* @constructor
*/
com.rpl.specter.impl.TransientEndNavigator = (function (){
})

com.rpl.specter.impl.TransientEndNavigator.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

com.rpl.specter.impl.TransientEndNavigator.cljs$lang$type = true;

com.rpl.specter.impl.TransientEndNavigator.cljs$lang$ctorStr = "com.rpl.specter.impl/TransientEndNavigator";

com.rpl.specter.impl.TransientEndNavigator.cljs$lang$ctorPrWriter = (function (this__22086__auto__,writer__22087__auto__,opt__22088__auto__){
return cljs.core._write.call(null,writer__22087__auto__,"com.rpl.specter.impl/TransientEndNavigator");
});

com.rpl.specter.impl.__GT_TransientEndNavigator = (function com$rpl$specter$impl$__GT_TransientEndNavigator(){
return (new com.rpl.specter.impl.TransientEndNavigator());
});

com.rpl.specter.impl.TransientEndNavigator.prototype.com$rpl$specter$protocols$Navigator$ = true;

com.rpl.specter.impl.TransientEndNavigator.prototype.com$rpl$specter$protocols$Navigator$select_STAR_$arity$3 = (function (this$,structure,next_fn){
var this$__$1 = this;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY);
});

com.rpl.specter.impl.TransientEndNavigator.prototype.com$rpl$specter$protocols$Navigator$transform_STAR_$arity$3 = (function (this$,structure,next_fn){
var this$__$1 = this;
var res = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,structure,res);
});
com.rpl.specter.impl.extract_basic_filter_fn = (function com$rpl$specter$impl$extract_basic_filter_fn(path){
if(cljs.core.fn_QMARK_.call(null,path)){
return path;
} else {
if((cljs.core.coll_QMARK_.call(null,path)) && (cljs.core.every_QMARK_.call(null,cljs.core.fn_QMARK_,path))){
return cljs.core.reduce.call(null,(function (combined,afn){
return (function (structure){
var and__21422__auto__ = combined.call(null,structure);
if(cljs.core.truth_(and__21422__auto__)){
return afn.call(null,structure);
} else {
return and__21422__auto__;
}
});
}),path);
} else {
return null;
}
}
});
com.rpl.specter.impl.if_select = (function com$rpl$specter$impl$if_select(structure,next_fn,then_tester,late_then,late_else){
var apath = (cljs.core.truth_(then_tester.call(null,structure))?late_then:late_else);
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,next_fn,com.rpl.specter.impl.compiled_select_STAR_.call(null,apath,structure)));
});
com.rpl.specter.impl.if_transform = (function com$rpl$specter$impl$if_transform(structure,next_fn,then_tester,late_then,late_else){
var apath = (cljs.core.truth_(then_tester.call(null,structure))?late_then:late_else);
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,apath,next_fn,structure);
});
com.rpl.specter.impl.filter_select = (function com$rpl$specter$impl$filter_select(afn,structure,next_fn){
if(cljs.core.truth_(afn.call(null,structure))){
return next_fn.call(null,structure);
} else {
return null;
}
});
com.rpl.specter.impl.filter_transform = (function com$rpl$specter$impl$filter_transform(afn,structure,next_fn){
if(cljs.core.truth_(afn.call(null,structure))){
return next_fn.call(null,structure);
} else {
return structure;
}
});
com.rpl.specter.impl.compiled_selector = (function com$rpl$specter$impl$compiled_selector(path){
var tfns = path.transform_fns;
return tfns.selector;
});
com.rpl.specter.impl.compiled_transformer = (function com$rpl$specter$impl$compiled_transformer(path){
var tfns = path.transform_fns;
return tfns.transformer;
});
com.rpl.specter.impl.params_needed_selector = (function com$rpl$specter$impl$params_needed_selector(path){
var tfns = path.transform_fns;
return tfns.selector;
});
com.rpl.specter.impl.params_needed_transformer = (function com$rpl$specter$impl$params_needed_transformer(path){
var tfns = path.transform_fns;
return tfns.transformer;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LayeredNav = (function (underlying,__meta,__extmap,__hash){
this.underlying = underlying;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.LayeredNav.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22104__auto__,k__22105__auto__){
var self__ = this;
var this__22104__auto____$1 = this;
return cljs.core._lookup.call(null,this__22104__auto____$1,k__22105__auto__,null);
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22106__auto__,k26042,else__22107__auto__){
var self__ = this;
var this__22106__auto____$1 = this;
var G__26044 = (((k26042 instanceof cljs.core.Keyword))?k26042.fqn:null);
switch (G__26044) {
case "underlying":
return self__.underlying;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26042,else__22107__auto__);

}
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22118__auto__,writer__22119__auto__,opts__22120__auto__){
var self__ = this;
var this__22118__auto____$1 = this;
var pr_pair__22121__auto__ = ((function (this__22118__auto____$1){
return (function (keyval__22122__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22119__auto__,cljs.core.pr_writer,""," ","",opts__22120__auto__,keyval__22122__auto__);
});})(this__22118__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22119__auto__,pr_pair__22121__auto__,"#com.rpl.specter.impl.LayeredNav{",", ","}",opts__22120__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"underlying","underlying",-1492391849),self__.underlying],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26041){
var self__ = this;
var G__26041__$1 = this;
return (new cljs.core.RecordIter((0),G__26041__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"underlying","underlying",-1492391849)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22102__auto__){
var self__ = this;
var this__22102__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22098__auto__){
var self__ = this;
var this__22098__auto____$1 = this;
return (new com.rpl.specter.impl.LayeredNav(self__.underlying,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22108__auto__){
var self__ = this;
var this__22108__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22099__auto__){
var self__ = this;
var this__22099__auto____$1 = this;
var h__21871__auto__ = self__.__hash;
if(!((h__21871__auto__ == null))){
return h__21871__auto__;
} else {
var h__21871__auto____$1 = cljs.core.hash_imap.call(null,this__22099__auto____$1);
self__.__hash = h__21871__auto____$1;

return h__21871__auto____$1;
}
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22100__auto__,other__22101__auto__){
var self__ = this;
var this__22100__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21422__auto__ = other__22101__auto__;
if(cljs.core.truth_(and__21422__auto__)){
var and__21422__auto____$1 = (this__22100__auto____$1.constructor === other__22101__auto__.constructor);
if(and__21422__auto____$1){
return cljs.core.equiv_map.call(null,this__22100__auto____$1,other__22101__auto__);
} else {
return and__21422__auto____$1;
}
} else {
return and__21422__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22113__auto__,k__22114__auto__){
var self__ = this;
var this__22113__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"underlying","underlying",-1492391849),null], null), null),k__22114__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22113__auto____$1),self__.__meta),k__22114__auto__);
} else {
return (new com.rpl.specter.impl.LayeredNav(self__.underlying,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22114__auto__)),null));
}
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22111__auto__,k__22112__auto__,G__26041){
var self__ = this;
var this__22111__auto____$1 = this;
var pred__26045 = cljs.core.keyword_identical_QMARK_;
var expr__26046 = k__22112__auto__;
if(cljs.core.truth_(pred__26045.call(null,new cljs.core.Keyword(null,"underlying","underlying",-1492391849),expr__26046))){
return (new com.rpl.specter.impl.LayeredNav(G__26041,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LayeredNav(self__.underlying,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22112__auto__,G__26041),null));
}
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22116__auto__){
var self__ = this;
var this__22116__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"underlying","underlying",-1492391849),self__.underlying],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22103__auto__,G__26041){
var self__ = this;
var this__22103__auto____$1 = this;
return (new com.rpl.specter.impl.LayeredNav(self__.underlying,G__26041,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22109__auto__,entry__22110__auto__){
var self__ = this;
var this__22109__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22110__auto__)){
return cljs.core._assoc.call(null,this__22109__auto____$1,cljs.core._nth.call(null,entry__22110__auto__,(0)),cljs.core._nth.call(null,entry__22110__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22109__auto____$1,entry__22110__auto__);
}
});

com.rpl.specter.impl.LayeredNav.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"underlying","underlying",148139678,null)], null);
});

com.rpl.specter.impl.LayeredNav.cljs$lang$type = true;

com.rpl.specter.impl.LayeredNav.cljs$lang$ctorPrSeq = (function (this__22140__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LayeredNav");
});

com.rpl.specter.impl.LayeredNav.cljs$lang$ctorPrWriter = (function (this__22140__auto__,writer__22141__auto__){
return cljs.core._write.call(null,writer__22141__auto__,"com.rpl.specter.impl/LayeredNav");
});

com.rpl.specter.impl.__GT_LayeredNav = (function com$rpl$specter$impl$__GT_LayeredNav(underlying){
return (new com.rpl.specter.impl.LayeredNav(underlying,null,null,null));
});

com.rpl.specter.impl.map__GT_LayeredNav = (function com$rpl$specter$impl$map__GT_LayeredNav(G__26043){
return (new com.rpl.specter.impl.LayeredNav(new cljs.core.Keyword(null,"underlying","underlying",-1492391849).cljs$core$IFn$_invoke$arity$1(G__26043),null,cljs.core.dissoc.call(null,G__26043,new cljs.core.Keyword(null,"underlying","underlying",-1492391849)),null));
});

com.rpl.specter.impl.layered_nav_QMARK_ = (function com$rpl$specter$impl$layered_nav_QMARK_(o){
return (o instanceof com.rpl.specter.impl.LayeredNav);
});
com.rpl.specter.impl.layered_nav_underlying = (function com$rpl$specter$impl$layered_nav_underlying(ln){
return ln.underlying;
});
com.rpl.specter.impl.verify_layerable_BANG_ = (function com$rpl$specter$impl$verify_layerable_BANG_(anav){
if(!(((anav instanceof com.rpl.specter.impl.ParamsNeededPath)) && ((new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097).cljs$core$IFn$_invoke$arity$1(anav) > (0))))){
return com.rpl.specter.impl.throw_illegal.call(null,"defnavconstructor must be used on a navigator defined with\n      defnav with at least one parameter");
} else {
return null;
}
});
com.rpl.specter.impl.layered_wrapper = (function com$rpl$specter$impl$layered_wrapper(anav){
com.rpl.specter.impl.verify_layerable_BANG_.call(null,anav);

return (function() {
var G__26049 = null;
var G__26049__1 = (function (a1){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1));
});
var G__26049__2 = (function (a1,a2){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1,a2));
});
var G__26049__3 = (function (a1,a2,a3){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1,a2,a3));
});
var G__26049__4 = (function (a1,a2,a3,a4){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1,a2,a3,a4));
});
var G__26049__5 = (function (a1,a2,a3,a4,a5){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1,a2,a3,a4,a5));
});
var G__26049__6 = (function (a1,a2,a3,a4,a5,a6){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1,a2,a3,a4,a5,a6));
});
var G__26049__7 = (function (a1,a2,a3,a4,a5,a6,a7){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1,a2,a3,a4,a5,a6,a7));
});
var G__26049__8 = (function (a1,a2,a3,a4,a5,a6,a7,a8){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1,a2,a3,a4,a5,a6,a7,a8));
});
var G__26049__9 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1,a2,a3,a4,a5,a6,a7,a8,a9));
});
var G__26049__10 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10));
});
var G__26049__11 = (function() { 
var G__26050__delegate = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,args){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,cljs.core.apply.call(null,anav,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,args));
};
var G__26050 = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var args = null;
if (arguments.length > 10) {
var G__26051__i = 0, G__26051__a = new Array(arguments.length -  10);
while (G__26051__i < G__26051__a.length) {G__26051__a[G__26051__i] = arguments[G__26051__i + 10]; ++G__26051__i;}
  args = new cljs.core.IndexedSeq(G__26051__a,0);
} 
return G__26050__delegate.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,args);};
G__26050.cljs$lang$maxFixedArity = 10;
G__26050.cljs$lang$applyTo = (function (arglist__26052){
var a1 = cljs.core.first(arglist__26052);
arglist__26052 = cljs.core.next(arglist__26052);
var a2 = cljs.core.first(arglist__26052);
arglist__26052 = cljs.core.next(arglist__26052);
var a3 = cljs.core.first(arglist__26052);
arglist__26052 = cljs.core.next(arglist__26052);
var a4 = cljs.core.first(arglist__26052);
arglist__26052 = cljs.core.next(arglist__26052);
var a5 = cljs.core.first(arglist__26052);
arglist__26052 = cljs.core.next(arglist__26052);
var a6 = cljs.core.first(arglist__26052);
arglist__26052 = cljs.core.next(arglist__26052);
var a7 = cljs.core.first(arglist__26052);
arglist__26052 = cljs.core.next(arglist__26052);
var a8 = cljs.core.first(arglist__26052);
arglist__26052 = cljs.core.next(arglist__26052);
var a9 = cljs.core.first(arglist__26052);
arglist__26052 = cljs.core.next(arglist__26052);
var a10 = cljs.core.first(arglist__26052);
var args = cljs.core.rest(arglist__26052);
return G__26050__delegate(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,args);
});
G__26050.cljs$core$IFn$_invoke$arity$variadic = G__26050__delegate;
return G__26050;
})()
;
G__26049 = function(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return G__26049__1.call(this,a1);
case 2:
return G__26049__2.call(this,a1,a2);
case 3:
return G__26049__3.call(this,a1,a2,a3);
case 4:
return G__26049__4.call(this,a1,a2,a3,a4);
case 5:
return G__26049__5.call(this,a1,a2,a3,a4,a5);
case 6:
return G__26049__6.call(this,a1,a2,a3,a4,a5,a6);
case 7:
return G__26049__7.call(this,a1,a2,a3,a4,a5,a6,a7);
case 8:
return G__26049__8.call(this,a1,a2,a3,a4,a5,a6,a7,a8);
case 9:
return G__26049__9.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9);
case 10:
return G__26049__10.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
default:
var G__26053 = null;
if (arguments.length > 10) {
var G__26054__i = 0, G__26054__a = new Array(arguments.length -  10);
while (G__26054__i < G__26054__a.length) {G__26054__a[G__26054__i] = arguments[G__26054__i + 10]; ++G__26054__i;}
G__26053 = new cljs.core.IndexedSeq(G__26054__a,0);
}
return G__26049__11.cljs$core$IFn$_invoke$arity$variadic(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10, G__26053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26049.cljs$lang$maxFixedArity = 10;
G__26049.cljs$lang$applyTo = G__26049__11.cljs$lang$applyTo;
G__26049.cljs$core$IFn$_invoke$arity$1 = G__26049__1;
G__26049.cljs$core$IFn$_invoke$arity$2 = G__26049__2;
G__26049.cljs$core$IFn$_invoke$arity$3 = G__26049__3;
G__26049.cljs$core$IFn$_invoke$arity$4 = G__26049__4;
G__26049.cljs$core$IFn$_invoke$arity$5 = G__26049__5;
G__26049.cljs$core$IFn$_invoke$arity$6 = G__26049__6;
G__26049.cljs$core$IFn$_invoke$arity$7 = G__26049__7;
G__26049.cljs$core$IFn$_invoke$arity$8 = G__26049__8;
G__26049.cljs$core$IFn$_invoke$arity$9 = G__26049__9;
G__26049.cljs$core$IFn$_invoke$arity$10 = G__26049__10;
G__26049.cljs$core$IFn$_invoke$arity$variadic = G__26049__11.cljs$core$IFn$_invoke$arity$variadic;
return G__26049;
})()
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LocalSym = (function (val,sym,__meta,__extmap,__hash){
this.val = val;
this.sym = sym;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.LocalSym.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22104__auto__,k__22105__auto__){
var self__ = this;
var this__22104__auto____$1 = this;
return cljs.core._lookup.call(null,this__22104__auto____$1,k__22105__auto__,null);
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22106__auto__,k26056,else__22107__auto__){
var self__ = this;
var this__22106__auto____$1 = this;
var G__26058 = (((k26056 instanceof cljs.core.Keyword))?k26056.fqn:null);
switch (G__26058) {
case "val":
return self__.val;

break;
case "sym":
return self__.sym;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26056,else__22107__auto__);

}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22118__auto__,writer__22119__auto__,opts__22120__auto__){
var self__ = this;
var this__22118__auto____$1 = this;
var pr_pair__22121__auto__ = ((function (this__22118__auto____$1){
return (function (keyval__22122__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22119__auto__,cljs.core.pr_writer,""," ","",opts__22120__auto__,keyval__22122__auto__);
});})(this__22118__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22119__auto__,pr_pair__22121__auto__,"#com.rpl.specter.impl.LocalSym{",", ","}",opts__22120__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26055){
var self__ = this;
var G__26055__$1 = this;
return (new cljs.core.RecordIter((0),G__26055__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"sym","sym",-1444860305)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22102__auto__){
var self__ = this;
var this__22102__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22098__auto__){
var self__ = this;
var this__22098__auto____$1 = this;
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22108__auto__){
var self__ = this;
var this__22108__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22099__auto__){
var self__ = this;
var this__22099__auto____$1 = this;
var h__21871__auto__ = self__.__hash;
if(!((h__21871__auto__ == null))){
return h__21871__auto__;
} else {
var h__21871__auto____$1 = cljs.core.hash_imap.call(null,this__22099__auto____$1);
self__.__hash = h__21871__auto____$1;

return h__21871__auto____$1;
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22100__auto__,other__22101__auto__){
var self__ = this;
var this__22100__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21422__auto__ = other__22101__auto__;
if(cljs.core.truth_(and__21422__auto__)){
var and__21422__auto____$1 = (this__22100__auto____$1.constructor === other__22101__auto__.constructor);
if(and__21422__auto____$1){
return cljs.core.equiv_map.call(null,this__22100__auto____$1,other__22101__auto__);
} else {
return and__21422__auto____$1;
}
} else {
return and__21422__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22113__auto__,k__22114__auto__){
var self__ = this;
var this__22113__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"sym","sym",-1444860305),null], null), null),k__22114__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22113__auto____$1),self__.__meta),k__22114__auto__);
} else {
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22114__auto__)),null));
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22111__auto__,k__22112__auto__,G__26055){
var self__ = this;
var this__22111__auto____$1 = this;
var pred__26059 = cljs.core.keyword_identical_QMARK_;
var expr__26060 = k__22112__auto__;
if(cljs.core.truth_(pred__26059.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__26060))){
return (new com.rpl.specter.impl.LocalSym(G__26055,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26059.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__26060))){
return (new com.rpl.specter.impl.LocalSym(self__.val,G__26055,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22112__auto__,G__26055),null));
}
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22116__auto__){
var self__ = this;
var this__22116__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22103__auto__,G__26055){
var self__ = this;
var this__22103__auto____$1 = this;
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,G__26055,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22109__auto__,entry__22110__auto__){
var self__ = this;
var this__22109__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22110__auto__)){
return cljs.core._assoc.call(null,this__22109__auto____$1,cljs.core._nth.call(null,entry__22110__auto__,(0)),cljs.core._nth.call(null,entry__22110__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22109__auto____$1,entry__22110__auto__);
}
});

com.rpl.specter.impl.LocalSym.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"sym","sym",195671222,null)], null);
});

com.rpl.specter.impl.LocalSym.cljs$lang$type = true;

com.rpl.specter.impl.LocalSym.cljs$lang$ctorPrSeq = (function (this__22140__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LocalSym");
});

com.rpl.specter.impl.LocalSym.cljs$lang$ctorPrWriter = (function (this__22140__auto__,writer__22141__auto__){
return cljs.core._write.call(null,writer__22141__auto__,"com.rpl.specter.impl/LocalSym");
});

com.rpl.specter.impl.__GT_LocalSym = (function com$rpl$specter$impl$__GT_LocalSym(val,sym){
return (new com.rpl.specter.impl.LocalSym(val,sym,null,null,null));
});

com.rpl.specter.impl.map__GT_LocalSym = (function com$rpl$specter$impl$map__GT_LocalSym(G__26057){
return (new com.rpl.specter.impl.LocalSym(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__26057),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(G__26057),null,cljs.core.dissoc.call(null,G__26057,new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"sym","sym",-1444860305)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.VarUse = (function (val,var$,sym,__meta,__extmap,__hash){
this.val = val;
this.var$ = var$;
this.sym = sym;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.VarUse.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22104__auto__,k__22105__auto__){
var self__ = this;
var this__22104__auto____$1 = this;
return cljs.core._lookup.call(null,this__22104__auto____$1,k__22105__auto__,null);
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22106__auto__,k26064,else__22107__auto__){
var self__ = this;
var this__22106__auto____$1 = this;
var G__26066 = (((k26064 instanceof cljs.core.Keyword))?k26064.fqn:null);
switch (G__26066) {
case "val":
return self__.val;

break;
case "var":
return self__.var$;

break;
case "sym":
return self__.sym;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26064,else__22107__auto__);

}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22118__auto__,writer__22119__auto__,opts__22120__auto__){
var self__ = this;
var this__22118__auto____$1 = this;
var pr_pair__22121__auto__ = ((function (this__22118__auto____$1){
return (function (keyval__22122__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22119__auto__,cljs.core.pr_writer,""," ","",opts__22120__auto__,keyval__22122__auto__);
});})(this__22118__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22119__auto__,pr_pair__22121__auto__,"#com.rpl.specter.impl.VarUse{",", ","}",opts__22120__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"var","var",-769682797),self__.var$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.VarUse.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26063){
var self__ = this;
var G__26063__$1 = this;
return (new cljs.core.RecordIter((0),G__26063__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"sym","sym",-1444860305)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22102__auto__){
var self__ = this;
var this__22102__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22098__auto__){
var self__ = this;
var this__22098__auto____$1 = this;
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,self__.sym,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22108__auto__){
var self__ = this;
var this__22108__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22099__auto__){
var self__ = this;
var this__22099__auto____$1 = this;
var h__21871__auto__ = self__.__hash;
if(!((h__21871__auto__ == null))){
return h__21871__auto__;
} else {
var h__21871__auto____$1 = cljs.core.hash_imap.call(null,this__22099__auto____$1);
self__.__hash = h__21871__auto____$1;

return h__21871__auto____$1;
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22100__auto__,other__22101__auto__){
var self__ = this;
var this__22100__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21422__auto__ = other__22101__auto__;
if(cljs.core.truth_(and__21422__auto__)){
var and__21422__auto____$1 = (this__22100__auto____$1.constructor === other__22101__auto__.constructor);
if(and__21422__auto____$1){
return cljs.core.equiv_map.call(null,this__22100__auto____$1,other__22101__auto__);
} else {
return and__21422__auto____$1;
}
} else {
return and__21422__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22113__auto__,k__22114__auto__){
var self__ = this;
var this__22113__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"sym","sym",-1444860305),null,new cljs.core.Keyword(null,"var","var",-769682797),null], null), null),k__22114__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22113__auto____$1),self__.__meta),k__22114__auto__);
} else {
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,self__.sym,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22114__auto__)),null));
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22111__auto__,k__22112__auto__,G__26063){
var self__ = this;
var this__22111__auto____$1 = this;
var pred__26067 = cljs.core.keyword_identical_QMARK_;
var expr__26068 = k__22112__auto__;
if(cljs.core.truth_(pred__26067.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__26068))){
return (new com.rpl.specter.impl.VarUse(G__26063,self__.var$,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26067.call(null,new cljs.core.Keyword(null,"var","var",-769682797),expr__26068))){
return (new com.rpl.specter.impl.VarUse(self__.val,G__26063,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26067.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__26068))){
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,G__26063,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,self__.sym,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22112__auto__,G__26063),null));
}
}
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22116__auto__){
var self__ = this;
var this__22116__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"var","var",-769682797),self__.var$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22103__auto__,G__26063){
var self__ = this;
var this__22103__auto____$1 = this;
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,self__.sym,G__26063,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22109__auto__,entry__22110__auto__){
var self__ = this;
var this__22109__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22110__auto__)){
return cljs.core._assoc.call(null,this__22109__auto____$1,cljs.core._nth.call(null,entry__22110__auto__,(0)),cljs.core._nth.call(null,entry__22110__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22109__auto____$1,entry__22110__auto__);
}
});

com.rpl.specter.impl.VarUse.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"var","var",870848730,null),new cljs.core.Symbol(null,"sym","sym",195671222,null)], null);
});

com.rpl.specter.impl.VarUse.cljs$lang$type = true;

com.rpl.specter.impl.VarUse.cljs$lang$ctorPrSeq = (function (this__22140__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/VarUse");
});

com.rpl.specter.impl.VarUse.cljs$lang$ctorPrWriter = (function (this__22140__auto__,writer__22141__auto__){
return cljs.core._write.call(null,writer__22141__auto__,"com.rpl.specter.impl/VarUse");
});

com.rpl.specter.impl.__GT_VarUse = (function com$rpl$specter$impl$__GT_VarUse(val,var$,sym){
return (new com.rpl.specter.impl.VarUse(val,var$,sym,null,null,null));
});

com.rpl.specter.impl.map__GT_VarUse = (function com$rpl$specter$impl$map__GT_VarUse(G__26065){
return (new com.rpl.specter.impl.VarUse(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__26065),new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(G__26065),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(G__26065),null,cljs.core.dissoc.call(null,G__26065,new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"sym","sym",-1444860305)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.SpecialFormUse = (function (val,code,__meta,__extmap,__hash){
this.val = val;
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22104__auto__,k__22105__auto__){
var self__ = this;
var this__22104__auto____$1 = this;
return cljs.core._lookup.call(null,this__22104__auto____$1,k__22105__auto__,null);
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22106__auto__,k26072,else__22107__auto__){
var self__ = this;
var this__22106__auto____$1 = this;
var G__26074 = (((k26072 instanceof cljs.core.Keyword))?k26072.fqn:null);
switch (G__26074) {
case "val":
return self__.val;

break;
case "code":
return self__.code;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26072,else__22107__auto__);

}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22118__auto__,writer__22119__auto__,opts__22120__auto__){
var self__ = this;
var this__22118__auto____$1 = this;
var pr_pair__22121__auto__ = ((function (this__22118__auto____$1){
return (function (keyval__22122__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22119__auto__,cljs.core.pr_writer,""," ","",opts__22120__auto__,keyval__22122__auto__);
});})(this__22118__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22119__auto__,pr_pair__22121__auto__,"#com.rpl.specter.impl.SpecialFormUse{",", ","}",opts__22120__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26071){
var self__ = this;
var G__26071__$1 = this;
return (new cljs.core.RecordIter((0),G__26071__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"code","code",1586293142)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22102__auto__){
var self__ = this;
var this__22102__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22098__auto__){
var self__ = this;
var this__22098__auto____$1 = this;
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22108__auto__){
var self__ = this;
var this__22108__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22099__auto__){
var self__ = this;
var this__22099__auto____$1 = this;
var h__21871__auto__ = self__.__hash;
if(!((h__21871__auto__ == null))){
return h__21871__auto__;
} else {
var h__21871__auto____$1 = cljs.core.hash_imap.call(null,this__22099__auto____$1);
self__.__hash = h__21871__auto____$1;

return h__21871__auto____$1;
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22100__auto__,other__22101__auto__){
var self__ = this;
var this__22100__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21422__auto__ = other__22101__auto__;
if(cljs.core.truth_(and__21422__auto__)){
var and__21422__auto____$1 = (this__22100__auto____$1.constructor === other__22101__auto__.constructor);
if(and__21422__auto____$1){
return cljs.core.equiv_map.call(null,this__22100__auto____$1,other__22101__auto__);
} else {
return and__21422__auto____$1;
}
} else {
return and__21422__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22113__auto__,k__22114__auto__){
var self__ = this;
var this__22113__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__22114__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22113__auto____$1),self__.__meta),k__22114__auto__);
} else {
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22114__auto__)),null));
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22111__auto__,k__22112__auto__,G__26071){
var self__ = this;
var this__22111__auto____$1 = this;
var pred__26075 = cljs.core.keyword_identical_QMARK_;
var expr__26076 = k__22112__auto__;
if(cljs.core.truth_(pred__26075.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__26076))){
return (new com.rpl.specter.impl.SpecialFormUse(G__26071,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26075.call(null,new cljs.core.Keyword(null,"code","code",1586293142),expr__26076))){
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,G__26071,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22112__auto__,G__26071),null));
}
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22116__auto__){
var self__ = this;
var this__22116__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22103__auto__,G__26071){
var self__ = this;
var this__22103__auto____$1 = this;
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,G__26071,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22109__auto__,entry__22110__auto__){
var self__ = this;
var this__22109__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22110__auto__)){
return cljs.core._assoc.call(null,this__22109__auto____$1,cljs.core._nth.call(null,entry__22110__auto__,(0)),cljs.core._nth.call(null,entry__22110__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22109__auto____$1,entry__22110__auto__);
}
});

com.rpl.specter.impl.SpecialFormUse.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
});

com.rpl.specter.impl.SpecialFormUse.cljs$lang$type = true;

com.rpl.specter.impl.SpecialFormUse.cljs$lang$ctorPrSeq = (function (this__22140__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/SpecialFormUse");
});

com.rpl.specter.impl.SpecialFormUse.cljs$lang$ctorPrWriter = (function (this__22140__auto__,writer__22141__auto__){
return cljs.core._write.call(null,writer__22141__auto__,"com.rpl.specter.impl/SpecialFormUse");
});

com.rpl.specter.impl.__GT_SpecialFormUse = (function com$rpl$specter$impl$__GT_SpecialFormUse(val,code){
return (new com.rpl.specter.impl.SpecialFormUse(val,code,null,null,null));
});

com.rpl.specter.impl.map__GT_SpecialFormUse = (function com$rpl$specter$impl$map__GT_SpecialFormUse(G__26073){
return (new com.rpl.specter.impl.SpecialFormUse(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__26073),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__26073),null,cljs.core.dissoc.call(null,G__26073,new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"code","code",1586293142)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.FnInvocation = (function (op,params,code,__meta,__extmap,__hash){
this.op = op;
this.params = params;
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22104__auto__,k__22105__auto__){
var self__ = this;
var this__22104__auto____$1 = this;
return cljs.core._lookup.call(null,this__22104__auto____$1,k__22105__auto__,null);
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22106__auto__,k26080,else__22107__auto__){
var self__ = this;
var this__22106__auto____$1 = this;
var G__26082 = (((k26080 instanceof cljs.core.Keyword))?k26080.fqn:null);
switch (G__26082) {
case "op":
return self__.op;

break;
case "params":
return self__.params;

break;
case "code":
return self__.code;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26080,else__22107__auto__);

}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22118__auto__,writer__22119__auto__,opts__22120__auto__){
var self__ = this;
var this__22118__auto____$1 = this;
var pr_pair__22121__auto__ = ((function (this__22118__auto____$1){
return (function (keyval__22122__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22119__auto__,cljs.core.pr_writer,""," ","",opts__22120__auto__,keyval__22122__auto__);
});})(this__22118__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22119__auto__,pr_pair__22121__auto__,"#com.rpl.specter.impl.FnInvocation{",", ","}",opts__22120__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"op","op",-1882987955),self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26079){
var self__ = this;
var G__26079__$1 = this;
return (new cljs.core.RecordIter((0),G__26079__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22102__auto__){
var self__ = this;
var this__22102__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22098__auto__){
var self__ = this;
var this__22098__auto____$1 = this;
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22108__auto__){
var self__ = this;
var this__22108__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22099__auto__){
var self__ = this;
var this__22099__auto____$1 = this;
var h__21871__auto__ = self__.__hash;
if(!((h__21871__auto__ == null))){
return h__21871__auto__;
} else {
var h__21871__auto____$1 = cljs.core.hash_imap.call(null,this__22099__auto____$1);
self__.__hash = h__21871__auto____$1;

return h__21871__auto____$1;
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22100__auto__,other__22101__auto__){
var self__ = this;
var this__22100__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21422__auto__ = other__22101__auto__;
if(cljs.core.truth_(and__21422__auto__)){
var and__21422__auto____$1 = (this__22100__auto____$1.constructor === other__22101__auto__.constructor);
if(and__21422__auto____$1){
return cljs.core.equiv_map.call(null,this__22100__auto____$1,other__22101__auto__);
} else {
return and__21422__auto____$1;
}
} else {
return and__21422__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22113__auto__,k__22114__auto__){
var self__ = this;
var this__22113__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"op","op",-1882987955),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__22114__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22113__auto____$1),self__.__meta),k__22114__auto__);
} else {
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22114__auto__)),null));
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22111__auto__,k__22112__auto__,G__26079){
var self__ = this;
var this__22111__auto____$1 = this;
var pred__26083 = cljs.core.keyword_identical_QMARK_;
var expr__26084 = k__22112__auto__;
if(cljs.core.truth_(pred__26083.call(null,new cljs.core.Keyword(null,"op","op",-1882987955),expr__26084))){
return (new com.rpl.specter.impl.FnInvocation(G__26079,self__.params,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26083.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__26084))){
return (new com.rpl.specter.impl.FnInvocation(self__.op,G__26079,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26083.call(null,new cljs.core.Keyword(null,"code","code",1586293142),expr__26084))){
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,G__26079,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22112__auto__,G__26079),null));
}
}
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22116__auto__){
var self__ = this;
var this__22116__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"op","op",-1882987955),self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22103__auto__,G__26079){
var self__ = this;
var this__22103__auto____$1 = this;
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,G__26079,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22109__auto__,entry__22110__auto__){
var self__ = this;
var this__22109__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22110__auto__)){
return cljs.core._assoc.call(null,this__22109__auto____$1,cljs.core._nth.call(null,entry__22110__auto__,(0)),cljs.core._nth.call(null,entry__22110__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22109__auto____$1,entry__22110__auto__);
}
});

com.rpl.specter.impl.FnInvocation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"op","op",-242456428,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
});

com.rpl.specter.impl.FnInvocation.cljs$lang$type = true;

com.rpl.specter.impl.FnInvocation.cljs$lang$ctorPrSeq = (function (this__22140__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/FnInvocation");
});

com.rpl.specter.impl.FnInvocation.cljs$lang$ctorPrWriter = (function (this__22140__auto__,writer__22141__auto__){
return cljs.core._write.call(null,writer__22141__auto__,"com.rpl.specter.impl/FnInvocation");
});

com.rpl.specter.impl.__GT_FnInvocation = (function com$rpl$specter$impl$__GT_FnInvocation(op,params,code){
return (new com.rpl.specter.impl.FnInvocation(op,params,code,null,null,null));
});

com.rpl.specter.impl.map__GT_FnInvocation = (function com$rpl$specter$impl$map__GT_FnInvocation(G__26081){
return (new com.rpl.specter.impl.FnInvocation(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(G__26081),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__26081),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__26081),null,cljs.core.dissoc.call(null,G__26081,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.CachedPathInfo = (function (precompiled,params_maker,__meta,__extmap,__hash){
this.precompiled = precompiled;
this.params_maker = params_maker;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22104__auto__,k__22105__auto__){
var self__ = this;
var this__22104__auto____$1 = this;
return cljs.core._lookup.call(null,this__22104__auto____$1,k__22105__auto__,null);
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22106__auto__,k26088,else__22107__auto__){
var self__ = this;
var this__22106__auto____$1 = this;
var G__26090 = (((k26088 instanceof cljs.core.Keyword))?k26088.fqn:null);
switch (G__26090) {
case "precompiled":
return self__.precompiled;

break;
case "params-maker":
return self__.params_maker;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26088,else__22107__auto__);

}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22118__auto__,writer__22119__auto__,opts__22120__auto__){
var self__ = this;
var this__22118__auto____$1 = this;
var pr_pair__22121__auto__ = ((function (this__22118__auto____$1){
return (function (keyval__22122__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22119__auto__,cljs.core.pr_writer,""," ","",opts__22120__auto__,keyval__22122__auto__);
});})(this__22118__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22119__auto__,pr_pair__22121__auto__,"#com.rpl.specter.impl.CachedPathInfo{",", ","}",opts__22120__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),self__.precompiled],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-maker","params-maker",539586643),self__.params_maker],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26087){
var self__ = this;
var G__26087__$1 = this;
return (new cljs.core.RecordIter((0),G__26087__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),new cljs.core.Keyword(null,"params-maker","params-maker",539586643)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22102__auto__){
var self__ = this;
var this__22102__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22098__auto__){
var self__ = this;
var this__22098__auto____$1 = this;
return (new com.rpl.specter.impl.CachedPathInfo(self__.precompiled,self__.params_maker,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22108__auto__){
var self__ = this;
var this__22108__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22099__auto__){
var self__ = this;
var this__22099__auto____$1 = this;
var h__21871__auto__ = self__.__hash;
if(!((h__21871__auto__ == null))){
return h__21871__auto__;
} else {
var h__21871__auto____$1 = cljs.core.hash_imap.call(null,this__22099__auto____$1);
self__.__hash = h__21871__auto____$1;

return h__21871__auto____$1;
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22100__auto__,other__22101__auto__){
var self__ = this;
var this__22100__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21422__auto__ = other__22101__auto__;
if(cljs.core.truth_(and__21422__auto__)){
var and__21422__auto____$1 = (this__22100__auto____$1.constructor === other__22101__auto__.constructor);
if(and__21422__auto____$1){
return cljs.core.equiv_map.call(null,this__22100__auto____$1,other__22101__auto__);
} else {
return and__21422__auto____$1;
}
} else {
return and__21422__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22113__auto__,k__22114__auto__){
var self__ = this;
var this__22113__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params-maker","params-maker",539586643),null,new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),null], null), null),k__22114__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22113__auto____$1),self__.__meta),k__22114__auto__);
} else {
return (new com.rpl.specter.impl.CachedPathInfo(self__.precompiled,self__.params_maker,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22114__auto__)),null));
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22111__auto__,k__22112__auto__,G__26087){
var self__ = this;
var this__22111__auto____$1 = this;
var pred__26091 = cljs.core.keyword_identical_QMARK_;
var expr__26092 = k__22112__auto__;
if(cljs.core.truth_(pred__26091.call(null,new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),expr__26092))){
return (new com.rpl.specter.impl.CachedPathInfo(G__26087,self__.params_maker,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26091.call(null,new cljs.core.Keyword(null,"params-maker","params-maker",539586643),expr__26092))){
return (new com.rpl.specter.impl.CachedPathInfo(self__.precompiled,G__26087,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.CachedPathInfo(self__.precompiled,self__.params_maker,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22112__auto__,G__26087),null));
}
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22116__auto__){
var self__ = this;
var this__22116__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),self__.precompiled],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-maker","params-maker",539586643),self__.params_maker],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22103__auto__,G__26087){
var self__ = this;
var this__22103__auto____$1 = this;
return (new com.rpl.specter.impl.CachedPathInfo(self__.precompiled,self__.params_maker,G__26087,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22109__auto__,entry__22110__auto__){
var self__ = this;
var this__22109__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22110__auto__)){
return cljs.core._assoc.call(null,this__22109__auto____$1,cljs.core._nth.call(null,entry__22110__auto__,(0)),cljs.core._nth.call(null,entry__22110__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22109__auto____$1,entry__22110__auto__);
}
});

com.rpl.specter.impl.CachedPathInfo.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"precompiled","precompiled",-42622082,null),new cljs.core.Symbol(null,"params-maker","params-maker",-2114849126,null)], null);
});

com.rpl.specter.impl.CachedPathInfo.cljs$lang$type = true;

com.rpl.specter.impl.CachedPathInfo.cljs$lang$ctorPrSeq = (function (this__22140__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/CachedPathInfo");
});

com.rpl.specter.impl.CachedPathInfo.cljs$lang$ctorPrWriter = (function (this__22140__auto__,writer__22141__auto__){
return cljs.core._write.call(null,writer__22141__auto__,"com.rpl.specter.impl/CachedPathInfo");
});

com.rpl.specter.impl.__GT_CachedPathInfo = (function com$rpl$specter$impl$__GT_CachedPathInfo(precompiled,params_maker){
return (new com.rpl.specter.impl.CachedPathInfo(precompiled,params_maker,null,null,null));
});

com.rpl.specter.impl.map__GT_CachedPathInfo = (function com$rpl$specter$impl$map__GT_CachedPathInfo(G__26089){
return (new com.rpl.specter.impl.CachedPathInfo(new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609).cljs$core$IFn$_invoke$arity$1(G__26089),new cljs.core.Keyword(null,"params-maker","params-maker",539586643).cljs$core$IFn$_invoke$arity$1(G__26089),null,cljs.core.dissoc.call(null,G__26089,new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),new cljs.core.Keyword(null,"params-maker","params-maker",539586643)),null));
});

com.rpl.specter.impl.MUST_CACHE_PATHS = com.rpl.specter.impl.mutable_cell.call(null,false);
com.rpl.specter.impl.must_cache_paths_BANG_ = (function com$rpl$specter$impl$must_cache_paths_BANG_(var_args){
var args26095 = [];
var len__22617__auto___26098 = arguments.length;
var i__22618__auto___26099 = (0);
while(true){
if((i__22618__auto___26099 < len__22617__auto___26098)){
args26095.push((arguments[i__22618__auto___26099]));

var G__26100 = (i__22618__auto___26099 + (1));
i__22618__auto___26099 = G__26100;
continue;
} else {
}
break;
}

var G__26097 = args26095.length;
switch (G__26097) {
case 0:
return com.rpl.specter.impl.must_cache_paths_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.rpl.specter.impl.must_cache_paths_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26095.length)].join('')));

}
});

com.rpl.specter.impl.must_cache_paths_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.rpl.specter.impl.must_cache_paths_BANG_.call(null,true);
});

com.rpl.specter.impl.must_cache_paths_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (v){
return com.rpl.specter.impl.set_cell_BANG_.call(null,com.rpl.specter.impl.MUST_CACHE_PATHS,v);
});

com.rpl.specter.impl.must_cache_paths_BANG_.cljs$lang$maxFixedArity = 1;

com.rpl.specter.impl.extract_original_code = (function com$rpl$specter$impl$extract_original_code(p){
if((p instanceof com.rpl.specter.impl.LocalSym)){
return new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(p);
} else {
if((p instanceof com.rpl.specter.impl.VarUse)){
return new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(p);
} else {
if((p instanceof com.rpl.specter.impl.SpecialFormUse)){
return new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(p);
} else {
if((p instanceof com.rpl.specter.impl.FnInvocation)){
return new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(p);
} else {
return p;

}
}
}
}
});
com.rpl.specter.impl.valid_navigator_QMARK_ = (function com$rpl$specter$impl$valid_navigator_QMARK_(v){
var or__21434__auto__ = com.rpl.specter.impl.structure_path_QMARK_.call(null,v);
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
} else {
var or__21434__auto____$1 = ((!((v == null)))?(((false) || (v.com$rpl$specter$protocols$Collector$))?true:(((!v.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,com.rpl.specter.protocols.Collector,v):false)):cljs.core.native_satisfies_QMARK_.call(null,com.rpl.specter.protocols.Collector,v));
if(or__21434__auto____$1){
return or__21434__auto____$1;
} else {
return (v instanceof com.rpl.specter.impl.CompiledPath);
}
}
});
com.rpl.specter.impl.handle_params = (function com$rpl$specter$impl$handle_params(precompiled,params_maker,possible_params){
var params = com.rpl.specter.impl.fast_object_array.call(null,cljs.core.count.call(null,params_maker));
var n__22447__auto___26106 = cljs.core.count.call(null,params_maker);
var i_26107 = (0);
while(true){
if((i_26107 < n__22447__auto___26106)){
(params[i_26107] = cljs.core.get.call(null,possible_params,cljs.core.get.call(null,params_maker,i_26107)).call(null));

var G__26108 = (i_26107 + (1));
i_26107 = G__26108;
continue;
} else {
}
break;
}

return com.rpl.specter.impl.bind_params_STAR_.call(null,precompiled,params,(0));
});
com.rpl.specter.impl.pred_STAR_ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params,params_idx,vals,structure,next_fn){
var afn = (params[params_idx]);
if(cljs.core.truth_(afn.call(null,structure))){
return next_fn.call(null,params,(params_idx + (1)),vals,structure);
} else {
return null;
}
}),(function (params,params_idx,vals,structure,next_fn){
var afn = (params[params_idx]);
if(cljs.core.truth_(afn.call(null,structure))){
return next_fn.call(null,params,(params_idx + (1)),vals,structure);
} else {
return structure;
}
})),(1));
com.rpl.specter.impl.rich_compiled_path_proxy = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params,params_idx,vals,structure,next_fn){
var apath = (params[params_idx]);
var transform_fns = apath.transform_fns;
var selector = transform_fns.selector;
return selector.call(null,apath.params,apath.params_idx,vals,structure,((function (apath,transform_fns,selector){
return (function (_,___$1,vals_next,structure_next){
return next_fn.call(null,params,params_idx,vals_next,structure_next);
});})(apath,transform_fns,selector))
);
}),(function (params,params_idx,vals,structure,next_fn){
var apath = (params[params_idx]);
var transform_fns = apath.transform_fns;
var transformer = transform_fns.transformer;
return transformer.call(null,apath.params,apath.params_idx,vals,structure,((function (apath,transform_fns,transformer){
return (function (_,___$1,vals_next,structure_next){
return next_fn.call(null,params,params_idx,vals_next,structure_next);
});})(apath,transform_fns,transformer))
);
})),(1));
com.rpl.specter.impl.variadic_arglist_QMARK_ = (function com$rpl$specter$impl$variadic_arglist_QMARK_(al){
return cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,al),new cljs.core.Symbol(null,"&","&",-2144855648,null));
});
com.rpl.specter.impl.arglist_for_params_count = (function com$rpl$specter$impl$arglist_for_params_count(arglists,c,code){
var ret = cljs.core.first.call(null,cljs.core.filter.call(null,(function (al){
var or__21434__auto__ = cljs.core._EQ_.call(null,cljs.core.count.call(null,al),c);
if(or__21434__auto__){
return or__21434__auto__;
} else {
return com.rpl.specter.impl.variadic_arglist_QMARK_.call(null,al);
}
}),arglists));
var len = cljs.core.count.call(null,ret);
if(cljs.core.truth_(ret)){
} else {
com.rpl.specter.impl.throw_illegal.call(null,"Invalid # arguments at ",code);
}

if(cljs.core.truth_(com.rpl.specter.impl.variadic_arglist_QMARK_.call(null,ret))){
return com.rpl.specter.impl.srange_transform.call(null,ret,(len - (2)),len,((function (ret,len){
return (function (_){
return cljs.core.repeatedly.call(null,(c - (len - (2))),cljs.core.gensym);
});})(ret,len))
);
} else {
return ret;
}
});
com.rpl.specter.impl.magic_precompilation_STAR_ = (function com$rpl$specter$impl$magic_precompilation_STAR_(p,params_atom,failed_atom){
var magic_fail_BANG_ = (function() { 
var G__26111__delegate = function (reason){
if(cljs.core.truth_(com.rpl.specter.impl.get_cell.call(null,com.rpl.specter.impl.MUST_CACHE_PATHS))){
cljs.core.println.call(null,"Failed to cache path:",cljs.core.apply.call(null,cljs.core.str,reason));
} else {
}

cljs.core.reset_BANG_.call(null,failed_atom,true);

return null;
};
var G__26111 = function (var_args){
var reason = null;
if (arguments.length > 0) {
var G__26112__i = 0, G__26112__a = new Array(arguments.length -  0);
while (G__26112__i < G__26112__a.length) {G__26112__a[G__26112__i] = arguments[G__26112__i + 0]; ++G__26112__i;}
  reason = new cljs.core.IndexedSeq(G__26112__a,0);
} 
return G__26111__delegate.call(this,reason);};
G__26111.cljs$lang$maxFixedArity = 0;
G__26111.cljs$lang$applyTo = (function (arglist__26113){
var reason = cljs.core.seq(arglist__26113);
return G__26111__delegate(reason);
});
G__26111.cljs$core$IFn$_invoke$arity$variadic = G__26111__delegate;
return G__26111;
})()
;
if(cljs.core.vector_QMARK_.call(null,p)){
return cljs.core.mapv.call(null,((function (magic_fail_BANG_){
return (function (p1__26109_SHARP_){
return com$rpl$specter$impl$magic_precompilation_STAR_.call(null,p1__26109_SHARP_,params_atom,failed_atom);
});})(magic_fail_BANG_))
,p);
} else {
if((p instanceof com.rpl.specter.impl.LocalSym)){
return magic_fail_BANG_.call(null,"Local symbol ",new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(p)," where navigator expected");
} else {
if((p instanceof com.rpl.specter.impl.VarUse)){
var v = new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(p);
var vv = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))){
return magic_fail_BANG_.call(null,"Var ",new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(p)," is dynamic");
} else {
if(cljs.core.truth_(com.rpl.specter.impl.valid_navigator_QMARK_.call(null,vv))){
return vv;
} else {
return magic_fail_BANG_.call(null,"Var ",new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(p)," is not a navigator");

}
}
} else {
if((p instanceof com.rpl.specter.impl.SpecialFormUse)){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,new cljs.core.Symbol(null,"fn","fn",465265323,null),null], null), null),cljs.core.first.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(p)))){
cljs.core.swap_BANG_.call(null,params_atom,cljs.core.conj,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(p));

return com.rpl.specter.impl.pred_STAR_;
} else {
return magic_fail_BANG_.call(null,"Special form ",new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(p)," where navigator expected");
}
} else {
if((p instanceof com.rpl.specter.impl.FnInvocation)){
var op = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p);
var ps = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(p);
if((op instanceof com.rpl.specter.impl.VarUse)){
var v = new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(op);
var vv = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(op);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))){
return magic_fail_BANG_.call(null,"Var ",new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(op)," is dynamic");
} else {
if((vv instanceof com.rpl.specter.impl.ParamsNeededPath)){
cljs.core.swap_BANG_.call(null,params_atom,((function (v,vv,op,ps,magic_fail_BANG_){
return (function (p1__26110_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,p1__26110_SHARP_,ps));
});})(v,vv,op,ps,magic_fail_BANG_))
);

return vv;
} else {
if(cljs.core.truth_((function (){var and__21422__auto__ = cljs.core.fn_QMARK_.call(null,vv);
if(and__21422__auto__){
return new cljs.core.Keyword(null,"pathedfn","pathedfn",1590980188).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v));
} else {
return and__21422__auto__;
}
})())){
var arglists = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v));
var al = com.rpl.specter.impl.arglist_for_params_count.call(null,arglists,cljs.core.count.call(null,ps),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(p));
var subpath = cljs.core.vec.call(null,cljs.core.map.call(null,((function (arglists,al,v,vv,op,ps,magic_fail_BANG_){
return (function (pdecl,p__$1){
if(((pdecl instanceof cljs.core.Symbol)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"notpath","notpath",568638421).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,pdecl))))){
return com$rpl$specter$impl$magic_precompilation_STAR_.call(null,p__$1,params_atom,failed_atom);
} else {
if(((p__$1 instanceof com.rpl.specter.impl.VarUse)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(p__$1)))))){
return new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(p__$1);
} else {
if((!((p__$1 instanceof com.rpl.specter.impl.LocalSym))) && (!((p__$1 instanceof com.rpl.specter.impl.VarUse))) && (!((p__$1 instanceof com.rpl.specter.impl.SpecialFormUse))) && (!((p__$1 instanceof com.rpl.specter.impl.FnInvocation))) && (!(cljs.core.coll_QMARK_.call(null,p__$1)))){
return p__$1;
} else {
return magic_fail_BANG_.call(null,"Could not factor static param ","of pathedfn because it's not a static var "," or non-collection value: ",com.rpl.specter.impl.extract_original_code.call(null,p__$1));

}
}
}
});})(arglists,al,v,vv,op,ps,magic_fail_BANG_))
,al,ps));
if(cljs.core.truth_(cljs.core.deref.call(null,failed_atom))){
return null;
} else {
return cljs.core.apply.call(null,vv,subpath);
}
} else {
if(cljs.core.truth_((function (){var and__21422__auto__ = cljs.core.fn_QMARK_.call(null,vv);
if(and__21422__auto__){
return new cljs.core.Keyword(null,"layerednav","layerednav",891636982).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,vv));
} else {
return and__21422__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,params_atom,cljs.core.conj,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(p));

return com.rpl.specter.impl.rich_compiled_path_proxy;
} else {
return magic_fail_BANG_.call(null,"Var ",new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(op)," must be either a parameterized ","navigator, a higher order pathed constructor function, ","or a nav consructor");

}
}
}
}
} else {
return magic_fail_BANG_.call(null,"Code at ",com.rpl.specter.impl.extract_original_code.call(null,p)," is in ","function invocation position and must be either a parameterized ","navigator, a higher order pathed constructor function, or a ","nav constructor.");
}
} else {
if(cljs.core.set_QMARK_.call(null,p)){
cljs.core.swap_BANG_.call(null,params_atom,cljs.core.conj,p);

return com.rpl.specter.impl.pred_STAR_;
} else {
if((p instanceof cljs.core.Keyword)){
return p;
} else {
if(cljs.core.truth_((function (){var and__21422__auto__ = typeof p === 'string';
if(and__21422__auto__){
return com.rpl.specter.impl.valid_navigator_QMARK_.call(null,p);
} else {
return and__21422__auto__;
}
})())){
return p;
} else {
return magic_fail_BANG_.call(null,"Code ",p," is not a valid navigator or can't be factored");

}
}
}

}
}
}
}
}
});
com.rpl.specter.impl.mk_params_maker = (function com$rpl$specter$impl$mk_params_maker(ns_str,params_code,possible_params_code,used_locals){
var indexed = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.comp.call(null,cljs.core.vec,cljs.core.reverse,cljs.core.vector),possible_params_code));
return cljs.core.mapv.call(null,((function (indexed){
return (function (c){
return cljs.core.get.call(null,indexed,c);
});})(indexed))
,params_code);
});
com.rpl.specter.impl.magic_precompilation = (function com$rpl$specter$impl$magic_precompilation(prepared_path,ns_str,used_locals,possible_params_code){
var params_atom = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var failed_atom = cljs.core.atom.call(null,false);
var path = com.rpl.specter.impl.magic_precompilation_STAR_.call(null,prepared_path,params_atom,failed_atom);
if(cljs.core.truth_(cljs.core.deref.call(null,failed_atom))){
if(cljs.core.truth_(com.rpl.specter.impl.get_cell.call(null,com.rpl.specter.impl.MUST_CACHE_PATHS))){
return com.rpl.specter.impl.throw_illegal.call(null,"Failed to cache path");
} else {
return com.rpl.specter.impl.__GT_CachedPathInfo.call(null,null,null);
}
} else {
var precompiled = com.rpl.specter.impl.comp_paths_STAR_.call(null,path);
var params_code = cljs.core.mapv.call(null,com.rpl.specter.impl.extract_original_code,cljs.core.deref.call(null,params_atom));
var params_maker = ((!(cljs.core.empty_QMARK_.call(null,params_code)))?com.rpl.specter.impl.mk_params_maker.call(null,ns_str,params_code,possible_params_code,used_locals):null);
return com.rpl.specter.impl.__GT_CachedPathInfo.call(null,precompiled,params_maker);
}
});
com.rpl.specter.impl.compiled_select_one_STAR_ = (function com$rpl$specter$impl$compiled_select_one_STAR_(path,structure){
var res = com.rpl.specter.impl.compiled_select_STAR_.call(null,path,structure);
if((cljs.core.count.call(null,res) > (1))){
com.rpl.specter.impl.throw_illegal.call(null,"More than one element found for params: ",path,structure);
} else {
}

return cljs.core.first.call(null,res);
});
com.rpl.specter.impl.compiled_select_one_BANG__STAR_ = (function com$rpl$specter$impl$compiled_select_one_BANG__STAR_(path,structure){
var res = com.rpl.specter.impl.compiled_select_STAR_.call(null,path,structure);
if(cljs.core.not_EQ_.call(null,(1),cljs.core.count.call(null,res))){
com.rpl.specter.impl.throw_illegal.call(null,"Expected exactly one element for params: ",path,structure);
} else {
}

return cljs.core.first.call(null,res);
});
com.rpl.specter.impl.compiled_select_first_STAR_ = (function com$rpl$specter$impl$compiled_select_first_STAR_(path,structure){
return cljs.core.first.call(null,com.rpl.specter.impl.compiled_select_STAR_.call(null,path,structure));
});
com.rpl.specter.impl.compiled_setval_STAR_ = (function com$rpl$specter$impl$compiled_setval_STAR_(path,val,structure){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,path,(function (_){
return val;
}),structure);
});
com.rpl.specter.impl.compiled_replace_in_STAR_ = (function com$rpl$specter$impl$compiled_replace_in_STAR_(var_args){
var args__22624__auto__ = [];
var len__22617__auto___26124 = arguments.length;
var i__22618__auto___26125 = (0);
while(true){
if((i__22618__auto___26125 < len__22617__auto___26124)){
args__22624__auto__.push((arguments[i__22618__auto___26125]));

var G__26126 = (i__22618__auto___26125 + (1));
i__22618__auto___26125 = G__26126;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((3) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22625__auto__);
});

com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__26118){
var map__26119 = p__26118;
var map__26119__$1 = ((((!((map__26119 == null)))?((((map__26119.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26119.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26119):map__26119);
var merge_fn = cljs.core.get.call(null,map__26119__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var state = com.rpl.specter.impl.mutable_cell.call(null,null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.compiled_transform_STAR_.call(null,path,((function (state,map__26119,map__26119__$1,merge_fn){
return (function() { 
var G__26127__delegate = function (args){
var res = cljs.core.apply.call(null,transform_fn,args);
if(cljs.core.truth_(res)){
var vec__26121 = res;
var ret = cljs.core.nth.call(null,vec__26121,(0),null);
var user_ret = cljs.core.nth.call(null,vec__26121,(1),null);
com.rpl.specter.impl.set_cell_BANG_.call(null,state,merge_fn.call(null,com.rpl.specter.impl.get_cell.call(null,state),user_ret));

return ret;
} else {
return cljs.core.last.call(null,args);
}
};
var G__26127 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26128__i = 0, G__26128__a = new Array(arguments.length -  0);
while (G__26128__i < G__26128__a.length) {G__26128__a[G__26128__i] = arguments[G__26128__i + 0]; ++G__26128__i;}
  args = new cljs.core.IndexedSeq(G__26128__a,0);
} 
return G__26127__delegate.call(this,args);};
G__26127.cljs$lang$maxFixedArity = 0;
G__26127.cljs$lang$applyTo = (function (arglist__26129){
var args = cljs.core.seq(arglist__26129);
return G__26127__delegate(args);
});
G__26127.cljs$core$IFn$_invoke$arity$variadic = G__26127__delegate;
return G__26127;
})()
;})(state,map__26119,map__26119__$1,merge_fn))
,structure),com.rpl.specter.impl.get_cell.call(null,state)], null);
});

com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$lang$maxFixedArity = (3);

com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$lang$applyTo = (function (seq26114){
var G__26115 = cljs.core.first.call(null,seq26114);
var seq26114__$1 = cljs.core.next.call(null,seq26114);
var G__26116 = cljs.core.first.call(null,seq26114__$1);
var seq26114__$2 = cljs.core.next.call(null,seq26114__$1);
var G__26117 = cljs.core.first.call(null,seq26114__$2);
var seq26114__$3 = cljs.core.next.call(null,seq26114__$2);
return com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__26115,G__26116,G__26117,seq26114__$3);
});


//# sourceMappingURL=impl.js.map?rel=1467159808355