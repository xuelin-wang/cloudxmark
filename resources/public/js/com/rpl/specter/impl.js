// Compiled by ClojureScript 1.9.225 {}
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
var args__22780__auto__ = [];
var len__22773__auto___49721 = arguments.length;
var i__22774__auto___49722 = (0);
while(true){
if((i__22774__auto___49722 < len__22773__auto___49721)){
args__22780__auto__.push((arguments[i__22774__auto___49722]));

var G__49723 = (i__22774__auto___49722 + (1));
i__22774__auto___49722 = G__49723;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});

com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic = (function (elems){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,com.rpl.specter.impl.smart_str_STAR_,elems));
});

com.rpl.specter.impl.smart_str.cljs$lang$maxFixedArity = (0);

com.rpl.specter.impl.smart_str.cljs$lang$applyTo = (function (seq49720){
return com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49720));
});

com.rpl.specter.impl.fast_constantly = (function com$rpl$specter$impl$fast_constantly(v){
return (function() {
var G__49724 = null;
var G__49724__0 = (function (){
return v;
});
var G__49724__1 = (function (a1){
return v;
});
var G__49724__2 = (function (a1,a2){
return v;
});
var G__49724__3 = (function (a1,a2,a3){
return v;
});
var G__49724__4 = (function (a1,a2,a3,a4){
return v;
});
var G__49724__5 = (function (a1,a2,a3,a4,a5){
return v;
});
var G__49724__6 = (function (a1,a2,a3,a4,a5,a6){
return v;
});
var G__49724__7 = (function (a1,a2,a3,a4,a5,a6,a7){
return v;
});
var G__49724__8 = (function (a1,a2,a3,a4,a5,a6,a7,a8){
return v;
});
var G__49724__9 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9){
return v;
});
var G__49724__10 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){
return v;
});
var G__49724__11 = (function() { 
var G__49725__delegate = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r){
return v;
};
var G__49725 = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var r = null;
if (arguments.length > 10) {
var G__49726__i = 0, G__49726__a = new Array(arguments.length -  10);
while (G__49726__i < G__49726__a.length) {G__49726__a[G__49726__i] = arguments[G__49726__i + 10]; ++G__49726__i;}
  r = new cljs.core.IndexedSeq(G__49726__a,0);
} 
return G__49725__delegate.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r);};
G__49725.cljs$lang$maxFixedArity = 10;
G__49725.cljs$lang$applyTo = (function (arglist__49727){
var a1 = cljs.core.first(arglist__49727);
arglist__49727 = cljs.core.next(arglist__49727);
var a2 = cljs.core.first(arglist__49727);
arglist__49727 = cljs.core.next(arglist__49727);
var a3 = cljs.core.first(arglist__49727);
arglist__49727 = cljs.core.next(arglist__49727);
var a4 = cljs.core.first(arglist__49727);
arglist__49727 = cljs.core.next(arglist__49727);
var a5 = cljs.core.first(arglist__49727);
arglist__49727 = cljs.core.next(arglist__49727);
var a6 = cljs.core.first(arglist__49727);
arglist__49727 = cljs.core.next(arglist__49727);
var a7 = cljs.core.first(arglist__49727);
arglist__49727 = cljs.core.next(arglist__49727);
var a8 = cljs.core.first(arglist__49727);
arglist__49727 = cljs.core.next(arglist__49727);
var a9 = cljs.core.first(arglist__49727);
arglist__49727 = cljs.core.next(arglist__49727);
var a10 = cljs.core.first(arglist__49727);
var r = cljs.core.rest(arglist__49727);
return G__49725__delegate(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r);
});
G__49725.cljs$core$IFn$_invoke$arity$variadic = G__49725__delegate;
return G__49725;
})()
;
G__49724 = function(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var r = var_args;
switch(arguments.length){
case 0:
return G__49724__0.call(this);
case 1:
return G__49724__1.call(this,a1);
case 2:
return G__49724__2.call(this,a1,a2);
case 3:
return G__49724__3.call(this,a1,a2,a3);
case 4:
return G__49724__4.call(this,a1,a2,a3,a4);
case 5:
return G__49724__5.call(this,a1,a2,a3,a4,a5);
case 6:
return G__49724__6.call(this,a1,a2,a3,a4,a5,a6);
case 7:
return G__49724__7.call(this,a1,a2,a3,a4,a5,a6,a7);
case 8:
return G__49724__8.call(this,a1,a2,a3,a4,a5,a6,a7,a8);
case 9:
return G__49724__9.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9);
case 10:
return G__49724__10.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
default:
var G__49728 = null;
if (arguments.length > 10) {
var G__49729__i = 0, G__49729__a = new Array(arguments.length -  10);
while (G__49729__i < G__49729__a.length) {G__49729__a[G__49729__i] = arguments[G__49729__i + 10]; ++G__49729__i;}
G__49728 = new cljs.core.IndexedSeq(G__49729__a,0);
}
return G__49724__11.cljs$core$IFn$_invoke$arity$variadic(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10, G__49728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__49724.cljs$lang$maxFixedArity = 10;
G__49724.cljs$lang$applyTo = G__49724__11.cljs$lang$applyTo;
G__49724.cljs$core$IFn$_invoke$arity$0 = G__49724__0;
G__49724.cljs$core$IFn$_invoke$arity$1 = G__49724__1;
G__49724.cljs$core$IFn$_invoke$arity$2 = G__49724__2;
G__49724.cljs$core$IFn$_invoke$arity$3 = G__49724__3;
G__49724.cljs$core$IFn$_invoke$arity$4 = G__49724__4;
G__49724.cljs$core$IFn$_invoke$arity$5 = G__49724__5;
G__49724.cljs$core$IFn$_invoke$arity$6 = G__49724__6;
G__49724.cljs$core$IFn$_invoke$arity$7 = G__49724__7;
G__49724.cljs$core$IFn$_invoke$arity$8 = G__49724__8;
G__49724.cljs$core$IFn$_invoke$arity$9 = G__49724__9;
G__49724.cljs$core$IFn$_invoke$arity$10 = G__49724__10;
G__49724.cljs$core$IFn$_invoke$arity$variadic = G__49724__11.cljs$core$IFn$_invoke$arity$variadic;
return G__49724;
})()
});
com.rpl.specter.impl.throw_illegal = (function com$rpl$specter$impl$throw_illegal(var_args){
var args__22780__auto__ = [];
var len__22773__auto___49731 = arguments.length;
var i__22774__auto___49732 = (0);
while(true){
if((i__22774__auto___49732 < len__22773__auto___49731)){
args__22780__auto__.push((arguments[i__22774__auto___49732]));

var G__49733 = (i__22774__auto___49732 + (1));
i__22774__auto___49732 = G__49733;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});

com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw (new Error(cljs.core.apply.call(null,cljs.core.str,args)));
});

com.rpl.specter.impl.throw_illegal.cljs$lang$maxFixedArity = (0);

com.rpl.specter.impl.throw_illegal.cljs$lang$applyTo = (function (seq49730){
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49730));
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
var start__22628__auto__ = cljs.core.system_time.call(null);
var ret__22629__auto__ = (function (){var n__22603__auto__ = iters;
var _ = (0);
while(true){
if((_ < n__22603__auto__)){
afn.call(null);

var G__49734 = (_ + (1));
_ = G__49734;
continue;
} else {
return null;
}
break;
}
})();
cljs.core.prn.call(null,[cljs.core.str("Elapsed time: "),cljs.core.str((cljs.core.system_time.call(null) - start__22628__auto__).toFixed((6))),cljs.core.str(" msecs")].join(''));

return ret__22629__auto__;
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

com.rpl.specter.impl.ExecutorFunctions.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"com.rpl.specter.impl/ExecutorFunctions");
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
com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22260__auto__,k__22261__auto__){
var self__ = this;
var this__22260__auto____$1 = this;
return cljs.core._lookup.call(null,this__22260__auto____$1,k__22261__auto__,null);
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22262__auto__,k49736,else__22263__auto__){
var self__ = this;
var this__22262__auto____$1 = this;
var G__49738 = (((k49736 instanceof cljs.core.Keyword))?k49736.fqn:null);
switch (G__49738) {
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
return cljs.core.get.call(null,self__.__extmap,k49736,else__22263__auto__);

}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22274__auto__,writer__22275__auto__,opts__22276__auto__){
var self__ = this;
var this__22274__auto____$1 = this;
var pr_pair__22277__auto__ = ((function (this__22274__auto____$1){
return (function (keyval__22278__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22275__auto__,cljs.core.pr_writer,""," ","",opts__22276__auto__,keyval__22278__auto__);
});})(this__22274__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22275__auto__,pr_pair__22277__auto__,"#com.rpl.specter.impl.TransformFunctions{",", ","}",opts__22276__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"executors","executors",-331073403),self__.executors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selector","selector",762528866),self__.selector],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transformer","transformer",-1493470620),self__.transformer],null))], null),self__.__extmap));
});


com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49735){
var self__ = this;
var G__49735__$1 = this;
return (new cljs.core.RecordIter((0),G__49735__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"executors","executors",-331073403),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Keyword(null,"transformer","transformer",-1493470620)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22258__auto__){
var self__ = this;
var this__22258__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22254__auto__){
var self__ = this;
var this__22254__auto____$1 = this;
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22264__auto__){
var self__ = this;
var this__22264__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22255__auto__){
var self__ = this;
var this__22255__auto____$1 = this;
var h__22027__auto__ = self__.__hash;
if(!((h__22027__auto__ == null))){
return h__22027__auto__;
} else {
var h__22027__auto____$1 = cljs.core.hash_imap.call(null,this__22255__auto____$1);
self__.__hash = h__22027__auto____$1;

return h__22027__auto____$1;
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22256__auto__,other__22257__auto__){
var self__ = this;
var this__22256__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21578__auto__ = other__22257__auto__;
if(cljs.core.truth_(and__21578__auto__)){
var and__21578__auto____$1 = (this__22256__auto____$1.constructor === other__22257__auto__.constructor);
if(and__21578__auto____$1){
return cljs.core.equiv_map.call(null,this__22256__auto____$1,other__22257__auto__);
} else {
return and__21578__auto____$1;
}
} else {
return and__21578__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22269__auto__,k__22270__auto__){
var self__ = this;
var this__22269__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selector","selector",762528866),null,new cljs.core.Keyword(null,"transformer","transformer",-1493470620),null,new cljs.core.Keyword(null,"executors","executors",-331073403),null], null), null),k__22270__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22269__auto____$1),self__.__meta),k__22270__auto__);
} else {
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22270__auto__)),null));
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22267__auto__,k__22268__auto__,G__49735){
var self__ = this;
var this__22267__auto____$1 = this;
var pred__49739 = cljs.core.keyword_identical_QMARK_;
var expr__49740 = k__22268__auto__;
if(cljs.core.truth_(pred__49739.call(null,new cljs.core.Keyword(null,"executors","executors",-331073403),expr__49740))){
return (new com.rpl.specter.impl.TransformFunctions(G__49735,self__.selector,self__.transformer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49739.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),expr__49740))){
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,G__49735,self__.transformer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49739.call(null,new cljs.core.Keyword(null,"transformer","transformer",-1493470620),expr__49740))){
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,G__49735,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22268__auto__,G__49735),null));
}
}
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22272__auto__){
var self__ = this;
var this__22272__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"executors","executors",-331073403),self__.executors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selector","selector",762528866),self__.selector],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transformer","transformer",-1493470620),self__.transformer],null))], null),self__.__extmap));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22259__auto__,G__49735){
var self__ = this;
var this__22259__auto____$1 = this;
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,G__49735,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22265__auto__,entry__22266__auto__){
var self__ = this;
var this__22265__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22266__auto__)){
return cljs.core._assoc.call(null,this__22265__auto____$1,cljs.core._nth.call(null,entry__22266__auto__,(0)),cljs.core._nth.call(null,entry__22266__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22265__auto____$1,entry__22266__auto__);
}
});

com.rpl.specter.impl.TransformFunctions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"executors","executors",1309458124,null),new cljs.core.Symbol(null,"selector","selector",-1891906903,null),new cljs.core.Symbol(null,"transformer","transformer",147060907,null)], null);
});

com.rpl.specter.impl.TransformFunctions.cljs$lang$type = true;

com.rpl.specter.impl.TransformFunctions.cljs$lang$ctorPrSeq = (function (this__22296__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/TransformFunctions");
});

com.rpl.specter.impl.TransformFunctions.cljs$lang$ctorPrWriter = (function (this__22296__auto__,writer__22297__auto__){
return cljs.core._write.call(null,writer__22297__auto__,"com.rpl.specter.impl/TransformFunctions");
});

com.rpl.specter.impl.__GT_TransformFunctions = (function com$rpl$specter$impl$__GT_TransformFunctions(executors,selector,transformer){
return (new com.rpl.specter.impl.TransformFunctions(executors,selector,transformer,null,null,null));
});

com.rpl.specter.impl.map__GT_TransformFunctions = (function com$rpl$specter$impl$map__GT_TransformFunctions(G__49737){
return (new com.rpl.specter.impl.TransformFunctions(new cljs.core.Keyword(null,"executors","executors",-331073403).cljs$core$IFn$_invoke$arity$1(G__49737),new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(G__49737),new cljs.core.Keyword(null,"transformer","transformer",-1493470620).cljs$core$IFn$_invoke$arity$1(G__49737),null,cljs.core.dissoc.call(null,G__49737,new cljs.core.Keyword(null,"executors","executors",-331073403),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Keyword(null,"transformer","transformer",-1493470620)),null));
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
com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22260__auto__,k__22261__auto__){
var self__ = this;
var this__22260__auto____$1 = this;
return cljs.core._lookup.call(null,this__22260__auto____$1,k__22261__auto__,null);
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22262__auto__,k49744,else__22263__auto__){
var self__ = this;
var this__22262__auto____$1 = this;
var G__49746 = (((k49744 instanceof cljs.core.Keyword))?k49744.fqn:null);
switch (G__49746) {
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
return cljs.core.get.call(null,self__.__extmap,k49744,else__22263__auto__);

}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22274__auto__,writer__22275__auto__,opts__22276__auto__){
var self__ = this;
var this__22274__auto____$1 = this;
var pr_pair__22277__auto__ = ((function (this__22274__auto____$1){
return (function (keyval__22278__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22275__auto__,cljs.core.pr_writer,""," ","",opts__22276__auto__,keyval__22278__auto__);
});})(this__22274__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22275__auto__,pr_pair__22277__auto__,"#com.rpl.specter.impl.CompiledPath{",", ","}",opts__22276__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-idx","params-idx",340984624),self__.params_idx],null))], null),self__.__extmap));
});


com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49743){
var self__ = this;
var G__49743__$1 = this;
return (new cljs.core.RecordIter((0),G__49743__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params-idx","params-idx",340984624)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22258__auto__){
var self__ = this;
var this__22258__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22254__auto__){
var self__ = this;
var this__22254__auto____$1 = this;
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22264__auto__){
var self__ = this;
var this__22264__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22255__auto__){
var self__ = this;
var this__22255__auto____$1 = this;
var h__22027__auto__ = self__.__hash;
if(!((h__22027__auto__ == null))){
return h__22027__auto__;
} else {
var h__22027__auto____$1 = cljs.core.hash_imap.call(null,this__22255__auto____$1);
self__.__hash = h__22027__auto____$1;

return h__22027__auto____$1;
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22256__auto__,other__22257__auto__){
var self__ = this;
var this__22256__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21578__auto__ = other__22257__auto__;
if(cljs.core.truth_(and__21578__auto__)){
var and__21578__auto____$1 = (this__22256__auto____$1.constructor === other__22257__auto__.constructor);
if(and__21578__auto____$1){
return cljs.core.equiv_map.call(null,this__22256__auto____$1,other__22257__auto__);
} else {
return and__21578__auto____$1;
}
} else {
return and__21578__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22269__auto__,k__22270__auto__){
var self__ = this;
var this__22269__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"params-idx","params-idx",340984624),null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),null], null), null),k__22270__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22269__auto____$1),self__.__meta),k__22270__auto__);
} else {
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22270__auto__)),null));
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22267__auto__,k__22268__auto__,G__49743){
var self__ = this;
var this__22267__auto____$1 = this;
var pred__49747 = cljs.core.keyword_identical_QMARK_;
var expr__49748 = k__22268__auto__;
if(cljs.core.truth_(pred__49747.call(null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),expr__49748))){
return (new com.rpl.specter.impl.CompiledPath(G__49743,self__.params,self__.params_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49747.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__49748))){
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,G__49743,self__.params_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49747.call(null,new cljs.core.Keyword(null,"params-idx","params-idx",340984624),expr__49748))){
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,G__49743,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22268__auto__,G__49743),null));
}
}
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22272__auto__){
var self__ = this;
var this__22272__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-idx","params-idx",340984624),self__.params_idx],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22259__auto__,G__49743){
var self__ = this;
var this__22259__auto____$1 = this;
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,G__49743,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22265__auto__,entry__22266__auto__){
var self__ = this;
var this__22265__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22266__auto__)){
return cljs.core._assoc.call(null,this__22265__auto____$1,cljs.core._nth.call(null,entry__22266__auto__,(0)),cljs.core._nth.call(null,entry__22266__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22265__auto____$1,entry__22266__auto__);
}
});

com.rpl.specter.impl.CompiledPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transform-fns","transform-fns",-1985393120,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"params-idx","params-idx",1981516151,null)], null);
});

com.rpl.specter.impl.CompiledPath.cljs$lang$type = true;

com.rpl.specter.impl.CompiledPath.cljs$lang$ctorPrSeq = (function (this__22296__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/CompiledPath");
});

com.rpl.specter.impl.CompiledPath.cljs$lang$ctorPrWriter = (function (this__22296__auto__,writer__22297__auto__){
return cljs.core._write.call(null,writer__22297__auto__,"com.rpl.specter.impl/CompiledPath");
});

com.rpl.specter.impl.__GT_CompiledPath = (function com$rpl$specter$impl$__GT_CompiledPath(transform_fns,params,params_idx){
return (new com.rpl.specter.impl.CompiledPath(transform_fns,params,params_idx,null,null,null));
});

com.rpl.specter.impl.map__GT_CompiledPath = (function com$rpl$specter$impl$map__GT_CompiledPath(G__49745){
return (new com.rpl.specter.impl.CompiledPath(new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(G__49745),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__49745),new cljs.core.Keyword(null,"params-idx","params-idx",340984624).cljs$core$IFn$_invoke$arity$1(G__49745),null,cljs.core.dissoc.call(null,G__49745,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params-idx","params-idx",340984624)),null));
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
com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22260__auto__,k__22261__auto__){
var self__ = this;
var this__22260__auto____$1 = this;
return cljs.core._lookup.call(null,this__22260__auto____$1,k__22261__auto__,null);
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22262__auto__,k49963,else__22263__auto__){
var self__ = this;
var this__22262__auto____$1 = this;
var G__49966 = (((k49963 instanceof cljs.core.Keyword))?k49963.fqn:null);
switch (G__49966) {
case "transform-fns":
return self__.transform_fns;

break;
case "num-needed-params":
return self__.num_needed_params;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49963,else__22263__auto__);

}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22274__auto__,writer__22275__auto__,opts__22276__auto__){
var self__ = this;
var this__22274__auto____$1 = this;
var pr_pair__22277__auto__ = ((function (this__22274__auto____$1){
return (function (keyval__22278__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22275__auto__,cljs.core.pr_writer,""," ","",opts__22276__auto__,keyval__22278__auto__);
});})(this__22274__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22275__auto__,pr_pair__22277__auto__,"#com.rpl.specter.impl.ParamsNeededPath{",", ","}",opts__22276__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),self__.num_needed_params],null))], null),self__.__extmap));
});


com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49962){
var self__ = this;
var G__49962__$1 = this;
return (new cljs.core.RecordIter((0),G__49962__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.call = (function() {
var G__49971 = null;
var G__49971__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var this__23012__auto__ = self____$1;
var array49751 = cljs.core.object_array.call(null,(0));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});
var G__49971__2 = (function (self__,G__49752){
var self__ = this;
var self____$1 = this;
var this__23012__auto__ = self____$1;
var array49751 = cljs.core.object_array.call(null,(1));
(array49751[(0)] = G__49752);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});
var G__49971__3 = (function (self__,G__49753,G__49754){
var self__ = this;
var self____$1 = this;
var this__23012__auto__ = self____$1;
var array49751 = cljs.core.object_array.call(null,(2));
(array49751[(0)] = G__49753);

(array49751[(1)] = G__49754);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});
var G__49971__4 = (function (self__,G__49755,G__49756,G__49757){
var self__ = this;
var self____$1 = this;
var this__23012__auto__ = self____$1;
var array49751 = cljs.core.object_array.call(null,(3));
(array49751[(0)] = G__49755);

(array49751[(1)] = G__49756);

(array49751[(2)] = G__49757);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});
var G__49971__5 = (function (self__,G__49758,G__49759,G__49760,G__49761){
var self__ = this;
var self____$1 = this;
var this__23012__auto__ = self____$1;
var array49751 = cljs.core.object_array.call(null,(4));
(array49751[(0)] = G__49758);

(array49751[(1)] = G__49759);

(array49751[(2)] = G__49760);

(array49751[(3)] = G__49761);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});
var G__49971__6 = (function (self__,G__49762,G__49763,G__49764,G__49765,G__49766){
var self__ = this;
var self____$1 = this;
var this__23012__auto__ = self____$1;
var array49751 = cljs.core.object_array.call(null,(5));
(array49751[(0)] = G__49762);

(array49751[(1)] = G__49763);

(array49751[(2)] = G__49764);

(array49751[(3)] = G__49765);

(array49751[(4)] = G__49766);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});
var G__49971__7 = (function (self__,G__49767,G__49768,G__49769,G__49770,G__49771,G__49772){
var self__ = this;
var self____$1 = this;
var this__23012__auto__ = self____$1;
var array49751 = cljs.core.object_array.call(null,(6));
(array49751[(0)] = G__49767);

(array49751[(1)] = G__49768);

(array49751[(2)] = G__49769);

(array49751[(3)] = G__49770);

(array49751[(4)] = G__49771);

(array49751[(5)] = G__49772);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});
var G__49971__8 = (function (self__,G__49773,G__49774,G__49775,G__49776,G__49777,G__49778,G__49779){
var self__ = this;
var self____$1 = this;
var this__23012__auto__ = self____$1;
var array49751 = cljs.core.object_array.call(null,(7));
(array49751[(0)] = G__49773);

(array49751[(1)] = G__49774);

(array49751[(2)] = G__49775);

(array49751[(3)] = G__49776);

(array49751[(4)] = G__49777);

(array49751[(5)] = G__49778);

(array49751[(6)] = G__49779);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});
var G__49971__9 = (function (self__,G__49780,G__49781,G__49782,G__49783,G__49784,G__49785,G__49786,G__49787){
var self__ = this;
var self____$1 = this;
var this__23012__auto__ = self____$1;
var array49751 = cljs.core.object_array.call(null,(8));
(array49751[(0)] = G__49780);

(array49751[(1)] = G__49781);

(array49751[(2)] = G__49782);

(array49751[(3)] = G__49783);

(array49751[(4)] = G__49784);

(array49751[(5)] = G__49785);

(array49751[(6)] = G__49786);

(array49751[(7)] = G__49787);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});
var G__49971__10 = (function (self__,G__49788,G__49789,G__49790,G__49791,G__49792,G__49793,G__49794,G__49795,G__49796){
var self__ = this;
var self____$1 = this;
var this__23012__auto__ = self____$1;
var array49751 = cljs.core.object_array.call(null,(9));
(array49751[(0)] = G__49788);

(array49751[(1)] = G__49789);

(array49751[(2)] = G__49790);

(array49751[(3)] = G__49791);

(array49751[(4)] = G__49792);

(array49751[(5)] = G__49793);

(array49751[(6)] = G__49794);

(array49751[(7)] = G__49795);

(array49751[(8)] = G__49796);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});
var G__49971__11 = (function (self__,G__49797,G__49798,G__49799,G__49800,G__49801,G__49802,G__49803,G__49804,G__49805,G__49806){
var self__ = this;
var self____$1 = this;
var this__23012__auto__ = self____$1;
var array49751 = cljs.core.object_array.call(null,(10));
(array49751[(0)] = G__49797);

(array49751[(1)] = G__49798);

(array49751[(2)] = G__49799);

(array49751[(3)] = G__49800);

(array49751[(4)] = G__49801);

(array49751[(5)] = G__49802);

(array49751[(6)] = G__49803);

(array49751[(7)] = G__49804);

(array49751[(8)] = G__49805);

(array49751[(9)] = G__49806);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});
var G__49971__12 = (function (self__,G__49807,G__49808,G__49809,G__49810,G__49811,G__49812,G__49813,G__49814,G__49815,G__49816,G__49817){
var self__ = this;
var self____$1 = this;
var this__23012__auto__ = self____$1;
var array49751 = cljs.core.object_array.call(null,(11));
(array49751[(0)] = G__49807);

(array49751[(1)] = G__49808);

(array49751[(2)] = G__49809);

(array49751[(3)] = G__49810);

(array49751[(4)] = G__49811);

(array49751[(5)] = G__49812);

(array49751[(6)] = G__49813);

(array49751[(7)] = G__49814);

(array49751[(8)] = G__49815);

(array49751[(9)] = G__49816);

(array49751[(10)] = G__49817);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});
var G__49971__13 = (function (self__,G__49818,G__49819,G__49820,G__49821,G__49822,G__49823,G__49824,G__49825,G__49826,G__49827,G__49828,G__49829){
var self__ = this;
var self____$1 = this;
var this__23012__auto__ = self____$1;
var array49751 = cljs.core.object_array.call(null,(12));
(array49751[(0)] = G__49818);

(array49751[(1)] = G__49819);

(array49751[(2)] = G__49820);

(array49751[(3)] = G__49821);

(array49751[(4)] = G__49822);

(array49751[(5)] = G__49823);

(array49751[(6)] = G__49824);

(array49751[(7)] = G__49825);

(array49751[(8)] = G__49826);

(array49751[(9)] = G__49827);

(array49751[(10)] = G__49828);

(array49751[(11)] = G__49829);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});
var G__49971__14 = (function (self__,G__49830,G__49831,G__49832,G__49833,G__49834,G__49835,G__49836,G__49837,G__49838,G__49839,G__49840,G__49841,G__49842){
var self__ = this;
var self____$1 = this;
var this__23012__auto__ = self____$1;
var array49751 = cljs.core.object_array.call(null,(13));
(array49751[(0)] = G__49830);

(array49751[(1)] = G__49831);

(array49751[(2)] = G__49832);

(array49751[(3)] = G__49833);

(array49751[(4)] = G__49834);

(array49751[(5)] = G__49835);

(array49751[(6)] = G__49836);

(array49751[(7)] = G__49837);

(array49751[(8)] = G__49838);

(array49751[(9)] = G__49839);

(array49751[(10)] = G__49840);

(array49751[(11)] = G__49841);

(array49751[(12)] = G__49842);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});
var G__49971__15 = (function (self__,G__49843,G__49844,G__49845,G__49846,G__49847,G__49848,G__49849,G__49850,G__49851,G__49852,G__49853,G__49854,G__49855,G__49856){
var self__ = this;
var self____$1 = this;
var this__23012__auto__ = self____$1;
var array49751 = cljs.core.object_array.call(null,(14));
(array49751[(0)] = G__49843);

(array49751[(1)] = G__49844);

(array49751[(2)] = G__49845);

(array49751[(3)] = G__49846);

(array49751[(4)] = G__49847);

(array49751[(5)] = G__49848);

(array49751[(6)] = G__49849);

(array49751[(7)] = G__49850);

(array49751[(8)] = G__49851);

(array49751[(9)] = G__49852);

(array49751[(10)] = G__49853);

(array49751[(11)] = G__49854);

(array49751[(12)] = G__49855);

(array49751[(13)] = G__49856);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});
var G__49971__16 = (function (self__,G__49857,G__49858,G__49859,G__49860,G__49861,G__49862,G__49863,G__49864,G__49865,G__49866,G__49867,G__49868,G__49869,G__49870,G__49871){
var self__ = this;
var self____$1 = this;
var this__23012__auto__ = self____$1;
var array49751 = cljs.core.object_array.call(null,(15));
(array49751[(0)] = G__49857);

(array49751[(1)] = G__49858);

(array49751[(2)] = G__49859);

(array49751[(3)] = G__49860);

(array49751[(4)] = G__49861);

(array49751[(5)] = G__49862);

(array49751[(6)] = G__49863);

(array49751[(7)] = G__49864);

(array49751[(8)] = G__49865);

(array49751[(9)] = G__49866);

(array49751[(10)] = G__49867);

(array49751[(11)] = G__49868);

(array49751[(12)] = G__49869);

(array49751[(13)] = G__49870);

(array49751[(14)] = G__49871);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});
var G__49971__17 = (function (self__,G__49872,G__49873,G__49874,G__49875,G__49876,G__49877,G__49878,G__49879,G__49880,G__49881,G__49882,G__49883,G__49884,G__49885,G__49886,G__49887){
var self__ = this;
var self____$1 = this;
var this__23012__auto__ = self____$1;
var array49751 = cljs.core.object_array.call(null,(16));
(array49751[(0)] = G__49872);

(array49751[(1)] = G__49873);

(array49751[(2)] = G__49874);

(array49751[(3)] = G__49875);

(array49751[(4)] = G__49876);

(array49751[(5)] = G__49877);

(array49751[(6)] = G__49878);

(array49751[(7)] = G__49879);

(array49751[(8)] = G__49880);

(array49751[(9)] = G__49881);

(array49751[(10)] = G__49882);

(array49751[(11)] = G__49883);

(array49751[(12)] = G__49884);

(array49751[(13)] = G__49885);

(array49751[(14)] = G__49886);

(array49751[(15)] = G__49887);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});
var G__49971__18 = (function (self__,G__49888,G__49889,G__49890,G__49891,G__49892,G__49893,G__49894,G__49895,G__49896,G__49897,G__49898,G__49899,G__49900,G__49901,G__49902,G__49903,G__49904){
var self__ = this;
var self____$1 = this;
var this__23012__auto__ = self____$1;
var array49751 = cljs.core.object_array.call(null,(17));
(array49751[(0)] = G__49888);

(array49751[(1)] = G__49889);

(array49751[(2)] = G__49890);

(array49751[(3)] = G__49891);

(array49751[(4)] = G__49892);

(array49751[(5)] = G__49893);

(array49751[(6)] = G__49894);

(array49751[(7)] = G__49895);

(array49751[(8)] = G__49896);

(array49751[(9)] = G__49897);

(array49751[(10)] = G__49898);

(array49751[(11)] = G__49899);

(array49751[(12)] = G__49900);

(array49751[(13)] = G__49901);

(array49751[(14)] = G__49902);

(array49751[(15)] = G__49903);

(array49751[(16)] = G__49904);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});
var G__49971__19 = (function (self__,G__49905,G__49906,G__49907,G__49908,G__49909,G__49910,G__49911,G__49912,G__49913,G__49914,G__49915,G__49916,G__49917,G__49918,G__49919,G__49920,G__49921,G__49922){
var self__ = this;
var self____$1 = this;
var this__23012__auto__ = self____$1;
var array49751 = cljs.core.object_array.call(null,(18));
(array49751[(0)] = G__49905);

(array49751[(1)] = G__49906);

(array49751[(2)] = G__49907);

(array49751[(3)] = G__49908);

(array49751[(4)] = G__49909);

(array49751[(5)] = G__49910);

(array49751[(6)] = G__49911);

(array49751[(7)] = G__49912);

(array49751[(8)] = G__49913);

(array49751[(9)] = G__49914);

(array49751[(10)] = G__49915);

(array49751[(11)] = G__49916);

(array49751[(12)] = G__49917);

(array49751[(13)] = G__49918);

(array49751[(14)] = G__49919);

(array49751[(15)] = G__49920);

(array49751[(16)] = G__49921);

(array49751[(17)] = G__49922);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});
var G__49971__20 = (function (self__,G__49923,G__49924,G__49925,G__49926,G__49927,G__49928,G__49929,G__49930,G__49931,G__49932,G__49933,G__49934,G__49935,G__49936,G__49937,G__49938,G__49939,G__49940,G__49941){
var self__ = this;
var self____$1 = this;
var this__23012__auto__ = self____$1;
var array49751 = cljs.core.object_array.call(null,(19));
(array49751[(0)] = G__49923);

(array49751[(1)] = G__49924);

(array49751[(2)] = G__49925);

(array49751[(3)] = G__49926);

(array49751[(4)] = G__49927);

(array49751[(5)] = G__49928);

(array49751[(6)] = G__49929);

(array49751[(7)] = G__49930);

(array49751[(8)] = G__49931);

(array49751[(9)] = G__49932);

(array49751[(10)] = G__49933);

(array49751[(11)] = G__49934);

(array49751[(12)] = G__49935);

(array49751[(13)] = G__49936);

(array49751[(14)] = G__49937);

(array49751[(15)] = G__49938);

(array49751[(16)] = G__49939);

(array49751[(17)] = G__49940);

(array49751[(18)] = G__49941);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});
var G__49971__21 = (function (self__,G__49942,G__49943,G__49944,G__49945,G__49946,G__49947,G__49948,G__49949,G__49950,G__49951,G__49952,G__49953,G__49954,G__49955,G__49956,G__49957,G__49958,G__49959,G__49960,G__49961){
var self__ = this;
var self____$1 = this;
var this__23012__auto__ = self____$1;
var array49751 = cljs.core.object_array.call(null,(20));
(array49751[(0)] = G__49942);

(array49751[(1)] = G__49943);

(array49751[(2)] = G__49944);

(array49751[(3)] = G__49945);

(array49751[(4)] = G__49946);

(array49751[(5)] = G__49947);

(array49751[(6)] = G__49948);

(array49751[(7)] = G__49949);

(array49751[(8)] = G__49950);

(array49751[(9)] = G__49951);

(array49751[(10)] = G__49952);

(array49751[(11)] = G__49953);

(array49751[(12)] = G__49954);

(array49751[(13)] = G__49955);

(array49751[(14)] = G__49956);

(array49751[(15)] = G__49957);

(array49751[(16)] = G__49958);

(array49751[(17)] = G__49959);

(array49751[(18)] = G__49960);

(array49751[(19)] = G__49961);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});
var G__49971__22 = (function (self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var a = cljs.core.object_array.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20], null),rest));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this$,a,(0));
});
G__49971 = function(self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest){
switch(arguments.length){
case 1:
return G__49971__1.call(this,self__);
case 2:
return G__49971__2.call(this,self__,p01);
case 3:
return G__49971__3.call(this,self__,p01,p02);
case 4:
return G__49971__4.call(this,self__,p01,p02,p03);
case 5:
return G__49971__5.call(this,self__,p01,p02,p03,p04);
case 6:
return G__49971__6.call(this,self__,p01,p02,p03,p04,p05);
case 7:
return G__49971__7.call(this,self__,p01,p02,p03,p04,p05,p06);
case 8:
return G__49971__8.call(this,self__,p01,p02,p03,p04,p05,p06,p07);
case 9:
return G__49971__9.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08);
case 10:
return G__49971__10.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09);
case 11:
return G__49971__11.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10);
case 12:
return G__49971__12.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11);
case 13:
return G__49971__13.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12);
case 14:
return G__49971__14.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13);
case 15:
return G__49971__15.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14);
case 16:
return G__49971__16.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15);
case 17:
return G__49971__17.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16);
case 18:
return G__49971__18.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17);
case 19:
return G__49971__19.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18);
case 20:
return G__49971__20.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19);
case 21:
return G__49971__21.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20);
case 22:
return G__49971__22.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__49971.cljs$core$IFn$_invoke$arity$1 = G__49971__1;
G__49971.cljs$core$IFn$_invoke$arity$2 = G__49971__2;
G__49971.cljs$core$IFn$_invoke$arity$3 = G__49971__3;
G__49971.cljs$core$IFn$_invoke$arity$4 = G__49971__4;
G__49971.cljs$core$IFn$_invoke$arity$5 = G__49971__5;
G__49971.cljs$core$IFn$_invoke$arity$6 = G__49971__6;
G__49971.cljs$core$IFn$_invoke$arity$7 = G__49971__7;
G__49971.cljs$core$IFn$_invoke$arity$8 = G__49971__8;
G__49971.cljs$core$IFn$_invoke$arity$9 = G__49971__9;
G__49971.cljs$core$IFn$_invoke$arity$10 = G__49971__10;
G__49971.cljs$core$IFn$_invoke$arity$11 = G__49971__11;
G__49971.cljs$core$IFn$_invoke$arity$12 = G__49971__12;
G__49971.cljs$core$IFn$_invoke$arity$13 = G__49971__13;
G__49971.cljs$core$IFn$_invoke$arity$14 = G__49971__14;
G__49971.cljs$core$IFn$_invoke$arity$15 = G__49971__15;
G__49971.cljs$core$IFn$_invoke$arity$16 = G__49971__16;
G__49971.cljs$core$IFn$_invoke$arity$17 = G__49971__17;
G__49971.cljs$core$IFn$_invoke$arity$18 = G__49971__18;
G__49971.cljs$core$IFn$_invoke$arity$19 = G__49971__19;
G__49971.cljs$core$IFn$_invoke$arity$20 = G__49971__20;
G__49971.cljs$core$IFn$_invoke$arity$21 = G__49971__21;
G__49971.cljs$core$IFn$_invoke$arity$22 = G__49971__22;
return G__49971;
})()
;

com.rpl.specter.impl.ParamsNeededPath.prototype.apply = (function (self__,args49965){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args49965)));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this__23012__auto__ = this;
var array49751 = cljs.core.object_array.call(null,(0));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$1 = (function (G__49752){
var self__ = this;
var this__23012__auto__ = this;
var array49751 = cljs.core.object_array.call(null,(1));
(array49751[(0)] = G__49752);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$2 = (function (G__49753,G__49754){
var self__ = this;
var this__23012__auto__ = this;
var array49751 = cljs.core.object_array.call(null,(2));
(array49751[(0)] = G__49753);

(array49751[(1)] = G__49754);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$3 = (function (G__49755,G__49756,G__49757){
var self__ = this;
var this__23012__auto__ = this;
var array49751 = cljs.core.object_array.call(null,(3));
(array49751[(0)] = G__49755);

(array49751[(1)] = G__49756);

(array49751[(2)] = G__49757);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$4 = (function (G__49758,G__49759,G__49760,G__49761){
var self__ = this;
var this__23012__auto__ = this;
var array49751 = cljs.core.object_array.call(null,(4));
(array49751[(0)] = G__49758);

(array49751[(1)] = G__49759);

(array49751[(2)] = G__49760);

(array49751[(3)] = G__49761);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$5 = (function (G__49762,G__49763,G__49764,G__49765,G__49766){
var self__ = this;
var this__23012__auto__ = this;
var array49751 = cljs.core.object_array.call(null,(5));
(array49751[(0)] = G__49762);

(array49751[(1)] = G__49763);

(array49751[(2)] = G__49764);

(array49751[(3)] = G__49765);

(array49751[(4)] = G__49766);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$6 = (function (G__49767,G__49768,G__49769,G__49770,G__49771,G__49772){
var self__ = this;
var this__23012__auto__ = this;
var array49751 = cljs.core.object_array.call(null,(6));
(array49751[(0)] = G__49767);

(array49751[(1)] = G__49768);

(array49751[(2)] = G__49769);

(array49751[(3)] = G__49770);

(array49751[(4)] = G__49771);

(array49751[(5)] = G__49772);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$7 = (function (G__49773,G__49774,G__49775,G__49776,G__49777,G__49778,G__49779){
var self__ = this;
var this__23012__auto__ = this;
var array49751 = cljs.core.object_array.call(null,(7));
(array49751[(0)] = G__49773);

(array49751[(1)] = G__49774);

(array49751[(2)] = G__49775);

(array49751[(3)] = G__49776);

(array49751[(4)] = G__49777);

(array49751[(5)] = G__49778);

(array49751[(6)] = G__49779);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$8 = (function (G__49780,G__49781,G__49782,G__49783,G__49784,G__49785,G__49786,G__49787){
var self__ = this;
var this__23012__auto__ = this;
var array49751 = cljs.core.object_array.call(null,(8));
(array49751[(0)] = G__49780);

(array49751[(1)] = G__49781);

(array49751[(2)] = G__49782);

(array49751[(3)] = G__49783);

(array49751[(4)] = G__49784);

(array49751[(5)] = G__49785);

(array49751[(6)] = G__49786);

(array49751[(7)] = G__49787);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$9 = (function (G__49788,G__49789,G__49790,G__49791,G__49792,G__49793,G__49794,G__49795,G__49796){
var self__ = this;
var this__23012__auto__ = this;
var array49751 = cljs.core.object_array.call(null,(9));
(array49751[(0)] = G__49788);

(array49751[(1)] = G__49789);

(array49751[(2)] = G__49790);

(array49751[(3)] = G__49791);

(array49751[(4)] = G__49792);

(array49751[(5)] = G__49793);

(array49751[(6)] = G__49794);

(array49751[(7)] = G__49795);

(array49751[(8)] = G__49796);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$10 = (function (G__49797,G__49798,G__49799,G__49800,G__49801,G__49802,G__49803,G__49804,G__49805,G__49806){
var self__ = this;
var this__23012__auto__ = this;
var array49751 = cljs.core.object_array.call(null,(10));
(array49751[(0)] = G__49797);

(array49751[(1)] = G__49798);

(array49751[(2)] = G__49799);

(array49751[(3)] = G__49800);

(array49751[(4)] = G__49801);

(array49751[(5)] = G__49802);

(array49751[(6)] = G__49803);

(array49751[(7)] = G__49804);

(array49751[(8)] = G__49805);

(array49751[(9)] = G__49806);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$11 = (function (G__49807,G__49808,G__49809,G__49810,G__49811,G__49812,G__49813,G__49814,G__49815,G__49816,G__49817){
var self__ = this;
var this__23012__auto__ = this;
var array49751 = cljs.core.object_array.call(null,(11));
(array49751[(0)] = G__49807);

(array49751[(1)] = G__49808);

(array49751[(2)] = G__49809);

(array49751[(3)] = G__49810);

(array49751[(4)] = G__49811);

(array49751[(5)] = G__49812);

(array49751[(6)] = G__49813);

(array49751[(7)] = G__49814);

(array49751[(8)] = G__49815);

(array49751[(9)] = G__49816);

(array49751[(10)] = G__49817);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$12 = (function (G__49818,G__49819,G__49820,G__49821,G__49822,G__49823,G__49824,G__49825,G__49826,G__49827,G__49828,G__49829){
var self__ = this;
var this__23012__auto__ = this;
var array49751 = cljs.core.object_array.call(null,(12));
(array49751[(0)] = G__49818);

(array49751[(1)] = G__49819);

(array49751[(2)] = G__49820);

(array49751[(3)] = G__49821);

(array49751[(4)] = G__49822);

(array49751[(5)] = G__49823);

(array49751[(6)] = G__49824);

(array49751[(7)] = G__49825);

(array49751[(8)] = G__49826);

(array49751[(9)] = G__49827);

(array49751[(10)] = G__49828);

(array49751[(11)] = G__49829);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$13 = (function (G__49830,G__49831,G__49832,G__49833,G__49834,G__49835,G__49836,G__49837,G__49838,G__49839,G__49840,G__49841,G__49842){
var self__ = this;
var this__23012__auto__ = this;
var array49751 = cljs.core.object_array.call(null,(13));
(array49751[(0)] = G__49830);

(array49751[(1)] = G__49831);

(array49751[(2)] = G__49832);

(array49751[(3)] = G__49833);

(array49751[(4)] = G__49834);

(array49751[(5)] = G__49835);

(array49751[(6)] = G__49836);

(array49751[(7)] = G__49837);

(array49751[(8)] = G__49838);

(array49751[(9)] = G__49839);

(array49751[(10)] = G__49840);

(array49751[(11)] = G__49841);

(array49751[(12)] = G__49842);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$14 = (function (G__49843,G__49844,G__49845,G__49846,G__49847,G__49848,G__49849,G__49850,G__49851,G__49852,G__49853,G__49854,G__49855,G__49856){
var self__ = this;
var this__23012__auto__ = this;
var array49751 = cljs.core.object_array.call(null,(14));
(array49751[(0)] = G__49843);

(array49751[(1)] = G__49844);

(array49751[(2)] = G__49845);

(array49751[(3)] = G__49846);

(array49751[(4)] = G__49847);

(array49751[(5)] = G__49848);

(array49751[(6)] = G__49849);

(array49751[(7)] = G__49850);

(array49751[(8)] = G__49851);

(array49751[(9)] = G__49852);

(array49751[(10)] = G__49853);

(array49751[(11)] = G__49854);

(array49751[(12)] = G__49855);

(array49751[(13)] = G__49856);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$15 = (function (G__49857,G__49858,G__49859,G__49860,G__49861,G__49862,G__49863,G__49864,G__49865,G__49866,G__49867,G__49868,G__49869,G__49870,G__49871){
var self__ = this;
var this__23012__auto__ = this;
var array49751 = cljs.core.object_array.call(null,(15));
(array49751[(0)] = G__49857);

(array49751[(1)] = G__49858);

(array49751[(2)] = G__49859);

(array49751[(3)] = G__49860);

(array49751[(4)] = G__49861);

(array49751[(5)] = G__49862);

(array49751[(6)] = G__49863);

(array49751[(7)] = G__49864);

(array49751[(8)] = G__49865);

(array49751[(9)] = G__49866);

(array49751[(10)] = G__49867);

(array49751[(11)] = G__49868);

(array49751[(12)] = G__49869);

(array49751[(13)] = G__49870);

(array49751[(14)] = G__49871);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$16 = (function (G__49872,G__49873,G__49874,G__49875,G__49876,G__49877,G__49878,G__49879,G__49880,G__49881,G__49882,G__49883,G__49884,G__49885,G__49886,G__49887){
var self__ = this;
var this__23012__auto__ = this;
var array49751 = cljs.core.object_array.call(null,(16));
(array49751[(0)] = G__49872);

(array49751[(1)] = G__49873);

(array49751[(2)] = G__49874);

(array49751[(3)] = G__49875);

(array49751[(4)] = G__49876);

(array49751[(5)] = G__49877);

(array49751[(6)] = G__49878);

(array49751[(7)] = G__49879);

(array49751[(8)] = G__49880);

(array49751[(9)] = G__49881);

(array49751[(10)] = G__49882);

(array49751[(11)] = G__49883);

(array49751[(12)] = G__49884);

(array49751[(13)] = G__49885);

(array49751[(14)] = G__49886);

(array49751[(15)] = G__49887);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$17 = (function (G__49888,G__49889,G__49890,G__49891,G__49892,G__49893,G__49894,G__49895,G__49896,G__49897,G__49898,G__49899,G__49900,G__49901,G__49902,G__49903,G__49904){
var self__ = this;
var this__23012__auto__ = this;
var array49751 = cljs.core.object_array.call(null,(17));
(array49751[(0)] = G__49888);

(array49751[(1)] = G__49889);

(array49751[(2)] = G__49890);

(array49751[(3)] = G__49891);

(array49751[(4)] = G__49892);

(array49751[(5)] = G__49893);

(array49751[(6)] = G__49894);

(array49751[(7)] = G__49895);

(array49751[(8)] = G__49896);

(array49751[(9)] = G__49897);

(array49751[(10)] = G__49898);

(array49751[(11)] = G__49899);

(array49751[(12)] = G__49900);

(array49751[(13)] = G__49901);

(array49751[(14)] = G__49902);

(array49751[(15)] = G__49903);

(array49751[(16)] = G__49904);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$18 = (function (G__49905,G__49906,G__49907,G__49908,G__49909,G__49910,G__49911,G__49912,G__49913,G__49914,G__49915,G__49916,G__49917,G__49918,G__49919,G__49920,G__49921,G__49922){
var self__ = this;
var this__23012__auto__ = this;
var array49751 = cljs.core.object_array.call(null,(18));
(array49751[(0)] = G__49905);

(array49751[(1)] = G__49906);

(array49751[(2)] = G__49907);

(array49751[(3)] = G__49908);

(array49751[(4)] = G__49909);

(array49751[(5)] = G__49910);

(array49751[(6)] = G__49911);

(array49751[(7)] = G__49912);

(array49751[(8)] = G__49913);

(array49751[(9)] = G__49914);

(array49751[(10)] = G__49915);

(array49751[(11)] = G__49916);

(array49751[(12)] = G__49917);

(array49751[(13)] = G__49918);

(array49751[(14)] = G__49919);

(array49751[(15)] = G__49920);

(array49751[(16)] = G__49921);

(array49751[(17)] = G__49922);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$19 = (function (G__49923,G__49924,G__49925,G__49926,G__49927,G__49928,G__49929,G__49930,G__49931,G__49932,G__49933,G__49934,G__49935,G__49936,G__49937,G__49938,G__49939,G__49940,G__49941){
var self__ = this;
var this__23012__auto__ = this;
var array49751 = cljs.core.object_array.call(null,(19));
(array49751[(0)] = G__49923);

(array49751[(1)] = G__49924);

(array49751[(2)] = G__49925);

(array49751[(3)] = G__49926);

(array49751[(4)] = G__49927);

(array49751[(5)] = G__49928);

(array49751[(6)] = G__49929);

(array49751[(7)] = G__49930);

(array49751[(8)] = G__49931);

(array49751[(9)] = G__49932);

(array49751[(10)] = G__49933);

(array49751[(11)] = G__49934);

(array49751[(12)] = G__49935);

(array49751[(13)] = G__49936);

(array49751[(14)] = G__49937);

(array49751[(15)] = G__49938);

(array49751[(16)] = G__49939);

(array49751[(17)] = G__49940);

(array49751[(18)] = G__49941);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$20 = (function (G__49942,G__49943,G__49944,G__49945,G__49946,G__49947,G__49948,G__49949,G__49950,G__49951,G__49952,G__49953,G__49954,G__49955,G__49956,G__49957,G__49958,G__49959,G__49960,G__49961){
var self__ = this;
var this__23012__auto__ = this;
var array49751 = cljs.core.object_array.call(null,(20));
(array49751[(0)] = G__49942);

(array49751[(1)] = G__49943);

(array49751[(2)] = G__49944);

(array49751[(3)] = G__49945);

(array49751[(4)] = G__49946);

(array49751[(5)] = G__49947);

(array49751[(6)] = G__49948);

(array49751[(7)] = G__49949);

(array49751[(8)] = G__49950);

(array49751[(9)] = G__49951);

(array49751[(10)] = G__49952);

(array49751[(11)] = G__49953);

(array49751[(12)] = G__49954);

(array49751[(13)] = G__49955);

(array49751[(14)] = G__49956);

(array49751[(15)] = G__49957);

(array49751[(16)] = G__49958);

(array49751[(17)] = G__49959);

(array49751[(18)] = G__49960);

(array49751[(19)] = G__49961);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__23012__auto__,array49751,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$21 = (function (p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest){
var self__ = this;
var this$ = this;
var a = cljs.core.object_array.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20], null),rest));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this$,a,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22258__auto__){
var self__ = this;
var this__22258__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22254__auto__){
var self__ = this;
var this__22254__auto____$1 = this;
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22264__auto__){
var self__ = this;
var this__22264__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22255__auto__){
var self__ = this;
var this__22255__auto____$1 = this;
var h__22027__auto__ = self__.__hash;
if(!((h__22027__auto__ == null))){
return h__22027__auto__;
} else {
var h__22027__auto____$1 = cljs.core.hash_imap.call(null,this__22255__auto____$1);
self__.__hash = h__22027__auto____$1;

return h__22027__auto____$1;
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22256__auto__,other__22257__auto__){
var self__ = this;
var this__22256__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21578__auto__ = other__22257__auto__;
if(cljs.core.truth_(and__21578__auto__)){
var and__21578__auto____$1 = (this__22256__auto____$1.constructor === other__22257__auto__.constructor);
if(and__21578__auto____$1){
return cljs.core.equiv_map.call(null,this__22256__auto____$1,other__22257__auto__);
} else {
return and__21578__auto____$1;
}
} else {
return and__21578__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22269__auto__,k__22270__auto__){
var self__ = this;
var this__22269__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),null], null), null),k__22270__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22269__auto____$1),self__.__meta),k__22270__auto__);
} else {
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22270__auto__)),null));
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22267__auto__,k__22268__auto__,G__49962){
var self__ = this;
var this__22267__auto____$1 = this;
var pred__49967 = cljs.core.keyword_identical_QMARK_;
var expr__49968 = k__22268__auto__;
if(cljs.core.truth_(pred__49967.call(null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),expr__49968))){
return (new com.rpl.specter.impl.ParamsNeededPath(G__49962,self__.num_needed_params,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49967.call(null,new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),expr__49968))){
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,G__49962,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22268__auto__,G__49962),null));
}
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22272__auto__){
var self__ = this;
var this__22272__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),self__.num_needed_params],null))], null),self__.__extmap));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22259__auto__,G__49962){
var self__ = this;
var this__22259__auto____$1 = this;
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,G__49962,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22265__auto__,entry__22266__auto__){
var self__ = this;
var this__22265__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22266__auto__)){
return cljs.core._assoc.call(null,this__22265__auto____$1,cljs.core._nth.call(null,entry__22266__auto__,(0)),cljs.core._nth.call(null,entry__22266__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22265__auto____$1,entry__22266__auto__);
}
});

com.rpl.specter.impl.ParamsNeededPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transform-fns","transform-fns",-1985393120,null),new cljs.core.Symbol(null,"num-needed-params","num-needed-params",421205430,null)], null);
});

com.rpl.specter.impl.ParamsNeededPath.cljs$lang$type = true;

com.rpl.specter.impl.ParamsNeededPath.cljs$lang$ctorPrSeq = (function (this__22296__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/ParamsNeededPath");
});

com.rpl.specter.impl.ParamsNeededPath.cljs$lang$ctorPrWriter = (function (this__22296__auto__,writer__22297__auto__){
return cljs.core._write.call(null,writer__22297__auto__,"com.rpl.specter.impl/ParamsNeededPath");
});

com.rpl.specter.impl.__GT_ParamsNeededPath = (function com$rpl$specter$impl$__GT_ParamsNeededPath(transform_fns,num_needed_params){
return (new com.rpl.specter.impl.ParamsNeededPath(transform_fns,num_needed_params,null,null,null));
});

com.rpl.specter.impl.map__GT_ParamsNeededPath = (function com$rpl$specter$impl$map__GT_ParamsNeededPath(G__49964){
return (new com.rpl.specter.impl.ParamsNeededPath(new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(G__49964),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097).cljs$core$IFn$_invoke$arity$1(G__49964),null,cljs.core.dissoc.call(null,G__49964,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097)),null));
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
var x__22303__auto__ = (((paths == null))?null:paths);
var m__22304__auto__ = (com.rpl.specter.impl.do_comp_paths[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,paths);
} else {
var m__22304__auto____$1 = (com.rpl.specter.impl.do_comp_paths["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,paths);
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
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"select*","select*",-1829914060),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$Navigator$))?true:false):false))?(function (G__49980,G__49981,G__49982){
return com.rpl.specter.protocols.select_STAR_.call(null,G__49980,G__49981,G__49982);
}):com.rpl.specter.protocols.select_STAR_),new cljs.core.Keyword(null,"transform*","transform*",-1613794522),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$Navigator$))?true:false):false))?(function (G__49984,G__49985,G__49986){
return com.rpl.specter.protocols.transform_STAR_.call(null,G__49984,G__49985,G__49986);
}):com.rpl.specter.protocols.transform_STAR_)], null);
});
com.rpl.specter.impl.collector_impl = (function com$rpl$specter$impl$collector_impl(obj){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collect-val","collect-val",801894069),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$Collector$))?true:false):false))?(function (G__49991,G__49992){
return com.rpl.specter.protocols.collect_val.call(null,G__49991,G__49992);
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
var or__21590__auto__ = cljs.core.fn_QMARK_.call(null,obj);
if(or__21590__auto__){
return or__21590__auto__;
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
var x__22303__auto__ = (((this$ == null))?null:this$);
var m__22304__auto__ = (com.rpl.specter.impl.coerce_path[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,this$);
} else {
var m__22304__auto____$1 = (com.rpl.specter.impl.coerce_path["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,this$);
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
com.rpl.specter.impl.combine_same_types = (function com$rpl$specter$impl$combine_same_types(p__49999){
var vec__50003 = p__49999;
var seq__50004 = cljs.core.seq.call(null,vec__50003);
var first__50005 = cljs.core.first.call(null,seq__50004);
var seq__50004__$1 = cljs.core.next.call(null,seq__50004);
var f = first__50005;
var _ = seq__50004__$1;
var all = vec__50003;
var exs = f.executors;
var t = exs.type;
var combiner = ((cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"richpath","richpath",-150197948)))?((function (exs,t,vec__50003,seq__50004,first__50005,seq__50004__$1,f,_,all){
return (function (curr,next){
return ((function (exs,t,vec__50003,seq__50004,first__50005,seq__50004__$1,f,_,all){
return (function (params,params_idx,vals,structure,next_fn){
return curr.call(null,params,params_idx,vals,structure,((function (exs,t,vec__50003,seq__50004,first__50005,seq__50004__$1,f,_,all){
return (function (params_next,params_idx_next,vals_next,structure_next){
return next.call(null,params_next,params_idx_next,vals_next,structure_next,next_fn);
});})(exs,t,vec__50003,seq__50004,first__50005,seq__50004__$1,f,_,all))
);
});
;})(exs,t,vec__50003,seq__50004,first__50005,seq__50004__$1,f,_,all))
});})(exs,t,vec__50003,seq__50004,first__50005,seq__50004__$1,f,_,all))
:((function (exs,t,vec__50003,seq__50004,first__50005,seq__50004__$1,f,_,all){
return (function (curr,next){
return ((function (exs,t,vec__50003,seq__50004,first__50005,seq__50004__$1,f,_,all){
return (function (structure,next_fn){
return curr.call(null,structure,((function (exs,t,vec__50003,seq__50004,first__50005,seq__50004__$1,f,_,all){
return (function (structure__$1){
return next.call(null,structure__$1,next_fn);
});})(exs,t,vec__50003,seq__50004,first__50005,seq__50004__$1,f,_,all))
);
});
;})(exs,t,vec__50003,seq__50004,first__50005,seq__50004__$1,f,_,all))
});})(exs,t,vec__50003,seq__50004,first__50005,seq__50004__$1,f,_,all))
);
return cljs.core.reduce.call(null,((function (exs,t,combiner,vec__50003,seq__50004,first__50005,seq__50004__$1,f,_,all){
return (function (curr,next){
return com.rpl.specter.impl.__GT_TransformFunctions.call(null,exs,combiner.call(null,curr.selector,next.selector),combiner.call(null,curr.transformer,next.transformer));
});})(exs,t,combiner,vec__50003,seq__50004,first__50005,seq__50004__$1,f,_,all))
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
return (function (p1__50006_SHARP_){
return (p1__50006_SHARP_ instanceof com.rpl.specter.impl.ParamsNeededPath);
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
var x__22303__auto__ = (((cell == null))?null:cell);
var m__22304__auto__ = (com.rpl.specter.impl.set_cell[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,cell,x);
} else {
var m__22304__auto____$1 = (com.rpl.specter.impl.set_cell["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,cell,x);
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

com.rpl.specter.impl.MutableCell.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"com.rpl.specter.impl/MutableCell");
});

com.rpl.specter.impl.__GT_MutableCell = (function com$rpl$specter$impl$__GT_MutableCell(q){
return (new com.rpl.specter.impl.MutableCell(q));
});

com.rpl.specter.impl.mutable_cell = (function com$rpl$specter$impl$mutable_cell(var_args){
var args50007 = [];
var len__22773__auto___50010 = arguments.length;
var i__22774__auto___50011 = (0);
while(true){
if((i__22774__auto___50011 < len__22773__auto___50010)){
args50007.push((arguments[i__22774__auto___50011]));

var G__50012 = (i__22774__auto___50011 + (1));
i__22774__auto___50011 = G__50012;
continue;
} else {
}
break;
}

var G__50009 = args50007.length;
switch (G__50009) {
case 0:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50007.length)].join('')));

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
var x__22303__auto__ = (((structure == null))?null:structure);
var m__22304__auto__ = (com.rpl.specter.impl.append_all[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,structure,elements);
} else {
var m__22304__auto____$1 = (com.rpl.specter.impl.append_all["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,structure,elements);
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
var x__22303__auto__ = (((structure == null))?null:structure);
var m__22304__auto__ = (com.rpl.specter.impl.prepend_all[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,structure,elements);
} else {
var m__22304__auto____$1 = (com.rpl.specter.impl.prepend_all["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,structure,elements);
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
var x__22303__auto__ = (((s == null))?null:s);
var m__22304__auto__ = (com.rpl.specter.impl.update_first[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,s,afn);
} else {
var m__22304__auto____$1 = (com.rpl.specter.impl.update_first["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,s,afn);
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
var x__22303__auto__ = (((s == null))?null:s);
var m__22304__auto__ = (com.rpl.specter.impl.update_last[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,s,afn);
} else {
var m__22304__auto____$1 = (com.rpl.specter.impl.update_last["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,s,afn);
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
var x__22303__auto__ = (((s == null))?null:s);
var m__22304__auto__ = (com.rpl.specter.impl.get_first[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,s);
} else {
var m__22304__auto____$1 = (com.rpl.specter.impl.get_first["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,s);
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
var x__22303__auto__ = (((s == null))?null:s);
var m__22304__auto__ = (com.rpl.specter.impl.get_last[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,s);
} else {
var m__22304__auto____$1 = (com.rpl.specter.impl.get_last["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,s);
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
var x__22303__auto__ = (((s == null))?null:s);
var m__22304__auto__ = (com.rpl.specter.impl.fast_empty_QMARK_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,s);
} else {
var m__22304__auto____$1 = (com.rpl.specter.impl.fast_empty_QMARK_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,s);
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
var G__50014 = c;
switch (G__50014) {
case (1):
var vec__50015 = v__$1;
var e = cljs.core.nth.call(null,vec__50015,(0),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [afn.call(null,e)], null);

break;
case (2):
var vec__50018 = v__$1;
var e1 = cljs.core.nth.call(null,vec__50018,(0),null);
var e2 = cljs.core.nth.call(null,vec__50018,(1),null);
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
if(cljs.core.truth_((function (){var and__21578__auto__ = com.rpl.specter.impl.fn_invocation_QMARK_.call(null,structure);
if(cljs.core.truth_(and__21578__auto__)){
return com.rpl.specter.impl.fn_invocation_QMARK_.call(null,ret);
} else {
return and__21578__auto__;
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
if(typeof com.rpl.specter.impl.t_com$rpl$specter$impl50025 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl50025 = (function (do_compiled_traverse,apath,structure,meta50026){
this.do_compiled_traverse = do_compiled_traverse;
this.apath = apath;
this.structure = structure;
this.meta50026 = meta50026;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.impl.t_com$rpl$specter$impl50025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50027,meta50026__$1){
var self__ = this;
var _50027__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl50025(self__.do_compiled_traverse,self__.apath,self__.structure,meta50026__$1));
});

com.rpl.specter.impl.t_com$rpl$specter$impl50025.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50027){
var self__ = this;
var _50027__$1 = this;
return self__.meta50026;
});

com.rpl.specter.impl.t_com$rpl$specter$impl50025.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,afn){
var self__ = this;
var this$__$1 = this;
return cljs.core._reduce.call(null,this$__$1,afn,afn.call(null));
});

com.rpl.specter.impl.t_com$rpl$specter$impl50025.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,afn,start){
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

com.rpl.specter.impl.t_com$rpl$specter$impl50025.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"do-compiled-traverse","do-compiled-traverse",1409923277,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"apath","apath",567854908,null),new cljs.core.Symbol(null,"structure","structure",-1090603686,null)], null)))], null)),new cljs.core.Symbol(null,"apath","apath",567854908,null),new cljs.core.Symbol(null,"structure","structure",-1090603686,null),new cljs.core.Symbol(null,"meta50026","meta50026",-665282557,null)], null);
});

com.rpl.specter.impl.t_com$rpl$specter$impl50025.cljs$lang$type = true;

com.rpl.specter.impl.t_com$rpl$specter$impl50025.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl50025";

com.rpl.specter.impl.t_com$rpl$specter$impl50025.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl50025");
});

com.rpl.specter.impl.__GT_t_com$rpl$specter$impl50025 = (function com$rpl$specter$impl$do_compiled_traverse_$___GT_t_com$rpl$specter$impl50025(do_compiled_traverse__$1,apath__$1,structure__$1,meta50026){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl50025(do_compiled_traverse__$1,apath__$1,structure__$1,meta50026));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl50025(com$rpl$specter$impl$do_compiled_traverse,apath,structure,cljs.core.PersistentArrayMap.EMPTY));
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
return cljs.core.reduce.call(null,(function (curr__22975__auto__,e){
var ret__22976__auto__ = next_fn.call(null,e);
if((ret__22976__auto__ === com.rpl.specter.impl.NONE)){
return curr__22975__auto__;
} else {
return ret__22976__auto__;
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
var x__22303__auto__ = (((structure == null))?null:structure);
var m__22304__auto__ = (com.rpl.specter.impl.all_transform[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,structure,next_fn);
} else {
var m__22304__auto____$1 = (com.rpl.specter.impl.all_transform["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,structure,next_fn);
} else {
throw cljs.core.missing_protocol.call(null,"AllTransformProtocol.all-transform",structure);
}
}
}
});

com.rpl.specter.impl.non_transient_map_all_transform = (function com$rpl$specter$impl$non_transient_map_all_transform(structure,next_fn,empty_map){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
var vec__50031 = next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
var newk = cljs.core.nth.call(null,vec__50031,(0),null);
var newv = cljs.core.nth.call(null,vec__50031,(1),null);
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
var vec__50035 = next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
var newk = cljs.core.nth.call(null,vec__50035,(0),null);
var newv = cljs.core.nth.call(null,vec__50035,(1),null);
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
return (function (p1__50034_SHARP_){
return next_fn.call(null,p1__50034_SHARP_);
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

com.rpl.specter.impl.AllNavigator.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"com.rpl.specter.impl/AllNavigator");
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
var x__22303__auto__ = (((structure == null))?null:structure);
var m__22304__auto__ = (com.rpl.specter.impl.map_vals_transform[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,structure,next_fn);
} else {
var m__22304__auto____$1 = (com.rpl.specter.impl.map_vals_transform["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,structure,next_fn);
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

com.rpl.specter.impl.ValCollect.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"com.rpl.specter.impl/ValCollect");
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

com.rpl.specter.impl.PosNavigator.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"com.rpl.specter.impl/PosNavigator");
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
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p__50042,i){
var vec__50043 = p__50042;
var ranges = cljs.core.nth.call(null,vec__50043,(0),null);
var curr_start = cljs.core.nth.call(null,vec__50043,(1),null);
var curr_last = cljs.core.nth.call(null,vec__50043,(2),null);
var curr = vec__50043;
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

com.rpl.specter.impl.TransientEndNavigator.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"com.rpl.specter.impl/TransientEndNavigator");
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
var and__21578__auto__ = combined.call(null,structure);
if(cljs.core.truth_(and__21578__auto__)){
return afn.call(null,structure);
} else {
return and__21578__auto__;
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
com.rpl.specter.impl.LayeredNav.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22260__auto__,k__22261__auto__){
var self__ = this;
var this__22260__auto____$1 = this;
return cljs.core._lookup.call(null,this__22260__auto____$1,k__22261__auto__,null);
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22262__auto__,k50047,else__22263__auto__){
var self__ = this;
var this__22262__auto____$1 = this;
var G__50049 = (((k50047 instanceof cljs.core.Keyword))?k50047.fqn:null);
switch (G__50049) {
case "underlying":
return self__.underlying;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k50047,else__22263__auto__);

}
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22274__auto__,writer__22275__auto__,opts__22276__auto__){
var self__ = this;
var this__22274__auto____$1 = this;
var pr_pair__22277__auto__ = ((function (this__22274__auto____$1){
return (function (keyval__22278__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22275__auto__,cljs.core.pr_writer,""," ","",opts__22276__auto__,keyval__22278__auto__);
});})(this__22274__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22275__auto__,pr_pair__22277__auto__,"#com.rpl.specter.impl.LayeredNav{",", ","}",opts__22276__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"underlying","underlying",-1492391849),self__.underlying],null))], null),self__.__extmap));
});


com.rpl.specter.impl.LayeredNav.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50046){
var self__ = this;
var G__50046__$1 = this;
return (new cljs.core.RecordIter((0),G__50046__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"underlying","underlying",-1492391849)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22258__auto__){
var self__ = this;
var this__22258__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22254__auto__){
var self__ = this;
var this__22254__auto____$1 = this;
return (new com.rpl.specter.impl.LayeredNav(self__.underlying,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22264__auto__){
var self__ = this;
var this__22264__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22255__auto__){
var self__ = this;
var this__22255__auto____$1 = this;
var h__22027__auto__ = self__.__hash;
if(!((h__22027__auto__ == null))){
return h__22027__auto__;
} else {
var h__22027__auto____$1 = cljs.core.hash_imap.call(null,this__22255__auto____$1);
self__.__hash = h__22027__auto____$1;

return h__22027__auto____$1;
}
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22256__auto__,other__22257__auto__){
var self__ = this;
var this__22256__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21578__auto__ = other__22257__auto__;
if(cljs.core.truth_(and__21578__auto__)){
var and__21578__auto____$1 = (this__22256__auto____$1.constructor === other__22257__auto__.constructor);
if(and__21578__auto____$1){
return cljs.core.equiv_map.call(null,this__22256__auto____$1,other__22257__auto__);
} else {
return and__21578__auto____$1;
}
} else {
return and__21578__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22269__auto__,k__22270__auto__){
var self__ = this;
var this__22269__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"underlying","underlying",-1492391849),null], null), null),k__22270__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22269__auto____$1),self__.__meta),k__22270__auto__);
} else {
return (new com.rpl.specter.impl.LayeredNav(self__.underlying,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22270__auto__)),null));
}
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22267__auto__,k__22268__auto__,G__50046){
var self__ = this;
var this__22267__auto____$1 = this;
var pred__50050 = cljs.core.keyword_identical_QMARK_;
var expr__50051 = k__22268__auto__;
if(cljs.core.truth_(pred__50050.call(null,new cljs.core.Keyword(null,"underlying","underlying",-1492391849),expr__50051))){
return (new com.rpl.specter.impl.LayeredNav(G__50046,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LayeredNav(self__.underlying,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22268__auto__,G__50046),null));
}
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22272__auto__){
var self__ = this;
var this__22272__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"underlying","underlying",-1492391849),self__.underlying],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22259__auto__,G__50046){
var self__ = this;
var this__22259__auto____$1 = this;
return (new com.rpl.specter.impl.LayeredNav(self__.underlying,G__50046,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LayeredNav.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22265__auto__,entry__22266__auto__){
var self__ = this;
var this__22265__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22266__auto__)){
return cljs.core._assoc.call(null,this__22265__auto____$1,cljs.core._nth.call(null,entry__22266__auto__,(0)),cljs.core._nth.call(null,entry__22266__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22265__auto____$1,entry__22266__auto__);
}
});

com.rpl.specter.impl.LayeredNav.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"underlying","underlying",148139678,null)], null);
});

com.rpl.specter.impl.LayeredNav.cljs$lang$type = true;

com.rpl.specter.impl.LayeredNav.cljs$lang$ctorPrSeq = (function (this__22296__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LayeredNav");
});

com.rpl.specter.impl.LayeredNav.cljs$lang$ctorPrWriter = (function (this__22296__auto__,writer__22297__auto__){
return cljs.core._write.call(null,writer__22297__auto__,"com.rpl.specter.impl/LayeredNav");
});

com.rpl.specter.impl.__GT_LayeredNav = (function com$rpl$specter$impl$__GT_LayeredNav(underlying){
return (new com.rpl.specter.impl.LayeredNav(underlying,null,null,null));
});

com.rpl.specter.impl.map__GT_LayeredNav = (function com$rpl$specter$impl$map__GT_LayeredNav(G__50048){
return (new com.rpl.specter.impl.LayeredNav(new cljs.core.Keyword(null,"underlying","underlying",-1492391849).cljs$core$IFn$_invoke$arity$1(G__50048),null,cljs.core.dissoc.call(null,G__50048,new cljs.core.Keyword(null,"underlying","underlying",-1492391849)),null));
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
var G__50054 = null;
var G__50054__1 = (function (a1){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1));
});
var G__50054__2 = (function (a1,a2){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1,a2));
});
var G__50054__3 = (function (a1,a2,a3){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1,a2,a3));
});
var G__50054__4 = (function (a1,a2,a3,a4){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1,a2,a3,a4));
});
var G__50054__5 = (function (a1,a2,a3,a4,a5){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1,a2,a3,a4,a5));
});
var G__50054__6 = (function (a1,a2,a3,a4,a5,a6){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1,a2,a3,a4,a5,a6));
});
var G__50054__7 = (function (a1,a2,a3,a4,a5,a6,a7){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1,a2,a3,a4,a5,a6,a7));
});
var G__50054__8 = (function (a1,a2,a3,a4,a5,a6,a7,a8){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1,a2,a3,a4,a5,a6,a7,a8));
});
var G__50054__9 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1,a2,a3,a4,a5,a6,a7,a8,a9));
});
var G__50054__10 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,anav.call(null,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10));
});
var G__50054__11 = (function() { 
var G__50055__delegate = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,args){
return com.rpl.specter.impl.__GT_LayeredNav.call(null,cljs.core.apply.call(null,anav,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,args));
};
var G__50055 = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var args = null;
if (arguments.length > 10) {
var G__50056__i = 0, G__50056__a = new Array(arguments.length -  10);
while (G__50056__i < G__50056__a.length) {G__50056__a[G__50056__i] = arguments[G__50056__i + 10]; ++G__50056__i;}
  args = new cljs.core.IndexedSeq(G__50056__a,0);
} 
return G__50055__delegate.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,args);};
G__50055.cljs$lang$maxFixedArity = 10;
G__50055.cljs$lang$applyTo = (function (arglist__50057){
var a1 = cljs.core.first(arglist__50057);
arglist__50057 = cljs.core.next(arglist__50057);
var a2 = cljs.core.first(arglist__50057);
arglist__50057 = cljs.core.next(arglist__50057);
var a3 = cljs.core.first(arglist__50057);
arglist__50057 = cljs.core.next(arglist__50057);
var a4 = cljs.core.first(arglist__50057);
arglist__50057 = cljs.core.next(arglist__50057);
var a5 = cljs.core.first(arglist__50057);
arglist__50057 = cljs.core.next(arglist__50057);
var a6 = cljs.core.first(arglist__50057);
arglist__50057 = cljs.core.next(arglist__50057);
var a7 = cljs.core.first(arglist__50057);
arglist__50057 = cljs.core.next(arglist__50057);
var a8 = cljs.core.first(arglist__50057);
arglist__50057 = cljs.core.next(arglist__50057);
var a9 = cljs.core.first(arglist__50057);
arglist__50057 = cljs.core.next(arglist__50057);
var a10 = cljs.core.first(arglist__50057);
var args = cljs.core.rest(arglist__50057);
return G__50055__delegate(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,args);
});
G__50055.cljs$core$IFn$_invoke$arity$variadic = G__50055__delegate;
return G__50055;
})()
;
G__50054 = function(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return G__50054__1.call(this,a1);
case 2:
return G__50054__2.call(this,a1,a2);
case 3:
return G__50054__3.call(this,a1,a2,a3);
case 4:
return G__50054__4.call(this,a1,a2,a3,a4);
case 5:
return G__50054__5.call(this,a1,a2,a3,a4,a5);
case 6:
return G__50054__6.call(this,a1,a2,a3,a4,a5,a6);
case 7:
return G__50054__7.call(this,a1,a2,a3,a4,a5,a6,a7);
case 8:
return G__50054__8.call(this,a1,a2,a3,a4,a5,a6,a7,a8);
case 9:
return G__50054__9.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9);
case 10:
return G__50054__10.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
default:
var G__50058 = null;
if (arguments.length > 10) {
var G__50059__i = 0, G__50059__a = new Array(arguments.length -  10);
while (G__50059__i < G__50059__a.length) {G__50059__a[G__50059__i] = arguments[G__50059__i + 10]; ++G__50059__i;}
G__50058 = new cljs.core.IndexedSeq(G__50059__a,0);
}
return G__50054__11.cljs$core$IFn$_invoke$arity$variadic(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10, G__50058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__50054.cljs$lang$maxFixedArity = 10;
G__50054.cljs$lang$applyTo = G__50054__11.cljs$lang$applyTo;
G__50054.cljs$core$IFn$_invoke$arity$1 = G__50054__1;
G__50054.cljs$core$IFn$_invoke$arity$2 = G__50054__2;
G__50054.cljs$core$IFn$_invoke$arity$3 = G__50054__3;
G__50054.cljs$core$IFn$_invoke$arity$4 = G__50054__4;
G__50054.cljs$core$IFn$_invoke$arity$5 = G__50054__5;
G__50054.cljs$core$IFn$_invoke$arity$6 = G__50054__6;
G__50054.cljs$core$IFn$_invoke$arity$7 = G__50054__7;
G__50054.cljs$core$IFn$_invoke$arity$8 = G__50054__8;
G__50054.cljs$core$IFn$_invoke$arity$9 = G__50054__9;
G__50054.cljs$core$IFn$_invoke$arity$10 = G__50054__10;
G__50054.cljs$core$IFn$_invoke$arity$variadic = G__50054__11.cljs$core$IFn$_invoke$arity$variadic;
return G__50054;
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
com.rpl.specter.impl.LocalSym.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22260__auto__,k__22261__auto__){
var self__ = this;
var this__22260__auto____$1 = this;
return cljs.core._lookup.call(null,this__22260__auto____$1,k__22261__auto__,null);
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22262__auto__,k50061,else__22263__auto__){
var self__ = this;
var this__22262__auto____$1 = this;
var G__50063 = (((k50061 instanceof cljs.core.Keyword))?k50061.fqn:null);
switch (G__50063) {
case "val":
return self__.val;

break;
case "sym":
return self__.sym;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k50061,else__22263__auto__);

}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22274__auto__,writer__22275__auto__,opts__22276__auto__){
var self__ = this;
var this__22274__auto____$1 = this;
var pr_pair__22277__auto__ = ((function (this__22274__auto____$1){
return (function (keyval__22278__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22275__auto__,cljs.core.pr_writer,""," ","",opts__22276__auto__,keyval__22278__auto__);
});})(this__22274__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22275__auto__,pr_pair__22277__auto__,"#com.rpl.specter.impl.LocalSym{",", ","}",opts__22276__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
});


com.rpl.specter.impl.LocalSym.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50060){
var self__ = this;
var G__50060__$1 = this;
return (new cljs.core.RecordIter((0),G__50060__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"sym","sym",-1444860305)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22258__auto__){
var self__ = this;
var this__22258__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22254__auto__){
var self__ = this;
var this__22254__auto____$1 = this;
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22264__auto__){
var self__ = this;
var this__22264__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22255__auto__){
var self__ = this;
var this__22255__auto____$1 = this;
var h__22027__auto__ = self__.__hash;
if(!((h__22027__auto__ == null))){
return h__22027__auto__;
} else {
var h__22027__auto____$1 = cljs.core.hash_imap.call(null,this__22255__auto____$1);
self__.__hash = h__22027__auto____$1;

return h__22027__auto____$1;
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22256__auto__,other__22257__auto__){
var self__ = this;
var this__22256__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21578__auto__ = other__22257__auto__;
if(cljs.core.truth_(and__21578__auto__)){
var and__21578__auto____$1 = (this__22256__auto____$1.constructor === other__22257__auto__.constructor);
if(and__21578__auto____$1){
return cljs.core.equiv_map.call(null,this__22256__auto____$1,other__22257__auto__);
} else {
return and__21578__auto____$1;
}
} else {
return and__21578__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22269__auto__,k__22270__auto__){
var self__ = this;
var this__22269__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"sym","sym",-1444860305),null], null), null),k__22270__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22269__auto____$1),self__.__meta),k__22270__auto__);
} else {
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22270__auto__)),null));
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22267__auto__,k__22268__auto__,G__50060){
var self__ = this;
var this__22267__auto____$1 = this;
var pred__50064 = cljs.core.keyword_identical_QMARK_;
var expr__50065 = k__22268__auto__;
if(cljs.core.truth_(pred__50064.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__50065))){
return (new com.rpl.specter.impl.LocalSym(G__50060,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50064.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__50065))){
return (new com.rpl.specter.impl.LocalSym(self__.val,G__50060,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22268__auto__,G__50060),null));
}
}
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22272__auto__){
var self__ = this;
var this__22272__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22259__auto__,G__50060){
var self__ = this;
var this__22259__auto____$1 = this;
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,G__50060,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22265__auto__,entry__22266__auto__){
var self__ = this;
var this__22265__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22266__auto__)){
return cljs.core._assoc.call(null,this__22265__auto____$1,cljs.core._nth.call(null,entry__22266__auto__,(0)),cljs.core._nth.call(null,entry__22266__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22265__auto____$1,entry__22266__auto__);
}
});

com.rpl.specter.impl.LocalSym.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"sym","sym",195671222,null)], null);
});

com.rpl.specter.impl.LocalSym.cljs$lang$type = true;

com.rpl.specter.impl.LocalSym.cljs$lang$ctorPrSeq = (function (this__22296__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/LocalSym");
});

com.rpl.specter.impl.LocalSym.cljs$lang$ctorPrWriter = (function (this__22296__auto__,writer__22297__auto__){
return cljs.core._write.call(null,writer__22297__auto__,"com.rpl.specter.impl/LocalSym");
});

com.rpl.specter.impl.__GT_LocalSym = (function com$rpl$specter$impl$__GT_LocalSym(val,sym){
return (new com.rpl.specter.impl.LocalSym(val,sym,null,null,null));
});

com.rpl.specter.impl.map__GT_LocalSym = (function com$rpl$specter$impl$map__GT_LocalSym(G__50062){
return (new com.rpl.specter.impl.LocalSym(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__50062),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(G__50062),null,cljs.core.dissoc.call(null,G__50062,new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"sym","sym",-1444860305)),null));
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
com.rpl.specter.impl.VarUse.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22260__auto__,k__22261__auto__){
var self__ = this;
var this__22260__auto____$1 = this;
return cljs.core._lookup.call(null,this__22260__auto____$1,k__22261__auto__,null);
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22262__auto__,k50069,else__22263__auto__){
var self__ = this;
var this__22262__auto____$1 = this;
var G__50071 = (((k50069 instanceof cljs.core.Keyword))?k50069.fqn:null);
switch (G__50071) {
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
return cljs.core.get.call(null,self__.__extmap,k50069,else__22263__auto__);

}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22274__auto__,writer__22275__auto__,opts__22276__auto__){
var self__ = this;
var this__22274__auto____$1 = this;
var pr_pair__22277__auto__ = ((function (this__22274__auto____$1){
return (function (keyval__22278__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22275__auto__,cljs.core.pr_writer,""," ","",opts__22276__auto__,keyval__22278__auto__);
});})(this__22274__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22275__auto__,pr_pair__22277__auto__,"#com.rpl.specter.impl.VarUse{",", ","}",opts__22276__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"var","var",-769682797),self__.var$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
});


com.rpl.specter.impl.VarUse.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.VarUse.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50068){
var self__ = this;
var G__50068__$1 = this;
return (new cljs.core.RecordIter((0),G__50068__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"sym","sym",-1444860305)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22258__auto__){
var self__ = this;
var this__22258__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22254__auto__){
var self__ = this;
var this__22254__auto____$1 = this;
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,self__.sym,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22264__auto__){
var self__ = this;
var this__22264__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22255__auto__){
var self__ = this;
var this__22255__auto____$1 = this;
var h__22027__auto__ = self__.__hash;
if(!((h__22027__auto__ == null))){
return h__22027__auto__;
} else {
var h__22027__auto____$1 = cljs.core.hash_imap.call(null,this__22255__auto____$1);
self__.__hash = h__22027__auto____$1;

return h__22027__auto____$1;
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22256__auto__,other__22257__auto__){
var self__ = this;
var this__22256__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21578__auto__ = other__22257__auto__;
if(cljs.core.truth_(and__21578__auto__)){
var and__21578__auto____$1 = (this__22256__auto____$1.constructor === other__22257__auto__.constructor);
if(and__21578__auto____$1){
return cljs.core.equiv_map.call(null,this__22256__auto____$1,other__22257__auto__);
} else {
return and__21578__auto____$1;
}
} else {
return and__21578__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22269__auto__,k__22270__auto__){
var self__ = this;
var this__22269__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"sym","sym",-1444860305),null,new cljs.core.Keyword(null,"var","var",-769682797),null], null), null),k__22270__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22269__auto____$1),self__.__meta),k__22270__auto__);
} else {
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,self__.sym,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22270__auto__)),null));
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22267__auto__,k__22268__auto__,G__50068){
var self__ = this;
var this__22267__auto____$1 = this;
var pred__50072 = cljs.core.keyword_identical_QMARK_;
var expr__50073 = k__22268__auto__;
if(cljs.core.truth_(pred__50072.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__50073))){
return (new com.rpl.specter.impl.VarUse(G__50068,self__.var$,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50072.call(null,new cljs.core.Keyword(null,"var","var",-769682797),expr__50073))){
return (new com.rpl.specter.impl.VarUse(self__.val,G__50068,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50072.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__50073))){
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,G__50068,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,self__.sym,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22268__auto__,G__50068),null));
}
}
}
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22272__auto__){
var self__ = this;
var this__22272__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"var","var",-769682797),self__.var$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22259__auto__,G__50068){
var self__ = this;
var this__22259__auto____$1 = this;
return (new com.rpl.specter.impl.VarUse(self__.val,self__.var$,self__.sym,G__50068,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.VarUse.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22265__auto__,entry__22266__auto__){
var self__ = this;
var this__22265__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22266__auto__)){
return cljs.core._assoc.call(null,this__22265__auto____$1,cljs.core._nth.call(null,entry__22266__auto__,(0)),cljs.core._nth.call(null,entry__22266__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22265__auto____$1,entry__22266__auto__);
}
});

com.rpl.specter.impl.VarUse.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"var","var",870848730,null),new cljs.core.Symbol(null,"sym","sym",195671222,null)], null);
});

com.rpl.specter.impl.VarUse.cljs$lang$type = true;

com.rpl.specter.impl.VarUse.cljs$lang$ctorPrSeq = (function (this__22296__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/VarUse");
});

com.rpl.specter.impl.VarUse.cljs$lang$ctorPrWriter = (function (this__22296__auto__,writer__22297__auto__){
return cljs.core._write.call(null,writer__22297__auto__,"com.rpl.specter.impl/VarUse");
});

com.rpl.specter.impl.__GT_VarUse = (function com$rpl$specter$impl$__GT_VarUse(val,var$,sym){
return (new com.rpl.specter.impl.VarUse(val,var$,sym,null,null,null));
});

com.rpl.specter.impl.map__GT_VarUse = (function com$rpl$specter$impl$map__GT_VarUse(G__50070){
return (new com.rpl.specter.impl.VarUse(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__50070),new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(G__50070),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(G__50070),null,cljs.core.dissoc.call(null,G__50070,new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"sym","sym",-1444860305)),null));
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
com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22260__auto__,k__22261__auto__){
var self__ = this;
var this__22260__auto____$1 = this;
return cljs.core._lookup.call(null,this__22260__auto____$1,k__22261__auto__,null);
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22262__auto__,k50077,else__22263__auto__){
var self__ = this;
var this__22262__auto____$1 = this;
var G__50079 = (((k50077 instanceof cljs.core.Keyword))?k50077.fqn:null);
switch (G__50079) {
case "val":
return self__.val;

break;
case "code":
return self__.code;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k50077,else__22263__auto__);

}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22274__auto__,writer__22275__auto__,opts__22276__auto__){
var self__ = this;
var this__22274__auto____$1 = this;
var pr_pair__22277__auto__ = ((function (this__22274__auto____$1){
return (function (keyval__22278__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22275__auto__,cljs.core.pr_writer,""," ","",opts__22276__auto__,keyval__22278__auto__);
});})(this__22274__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22275__auto__,pr_pair__22277__auto__,"#com.rpl.specter.impl.SpecialFormUse{",", ","}",opts__22276__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});


com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50076){
var self__ = this;
var G__50076__$1 = this;
return (new cljs.core.RecordIter((0),G__50076__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"code","code",1586293142)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22258__auto__){
var self__ = this;
var this__22258__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22254__auto__){
var self__ = this;
var this__22254__auto____$1 = this;
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22264__auto__){
var self__ = this;
var this__22264__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22255__auto__){
var self__ = this;
var this__22255__auto____$1 = this;
var h__22027__auto__ = self__.__hash;
if(!((h__22027__auto__ == null))){
return h__22027__auto__;
} else {
var h__22027__auto____$1 = cljs.core.hash_imap.call(null,this__22255__auto____$1);
self__.__hash = h__22027__auto____$1;

return h__22027__auto____$1;
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22256__auto__,other__22257__auto__){
var self__ = this;
var this__22256__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21578__auto__ = other__22257__auto__;
if(cljs.core.truth_(and__21578__auto__)){
var and__21578__auto____$1 = (this__22256__auto____$1.constructor === other__22257__auto__.constructor);
if(and__21578__auto____$1){
return cljs.core.equiv_map.call(null,this__22256__auto____$1,other__22257__auto__);
} else {
return and__21578__auto____$1;
}
} else {
return and__21578__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22269__auto__,k__22270__auto__){
var self__ = this;
var this__22269__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__22270__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22269__auto____$1),self__.__meta),k__22270__auto__);
} else {
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22270__auto__)),null));
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22267__auto__,k__22268__auto__,G__50076){
var self__ = this;
var this__22267__auto____$1 = this;
var pred__50080 = cljs.core.keyword_identical_QMARK_;
var expr__50081 = k__22268__auto__;
if(cljs.core.truth_(pred__50080.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__50081))){
return (new com.rpl.specter.impl.SpecialFormUse(G__50076,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50080.call(null,new cljs.core.Keyword(null,"code","code",1586293142),expr__50081))){
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,G__50076,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22268__auto__,G__50076),null));
}
}
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22272__auto__){
var self__ = this;
var this__22272__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22259__auto__,G__50076){
var self__ = this;
var this__22259__auto____$1 = this;
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,G__50076,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22265__auto__,entry__22266__auto__){
var self__ = this;
var this__22265__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22266__auto__)){
return cljs.core._assoc.call(null,this__22265__auto____$1,cljs.core._nth.call(null,entry__22266__auto__,(0)),cljs.core._nth.call(null,entry__22266__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22265__auto____$1,entry__22266__auto__);
}
});

com.rpl.specter.impl.SpecialFormUse.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
});

com.rpl.specter.impl.SpecialFormUse.cljs$lang$type = true;

com.rpl.specter.impl.SpecialFormUse.cljs$lang$ctorPrSeq = (function (this__22296__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/SpecialFormUse");
});

com.rpl.specter.impl.SpecialFormUse.cljs$lang$ctorPrWriter = (function (this__22296__auto__,writer__22297__auto__){
return cljs.core._write.call(null,writer__22297__auto__,"com.rpl.specter.impl/SpecialFormUse");
});

com.rpl.specter.impl.__GT_SpecialFormUse = (function com$rpl$specter$impl$__GT_SpecialFormUse(val,code){
return (new com.rpl.specter.impl.SpecialFormUse(val,code,null,null,null));
});

com.rpl.specter.impl.map__GT_SpecialFormUse = (function com$rpl$specter$impl$map__GT_SpecialFormUse(G__50078){
return (new com.rpl.specter.impl.SpecialFormUse(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__50078),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__50078),null,cljs.core.dissoc.call(null,G__50078,new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"code","code",1586293142)),null));
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
com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22260__auto__,k__22261__auto__){
var self__ = this;
var this__22260__auto____$1 = this;
return cljs.core._lookup.call(null,this__22260__auto____$1,k__22261__auto__,null);
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22262__auto__,k50085,else__22263__auto__){
var self__ = this;
var this__22262__auto____$1 = this;
var G__50087 = (((k50085 instanceof cljs.core.Keyword))?k50085.fqn:null);
switch (G__50087) {
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
return cljs.core.get.call(null,self__.__extmap,k50085,else__22263__auto__);

}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22274__auto__,writer__22275__auto__,opts__22276__auto__){
var self__ = this;
var this__22274__auto____$1 = this;
var pr_pair__22277__auto__ = ((function (this__22274__auto____$1){
return (function (keyval__22278__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22275__auto__,cljs.core.pr_writer,""," ","",opts__22276__auto__,keyval__22278__auto__);
});})(this__22274__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22275__auto__,pr_pair__22277__auto__,"#com.rpl.specter.impl.FnInvocation{",", ","}",opts__22276__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"op","op",-1882987955),self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});


com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50084){
var self__ = this;
var G__50084__$1 = this;
return (new cljs.core.RecordIter((0),G__50084__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22258__auto__){
var self__ = this;
var this__22258__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22254__auto__){
var self__ = this;
var this__22254__auto____$1 = this;
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22264__auto__){
var self__ = this;
var this__22264__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22255__auto__){
var self__ = this;
var this__22255__auto____$1 = this;
var h__22027__auto__ = self__.__hash;
if(!((h__22027__auto__ == null))){
return h__22027__auto__;
} else {
var h__22027__auto____$1 = cljs.core.hash_imap.call(null,this__22255__auto____$1);
self__.__hash = h__22027__auto____$1;

return h__22027__auto____$1;
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22256__auto__,other__22257__auto__){
var self__ = this;
var this__22256__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21578__auto__ = other__22257__auto__;
if(cljs.core.truth_(and__21578__auto__)){
var and__21578__auto____$1 = (this__22256__auto____$1.constructor === other__22257__auto__.constructor);
if(and__21578__auto____$1){
return cljs.core.equiv_map.call(null,this__22256__auto____$1,other__22257__auto__);
} else {
return and__21578__auto____$1;
}
} else {
return and__21578__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22269__auto__,k__22270__auto__){
var self__ = this;
var this__22269__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"op","op",-1882987955),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__22270__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22269__auto____$1),self__.__meta),k__22270__auto__);
} else {
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22270__auto__)),null));
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22267__auto__,k__22268__auto__,G__50084){
var self__ = this;
var this__22267__auto____$1 = this;
var pred__50088 = cljs.core.keyword_identical_QMARK_;
var expr__50089 = k__22268__auto__;
if(cljs.core.truth_(pred__50088.call(null,new cljs.core.Keyword(null,"op","op",-1882987955),expr__50089))){
return (new com.rpl.specter.impl.FnInvocation(G__50084,self__.params,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50088.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__50089))){
return (new com.rpl.specter.impl.FnInvocation(self__.op,G__50084,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50088.call(null,new cljs.core.Keyword(null,"code","code",1586293142),expr__50089))){
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,G__50084,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22268__auto__,G__50084),null));
}
}
}
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22272__auto__){
var self__ = this;
var this__22272__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"op","op",-1882987955),self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22259__auto__,G__50084){
var self__ = this;
var this__22259__auto____$1 = this;
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,G__50084,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22265__auto__,entry__22266__auto__){
var self__ = this;
var this__22265__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22266__auto__)){
return cljs.core._assoc.call(null,this__22265__auto____$1,cljs.core._nth.call(null,entry__22266__auto__,(0)),cljs.core._nth.call(null,entry__22266__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22265__auto____$1,entry__22266__auto__);
}
});

com.rpl.specter.impl.FnInvocation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"op","op",-242456428,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
});

com.rpl.specter.impl.FnInvocation.cljs$lang$type = true;

com.rpl.specter.impl.FnInvocation.cljs$lang$ctorPrSeq = (function (this__22296__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/FnInvocation");
});

com.rpl.specter.impl.FnInvocation.cljs$lang$ctorPrWriter = (function (this__22296__auto__,writer__22297__auto__){
return cljs.core._write.call(null,writer__22297__auto__,"com.rpl.specter.impl/FnInvocation");
});

com.rpl.specter.impl.__GT_FnInvocation = (function com$rpl$specter$impl$__GT_FnInvocation(op,params,code){
return (new com.rpl.specter.impl.FnInvocation(op,params,code,null,null,null));
});

com.rpl.specter.impl.map__GT_FnInvocation = (function com$rpl$specter$impl$map__GT_FnInvocation(G__50086){
return (new com.rpl.specter.impl.FnInvocation(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(G__50086),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__50086),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__50086),null,cljs.core.dissoc.call(null,G__50086,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)),null));
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
com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22260__auto__,k__22261__auto__){
var self__ = this;
var this__22260__auto____$1 = this;
return cljs.core._lookup.call(null,this__22260__auto____$1,k__22261__auto__,null);
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22262__auto__,k50093,else__22263__auto__){
var self__ = this;
var this__22262__auto____$1 = this;
var G__50095 = (((k50093 instanceof cljs.core.Keyword))?k50093.fqn:null);
switch (G__50095) {
case "precompiled":
return self__.precompiled;

break;
case "params-maker":
return self__.params_maker;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k50093,else__22263__auto__);

}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22274__auto__,writer__22275__auto__,opts__22276__auto__){
var self__ = this;
var this__22274__auto____$1 = this;
var pr_pair__22277__auto__ = ((function (this__22274__auto____$1){
return (function (keyval__22278__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22275__auto__,cljs.core.pr_writer,""," ","",opts__22276__auto__,keyval__22278__auto__);
});})(this__22274__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22275__auto__,pr_pair__22277__auto__,"#com.rpl.specter.impl.CachedPathInfo{",", ","}",opts__22276__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),self__.precompiled],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-maker","params-maker",539586643),self__.params_maker],null))], null),self__.__extmap));
});


com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50092){
var self__ = this;
var G__50092__$1 = this;
return (new cljs.core.RecordIter((0),G__50092__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),new cljs.core.Keyword(null,"params-maker","params-maker",539586643)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22258__auto__){
var self__ = this;
var this__22258__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22254__auto__){
var self__ = this;
var this__22254__auto____$1 = this;
return (new com.rpl.specter.impl.CachedPathInfo(self__.precompiled,self__.params_maker,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22264__auto__){
var self__ = this;
var this__22264__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22255__auto__){
var self__ = this;
var this__22255__auto____$1 = this;
var h__22027__auto__ = self__.__hash;
if(!((h__22027__auto__ == null))){
return h__22027__auto__;
} else {
var h__22027__auto____$1 = cljs.core.hash_imap.call(null,this__22255__auto____$1);
self__.__hash = h__22027__auto____$1;

return h__22027__auto____$1;
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22256__auto__,other__22257__auto__){
var self__ = this;
var this__22256__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21578__auto__ = other__22257__auto__;
if(cljs.core.truth_(and__21578__auto__)){
var and__21578__auto____$1 = (this__22256__auto____$1.constructor === other__22257__auto__.constructor);
if(and__21578__auto____$1){
return cljs.core.equiv_map.call(null,this__22256__auto____$1,other__22257__auto__);
} else {
return and__21578__auto____$1;
}
} else {
return and__21578__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22269__auto__,k__22270__auto__){
var self__ = this;
var this__22269__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params-maker","params-maker",539586643),null,new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),null], null), null),k__22270__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22269__auto____$1),self__.__meta),k__22270__auto__);
} else {
return (new com.rpl.specter.impl.CachedPathInfo(self__.precompiled,self__.params_maker,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22270__auto__)),null));
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22267__auto__,k__22268__auto__,G__50092){
var self__ = this;
var this__22267__auto____$1 = this;
var pred__50096 = cljs.core.keyword_identical_QMARK_;
var expr__50097 = k__22268__auto__;
if(cljs.core.truth_(pred__50096.call(null,new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),expr__50097))){
return (new com.rpl.specter.impl.CachedPathInfo(G__50092,self__.params_maker,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50096.call(null,new cljs.core.Keyword(null,"params-maker","params-maker",539586643),expr__50097))){
return (new com.rpl.specter.impl.CachedPathInfo(self__.precompiled,G__50092,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.CachedPathInfo(self__.precompiled,self__.params_maker,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22268__auto__,G__50092),null));
}
}
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22272__auto__){
var self__ = this;
var this__22272__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),self__.precompiled],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-maker","params-maker",539586643),self__.params_maker],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22259__auto__,G__50092){
var self__ = this;
var this__22259__auto____$1 = this;
return (new com.rpl.specter.impl.CachedPathInfo(self__.precompiled,self__.params_maker,G__50092,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22265__auto__,entry__22266__auto__){
var self__ = this;
var this__22265__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22266__auto__)){
return cljs.core._assoc.call(null,this__22265__auto____$1,cljs.core._nth.call(null,entry__22266__auto__,(0)),cljs.core._nth.call(null,entry__22266__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22265__auto____$1,entry__22266__auto__);
}
});

com.rpl.specter.impl.CachedPathInfo.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"precompiled","precompiled",-42622082,null),new cljs.core.Symbol(null,"params-maker","params-maker",-2114849126,null)], null);
});

com.rpl.specter.impl.CachedPathInfo.cljs$lang$type = true;

com.rpl.specter.impl.CachedPathInfo.cljs$lang$ctorPrSeq = (function (this__22296__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/CachedPathInfo");
});

com.rpl.specter.impl.CachedPathInfo.cljs$lang$ctorPrWriter = (function (this__22296__auto__,writer__22297__auto__){
return cljs.core._write.call(null,writer__22297__auto__,"com.rpl.specter.impl/CachedPathInfo");
});

com.rpl.specter.impl.__GT_CachedPathInfo = (function com$rpl$specter$impl$__GT_CachedPathInfo(precompiled,params_maker){
return (new com.rpl.specter.impl.CachedPathInfo(precompiled,params_maker,null,null,null));
});

com.rpl.specter.impl.map__GT_CachedPathInfo = (function com$rpl$specter$impl$map__GT_CachedPathInfo(G__50094){
return (new com.rpl.specter.impl.CachedPathInfo(new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609).cljs$core$IFn$_invoke$arity$1(G__50094),new cljs.core.Keyword(null,"params-maker","params-maker",539586643).cljs$core$IFn$_invoke$arity$1(G__50094),null,cljs.core.dissoc.call(null,G__50094,new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),new cljs.core.Keyword(null,"params-maker","params-maker",539586643)),null));
});

com.rpl.specter.impl.MUST_CACHE_PATHS = com.rpl.specter.impl.mutable_cell.call(null,false);
com.rpl.specter.impl.must_cache_paths_BANG_ = (function com$rpl$specter$impl$must_cache_paths_BANG_(var_args){
var args50100 = [];
var len__22773__auto___50103 = arguments.length;
var i__22774__auto___50104 = (0);
while(true){
if((i__22774__auto___50104 < len__22773__auto___50103)){
args50100.push((arguments[i__22774__auto___50104]));

var G__50105 = (i__22774__auto___50104 + (1));
i__22774__auto___50104 = G__50105;
continue;
} else {
}
break;
}

var G__50102 = args50100.length;
switch (G__50102) {
case 0:
return com.rpl.specter.impl.must_cache_paths_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.rpl.specter.impl.must_cache_paths_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50100.length)].join('')));

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
var or__21590__auto__ = com.rpl.specter.impl.structure_path_QMARK_.call(null,v);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
var or__21590__auto____$1 = ((!((v == null)))?(((false) || (v.com$rpl$specter$protocols$Collector$))?true:(((!v.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,com.rpl.specter.protocols.Collector,v):false)):cljs.core.native_satisfies_QMARK_.call(null,com.rpl.specter.protocols.Collector,v));
if(or__21590__auto____$1){
return or__21590__auto____$1;
} else {
return (v instanceof com.rpl.specter.impl.CompiledPath);
}
}
});
com.rpl.specter.impl.handle_params = (function com$rpl$specter$impl$handle_params(precompiled,params_maker,possible_params){
var params = com.rpl.specter.impl.fast_object_array.call(null,cljs.core.count.call(null,params_maker));
var n__22603__auto___50111 = cljs.core.count.call(null,params_maker);
var i_50112 = (0);
while(true){
if((i_50112 < n__22603__auto___50111)){
(params[i_50112] = cljs.core.get.call(null,possible_params,cljs.core.get.call(null,params_maker,i_50112)).call(null));

var G__50113 = (i_50112 + (1));
i_50112 = G__50113;
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
var or__21590__auto__ = cljs.core._EQ_.call(null,cljs.core.count.call(null,al),c);
if(or__21590__auto__){
return or__21590__auto__;
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
var G__50116__delegate = function (reason){
if(cljs.core.truth_(com.rpl.specter.impl.get_cell.call(null,com.rpl.specter.impl.MUST_CACHE_PATHS))){
cljs.core.println.call(null,"Failed to cache path:",cljs.core.apply.call(null,cljs.core.str,reason));
} else {
}

cljs.core.reset_BANG_.call(null,failed_atom,true);

return null;
};
var G__50116 = function (var_args){
var reason = null;
if (arguments.length > 0) {
var G__50117__i = 0, G__50117__a = new Array(arguments.length -  0);
while (G__50117__i < G__50117__a.length) {G__50117__a[G__50117__i] = arguments[G__50117__i + 0]; ++G__50117__i;}
  reason = new cljs.core.IndexedSeq(G__50117__a,0);
} 
return G__50116__delegate.call(this,reason);};
G__50116.cljs$lang$maxFixedArity = 0;
G__50116.cljs$lang$applyTo = (function (arglist__50118){
var reason = cljs.core.seq(arglist__50118);
return G__50116__delegate(reason);
});
G__50116.cljs$core$IFn$_invoke$arity$variadic = G__50116__delegate;
return G__50116;
})()
;
if(cljs.core.vector_QMARK_.call(null,p)){
return cljs.core.mapv.call(null,((function (magic_fail_BANG_){
return (function (p1__50114_SHARP_){
return com$rpl$specter$impl$magic_precompilation_STAR_.call(null,p1__50114_SHARP_,params_atom,failed_atom);
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
if(cljs.core.truth_((function (){var and__21578__auto__ = cljs.core.fn_QMARK_.call(null,vv);
if(and__21578__auto__){
return new cljs.core.Keyword(null,"pathedfn","pathedfn",1590980188).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v));
} else {
return and__21578__auto__;
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
return (function (p1__50115_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,p1__50115_SHARP_,ps));
});})(v,vv,op,ps,magic_fail_BANG_))
);

return vv;
} else {
if(cljs.core.truth_((function (){var and__21578__auto__ = cljs.core.fn_QMARK_.call(null,vv);
if(and__21578__auto__){
return new cljs.core.Keyword(null,"pathedfn","pathedfn",1590980188).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v));
} else {
return and__21578__auto__;
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
if(cljs.core.truth_((function (){var and__21578__auto__ = cljs.core.fn_QMARK_.call(null,vv);
if(and__21578__auto__){
return new cljs.core.Keyword(null,"layerednav","layerednav",891636982).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,vv));
} else {
return and__21578__auto__;
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
if(cljs.core.truth_((function (){var and__21578__auto__ = typeof p === 'string';
if(and__21578__auto__){
return com.rpl.specter.impl.valid_navigator_QMARK_.call(null,p);
} else {
return and__21578__auto__;
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
var args__22780__auto__ = [];
var len__22773__auto___50129 = arguments.length;
var i__22774__auto___50130 = (0);
while(true){
if((i__22774__auto___50130 < len__22773__auto___50129)){
args__22780__auto__.push((arguments[i__22774__auto___50130]));

var G__50131 = (i__22774__auto___50130 + (1));
i__22774__auto___50130 = G__50131;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((3) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22781__auto__);
});

com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__50123){
var map__50124 = p__50123;
var map__50124__$1 = ((((!((map__50124 == null)))?((((map__50124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50124):map__50124);
var merge_fn = cljs.core.get.call(null,map__50124__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var state = com.rpl.specter.impl.mutable_cell.call(null,null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.compiled_transform_STAR_.call(null,path,((function (state,map__50124,map__50124__$1,merge_fn){
return (function() { 
var G__50132__delegate = function (args){
var res = cljs.core.apply.call(null,transform_fn,args);
if(cljs.core.truth_(res)){
var vec__50126 = res;
var ret = cljs.core.nth.call(null,vec__50126,(0),null);
var user_ret = cljs.core.nth.call(null,vec__50126,(1),null);
com.rpl.specter.impl.set_cell_BANG_.call(null,state,merge_fn.call(null,com.rpl.specter.impl.get_cell.call(null,state),user_ret));

return ret;
} else {
return cljs.core.last.call(null,args);
}
};
var G__50132 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50133__i = 0, G__50133__a = new Array(arguments.length -  0);
while (G__50133__i < G__50133__a.length) {G__50133__a[G__50133__i] = arguments[G__50133__i + 0]; ++G__50133__i;}
  args = new cljs.core.IndexedSeq(G__50133__a,0);
} 
return G__50132__delegate.call(this,args);};
G__50132.cljs$lang$maxFixedArity = 0;
G__50132.cljs$lang$applyTo = (function (arglist__50134){
var args = cljs.core.seq(arglist__50134);
return G__50132__delegate(args);
});
G__50132.cljs$core$IFn$_invoke$arity$variadic = G__50132__delegate;
return G__50132;
})()
;})(state,map__50124,map__50124__$1,merge_fn))
,structure),com.rpl.specter.impl.get_cell.call(null,state)], null);
});

com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$lang$maxFixedArity = (3);

com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$lang$applyTo = (function (seq50119){
var G__50120 = cljs.core.first.call(null,seq50119);
var seq50119__$1 = cljs.core.next.call(null,seq50119);
var G__50121 = cljs.core.first.call(null,seq50119__$1);
var seq50119__$2 = cljs.core.next.call(null,seq50119__$1);
var G__50122 = cljs.core.first.call(null,seq50119__$2);
var seq50119__$3 = cljs.core.next.call(null,seq50119__$2);
return com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__50120,G__50121,G__50122,seq50119__$3);
});

com.rpl.specter.impl.multi_transform_error_fn = (function com$rpl$specter$impl$multi_transform_error_fn(var_args){
var args__22780__auto__ = [];
var len__22773__auto___50136 = arguments.length;
var i__22774__auto___50137 = (0);
while(true){
if((i__22774__auto___50137 < len__22773__auto___50136)){
args__22780__auto__.push((arguments[i__22774__auto___50137]));

var G__50138 = (i__22774__auto___50137 + (1));
i__22774__auto___50137 = G__50138;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.multi_transform_error_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});

com.rpl.specter.impl.multi_transform_error_fn.cljs$core$IFn$_invoke$arity$variadic = (function (nav){
return com.rpl.specter.impl.throw_illegal.call(null,"All navigation in multi-transform must end in 'terminal' ","navigators. Instead navigated to: ",nav);
});

com.rpl.specter.impl.multi_transform_error_fn.cljs$lang$maxFixedArity = (0);

com.rpl.specter.impl.multi_transform_error_fn.cljs$lang$applyTo = (function (seq50135){
return com.rpl.specter.impl.multi_transform_error_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50135));
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

//# sourceMappingURL=impl.js.map?rel=1471999063015