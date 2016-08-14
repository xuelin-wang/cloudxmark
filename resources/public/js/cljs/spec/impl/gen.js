// Compiled by ClojureScript 1.9.198 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39027 = arguments.length;
var i__22774__auto___39028 = (0);
while(true){
if((i__22774__auto___39028 < len__22773__auto___39027)){
args__22780__auto__.push((arguments[i__22774__auto___39028]));

var G__39029 = (i__22774__auto___39028 + (1));
i__22774__auto___39028 = G__39029;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq39026){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39026));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39031 = arguments.length;
var i__22774__auto___39032 = (0);
while(true){
if((i__22774__auto___39032 < len__22773__auto___39031)){
args__22780__auto__.push((arguments[i__22774__auto___39032]));

var G__39033 = (i__22774__auto___39032 + (1));
i__22774__auto___39032 = G__39033;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq39030){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39030));
});

var g_QMARK__39034 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_39035 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__39034){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__39034))
,null));
var mkg_39036 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__39034,g_39035){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__39034,g_39035))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__39034,g_39035,mkg_39036){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__39034).call(null,x);
});})(g_QMARK__39034,g_39035,mkg_39036))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__39034,g_39035,mkg_39036){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_39036).call(null,gfn);
});})(g_QMARK__39034,g_39035,mkg_39036))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__39034,g_39035,mkg_39036){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_39035).call(null,generator);
});})(g_QMARK__39034,g_39035,mkg_39036))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__38998__auto___39054 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__38998__auto___39054){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39055 = arguments.length;
var i__22774__auto___39056 = (0);
while(true){
if((i__22774__auto___39056 < len__22773__auto___39055)){
args__22780__auto__.push((arguments[i__22774__auto___39056]));

var G__39057 = (i__22774__auto___39056 + (1));
i__22774__auto___39056 = G__39057;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});})(g__38998__auto___39054))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38998__auto___39054){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38998__auto___39054),args);
});})(g__38998__auto___39054))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__38998__auto___39054){
return (function (seq39037){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39037));
});})(g__38998__auto___39054))
;


var g__38998__auto___39058 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__38998__auto___39058){
return (function cljs$spec$impl$gen$list(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39059 = arguments.length;
var i__22774__auto___39060 = (0);
while(true){
if((i__22774__auto___39060 < len__22773__auto___39059)){
args__22780__auto__.push((arguments[i__22774__auto___39060]));

var G__39061 = (i__22774__auto___39060 + (1));
i__22774__auto___39060 = G__39061;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});})(g__38998__auto___39058))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38998__auto___39058){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38998__auto___39058),args);
});})(g__38998__auto___39058))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__38998__auto___39058){
return (function (seq39038){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39038));
});})(g__38998__auto___39058))
;


var g__38998__auto___39062 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__38998__auto___39062){
return (function cljs$spec$impl$gen$map(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39063 = arguments.length;
var i__22774__auto___39064 = (0);
while(true){
if((i__22774__auto___39064 < len__22773__auto___39063)){
args__22780__auto__.push((arguments[i__22774__auto___39064]));

var G__39065 = (i__22774__auto___39064 + (1));
i__22774__auto___39064 = G__39065;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});})(g__38998__auto___39062))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38998__auto___39062){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38998__auto___39062),args);
});})(g__38998__auto___39062))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__38998__auto___39062){
return (function (seq39039){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39039));
});})(g__38998__auto___39062))
;


var g__38998__auto___39066 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__38998__auto___39066){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39067 = arguments.length;
var i__22774__auto___39068 = (0);
while(true){
if((i__22774__auto___39068 < len__22773__auto___39067)){
args__22780__auto__.push((arguments[i__22774__auto___39068]));

var G__39069 = (i__22774__auto___39068 + (1));
i__22774__auto___39068 = G__39069;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});})(g__38998__auto___39066))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38998__auto___39066){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38998__auto___39066),args);
});})(g__38998__auto___39066))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__38998__auto___39066){
return (function (seq39040){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39040));
});})(g__38998__auto___39066))
;


var g__38998__auto___39070 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__38998__auto___39070){
return (function cljs$spec$impl$gen$set(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39071 = arguments.length;
var i__22774__auto___39072 = (0);
while(true){
if((i__22774__auto___39072 < len__22773__auto___39071)){
args__22780__auto__.push((arguments[i__22774__auto___39072]));

var G__39073 = (i__22774__auto___39072 + (1));
i__22774__auto___39072 = G__39073;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});})(g__38998__auto___39070))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38998__auto___39070){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38998__auto___39070),args);
});})(g__38998__auto___39070))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__38998__auto___39070){
return (function (seq39041){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39041));
});})(g__38998__auto___39070))
;


var g__38998__auto___39074 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__38998__auto___39074){
return (function cljs$spec$impl$gen$vector(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39075 = arguments.length;
var i__22774__auto___39076 = (0);
while(true){
if((i__22774__auto___39076 < len__22773__auto___39075)){
args__22780__auto__.push((arguments[i__22774__auto___39076]));

var G__39077 = (i__22774__auto___39076 + (1));
i__22774__auto___39076 = G__39077;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});})(g__38998__auto___39074))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38998__auto___39074){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38998__auto___39074),args);
});})(g__38998__auto___39074))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__38998__auto___39074){
return (function (seq39042){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39042));
});})(g__38998__auto___39074))
;


var g__38998__auto___39078 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__38998__auto___39078){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39079 = arguments.length;
var i__22774__auto___39080 = (0);
while(true){
if((i__22774__auto___39080 < len__22773__auto___39079)){
args__22780__auto__.push((arguments[i__22774__auto___39080]));

var G__39081 = (i__22774__auto___39080 + (1));
i__22774__auto___39080 = G__39081;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});})(g__38998__auto___39078))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38998__auto___39078){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38998__auto___39078),args);
});})(g__38998__auto___39078))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__38998__auto___39078){
return (function (seq39043){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39043));
});})(g__38998__auto___39078))
;


var g__38998__auto___39082 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__38998__auto___39082){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39083 = arguments.length;
var i__22774__auto___39084 = (0);
while(true){
if((i__22774__auto___39084 < len__22773__auto___39083)){
args__22780__auto__.push((arguments[i__22774__auto___39084]));

var G__39085 = (i__22774__auto___39084 + (1));
i__22774__auto___39084 = G__39085;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});})(g__38998__auto___39082))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38998__auto___39082){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38998__auto___39082),args);
});})(g__38998__auto___39082))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__38998__auto___39082){
return (function (seq39044){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39044));
});})(g__38998__auto___39082))
;


var g__38998__auto___39086 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__38998__auto___39086){
return (function cljs$spec$impl$gen$elements(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39087 = arguments.length;
var i__22774__auto___39088 = (0);
while(true){
if((i__22774__auto___39088 < len__22773__auto___39087)){
args__22780__auto__.push((arguments[i__22774__auto___39088]));

var G__39089 = (i__22774__auto___39088 + (1));
i__22774__auto___39088 = G__39089;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});})(g__38998__auto___39086))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38998__auto___39086){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38998__auto___39086),args);
});})(g__38998__auto___39086))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__38998__auto___39086){
return (function (seq39045){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39045));
});})(g__38998__auto___39086))
;


var g__38998__auto___39090 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__38998__auto___39090){
return (function cljs$spec$impl$gen$bind(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39091 = arguments.length;
var i__22774__auto___39092 = (0);
while(true){
if((i__22774__auto___39092 < len__22773__auto___39091)){
args__22780__auto__.push((arguments[i__22774__auto___39092]));

var G__39093 = (i__22774__auto___39092 + (1));
i__22774__auto___39092 = G__39093;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});})(g__38998__auto___39090))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38998__auto___39090){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38998__auto___39090),args);
});})(g__38998__auto___39090))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__38998__auto___39090){
return (function (seq39046){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39046));
});})(g__38998__auto___39090))
;


var g__38998__auto___39094 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__38998__auto___39094){
return (function cljs$spec$impl$gen$choose(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39095 = arguments.length;
var i__22774__auto___39096 = (0);
while(true){
if((i__22774__auto___39096 < len__22773__auto___39095)){
args__22780__auto__.push((arguments[i__22774__auto___39096]));

var G__39097 = (i__22774__auto___39096 + (1));
i__22774__auto___39096 = G__39097;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});})(g__38998__auto___39094))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38998__auto___39094){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38998__auto___39094),args);
});})(g__38998__auto___39094))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__38998__auto___39094){
return (function (seq39047){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39047));
});})(g__38998__auto___39094))
;


var g__38998__auto___39098 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__38998__auto___39098){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39099 = arguments.length;
var i__22774__auto___39100 = (0);
while(true){
if((i__22774__auto___39100 < len__22773__auto___39099)){
args__22780__auto__.push((arguments[i__22774__auto___39100]));

var G__39101 = (i__22774__auto___39100 + (1));
i__22774__auto___39100 = G__39101;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});})(g__38998__auto___39098))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38998__auto___39098){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38998__auto___39098),args);
});})(g__38998__auto___39098))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__38998__auto___39098){
return (function (seq39048){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39048));
});})(g__38998__auto___39098))
;


var g__38998__auto___39102 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__38998__auto___39102){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39103 = arguments.length;
var i__22774__auto___39104 = (0);
while(true){
if((i__22774__auto___39104 < len__22773__auto___39103)){
args__22780__auto__.push((arguments[i__22774__auto___39104]));

var G__39105 = (i__22774__auto___39104 + (1));
i__22774__auto___39104 = G__39105;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});})(g__38998__auto___39102))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38998__auto___39102){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38998__auto___39102),args);
});})(g__38998__auto___39102))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__38998__auto___39102){
return (function (seq39049){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39049));
});})(g__38998__auto___39102))
;


var g__38998__auto___39106 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__38998__auto___39106){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39107 = arguments.length;
var i__22774__auto___39108 = (0);
while(true){
if((i__22774__auto___39108 < len__22773__auto___39107)){
args__22780__auto__.push((arguments[i__22774__auto___39108]));

var G__39109 = (i__22774__auto___39108 + (1));
i__22774__auto___39108 = G__39109;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});})(g__38998__auto___39106))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38998__auto___39106){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38998__auto___39106),args);
});})(g__38998__auto___39106))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__38998__auto___39106){
return (function (seq39050){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39050));
});})(g__38998__auto___39106))
;


var g__38998__auto___39110 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__38998__auto___39110){
return (function cljs$spec$impl$gen$sample(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39111 = arguments.length;
var i__22774__auto___39112 = (0);
while(true){
if((i__22774__auto___39112 < len__22773__auto___39111)){
args__22780__auto__.push((arguments[i__22774__auto___39112]));

var G__39113 = (i__22774__auto___39112 + (1));
i__22774__auto___39112 = G__39113;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});})(g__38998__auto___39110))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38998__auto___39110){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38998__auto___39110),args);
});})(g__38998__auto___39110))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__38998__auto___39110){
return (function (seq39051){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39051));
});})(g__38998__auto___39110))
;


var g__38998__auto___39114 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__38998__auto___39114){
return (function cljs$spec$impl$gen$return(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39115 = arguments.length;
var i__22774__auto___39116 = (0);
while(true){
if((i__22774__auto___39116 < len__22773__auto___39115)){
args__22780__auto__.push((arguments[i__22774__auto___39116]));

var G__39117 = (i__22774__auto___39116 + (1));
i__22774__auto___39116 = G__39117;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});})(g__38998__auto___39114))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38998__auto___39114){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38998__auto___39114),args);
});})(g__38998__auto___39114))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__38998__auto___39114){
return (function (seq39052){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39052));
});})(g__38998__auto___39114))
;


var g__38998__auto___39118 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__38998__auto___39118){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39119 = arguments.length;
var i__22774__auto___39120 = (0);
while(true){
if((i__22774__auto___39120 < len__22773__auto___39119)){
args__22780__auto__.push((arguments[i__22774__auto___39120]));

var G__39121 = (i__22774__auto___39120 + (1));
i__22774__auto___39120 = G__39121;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});})(g__38998__auto___39118))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38998__auto___39118){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38998__auto___39118),args);
});})(g__38998__auto___39118))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__38998__auto___39118){
return (function (seq39053){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39053));
});})(g__38998__auto___39118))
;

var g__39011__auto___39143 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__39011__auto___39143){
return (function cljs$spec$impl$gen$any(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39144 = arguments.length;
var i__22774__auto___39145 = (0);
while(true){
if((i__22774__auto___39145 < len__22773__auto___39144)){
args__22780__auto__.push((arguments[i__22774__auto___39145]));

var G__39146 = (i__22774__auto___39145 + (1));
i__22774__auto___39145 = G__39146;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});})(g__39011__auto___39143))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39011__auto___39143){
return (function (args){
return cljs.core.deref.call(null,g__39011__auto___39143);
});})(g__39011__auto___39143))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__39011__auto___39143){
return (function (seq39122){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39122));
});})(g__39011__auto___39143))
;


var g__39011__auto___39147 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__39011__auto___39147){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39148 = arguments.length;
var i__22774__auto___39149 = (0);
while(true){
if((i__22774__auto___39149 < len__22773__auto___39148)){
args__22780__auto__.push((arguments[i__22774__auto___39149]));

var G__39150 = (i__22774__auto___39149 + (1));
i__22774__auto___39149 = G__39150;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});})(g__39011__auto___39147))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39011__auto___39147){
return (function (args){
return cljs.core.deref.call(null,g__39011__auto___39147);
});})(g__39011__auto___39147))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__39011__auto___39147){
return (function (seq39123){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39123));
});})(g__39011__auto___39147))
;


var g__39011__auto___39151 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__39011__auto___39151){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39152 = arguments.length;
var i__22774__auto___39153 = (0);
while(true){
if((i__22774__auto___39153 < len__22773__auto___39152)){
args__22780__auto__.push((arguments[i__22774__auto___39153]));

var G__39154 = (i__22774__auto___39153 + (1));
i__22774__auto___39153 = G__39154;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});})(g__39011__auto___39151))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39011__auto___39151){
return (function (args){
return cljs.core.deref.call(null,g__39011__auto___39151);
});})(g__39011__auto___39151))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__39011__auto___39151){
return (function (seq39124){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39124));
});})(g__39011__auto___39151))
;


var g__39011__auto___39155 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__39011__auto___39155){
return (function cljs$spec$impl$gen$char(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39156 = arguments.length;
var i__22774__auto___39157 = (0);
while(true){
if((i__22774__auto___39157 < len__22773__auto___39156)){
args__22780__auto__.push((arguments[i__22774__auto___39157]));

var G__39158 = (i__22774__auto___39157 + (1));
i__22774__auto___39157 = G__39158;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});})(g__39011__auto___39155))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39011__auto___39155){
return (function (args){
return cljs.core.deref.call(null,g__39011__auto___39155);
});})(g__39011__auto___39155))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__39011__auto___39155){
return (function (seq39125){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39125));
});})(g__39011__auto___39155))
;


var g__39011__auto___39159 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__39011__auto___39159){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39160 = arguments.length;
var i__22774__auto___39161 = (0);
while(true){
if((i__22774__auto___39161 < len__22773__auto___39160)){
args__22780__auto__.push((arguments[i__22774__auto___39161]));

var G__39162 = (i__22774__auto___39161 + (1));
i__22774__auto___39161 = G__39162;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});})(g__39011__auto___39159))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39011__auto___39159){
return (function (args){
return cljs.core.deref.call(null,g__39011__auto___39159);
});})(g__39011__auto___39159))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__39011__auto___39159){
return (function (seq39126){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39126));
});})(g__39011__auto___39159))
;


var g__39011__auto___39163 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__39011__auto___39163){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39164 = arguments.length;
var i__22774__auto___39165 = (0);
while(true){
if((i__22774__auto___39165 < len__22773__auto___39164)){
args__22780__auto__.push((arguments[i__22774__auto___39165]));

var G__39166 = (i__22774__auto___39165 + (1));
i__22774__auto___39165 = G__39166;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});})(g__39011__auto___39163))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39011__auto___39163){
return (function (args){
return cljs.core.deref.call(null,g__39011__auto___39163);
});})(g__39011__auto___39163))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__39011__auto___39163){
return (function (seq39127){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39127));
});})(g__39011__auto___39163))
;


var g__39011__auto___39167 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__39011__auto___39167){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39168 = arguments.length;
var i__22774__auto___39169 = (0);
while(true){
if((i__22774__auto___39169 < len__22773__auto___39168)){
args__22780__auto__.push((arguments[i__22774__auto___39169]));

var G__39170 = (i__22774__auto___39169 + (1));
i__22774__auto___39169 = G__39170;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});})(g__39011__auto___39167))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39011__auto___39167){
return (function (args){
return cljs.core.deref.call(null,g__39011__auto___39167);
});})(g__39011__auto___39167))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__39011__auto___39167){
return (function (seq39128){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39128));
});})(g__39011__auto___39167))
;


var g__39011__auto___39171 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__39011__auto___39171){
return (function cljs$spec$impl$gen$double(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39172 = arguments.length;
var i__22774__auto___39173 = (0);
while(true){
if((i__22774__auto___39173 < len__22773__auto___39172)){
args__22780__auto__.push((arguments[i__22774__auto___39173]));

var G__39174 = (i__22774__auto___39173 + (1));
i__22774__auto___39173 = G__39174;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});})(g__39011__auto___39171))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39011__auto___39171){
return (function (args){
return cljs.core.deref.call(null,g__39011__auto___39171);
});})(g__39011__auto___39171))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__39011__auto___39171){
return (function (seq39129){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39129));
});})(g__39011__auto___39171))
;


var g__39011__auto___39175 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__39011__auto___39175){
return (function cljs$spec$impl$gen$int(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39176 = arguments.length;
var i__22774__auto___39177 = (0);
while(true){
if((i__22774__auto___39177 < len__22773__auto___39176)){
args__22780__auto__.push((arguments[i__22774__auto___39177]));

var G__39178 = (i__22774__auto___39177 + (1));
i__22774__auto___39177 = G__39178;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});})(g__39011__auto___39175))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39011__auto___39175){
return (function (args){
return cljs.core.deref.call(null,g__39011__auto___39175);
});})(g__39011__auto___39175))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__39011__auto___39175){
return (function (seq39130){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39130));
});})(g__39011__auto___39175))
;


var g__39011__auto___39179 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__39011__auto___39179){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39180 = arguments.length;
var i__22774__auto___39181 = (0);
while(true){
if((i__22774__auto___39181 < len__22773__auto___39180)){
args__22780__auto__.push((arguments[i__22774__auto___39181]));

var G__39182 = (i__22774__auto___39181 + (1));
i__22774__auto___39181 = G__39182;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});})(g__39011__auto___39179))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39011__auto___39179){
return (function (args){
return cljs.core.deref.call(null,g__39011__auto___39179);
});})(g__39011__auto___39179))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__39011__auto___39179){
return (function (seq39131){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39131));
});})(g__39011__auto___39179))
;


var g__39011__auto___39183 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__39011__auto___39183){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39184 = arguments.length;
var i__22774__auto___39185 = (0);
while(true){
if((i__22774__auto___39185 < len__22773__auto___39184)){
args__22780__auto__.push((arguments[i__22774__auto___39185]));

var G__39186 = (i__22774__auto___39185 + (1));
i__22774__auto___39185 = G__39186;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});})(g__39011__auto___39183))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39011__auto___39183){
return (function (args){
return cljs.core.deref.call(null,g__39011__auto___39183);
});})(g__39011__auto___39183))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__39011__auto___39183){
return (function (seq39132){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39132));
});})(g__39011__auto___39183))
;


var g__39011__auto___39187 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__39011__auto___39187){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39188 = arguments.length;
var i__22774__auto___39189 = (0);
while(true){
if((i__22774__auto___39189 < len__22773__auto___39188)){
args__22780__auto__.push((arguments[i__22774__auto___39189]));

var G__39190 = (i__22774__auto___39189 + (1));
i__22774__auto___39189 = G__39190;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});})(g__39011__auto___39187))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39011__auto___39187){
return (function (args){
return cljs.core.deref.call(null,g__39011__auto___39187);
});})(g__39011__auto___39187))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__39011__auto___39187){
return (function (seq39133){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39133));
});})(g__39011__auto___39187))
;


var g__39011__auto___39191 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__39011__auto___39191){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39192 = arguments.length;
var i__22774__auto___39193 = (0);
while(true){
if((i__22774__auto___39193 < len__22773__auto___39192)){
args__22780__auto__.push((arguments[i__22774__auto___39193]));

var G__39194 = (i__22774__auto___39193 + (1));
i__22774__auto___39193 = G__39194;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});})(g__39011__auto___39191))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39011__auto___39191){
return (function (args){
return cljs.core.deref.call(null,g__39011__auto___39191);
});})(g__39011__auto___39191))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__39011__auto___39191){
return (function (seq39134){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39134));
});})(g__39011__auto___39191))
;


var g__39011__auto___39195 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__39011__auto___39195){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39196 = arguments.length;
var i__22774__auto___39197 = (0);
while(true){
if((i__22774__auto___39197 < len__22773__auto___39196)){
args__22780__auto__.push((arguments[i__22774__auto___39197]));

var G__39198 = (i__22774__auto___39197 + (1));
i__22774__auto___39197 = G__39198;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});})(g__39011__auto___39195))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39011__auto___39195){
return (function (args){
return cljs.core.deref.call(null,g__39011__auto___39195);
});})(g__39011__auto___39195))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__39011__auto___39195){
return (function (seq39135){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39135));
});})(g__39011__auto___39195))
;


var g__39011__auto___39199 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__39011__auto___39199){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39200 = arguments.length;
var i__22774__auto___39201 = (0);
while(true){
if((i__22774__auto___39201 < len__22773__auto___39200)){
args__22780__auto__.push((arguments[i__22774__auto___39201]));

var G__39202 = (i__22774__auto___39201 + (1));
i__22774__auto___39201 = G__39202;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});})(g__39011__auto___39199))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39011__auto___39199){
return (function (args){
return cljs.core.deref.call(null,g__39011__auto___39199);
});})(g__39011__auto___39199))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__39011__auto___39199){
return (function (seq39136){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39136));
});})(g__39011__auto___39199))
;


var g__39011__auto___39203 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__39011__auto___39203){
return (function cljs$spec$impl$gen$string(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39204 = arguments.length;
var i__22774__auto___39205 = (0);
while(true){
if((i__22774__auto___39205 < len__22773__auto___39204)){
args__22780__auto__.push((arguments[i__22774__auto___39205]));

var G__39206 = (i__22774__auto___39205 + (1));
i__22774__auto___39205 = G__39206;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});})(g__39011__auto___39203))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39011__auto___39203){
return (function (args){
return cljs.core.deref.call(null,g__39011__auto___39203);
});})(g__39011__auto___39203))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__39011__auto___39203){
return (function (seq39137){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39137));
});})(g__39011__auto___39203))
;


var g__39011__auto___39207 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__39011__auto___39207){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39208 = arguments.length;
var i__22774__auto___39209 = (0);
while(true){
if((i__22774__auto___39209 < len__22773__auto___39208)){
args__22780__auto__.push((arguments[i__22774__auto___39209]));

var G__39210 = (i__22774__auto___39209 + (1));
i__22774__auto___39209 = G__39210;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});})(g__39011__auto___39207))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39011__auto___39207){
return (function (args){
return cljs.core.deref.call(null,g__39011__auto___39207);
});})(g__39011__auto___39207))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__39011__auto___39207){
return (function (seq39138){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39138));
});})(g__39011__auto___39207))
;


var g__39011__auto___39211 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__39011__auto___39211){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39212 = arguments.length;
var i__22774__auto___39213 = (0);
while(true){
if((i__22774__auto___39213 < len__22773__auto___39212)){
args__22780__auto__.push((arguments[i__22774__auto___39213]));

var G__39214 = (i__22774__auto___39213 + (1));
i__22774__auto___39213 = G__39214;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});})(g__39011__auto___39211))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39011__auto___39211){
return (function (args){
return cljs.core.deref.call(null,g__39011__auto___39211);
});})(g__39011__auto___39211))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__39011__auto___39211){
return (function (seq39139){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39139));
});})(g__39011__auto___39211))
;


var g__39011__auto___39215 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__39011__auto___39215){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39216 = arguments.length;
var i__22774__auto___39217 = (0);
while(true){
if((i__22774__auto___39217 < len__22773__auto___39216)){
args__22780__auto__.push((arguments[i__22774__auto___39217]));

var G__39218 = (i__22774__auto___39217 + (1));
i__22774__auto___39217 = G__39218;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});})(g__39011__auto___39215))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39011__auto___39215){
return (function (args){
return cljs.core.deref.call(null,g__39011__auto___39215);
});})(g__39011__auto___39215))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__39011__auto___39215){
return (function (seq39140){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39140));
});})(g__39011__auto___39215))
;


var g__39011__auto___39219 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__39011__auto___39219){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39220 = arguments.length;
var i__22774__auto___39221 = (0);
while(true){
if((i__22774__auto___39221 < len__22773__auto___39220)){
args__22780__auto__.push((arguments[i__22774__auto___39221]));

var G__39222 = (i__22774__auto___39221 + (1));
i__22774__auto___39221 = G__39222;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});})(g__39011__auto___39219))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39011__auto___39219){
return (function (args){
return cljs.core.deref.call(null,g__39011__auto___39219);
});})(g__39011__auto___39219))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__39011__auto___39219){
return (function (seq39141){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39141));
});})(g__39011__auto___39219))
;


var g__39011__auto___39223 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__39011__auto___39223){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39224 = arguments.length;
var i__22774__auto___39225 = (0);
while(true){
if((i__22774__auto___39225 < len__22773__auto___39224)){
args__22780__auto__.push((arguments[i__22774__auto___39225]));

var G__39226 = (i__22774__auto___39225 + (1));
i__22774__auto___39225 = G__39226;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});})(g__39011__auto___39223))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39011__auto___39223){
return (function (args){
return cljs.core.deref.call(null,g__39011__auto___39223);
});})(g__39011__auto___39223))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__39011__auto___39223){
return (function (seq39142){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39142));
});})(g__39011__auto___39223))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__22780__auto__ = [];
var len__22773__auto___39229 = arguments.length;
var i__22774__auto___39230 = (0);
while(true){
if((i__22774__auto___39230 < len__22773__auto___39229)){
args__22780__auto__.push((arguments[i__22774__auto___39230]));

var G__39231 = (i__22774__auto___39230 + (1));
i__22774__auto___39230 = G__39231;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__39227_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__39227_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq39228){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39228));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__39232_SHARP_){
return (new Date(p1__39232_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1471181959501