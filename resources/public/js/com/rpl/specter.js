// Compiled by ClojureScript 1.9.225 {}
goog.provide('com.rpl.specter');
goog.require('cljs.core');
goog.require('com.rpl.specter.protocols');
goog.require('com.rpl.specter.impl');
goog.require('clojure.set');
/**
 * Returns a compiled version of the given path for use with
 * compiled-{select/transform/setval/etc.} functions. This can compile navigators
 * (defined with `defnav`) without their parameters, and the resulting compiled
 * path will require parameters for all such navigators in the order in which
 * they were declared.
 */
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__22780__auto__ = [];
var len__22773__auto___50142 = arguments.length;
var i__22774__auto___50143 = (0);
while(true){
if((i__22774__auto___50143 < len__22773__auto___50142)){
args__22780__auto__.push((arguments[i__22774__auto___50143]));

var G__50144 = (i__22774__auto___50143 + (1));
i__22774__auto___50143 = G__50144;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});

com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic = (function (apath){
return com.rpl.specter.impl.comp_paths_STAR_.call(null,cljs.core.vec.call(null,apath));
});

com.rpl.specter.comp_paths.cljs$lang$maxFixedArity = (0);

com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq50141){
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50141));
});

/**
 * Mandate that operations that do inline path factoring and compilation
 *           (select/transform/setval/replace-in/path/etc.) must succeed in 
 *           factoring the path into static and dynamic portions. If not, an
 *           error will be thrown and the reasons for not being able to factor
 *           will be printed. Defaults to false, and `(must-cache-paths! false)`
 *           can be used to turn this feature off.
 * 
 *           Reasons why it may not be able to factor a path include using
 *           a local symbol, special form, or regular function invocation
 *           where a navigator is expected.
 */
com.rpl.specter.must_cache_paths_BANG_ = com.rpl.specter.impl.must_cache_paths_BANG_;
/**
 * Version of select that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the path.
 */
com.rpl.specter.select_STAR_ = (function com$rpl$specter$select_STAR_(path,structure){
return com.rpl.specter.compiled_select.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-one that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one = com.rpl.specter.impl.compiled_select_one_STAR_;
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one_STAR_ = (function com$rpl$specter$select_one_STAR_(path,structure){
return com.rpl.specter.compiled_select_one.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-one! that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = com.rpl.specter.impl.compiled_select_one_BANG__STAR_;
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG__STAR_ = (function com$rpl$specter$select_one_BANG__STAR_(path,structure){
return com.rpl.specter.compiled_select_one_BANG_.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-first that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_first = com.rpl.specter.impl.compiled_select_first_STAR_;
/**
 * Returns first element found.
 */
com.rpl.specter.select_first_STAR_ = (function com$rpl$specter$select_first_STAR_(path,structure){
return com.rpl.specter.compiled_select_first.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-any that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_any = com.rpl.specter.impl.compiled_select_any_STAR_;
/**
 * Global value used to indicate no elements selected during
 *           [[select-any]].
 */
com.rpl.specter.NONE = com.rpl.specter.impl.NONE;
/**
 * Returns any element found or [[NONE]] if nothing selected. This is the most
 * efficient of the various selection operations.
 */
com.rpl.specter.select_any_STAR_ = (function com$rpl$specter$select_any_STAR_(path,structure){
return com.rpl.specter.compiled_select_any.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of selected-any? that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_selected_any_QMARK_ = com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_;
/**
 * Returns true if any element was selected, false otherwise.
 */
com.rpl.specter.selected_any_QMARK__STAR_ = (function com$rpl$specter$selected_any_QMARK__STAR_(path,structure){
return com.rpl.specter.compiled_selected_any_QMARK_.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of traverse that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse = com.rpl.specter.impl.do_compiled_traverse;
/**
 * Return a reducible object that traverses over `structure` to every element
 * specified by the path
 */
com.rpl.specter.traverse_STAR_ = (function com$rpl$specter$traverse_STAR_(apath,structure){
return com.rpl.specter.compiled_traverse.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,apath),structure);
});
/**
 * Version of transform that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_transform = com.rpl.specter.impl.compiled_transform_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by the result of running
 *   the transform-fn on it
 */
com.rpl.specter.transform_STAR_ = (function com$rpl$specter$transform_STAR_(path,transform_fn,structure){
return com.rpl.specter.compiled_transform.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),transform_fn,structure);
});
/**
 * Version of `multi-transform` that takes in a path precompiled with `comp-paths`
 */
com.rpl.specter.compiled_multi_transform = com.rpl.specter.impl.compiled_multi_transform_STAR_;
/**
 * Just like `transform` but expects transform functions to be specified
 * inline in the path using `terminal`. Error is thrown if navigation finishes
 * at a non-`terminal` navigator. `terminal-val` is a wrapper around `terminal` and is 
 * the `multi-transform` equivalent of `setval`.
 */
com.rpl.specter.multi_transform_STAR_ = (function com$rpl$specter$multi_transform_STAR_(path,structure){
return com.rpl.specter.compiled_multi_transform.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of setval that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_setval = com.rpl.specter.impl.compiled_setval_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by val
 */
com.rpl.specter.setval_STAR_ = (function com$rpl$specter$setval_STAR_(path,val,structure){
return com.rpl.specter.compiled_setval.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),val,structure);
});
/**
 * Version of replace-in that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_replace_in = com.rpl.specter.impl.compiled_replace_in_STAR_;
/**
 * Similar to transform, except returns a pair of [transformed-structure sequence-of-user-ret].
 * The transform-fn in this case is expected to return [ret user-ret]. ret is
 * what's used to transform the data structure, while user-ret will be added to the user-ret sequence
 * in the final return. replace-in is useful for situations where you need to know the specific values
 * of what was transformed in the data structure.
 */
com.rpl.specter.replace_in_STAR_ = (function com$rpl$specter$replace_in_STAR_(var_args){
var args__22780__auto__ = [];
var len__22773__auto___50152 = arguments.length;
var i__22774__auto___50153 = (0);
while(true){
if((i__22774__auto___50153 < len__22773__auto___50152)){
args__22780__auto__.push((arguments[i__22774__auto___50153]));

var G__50154 = (i__22774__auto___50153 + (1));
i__22774__auto___50153 = G__50154;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((3) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22781__auto__);
});

com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__50149){
var map__50150 = p__50149;
var map__50150__$1 = ((((!((map__50150 == null)))?((((map__50150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50150):map__50150);
var merge_fn = cljs.core.get.call(null,map__50150__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
return com.rpl.specter.compiled_replace_in.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),transform_fn,structure,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),merge_fn);
});

com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3);

com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq50145){
var G__50146 = cljs.core.first.call(null,seq50145);
var seq50145__$1 = cljs.core.next.call(null,seq50145);
var G__50147 = cljs.core.first.call(null,seq50145__$1);
var seq50145__$2 = cljs.core.next.call(null,seq50145__$1);
var G__50148 = cljs.core.first.call(null,seq50145__$2);
var seq50145__$3 = cljs.core.next.call(null,seq50145__$2);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__50146,G__50147,G__50148,seq50145__$3);
});

/**
 * Takes a compiled path that needs late-bound params and supplies it with
 *           an array of params and a position in the array from which to begin reading
 *           params. The return value is an executable selector.
 */
com.rpl.specter.bind_params_STAR_ = com.rpl.specter.impl.bind_params_STAR_;
com.rpl.specter.params_reset = (function com$rpl$specter$params_reset(params_path){
var s = com.rpl.specter.impl.params_needed_selector.call(null,params_path);
var t = com.rpl.specter.impl.params_needed_transformer.call(null,params_path);
var needed = com.rpl.specter.impl.num_needed_params.call(null,params_path);
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (s,t,needed){
return (function (params,params_idx,vals,structure,next_fn){
return s.call(null,params,(params_idx - needed),vals,structure,next_fn);
});})(s,t,needed))
,((function (s,t,needed){
return (function (params,params_idx,vals,structure,next_fn){
return t.call(null,params,(params_idx - needed),vals,structure,next_fn);
});})(s,t,needed))
),(0));
});
/**
 * Stops navigation at this point. For selection returns nothing and for 
 *        transformation returns the structure unchanged
 */
com.rpl.specter.STOP = com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.LeanPathExecutor,(function (structure,next_fn){
return com.rpl.specter.NONE;
}),(function (structure,next_fn){
return structure;
})));
/**
 * Stays navigated at the current point. Essentially a no-op navigator.
 */
com.rpl.specter.STAY = com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.LeanPathExecutor,(function (structure,next_fn){
return next_fn.call(null,structure);
}),(function (structure,next_fn){
return next_fn.call(null,structure);
})));
/**
 * For usage with `multi-transform`, defines an endpoint in the navigation
 *        that will have the parameterized transform function run. The transform
 *        function works just like it does in `transform`, with collected values
 *        given as the first arguments
 */
com.rpl.specter.terminal = (function (){var num_params__24612__auto__ = (1);
var tfns__24613__auto__ = com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (num_params__24612__auto__){
return (function (params,params_idx,vals,structure,next_fn){
var next_fn__$1 = com.rpl.specter.impl.mk_jump_next_fn.call(null,next_fn,params_idx,num_params__24612__auto__);
throw (new java.lang.IllegalArgumentException(com.rpl.specter.impl.smart_str.call(null,"'terminal' should only be used in multi-transform")));
});})(num_params__24612__auto__))
,((function (num_params__24612__auto__){
return (function (params,params_idx,vals,structure,next_fn){
var next_fn__$1 = com.rpl.specter.impl.mk_jump_next_fn.call(null,next_fn,params_idx,num_params__24612__auto__);
return com.rpl.specter.impl.terminal_STAR_.call(null,params,params_idx,vals,structure);
});})(num_params__24612__auto__))
);
if((num_params__24612__auto__ === (0))){
return com.rpl.specter.impl.no_params_compiled_path.call(null,tfns__24613__auto__);
} else {
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,tfns__24613__auto__,num_params__24612__auto__);
}
})();
/**
 * Like `terminal` but specifies a val to set at the location regardless of
 * the collected values or the value at the location.
 */
com.rpl.specter.terminal_val = cljs.core.vary_meta.call(null,(function (){var p = com.rpl.specter.impl.layered_wrapper.call(null,com.rpl.specter.terminal);
return ((function (p){
return (function (v){
var ret__24728__auto__ = p.call(null,com.rpl.specter.impl.fast_constantly.call(null,v));
if(cljs.core.truth_(com.rpl.specter.impl.layered_nav_QMARK_.call(null,ret__24728__auto__))){
return com.rpl.specter.impl.layered_nav_underlying.call(null,ret__24728__auto__);
} else {
throw (new java.lang.IllegalArgumentException(com.rpl.specter.impl.smart_str.call(null,"Expected result navigator '",new cljs.core.Symbol(null,"terminal","terminal",712660935,null),"' from nav constructor '",cljs.core.with_meta(new cljs.core.Symbol(null,"terminal-val","terminal-val",-317114826,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Like `terminal` but specifies a val to set at the location regardless of\n   the collected values or the value at the location."], null)),"'"," constructed with the provided constructor '",new cljs.core.Symbol(null,"p","p",1791580836,null),"'")));
}
});
;})(p))
})(),cljs.core.assoc,new cljs.core.Keyword(null,"layerednav","layerednav",891636982),true);
/**
 * Navigate to every element of the collection. For maps navigates to
 *        a vector of `[key value]`.
 */
com.rpl.specter.ALL = com.rpl.specter.comp_paths.call(null,com.rpl.specter.impl.__GT_AllNavigator.call(null));
/**
 * Navigate to each value of the map. This is more efficient than 
 *        navigating via [ALL LAST]
 */
com.rpl.specter.MAP_VALS = com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.LeanPathExecutor,(function (structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__22975__auto__,v){
var ret__22976__auto__ = next_fn.call(null,v);
if((ret__22976__auto__ === com.rpl.specter.NONE)){
return curr__22975__auto__;
} else {
return ret__22976__auto__;
}
}),com.rpl.specter.NONE,cljs.core.vals.call(null,structure));
}),(function (structure,next_fn){
return com.rpl.specter.impl.map_vals_transform.call(null,structure,next_fn);
})));
com.rpl.specter.VAL = com.rpl.specter.impl.__GT_ValCollect.call(null);
/**
 * Navigate to the last element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.LAST = com.rpl.specter.comp_paths.call(null,com.rpl.specter.impl.__GT_PosNavigator.call(null,com.rpl.specter.impl.get_last,com.rpl.specter.impl.update_last));
/**
 * Navigate to the first element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.FIRST = com.rpl.specter.comp_paths.call(null,com.rpl.specter.impl.__GT_PosNavigator.call(null,com.rpl.specter.impl.get_first,com.rpl.specter.impl.update_first));
/**
 * Uses start-fn and end-fn to determine the bounds of the subsequence
 *        to select when navigating. Each function takes in the structure as input.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params24557,params_idx24558,vals__24559__auto__,structure,next_fn__24560__auto__){
var next_fn = (function (structure__24561__auto__){
return next_fn__24560__auto__.call(null,params24557,(params_idx24558 + 2),vals__24559__auto__,structure__24561__auto__);
});
var start_fn = (params24557[(params_idx24558 + (0))]);
var end_fn = (params24557[(params_idx24558 + (1))]);
return com.rpl.specter.impl.srange_select.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
}),(function (params24557,params_idx24558,vals__24559__auto__,structure,next_fn__24560__auto__){
var next_fn = (function (structure__24561__auto__){
return next_fn__24560__auto__.call(null,params24557,(params_idx24558 + 2),vals__24559__auto__,structure__24561__auto__);
});
var start_fn = (params24557[(params_idx24558 + (0))]);
var end_fn = (params24557[(params_idx24558 + (1))]);
return com.rpl.specter.impl.srange_transform.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
})),2);
/**
 * Navigates to the subsequence bound by the indexes start (inclusive)
 *        and end (exclusive)
 */
com.rpl.specter.srange = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params24557,params_idx24558,vals__24559__auto__,structure,next_fn__24560__auto__){
var next_fn = (function (structure__24561__auto__){
return next_fn__24560__auto__.call(null,params24557,(params_idx24558 + 2),vals__24559__auto__,structure__24561__auto__);
});
var start = (params24557[(params_idx24558 + (0))]);
var end = (params24557[(params_idx24558 + (1))]);
return com.rpl.specter.impl.srange_select.call(null,structure,start,end,next_fn);
}),(function (params24557,params_idx24558,vals__24559__auto__,structure,next_fn__24560__auto__){
var next_fn = (function (structure__24561__auto__){
return next_fn__24560__auto__.call(null,params24557,(params_idx24558 + 2),vals__24559__auto__,structure__24561__auto__);
});
var start = (params24557[(params_idx24558 + (0))]);
var end = (params24557[(params_idx24558 + (1))]);
return com.rpl.specter.impl.srange_transform.call(null,structure,start,end,next_fn);
})),2);
/**
 * Navigates to every continuous subsequence of elements matching `pred`
 */
com.rpl.specter.continuous_subseqs = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params24557,params_idx24558,vals__24559__auto__,structure,next_fn__24560__auto__){
var next_fn = (function (structure__24561__auto__){
return next_fn__24560__auto__.call(null,params24557,(params_idx24558 + 1),vals__24559__auto__,structure__24561__auto__);
});
var pred = (params24557[(params_idx24558 + (0))]);
return cljs.core.reduce.call(null,((function (next_fn,pred){
return (function (curr__22975__auto__,p__50155){
var vec__50156 = p__50155;
var s = cljs.core.nth.call(null,vec__50156,(0),null);
var e = cljs.core.nth.call(null,vec__50156,(1),null);
var ret__22976__auto__ = com.rpl.specter.impl.srange_select.call(null,structure,s,e,next_fn);
if((ret__22976__auto__ === com.rpl.specter.NONE)){
return curr__22975__auto__;
} else {
return ret__22976__auto__;
}
});})(next_fn,pred))
,com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges.call(null,structure,pred));
}),(function (params24557,params_idx24558,vals__24559__auto__,structure,next_fn__24560__auto__){
var next_fn = (function (structure__24561__auto__){
return next_fn__24560__auto__.call(null,params24557,(params_idx24558 + 1),vals__24559__auto__,structure__24561__auto__);
});
var pred = (params24557[(params_idx24558 + (0))]);
return cljs.core.reduce.call(null,((function (next_fn,pred){
return (function (structure__$1,p__50159){
var vec__50160 = p__50159;
var s = cljs.core.nth.call(null,vec__50160,(0),null);
var e = cljs.core.nth.call(null,vec__50160,(1),null);
return com.rpl.specter.impl.srange_transform.call(null,structure__$1,s,e,next_fn);
});})(next_fn,pred))
,structure,cljs.core.reverse.call(null,com.rpl.specter.impl.matching_ranges.call(null,structure,pred)));
})),1);
/**
 * Navigate to the empty subsequence before the first element of the collection.
 */
com.rpl.specter.BEGINNING = com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.LeanPathExecutor,(function (structure,next_fn){
return next_fn.call(null,cljs.core.PersistentVector.EMPTY);
}),(function (structure,next_fn){
var to_prepend = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.impl.prepend_all.call(null,structure,to_prepend);
})));
/**
 * Navigate to the empty subsequence after the last element of the collection.
 */
com.rpl.specter.END = com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.LeanPathExecutor,(function (structure,next_fn){
return next_fn.call(null,cljs.core.PersistentVector.EMPTY);
}),(function (structure,next_fn){
var to_append = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.impl.append_all.call(null,structure,to_append);
})));
/**
 * Navigates to the specified subset (by taking an intersection).
 *        In a transform, that subset in the original set is changed to the
 *        new value of the subset.
 */
com.rpl.specter.subset = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params24557,params_idx24558,vals__24559__auto__,structure,next_fn__24560__auto__){
var next_fn = (function (structure__24561__auto__){
return next_fn__24560__auto__.call(null,params24557,(params_idx24558 + 1),vals__24559__auto__,structure__24561__auto__);
});
var aset = (params24557[(params_idx24558 + (0))]);
return next_fn.call(null,clojure.set.intersection.call(null,structure,aset));
}),(function (params24557,params_idx24558,vals__24559__auto__,structure,next_fn__24560__auto__){
var next_fn = (function (structure__24561__auto__){
return next_fn__24560__auto__.call(null,params24557,(params_idx24558 + 1),vals__24559__auto__,structure__24561__auto__);
});
var aset = (params24557[(params_idx24558 + (0))]);
var subset = clojure.set.intersection.call(null,structure,aset);
var newset = next_fn.call(null,subset);
return clojure.set.union.call(null,clojure.set.difference.call(null,structure,subset),newset);
})),1);
/**
 * Navigates to the specified submap (using select-keys).
 *        In a transform, that submap in the original map is changed to the new
 *        value of the submap.
 */
com.rpl.specter.submap = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params24557,params_idx24558,vals__24559__auto__,structure,next_fn__24560__auto__){
var next_fn = (function (structure__24561__auto__){
return next_fn__24560__auto__.call(null,params24557,(params_idx24558 + 1),vals__24559__auto__,structure__24561__auto__);
});
var m_keys = (params24557[(params_idx24558 + (0))]);
return next_fn.call(null,cljs.core.select_keys.call(null,structure,m_keys));
}),(function (params24557,params_idx24558,vals__24559__auto__,structure,next_fn__24560__auto__){
var next_fn = (function (structure__24561__auto__){
return next_fn__24560__auto__.call(null,params24557,(params_idx24558 + 1),vals__24559__auto__,structure__24561__auto__);
});
var m_keys = (params24557[(params_idx24558 + (0))]);
var submap = cljs.core.select_keys.call(null,structure,m_keys);
var newmap = next_fn.call(null,submap);
return cljs.core.merge.call(null,cljs.core.reduce.call(null,cljs.core.dissoc,structure,m_keys),newmap);
})),1);
/**
 * Using clojure.walk, navigate the data structure until reaching
 *        a value for which `afn` returns truthy.
 */
com.rpl.specter.walker = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params24557,params_idx24558,vals__24559__auto__,structure,next_fn__24560__auto__){
var next_fn = (function (structure__24561__auto__){
return next_fn__24560__auto__.call(null,params24557,(params_idx24558 + 1),vals__24559__auto__,structure__24561__auto__);
});
var afn = (params24557[(params_idx24558 + (0))]);
return com.rpl.specter.impl.walk_select.call(null,afn,next_fn,structure);
}),(function (params24557,params_idx24558,vals__24559__auto__,structure,next_fn__24560__auto__){
var next_fn = (function (structure__24561__auto__){
return next_fn__24560__auto__.call(null,params24557,(params_idx24558 + 1),vals__24559__auto__,structure__24561__auto__);
});
var afn = (params24557[(params_idx24558 + (0))]);
return com.rpl.specter.impl.walk_until.call(null,afn,next_fn,structure);
})),1);
/**
 * Like `walker` but maintains metadata of any forms traversed.
 */
com.rpl.specter.codewalker = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params24557,params_idx24558,vals__24559__auto__,structure,next_fn__24560__auto__){
var next_fn = (function (structure__24561__auto__){
return next_fn__24560__auto__.call(null,params24557,(params_idx24558 + 1),vals__24559__auto__,structure__24561__auto__);
});
var afn = (params24557[(params_idx24558 + (0))]);
return com.rpl.specter.impl.walk_select.call(null,afn,next_fn,structure);
}),(function (params24557,params_idx24558,vals__24559__auto__,structure,next_fn__24560__auto__){
var next_fn = (function (structure__24561__auto__){
return next_fn__24560__auto__.call(null,params24557,(params_idx24558 + 1),vals__24559__auto__,structure__24561__auto__);
});
var afn = (params24557[(params_idx24558 + (0))]);
return com.rpl.specter.impl.codewalk_until.call(null,afn,next_fn,structure);
})),1);
/**
 * Navigates to a sequence that contains the results of (select ...),
 *   but is a view to the original structure that can be transformed.
 * 
 *   Requires that the input navigators will walk the structure's
 *   children in the same order when executed on "select" and then
 *   "transform".
 */
com.rpl.specter.subselect = (function com$rpl$specter$subselect(var_args){
var args__22780__auto__ = [];
var len__22773__auto___50170 = arguments.length;
var i__22774__auto___50171 = (0);
while(true){
if((i__22774__auto___50171 < len__22773__auto___50170)){
args__22780__auto__.push((arguments[i__22774__auto___50171]));

var G__50172 = (i__22774__auto___50171 + (1));
i__22774__auto___50171 = G__50172;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});

com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__24594__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__24595__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__24594__auto__);
var offsets__24596__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__24595__auto__));
var any_params_needed_QMARK___24597__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__24594__auto__)));
var num_params50166 = cljs.core.last.call(null,offsets__24596__auto__);
var latefns50164 = cljs.core.map.call(null,((function (paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50166){
return (function (o__24598__auto__,p__24599__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__24599__auto__))){
return ((function (paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50166){
return (function (params__24600__auto__,params_idx__24601__auto__){
return p__24599__auto__;
});
;})(paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50166))
} else {
return ((function (paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50166){
return (function (params__24600__auto__,params_idx__24601__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__24599__auto__,params__24600__auto__,(params_idx__24601__auto__ + o__24598__auto__));
});
;})(paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50166))
}
});})(paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50166))
,offsets__24596__auto__,paths__24594__auto__);
var vec__50167 = latefns50164;
var G__50165 = cljs.core.nth.call(null,vec__50167,(0),null);
var ret__24602__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50166,latefns50164,vec__50167,G__50165){
return (function (params24557,params_idx24558,vals__24559__auto__,structure,next_fn__24560__auto__){
var next_fn = ((function (paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50166,latefns50164,vec__50167,G__50165){
return (function (structure__24561__auto__){
return next_fn__24560__auto__.call(null,params24557,(params_idx24558 + num_params50166),vals__24559__auto__,structure__24561__auto__);
});})(paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50166,latefns50164,vec__50167,G__50165))
;
var late = G__50165.call(null,params24557,params_idx24558);
return next_fn.call(null,com.rpl.specter.compiled_select.call(null,late,structure));
});})(paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50166,latefns50164,vec__50167,G__50165))
,((function (paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50166,latefns50164,vec__50167,G__50165){
return (function (params24557,params_idx24558,vals__24559__auto__,structure,next_fn__24560__auto__){
var next_fn = ((function (paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50166,latefns50164,vec__50167,G__50165){
return (function (structure__24561__auto__){
return next_fn__24560__auto__.call(null,params24557,(params_idx24558 + num_params50166),vals__24559__auto__,structure__24561__auto__);
});})(paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50166,latefns50164,vec__50167,G__50165))
;
var late = G__50165.call(null,params24557,params_idx24558);
var select_result = com.rpl.specter.compiled_select.call(null,late,structure);
var transformed = next_fn.call(null,select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.call(null,transformed);
return com.rpl.specter.compiled_transform.call(null,late,((function (select_result,transformed,values_to_insert,next_fn,late,paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50166,latefns50164,vec__50167,G__50165){
return (function (_){
var next_val = cljs.core.first.call(null,com.rpl.specter.impl.get_cell.call(null,values_to_insert));
com.rpl.specter.impl.update_cell_BANG_.call(null,values_to_insert,cljs.core.rest);

return next_val;
});})(select_result,transformed,values_to_insert,next_fn,late,paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50166,latefns50164,vec__50167,G__50165))
,structure);
});})(paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50166,latefns50164,vec__50167,G__50165))
),num_params50166);
if(!(any_params_needed_QMARK___24597__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__24602__auto__,null,(0));
} else {
return ret__24602__auto__;
}
});

com.rpl.specter.subselect.cljs$lang$maxFixedArity = (0);

com.rpl.specter.subselect.cljs$lang$applyTo = (function (seq50163){
return com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50163));
});

/**
 * Navigates to the specified key, navigating to nil if it does not exist.
 */
com.rpl.specter.keypath = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params24557,params_idx24558,vals__24559__auto__,structure,next_fn__24560__auto__){
var next_fn = (function (structure__24561__auto__){
return next_fn__24560__auto__.call(null,params24557,(params_idx24558 + 1),vals__24559__auto__,structure__24561__auto__);
});
var key = (params24557[(params_idx24558 + (0))]);
return next_fn.call(null,cljs.core.get.call(null,structure,key));
}),(function (params24557,params_idx24558,vals__24559__auto__,structure,next_fn__24560__auto__){
var next_fn = (function (structure__24561__auto__){
return next_fn__24560__auto__.call(null,params24557,(params_idx24558 + 1),vals__24559__auto__,structure__24561__auto__);
});
var key = (params24557[(params_idx24558 + (0))]);
return cljs.core.assoc.call(null,structure,key,next_fn.call(null,cljs.core.get.call(null,structure,key)));
})),1);
/**
 * Navigates to the key only if it exists in the map.
 */
com.rpl.specter.must = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params24557,params_idx24558,vals__24559__auto__,structure,next_fn__24560__auto__){
var next_fn = (function (structure__24561__auto__){
return next_fn__24560__auto__.call(null,params24557,(params_idx24558 + 1),vals__24559__auto__,structure__24561__auto__);
});
var k = (params24557[(params_idx24558 + (0))]);
if(cljs.core.contains_QMARK_.call(null,structure,k)){
return next_fn.call(null,cljs.core.get.call(null,structure,k));
} else {
return com.rpl.specter.NONE;
}
}),(function (params24557,params_idx24558,vals__24559__auto__,structure,next_fn__24560__auto__){
var next_fn = (function (structure__24561__auto__){
return next_fn__24560__auto__.call(null,params24557,(params_idx24558 + 1),vals__24559__auto__,structure__24561__auto__);
});
var k = (params24557[(params_idx24558 + (0))]);
if(cljs.core.contains_QMARK_.call(null,structure,k)){
return cljs.core.assoc.call(null,structure,k,next_fn.call(null,cljs.core.get.call(null,structure,k)));
} else {
return structure;
}
})),1);
/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params24557,params_idx24558,vals__24559__auto__,structure,next_fn__24560__auto__){
var next_fn = (function (structure__24561__auto__){
return next_fn__24560__auto__.call(null,params24557,(params_idx24558 + 1),vals__24559__auto__,structure__24561__auto__);
});
var afn = (params24557[(params_idx24558 + (0))]);
return next_fn.call(null,afn.call(null,structure));
}),(function (params24557,params_idx24558,vals__24559__auto__,structure,next_fn__24560__auto__){
var next_fn = (function (structure__24561__auto__){
return next_fn__24560__auto__.call(null,params24557,(params_idx24558 + 1),vals__24559__auto__,structure__24561__auto__);
});
var afn = (params24557[(params_idx24558 + (0))]);
return next_fn.call(null,afn.call(null,structure));
})),1);
/**
 * Navigate to the result of running `parse-fn` on the value. For 
 *        transforms, the transformed value then has `unparse-fn` run on 
 *        it to get the final value at this point.
 */
com.rpl.specter.parser = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params24557,params_idx24558,vals__24559__auto__,structure,next_fn__24560__auto__){
var next_fn = (function (structure__24561__auto__){
return next_fn__24560__auto__.call(null,params24557,(params_idx24558 + 2),vals__24559__auto__,structure__24561__auto__);
});
var parse_fn = (params24557[(params_idx24558 + (0))]);
var unparse_fn = (params24557[(params_idx24558 + (1))]);
return next_fn.call(null,parse_fn.call(null,structure));
}),(function (params24557,params_idx24558,vals__24559__auto__,structure,next_fn__24560__auto__){
var next_fn = (function (structure__24561__auto__){
return next_fn__24560__auto__.call(null,params24557,(params_idx24558 + 2),vals__24559__auto__,structure__24561__auto__);
});
var parse_fn = (params24557[(params_idx24558 + (0))]);
var unparse_fn = (params24557[(params_idx24558 + (1))]);
return unparse_fn.call(null,next_fn.call(null,parse_fn.call(null,structure)));
})),2);
/**
 * Navigates to atom value.
 */
com.rpl.specter.ATOM = com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.LeanPathExecutor,(function (structure,next_fn){
return next_fn.call(null,cljs.core.deref.call(null,structure));
}),(function (structure,next_fn){
cljs.core.swap_BANG_.call(null,structure,next_fn);

return structure;
})));
/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 * 
 *   The input path may be parameterized, in which case the result of selected?
 *   will be parameterized in the order of which the parameterized navigators
 *   were declared.
 */
com.rpl.specter.selected_QMARK_ = (function com$rpl$specter$selected_QMARK_(var_args){
var args__22780__auto__ = [];
var len__22773__auto___50182 = arguments.length;
var i__22774__auto___50183 = (0);
while(true){
if((i__22774__auto___50183 < len__22773__auto___50182)){
args__22780__auto__.push((arguments[i__22774__auto___50183]));

var G__50184 = (i__22774__auto___50183 + (1));
i__22774__auto___50183 = G__50184;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});

com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var temp__6550__auto__ = com.rpl.specter.impl.extract_basic_filter_fn.call(null,path);
if(cljs.core.truth_(temp__6550__auto__)){
var afn = temp__6550__auto__;
return afn;
} else {
var paths__24594__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__24595__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__24594__auto__);
var offsets__24596__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__24595__auto__));
var any_params_needed_QMARK___24597__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__24594__auto__)));
var num_params50178 = cljs.core.last.call(null,offsets__24596__auto__);
var latefns50176 = cljs.core.map.call(null,((function (paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50178,temp__6550__auto__){
return (function (o__24598__auto__,p__24599__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__24599__auto__))){
return ((function (paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50178,temp__6550__auto__){
return (function (params__24600__auto__,params_idx__24601__auto__){
return p__24599__auto__;
});
;})(paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50178,temp__6550__auto__))
} else {
return ((function (paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50178,temp__6550__auto__){
return (function (params__24600__auto__,params_idx__24601__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__24599__auto__,params__24600__auto__,(params_idx__24601__auto__ + o__24598__auto__));
});
;})(paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50178,temp__6550__auto__))
}
});})(paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50178,temp__6550__auto__))
,offsets__24596__auto__,paths__24594__auto__);
var vec__50179 = latefns50176;
var G__50177 = cljs.core.nth.call(null,vec__50179,(0),null);
var ret__24602__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50178,latefns50176,vec__50179,G__50177,temp__6550__auto__){
return (function (params24557,params_idx24558,vals__24559__auto__,structure,next_fn__24560__auto__){
var next_fn = ((function (paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50178,latefns50176,vec__50179,G__50177,temp__6550__auto__){
return (function (structure__24561__auto__){
return next_fn__24560__auto__.call(null,params24557,(params_idx24558 + num_params50178),vals__24559__auto__,structure__24561__auto__);
});})(paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50178,latefns50176,vec__50179,G__50177,temp__6550__auto__))
;
var late = G__50177.call(null,params24557,params_idx24558);
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,late,paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50178,latefns50176,vec__50179,G__50177,temp__6550__auto__){
return (function (p1__50173_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__50173_SHARP_);
});})(next_fn,late,paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50178,latefns50176,vec__50179,G__50177,temp__6550__auto__))
,structure,next_fn);
});})(paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50178,latefns50176,vec__50179,G__50177,temp__6550__auto__))
,((function (paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50178,latefns50176,vec__50179,G__50177,temp__6550__auto__){
return (function (params24557,params_idx24558,vals__24559__auto__,structure,next_fn__24560__auto__){
var next_fn = ((function (paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50178,latefns50176,vec__50179,G__50177,temp__6550__auto__){
return (function (structure__24561__auto__){
return next_fn__24560__auto__.call(null,params24557,(params_idx24558 + num_params50178),vals__24559__auto__,structure__24561__auto__);
});})(paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50178,latefns50176,vec__50179,G__50177,temp__6550__auto__))
;
var late = G__50177.call(null,params24557,params_idx24558);
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,late,paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50178,latefns50176,vec__50179,G__50177,temp__6550__auto__){
return (function (p1__50174_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__50174_SHARP_);
});})(next_fn,late,paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50178,latefns50176,vec__50179,G__50177,temp__6550__auto__))
,structure,next_fn);
});})(paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50178,latefns50176,vec__50179,G__50177,temp__6550__auto__))
),num_params50178);
if(!(any_params_needed_QMARK___24597__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__24602__auto__,null,(0));
} else {
return ret__24602__auto__;
}
}
});

com.rpl.specter.selected_QMARK_.cljs$lang$maxFixedArity = (0);

com.rpl.specter.selected_QMARK_.cljs$lang$applyTo = (function (seq50175){
return com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50175));
});

com.rpl.specter.not_selected_QMARK_ = (function com$rpl$specter$not_selected_QMARK_(var_args){
var args__22780__auto__ = [];
var len__22773__auto___50194 = arguments.length;
var i__22774__auto___50195 = (0);
while(true){
if((i__22774__auto___50195 < len__22773__auto___50194)){
args__22780__auto__.push((arguments[i__22774__auto___50195]));

var G__50196 = (i__22774__auto___50195 + (1));
i__22774__auto___50195 = G__50196;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});

com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var temp__6550__auto__ = com.rpl.specter.impl.extract_basic_filter_fn.call(null,path);
if(cljs.core.truth_(temp__6550__auto__)){
var afn = temp__6550__auto__;
return ((function (afn,temp__6550__auto__){
return (function (s){
return cljs.core.not.call(null,afn.call(null,s));
});
;})(afn,temp__6550__auto__))
} else {
var paths__24594__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__24595__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__24594__auto__);
var offsets__24596__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__24595__auto__));
var any_params_needed_QMARK___24597__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__24594__auto__)));
var num_params50190 = cljs.core.last.call(null,offsets__24596__auto__);
var latefns50188 = cljs.core.map.call(null,((function (paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50190,temp__6550__auto__){
return (function (o__24598__auto__,p__24599__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__24599__auto__))){
return ((function (paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50190,temp__6550__auto__){
return (function (params__24600__auto__,params_idx__24601__auto__){
return p__24599__auto__;
});
;})(paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50190,temp__6550__auto__))
} else {
return ((function (paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50190,temp__6550__auto__){
return (function (params__24600__auto__,params_idx__24601__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__24599__auto__,params__24600__auto__,(params_idx__24601__auto__ + o__24598__auto__));
});
;})(paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50190,temp__6550__auto__))
}
});})(paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50190,temp__6550__auto__))
,offsets__24596__auto__,paths__24594__auto__);
var vec__50191 = latefns50188;
var G__50189 = cljs.core.nth.call(null,vec__50191,(0),null);
var ret__24602__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50190,latefns50188,vec__50191,G__50189,temp__6550__auto__){
return (function (params24557,params_idx24558,vals__24559__auto__,structure,next_fn__24560__auto__){
var next_fn = ((function (paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50190,latefns50188,vec__50191,G__50189,temp__6550__auto__){
return (function (structure__24561__auto__){
return next_fn__24560__auto__.call(null,params24557,(params_idx24558 + num_params50190),vals__24559__auto__,structure__24561__auto__);
});})(paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50190,latefns50188,vec__50191,G__50189,temp__6550__auto__))
;
var late = G__50189.call(null,params24557,params_idx24558);
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,late,paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50190,latefns50188,vec__50191,G__50189,temp__6550__auto__){
return (function (p1__50185_SHARP_){
return com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,late,p1__50185_SHARP_);
});})(next_fn,late,paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50190,latefns50188,vec__50191,G__50189,temp__6550__auto__))
,structure,next_fn);
});})(paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50190,latefns50188,vec__50191,G__50189,temp__6550__auto__))
,((function (paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50190,latefns50188,vec__50191,G__50189,temp__6550__auto__){
return (function (params24557,params_idx24558,vals__24559__auto__,structure,next_fn__24560__auto__){
var next_fn = ((function (paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50190,latefns50188,vec__50191,G__50189,temp__6550__auto__){
return (function (structure__24561__auto__){
return next_fn__24560__auto__.call(null,params24557,(params_idx24558 + num_params50190),vals__24559__auto__,structure__24561__auto__);
});})(paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50190,latefns50188,vec__50191,G__50189,temp__6550__auto__))
;
var late = G__50189.call(null,params24557,params_idx24558);
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,late,paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50190,latefns50188,vec__50191,G__50189,temp__6550__auto__){
return (function (p1__50186_SHARP_){
return com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,late,p1__50186_SHARP_);
});})(next_fn,late,paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50190,latefns50188,vec__50191,G__50189,temp__6550__auto__))
,structure,next_fn);
});})(paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50190,latefns50188,vec__50191,G__50189,temp__6550__auto__))
),num_params50190);
if(!(any_params_needed_QMARK___24597__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__24602__auto__,null,(0));
} else {
return ret__24602__auto__;
}
}
});

com.rpl.specter.not_selected_QMARK_.cljs$lang$maxFixedArity = (0);

com.rpl.specter.not_selected_QMARK_.cljs$lang$applyTo = (function (seq50187){
return com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50187));
});

/**
 * Navigates to a view of the current sequence that only contains elements that
 *   match the given path. An element matches the selector path if calling select
 *   on that element with the path yields anything other than an empty sequence.
 * 
 * The input path may be parameterized, in which case the result of filterer
 * will be parameterized in the order of which the parameterized selectors
 * were declared.
 */
com.rpl.specter.filterer = (function com$rpl$specter$filterer(var_args){
var args__22780__auto__ = [];
var len__22773__auto___50198 = arguments.length;
var i__22774__auto___50199 = (0);
while(true){
if((i__22774__auto___50199 < len__22773__auto___50198)){
args__22780__auto__.push((arguments[i__22774__auto___50199]));

var G__50200 = (i__22774__auto___50199 + (1));
i__22774__auto___50199 = G__50200;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});

com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return com.rpl.specter.subselect.call(null,com.rpl.specter.ALL,com.rpl.specter.selected_QMARK_.call(null,path));
});

com.rpl.specter.filterer.cljs$lang$maxFixedArity = (0);

com.rpl.specter.filterer.cljs$lang$applyTo = (function (seq50197){
return com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50197));
});

/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 * 
 * The input path may be parameterized, in which case the result of transformed
 * will be parameterized in the order of which the parameterized navigators
 * were declared.
 */
com.rpl.specter.transformed = (function com$rpl$specter$transformed(path,update_fn){
var paths__24594__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__24595__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__24594__auto__);
var offsets__24596__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__24595__auto__));
var any_params_needed_QMARK___24597__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__24594__auto__)));
var num_params50209 = cljs.core.last.call(null,offsets__24596__auto__);
var latefns50207 = cljs.core.map.call(null,((function (paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50209){
return (function (o__24598__auto__,p__24599__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__24599__auto__))){
return ((function (paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50209){
return (function (params__24600__auto__,params_idx__24601__auto__){
return p__24599__auto__;
});
;})(paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50209))
} else {
return ((function (paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50209){
return (function (params__24600__auto__,params_idx__24601__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__24599__auto__,params__24600__auto__,(params_idx__24601__auto__ + o__24598__auto__));
});
;})(paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50209))
}
});})(paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50209))
,offsets__24596__auto__,paths__24594__auto__);
var vec__50210 = latefns50207;
var G__50208 = cljs.core.nth.call(null,vec__50210,(0),null);
var ret__24602__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50209,latefns50207,vec__50210,G__50208){
return (function (params24557,params_idx24558,vals__24559__auto__,structure,next_fn__24560__auto__){
var next_fn = ((function (paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50209,latefns50207,vec__50210,G__50208){
return (function (structure__24561__auto__){
return next_fn__24560__auto__.call(null,params24557,(params_idx24558 + num_params50209),vals__24559__auto__,structure__24561__auto__);
});})(paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50209,latefns50207,vec__50210,G__50208))
;
var late = G__50208.call(null,params24557,params_idx24558);
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,late,update_fn,structure));
});})(paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50209,latefns50207,vec__50210,G__50208))
,((function (paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50209,latefns50207,vec__50210,G__50208){
return (function (params24557,params_idx24558,vals__24559__auto__,structure,next_fn__24560__auto__){
var next_fn = ((function (paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50209,latefns50207,vec__50210,G__50208){
return (function (structure__24561__auto__){
return next_fn__24560__auto__.call(null,params24557,(params_idx24558 + num_params50209),vals__24559__auto__,structure__24561__auto__);
});})(paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50209,latefns50207,vec__50210,G__50208))
;
var late = G__50208.call(null,params24557,params_idx24558);
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,late,update_fn,structure));
});})(paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50209,latefns50207,vec__50210,G__50208))
),num_params50209);
if(!(any_params_needed_QMARK___24597__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__24602__auto__,null,(0));
} else {
return ret__24602__auto__;
}
});

cljs.core.Keyword.prototype.com$rpl$specter$protocols$Navigator$ = true;


cljs.core.Keyword.prototype.com$rpl$specter$protocols$Navigator$select_STAR_$arity$3 = (function (kw,structure,next_fn){
var kw__$1 = this;
return next_fn.call(null,cljs.core.get.call(null,structure,kw__$1));
});


cljs.core.Keyword.prototype.com$rpl$specter$protocols$Navigator$transform_STAR_$arity$3 = (function (kw,structure,next_fn){
var kw__$1 = this;
return cljs.core.assoc.call(null,structure,kw__$1,next_fn.call(null,cljs.core.get.call(null,structure,kw__$1)));
});
(com.rpl.specter.protocols.Navigator["function"] = true);

(com.rpl.specter.protocols.select_STAR_["function"] = (function (afn,structure,next_fn){
return com.rpl.specter.impl.filter_select.call(null,afn,structure,next_fn);
}));

(com.rpl.specter.protocols.transform_STAR_["function"] = (function (afn,structure,next_fn){
return com.rpl.specter.impl.filter_transform.call(null,afn,structure,next_fn);
}));

cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$Navigator$ = true;


cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$Navigator$select_STAR_$arity$3 = (function (aset,structure,next_fn){
var aset__$1 = this;
return com.rpl.specter.impl.filter_select.call(null,aset__$1,structure,next_fn);
});


cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$Navigator$transform_STAR_$arity$3 = (function (aset,structure,next_fn){
var aset__$1 = this;
return com.rpl.specter.impl.filter_transform.call(null,aset__$1,structure,next_fn);
});
/**
 * Keeps the element only if it matches the supplied predicate. This is the
 *        late-bound parameterized version of using a function directly in a path.
 */
com.rpl.specter.pred = com.rpl.specter.impl.pred_STAR_;
/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params24557,params_idx24558,vals__24559__auto__,structure,next_fn__24560__auto__){
var next_fn = (function (structure__24561__auto__){
return next_fn__24560__auto__.call(null,params24557,(params_idx24558 + 1),vals__24559__auto__,structure__24561__auto__);
});
var v = (params24557[(params_idx24558 + (0))]);
return next_fn.call(null,(((structure == null))?v:structure));
}),(function (params24557,params_idx24558,vals__24559__auto__,structure,next_fn__24560__auto__){
var next_fn = (function (structure__24561__auto__){
return next_fn__24560__auto__.call(null,params24557,(params_idx24558 + 1),vals__24559__auto__,structure__24561__auto__);
});
var v = (params24557[(params_idx24558 + (0))]);
return next_fn.call(null,(((structure == null))?v:structure));
})),1);
/**
 * Navigates to #{} if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_SET = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentHashSet.EMPTY);
/**
 * Navigates to '() if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_LIST = com.rpl.specter.nil__GT_val.call(null,cljs.core.List.EMPTY);
/**
 * Navigates to [] if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_VECTOR = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentVector.EMPTY);
/**
 * Navigates to the metadata of the structure, or nil if
 *   the structure has no metadata or may not contain metadata.
 */
com.rpl.specter.META = com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.LeanPathExecutor,(function (structure,next_fn){
return next_fn.call(null,cljs.core.meta.call(null,structure));
}),(function (structure,next_fn){
return cljs.core.with_meta.call(null,structure,next_fn.call(null,cljs.core.meta.call(null,structure)));
})));
/**
 * Adds the result of running select with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect = (function com$rpl$specter$collect(var_args){
var args__22780__auto__ = [];
var len__22773__auto___50220 = arguments.length;
var i__22774__auto___50221 = (0);
while(true){
if((i__22774__auto___50221 < len__22773__auto___50220)){
args__22780__auto__.push((arguments[i__22774__auto___50221]));

var G__50222 = (i__22774__auto___50221 + (1));
i__22774__auto___50221 = G__50222;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});

com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__24594__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__24595__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__24594__auto__);
var offsets__24596__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__24595__auto__));
var any_params_needed_QMARK___24597__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__24594__auto__)));
var num_params50216 = cljs.core.last.call(null,offsets__24596__auto__);
var latefns50214 = cljs.core.map.call(null,((function (paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50216){
return (function (o__24598__auto__,p__24599__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__24599__auto__))){
return ((function (paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50216){
return (function (params__24600__auto__,params_idx__24601__auto__){
return p__24599__auto__;
});
;})(paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50216))
} else {
return ((function (paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50216){
return (function (params__24600__auto__,params_idx__24601__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__24599__auto__,params__24600__auto__,(params_idx__24601__auto__ + o__24598__auto__));
});
;})(paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50216))
}
});})(paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50216))
,offsets__24596__auto__,paths__24594__auto__);
var vec__50217 = latefns50214;
var latefn50215 = cljs.core.nth.call(null,vec__50217,(0),null);
var ret__24602__auto__ = (function (){var collector__24582__auto__ = ((function (paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50216,latefns50214,vec__50217,latefn50215){
return (function (params24557,params_idx24558,vals__24583__auto__,structure,next_fn__24584__auto__){
var late = latefn50215.call(null,params24557,params_idx24558);
var c__24585__auto__ = com.rpl.specter.compiled_select.call(null,late,structure);
return next_fn__24584__auto__.call(null,params24557,(params_idx24558 + num_params50216),cljs.core.conj.call(null,vals__24583__auto__,c__24585__auto__),structure);
});})(paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50216,latefns50214,vec__50217,latefn50215))
;
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__24582__auto__,collector__24582__auto__),num_params50216);
})();
if(!(any_params_needed_QMARK___24597__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__24602__auto__,null,(0));
} else {
return ret__24602__auto__;
}
});

com.rpl.specter.collect.cljs$lang$maxFixedArity = (0);

com.rpl.specter.collect.cljs$lang$applyTo = (function (seq50213){
return com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50213));
});

/**
 * Adds the result of running select-one with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect_one = (function com$rpl$specter$collect_one(var_args){
var args__22780__auto__ = [];
var len__22773__auto___50230 = arguments.length;
var i__22774__auto___50231 = (0);
while(true){
if((i__22774__auto___50231 < len__22773__auto___50230)){
args__22780__auto__.push((arguments[i__22774__auto___50231]));

var G__50232 = (i__22774__auto___50231 + (1));
i__22774__auto___50231 = G__50232;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});

com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__24594__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__24595__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__24594__auto__);
var offsets__24596__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__24595__auto__));
var any_params_needed_QMARK___24597__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__24594__auto__)));
var num_params50226 = cljs.core.last.call(null,offsets__24596__auto__);
var latefns50224 = cljs.core.map.call(null,((function (paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50226){
return (function (o__24598__auto__,p__24599__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__24599__auto__))){
return ((function (paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50226){
return (function (params__24600__auto__,params_idx__24601__auto__){
return p__24599__auto__;
});
;})(paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50226))
} else {
return ((function (paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50226){
return (function (params__24600__auto__,params_idx__24601__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__24599__auto__,params__24600__auto__,(params_idx__24601__auto__ + o__24598__auto__));
});
;})(paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50226))
}
});})(paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50226))
,offsets__24596__auto__,paths__24594__auto__);
var vec__50227 = latefns50224;
var latefn50225 = cljs.core.nth.call(null,vec__50227,(0),null);
var ret__24602__auto__ = (function (){var collector__24582__auto__ = ((function (paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50226,latefns50224,vec__50227,latefn50225){
return (function (params24557,params_idx24558,vals__24583__auto__,structure,next_fn__24584__auto__){
var late = latefn50225.call(null,params24557,params_idx24558);
var c__24585__auto__ = com.rpl.specter.compiled_select_one.call(null,late,structure);
return next_fn__24584__auto__.call(null,params24557,(params_idx24558 + num_params50226),cljs.core.conj.call(null,vals__24583__auto__,c__24585__auto__),structure);
});})(paths__24594__auto__,needed_params__24595__auto__,offsets__24596__auto__,any_params_needed_QMARK___24597__auto__,num_params50226,latefns50224,vec__50227,latefn50225))
;
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__24582__auto__,collector__24582__auto__),num_params50226);
})();
if(!(any_params_needed_QMARK___24597__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__24602__auto__,null,(0));
} else {
return ret__24602__auto__;
}
});

com.rpl.specter.collect_one.cljs$lang$maxFixedArity = (0);

com.rpl.specter.collect_one.cljs$lang$applyTo = (function (seq50223){
return com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50223));
});

/**
 * Adds an external value to the collected vals. Useful when additional arguments
 *   are required to the transform function that would otherwise require partial
 *   application or a wrapper function.
 * 
 *   e.g., incrementing val at path [:a :b] by 3:
 *   (transform [:a :b (putval 3)] + some-map)
 */
com.rpl.specter.putval = (function (){var collector__24582__auto__ = (function (params24557,params_idx24558,vals__24583__auto__,structure,next_fn__24584__auto__){
var val = (params24557[(params_idx24558 + (0))]);
var c__24585__auto__ = val;
return next_fn__24584__auto__.call(null,params24557,(params_idx24558 + 1),cljs.core.conj.call(null,vals__24583__auto__,c__24585__auto__),structure);
});
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__24582__auto__,collector__24582__auto__),1);
})();
/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = com.rpl.specter.impl.DISPENSE_STAR_;
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = (function com$rpl$specter$if_path(var_args){
var args50235 = [];
var len__22773__auto___50244 = arguments.length;
var i__22774__auto___50245 = (0);
while(true){
if((i__22774__auto___50245 < len__22773__auto___50244)){
args50235.push((arguments[i__22774__auto___50245]));

var G__50246 = (i__22774__auto___50245 + (1));
i__22774__auto___50245 = G__50246;
continue;
} else {
}
break;
}

var G__50237 = args50235.length;
switch (G__50237) {
case 2:
return com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50235.length)].join('')));

}
});

com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2 = (function (cond_p,then_path){
return com.rpl.specter.if_path.call(null,cond_p,then_path,com.rpl.specter.STOP);
});

com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 = (function (cond_p,then_path,else_path){
var then_comp = com.rpl.specter.impl.comp_paths_STAR_.call(null,then_path);
var else_comp = com.rpl.specter.impl.comp_paths_STAR_.call(null,else_path);
var then_needed = com.rpl.specter.impl.num_needed_params.call(null,then_comp);
var else_needed = com.rpl.specter.impl.num_needed_params.call(null,else_comp);
var vec__50238 = com.rpl.specter.impl.extract_rich_tfns.call(null,then_comp);
var then_s = cljs.core.nth.call(null,vec__50238,(0),null);
var then_t = cljs.core.nth.call(null,vec__50238,(1),null);
var vec__50241 = com.rpl.specter.impl.extract_rich_tfns.call(null,else_comp);
var else_s = cljs.core.nth.call(null,vec__50241,(0),null);
var else_t = cljs.core.nth.call(null,vec__50241,(1),null);
var temp__6550__auto___50248 = com.rpl.specter.impl.extract_basic_filter_fn.call(null,cond_p);
if(cljs.core.truth_(temp__6550__auto___50248)){
var afn_50249 = temp__6550__auto___50248;
var num_params__24612__auto___50250 = (then_needed + else_needed);
var tfns__24613__auto___50251 = com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (num_params__24612__auto___50250,afn_50249,temp__6550__auto___50248,then_comp,else_comp,then_needed,else_needed,vec__50238,then_s,then_t,vec__50241,else_s,else_t){
return (function (params,params_idx,vals,structure,next_fn){
var next_fn__$1 = com.rpl.specter.impl.mk_jump_next_fn.call(null,next_fn,params_idx,num_params__24612__auto___50250);
return com.rpl.specter.impl.if_select.call(null,params,params_idx,vals,structure,next_fn__$1,afn_50249,then_s,then_needed,else_s);
});})(num_params__24612__auto___50250,afn_50249,temp__6550__auto___50248,then_comp,else_comp,then_needed,else_needed,vec__50238,then_s,then_t,vec__50241,else_s,else_t))
,((function (num_params__24612__auto___50250,afn_50249,temp__6550__auto___50248,then_comp,else_comp,then_needed,else_needed,vec__50238,then_s,then_t,vec__50241,else_s,else_t){
return (function (params,params_idx,vals,structure,next_fn){
var next_fn__$1 = com.rpl.specter.impl.mk_jump_next_fn.call(null,next_fn,params_idx,num_params__24612__auto___50250);
return com.rpl.specter.impl.if_transform.call(null,params,params_idx,vals,structure,next_fn__$1,afn_50249,then_t,then_needed,else_t);
});})(num_params__24612__auto___50250,afn_50249,temp__6550__auto___50248,then_comp,else_comp,then_needed,else_needed,vec__50238,then_s,then_t,vec__50241,else_s,else_t))
);
if((num_params__24612__auto___50250 === (0))){
com.rpl.specter.impl.no_params_compiled_path.call(null,tfns__24613__auto___50251);
} else {
com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,tfns__24613__auto___50251,num_params__24612__auto___50250);
}
} else {
}

var cond_comp = com.rpl.specter.impl.comp_paths_STAR_.call(null,cond_p);
var cond_needed = com.rpl.specter.impl.num_needed_params.call(null,cond_comp);
var num_params__24612__auto__ = ((then_needed + else_needed) + cond_needed);
var tfns__24613__auto__ = com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (num_params__24612__auto__,cond_comp,cond_needed,then_comp,else_comp,then_needed,else_needed,vec__50238,then_s,then_t,vec__50241,else_s,else_t){
return (function (params,params_idx,vals,structure,next_fn){
var next_fn__$1 = com.rpl.specter.impl.mk_jump_next_fn.call(null,next_fn,params_idx,num_params__24612__auto__);
var late_cond = com.rpl.specter.impl.parameterize_path.call(null,cond_comp,params,params_idx);
return com.rpl.specter.impl.if_select.call(null,params,(params_idx + cond_needed),vals,structure,next_fn__$1,((function (late_cond,next_fn__$1,num_params__24612__auto__,cond_comp,cond_needed,then_comp,else_comp,then_needed,else_needed,vec__50238,then_s,then_t,vec__50241,else_s,else_t){
return (function (p1__50233_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late_cond,p1__50233_SHARP_);
});})(late_cond,next_fn__$1,num_params__24612__auto__,cond_comp,cond_needed,then_comp,else_comp,then_needed,else_needed,vec__50238,then_s,then_t,vec__50241,else_s,else_t))
,then_s,then_needed,else_s);
});})(num_params__24612__auto__,cond_comp,cond_needed,then_comp,else_comp,then_needed,else_needed,vec__50238,then_s,then_t,vec__50241,else_s,else_t))
,((function (num_params__24612__auto__,cond_comp,cond_needed,then_comp,else_comp,then_needed,else_needed,vec__50238,then_s,then_t,vec__50241,else_s,else_t){
return (function (params,params_idx,vals,structure,next_fn){
var next_fn__$1 = com.rpl.specter.impl.mk_jump_next_fn.call(null,next_fn,params_idx,num_params__24612__auto__);
var late_cond = com.rpl.specter.impl.parameterize_path.call(null,cond_comp,params,params_idx);
return com.rpl.specter.impl.if_transform.call(null,params,(params_idx + cond_needed),vals,structure,next_fn__$1,((function (late_cond,next_fn__$1,num_params__24612__auto__,cond_comp,cond_needed,then_comp,else_comp,then_needed,else_needed,vec__50238,then_s,then_t,vec__50241,else_s,else_t){
return (function (p1__50234_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late_cond,p1__50234_SHARP_);
});})(late_cond,next_fn__$1,num_params__24612__auto__,cond_comp,cond_needed,then_comp,else_comp,then_needed,else_needed,vec__50238,then_s,then_t,vec__50241,else_s,else_t))
,then_t,then_needed,else_t);
});})(num_params__24612__auto__,cond_comp,cond_needed,then_comp,else_comp,then_needed,else_needed,vec__50238,then_s,then_t,vec__50241,else_s,else_t))
);
if((num_params__24612__auto__ === (0))){
return com.rpl.specter.impl.no_params_compiled_path.call(null,tfns__24613__auto__);
} else {
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,tfns__24613__auto__,num_params__24612__auto__);
}
});

com.rpl.specter.if_path.cljs$lang$maxFixedArity = 3;

/**
 * Takes in alternating cond-path path cond-path path...
 * Tests the structure if selecting with cond-path returns anything.
 * If so, it uses the following path for this portion of the navigation.
 * Otherwise, it tries the next cond-path. If nothing matches, then the structure
 * is not selected.
 * 
 * The input paths may be parameterized, in which case the result of cond-path
 * will be parameterized in the order of which the parameterized navigators
 * were declared.
 */
com.rpl.specter.cond_path = (function com$rpl$specter$cond_path(var_args){
var args__22780__auto__ = [];
var len__22773__auto___50257 = arguments.length;
var i__22774__auto___50258 = (0);
while(true){
if((i__22774__auto___50258 < len__22773__auto___50257)){
args__22780__auto__.push((arguments[i__22774__auto___50258]));

var G__50259 = (i__22774__auto___50258 + (1));
i__22774__auto___50258 = G__50259;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});

com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic = (function (conds){
var pairs = cljs.core.reverse.call(null,cljs.core.partition.call(null,(2),conds));
return cljs.core.reduce.call(null,((function (pairs){
return (function (p,p__50253){
var vec__50254 = p__50253;
var tester = cljs.core.nth.call(null,vec__50254,(0),null);
var apath = cljs.core.nth.call(null,vec__50254,(1),null);
return com.rpl.specter.if_path.call(null,tester,apath,p);
});})(pairs))
,com.rpl.specter.STOP,pairs);
});

com.rpl.specter.cond_path.cljs$lang$maxFixedArity = (0);

com.rpl.specter.cond_path.cljs$lang$applyTo = (function (seq50252){
return com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50252));
});

/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = (function com$rpl$specter$multi_path(var_args){
var args50260 = [];
var len__22773__auto___50272 = arguments.length;
var i__22774__auto___50273 = (0);
while(true){
if((i__22774__auto___50273 < len__22773__auto___50272)){
args50260.push((arguments[i__22774__auto___50273]));

var G__50274 = (i__22774__auto___50273 + (1));
i__22774__auto___50273 = G__50274;
continue;
} else {
}
break;
}

var G__50265 = args50260.length;
switch (G__50265) {
case 0:
return com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__22796__auto__ = (new cljs.core.IndexedSeq(args50260.slice((2)),(0),null));
return com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22796__auto__);

}
});

com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.rpl.specter.STAY;
});

com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$1 = (function (path){
return com.rpl.specter.impl.comp_paths_STAR_.call(null,path);
});

com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 = (function (path1,path2){
var comp1 = com.rpl.specter.impl.comp_paths_STAR_.call(null,path1);
var comp2 = com.rpl.specter.impl.comp_paths_STAR_.call(null,path2);
var comp1_needed = com.rpl.specter.impl.num_needed_params.call(null,comp1);
var vec__50266 = com.rpl.specter.impl.extract_rich_tfns.call(null,comp1);
var s1 = cljs.core.nth.call(null,vec__50266,(0),null);
var t1 = cljs.core.nth.call(null,vec__50266,(1),null);
var vec__50269 = com.rpl.specter.impl.extract_rich_tfns.call(null,comp2);
var s2 = cljs.core.nth.call(null,vec__50269,(0),null);
var t2 = cljs.core.nth.call(null,vec__50269,(1),null);
var num_params__24612__auto__ = (comp1_needed + com.rpl.specter.impl.num_needed_params.call(null,comp2));
var tfns__24613__auto__ = com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (num_params__24612__auto__,comp1,comp2,comp1_needed,vec__50266,s1,t1,vec__50269,s2,t2){
return (function (params,params_idx,vals,structure,next_fn){
var next_fn__$1 = com.rpl.specter.impl.mk_jump_next_fn.call(null,next_fn,params_idx,num_params__24612__auto__);
var res1 = s1.call(null,params,params_idx,vals,structure,next_fn__$1);
var res2 = s2.call(null,params,(params_idx + comp1_needed),vals,structure,next_fn__$1);
if((com.rpl.specter.NONE === res2)){
return res1;
} else {
return res2;
}
});})(num_params__24612__auto__,comp1,comp2,comp1_needed,vec__50266,s1,t1,vec__50269,s2,t2))
,((function (num_params__24612__auto__,comp1,comp2,comp1_needed,vec__50266,s1,t1,vec__50269,s2,t2){
return (function (params,params_idx,vals,structure,next_fn){
var next_fn__$1 = com.rpl.specter.impl.mk_jump_next_fn.call(null,next_fn,params_idx,num_params__24612__auto__);
var s1__$1 = t1.call(null,params,params_idx,vals,structure,next_fn__$1);
return t2.call(null,params,(params_idx + comp1_needed),vals,s1__$1,next_fn__$1);
});})(num_params__24612__auto__,comp1,comp2,comp1_needed,vec__50266,s1,t1,vec__50269,s2,t2))
);
if((num_params__24612__auto__ === (0))){
return com.rpl.specter.impl.no_params_compiled_path.call(null,tfns__24613__auto__);
} else {
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,tfns__24613__auto__,num_params__24612__auto__);
}
});

com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic = (function (path1,path2,paths){
return cljs.core.reduce.call(null,com.rpl.specter.multi_path,com.rpl.specter.multi_path.call(null,path1,path2),paths);
});

com.rpl.specter.multi_path.cljs$lang$applyTo = (function (seq50261){
var G__50262 = cljs.core.first.call(null,seq50261);
var seq50261__$1 = cljs.core.next.call(null,seq50261);
var G__50263 = cljs.core.first.call(null,seq50261__$1);
var seq50261__$2 = cljs.core.next.call(null,seq50261__$1);
return com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic(G__50262,G__50263,seq50261__$2);
});

com.rpl.specter.multi_path.cljs$lang$maxFixedArity = (2);

/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = (function com$rpl$specter$stay_then_continue(var_args){
var args__22780__auto__ = [];
var len__22773__auto___50277 = arguments.length;
var i__22774__auto___50278 = (0);
while(true){
if((i__22774__auto___50278 < len__22773__auto___50277)){
args__22780__auto__.push((arguments[i__22774__auto___50278]));

var G__50279 = (i__22774__auto___50278 + (1));
i__22774__auto___50278 = G__50279;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.stay_then_continue.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});

com.rpl.specter.stay_then_continue.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path);
});

com.rpl.specter.stay_then_continue.cljs$lang$maxFixedArity = (0);

com.rpl.specter.stay_then_continue.cljs$lang$applyTo = (function (seq50276){
return com.rpl.specter.stay_then_continue.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50276));
});

/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = (function com$rpl$specter$continue_then_stay(var_args){
var args__22780__auto__ = [];
var len__22773__auto___50281 = arguments.length;
var i__22774__auto___50282 = (0);
while(true){
if((i__22774__auto___50282 < len__22773__auto___50281)){
args__22780__auto__.push((arguments[i__22774__auto___50282]));

var G__50283 = (i__22774__auto___50282 + (1));
i__22774__auto___50282 = G__50283;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.continue_then_stay.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});

com.rpl.specter.continue_then_stay.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY);
});

com.rpl.specter.continue_then_stay.cljs$lang$maxFixedArity = (0);

com.rpl.specter.continue_then_stay.cljs$lang$applyTo = (function (seq50280){
return com.rpl.specter.continue_then_stay.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50280));
});


//# sourceMappingURL=specter.js.map?rel=1471999063888