// Compiled by ClojureScript 1.9.211 {}
goog.provide('com.rpl.specter.impl');
goog.require('cljs.core');
goog.require('com.rpl.specter.protocols');
goog.require('clojure.walk');
goog.require('clojure.string');
com.rpl.specter.impl.NONE = new cljs.core.Keyword("com.rpl.specter.impl","NONE","com.rpl.specter.impl/NONE",1085349969);
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
var args__22779__auto__ = [];
var len__22772__auto___23206 = arguments.length;
var i__22773__auto___23207 = (0);
while(true){
if((i__22773__auto___23207 < len__22772__auto___23206)){
args__22779__auto__.push((arguments[i__22773__auto___23207]));

var G__23208 = (i__22773__auto___23207 + (1));
i__22773__auto___23207 = G__23208;
continue;
} else {
}
break;
}

var argseq__22780__auto__ = ((((0) < args__22779__auto__.length))?(new cljs.core.IndexedSeq(args__22779__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(argseq__22780__auto__);
});

com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic = (function (elems){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,com.rpl.specter.impl.smart_str_STAR_,elems));
});

com.rpl.specter.impl.smart_str.cljs$lang$maxFixedArity = (0);

com.rpl.specter.impl.smart_str.cljs$lang$applyTo = (function (seq23205){
return com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23205));
});

com.rpl.specter.impl.fast_constantly = (function com$rpl$specter$impl$fast_constantly(v){
return (function() {
var G__23209 = null;
var G__23209__0 = (function (){
return v;
});
var G__23209__1 = (function (a1){
return v;
});
var G__23209__2 = (function (a1,a2){
return v;
});
var G__23209__3 = (function (a1,a2,a3){
return v;
});
var G__23209__4 = (function (a1,a2,a3,a4){
return v;
});
var G__23209__5 = (function (a1,a2,a3,a4,a5){
return v;
});
var G__23209__6 = (function (a1,a2,a3,a4,a5,a6){
return v;
});
var G__23209__7 = (function (a1,a2,a3,a4,a5,a6,a7){
return v;
});
var G__23209__8 = (function (a1,a2,a3,a4,a5,a6,a7,a8){
return v;
});
var G__23209__9 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9){
return v;
});
var G__23209__10 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){
return v;
});
var G__23209__11 = (function() { 
var G__23210__delegate = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r){
return v;
};
var G__23210 = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var r = null;
if (arguments.length > 10) {
var G__23211__i = 0, G__23211__a = new Array(arguments.length -  10);
while (G__23211__i < G__23211__a.length) {G__23211__a[G__23211__i] = arguments[G__23211__i + 10]; ++G__23211__i;}
  r = new cljs.core.IndexedSeq(G__23211__a,0);
} 
return G__23210__delegate.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r);};
G__23210.cljs$lang$maxFixedArity = 10;
G__23210.cljs$lang$applyTo = (function (arglist__23212){
var a1 = cljs.core.first(arglist__23212);
arglist__23212 = cljs.core.next(arglist__23212);
var a2 = cljs.core.first(arglist__23212);
arglist__23212 = cljs.core.next(arglist__23212);
var a3 = cljs.core.first(arglist__23212);
arglist__23212 = cljs.core.next(arglist__23212);
var a4 = cljs.core.first(arglist__23212);
arglist__23212 = cljs.core.next(arglist__23212);
var a5 = cljs.core.first(arglist__23212);
arglist__23212 = cljs.core.next(arglist__23212);
var a6 = cljs.core.first(arglist__23212);
arglist__23212 = cljs.core.next(arglist__23212);
var a7 = cljs.core.first(arglist__23212);
arglist__23212 = cljs.core.next(arglist__23212);
var a8 = cljs.core.first(arglist__23212);
arglist__23212 = cljs.core.next(arglist__23212);
var a9 = cljs.core.first(arglist__23212);
arglist__23212 = cljs.core.next(arglist__23212);
var a10 = cljs.core.first(arglist__23212);
var r = cljs.core.rest(arglist__23212);
return G__23210__delegate(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r);
});
G__23210.cljs$core$IFn$_invoke$arity$variadic = G__23210__delegate;
return G__23210;
})()
;
G__23209 = function(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var r = var_args;
switch(arguments.length){
case 0:
return G__23209__0.call(this);
case 1:
return G__23209__1.call(this,a1);
case 2:
return G__23209__2.call(this,a1,a2);
case 3:
return G__23209__3.call(this,a1,a2,a3);
case 4:
return G__23209__4.call(this,a1,a2,a3,a4);
case 5:
return G__23209__5.call(this,a1,a2,a3,a4,a5);
case 6:
return G__23209__6.call(this,a1,a2,a3,a4,a5,a6);
case 7:
return G__23209__7.call(this,a1,a2,a3,a4,a5,a6,a7);
case 8:
return G__23209__8.call(this,a1,a2,a3,a4,a5,a6,a7,a8);
case 9:
return G__23209__9.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9);
case 10:
return G__23209__10.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
default:
var G__23213 = null;
if (arguments.length > 10) {
var G__23214__i = 0, G__23214__a = new Array(arguments.length -  10);
while (G__23214__i < G__23214__a.length) {G__23214__a[G__23214__i] = arguments[G__23214__i + 10]; ++G__23214__i;}
G__23213 = new cljs.core.IndexedSeq(G__23214__a,0);
}
return G__23209__11.cljs$core$IFn$_invoke$arity$variadic(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10, G__23213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23209.cljs$lang$maxFixedArity = 10;
G__23209.cljs$lang$applyTo = G__23209__11.cljs$lang$applyTo;
G__23209.cljs$core$IFn$_invoke$arity$0 = G__23209__0;
G__23209.cljs$core$IFn$_invoke$arity$1 = G__23209__1;
G__23209.cljs$core$IFn$_invoke$arity$2 = G__23209__2;
G__23209.cljs$core$IFn$_invoke$arity$3 = G__23209__3;
G__23209.cljs$core$IFn$_invoke$arity$4 = G__23209__4;
G__23209.cljs$core$IFn$_invoke$arity$5 = G__23209__5;
G__23209.cljs$core$IFn$_invoke$arity$6 = G__23209__6;
G__23209.cljs$core$IFn$_invoke$arity$7 = G__23209__7;
G__23209.cljs$core$IFn$_invoke$arity$8 = G__23209__8;
G__23209.cljs$core$IFn$_invoke$arity$9 = G__23209__9;
G__23209.cljs$core$IFn$_invoke$arity$10 = G__23209__10;
G__23209.cljs$core$IFn$_invoke$arity$variadic = G__23209__11.cljs$core$IFn$_invoke$arity$variadic;
return G__23209;
})()
});
com.rpl.specter.impl.throw_illegal = (function com$rpl$specter$impl$throw_illegal(var_args){
var args__22779__auto__ = [];
var len__22772__auto___23216 = arguments.length;
var i__22773__auto___23217 = (0);
while(true){
if((i__22773__auto___23217 < len__22772__auto___23216)){
args__22779__auto__.push((arguments[i__22773__auto___23217]));

var G__23218 = (i__22773__auto___23217 + (1));
i__22773__auto___23217 = G__23218;
continue;
} else {
}
break;
}

var argseq__22780__auto__ = ((((0) < args__22779__auto__.length))?(new cljs.core.IndexedSeq(args__22779__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(argseq__22780__auto__);
});

com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw (new Error(cljs.core.apply.call(null,cljs.core.str,args)));
});

com.rpl.specter.impl.throw_illegal.cljs$lang$maxFixedArity = (0);

com.rpl.specter.impl.throw_illegal.cljs$lang$applyTo = (function (seq23215){
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23215));
});

com.rpl.specter.impl.cljs_analyzer_macroexpand_1 = (function com$rpl$specter$impl$cljs_analyzer_macroexpand_1(){
return cljs.analyzer.macroexpand_1;
});
com.rpl.specter.impl.clj_macroexpand_all = (function com$rpl$specter$impl$clj_macroexpand_all(form){
return com.rpl.specter.impl.throw_illegal.call(null,"not implemented");
});
com.rpl.specter.impl.intern_STAR_ = (function com$rpl$specter$impl$intern_STAR_(ns,name,val){
return com.rpl.specter.impl.throw_illegal.call(null,"intern not supported in ClojureScript");
});
com.rpl.specter.impl.gen_uuid_str = (function com$rpl$specter$impl$gen_uuid_str(){
return com.rpl.specter.impl.throw_illegal.call(null,"Cannot get UUID in Javascript");
});
com.rpl.specter.impl.benchmark = (function com$rpl$specter$impl$benchmark(iters,afn){
var start__22627__auto__ = cljs.core.system_time.call(null);
var ret__22628__auto__ = (function (){var n__22602__auto__ = iters;
var _ = (0);
while(true){
if((_ < n__22602__auto__)){
afn.call(null);

var G__23219 = (_ + (1));
_ = G__23219;
continue;
} else {
return null;
}
break;
}
})();
cljs.core.prn.call(null,[cljs.core.str("Elapsed time: "),cljs.core.str((cljs.core.system_time.call(null) - start__22627__auto__).toFixed((6))),cljs.core.str(" msecs")].join(''));

return ret__22628__auto__;
});

/**
* @constructor
*/
com.rpl.specter.impl.ExecutorFunctions = (function (type,traverse_executor,transform_executor){
this.type = type;
this.traverse_executor = traverse_executor;
this.transform_executor = transform_executor;
})

com.rpl.specter.impl.ExecutorFunctions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"traverse-executor","traverse-executor",1012764260,null),new cljs.core.Symbol(null,"transform-executor","transform-executor",-31221519,null)], null);
});

com.rpl.specter.impl.ExecutorFunctions.cljs$lang$type = true;

com.rpl.specter.impl.ExecutorFunctions.cljs$lang$ctorStr = "com.rpl.specter.impl/ExecutorFunctions";

com.rpl.specter.impl.ExecutorFunctions.cljs$lang$ctorPrWriter = (function (this__22241__auto__,writer__22242__auto__,opt__22243__auto__){
return cljs.core._write.call(null,writer__22242__auto__,"com.rpl.specter.impl/ExecutorFunctions");
});

com.rpl.specter.impl.__GT_ExecutorFunctions = (function com$rpl$specter$impl$__GT_ExecutorFunctions(type,traverse_executor,transform_executor){
return (new com.rpl.specter.impl.ExecutorFunctions(type,traverse_executor,transform_executor));
});

com.rpl.specter.impl.RichPathExecutor = com.rpl.specter.impl.__GT_ExecutorFunctions.call(null,new cljs.core.Keyword(null,"richpath","richpath",-150197948),(function (params,params_idx,selector,result_fn,structure){
return selector.call(null,params,params_idx,cljs.core.PersistentVector.EMPTY,structure,(function (_,___$1,vals,structure__$1){
return result_fn.call(null,(((vals === cljs.core.PersistentVector.EMPTY))?structure__$1:cljs.core.conj.call(null,vals,structure__$1)));
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
com.rpl.specter.impl.LeanPathExecutor = com.rpl.specter.impl.__GT_ExecutorFunctions.call(null,new cljs.core.Keyword(null,"leanpath","leanpath",7838331),(function (params,params_idx,selector,result_fn,structure){
return selector.call(null,structure,result_fn);
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
com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22259__auto__,k__22260__auto__){
var self__ = this;
var this__22259__auto____$1 = this;
return cljs.core._lookup.call(null,this__22259__auto____$1,k__22260__auto__,null);
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22261__auto__,k23221,else__22262__auto__){
var self__ = this;
var this__22261__auto____$1 = this;
var G__23223 = (((k23221 instanceof cljs.core.Keyword))?k23221.fqn:null);
switch (G__23223) {
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
return cljs.core.get.call(null,self__.__extmap,k23221,else__22262__auto__);

}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22273__auto__,writer__22274__auto__,opts__22275__auto__){
var self__ = this;
var this__22273__auto____$1 = this;
var pr_pair__22276__auto__ = ((function (this__22273__auto____$1){
return (function (keyval__22277__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22274__auto__,cljs.core.pr_writer,""," ","",opts__22275__auto__,keyval__22277__auto__);
});})(this__22273__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22274__auto__,pr_pair__22276__auto__,"#com.rpl.specter.impl.TransformFunctions{",", ","}",opts__22275__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"executors","executors",-331073403),self__.executors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selector","selector",762528866),self__.selector],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transformer","transformer",-1493470620),self__.transformer],null))], null),self__.__extmap));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23220){
var self__ = this;
var G__23220__$1 = this;
return (new cljs.core.RecordIter((0),G__23220__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"executors","executors",-331073403),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Keyword(null,"transformer","transformer",-1493470620)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22257__auto__){
var self__ = this;
var this__22257__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22253__auto__){
var self__ = this;
var this__22253__auto____$1 = this;
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22263__auto__){
var self__ = this;
var this__22263__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22254__auto__){
var self__ = this;
var this__22254__auto____$1 = this;
var h__22026__auto__ = self__.__hash;
if(!((h__22026__auto__ == null))){
return h__22026__auto__;
} else {
var h__22026__auto____$1 = cljs.core.hash_imap.call(null,this__22254__auto____$1);
self__.__hash = h__22026__auto____$1;

return h__22026__auto____$1;
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22255__auto__,other__22256__auto__){
var self__ = this;
var this__22255__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21577__auto__ = other__22256__auto__;
if(cljs.core.truth_(and__21577__auto__)){
var and__21577__auto____$1 = (this__22255__auto____$1.constructor === other__22256__auto__.constructor);
if(and__21577__auto____$1){
return cljs.core.equiv_map.call(null,this__22255__auto____$1,other__22256__auto__);
} else {
return and__21577__auto____$1;
}
} else {
return and__21577__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22268__auto__,k__22269__auto__){
var self__ = this;
var this__22268__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selector","selector",762528866),null,new cljs.core.Keyword(null,"transformer","transformer",-1493470620),null,new cljs.core.Keyword(null,"executors","executors",-331073403),null], null), null),k__22269__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22268__auto____$1),self__.__meta),k__22269__auto__);
} else {
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22269__auto__)),null));
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22266__auto__,k__22267__auto__,G__23220){
var self__ = this;
var this__22266__auto____$1 = this;
var pred__23224 = cljs.core.keyword_identical_QMARK_;
var expr__23225 = k__22267__auto__;
if(cljs.core.truth_(pred__23224.call(null,new cljs.core.Keyword(null,"executors","executors",-331073403),expr__23225))){
return (new com.rpl.specter.impl.TransformFunctions(G__23220,self__.selector,self__.transformer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23224.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),expr__23225))){
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,G__23220,self__.transformer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23224.call(null,new cljs.core.Keyword(null,"transformer","transformer",-1493470620),expr__23225))){
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,G__23220,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22267__auto__,G__23220),null));
}
}
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22271__auto__){
var self__ = this;
var this__22271__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"executors","executors",-331073403),self__.executors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selector","selector",762528866),self__.selector],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transformer","transformer",-1493470620),self__.transformer],null))], null),self__.__extmap));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22258__auto__,G__23220){
var self__ = this;
var this__22258__auto____$1 = this;
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,G__23220,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22264__auto__,entry__22265__auto__){
var self__ = this;
var this__22264__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22265__auto__)){
return cljs.core._assoc.call(null,this__22264__auto____$1,cljs.core._nth.call(null,entry__22265__auto__,(0)),cljs.core._nth.call(null,entry__22265__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22264__auto____$1,entry__22265__auto__);
}
});

com.rpl.specter.impl.TransformFunctions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"executors","executors",1309458124,null),new cljs.core.Symbol(null,"selector","selector",-1891906903,null),new cljs.core.Symbol(null,"transformer","transformer",147060907,null)], null);
});

com.rpl.specter.impl.TransformFunctions.cljs$lang$type = true;

com.rpl.specter.impl.TransformFunctions.cljs$lang$ctorPrSeq = (function (this__22295__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/TransformFunctions");
});

com.rpl.specter.impl.TransformFunctions.cljs$lang$ctorPrWriter = (function (this__22295__auto__,writer__22296__auto__){
return cljs.core._write.call(null,writer__22296__auto__,"com.rpl.specter.impl/TransformFunctions");
});

com.rpl.specter.impl.__GT_TransformFunctions = (function com$rpl$specter$impl$__GT_TransformFunctions(executors,selector,transformer){
return (new com.rpl.specter.impl.TransformFunctions(executors,selector,transformer,null,null,null));
});

com.rpl.specter.impl.map__GT_TransformFunctions = (function com$rpl$specter$impl$map__GT_TransformFunctions(G__23222){
return (new com.rpl.specter.impl.TransformFunctions(new cljs.core.Keyword(null,"executors","executors",-331073403).cljs$core$IFn$_invoke$arity$1(G__23222),new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(G__23222),new cljs.core.Keyword(null,"transformer","transformer",-1493470620).cljs$core$IFn$_invoke$arity$1(G__23222),null,cljs.core.dissoc.call(null,G__23222,new cljs.core.Keyword(null,"executors","executors",-331073403),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Keyword(null,"transformer","transformer",-1493470620)),null));
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
com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22259__auto__,k__22260__auto__){
var self__ = this;
var this__22259__auto____$1 = this;
return cljs.core._lookup.call(null,this__22259__auto____$1,k__22260__auto__,null);
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22261__auto__,k23229,else__22262__auto__){
var self__ = this;
var this__22261__auto____$1 = this;
var G__23231 = (((k23229 instanceof cljs.core.Keyword))?k23229.fqn:null);
switch (G__23231) {
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
return cljs.core.get.call(null,self__.__extmap,k23229,else__22262__auto__);

}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22273__auto__,writer__22274__auto__,opts__22275__auto__){
var self__ = this;
var this__22273__auto____$1 = this;
var pr_pair__22276__auto__ = ((function (this__22273__auto____$1){
return (function (keyval__22277__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22274__auto__,cljs.core.pr_writer,""," ","",opts__22275__auto__,keyval__22277__auto__);
});})(this__22273__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22274__auto__,pr_pair__22276__auto__,"#com.rpl.specter.impl.CompiledPath{",", ","}",opts__22275__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-idx","params-idx",340984624),self__.params_idx],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23228){
var self__ = this;
var G__23228__$1 = this;
return (new cljs.core.RecordIter((0),G__23228__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params-idx","params-idx",340984624)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22257__auto__){
var self__ = this;
var this__22257__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22253__auto__){
var self__ = this;
var this__22253__auto____$1 = this;
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22263__auto__){
var self__ = this;
var this__22263__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22254__auto__){
var self__ = this;
var this__22254__auto____$1 = this;
var h__22026__auto__ = self__.__hash;
if(!((h__22026__auto__ == null))){
return h__22026__auto__;
} else {
var h__22026__auto____$1 = cljs.core.hash_imap.call(null,this__22254__auto____$1);
self__.__hash = h__22026__auto____$1;

return h__22026__auto____$1;
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22255__auto__,other__22256__auto__){
var self__ = this;
var this__22255__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21577__auto__ = other__22256__auto__;
if(cljs.core.truth_(and__21577__auto__)){
var and__21577__auto____$1 = (this__22255__auto____$1.constructor === other__22256__auto__.constructor);
if(and__21577__auto____$1){
return cljs.core.equiv_map.call(null,this__22255__auto____$1,other__22256__auto__);
} else {
return and__21577__auto____$1;
}
} else {
return and__21577__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22268__auto__,k__22269__auto__){
var self__ = this;
var this__22268__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"params-idx","params-idx",340984624),null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),null], null), null),k__22269__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22268__auto____$1),self__.__meta),k__22269__auto__);
} else {
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22269__auto__)),null));
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22266__auto__,k__22267__auto__,G__23228){
var self__ = this;
var this__22266__auto____$1 = this;
var pred__23232 = cljs.core.keyword_identical_QMARK_;
var expr__23233 = k__22267__auto__;
if(cljs.core.truth_(pred__23232.call(null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),expr__23233))){
return (new com.rpl.specter.impl.CompiledPath(G__23228,self__.params,self__.params_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23232.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__23233))){
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,G__23228,self__.params_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23232.call(null,new cljs.core.Keyword(null,"params-idx","params-idx",340984624),expr__23233))){
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,G__23228,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22267__auto__,G__23228),null));
}
}
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22271__auto__){
var self__ = this;
var this__22271__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-idx","params-idx",340984624),self__.params_idx],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22258__auto__,G__23228){
var self__ = this;
var this__22258__auto____$1 = this;
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,G__23228,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22264__auto__,entry__22265__auto__){
var self__ = this;
var this__22264__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22265__auto__)){
return cljs.core._assoc.call(null,this__22264__auto____$1,cljs.core._nth.call(null,entry__22265__auto__,(0)),cljs.core._nth.call(null,entry__22265__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22264__auto____$1,entry__22265__auto__);
}
});

com.rpl.specter.impl.CompiledPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transform-fns","transform-fns",-1985393120,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"params-idx","params-idx",1981516151,null)], null);
});

com.rpl.specter.impl.CompiledPath.cljs$lang$type = true;

com.rpl.specter.impl.CompiledPath.cljs$lang$ctorPrSeq = (function (this__22295__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/CompiledPath");
});

com.rpl.specter.impl.CompiledPath.cljs$lang$ctorPrWriter = (function (this__22295__auto__,writer__22296__auto__){
return cljs.core._write.call(null,writer__22296__auto__,"com.rpl.specter.impl/CompiledPath");
});

com.rpl.specter.impl.__GT_CompiledPath = (function com$rpl$specter$impl$__GT_CompiledPath(transform_fns,params,params_idx){
return (new com.rpl.specter.impl.CompiledPath(transform_fns,params,params_idx,null,null,null));
});

com.rpl.specter.impl.map__GT_CompiledPath = (function com$rpl$specter$impl$map__GT_CompiledPath(G__23230){
return (new com.rpl.specter.impl.CompiledPath(new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(G__23230),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__23230),new cljs.core.Keyword(null,"params-idx","params-idx",340984624).cljs$core$IFn$_invoke$arity$1(G__23230),null,cljs.core.dissoc.call(null,G__23230,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params-idx","params-idx",340984624)),null));
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
com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22259__auto__,k__22260__auto__){
var self__ = this;
var this__22259__auto____$1 = this;
return cljs.core._lookup.call(null,this__22259__auto____$1,k__22260__auto__,null);
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22261__auto__,k23448,else__22262__auto__){
var self__ = this;
var this__22261__auto____$1 = this;
var G__23451 = (((k23448 instanceof cljs.core.Keyword))?k23448.fqn:null);
switch (G__23451) {
case "transform-fns":
return self__.transform_fns;

break;
case "num-needed-params":
return self__.num_needed_params;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23448,else__22262__auto__);

}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22273__auto__,writer__22274__auto__,opts__22275__auto__){
var self__ = this;
var this__22273__auto____$1 = this;
var pr_pair__22276__auto__ = ((function (this__22273__auto____$1){
return (function (keyval__22277__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22274__auto__,cljs.core.pr_writer,""," ","",opts__22275__auto__,keyval__22277__auto__);
});})(this__22273__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22274__auto__,pr_pair__22276__auto__,"#com.rpl.specter.impl.ParamsNeededPath{",", ","}",opts__22275__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),self__.num_needed_params],null))], null),self__.__extmap));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23447){
var self__ = this;
var G__23447__$1 = this;
return (new cljs.core.RecordIter((0),G__23447__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.call = (function() {
var G__23456 = null;
var G__23456__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var this__23155__auto__ = self____$1;
var array23236 = cljs.core.object_array.call(null,(0));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});
var G__23456__2 = (function (self__,G__23237){
var self__ = this;
var self____$1 = this;
var this__23155__auto__ = self____$1;
var array23236 = cljs.core.object_array.call(null,(1));
(array23236[(0)] = G__23237);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});
var G__23456__3 = (function (self__,G__23238,G__23239){
var self__ = this;
var self____$1 = this;
var this__23155__auto__ = self____$1;
var array23236 = cljs.core.object_array.call(null,(2));
(array23236[(0)] = G__23238);

(array23236[(1)] = G__23239);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});
var G__23456__4 = (function (self__,G__23240,G__23241,G__23242){
var self__ = this;
var self____$1 = this;
var this__23155__auto__ = self____$1;
var array23236 = cljs.core.object_array.call(null,(3));
(array23236[(0)] = G__23240);

(array23236[(1)] = G__23241);

(array23236[(2)] = G__23242);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});
var G__23456__5 = (function (self__,G__23243,G__23244,G__23245,G__23246){
var self__ = this;
var self____$1 = this;
var this__23155__auto__ = self____$1;
var array23236 = cljs.core.object_array.call(null,(4));
(array23236[(0)] = G__23243);

(array23236[(1)] = G__23244);

(array23236[(2)] = G__23245);

(array23236[(3)] = G__23246);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});
var G__23456__6 = (function (self__,G__23247,G__23248,G__23249,G__23250,G__23251){
var self__ = this;
var self____$1 = this;
var this__23155__auto__ = self____$1;
var array23236 = cljs.core.object_array.call(null,(5));
(array23236[(0)] = G__23247);

(array23236[(1)] = G__23248);

(array23236[(2)] = G__23249);

(array23236[(3)] = G__23250);

(array23236[(4)] = G__23251);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});
var G__23456__7 = (function (self__,G__23252,G__23253,G__23254,G__23255,G__23256,G__23257){
var self__ = this;
var self____$1 = this;
var this__23155__auto__ = self____$1;
var array23236 = cljs.core.object_array.call(null,(6));
(array23236[(0)] = G__23252);

(array23236[(1)] = G__23253);

(array23236[(2)] = G__23254);

(array23236[(3)] = G__23255);

(array23236[(4)] = G__23256);

(array23236[(5)] = G__23257);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});
var G__23456__8 = (function (self__,G__23258,G__23259,G__23260,G__23261,G__23262,G__23263,G__23264){
var self__ = this;
var self____$1 = this;
var this__23155__auto__ = self____$1;
var array23236 = cljs.core.object_array.call(null,(7));
(array23236[(0)] = G__23258);

(array23236[(1)] = G__23259);

(array23236[(2)] = G__23260);

(array23236[(3)] = G__23261);

(array23236[(4)] = G__23262);

(array23236[(5)] = G__23263);

(array23236[(6)] = G__23264);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});
var G__23456__9 = (function (self__,G__23265,G__23266,G__23267,G__23268,G__23269,G__23270,G__23271,G__23272){
var self__ = this;
var self____$1 = this;
var this__23155__auto__ = self____$1;
var array23236 = cljs.core.object_array.call(null,(8));
(array23236[(0)] = G__23265);

(array23236[(1)] = G__23266);

(array23236[(2)] = G__23267);

(array23236[(3)] = G__23268);

(array23236[(4)] = G__23269);

(array23236[(5)] = G__23270);

(array23236[(6)] = G__23271);

(array23236[(7)] = G__23272);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});
var G__23456__10 = (function (self__,G__23273,G__23274,G__23275,G__23276,G__23277,G__23278,G__23279,G__23280,G__23281){
var self__ = this;
var self____$1 = this;
var this__23155__auto__ = self____$1;
var array23236 = cljs.core.object_array.call(null,(9));
(array23236[(0)] = G__23273);

(array23236[(1)] = G__23274);

(array23236[(2)] = G__23275);

(array23236[(3)] = G__23276);

(array23236[(4)] = G__23277);

(array23236[(5)] = G__23278);

(array23236[(6)] = G__23279);

(array23236[(7)] = G__23280);

(array23236[(8)] = G__23281);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});
var G__23456__11 = (function (self__,G__23282,G__23283,G__23284,G__23285,G__23286,G__23287,G__23288,G__23289,G__23290,G__23291){
var self__ = this;
var self____$1 = this;
var this__23155__auto__ = self____$1;
var array23236 = cljs.core.object_array.call(null,(10));
(array23236[(0)] = G__23282);

(array23236[(1)] = G__23283);

(array23236[(2)] = G__23284);

(array23236[(3)] = G__23285);

(array23236[(4)] = G__23286);

(array23236[(5)] = G__23287);

(array23236[(6)] = G__23288);

(array23236[(7)] = G__23289);

(array23236[(8)] = G__23290);

(array23236[(9)] = G__23291);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});
var G__23456__12 = (function (self__,G__23292,G__23293,G__23294,G__23295,G__23296,G__23297,G__23298,G__23299,G__23300,G__23301,G__23302){
var self__ = this;
var self____$1 = this;
var this__23155__auto__ = self____$1;
var array23236 = cljs.core.object_array.call(null,(11));
(array23236[(0)] = G__23292);

(array23236[(1)] = G__23293);

(array23236[(2)] = G__23294);

(array23236[(3)] = G__23295);

(array23236[(4)] = G__23296);

(array23236[(5)] = G__23297);

(array23236[(6)] = G__23298);

(array23236[(7)] = G__23299);

(array23236[(8)] = G__23300);

(array23236[(9)] = G__23301);

(array23236[(10)] = G__23302);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});
var G__23456__13 = (function (self__,G__23303,G__23304,G__23305,G__23306,G__23307,G__23308,G__23309,G__23310,G__23311,G__23312,G__23313,G__23314){
var self__ = this;
var self____$1 = this;
var this__23155__auto__ = self____$1;
var array23236 = cljs.core.object_array.call(null,(12));
(array23236[(0)] = G__23303);

(array23236[(1)] = G__23304);

(array23236[(2)] = G__23305);

(array23236[(3)] = G__23306);

(array23236[(4)] = G__23307);

(array23236[(5)] = G__23308);

(array23236[(6)] = G__23309);

(array23236[(7)] = G__23310);

(array23236[(8)] = G__23311);

(array23236[(9)] = G__23312);

(array23236[(10)] = G__23313);

(array23236[(11)] = G__23314);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});
var G__23456__14 = (function (self__,G__23315,G__23316,G__23317,G__23318,G__23319,G__23320,G__23321,G__23322,G__23323,G__23324,G__23325,G__23326,G__23327){
var self__ = this;
var self____$1 = this;
var this__23155__auto__ = self____$1;
var array23236 = cljs.core.object_array.call(null,(13));
(array23236[(0)] = G__23315);

(array23236[(1)] = G__23316);

(array23236[(2)] = G__23317);

(array23236[(3)] = G__23318);

(array23236[(4)] = G__23319);

(array23236[(5)] = G__23320);

(array23236[(6)] = G__23321);

(array23236[(7)] = G__23322);

(array23236[(8)] = G__23323);

(array23236[(9)] = G__23324);

(array23236[(10)] = G__23325);

(array23236[(11)] = G__23326);

(array23236[(12)] = G__23327);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});
var G__23456__15 = (function (self__,G__23328,G__23329,G__23330,G__23331,G__23332,G__23333,G__23334,G__23335,G__23336,G__23337,G__23338,G__23339,G__23340,G__23341){
var self__ = this;
var self____$1 = this;
var this__23155__auto__ = self____$1;
var array23236 = cljs.core.object_array.call(null,(14));
(array23236[(0)] = G__23328);

(array23236[(1)] = G__23329);

(array23236[(2)] = G__23330);

(array23236[(3)] = G__23331);

(array23236[(4)] = G__23332);

(array23236[(5)] = G__23333);

(array23236[(6)] = G__23334);

(array23236[(7)] = G__23335);

(array23236[(8)] = G__23336);

(array23236[(9)] = G__23337);

(array23236[(10)] = G__23338);

(array23236[(11)] = G__23339);

(array23236[(12)] = G__23340);

(array23236[(13)] = G__23341);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});
var G__23456__16 = (function (self__,G__23342,G__23343,G__23344,G__23345,G__23346,G__23347,G__23348,G__23349,G__23350,G__23351,G__23352,G__23353,G__23354,G__23355,G__23356){
var self__ = this;
var self____$1 = this;
var this__23155__auto__ = self____$1;
var array23236 = cljs.core.object_array.call(null,(15));
(array23236[(0)] = G__23342);

(array23236[(1)] = G__23343);

(array23236[(2)] = G__23344);

(array23236[(3)] = G__23345);

(array23236[(4)] = G__23346);

(array23236[(5)] = G__23347);

(array23236[(6)] = G__23348);

(array23236[(7)] = G__23349);

(array23236[(8)] = G__23350);

(array23236[(9)] = G__23351);

(array23236[(10)] = G__23352);

(array23236[(11)] = G__23353);

(array23236[(12)] = G__23354);

(array23236[(13)] = G__23355);

(array23236[(14)] = G__23356);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});
var G__23456__17 = (function (self__,G__23357,G__23358,G__23359,G__23360,G__23361,G__23362,G__23363,G__23364,G__23365,G__23366,G__23367,G__23368,G__23369,G__23370,G__23371,G__23372){
var self__ = this;
var self____$1 = this;
var this__23155__auto__ = self____$1;
var array23236 = cljs.core.object_array.call(null,(16));
(array23236[(0)] = G__23357);

(array23236[(1)] = G__23358);

(array23236[(2)] = G__23359);

(array23236[(3)] = G__23360);

(array23236[(4)] = G__23361);

(array23236[(5)] = G__23362);

(array23236[(6)] = G__23363);

(array23236[(7)] = G__23364);

(array23236[(8)] = G__23365);

(array23236[(9)] = G__23366);

(array23236[(10)] = G__23367);

(array23236[(11)] = G__23368);

(array23236[(12)] = G__23369);

(array23236[(13)] = G__23370);

(array23236[(14)] = G__23371);

(array23236[(15)] = G__23372);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});
var G__23456__18 = (function (self__,G__23373,G__23374,G__23375,G__23376,G__23377,G__23378,G__23379,G__23380,G__23381,G__23382,G__23383,G__23384,G__23385,G__23386,G__23387,G__23388,G__23389){
var self__ = this;
var self____$1 = this;
var this__23155__auto__ = self____$1;
var array23236 = cljs.core.object_array.call(null,(17));
(array23236[(0)] = G__23373);

(array23236[(1)] = G__23374);

(array23236[(2)] = G__23375);

(array23236[(3)] = G__23376);

(array23236[(4)] = G__23377);

(array23236[(5)] = G__23378);

(array23236[(6)] = G__23379);

(array23236[(7)] = G__23380);

(array23236[(8)] = G__23381);

(array23236[(9)] = G__23382);

(array23236[(10)] = G__23383);

(array23236[(11)] = G__23384);

(array23236[(12)] = G__23385);

(array23236[(13)] = G__23386);

(array23236[(14)] = G__23387);

(array23236[(15)] = G__23388);

(array23236[(16)] = G__23389);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});
var G__23456__19 = (function (self__,G__23390,G__23391,G__23392,G__23393,G__23394,G__23395,G__23396,G__23397,G__23398,G__23399,G__23400,G__23401,G__23402,G__23403,G__23404,G__23405,G__23406,G__23407){
var self__ = this;
var self____$1 = this;
var this__23155__auto__ = self____$1;
var array23236 = cljs.core.object_array.call(null,(18));
(array23236[(0)] = G__23390);

(array23236[(1)] = G__23391);

(array23236[(2)] = G__23392);

(array23236[(3)] = G__23393);

(array23236[(4)] = G__23394);

(array23236[(5)] = G__23395);

(array23236[(6)] = G__23396);

(array23236[(7)] = G__23397);

(array23236[(8)] = G__23398);

(array23236[(9)] = G__23399);

(array23236[(10)] = G__23400);

(array23236[(11)] = G__23401);

(array23236[(12)] = G__23402);

(array23236[(13)] = G__23403);

(array23236[(14)] = G__23404);

(array23236[(15)] = G__23405);

(array23236[(16)] = G__23406);

(array23236[(17)] = G__23407);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});
var G__23456__20 = (function (self__,G__23408,G__23409,G__23410,G__23411,G__23412,G__23413,G__23414,G__23415,G__23416,G__23417,G__23418,G__23419,G__23420,G__23421,G__23422,G__23423,G__23424,G__23425,G__23426){
var self__ = this;
var self____$1 = this;
var this__23155__auto__ = self____$1;
var array23236 = cljs.core.object_array.call(null,(19));
(array23236[(0)] = G__23408);

(array23236[(1)] = G__23409);

(array23236[(2)] = G__23410);

(array23236[(3)] = G__23411);

(array23236[(4)] = G__23412);

(array23236[(5)] = G__23413);

(array23236[(6)] = G__23414);

(array23236[(7)] = G__23415);

(array23236[(8)] = G__23416);

(array23236[(9)] = G__23417);

(array23236[(10)] = G__23418);

(array23236[(11)] = G__23419);

(array23236[(12)] = G__23420);

(array23236[(13)] = G__23421);

(array23236[(14)] = G__23422);

(array23236[(15)] = G__23423);

(array23236[(16)] = G__23424);

(array23236[(17)] = G__23425);

(array23236[(18)] = G__23426);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});
var G__23456__21 = (function (self__,G__23427,G__23428,G__23429,G__23430,G__23431,G__23432,G__23433,G__23434,G__23435,G__23436,G__23437,G__23438,G__23439,G__23440,G__23441,G__23442,G__23443,G__23444,G__23445,G__23446){
var self__ = this;
var self____$1 = this;
var this__23155__auto__ = self____$1;
var array23236 = cljs.core.object_array.call(null,(20));
(array23236[(0)] = G__23427);

(array23236[(1)] = G__23428);

(array23236[(2)] = G__23429);

(array23236[(3)] = G__23430);

(array23236[(4)] = G__23431);

(array23236[(5)] = G__23432);

(array23236[(6)] = G__23433);

(array23236[(7)] = G__23434);

(array23236[(8)] = G__23435);

(array23236[(9)] = G__23436);

(array23236[(10)] = G__23437);

(array23236[(11)] = G__23438);

(array23236[(12)] = G__23439);

(array23236[(13)] = G__23440);

(array23236[(14)] = G__23441);

(array23236[(15)] = G__23442);

(array23236[(16)] = G__23443);

(array23236[(17)] = G__23444);

(array23236[(18)] = G__23445);

(array23236[(19)] = G__23446);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});
var G__23456__22 = (function (self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var a = cljs.core.object_array.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20], null),rest));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this$,a,(0));
});
G__23456 = function(self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest){
switch(arguments.length){
case 1:
return G__23456__1.call(this,self__);
case 2:
return G__23456__2.call(this,self__,p01);
case 3:
return G__23456__3.call(this,self__,p01,p02);
case 4:
return G__23456__4.call(this,self__,p01,p02,p03);
case 5:
return G__23456__5.call(this,self__,p01,p02,p03,p04);
case 6:
return G__23456__6.call(this,self__,p01,p02,p03,p04,p05);
case 7:
return G__23456__7.call(this,self__,p01,p02,p03,p04,p05,p06);
case 8:
return G__23456__8.call(this,self__,p01,p02,p03,p04,p05,p06,p07);
case 9:
return G__23456__9.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08);
case 10:
return G__23456__10.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09);
case 11:
return G__23456__11.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10);
case 12:
return G__23456__12.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11);
case 13:
return G__23456__13.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12);
case 14:
return G__23456__14.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13);
case 15:
return G__23456__15.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14);
case 16:
return G__23456__16.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15);
case 17:
return G__23456__17.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16);
case 18:
return G__23456__18.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17);
case 19:
return G__23456__19.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18);
case 20:
return G__23456__20.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19);
case 21:
return G__23456__21.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20);
case 22:
return G__23456__22.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23456.cljs$core$IFn$_invoke$arity$1 = G__23456__1;
G__23456.cljs$core$IFn$_invoke$arity$2 = G__23456__2;
G__23456.cljs$core$IFn$_invoke$arity$3 = G__23456__3;
G__23456.cljs$core$IFn$_invoke$arity$4 = G__23456__4;
G__23456.cljs$core$IFn$_invoke$arity$5 = G__23456__5;
G__23456.cljs$core$IFn$_invoke$arity$6 = G__23456__6;
G__23456.cljs$core$IFn$_invoke$arity$7 = G__23456__7;
G__23456.cljs$core$IFn$_invoke$arity$8 = G__23456__8;
G__23456.cljs$core$IFn$_invoke$arity$9 = G__23456__9;
G__23456.cljs$core$IFn$_invoke$arity$10 = G__23456__10;
G__23456.cljs$core$IFn$_invoke$arity$11 = G__23456__11;
G__23456.cljs$core$IFn$_invoke$arity$12 = G__23456__12;
G__23456.cljs$core$IFn$_invoke$arity$13 = G__23456__13;
G__23456.cljs$core$IFn$_invoke$arity$14 = G__23456__14;
G__23456.cljs$core$IFn$_invoke$arity$15 = G__23456__15;
G__23456.cljs$core$IFn$_invoke$arity$16 = G__23456__16;
G__23456.cljs$core$IFn$_invoke$arity$17 = G__23456__17;
G__23456.cljs$core$IFn$_invoke$arity$18 = G__23456__18;
G__23456.cljs$core$IFn$_invoke$arity$19 = G__23456__19;
G__23456.cljs$core$IFn$_invoke$arity$20 = G__23456__20;
G__23456.cljs$core$IFn$_invoke$arity$21 = G__23456__21;
G__23456.cljs$core$IFn$_invoke$arity$22 = G__23456__22;
return G__23456;
})()
;

com.rpl.specter.impl.ParamsNeededPath.prototype.apply = (function (self__,args23450){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args23450)));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this__23155__auto__ = this;
var array23236 = cljs.core.object_array.call(null,(0));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$1 = (function (G__23237){
var self__ = this;
var this__23155__auto__ = this;
var array23236 = cljs.core.object_array.call(null,(1));
(array23236[(0)] = G__23237);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$2 = (function (G__23238,G__23239){
var self__ = this;
var this__23155__auto__ = this;
var array23236 = cljs.core.object_array.call(null,(2));
(array23236[(0)] = G__23238);

(array23236[(1)] = G__23239);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$3 = (function (G__23240,G__23241,G__23242){
var self__ = this;
var this__23155__auto__ = this;
var array23236 = cljs.core.object_array.call(null,(3));
(array23236[(0)] = G__23240);

(array23236[(1)] = G__23241);

(array23236[(2)] = G__23242);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$4 = (function (G__23243,G__23244,G__23245,G__23246){
var self__ = this;
var this__23155__auto__ = this;
var array23236 = cljs.core.object_array.call(null,(4));
(array23236[(0)] = G__23243);

(array23236[(1)] = G__23244);

(array23236[(2)] = G__23245);

(array23236[(3)] = G__23246);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$5 = (function (G__23247,G__23248,G__23249,G__23250,G__23251){
var self__ = this;
var this__23155__auto__ = this;
var array23236 = cljs.core.object_array.call(null,(5));
(array23236[(0)] = G__23247);

(array23236[(1)] = G__23248);

(array23236[(2)] = G__23249);

(array23236[(3)] = G__23250);

(array23236[(4)] = G__23251);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$6 = (function (G__23252,G__23253,G__23254,G__23255,G__23256,G__23257){
var self__ = this;
var this__23155__auto__ = this;
var array23236 = cljs.core.object_array.call(null,(6));
(array23236[(0)] = G__23252);

(array23236[(1)] = G__23253);

(array23236[(2)] = G__23254);

(array23236[(3)] = G__23255);

(array23236[(4)] = G__23256);

(array23236[(5)] = G__23257);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$7 = (function (G__23258,G__23259,G__23260,G__23261,G__23262,G__23263,G__23264){
var self__ = this;
var this__23155__auto__ = this;
var array23236 = cljs.core.object_array.call(null,(7));
(array23236[(0)] = G__23258);

(array23236[(1)] = G__23259);

(array23236[(2)] = G__23260);

(array23236[(3)] = G__23261);

(array23236[(4)] = G__23262);

(array23236[(5)] = G__23263);

(array23236[(6)] = G__23264);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$8 = (function (G__23265,G__23266,G__23267,G__23268,G__23269,G__23270,G__23271,G__23272){
var self__ = this;
var this__23155__auto__ = this;
var array23236 = cljs.core.object_array.call(null,(8));
(array23236[(0)] = G__23265);

(array23236[(1)] = G__23266);

(array23236[(2)] = G__23267);

(array23236[(3)] = G__23268);

(array23236[(4)] = G__23269);

(array23236[(5)] = G__23270);

(array23236[(6)] = G__23271);

(array23236[(7)] = G__23272);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$9 = (function (G__23273,G__23274,G__23275,G__23276,G__23277,G__23278,G__23279,G__23280,G__23281){
var self__ = this;
var this__23155__auto__ = this;
var array23236 = cljs.core.object_array.call(null,(9));
(array23236[(0)] = G__23273);

(array23236[(1)] = G__23274);

(array23236[(2)] = G__23275);

(array23236[(3)] = G__23276);

(array23236[(4)] = G__23277);

(array23236[(5)] = G__23278);

(array23236[(6)] = G__23279);

(array23236[(7)] = G__23280);

(array23236[(8)] = G__23281);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$10 = (function (G__23282,G__23283,G__23284,G__23285,G__23286,G__23287,G__23288,G__23289,G__23290,G__23291){
var self__ = this;
var this__23155__auto__ = this;
var array23236 = cljs.core.object_array.call(null,(10));
(array23236[(0)] = G__23282);

(array23236[(1)] = G__23283);

(array23236[(2)] = G__23284);

(array23236[(3)] = G__23285);

(array23236[(4)] = G__23286);

(array23236[(5)] = G__23287);

(array23236[(6)] = G__23288);

(array23236[(7)] = G__23289);

(array23236[(8)] = G__23290);

(array23236[(9)] = G__23291);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$11 = (function (G__23292,G__23293,G__23294,G__23295,G__23296,G__23297,G__23298,G__23299,G__23300,G__23301,G__23302){
var self__ = this;
var this__23155__auto__ = this;
var array23236 = cljs.core.object_array.call(null,(11));
(array23236[(0)] = G__23292);

(array23236[(1)] = G__23293);

(array23236[(2)] = G__23294);

(array23236[(3)] = G__23295);

(array23236[(4)] = G__23296);

(array23236[(5)] = G__23297);

(array23236[(6)] = G__23298);

(array23236[(7)] = G__23299);

(array23236[(8)] = G__23300);

(array23236[(9)] = G__23301);

(array23236[(10)] = G__23302);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$12 = (function (G__23303,G__23304,G__23305,G__23306,G__23307,G__23308,G__23309,G__23310,G__23311,G__23312,G__23313,G__23314){
var self__ = this;
var this__23155__auto__ = this;
var array23236 = cljs.core.object_array.call(null,(12));
(array23236[(0)] = G__23303);

(array23236[(1)] = G__23304);

(array23236[(2)] = G__23305);

(array23236[(3)] = G__23306);

(array23236[(4)] = G__23307);

(array23236[(5)] = G__23308);

(array23236[(6)] = G__23309);

(array23236[(7)] = G__23310);

(array23236[(8)] = G__23311);

(array23236[(9)] = G__23312);

(array23236[(10)] = G__23313);

(array23236[(11)] = G__23314);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$13 = (function (G__23315,G__23316,G__23317,G__23318,G__23319,G__23320,G__23321,G__23322,G__23323,G__23324,G__23325,G__23326,G__23327){
var self__ = this;
var this__23155__auto__ = this;
var array23236 = cljs.core.object_array.call(null,(13));
(array23236[(0)] = G__23315);

(array23236[(1)] = G__23316);

(array23236[(2)] = G__23317);

(array23236[(3)] = G__23318);

(array23236[(4)] = G__23319);

(array23236[(5)] = G__23320);

(array23236[(6)] = G__23321);

(array23236[(7)] = G__23322);

(array23236[(8)] = G__23323);

(array23236[(9)] = G__23324);

(array23236[(10)] = G__23325);

(array23236[(11)] = G__23326);

(array23236[(12)] = G__23327);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$14 = (function (G__23328,G__23329,G__23330,G__23331,G__23332,G__23333,G__23334,G__23335,G__23336,G__23337,G__23338,G__23339,G__23340,G__23341){
var self__ = this;
var this__23155__auto__ = this;
var array23236 = cljs.core.object_array.call(null,(14));
(array23236[(0)] = G__23328);

(array23236[(1)] = G__23329);

(array23236[(2)] = G__23330);

(array23236[(3)] = G__23331);

(array23236[(4)] = G__23332);

(array23236[(5)] = G__23333);

(array23236[(6)] = G__23334);

(array23236[(7)] = G__23335);

(array23236[(8)] = G__23336);

(array23236[(9)] = G__23337);

(array23236[(10)] = G__23338);

(array23236[(11)] = G__23339);

(array23236[(12)] = G__23340);

(array23236[(13)] = G__23341);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$15 = (function (G__23342,G__23343,G__23344,G__23345,G__23346,G__23347,G__23348,G__23349,G__23350,G__23351,G__23352,G__23353,G__23354,G__23355,G__23356){
var self__ = this;
var this__23155__auto__ = this;
var array23236 = cljs.core.object_array.call(null,(15));
(array23236[(0)] = G__23342);

(array23236[(1)] = G__23343);

(array23236[(2)] = G__23344);

(array23236[(3)] = G__23345);

(array23236[(4)] = G__23346);

(array23236[(5)] = G__23347);

(array23236[(6)] = G__23348);

(array23236[(7)] = G__23349);

(array23236[(8)] = G__23350);

(array23236[(9)] = G__23351);

(array23236[(10)] = G__23352);

(array23236[(11)] = G__23353);

(array23236[(12)] = G__23354);

(array23236[(13)] = G__23355);

(array23236[(14)] = G__23356);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$16 = (function (G__23357,G__23358,G__23359,G__23360,G__23361,G__23362,G__23363,G__23364,G__23365,G__23366,G__23367,G__23368,G__23369,G__23370,G__23371,G__23372){
var self__ = this;
var this__23155__auto__ = this;
var array23236 = cljs.core.object_array.call(null,(16));
(array23236[(0)] = G__23357);

(array23236[(1)] = G__23358);

(array23236[(2)] = G__23359);

(array23236[(3)] = G__23360);

(array23236[(4)] = G__23361);

(array23236[(5)] = G__23362);

(array23236[(6)] = G__23363);

(array23236[(7)] = G__23364);

(array23236[(8)] = G__23365);

(array23236[(9)] = G__23366);

(array23236[(10)] = G__23367);

(array23236[(11)] = G__23368);

(array23236[(12)] = G__23369);

(array23236[(13)] = G__23370);

(array23236[(14)] = G__23371);

(array23236[(15)] = G__23372);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$17 = (function (G__23373,G__23374,G__23375,G__23376,G__23377,G__23378,G__23379,G__23380,G__23381,G__23382,G__23383,G__23384,G__23385,G__23386,G__23387,G__23388,G__23389){
var self__ = this;
var this__23155__auto__ = this;
var array23236 = cljs.core.object_array.call(null,(17));
(array23236[(0)] = G__23373);

(array23236[(1)] = G__23374);

(array23236[(2)] = G__23375);

(array23236[(3)] = G__23376);

(array23236[(4)] = G__23377);

(array23236[(5)] = G__23378);

(array23236[(6)] = G__23379);

(array23236[(7)] = G__23380);

(array23236[(8)] = G__23381);

(array23236[(9)] = G__23382);

(array23236[(10)] = G__23383);

(array23236[(11)] = G__23384);

(array23236[(12)] = G__23385);

(array23236[(13)] = G__23386);

(array23236[(14)] = G__23387);

(array23236[(15)] = G__23388);

(array23236[(16)] = G__23389);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$18 = (function (G__23390,G__23391,G__23392,G__23393,G__23394,G__23395,G__23396,G__23397,G__23398,G__23399,G__23400,G__23401,G__23402,G__23403,G__23404,G__23405,G__23406,G__23407){
var self__ = this;
var this__23155__auto__ = this;
var array23236 = cljs.core.object_array.call(null,(18));
(array23236[(0)] = G__23390);

(array23236[(1)] = G__23391);

(array23236[(2)] = G__23392);

(array23236[(3)] = G__23393);

(array23236[(4)] = G__23394);

(array23236[(5)] = G__23395);

(array23236[(6)] = G__23396);

(array23236[(7)] = G__23397);

(array23236[(8)] = G__23398);

(array23236[(9)] = G__23399);

(array23236[(10)] = G__23400);

(array23236[(11)] = G__23401);

(array23236[(12)] = G__23402);

(array23236[(13)] = G__23403);

(array23236[(14)] = G__23404);

(array23236[(15)] = G__23405);

(array23236[(16)] = G__23406);

(array23236[(17)] = G__23407);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$19 = (function (G__23408,G__23409,G__23410,G__23411,G__23412,G__23413,G__23414,G__23415,G__23416,G__23417,G__23418,G__23419,G__23420,G__23421,G__23422,G__23423,G__23424,G__23425,G__23426){
var self__ = this;
var this__23155__auto__ = this;
var array23236 = cljs.core.object_array.call(null,(19));
(array23236[(0)] = G__23408);

(array23236[(1)] = G__23409);

(array23236[(2)] = G__23410);

(array23236[(3)] = G__23411);

(array23236[(4)] = G__23412);

(array23236[(5)] = G__23413);

(array23236[(6)] = G__23414);

(array23236[(7)] = G__23415);

(array23236[(8)] = G__23416);

(array23236[(9)] = G__23417);

(array23236[(10)] = G__23418);

(array23236[(11)] = G__23419);

(array23236[(12)] = G__23420);

(array23236[(13)] = G__23421);

(array23236[(14)] = G__23422);

(array23236[(15)] = G__23423);

(array23236[(16)] = G__23424);

(array23236[(17)] = G__23425);

(array23236[(18)] = G__23426);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$20 = (function (G__23427,G__23428,G__23429,G__23430,G__23431,G__23432,G__23433,G__23434,G__23435,G__23436,G__23437,G__23438,G__23439,G__23440,G__23441,G__23442,G__23443,G__23444,G__23445,G__23446){
var self__ = this;
var this__23155__auto__ = this;
var array23236 = cljs.core.object_array.call(null,(20));
(array23236[(0)] = G__23427);

(array23236[(1)] = G__23428);

(array23236[(2)] = G__23429);

(array23236[(3)] = G__23430);

(array23236[(4)] = G__23431);

(array23236[(5)] = G__23432);

(array23236[(6)] = G__23433);

(array23236[(7)] = G__23434);

(array23236[(8)] = G__23435);

(array23236[(9)] = G__23436);

(array23236[(10)] = G__23437);

(array23236[(11)] = G__23438);

(array23236[(12)] = G__23439);

(array23236[(13)] = G__23440);

(array23236[(14)] = G__23441);

(array23236[(15)] = G__23442);

(array23236[(16)] = G__23443);

(array23236[(17)] = G__23444);

(array23236[(18)] = G__23445);

(array23236[(19)] = G__23446);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23155__auto__,array23236,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$21 = (function (p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest){
var self__ = this;
var this$ = this;
var a = cljs.core.object_array.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20], null),rest));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this$,a,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22257__auto__){
var self__ = this;
var this__22257__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22253__auto__){
var self__ = this;
var this__22253__auto____$1 = this;
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22263__auto__){
var self__ = this;
var this__22263__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22254__auto__){
var self__ = this;
var this__22254__auto____$1 = this;
var h__22026__auto__ = self__.__hash;
if(!((h__22026__auto__ == null))){
return h__22026__auto__;
} else {
var h__22026__auto____$1 = cljs.core.hash_imap.call(null,this__22254__auto____$1);
self__.__hash = h__22026__auto____$1;

return h__22026__auto____$1;
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22255__auto__,other__22256__auto__){
var self__ = this;
var this__22255__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21577__auto__ = other__22256__auto__;
if(cljs.core.truth_(and__21577__auto__)){
var and__21577__auto____$1 = (this__22255__auto____$1.constructor === other__22256__auto__.constructor);
if(and__21577__auto____$1){
return cljs.core.equiv_map.call(null,this__22255__auto____$1,other__22256__auto__);
} else {
return and__21577__auto____$1;
}
} else {
return and__21577__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22268__auto__,k__22269__auto__){
var self__ = this;
var this__22268__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),null], null), null),k__22269__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22268__auto____$1),self__.__meta),k__22269__auto__);
} else {
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22269__auto__)),null));
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22266__auto__,k__22267__auto__,G__23447){
var self__ = this;
var this__22266__auto____$1 = this;
var pred__23452 = cljs.core.keyword_identical_QMARK_;
var expr__23453 = k__22267__auto__;
if(cljs.core.truth_(pred__23452.call(null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),expr__23453))){
return (new com.rpl.specter.impl.ParamsNeededPath(G__23447,self__.num_needed_params,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23452.call(null,new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),expr__23453))){
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,G__23447,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22267__auto__,G__23447),null));
}
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22271__auto__){
var self__ = this;
var this__22271__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),self__.num_needed_params],null))], null),self__.__extmap));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22258__auto__,G__23447){
var self__ = this;
var this__22258__auto____$1 = this;
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,G__23447,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22264__auto__,entry__22265__auto__){
var self__ = this;
var this__22264__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22265__auto__)){
return cljs.core._assoc.call(null,this__22264__auto____$1,cljs.core._nth.call(null,entry__22265__auto__,(0)),cljs.core._nth.call(null,entry__22265__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22264__auto____$1,entry__22265__auto__);
}
});

com.rpl.specter.impl.ParamsNeededPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transform-fns","transform-fns",-1985393120,null),new cljs.core.Symbol(null,"num-needed-params","num-needed-params",421205430,null)], null);
});

com.rpl.specter.impl.ParamsNeededPath.cljs$lang$type = true;

com.rpl.specter.impl.ParamsNeededPath.cljs$lang$ctorPrSeq = (function (this__22295__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/ParamsNeededPath");
});

com.rpl.specter.impl.ParamsNeededPath.cljs$lang$ctorPrWriter = (function (this__22295__auto__,writer__22296__auto__){
return cljs.core._write.call(null,writer__22296__auto__,"com.rpl.specter.impl/ParamsNeededPath");
});

com.rpl.specter.impl.__GT_ParamsNeededPath = (function com$rpl$specter$impl$__GT_ParamsNeededPath(transform_fns,num_needed_params){
return (new com.rpl.specter.impl.ParamsNeededPath(transform_fns,num_needed_params,null,null,null));
});

com.rpl.specter.impl.map__GT_ParamsNeededPath = (function com$rpl$specter$impl$map__GT_ParamsNeededPath(G__23449){
return (new com.rpl.specter.impl.ParamsNeededPath(new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(G__23449),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097).cljs$core$IFn$_invoke$arity$1(G__23449),null,cljs.core.dissoc.call(null,G__23449,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097)),null));
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
var x__22302__auto__ = (((paths == null))?null:paths);
var m__22303__auto__ = (com.rpl.specter.impl.do_comp_paths[goog.typeOf(x__22302__auto__)]);
if(!((m__22303__auto__ == null))){
return m__22303__auto__.call(null,paths);
} else {
var m__22303__auto____$1 = (com.rpl.specter.impl.do_comp_paths["_"]);
if(!((m__22303__auto____$1 == null))){
return m__22303__auto____$1.call(null,paths);
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
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"select*","select*",-1829914060),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$Navigator$))?true:false):false))?(function (G__23465,G__23466,G__23467){
return com.rpl.specter.protocols.select_STAR_.call(null,G__23465,G__23466,G__23467);
}):com.rpl.specter.protocols.select_STAR_),new cljs.core.Keyword(null,"transform*","transform*",-1613794522),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$Navigator$))?true:false):false))?(function (G__23469,G__23470,G__23471){
return com.rpl.specter.protocols.transform_STAR_.call(null,G__23469,G__23470,G__23471);
}):com.rpl.specter.protocols.transform_STAR_)], null);
});
com.rpl.specter.impl.collector_impl = (function com$rpl$specter$impl$collector_impl(obj){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collect-val","collect-val",801894069),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$Collector$))?true:false):false))?(function (G__23476,G__23477){
return com.rpl.specter.protocols.collect_val.call(null,G__23476,G__23477);
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
var or__21589__auto__ = cljs.core.fn_QMARK_.call(null,obj);
if(or__21589__auto__){
return or__21589__auto__;
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
var x__22302__auto__ = (((this$ == null))?null:this$);
var m__22303__auto__ = (com.rpl.specter.impl.coerce_path[goog.typeOf(x__22302__auto__)]);
if(!((m__22303__auto__ == null))){
return m__22303__auto__.call(null,this$);
} else {
var m__22303__auto____$1 = (com.rpl.specter.impl.coerce_path["_"]);
if(!((m__22303__auto____$1 == null))){
return m__22303__auto____$1.call(null,this$);
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
com.rpl.specter.impl.combine_same_types = (function com$rpl$specter$impl$combine_same_types(p__23484){
var vec__23488 = p__23484;
var seq__23489 = cljs.core.seq.call(null,vec__23488);
var first__23490 = cljs.core.first.call(null,seq__23489);
var seq__23489__$1 = cljs.core.next.call(null,seq__23489);
var f = first__23490;
var _ = seq__23489__$1;
var all = vec__23488;
var exs = f.executors;
var t = exs.type;
var combiner = ((cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"richpath","richpath",-150197948)))?((function (exs,t,vec__23488,seq__23489,first__23490,seq__23489__$1,f,_,all){
return (function (curr,next){
return ((function (exs,t,vec__23488,seq__23489,first__23490,seq__23489__$1,f,_,all){
return (function (params,params_idx,vals,structure,next_fn){
return curr.call(null,params,params_idx,vals,structure,((function (exs,t,vec__23488,seq__23489,first__23490,seq__23489__$1,f,_,all){
return (function (params_next,params_idx_next,vals_next,structure_next){
return next.call(null,params_next,params_idx_next,vals_next,structure_next,next_fn);
});})(exs,t,vec__23488,seq__23489,first__23490,seq__23489__$1,f,_,all))
);
});
;})(exs,t,vec__23488,seq__23489,first__23490,seq__23489__$1,f,_,all))
});})(exs,t,vec__23488,seq__23489,first__23490,seq__23489__$1,f,_,all))
:((function (exs,t,vec__23488,seq__23489,first__23490,seq__23489__$1,f,_,all){
return (function (curr,next){
return ((function (exs,t,vec__23488,seq__23489,first__23490,seq__23489__$1,f,_,all){
return (function (structure,next_fn){
return curr.call(null,structure,((function (exs,t,vec__23488,seq__23489,first__23490,seq__23489__$1,f,_,all){
return (function (structure__$1){
return next.call(null,structure__$1,next_fn);
});})(exs,t,vec__23488,seq__23489,first__23490,seq__23489__$1,f,_,all))
);
});
;})(exs,t,vec__23488,seq__23489,first__23490,seq__23489__$1,f,_,all))
});})(exs,t,vec__23488,seq__23489,first__23490,seq__23489__$1,f,_,all))
);
return cljs.core.reduce.call(null,((function (exs,t,combiner,vec__23488,seq__23489,first__23490,seq__23489__$1,f,_,all){
return (function (curr,next){
return com.rpl.specter.impl.__GT_TransformFunctions.call(null,exs,combiner.call(null,curr.selector,next.selector),combiner.call(null,curr.transformer,next.transformer));
});})(exs,t,combiner,vec__23488,seq__23489,first__23490,seq__23489__$1,f,_,all))
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
return (function (p1__23491_SHARP_){
return (p1__23491_SHARP_ instanceof com.rpl.specter.impl.ParamsNeededPath);
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
return path.num_needed_params;
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
var x__22302__auto__ = (((cell == null))?null:cell);
var m__22303__auto__ = (com.rpl.specter.impl.set_cell[goog.typeOf(x__22302__auto__)]);
if(!((m__22303__auto__ == null))){
return m__22303__auto__.call(null,cell,x);
} else {
var m__22303__auto____$1 = (com.rpl.specter.impl.set_cell["_"]);
if(!((m__22303__auto____$1 == null))){
return m__22303__auto____$1.call(null,cell,x);
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

com.rpl.specter.impl.MutableCell.cljs$lang$ctorPrWriter = (function (this__22241__auto__,writer__22242__auto__,opt__22243__auto__){
return cljs.core._write.call(null,writer__22242__auto__,"com.rpl.specter.impl/MutableCell");
});

com.rpl.specter.impl.__GT_MutableCell = (function com$rpl$specter$impl$__GT_MutableCell(q){
return (new com.rpl.specter.impl.MutableCell(q));
});

com.rpl.specter.impl.mutable_cell = (function com$rpl$specter$impl$mutable_cell(var_args){
var args23492 = [];
var len__22772__auto___23495 = arguments.length;
var i__22773__auto___23496 = (0);
while(true){
if((i__22773__auto___23496 < len__22772__auto___23495)){
args23492.push((arguments[i__22773__auto___23496]));

var G__23497 = (i__22773__auto___23496 + (1));
i__22773__auto___23496 = G__23497;
continue;
} else {
}
break;
}

var G__23494 = args23492.length;
switch (G__23494) {
case 0:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23492.length)].join('')));

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
var x__22302__auto__ = (((structure == null))?null:structure);
var m__22303__auto__ = (com.rpl.specter.impl.append_all[goog.typeOf(x__22302__auto__)]);
if(!((m__22303__auto__ == null))){
return m__22303__auto__.call(null,structure,elements);
} else {
var m__22303__auto____$1 = (com.rpl.specter.impl.append_all["_"]);
if(!((m__22303__auto____$1 == null))){
return m__22303__auto____$1.call(null,structure,elements);
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
var x__22302__auto__ = (((structure == null))?null:structure);
var m__22303__auto__ = (com.rpl.specter.impl.prepend_all[goog.typeOf(x__22302__auto__)]);
if(!((m__22303__auto__ == null))){
return m__22303__auto__.call(null,structure,elements);
} else {
var m__22303__auto____$1 = (com.rpl.specter.impl.prepend_all["_"]);
if(!((m__22303__auto____$1 == null))){
return m__22303__auto____$1.call(null,structure,elements);
} else {
throw cljs.core.missing_protocol.call(null,"AddExtremes.prepend-all",structure);
}
}
}
});

(com.rpl.specter.impl.AddExtremes["null"] = true);

(com.rpl.specter.impl.append_all["null"] = (function (_,elements){
return elements;
}));

(com.rpl.specter.impl.prepend_all["null"] = (function (_,elements){
return elements;
}));

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
var x__22302__auto__ = (((s == null))?null:s);
var m__22303__auto__ = (com.rpl.specter.impl.update_first[goog.typeOf(x__22302__auto__)]);
if(!((m__22303__auto__ == null))){
return m__22303__auto__.call(null,s,afn);
} else {
var m__22303__auto____$1 = (com.rpl.specter.impl.update_first["_"]);
if(!((m__22303__auto____$1 == null))){
return m__22303__auto____$1.call(null,s,afn);
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
var x__22302__auto__ = (((s == null))?null:s);
var m__22303__auto__ = (com.rpl.specter.impl.update_last[goog.typeOf(x__22302__auto__)]);
if(!((m__22303__auto__ == null))){
return m__22303__auto__.call(null,s,afn);
} else {
var m__22303__auto____$1 = (com.rpl.specter.impl.update_last["_"]);
if(!((m__22303__auto____$1 == null))){
return m__22303__auto____$1.call(null,s,afn);
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
var x__22302__auto__ = (((s == null))?null:s);
var m__22303__auto__ = (com.rpl.specter.impl.get_first[goog.typeOf(x__22302__auto__)]);
if(!((m__22303__auto__ == null))){
return m__22303__auto__.call(null,s);
} else {
var m__22303__auto____$1 = (com.rpl.specter.impl.get_first["_"]);
if(!((m__22303__auto____$1 == null))){
return m__22303__auto____$1.call(null,s);
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
var x__22302__auto__ = (((s == null))?null:s);
var m__22303__auto__ = (com.rpl.specter.impl.get_last[goog.typeOf(x__22302__auto__)]);
if(!((m__22303__auto__ == null))){
return m__22303__auto__.call(null,s);
} else {
var m__22303__auto____$1 = (com.rpl.specter.impl.get_last["_"]);
if(!((m__22303__auto____$1 == null))){
return m__22303__auto____$1.call(null,s);
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
var x__22302__auto__ = (((s == null))?null:s);
var m__22303__auto__ = (com.rpl.specter.impl.fast_empty_QMARK_[goog.typeOf(x__22302__auto__)]);
if(!((m__22303__auto__ == null))){
return m__22303__auto__.call(null,s);
} else {
var m__22303__auto____$1 = (com.rpl.specter.impl.fast_empty_QMARK_["_"]);
if(!((m__22303__auto____$1 == null))){
return m__22303__auto____$1.call(null,s);
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
var c = (com.rpl.specter.impl.vec_count.call(null,v__$1) | (0));
var G__23499 = c;
switch (G__23499) {
case (1):
var vec__23500 = v__$1;
var e = cljs.core.nth.call(null,vec__23500,(0),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [afn.call(null,e)], null);

break;
case (2):
var vec__23503 = v__$1;
var e1 = cljs.core.nth.call(null,vec__23503,(0),null);
var e2 = cljs.core.nth.call(null,vec__23503,(1),null);
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
(com.rpl.specter.impl.FastEmpty["null"] = true);

(com.rpl.specter.impl.fast_empty_QMARK_["null"] = (function (_){
return true;
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
if(cljs.core.truth_((function (){var and__21577__auto__ = com.rpl.specter.impl.fn_invocation_QMARK_.call(null,structure);
if(cljs.core.truth_(and__21577__auto__)){
return com.rpl.specter.impl.fn_invocation_QMARK_.call(null,ret);
} else {
return and__21577__auto__;
}
})())){
return cljs.core.with_meta.call(null,ret,cljs.core.meta.call(null,structure));
} else {
return ret;
}
}
});
com.rpl.specter.impl.collected_QMARK__STAR_ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params,params_idx,vals,structure,next_fn){
var afn = (params[params_idx]);
if(cljs.core.truth_(afn.call(null,vals))){
return next_fn.call(null,params,(params_idx + (1)),vals,structure);
} else {
return com.rpl.specter.impl.NONE;
}
}),(function (params,params_idx,vals,structure,next_fn){
var afn = (params[params_idx]);
if(cljs.core.truth_(afn.call(null,vals))){
return next_fn.call(null,params,(params_idx + (1)),vals,structure);
} else {
return structure;
}
})),(1));
com.rpl.specter.impl.DISPENSE_STAR_ = com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params,params_idx,vals,structure,next_fn){
return next_fn.call(null,params,params_idx,cljs.core.PersistentVector.EMPTY,structure);
}),(function (params,params_idx,vals,structure,next_fn){
return next_fn.call(null,params,params_idx,cljs.core.PersistentVector.EMPTY,structure);
})));
com.rpl.specter.impl.transform_fns_field = (function com$rpl$specter$impl$transform_fns_field(path){
return path.transform_fns;
});
com.rpl.specter.impl.executors_field = (function com$rpl$specter$impl$executors_field(tfns){
return tfns.executors;
});
com.rpl.specter.impl.traverse_executor_field = (function com$rpl$specter$impl$traverse_executor_field(ex){
return ex.traverse_executor;
});
com.rpl.specter.impl.params_field = (function com$rpl$specter$impl$params_field(path){
return path.params;
});
com.rpl.specter.impl.params_idx_field = (function com$rpl$specter$impl$params_idx_field(path){
return path.params_idx;
});
com.rpl.specter.impl.selector_field = (function com$rpl$specter$impl$selector_field(tfns){
return tfns.selector;
});
com.rpl.specter.impl.compiled_traverse_STAR_ = (function com$rpl$specter$impl$compiled_traverse_STAR_(path,result_fn,structure){
var tfns = com.rpl.specter.impl.transform_fns_field.call(null,path);
var ex = com.rpl.specter.impl.executors_field.call(null,tfns);
return com.rpl.specter.impl.traverse_executor_field.call(null,ex).call(null,com.rpl.specter.impl.params_field.call(null,path),com.rpl.specter.impl.params_idx_field.call(null,path),com.rpl.specter.impl.selector_field.call(null,tfns),result_fn,structure);
});
com.rpl.specter.impl.do_compiled_traverse = (function com$rpl$specter$impl$do_compiled_traverse(apath,structure){
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl23510 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl23510 = (function (do_compiled_traverse,apath,structure,meta23511){
this.do_compiled_traverse = do_compiled_traverse;
this.apath = apath;
this.structure = structure;
this.meta23511 = meta23511;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.impl.t_com$rpl$specter$impl23510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23512,meta23511__$1){
var self__ = this;
var _23512__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl23510(self__.do_compiled_traverse,self__.apath,self__.structure,meta23511__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl23510.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23512){
var self__ = this;
var _23512__$1 = this;
return self__.meta23511;
});

com.rpl.specter.impl.t_com$rpl$specter$impl23510.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,afn){
var self__ = this;
var this$__$1 = this;
return cljs.core._reduce.call(null,this$__$1,afn,afn.call(null));
});

com.rpl.specter.impl.t_com$rpl$specter$impl23510.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,afn,start){
var self__ = this;
var this$__$1 = this;
var cell = com.rpl.specter.impl.mutable_cell.call(null,start);
com.rpl.specter.impl.compiled_traverse_STAR_.call(null,self__.apath,((function (cell,this$__$1){
return (function (elem){
var curr = com.rpl.specter.impl.get_cell.call(null,cell);
return com.rpl.specter.impl.set_cell_BANG_.call(null,cell,afn.call(null,curr,elem));
});})(cell,this$__$1))
,self__.structure);

return com.rpl.specter.impl.get_cell.call(null,cell);
});

com.rpl.specter.impl.t_com$rpl$specter$impl23510.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"do-compiled-traverse","do-compiled-traverse",1409923277,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"apath","apath",567854908,null),new cljs.core.Symbol(null,"structure","structure",-1090603686,null)], null)))], null)),new cljs.core.Symbol(null,"apath","apath",567854908,null),new cljs.core.Symbol(null,"structure","structure",-1090603686,null),new cljs.core.Symbol(null,"meta23511","meta23511",16353864,null)], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl23510.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl23510.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl23510";

com.rpl.specter.impl.t_com$rpl$specter$impl23510.cljs$lang$ctorPrWriter = (function (this__22241__auto__,writer__22242__auto__,opt__22243__auto__){
return cljs.core._write.call(null,writer__22242__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl23510");
});

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl23510 = (function com$rpl$specter$impl$do_compiled_traverse_$___GT_t_com$rpl$specter$impl23510(do_compiled_traverse__$1,apath__$1,structure__$1,meta23511){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl23510(do_compiled_traverse__$1,apath__$1,structure__$1,meta23511));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl23510(com$rpl$specter$impl$do_compiled_traverse,apath,structure,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.compiled_select_STAR_ = (function com$rpl$specter$impl$compiled_select_STAR_(path,structure){
var res = com.rpl.specter.impl.mutable_cell.call(null,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY));
var result_fn = ((function (res){
return (function (structure__$1){
var curr = com.rpl.specter.impl.get_cell.call(null,res);
return com.rpl.specter.impl.set_cell_BANG_.call(null,res,cljs.core.conj_BANG_.call(null,curr,structure__$1));
});})(res))
;
com.rpl.specter.impl.compiled_traverse_STAR_.call(null,path,result_fn,structure);

return cljs.core.persistent_BANG_.call(null,com.rpl.specter.impl.get_cell.call(null,res));
});
com.rpl.specter.impl.compiled_select_one_STAR_ = (function com$rpl$specter$impl$compiled_select_one_STAR_(path,structure){
var res = com.rpl.specter.impl.mutable_cell.call(null,com.rpl.specter.impl.NONE);
var result_fn = ((function (res){
return (function (structure__$1){
var curr = com.rpl.specter.impl.get_cell.call(null,res);
if((curr === com.rpl.specter.impl.NONE)){
return com.rpl.specter.impl.set_cell_BANG_.call(null,res,structure__$1);
} else {
return com.rpl.specter.impl.throw_illegal.call(null,"More than one element found in structure: ",structure__$1);
}
});})(res))
;
com.rpl.specter.impl.compiled_traverse_STAR_.call(null,path,result_fn,structure);

var ret = com.rpl.specter.impl.get_cell.call(null,res);
if((ret === com.rpl.specter.impl.NONE)){
return null;
} else {
return ret;
}
});
com.rpl.specter.impl.compiled_select_one_BANG__STAR_ = (function com$rpl$specter$impl$compiled_select_one_BANG__STAR_(path,structure){
var res = com.rpl.specter.impl.mutable_cell.call(null,com.rpl.specter.impl.NONE);
var result_fn = ((function (res){
return (function (structure__$1){
var curr = com.rpl.specter.impl.get_cell.call(null,res);
if((curr === com.rpl.specter.impl.NONE)){
return com.rpl.specter.impl.set_cell_BANG_.call(null,res,structure__$1);
} else {
return com.rpl.specter.impl.throw_illegal.call(null,"More than one element found in structure: ",structure__$1);
}
});})(res))
;
com.rpl.specter.impl.compiled_traverse_STAR_.call(null,path,result_fn,structure);

var ret = com.rpl.specter.impl.get_cell.call(null,res);
if((com.rpl.specter.impl.NONE === ret)){
com.rpl.specter.impl.throw_illegal.call(null,"Found no elements for select-one! on ",structure);
} else {
}

return ret;
});
com.rpl.specter.impl.compiled_select_first_STAR_ = (function com$rpl$specter$impl$compiled_select_first_STAR_(path,structure){
var res = com.rpl.specter.impl.mutable_cell.call(null,com.rpl.specter.impl.NONE);
var result_fn = ((function (res){
return (function (structure__$1){
var curr = com.rpl.specter.impl.get_cell.call(null,res);
if((curr === com.rpl.specter.impl.NONE)){
return com.rpl.specter.impl.set_cell_BANG_.call(null,res,structure__$1);
} else {
return null;
}
});})(res))
;
com.rpl.specter.impl.compiled_traverse_STAR_.call(null,path,result_fn,structure);

var ret = com.rpl.specter.impl.get_cell.call(null,res);
if((ret === com.rpl.specter.impl.NONE)){
return null;
} else {
return ret;
}
});
com.rpl.specter.impl.compiled_select_any_STAR_ = (function com$rpl$specter$impl$compiled_select_any_STAR_(path,structure){
return com.rpl.specter.impl.compiled_traverse_STAR_.call(null,path,cljs.core.identity,structure);
});
com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_ = (function com$rpl$specter$impl$compiled_selected_any_QMARK__STAR_(path,structure){
return cljs.core.not_EQ_.call(null,com.rpl.specter.impl.NONE,com.rpl.specter.impl.compiled_select_any_STAR_.call(null,path,structure));
});
com.rpl.specter.impl.compiled_transform_STAR_ = (function com$rpl$specter$impl$compiled_transform_STAR_(path,transform_fn,structure){
var tfns = path.transform_fns;
var ex = tfns.executors;
return ex.transform_executor.call(null,path.params,path.params_idx,tfns.transformer,transform_fn,structure);
});
com.rpl.specter.impl.not_selected_QMARK__STAR_ = (function com$rpl$specter$impl$not_selected_QMARK__STAR_(compiled_path,structure){
return (com.rpl.specter.impl.NONE === com.rpl.specter.impl.compiled_select_any_STAR_.call(null,compiled_path,structure));
});
com.rpl.specter.impl.selected_QMARK__STAR_ = (function com$rpl$specter$impl$selected_QMARK__STAR_(compiled_path,structure){
return cljs.core.not.call(null,com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,compiled_path,structure));
});
com.rpl.specter.impl.walk_select = (function com$rpl$specter$impl$walk_select(pred,continue_fn,structure){
var ret = com.rpl.specter.impl.mutable_cell.call(null,com.rpl.specter.impl.NONE);
var walker = ((function (ret){
return (function com$rpl$specter$impl$walk_select_$_this(structure__$1){
if(cljs.core.truth_(pred.call(null,structure__$1))){
var r = continue_fn.call(null,structure__$1);
if(!((r === com.rpl.specter.impl.NONE))){
com.rpl.specter.impl.set_cell_BANG_.call(null,ret,r);
} else {
}

return r;
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
return cljs.core.reduce.call(null,(function (curr__23118__auto__,e){
var ret__23119__auto__ = next_fn.call(null,e);
if((ret__23119__auto__ === com.rpl.specter.impl.NONE)){
return curr__23118__auto__;
} else {
return ret__23119__auto__;
}
}),com.rpl.specter.impl.NONE,structure);
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
var x__22302__auto__ = (((structure == null))?null:structure);
var m__22303__auto__ = (com.rpl.specter.impl.all_transform[goog.typeOf(x__22302__auto__)]);
if(!((m__22303__auto__ == null))){
return m__22303__auto__.call(null,structure,next_fn);
} else {
var m__22303__auto____$1 = (com.rpl.specter.impl.all_transform["_"]);
if(!((m__22303__auto____$1 == null))){
return m__22303__auto____$1.call(null,structure,next_fn);
} else {
throw cljs.core.missing_protocol.call(null,"AllTransformProtocol.all-transform",structure);
}
}
}
});

com.rpl.specter.impl.non_transient_map_all_transform = (function com$rpl$specter$impl$non_transient_map_all_transform(structure,next_fn,empty_map){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
var vec__23516 = next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
var newk = cljs.core.nth.call(null,vec__23516,(0),null);
var newv = cljs.core.nth.call(null,vec__23516,(1),null);
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
return com.rpl.specter.impl.non_transient_map_all_transform.call(null,structure__$1,next_fn,cljs.core.empty.call(null,structure__$1));
});

cljs.core.PersistentHashMap.prototype.com$rpl$specter$impl$AllTransformProtocol$ = true;

cljs.core.PersistentHashMap.prototype.com$rpl$specter$impl$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (structure__$1){
return (function (m,k,v){
var vec__23520 = next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
var newk = cljs.core.nth.call(null,vec__23520,(0),null);
var newv = cljs.core.nth.call(null,vec__23520,(1),null);
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
return (function (p1__23519_SHARP_){
return next_fn.call(null,p1__23519_SHARP_);
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

com.rpl.specter.impl.AllNavigator.cljs$lang$ctorPrWriter = (function (this__22241__auto__,writer__22242__auto__,opt__22243__auto__){
return cljs.core._write.call(null,writer__22242__auto__,"com.rpl.specter.impl/AllNavigator");
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
var x__22302__auto__ = (((structure == null))?null:structure);
var m__22303__auto__ = (com.rpl.specter.impl.map_vals_transform[goog.typeOf(x__22302__auto__)]);
if(!((m__22303__auto__ == null))){
return m__22303__auto__.call(null,structure,next_fn);
} else {
var m__22303__auto____$1 = (com.rpl.specter.impl.map_vals_transform["_"]);
if(!((m__22303__auto____$1 == null))){
return m__22303__auto____$1.call(null,structure,next_fn);
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
(com.rpl.specter.impl.MapValsTransformProtocol["null"] = true);

(com.rpl.specter.impl.map_vals_transform["null"] = (function (structure,next_fn){
return null;
}));

cljs.core.PersistentArrayMap.prototype.com$rpl$specter$impl$MapValsTransformProtocol$ = true;

cljs.core.PersistentArrayMap.prototype.com$rpl$specter$impl$MapValsTransformProtocol$map_vals_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.impl.map_vals_non_transient_transform.call(null,structure__$1,cljs.core.PersistentArrayMap.EMPTY,next_fn);
});

cljs.core.PersistentTreeMap.prototype.com$rpl$specter$impl$MapValsTransformProtocol$ = true;

cljs.core.PersistentTreeMap.prototype.com$rpl$specter$impl$MapValsTransformProtocol$map_vals_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.impl.map_vals_non_transient_transform.call(null,structure__$1,cljs.core.empty.call(null,structure__$1),next_fn);
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

com.rpl.specter.impl.ValCollect.cljs$lang$ctorPrWriter = (function (this__22241__auto__,writer__22242__auto__,opt__22243__auto__){
return cljs.core._write.call(null,writer__22242__auto__,"com.rpl.specter.impl/ValCollect");
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

com.rpl.specter.impl.PosNavigator.cljs$lang$ctorPrWriter = (function (this__22241__auto__,writer__22242__auto__,opt__22243__auto__){
return cljs.core._write.call(null,writer__22242__auto__,"com.rpl.specter.impl/PosNavigator");
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
return com.rpl.specter.impl.NONE;
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
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p__23527,i){
var vec__23528 = p__23527;
var ranges = cljs.core.nth.call(null,vec__23528,(0),null);
var curr_start = cljs.core.nth.call(null,vec__23528,(1),null);
var curr_last = cljs.core.nth.call(null,vec__23528,(2),null);
var curr = vec__23528;
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

com.rpl.specter.impl.TransientEndNavigator.cljs$lang$ctorPrWriter = (function (this__22241__auto__,writer__22242__auto__,opt__22243__auto__){
return cljs.core._write.call(null,writer__22242__auto__,"com.rpl.specter.impl/TransientEndNavigator");
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
var and__21577__auto__ = combined.call(null,structure);
if(cljs.core.truth_(and__21577__auto__)){
return afn.call(null,structure);
} else {
return and__21577__auto__;
}
});
}),path);
} else {
return null;
}
}
});
com.rpl.specter.impl.if_select = (function com$rpl$specter$impl$if_select(params,params_idx,vals,structure,next_fn,then_tester,then_s,then_params,else_s){
var test_QMARK_ = then_tester.call(null,structure);
var sel = (cljs.core.truth_(test_QMARK_)?then_s:else_s);
var idx = (cljs.core.truth_(test_QMARK_)?params_idx:(params_idx + then_params));
return sel.call(null,params,idx,vals,structure,next_fn);
});
com.rpl.specter.impl.if_transform = (function com$rpl$specter$impl$if_transform(params,params_idx,vals,structure,next_fn,then_tester,then_t,then_params,else_t){
var test_QMARK_ = then_tester.call(null,structure);
var tran = (cljs.core.truth_(test_QMARK_)?then_t:else_t);
var idx = (cljs.core.truth_(test_QMARK_)?params_idx:(params_idx + then_params));
return tran.call(null,params,idx,vals,structure,next_fn);
});
com.rpl.specter.impl.terminal_STAR_ = (function com$rpl$specter$impl$terminal_STAR_(params,params_idx,vals,structure){
var afn = (params[params_idx]);
if((vals === cljs.core.PersistentVector.EMPTY)){
return afn.call(null,structure);
} else {
return cljs.core.apply.call(null,afn,cljs.core.conj.call(null,vals,structure));
}
});
com.rpl.specter.impl.filter_select = (function com$rpl$specter$impl$filter_select(afn,structure,next_fn){
if(cljs.core.truth_(afn.call(null,structure))){
return next_fn.call(null,structure);
} else {
return com.rpl.specter.impl.NONE;
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
com.rpl.specter.impl.LayeredNav.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22259__auto__,k__22260__auto__){
var self__ = this;
var this__22259__auto____$1 = this;
return cljs.core._lookup.call(null,this__22259__auto____$1,k__22260__auto__,null);
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22261__auto__,k23532,else__22262__auto__){
var self__ = this;
var this__22261__auto____$1 = this;
var G__23534 = (((k23532 instanceof cljs.core.Keyword))?k23532.fqn:null);
switch (G__23534) {
case "underlying":
return self__.underlying;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23532,else__22262__auto__);

}
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22273__auto__,writer__22274__auto__,opts__22275__auto__){
var self__ = this;
var this__22273__auto____$1 = this;
var pr_pair__22276__auto__ = ((function (this__22273__auto____$1){
return (function (keyval__22277__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22274__auto__,cljs.core.pr_writer,""," ","",opts__22275__auto__,keyval__22277__auto__);
});})(this__22273__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22274__auto__,pr_pair__22276__auto__,"#com.rpl.specter.impl.LayeredNav{",", ","}",opts__22275__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"underlying","underlying",-1492391849),self__.underlying],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23531){
var self__ = this;
var G__23531__$1 = this;
return (new cljs.core.RecordIter((0),G__23531__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"underlying","underlying",-1492391849)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22257__auto__){
var self__ = this;
var this__22257__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22253__auto__){
var self__ = this;
var this__22253__auto____$1 = this;
return (new com.rpl.specter.impl.LayeredNav(self__.underlying,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22263__auto__){
var self__ = this;
var this__22263__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22254__auto__){
var self__ = this;
var this__22254__auto____$1 = this;
var h__22026__auto__ = self__.__hash;
if(!((h__22026__auto__ == null))){
return h__22026__auto__;
} else {
var h__22026__auto____$1 = cljs.core.hash_imap.call(null,this__22254__auto____$1);
self__.__hash = h__22026__auto____$1;

return h__22026__auto____$1;
}
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22255__auto__,other__22256__auto__){
var self__ = this;
var this__22255__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21577__auto__ = other__22256__auto__;
if(cljs.core.truth_(and__21577__auto__)){
var and__21577__auto____$1 = (this__22255__auto____$1.constructor === other__22256__auto__.constructor);
if(and__21577__auto____$1){
return cljs.core.equiv_map.call(null,this__22255__auto____$1,other__22256__auto__);
} else {
return and__21577__auto____$1;
}
} else {
return and__21577__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22268__auto__,k__22269__auto__){
var self__ = this;
var this__22268__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"underlying","underlying",-1492391849),null], null), null),k__22269__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22268__auto____$1),self__.__meta),k__22269__auto__);
} else {
return (new com.rpl.specter.impl.LayeredNav(self__.underlying,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22269__auto__)),null));
}
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22266__auto__,k__22267__auto__,G__23531){
var self__ = this;
var this__22266__auto____$1 = this;
var pred__23535 = cljs.core.keyword_identical_QMARK_;
var expr__23536 = k__22267__auto__;
if(cljs.core.truth_(pred__23535.call(null,new cljs.core.Keyword(null,"underlying","underlying",-1492391849),expr__23536))){
return (new com.rpl.specter.impl.LayeredNav(G__23531,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LayeredNav(self__.underlying,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22267__auto__,G__23531),null));
}
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22271__auto__){
var self__ = this;
var this__22271__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"underlying","underlying",-1492391849),self__.underlying],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22258__auto__,G__23531){
var self__ = this;
var this__22258__auto____$1 = this;
return (new com.rpl.specter.impl.LayeredNav(self__.underlying,G__23531,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22264__auto__,entry__22265__auto__){
var self__ = this;
var this__22264__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22265__auto__)){
return cljs.core._assoc.call(null,this__22264__auto____$1,cljs.core._nth.call(null,entry__22265__auto__,(0)),cljs.core._nth.call(null,entry__22265__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22264__auto____$1,entry__22265__auto__);
}
});

com.rpl.specter.impl.LayeredNav.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"underlying","underlying",148139678,null)], null);
});

com.rpl.specter.impl.LayeredNav.cljs$lang$type = true;

com.rpl.specter.impl.LayeredNav.cljs$lang$ctorPrSeq = (function (this__22295__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LayeredNav");
});

com.rpl.specter.impl.LayeredNav.cljs$lang$ctorPrWriter = (function (this__22295__auto__,writer__22296__auto__){
return cljs.core._write.call(null,writer__22296__auto__,"com.rpl.specter.impl/LayeredNav");
});

com.rpl.specter.impl.__GT_LayeredNav = (function com$rpl$specter$impl$__GT_LayeredNav(underlying){
return (new com.rpl.specter.impl.LayeredNav(underlying,null,null,null));
});

com.rpl.specter.impl.map__GT_LayeredNav = (function com$rpl$specter$impl$map__GT_LayeredNav(G__23533){
return (new com.rpl.specter.impl.LayeredNav(new cljs.core.Keyword(null,"underlying","underlying",-1492391849).cljs$core$IFn$_invoke$arity$1(G__23533),null,cljs.core.dissoc.call(null,G__23533,new cljs.core.Keyword(null,"underlying","underlying",-1492391849)),null));
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
var G__23539 = null;
var G__23539__1 = (function (a1){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1));
});
var G__23539__2 = (function (a1,a2){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1,a2));
});
var G__23539__3 = (function (a1,a2,a3){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1,a2,a3));
});
var G__23539__4 = (function (a1,a2,a3,a4){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1,a2,a3,a4));
});
var G__23539__5 = (function (a1,a2,a3,a4,a5){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1,a2,a3,a4,a5));
});
var G__23539__6 = (function (a1,a2,a3,a4,a5,a6){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1,a2,a3,a4,a5,a6));
});
var G__23539__7 = (function (a1,a2,a3,a4,a5,a6,a7){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1,a2,a3,a4,a5,a6,a7));
});
var G__23539__8 = (function (a1,a2,a3,a4,a5,a6,a7,a8){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1,a2,a3,a4,a5,a6,a7,a8));
});
var G__23539__9 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1,a2,a3,a4,a5,a6,a7,a8,a9));
});
var G__23539__10 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10));
});
var G__23539__11 = (function() { 
var G__23540__delegate = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,args){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,cljs.core.apply.call(null,anav,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,args));
};
var G__23540 = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var args = null;
if (arguments.length > 10) {
var G__23541__i = 0, G__23541__a = new Array(arguments.length -  10);
while (G__23541__i < G__23541__a.length) {G__23541__a[G__23541__i] = arguments[G__23541__i + 10]; ++G__23541__i;}
  args = new cljs.core.IndexedSeq(G__23541__a,0);
} 
return G__23540__delegate.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,args);};
G__23540.cljs$lang$maxFixedArity = 10;
G__23540.cljs$lang$applyTo = (function (arglist__23542){
var a1 = cljs.core.first(arglist__23542);
arglist__23542 = cljs.core.next(arglist__23542);
var a2 = cljs.core.first(arglist__23542);
arglist__23542 = cljs.core.next(arglist__23542);
var a3 = cljs.core.first(arglist__23542);
arglist__23542 = cljs.core.next(arglist__23542);
var a4 = cljs.core.first(arglist__23542);
arglist__23542 = cljs.core.next(arglist__23542);
var a5 = cljs.core.first(arglist__23542);
arglist__23542 = cljs.core.next(arglist__23542);
var a6 = cljs.core.first(arglist__23542);
arglist__23542 = cljs.core.next(arglist__23542);
var a7 = cljs.core.first(arglist__23542);
arglist__23542 = cljs.core.next(arglist__23542);
var a8 = cljs.core.first(arglist__23542);
arglist__23542 = cljs.core.next(arglist__23542);
var a9 = cljs.core.first(arglist__23542);
arglist__23542 = cljs.core.next(arglist__23542);
var a10 = cljs.core.first(arglist__23542);
var args = cljs.core.rest(arglist__23542);
return G__23540__delegate(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,args);
});
G__23540.cljs$core$IFn$_invoke$arity$variadic = G__23540__delegate;
return G__23540;
})()
;
G__23539 = function(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return G__23539__1.call(this,a1);
case 2:
return G__23539__2.call(this,a1,a2);
case 3:
return G__23539__3.call(this,a1,a2,a3);
case 4:
return G__23539__4.call(this,a1,a2,a3,a4);
case 5:
return G__23539__5.call(this,a1,a2,a3,a4,a5);
case 6:
return G__23539__6.call(this,a1,a2,a3,a4,a5,a6);
case 7:
return G__23539__7.call(this,a1,a2,a3,a4,a5,a6,a7);
case 8:
return G__23539__8.call(this,a1,a2,a3,a4,a5,a6,a7,a8);
case 9:
return G__23539__9.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9);
case 10:
return G__23539__10.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
default:
var G__23543 = null;
if (arguments.length > 10) {
var G__23544__i = 0, G__23544__a = new Array(arguments.length -  10);
while (G__23544__i < G__23544__a.length) {G__23544__a[G__23544__i] = arguments[G__23544__i + 10]; ++G__23544__i;}
G__23543 = new cljs.core.IndexedSeq(G__23544__a,0);
}
return G__23539__11.cljs$core$IFn$_invoke$arity$variadic(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10, G__23543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23539.cljs$lang$maxFixedArity = 10;
G__23539.cljs$lang$applyTo = G__23539__11.cljs$lang$applyTo;
G__23539.cljs$core$IFn$_invoke$arity$1 = G__23539__1;
G__23539.cljs$core$IFn$_invoke$arity$2 = G__23539__2;
G__23539.cljs$core$IFn$_invoke$arity$3 = G__23539__3;
G__23539.cljs$core$IFn$_invoke$arity$4 = G__23539__4;
G__23539.cljs$core$IFn$_invoke$arity$5 = G__23539__5;
G__23539.cljs$core$IFn$_invoke$arity$6 = G__23539__6;
G__23539.cljs$core$IFn$_invoke$arity$7 = G__23539__7;
G__23539.cljs$core$IFn$_invoke$arity$8 = G__23539__8;
G__23539.cljs$core$IFn$_invoke$arity$9 = G__23539__9;
G__23539.cljs$core$IFn$_invoke$arity$10 = G__23539__10;
G__23539.cljs$core$IFn$_invoke$arity$variadic = G__23539__11.cljs$core$IFn$_invoke$arity$variadic;
return G__23539;
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
com.rpl.specter.impl.LocalSym.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22259__auto__,k__22260__auto__){
var self__ = this;
var this__22259__auto____$1 = this;
return cljs.core._lookup.call(null,this__22259__auto____$1,k__22260__auto__,null);
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22261__auto__,k23546,else__22262__auto__){
var self__ = this;
var this__22261__auto____$1 = this;
var G__23548 = (((k23546 instanceof cljs.core.Keyword))?k23546.fqn:null);
switch (G__23548) {
case "val":
return self__.val;

break;
case "sym":
return self__.sym;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23546,else__22262__auto__);

}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22273__auto__,writer__22274__auto__,opts__22275__auto__){
var self__ = this;
var this__22273__auto____$1 = this;
var pr_pair__22276__auto__ = ((function (this__22273__auto____$1){
return (function (keyval__22277__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22274__auto__,cljs.core.pr_writer,""," ","",opts__22275__auto__,keyval__22277__auto__);
});})(this__22273__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22274__auto__,pr_pair__22276__auto__,"#com.rpl.specter.impl.LocalSym{",", ","}",opts__22275__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23545){
var self__ = this;
var G__23545__$1 = this;
return (new cljs.core.RecordIter((0),G__23545__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"sym","sym",-1444860305)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22257__auto__){
var self__ = this;
var this__22257__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22253__auto__){
var self__ = this;
var this__22253__auto____$1 = this;
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22263__auto__){
var self__ = this;
var this__22263__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22254__auto__){
var self__ = this;
var this__22254__auto____$1 = this;
var h__22026__auto__ = self__.__hash;
if(!((h__22026__auto__ == null))){
return h__22026__auto__;
} else {
var h__22026__auto____$1 = cljs.core.hash_imap.call(null,this__22254__auto____$1);
self__.__hash = h__22026__auto____$1;

return h__22026__auto____$1;
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22255__auto__,other__22256__auto__){
var self__ = this;
var this__22255__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21577__auto__ = other__22256__auto__;
if(cljs.core.truth_(and__21577__auto__)){
var and__21577__auto____$1 = (this__22255__auto____$1.constructor === other__22256__auto__.constructor);
if(and__21577__auto____$1){
return cljs.core.equiv_map.call(null,this__22255__auto____$1,other__22256__auto__);
} else {
return and__21577__auto____$1;
}
} else {
return and__21577__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22268__auto__,k__22269__auto__){
var self__ = this;
var this__22268__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"sym","sym",-1444860305),null], null), null),k__22269__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22268__auto____$1),self__.__meta),k__22269__auto__);
} else {
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22269__auto__)),null));
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22266__auto__,k__22267__auto__,G__23545){
var self__ = this;
var this__22266__auto____$1 = this;
var pred__23549 = cljs.core.keyword_identical_QMARK_;
var expr__23550 = k__22267__auto__;
if(cljs.core.truth_(pred__23549.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__23550))){
return (new com.rpl.specter.impl.LocalSym(G__23545,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23549.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__23550))){
return (new com.rpl.specter.impl.LocalSym(self__.val,G__23545,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22267__auto__,G__23545),null));
}
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22271__auto__){
var self__ = this;
var this__22271__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22258__auto__,G__23545){
var self__ = this;
var this__22258__auto____$1 = this;
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,G__23545,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22264__auto__,entry__22265__auto__){
var self__ = this;
var this__22264__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22265__auto__)){
return cljs.core._assoc.call(null,this__22264__auto____$1,cljs.core._nth.call(null,entry__22265__auto__,(0)),cljs.core._nth.call(null,entry__22265__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22264__auto____$1,entry__22265__auto__);
}
});

com.rpl.specter.impl.LocalSym.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"sym","sym",195671222,null)], null);
});

com.rpl.specter.impl.LocalSym.cljs$lang$type = true;

com.rpl.specter.impl.LocalSym.cljs$lang$ctorPrSeq = (function (this__22295__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LocalSym");
});

com.rpl.specter.impl.LocalSym.cljs$lang$ctorPrWriter = (function (this__22295__auto__,writer__22296__auto__){
return cljs.core._write.call(null,writer__22296__auto__,"com.rpl.specter.impl/LocalSym");
});

com.rpl.specter.impl.__GT_LocalSym = (function com$rpl$specter$impl$__GT_LocalSym(val,sym){
return (new com.rpl.specter.impl.LocalSym(val,sym,null,null,null));
});

com.rpl.specter.impl.map__GT_LocalSym = (function com$rpl$specter$impl$map__GT_LocalSym(G__23547){
return (new com.rpl.specter.impl.LocalSym(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__23547),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(G__23547),null,cljs.core.dissoc.call(null,G__23547,new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"sym","sym",-1444860305)),null));
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
com.rpl.specter.impl.VarUse.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22259__auto__,k__22260__auto__){
var self__ = this;
var this__22259__auto____$1 = this;
return cljs.core._lookup.call(null,this__22259__auto____$1,k__22260__auto__,null);
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22261__auto__,k23554,else__22262__auto__){
var self__ = this;
var this__22261__auto____$1 = this;
var G__23556 = (((k23554 instanceof cljs.core.Keyword))?k23554.fqn:null);
switch (G__23556) {
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
return cljs.core.get.call(null,self__.__extmap,k23554,else__22262__auto__);

}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22273__auto__,writer__22274__auto__,opts__22275__auto__){
var self__ = this;
var this__22273__auto____$1 = this;
var pr_pair__22276__auto__ = ((function (this__22273__auto____$1){
return (function (keyval__22277__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22274__auto__,cljs.core.pr_writer,""," ","",opts__22275__auto__,keyval__22277__auto__);
});})(this__22273__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22274__auto__,pr_pair__22276__auto__,"#com.rpl.specter.impl.VarUse{",", ","}",opts__22275__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"var","var",-769682797),self__.var$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.VarUse.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23553){
var self__ = this;
var G__23553__$1 = this;
return (new cljs.core.RecordIter((0),G__23553__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"sym","sym",-1444860305)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22257__auto__){
var self__ = this;
var this__22257__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22253__auto__){
var self__ = this;
var this__22253__auto____$1 = this;
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,self__.sym,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22263__auto__){
var self__ = this;
var this__22263__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22254__auto__){
var self__ = this;
var this__22254__auto____$1 = this;
var h__22026__auto__ = self__.__hash;
if(!((h__22026__auto__ == null))){
return h__22026__auto__;
} else {
var h__22026__auto____$1 = cljs.core.hash_imap.call(null,this__22254__auto____$1);
self__.__hash = h__22026__auto____$1;

return h__22026__auto____$1;
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22255__auto__,other__22256__auto__){
var self__ = this;
var this__22255__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21577__auto__ = other__22256__auto__;
if(cljs.core.truth_(and__21577__auto__)){
var and__21577__auto____$1 = (this__22255__auto____$1.constructor === other__22256__auto__.constructor);
if(and__21577__auto____$1){
return cljs.core.equiv_map.call(null,this__22255__auto____$1,other__22256__auto__);
} else {
return and__21577__auto____$1;
}
} else {
return and__21577__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22268__auto__,k__22269__auto__){
var self__ = this;
var this__22268__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"sym","sym",-1444860305),null,new cljs.core.Keyword(null,"var","var",-769682797),null], null), null),k__22269__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22268__auto____$1),self__.__meta),k__22269__auto__);
} else {
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,self__.sym,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22269__auto__)),null));
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22266__auto__,k__22267__auto__,G__23553){
var self__ = this;
var this__22266__auto____$1 = this;
var pred__23557 = cljs.core.keyword_identical_QMARK_;
var expr__23558 = k__22267__auto__;
if(cljs.core.truth_(pred__23557.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__23558))){
return (new com.rpl.specter.impl.VarUse(G__23553,self__.var$,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23557.call(null,new cljs.core.Keyword(null,"var","var",-769682797),expr__23558))){
return (new com.rpl.specter.impl.VarUse(self__.val,G__23553,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23557.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__23558))){
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,G__23553,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,self__.sym,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22267__auto__,G__23553),null));
}
}
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22271__auto__){
var self__ = this;
var this__22271__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"var","var",-769682797),self__.var$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22258__auto__,G__23553){
var self__ = this;
var this__22258__auto____$1 = this;
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,self__.sym,G__23553,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22264__auto__,entry__22265__auto__){
var self__ = this;
var this__22264__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22265__auto__)){
return cljs.core._assoc.call(null,this__22264__auto____$1,cljs.core._nth.call(null,entry__22265__auto__,(0)),cljs.core._nth.call(null,entry__22265__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22264__auto____$1,entry__22265__auto__);
}
});

com.rpl.specter.impl.VarUse.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"var","var",870848730,null),new cljs.core.Symbol(null,"sym","sym",195671222,null)], null);
});

com.rpl.specter.impl.VarUse.cljs$lang$type = true;

com.rpl.specter.impl.VarUse.cljs$lang$ctorPrSeq = (function (this__22295__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/VarUse");
});

com.rpl.specter.impl.VarUse.cljs$lang$ctorPrWriter = (function (this__22295__auto__,writer__22296__auto__){
return cljs.core._write.call(null,writer__22296__auto__,"com.rpl.specter.impl/VarUse");
});

com.rpl.specter.impl.__GT_VarUse = (function com$rpl$specter$impl$__GT_VarUse(val,var$,sym){
return (new com.rpl.specter.impl.VarUse(val,var$,sym,null,null,null));
});

com.rpl.specter.impl.map__GT_VarUse = (function com$rpl$specter$impl$map__GT_VarUse(G__23555){
return (new com.rpl.specter.impl.VarUse(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__23555),new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(G__23555),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(G__23555),null,cljs.core.dissoc.call(null,G__23555,new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"sym","sym",-1444860305)),null));
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
com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22259__auto__,k__22260__auto__){
var self__ = this;
var this__22259__auto____$1 = this;
return cljs.core._lookup.call(null,this__22259__auto____$1,k__22260__auto__,null);
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22261__auto__,k23562,else__22262__auto__){
var self__ = this;
var this__22261__auto____$1 = this;
var G__23564 = (((k23562 instanceof cljs.core.Keyword))?k23562.fqn:null);
switch (G__23564) {
case "val":
return self__.val;

break;
case "code":
return self__.code;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23562,else__22262__auto__);

}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22273__auto__,writer__22274__auto__,opts__22275__auto__){
var self__ = this;
var this__22273__auto____$1 = this;
var pr_pair__22276__auto__ = ((function (this__22273__auto____$1){
return (function (keyval__22277__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22274__auto__,cljs.core.pr_writer,""," ","",opts__22275__auto__,keyval__22277__auto__);
});})(this__22273__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22274__auto__,pr_pair__22276__auto__,"#com.rpl.specter.impl.SpecialFormUse{",", ","}",opts__22275__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23561){
var self__ = this;
var G__23561__$1 = this;
return (new cljs.core.RecordIter((0),G__23561__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"code","code",1586293142)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22257__auto__){
var self__ = this;
var this__22257__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22253__auto__){
var self__ = this;
var this__22253__auto____$1 = this;
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22263__auto__){
var self__ = this;
var this__22263__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22254__auto__){
var self__ = this;
var this__22254__auto____$1 = this;
var h__22026__auto__ = self__.__hash;
if(!((h__22026__auto__ == null))){
return h__22026__auto__;
} else {
var h__22026__auto____$1 = cljs.core.hash_imap.call(null,this__22254__auto____$1);
self__.__hash = h__22026__auto____$1;

return h__22026__auto____$1;
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22255__auto__,other__22256__auto__){
var self__ = this;
var this__22255__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21577__auto__ = other__22256__auto__;
if(cljs.core.truth_(and__21577__auto__)){
var and__21577__auto____$1 = (this__22255__auto____$1.constructor === other__22256__auto__.constructor);
if(and__21577__auto____$1){
return cljs.core.equiv_map.call(null,this__22255__auto____$1,other__22256__auto__);
} else {
return and__21577__auto____$1;
}
} else {
return and__21577__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22268__auto__,k__22269__auto__){
var self__ = this;
var this__22268__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__22269__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22268__auto____$1),self__.__meta),k__22269__auto__);
} else {
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22269__auto__)),null));
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22266__auto__,k__22267__auto__,G__23561){
var self__ = this;
var this__22266__auto____$1 = this;
var pred__23565 = cljs.core.keyword_identical_QMARK_;
var expr__23566 = k__22267__auto__;
if(cljs.core.truth_(pred__23565.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__23566))){
return (new com.rpl.specter.impl.SpecialFormUse(G__23561,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23565.call(null,new cljs.core.Keyword(null,"code","code",1586293142),expr__23566))){
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,G__23561,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22267__auto__,G__23561),null));
}
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22271__auto__){
var self__ = this;
var this__22271__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22258__auto__,G__23561){
var self__ = this;
var this__22258__auto____$1 = this;
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,G__23561,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22264__auto__,entry__22265__auto__){
var self__ = this;
var this__22264__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22265__auto__)){
return cljs.core._assoc.call(null,this__22264__auto____$1,cljs.core._nth.call(null,entry__22265__auto__,(0)),cljs.core._nth.call(null,entry__22265__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22264__auto____$1,entry__22265__auto__);
}
});

com.rpl.specter.impl.SpecialFormUse.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
});

com.rpl.specter.impl.SpecialFormUse.cljs$lang$type = true;

com.rpl.specter.impl.SpecialFormUse.cljs$lang$ctorPrSeq = (function (this__22295__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/SpecialFormUse");
});

com.rpl.specter.impl.SpecialFormUse.cljs$lang$ctorPrWriter = (function (this__22295__auto__,writer__22296__auto__){
return cljs.core._write.call(null,writer__22296__auto__,"com.rpl.specter.impl/SpecialFormUse");
});

com.rpl.specter.impl.__GT_SpecialFormUse = (function com$rpl$specter$impl$__GT_SpecialFormUse(val,code){
return (new com.rpl.specter.impl.SpecialFormUse(val,code,null,null,null));
});

com.rpl.specter.impl.map__GT_SpecialFormUse = (function com$rpl$specter$impl$map__GT_SpecialFormUse(G__23563){
return (new com.rpl.specter.impl.SpecialFormUse(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__23563),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__23563),null,cljs.core.dissoc.call(null,G__23563,new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"code","code",1586293142)),null));
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
com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22259__auto__,k__22260__auto__){
var self__ = this;
var this__22259__auto____$1 = this;
return cljs.core._lookup.call(null,this__22259__auto____$1,k__22260__auto__,null);
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22261__auto__,k23570,else__22262__auto__){
var self__ = this;
var this__22261__auto____$1 = this;
var G__23572 = (((k23570 instanceof cljs.core.Keyword))?k23570.fqn:null);
switch (G__23572) {
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
return cljs.core.get.call(null,self__.__extmap,k23570,else__22262__auto__);

}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22273__auto__,writer__22274__auto__,opts__22275__auto__){
var self__ = this;
var this__22273__auto____$1 = this;
var pr_pair__22276__auto__ = ((function (this__22273__auto____$1){
return (function (keyval__22277__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22274__auto__,cljs.core.pr_writer,""," ","",opts__22275__auto__,keyval__22277__auto__);
});})(this__22273__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22274__auto__,pr_pair__22276__auto__,"#com.rpl.specter.impl.FnInvocation{",", ","}",opts__22275__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"op","op",-1882987955),self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23569){
var self__ = this;
var G__23569__$1 = this;
return (new cljs.core.RecordIter((0),G__23569__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22257__auto__){
var self__ = this;
var this__22257__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22253__auto__){
var self__ = this;
var this__22253__auto____$1 = this;
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22263__auto__){
var self__ = this;
var this__22263__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22254__auto__){
var self__ = this;
var this__22254__auto____$1 = this;
var h__22026__auto__ = self__.__hash;
if(!((h__22026__auto__ == null))){
return h__22026__auto__;
} else {
var h__22026__auto____$1 = cljs.core.hash_imap.call(null,this__22254__auto____$1);
self__.__hash = h__22026__auto____$1;

return h__22026__auto____$1;
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22255__auto__,other__22256__auto__){
var self__ = this;
var this__22255__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21577__auto__ = other__22256__auto__;
if(cljs.core.truth_(and__21577__auto__)){
var and__21577__auto____$1 = (this__22255__auto____$1.constructor === other__22256__auto__.constructor);
if(and__21577__auto____$1){
return cljs.core.equiv_map.call(null,this__22255__auto____$1,other__22256__auto__);
} else {
return and__21577__auto____$1;
}
} else {
return and__21577__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22268__auto__,k__22269__auto__){
var self__ = this;
var this__22268__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"op","op",-1882987955),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__22269__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22268__auto____$1),self__.__meta),k__22269__auto__);
} else {
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22269__auto__)),null));
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22266__auto__,k__22267__auto__,G__23569){
var self__ = this;
var this__22266__auto____$1 = this;
var pred__23573 = cljs.core.keyword_identical_QMARK_;
var expr__23574 = k__22267__auto__;
if(cljs.core.truth_(pred__23573.call(null,new cljs.core.Keyword(null,"op","op",-1882987955),expr__23574))){
return (new com.rpl.specter.impl.FnInvocation(G__23569,self__.params,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23573.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__23574))){
return (new com.rpl.specter.impl.FnInvocation(self__.op,G__23569,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23573.call(null,new cljs.core.Keyword(null,"code","code",1586293142),expr__23574))){
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,G__23569,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22267__auto__,G__23569),null));
}
}
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22271__auto__){
var self__ = this;
var this__22271__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"op","op",-1882987955),self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22258__auto__,G__23569){
var self__ = this;
var this__22258__auto____$1 = this;
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,G__23569,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22264__auto__,entry__22265__auto__){
var self__ = this;
var this__22264__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22265__auto__)){
return cljs.core._assoc.call(null,this__22264__auto____$1,cljs.core._nth.call(null,entry__22265__auto__,(0)),cljs.core._nth.call(null,entry__22265__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22264__auto____$1,entry__22265__auto__);
}
});

com.rpl.specter.impl.FnInvocation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"op","op",-242456428,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
});

com.rpl.specter.impl.FnInvocation.cljs$lang$type = true;

com.rpl.specter.impl.FnInvocation.cljs$lang$ctorPrSeq = (function (this__22295__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/FnInvocation");
});

com.rpl.specter.impl.FnInvocation.cljs$lang$ctorPrWriter = (function (this__22295__auto__,writer__22296__auto__){
return cljs.core._write.call(null,writer__22296__auto__,"com.rpl.specter.impl/FnInvocation");
});

com.rpl.specter.impl.__GT_FnInvocation = (function com$rpl$specter$impl$__GT_FnInvocation(op,params,code){
return (new com.rpl.specter.impl.FnInvocation(op,params,code,null,null,null));
});

com.rpl.specter.impl.map__GT_FnInvocation = (function com$rpl$specter$impl$map__GT_FnInvocation(G__23571){
return (new com.rpl.specter.impl.FnInvocation(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(G__23571),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__23571),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__23571),null,cljs.core.dissoc.call(null,G__23571,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)),null));
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
com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22259__auto__,k__22260__auto__){
var self__ = this;
var this__22259__auto____$1 = this;
return cljs.core._lookup.call(null,this__22259__auto____$1,k__22260__auto__,null);
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22261__auto__,k23578,else__22262__auto__){
var self__ = this;
var this__22261__auto____$1 = this;
var G__23580 = (((k23578 instanceof cljs.core.Keyword))?k23578.fqn:null);
switch (G__23580) {
case "precompiled":
return self__.precompiled;

break;
case "params-maker":
return self__.params_maker;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23578,else__22262__auto__);

}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22273__auto__,writer__22274__auto__,opts__22275__auto__){
var self__ = this;
var this__22273__auto____$1 = this;
var pr_pair__22276__auto__ = ((function (this__22273__auto____$1){
return (function (keyval__22277__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22274__auto__,cljs.core.pr_writer,""," ","",opts__22275__auto__,keyval__22277__auto__);
});})(this__22273__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22274__auto__,pr_pair__22276__auto__,"#com.rpl.specter.impl.CachedPathInfo{",", ","}",opts__22275__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),self__.precompiled],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-maker","params-maker",539586643),self__.params_maker],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23577){
var self__ = this;
var G__23577__$1 = this;
return (new cljs.core.RecordIter((0),G__23577__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),new cljs.core.Keyword(null,"params-maker","params-maker",539586643)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22257__auto__){
var self__ = this;
var this__22257__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22253__auto__){
var self__ = this;
var this__22253__auto____$1 = this;
return (new com.rpl.specter.impl.CachedPathInfo(self__.precompiled,self__.params_maker,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22263__auto__){
var self__ = this;
var this__22263__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22254__auto__){
var self__ = this;
var this__22254__auto____$1 = this;
var h__22026__auto__ = self__.__hash;
if(!((h__22026__auto__ == null))){
return h__22026__auto__;
} else {
var h__22026__auto____$1 = cljs.core.hash_imap.call(null,this__22254__auto____$1);
self__.__hash = h__22026__auto____$1;

return h__22026__auto____$1;
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22255__auto__,other__22256__auto__){
var self__ = this;
var this__22255__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21577__auto__ = other__22256__auto__;
if(cljs.core.truth_(and__21577__auto__)){
var and__21577__auto____$1 = (this__22255__auto____$1.constructor === other__22256__auto__.constructor);
if(and__21577__auto____$1){
return cljs.core.equiv_map.call(null,this__22255__auto____$1,other__22256__auto__);
} else {
return and__21577__auto____$1;
}
} else {
return and__21577__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22268__auto__,k__22269__auto__){
var self__ = this;
var this__22268__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params-maker","params-maker",539586643),null,new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),null], null), null),k__22269__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22268__auto____$1),self__.__meta),k__22269__auto__);
} else {
return (new com.rpl.specter.impl.CachedPathInfo(self__.precompiled,self__.params_maker,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22269__auto__)),null));
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22266__auto__,k__22267__auto__,G__23577){
var self__ = this;
var this__22266__auto____$1 = this;
var pred__23581 = cljs.core.keyword_identical_QMARK_;
var expr__23582 = k__22267__auto__;
if(cljs.core.truth_(pred__23581.call(null,new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),expr__23582))){
return (new com.rpl.specter.impl.CachedPathInfo(G__23577,self__.params_maker,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23581.call(null,new cljs.core.Keyword(null,"params-maker","params-maker",539586643),expr__23582))){
return (new com.rpl.specter.impl.CachedPathInfo(self__.precompiled,G__23577,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.CachedPathInfo(self__.precompiled,self__.params_maker,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22267__auto__,G__23577),null));
}
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22271__auto__){
var self__ = this;
var this__22271__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),self__.precompiled],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-maker","params-maker",539586643),self__.params_maker],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22258__auto__,G__23577){
var self__ = this;
var this__22258__auto____$1 = this;
return (new com.rpl.specter.impl.CachedPathInfo(self__.precompiled,self__.params_maker,G__23577,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22264__auto__,entry__22265__auto__){
var self__ = this;
var this__22264__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22265__auto__)){
return cljs.core._assoc.call(null,this__22264__auto____$1,cljs.core._nth.call(null,entry__22265__auto__,(0)),cljs.core._nth.call(null,entry__22265__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22264__auto____$1,entry__22265__auto__);
}
});

com.rpl.specter.impl.CachedPathInfo.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"precompiled","precompiled",-42622082,null),new cljs.core.Symbol(null,"params-maker","params-maker",-2114849126,null)], null);
});

com.rpl.specter.impl.CachedPathInfo.cljs$lang$type = true;

com.rpl.specter.impl.CachedPathInfo.cljs$lang$ctorPrSeq = (function (this__22295__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/CachedPathInfo");
});

com.rpl.specter.impl.CachedPathInfo.cljs$lang$ctorPrWriter = (function (this__22295__auto__,writer__22296__auto__){
return cljs.core._write.call(null,writer__22296__auto__,"com.rpl.specter.impl/CachedPathInfo");
});

com.rpl.specter.impl.__GT_CachedPathInfo = (function com$rpl$specter$impl$__GT_CachedPathInfo(precompiled,params_maker){
return (new com.rpl.specter.impl.CachedPathInfo(precompiled,params_maker,null,null,null));
});

com.rpl.specter.impl.map__GT_CachedPathInfo = (function com$rpl$specter$impl$map__GT_CachedPathInfo(G__23579){
return (new com.rpl.specter.impl.CachedPathInfo(new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609).cljs$core$IFn$_invoke$arity$1(G__23579),new cljs.core.Keyword(null,"params-maker","params-maker",539586643).cljs$core$IFn$_invoke$arity$1(G__23579),null,cljs.core.dissoc.call(null,G__23579,new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),new cljs.core.Keyword(null,"params-maker","params-maker",539586643)),null));
});

com.rpl.specter.impl.MUST_CACHE_PATHS = com.rpl.specter.impl.mutable_cell.call(null,false);
com.rpl.specter.impl.must_cache_paths_BANG_ = (function com$rpl$specter$impl$must_cache_paths_BANG_(var_args){
var args23585 = [];
var len__22772__auto___23588 = arguments.length;
var i__22773__auto___23589 = (0);
while(true){
if((i__22773__auto___23589 < len__22772__auto___23588)){
args23585.push((arguments[i__22773__auto___23589]));

var G__23590 = (i__22773__auto___23589 + (1));
i__22773__auto___23589 = G__23590;
continue;
} else {
}
break;
}

var G__23587 = args23585.length;
switch (G__23587) {
case 0:
return com.rpl.specter.impl.must_cache_paths_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.rpl.specter.impl.must_cache_paths_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23585.length)].join('')));

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
var or__21589__auto__ = com.rpl.specter.impl.structure_path_QMARK_.call(null,v);
if(cljs.core.truth_(or__21589__auto__)){
return or__21589__auto__;
} else {
var or__21589__auto____$1 = ((!((v == null)))?(((false) || (v.com$rpl$specter$protocols$Collector$))?true:(((!v.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,com.rpl.specter.protocols.Collector,v):false)):cljs.core.native_satisfies_QMARK_.call(null,com.rpl.specter.protocols.Collector,v));
if(or__21589__auto____$1){
return or__21589__auto____$1;
} else {
return (v instanceof com.rpl.specter.impl.CompiledPath);
}
}
});
com.rpl.specter.impl.handle_params = (function com$rpl$specter$impl$handle_params(precompiled,params_maker,possible_params){
var params = com.rpl.specter.impl.fast_object_array.call(null,cljs.core.count.call(null,params_maker));
var n__22602__auto___23596 = cljs.core.count.call(null,params_maker);
var i_23597 = (0);
while(true){
if((i_23597 < n__22602__auto___23596)){
(params[i_23597] = cljs.core.get.call(null,possible_params,cljs.core.get.call(null,params_maker,i_23597)).call(null));

var G__23598 = (i_23597 + (1));
i_23597 = G__23598;
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
return com.rpl.specter.impl.NONE;
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
var or__21589__auto__ = cljs.core._EQ_.call(null,cljs.core.count.call(null,al),c);
if(or__21589__auto__){
return or__21589__auto__;
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
var G__23601__delegate = function (reason){
if(cljs.core.truth_(com.rpl.specter.impl.get_cell.call(null,com.rpl.specter.impl.MUST_CACHE_PATHS))){
cljs.core.println.call(null,"Failed to cache path:",cljs.core.apply.call(null,cljs.core.str,reason));
} else {
}

cljs.core.reset_BANG_.call(null,failed_atom,true);

return null;
};
var G__23601 = function (var_args){
var reason = null;
if (arguments.length > 0) {
var G__23602__i = 0, G__23602__a = new Array(arguments.length -  0);
while (G__23602__i < G__23602__a.length) {G__23602__a[G__23602__i] = arguments[G__23602__i + 0]; ++G__23602__i;}
  reason = new cljs.core.IndexedSeq(G__23602__a,0);
} 
return G__23601__delegate.call(this,reason);};
G__23601.cljs$lang$maxFixedArity = 0;
G__23601.cljs$lang$applyTo = (function (arglist__23603){
var reason = cljs.core.seq(arglist__23603);
return G__23601__delegate(reason);
});
G__23601.cljs$core$IFn$_invoke$arity$variadic = G__23601__delegate;
return G__23601;
})()
;
if(cljs.core.vector_QMARK_.call(null,p)){
return cljs.core.mapv.call(null,((function (magic_fail_BANG_){
return (function (p1__23599_SHARP_){
return com$rpl$specter$impl$magic_precompilation_STAR_.call(null,p1__23599_SHARP_,params_atom,failed_atom);
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
if(cljs.core.truth_((function (){var and__21577__auto__ = cljs.core.fn_QMARK_.call(null,vv);
if(and__21577__auto__){
return new cljs.core.Keyword(null,"pathedfn","pathedfn",1590980188).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v));
} else {
return and__21577__auto__;
}
})())){
return com.rpl.specter.impl.throw_illegal.call(null,"Cannot use pathed fn '",new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(p),"' where navigator expected");
} else {
if(cljs.core.truth_(com.rpl.specter.impl.valid_navigator_QMARK_.call(null,vv))){
return vv;
} else {
return magic_fail_BANG_.call(null,"Var ",new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(p)," is not a navigator");

}
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
return (function (p1__23600_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,p1__23600_SHARP_,ps));
});})(v,vv,op,ps,magic_fail_BANG_))
);

return vv;
} else {
if(cljs.core.truth_((function (){var and__21577__auto__ = cljs.core.fn_QMARK_.call(null,vv);
if(and__21577__auto__){
return new cljs.core.Keyword(null,"pathedfn","pathedfn",1590980188).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v));
} else {
return and__21577__auto__;
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
if(cljs.core.truth_((function (){var and__21577__auto__ = cljs.core.fn_QMARK_.call(null,vv);
if(and__21577__auto__){
return new cljs.core.Keyword(null,"layerednav","layerednav",891636982).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,vv));
} else {
return and__21577__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,params_atom,cljs.core.conj,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(p));

return com.rpl.specter.impl.rich_compiled_path_proxy;
} else {
return magic_fail_BANG_.call(null,"Var ",new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(op)," must be either a parameterized ","navigator, a higher order pathed constructor function, ","or a nav constructor");

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
if(cljs.core.truth_((function (){var and__21577__auto__ = typeof p === 'string';
if(and__21577__auto__){
return com.rpl.specter.impl.valid_navigator_QMARK_.call(null,p);
} else {
return and__21577__auto__;
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
com.rpl.specter.impl.compiled_setval_STAR_ = (function com$rpl$specter$impl$compiled_setval_STAR_(path,val,structure){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,path,com.rpl.specter.impl.fast_constantly.call(null,val),structure);
});
com.rpl.specter.impl.compiled_replace_in_STAR_ = (function com$rpl$specter$impl$compiled_replace_in_STAR_(var_args){
var args__22779__auto__ = [];
var len__22772__auto___23614 = arguments.length;
var i__22773__auto___23615 = (0);
while(true){
if((i__22773__auto___23615 < len__22772__auto___23614)){
args__22779__auto__.push((arguments[i__22773__auto___23615]));

var G__23616 = (i__22773__auto___23615 + (1));
i__22773__auto___23615 = G__23616;
continue;
} else {
}
break;
}

var argseq__22780__auto__ = ((((3) < args__22779__auto__.length))?(new cljs.core.IndexedSeq(args__22779__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22780__auto__);
});

com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__23608){
var map__23609 = p__23608;
var map__23609__$1 = ((((!((map__23609 == null)))?((((map__23609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23609):map__23609);
var merge_fn = cljs.core.get.call(null,map__23609__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var state = com.rpl.specter.impl.mutable_cell.call(null,null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.compiled_transform_STAR_.call(null,path,((function (state,map__23609,map__23609__$1,merge_fn){
return (function() { 
var G__23617__delegate = function (args){
var res = cljs.core.apply.call(null,transform_fn,args);
if(cljs.core.truth_(res)){
var vec__23611 = res;
var ret = cljs.core.nth.call(null,vec__23611,(0),null);
var user_ret = cljs.core.nth.call(null,vec__23611,(1),null);
com.rpl.specter.impl.set_cell_BANG_.call(null,state,merge_fn.call(null,com.rpl.specter.impl.get_cell.call(null,state),user_ret));

return ret;
} else {
return cljs.core.last.call(null,args);
}
};
var G__23617 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23618__i = 0, G__23618__a = new Array(arguments.length -  0);
while (G__23618__i < G__23618__a.length) {G__23618__a[G__23618__i] = arguments[G__23618__i + 0]; ++G__23618__i;}
  args = new cljs.core.IndexedSeq(G__23618__a,0);
} 
return G__23617__delegate.call(this,args);};
G__23617.cljs$lang$maxFixedArity = 0;
G__23617.cljs$lang$applyTo = (function (arglist__23619){
var args = cljs.core.seq(arglist__23619);
return G__23617__delegate(args);
});
G__23617.cljs$core$IFn$_invoke$arity$variadic = G__23617__delegate;
return G__23617;
})()
;})(state,map__23609,map__23609__$1,merge_fn))
,structure),com.rpl.specter.impl.get_cell.call(null,state)], null);
});

com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$lang$maxFixedArity = (3);

com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$lang$applyTo = (function (seq23604){
var G__23605 = cljs.core.first.call(null,seq23604);
var seq23604__$1 = cljs.core.next.call(null,seq23604);
var G__23606 = cljs.core.first.call(null,seq23604__$1);
var seq23604__$2 = cljs.core.next.call(null,seq23604__$1);
var G__23607 = cljs.core.first.call(null,seq23604__$2);
var seq23604__$3 = cljs.core.next.call(null,seq23604__$2);
return com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__23605,G__23606,G__23607,seq23604__$3);
});

com.rpl.specter.impl.multi_transform_error_fn = (function com$rpl$specter$impl$multi_transform_error_fn(var_args){
var args__22779__auto__ = [];
var len__22772__auto___23621 = arguments.length;
var i__22773__auto___23622 = (0);
while(true){
if((i__22773__auto___23622 < len__22772__auto___23621)){
args__22779__auto__.push((arguments[i__22773__auto___23622]));

var G__23623 = (i__22773__auto___23622 + (1));
i__22773__auto___23622 = G__23623;
continue;
} else {
}
break;
}

var argseq__22780__auto__ = ((((0) < args__22779__auto__.length))?(new cljs.core.IndexedSeq(args__22779__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.multi_transform_error_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22780__auto__);
});

com.rpl.specter.impl.multi_transform_error_fn.cljs$core$IFn$_invoke$arity$variadic = (function (nav){
return com.rpl.specter.impl.throw_illegal.call(null,"All navigation in multi-transform must end in 'terminal' ","navigators. Instead navigated to: ",nav);
});

com.rpl.specter.impl.multi_transform_error_fn.cljs$lang$maxFixedArity = (0);

com.rpl.specter.impl.multi_transform_error_fn.cljs$lang$applyTo = (function (seq23620){
return com.rpl.specter.impl.multi_transform_error_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23620));
});

com.rpl.specter.impl.compiled_multi_transform_STAR_ = (function com$rpl$specter$impl$compiled_multi_transform_STAR_(path,structure){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,path,com.rpl.specter.impl.multi_transform_error_fn,structure);
});
com.rpl.specter.impl.parameterize_path = (function com$rpl$specter$impl$parameterize_path(apath,params,params_idx){
if((apath instanceof com.rpl.specter.impl.CompiledPath)){
return apath;
} else {
return com.rpl.specter.impl.bind_params_STAR_.call(null,apath,params,params_idx);
}
});
com.rpl.specter.impl.extract_rich_tfns = (function com$rpl$specter$impl$extract_rich_tfns(apath){
var tfns = com.rpl.specter.impl.coerce_tfns_rich.call(null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(apath));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(tfns),new cljs.core.Keyword(null,"transformer","transformer",-1493470620).cljs$core$IFn$_invoke$arity$1(tfns)], null);
});
com.rpl.specter.impl.mk_jump_next_fn = (function com$rpl$specter$impl$mk_jump_next_fn(next_fn,init_idx,total_params){
var jumped = (init_idx + total_params);
return ((function (jumped){
return (function (params,params_idx,vals,structure){
return next_fn.call(null,params,jumped,vals,structure);
});
;})(jumped))
});

//# sourceMappingURL=impl.js.map?rel=1471419408516