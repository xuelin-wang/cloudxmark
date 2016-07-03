// Compiled by ClojureScript 1.9.89 {}
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
var args__22624__auto__ = [];
var len__22617__auto___27850 = arguments.length;
var i__22618__auto___27851 = (0);
while(true){
if((i__22618__auto___27851 < len__22617__auto___27850)){
args__22624__auto__.push((arguments[i__22618__auto___27851]));

var G__27852 = (i__22618__auto___27851 + (1));
i__22618__auto___27851 = G__27852;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});

com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic = (function (apath){
return com.rpl.specter.impl.comp_paths_STAR_.call(null,cljs.core.vec.call(null,apath));
});

com.rpl.specter.comp_paths.cljs$lang$maxFixedArity = (0);

com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq27849){
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27849));
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
 * Version of select-one that takes in a path pre-compiled with comp-paths
 */
com.rpl.specter.compiled_select_one = com.rpl.specter.impl.compiled_select_one_STAR_;
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one_STAR_ = (function com$rpl$specter$select_one_STAR_(path,structure){
return com.rpl.specter.compiled_select_one.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-one! that takes in a path pre-compiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = com.rpl.specter.impl.compiled_select_one_BANG__STAR_;
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG__STAR_ = (function com$rpl$specter$select_one_BANG__STAR_(path,structure){
return com.rpl.specter.compiled_select_one_BANG_.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-first that takes in a path pre-compiled with comp-paths
 */
com.rpl.specter.compiled_select_first = com.rpl.specter.impl.compiled_select_first_STAR_;
/**
 * Returns first element found. Not any more efficient than select, just a convenience
 */
com.rpl.specter.select_first_STAR_ = (function com$rpl$specter$select_first_STAR_(path,structure){
return com.rpl.specter.compiled_select_first.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of transform that takes in a path pre-compiled with comp-paths
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
var args__22624__auto__ = [];
var len__22617__auto___27860 = arguments.length;
var i__22618__auto___27861 = (0);
while(true){
if((i__22618__auto___27861 < len__22617__auto___27860)){
args__22624__auto__.push((arguments[i__22618__auto___27861]));

var G__27862 = (i__22618__auto___27861 + (1));
i__22618__auto___27861 = G__27862;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((3) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22625__auto__);
});

com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__27857){
var map__27858 = p__27857;
var map__27858__$1 = ((((!((map__27858 == null)))?((((map__27858.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27858.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27858):map__27858);
var merge_fn = cljs.core.get.call(null,map__27858__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
return com.rpl.specter.compiled_replace_in.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),transform_fn,structure,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),merge_fn);
});

com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3);

com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq27853){
var G__27854 = cljs.core.first.call(null,seq27853);
var seq27853__$1 = cljs.core.next.call(null,seq27853);
var G__27855 = cljs.core.first.call(null,seq27853__$1);
var seq27853__$2 = cljs.core.next.call(null,seq27853__$1);
var G__27856 = cljs.core.first.call(null,seq27853__$2);
var seq27853__$3 = cljs.core.next.call(null,seq27853__$2);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__27854,G__27855,G__27856,seq27853__$3);
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
return null;
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
 * Navigate to every element of the collection. For maps navigates to
 *        a vector of `[key value]`.
 */
com.rpl.specter.ALL = com.rpl.specter.comp_paths.call(null,com.rpl.specter.impl.__GT_AllNavigator.call(null));
/**
 * Navigate to each value of the map. This is more efficient than 
 *        navigating via [ALL LAST]
 */
com.rpl.specter.MAP_VALS = com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.LeanPathExecutor,(function (structure,next_fn){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,next_fn,cljs.core.vals.call(null,structure)));
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
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params27597,params_idx27598,vals__27599__auto__,structure,next_fn__27600__auto__){
var next_fn = (function (structure__27601__auto__){
return next_fn__27600__auto__.call(null,params27597,(params_idx27598 + 2),vals__27599__auto__,structure__27601__auto__);
});
var start_fn = (params27597[(params_idx27598 + (0))]);
var end_fn = (params27597[(params_idx27598 + (1))]);
return com.rpl.specter.impl.srange_select.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
}),(function (params27597,params_idx27598,vals__27599__auto__,structure,next_fn__27600__auto__){
var next_fn = (function (structure__27601__auto__){
return next_fn__27600__auto__.call(null,params27597,(params_idx27598 + 2),vals__27599__auto__,structure__27601__auto__);
});
var start_fn = (params27597[(params_idx27598 + (0))]);
var end_fn = (params27597[(params_idx27598 + (1))]);
return com.rpl.specter.impl.srange_transform.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
})),2);
/**
 * Navigates to the subsequence bound by the indexes start (inclusive)
 *        and end (exclusive)
 */
com.rpl.specter.srange = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params27597,params_idx27598,vals__27599__auto__,structure,next_fn__27600__auto__){
var next_fn = (function (structure__27601__auto__){
return next_fn__27600__auto__.call(null,params27597,(params_idx27598 + 2),vals__27599__auto__,structure__27601__auto__);
});
var start = (params27597[(params_idx27598 + (0))]);
var end = (params27597[(params_idx27598 + (1))]);
return com.rpl.specter.impl.srange_select.call(null,structure,start,end,next_fn);
}),(function (params27597,params_idx27598,vals__27599__auto__,structure,next_fn__27600__auto__){
var next_fn = (function (structure__27601__auto__){
return next_fn__27600__auto__.call(null,params27597,(params_idx27598 + 2),vals__27599__auto__,structure__27601__auto__);
});
var start = (params27597[(params_idx27598 + (0))]);
var end = (params27597[(params_idx27598 + (1))]);
return com.rpl.specter.impl.srange_transform.call(null,structure,start,end,next_fn);
})),2);
/**
 * Navigates to every continuous subsequence of elements matching `pred`
 */
com.rpl.specter.continuous_subseqs = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params27597,params_idx27598,vals__27599__auto__,structure,next_fn__27600__auto__){
var next_fn = (function (structure__27601__auto__){
return next_fn__27600__auto__.call(null,params27597,(params_idx27598 + 1),vals__27599__auto__,structure__27601__auto__);
});
var pred = (params27597[(params_idx27598 + (0))]);
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,((function (next_fn,pred){
return (function (p__27863){
var vec__27864 = p__27863;
var s = cljs.core.nth.call(null,vec__27864,(0),null);
var e = cljs.core.nth.call(null,vec__27864,(1),null);
return com.rpl.specter.impl.srange_select.call(null,structure,s,e,next_fn);
});})(next_fn,pred))
,com.rpl.specter.impl.matching_ranges.call(null,structure,pred)));
}),(function (params27597,params_idx27598,vals__27599__auto__,structure,next_fn__27600__auto__){
var next_fn = (function (structure__27601__auto__){
return next_fn__27600__auto__.call(null,params27597,(params_idx27598 + 1),vals__27599__auto__,structure__27601__auto__);
});
var pred = (params27597[(params_idx27598 + (0))]);
return cljs.core.reduce.call(null,((function (next_fn,pred){
return (function (structure__$1,p__27867){
var vec__27868 = p__27867;
var s = cljs.core.nth.call(null,vec__27868,(0),null);
var e = cljs.core.nth.call(null,vec__27868,(1),null);
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
com.rpl.specter.subset = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params27597,params_idx27598,vals__27599__auto__,structure,next_fn__27600__auto__){
var next_fn = (function (structure__27601__auto__){
return next_fn__27600__auto__.call(null,params27597,(params_idx27598 + 1),vals__27599__auto__,structure__27601__auto__);
});
var aset = (params27597[(params_idx27598 + (0))]);
return next_fn.call(null,clojure.set.intersection.call(null,structure,aset));
}),(function (params27597,params_idx27598,vals__27599__auto__,structure,next_fn__27600__auto__){
var next_fn = (function (structure__27601__auto__){
return next_fn__27600__auto__.call(null,params27597,(params_idx27598 + 1),vals__27599__auto__,structure__27601__auto__);
});
var aset = (params27597[(params_idx27598 + (0))]);
var subset = clojure.set.intersection.call(null,structure,aset);
var newset = next_fn.call(null,subset);
return clojure.set.union.call(null,clojure.set.difference.call(null,structure,subset),newset);
})),1);
/**
 * Navigates to the specified submap (using select-keys).
 *        In a transform, that submap in the original map is changed to the new
 *        value of the submap.
 */
com.rpl.specter.submap = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params27597,params_idx27598,vals__27599__auto__,structure,next_fn__27600__auto__){
var next_fn = (function (structure__27601__auto__){
return next_fn__27600__auto__.call(null,params27597,(params_idx27598 + 1),vals__27599__auto__,structure__27601__auto__);
});
var m_keys = (params27597[(params_idx27598 + (0))]);
return next_fn.call(null,cljs.core.select_keys.call(null,structure,m_keys));
}),(function (params27597,params_idx27598,vals__27599__auto__,structure,next_fn__27600__auto__){
var next_fn = (function (structure__27601__auto__){
return next_fn__27600__auto__.call(null,params27597,(params_idx27598 + 1),vals__27599__auto__,structure__27601__auto__);
});
var m_keys = (params27597[(params_idx27598 + (0))]);
var submap = cljs.core.select_keys.call(null,structure,m_keys);
var newmap = next_fn.call(null,submap);
return cljs.core.merge.call(null,cljs.core.reduce.call(null,cljs.core.dissoc,structure,m_keys),newmap);
})),1);
/**
 * Using clojure.walk, navigate the data structure until reaching
 *        a value for which `afn` returns truthy.
 */
com.rpl.specter.walker = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params27597,params_idx27598,vals__27599__auto__,structure,next_fn__27600__auto__){
var next_fn = (function (structure__27601__auto__){
return next_fn__27600__auto__.call(null,params27597,(params_idx27598 + 1),vals__27599__auto__,structure__27601__auto__);
});
var afn = (params27597[(params_idx27598 + (0))]);
return com.rpl.specter.impl.walk_select.call(null,afn,next_fn,structure);
}),(function (params27597,params_idx27598,vals__27599__auto__,structure,next_fn__27600__auto__){
var next_fn = (function (structure__27601__auto__){
return next_fn__27600__auto__.call(null,params27597,(params_idx27598 + 1),vals__27599__auto__,structure__27601__auto__);
});
var afn = (params27597[(params_idx27598 + (0))]);
return com.rpl.specter.impl.walk_until.call(null,afn,next_fn,structure);
})),1);
/**
 * Like `walker` but maintains metadata of any forms traversed.
 */
com.rpl.specter.codewalker = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params27597,params_idx27598,vals__27599__auto__,structure,next_fn__27600__auto__){
var next_fn = (function (structure__27601__auto__){
return next_fn__27600__auto__.call(null,params27597,(params_idx27598 + 1),vals__27599__auto__,structure__27601__auto__);
});
var afn = (params27597[(params_idx27598 + (0))]);
return com.rpl.specter.impl.walk_select.call(null,afn,next_fn,structure);
}),(function (params27597,params_idx27598,vals__27599__auto__,structure,next_fn__27600__auto__){
var next_fn = (function (structure__27601__auto__){
return next_fn__27600__auto__.call(null,params27597,(params_idx27598 + 1),vals__27599__auto__,structure__27601__auto__);
});
var afn = (params27597[(params_idx27598 + (0))]);
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
var args__22624__auto__ = [];
var len__22617__auto___27878 = arguments.length;
var i__22618__auto___27879 = (0);
while(true){
if((i__22618__auto___27879 < len__22617__auto___27878)){
args__22624__auto__.push((arguments[i__22618__auto___27879]));

var G__27880 = (i__22618__auto___27879 + (1));
i__22618__auto___27879 = G__27880;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});

com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__27634__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__27635__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__27634__auto__);
var offsets__27636__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__27635__auto__));
var any_params_needed_QMARK___27637__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__27634__auto__)));
var num_params27874 = cljs.core.last.call(null,offsets__27636__auto__);
var latefns27872 = cljs.core.map.call(null,((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27874){
return (function (o__27638__auto__,p__27639__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__27639__auto__))){
return ((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27874){
return (function (params__27640__auto__,params_idx__27641__auto__){
return p__27639__auto__;
});
;})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27874))
} else {
return ((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27874){
return (function (params__27640__auto__,params_idx__27641__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__27639__auto__,params__27640__auto__,(params_idx__27641__auto__ + o__27638__auto__));
});
;})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27874))
}
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27874))
,offsets__27636__auto__,paths__27634__auto__);
var vec__27875 = latefns27872;
var G__27873 = cljs.core.nth.call(null,vec__27875,(0),null);
var ret__27642__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27874,latefns27872,vec__27875,G__27873){
return (function (params27597,params_idx27598,vals__27599__auto__,structure,next_fn__27600__auto__){
var next_fn = ((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27874,latefns27872,vec__27875,G__27873){
return (function (structure__27601__auto__){
return next_fn__27600__auto__.call(null,params27597,(params_idx27598 + num_params27874),vals__27599__auto__,structure__27601__auto__);
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27874,latefns27872,vec__27875,G__27873))
;
var late = G__27873.call(null,params27597,params_idx27598);
return next_fn.call(null,com.rpl.specter.compiled_select.call(null,late,structure));
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27874,latefns27872,vec__27875,G__27873))
,((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27874,latefns27872,vec__27875,G__27873){
return (function (params27597,params_idx27598,vals__27599__auto__,structure,next_fn__27600__auto__){
var next_fn = ((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27874,latefns27872,vec__27875,G__27873){
return (function (structure__27601__auto__){
return next_fn__27600__auto__.call(null,params27597,(params_idx27598 + num_params27874),vals__27599__auto__,structure__27601__auto__);
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27874,latefns27872,vec__27875,G__27873))
;
var late = G__27873.call(null,params27597,params_idx27598);
var select_result = com.rpl.specter.compiled_select.call(null,late,structure);
var transformed = next_fn.call(null,select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.call(null,transformed);
return com.rpl.specter.compiled_transform.call(null,late,((function (select_result,transformed,values_to_insert,next_fn,late,paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27874,latefns27872,vec__27875,G__27873){
return (function (_){
var next_val = cljs.core.first.call(null,com.rpl.specter.impl.get_cell.call(null,values_to_insert));
com.rpl.specter.impl.update_cell_BANG_.call(null,values_to_insert,cljs.core.rest);

return next_val;
});})(select_result,transformed,values_to_insert,next_fn,late,paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27874,latefns27872,vec__27875,G__27873))
,structure);
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27874,latefns27872,vec__27875,G__27873))
),num_params27874);
if(!(any_params_needed_QMARK___27637__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__27642__auto__,null,(0));
} else {
return ret__27642__auto__;
}
});

com.rpl.specter.subselect.cljs$lang$maxFixedArity = (0);

com.rpl.specter.subselect.cljs$lang$applyTo = (function (seq27871){
return com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27871));
});

/**
 * Navigates to the specified key, navigating to nil if it does not exist.
 */
com.rpl.specter.keypath = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params27597,params_idx27598,vals__27599__auto__,structure,next_fn__27600__auto__){
var next_fn = (function (structure__27601__auto__){
return next_fn__27600__auto__.call(null,params27597,(params_idx27598 + 1),vals__27599__auto__,structure__27601__auto__);
});
var key = (params27597[(params_idx27598 + (0))]);
return next_fn.call(null,cljs.core.get.call(null,structure,key));
}),(function (params27597,params_idx27598,vals__27599__auto__,structure,next_fn__27600__auto__){
var next_fn = (function (structure__27601__auto__){
return next_fn__27600__auto__.call(null,params27597,(params_idx27598 + 1),vals__27599__auto__,structure__27601__auto__);
});
var key = (params27597[(params_idx27598 + (0))]);
return cljs.core.assoc.call(null,structure,key,next_fn.call(null,cljs.core.get.call(null,structure,key)));
})),1);
/**
 * Navigates to the key only if it exists in the map.
 */
com.rpl.specter.must = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params27597,params_idx27598,vals__27599__auto__,structure,next_fn__27600__auto__){
var next_fn = (function (structure__27601__auto__){
return next_fn__27600__auto__.call(null,params27597,(params_idx27598 + 1),vals__27599__auto__,structure__27601__auto__);
});
var k = (params27597[(params_idx27598 + (0))]);
if(cljs.core.contains_QMARK_.call(null,structure,k)){
return next_fn.call(null,cljs.core.get.call(null,structure,k));
} else {
return null;
}
}),(function (params27597,params_idx27598,vals__27599__auto__,structure,next_fn__27600__auto__){
var next_fn = (function (structure__27601__auto__){
return next_fn__27600__auto__.call(null,params27597,(params_idx27598 + 1),vals__27599__auto__,structure__27601__auto__);
});
var k = (params27597[(params_idx27598 + (0))]);
if(cljs.core.contains_QMARK_.call(null,structure,k)){
return cljs.core.assoc.call(null,structure,k,next_fn.call(null,cljs.core.get.call(null,structure,k)));
} else {
return structure;
}
})),1);
/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params27597,params_idx27598,vals__27599__auto__,structure,next_fn__27600__auto__){
var next_fn = (function (structure__27601__auto__){
return next_fn__27600__auto__.call(null,params27597,(params_idx27598 + 1),vals__27599__auto__,structure__27601__auto__);
});
var afn = (params27597[(params_idx27598 + (0))]);
return next_fn.call(null,afn.call(null,structure));
}),(function (params27597,params_idx27598,vals__27599__auto__,structure,next_fn__27600__auto__){
var next_fn = (function (structure__27601__auto__){
return next_fn__27600__auto__.call(null,params27597,(params_idx27598 + 1),vals__27599__auto__,structure__27601__auto__);
});
var afn = (params27597[(params_idx27598 + (0))]);
return next_fn.call(null,afn.call(null,structure));
})),1);
/**
 * Navigate to the result of running `parse-fn` on the value. For 
 *        transforms, the transformed value then has `unparse-fn` run on 
 *        it to get the final value at this point.
 */
com.rpl.specter.parser = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params27597,params_idx27598,vals__27599__auto__,structure,next_fn__27600__auto__){
var next_fn = (function (structure__27601__auto__){
return next_fn__27600__auto__.call(null,params27597,(params_idx27598 + 2),vals__27599__auto__,structure__27601__auto__);
});
var parse_fn = (params27597[(params_idx27598 + (0))]);
var unparse_fn = (params27597[(params_idx27598 + (1))]);
return next_fn.call(null,parse_fn.call(null,structure));
}),(function (params27597,params_idx27598,vals__27599__auto__,structure,next_fn__27600__auto__){
var next_fn = (function (structure__27601__auto__){
return next_fn__27600__auto__.call(null,params27597,(params_idx27598 + 2),vals__27599__auto__,structure__27601__auto__);
});
var parse_fn = (params27597[(params_idx27598 + (0))]);
var unparse_fn = (params27597[(params_idx27598 + (1))]);
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
var args__22624__auto__ = [];
var len__22617__auto___27890 = arguments.length;
var i__22618__auto___27891 = (0);
while(true){
if((i__22618__auto___27891 < len__22617__auto___27890)){
args__22624__auto__.push((arguments[i__22618__auto___27891]));

var G__27892 = (i__22618__auto___27891 + (1));
i__22618__auto___27891 = G__27892;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});

com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var temp__6367__auto__ = com.rpl.specter.impl.extract_basic_filter_fn.call(null,path);
if(cljs.core.truth_(temp__6367__auto__)){
var afn = temp__6367__auto__;
return afn;
} else {
var paths__27634__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__27635__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__27634__auto__);
var offsets__27636__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__27635__auto__));
var any_params_needed_QMARK___27637__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__27634__auto__)));
var num_params27886 = cljs.core.last.call(null,offsets__27636__auto__);
var latefns27884 = cljs.core.map.call(null,((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27886,temp__6367__auto__){
return (function (o__27638__auto__,p__27639__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__27639__auto__))){
return ((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27886,temp__6367__auto__){
return (function (params__27640__auto__,params_idx__27641__auto__){
return p__27639__auto__;
});
;})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27886,temp__6367__auto__))
} else {
return ((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27886,temp__6367__auto__){
return (function (params__27640__auto__,params_idx__27641__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__27639__auto__,params__27640__auto__,(params_idx__27641__auto__ + o__27638__auto__));
});
;})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27886,temp__6367__auto__))
}
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27886,temp__6367__auto__))
,offsets__27636__auto__,paths__27634__auto__);
var vec__27887 = latefns27884;
var G__27885 = cljs.core.nth.call(null,vec__27887,(0),null);
var ret__27642__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27886,latefns27884,vec__27887,G__27885,temp__6367__auto__){
return (function (params27597,params_idx27598,vals__27599__auto__,structure,next_fn__27600__auto__){
var next_fn = ((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27886,latefns27884,vec__27887,G__27885,temp__6367__auto__){
return (function (structure__27601__auto__){
return next_fn__27600__auto__.call(null,params27597,(params_idx27598 + num_params27886),vals__27599__auto__,structure__27601__auto__);
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27886,latefns27884,vec__27887,G__27885,temp__6367__auto__))
;
var late = G__27885.call(null,params27597,params_idx27598);
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,late,paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27886,latefns27884,vec__27887,G__27885,temp__6367__auto__){
return (function (p1__27881_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__27881_SHARP_);
});})(next_fn,late,paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27886,latefns27884,vec__27887,G__27885,temp__6367__auto__))
,structure,next_fn);
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27886,latefns27884,vec__27887,G__27885,temp__6367__auto__))
,((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27886,latefns27884,vec__27887,G__27885,temp__6367__auto__){
return (function (params27597,params_idx27598,vals__27599__auto__,structure,next_fn__27600__auto__){
var next_fn = ((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27886,latefns27884,vec__27887,G__27885,temp__6367__auto__){
return (function (structure__27601__auto__){
return next_fn__27600__auto__.call(null,params27597,(params_idx27598 + num_params27886),vals__27599__auto__,structure__27601__auto__);
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27886,latefns27884,vec__27887,G__27885,temp__6367__auto__))
;
var late = G__27885.call(null,params27597,params_idx27598);
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,late,paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27886,latefns27884,vec__27887,G__27885,temp__6367__auto__){
return (function (p1__27882_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__27882_SHARP_);
});})(next_fn,late,paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27886,latefns27884,vec__27887,G__27885,temp__6367__auto__))
,structure,next_fn);
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27886,latefns27884,vec__27887,G__27885,temp__6367__auto__))
),num_params27886);
if(!(any_params_needed_QMARK___27637__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__27642__auto__,null,(0));
} else {
return ret__27642__auto__;
}
}
});

com.rpl.specter.selected_QMARK_.cljs$lang$maxFixedArity = (0);

com.rpl.specter.selected_QMARK_.cljs$lang$applyTo = (function (seq27883){
return com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27883));
});

com.rpl.specter.not_selected_QMARK_ = (function com$rpl$specter$not_selected_QMARK_(var_args){
var args__22624__auto__ = [];
var len__22617__auto___27902 = arguments.length;
var i__22618__auto___27903 = (0);
while(true){
if((i__22618__auto___27903 < len__22617__auto___27902)){
args__22624__auto__.push((arguments[i__22618__auto___27903]));

var G__27904 = (i__22618__auto___27903 + (1));
i__22618__auto___27903 = G__27904;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});

com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var temp__6367__auto__ = com.rpl.specter.impl.extract_basic_filter_fn.call(null,path);
if(cljs.core.truth_(temp__6367__auto__)){
var afn = temp__6367__auto__;
return ((function (afn,temp__6367__auto__){
return (function (s){
return cljs.core.not.call(null,afn.call(null,s));
});
;})(afn,temp__6367__auto__))
} else {
var paths__27634__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__27635__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__27634__auto__);
var offsets__27636__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__27635__auto__));
var any_params_needed_QMARK___27637__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__27634__auto__)));
var num_params27898 = cljs.core.last.call(null,offsets__27636__auto__);
var latefns27896 = cljs.core.map.call(null,((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27898,temp__6367__auto__){
return (function (o__27638__auto__,p__27639__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__27639__auto__))){
return ((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27898,temp__6367__auto__){
return (function (params__27640__auto__,params_idx__27641__auto__){
return p__27639__auto__;
});
;})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27898,temp__6367__auto__))
} else {
return ((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27898,temp__6367__auto__){
return (function (params__27640__auto__,params_idx__27641__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__27639__auto__,params__27640__auto__,(params_idx__27641__auto__ + o__27638__auto__));
});
;})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27898,temp__6367__auto__))
}
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27898,temp__6367__auto__))
,offsets__27636__auto__,paths__27634__auto__);
var vec__27899 = latefns27896;
var G__27897 = cljs.core.nth.call(null,vec__27899,(0),null);
var ret__27642__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27898,latefns27896,vec__27899,G__27897,temp__6367__auto__){
return (function (params27597,params_idx27598,vals__27599__auto__,structure,next_fn__27600__auto__){
var next_fn = ((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27898,latefns27896,vec__27899,G__27897,temp__6367__auto__){
return (function (structure__27601__auto__){
return next_fn__27600__auto__.call(null,params27597,(params_idx27598 + num_params27898),vals__27599__auto__,structure__27601__auto__);
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27898,latefns27896,vec__27899,G__27897,temp__6367__auto__))
;
var late = G__27897.call(null,params27597,params_idx27598);
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,late,paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27898,latefns27896,vec__27899,G__27897,temp__6367__auto__){
return (function (p1__27893_SHARP_){
return com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,late,p1__27893_SHARP_);
});})(next_fn,late,paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27898,latefns27896,vec__27899,G__27897,temp__6367__auto__))
,structure,next_fn);
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27898,latefns27896,vec__27899,G__27897,temp__6367__auto__))
,((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27898,latefns27896,vec__27899,G__27897,temp__6367__auto__){
return (function (params27597,params_idx27598,vals__27599__auto__,structure,next_fn__27600__auto__){
var next_fn = ((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27898,latefns27896,vec__27899,G__27897,temp__6367__auto__){
return (function (structure__27601__auto__){
return next_fn__27600__auto__.call(null,params27597,(params_idx27598 + num_params27898),vals__27599__auto__,structure__27601__auto__);
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27898,latefns27896,vec__27899,G__27897,temp__6367__auto__))
;
var late = G__27897.call(null,params27597,params_idx27598);
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,late,paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27898,latefns27896,vec__27899,G__27897,temp__6367__auto__){
return (function (p1__27894_SHARP_){
return com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,late,p1__27894_SHARP_);
});})(next_fn,late,paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27898,latefns27896,vec__27899,G__27897,temp__6367__auto__))
,structure,next_fn);
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27898,latefns27896,vec__27899,G__27897,temp__6367__auto__))
),num_params27898);
if(!(any_params_needed_QMARK___27637__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__27642__auto__,null,(0));
} else {
return ret__27642__auto__;
}
}
});

com.rpl.specter.not_selected_QMARK_.cljs$lang$maxFixedArity = (0);

com.rpl.specter.not_selected_QMARK_.cljs$lang$applyTo = (function (seq27895){
return com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27895));
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
var args__22624__auto__ = [];
var len__22617__auto___27906 = arguments.length;
var i__22618__auto___27907 = (0);
while(true){
if((i__22618__auto___27907 < len__22617__auto___27906)){
args__22624__auto__.push((arguments[i__22618__auto___27907]));

var G__27908 = (i__22618__auto___27907 + (1));
i__22618__auto___27907 = G__27908;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});

com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return com.rpl.specter.subselect.call(null,com.rpl.specter.ALL,com.rpl.specter.selected_QMARK_.call(null,path));
});

com.rpl.specter.filterer.cljs$lang$maxFixedArity = (0);

com.rpl.specter.filterer.cljs$lang$applyTo = (function (seq27905){
return com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27905));
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
var paths__27634__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__27635__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__27634__auto__);
var offsets__27636__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__27635__auto__));
var any_params_needed_QMARK___27637__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__27634__auto__)));
var num_params27917 = cljs.core.last.call(null,offsets__27636__auto__);
var latefns27915 = cljs.core.map.call(null,((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27917){
return (function (o__27638__auto__,p__27639__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__27639__auto__))){
return ((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27917){
return (function (params__27640__auto__,params_idx__27641__auto__){
return p__27639__auto__;
});
;})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27917))
} else {
return ((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27917){
return (function (params__27640__auto__,params_idx__27641__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__27639__auto__,params__27640__auto__,(params_idx__27641__auto__ + o__27638__auto__));
});
;})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27917))
}
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27917))
,offsets__27636__auto__,paths__27634__auto__);
var vec__27918 = latefns27915;
var G__27916 = cljs.core.nth.call(null,vec__27918,(0),null);
var ret__27642__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27917,latefns27915,vec__27918,G__27916){
return (function (params27597,params_idx27598,vals__27599__auto__,structure,next_fn__27600__auto__){
var next_fn = ((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27917,latefns27915,vec__27918,G__27916){
return (function (structure__27601__auto__){
return next_fn__27600__auto__.call(null,params27597,(params_idx27598 + num_params27917),vals__27599__auto__,structure__27601__auto__);
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27917,latefns27915,vec__27918,G__27916))
;
var late = G__27916.call(null,params27597,params_idx27598);
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,late,update_fn,structure));
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27917,latefns27915,vec__27918,G__27916))
,((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27917,latefns27915,vec__27918,G__27916){
return (function (params27597,params_idx27598,vals__27599__auto__,structure,next_fn__27600__auto__){
var next_fn = ((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27917,latefns27915,vec__27918,G__27916){
return (function (structure__27601__auto__){
return next_fn__27600__auto__.call(null,params27597,(params_idx27598 + num_params27917),vals__27599__auto__,structure__27601__auto__);
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27917,latefns27915,vec__27918,G__27916))
;
var late = G__27916.call(null,params27597,params_idx27598);
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,late,update_fn,structure));
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27917,latefns27915,vec__27918,G__27916))
),num_params27917);
if(!(any_params_needed_QMARK___27637__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__27642__auto__,null,(0));
} else {
return ret__27642__auto__;
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
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params27597,params_idx27598,vals__27599__auto__,structure,next_fn__27600__auto__){
var next_fn = (function (structure__27601__auto__){
return next_fn__27600__auto__.call(null,params27597,(params_idx27598 + 1),vals__27599__auto__,structure__27601__auto__);
});
var v = (params27597[(params_idx27598 + (0))]);
return next_fn.call(null,(((structure == null))?v:structure));
}),(function (params27597,params_idx27598,vals__27599__auto__,structure,next_fn__27600__auto__){
var next_fn = (function (structure__27601__auto__){
return next_fn__27600__auto__.call(null,params27597,(params_idx27598 + 1),vals__27599__auto__,structure__27601__auto__);
});
var v = (params27597[(params_idx27598 + (0))]);
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
 * Adds the result of running select with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect = (function com$rpl$specter$collect(var_args){
var args__22624__auto__ = [];
var len__22617__auto___27928 = arguments.length;
var i__22618__auto___27929 = (0);
while(true){
if((i__22618__auto___27929 < len__22617__auto___27928)){
args__22624__auto__.push((arguments[i__22618__auto___27929]));

var G__27930 = (i__22618__auto___27929 + (1));
i__22618__auto___27929 = G__27930;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});

com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__27634__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__27635__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__27634__auto__);
var offsets__27636__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__27635__auto__));
var any_params_needed_QMARK___27637__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__27634__auto__)));
var num_params27924 = cljs.core.last.call(null,offsets__27636__auto__);
var latefns27922 = cljs.core.map.call(null,((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27924){
return (function (o__27638__auto__,p__27639__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__27639__auto__))){
return ((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27924){
return (function (params__27640__auto__,params_idx__27641__auto__){
return p__27639__auto__;
});
;})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27924))
} else {
return ((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27924){
return (function (params__27640__auto__,params_idx__27641__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__27639__auto__,params__27640__auto__,(params_idx__27641__auto__ + o__27638__auto__));
});
;})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27924))
}
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27924))
,offsets__27636__auto__,paths__27634__auto__);
var vec__27925 = latefns27922;
var latefn27923 = cljs.core.nth.call(null,vec__27925,(0),null);
var ret__27642__auto__ = (function (){var collector__27622__auto__ = ((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27924,latefns27922,vec__27925,latefn27923){
return (function (params27597,params_idx27598,vals__27623__auto__,structure,next_fn__27624__auto__){
var late = latefn27923.call(null,params27597,params_idx27598);
var c__27625__auto__ = com.rpl.specter.compiled_select.call(null,late,structure);
return next_fn__27624__auto__.call(null,params27597,(params_idx27598 + num_params27924),cljs.core.conj.call(null,vals__27623__auto__,c__27625__auto__),structure);
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27924,latefns27922,vec__27925,latefn27923))
;
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__27622__auto__,collector__27622__auto__),num_params27924);
})();
if(!(any_params_needed_QMARK___27637__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__27642__auto__,null,(0));
} else {
return ret__27642__auto__;
}
});

com.rpl.specter.collect.cljs$lang$maxFixedArity = (0);

com.rpl.specter.collect.cljs$lang$applyTo = (function (seq27921){
return com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27921));
});

/**
 * Adds the result of running select-one with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect_one = (function com$rpl$specter$collect_one(var_args){
var args__22624__auto__ = [];
var len__22617__auto___27938 = arguments.length;
var i__22618__auto___27939 = (0);
while(true){
if((i__22618__auto___27939 < len__22617__auto___27938)){
args__22624__auto__.push((arguments[i__22618__auto___27939]));

var G__27940 = (i__22618__auto___27939 + (1));
i__22618__auto___27939 = G__27940;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});

com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__27634__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__27635__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__27634__auto__);
var offsets__27636__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__27635__auto__));
var any_params_needed_QMARK___27637__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__27634__auto__)));
var num_params27934 = cljs.core.last.call(null,offsets__27636__auto__);
var latefns27932 = cljs.core.map.call(null,((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27934){
return (function (o__27638__auto__,p__27639__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__27639__auto__))){
return ((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27934){
return (function (params__27640__auto__,params_idx__27641__auto__){
return p__27639__auto__;
});
;})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27934))
} else {
return ((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27934){
return (function (params__27640__auto__,params_idx__27641__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__27639__auto__,params__27640__auto__,(params_idx__27641__auto__ + o__27638__auto__));
});
;})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27934))
}
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27934))
,offsets__27636__auto__,paths__27634__auto__);
var vec__27935 = latefns27932;
var latefn27933 = cljs.core.nth.call(null,vec__27935,(0),null);
var ret__27642__auto__ = (function (){var collector__27622__auto__ = ((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27934,latefns27932,vec__27935,latefn27933){
return (function (params27597,params_idx27598,vals__27623__auto__,structure,next_fn__27624__auto__){
var late = latefn27933.call(null,params27597,params_idx27598);
var c__27625__auto__ = com.rpl.specter.compiled_select_one.call(null,late,structure);
return next_fn__27624__auto__.call(null,params27597,(params_idx27598 + num_params27934),cljs.core.conj.call(null,vals__27623__auto__,c__27625__auto__),structure);
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27934,latefns27932,vec__27935,latefn27933))
;
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__27622__auto__,collector__27622__auto__),num_params27934);
})();
if(!(any_params_needed_QMARK___27637__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__27642__auto__,null,(0));
} else {
return ret__27642__auto__;
}
});

com.rpl.specter.collect_one.cljs$lang$maxFixedArity = (0);

com.rpl.specter.collect_one.cljs$lang$applyTo = (function (seq27931){
return com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27931));
});

/**
 * Adds an external value to the collected vals. Useful when additional arguments
 *   are required to the transform function that would otherwise require partial
 *   application or a wrapper function.
 * 
 *   e.g., incrementing val at path [:a :b] by 3:
 *   (transform [:a :b (putval 3)] + some-map)
 */
com.rpl.specter.putval = (function (){var collector__27622__auto__ = (function (params27597,params_idx27598,vals__27623__auto__,structure,next_fn__27624__auto__){
var val = (params27597[(params_idx27598 + (0))]);
var c__27625__auto__ = val;
return next_fn__27624__auto__.call(null,params27597,(params_idx27598 + 1),cljs.core.conj.call(null,vals__27623__auto__,c__27625__auto__),structure);
});
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__27622__auto__,collector__27622__auto__),1);
})();
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = (function com$rpl$specter$if_path(var_args){
var args27943 = [];
var len__22617__auto___27961 = arguments.length;
var i__22618__auto___27962 = (0);
while(true){
if((i__22618__auto___27962 < len__22617__auto___27961)){
args27943.push((arguments[i__22618__auto___27962]));

var G__27963 = (i__22618__auto___27962 + (1));
i__22618__auto___27962 = G__27963;
continue;
} else {
}
break;
}

var G__27945 = args27943.length;
switch (G__27945) {
case 2:
return com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27943.length)].join('')));

}
});

com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2 = (function (cond_p,then_path){
return com.rpl.specter.if_path.call(null,cond_p,then_path,com.rpl.specter.STOP);
});

com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 = (function (cond_p,then_path,else_path){
var temp__6367__auto__ = com.rpl.specter.impl.extract_basic_filter_fn.call(null,cond_p);
if(cljs.core.truth_(temp__6367__auto__)){
var afn = temp__6367__auto__;
var paths__27634__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [then_path,else_path], null));
var needed_params__27635__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__27634__auto__);
var offsets__27636__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__27635__auto__));
var any_params_needed_QMARK___27637__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__27634__auto__)));
var num_params27949 = cljs.core.last.call(null,offsets__27636__auto__);
var latefns27946 = cljs.core.map.call(null,((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27949,afn,temp__6367__auto__){
return (function (o__27638__auto__,p__27639__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__27639__auto__))){
return ((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27949,afn,temp__6367__auto__){
return (function (params__27640__auto__,params_idx__27641__auto__){
return p__27639__auto__;
});
;})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27949,afn,temp__6367__auto__))
} else {
return ((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27949,afn,temp__6367__auto__){
return (function (params__27640__auto__,params_idx__27641__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__27639__auto__,params__27640__auto__,(params_idx__27641__auto__ + o__27638__auto__));
});
;})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27949,afn,temp__6367__auto__))
}
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27949,afn,temp__6367__auto__))
,offsets__27636__auto__,paths__27634__auto__);
var vec__27950 = latefns27946;
var G__27947 = cljs.core.nth.call(null,vec__27950,(0),null);
var G__27948 = cljs.core.nth.call(null,vec__27950,(1),null);
var ret__27642__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27949,latefns27946,vec__27950,G__27947,G__27948,afn,temp__6367__auto__){
return (function (params27597,params_idx27598,vals__27599__auto__,structure,next_fn__27600__auto__){
var next_fn = ((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27949,latefns27946,vec__27950,G__27947,G__27948,afn,temp__6367__auto__){
return (function (structure__27601__auto__){
return next_fn__27600__auto__.call(null,params27597,(params_idx27598 + num_params27949),vals__27599__auto__,structure__27601__auto__);
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27949,latefns27946,vec__27950,G__27947,G__27948,afn,temp__6367__auto__))
;
var late_then = G__27947.call(null,params27597,params_idx27598);
var late_else = G__27948.call(null,params27597,params_idx27598);
return com.rpl.specter.impl.if_select.call(null,structure,next_fn,afn,late_then,late_else);
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27949,latefns27946,vec__27950,G__27947,G__27948,afn,temp__6367__auto__))
,((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27949,latefns27946,vec__27950,G__27947,G__27948,afn,temp__6367__auto__){
return (function (params27597,params_idx27598,vals__27599__auto__,structure,next_fn__27600__auto__){
var next_fn = ((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27949,latefns27946,vec__27950,G__27947,G__27948,afn,temp__6367__auto__){
return (function (structure__27601__auto__){
return next_fn__27600__auto__.call(null,params27597,(params_idx27598 + num_params27949),vals__27599__auto__,structure__27601__auto__);
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27949,latefns27946,vec__27950,G__27947,G__27948,afn,temp__6367__auto__))
;
var late_then = G__27947.call(null,params27597,params_idx27598);
var late_else = G__27948.call(null,params27597,params_idx27598);
return com.rpl.specter.impl.if_transform.call(null,structure,next_fn,afn,late_then,late_else);
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27949,latefns27946,vec__27950,G__27947,G__27948,afn,temp__6367__auto__))
),num_params27949);
if(!(any_params_needed_QMARK___27637__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__27642__auto__,null,(0));
} else {
return ret__27642__auto__;
}
} else {
var paths__27634__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cond_p,then_path,else_path], null));
var needed_params__27635__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__27634__auto__);
var offsets__27636__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__27635__auto__));
var any_params_needed_QMARK___27637__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__27634__auto__)));
var num_params27957 = cljs.core.last.call(null,offsets__27636__auto__);
var latefns27953 = cljs.core.map.call(null,((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27957,temp__6367__auto__){
return (function (o__27638__auto__,p__27639__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__27639__auto__))){
return ((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27957,temp__6367__auto__){
return (function (params__27640__auto__,params_idx__27641__auto__){
return p__27639__auto__;
});
;})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27957,temp__6367__auto__))
} else {
return ((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27957,temp__6367__auto__){
return (function (params__27640__auto__,params_idx__27641__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__27639__auto__,params__27640__auto__,(params_idx__27641__auto__ + o__27638__auto__));
});
;})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27957,temp__6367__auto__))
}
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27957,temp__6367__auto__))
,offsets__27636__auto__,paths__27634__auto__);
var vec__27958 = latefns27953;
var G__27954 = cljs.core.nth.call(null,vec__27958,(0),null);
var G__27955 = cljs.core.nth.call(null,vec__27958,(1),null);
var G__27956 = cljs.core.nth.call(null,vec__27958,(2),null);
var ret__27642__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27957,latefns27953,vec__27958,G__27954,G__27955,G__27956,temp__6367__auto__){
return (function (params27597,params_idx27598,vals__27599__auto__,structure,next_fn__27600__auto__){
var next_fn = ((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27957,latefns27953,vec__27958,G__27954,G__27955,G__27956,temp__6367__auto__){
return (function (structure__27601__auto__){
return next_fn__27600__auto__.call(null,params27597,(params_idx27598 + num_params27957),vals__27599__auto__,structure__27601__auto__);
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27957,latefns27953,vec__27958,G__27954,G__27955,G__27956,temp__6367__auto__))
;
var late_cond = G__27954.call(null,params27597,params_idx27598);
var late_then = G__27955.call(null,params27597,params_idx27598);
var late_else = G__27956.call(null,params27597,params_idx27598);
return com.rpl.specter.impl.if_select.call(null,structure,next_fn,((function (next_fn,late_cond,late_then,late_else,paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27957,latefns27953,vec__27958,G__27954,G__27955,G__27956,temp__6367__auto__){
return (function (p1__27941_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late_cond,p1__27941_SHARP_);
});})(next_fn,late_cond,late_then,late_else,paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27957,latefns27953,vec__27958,G__27954,G__27955,G__27956,temp__6367__auto__))
,late_then,late_else);
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27957,latefns27953,vec__27958,G__27954,G__27955,G__27956,temp__6367__auto__))
,((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27957,latefns27953,vec__27958,G__27954,G__27955,G__27956,temp__6367__auto__){
return (function (params27597,params_idx27598,vals__27599__auto__,structure,next_fn__27600__auto__){
var next_fn = ((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27957,latefns27953,vec__27958,G__27954,G__27955,G__27956,temp__6367__auto__){
return (function (structure__27601__auto__){
return next_fn__27600__auto__.call(null,params27597,(params_idx27598 + num_params27957),vals__27599__auto__,structure__27601__auto__);
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27957,latefns27953,vec__27958,G__27954,G__27955,G__27956,temp__6367__auto__))
;
var late_cond = G__27954.call(null,params27597,params_idx27598);
var late_then = G__27955.call(null,params27597,params_idx27598);
var late_else = G__27956.call(null,params27597,params_idx27598);
return com.rpl.specter.impl.if_transform.call(null,structure,next_fn,((function (next_fn,late_cond,late_then,late_else,paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27957,latefns27953,vec__27958,G__27954,G__27955,G__27956,temp__6367__auto__){
return (function (p1__27942_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late_cond,p1__27942_SHARP_);
});})(next_fn,late_cond,late_then,late_else,paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27957,latefns27953,vec__27958,G__27954,G__27955,G__27956,temp__6367__auto__))
,late_then,late_else);
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27957,latefns27953,vec__27958,G__27954,G__27955,G__27956,temp__6367__auto__))
),num_params27957);
if(!(any_params_needed_QMARK___27637__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__27642__auto__,null,(0));
} else {
return ret__27642__auto__;
}
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
var args__22624__auto__ = [];
var len__22617__auto___27970 = arguments.length;
var i__22618__auto___27971 = (0);
while(true){
if((i__22618__auto___27971 < len__22617__auto___27970)){
args__22624__auto__.push((arguments[i__22618__auto___27971]));

var G__27972 = (i__22618__auto___27971 + (1));
i__22618__auto___27971 = G__27972;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});

com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic = (function (conds){
var pairs = cljs.core.reverse.call(null,cljs.core.partition.call(null,(2),conds));
return cljs.core.reduce.call(null,((function (pairs){
return (function (p,p__27966){
var vec__27967 = p__27966;
var tester = cljs.core.nth.call(null,vec__27967,(0),null);
var apath = cljs.core.nth.call(null,vec__27967,(1),null);
return com.rpl.specter.if_path.call(null,tester,apath,p);
});})(pairs))
,com.rpl.specter.STOP,pairs);
});

com.rpl.specter.cond_path.cljs$lang$maxFixedArity = (0);

com.rpl.specter.cond_path.cljs$lang$applyTo = (function (seq27965){
return com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27965));
});

/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = (function com$rpl$specter$multi_path(var_args){
var args__22624__auto__ = [];
var len__22617__auto___27977 = arguments.length;
var i__22618__auto___27978 = (0);
while(true){
if((i__22618__auto___27978 < len__22617__auto___27977)){
args__22624__auto__.push((arguments[i__22618__auto___27978]));

var G__27979 = (i__22618__auto___27978 + (1));
i__22618__auto___27978 = G__27979;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});

com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic = (function (paths){
var paths__27634__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,paths);
var needed_params__27635__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__27634__auto__);
var offsets__27636__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__27635__auto__));
var any_params_needed_QMARK___27637__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__27634__auto__)));
var num_params27976 = cljs.core.last.call(null,offsets__27636__auto__);
var latefns27975 = cljs.core.map.call(null,((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27976){
return (function (o__27638__auto__,p__27639__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__27639__auto__))){
return ((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27976){
return (function (params__27640__auto__,params_idx__27641__auto__){
return p__27639__auto__;
});
;})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27976))
} else {
return ((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27976){
return (function (params__27640__auto__,params_idx__27641__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__27639__auto__,params__27640__auto__,(params_idx__27641__auto__ + o__27638__auto__));
});
;})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27976))
}
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27976))
,offsets__27636__auto__,paths__27634__auto__);
var ret__27642__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27976,latefns27975){
return (function (params27597,params_idx27598,vals__27599__auto__,structure,next_fn__27600__auto__){
var next_fn = ((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27976,latefns27975){
return (function (structure__27601__auto__){
return next_fn__27600__auto__.call(null,params27597,(params_idx27598 + num_params27976),vals__27599__auto__,structure__27601__auto__);
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27976,latefns27975))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27976,latefns27975){
return (function (l__27687__auto__){
return l__27687__auto__.call(null,params27597,params_idx27598);
});})(next_fn,paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27976,latefns27975))
,latefns27975);
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,next_fn,cljs.core.mapcat.call(null,((function (next_fn,compiled_paths,paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27976,latefns27975){
return (function (p1__27973_SHARP_){
return com.rpl.specter.compiled_select.call(null,p1__27973_SHARP_,structure);
});})(next_fn,compiled_paths,paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27976,latefns27975))
,compiled_paths)));
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27976,latefns27975))
,((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27976,latefns27975){
return (function (params27597,params_idx27598,vals__27599__auto__,structure,next_fn__27600__auto__){
var next_fn = ((function (paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27976,latefns27975){
return (function (structure__27601__auto__){
return next_fn__27600__auto__.call(null,params27597,(params_idx27598 + num_params27976),vals__27599__auto__,structure__27601__auto__);
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27976,latefns27975))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27976,latefns27975){
return (function (l__27687__auto__){
return l__27687__auto__.call(null,params27597,params_idx27598);
});})(next_fn,paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27976,latefns27975))
,latefns27975);
return cljs.core.reduce.call(null,((function (next_fn,compiled_paths,paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27976,latefns27975){
return (function (structure__$1,path){
return com.rpl.specter.compiled_transform.call(null,path,next_fn,structure__$1);
});})(next_fn,compiled_paths,paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27976,latefns27975))
,structure,compiled_paths);
});})(paths__27634__auto__,needed_params__27635__auto__,offsets__27636__auto__,any_params_needed_QMARK___27637__auto__,num_params27976,latefns27975))
),num_params27976);
if(!(any_params_needed_QMARK___27637__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__27642__auto__,null,(0));
} else {
return ret__27642__auto__;
}
});

com.rpl.specter.multi_path.cljs$lang$maxFixedArity = (0);

com.rpl.specter.multi_path.cljs$lang$applyTo = (function (seq27974){
return com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27974));
});

/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = (function com$rpl$specter$stay_then_continue(var_args){
var args__22624__auto__ = [];
var len__22617__auto___27981 = arguments.length;
var i__22618__auto___27982 = (0);
while(true){
if((i__22618__auto___27982 < len__22617__auto___27981)){
args__22624__auto__.push((arguments[i__22618__auto___27982]));

var G__27983 = (i__22618__auto___27982 + (1));
i__22618__auto___27982 = G__27983;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.stay_then_continue.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});

com.rpl.specter.stay_then_continue.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path);
});

com.rpl.specter.stay_then_continue.cljs$lang$maxFixedArity = (0);

com.rpl.specter.stay_then_continue.cljs$lang$applyTo = (function (seq27980){
return com.rpl.specter.stay_then_continue.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27980));
});

/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = (function com$rpl$specter$continue_then_stay(var_args){
var args__22624__auto__ = [];
var len__22617__auto___27985 = arguments.length;
var i__22618__auto___27986 = (0);
while(true){
if((i__22618__auto___27986 < len__22617__auto___27985)){
args__22624__auto__.push((arguments[i__22618__auto___27986]));

var G__27987 = (i__22618__auto___27986 + (1));
i__22618__auto___27986 = G__27987;
continue;
} else {
}
break;
}

var argseq__22625__auto__ = ((((0) < args__22624__auto__.length))?(new cljs.core.IndexedSeq(args__22624__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.continue_then_stay.cljs$core$IFn$_invoke$arity$variadic(argseq__22625__auto__);
});

com.rpl.specter.continue_then_stay.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY);
});

com.rpl.specter.continue_then_stay.cljs$lang$maxFixedArity = (0);

com.rpl.specter.continue_then_stay.cljs$lang$applyTo = (function (seq27984){
return com.rpl.specter.continue_then_stay.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27984));
});


//# sourceMappingURL=specter.js.map?rel=1467159809596