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
var args__22635__auto__ = [];
var len__22628__auto___23198 = arguments.length;
var i__22629__auto___23199 = (0);
while(true){
if((i__22629__auto___23199 < len__22628__auto___23198)){
args__22635__auto__.push((arguments[i__22629__auto___23199]));

var G__23200 = (i__22629__auto___23199 + (1));
i__22629__auto___23199 = G__23200;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic = (function (elems){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,com.rpl.specter.impl.smart_str_STAR_,elems));
});

com.rpl.specter.impl.smart_str.cljs$lang$maxFixedArity = (0);

com.rpl.specter.impl.smart_str.cljs$lang$applyTo = (function (seq23197){
return com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23197));
});

com.rpl.specter.impl.throw_illegal = (function com$rpl$specter$impl$throw_illegal(var_args){
var args__22635__auto__ = [];
var len__22628__auto___23202 = arguments.length;
var i__22629__auto___23203 = (0);
while(true){
if((i__22629__auto___23203 < len__22628__auto___23202)){
args__22635__auto__.push((arguments[i__22629__auto___23203]));

var G__23204 = (i__22629__auto___23203 + (1));
i__22629__auto___23203 = G__23204;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw (new Error(cljs.core.apply.call(null,cljs.core.str,args)));
});

com.rpl.specter.impl.throw_illegal.cljs$lang$maxFixedArity = (0);

com.rpl.specter.impl.throw_illegal.cljs$lang$applyTo = (function (seq23201){
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23201));
});

com.rpl.specter.impl.macroexpand_SINGLEQUOTE_ = (function com$rpl$specter$impl$macroexpand_SINGLEQUOTE_(form){
var orig_eval_fn = cljs.js._STAR_eval_fn_STAR_;
try{cljs.js._STAR_eval_fn_STAR_ = cljs.js.js_eval;

return cljs.js.eval.call(null,cljs.js.empty_state.call(null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","macroexpand","cljs.core/macroexpand",1715305549,null)),(function (){var x__22371__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__22371__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22371__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22371__auto__);
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
var start__22483__auto__ = cljs.core.system_time.call(null);
var ret__22484__auto__ = (function (){var n__22458__auto__ = iters;
var _ = (0);
while(true){
if((_ < n__22458__auto__)){
afn.call(null);

var G__23205 = (_ + (1));
_ = G__23205;
continue;
} else {
return null;
}
break;
}
})();
cljs.core.prn.call(null,[cljs.core.str("Elapsed time: "),cljs.core.str((cljs.core.system_time.call(null) - start__22483__auto__).toFixed((6))),cljs.core.str(" msecs")].join(''));

return ret__22484__auto__;
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

com.rpl.specter.impl.ExecutorFunctions.cljs$lang$ctorPrWriter = (function (this__22097__auto__,writer__22098__auto__,opt__22099__auto__){
return cljs.core._write.call(null,writer__22098__auto__,"com.rpl.specter.impl/ExecutorFunctions");
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
com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22115__auto__,k__22116__auto__){
var self__ = this;
var this__22115__auto____$1 = this;
return cljs.core._lookup.call(null,this__22115__auto____$1,k__22116__auto__,null);
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22117__auto__,k23207,else__22118__auto__){
var self__ = this;
var this__22117__auto____$1 = this;
var G__23209 = (((k23207 instanceof cljs.core.Keyword))?k23207.fqn:null);
switch (G__23209) {
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
return cljs.core.get.call(null,self__.__extmap,k23207,else__22118__auto__);

}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22129__auto__,writer__22130__auto__,opts__22131__auto__){
var self__ = this;
var this__22129__auto____$1 = this;
var pr_pair__22132__auto__ = ((function (this__22129__auto____$1){
return (function (keyval__22133__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22130__auto__,cljs.core.pr_writer,""," ","",opts__22131__auto__,keyval__22133__auto__);
});})(this__22129__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22130__auto__,pr_pair__22132__auto__,"#com.rpl.specter.impl.TransformFunctions{",", ","}",opts__22131__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"executors","executors",-331073403),self__.executors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selector","selector",762528866),self__.selector],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transformer","transformer",-1493470620),self__.transformer],null))], null),self__.__extmap));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23206){
var self__ = this;
var G__23206__$1 = this;
return (new cljs.core.RecordIter((0),G__23206__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"executors","executors",-331073403),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Keyword(null,"transformer","transformer",-1493470620)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22113__auto__){
var self__ = this;
var this__22113__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22109__auto__){
var self__ = this;
var this__22109__auto____$1 = this;
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22119__auto__){
var self__ = this;
var this__22119__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22110__auto__){
var self__ = this;
var this__22110__auto____$1 = this;
var h__21882__auto__ = self__.__hash;
if(!((h__21882__auto__ == null))){
return h__21882__auto__;
} else {
var h__21882__auto____$1 = cljs.core.hash_imap.call(null,this__22110__auto____$1);
self__.__hash = h__21882__auto____$1;

return h__21882__auto____$1;
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22111__auto__,other__22112__auto__){
var self__ = this;
var this__22111__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21433__auto__ = other__22112__auto__;
if(cljs.core.truth_(and__21433__auto__)){
var and__21433__auto____$1 = (this__22111__auto____$1.constructor === other__22112__auto__.constructor);
if(and__21433__auto____$1){
return cljs.core.equiv_map.call(null,this__22111__auto____$1,other__22112__auto__);
} else {
return and__21433__auto____$1;
}
} else {
return and__21433__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22124__auto__,k__22125__auto__){
var self__ = this;
var this__22124__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selector","selector",762528866),null,new cljs.core.Keyword(null,"transformer","transformer",-1493470620),null,new cljs.core.Keyword(null,"executors","executors",-331073403),null], null), null),k__22125__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22124__auto____$1),self__.__meta),k__22125__auto__);
} else {
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22125__auto__)),null));
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22122__auto__,k__22123__auto__,G__23206){
var self__ = this;
var this__22122__auto____$1 = this;
var pred__23210 = cljs.core.keyword_identical_QMARK_;
var expr__23211 = k__22123__auto__;
if(cljs.core.truth_(pred__23210.call(null,new cljs.core.Keyword(null,"executors","executors",-331073403),expr__23211))){
return (new com.rpl.specter.impl.TransformFunctions(G__23206,self__.selector,self__.transformer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23210.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),expr__23211))){
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,G__23206,self__.transformer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23210.call(null,new cljs.core.Keyword(null,"transformer","transformer",-1493470620),expr__23211))){
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,G__23206,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22123__auto__,G__23206),null));
}
}
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22127__auto__){
var self__ = this;
var this__22127__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"executors","executors",-331073403),self__.executors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selector","selector",762528866),self__.selector],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transformer","transformer",-1493470620),self__.transformer],null))], null),self__.__extmap));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22114__auto__,G__23206){
var self__ = this;
var this__22114__auto____$1 = this;
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,G__23206,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22120__auto__,entry__22121__auto__){
var self__ = this;
var this__22120__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22121__auto__)){
return cljs.core._assoc.call(null,this__22120__auto____$1,cljs.core._nth.call(null,entry__22121__auto__,(0)),cljs.core._nth.call(null,entry__22121__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22120__auto____$1,entry__22121__auto__);
}
});

com.rpl.specter.impl.TransformFunctions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"executors","executors",1309458124,null),new cljs.core.Symbol(null,"selector","selector",-1891906903,null),new cljs.core.Symbol(null,"transformer","transformer",147060907,null)], null);
});

com.rpl.specter.impl.TransformFunctions.cljs$lang$type = true;

com.rpl.specter.impl.TransformFunctions.cljs$lang$ctorPrSeq = (function (this__22151__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/TransformFunctions");
});

com.rpl.specter.impl.TransformFunctions.cljs$lang$ctorPrWriter = (function (this__22151__auto__,writer__22152__auto__){
return cljs.core._write.call(null,writer__22152__auto__,"com.rpl.specter.impl/TransformFunctions");
});

com.rpl.specter.impl.__GT_TransformFunctions = (function com$rpl$specter$impl$__GT_TransformFunctions(executors,selector,transformer){
return (new com.rpl.specter.impl.TransformFunctions(executors,selector,transformer,null,null,null));
});

com.rpl.specter.impl.map__GT_TransformFunctions = (function com$rpl$specter$impl$map__GT_TransformFunctions(G__23208){
return (new com.rpl.specter.impl.TransformFunctions(new cljs.core.Keyword(null,"executors","executors",-331073403).cljs$core$IFn$_invoke$arity$1(G__23208),new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(G__23208),new cljs.core.Keyword(null,"transformer","transformer",-1493470620).cljs$core$IFn$_invoke$arity$1(G__23208),null,cljs.core.dissoc.call(null,G__23208,new cljs.core.Keyword(null,"executors","executors",-331073403),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Keyword(null,"transformer","transformer",-1493470620)),null));
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
com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22115__auto__,k__22116__auto__){
var self__ = this;
var this__22115__auto____$1 = this;
return cljs.core._lookup.call(null,this__22115__auto____$1,k__22116__auto__,null);
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22117__auto__,k23215,else__22118__auto__){
var self__ = this;
var this__22117__auto____$1 = this;
var G__23217 = (((k23215 instanceof cljs.core.Keyword))?k23215.fqn:null);
switch (G__23217) {
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
return cljs.core.get.call(null,self__.__extmap,k23215,else__22118__auto__);

}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22129__auto__,writer__22130__auto__,opts__22131__auto__){
var self__ = this;
var this__22129__auto____$1 = this;
var pr_pair__22132__auto__ = ((function (this__22129__auto____$1){
return (function (keyval__22133__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22130__auto__,cljs.core.pr_writer,""," ","",opts__22131__auto__,keyval__22133__auto__);
});})(this__22129__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22130__auto__,pr_pair__22132__auto__,"#com.rpl.specter.impl.CompiledPath{",", ","}",opts__22131__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-idx","params-idx",340984624),self__.params_idx],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23214){
var self__ = this;
var G__23214__$1 = this;
return (new cljs.core.RecordIter((0),G__23214__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params-idx","params-idx",340984624)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22113__auto__){
var self__ = this;
var this__22113__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22109__auto__){
var self__ = this;
var this__22109__auto____$1 = this;
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22119__auto__){
var self__ = this;
var this__22119__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22110__auto__){
var self__ = this;
var this__22110__auto____$1 = this;
var h__21882__auto__ = self__.__hash;
if(!((h__21882__auto__ == null))){
return h__21882__auto__;
} else {
var h__21882__auto____$1 = cljs.core.hash_imap.call(null,this__22110__auto____$1);
self__.__hash = h__21882__auto____$1;

return h__21882__auto____$1;
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22111__auto__,other__22112__auto__){
var self__ = this;
var this__22111__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21433__auto__ = other__22112__auto__;
if(cljs.core.truth_(and__21433__auto__)){
var and__21433__auto____$1 = (this__22111__auto____$1.constructor === other__22112__auto__.constructor);
if(and__21433__auto____$1){
return cljs.core.equiv_map.call(null,this__22111__auto____$1,other__22112__auto__);
} else {
return and__21433__auto____$1;
}
} else {
return and__21433__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22124__auto__,k__22125__auto__){
var self__ = this;
var this__22124__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"params-idx","params-idx",340984624),null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),null], null), null),k__22125__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22124__auto____$1),self__.__meta),k__22125__auto__);
} else {
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22125__auto__)),null));
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22122__auto__,k__22123__auto__,G__23214){
var self__ = this;
var this__22122__auto____$1 = this;
var pred__23218 = cljs.core.keyword_identical_QMARK_;
var expr__23219 = k__22123__auto__;
if(cljs.core.truth_(pred__23218.call(null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),expr__23219))){
return (new com.rpl.specter.impl.CompiledPath(G__23214,self__.params,self__.params_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23218.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__23219))){
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,G__23214,self__.params_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23218.call(null,new cljs.core.Keyword(null,"params-idx","params-idx",340984624),expr__23219))){
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,G__23214,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22123__auto__,G__23214),null));
}
}
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22127__auto__){
var self__ = this;
var this__22127__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-idx","params-idx",340984624),self__.params_idx],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22114__auto__,G__23214){
var self__ = this;
var this__22114__auto____$1 = this;
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,G__23214,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22120__auto__,entry__22121__auto__){
var self__ = this;
var this__22120__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22121__auto__)){
return cljs.core._assoc.call(null,this__22120__auto____$1,cljs.core._nth.call(null,entry__22121__auto__,(0)),cljs.core._nth.call(null,entry__22121__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22120__auto____$1,entry__22121__auto__);
}
});

com.rpl.specter.impl.CompiledPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transform-fns","transform-fns",-1985393120,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"params-idx","params-idx",1981516151,null)], null);
});

com.rpl.specter.impl.CompiledPath.cljs$lang$type = true;

com.rpl.specter.impl.CompiledPath.cljs$lang$ctorPrSeq = (function (this__22151__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/CompiledPath");
});

com.rpl.specter.impl.CompiledPath.cljs$lang$ctorPrWriter = (function (this__22151__auto__,writer__22152__auto__){
return cljs.core._write.call(null,writer__22152__auto__,"com.rpl.specter.impl/CompiledPath");
});

com.rpl.specter.impl.__GT_CompiledPath = (function com$rpl$specter$impl$__GT_CompiledPath(transform_fns,params,params_idx){
return (new com.rpl.specter.impl.CompiledPath(transform_fns,params,params_idx,null,null,null));
});

com.rpl.specter.impl.map__GT_CompiledPath = (function com$rpl$specter$impl$map__GT_CompiledPath(G__23216){
return (new com.rpl.specter.impl.CompiledPath(new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(G__23216),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__23216),new cljs.core.Keyword(null,"params-idx","params-idx",340984624).cljs$core$IFn$_invoke$arity$1(G__23216),null,cljs.core.dissoc.call(null,G__23216,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params-idx","params-idx",340984624)),null));
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
com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22115__auto__,k__22116__auto__){
var self__ = this;
var this__22115__auto____$1 = this;
return cljs.core._lookup.call(null,this__22115__auto____$1,k__22116__auto__,null);
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22117__auto__,k23434,else__22118__auto__){
var self__ = this;
var this__22117__auto____$1 = this;
var G__23437 = (((k23434 instanceof cljs.core.Keyword))?k23434.fqn:null);
switch (G__23437) {
case "transform-fns":
return self__.transform_fns;

break;
case "num-needed-params":
return self__.num_needed_params;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23434,else__22118__auto__);

}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22129__auto__,writer__22130__auto__,opts__22131__auto__){
var self__ = this;
var this__22129__auto____$1 = this;
var pr_pair__22132__auto__ = ((function (this__22129__auto____$1){
return (function (keyval__22133__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22130__auto__,cljs.core.pr_writer,""," ","",opts__22131__auto__,keyval__22133__auto__);
});})(this__22129__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22130__auto__,pr_pair__22132__auto__,"#com.rpl.specter.impl.ParamsNeededPath{",", ","}",opts__22131__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),self__.num_needed_params],null))], null),self__.__extmap));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23433){
var self__ = this;
var G__23433__$1 = this;
return (new cljs.core.RecordIter((0),G__23433__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.call = (function() {
var G__23442 = null;
var G__23442__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var this__23147__auto__ = self____$1;
var array23222 = cljs.core.object_array.call(null,(0));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});
var G__23442__2 = (function (self__,G__23223){
var self__ = this;
var self____$1 = this;
var this__23147__auto__ = self____$1;
var array23222 = cljs.core.object_array.call(null,(1));
(array23222[(0)] = G__23223);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});
var G__23442__3 = (function (self__,G__23224,G__23225){
var self__ = this;
var self____$1 = this;
var this__23147__auto__ = self____$1;
var array23222 = cljs.core.object_array.call(null,(2));
(array23222[(0)] = G__23224);

(array23222[(1)] = G__23225);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});
var G__23442__4 = (function (self__,G__23226,G__23227,G__23228){
var self__ = this;
var self____$1 = this;
var this__23147__auto__ = self____$1;
var array23222 = cljs.core.object_array.call(null,(3));
(array23222[(0)] = G__23226);

(array23222[(1)] = G__23227);

(array23222[(2)] = G__23228);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});
var G__23442__5 = (function (self__,G__23229,G__23230,G__23231,G__23232){
var self__ = this;
var self____$1 = this;
var this__23147__auto__ = self____$1;
var array23222 = cljs.core.object_array.call(null,(4));
(array23222[(0)] = G__23229);

(array23222[(1)] = G__23230);

(array23222[(2)] = G__23231);

(array23222[(3)] = G__23232);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});
var G__23442__6 = (function (self__,G__23233,G__23234,G__23235,G__23236,G__23237){
var self__ = this;
var self____$1 = this;
var this__23147__auto__ = self____$1;
var array23222 = cljs.core.object_array.call(null,(5));
(array23222[(0)] = G__23233);

(array23222[(1)] = G__23234);

(array23222[(2)] = G__23235);

(array23222[(3)] = G__23236);

(array23222[(4)] = G__23237);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});
var G__23442__7 = (function (self__,G__23238,G__23239,G__23240,G__23241,G__23242,G__23243){
var self__ = this;
var self____$1 = this;
var this__23147__auto__ = self____$1;
var array23222 = cljs.core.object_array.call(null,(6));
(array23222[(0)] = G__23238);

(array23222[(1)] = G__23239);

(array23222[(2)] = G__23240);

(array23222[(3)] = G__23241);

(array23222[(4)] = G__23242);

(array23222[(5)] = G__23243);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});
var G__23442__8 = (function (self__,G__23244,G__23245,G__23246,G__23247,G__23248,G__23249,G__23250){
var self__ = this;
var self____$1 = this;
var this__23147__auto__ = self____$1;
var array23222 = cljs.core.object_array.call(null,(7));
(array23222[(0)] = G__23244);

(array23222[(1)] = G__23245);

(array23222[(2)] = G__23246);

(array23222[(3)] = G__23247);

(array23222[(4)] = G__23248);

(array23222[(5)] = G__23249);

(array23222[(6)] = G__23250);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});
var G__23442__9 = (function (self__,G__23251,G__23252,G__23253,G__23254,G__23255,G__23256,G__23257,G__23258){
var self__ = this;
var self____$1 = this;
var this__23147__auto__ = self____$1;
var array23222 = cljs.core.object_array.call(null,(8));
(array23222[(0)] = G__23251);

(array23222[(1)] = G__23252);

(array23222[(2)] = G__23253);

(array23222[(3)] = G__23254);

(array23222[(4)] = G__23255);

(array23222[(5)] = G__23256);

(array23222[(6)] = G__23257);

(array23222[(7)] = G__23258);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});
var G__23442__10 = (function (self__,G__23259,G__23260,G__23261,G__23262,G__23263,G__23264,G__23265,G__23266,G__23267){
var self__ = this;
var self____$1 = this;
var this__23147__auto__ = self____$1;
var array23222 = cljs.core.object_array.call(null,(9));
(array23222[(0)] = G__23259);

(array23222[(1)] = G__23260);

(array23222[(2)] = G__23261);

(array23222[(3)] = G__23262);

(array23222[(4)] = G__23263);

(array23222[(5)] = G__23264);

(array23222[(6)] = G__23265);

(array23222[(7)] = G__23266);

(array23222[(8)] = G__23267);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});
var G__23442__11 = (function (self__,G__23268,G__23269,G__23270,G__23271,G__23272,G__23273,G__23274,G__23275,G__23276,G__23277){
var self__ = this;
var self____$1 = this;
var this__23147__auto__ = self____$1;
var array23222 = cljs.core.object_array.call(null,(10));
(array23222[(0)] = G__23268);

(array23222[(1)] = G__23269);

(array23222[(2)] = G__23270);

(array23222[(3)] = G__23271);

(array23222[(4)] = G__23272);

(array23222[(5)] = G__23273);

(array23222[(6)] = G__23274);

(array23222[(7)] = G__23275);

(array23222[(8)] = G__23276);

(array23222[(9)] = G__23277);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});
var G__23442__12 = (function (self__,G__23278,G__23279,G__23280,G__23281,G__23282,G__23283,G__23284,G__23285,G__23286,G__23287,G__23288){
var self__ = this;
var self____$1 = this;
var this__23147__auto__ = self____$1;
var array23222 = cljs.core.object_array.call(null,(11));
(array23222[(0)] = G__23278);

(array23222[(1)] = G__23279);

(array23222[(2)] = G__23280);

(array23222[(3)] = G__23281);

(array23222[(4)] = G__23282);

(array23222[(5)] = G__23283);

(array23222[(6)] = G__23284);

(array23222[(7)] = G__23285);

(array23222[(8)] = G__23286);

(array23222[(9)] = G__23287);

(array23222[(10)] = G__23288);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});
var G__23442__13 = (function (self__,G__23289,G__23290,G__23291,G__23292,G__23293,G__23294,G__23295,G__23296,G__23297,G__23298,G__23299,G__23300){
var self__ = this;
var self____$1 = this;
var this__23147__auto__ = self____$1;
var array23222 = cljs.core.object_array.call(null,(12));
(array23222[(0)] = G__23289);

(array23222[(1)] = G__23290);

(array23222[(2)] = G__23291);

(array23222[(3)] = G__23292);

(array23222[(4)] = G__23293);

(array23222[(5)] = G__23294);

(array23222[(6)] = G__23295);

(array23222[(7)] = G__23296);

(array23222[(8)] = G__23297);

(array23222[(9)] = G__23298);

(array23222[(10)] = G__23299);

(array23222[(11)] = G__23300);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});
var G__23442__14 = (function (self__,G__23301,G__23302,G__23303,G__23304,G__23305,G__23306,G__23307,G__23308,G__23309,G__23310,G__23311,G__23312,G__23313){
var self__ = this;
var self____$1 = this;
var this__23147__auto__ = self____$1;
var array23222 = cljs.core.object_array.call(null,(13));
(array23222[(0)] = G__23301);

(array23222[(1)] = G__23302);

(array23222[(2)] = G__23303);

(array23222[(3)] = G__23304);

(array23222[(4)] = G__23305);

(array23222[(5)] = G__23306);

(array23222[(6)] = G__23307);

(array23222[(7)] = G__23308);

(array23222[(8)] = G__23309);

(array23222[(9)] = G__23310);

(array23222[(10)] = G__23311);

(array23222[(11)] = G__23312);

(array23222[(12)] = G__23313);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});
var G__23442__15 = (function (self__,G__23314,G__23315,G__23316,G__23317,G__23318,G__23319,G__23320,G__23321,G__23322,G__23323,G__23324,G__23325,G__23326,G__23327){
var self__ = this;
var self____$1 = this;
var this__23147__auto__ = self____$1;
var array23222 = cljs.core.object_array.call(null,(14));
(array23222[(0)] = G__23314);

(array23222[(1)] = G__23315);

(array23222[(2)] = G__23316);

(array23222[(3)] = G__23317);

(array23222[(4)] = G__23318);

(array23222[(5)] = G__23319);

(array23222[(6)] = G__23320);

(array23222[(7)] = G__23321);

(array23222[(8)] = G__23322);

(array23222[(9)] = G__23323);

(array23222[(10)] = G__23324);

(array23222[(11)] = G__23325);

(array23222[(12)] = G__23326);

(array23222[(13)] = G__23327);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});
var G__23442__16 = (function (self__,G__23328,G__23329,G__23330,G__23331,G__23332,G__23333,G__23334,G__23335,G__23336,G__23337,G__23338,G__23339,G__23340,G__23341,G__23342){
var self__ = this;
var self____$1 = this;
var this__23147__auto__ = self____$1;
var array23222 = cljs.core.object_array.call(null,(15));
(array23222[(0)] = G__23328);

(array23222[(1)] = G__23329);

(array23222[(2)] = G__23330);

(array23222[(3)] = G__23331);

(array23222[(4)] = G__23332);

(array23222[(5)] = G__23333);

(array23222[(6)] = G__23334);

(array23222[(7)] = G__23335);

(array23222[(8)] = G__23336);

(array23222[(9)] = G__23337);

(array23222[(10)] = G__23338);

(array23222[(11)] = G__23339);

(array23222[(12)] = G__23340);

(array23222[(13)] = G__23341);

(array23222[(14)] = G__23342);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});
var G__23442__17 = (function (self__,G__23343,G__23344,G__23345,G__23346,G__23347,G__23348,G__23349,G__23350,G__23351,G__23352,G__23353,G__23354,G__23355,G__23356,G__23357,G__23358){
var self__ = this;
var self____$1 = this;
var this__23147__auto__ = self____$1;
var array23222 = cljs.core.object_array.call(null,(16));
(array23222[(0)] = G__23343);

(array23222[(1)] = G__23344);

(array23222[(2)] = G__23345);

(array23222[(3)] = G__23346);

(array23222[(4)] = G__23347);

(array23222[(5)] = G__23348);

(array23222[(6)] = G__23349);

(array23222[(7)] = G__23350);

(array23222[(8)] = G__23351);

(array23222[(9)] = G__23352);

(array23222[(10)] = G__23353);

(array23222[(11)] = G__23354);

(array23222[(12)] = G__23355);

(array23222[(13)] = G__23356);

(array23222[(14)] = G__23357);

(array23222[(15)] = G__23358);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});
var G__23442__18 = (function (self__,G__23359,G__23360,G__23361,G__23362,G__23363,G__23364,G__23365,G__23366,G__23367,G__23368,G__23369,G__23370,G__23371,G__23372,G__23373,G__23374,G__23375){
var self__ = this;
var self____$1 = this;
var this__23147__auto__ = self____$1;
var array23222 = cljs.core.object_array.call(null,(17));
(array23222[(0)] = G__23359);

(array23222[(1)] = G__23360);

(array23222[(2)] = G__23361);

(array23222[(3)] = G__23362);

(array23222[(4)] = G__23363);

(array23222[(5)] = G__23364);

(array23222[(6)] = G__23365);

(array23222[(7)] = G__23366);

(array23222[(8)] = G__23367);

(array23222[(9)] = G__23368);

(array23222[(10)] = G__23369);

(array23222[(11)] = G__23370);

(array23222[(12)] = G__23371);

(array23222[(13)] = G__23372);

(array23222[(14)] = G__23373);

(array23222[(15)] = G__23374);

(array23222[(16)] = G__23375);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});
var G__23442__19 = (function (self__,G__23376,G__23377,G__23378,G__23379,G__23380,G__23381,G__23382,G__23383,G__23384,G__23385,G__23386,G__23387,G__23388,G__23389,G__23390,G__23391,G__23392,G__23393){
var self__ = this;
var self____$1 = this;
var this__23147__auto__ = self____$1;
var array23222 = cljs.core.object_array.call(null,(18));
(array23222[(0)] = G__23376);

(array23222[(1)] = G__23377);

(array23222[(2)] = G__23378);

(array23222[(3)] = G__23379);

(array23222[(4)] = G__23380);

(array23222[(5)] = G__23381);

(array23222[(6)] = G__23382);

(array23222[(7)] = G__23383);

(array23222[(8)] = G__23384);

(array23222[(9)] = G__23385);

(array23222[(10)] = G__23386);

(array23222[(11)] = G__23387);

(array23222[(12)] = G__23388);

(array23222[(13)] = G__23389);

(array23222[(14)] = G__23390);

(array23222[(15)] = G__23391);

(array23222[(16)] = G__23392);

(array23222[(17)] = G__23393);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});
var G__23442__20 = (function (self__,G__23394,G__23395,G__23396,G__23397,G__23398,G__23399,G__23400,G__23401,G__23402,G__23403,G__23404,G__23405,G__23406,G__23407,G__23408,G__23409,G__23410,G__23411,G__23412){
var self__ = this;
var self____$1 = this;
var this__23147__auto__ = self____$1;
var array23222 = cljs.core.object_array.call(null,(19));
(array23222[(0)] = G__23394);

(array23222[(1)] = G__23395);

(array23222[(2)] = G__23396);

(array23222[(3)] = G__23397);

(array23222[(4)] = G__23398);

(array23222[(5)] = G__23399);

(array23222[(6)] = G__23400);

(array23222[(7)] = G__23401);

(array23222[(8)] = G__23402);

(array23222[(9)] = G__23403);

(array23222[(10)] = G__23404);

(array23222[(11)] = G__23405);

(array23222[(12)] = G__23406);

(array23222[(13)] = G__23407);

(array23222[(14)] = G__23408);

(array23222[(15)] = G__23409);

(array23222[(16)] = G__23410);

(array23222[(17)] = G__23411);

(array23222[(18)] = G__23412);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});
var G__23442__21 = (function (self__,G__23413,G__23414,G__23415,G__23416,G__23417,G__23418,G__23419,G__23420,G__23421,G__23422,G__23423,G__23424,G__23425,G__23426,G__23427,G__23428,G__23429,G__23430,G__23431,G__23432){
var self__ = this;
var self____$1 = this;
var this__23147__auto__ = self____$1;
var array23222 = cljs.core.object_array.call(null,(20));
(array23222[(0)] = G__23413);

(array23222[(1)] = G__23414);

(array23222[(2)] = G__23415);

(array23222[(3)] = G__23416);

(array23222[(4)] = G__23417);

(array23222[(5)] = G__23418);

(array23222[(6)] = G__23419);

(array23222[(7)] = G__23420);

(array23222[(8)] = G__23421);

(array23222[(9)] = G__23422);

(array23222[(10)] = G__23423);

(array23222[(11)] = G__23424);

(array23222[(12)] = G__23425);

(array23222[(13)] = G__23426);

(array23222[(14)] = G__23427);

(array23222[(15)] = G__23428);

(array23222[(16)] = G__23429);

(array23222[(17)] = G__23430);

(array23222[(18)] = G__23431);

(array23222[(19)] = G__23432);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});
var G__23442__22 = (function (self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var a = cljs.core.object_array.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20], null),rest));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this$,a,(0));
});
G__23442 = function(self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest){
switch(arguments.length){
case 1:
return G__23442__1.call(this,self__);
case 2:
return G__23442__2.call(this,self__,p01);
case 3:
return G__23442__3.call(this,self__,p01,p02);
case 4:
return G__23442__4.call(this,self__,p01,p02,p03);
case 5:
return G__23442__5.call(this,self__,p01,p02,p03,p04);
case 6:
return G__23442__6.call(this,self__,p01,p02,p03,p04,p05);
case 7:
return G__23442__7.call(this,self__,p01,p02,p03,p04,p05,p06);
case 8:
return G__23442__8.call(this,self__,p01,p02,p03,p04,p05,p06,p07);
case 9:
return G__23442__9.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08);
case 10:
return G__23442__10.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09);
case 11:
return G__23442__11.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10);
case 12:
return G__23442__12.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11);
case 13:
return G__23442__13.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12);
case 14:
return G__23442__14.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13);
case 15:
return G__23442__15.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14);
case 16:
return G__23442__16.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15);
case 17:
return G__23442__17.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16);
case 18:
return G__23442__18.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17);
case 19:
return G__23442__19.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18);
case 20:
return G__23442__20.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19);
case 21:
return G__23442__21.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20);
case 22:
return G__23442__22.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23442.cljs$core$IFn$_invoke$arity$1 = G__23442__1;
G__23442.cljs$core$IFn$_invoke$arity$2 = G__23442__2;
G__23442.cljs$core$IFn$_invoke$arity$3 = G__23442__3;
G__23442.cljs$core$IFn$_invoke$arity$4 = G__23442__4;
G__23442.cljs$core$IFn$_invoke$arity$5 = G__23442__5;
G__23442.cljs$core$IFn$_invoke$arity$6 = G__23442__6;
G__23442.cljs$core$IFn$_invoke$arity$7 = G__23442__7;
G__23442.cljs$core$IFn$_invoke$arity$8 = G__23442__8;
G__23442.cljs$core$IFn$_invoke$arity$9 = G__23442__9;
G__23442.cljs$core$IFn$_invoke$arity$10 = G__23442__10;
G__23442.cljs$core$IFn$_invoke$arity$11 = G__23442__11;
G__23442.cljs$core$IFn$_invoke$arity$12 = G__23442__12;
G__23442.cljs$core$IFn$_invoke$arity$13 = G__23442__13;
G__23442.cljs$core$IFn$_invoke$arity$14 = G__23442__14;
G__23442.cljs$core$IFn$_invoke$arity$15 = G__23442__15;
G__23442.cljs$core$IFn$_invoke$arity$16 = G__23442__16;
G__23442.cljs$core$IFn$_invoke$arity$17 = G__23442__17;
G__23442.cljs$core$IFn$_invoke$arity$18 = G__23442__18;
G__23442.cljs$core$IFn$_invoke$arity$19 = G__23442__19;
G__23442.cljs$core$IFn$_invoke$arity$20 = G__23442__20;
G__23442.cljs$core$IFn$_invoke$arity$21 = G__23442__21;
G__23442.cljs$core$IFn$_invoke$arity$22 = G__23442__22;
return G__23442;
})()
;

com.rpl.specter.impl.ParamsNeededPath.prototype.apply = (function (self__,args23436){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args23436)));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this__23147__auto__ = this;
var array23222 = cljs.core.object_array.call(null,(0));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$1 = (function (G__23223){
var self__ = this;
var this__23147__auto__ = this;
var array23222 = cljs.core.object_array.call(null,(1));
(array23222[(0)] = G__23223);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$2 = (function (G__23224,G__23225){
var self__ = this;
var this__23147__auto__ = this;
var array23222 = cljs.core.object_array.call(null,(2));
(array23222[(0)] = G__23224);

(array23222[(1)] = G__23225);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$3 = (function (G__23226,G__23227,G__23228){
var self__ = this;
var this__23147__auto__ = this;
var array23222 = cljs.core.object_array.call(null,(3));
(array23222[(0)] = G__23226);

(array23222[(1)] = G__23227);

(array23222[(2)] = G__23228);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$4 = (function (G__23229,G__23230,G__23231,G__23232){
var self__ = this;
var this__23147__auto__ = this;
var array23222 = cljs.core.object_array.call(null,(4));
(array23222[(0)] = G__23229);

(array23222[(1)] = G__23230);

(array23222[(2)] = G__23231);

(array23222[(3)] = G__23232);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$5 = (function (G__23233,G__23234,G__23235,G__23236,G__23237){
var self__ = this;
var this__23147__auto__ = this;
var array23222 = cljs.core.object_array.call(null,(5));
(array23222[(0)] = G__23233);

(array23222[(1)] = G__23234);

(array23222[(2)] = G__23235);

(array23222[(3)] = G__23236);

(array23222[(4)] = G__23237);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$6 = (function (G__23238,G__23239,G__23240,G__23241,G__23242,G__23243){
var self__ = this;
var this__23147__auto__ = this;
var array23222 = cljs.core.object_array.call(null,(6));
(array23222[(0)] = G__23238);

(array23222[(1)] = G__23239);

(array23222[(2)] = G__23240);

(array23222[(3)] = G__23241);

(array23222[(4)] = G__23242);

(array23222[(5)] = G__23243);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$7 = (function (G__23244,G__23245,G__23246,G__23247,G__23248,G__23249,G__23250){
var self__ = this;
var this__23147__auto__ = this;
var array23222 = cljs.core.object_array.call(null,(7));
(array23222[(0)] = G__23244);

(array23222[(1)] = G__23245);

(array23222[(2)] = G__23246);

(array23222[(3)] = G__23247);

(array23222[(4)] = G__23248);

(array23222[(5)] = G__23249);

(array23222[(6)] = G__23250);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$8 = (function (G__23251,G__23252,G__23253,G__23254,G__23255,G__23256,G__23257,G__23258){
var self__ = this;
var this__23147__auto__ = this;
var array23222 = cljs.core.object_array.call(null,(8));
(array23222[(0)] = G__23251);

(array23222[(1)] = G__23252);

(array23222[(2)] = G__23253);

(array23222[(3)] = G__23254);

(array23222[(4)] = G__23255);

(array23222[(5)] = G__23256);

(array23222[(6)] = G__23257);

(array23222[(7)] = G__23258);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$9 = (function (G__23259,G__23260,G__23261,G__23262,G__23263,G__23264,G__23265,G__23266,G__23267){
var self__ = this;
var this__23147__auto__ = this;
var array23222 = cljs.core.object_array.call(null,(9));
(array23222[(0)] = G__23259);

(array23222[(1)] = G__23260);

(array23222[(2)] = G__23261);

(array23222[(3)] = G__23262);

(array23222[(4)] = G__23263);

(array23222[(5)] = G__23264);

(array23222[(6)] = G__23265);

(array23222[(7)] = G__23266);

(array23222[(8)] = G__23267);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$10 = (function (G__23268,G__23269,G__23270,G__23271,G__23272,G__23273,G__23274,G__23275,G__23276,G__23277){
var self__ = this;
var this__23147__auto__ = this;
var array23222 = cljs.core.object_array.call(null,(10));
(array23222[(0)] = G__23268);

(array23222[(1)] = G__23269);

(array23222[(2)] = G__23270);

(array23222[(3)] = G__23271);

(array23222[(4)] = G__23272);

(array23222[(5)] = G__23273);

(array23222[(6)] = G__23274);

(array23222[(7)] = G__23275);

(array23222[(8)] = G__23276);

(array23222[(9)] = G__23277);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$11 = (function (G__23278,G__23279,G__23280,G__23281,G__23282,G__23283,G__23284,G__23285,G__23286,G__23287,G__23288){
var self__ = this;
var this__23147__auto__ = this;
var array23222 = cljs.core.object_array.call(null,(11));
(array23222[(0)] = G__23278);

(array23222[(1)] = G__23279);

(array23222[(2)] = G__23280);

(array23222[(3)] = G__23281);

(array23222[(4)] = G__23282);

(array23222[(5)] = G__23283);

(array23222[(6)] = G__23284);

(array23222[(7)] = G__23285);

(array23222[(8)] = G__23286);

(array23222[(9)] = G__23287);

(array23222[(10)] = G__23288);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$12 = (function (G__23289,G__23290,G__23291,G__23292,G__23293,G__23294,G__23295,G__23296,G__23297,G__23298,G__23299,G__23300){
var self__ = this;
var this__23147__auto__ = this;
var array23222 = cljs.core.object_array.call(null,(12));
(array23222[(0)] = G__23289);

(array23222[(1)] = G__23290);

(array23222[(2)] = G__23291);

(array23222[(3)] = G__23292);

(array23222[(4)] = G__23293);

(array23222[(5)] = G__23294);

(array23222[(6)] = G__23295);

(array23222[(7)] = G__23296);

(array23222[(8)] = G__23297);

(array23222[(9)] = G__23298);

(array23222[(10)] = G__23299);

(array23222[(11)] = G__23300);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$13 = (function (G__23301,G__23302,G__23303,G__23304,G__23305,G__23306,G__23307,G__23308,G__23309,G__23310,G__23311,G__23312,G__23313){
var self__ = this;
var this__23147__auto__ = this;
var array23222 = cljs.core.object_array.call(null,(13));
(array23222[(0)] = G__23301);

(array23222[(1)] = G__23302);

(array23222[(2)] = G__23303);

(array23222[(3)] = G__23304);

(array23222[(4)] = G__23305);

(array23222[(5)] = G__23306);

(array23222[(6)] = G__23307);

(array23222[(7)] = G__23308);

(array23222[(8)] = G__23309);

(array23222[(9)] = G__23310);

(array23222[(10)] = G__23311);

(array23222[(11)] = G__23312);

(array23222[(12)] = G__23313);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$14 = (function (G__23314,G__23315,G__23316,G__23317,G__23318,G__23319,G__23320,G__23321,G__23322,G__23323,G__23324,G__23325,G__23326,G__23327){
var self__ = this;
var this__23147__auto__ = this;
var array23222 = cljs.core.object_array.call(null,(14));
(array23222[(0)] = G__23314);

(array23222[(1)] = G__23315);

(array23222[(2)] = G__23316);

(array23222[(3)] = G__23317);

(array23222[(4)] = G__23318);

(array23222[(5)] = G__23319);

(array23222[(6)] = G__23320);

(array23222[(7)] = G__23321);

(array23222[(8)] = G__23322);

(array23222[(9)] = G__23323);

(array23222[(10)] = G__23324);

(array23222[(11)] = G__23325);

(array23222[(12)] = G__23326);

(array23222[(13)] = G__23327);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$15 = (function (G__23328,G__23329,G__23330,G__23331,G__23332,G__23333,G__23334,G__23335,G__23336,G__23337,G__23338,G__23339,G__23340,G__23341,G__23342){
var self__ = this;
var this__23147__auto__ = this;
var array23222 = cljs.core.object_array.call(null,(15));
(array23222[(0)] = G__23328);

(array23222[(1)] = G__23329);

(array23222[(2)] = G__23330);

(array23222[(3)] = G__23331);

(array23222[(4)] = G__23332);

(array23222[(5)] = G__23333);

(array23222[(6)] = G__23334);

(array23222[(7)] = G__23335);

(array23222[(8)] = G__23336);

(array23222[(9)] = G__23337);

(array23222[(10)] = G__23338);

(array23222[(11)] = G__23339);

(array23222[(12)] = G__23340);

(array23222[(13)] = G__23341);

(array23222[(14)] = G__23342);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$16 = (function (G__23343,G__23344,G__23345,G__23346,G__23347,G__23348,G__23349,G__23350,G__23351,G__23352,G__23353,G__23354,G__23355,G__23356,G__23357,G__23358){
var self__ = this;
var this__23147__auto__ = this;
var array23222 = cljs.core.object_array.call(null,(16));
(array23222[(0)] = G__23343);

(array23222[(1)] = G__23344);

(array23222[(2)] = G__23345);

(array23222[(3)] = G__23346);

(array23222[(4)] = G__23347);

(array23222[(5)] = G__23348);

(array23222[(6)] = G__23349);

(array23222[(7)] = G__23350);

(array23222[(8)] = G__23351);

(array23222[(9)] = G__23352);

(array23222[(10)] = G__23353);

(array23222[(11)] = G__23354);

(array23222[(12)] = G__23355);

(array23222[(13)] = G__23356);

(array23222[(14)] = G__23357);

(array23222[(15)] = G__23358);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$17 = (function (G__23359,G__23360,G__23361,G__23362,G__23363,G__23364,G__23365,G__23366,G__23367,G__23368,G__23369,G__23370,G__23371,G__23372,G__23373,G__23374,G__23375){
var self__ = this;
var this__23147__auto__ = this;
var array23222 = cljs.core.object_array.call(null,(17));
(array23222[(0)] = G__23359);

(array23222[(1)] = G__23360);

(array23222[(2)] = G__23361);

(array23222[(3)] = G__23362);

(array23222[(4)] = G__23363);

(array23222[(5)] = G__23364);

(array23222[(6)] = G__23365);

(array23222[(7)] = G__23366);

(array23222[(8)] = G__23367);

(array23222[(9)] = G__23368);

(array23222[(10)] = G__23369);

(array23222[(11)] = G__23370);

(array23222[(12)] = G__23371);

(array23222[(13)] = G__23372);

(array23222[(14)] = G__23373);

(array23222[(15)] = G__23374);

(array23222[(16)] = G__23375);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$18 = (function (G__23376,G__23377,G__23378,G__23379,G__23380,G__23381,G__23382,G__23383,G__23384,G__23385,G__23386,G__23387,G__23388,G__23389,G__23390,G__23391,G__23392,G__23393){
var self__ = this;
var this__23147__auto__ = this;
var array23222 = cljs.core.object_array.call(null,(18));
(array23222[(0)] = G__23376);

(array23222[(1)] = G__23377);

(array23222[(2)] = G__23378);

(array23222[(3)] = G__23379);

(array23222[(4)] = G__23380);

(array23222[(5)] = G__23381);

(array23222[(6)] = G__23382);

(array23222[(7)] = G__23383);

(array23222[(8)] = G__23384);

(array23222[(9)] = G__23385);

(array23222[(10)] = G__23386);

(array23222[(11)] = G__23387);

(array23222[(12)] = G__23388);

(array23222[(13)] = G__23389);

(array23222[(14)] = G__23390);

(array23222[(15)] = G__23391);

(array23222[(16)] = G__23392);

(array23222[(17)] = G__23393);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$19 = (function (G__23394,G__23395,G__23396,G__23397,G__23398,G__23399,G__23400,G__23401,G__23402,G__23403,G__23404,G__23405,G__23406,G__23407,G__23408,G__23409,G__23410,G__23411,G__23412){
var self__ = this;
var this__23147__auto__ = this;
var array23222 = cljs.core.object_array.call(null,(19));
(array23222[(0)] = G__23394);

(array23222[(1)] = G__23395);

(array23222[(2)] = G__23396);

(array23222[(3)] = G__23397);

(array23222[(4)] = G__23398);

(array23222[(5)] = G__23399);

(array23222[(6)] = G__23400);

(array23222[(7)] = G__23401);

(array23222[(8)] = G__23402);

(array23222[(9)] = G__23403);

(array23222[(10)] = G__23404);

(array23222[(11)] = G__23405);

(array23222[(12)] = G__23406);

(array23222[(13)] = G__23407);

(array23222[(14)] = G__23408);

(array23222[(15)] = G__23409);

(array23222[(16)] = G__23410);

(array23222[(17)] = G__23411);

(array23222[(18)] = G__23412);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$20 = (function (G__23413,G__23414,G__23415,G__23416,G__23417,G__23418,G__23419,G__23420,G__23421,G__23422,G__23423,G__23424,G__23425,G__23426,G__23427,G__23428,G__23429,G__23430,G__23431,G__23432){
var self__ = this;
var this__23147__auto__ = this;
var array23222 = cljs.core.object_array.call(null,(20));
(array23222[(0)] = G__23413);

(array23222[(1)] = G__23414);

(array23222[(2)] = G__23415);

(array23222[(3)] = G__23416);

(array23222[(4)] = G__23417);

(array23222[(5)] = G__23418);

(array23222[(6)] = G__23419);

(array23222[(7)] = G__23420);

(array23222[(8)] = G__23421);

(array23222[(9)] = G__23422);

(array23222[(10)] = G__23423);

(array23222[(11)] = G__23424);

(array23222[(12)] = G__23425);

(array23222[(13)] = G__23426);

(array23222[(14)] = G__23427);

(array23222[(15)] = G__23428);

(array23222[(16)] = G__23429);

(array23222[(17)] = G__23430);

(array23222[(18)] = G__23431);

(array23222[(19)] = G__23432);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23147__auto__,array23222,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$21 = (function (p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest){
var self__ = this;
var this$ = this;
var a = cljs.core.object_array.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20], null),rest));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this$,a,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22113__auto__){
var self__ = this;
var this__22113__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22109__auto__){
var self__ = this;
var this__22109__auto____$1 = this;
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22119__auto__){
var self__ = this;
var this__22119__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22110__auto__){
var self__ = this;
var this__22110__auto____$1 = this;
var h__21882__auto__ = self__.__hash;
if(!((h__21882__auto__ == null))){
return h__21882__auto__;
} else {
var h__21882__auto____$1 = cljs.core.hash_imap.call(null,this__22110__auto____$1);
self__.__hash = h__21882__auto____$1;

return h__21882__auto____$1;
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22111__auto__,other__22112__auto__){
var self__ = this;
var this__22111__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21433__auto__ = other__22112__auto__;
if(cljs.core.truth_(and__21433__auto__)){
var and__21433__auto____$1 = (this__22111__auto____$1.constructor === other__22112__auto__.constructor);
if(and__21433__auto____$1){
return cljs.core.equiv_map.call(null,this__22111__auto____$1,other__22112__auto__);
} else {
return and__21433__auto____$1;
}
} else {
return and__21433__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22124__auto__,k__22125__auto__){
var self__ = this;
var this__22124__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),null], null), null),k__22125__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22124__auto____$1),self__.__meta),k__22125__auto__);
} else {
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22125__auto__)),null));
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22122__auto__,k__22123__auto__,G__23433){
var self__ = this;
var this__22122__auto____$1 = this;
var pred__23438 = cljs.core.keyword_identical_QMARK_;
var expr__23439 = k__22123__auto__;
if(cljs.core.truth_(pred__23438.call(null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),expr__23439))){
return (new com.rpl.specter.impl.ParamsNeededPath(G__23433,self__.num_needed_params,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23438.call(null,new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),expr__23439))){
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,G__23433,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22123__auto__,G__23433),null));
}
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22127__auto__){
var self__ = this;
var this__22127__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),self__.num_needed_params],null))], null),self__.__extmap));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22114__auto__,G__23433){
var self__ = this;
var this__22114__auto____$1 = this;
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,G__23433,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22120__auto__,entry__22121__auto__){
var self__ = this;
var this__22120__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22121__auto__)){
return cljs.core._assoc.call(null,this__22120__auto____$1,cljs.core._nth.call(null,entry__22121__auto__,(0)),cljs.core._nth.call(null,entry__22121__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22120__auto____$1,entry__22121__auto__);
}
});

com.rpl.specter.impl.ParamsNeededPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transform-fns","transform-fns",-1985393120,null),new cljs.core.Symbol(null,"num-needed-params","num-needed-params",421205430,null)], null);
});

com.rpl.specter.impl.ParamsNeededPath.cljs$lang$type = true;

com.rpl.specter.impl.ParamsNeededPath.cljs$lang$ctorPrSeq = (function (this__22151__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/ParamsNeededPath");
});

com.rpl.specter.impl.ParamsNeededPath.cljs$lang$ctorPrWriter = (function (this__22151__auto__,writer__22152__auto__){
return cljs.core._write.call(null,writer__22152__auto__,"com.rpl.specter.impl/ParamsNeededPath");
});

com.rpl.specter.impl.__GT_ParamsNeededPath = (function com$rpl$specter$impl$__GT_ParamsNeededPath(transform_fns,num_needed_params){
return (new com.rpl.specter.impl.ParamsNeededPath(transform_fns,num_needed_params,null,null,null));
});

com.rpl.specter.impl.map__GT_ParamsNeededPath = (function com$rpl$specter$impl$map__GT_ParamsNeededPath(G__23435){
return (new com.rpl.specter.impl.ParamsNeededPath(new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(G__23435),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097).cljs$core$IFn$_invoke$arity$1(G__23435),null,cljs.core.dissoc.call(null,G__23435,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097)),null));
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
var x__22158__auto__ = (((paths == null))?null:paths);
var m__22159__auto__ = (com.rpl.specter.impl.do_comp_paths[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,paths);
} else {
var m__22159__auto____$1 = (com.rpl.specter.impl.do_comp_paths["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,paths);
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
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"select*","select*",-1829914060),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$Navigator$))?true:false):false))?(function (G__23451,G__23452,G__23453){
return com.rpl.specter.protocols.select_STAR_.call(null,G__23451,G__23452,G__23453);
}):com.rpl.specter.protocols.select_STAR_),new cljs.core.Keyword(null,"transform*","transform*",-1613794522),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$Navigator$))?true:false):false))?(function (G__23455,G__23456,G__23457){
return com.rpl.specter.protocols.transform_STAR_.call(null,G__23455,G__23456,G__23457);
}):com.rpl.specter.protocols.transform_STAR_)], null);
});
com.rpl.specter.impl.collector_impl = (function com$rpl$specter$impl$collector_impl(obj){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collect-val","collect-val",801894069),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$Collector$))?true:false):false))?(function (G__23462,G__23463){
return com.rpl.specter.protocols.collect_val.call(null,G__23462,G__23463);
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
var or__21445__auto__ = cljs.core.fn_QMARK_.call(null,obj);
if(or__21445__auto__){
return or__21445__auto__;
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
var x__22158__auto__ = (((this$ == null))?null:this$);
var m__22159__auto__ = (com.rpl.specter.impl.coerce_path[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,this$);
} else {
var m__22159__auto____$1 = (com.rpl.specter.impl.coerce_path["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,this$);
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
com.rpl.specter.impl.combine_same_types = (function com$rpl$specter$impl$combine_same_types(p__23470){
var vec__23474 = p__23470;
var seq__23475 = cljs.core.seq.call(null,vec__23474);
var first__23476 = cljs.core.first.call(null,seq__23475);
var seq__23475__$1 = cljs.core.next.call(null,seq__23475);
var f = first__23476;
var _ = seq__23475__$1;
var all = vec__23474;
var exs = f.executors;
var t = exs.type;
var combiner = ((cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"richpath","richpath",-150197948)))?((function (exs,t,vec__23474,seq__23475,first__23476,seq__23475__$1,f,_,all){
return (function (curr,next){
return ((function (exs,t,vec__23474,seq__23475,first__23476,seq__23475__$1,f,_,all){
return (function (params,params_idx,vals,structure,next_fn){
return curr.call(null,params,params_idx,vals,structure,((function (exs,t,vec__23474,seq__23475,first__23476,seq__23475__$1,f,_,all){
return (function (params_next,params_idx_next,vals_next,structure_next){
return next.call(null,params_next,params_idx_next,vals_next,structure_next,next_fn);
});})(exs,t,vec__23474,seq__23475,first__23476,seq__23475__$1,f,_,all))
);
});
;})(exs,t,vec__23474,seq__23475,first__23476,seq__23475__$1,f,_,all))
});})(exs,t,vec__23474,seq__23475,first__23476,seq__23475__$1,f,_,all))
:((function (exs,t,vec__23474,seq__23475,first__23476,seq__23475__$1,f,_,all){
return (function (curr,next){
return ((function (exs,t,vec__23474,seq__23475,first__23476,seq__23475__$1,f,_,all){
return (function (structure,next_fn){
return curr.call(null,structure,((function (exs,t,vec__23474,seq__23475,first__23476,seq__23475__$1,f,_,all){
return (function (structure__$1){
return next.call(null,structure__$1,next_fn);
});})(exs,t,vec__23474,seq__23475,first__23476,seq__23475__$1,f,_,all))
);
});
;})(exs,t,vec__23474,seq__23475,first__23476,seq__23475__$1,f,_,all))
});})(exs,t,vec__23474,seq__23475,first__23476,seq__23475__$1,f,_,all))
);
return cljs.core.reduce.call(null,((function (exs,t,combiner,vec__23474,seq__23475,first__23476,seq__23475__$1,f,_,all){
return (function (curr,next){
return com.rpl.specter.impl.__GT_TransformFunctions.call(null,exs,combiner.call(null,curr.selector,next.selector),combiner.call(null,curr.transformer,next.transformer));
});})(exs,t,combiner,vec__23474,seq__23475,first__23476,seq__23475__$1,f,_,all))
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
return (function (p1__23477_SHARP_){
return (p1__23477_SHARP_ instanceof com.rpl.specter.impl.ParamsNeededPath);
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
var x__22158__auto__ = (((cell == null))?null:cell);
var m__22159__auto__ = (com.rpl.specter.impl.set_cell[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,cell,x);
} else {
var m__22159__auto____$1 = (com.rpl.specter.impl.set_cell["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,cell,x);
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

com.rpl.specter.impl.MutableCell.cljs$lang$ctorPrWriter = (function (this__22097__auto__,writer__22098__auto__,opt__22099__auto__){
return cljs.core._write.call(null,writer__22098__auto__,"com.rpl.specter.impl/MutableCell");
});

com.rpl.specter.impl.__GT_MutableCell = (function com$rpl$specter$impl$__GT_MutableCell(q){
return (new com.rpl.specter.impl.MutableCell(q));
});

com.rpl.specter.impl.mutable_cell = (function com$rpl$specter$impl$mutable_cell(var_args){
var args23478 = [];
var len__22628__auto___23481 = arguments.length;
var i__22629__auto___23482 = (0);
while(true){
if((i__22629__auto___23482 < len__22628__auto___23481)){
args23478.push((arguments[i__22629__auto___23482]));

var G__23483 = (i__22629__auto___23482 + (1));
i__22629__auto___23482 = G__23483;
continue;
} else {
}
break;
}

var G__23480 = args23478.length;
switch (G__23480) {
case 0:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23478.length)].join('')));

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
var x__22158__auto__ = (((structure == null))?null:structure);
var m__22159__auto__ = (com.rpl.specter.impl.append_all[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,structure,elements);
} else {
var m__22159__auto____$1 = (com.rpl.specter.impl.append_all["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,structure,elements);
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
var x__22158__auto__ = (((structure == null))?null:structure);
var m__22159__auto__ = (com.rpl.specter.impl.prepend_all[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,structure,elements);
} else {
var m__22159__auto____$1 = (com.rpl.specter.impl.prepend_all["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,structure,elements);
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
var x__22158__auto__ = (((s == null))?null:s);
var m__22159__auto__ = (com.rpl.specter.impl.update_first[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,s,afn);
} else {
var m__22159__auto____$1 = (com.rpl.specter.impl.update_first["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,s,afn);
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
var x__22158__auto__ = (((s == null))?null:s);
var m__22159__auto__ = (com.rpl.specter.impl.update_last[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,s,afn);
} else {
var m__22159__auto____$1 = (com.rpl.specter.impl.update_last["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,s,afn);
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
var x__22158__auto__ = (((s == null))?null:s);
var m__22159__auto__ = (com.rpl.specter.impl.get_first[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,s);
} else {
var m__22159__auto____$1 = (com.rpl.specter.impl.get_first["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,s);
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
var x__22158__auto__ = (((s == null))?null:s);
var m__22159__auto__ = (com.rpl.specter.impl.get_last[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,s);
} else {
var m__22159__auto____$1 = (com.rpl.specter.impl.get_last["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,s);
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
var x__22158__auto__ = (((s == null))?null:s);
var m__22159__auto__ = (com.rpl.specter.impl.fast_empty_QMARK_[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,s);
} else {
var m__22159__auto____$1 = (com.rpl.specter.impl.fast_empty_QMARK_["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,s);
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
var G__23485 = c;
switch (G__23485) {
case (1):
var vec__23486 = v__$1;
var e = cljs.core.nth.call(null,vec__23486,(0),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [afn.call(null,e)], null);

break;
case (2):
var vec__23489 = v__$1;
var e1 = cljs.core.nth.call(null,vec__23489,(0),null);
var e2 = cljs.core.nth.call(null,vec__23489,(1),null);
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
if(cljs.core.truth_((function (){var and__21433__auto__ = com.rpl.specter.impl.fn_invocation_QMARK_.call(null,structure);
if(cljs.core.truth_(and__21433__auto__)){
return com.rpl.specter.impl.fn_invocation_QMARK_.call(null,ret);
} else {
return and__21433__auto__;
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
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.call(null,(function (p1__23493_SHARP_){
return next_fn.call(null,p1__23493_SHARP_);
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
var x__22158__auto__ = (((structure == null))?null:structure);
var m__22159__auto__ = (com.rpl.specter.impl.all_transform[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,structure,next_fn);
} else {
var m__22159__auto____$1 = (com.rpl.specter.impl.all_transform["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,structure,next_fn);
} else {
throw cljs.core.missing_protocol.call(null,"AllTransformProtocol.all-transform",structure);
}
}
}
});

com.rpl.specter.impl.non_transient_map_all_transform = (function com$rpl$specter$impl$non_transient_map_all_transform(structure,next_fn,empty_map){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
var vec__23497 = next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
var newk = cljs.core.nth.call(null,vec__23497,(0),null);
var newv = cljs.core.nth.call(null,vec__23497,(1),null);
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
var vec__23501 = next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
var newk = cljs.core.nth.call(null,vec__23501,(0),null);
var newv = cljs.core.nth.call(null,vec__23501,(1),null);
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
return (function (p1__23500_SHARP_){
return next_fn.call(null,p1__23500_SHARP_);
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

com.rpl.specter.impl.AllNavigator.cljs$lang$ctorPrWriter = (function (this__22097__auto__,writer__22098__auto__,opt__22099__auto__){
return cljs.core._write.call(null,writer__22098__auto__,"com.rpl.specter.impl/AllNavigator");
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
var x__22158__auto__ = (((structure == null))?null:structure);
var m__22159__auto__ = (com.rpl.specter.impl.map_vals_transform[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,structure,next_fn);
} else {
var m__22159__auto____$1 = (com.rpl.specter.impl.map_vals_transform["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,structure,next_fn);
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

com.rpl.specter.impl.ValCollect.cljs$lang$ctorPrWriter = (function (this__22097__auto__,writer__22098__auto__,opt__22099__auto__){
return cljs.core._write.call(null,writer__22098__auto__,"com.rpl.specter.impl/ValCollect");
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

com.rpl.specter.impl.PosNavigator.cljs$lang$ctorPrWriter = (function (this__22097__auto__,writer__22098__auto__,opt__22099__auto__){
return cljs.core._write.call(null,writer__22098__auto__,"com.rpl.specter.impl/PosNavigator");
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
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p__23508,i){
var vec__23509 = p__23508;
var ranges = cljs.core.nth.call(null,vec__23509,(0),null);
var curr_start = cljs.core.nth.call(null,vec__23509,(1),null);
var curr_last = cljs.core.nth.call(null,vec__23509,(2),null);
var curr = vec__23509;
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

com.rpl.specter.impl.TransientEndNavigator.cljs$lang$ctorPrWriter = (function (this__22097__auto__,writer__22098__auto__,opt__22099__auto__){
return cljs.core._write.call(null,writer__22098__auto__,"com.rpl.specter.impl/TransientEndNavigator");
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
var and__21433__auto__ = combined.call(null,structure);
if(cljs.core.truth_(and__21433__auto__)){
return afn.call(null,structure);
} else {
return and__21433__auto__;
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
com.rpl.specter.impl.LayeredNav.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22115__auto__,k__22116__auto__){
var self__ = this;
var this__22115__auto____$1 = this;
return cljs.core._lookup.call(null,this__22115__auto____$1,k__22116__auto__,null);
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22117__auto__,k23513,else__22118__auto__){
var self__ = this;
var this__22117__auto____$1 = this;
var G__23515 = (((k23513 instanceof cljs.core.Keyword))?k23513.fqn:null);
switch (G__23515) {
case "underlying":
return self__.underlying;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23513,else__22118__auto__);

}
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22129__auto__,writer__22130__auto__,opts__22131__auto__){
var self__ = this;
var this__22129__auto____$1 = this;
var pr_pair__22132__auto__ = ((function (this__22129__auto____$1){
return (function (keyval__22133__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22130__auto__,cljs.core.pr_writer,""," ","",opts__22131__auto__,keyval__22133__auto__);
});})(this__22129__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22130__auto__,pr_pair__22132__auto__,"#com.rpl.specter.impl.LayeredNav{",", ","}",opts__22131__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"underlying","underlying",-1492391849),self__.underlying],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23512){
var self__ = this;
var G__23512__$1 = this;
return (new cljs.core.RecordIter((0),G__23512__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"underlying","underlying",-1492391849)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22113__auto__){
var self__ = this;
var this__22113__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22109__auto__){
var self__ = this;
var this__22109__auto____$1 = this;
return (new com.rpl.specter.impl.LayeredNav(self__.underlying,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22119__auto__){
var self__ = this;
var this__22119__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22110__auto__){
var self__ = this;
var this__22110__auto____$1 = this;
var h__21882__auto__ = self__.__hash;
if(!((h__21882__auto__ == null))){
return h__21882__auto__;
} else {
var h__21882__auto____$1 = cljs.core.hash_imap.call(null,this__22110__auto____$1);
self__.__hash = h__21882__auto____$1;

return h__21882__auto____$1;
}
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22111__auto__,other__22112__auto__){
var self__ = this;
var this__22111__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21433__auto__ = other__22112__auto__;
if(cljs.core.truth_(and__21433__auto__)){
var and__21433__auto____$1 = (this__22111__auto____$1.constructor === other__22112__auto__.constructor);
if(and__21433__auto____$1){
return cljs.core.equiv_map.call(null,this__22111__auto____$1,other__22112__auto__);
} else {
return and__21433__auto____$1;
}
} else {
return and__21433__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22124__auto__,k__22125__auto__){
var self__ = this;
var this__22124__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"underlying","underlying",-1492391849),null], null), null),k__22125__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22124__auto____$1),self__.__meta),k__22125__auto__);
} else {
return (new com.rpl.specter.impl.LayeredNav(self__.underlying,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22125__auto__)),null));
}
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22122__auto__,k__22123__auto__,G__23512){
var self__ = this;
var this__22122__auto____$1 = this;
var pred__23516 = cljs.core.keyword_identical_QMARK_;
var expr__23517 = k__22123__auto__;
if(cljs.core.truth_(pred__23516.call(null,new cljs.core.Keyword(null,"underlying","underlying",-1492391849),expr__23517))){
return (new com.rpl.specter.impl.LayeredNav(G__23512,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LayeredNav(self__.underlying,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22123__auto__,G__23512),null));
}
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22127__auto__){
var self__ = this;
var this__22127__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"underlying","underlying",-1492391849),self__.underlying],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22114__auto__,G__23512){
var self__ = this;
var this__22114__auto____$1 = this;
return (new com.rpl.specter.impl.LayeredNav(self__.underlying,G__23512,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22120__auto__,entry__22121__auto__){
var self__ = this;
var this__22120__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22121__auto__)){
return cljs.core._assoc.call(null,this__22120__auto____$1,cljs.core._nth.call(null,entry__22121__auto__,(0)),cljs.core._nth.call(null,entry__22121__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22120__auto____$1,entry__22121__auto__);
}
});

com.rpl.specter.impl.LayeredNav.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"underlying","underlying",148139678,null)], null);
});

com.rpl.specter.impl.LayeredNav.cljs$lang$type = true;

com.rpl.specter.impl.LayeredNav.cljs$lang$ctorPrSeq = (function (this__22151__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LayeredNav");
});

com.rpl.specter.impl.LayeredNav.cljs$lang$ctorPrWriter = (function (this__22151__auto__,writer__22152__auto__){
return cljs.core._write.call(null,writer__22152__auto__,"com.rpl.specter.impl/LayeredNav");
});

com.rpl.specter.impl.__GT_LayeredNav = (function com$rpl$specter$impl$__GT_LayeredNav(underlying){
return (new com.rpl.specter.impl.LayeredNav(underlying,null,null,null));
});

com.rpl.specter.impl.map__GT_LayeredNav = (function com$rpl$specter$impl$map__GT_LayeredNav(G__23514){
return (new com.rpl.specter.impl.LayeredNav(new cljs.core.Keyword(null,"underlying","underlying",-1492391849).cljs$core$IFn$_invoke$arity$1(G__23514),null,cljs.core.dissoc.call(null,G__23514,new cljs.core.Keyword(null,"underlying","underlying",-1492391849)),null));
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
var G__23520 = null;
var G__23520__1 = (function (a1){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1));
});
var G__23520__2 = (function (a1,a2){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1,a2));
});
var G__23520__3 = (function (a1,a2,a3){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1,a2,a3));
});
var G__23520__4 = (function (a1,a2,a3,a4){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1,a2,a3,a4));
});
var G__23520__5 = (function (a1,a2,a3,a4,a5){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1,a2,a3,a4,a5));
});
var G__23520__6 = (function (a1,a2,a3,a4,a5,a6){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1,a2,a3,a4,a5,a6));
});
var G__23520__7 = (function (a1,a2,a3,a4,a5,a6,a7){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1,a2,a3,a4,a5,a6,a7));
});
var G__23520__8 = (function (a1,a2,a3,a4,a5,a6,a7,a8){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1,a2,a3,a4,a5,a6,a7,a8));
});
var G__23520__9 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1,a2,a3,a4,a5,a6,a7,a8,a9));
});
var G__23520__10 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10));
});
var G__23520__11 = (function() { 
var G__23521__delegate = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,args){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,cljs.core.apply.call(null,anav,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,args));
};
var G__23521 = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var args = null;
if (arguments.length > 10) {
var G__23522__i = 0, G__23522__a = new Array(arguments.length -  10);
while (G__23522__i < G__23522__a.length) {G__23522__a[G__23522__i] = arguments[G__23522__i + 10]; ++G__23522__i;}
  args = new cljs.core.IndexedSeq(G__23522__a,0);
} 
return G__23521__delegate.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,args);};
G__23521.cljs$lang$maxFixedArity = 10;
G__23521.cljs$lang$applyTo = (function (arglist__23523){
var a1 = cljs.core.first(arglist__23523);
arglist__23523 = cljs.core.next(arglist__23523);
var a2 = cljs.core.first(arglist__23523);
arglist__23523 = cljs.core.next(arglist__23523);
var a3 = cljs.core.first(arglist__23523);
arglist__23523 = cljs.core.next(arglist__23523);
var a4 = cljs.core.first(arglist__23523);
arglist__23523 = cljs.core.next(arglist__23523);
var a5 = cljs.core.first(arglist__23523);
arglist__23523 = cljs.core.next(arglist__23523);
var a6 = cljs.core.first(arglist__23523);
arglist__23523 = cljs.core.next(arglist__23523);
var a7 = cljs.core.first(arglist__23523);
arglist__23523 = cljs.core.next(arglist__23523);
var a8 = cljs.core.first(arglist__23523);
arglist__23523 = cljs.core.next(arglist__23523);
var a9 = cljs.core.first(arglist__23523);
arglist__23523 = cljs.core.next(arglist__23523);
var a10 = cljs.core.first(arglist__23523);
var args = cljs.core.rest(arglist__23523);
return G__23521__delegate(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,args);
});
G__23521.cljs$core$IFn$_invoke$arity$variadic = G__23521__delegate;
return G__23521;
})()
;
G__23520 = function(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return G__23520__1.call(this,a1);
case 2:
return G__23520__2.call(this,a1,a2);
case 3:
return G__23520__3.call(this,a1,a2,a3);
case 4:
return G__23520__4.call(this,a1,a2,a3,a4);
case 5:
return G__23520__5.call(this,a1,a2,a3,a4,a5);
case 6:
return G__23520__6.call(this,a1,a2,a3,a4,a5,a6);
case 7:
return G__23520__7.call(this,a1,a2,a3,a4,a5,a6,a7);
case 8:
return G__23520__8.call(this,a1,a2,a3,a4,a5,a6,a7,a8);
case 9:
return G__23520__9.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9);
case 10:
return G__23520__10.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
default:
var G__23524 = null;
if (arguments.length > 10) {
var G__23525__i = 0, G__23525__a = new Array(arguments.length -  10);
while (G__23525__i < G__23525__a.length) {G__23525__a[G__23525__i] = arguments[G__23525__i + 10]; ++G__23525__i;}
G__23524 = new cljs.core.IndexedSeq(G__23525__a,0);
}
return G__23520__11.cljs$core$IFn$_invoke$arity$variadic(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10, G__23524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23520.cljs$lang$maxFixedArity = 10;
G__23520.cljs$lang$applyTo = G__23520__11.cljs$lang$applyTo;
G__23520.cljs$core$IFn$_invoke$arity$1 = G__23520__1;
G__23520.cljs$core$IFn$_invoke$arity$2 = G__23520__2;
G__23520.cljs$core$IFn$_invoke$arity$3 = G__23520__3;
G__23520.cljs$core$IFn$_invoke$arity$4 = G__23520__4;
G__23520.cljs$core$IFn$_invoke$arity$5 = G__23520__5;
G__23520.cljs$core$IFn$_invoke$arity$6 = G__23520__6;
G__23520.cljs$core$IFn$_invoke$arity$7 = G__23520__7;
G__23520.cljs$core$IFn$_invoke$arity$8 = G__23520__8;
G__23520.cljs$core$IFn$_invoke$arity$9 = G__23520__9;
G__23520.cljs$core$IFn$_invoke$arity$10 = G__23520__10;
G__23520.cljs$core$IFn$_invoke$arity$variadic = G__23520__11.cljs$core$IFn$_invoke$arity$variadic;
return G__23520;
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
com.rpl.specter.impl.LocalSym.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22115__auto__,k__22116__auto__){
var self__ = this;
var this__22115__auto____$1 = this;
return cljs.core._lookup.call(null,this__22115__auto____$1,k__22116__auto__,null);
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22117__auto__,k23527,else__22118__auto__){
var self__ = this;
var this__22117__auto____$1 = this;
var G__23529 = (((k23527 instanceof cljs.core.Keyword))?k23527.fqn:null);
switch (G__23529) {
case "val":
return self__.val;

break;
case "sym":
return self__.sym;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23527,else__22118__auto__);

}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22129__auto__,writer__22130__auto__,opts__22131__auto__){
var self__ = this;
var this__22129__auto____$1 = this;
var pr_pair__22132__auto__ = ((function (this__22129__auto____$1){
return (function (keyval__22133__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22130__auto__,cljs.core.pr_writer,""," ","",opts__22131__auto__,keyval__22133__auto__);
});})(this__22129__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22130__auto__,pr_pair__22132__auto__,"#com.rpl.specter.impl.LocalSym{",", ","}",opts__22131__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23526){
var self__ = this;
var G__23526__$1 = this;
return (new cljs.core.RecordIter((0),G__23526__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"sym","sym",-1444860305)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22113__auto__){
var self__ = this;
var this__22113__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22109__auto__){
var self__ = this;
var this__22109__auto____$1 = this;
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22119__auto__){
var self__ = this;
var this__22119__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22110__auto__){
var self__ = this;
var this__22110__auto____$1 = this;
var h__21882__auto__ = self__.__hash;
if(!((h__21882__auto__ == null))){
return h__21882__auto__;
} else {
var h__21882__auto____$1 = cljs.core.hash_imap.call(null,this__22110__auto____$1);
self__.__hash = h__21882__auto____$1;

return h__21882__auto____$1;
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22111__auto__,other__22112__auto__){
var self__ = this;
var this__22111__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21433__auto__ = other__22112__auto__;
if(cljs.core.truth_(and__21433__auto__)){
var and__21433__auto____$1 = (this__22111__auto____$1.constructor === other__22112__auto__.constructor);
if(and__21433__auto____$1){
return cljs.core.equiv_map.call(null,this__22111__auto____$1,other__22112__auto__);
} else {
return and__21433__auto____$1;
}
} else {
return and__21433__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22124__auto__,k__22125__auto__){
var self__ = this;
var this__22124__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"sym","sym",-1444860305),null], null), null),k__22125__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22124__auto____$1),self__.__meta),k__22125__auto__);
} else {
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22125__auto__)),null));
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22122__auto__,k__22123__auto__,G__23526){
var self__ = this;
var this__22122__auto____$1 = this;
var pred__23530 = cljs.core.keyword_identical_QMARK_;
var expr__23531 = k__22123__auto__;
if(cljs.core.truth_(pred__23530.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__23531))){
return (new com.rpl.specter.impl.LocalSym(G__23526,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23530.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__23531))){
return (new com.rpl.specter.impl.LocalSym(self__.val,G__23526,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22123__auto__,G__23526),null));
}
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22127__auto__){
var self__ = this;
var this__22127__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22114__auto__,G__23526){
var self__ = this;
var this__22114__auto____$1 = this;
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,G__23526,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22120__auto__,entry__22121__auto__){
var self__ = this;
var this__22120__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22121__auto__)){
return cljs.core._assoc.call(null,this__22120__auto____$1,cljs.core._nth.call(null,entry__22121__auto__,(0)),cljs.core._nth.call(null,entry__22121__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22120__auto____$1,entry__22121__auto__);
}
});

com.rpl.specter.impl.LocalSym.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"sym","sym",195671222,null)], null);
});

com.rpl.specter.impl.LocalSym.cljs$lang$type = true;

com.rpl.specter.impl.LocalSym.cljs$lang$ctorPrSeq = (function (this__22151__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LocalSym");
});

com.rpl.specter.impl.LocalSym.cljs$lang$ctorPrWriter = (function (this__22151__auto__,writer__22152__auto__){
return cljs.core._write.call(null,writer__22152__auto__,"com.rpl.specter.impl/LocalSym");
});

com.rpl.specter.impl.__GT_LocalSym = (function com$rpl$specter$impl$__GT_LocalSym(val,sym){
return (new com.rpl.specter.impl.LocalSym(val,sym,null,null,null));
});

com.rpl.specter.impl.map__GT_LocalSym = (function com$rpl$specter$impl$map__GT_LocalSym(G__23528){
return (new com.rpl.specter.impl.LocalSym(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__23528),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(G__23528),null,cljs.core.dissoc.call(null,G__23528,new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"sym","sym",-1444860305)),null));
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
com.rpl.specter.impl.VarUse.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22115__auto__,k__22116__auto__){
var self__ = this;
var this__22115__auto____$1 = this;
return cljs.core._lookup.call(null,this__22115__auto____$1,k__22116__auto__,null);
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22117__auto__,k23535,else__22118__auto__){
var self__ = this;
var this__22117__auto____$1 = this;
var G__23537 = (((k23535 instanceof cljs.core.Keyword))?k23535.fqn:null);
switch (G__23537) {
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
return cljs.core.get.call(null,self__.__extmap,k23535,else__22118__auto__);

}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22129__auto__,writer__22130__auto__,opts__22131__auto__){
var self__ = this;
var this__22129__auto____$1 = this;
var pr_pair__22132__auto__ = ((function (this__22129__auto____$1){
return (function (keyval__22133__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22130__auto__,cljs.core.pr_writer,""," ","",opts__22131__auto__,keyval__22133__auto__);
});})(this__22129__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22130__auto__,pr_pair__22132__auto__,"#com.rpl.specter.impl.VarUse{",", ","}",opts__22131__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"var","var",-769682797),self__.var$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.VarUse.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23534){
var self__ = this;
var G__23534__$1 = this;
return (new cljs.core.RecordIter((0),G__23534__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"sym","sym",-1444860305)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22113__auto__){
var self__ = this;
var this__22113__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22109__auto__){
var self__ = this;
var this__22109__auto____$1 = this;
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,self__.sym,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22119__auto__){
var self__ = this;
var this__22119__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22110__auto__){
var self__ = this;
var this__22110__auto____$1 = this;
var h__21882__auto__ = self__.__hash;
if(!((h__21882__auto__ == null))){
return h__21882__auto__;
} else {
var h__21882__auto____$1 = cljs.core.hash_imap.call(null,this__22110__auto____$1);
self__.__hash = h__21882__auto____$1;

return h__21882__auto____$1;
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22111__auto__,other__22112__auto__){
var self__ = this;
var this__22111__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21433__auto__ = other__22112__auto__;
if(cljs.core.truth_(and__21433__auto__)){
var and__21433__auto____$1 = (this__22111__auto____$1.constructor === other__22112__auto__.constructor);
if(and__21433__auto____$1){
return cljs.core.equiv_map.call(null,this__22111__auto____$1,other__22112__auto__);
} else {
return and__21433__auto____$1;
}
} else {
return and__21433__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22124__auto__,k__22125__auto__){
var self__ = this;
var this__22124__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"sym","sym",-1444860305),null,new cljs.core.Keyword(null,"var","var",-769682797),null], null), null),k__22125__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22124__auto____$1),self__.__meta),k__22125__auto__);
} else {
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,self__.sym,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22125__auto__)),null));
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22122__auto__,k__22123__auto__,G__23534){
var self__ = this;
var this__22122__auto____$1 = this;
var pred__23538 = cljs.core.keyword_identical_QMARK_;
var expr__23539 = k__22123__auto__;
if(cljs.core.truth_(pred__23538.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__23539))){
return (new com.rpl.specter.impl.VarUse(G__23534,self__.var$,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23538.call(null,new cljs.core.Keyword(null,"var","var",-769682797),expr__23539))){
return (new com.rpl.specter.impl.VarUse(self__.val,G__23534,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23538.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__23539))){
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,G__23534,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,self__.sym,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22123__auto__,G__23534),null));
}
}
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22127__auto__){
var self__ = this;
var this__22127__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"var","var",-769682797),self__.var$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22114__auto__,G__23534){
var self__ = this;
var this__22114__auto____$1 = this;
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,self__.sym,G__23534,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22120__auto__,entry__22121__auto__){
var self__ = this;
var this__22120__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22121__auto__)){
return cljs.core._assoc.call(null,this__22120__auto____$1,cljs.core._nth.call(null,entry__22121__auto__,(0)),cljs.core._nth.call(null,entry__22121__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22120__auto____$1,entry__22121__auto__);
}
});

com.rpl.specter.impl.VarUse.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"var","var",870848730,null),new cljs.core.Symbol(null,"sym","sym",195671222,null)], null);
});

com.rpl.specter.impl.VarUse.cljs$lang$type = true;

com.rpl.specter.impl.VarUse.cljs$lang$ctorPrSeq = (function (this__22151__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/VarUse");
});

com.rpl.specter.impl.VarUse.cljs$lang$ctorPrWriter = (function (this__22151__auto__,writer__22152__auto__){
return cljs.core._write.call(null,writer__22152__auto__,"com.rpl.specter.impl/VarUse");
});

com.rpl.specter.impl.__GT_VarUse = (function com$rpl$specter$impl$__GT_VarUse(val,var$,sym){
return (new com.rpl.specter.impl.VarUse(val,var$,sym,null,null,null));
});

com.rpl.specter.impl.map__GT_VarUse = (function com$rpl$specter$impl$map__GT_VarUse(G__23536){
return (new com.rpl.specter.impl.VarUse(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__23536),new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(G__23536),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(G__23536),null,cljs.core.dissoc.call(null,G__23536,new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"sym","sym",-1444860305)),null));
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
com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22115__auto__,k__22116__auto__){
var self__ = this;
var this__22115__auto____$1 = this;
return cljs.core._lookup.call(null,this__22115__auto____$1,k__22116__auto__,null);
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22117__auto__,k23543,else__22118__auto__){
var self__ = this;
var this__22117__auto____$1 = this;
var G__23545 = (((k23543 instanceof cljs.core.Keyword))?k23543.fqn:null);
switch (G__23545) {
case "val":
return self__.val;

break;
case "code":
return self__.code;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23543,else__22118__auto__);

}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22129__auto__,writer__22130__auto__,opts__22131__auto__){
var self__ = this;
var this__22129__auto____$1 = this;
var pr_pair__22132__auto__ = ((function (this__22129__auto____$1){
return (function (keyval__22133__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22130__auto__,cljs.core.pr_writer,""," ","",opts__22131__auto__,keyval__22133__auto__);
});})(this__22129__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22130__auto__,pr_pair__22132__auto__,"#com.rpl.specter.impl.SpecialFormUse{",", ","}",opts__22131__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23542){
var self__ = this;
var G__23542__$1 = this;
return (new cljs.core.RecordIter((0),G__23542__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"code","code",1586293142)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22113__auto__){
var self__ = this;
var this__22113__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22109__auto__){
var self__ = this;
var this__22109__auto____$1 = this;
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22119__auto__){
var self__ = this;
var this__22119__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22110__auto__){
var self__ = this;
var this__22110__auto____$1 = this;
var h__21882__auto__ = self__.__hash;
if(!((h__21882__auto__ == null))){
return h__21882__auto__;
} else {
var h__21882__auto____$1 = cljs.core.hash_imap.call(null,this__22110__auto____$1);
self__.__hash = h__21882__auto____$1;

return h__21882__auto____$1;
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22111__auto__,other__22112__auto__){
var self__ = this;
var this__22111__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21433__auto__ = other__22112__auto__;
if(cljs.core.truth_(and__21433__auto__)){
var and__21433__auto____$1 = (this__22111__auto____$1.constructor === other__22112__auto__.constructor);
if(and__21433__auto____$1){
return cljs.core.equiv_map.call(null,this__22111__auto____$1,other__22112__auto__);
} else {
return and__21433__auto____$1;
}
} else {
return and__21433__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22124__auto__,k__22125__auto__){
var self__ = this;
var this__22124__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__22125__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22124__auto____$1),self__.__meta),k__22125__auto__);
} else {
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22125__auto__)),null));
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22122__auto__,k__22123__auto__,G__23542){
var self__ = this;
var this__22122__auto____$1 = this;
var pred__23546 = cljs.core.keyword_identical_QMARK_;
var expr__23547 = k__22123__auto__;
if(cljs.core.truth_(pred__23546.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__23547))){
return (new com.rpl.specter.impl.SpecialFormUse(G__23542,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23546.call(null,new cljs.core.Keyword(null,"code","code",1586293142),expr__23547))){
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,G__23542,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22123__auto__,G__23542),null));
}
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22127__auto__){
var self__ = this;
var this__22127__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22114__auto__,G__23542){
var self__ = this;
var this__22114__auto____$1 = this;
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,G__23542,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22120__auto__,entry__22121__auto__){
var self__ = this;
var this__22120__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22121__auto__)){
return cljs.core._assoc.call(null,this__22120__auto____$1,cljs.core._nth.call(null,entry__22121__auto__,(0)),cljs.core._nth.call(null,entry__22121__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22120__auto____$1,entry__22121__auto__);
}
});

com.rpl.specter.impl.SpecialFormUse.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
});

com.rpl.specter.impl.SpecialFormUse.cljs$lang$type = true;

com.rpl.specter.impl.SpecialFormUse.cljs$lang$ctorPrSeq = (function (this__22151__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/SpecialFormUse");
});

com.rpl.specter.impl.SpecialFormUse.cljs$lang$ctorPrWriter = (function (this__22151__auto__,writer__22152__auto__){
return cljs.core._write.call(null,writer__22152__auto__,"com.rpl.specter.impl/SpecialFormUse");
});

com.rpl.specter.impl.__GT_SpecialFormUse = (function com$rpl$specter$impl$__GT_SpecialFormUse(val,code){
return (new com.rpl.specter.impl.SpecialFormUse(val,code,null,null,null));
});

com.rpl.specter.impl.map__GT_SpecialFormUse = (function com$rpl$specter$impl$map__GT_SpecialFormUse(G__23544){
return (new com.rpl.specter.impl.SpecialFormUse(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__23544),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__23544),null,cljs.core.dissoc.call(null,G__23544,new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"code","code",1586293142)),null));
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
com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22115__auto__,k__22116__auto__){
var self__ = this;
var this__22115__auto____$1 = this;
return cljs.core._lookup.call(null,this__22115__auto____$1,k__22116__auto__,null);
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22117__auto__,k23551,else__22118__auto__){
var self__ = this;
var this__22117__auto____$1 = this;
var G__23553 = (((k23551 instanceof cljs.core.Keyword))?k23551.fqn:null);
switch (G__23553) {
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
return cljs.core.get.call(null,self__.__extmap,k23551,else__22118__auto__);

}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22129__auto__,writer__22130__auto__,opts__22131__auto__){
var self__ = this;
var this__22129__auto____$1 = this;
var pr_pair__22132__auto__ = ((function (this__22129__auto____$1){
return (function (keyval__22133__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22130__auto__,cljs.core.pr_writer,""," ","",opts__22131__auto__,keyval__22133__auto__);
});})(this__22129__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22130__auto__,pr_pair__22132__auto__,"#com.rpl.specter.impl.FnInvocation{",", ","}",opts__22131__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"op","op",-1882987955),self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23550){
var self__ = this;
var G__23550__$1 = this;
return (new cljs.core.RecordIter((0),G__23550__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22113__auto__){
var self__ = this;
var this__22113__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22109__auto__){
var self__ = this;
var this__22109__auto____$1 = this;
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22119__auto__){
var self__ = this;
var this__22119__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22110__auto__){
var self__ = this;
var this__22110__auto____$1 = this;
var h__21882__auto__ = self__.__hash;
if(!((h__21882__auto__ == null))){
return h__21882__auto__;
} else {
var h__21882__auto____$1 = cljs.core.hash_imap.call(null,this__22110__auto____$1);
self__.__hash = h__21882__auto____$1;

return h__21882__auto____$1;
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22111__auto__,other__22112__auto__){
var self__ = this;
var this__22111__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21433__auto__ = other__22112__auto__;
if(cljs.core.truth_(and__21433__auto__)){
var and__21433__auto____$1 = (this__22111__auto____$1.constructor === other__22112__auto__.constructor);
if(and__21433__auto____$1){
return cljs.core.equiv_map.call(null,this__22111__auto____$1,other__22112__auto__);
} else {
return and__21433__auto____$1;
}
} else {
return and__21433__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22124__auto__,k__22125__auto__){
var self__ = this;
var this__22124__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"op","op",-1882987955),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__22125__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22124__auto____$1),self__.__meta),k__22125__auto__);
} else {
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22125__auto__)),null));
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22122__auto__,k__22123__auto__,G__23550){
var self__ = this;
var this__22122__auto____$1 = this;
var pred__23554 = cljs.core.keyword_identical_QMARK_;
var expr__23555 = k__22123__auto__;
if(cljs.core.truth_(pred__23554.call(null,new cljs.core.Keyword(null,"op","op",-1882987955),expr__23555))){
return (new com.rpl.specter.impl.FnInvocation(G__23550,self__.params,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23554.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__23555))){
return (new com.rpl.specter.impl.FnInvocation(self__.op,G__23550,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23554.call(null,new cljs.core.Keyword(null,"code","code",1586293142),expr__23555))){
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,G__23550,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22123__auto__,G__23550),null));
}
}
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22127__auto__){
var self__ = this;
var this__22127__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"op","op",-1882987955),self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22114__auto__,G__23550){
var self__ = this;
var this__22114__auto____$1 = this;
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,G__23550,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22120__auto__,entry__22121__auto__){
var self__ = this;
var this__22120__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22121__auto__)){
return cljs.core._assoc.call(null,this__22120__auto____$1,cljs.core._nth.call(null,entry__22121__auto__,(0)),cljs.core._nth.call(null,entry__22121__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22120__auto____$1,entry__22121__auto__);
}
});

com.rpl.specter.impl.FnInvocation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"op","op",-242456428,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
});

com.rpl.specter.impl.FnInvocation.cljs$lang$type = true;

com.rpl.specter.impl.FnInvocation.cljs$lang$ctorPrSeq = (function (this__22151__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/FnInvocation");
});

com.rpl.specter.impl.FnInvocation.cljs$lang$ctorPrWriter = (function (this__22151__auto__,writer__22152__auto__){
return cljs.core._write.call(null,writer__22152__auto__,"com.rpl.specter.impl/FnInvocation");
});

com.rpl.specter.impl.__GT_FnInvocation = (function com$rpl$specter$impl$__GT_FnInvocation(op,params,code){
return (new com.rpl.specter.impl.FnInvocation(op,params,code,null,null,null));
});

com.rpl.specter.impl.map__GT_FnInvocation = (function com$rpl$specter$impl$map__GT_FnInvocation(G__23552){
return (new com.rpl.specter.impl.FnInvocation(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(G__23552),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__23552),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__23552),null,cljs.core.dissoc.call(null,G__23552,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)),null));
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
com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22115__auto__,k__22116__auto__){
var self__ = this;
var this__22115__auto____$1 = this;
return cljs.core._lookup.call(null,this__22115__auto____$1,k__22116__auto__,null);
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22117__auto__,k23559,else__22118__auto__){
var self__ = this;
var this__22117__auto____$1 = this;
var G__23561 = (((k23559 instanceof cljs.core.Keyword))?k23559.fqn:null);
switch (G__23561) {
case "precompiled":
return self__.precompiled;

break;
case "params-maker":
return self__.params_maker;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23559,else__22118__auto__);

}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22129__auto__,writer__22130__auto__,opts__22131__auto__){
var self__ = this;
var this__22129__auto____$1 = this;
var pr_pair__22132__auto__ = ((function (this__22129__auto____$1){
return (function (keyval__22133__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22130__auto__,cljs.core.pr_writer,""," ","",opts__22131__auto__,keyval__22133__auto__);
});})(this__22129__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22130__auto__,pr_pair__22132__auto__,"#com.rpl.specter.impl.CachedPathInfo{",", ","}",opts__22131__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),self__.precompiled],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-maker","params-maker",539586643),self__.params_maker],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23558){
var self__ = this;
var G__23558__$1 = this;
return (new cljs.core.RecordIter((0),G__23558__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),new cljs.core.Keyword(null,"params-maker","params-maker",539586643)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22113__auto__){
var self__ = this;
var this__22113__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22109__auto__){
var self__ = this;
var this__22109__auto____$1 = this;
return (new com.rpl.specter.impl.CachedPathInfo(self__.precompiled,self__.params_maker,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22119__auto__){
var self__ = this;
var this__22119__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22110__auto__){
var self__ = this;
var this__22110__auto____$1 = this;
var h__21882__auto__ = self__.__hash;
if(!((h__21882__auto__ == null))){
return h__21882__auto__;
} else {
var h__21882__auto____$1 = cljs.core.hash_imap.call(null,this__22110__auto____$1);
self__.__hash = h__21882__auto____$1;

return h__21882__auto____$1;
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22111__auto__,other__22112__auto__){
var self__ = this;
var this__22111__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21433__auto__ = other__22112__auto__;
if(cljs.core.truth_(and__21433__auto__)){
var and__21433__auto____$1 = (this__22111__auto____$1.constructor === other__22112__auto__.constructor);
if(and__21433__auto____$1){
return cljs.core.equiv_map.call(null,this__22111__auto____$1,other__22112__auto__);
} else {
return and__21433__auto____$1;
}
} else {
return and__21433__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22124__auto__,k__22125__auto__){
var self__ = this;
var this__22124__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params-maker","params-maker",539586643),null,new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),null], null), null),k__22125__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22124__auto____$1),self__.__meta),k__22125__auto__);
} else {
return (new com.rpl.specter.impl.CachedPathInfo(self__.precompiled,self__.params_maker,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22125__auto__)),null));
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22122__auto__,k__22123__auto__,G__23558){
var self__ = this;
var this__22122__auto____$1 = this;
var pred__23562 = cljs.core.keyword_identical_QMARK_;
var expr__23563 = k__22123__auto__;
if(cljs.core.truth_(pred__23562.call(null,new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),expr__23563))){
return (new com.rpl.specter.impl.CachedPathInfo(G__23558,self__.params_maker,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23562.call(null,new cljs.core.Keyword(null,"params-maker","params-maker",539586643),expr__23563))){
return (new com.rpl.specter.impl.CachedPathInfo(self__.precompiled,G__23558,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.CachedPathInfo(self__.precompiled,self__.params_maker,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22123__auto__,G__23558),null));
}
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22127__auto__){
var self__ = this;
var this__22127__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),self__.precompiled],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-maker","params-maker",539586643),self__.params_maker],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22114__auto__,G__23558){
var self__ = this;
var this__22114__auto____$1 = this;
return (new com.rpl.specter.impl.CachedPathInfo(self__.precompiled,self__.params_maker,G__23558,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22120__auto__,entry__22121__auto__){
var self__ = this;
var this__22120__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22121__auto__)){
return cljs.core._assoc.call(null,this__22120__auto____$1,cljs.core._nth.call(null,entry__22121__auto__,(0)),cljs.core._nth.call(null,entry__22121__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22120__auto____$1,entry__22121__auto__);
}
});

com.rpl.specter.impl.CachedPathInfo.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"precompiled","precompiled",-42622082,null),new cljs.core.Symbol(null,"params-maker","params-maker",-2114849126,null)], null);
});

com.rpl.specter.impl.CachedPathInfo.cljs$lang$type = true;

com.rpl.specter.impl.CachedPathInfo.cljs$lang$ctorPrSeq = (function (this__22151__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/CachedPathInfo");
});

com.rpl.specter.impl.CachedPathInfo.cljs$lang$ctorPrWriter = (function (this__22151__auto__,writer__22152__auto__){
return cljs.core._write.call(null,writer__22152__auto__,"com.rpl.specter.impl/CachedPathInfo");
});

com.rpl.specter.impl.__GT_CachedPathInfo = (function com$rpl$specter$impl$__GT_CachedPathInfo(precompiled,params_maker){
return (new com.rpl.specter.impl.CachedPathInfo(precompiled,params_maker,null,null,null));
});

com.rpl.specter.impl.map__GT_CachedPathInfo = (function com$rpl$specter$impl$map__GT_CachedPathInfo(G__23560){
return (new com.rpl.specter.impl.CachedPathInfo(new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609).cljs$core$IFn$_invoke$arity$1(G__23560),new cljs.core.Keyword(null,"params-maker","params-maker",539586643).cljs$core$IFn$_invoke$arity$1(G__23560),null,cljs.core.dissoc.call(null,G__23560,new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),new cljs.core.Keyword(null,"params-maker","params-maker",539586643)),null));
});

com.rpl.specter.impl.MUST_CACHE_PATHS = com.rpl.specter.impl.mutable_cell.call(null,false);
com.rpl.specter.impl.must_cache_paths_BANG_ = (function com$rpl$specter$impl$must_cache_paths_BANG_(var_args){
var args23566 = [];
var len__22628__auto___23569 = arguments.length;
var i__22629__auto___23570 = (0);
while(true){
if((i__22629__auto___23570 < len__22628__auto___23569)){
args23566.push((arguments[i__22629__auto___23570]));

var G__23571 = (i__22629__auto___23570 + (1));
i__22629__auto___23570 = G__23571;
continue;
} else {
}
break;
}

var G__23568 = args23566.length;
switch (G__23568) {
case 0:
return com.rpl.specter.impl.must_cache_paths_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.rpl.specter.impl.must_cache_paths_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23566.length)].join('')));

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
var or__21445__auto__ = com.rpl.specter.impl.structure_path_QMARK_.call(null,v);
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
var or__21445__auto____$1 = ((!((v == null)))?(((false) || (v.com$rpl$specter$protocols$Collector$))?true:(((!v.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,com.rpl.specter.protocols.Collector,v):false)):cljs.core.native_satisfies_QMARK_.call(null,com.rpl.specter.protocols.Collector,v));
if(or__21445__auto____$1){
return or__21445__auto____$1;
} else {
return (v instanceof com.rpl.specter.impl.CompiledPath);
}
}
});
com.rpl.specter.impl.handle_params = (function com$rpl$specter$impl$handle_params(precompiled,params_maker,possible_params){
var params = com.rpl.specter.impl.fast_object_array.call(null,cljs.core.count.call(null,params_maker));
var n__22458__auto___23577 = cljs.core.count.call(null,params_maker);
var i_23578 = (0);
while(true){
if((i_23578 < n__22458__auto___23577)){
(params[i_23578] = cljs.core.get.call(null,possible_params,cljs.core.get.call(null,params_maker,i_23578)).call(null));

var G__23579 = (i_23578 + (1));
i_23578 = G__23579;
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
var or__21445__auto__ = cljs.core._EQ_.call(null,cljs.core.count.call(null,al),c);
if(or__21445__auto__){
return or__21445__auto__;
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
var G__23582__delegate = function (reason){
if(cljs.core.truth_(com.rpl.specter.impl.get_cell.call(null,com.rpl.specter.impl.MUST_CACHE_PATHS))){
cljs.core.println.call(null,"Failed to cache path:",cljs.core.apply.call(null,cljs.core.str,reason));
} else {
}

cljs.core.reset_BANG_.call(null,failed_atom,true);

return null;
};
var G__23582 = function (var_args){
var reason = null;
if (arguments.length > 0) {
var G__23583__i = 0, G__23583__a = new Array(arguments.length -  0);
while (G__23583__i < G__23583__a.length) {G__23583__a[G__23583__i] = arguments[G__23583__i + 0]; ++G__23583__i;}
  reason = new cljs.core.IndexedSeq(G__23583__a,0);
} 
return G__23582__delegate.call(this,reason);};
G__23582.cljs$lang$maxFixedArity = 0;
G__23582.cljs$lang$applyTo = (function (arglist__23584){
var reason = cljs.core.seq(arglist__23584);
return G__23582__delegate(reason);
});
G__23582.cljs$core$IFn$_invoke$arity$variadic = G__23582__delegate;
return G__23582;
})()
;
if(cljs.core.vector_QMARK_.call(null,p)){
return cljs.core.mapv.call(null,((function (magic_fail_BANG_){
return (function (p1__23580_SHARP_){
return com$rpl$specter$impl$magic_precompilation_STAR_.call(null,p1__23580_SHARP_,params_atom,failed_atom);
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
return (function (p1__23581_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,p1__23581_SHARP_,ps));
});})(v,vv,op,ps,magic_fail_BANG_))
);

return vv;
} else {
if(cljs.core.truth_((function (){var and__21433__auto__ = cljs.core.fn_QMARK_.call(null,vv);
if(and__21433__auto__){
return new cljs.core.Keyword(null,"pathedfn","pathedfn",1590980188).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v));
} else {
return and__21433__auto__;
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
if(cljs.core.truth_((function (){var and__21433__auto__ = cljs.core.fn_QMARK_.call(null,vv);
if(and__21433__auto__){
return new cljs.core.Keyword(null,"layerednav","layerednav",891636982).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,vv));
} else {
return and__21433__auto__;
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
if(cljs.core.truth_((function (){var and__21433__auto__ = typeof p === 'string';
if(and__21433__auto__){
return com.rpl.specter.impl.valid_navigator_QMARK_.call(null,p);
} else {
return and__21433__auto__;
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
var args__22635__auto__ = [];
var len__22628__auto___23595 = arguments.length;
var i__22629__auto___23596 = (0);
while(true){
if((i__22629__auto___23596 < len__22628__auto___23595)){
args__22635__auto__.push((arguments[i__22629__auto___23596]));

var G__23597 = (i__22629__auto___23596 + (1));
i__22629__auto___23596 = G__23597;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((3) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22636__auto__);
});

com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__23589){
var map__23590 = p__23589;
var map__23590__$1 = ((((!((map__23590 == null)))?((((map__23590.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23590.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23590):map__23590);
var merge_fn = cljs.core.get.call(null,map__23590__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var state = com.rpl.specter.impl.mutable_cell.call(null,null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.compiled_transform_STAR_.call(null,path,((function (state,map__23590,map__23590__$1,merge_fn){
return (function() { 
var G__23598__delegate = function (args){
var res = cljs.core.apply.call(null,transform_fn,args);
if(cljs.core.truth_(res)){
var vec__23592 = res;
var ret = cljs.core.nth.call(null,vec__23592,(0),null);
var user_ret = cljs.core.nth.call(null,vec__23592,(1),null);
com.rpl.specter.impl.set_cell_BANG_.call(null,state,merge_fn.call(null,com.rpl.specter.impl.get_cell.call(null,state),user_ret));

return ret;
} else {
return cljs.core.last.call(null,args);
}
};
var G__23598 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23599__i = 0, G__23599__a = new Array(arguments.length -  0);
while (G__23599__i < G__23599__a.length) {G__23599__a[G__23599__i] = arguments[G__23599__i + 0]; ++G__23599__i;}
  args = new cljs.core.IndexedSeq(G__23599__a,0);
} 
return G__23598__delegate.call(this,args);};
G__23598.cljs$lang$maxFixedArity = 0;
G__23598.cljs$lang$applyTo = (function (arglist__23600){
var args = cljs.core.seq(arglist__23600);
return G__23598__delegate(args);
});
G__23598.cljs$core$IFn$_invoke$arity$variadic = G__23598__delegate;
return G__23598;
})()
;})(state,map__23590,map__23590__$1,merge_fn))
,structure),com.rpl.specter.impl.get_cell.call(null,state)], null);
});

com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$lang$maxFixedArity = (3);

com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$lang$applyTo = (function (seq23585){
var G__23586 = cljs.core.first.call(null,seq23585);
var seq23585__$1 = cljs.core.next.call(null,seq23585);
var G__23587 = cljs.core.first.call(null,seq23585__$1);
var seq23585__$2 = cljs.core.next.call(null,seq23585__$1);
var G__23588 = cljs.core.first.call(null,seq23585__$2);
var seq23585__$3 = cljs.core.next.call(null,seq23585__$2);
return com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__23586,G__23587,G__23588,seq23585__$3);
});


//# sourceMappingURL=impl.js.map?rel=1470139183772