// Compiled by ClojureScript 1.9.211 {}
goog.provide('com.rpl.specter.protocols');
goog.require('cljs.core');

/**
 * @interface
 */
com.rpl.specter.protocols.Navigator = function(){};

/**
 * An implementation of `select*` must call `next-fn` on each
 *   subvalue of `structure`. The result of `select*` is specified
 *   as follows:
 * 
 *   1. `NONE` if `next-fn` never called
 *   2. `NONE` if all calls to `next-fn` return `NONE`
 *   3. Otherwise, any non-`NONE` return value from calling `next-fn`
 *   
 */
com.rpl.specter.protocols.select_STAR_ = (function com$rpl$specter$protocols$select_STAR_(this$,structure,next_fn){
if((!((this$ == null))) && (!((this$.com$rpl$specter$protocols$Navigator$select_STAR_$arity$3 == null)))){
return this$.com$rpl$specter$protocols$Navigator$select_STAR_$arity$3(this$,structure,next_fn);
} else {
var x__22302__auto__ = (((this$ == null))?null:this$);
var m__22303__auto__ = (com.rpl.specter.protocols.select_STAR_[goog.typeOf(x__22302__auto__)]);
if(!((m__22303__auto__ == null))){
return m__22303__auto__.call(null,this$,structure,next_fn);
} else {
var m__22303__auto____$1 = (com.rpl.specter.protocols.select_STAR_["_"]);
if(!((m__22303__auto____$1 == null))){
return m__22303__auto____$1.call(null,this$,structure,next_fn);
} else {
throw cljs.core.missing_protocol.call(null,"Navigator.select*",this$);
}
}
}
});

/**
 * An implementation of `transform*` must use `next-fn` to transform
 *   any subvalues of `structure` and then merge those transformed values
 *   back into `structure`. Everything else in `structure` must be unchanged.
 */
com.rpl.specter.protocols.transform_STAR_ = (function com$rpl$specter$protocols$transform_STAR_(this$,structure,next_fn){
if((!((this$ == null))) && (!((this$.com$rpl$specter$protocols$Navigator$transform_STAR_$arity$3 == null)))){
return this$.com$rpl$specter$protocols$Navigator$transform_STAR_$arity$3(this$,structure,next_fn);
} else {
var x__22302__auto__ = (((this$ == null))?null:this$);
var m__22303__auto__ = (com.rpl.specter.protocols.transform_STAR_[goog.typeOf(x__22302__auto__)]);
if(!((m__22303__auto__ == null))){
return m__22303__auto__.call(null,this$,structure,next_fn);
} else {
var m__22303__auto____$1 = (com.rpl.specter.protocols.transform_STAR_["_"]);
if(!((m__22303__auto____$1 == null))){
return m__22303__auto____$1.call(null,this$,structure,next_fn);
} else {
throw cljs.core.missing_protocol.call(null,"Navigator.transform*",this$);
}
}
}
});


/**
 * @interface
 */
com.rpl.specter.protocols.Collector = function(){};

com.rpl.specter.protocols.collect_val = (function com$rpl$specter$protocols$collect_val(this$,structure){
if((!((this$ == null))) && (!((this$.com$rpl$specter$protocols$Collector$collect_val$arity$2 == null)))){
return this$.com$rpl$specter$protocols$Collector$collect_val$arity$2(this$,structure);
} else {
var x__22302__auto__ = (((this$ == null))?null:this$);
var m__22303__auto__ = (com.rpl.specter.protocols.collect_val[goog.typeOf(x__22302__auto__)]);
if(!((m__22303__auto__ == null))){
return m__22303__auto__.call(null,this$,structure);
} else {
var m__22303__auto____$1 = (com.rpl.specter.protocols.collect_val["_"]);
if(!((m__22303__auto____$1 == null))){
return m__22303__auto____$1.call(null,this$,structure);
} else {
throw cljs.core.missing_protocol.call(null,"Collector.collect-val",this$);
}
}
}
});


//# sourceMappingURL=protocols.js.map?rel=1471419407221