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
var len__22617__auto___35800 = arguments.length;
var i__22618__auto___35801 = (0);
while(true){
if((i__22618__auto___35801 < len__22617__auto___35800)){
args__22624__auto__.push((arguments[i__22618__auto___35801]));

var G__35802 = (i__22618__auto___35801 + (1));
i__22618__auto___35801 = G__35802;
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

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq35799){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35799));
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
var len__22617__auto___35804 = arguments.length;
var i__22618__auto___35805 = (0);
while(true){
if((i__22618__auto___35805 < len__22617__auto___35804)){
args__22624__auto__.push((arguments[i__22618__auto___35805]));

var G__35806 = (i__22618__auto___35805 + (1));
i__22618__auto___35805 = G__35806;
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

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq35803){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35803));
});

var g_QMARK__35807 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_35808 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__35807){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__35807))
,null));
var mkg_35809 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__35807,g_35808){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__35807,g_35808))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__35807,g_35808,mkg_35809){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__35807).call(null,x);
});})(g_QMARK__35807,g_35808,mkg_35809))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__35807,g_35808,mkg_35809){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_35809).call(null,gfn);
});})(g_QMARK__35807,g_35808,mkg_35809))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__35807,g_35808,mkg_35809){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_35808).call(null,generator);
});})(g_QMARK__35807,g_35808,mkg_35809))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__35771__auto___35827 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__35771__auto___35827){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__22624__auto__ = [];
var len__22617__auto___35828 = arguments.length;
var i__22618__auto___35829 = (0);
while(true){
if((i__22618__auto___35829 < len__22617__auto___35828)){
args__22624__auto__.push((arguments[i__22618__auto___35829]));

var G__35830 = (i__22618__auto___35829 + (1));
i__22618__auto___35829 = G__35830;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__35771__auto___35827))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35771__auto___35827){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35771__auto___35827),args);
});})(g__35771__auto___35827))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__35771__auto___35827){
return (function (seq35810){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35810));
});})(g__35771__auto___35827))
;


var g__35771__auto___35831 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__35771__auto___35831){
return (function cljs$spec$impl$gen$list(var_args){
var args__22624__auto__ = [];
var len__22617__auto___35832 = arguments.length;
var i__22618__auto___35833 = (0);
while(true){
if((i__22618__auto___35833 < len__22617__auto___35832)){
args__22624__auto__.push((arguments[i__22618__auto___35833]));

var G__35834 = (i__22618__auto___35833 + (1));
i__22618__auto___35833 = G__35834;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__35771__auto___35831))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35771__auto___35831){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35771__auto___35831),args);
});})(g__35771__auto___35831))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__35771__auto___35831){
return (function (seq35811){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35811));
});})(g__35771__auto___35831))
;


var g__35771__auto___35835 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__35771__auto___35835){
return (function cljs$spec$impl$gen$map(var_args){
var args__22624__auto__ = [];
var len__22617__auto___35836 = arguments.length;
var i__22618__auto___35837 = (0);
while(true){
if((i__22618__auto___35837 < len__22617__auto___35836)){
args__22624__auto__.push((arguments[i__22618__auto___35837]));

var G__35838 = (i__22618__auto___35837 + (1));
i__22618__auto___35837 = G__35838;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__35771__auto___35835))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35771__auto___35835){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35771__auto___35835),args);
});})(g__35771__auto___35835))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__35771__auto___35835){
return (function (seq35812){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35812));
});})(g__35771__auto___35835))
;


var g__35771__auto___35839 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__35771__auto___35839){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__22624__auto__ = [];
var len__22617__auto___35840 = arguments.length;
var i__22618__auto___35841 = (0);
while(true){
if((i__22618__auto___35841 < len__22617__auto___35840)){
args__22624__auto__.push((arguments[i__22618__auto___35841]));

var G__35842 = (i__22618__auto___35841 + (1));
i__22618__auto___35841 = G__35842;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__35771__auto___35839))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35771__auto___35839){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35771__auto___35839),args);
});})(g__35771__auto___35839))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__35771__auto___35839){
return (function (seq35813){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35813));
});})(g__35771__auto___35839))
;


var g__35771__auto___35843 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__35771__auto___35843){
return (function cljs$spec$impl$gen$set(var_args){
var args__22624__auto__ = [];
var len__22617__auto___35844 = arguments.length;
var i__22618__auto___35845 = (0);
while(true){
if((i__22618__auto___35845 < len__22617__auto___35844)){
args__22624__auto__.push((arguments[i__22618__auto___35845]));

var G__35846 = (i__22618__auto___35845 + (1));
i__22618__auto___35845 = G__35846;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__35771__auto___35843))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35771__auto___35843){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35771__auto___35843),args);
});})(g__35771__auto___35843))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__35771__auto___35843){
return (function (seq35814){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35814));
});})(g__35771__auto___35843))
;


var g__35771__auto___35847 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__35771__auto___35847){
return (function cljs$spec$impl$gen$vector(var_args){
var args__22624__auto__ = [];
var len__22617__auto___35848 = arguments.length;
var i__22618__auto___35849 = (0);
while(true){
if((i__22618__auto___35849 < len__22617__auto___35848)){
args__22624__auto__.push((arguments[i__22618__auto___35849]));

var G__35850 = (i__22618__auto___35849 + (1));
i__22618__auto___35849 = G__35850;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__35771__auto___35847))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35771__auto___35847){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35771__auto___35847),args);
});})(g__35771__auto___35847))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__35771__auto___35847){
return (function (seq35815){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35815));
});})(g__35771__auto___35847))
;


var g__35771__auto___35851 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__35771__auto___35851){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__22624__auto__ = [];
var len__22617__auto___35852 = arguments.length;
var i__22618__auto___35853 = (0);
while(true){
if((i__22618__auto___35853 < len__22617__auto___35852)){
args__22624__auto__.push((arguments[i__22618__auto___35853]));

var G__35854 = (i__22618__auto___35853 + (1));
i__22618__auto___35853 = G__35854;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__35771__auto___35851))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35771__auto___35851){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35771__auto___35851),args);
});})(g__35771__auto___35851))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__35771__auto___35851){
return (function (seq35816){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35816));
});})(g__35771__auto___35851))
;


var g__35771__auto___35855 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__35771__auto___35855){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__22624__auto__ = [];
var len__22617__auto___35856 = arguments.length;
var i__22618__auto___35857 = (0);
while(true){
if((i__22618__auto___35857 < len__22617__auto___35856)){
args__22624__auto__.push((arguments[i__22618__auto___35857]));

var G__35858 = (i__22618__auto___35857 + (1));
i__22618__auto___35857 = G__35858;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__35771__auto___35855))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35771__auto___35855){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35771__auto___35855),args);
});})(g__35771__auto___35855))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__35771__auto___35855){
return (function (seq35817){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35817));
});})(g__35771__auto___35855))
;


var g__35771__auto___35859 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__35771__auto___35859){
return (function cljs$spec$impl$gen$elements(var_args){
var args__22624__auto__ = [];
var len__22617__auto___35860 = arguments.length;
var i__22618__auto___35861 = (0);
while(true){
if((i__22618__auto___35861 < len__22617__auto___35860)){
args__22624__auto__.push((arguments[i__22618__auto___35861]));

var G__35862 = (i__22618__auto___35861 + (1));
i__22618__auto___35861 = G__35862;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__35771__auto___35859))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35771__auto___35859){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35771__auto___35859),args);
});})(g__35771__auto___35859))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__35771__auto___35859){
return (function (seq35818){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35818));
});})(g__35771__auto___35859))
;


var g__35771__auto___35863 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__35771__auto___35863){
return (function cljs$spec$impl$gen$bind(var_args){
var args__22624__auto__ = [];
var len__22617__auto___35864 = arguments.length;
var i__22618__auto___35865 = (0);
while(true){
if((i__22618__auto___35865 < len__22617__auto___35864)){
args__22624__auto__.push((arguments[i__22618__auto___35865]));

var G__35866 = (i__22618__auto___35865 + (1));
i__22618__auto___35865 = G__35866;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__35771__auto___35863))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35771__auto___35863){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35771__auto___35863),args);
});})(g__35771__auto___35863))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__35771__auto___35863){
return (function (seq35819){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35819));
});})(g__35771__auto___35863))
;


var g__35771__auto___35867 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__35771__auto___35867){
return (function cljs$spec$impl$gen$choose(var_args){
var args__22624__auto__ = [];
var len__22617__auto___35868 = arguments.length;
var i__22618__auto___35869 = (0);
while(true){
if((i__22618__auto___35869 < len__22617__auto___35868)){
args__22624__auto__.push((arguments[i__22618__auto___35869]));

var G__35870 = (i__22618__auto___35869 + (1));
i__22618__auto___35869 = G__35870;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__35771__auto___35867))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35771__auto___35867){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35771__auto___35867),args);
});})(g__35771__auto___35867))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__35771__auto___35867){
return (function (seq35820){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35820));
});})(g__35771__auto___35867))
;


var g__35771__auto___35871 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__35771__auto___35871){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__22624__auto__ = [];
var len__22617__auto___35872 = arguments.length;
var i__22618__auto___35873 = (0);
while(true){
if((i__22618__auto___35873 < len__22617__auto___35872)){
args__22624__auto__.push((arguments[i__22618__auto___35873]));

var G__35874 = (i__22618__auto___35873 + (1));
i__22618__auto___35873 = G__35874;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__35771__auto___35871))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35771__auto___35871){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35771__auto___35871),args);
});})(g__35771__auto___35871))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__35771__auto___35871){
return (function (seq35821){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35821));
});})(g__35771__auto___35871))
;


var g__35771__auto___35875 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__35771__auto___35875){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__22624__auto__ = [];
var len__22617__auto___35876 = arguments.length;
var i__22618__auto___35877 = (0);
while(true){
if((i__22618__auto___35877 < len__22617__auto___35876)){
args__22624__auto__.push((arguments[i__22618__auto___35877]));

var G__35878 = (i__22618__auto___35877 + (1));
i__22618__auto___35877 = G__35878;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__35771__auto___35875))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35771__auto___35875){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35771__auto___35875),args);
});})(g__35771__auto___35875))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__35771__auto___35875){
return (function (seq35822){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35822));
});})(g__35771__auto___35875))
;


var g__35771__auto___35879 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__35771__auto___35879){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__22624__auto__ = [];
var len__22617__auto___35880 = arguments.length;
var i__22618__auto___35881 = (0);
while(true){
if((i__22618__auto___35881 < len__22617__auto___35880)){
args__22624__auto__.push((arguments[i__22618__auto___35881]));

var G__35882 = (i__22618__auto___35881 + (1));
i__22618__auto___35881 = G__35882;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__35771__auto___35879))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35771__auto___35879){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35771__auto___35879),args);
});})(g__35771__auto___35879))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__35771__auto___35879){
return (function (seq35823){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35823));
});})(g__35771__auto___35879))
;


var g__35771__auto___35883 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__35771__auto___35883){
return (function cljs$spec$impl$gen$sample(var_args){
var args__22624__auto__ = [];
var len__22617__auto___35884 = arguments.length;
var i__22618__auto___35885 = (0);
while(true){
if((i__22618__auto___35885 < len__22617__auto___35884)){
args__22624__auto__.push((arguments[i__22618__auto___35885]));

var G__35886 = (i__22618__auto___35885 + (1));
i__22618__auto___35885 = G__35886;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__35771__auto___35883))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35771__auto___35883){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35771__auto___35883),args);
});})(g__35771__auto___35883))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__35771__auto___35883){
return (function (seq35824){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35824));
});})(g__35771__auto___35883))
;


var g__35771__auto___35887 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__35771__auto___35887){
return (function cljs$spec$impl$gen$return(var_args){
var args__22624__auto__ = [];
var len__22617__auto___35888 = arguments.length;
var i__22618__auto___35889 = (0);
while(true){
if((i__22618__auto___35889 < len__22617__auto___35888)){
args__22624__auto__.push((arguments[i__22618__auto___35889]));

var G__35890 = (i__22618__auto___35889 + (1));
i__22618__auto___35889 = G__35890;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__35771__auto___35887))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35771__auto___35887){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35771__auto___35887),args);
});})(g__35771__auto___35887))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__35771__auto___35887){
return (function (seq35825){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35825));
});})(g__35771__auto___35887))
;


var g__35771__auto___35891 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__35771__auto___35891){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__22624__auto__ = [];
var len__22617__auto___35892 = arguments.length;
var i__22618__auto___35893 = (0);
while(true){
if((i__22618__auto___35893 < len__22617__auto___35892)){
args__22624__auto__.push((arguments[i__22618__auto___35893]));

var G__35894 = (i__22618__auto___35893 + (1));
i__22618__auto___35893 = G__35894;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__35771__auto___35891))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35771__auto___35891){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35771__auto___35891),args);
});})(g__35771__auto___35891))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__35771__auto___35891){
return (function (seq35826){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35826));
});})(g__35771__auto___35891))
;

var g__35784__auto___35916 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__35784__auto___35916){
return (function cljs$spec$impl$gen$any(var_args){
var args__22624__auto__ = [];
var len__22617__auto___35917 = arguments.length;
var i__22618__auto___35918 = (0);
while(true){
if((i__22618__auto___35918 < len__22617__auto___35917)){
args__22624__auto__.push((arguments[i__22618__auto___35918]));

var G__35919 = (i__22618__auto___35918 + (1));
i__22618__auto___35918 = G__35919;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__35784__auto___35916))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35784__auto___35916){
return (function (args){
return cljs.core.deref.call(null,g__35784__auto___35916);
});})(g__35784__auto___35916))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__35784__auto___35916){
return (function (seq35895){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35895));
});})(g__35784__auto___35916))
;


var g__35784__auto___35920 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__35784__auto___35920){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__22624__auto__ = [];
var len__22617__auto___35921 = arguments.length;
var i__22618__auto___35922 = (0);
while(true){
if((i__22618__auto___35922 < len__22617__auto___35921)){
args__22624__auto__.push((arguments[i__22618__auto___35922]));

var G__35923 = (i__22618__auto___35922 + (1));
i__22618__auto___35922 = G__35923;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__35784__auto___35920))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35784__auto___35920){
return (function (args){
return cljs.core.deref.call(null,g__35784__auto___35920);
});})(g__35784__auto___35920))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__35784__auto___35920){
return (function (seq35896){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35896));
});})(g__35784__auto___35920))
;


var g__35784__auto___35924 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__35784__auto___35924){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__22624__auto__ = [];
var len__22617__auto___35925 = arguments.length;
var i__22618__auto___35926 = (0);
while(true){
if((i__22618__auto___35926 < len__22617__auto___35925)){
args__22624__auto__.push((arguments[i__22618__auto___35926]));

var G__35927 = (i__22618__auto___35926 + (1));
i__22618__auto___35926 = G__35927;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__35784__auto___35924))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35784__auto___35924){
return (function (args){
return cljs.core.deref.call(null,g__35784__auto___35924);
});})(g__35784__auto___35924))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__35784__auto___35924){
return (function (seq35897){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35897));
});})(g__35784__auto___35924))
;


var g__35784__auto___35928 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__35784__auto___35928){
return (function cljs$spec$impl$gen$char(var_args){
var args__22624__auto__ = [];
var len__22617__auto___35929 = arguments.length;
var i__22618__auto___35930 = (0);
while(true){
if((i__22618__auto___35930 < len__22617__auto___35929)){
args__22624__auto__.push((arguments[i__22618__auto___35930]));

var G__35931 = (i__22618__auto___35930 + (1));
i__22618__auto___35930 = G__35931;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__35784__auto___35928))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35784__auto___35928){
return (function (args){
return cljs.core.deref.call(null,g__35784__auto___35928);
});})(g__35784__auto___35928))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__35784__auto___35928){
return (function (seq35898){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35898));
});})(g__35784__auto___35928))
;


var g__35784__auto___35932 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__35784__auto___35932){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__22624__auto__ = [];
var len__22617__auto___35933 = arguments.length;
var i__22618__auto___35934 = (0);
while(true){
if((i__22618__auto___35934 < len__22617__auto___35933)){
args__22624__auto__.push((arguments[i__22618__auto___35934]));

var G__35935 = (i__22618__auto___35934 + (1));
i__22618__auto___35934 = G__35935;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__35784__auto___35932))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35784__auto___35932){
return (function (args){
return cljs.core.deref.call(null,g__35784__auto___35932);
});})(g__35784__auto___35932))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__35784__auto___35932){
return (function (seq35899){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35899));
});})(g__35784__auto___35932))
;


var g__35784__auto___35936 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__35784__auto___35936){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__22624__auto__ = [];
var len__22617__auto___35937 = arguments.length;
var i__22618__auto___35938 = (0);
while(true){
if((i__22618__auto___35938 < len__22617__auto___35937)){
args__22624__auto__.push((arguments[i__22618__auto___35938]));

var G__35939 = (i__22618__auto___35938 + (1));
i__22618__auto___35938 = G__35939;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__35784__auto___35936))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35784__auto___35936){
return (function (args){
return cljs.core.deref.call(null,g__35784__auto___35936);
});})(g__35784__auto___35936))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__35784__auto___35936){
return (function (seq35900){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35900));
});})(g__35784__auto___35936))
;


var g__35784__auto___35940 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__35784__auto___35940){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__22624__auto__ = [];
var len__22617__auto___35941 = arguments.length;
var i__22618__auto___35942 = (0);
while(true){
if((i__22618__auto___35942 < len__22617__auto___35941)){
args__22624__auto__.push((arguments[i__22618__auto___35942]));

var G__35943 = (i__22618__auto___35942 + (1));
i__22618__auto___35942 = G__35943;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__35784__auto___35940))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35784__auto___35940){
return (function (args){
return cljs.core.deref.call(null,g__35784__auto___35940);
});})(g__35784__auto___35940))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__35784__auto___35940){
return (function (seq35901){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35901));
});})(g__35784__auto___35940))
;


var g__35784__auto___35944 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__35784__auto___35944){
return (function cljs$spec$impl$gen$double(var_args){
var args__22624__auto__ = [];
var len__22617__auto___35945 = arguments.length;
var i__22618__auto___35946 = (0);
while(true){
if((i__22618__auto___35946 < len__22617__auto___35945)){
args__22624__auto__.push((arguments[i__22618__auto___35946]));

var G__35947 = (i__22618__auto___35946 + (1));
i__22618__auto___35946 = G__35947;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__35784__auto___35944))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35784__auto___35944){
return (function (args){
return cljs.core.deref.call(null,g__35784__auto___35944);
});})(g__35784__auto___35944))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__35784__auto___35944){
return (function (seq35902){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35902));
});})(g__35784__auto___35944))
;


var g__35784__auto___35948 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__35784__auto___35948){
return (function cljs$spec$impl$gen$int(var_args){
var args__22624__auto__ = [];
var len__22617__auto___35949 = arguments.length;
var i__22618__auto___35950 = (0);
while(true){
if((i__22618__auto___35950 < len__22617__auto___35949)){
args__22624__auto__.push((arguments[i__22618__auto___35950]));

var G__35951 = (i__22618__auto___35950 + (1));
i__22618__auto___35950 = G__35951;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__35784__auto___35948))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35784__auto___35948){
return (function (args){
return cljs.core.deref.call(null,g__35784__auto___35948);
});})(g__35784__auto___35948))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__35784__auto___35948){
return (function (seq35903){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35903));
});})(g__35784__auto___35948))
;


var g__35784__auto___35952 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__35784__auto___35952){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__22624__auto__ = [];
var len__22617__auto___35953 = arguments.length;
var i__22618__auto___35954 = (0);
while(true){
if((i__22618__auto___35954 < len__22617__auto___35953)){
args__22624__auto__.push((arguments[i__22618__auto___35954]));

var G__35955 = (i__22618__auto___35954 + (1));
i__22618__auto___35954 = G__35955;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__35784__auto___35952))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35784__auto___35952){
return (function (args){
return cljs.core.deref.call(null,g__35784__auto___35952);
});})(g__35784__auto___35952))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__35784__auto___35952){
return (function (seq35904){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35904));
});})(g__35784__auto___35952))
;


var g__35784__auto___35956 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__35784__auto___35956){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__22624__auto__ = [];
var len__22617__auto___35957 = arguments.length;
var i__22618__auto___35958 = (0);
while(true){
if((i__22618__auto___35958 < len__22617__auto___35957)){
args__22624__auto__.push((arguments[i__22618__auto___35958]));

var G__35959 = (i__22618__auto___35958 + (1));
i__22618__auto___35958 = G__35959;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__35784__auto___35956))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35784__auto___35956){
return (function (args){
return cljs.core.deref.call(null,g__35784__auto___35956);
});})(g__35784__auto___35956))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__35784__auto___35956){
return (function (seq35905){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35905));
});})(g__35784__auto___35956))
;


var g__35784__auto___35960 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__35784__auto___35960){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__22624__auto__ = [];
var len__22617__auto___35961 = arguments.length;
var i__22618__auto___35962 = (0);
while(true){
if((i__22618__auto___35962 < len__22617__auto___35961)){
args__22624__auto__.push((arguments[i__22618__auto___35962]));

var G__35963 = (i__22618__auto___35962 + (1));
i__22618__auto___35962 = G__35963;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__35784__auto___35960))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35784__auto___35960){
return (function (args){
return cljs.core.deref.call(null,g__35784__auto___35960);
});})(g__35784__auto___35960))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__35784__auto___35960){
return (function (seq35906){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35906));
});})(g__35784__auto___35960))
;


var g__35784__auto___35964 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__35784__auto___35964){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__22624__auto__ = [];
var len__22617__auto___35965 = arguments.length;
var i__22618__auto___35966 = (0);
while(true){
if((i__22618__auto___35966 < len__22617__auto___35965)){
args__22624__auto__.push((arguments[i__22618__auto___35966]));

var G__35967 = (i__22618__auto___35966 + (1));
i__22618__auto___35966 = G__35967;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__35784__auto___35964))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35784__auto___35964){
return (function (args){
return cljs.core.deref.call(null,g__35784__auto___35964);
});})(g__35784__auto___35964))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__35784__auto___35964){
return (function (seq35907){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35907));
});})(g__35784__auto___35964))
;


var g__35784__auto___35968 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__35784__auto___35968){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__22624__auto__ = [];
var len__22617__auto___35969 = arguments.length;
var i__22618__auto___35970 = (0);
while(true){
if((i__22618__auto___35970 < len__22617__auto___35969)){
args__22624__auto__.push((arguments[i__22618__auto___35970]));

var G__35971 = (i__22618__auto___35970 + (1));
i__22618__auto___35970 = G__35971;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__35784__auto___35968))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35784__auto___35968){
return (function (args){
return cljs.core.deref.call(null,g__35784__auto___35968);
});})(g__35784__auto___35968))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__35784__auto___35968){
return (function (seq35908){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35908));
});})(g__35784__auto___35968))
;


var g__35784__auto___35972 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__35784__auto___35972){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__22624__auto__ = [];
var len__22617__auto___35973 = arguments.length;
var i__22618__auto___35974 = (0);
while(true){
if((i__22618__auto___35974 < len__22617__auto___35973)){
args__22624__auto__.push((arguments[i__22618__auto___35974]));

var G__35975 = (i__22618__auto___35974 + (1));
i__22618__auto___35974 = G__35975;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__35784__auto___35972))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35784__auto___35972){
return (function (args){
return cljs.core.deref.call(null,g__35784__auto___35972);
});})(g__35784__auto___35972))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__35784__auto___35972){
return (function (seq35909){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35909));
});})(g__35784__auto___35972))
;


var g__35784__auto___35976 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__35784__auto___35976){
return (function cljs$spec$impl$gen$string(var_args){
var args__22624__auto__ = [];
var len__22617__auto___35977 = arguments.length;
var i__22618__auto___35978 = (0);
while(true){
if((i__22618__auto___35978 < len__22617__auto___35977)){
args__22624__auto__.push((arguments[i__22618__auto___35978]));

var G__35979 = (i__22618__auto___35978 + (1));
i__22618__auto___35978 = G__35979;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__35784__auto___35976))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35784__auto___35976){
return (function (args){
return cljs.core.deref.call(null,g__35784__auto___35976);
});})(g__35784__auto___35976))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__35784__auto___35976){
return (function (seq35910){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35910));
});})(g__35784__auto___35976))
;


var g__35784__auto___35980 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__35784__auto___35980){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__22624__auto__ = [];
var len__22617__auto___35981 = arguments.length;
var i__22618__auto___35982 = (0);
while(true){
if((i__22618__auto___35982 < len__22617__auto___35981)){
args__22624__auto__.push((arguments[i__22618__auto___35982]));

var G__35983 = (i__22618__auto___35982 + (1));
i__22618__auto___35982 = G__35983;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__35784__auto___35980))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35784__auto___35980){
return (function (args){
return cljs.core.deref.call(null,g__35784__auto___35980);
});})(g__35784__auto___35980))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__35784__auto___35980){
return (function (seq35911){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35911));
});})(g__35784__auto___35980))
;


var g__35784__auto___35984 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__35784__auto___35984){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__22624__auto__ = [];
var len__22617__auto___35985 = arguments.length;
var i__22618__auto___35986 = (0);
while(true){
if((i__22618__auto___35986 < len__22617__auto___35985)){
args__22624__auto__.push((arguments[i__22618__auto___35986]));

var G__35987 = (i__22618__auto___35986 + (1));
i__22618__auto___35986 = G__35987;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__35784__auto___35984))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35784__auto___35984){
return (function (args){
return cljs.core.deref.call(null,g__35784__auto___35984);
});})(g__35784__auto___35984))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__35784__auto___35984){
return (function (seq35912){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35912));
});})(g__35784__auto___35984))
;


var g__35784__auto___35988 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__35784__auto___35988){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__22624__auto__ = [];
var len__22617__auto___35989 = arguments.length;
var i__22618__auto___35990 = (0);
while(true){
if((i__22618__auto___35990 < len__22617__auto___35989)){
args__22624__auto__.push((arguments[i__22618__auto___35990]));

var G__35991 = (i__22618__auto___35990 + (1));
i__22618__auto___35990 = G__35991;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__35784__auto___35988))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35784__auto___35988){
return (function (args){
return cljs.core.deref.call(null,g__35784__auto___35988);
});})(g__35784__auto___35988))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__35784__auto___35988){
return (function (seq35913){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35913));
});})(g__35784__auto___35988))
;


var g__35784__auto___35992 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__35784__auto___35992){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__22624__auto__ = [];
var len__22617__auto___35993 = arguments.length;
var i__22618__auto___35994 = (0);
while(true){
if((i__22618__auto___35994 < len__22617__auto___35993)){
args__22624__auto__.push((arguments[i__22618__auto___35994]));

var G__35995 = (i__22618__auto___35994 + (1));
i__22618__auto___35994 = G__35995;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__35784__auto___35992))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35784__auto___35992){
return (function (args){
return cljs.core.deref.call(null,g__35784__auto___35992);
});})(g__35784__auto___35992))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__35784__auto___35992){
return (function (seq35914){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35914));
});})(g__35784__auto___35992))
;


var g__35784__auto___35996 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__35784__auto___35996){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__22624__auto__ = [];
var len__22617__auto___35997 = arguments.length;
var i__22618__auto___35998 = (0);
while(true){
if((i__22618__auto___35998 < len__22617__auto___35997)){
args__22624__auto__.push((arguments[i__22618__auto___35998]));

var G__35999 = (i__22618__auto___35998 + (1));
i__22618__auto___35998 = G__35999;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});})(g__35784__auto___35996))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35784__auto___35996){
return (function (args){
return cljs.core.deref.call(null,g__35784__auto___35996);
});})(g__35784__auto___35996))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__35784__auto___35996){
return (function (seq35915){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35915));
});})(g__35784__auto___35996))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__22624__auto__ = [];
var len__22617__auto___36002 = arguments.length;
var i__22618__auto___36003 = (0);
while(true){
if((i__22618__auto___36003 < len__22617__auto___36002)){
args__22624__auto__.push((arguments[i__22618__auto___36003]));

var G__36004 = (i__22618__auto___36003 + (1));
i__22618__auto___36003 = G__36004;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__36000_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__36000_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq36001){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36001));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__36005_SHARP_){
return (new Date(p1__36005_SHARP_));
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

//# sourceMappingURL=gen.js.map?rel=1468449920293