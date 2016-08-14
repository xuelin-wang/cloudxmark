// Compiled by ClojureScript 1.9.198 {}
goog.provide('cljs.spec');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.walk');
goog.require('cljs.spec.impl.gen');
goog.require('clojure.string');
cljs.spec.MAX_INT = (9007199254740991);
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_check_limit_STAR_ = (101);
/**
 * The number of errors reported by explain in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_error_limit_STAR_ = (20);

/**
 * @interface
 */
cljs.spec.Spec = function(){};

cljs.spec.conform_STAR_ = (function cljs$spec$conform_STAR_(spec,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$conform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__22303__auto__ = (((spec == null))?null:spec);
var m__22304__auto__ = (cljs.spec.conform_STAR_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,spec,x);
} else {
var m__22304__auto____$1 = (cljs.spec.conform_STAR_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,spec,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.conform*",spec);
}
}
}
});

cljs.spec.unform_STAR_ = (function cljs$spec$unform_STAR_(spec,y){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$unform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$unform_STAR_$arity$2(spec,y);
} else {
var x__22303__auto__ = (((spec == null))?null:spec);
var m__22304__auto__ = (cljs.spec.unform_STAR_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,spec,y);
} else {
var m__22304__auto____$1 = (cljs.spec.unform_STAR_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,spec,y);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.unform*",spec);
}
}
}
});

cljs.spec.explain_STAR_ = (function cljs$spec$explain_STAR_(spec,path,via,in$,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$explain_STAR_$arity$5 == null)))){
return spec.cljs$spec$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__22303__auto__ = (((spec == null))?null:spec);
var m__22304__auto__ = (cljs.spec.explain_STAR_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,spec,path,via,in$,x);
} else {
var m__22304__auto____$1 = (cljs.spec.explain_STAR_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,spec,path,via,in$,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.explain*",spec);
}
}
}
});

cljs.spec.gen_STAR_ = (function cljs$spec$gen_STAR_(spec,overrides,path,rmap){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$gen_STAR_$arity$4 == null)))){
return spec.cljs$spec$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__22303__auto__ = (((spec == null))?null:spec);
var m__22304__auto__ = (cljs.spec.gen_STAR_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,spec,overrides,path,rmap);
} else {
var m__22304__auto____$1 = (cljs.spec.gen_STAR_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,spec,overrides,path,rmap);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.gen*",spec);
}
}
}
});

cljs.spec.with_gen_STAR_ = (function cljs$spec$with_gen_STAR_(spec,gfn){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$with_gen_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__22303__auto__ = (((spec == null))?null:spec);
var m__22304__auto__ = (cljs.spec.with_gen_STAR_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,spec,gfn);
} else {
var m__22304__auto____$1 = (cljs.spec.with_gen_STAR_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,spec,gfn);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.with-gen*",spec);
}
}
}
});

cljs.spec.describe_STAR_ = (function cljs$spec$describe_STAR_(spec){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$describe_STAR_$arity$1 == null)))){
return spec.cljs$spec$Spec$describe_STAR_$arity$1(spec);
} else {
var x__22303__auto__ = (((spec == null))?null:spec);
var m__22304__auto__ = (cljs.spec.describe_STAR_[goog.typeOf(x__22303__auto__)]);
if(!((m__22304__auto__ == null))){
return m__22304__auto__.call(null,spec);
} else {
var m__22304__auto____$1 = (cljs.spec.describe_STAR_["_"]);
if(!((m__22304__auto____$1 == null))){
return m__22304__auto____$1.call(null,spec);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.describe*",spec);
}
}
}
});

if(typeof cljs.spec.registry_ref !== 'undefined'){
} else {
cljs.spec.registry_ref = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.named_QMARK_ = (function cljs$spec$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || (x.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.spec.with_name = (function cljs$spec$with_name(spec,name){
return cljs.core.with_meta.call(null,spec,cljs.core.assoc.call(null,cljs.core.meta.call(null,spec),new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006),name));
});
cljs.spec.spec_name = (function cljs$spec$spec_name(spec){
if((spec instanceof cljs.core.Keyword)){
return spec;
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || (spec.cljs$core$IMeta$))?true:false):false)){
return new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,spec));
} else {
return null;
}
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not Named
 */
cljs.spec.reg_resolve = (function cljs$spec$reg_resolve(k){
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,k))){
var reg = cljs.core.deref.call(null,cljs.spec.registry_ref);
var spec = k;
while(true){
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,spec))){
var G__39463 = cljs.core.get.call(null,reg,spec);
spec = G__39463;
continue;
} else {
if(cljs.core.truth_(spec)){
return cljs.spec.with_name.call(null,spec,k);
} else {
return null;
}
}
break;
}
} else {
return k;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, throws if not found, k if k not ident
 */
cljs.spec.reg_resolve_BANG_ = (function cljs$spec$reg_resolve_BANG_(k){
if(cljs.core.ident_QMARK_.call(null,k)){
var or__21590__auto__ = cljs.spec.reg_resolve.call(null,k);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
throw (new Error([cljs.core.str("Unable to resolve spec: "),cljs.core.str(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.spec_QMARK_ = (function cljs$spec$spec_QMARK_(x){
var and__21578__auto__ = ((!((x == null)))?(((false) || (x.cljs$spec$Spec$))?true:false):false);
if(and__21578__auto__){
return x;
} else {
return and__21578__auto__;
}
});
/**
 * returns x if x is a (clojure.spec) regex op, else logical false
 */
cljs.spec.regex_QMARK_ = (function cljs$spec$regex_QMARK_(x){
var and__21578__auto__ = new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__21578__auto__)){
return x;
} else {
return and__21578__auto__;
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.maybe_spec = (function cljs$spec$maybe_spec(spec_or_k){
var s = (function (){var or__21590__auto__ = cljs.spec.spec_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
var or__21590__auto____$1 = cljs.spec.regex_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__21590__auto____$1)){
return or__21590__auto____$1;
} else {
var or__21590__auto____$2 = (function (){var and__21578__auto__ = cljs.spec.named_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(and__21578__auto__)){
return cljs.spec.reg_resolve.call(null,spec_or_k);
} else {
return and__21578__auto__;
}
})();
if(cljs.core.truth_(or__21590__auto____$2)){
return or__21590__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,s))){
return cljs.spec.with_name.call(null,cljs.spec.regex_spec_impl.call(null,s,null),cljs.spec.spec_name.call(null,s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.the_spec = (function cljs$spec$the_spec(spec_or_k){
var or__21590__auto__ = cljs.spec.maybe_spec.call(null,spec_or_k);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,spec_or_k))){
throw (new Error([cljs.core.str("Unable to resolve spec: "),cljs.core.str(spec_or_k)].join('')));
} else {
return null;
}
}
});
cljs.spec.specize = (function cljs$spec$specize(s){
var or__21590__auto__ = cljs.spec.the_spec.call(null,s);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.spec.spec_impl.call(null,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582),s,null,null);
}
});
/**
 * Given a spec and a value, returns :clojure.spec/invalid if value does not match spec,
 *   else the (possibly destructured) value.
 */
cljs.spec.conform = (function cljs$spec$conform(spec,x){
return cljs.spec.conform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.unform = (function cljs$spec$unform(spec,x){
return cljs.spec.unform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.form = (function cljs$spec$form(spec){
return cljs.spec.describe_STAR_.call(null,cljs.spec.specize.call(null,spec));
});
cljs.spec.abbrev = (function cljs$spec$abbrev(form){
if(cljs.core.seq_QMARK_.call(null,form)){
return clojure.walk.postwalk.call(null,(function (form__$1){
if(cljs.core.truth_((function (){var and__21578__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__21578__auto__){
return cljs.core.namespace.call(null,form__$1);
} else {
return and__21578__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form__$1));
} else {
if((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.first.call(null,form__$1))) && (cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.second.call(null,form__$1)))){
return cljs.core.last.call(null,form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__21578__auto__ = (form instanceof cljs.core.Symbol);
if(and__21578__auto__){
return cljs.core.namespace.call(null,form);
} else {
return and__21578__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.describe = (function cljs$spec$describe(spec){
return cljs.spec.abbrev.call(null,cljs.spec.form.call(null,spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.with_gen = (function cljs$spec$with_gen(spec,gen_fn){
var spec__$1 = cljs.spec.reg_resolve.call(null,spec);
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,spec__$1))){
return cljs.core.assoc.call(null,spec__$1,new cljs.core.Keyword("cljs.spec","gfn","cljs.spec/gfn",-432034727),gen_fn);
} else {
return cljs.spec.with_gen_STAR_.call(null,cljs.spec.specize.call(null,spec__$1),gen_fn);
}
});
cljs.spec.explain_data_STAR_ = (function cljs$spec$explain_data_STAR_(spec,path,via,in$,x){
var temp__6503__auto__ = cljs.spec.explain_STAR_.call(null,cljs.spec.specize.call(null,spec),path,via,in$,x);
if(cljs.core.truth_(temp__6503__auto__)){
var probs = temp__6503__auto__;
if(cljs.core.empty_QMARK_.call(null,probs)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),probs], null);
}
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a collection of problem-maps, where problem-map has at least :path :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.explain_data = (function cljs$spec$explain_data(spec,x){
return cljs.spec.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__6501__auto__ = cljs.spec.spec_name.call(null,spec);
if(cljs.core.truth_(temp__6501__auto__)){
var name = temp__6501__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * prints an explanation to *out*.
 */
cljs.spec.explain_out = (function cljs$spec$explain_out(ed){
if(cljs.core.truth_(ed)){
return cljs.core.print.call(null,(function (){var sb__22674__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_39508_39548 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_39509_39549 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_39508_39548,_STAR_print_fn_STAR_39509_39549,sb__22674__auto__){
return (function (x__22675__auto__){
return sb__22674__auto__.append(x__22675__auto__);
});})(_STAR_print_newline_STAR_39508_39548,_STAR_print_fn_STAR_39509_39549,sb__22674__auto__))
;

try{var seq__39510_39550 = cljs.core.seq.call(null,new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678).cljs$core$IFn$_invoke$arity$1(ed));
var chunk__39511_39551 = null;
var count__39512_39552 = (0);
var i__39513_39553 = (0);
while(true){
if((i__39513_39553 < count__39512_39552)){
var map__39514_39554 = cljs.core._nth.call(null,chunk__39511_39551,i__39513_39553);
var map__39514_39555__$1 = ((((!((map__39514_39554 == null)))?((((map__39514_39554.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39514_39554.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39514_39554):map__39514_39554);
var prob_39556 = map__39514_39555__$1;
var path_39557 = cljs.core.get.call(null,map__39514_39555__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_39558 = cljs.core.get.call(null,map__39514_39555__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_39559 = cljs.core.get.call(null,map__39514_39555__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_39560 = cljs.core.get.call(null,map__39514_39555__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_39561 = cljs.core.get.call(null,map__39514_39555__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_39562 = cljs.core.get.call(null,map__39514_39555__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_39562)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_39562),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_39559);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_39561)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_39561)));
}

if(cljs.core.empty_QMARK_.call(null,path_39557)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_39557));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,cljs.spec.abbrev.call(null,pred_39558));

if(cljs.core.truth_(reason_39560)){
cljs.core.print.call(null,", ",reason_39560);
} else {
}

var seq__39516_39563 = cljs.core.seq.call(null,prob_39556);
var chunk__39517_39564 = null;
var count__39518_39565 = (0);
var i__39519_39566 = (0);
while(true){
if((i__39519_39566 < count__39518_39565)){
var vec__39520_39567 = cljs.core._nth.call(null,chunk__39517_39564,i__39519_39566);
var k_39568 = cljs.core.nth.call(null,vec__39520_39567,(0),null);
var v_39569 = cljs.core.nth.call(null,vec__39520_39567,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_39568))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_39568)," ");

cljs.core.pr.call(null,v_39569);
}

var G__39570 = seq__39516_39563;
var G__39571 = chunk__39517_39564;
var G__39572 = count__39518_39565;
var G__39573 = (i__39519_39566 + (1));
seq__39516_39563 = G__39570;
chunk__39517_39564 = G__39571;
count__39518_39565 = G__39572;
i__39519_39566 = G__39573;
continue;
} else {
var temp__6503__auto___39574 = cljs.core.seq.call(null,seq__39516_39563);
if(temp__6503__auto___39574){
var seq__39516_39575__$1 = temp__6503__auto___39574;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39516_39575__$1)){
var c__22493__auto___39576 = cljs.core.chunk_first.call(null,seq__39516_39575__$1);
var G__39577 = cljs.core.chunk_rest.call(null,seq__39516_39575__$1);
var G__39578 = c__22493__auto___39576;
var G__39579 = cljs.core.count.call(null,c__22493__auto___39576);
var G__39580 = (0);
seq__39516_39563 = G__39577;
chunk__39517_39564 = G__39578;
count__39518_39565 = G__39579;
i__39519_39566 = G__39580;
continue;
} else {
var vec__39523_39581 = cljs.core.first.call(null,seq__39516_39575__$1);
var k_39582 = cljs.core.nth.call(null,vec__39523_39581,(0),null);
var v_39583 = cljs.core.nth.call(null,vec__39523_39581,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_39582))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_39582)," ");

cljs.core.pr.call(null,v_39583);
}

var G__39584 = cljs.core.next.call(null,seq__39516_39575__$1);
var G__39585 = null;
var G__39586 = (0);
var G__39587 = (0);
seq__39516_39563 = G__39584;
chunk__39517_39564 = G__39585;
count__39518_39565 = G__39586;
i__39519_39566 = G__39587;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__39588 = seq__39510_39550;
var G__39589 = chunk__39511_39551;
var G__39590 = count__39512_39552;
var G__39591 = (i__39513_39553 + (1));
seq__39510_39550 = G__39588;
chunk__39511_39551 = G__39589;
count__39512_39552 = G__39590;
i__39513_39553 = G__39591;
continue;
} else {
var temp__6503__auto___39592 = cljs.core.seq.call(null,seq__39510_39550);
if(temp__6503__auto___39592){
var seq__39510_39593__$1 = temp__6503__auto___39592;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39510_39593__$1)){
var c__22493__auto___39594 = cljs.core.chunk_first.call(null,seq__39510_39593__$1);
var G__39595 = cljs.core.chunk_rest.call(null,seq__39510_39593__$1);
var G__39596 = c__22493__auto___39594;
var G__39597 = cljs.core.count.call(null,c__22493__auto___39594);
var G__39598 = (0);
seq__39510_39550 = G__39595;
chunk__39511_39551 = G__39596;
count__39512_39552 = G__39597;
i__39513_39553 = G__39598;
continue;
} else {
var map__39526_39599 = cljs.core.first.call(null,seq__39510_39593__$1);
var map__39526_39600__$1 = ((((!((map__39526_39599 == null)))?((((map__39526_39599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39526_39599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39526_39599):map__39526_39599);
var prob_39601 = map__39526_39600__$1;
var path_39602 = cljs.core.get.call(null,map__39526_39600__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_39603 = cljs.core.get.call(null,map__39526_39600__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_39604 = cljs.core.get.call(null,map__39526_39600__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_39605 = cljs.core.get.call(null,map__39526_39600__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_39606 = cljs.core.get.call(null,map__39526_39600__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_39607 = cljs.core.get.call(null,map__39526_39600__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_39607)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_39607),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_39604);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_39606)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_39606)));
}

if(cljs.core.empty_QMARK_.call(null,path_39602)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_39602));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,cljs.spec.abbrev.call(null,pred_39603));

if(cljs.core.truth_(reason_39605)){
cljs.core.print.call(null,", ",reason_39605);
} else {
}

var seq__39528_39608 = cljs.core.seq.call(null,prob_39601);
var chunk__39529_39609 = null;
var count__39530_39610 = (0);
var i__39531_39611 = (0);
while(true){
if((i__39531_39611 < count__39530_39610)){
var vec__39532_39612 = cljs.core._nth.call(null,chunk__39529_39609,i__39531_39611);
var k_39613 = cljs.core.nth.call(null,vec__39532_39612,(0),null);
var v_39614 = cljs.core.nth.call(null,vec__39532_39612,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_39613))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_39613)," ");

cljs.core.pr.call(null,v_39614);
}

var G__39615 = seq__39528_39608;
var G__39616 = chunk__39529_39609;
var G__39617 = count__39530_39610;
var G__39618 = (i__39531_39611 + (1));
seq__39528_39608 = G__39615;
chunk__39529_39609 = G__39616;
count__39530_39610 = G__39617;
i__39531_39611 = G__39618;
continue;
} else {
var temp__6503__auto___39619__$1 = cljs.core.seq.call(null,seq__39528_39608);
if(temp__6503__auto___39619__$1){
var seq__39528_39620__$1 = temp__6503__auto___39619__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39528_39620__$1)){
var c__22493__auto___39621 = cljs.core.chunk_first.call(null,seq__39528_39620__$1);
var G__39622 = cljs.core.chunk_rest.call(null,seq__39528_39620__$1);
var G__39623 = c__22493__auto___39621;
var G__39624 = cljs.core.count.call(null,c__22493__auto___39621);
var G__39625 = (0);
seq__39528_39608 = G__39622;
chunk__39529_39609 = G__39623;
count__39530_39610 = G__39624;
i__39531_39611 = G__39625;
continue;
} else {
var vec__39535_39626 = cljs.core.first.call(null,seq__39528_39620__$1);
var k_39627 = cljs.core.nth.call(null,vec__39535_39626,(0),null);
var v_39628 = cljs.core.nth.call(null,vec__39535_39626,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_39627))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_39627)," ");

cljs.core.pr.call(null,v_39628);
}

var G__39629 = cljs.core.next.call(null,seq__39528_39620__$1);
var G__39630 = null;
var G__39631 = (0);
var G__39632 = (0);
seq__39528_39608 = G__39629;
chunk__39529_39609 = G__39630;
count__39530_39610 = G__39631;
i__39531_39611 = G__39632;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__39633 = cljs.core.next.call(null,seq__39510_39593__$1);
var G__39634 = null;
var G__39635 = (0);
var G__39636 = (0);
seq__39510_39550 = G__39633;
chunk__39511_39551 = G__39634;
count__39512_39552 = G__39635;
i__39513_39553 = G__39636;
continue;
}
} else {
}
}
break;
}

var seq__39538_39637 = cljs.core.seq.call(null,ed);
var chunk__39539_39638 = null;
var count__39540_39639 = (0);
var i__39541_39640 = (0);
while(true){
if((i__39541_39640 < count__39540_39639)){
var vec__39542_39641 = cljs.core._nth.call(null,chunk__39539_39638,i__39541_39640);
var k_39642 = cljs.core.nth.call(null,vec__39542_39641,(0),null);
var v_39643 = cljs.core.nth.call(null,vec__39542_39641,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_39642))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_39642)," ");

cljs.core.pr.call(null,v_39643);

cljs.core.newline.call(null);
}

var G__39644 = seq__39538_39637;
var G__39645 = chunk__39539_39638;
var G__39646 = count__39540_39639;
var G__39647 = (i__39541_39640 + (1));
seq__39538_39637 = G__39644;
chunk__39539_39638 = G__39645;
count__39540_39639 = G__39646;
i__39541_39640 = G__39647;
continue;
} else {
var temp__6503__auto___39648 = cljs.core.seq.call(null,seq__39538_39637);
if(temp__6503__auto___39648){
var seq__39538_39649__$1 = temp__6503__auto___39648;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39538_39649__$1)){
var c__22493__auto___39650 = cljs.core.chunk_first.call(null,seq__39538_39649__$1);
var G__39651 = cljs.core.chunk_rest.call(null,seq__39538_39649__$1);
var G__39652 = c__22493__auto___39650;
var G__39653 = cljs.core.count.call(null,c__22493__auto___39650);
var G__39654 = (0);
seq__39538_39637 = G__39651;
chunk__39539_39638 = G__39652;
count__39540_39639 = G__39653;
i__39541_39640 = G__39654;
continue;
} else {
var vec__39545_39655 = cljs.core.first.call(null,seq__39538_39649__$1);
var k_39656 = cljs.core.nth.call(null,vec__39545_39655,(0),null);
var v_39657 = cljs.core.nth.call(null,vec__39545_39655,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_39656))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_39656)," ");

cljs.core.pr.call(null,v_39657);

cljs.core.newline.call(null);
}

var G__39658 = cljs.core.next.call(null,seq__39538_39649__$1);
var G__39659 = null;
var G__39660 = (0);
var G__39661 = (0);
seq__39538_39637 = G__39658;
chunk__39539_39638 = G__39659;
count__39540_39639 = G__39660;
i__39541_39640 = G__39661;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_39509_39549;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_39508_39548;
}
return [cljs.core.str(sb__22674__auto__)].join('');
})());
} else {
return cljs.core.println.call(null,"Success!");
}
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.explain = (function cljs$spec$explain(spec,x){
return cljs.spec.explain_out.call(null,cljs.spec.explain_data.call(null,spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.explain_str = (function cljs$spec$explain_str(spec,x){
var sb__22674__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_39664_39666 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_39665_39667 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_39664_39666,_STAR_print_fn_STAR_39665_39667,sb__22674__auto__){
return (function (x__22675__auto__){
return sb__22674__auto__.append(x__22675__auto__);
});})(_STAR_print_newline_STAR_39664_39666,_STAR_print_fn_STAR_39665_39667,sb__22674__auto__))
;

try{cljs.spec.explain.call(null,spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_39665_39667;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_39664_39666;
}
return [cljs.core.str(sb__22674__auto__)].join('');
});
cljs.spec.gensub = (function cljs$spec$gensub(spec,overrides,path,rmap,form){
var spec__$1 = cljs.spec.specize.call(null,spec);
var temp__6501__auto__ = (function (){var or__21590__auto__ = (function (){var temp__6503__auto__ = (function (){var or__21590__auto__ = cljs.core.get.call(null,overrides,(function (){var or__21590__auto__ = cljs.spec.spec_name.call(null,spec__$1);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return spec__$1;
}
})());
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.core.get.call(null,overrides,path);
}
})();
if(cljs.core.truth_(temp__6503__auto__)){
var gfn = temp__6503__auto__;
return gfn.call(null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.spec.gen_STAR_.call(null,spec__$1,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__6501__auto__)){
var g = temp__6501__auto__;
return cljs.spec.impl.gen.such_that.call(null,((function (g,temp__6501__auto__,spec__$1){
return (function (p1__39668_SHARP_){
return cljs.spec.valid_QMARK_.call(null,spec__$1,p1__39668_SHARP_);
});})(g,temp__6501__auto__,spec__$1))
,g,(100));
} else {
throw (new Error([cljs.core.str("Unable to construct gen at: "),cljs.core.str(path),cljs.core.str(" for: "),cljs.core.str(cljs.spec.abbrev.call(null,form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map spec names or paths (vectors of keywords) to no-arg
 *   generator-creating fns. These will be used instead of the generators at those
 *   names/paths. Note that parent generator (in the spec or overrides
 *   map) will supersede those of any subtrees. A generator for a regex
 *   op must always return a sequential collection (i.e. a generator for
 *   s/? should return either an empty sequence/vector or a
 *   sequence/vector with one item in it)
 */
cljs.spec.gen = (function cljs$spec$gen(var_args){
var args39669 = [];
var len__22773__auto___39672 = arguments.length;
var i__22774__auto___39673 = (0);
while(true){
if((i__22774__auto___39673 < len__22773__auto___39672)){
args39669.push((arguments[i__22774__auto___39673]));

var G__39674 = (i__22774__auto___39673 + (1));
i__22774__auto___39673 = G__39674;
continue;
} else {
}
break;
}

var G__39671 = args39669.length;
switch (G__39671) {
case 1:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39669.length)].join('')));

}
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.gen.call(null,spec,null);
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.gensub.call(null,spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086),cljs.spec._STAR_recursion_limit_STAR_], null),spec);
});

cljs.spec.gen.cljs$lang$maxFixedArity = 2;

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.def_impl = (function cljs$spec$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__21578__auto__ = cljs.spec.named_QMARK_.call(null,k);
if(cljs.core.truth_(and__21578__auto__)){
return cljs.core.namespace.call(null,k);
} else {
return and__21578__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("k must be namespaced keyword or resolveable symbol"),cljs.core.str("\n"),cljs.core.str("(c/and (named? k) (namespace k))")].join('')));
}

var spec__$1 = (cljs.core.truth_((function (){var or__21590__auto__ = cljs.spec.spec_QMARK_.call(null,spec);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
var or__21590__auto____$1 = cljs.spec.regex_QMARK_.call(null,spec);
if(cljs.core.truth_(or__21590__auto____$1)){
return or__21590__auto____$1;
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.registry_ref),spec);
}
}
})())?spec:cljs.spec.spec_impl.call(null,form,spec,null,null));
cljs.core.swap_BANG_.call(null,cljs.spec.registry_ref,cljs.core.assoc,k,spec__$1);

return k;
});
/**
 * returns the registry map, prefer 'get-spec' to lookup a spec by name
 */
cljs.spec.registry = (function cljs$spec$registry(){
return cljs.core.deref.call(null,cljs.spec.registry_ref);
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.__GT_sym = (function cljs$spec$__GT_sym(x){
if(cljs.core.var_QMARK_.call(null,x)){
return x.sym;
} else {
return x;
}
});
/**
 * Returns spec registered for keyword/symbol/var k, or nil.
 */
cljs.spec.get_spec = (function cljs$spec$get_spec(k){
return cljs.core.get.call(null,cljs.spec.registry.call(null),(((k instanceof cljs.core.Keyword))?k:cljs.spec.__GT_sym.call(null,k)));
});
cljs.spec.macroexpand_check = (function cljs$spec$macroexpand_check(v,args){
var specs = cljs.spec.get_spec.call(null,v);
var temp__6503__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__6503__auto__)){
var arg_spec = temp__6503__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.conform.call(null,arg_spec,args))){
var ed = cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,arg_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576)], null),(function (){var temp__6501__auto__ = cljs.spec.spec_name.call(null,arg_spec);
if(cljs.core.truth_(temp__6501__auto__)){
var name = temp__6501__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),new cljs.core.Keyword("cljs.spec","args","cljs.spec/args",-367019609),args);
throw (new Error([cljs.core.str("Call to "),cljs.core.str(cljs.spec.__GT_sym.call(null,v)),cljs.core.str(" did not conform to spec:\n"),cljs.core.str((function (){var sb__22674__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_39678_39680 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_39679_39681 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_39678_39680,_STAR_print_fn_STAR_39679_39681,sb__22674__auto__,ed,arg_spec,temp__6503__auto__,specs){
return (function (x__22675__auto__){
return sb__22674__auto__.append(x__22675__auto__);
});})(_STAR_print_newline_STAR_39678_39680,_STAR_print_fn_STAR_39679_39681,sb__22674__auto__,ed,arg_spec,temp__6503__auto__,specs))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_39679_39681;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_39678_39680;
}
return [cljs.core.str(sb__22674__auto__)].join('');
})())].join('')));
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.recur_limit_QMARK_ = (function cljs$spec$recur_limit_QMARK_(rmap,id,path,k){
return ((cljs.core.get.call(null,rmap,id) > new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086).cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,path),k));
});
cljs.spec.inck = (function cljs$spec$inck(m,k){
return cljs.core.assoc.call(null,m,k,((function (){var or__21590__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.dt = (function cljs$spec$dt(var_args){
var args39682 = [];
var len__22773__auto___39685 = arguments.length;
var i__22774__auto___39686 = (0);
while(true){
if((i__22774__auto___39686 < len__22773__auto___39685)){
args39682.push((arguments[i__22774__auto___39686]));

var G__39687 = (i__22774__auto___39686 + (1));
i__22774__auto___39686 = G__39687;
continue;
} else {
}
break;
}

var G__39684 = args39682.length;
switch (G__39684) {
case 3:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39682.length)].join('')));

}
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.dt.call(null,pred,x,form,null);
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__6501__auto__ = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(temp__6501__auto__)){
var spec = temp__6501__auto__;
return cljs.spec.conform.call(null,spec,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return pred.call(null,x);
} else {
if(cljs.core.truth_(pred.call(null,x))){
return x;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
} else {
throw (new Error([cljs.core.str(cljs.core.pr_str.call(null,form)),cljs.core.str(" is not a fn, expected predicate fn")].join('')));
}
}
} else {
return x;
}
});

cljs.spec.dt.cljs$lang$maxFixedArity = 4;

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.valid_QMARK_ = (function cljs$spec$valid_QMARK_(var_args){
var args39689 = [];
var len__22773__auto___39692 = arguments.length;
var i__22774__auto___39693 = (0);
while(true){
if((i__22774__auto___39693 < len__22773__auto___39692)){
args39689.push((arguments[i__22774__auto___39693]));

var G__39694 = (i__22774__auto___39693 + (1));
i__22774__auto___39693 = G__39694;
continue;
} else {
}
break;
}

var G__39691 = args39689.length;
switch (G__39691) {
case 2:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39689.length)].join('')));

}
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,spec,x,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582)));
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,spec,x,form));
});

cljs.spec.valid_QMARK_.cljs$lang$maxFixedArity = 3;

cljs.spec.explain_1 = (function cljs$spec$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.maybe_spec.call(null,pred);
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred__$1))){
return cljs.spec.explain_STAR_.call(null,pred__$1,path,(function (){var temp__6501__auto__ = cljs.spec.spec_name.call(null,pred__$1);
if(cljs.core.truth_(temp__6501__auto__)){
var name = temp__6501__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})(),in$,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form),new cljs.core.Keyword(null,"val","val",128701612),v,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.map_spec_impl = (function cljs$spec$map_spec_impl(p__39699){
var map__39730 = p__39699;
var map__39730__$1 = ((((!((map__39730 == null)))?((((map__39730.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39730.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39730):map__39730);
var argm = map__39730__$1;
var opt = cljs.core.get.call(null,map__39730__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.call(null,map__39730__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.call(null,map__39730__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var gfn = cljs.core.get.call(null,map__39730__$1,new cljs.core.Keyword(null,"gfn","gfn",791517474));
var pred_exprs = cljs.core.get.call(null,map__39730__$1,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395));
var opt_keys = cljs.core.get.call(null,map__39730__$1,new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261));
var req_specs = cljs.core.get.call(null,map__39730__$1,new cljs.core.Keyword(null,"req-specs","req-specs",553962313));
var req = cljs.core.get.call(null,map__39730__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_keys = cljs.core.get.call(null,map__39730__$1,new cljs.core.Keyword(null,"req-keys","req-keys",514319221));
var opt_specs = cljs.core.get.call(null,map__39730__$1,new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450));
var pred_forms = cljs.core.get.call(null,map__39730__$1,new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832));
var keys_pred = cljs.core.apply.call(null,cljs.core.every_pred,pred_exprs);
var k__GT_s = cljs.core.zipmap.call(null,cljs.core.concat.call(null,req_keys,opt_keys),cljs.core.concat.call(null,req_specs,opt_specs));
var keys__GT_specs = ((function (keys_pred,k__GT_s,map__39730,map__39730__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__39696_SHARP_){
var or__21590__auto__ = k__GT_s.call(null,p1__39696_SHARP_);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return p1__39696_SHARP_;
}
});})(keys_pred,k__GT_s,map__39730,map__39730__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid.call(null);
if(typeof cljs.spec.t_cljs$spec39732 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec39732 = (function (opt,map_spec_impl,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,map__39730,keys__GT_specs,req,id,p__39699,req_keys,opt_specs,k__GT_s,pred_forms,meta39733){
this.opt = opt;
this.map_spec_impl = map_spec_impl;
this.req_un = req_un;
this.opt_un = opt_un;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.req_specs = req_specs;
this.map__39730 = map__39730;
this.keys__GT_specs = keys__GT_specs;
this.req = req;
this.id = id;
this.p__39699 = p__39699;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta39733 = meta39733;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec39732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__39730,map__39730__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_39734,meta39733__$1){
var self__ = this;
var _39734__$1 = this;
return (new cljs.spec.t_cljs$spec39732(self__.opt,self__.map_spec_impl,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.req_specs,self__.map__39730,self__.keys__GT_specs,self__.req,self__.id,self__.p__39699,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta39733__$1));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__39730,map__39730__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec39732.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__39730,map__39730__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_39734){
var self__ = this;
var _39734__$1 = this;
return self__.meta39733;
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__39730,map__39730__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec39732.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec39732.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__39730,map__39730__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys_pred.call(null,m))){
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__39738 = cljs.core.keys.call(null,m);
var vec__39739 = G__39738;
var seq__39740 = cljs.core.seq.call(null,vec__39739);
var first__39741 = cljs.core.first.call(null,seq__39740);
var seq__39740__$1 = cljs.core.next.call(null,seq__39740);
var k = first__39741;
var ks = seq__39740__$1;
var keys = vec__39739;
var ret__$1 = ret;
var G__39738__$1 = G__39738;
while(true){
var ret__$2 = ret__$1;
var vec__39742 = G__39738__$1;
var seq__39743 = cljs.core.seq.call(null,vec__39742);
var first__39744 = cljs.core.first.call(null,seq__39743);
var seq__39743__$1 = cljs.core.next.call(null,seq__39743);
var k__$1 = first__39744;
var ks__$1 = seq__39743__$1;
var keys__$1 = vec__39742;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k__$1))){
var v = cljs.core.get.call(null,m,k__$1);
var cv = cljs.spec.conform.call(null,self__.keys__GT_specs.call(null,k__$1),v);
if(cljs.core._EQ_.call(null,cv,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__39760 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,cv));
var G__39761 = ks__$1;
ret__$1 = G__39760;
G__39738__$1 = G__39761;
continue;
}
} else {
var G__39762 = ret__$2;
var G__39763 = ks__$1;
ret__$1 = G__39762;
G__39738__$1 = G__39763;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__39730,map__39730__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec39732.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__39730,map__39730__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__39748 = cljs.core.keys.call(null,m);
var vec__39749 = G__39748;
var seq__39750 = cljs.core.seq.call(null,vec__39749);
var first__39751 = cljs.core.first.call(null,seq__39750);
var seq__39750__$1 = cljs.core.next.call(null,seq__39750);
var k = first__39751;
var ks = seq__39750__$1;
var keys = vec__39749;
var ret__$1 = ret;
var G__39748__$1 = G__39748;
while(true){
var ret__$2 = ret__$1;
var vec__39752 = G__39748__$1;
var seq__39753 = cljs.core.seq.call(null,vec__39752);
var first__39754 = cljs.core.first.call(null,seq__39753);
var seq__39753__$1 = cljs.core.next.call(null,seq__39753);
var k__$1 = first__39754;
var ks__$1 = seq__39753__$1;
var keys__$1 = vec__39752;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k__$1))){
var cv = cljs.core.get.call(null,m,k__$1);
var v = cljs.spec.unform.call(null,self__.keys__GT_specs.call(null,k__$1),cv);
var G__39764 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,v));
var G__39765 = ks__$1;
ret__$1 = G__39764;
G__39748__$1 = G__39765;
continue;
} else {
var G__39766 = ret__$2;
var G__39767 = ks__$1;
ret__$1 = G__39766;
G__39748__$1 = G__39767;
continue;
}
} else {
return ret__$2;
}
break;
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__39730,map__39730__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec39732.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__39730,map__39730__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.map_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var reg = cljs.spec.registry.call(null);
return cljs.core.apply.call(null,cljs.core.concat,(function (){var temp__6503__auto__ = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__39730,map__39730__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_(pred.call(null,x))){
return null;
} else {
return cljs.spec.abbrev.call(null,form);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__39730,map__39730__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__6503__auto__){
var probs = temp__6503__auto__;
return cljs.core.map.call(null,((function (probs,temp__6503__auto__,reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__39730,map__39730__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__39697_SHARP_){
return cljs.core.identity.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),p1__39697_SHARP_,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
});})(probs,temp__6503__auto__,reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__39730,map__39730__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,probs);
} else {
return null;
}
})(),cljs.core.map.call(null,((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__39730,map__39730__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__39755){
var vec__39756 = p__39755;
var k = cljs.core.nth.call(null,vec__39756,(0),null);
var v = cljs.core.nth.call(null,vec__39756,(1),null);
if(cljs.core.truth_((function (){var or__21590__auto__ = !(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k)));
if(or__21590__auto__){
return or__21590__auto__;
} else {
return cljs.spec.valid_QMARK_.call(null,self__.keys__GT_specs.call(null,k),v,k);
}
})())){
return null;
} else {
return cljs.spec.explain_1.call(null,self__.keys__GT_specs.call(null,k),self__.keys__GT_specs.call(null,k),cljs.core.conj.call(null,path,k),via,cljs.core.conj.call(null,in$,k),v);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__39730,map__39730__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq.call(null,x)));
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__39730,map__39730__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec39732.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__39730,map__39730__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
var gen = ((function (rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__39730,map__39730__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__39730,map__39730__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__39730,map__39730__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__39730,map__39730__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__39730,map__39730__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__39730,map__39730__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var req_gens = cljs.core.map.call(null,gen,self__.req_keys,self__.req_specs);
var opt_gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.concat.call(null,req_gens,opt_gens))){
var reqs = cljs.core.zipmap.call(null,self__.req_keys,req_gens);
var opts = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,opt_gens);
return cljs.spec.impl.gen.bind.call(null,cljs.spec.impl.gen.choose.call(null,(0),cljs.core.count.call(null,opts)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__39730,map__39730__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__39698_SHARP_){
var args = cljs.core.concat.call(null,cljs.core.seq.call(null,reqs),((cljs.core.seq.call(null,opts))?cljs.core.shuffle.call(null,cljs.core.seq.call(null,opts)):null));
return cljs.core.apply.call(null,cljs.spec.impl.gen.hash_map,cljs.core.apply.call(null,cljs.core.concat,cljs.core.take.call(null,(p1__39698_SHARP_ + cljs.core.count.call(null,reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__39730,map__39730__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
);
} else {
return null;
}
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__39730,map__39730__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec39732.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__39730,map__39730__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.map_spec_impl.call(null,cljs.core.assoc.call(null,self__.argm,new cljs.core.Keyword(null,"gfn","gfn",791517474),gfn__$1));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__39730,map__39730__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec39732.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__39730,map__39730__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),(function (){var G__39759 = cljs.core.PersistentVector.EMPTY;
var G__39759__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.call(null,G__39759,new cljs.core.Keyword(null,"req","req",-326448303),self__.req):G__39759);
var G__39759__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.call(null,G__39759__$1,new cljs.core.Keyword(null,"opt","opt",-794706369),self__.opt):G__39759__$1);
var G__39759__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.call(null,G__39759__$2,new cljs.core.Keyword(null,"req-un","req-un",1074571008),self__.req_un):G__39759__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.call(null,G__39759__$3,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),self__.opt_un);
} else {
return G__39759__$3;
}
})());
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__39730,map__39730__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec39732.getBasis = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__39730,map__39730__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opt","opt",845825158,null),cljs.core.with_meta(new cljs.core.Symbol(null,"map-spec-impl","map-spec-impl",-1682885722,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"opt","opt",845825158,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"argm","argm",-181546357,null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'spec' with a map argument"], null)),new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"keys-pred","keys-pred",-1795451030,null),new cljs.core.Symbol(null,"argm","argm",-181546357,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"map__39730","map__39730",404453077,null),new cljs.core.Symbol(null,"keys->specs","keys->specs",-97897643,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"p__39699","p__39699",-1947437637,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"k->s","k->s",-1685112801,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"meta39733","meta39733",-1504378805,null)], null);
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__39730,map__39730__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec39732.cljs$lang$type = true;

cljs.spec.t_cljs$spec39732.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec39732";

cljs.spec.t_cljs$spec39732.cljs$lang$ctorPrWriter = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__39730,map__39730__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.spec/t_cljs$spec39732");
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__39730,map__39730__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.__GT_t_cljs$spec39732 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__39730,map__39730__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$map_spec_impl_$___GT_t_cljs$spec39732(opt__$1,map_spec_impl__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,map__39730__$2,keys__GT_specs__$1,req__$1,id__$1,p__39699__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta39733){
return (new cljs.spec.t_cljs$spec39732(opt__$1,map_spec_impl__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,map__39730__$2,keys__GT_specs__$1,req__$1,id__$1,p__39699__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta39733));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__39730,map__39730__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.t_cljs$spec39732(opt,cljs$spec$map_spec_impl,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,map__39730__$1,keys__GT_specs,req,id,p__39699,req_keys,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.spec_impl = (function cljs$spec$spec_impl(var_args){
var args39768 = [];
var len__22773__auto___39776 = arguments.length;
var i__22774__auto___39777 = (0);
while(true){
if((i__22774__auto___39777 < len__22773__auto___39776)){
args39768.push((arguments[i__22774__auto___39777]));

var G__39778 = (i__22774__auto___39777 + (1));
i__22774__auto___39777 = G__39778;
continue;
} else {
}
break;
}

var G__39770 = args39768.length;
switch (G__39770) {
case 4:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39768.length)].join('')));

}
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.spec_impl.call(null,form,pred,gfn,cpred_QMARK_,null);
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred))){
var G__39771 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen.call(null,G__39771,gfn);
} else {
return G__39771;
}
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,pred))){
return cljs.spec.regex_spec_impl.call(null,pred,gfn);
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,pred))){
var G__39772 = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen.call(null,G__39772,gfn);
} else {
return G__39772;
}
} else {
if(typeof cljs.spec.t_cljs$spec39773 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec39773 = (function (form,pred,gfn,cpred_QMARK_,unc,meta39774){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta39774 = meta39774;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec39773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39775,meta39774__$1){
var self__ = this;
var _39775__$1 = this;
return (new cljs.spec.t_cljs$spec39773(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta39774__$1));
});

cljs.spec.t_cljs$spec39773.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39775){
var self__ = this;
var _39775__$1 = this;
return self__.meta39774;
});

cljs.spec.t_cljs$spec39773.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec39773.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_);
});

cljs.spec.t_cljs$spec39773.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.cpred_QMARK_)){
if(cljs.core.truth_(self__.unc)){
return self__.unc.call(null,x);
} else {
throw (new Error("no unform fn for conformer"));
}
} else {
return x;
}
});

cljs.spec.t_cljs$spec39773.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,self__.form),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
});

cljs.spec.t_cljs$spec39773.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.gen_for_pred.call(null,self__.pred);
}
});

cljs.spec.t_cljs$spec39773.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.spec_impl.call(null,self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_);
});

cljs.spec.t_cljs$spec39773.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.t_cljs$spec39773.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"cpred?","cpred?",35589515,null),new cljs.core.Symbol(null,"unc","unc",-465250751,null),new cljs.core.Symbol(null,"meta39774","meta39774",-665283297,null)], null);
});

cljs.spec.t_cljs$spec39773.cljs$lang$type = true;

cljs.spec.t_cljs$spec39773.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec39773";

cljs.spec.t_cljs$spec39773.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.spec/t_cljs$spec39773");
});

cljs.spec.__GT_t_cljs$spec39773 = (function cljs$spec$__GT_t_cljs$spec39773(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta39774){
return (new cljs.spec.t_cljs$spec39773(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta39774));
});

}

return (new cljs.spec.t_cljs$spec39773(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});

cljs.spec.spec_impl.cljs$lang$maxFixedArity = 5;

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.multi_spec_impl = (function cljs$spec$multi_spec_impl(var_args){
var args39785 = [];
var len__22773__auto___39799 = arguments.length;
var i__22774__auto___39800 = (0);
while(true){
if((i__22774__auto___39800 < len__22773__auto___39799)){
args39785.push((arguments[i__22774__auto___39800]));

var G__39801 = (i__22774__auto___39800 + (1));
i__22774__auto___39800 = G__39801;
continue;
} else {
}
break;
}

var G__39787 = args39785.length;
switch (G__39787) {
case 3:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39785.length)].join('')));

}
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.multi_spec_impl.call(null,form,mmvar,retag,null);
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid.call(null);
var predx = ((function (id){
return (function (p1__39780_SHARP_){
var mm = cljs.core.deref.call(null,mmvar);
var and__21578__auto__ = cljs.core.contains_QMARK_.call(null,cljs.core.methods$.call(null,mm),cljs.core._dispatch_fn.call(null,mm).call(null,p1__39780_SHARP_));
if(and__21578__auto__){
return mm.call(null,p1__39780_SHARP_);
} else {
return and__21578__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__39781_SHARP_){
return cljs.core._dispatch_fn.call(null,cljs.core.deref.call(null,mmvar)).call(null,p1__39781_SHARP_);
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__39782_SHARP_,p2__39783_SHARP_){
return cljs.core.assoc.call(null,p1__39782_SHARP_,retag,p2__39783_SHARP_);
});})(id,predx,dval))
:retag);
if(typeof cljs.spec.t_cljs$spec39788 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec39788 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta39789){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta39789 = meta39789;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec39788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_39790,meta39789__$1){
var self__ = this;
var _39790__$1 = this;
return (new cljs.spec.t_cljs$spec39788(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta39789__$1));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec39788.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_39790){
var self__ = this;
var _39790__$1 = this;
return self__.meta39789;
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec39788.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec39788.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__6501__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__6501__auto__)){
var pred = temp__6501__auto__;
return cljs.spec.dt.call(null,pred,x,self__.form);
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec39788.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__6501__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__6501__auto__)){
var pred = temp__6501__auto__;
return cljs.spec.unform.call(null,pred,x);
} else {
throw (new Error([cljs.core.str("No method of: "),cljs.core.str(self__.form),cljs.core.str(" for dispatch value: "),cljs.core.str(self__.dval.call(null,x))].join('')));
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec39788.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = self__.dval.call(null,x);
var path__$1 = cljs.core.conj.call(null,path,dv);
var temp__6501__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__6501__auto__)){
var pred = temp__6501__auto__;
return cljs.spec.explain_1.call(null,self__.form,pred,path__$1,via,in$,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,self__.form),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"reason","reason",-2070751759),"no method",new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec39788.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__39791){
var vec__39792 = p__39791;
var k = cljs.core.nth.call(null,vec__39792,(0),null);
var f = cljs.core.nth.call(null,vec__39792,(1),null);
var p = f.call(null,null);
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,p,vec__39792,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.impl.gen.fmap.call(null,((function (rmap__$1,p,vec__39792,k,f,___$1,id,predx,dval,tag){
return (function (p1__39784_SHARP_){
return self__.tag.call(null,p1__39784_SHARP_,k);
});})(rmap__$1,p,vec__39792,k,f,___$1,id,predx,dval,tag))
,cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,cljs.core._conj.call(null,(function (){var x__22516__auto__ = self__.form;
return cljs.core._conj.call(null,(function (){var x__22516__auto____$1 = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto____$1);
})(),x__22516__auto__);
})(),new cljs.core.Symbol(null,"method","method",1696235119,null))));
});})(rmap__$1,p,vec__39792,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,cljs.core.remove.call(null,((function (gen,___$1,id,predx,dval,tag){
return (function (p__39795){
var vec__39796 = p__39795;
var k = cljs.core.nth.call(null,vec__39796,(0),null);
return cljs.core._EQ_.call(null,k,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
});})(gen,___$1,id,predx,dval,tag))
,cljs.core.methods$.call(null,cljs.core.deref.call(null,self__.mmvar)))));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.spec.impl.gen.one_of.call(null,gs);
} else {
return null;
}
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec39788.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.multi_spec_impl.call(null,self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec39788.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","multi-spec","cljs.spec/multi-spec",-2053297814,null)),(function (){var x__22516__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})())));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec39788.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"mmvar","mmvar",-1714325675,null),new cljs.core.Symbol(null,"retag","retag",528972725,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"predx","predx",2063470948,null),new cljs.core.Symbol(null,"dval","dval",835211877,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta39789","meta39789",1294407054,null)], null);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec39788.cljs$lang$type = true;

cljs.spec.t_cljs$spec39788.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec39788";

cljs.spec.t_cljs$spec39788.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.spec/t_cljs$spec39788");
});})(id,predx,dval,tag))
;

cljs.spec.__GT_t_cljs$spec39788 = ((function (id,predx,dval,tag){
return (function cljs$spec$__GT_t_cljs$spec39788(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta39789){
return (new cljs.spec.t_cljs$spec39788(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta39789));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.t_cljs$spec39788(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.tuple_impl = (function cljs$spec$tuple_impl(var_args){
var args39803 = [];
var len__22773__auto___39809 = arguments.length;
var i__22774__auto___39810 = (0);
while(true){
if((i__22774__auto___39810 < len__22773__auto___39809)){
args39803.push((arguments[i__22774__auto___39810]));

var G__39811 = (i__22774__auto___39810 + (1));
i__22774__auto___39810 = G__39811;
continue;
} else {
}
break;
}

var G__39805 = args39803.length;
switch (G__39805) {
case 2:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39803.length)].join('')));

}
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.tuple_impl.call(null,forms,preds,null);
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec39806 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec39806 = (function (forms,preds,gfn,meta39807){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta39807 = meta39807;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec39806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39808,meta39807__$1){
var self__ = this;
var _39808__$1 = this;
return (new cljs.spec.t_cljs$spec39806(self__.forms,self__.preds,self__.gfn,meta39807__$1));
});

cljs.spec.t_cljs$spec39806.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39808){
var self__ = this;
var _39808__$1 = this;
return self__.meta39807;
});

cljs.spec.t_cljs$spec39806.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec39806.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(!((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var v = x.call(null,i);
var cv = cljs.spec.dt.call(null,self__.preds.call(null,i),v,self__.forms.call(null,i));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cv)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__39813 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,cv));
var G__39814 = (i + (1));
ret = G__39813;
i = G__39814;
continue;
}
}
break;
}
}
});

cljs.spec.t_cljs$spec39806.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds)))){
} else {
throw (new Error("Assert failed: (c/and (vector? x) (= (count x) (count preds)))"));
}

var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var cv = x.call(null,i);
var v = cljs.spec.unform.call(null,self__.preds.call(null,i),cv);
var G__39815 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,v));
var G__39816 = (i + (1));
ret = G__39815;
i = G__39816;
continue;
}
break;
}
});

cljs.spec.t_cljs$spec39806.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__22516__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})(),(function (){var x__22516__auto__ = cljs.core.count.call(null,self__.preds);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (___$1){
return (function (i,form,pred){
var v = x.call(null,i);
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,pred,v))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,i),via,cljs.core.conj.call(null,in$,i),v);
}
});})(___$1))
,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.forms,self__.preds));

}
}
});

cljs.spec.t_cljs$spec39806.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1){
return (function (i,p,f){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,i),rmap,f);
});})(___$1))
;
var gs = cljs.core.map.call(null,gen,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gs);
} else {
return null;
}
}
});

cljs.spec.t_cljs$spec39806.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.tuple_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec39806.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","tuple","cljs.spec/tuple",500419708,null)),self__.forms)));
});

cljs.spec.t_cljs$spec39806.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta39807","meta39807",-1545001068,null)], null);
});

cljs.spec.t_cljs$spec39806.cljs$lang$type = true;

cljs.spec.t_cljs$spec39806.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec39806";

cljs.spec.t_cljs$spec39806.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.spec/t_cljs$spec39806");
});

cljs.spec.__GT_t_cljs$spec39806 = (function cljs$spec$__GT_t_cljs$spec39806(forms__$1,preds__$1,gfn__$1,meta39807){
return (new cljs.spec.t_cljs$spec39806(forms__$1,preds__$1,gfn__$1,meta39807));
});

}

return (new cljs.spec.t_cljs$spec39806(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.tuple_impl.cljs$lang$maxFixedArity = 3;

cljs.spec.tagged_ret = (function cljs$spec$tagged_ret(v){
var x39818 = v;
x39818.cljs$core$IMapEntry$ = true;

x39818.cljs$core$IMapEntry$_key$arity$1 = ((function (x39818){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(0));
});})(x39818))
;

x39818.cljs$core$IMapEntry$_val$arity$1 = ((function (x39818){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(1));
});})(x39818))
;

return x39818;
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.or_spec_impl = (function cljs$spec$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid.call(null);
var kps = cljs.core.zipmap.call(null,keys,preds);
var cform = ((function (id,kps){
return (function (x){
var i = (0);
while(true){
if((i < cljs.core.count.call(null,preds))){
var pred = preds.call(null,i);
var ret = cljs.spec.dt.call(null,pred,x,cljs.core.nth.call(null,forms,i));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),ret)){
var G__39833 = (i + (1));
i = G__39833;
continue;
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,i),ret], null));
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
break;
}
});})(id,kps))
;
if(typeof cljs.spec.t_cljs$spec39826 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec39826 = (function (or_spec_impl,keys,forms,preds,gfn,id,kps,cform,meta39827){
this.or_spec_impl = or_spec_impl;
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.cform = cform;
this.meta39827 = meta39827;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec39826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,cform){
return (function (_39828,meta39827__$1){
var self__ = this;
var _39828__$1 = this;
return (new cljs.spec.t_cljs$spec39826(self__.or_spec_impl,self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.cform,meta39827__$1));
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec39826.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,cform){
return (function (_39828){
var self__ = this;
var _39828__$1 = this;
return self__.meta39827;
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec39826.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec39826.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec39826.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,p__39829){
var self__ = this;
var vec__39830 = p__39829;
var k = cljs.core.nth.call(null,vec__39830,(0),null);
var x = cljs.core.nth.call(null,vec__39830,(1),null);
var ___$1 = this;
return cljs.spec.unform.call(null,self__.kps.call(null,k),x);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec39826.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,kps,cform){
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,this$__$1,x))){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (this$__$1,id,kps,cform){
return (function (k,form,pred){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,pred,x))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,k),via,in$,x);
}
});})(this$__$1,id,kps,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec39826.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,kps,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,kps,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,___$1,id,kps,cform){
return (function (){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,kps,cform))
,null)));
}
});})(___$1,id,kps,cform))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_.call(null,gs)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gs);
}
}
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec39826.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec39826.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,kps,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null)),cljs.core.mapcat.call(null,cljs.core.vector,self__.keys,self__.forms))));
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec39826.getBasis = ((function (id,kps,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"or-spec-impl","or-spec-impl",-1412945461,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'or'"], null)),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"kps","kps",-1157342767,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta39827","meta39827",-644280147,null)], null);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec39826.cljs$lang$type = true;

cljs.spec.t_cljs$spec39826.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec39826";

cljs.spec.t_cljs$spec39826.cljs$lang$ctorPrWriter = ((function (id,kps,cform){
return (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.spec/t_cljs$spec39826");
});})(id,kps,cform))
;

cljs.spec.__GT_t_cljs$spec39826 = ((function (id,kps,cform){
return (function cljs$spec$or_spec_impl_$___GT_t_cljs$spec39826(or_spec_impl__$1,keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,cform__$1,meta39827){
return (new cljs.spec.t_cljs$spec39826(or_spec_impl__$1,keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,cform__$1,meta39827));
});})(id,kps,cform))
;

}

return (new cljs.spec.t_cljs$spec39826(cljs$spec$or_spec_impl,keys,forms,preds,gfn,id,kps,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.and_preds = (function cljs$spec$and_preds(x,preds,forms){
var ret = x;
var G__39860 = preds;
var vec__39862 = G__39860;
var seq__39863 = cljs.core.seq.call(null,vec__39862);
var first__39864 = cljs.core.first.call(null,seq__39863);
var seq__39863__$1 = cljs.core.next.call(null,seq__39863);
var pred = first__39864;
var preds__$1 = seq__39863__$1;
var G__39861 = forms;
var vec__39865 = G__39861;
var seq__39866 = cljs.core.seq.call(null,vec__39865);
var first__39867 = cljs.core.first.call(null,seq__39866);
var seq__39866__$1 = cljs.core.next.call(null,seq__39866);
var form = first__39867;
var forms__$1 = seq__39866__$1;
var ret__$1 = ret;
var G__39860__$1 = G__39860;
var G__39861__$1 = G__39861;
while(true){
var ret__$2 = ret__$1;
var vec__39868 = G__39860__$1;
var seq__39869 = cljs.core.seq.call(null,vec__39868);
var first__39870 = cljs.core.first.call(null,seq__39869);
var seq__39869__$1 = cljs.core.next.call(null,seq__39869);
var pred__$1 = first__39870;
var preds__$2 = seq__39869__$1;
var vec__39871 = G__39861__$1;
var seq__39872 = cljs.core.seq.call(null,vec__39871);
var first__39873 = cljs.core.first.call(null,seq__39872);
var seq__39872__$1 = cljs.core.next.call(null,seq__39872);
var form__$1 = first__39873;
var forms__$2 = seq__39872__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),nret)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__39874 = nret;
var G__39875 = preds__$2;
var G__39876 = forms__$2;
ret__$1 = G__39874;
G__39860__$1 = G__39875;
G__39861__$1 = G__39876;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.explain_pred_list = (function cljs$spec$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__39903 = forms;
var vec__39905 = G__39903;
var seq__39906 = cljs.core.seq.call(null,vec__39905);
var first__39907 = cljs.core.first.call(null,seq__39906);
var seq__39906__$1 = cljs.core.next.call(null,seq__39906);
var form = first__39907;
var forms__$1 = seq__39906__$1;
var G__39904 = preds;
var vec__39908 = G__39904;
var seq__39909 = cljs.core.seq.call(null,vec__39908);
var first__39910 = cljs.core.first.call(null,seq__39909);
var seq__39909__$1 = cljs.core.next.call(null,seq__39909);
var pred = first__39910;
var preds__$1 = seq__39909__$1;
var ret__$1 = ret;
var G__39903__$1 = G__39903;
var G__39904__$1 = G__39904;
while(true){
var ret__$2 = ret__$1;
var vec__39911 = G__39903__$1;
var seq__39912 = cljs.core.seq.call(null,vec__39911);
var first__39913 = cljs.core.first.call(null,seq__39912);
var seq__39912__$1 = cljs.core.next.call(null,seq__39912);
var form__$1 = first__39913;
var forms__$2 = seq__39912__$1;
var vec__39914 = G__39904__$1;
var seq__39915 = cljs.core.seq.call(null,vec__39914);
var first__39916 = cljs.core.first.call(null,seq__39915);
var seq__39915__$1 = cljs.core.next.call(null,seq__39915);
var pred__$1 = first__39916;
var preds__$2 = seq__39915__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),nret)){
var G__39917 = nret;
var G__39918 = forms__$2;
var G__39919 = preds__$2;
ret__$1 = G__39917;
G__39903__$1 = G__39918;
G__39904__$1 = G__39919;
continue;
} else {
return cljs.spec.explain_1.call(null,form__$1,pred__$1,path,via,in$,ret__$2);
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.and_spec_impl = (function cljs$spec$and_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec39925 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec39925 = (function (and_spec_impl,forms,preds,gfn,meta39926){
this.and_spec_impl = and_spec_impl;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta39926 = meta39926;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec39925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39927,meta39926__$1){
var self__ = this;
var _39927__$1 = this;
return (new cljs.spec.t_cljs$spec39925(self__.and_spec_impl,self__.forms,self__.preds,self__.gfn,meta39926__$1));
});

cljs.spec.t_cljs$spec39925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39927){
var self__ = this;
var _39927__$1 = this;
return self__.meta39926;
});

cljs.spec.t_cljs$spec39925.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec39925.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.and_preds.call(null,x,self__.preds,self__.forms);
});

cljs.spec.t_cljs$spec39925.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.call(null,((function (___$1){
return (function (p1__39921_SHARP_,p2__39920_SHARP_){
return cljs.spec.unform.call(null,p2__39920_SHARP_,p1__39921_SHARP_);
});})(___$1))
,x,cljs.core.reverse.call(null,self__.preds));
});

cljs.spec.t_cljs$spec39925.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.explain_pred_list.call(null,self__.forms,self__.preds,path,via,in$,x);
});

cljs.spec.t_cljs$spec39925.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gensub.call(null,cljs.core.first.call(null,self__.preds),overrides,path,rmap,cljs.core.first.call(null,self__.forms));
}
});

cljs.spec.t_cljs$spec39925.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec39925.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","and","cljs.spec/and",-7296553,null)),self__.forms)));
});

cljs.spec.t_cljs$spec39925.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"and-spec-impl","and-spec-impl",1127339973,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'and'"], null)),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta39926","meta39926",-821801287,null)], null);
});

cljs.spec.t_cljs$spec39925.cljs$lang$type = true;

cljs.spec.t_cljs$spec39925.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec39925";

cljs.spec.t_cljs$spec39925.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.spec/t_cljs$spec39925");
});

cljs.spec.__GT_t_cljs$spec39925 = (function cljs$spec$and_spec_impl_$___GT_t_cljs$spec39925(and_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta39926){
return (new cljs.spec.t_cljs$spec39925(and_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta39926));
});

}

return (new cljs.spec.t_cljs$spec39925(cljs$spec$and_spec_impl,forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.coll_prob = (function cljs$spec$coll_prob(x,kfn,kform,distinct,count,min_count,max_count,path,via,in$){
var pred = (function (){var or__21590__auto__ = kfn;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.core.coll_QMARK_;
}
})();
var kform__$1 = (function (){var or__21590__auto__ = kform;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null);
}
})();
if(cljs.core.not.call(null,cljs.spec.valid_QMARK_.call(null,pred,x))){
return cljs.spec.explain_1.call(null,kform__$1,pred,path,via,in$,x);
} else {
if(cljs.core.truth_((function (){var and__21578__auto__ = distinct;
if(cljs.core.truth_(and__21578__auto__)){
return (!(cljs.core.empty_QMARK_.call(null,x))) && (cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core.distinct_QMARK_,x)));
} else {
return and__21578__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"distinct?","distinct?",-1684357959,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__21578__auto__ = count;
if(cljs.core.truth_(and__21578__auto__)){
return cljs.core.not_EQ_.call(null,count,cljs.core.bounded_count.call(null,count,x));
} else {
return and__21578__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__22516__auto__ = count;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})(),(function (){var x__22516__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__21578__auto__ = (function (){var or__21590__auto__ = min_count;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return max_count;
}
})();
if(cljs.core.truth_(and__21578__auto__)){
return !((((function (){var or__21590__auto__ = min_count;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count.call(null,(cljs.core.truth_(max_count)?(max_count + (1)):min_count),x))) && ((cljs.core.bounded_count.call(null,(cljs.core.truth_(max_count)?(max_count + (1)):min_count),x) <= (function (){var or__21590__auto__ = max_count;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.spec.MAX_INT;
}
})())));
} else {
return and__21578__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null)),(function (){var x__22516__auto__ = (function (){var or__21590__auto__ = min_count;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return (0);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})(),(function (){var x__22516__auto__ = cljs.core.count.call(null,cljs.core.unquote.call(null,new cljs.core.Symbol(null,"%","%",-950237169,null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})(),(function (){var x__22516__auto__ = (function (){var or__21590__auto__ = max_count;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return new cljs.core.Symbol("js","Number.MAX_SAFE_INTEGER","js/Number.MAX_SAFE_INTEGER",-1535627560,null);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
}
}
}
});
/**
 * Do not call this directly, use 'merge'
 */
cljs.spec.merge_spec_impl = (function cljs$spec$merge_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec39939 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec39939 = (function (merge_spec_impl,forms,preds,gfn,meta39940){
this.merge_spec_impl = merge_spec_impl;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta39940 = meta39940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec39939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39941,meta39940__$1){
var self__ = this;
var _39941__$1 = this;
return (new cljs.spec.t_cljs$spec39939(self__.merge_spec_impl,self__.forms,self__.preds,self__.gfn,meta39940__$1));
});

cljs.spec.t_cljs$spec39939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39941){
var self__ = this;
var _39941__$1 = this;
return self__.meta39940;
});

cljs.spec.t_cljs$spec39939.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec39939.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ms = cljs.core.map.call(null,((function (___$1){
return (function (p1__39928_SHARP_,p2__39929_SHARP_){
return cljs.spec.dt.call(null,p1__39928_SHARP_,x,p2__39929_SHARP_);
});})(___$1))
,self__.preds,self__.forms);
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),null], null), null),ms))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
return cljs.core.apply.call(null,cljs.core.merge,ms);
}
});

cljs.spec.t_cljs$spec39939.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (___$1){
return (function (p1__39930_SHARP_){
return cljs.spec.unform.call(null,p1__39930_SHARP_,x);
});})(___$1))
,cljs.core.reverse.call(null,self__.preds)));
});

cljs.spec.t_cljs$spec39939.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (___$1){
return (function (p1__39931_SHARP_,p2__39932_SHARP_){
return cljs.spec.explain_1.call(null,p1__39931_SHARP_,p2__39932_SHARP_,path,via,in$,x);
});})(___$1))
,self__.forms,self__.preds));
});

cljs.spec.t_cljs$spec39939.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.fmap.call(null,((function (___$1){
return (function (p1__39933_SHARP_){
return cljs.core.apply.call(null,cljs.core.merge,p1__39933_SHARP_);
});})(___$1))
,cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,cljs.core.map.call(null,((function (___$1){
return (function (p1__39934_SHARP_,p2__39935_SHARP_){
return cljs.spec.gensub.call(null,p1__39934_SHARP_,overrides,path,rmap,p2__39935_SHARP_);
});})(___$1))
,self__.preds,self__.forms)));
}
});

cljs.spec.t_cljs$spec39939.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.merge_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec39939.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","merge","cljs.spec/merge",-838422687,null)),self__.forms)));
});

cljs.spec.t_cljs$spec39939.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"merge-spec-impl","merge-spec-impl",397115684,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'merge'"], null)),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta39940","meta39940",-485267903,null)], null);
});

cljs.spec.t_cljs$spec39939.cljs$lang$type = true;

cljs.spec.t_cljs$spec39939.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec39939";

cljs.spec.t_cljs$spec39939.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.spec/t_cljs$spec39939");
});

cljs.spec.__GT_t_cljs$spec39939 = (function cljs$spec$merge_spec_impl_$___GT_t_cljs$spec39939(merge_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta39940){
return (new cljs.spec.t_cljs$spec39939(merge_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta39940));
});

}

return (new cljs.spec.t_cljs$spec39939(cljs$spec$merge_spec_impl,forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'every', 'every-kv', 'coll-of' or 'map-of'
 */
cljs.spec.every_impl = (function cljs$spec$every_impl(var_args){
var args39946 = [];
var len__22773__auto___39971 = arguments.length;
var i__22774__auto___39972 = (0);
while(true){
if((i__22774__auto___39972 < len__22773__auto___39971)){
args39946.push((arguments[i__22774__auto___39972]));

var G__39973 = (i__22774__auto___39972 + (1));
i__22774__auto___39972 = G__39973;
continue;
} else {
}
break;
}

var G__39948 = args39946.length;
switch (G__39948) {
case 3:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39946.length)].join('')));

}
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.every_impl.call(null,form,pred,opts,null);
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__39949,gfn){
var map__39950 = p__39949;
var map__39950__$1 = ((((!((map__39950 == null)))?((((map__39950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39950):map__39950);
var opts = map__39950__$1;
var max_count = cljs.core.get.call(null,map__39950__$1,new cljs.core.Keyword(null,"max-count","max-count",1539185305));
var kfn = cljs.core.get.call(null,map__39950__$1,new cljs.core.Keyword("cljs.spec","kfn","cljs.spec/kfn",293196937));
var gen_max = cljs.core.get.call(null,map__39950__$1,new cljs.core.Keyword(null,"gen-max","gen-max",-793680445),(20));
var conform_all = cljs.core.get.call(null,map__39950__$1,new cljs.core.Keyword("cljs.spec","conform-all","cljs.spec/conform-all",-1945029907));
var conform_keys = cljs.core.get.call(null,map__39950__$1,new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814));
var distinct = cljs.core.get.call(null,map__39950__$1,new cljs.core.Keyword(null,"distinct","distinct",-1788879121));
var kind_form = cljs.core.get.call(null,map__39950__$1,new cljs.core.Keyword("cljs.spec","kind-form","cljs.spec/kind-form",997489303));
var gen_into = cljs.core.get.call(null,map__39950__$1,new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY);
var count = cljs.core.get.call(null,map__39950__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var min_count = cljs.core.get.call(null,map__39950__$1,new cljs.core.Keyword(null,"min-count","min-count",1594709013));
var kind = cljs.core.get.call(null,map__39950__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var conform_into = gen_into;
var check_QMARK_ = ((function (conform_into,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (p1__39942_SHARP_){
return cljs.spec.valid_QMARK_.call(null,pred,p1__39942_SHARP_);
});})(conform_into,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;
var kfn__$1 = (function (){var or__21590__auto__ = kfn;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return ((function (or__21590__auto__,conform_into,check_QMARK_,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (i,v){
return i;
});
;})(or__21590__auto__,conform_into,check_QMARK_,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
}
})();
var addcv = ((function (conform_into,check_QMARK_,kfn__$1,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (ret,i,v,cv){
return cljs.core.conj.call(null,ret,cv);
});})(conform_into,check_QMARK_,kfn__$1,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;
var vec__39952 = ((cljs.core.map_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)], null):((cljs.core.vector_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector_QMARK_,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)], null):((cljs.core.list_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list_QMARK_,new cljs.core.Symbol("cljs.core","list?","cljs.core/list?",-684796618,null)], null):((cljs.core.set_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.set_QMARK_,new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seqable_QMARK_,new cljs.core.Symbol("cljs.core","seqable?","cljs.core/seqable?",-745394886,null)], null)
))));
var kindfn = cljs.core.nth.call(null,vec__39952,(0),null);
var kindform = cljs.core.nth.call(null,vec__39952,(1),null);
var cfns = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__39952,kindfn,kindform,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (x){
if((cljs.core.vector_QMARK_.call(null,x)) && ((cljs.core.not.call(null,conform_into)) || (cljs.core.vector_QMARK_.call(null,conform_into)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__39952,kindfn,kindform,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (ret,i,v,cv){
if((v === cv)){
return ret;
} else {
return cljs.core.assoc.call(null,ret,i,cv);
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__39952,kindfn,kindform,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,cljs.core.identity], null);
} else {
if(cljs.core.truth_((function (){var and__21578__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__21578__auto__){
var or__21590__auto__ = (function (){var and__21578__auto____$1 = kind;
if(cljs.core.truth_(and__21578__auto____$1)){
return cljs.core.not.call(null,conform_into);
} else {
return and__21578__auto____$1;
}
})();
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.core.map_QMARK_.call(null,conform_into);
}
} else {
return and__21578__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(conform_keys)?cljs.core.empty:cljs.core.identity),((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__39952,kindfn,kindform,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (ret,i,v,cv){
if(((v === cv)) && (cljs.core.not.call(null,conform_keys))){
return ret;
} else {
return cljs.core.assoc.call(null,ret,cljs.core.nth.call(null,(cljs.core.truth_(conform_keys)?cv:v),(0)),cljs.core.nth.call(null,cv,(1)));
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__39952,kindfn,kindform,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,cljs.core.identity], null);
} else {
if(cljs.core.list_QMARK_.call(null,x)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty,addcv,cljs.core.reverse], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__39952,kindfn,kindform,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (p1__39943_SHARP_){
return cljs.core.empty.call(null,(function (){var or__21590__auto__ = conform_into;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return p1__39943_SHARP_;
}
})());
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__39952,kindfn,kindform,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,addcv,cljs.core.identity], null);

}
}
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__39952,kindfn,kindform,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;
if(typeof cljs.spec.t_cljs$spec39955 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec39955 = (function (form,max_count,vec__39952,check_QMARK_,map__39950,gfn,gen_max,p__39949,pred,kindform,conform_keys,kind_form,addcv,cfns,distinct,kindfn,kfn,gen_into,count,min_count,opts,kind,conform_all,conform_into,meta39956){
this.form = form;
this.max_count = max_count;
this.vec__39952 = vec__39952;
this.check_QMARK_ = check_QMARK_;
this.map__39950 = map__39950;
this.gfn = gfn;
this.gen_max = gen_max;
this.p__39949 = p__39949;
this.pred = pred;
this.kindform = kindform;
this.conform_keys = conform_keys;
this.kind_form = kind_form;
this.addcv = addcv;
this.cfns = cfns;
this.distinct = distinct;
this.kindfn = kindfn;
this.kfn = kfn;
this.gen_into = gen_into;
this.count = count;
this.min_count = min_count;
this.opts = opts;
this.kind = kind;
this.conform_all = conform_all;
this.conform_into = conform_into;
this.meta39956 = meta39956;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec39955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__39952,kindfn,kindform,cfns,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_39957,meta39956__$1){
var self__ = this;
var _39957__$1 = this;
return (new cljs.spec.t_cljs$spec39955(self__.form,self__.max_count,self__.vec__39952,self__.check_QMARK_,self__.map__39950,self__.gfn,self__.gen_max,self__.p__39949,self__.pred,self__.kindform,self__.conform_keys,self__.kind_form,self__.addcv,self__.cfns,self__.distinct,self__.kindfn,self__.kfn,self__.gen_into,self__.count,self__.min_count,self__.opts,self__.kind,self__.conform_all,self__.conform_into,meta39956__$1));
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__39952,kindfn,kindform,cfns,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec39955.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__39952,kindfn,kindform,cfns,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_39957){
var self__ = this;
var _39957__$1 = this;
return self__.meta39956;
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__39952,kindfn,kindform,cfns,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec39955.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec39955.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__39952,kindfn,kindform,cfns,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.spec.coll_prob.call(null,x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,null,null,null))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
if(cljs.core.truth_(self__.conform_all)){
var vec__39958 = self__.cfns.call(null,x);
var init = cljs.core.nth.call(null,vec__39958,(0),null);
var add = cljs.core.nth.call(null,vec__39958,(1),null);
var complete = cljs.core.nth.call(null,vec__39958,(2),null);
var ret = init.call(null,x);
var i = (0);
var G__39964 = cljs.core.seq.call(null,x);
var vec__39965 = G__39964;
var seq__39966 = cljs.core.seq.call(null,vec__39965);
var first__39967 = cljs.core.first.call(null,seq__39966);
var seq__39966__$1 = cljs.core.next.call(null,seq__39966);
var v = first__39967;
var vs = seq__39966__$1;
var vseq = vec__39965;
var ret__$1 = ret;
var i__$1 = i;
var G__39964__$1 = G__39964;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__39968 = G__39964__$1;
var seq__39969 = cljs.core.seq.call(null,vec__39968);
var first__39970 = cljs.core.first.call(null,seq__39969);
var seq__39969__$1 = cljs.core.next.call(null,seq__39969);
var v__$1 = first__39970;
var vs__$1 = seq__39969__$1;
var vseq__$1 = vec__39968;
if(vseq__$1){
var cv = cljs.spec.dt.call(null,self__.pred,v__$1,null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cv)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__39975 = add.call(null,ret__$2,i__$2,v__$1,cv);
var G__39976 = (i__$2 + (1));
var G__39977 = vs__$1;
ret__$1 = G__39975;
i__$1 = G__39976;
G__39964__$1 = G__39977;
continue;
}
} else {
return complete.call(null,ret__$2);
}
break;
}
} else {
if(cljs.core.indexed_QMARK_.call(null,x)){
var step = (function (){var x__21923__auto__ = (1);
var y__21924__auto__ = cljs.core.long$.call(null,(cljs.core.count.call(null,x) / cljs.spec._STAR_coll_check_limit_STAR_));
return ((x__21923__auto__ > y__21924__auto__) ? x__21923__auto__ : y__21924__auto__);
})();
var i = (0);
while(true){
if((i >= cljs.core.count.call(null,x))){
return x;
} else {
if(cljs.core.truth_(self__.check_QMARK_.call(null,cljs.core.nth.call(null,x,i)))){
var G__39978 = (i + step);
i = G__39978;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
break;
}
} else {
var or__21590__auto__ = (function (){var and__21578__auto__ = cljs.core.every_QMARK_.call(null,self__.check_QMARK_,cljs.core.take.call(null,cljs.spec._STAR_coll_check_limit_STAR_,x));
if(and__21578__auto__){
return x;
} else {
return and__21578__auto__;
}
})();
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}

}
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__39952,kindfn,kindform,cfns,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec39955.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__39952,kindfn,kindform,cfns,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return x;
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__39952,kindfn,kindform,cfns,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec39955.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__39952,kindfn,kindform,cfns,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var or__21590__auto__ = cljs.spec.coll_prob.call(null,x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,path,via,in$);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.concat,(cljs.core.truth_(self__.conform_all)?cljs.core.identity:cljs.core.partial.call(null,cljs.core.take,cljs.spec._STAR_coll_error_limit_STAR_)).call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (or__21590__auto__,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__39952,kindfn,kindform,cfns,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (i,v){
var k = self__.kfn.call(null,i,v);
if(cljs.core.truth_(self__.check_QMARK_.call(null,v))){
return null;
} else {
var prob = cljs.spec.explain_1.call(null,self__.form,self__.pred,path,via,cljs.core.conj.call(null,in$,k),v);
return prob;
}
});})(or__21590__auto__,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__39952,kindfn,kindform,cfns,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,cljs.core.range.call(null),x))));
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__39952,kindfn,kindform,cfns,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec39955.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__39952,kindfn,kindform,cfns,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var pgen = cljs.spec.gensub.call(null,self__.pred,overrides,path,rmap,self__.form);
return cljs.spec.impl.gen.bind.call(null,(cljs.core.truth_(self__.gen_into)?cljs.spec.impl.gen.return$.call(null,cljs.core.empty.call(null,self__.gen_into)):(cljs.core.truth_(self__.kind)?cljs.spec.impl.gen.fmap.call(null,((function (pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__39952,kindfn,kindform,cfns,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (p1__39944_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__39944_SHARP_)){
return p1__39944_SHARP_;
} else {
return cljs.core.empty.call(null,p1__39944_SHARP_);
}
});})(pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__39952,kindfn,kindform,cfns,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,cljs.spec.gensub.call(null,self__.kind,overrides,path,rmap,self__.form)):cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY)
)),((function (pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__39952,kindfn,kindform,cfns,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (init){
return cljs.spec.impl.gen.fmap.call(null,((function (pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__39952,kindfn,kindform,cfns,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (p1__39945_SHARP_){
if(cljs.core.vector_QMARK_.call(null,init)){
return p1__39945_SHARP_;
} else {
return cljs.core.into.call(null,init,p1__39945_SHARP_);
}
});})(pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__39952,kindfn,kindform,cfns,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-elements","num-elements",1960422107),self__.count,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null)):cljs.spec.impl.gen.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-elements","min-elements",949370780),(function (){var or__21590__auto__ = self__.min_count;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"max-elements","max-elements",433034073),(function (){var or__21590__auto__ = self__.max_count;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
var x__21923__auto__ = self__.gen_max;
var y__21924__auto__ = ((2) * (function (){var or__21590__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__21590__auto____$1)){
return or__21590__auto____$1;
} else {
return (0);
}
})());
return ((x__21923__auto__ > y__21924__auto__) ? x__21923__auto__ : y__21924__auto__);
}
})(),new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null))):(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector.call(null,pgen,self__.count):(cljs.core.truth_((function (){var or__21590__auto__ = self__.min_count;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return self__.max_count;
}
})())?cljs.spec.impl.gen.vector.call(null,pgen,(function (){var or__21590__auto__ = self__.min_count;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return (0);
}
})(),(function (){var or__21590__auto__ = self__.max_count;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
var x__21923__auto__ = self__.gen_max;
var y__21924__auto__ = ((2) * (function (){var or__21590__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__21590__auto____$1)){
return or__21590__auto____$1;
} else {
return (0);
}
})());
return ((x__21923__auto__ > y__21924__auto__) ? x__21923__auto__ : y__21924__auto__);
}
})()):cljs.spec.impl.gen.vector.call(null,pgen,(0),self__.gen_max)
))));
});})(pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__39952,kindfn,kindform,cfns,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
);
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__39952,kindfn,kindform,cfns,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec39955.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__39952,kindfn,kindform,cfns,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.every_impl.call(null,self__.form,self__.pred,self__.opts,gfn__$1);
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__39952,kindfn,kindform,cfns,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec39955.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__39952,kindfn,kindform,cfns,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","every","cljs.spec/every",-1899705480,null)),(function (){var x__22516__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})(),cljs.core.mapcat.call(null,cljs.core.identity,self__.opts))));
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__39952,kindfn,kindform,cfns,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec39955.getBasis = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__39952,kindfn,kindform,cfns,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (){
return new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"max-count","max-count",-1115250464,null),new cljs.core.Symbol(null,"vec__39952","vec__39952",-926190459,null),new cljs.core.Symbol(null,"check?","check?",409539557,null),new cljs.core.Symbol(null,"map__39950","map__39950",904060232,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"gen-max","gen-max",846851082,null),new cljs.core.Symbol(null,"p__39949","p__39949",1044494794,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"kindform","kindform",839835536,null),new cljs.core.Symbol(null,"conform-keys","conform-keys",-159510287,null),new cljs.core.Symbol(null,"kind-form","kind-form",1155997457,null),new cljs.core.Symbol(null,"addcv","addcv",-1552991247,null),new cljs.core.Symbol(null,"cfns","cfns",1335482066,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"kindfn","kindfn",1062796440,null),new cljs.core.Symbol(null,"kfn","kfn",729311001,null),new cljs.core.Symbol(null,"gen-into","gen-into",592640985,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"min-count","min-count",-1059726756,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"conform-all","conform-all",-980179459,null),new cljs.core.Symbol(null,"conform-into","conform-into",-1039113729,null),new cljs.core.Symbol(null,"meta39956","meta39956",355250038,null)], null);
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__39952,kindfn,kindform,cfns,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec39955.cljs$lang$type = true;

cljs.spec.t_cljs$spec39955.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec39955";

cljs.spec.t_cljs$spec39955.cljs$lang$ctorPrWriter = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__39952,kindfn,kindform,cfns,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.spec/t_cljs$spec39955");
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__39952,kindfn,kindform,cfns,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.__GT_t_cljs$spec39955 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__39952,kindfn,kindform,cfns,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function cljs$spec$__GT_t_cljs$spec39955(form__$1,max_count__$1,vec__39952__$1,check_QMARK___$1,map__39950__$2,gfn__$1,gen_max__$1,p__39949__$1,pred__$1,kindform__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,distinct__$1,kindfn__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta39956){
return (new cljs.spec.t_cljs$spec39955(form__$1,max_count__$1,vec__39952__$1,check_QMARK___$1,map__39950__$2,gfn__$1,gen_max__$1,p__39949__$1,pred__$1,kindform__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,distinct__$1,kindfn__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta39956));
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__39952,kindfn,kindform,cfns,map__39950,map__39950__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

}

return (new cljs.spec.t_cljs$spec39955(form,max_count,vec__39952,check_QMARK_,map__39950__$1,gfn,gen_max,p__39949,pred,kindform,conform_keys,kind_form,addcv,cfns,distinct,kindfn,kfn__$1,gen_into,count,min_count,opts,kind,conform_all,conform_into,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.every_impl.cljs$lang$maxFixedArity = 4;

cljs.spec.accept = (function cljs$spec$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword(null,"ret","ret",-468222814),x], null);
});
cljs.spec.accept_QMARK_ = (function cljs$spec$accept_QMARK_(p__39979){
var map__39982 = p__39979;
var map__39982__$1 = ((((!((map__39982 == null)))?((((map__39982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39982):map__39982);
var op = cljs.core.get.call(null,map__39982__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
return cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),op);
});
cljs.spec.pcat_STAR_ = (function cljs$spec$pcat_STAR_(p__39984){
var map__39996 = p__39984;
var map__39996__$1 = ((((!((map__39996 == null)))?((((map__39996.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39996.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39996):map__39996);
var vec__39997 = cljs.core.get.call(null,map__39996__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__39998 = cljs.core.seq.call(null,vec__39997);
var first__39999 = cljs.core.first.call(null,seq__39998);
var seq__39998__$1 = cljs.core.next.call(null,seq__39998);
var p1 = first__39999;
var pr = seq__39998__$1;
var ps = vec__39997;
var vec__40000 = cljs.core.get.call(null,map__39996__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__40001 = cljs.core.seq.call(null,vec__40000);
var first__40002 = cljs.core.first.call(null,seq__40001);
var seq__40001__$1 = cljs.core.next.call(null,seq__40001);
var k1 = first__40002;
var kr = seq__40001__$1;
var ks = vec__40000;
var vec__40003 = cljs.core.get.call(null,map__39996__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var seq__40004 = cljs.core.seq.call(null,vec__40003);
var first__40005 = cljs.core.first.call(null,seq__40004);
var seq__40004__$1 = cljs.core.next.call(null,seq__40004);
var f1 = first__40005;
var fr = seq__40004__$1;
var forms = vec__40003;
var ret = cljs.core.get.call(null,map__39996__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var rep_PLUS_ = cljs.core.get.call(null,map__39996__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ps)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
var rp = new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.call(null,ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.fromArray([k1,rp], true, false):rp));
if(pr){
return cljs$spec$pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),fr,new cljs.core.Keyword(null,"ret","ret",-468222814),ret__$1], null));
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"rep+","rep+",-281382396),rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.pcat = (function cljs$spec$pcat(var_args){
var args__22780__auto__ = [];
var len__22773__auto___40008 = arguments.length;
var i__22774__auto___40009 = (0);
while(true){
if((i__22774__auto___40009 < len__22773__auto___40008)){
args__22780__auto__.push((arguments[i__22774__auto___40009]));

var G__40010 = (i__22774__auto___40009 + (1));
i__22774__auto___40009 = G__40010;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});

cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.pcat.cljs$lang$maxFixedArity = (0);

cljs.spec.pcat.cljs$lang$applyTo = (function (seq40007){
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40007));
});

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.cat_impl = (function cljs$spec$cat_impl(ks,ps,forms){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.rep_STAR_ = (function cljs$spec$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),new cljs.core.Keyword(null,"p2","p2",905500641),p2,new cljs.core.Keyword(null,"splice","splice",449588165),splice,new cljs.core.Keyword(null,"forms","forms",2045992350),form,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null)], null);
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p2,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)));
} else {
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p1,new cljs.core.Keyword(null,"ret","ret",-468222814),ret);
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.rep_impl = (function cljs$spec$rep_impl(form,p){
return cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.rep_PLUS_impl = (function cljs$spec$rep_PLUS_impl(form,p){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22516__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})(),(function (){var x__22516__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null)),(function (){var x__22516__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})())))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"rep+","rep+",-281382396),form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.amp_impl = (function cljs$spec$amp_impl(re,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),new cljs.core.Keyword(null,"p1","p1",-936759954),re,new cljs.core.Keyword(null,"ps","ps",292358046),preds,new cljs.core.Keyword(null,"forms","forms",2045992350),pred_forms], null);
});
cljs.spec.filter_alt = (function cljs$spec$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__21590__auto__ = ks;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.call(null,(function (p1__40011_SHARP_){
return f.call(null,cljs.core.first.call(null,p1__40011_SHARP_));
}),cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__21590__auto__ = cljs.core.seq.call(null,ks);
if(or__21590__auto__){
return or__21590__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__21590__auto__ = cljs.core.seq.call(null,forms);
if(or__21590__auto__){
return or__21590__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq.call(null,cljs.core.map.call(null,((function (pks){
return (function (p1__40012_SHARP_){
return cljs.core.nth.call(null,p1__40012_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.filter.call(null,f,ps)),ks,forms], null);
}
});
cljs.spec.alt_STAR_ = (function cljs$spec$alt_STAR_(ps,ks,forms){
var vec__40022 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.core.identity);
var vec__40025 = cljs.core.nth.call(null,vec__40022,(0),null);
var seq__40026 = cljs.core.seq.call(null,vec__40025);
var first__40027 = cljs.core.first.call(null,seq__40026);
var seq__40026__$1 = cljs.core.next.call(null,seq__40026);
var p1 = first__40027;
var pr = seq__40026__$1;
var ps__$1 = vec__40025;
var vec__40028 = cljs.core.nth.call(null,vec__40022,(1),null);
var k1 = cljs.core.nth.call(null,vec__40028,(0),null);
var ks__$1 = vec__40028;
var forms__$1 = cljs.core.nth.call(null,vec__40022,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),new cljs.core.Keyword(null,"ps","ps",292358046),ps__$1,new cljs.core.Keyword(null,"ks","ks",1900203942),ks__$1,new cljs.core.Keyword(null,"forms","forms",2045992350),forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.spec.accept.call(null,cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)], null)));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alts = (function cljs$spec$alts(var_args){
var args__22780__auto__ = [];
var len__22773__auto___40032 = arguments.length;
var i__22774__auto___40033 = (0);
while(true){
if((i__22774__auto___40033 < len__22773__auto___40032)){
args__22780__auto__.push((arguments[i__22774__auto___40033]));

var G__40034 = (i__22774__auto___40033 + (1));
i__22774__auto___40033 = G__40034;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});

cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alt_STAR_.call(null,ps,null,null);
});

cljs.spec.alts.cljs$lang$maxFixedArity = (0);

cljs.spec.alts.cljs$lang$applyTo = (function (seq40031){
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40031));
});

cljs.spec.alt2 = (function cljs$spec$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__21578__auto__ = p1;
if(cljs.core.truth_(and__21578__auto__)){
return p2;
} else {
return and__21578__auto__;
}
})())){
return cljs.spec.alts.call(null,p1,p2);
} else {
var or__21590__auto__ = p1;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alt_impl = (function cljs$spec$alt_impl(ks,ps,forms){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,ps,ks,forms),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null));
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.maybe_impl = (function cljs$spec$maybe_impl(p,form){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.accept.call(null,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718)], null)),new cljs.core.Keyword(null,"maybe","maybe",-314397560),form);
});
cljs.spec.noret_QMARK_ = (function cljs$spec$noret_QMARK_(p1,pret){
var or__21590__auto__ = cljs.core._EQ_.call(null,pret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718));
if(or__21590__auto__){
return or__21590__auto__;
} else {
var or__21590__auto____$1 = (function (){var and__21578__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),null], null), null).call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(cljs.spec.reg_resolve_BANG_.call(null,p1)));
if(cljs.core.truth_(and__21578__auto__)){
return cljs.core.empty_QMARK_.call(null,pret);
} else {
return and__21578__auto__;
}
})();
if(cljs.core.truth_(or__21590__auto____$1)){
return or__21590__auto____$1;
} else {
return null;
}
}
});
cljs.spec.accept_nil_QMARK_ = (function cljs$spec$accept_nil_QMARK_(p){
var map__40038 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__40038__$1 = ((((!((map__40038 == null)))?((((map__40038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40038):map__40038);
var p__$1 = map__40038__$1;
var op = cljs.core.get.call(null,map__40038__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__40038__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var p1 = cljs.core.get.call(null,map__40038__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__40038__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.call(null,map__40038__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__40040 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__40040)){
return true;
} else {
if(cljs.core._EQ_.call(null,null,G__40040)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__40040)){
var and__21578__auto__ = cljs$spec$accept_nil_QMARK_.call(null,p1);
if(cljs.core.truth_(and__21578__auto__)){
var or__21590__auto__ = cljs.spec.noret_QMARK_.call(null,p1,cljs.spec.preturn.call(null,p1));
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
var ret = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1),ps,cljs.core.next.call(null,forms));
return cljs.core.not_EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
}
} else {
return and__21578__auto__;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__40040)){
var or__21590__auto__ = (p1 === p2);
if(or__21590__auto__){
return or__21590__auto__;
} else {
return cljs$spec$accept_nil_QMARK_.call(null,p1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__40040)){
return cljs.core.every_QMARK_.call(null,cljs$spec$accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__40040)){
return cljs.core.some.call(null,cljs$spec$accept_nil_QMARK_,ps);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.preturn = (function cljs$spec$preturn(p){
var map__40059 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__40059__$1 = ((((!((map__40059 == null)))?((((map__40059.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40059.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40059):map__40059);
var p__$1 = map__40059__$1;
var vec__40060 = cljs.core.get.call(null,map__40059__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__40061 = cljs.core.seq.call(null,vec__40060);
var first__40062 = cljs.core.first.call(null,seq__40061);
var seq__40061__$1 = cljs.core.next.call(null,seq__40061);
var p0 = first__40062;
var pr = seq__40061__$1;
var ps = vec__40060;
var vec__40063 = cljs.core.get.call(null,map__40059__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__40063,(0),null);
var ks = vec__40063;
var op = cljs.core.get.call(null,map__40059__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__40059__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__40059__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__40059__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__40067 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__40067)){
return ret;
} else {
if(cljs.core._EQ_.call(null,null,G__40067)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__40067)){
var pret = cljs$spec$preturn.call(null,p1);
if(cljs.core.truth_(cljs.spec.noret_QMARK_.call(null,p1,pret))){
return new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718);
} else {
return cljs.spec.and_preds.call(null,pret,ps,forms);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__40067)){
return cljs.spec.add_ret.call(null,p1,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__40067)){
return cljs.spec.add_ret.call(null,p0,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__40067)){
var vec__40068 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.spec.accept_nil_QMARK_);
var vec__40071 = cljs.core.nth.call(null,vec__40068,(0),null);
var p0__$1 = cljs.core.nth.call(null,vec__40071,(0),null);
var vec__40074 = cljs.core.nth.call(null,vec__40068,(1),null);
var k0 = cljs.core.nth.call(null,vec__40074,(0),null);
var r = (((p0__$1 == null))?new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718):cljs$spec$preturn.call(null,p0__$1));
if(cljs.core.truth_(k0)){
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k0,r], null));
} else {
return r;
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.op_unform = (function cljs$spec$op_unform(p,x){
var map__40093 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__40093__$1 = ((((!((map__40093 == null)))?((((map__40093.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40093.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40093):map__40093);
var p__$1 = map__40093__$1;
var vec__40094 = cljs.core.get.call(null,map__40093__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__40095 = cljs.core.seq.call(null,vec__40094);
var first__40096 = cljs.core.first.call(null,seq__40095);
var seq__40095__$1 = cljs.core.next.call(null,seq__40095);
var p0 = first__40096;
var pr = seq__40095__$1;
var ps = vec__40094;
var vec__40097 = cljs.core.get.call(null,map__40093__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__40097,(0),null);
var ks = vec__40097;
var op = cljs.core.get.call(null,map__40093__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__40093__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__40093__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__40093__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.call(null,map__40093__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__40093__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var kps = cljs.core.zipmap.call(null,ks,ps);
var G__40101 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__40101)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.call(null,null,G__40101)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform.call(null,p__$1,x)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__40101)){
var px = cljs.core.reduce.call(null,((function (G__40101,map__40093,map__40093__$1,p__$1,vec__40094,seq__40095,first__40096,seq__40095__$1,p0,pr,ps,vec__40097,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__40078_SHARP_,p2__40077_SHARP_){
return cljs.spec.unform.call(null,p2__40077_SHARP_,p1__40078_SHARP_);
});})(G__40101,map__40093,map__40093__$1,p__$1,vec__40094,seq__40095,first__40096,seq__40095__$1,p0,pr,ps,vec__40097,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse.call(null,ps));
return cljs$spec$op_unform.call(null,p1,px);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__40101)){
return cljs.core.mapcat.call(null,((function (G__40101,map__40093,map__40093__$1,p__$1,vec__40094,seq__40095,first__40096,seq__40095__$1,p0,pr,ps,vec__40097,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__40079_SHARP_){
return cljs$spec$op_unform.call(null,p1,p1__40079_SHARP_);
});})(G__40101,map__40093,map__40093__$1,p__$1,vec__40094,seq__40095,first__40096,seq__40095__$1,p0,pr,ps,vec__40097,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__40101)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.call(null,((function (G__40101,map__40093,map__40093__$1,p__$1,vec__40094,seq__40095,first__40096,seq__40095__$1,p0,pr,ps,vec__40097,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__40080_SHARP_){
return cljs$spec$op_unform.call(null,p0,p1__40080_SHARP_);
});})(G__40101,map__40093,map__40093__$1,p__$1,vec__40094,seq__40095,first__40096,seq__40095__$1,p0,pr,ps,vec__40097,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
return cljs.core.mapcat.call(null,((function (G__40101,map__40093,map__40093__$1,p__$1,vec__40094,seq__40095,first__40096,seq__40095__$1,p0,pr,ps,vec__40097,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_.call(null,x,k__$1)){
return cljs$spec$op_unform.call(null,kps.call(null,k__$1),cljs.core.get.call(null,x,k__$1));
} else {
return null;
}
});})(G__40101,map__40093,map__40093__$1,p__$1,vec__40094,seq__40095,first__40096,seq__40095__$1,p0,pr,ps,vec__40097,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,ks);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__40101)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform.call(null,p0,x)], null);
} else {
var vec__40102 = x;
var k__$1 = cljs.core.nth.call(null,vec__40102,(0),null);
var v = cljs.core.nth.call(null,vec__40102,(1),null);
return cljs$spec$op_unform.call(null,kps.call(null,k__$1),v);
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.add_ret = (function cljs$spec$add_ret(p,r,k){
var map__40108 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__40108__$1 = ((((!((map__40108 == null)))?((((map__40108.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40108.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40108):map__40108);
var p__$1 = map__40108__$1;
var op = cljs.core.get.call(null,map__40108__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__40108__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var splice = cljs.core.get.call(null,map__40108__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var prop = ((function (map__40108,map__40108__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core.empty_QMARK_.call(null,ret)){
return r;
} else {
return (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj).call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
});})(map__40108,map__40108__$1,p__$1,op,ps,splice))
;
var G__40110 = op;
if(cljs.core._EQ_.call(null,null,G__40110)){
return r;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__40110)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__40110)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__40110)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__40110)){
return prop.call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__40110)){
return prop.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.deriv = (function cljs$spec$deriv(p,x){
var map__40121 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__40121__$1 = ((((!((map__40121 == null)))?((((map__40121.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40121.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40121):map__40121);
var p__$1 = map__40121__$1;
var vec__40122 = cljs.core.get.call(null,map__40121__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__40123 = cljs.core.seq.call(null,vec__40122);
var first__40124 = cljs.core.first.call(null,seq__40123);
var seq__40123__$1 = cljs.core.next.call(null,seq__40123);
var p0 = first__40124;
var pr = seq__40123__$1;
var ps = vec__40122;
var vec__40125 = cljs.core.get.call(null,map__40121__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__40126 = cljs.core.seq.call(null,vec__40125);
var first__40127 = cljs.core.first.call(null,seq__40126);
var seq__40126__$1 = cljs.core.next.call(null,seq__40126);
var k0 = first__40127;
var kr = seq__40126__$1;
var ks = vec__40125;
var op = cljs.core.get.call(null,map__40121__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__40121__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__40121__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__40121__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var splice = cljs.core.get.call(null,map__40121__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var forms = cljs.core.get.call(null,map__40121__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
if(cljs.core.truth_(p__$1)){
var G__40129 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__40129)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__40129)){
var ret__$1 = cljs.spec.dt.call(null,p__$1,x,p__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),ret__$1)){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__40129)){
var temp__6503__auto__ = cljs$spec$deriv.call(null,p1,x);
if(cljs.core.truth_(temp__6503__auto__)){
var p1__$1 = temp__6503__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1__$1),ps,cljs.core.next.call(null,forms));
if(cljs.core._EQ_.call(null,ret__$1,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return cljs.spec.amp_impl.call(null,p1__$1,ps,forms);
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__40129)){
return cljs.spec.alt2.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.cons.call(null,cljs$spec$deriv.call(null,p0,x),pr),new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),ret], null)),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p0))?cljs$spec$deriv.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.next.call(null,forms),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.spec.add_ret.call(null,p0,ret,k0)], null)),x):null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__40129)){
return cljs.spec.alt_STAR_.call(null,cljs.core.map.call(null,((function (G__40129,map__40121,map__40121__$1,p__$1,vec__40122,seq__40123,first__40124,seq__40123__$1,p0,pr,ps,vec__40125,seq__40126,first__40127,seq__40126__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__40111_SHARP_){
return cljs$spec$deriv.call(null,p1__40111_SHARP_,x);
});})(G__40129,map__40121,map__40121__$1,p__$1,vec__40122,seq__40123,first__40124,seq__40123__$1,p0,pr,ps,vec__40125,seq__40126,first__40127,seq__40126__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__40129)){
return cljs.spec.alt2.call(null,cljs.spec.rep_STAR_.call(null,cljs$spec$deriv.call(null,p1,x),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))?cljs$spec$deriv.call(null,cljs.spec.rep_STAR_.call(null,p2,p2,cljs.spec.add_ret.call(null,p1,ret,null),splice,forms),x):null));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_describe = (function cljs$spec$op_describe(p){
var map__40133 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__40133__$1 = ((((!((map__40133 == null)))?((((map__40133.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40133.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40133):map__40133);
var p__$1 = map__40133__$1;
var op = cljs.core.get.call(null,map__40133__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__40133__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__40133__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__40133__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__40133__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__40133__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var rep_PLUS_ = cljs.core.get.call(null,map__40133__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__40133__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
if(cljs.core.truth_(p__$1)){
var G__40135 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__40135)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__40135)){
return p__$1;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__40135)){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("clojure.spec","&","clojure.spec/&",-770935491,null),cljs$spec$op_describe.call(null,p1),forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__40135)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core._conj.call(null,(function (){var x__22516__auto__ = rep_PLUS_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})(),new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),cljs.core.mapcat.call(null,cljs.core.vector,(function (){var or__21590__auto__ = cljs.core.seq.call(null,ks);
if(or__21590__auto__){
return or__21590__auto__;
} else {
return cljs.core.repeat.call(null,new cljs.core.Keyword(null,"_","_",1453416199));
}
})(),forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__40135)){
if(cljs.core.truth_(maybe)){
return cljs.core._conj.call(null,(function (){var x__22516__auto__ = maybe;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})(),new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","alt","cljs.spec/alt",157113396,null),cljs.core.mapcat.call(null,cljs.core.vector,ks,forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__40135)){
var x__22516__auto__ = (cljs.core.truth_(splice)?new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null):new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null));
return cljs.core._conj.call(null,(function (){var x__22516__auto____$1 = forms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto____$1);
})(),x__22516__auto__);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_explain = (function cljs$spec$op_explain(form,p,path,via,in$,input){
var vec__40149 = input;
var x = cljs.core.nth.call(null,vec__40149,(0),null);
var input__$1 = vec__40149;
var map__40152 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__40152__$1 = ((((!((map__40152 == null)))?((((map__40152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40152):map__40152);
var p__$1 = map__40152__$1;
var op = cljs.core.get.call(null,map__40152__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__40152__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__40152__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__40152__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__40152__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__40152__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__40152__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var via__$1 = (function (){var temp__6501__auto__ = cljs.spec.spec_name.call(null,p__$1);
if(cljs.core.truth_(temp__6501__auto__)){
var name = temp__6501__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__40149,x,input__$1,map__40152,map__40152__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Insufficient input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form__$1),new cljs.core.Keyword(null,"val","val",128701612),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"via","via",-1904457336),via__$1,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
});})(vec__40149,x,input__$1,map__40152,map__40152__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__40154 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__40154)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__40154)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,form);
} else {
return cljs.spec.explain_1.call(null,form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__40154)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))){
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1));
} else {
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p1));
}
} else {
var temp__6501__auto__ = cljs.spec.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__6501__auto__)){
var p1__$1 = temp__6501__auto__;
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1__$1));
} else {
return cljs$spec$op_explain.call(null,cljs.spec.op_describe.call(null,p1),p1,path,via__$1,in$,input__$1);
}
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__40154)){
var pkfs = cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__21590__auto__ = cljs.core.seq.call(null,ks);
if(or__21590__auto__){
return or__21590__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__21590__auto__ = cljs.core.seq.call(null,forms);
if(or__21590__auto__){
return or__21590__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
var vec__40155 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,pkfs)))?cljs.core.first.call(null,pkfs):cljs.core.first.call(null,cljs.core.remove.call(null,((function (pkfs,G__40154,vec__40149,x,input__$1,map__40152,map__40152__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__40158){
var vec__40159 = p__40158;
var p__$2 = cljs.core.nth.call(null,vec__40159,(0),null);
return cljs.spec.accept_nil_QMARK_.call(null,p__$2);
});})(pkfs,G__40154,vec__40149,x,input__$1,map__40152,map__40152__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.call(null,vec__40155,(0),null);
var k = cljs.core.nth.call(null,vec__40155,(1),null);
var form__$1 = cljs.core.nth.call(null,vec__40155,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path);
var form__$2 = (function (){var or__21590__auto__ = form__$1;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})();
if((cljs.core.empty_QMARK_.call(null,input__$1)) && (cljs.core.not.call(null,pred))){
return insufficient.call(null,path__$1,form__$2);
} else {
return cljs$spec$op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__40154)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p__$1));
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (G__40154,vec__40149,x,input__$1,map__40152,map__40152__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
return cljs$spec$op_explain.call(null,(function (){var or__21590__auto__ = form__$1;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})(),pred,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),via__$1,in$,input__$1);
});})(G__40154,vec__40149,x,input__$1,map__40152,map__40152__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__21590__auto__ = cljs.core.seq.call(null,ks);
if(or__21590__auto__){
return or__21590__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__21590__auto__ = cljs.core.seq.call(null,forms);
if(or__21590__auto__){
return or__21590__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__40154)){
return cljs$spec$op_explain.call(null,(((p1 === p2))?forms:cljs.spec.op_describe.call(null,p1)),p1,path,via__$1,in$,input__$1);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.re_gen = (function cljs$spec$re_gen(p,overrides,path,rmap,f){
var map__40168 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__40168__$1 = ((((!((map__40168 == null)))?((((map__40168.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40168.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40168):map__40168);
var p__$1 = map__40168__$1;
var ps = cljs.core.get.call(null,map__40168__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var forms = cljs.core.get.call(null,map__40168__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var p2 = cljs.core.get.call(null,map__40168__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__40168__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var splice = cljs.core.get.call(null,map__40168__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ks = cljs.core.get.call(null,map__40168__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var p1 = cljs.core.get.call(null,map__40168__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var gfn = cljs.core.get.call(null,map__40168__$1,new cljs.core.Keyword("cljs.spec","gfn","cljs.spec/gfn",-432034727));
var id = cljs.core.get.call(null,map__40168__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var op = cljs.core.get.call(null,map__40168__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.inck.call(null,rmap,id):rmap);
var ggens = ((function (map__40168,map__40168__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__40168,map__40168__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__21578__auto__ = rmap__$1;
if(cljs.core.truth_(and__21578__auto__)){
var and__21578__auto____$1 = id;
if(cljs.core.truth_(and__21578__auto____$1)){
var and__21578__auto____$2 = k;
if(cljs.core.truth_(and__21578__auto____$2)){
return cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,path,k);
} else {
return and__21578__auto____$2;
}
} else {
return and__21578__auto____$1;
}
} else {
return and__21578__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (map__40168,map__40168__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (){
return cljs$spec$re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__21590__auto__ = f__$1;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return p__$2;
}
})());
});})(map__40168,map__40168__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
,null)));
} else {
return cljs$spec$re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__21590__auto__ = f__$1;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return p__$2;
}
})());
}
}
});})(map__40168,map__40168__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
;
return cljs.core.map.call(null,gen,ps__$1,(function (){var or__21590__auto__ = cljs.core.seq.call(null,ks__$1);
if(or__21590__auto__){
return or__21590__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__21590__auto__ = cljs.core.seq.call(null,forms__$1);
if(or__21590__auto__){
return or__21590__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
});})(map__40168,map__40168__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
;
var or__21590__auto__ = (function (){var temp__6503__auto__ = cljs.core.get.call(null,overrides,path);
if(cljs.core.truth_(temp__6503__auto__)){
var g = temp__6503__auto__;
var G__40171 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"accept","accept",1874130431),G__40171)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
if(cljs.core._EQ_.call(null,null,G__40171)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
var or__21590__auto____$1 = (cljs.core.truth_(gfn)?gfn.call(null):null);
if(cljs.core.truth_(or__21590__auto____$1)){
return or__21590__auto____$1;
} else {
if(cljs.core.truth_(p__$1)){
var G__40172 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__40172)){
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.spec.impl.gen.return$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null));
}
} else {
if(cljs.core._EQ_.call(null,null,G__40172)){
var temp__6503__auto__ = cljs.spec.gensub.call(null,p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__6503__auto__)){
var g = temp__6503__auto__;
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__40172)){
return cljs$spec$re_gen.call(null,p1,overrides,path,rmap__$1,cljs.spec.op_describe.call(null,p1));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__40172)){
var gens = ggens.call(null,ps,ks,forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gens)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__40172)){
var gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,ggens.call(null,ps,ks,forms));
if(cljs.core.empty_QMARK_.call(null,gens)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gens);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__40172)){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
var temp__6503__auto__ = cljs$spec$re_gen.call(null,p2,overrides,path,rmap__$1,forms);
if(cljs.core.truth_(temp__6503__auto__)){
var g = temp__6503__auto__;
return cljs.spec.impl.gen.fmap.call(null,((function (g,temp__6503__auto__,G__40172,or__21590__auto____$1,or__21590__auto__,map__40168,map__40168__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1,ggens){
return (function (p1__40162_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__40162_SHARP_);
});})(g,temp__6503__auto__,G__40172,or__21590__auto____$1,or__21590__auto__,map__40168,map__40168__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1,ggens))
,cljs.spec.impl.gen.vector.call(null,g));
} else {
return null;
}
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
}
});
cljs.spec.re_conform = (function cljs$spec$re_conform(p,p__40173){
while(true){
var vec__40177 = p__40173;
var seq__40178 = cljs.core.seq.call(null,vec__40177);
var first__40179 = cljs.core.first.call(null,seq__40178);
var seq__40178__$1 = cljs.core.next.call(null,seq__40178);
var x = first__40179;
var xs = seq__40178__$1;
var data = vec__40177;
if(cljs.core.empty_QMARK_.call(null,data)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p))){
var ret = cljs.spec.preturn.call(null,p);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return null;
} else {
return ret;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
var temp__6501__auto__ = cljs.spec.deriv.call(null,p,x);
if(cljs.core.truth_(temp__6501__auto__)){
var dp = temp__6501__auto__;
var G__40180 = dp;
var G__40181 = xs;
p = G__40180;
p__40173 = G__40181;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
break;
}
});
cljs.spec.re_explain = (function cljs$spec$re_explain(path,via,in$,re,input){
var p = re;
var G__40195 = input;
var vec__40196 = G__40195;
var seq__40197 = cljs.core.seq.call(null,vec__40196);
var first__40198 = cljs.core.first.call(null,seq__40197);
var seq__40197__$1 = cljs.core.next.call(null,seq__40197);
var x = first__40198;
var xs = seq__40197__$1;
var data = vec__40196;
var i = (0);
var p__$1 = p;
var G__40195__$1 = G__40195;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__40199 = G__40195__$1;
var seq__40200 = cljs.core.seq.call(null,vec__40199);
var first__40201 = cljs.core.first.call(null,seq__40200);
var seq__40200__$1 = cljs.core.next.call(null,seq__40200);
var x__$1 = first__40201;
var xs__$1 = seq__40200__$1;
var data__$1 = vec__40199;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_.call(null,data__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p__$2))){
return null;
} else {
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__6501__auto__ = cljs.spec.deriv.call(null,p__$2,x__$1);
if(cljs.core.truth_(temp__6501__auto__)){
var dp = temp__6501__auto__;
var G__40202 = dp;
var G__40203 = xs__$1;
var G__40204 = (i__$2 + (1));
p__$1 = G__40202;
G__40195__$1 = G__40203;
i__$1 = G__40204;
continue;
} else {
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p__$2))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p__$2),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649))){
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,re)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], null);
}
} else {
var or__21590__auto__ = cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,p__$2)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], null);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.regex_spec_impl = (function cljs$spec$regex_spec_impl(re,gfn){
if(typeof cljs.spec.t_cljs$spec40208 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec40208 = (function (regex_spec_impl,re,gfn,meta40209){
this.regex_spec_impl = regex_spec_impl;
this.re = re;
this.gfn = gfn;
this.meta40209 = meta40209;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec40208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40210,meta40209__$1){
var self__ = this;
var _40210__$1 = this;
return (new cljs.spec.t_cljs$spec40208(self__.regex_spec_impl,self__.re,self__.gfn,meta40209__$1));
});

cljs.spec.t_cljs$spec40208.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40210){
var self__ = this;
var _40210__$1 = this;
return self__.meta40209;
});

cljs.spec.t_cljs$spec40208.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec40208.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_conform.call(null,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});

cljs.spec.t_cljs$spec40208.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_unform.call(null,self__.re,x);
});

cljs.spec.t_cljs$spec40208.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_explain.call(null,path,via,in$,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,self__.re)),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});

cljs.spec.t_cljs$spec40208.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.re_gen.call(null,self__.re,overrides,path,rmap,cljs.spec.op_describe.call(null,self__.re));
}
});

cljs.spec.t_cljs$spec40208.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.regex_spec_impl.call(null,self__.re,gfn__$1);
});

cljs.spec.t_cljs$spec40208.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_describe.call(null,self__.re);
});

cljs.spec.t_cljs$spec40208.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"regex-spec-impl","regex-spec-impl",1541266692,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'spec' with a regex op argument"], null)),new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta40209","meta40209",-315651921,null)], null);
});

cljs.spec.t_cljs$spec40208.cljs$lang$type = true;

cljs.spec.t_cljs$spec40208.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec40208";

cljs.spec.t_cljs$spec40208.cljs$lang$ctorPrWriter = (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.spec/t_cljs$spec40208");
});

cljs.spec.__GT_t_cljs$spec40208 = (function cljs$spec$regex_spec_impl_$___GT_t_cljs$spec40208(regex_spec_impl__$1,re__$1,gfn__$1,meta40209){
return (new cljs.spec.t_cljs$spec40208(regex_spec_impl__$1,re__$1,gfn__$1,meta40209));
});

}

return (new cljs.spec.t_cljs$spec40208(cljs$spec$regex_spec_impl,re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.call_valid_QMARK_ = (function cljs$spec$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.core._EQ_.call(null,cargs,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return null;
} else {
var ret = cljs.core.apply.call(null,f,args);
var cret = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__21578__auto__ = cljs.core.not_EQ_.call(null,cret,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
if(and__21578__auto__){
if(cljs.core.truth_(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.valid_QMARK_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return true;
}
} else {
return and__21578__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.validate_fn = (function cljs$spec$validate_fn(f,specs,iters){
var g = cljs.spec.gen.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.impl.gen.for_all_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
return (function (p1__40211_SHARP_){
return cljs.spec.call_valid_QMARK_.call(null,f,specs,p1__40211_SHARP_);
});})(g))
);
var ret = cljs.spec.impl.gen.quick_check.call(null,iters,prop);
var temp__6501__auto__ = new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__6501__auto__)){
var vec__40215 = temp__6501__auto__;
var smallest = cljs.core.nth.call(null,vec__40215,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.fspec_impl = (function cljs$spec$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
var specs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),argspec,new cljs.core.Keyword(null,"ret","ret",-468222814),retspec,new cljs.core.Keyword(null,"fn","fn",-1175266204),fnspec], null);
if(typeof cljs.spec.t_cljs$spec40224 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
cljs.spec.t_cljs$spec40224 = (function (fspec_impl,argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta40225){
this.fspec_impl = fspec_impl;
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta40225 = meta40225;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec40224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_40226,meta40225__$1){
var self__ = this;
var _40226__$1 = this;
return (new cljs.spec.t_cljs$spec40224(self__.fspec_impl,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta40225__$1));
});})(specs))
;

cljs.spec.t_cljs$spec40224.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_40226){
var self__ = this;
var _40226__$1 = this;
return self__.meta40225;
});})(specs))
;

cljs.spec.t_cljs$spec40224.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,self__.specs,k);
});})(specs))
;

cljs.spec.t_cljs$spec40224.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
return (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.specs,k,not_found);
});})(specs))
;

cljs.spec.t_cljs$spec40224.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec40224.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
if((f === cljs.spec.validate_fn.call(null,f,self__.specs,cljs.spec._STAR_fspec_iterations_STAR_))){
return f;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(specs))
;

cljs.spec.t_cljs$spec40224.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
});})(specs))
;

cljs.spec.t_cljs$spec40224.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
var args = cljs.spec.validate_fn.call(null,f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.call(null,f,args);
}catch (e40227){if((e40227 instanceof Error)){
var t = e40227;
return t;
} else {
throw e40227;

}
}})();
if((ret instanceof Error)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"fn","fn",465265323,null)),new cljs.core.Keyword(null,"val","val",128701612),args,new cljs.core.Keyword(null,"reason","reason",-2070751759),ret.message,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var cret = cljs.spec.dt.call(null,self__.retspec,ret,self__.rform);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cret)){
return cljs.spec.explain_1.call(null,self__.rform,self__.retspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"ret","ret",-468222814)),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.conform.call(null,self__.argspec,args);
return cljs.spec.explain_1.call(null,self__.fform,self__.fnspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"fn","fn",-1175266204)),via,in$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return null;
}
}
}
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Keyword(null,"val","val",128701612),f,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});})(specs))
;

cljs.spec.t_cljs$spec40224.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,overrides,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.return$.call(null,((function (___$3,specs){
return (function() { 
var G__40230__delegate = function (args){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,self__.argspec,args))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str((function (){var sb__22674__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_40228_40231 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_40229_40232 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_40228_40231,_STAR_print_fn_STAR_40229_40232,sb__22674__auto__,___$3,specs){
return (function (x__22675__auto__){
return sb__22674__auto__.append(x__22675__auto__);
});})(_STAR_print_newline_STAR_40228_40231,_STAR_print_fn_STAR_40229_40232,sb__22674__auto__,___$3,specs))
;

try{cljs.spec.explain.call(null,self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40229_40232;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_40228_40231;
}
return [cljs.core.str(sb__22674__auto__)].join('');
})()),cljs.core.str("\n"),cljs.core.str("(valid? argspec args)")].join('')));
}

return cljs.spec.impl.gen.generate.call(null,cljs.spec.gen.call(null,self__.retspec,overrides));
};
var G__40230 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40233__i = 0, G__40233__a = new Array(arguments.length -  0);
while (G__40233__i < G__40233__a.length) {G__40233__a[G__40233__i] = arguments[G__40233__i + 0]; ++G__40233__i;}
  args = new cljs.core.IndexedSeq(G__40233__a,0);
} 
return G__40230__delegate.call(this,args);};
G__40230.cljs$lang$maxFixedArity = 0;
G__40230.cljs$lang$applyTo = (function (arglist__40234){
var args = cljs.core.seq(arglist__40234);
return G__40230__delegate(args);
});
G__40230.cljs$core$IFn$_invoke$arity$variadic = G__40230__delegate;
return G__40230;
})()
;})(___$3,specs))
);
}
});})(specs))
;

cljs.spec.t_cljs$spec40224.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1);
});})(specs))
;

cljs.spec.t_cljs$spec40224.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"args","args",1315556576)),(function (){var x__22516__auto__ = self__.aform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ret","ret",-468222814)),(function (){var x__22516__auto__ = self__.rform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fn","fn",-1175266204)),(function (){var x__22516__auto__ = self__.fform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22516__auto__);
})())));
});})(specs))
;

cljs.spec.t_cljs$spec40224.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fspec-impl","fspec-impl",897021908,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'fspec'"], null)),new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"meta40225","meta40225",-1777860278,null)], null);
});})(specs))
;

cljs.spec.t_cljs$spec40224.cljs$lang$type = true;

cljs.spec.t_cljs$spec40224.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec40224";

cljs.spec.t_cljs$spec40224.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__22242__auto__,writer__22243__auto__,opt__22244__auto__){
return cljs.core._write.call(null,writer__22243__auto__,"cljs.spec/t_cljs$spec40224");
});})(specs))
;

cljs.spec.__GT_t_cljs$spec40224 = ((function (specs){
return (function cljs$spec$fspec_impl_$___GT_t_cljs$spec40224(fspec_impl__$1,argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta40225){
return (new cljs.spec.t_cljs$spec40224(fspec_impl__$1,argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta40225));
});})(specs))
;

}

return (new cljs.spec.t_cljs$spec40224(cljs$spec$fspec_impl,argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.def_impl.call(null,new cljs.core.Keyword("cljs.spec","kvs->map","cljs.spec/kvs->map",-1189105441),cljs.core.list(new cljs.core.Symbol("cljs.spec","conformer","cljs.spec/conformer",-236330417,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__40235#","p1__40235#",-1266288729,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__40235#","p1__40235#",-1266288729,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__40235#","p1__40235#",-1266288729,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__40236#","p1__40236#",-1122669373,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"p1__40236#","p1__40236#",-1122669373,null)))),cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__40235#","p1__40235#",-1266288729,null)], null),cljs.core.list(new cljs.core.Symbol(null,"zipmap","zipmap",-690049687,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__40235#","p1__40235#",-1266288729,null)),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__40235#","p1__40235#",-1266288729,null)))),(function (p1__40235_SHARP_){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),p1__40235_SHARP_),cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),p1__40235_SHARP_));
}),null,true,(function (p1__40236_SHARP_){
return cljs.core.map.call(null,(function (p__40237){
var vec__40238 = p__40237;
var k = cljs.core.nth.call(null,vec__40238,(0),null);
var v = cljs.core.nth.call(null,vec__40238,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),k,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),v], null);
}),p1__40236_SHARP_);
})));
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.exercise = (function cljs$spec$exercise(var_args){
var args40242 = [];
var len__22773__auto___40245 = arguments.length;
var i__22774__auto___40246 = (0);
while(true){
if((i__22774__auto___40246 < len__22773__auto___40245)){
args40242.push((arguments[i__22774__auto___40246]));

var G__40247 = (i__22774__auto___40246 + (1));
i__22774__auto___40246 = G__40247;
continue;
} else {
}
break;
}

var G__40244 = args40242.length;
switch (G__40244) {
case 1:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40242.length)].join('')));

}
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.exercise.call(null,spec,(10));
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.exercise.call(null,spec,n,null);
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.call(null,(function (p1__40241_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__40241_SHARP_,cljs.spec.conform.call(null,spec,p1__40241_SHARP_)],null));
}),cljs.spec.impl.gen.sample.call(null,cljs.spec.gen.call(null,spec,overrides),n));
});

cljs.spec.exercise.cljs$lang$maxFixedArity = 3;

/**
 * Return true if inst at or after start and before end
 */
cljs.spec.inst_in_range_QMARK_ = (function cljs$spec$inst_in_range_QMARK_(start,end,inst){
var and__21578__auto__ = cljs.core.inst_QMARK_.call(null,inst);
if(and__21578__auto__){
var t = cljs.core.inst_ms.call(null,inst);
return ((cljs.core.inst_ms.call(null,start) <= t)) && ((t < cljs.core.inst_ms.call(null,end)));
} else {
return and__21578__auto__;
}
});
/**
 * Return true if start <= val and val < end
 */
cljs.spec.int_in_range_QMARK_ = (function cljs$spec$int_in_range_QMARK_(start,end,val){
if(cljs.core.integer_QMARK_.call(null,val)){
return ((start <= val)) && ((val < end));
} else {
if((val instanceof goog.math.Long)){
var and__21578__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__21578__auto__)){
return val.lessThan(end);
} else {
return and__21578__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__21578__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__21578__auto__)){
return val.lessThan(end);
} else {
return and__21578__auto__;
}
} else {
return false;

}
}
}
});

//# sourceMappingURL=spec.js.map?rel=1471181961138