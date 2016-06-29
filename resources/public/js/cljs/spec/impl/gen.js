// Compiled by ClojureScript 1.9.89 {}
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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__22086__auto__,writer__22087__auto__,opt__22088__auto__){
return cljs.core._write.call(null,writer__22087__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__22624__auto__ = [];
var len__22617__auto___32800 = arguments.length;
var i__22618__auto___32801 = (0);
while(true){
if((i__22618__auto___32801 < len__22617__auto___32800)){
args__22624__auto__.push((arguments[i__22618__auto___32801]));

var G__32802 = (i__22618__auto___32801 + (1));
i__22618__auto___32801 = G__32802;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq32799){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32799));
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
var args__22624__auto__ = [];
var len__22617__auto___32804 = arguments.length;
var i__22618__auto___32805 = (0);
while(true){
if((i__22618__auto___32805 < len__22617__auto___32804)){
args__22624__auto__.push((arguments[i__22618__auto___32805]));

var G__32806 = (i__22618__auto___32805 + (1));
i__22618__auto___32805 = G__32806;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq32803){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32803));
});

var g_QMARK__32807 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_32808 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__32807){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__32807))
,null));
var mkg_32809 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__32807,g_32808){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__32807,g_32808))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__32807,g_32808,mkg_32809){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__32807).call(null,x);
});})(g_QMARK__32807,g_32808,mkg_32809))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__32807,g_32808,mkg_32809){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_32809).call(null,gfn);
});})(g_QMARK__32807,g_32808,mkg_32809))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__32807,g_32808,mkg_32809){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_32808).call(null,generator);
});})(g_QMARK__32807,g_32808,mkg_32809))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__32771__auto___32827 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__32771__auto___32827){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__22624__auto__ = [];
var len__22617__auto___32828 = arguments.length;
var i__22618__auto___32829 = (0);
while(true){
if((i__22618__auto___32829 < len__22617__auto___32828)){
args__22624__auto__.push((arguments[i__22618__auto___32829]));

var G__32830 = (i__22618__auto___32829 + (1));
i__22618__auto___32829 = G__32830;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__32771__auto___32827))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32771__auto___32827){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32771__auto___32827),args);
});})(g__32771__auto___32827))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__32771__auto___32827){
return (function (seq32810){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32810));
});})(g__32771__auto___32827))
;


var g__32771__auto___32831 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__32771__auto___32831){
return (function cljs$spec$impl$gen$list(var_args){
var args__22624__auto__ = [];
var len__22617__auto___32832 = arguments.length;
var i__22618__auto___32833 = (0);
while(true){
if((i__22618__auto___32833 < len__22617__auto___32832)){
args__22624__auto__.push((arguments[i__22618__auto___32833]));

var G__32834 = (i__22618__auto___32833 + (1));
i__22618__auto___32833 = G__32834;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__32771__auto___32831))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32771__auto___32831){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32771__auto___32831),args);
});})(g__32771__auto___32831))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__32771__auto___32831){
return (function (seq32811){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32811));
});})(g__32771__auto___32831))
;


var g__32771__auto___32835 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__32771__auto___32835){
return (function cljs$spec$impl$gen$map(var_args){
var args__22624__auto__ = [];
var len__22617__auto___32836 = arguments.length;
var i__22618__auto___32837 = (0);
while(true){
if((i__22618__auto___32837 < len__22617__auto___32836)){
args__22624__auto__.push((arguments[i__22618__auto___32837]));

var G__32838 = (i__22618__auto___32837 + (1));
i__22618__auto___32837 = G__32838;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__32771__auto___32835))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32771__auto___32835){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32771__auto___32835),args);
});})(g__32771__auto___32835))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__32771__auto___32835){
return (function (seq32812){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32812));
});})(g__32771__auto___32835))
;


var g__32771__auto___32839 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__32771__auto___32839){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__22624__auto__ = [];
var len__22617__auto___32840 = arguments.length;
var i__22618__auto___32841 = (0);
while(true){
if((i__22618__auto___32841 < len__22617__auto___32840)){
args__22624__auto__.push((arguments[i__22618__auto___32841]));

var G__32842 = (i__22618__auto___32841 + (1));
i__22618__auto___32841 = G__32842;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__32771__auto___32839))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32771__auto___32839){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32771__auto___32839),args);
});})(g__32771__auto___32839))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__32771__auto___32839){
return (function (seq32813){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32813));
});})(g__32771__auto___32839))
;


var g__32771__auto___32843 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__32771__auto___32843){
return (function cljs$spec$impl$gen$set(var_args){
var args__22624__auto__ = [];
var len__22617__auto___32844 = arguments.length;
var i__22618__auto___32845 = (0);
while(true){
if((i__22618__auto___32845 < len__22617__auto___32844)){
args__22624__auto__.push((arguments[i__22618__auto___32845]));

var G__32846 = (i__22618__auto___32845 + (1));
i__22618__auto___32845 = G__32846;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__32771__auto___32843))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32771__auto___32843){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32771__auto___32843),args);
});})(g__32771__auto___32843))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__32771__auto___32843){
return (function (seq32814){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32814));
});})(g__32771__auto___32843))
;


var g__32771__auto___32847 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__32771__auto___32847){
return (function cljs$spec$impl$gen$vector(var_args){
var args__22624__auto__ = [];
var len__22617__auto___32848 = arguments.length;
var i__22618__auto___32849 = (0);
while(true){
if((i__22618__auto___32849 < len__22617__auto___32848)){
args__22624__auto__.push((arguments[i__22618__auto___32849]));

var G__32850 = (i__22618__auto___32849 + (1));
i__22618__auto___32849 = G__32850;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__32771__auto___32847))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32771__auto___32847){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32771__auto___32847),args);
});})(g__32771__auto___32847))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__32771__auto___32847){
return (function (seq32815){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32815));
});})(g__32771__auto___32847))
;


var g__32771__auto___32851 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__32771__auto___32851){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__22624__auto__ = [];
var len__22617__auto___32852 = arguments.length;
var i__22618__auto___32853 = (0);
while(true){
if((i__22618__auto___32853 < len__22617__auto___32852)){
args__22624__auto__.push((arguments[i__22618__auto___32853]));

var G__32854 = (i__22618__auto___32853 + (1));
i__22618__auto___32853 = G__32854;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__32771__auto___32851))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32771__auto___32851){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32771__auto___32851),args);
});})(g__32771__auto___32851))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__32771__auto___32851){
return (function (seq32816){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32816));
});})(g__32771__auto___32851))
;


var g__32771__auto___32855 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__32771__auto___32855){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__22624__auto__ = [];
var len__22617__auto___32856 = arguments.length;
var i__22618__auto___32857 = (0);
while(true){
if((i__22618__auto___32857 < len__22617__auto___32856)){
args__22624__auto__.push((arguments[i__22618__auto___32857]));

var G__32858 = (i__22618__auto___32857 + (1));
i__22618__auto___32857 = G__32858;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__32771__auto___32855))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32771__auto___32855){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32771__auto___32855),args);
});})(g__32771__auto___32855))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__32771__auto___32855){
return (function (seq32817){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32817));
});})(g__32771__auto___32855))
;


var g__32771__auto___32859 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__32771__auto___32859){
return (function cljs$spec$impl$gen$elements(var_args){
var args__22624__auto__ = [];
var len__22617__auto___32860 = arguments.length;
var i__22618__auto___32861 = (0);
while(true){
if((i__22618__auto___32861 < len__22617__auto___32860)){
args__22624__auto__.push((arguments[i__22618__auto___32861]));

var G__32862 = (i__22618__auto___32861 + (1));
i__22618__auto___32861 = G__32862;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__32771__auto___32859))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32771__auto___32859){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32771__auto___32859),args);
});})(g__32771__auto___32859))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__32771__auto___32859){
return (function (seq32818){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32818));
});})(g__32771__auto___32859))
;


var g__32771__auto___32863 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__32771__auto___32863){
return (function cljs$spec$impl$gen$bind(var_args){
var args__22624__auto__ = [];
var len__22617__auto___32864 = arguments.length;
var i__22618__auto___32865 = (0);
while(true){
if((i__22618__auto___32865 < len__22617__auto___32864)){
args__22624__auto__.push((arguments[i__22618__auto___32865]));

var G__32866 = (i__22618__auto___32865 + (1));
i__22618__auto___32865 = G__32866;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__32771__auto___32863))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32771__auto___32863){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32771__auto___32863),args);
});})(g__32771__auto___32863))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__32771__auto___32863){
return (function (seq32819){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32819));
});})(g__32771__auto___32863))
;


var g__32771__auto___32867 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__32771__auto___32867){
return (function cljs$spec$impl$gen$choose(var_args){
var args__22624__auto__ = [];
var len__22617__auto___32868 = arguments.length;
var i__22618__auto___32869 = (0);
while(true){
if((i__22618__auto___32869 < len__22617__auto___32868)){
args__22624__auto__.push((arguments[i__22618__auto___32869]));

var G__32870 = (i__22618__auto___32869 + (1));
i__22618__auto___32869 = G__32870;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__32771__auto___32867))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32771__auto___32867){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32771__auto___32867),args);
});})(g__32771__auto___32867))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__32771__auto___32867){
return (function (seq32820){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32820));
});})(g__32771__auto___32867))
;


var g__32771__auto___32871 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__32771__auto___32871){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__22624__auto__ = [];
var len__22617__auto___32872 = arguments.length;
var i__22618__auto___32873 = (0);
while(true){
if((i__22618__auto___32873 < len__22617__auto___32872)){
args__22624__auto__.push((arguments[i__22618__auto___32873]));

var G__32874 = (i__22618__auto___32873 + (1));
i__22618__auto___32873 = G__32874;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__32771__auto___32871))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32771__auto___32871){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32771__auto___32871),args);
});})(g__32771__auto___32871))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__32771__auto___32871){
return (function (seq32821){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32821));
});})(g__32771__auto___32871))
;


var g__32771__auto___32875 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__32771__auto___32875){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__22624__auto__ = [];
var len__22617__auto___32876 = arguments.length;
var i__22618__auto___32877 = (0);
while(true){
if((i__22618__auto___32877 < len__22617__auto___32876)){
args__22624__auto__.push((arguments[i__22618__auto___32877]));

var G__32878 = (i__22618__auto___32877 + (1));
i__22618__auto___32877 = G__32878;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__32771__auto___32875))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32771__auto___32875){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32771__auto___32875),args);
});})(g__32771__auto___32875))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__32771__auto___32875){
return (function (seq32822){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32822));
});})(g__32771__auto___32875))
;


var g__32771__auto___32879 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__32771__auto___32879){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__22624__auto__ = [];
var len__22617__auto___32880 = arguments.length;
var i__22618__auto___32881 = (0);
while(true){
if((i__22618__auto___32881 < len__22617__auto___32880)){
args__22624__auto__.push((arguments[i__22618__auto___32881]));

var G__32882 = (i__22618__auto___32881 + (1));
i__22618__auto___32881 = G__32882;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__32771__auto___32879))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32771__auto___32879){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32771__auto___32879),args);
});})(g__32771__auto___32879))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__32771__auto___32879){
return (function (seq32823){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32823));
});})(g__32771__auto___32879))
;


var g__32771__auto___32883 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__32771__auto___32883){
return (function cljs$spec$impl$gen$sample(var_args){
var args__22624__auto__ = [];
var len__22617__auto___32884 = arguments.length;
var i__22618__auto___32885 = (0);
while(true){
if((i__22618__auto___32885 < len__22617__auto___32884)){
args__22624__auto__.push((arguments[i__22618__auto___32885]));

var G__32886 = (i__22618__auto___32885 + (1));
i__22618__auto___32885 = G__32886;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__32771__auto___32883))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32771__auto___32883){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32771__auto___32883),args);
});})(g__32771__auto___32883))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__32771__auto___32883){
return (function (seq32824){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32824));
});})(g__32771__auto___32883))
;


var g__32771__auto___32887 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__32771__auto___32887){
return (function cljs$spec$impl$gen$return(var_args){
var args__22624__auto__ = [];
var len__22617__auto___32888 = arguments.length;
var i__22618__auto___32889 = (0);
while(true){
if((i__22618__auto___32889 < len__22617__auto___32888)){
args__22624__auto__.push((arguments[i__22618__auto___32889]));

var G__32890 = (i__22618__auto___32889 + (1));
i__22618__auto___32889 = G__32890;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__32771__auto___32887))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32771__auto___32887){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32771__auto___32887),args);
});})(g__32771__auto___32887))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__32771__auto___32887){
return (function (seq32825){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32825));
});})(g__32771__auto___32887))
;


var g__32771__auto___32891 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__32771__auto___32891){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__22624__auto__ = [];
var len__22617__auto___32892 = arguments.length;
var i__22618__auto___32893 = (0);
while(true){
if((i__22618__auto___32893 < len__22617__auto___32892)){
args__22624__auto__.push((arguments[i__22618__auto___32893]));

var G__32894 = (i__22618__auto___32893 + (1));
i__22618__auto___32893 = G__32894;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__32771__auto___32891))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32771__auto___32891){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32771__auto___32891),args);
});})(g__32771__auto___32891))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__32771__auto___32891){
return (function (seq32826){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32826));
});})(g__32771__auto___32891))
;

var g__32784__auto___32916 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__32784__auto___32916){
return (function cljs$spec$impl$gen$any(var_args){
var args__22624__auto__ = [];
var len__22617__auto___32917 = arguments.length;
var i__22618__auto___32918 = (0);
while(true){
if((i__22618__auto___32918 < len__22617__auto___32917)){
args__22624__auto__.push((arguments[i__22618__auto___32918]));

var G__32919 = (i__22618__auto___32918 + (1));
i__22618__auto___32918 = G__32919;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__32784__auto___32916))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32784__auto___32916){
return (function (args){
return cljs.core.deref.call(null,g__32784__auto___32916);
});})(g__32784__auto___32916))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__32784__auto___32916){
return (function (seq32895){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32895));
});})(g__32784__auto___32916))
;


var g__32784__auto___32920 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__32784__auto___32920){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__22624__auto__ = [];
var len__22617__auto___32921 = arguments.length;
var i__22618__auto___32922 = (0);
while(true){
if((i__22618__auto___32922 < len__22617__auto___32921)){
args__22624__auto__.push((arguments[i__22618__auto___32922]));

var G__32923 = (i__22618__auto___32922 + (1));
i__22618__auto___32922 = G__32923;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__32784__auto___32920))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32784__auto___32920){
return (function (args){
return cljs.core.deref.call(null,g__32784__auto___32920);
});})(g__32784__auto___32920))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__32784__auto___32920){
return (function (seq32896){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32896));
});})(g__32784__auto___32920))
;


var g__32784__auto___32924 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__32784__auto___32924){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__22624__auto__ = [];
var len__22617__auto___32925 = arguments.length;
var i__22618__auto___32926 = (0);
while(true){
if((i__22618__auto___32926 < len__22617__auto___32925)){
args__22624__auto__.push((arguments[i__22618__auto___32926]));

var G__32927 = (i__22618__auto___32926 + (1));
i__22618__auto___32926 = G__32927;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__32784__auto___32924))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32784__auto___32924){
return (function (args){
return cljs.core.deref.call(null,g__32784__auto___32924);
});})(g__32784__auto___32924))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__32784__auto___32924){
return (function (seq32897){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32897));
});})(g__32784__auto___32924))
;


var g__32784__auto___32928 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__32784__auto___32928){
return (function cljs$spec$impl$gen$char(var_args){
var args__22624__auto__ = [];
var len__22617__auto___32929 = arguments.length;
var i__22618__auto___32930 = (0);
while(true){
if((i__22618__auto___32930 < len__22617__auto___32929)){
args__22624__auto__.push((arguments[i__22618__auto___32930]));

var G__32931 = (i__22618__auto___32930 + (1));
i__22618__auto___32930 = G__32931;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__32784__auto___32928))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32784__auto___32928){
return (function (args){
return cljs.core.deref.call(null,g__32784__auto___32928);
});})(g__32784__auto___32928))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__32784__auto___32928){
return (function (seq32898){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32898));
});})(g__32784__auto___32928))
;


var g__32784__auto___32932 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__32784__auto___32932){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__22624__auto__ = [];
var len__22617__auto___32933 = arguments.length;
var i__22618__auto___32934 = (0);
while(true){
if((i__22618__auto___32934 < len__22617__auto___32933)){
args__22624__auto__.push((arguments[i__22618__auto___32934]));

var G__32935 = (i__22618__auto___32934 + (1));
i__22618__auto___32934 = G__32935;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__32784__auto___32932))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32784__auto___32932){
return (function (args){
return cljs.core.deref.call(null,g__32784__auto___32932);
});})(g__32784__auto___32932))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__32784__auto___32932){
return (function (seq32899){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32899));
});})(g__32784__auto___32932))
;


var g__32784__auto___32936 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__32784__auto___32936){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__22624__auto__ = [];
var len__22617__auto___32937 = arguments.length;
var i__22618__auto___32938 = (0);
while(true){
if((i__22618__auto___32938 < len__22617__auto___32937)){
args__22624__auto__.push((arguments[i__22618__auto___32938]));

var G__32939 = (i__22618__auto___32938 + (1));
i__22618__auto___32938 = G__32939;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__32784__auto___32936))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32784__auto___32936){
return (function (args){
return cljs.core.deref.call(null,g__32784__auto___32936);
});})(g__32784__auto___32936))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__32784__auto___32936){
return (function (seq32900){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32900));
});})(g__32784__auto___32936))
;


var g__32784__auto___32940 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__32784__auto___32940){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__22624__auto__ = [];
var len__22617__auto___32941 = arguments.length;
var i__22618__auto___32942 = (0);
while(true){
if((i__22618__auto___32942 < len__22617__auto___32941)){
args__22624__auto__.push((arguments[i__22618__auto___32942]));

var G__32943 = (i__22618__auto___32942 + (1));
i__22618__auto___32942 = G__32943;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__32784__auto___32940))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32784__auto___32940){
return (function (args){
return cljs.core.deref.call(null,g__32784__auto___32940);
});})(g__32784__auto___32940))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__32784__auto___32940){
return (function (seq32901){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32901));
});})(g__32784__auto___32940))
;


var g__32784__auto___32944 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__32784__auto___32944){
return (function cljs$spec$impl$gen$double(var_args){
var args__22624__auto__ = [];
var len__22617__auto___32945 = arguments.length;
var i__22618__auto___32946 = (0);
while(true){
if((i__22618__auto___32946 < len__22617__auto___32945)){
args__22624__auto__.push((arguments[i__22618__auto___32946]));

var G__32947 = (i__22618__auto___32946 + (1));
i__22618__auto___32946 = G__32947;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__32784__auto___32944))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32784__auto___32944){
return (function (args){
return cljs.core.deref.call(null,g__32784__auto___32944);
});})(g__32784__auto___32944))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__32784__auto___32944){
return (function (seq32902){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32902));
});})(g__32784__auto___32944))
;


var g__32784__auto___32948 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__32784__auto___32948){
return (function cljs$spec$impl$gen$int(var_args){
var args__22624__auto__ = [];
var len__22617__auto___32949 = arguments.length;
var i__22618__auto___32950 = (0);
while(true){
if((i__22618__auto___32950 < len__22617__auto___32949)){
args__22624__auto__.push((arguments[i__22618__auto___32950]));

var G__32951 = (i__22618__auto___32950 + (1));
i__22618__auto___32950 = G__32951;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__32784__auto___32948))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32784__auto___32948){
return (function (args){
return cljs.core.deref.call(null,g__32784__auto___32948);
});})(g__32784__auto___32948))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__32784__auto___32948){
return (function (seq32903){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32903));
});})(g__32784__auto___32948))
;


var g__32784__auto___32952 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__32784__auto___32952){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__22624__auto__ = [];
var len__22617__auto___32953 = arguments.length;
var i__22618__auto___32954 = (0);
while(true){
if((i__22618__auto___32954 < len__22617__auto___32953)){
args__22624__auto__.push((arguments[i__22618__auto___32954]));

var G__32955 = (i__22618__auto___32954 + (1));
i__22618__auto___32954 = G__32955;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__32784__auto___32952))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32784__auto___32952){
return (function (args){
return cljs.core.deref.call(null,g__32784__auto___32952);
});})(g__32784__auto___32952))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__32784__auto___32952){
return (function (seq32904){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32904));
});})(g__32784__auto___32952))
;


var g__32784__auto___32956 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__32784__auto___32956){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__22624__auto__ = [];
var len__22617__auto___32957 = arguments.length;
var i__22618__auto___32958 = (0);
while(true){
if((i__22618__auto___32958 < len__22617__auto___32957)){
args__22624__auto__.push((arguments[i__22618__auto___32958]));

var G__32959 = (i__22618__auto___32958 + (1));
i__22618__auto___32958 = G__32959;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__32784__auto___32956))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32784__auto___32956){
return (function (args){
return cljs.core.deref.call(null,g__32784__auto___32956);
});})(g__32784__auto___32956))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__32784__auto___32956){
return (function (seq32905){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32905));
});})(g__32784__auto___32956))
;


var g__32784__auto___32960 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__32784__auto___32960){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__22624__auto__ = [];
var len__22617__auto___32961 = arguments.length;
var i__22618__auto___32962 = (0);
while(true){
if((i__22618__auto___32962 < len__22617__auto___32961)){
args__22624__auto__.push((arguments[i__22618__auto___32962]));

var G__32963 = (i__22618__auto___32962 + (1));
i__22618__auto___32962 = G__32963;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__32784__auto___32960))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32784__auto___32960){
return (function (args){
return cljs.core.deref.call(null,g__32784__auto___32960);
});})(g__32784__auto___32960))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__32784__auto___32960){
return (function (seq32906){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32906));
});})(g__32784__auto___32960))
;


var g__32784__auto___32964 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__32784__auto___32964){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__22624__auto__ = [];
var len__22617__auto___32965 = arguments.length;
var i__22618__auto___32966 = (0);
while(true){
if((i__22618__auto___32966 < len__22617__auto___32965)){
args__22624__auto__.push((arguments[i__22618__auto___32966]));

var G__32967 = (i__22618__auto___32966 + (1));
i__22618__auto___32966 = G__32967;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__32784__auto___32964))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32784__auto___32964){
return (function (args){
return cljs.core.deref.call(null,g__32784__auto___32964);
});})(g__32784__auto___32964))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__32784__auto___32964){
return (function (seq32907){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32907));
});})(g__32784__auto___32964))
;


var g__32784__auto___32968 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__32784__auto___32968){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__22624__auto__ = [];
var len__22617__auto___32969 = arguments.length;
var i__22618__auto___32970 = (0);
while(true){
if((i__22618__auto___32970 < len__22617__auto___32969)){
args__22624__auto__.push((arguments[i__22618__auto___32970]));

var G__32971 = (i__22618__auto___32970 + (1));
i__22618__auto___32970 = G__32971;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__32784__auto___32968))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32784__auto___32968){
return (function (args){
return cljs.core.deref.call(null,g__32784__auto___32968);
});})(g__32784__auto___32968))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__32784__auto___32968){
return (function (seq32908){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32908));
});})(g__32784__auto___32968))
;


var g__32784__auto___32972 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__32784__auto___32972){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__22624__auto__ = [];
var len__22617__auto___32973 = arguments.length;
var i__22618__auto___32974 = (0);
while(true){
if((i__22618__auto___32974 < len__22617__auto___32973)){
args__22624__auto__.push((arguments[i__22618__auto___32974]));

var G__32975 = (i__22618__auto___32974 + (1));
i__22618__auto___32974 = G__32975;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__32784__auto___32972))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32784__auto___32972){
return (function (args){
return cljs.core.deref.call(null,g__32784__auto___32972);
});})(g__32784__auto___32972))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__32784__auto___32972){
return (function (seq32909){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32909));
});})(g__32784__auto___32972))
;


var g__32784__auto___32976 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__32784__auto___32976){
return (function cljs$spec$impl$gen$string(var_args){
var args__22624__auto__ = [];
var len__22617__auto___32977 = arguments.length;
var i__22618__auto___32978 = (0);
while(true){
if((i__22618__auto___32978 < len__22617__auto___32977)){
args__22624__auto__.push((arguments[i__22618__auto___32978]));

var G__32979 = (i__22618__auto___32978 + (1));
i__22618__auto___32978 = G__32979;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__32784__auto___32976))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32784__auto___32976){
return (function (args){
return cljs.core.deref.call(null,g__32784__auto___32976);
});})(g__32784__auto___32976))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__32784__auto___32976){
return (function (seq32910){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32910));
});})(g__32784__auto___32976))
;


var g__32784__auto___32980 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__32784__auto___32980){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__22624__auto__ = [];
var len__22617__auto___32981 = arguments.length;
var i__22618__auto___32982 = (0);
while(true){
if((i__22618__auto___32982 < len__22617__auto___32981)){
args__22624__auto__.push((arguments[i__22618__auto___32982]));

var G__32983 = (i__22618__auto___32982 + (1));
i__22618__auto___32982 = G__32983;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__32784__auto___32980))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32784__auto___32980){
return (function (args){
return cljs.core.deref.call(null,g__32784__auto___32980);
});})(g__32784__auto___32980))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__32784__auto___32980){
return (function (seq32911){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32911));
});})(g__32784__auto___32980))
;


var g__32784__auto___32984 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__32784__auto___32984){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__22624__auto__ = [];
var len__22617__auto___32985 = arguments.length;
var i__22618__auto___32986 = (0);
while(true){
if((i__22618__auto___32986 < len__22617__auto___32985)){
args__22624__auto__.push((arguments[i__22618__auto___32986]));

var G__32987 = (i__22618__auto___32986 + (1));
i__22618__auto___32986 = G__32987;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__32784__auto___32984))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32784__auto___32984){
return (function (args){
return cljs.core.deref.call(null,g__32784__auto___32984);
});})(g__32784__auto___32984))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__32784__auto___32984){
return (function (seq32912){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32912));
});})(g__32784__auto___32984))
;


var g__32784__auto___32988 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__32784__auto___32988){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__22624__auto__ = [];
var len__22617__auto___32989 = arguments.length;
var i__22618__auto___32990 = (0);
while(true){
if((i__22618__auto___32990 < len__22617__auto___32989)){
args__22624__auto__.push((arguments[i__22618__auto___32990]));

var G__32991 = (i__22618__auto___32990 + (1));
i__22618__auto___32990 = G__32991;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__32784__auto___32988))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32784__auto___32988){
return (function (args){
return cljs.core.deref.call(null,g__32784__auto___32988);
});})(g__32784__auto___32988))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__32784__auto___32988){
return (function (seq32913){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32913));
});})(g__32784__auto___32988))
;


var g__32784__auto___32992 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__32784__auto___32992){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__22624__auto__ = [];
var len__22617__auto___32993 = arguments.length;
var i__22618__auto___32994 = (0);
while(true){
if((i__22618__auto___32994 < len__22617__auto___32993)){
args__22624__auto__.push((arguments[i__22618__auto___32994]));

var G__32995 = (i__22618__auto___32994 + (1));
i__22618__auto___32994 = G__32995;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__32784__auto___32992))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32784__auto___32992){
return (function (args){
return cljs.core.deref.call(null,g__32784__auto___32992);
});})(g__32784__auto___32992))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__32784__auto___32992){
return (function (seq32914){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32914));
});})(g__32784__auto___32992))
;


var g__32784__auto___32996 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__32784__auto___32996){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__22624__auto__ = [];
var len__22617__auto___32997 = arguments.length;
var i__22618__auto___32998 = (0);
while(true){
if((i__22618__auto___32998 < len__22617__auto___32997)){
args__22624__auto__.push((arguments[i__22618__auto___32998]));

var G__32999 = (i__22618__auto___32998 + (1));
i__22618__auto___32998 = G__32999;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__32784__auto___32996))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32784__auto___32996){
return (function (args){
return cljs.core.deref.call(null,g__32784__auto___32996);
});})(g__32784__auto___32996))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__32784__auto___32996){
return (function (seq32915){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32915));
});})(g__32784__auto___32996))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__22624__auto__ = [];
var len__22617__auto___33002 = arguments.length;
var i__22618__auto___33003 = (0);
while(true){
if((i__22618__auto___33003 < len__22617__auto___33002)){
args__22624__auto__.push((arguments[i__22618__auto___33003]));

var G__33004 = (i__22618__auto___33003 + (1));
i__22618__auto___33003 = G__33004;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__33000_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__33000_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq33001){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33001));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__33005_SHARP_){
return (new Date(p1__33005_SHARP_));
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

//# sourceMappingURL=gen.js.map?rel=1467159065102