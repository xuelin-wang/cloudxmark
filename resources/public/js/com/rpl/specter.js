// Compiled by ClojureScript 1.9.198 {}
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
var len__22773__auto___25165 = arguments.length;
var i__22774__auto___25166 = (0);
while(true){
if((i__22774__auto___25166 < len__22773__auto___25165)){
args__22780__auto__.push((arguments[i__22774__auto___25166]));

var G__25167 = (i__22774__auto___25166 + (1));
i__22774__auto___25166 = G__25167;
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

com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq25164){
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25164));
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
var args__22780__auto__ = [];
var len__22773__auto___25175 = arguments.length;
var i__22774__auto___25176 = (0);
while(true){
if((i__22774__auto___25176 < len__22773__auto___25175)){
args__22780__auto__.push((arguments[i__22774__auto___25176]));

var G__25177 = (i__22774__auto___25176 + (1));
i__22774__auto___25176 = G__25177;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((3) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22781__auto__);
});

com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__25172){
var map__25173 = p__25172;
var map__25173__$1 = ((((!((map__25173 == null)))?((((map__25173.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25173.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25173):map__25173);
var merge_fn = cljs.core.get.call(null,map__25173__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
return com.rpl.specter.compiled_replace_in.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),transform_fn,structure,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),merge_fn);
});

com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3);

com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq25168){
var G__25169 = cljs.core.first.call(null,seq25168);
var seq25168__$1 = cljs.core.next.call(null,seq25168);
var G__25170 = cljs.core.first.call(null,seq25168__$1);
var seq25168__$2 = cljs.core.next.call(null,seq25168__$1);
var G__25171 = cljs.core.first.call(null,seq25168__$2);
var seq25168__$3 = cljs.core.next.call(null,seq25168__$2);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__25169,G__25170,G__25171,seq25168__$3);
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
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params24912,params_idx24913,vals__24914__auto__,structure,next_fn__24915__auto__){
var next_fn = (function (structure__24916__auto__){
return next_fn__24915__auto__.call(null,params24912,(params_idx24913 + 2),vals__24914__auto__,structure__24916__auto__);
});
var start_fn = (params24912[(params_idx24913 + (0))]);
var end_fn = (params24912[(params_idx24913 + (1))]);
return com.rpl.specter.impl.srange_select.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
}),(function (params24912,params_idx24913,vals__24914__auto__,structure,next_fn__24915__auto__){
var next_fn = (function (structure__24916__auto__){
return next_fn__24915__auto__.call(null,params24912,(params_idx24913 + 2),vals__24914__auto__,structure__24916__auto__);
});
var start_fn = (params24912[(params_idx24913 + (0))]);
var end_fn = (params24912[(params_idx24913 + (1))]);
return com.rpl.specter.impl.srange_transform.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
})),2);
/**
 * Navigates to the subsequence bound by the indexes start (inclusive)
 *        and end (exclusive)
 */
com.rpl.specter.srange = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params24912,params_idx24913,vals__24914__auto__,structure,next_fn__24915__auto__){
var next_fn = (function (structure__24916__auto__){
return next_fn__24915__auto__.call(null,params24912,(params_idx24913 + 2),vals__24914__auto__,structure__24916__auto__);
});
var start = (params24912[(params_idx24913 + (0))]);
var end = (params24912[(params_idx24913 + (1))]);
return com.rpl.specter.impl.srange_select.call(null,structure,start,end,next_fn);
}),(function (params24912,params_idx24913,vals__24914__auto__,structure,next_fn__24915__auto__){
var next_fn = (function (structure__24916__auto__){
return next_fn__24915__auto__.call(null,params24912,(params_idx24913 + 2),vals__24914__auto__,structure__24916__auto__);
});
var start = (params24912[(params_idx24913 + (0))]);
var end = (params24912[(params_idx24913 + (1))]);
return com.rpl.specter.impl.srange_transform.call(null,structure,start,end,next_fn);
})),2);
/**
 * Navigates to every continuous subsequence of elements matching `pred`
 */
com.rpl.specter.continuous_subseqs = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params24912,params_idx24913,vals__24914__auto__,structure,next_fn__24915__auto__){
var next_fn = (function (structure__24916__auto__){
return next_fn__24915__auto__.call(null,params24912,(params_idx24913 + 1),vals__24914__auto__,structure__24916__auto__);
});
var pred = (params24912[(params_idx24913 + (0))]);
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,((function (next_fn,pred){
return (function (p__25178){
var vec__25179 = p__25178;
var s = cljs.core.nth.call(null,vec__25179,(0),null);
var e = cljs.core.nth.call(null,vec__25179,(1),null);
return com.rpl.specter.impl.srange_select.call(null,structure,s,e,next_fn);
});})(next_fn,pred))
,com.rpl.specter.impl.matching_ranges.call(null,structure,pred)));
}),(function (params24912,params_idx24913,vals__24914__auto__,structure,next_fn__24915__auto__){
var next_fn = (function (structure__24916__auto__){
return next_fn__24915__auto__.call(null,params24912,(params_idx24913 + 1),vals__24914__auto__,structure__24916__auto__);
});
var pred = (params24912[(params_idx24913 + (0))]);
return cljs.core.reduce.call(null,((function (next_fn,pred){
return (function (structure__$1,p__25182){
var vec__25183 = p__25182;
var s = cljs.core.nth.call(null,vec__25183,(0),null);
var e = cljs.core.nth.call(null,vec__25183,(1),null);
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
com.rpl.specter.subset = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params24912,params_idx24913,vals__24914__auto__,structure,next_fn__24915__auto__){
var next_fn = (function (structure__24916__auto__){
return next_fn__24915__auto__.call(null,params24912,(params_idx24913 + 1),vals__24914__auto__,structure__24916__auto__);
});
var aset = (params24912[(params_idx24913 + (0))]);
return next_fn.call(null,clojure.set.intersection.call(null,structure,aset));
}),(function (params24912,params_idx24913,vals__24914__auto__,structure,next_fn__24915__auto__){
var next_fn = (function (structure__24916__auto__){
return next_fn__24915__auto__.call(null,params24912,(params_idx24913 + 1),vals__24914__auto__,structure__24916__auto__);
});
var aset = (params24912[(params_idx24913 + (0))]);
var subset = clojure.set.intersection.call(null,structure,aset);
var newset = next_fn.call(null,subset);
return clojure.set.union.call(null,clojure.set.difference.call(null,structure,subset),newset);
})),1);
/**
 * Navigates to the specified submap (using select-keys).
 *        In a transform, that submap in the original map is changed to the new
 *        value of the submap.
 */
com.rpl.specter.submap = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params24912,params_idx24913,vals__24914__auto__,structure,next_fn__24915__auto__){
var next_fn = (function (structure__24916__auto__){
return next_fn__24915__auto__.call(null,params24912,(params_idx24913 + 1),vals__24914__auto__,structure__24916__auto__);
});
var m_keys = (params24912[(params_idx24913 + (0))]);
return next_fn.call(null,cljs.core.select_keys.call(null,structure,m_keys));
}),(function (params24912,params_idx24913,vals__24914__auto__,structure,next_fn__24915__auto__){
var next_fn = (function (structure__24916__auto__){
return next_fn__24915__auto__.call(null,params24912,(params_idx24913 + 1),vals__24914__auto__,structure__24916__auto__);
});
var m_keys = (params24912[(params_idx24913 + (0))]);
var submap = cljs.core.select_keys.call(null,structure,m_keys);
var newmap = next_fn.call(null,submap);
return cljs.core.merge.call(null,cljs.core.reduce.call(null,cljs.core.dissoc,structure,m_keys),newmap);
})),1);
/**
 * Using clojure.walk, navigate the data structure until reaching
 *        a value for which `afn` returns truthy.
 */
com.rpl.specter.walker = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params24912,params_idx24913,vals__24914__auto__,structure,next_fn__24915__auto__){
var next_fn = (function (structure__24916__auto__){
return next_fn__24915__auto__.call(null,params24912,(params_idx24913 + 1),vals__24914__auto__,structure__24916__auto__);
});
var afn = (params24912[(params_idx24913 + (0))]);
return com.rpl.specter.impl.walk_select.call(null,afn,next_fn,structure);
}),(function (params24912,params_idx24913,vals__24914__auto__,structure,next_fn__24915__auto__){
var next_fn = (function (structure__24916__auto__){
return next_fn__24915__auto__.call(null,params24912,(params_idx24913 + 1),vals__24914__auto__,structure__24916__auto__);
});
var afn = (params24912[(params_idx24913 + (0))]);
return com.rpl.specter.impl.walk_until.call(null,afn,next_fn,structure);
})),1);
/**
 * Like `walker` but maintains metadata of any forms traversed.
 */
com.rpl.specter.codewalker = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params24912,params_idx24913,vals__24914__auto__,structure,next_fn__24915__auto__){
var next_fn = (function (structure__24916__auto__){
return next_fn__24915__auto__.call(null,params24912,(params_idx24913 + 1),vals__24914__auto__,structure__24916__auto__);
});
var afn = (params24912[(params_idx24913 + (0))]);
return com.rpl.specter.impl.walk_select.call(null,afn,next_fn,structure);
}),(function (params24912,params_idx24913,vals__24914__auto__,structure,next_fn__24915__auto__){
var next_fn = (function (structure__24916__auto__){
return next_fn__24915__auto__.call(null,params24912,(params_idx24913 + 1),vals__24914__auto__,structure__24916__auto__);
});
var afn = (params24912[(params_idx24913 + (0))]);
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
var len__22773__auto___25193 = arguments.length;
var i__22774__auto___25194 = (0);
while(true){
if((i__22774__auto___25194 < len__22773__auto___25193)){
args__22780__auto__.push((arguments[i__22774__auto___25194]));

var G__25195 = (i__22774__auto___25194 + (1));
i__22774__auto___25194 = G__25195;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});

com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__24949__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__24950__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__24949__auto__);
var offsets__24951__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__24950__auto__));
var any_params_needed_QMARK___24952__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__24949__auto__)));
var num_params25189 = cljs.core.last.call(null,offsets__24951__auto__);
var latefns25187 = cljs.core.map.call(null,((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25189){
return (function (o__24953__auto__,p__24954__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__24954__auto__))){
return ((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25189){
return (function (params__24955__auto__,params_idx__24956__auto__){
return p__24954__auto__;
});
;})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25189))
} else {
return ((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25189){
return (function (params__24955__auto__,params_idx__24956__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__24954__auto__,params__24955__auto__,(params_idx__24956__auto__ + o__24953__auto__));
});
;})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25189))
}
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25189))
,offsets__24951__auto__,paths__24949__auto__);
var vec__25190 = latefns25187;
var G__25188 = cljs.core.nth.call(null,vec__25190,(0),null);
var ret__24957__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25189,latefns25187,vec__25190,G__25188){
return (function (params24912,params_idx24913,vals__24914__auto__,structure,next_fn__24915__auto__){
var next_fn = ((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25189,latefns25187,vec__25190,G__25188){
return (function (structure__24916__auto__){
return next_fn__24915__auto__.call(null,params24912,(params_idx24913 + num_params25189),vals__24914__auto__,structure__24916__auto__);
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25189,latefns25187,vec__25190,G__25188))
;
var late = G__25188.call(null,params24912,params_idx24913);
return next_fn.call(null,com.rpl.specter.compiled_select.call(null,late,structure));
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25189,latefns25187,vec__25190,G__25188))
,((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25189,latefns25187,vec__25190,G__25188){
return (function (params24912,params_idx24913,vals__24914__auto__,structure,next_fn__24915__auto__){
var next_fn = ((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25189,latefns25187,vec__25190,G__25188){
return (function (structure__24916__auto__){
return next_fn__24915__auto__.call(null,params24912,(params_idx24913 + num_params25189),vals__24914__auto__,structure__24916__auto__);
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25189,latefns25187,vec__25190,G__25188))
;
var late = G__25188.call(null,params24912,params_idx24913);
var select_result = com.rpl.specter.compiled_select.call(null,late,structure);
var transformed = next_fn.call(null,select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.call(null,transformed);
return com.rpl.specter.compiled_transform.call(null,late,((function (select_result,transformed,values_to_insert,next_fn,late,paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25189,latefns25187,vec__25190,G__25188){
return (function (_){
var next_val = cljs.core.first.call(null,com.rpl.specter.impl.get_cell.call(null,values_to_insert));
com.rpl.specter.impl.update_cell_BANG_.call(null,values_to_insert,cljs.core.rest);

return next_val;
});})(select_result,transformed,values_to_insert,next_fn,late,paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25189,latefns25187,vec__25190,G__25188))
,structure);
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25189,latefns25187,vec__25190,G__25188))
),num_params25189);
if(!(any_params_needed_QMARK___24952__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__24957__auto__,null,(0));
} else {
return ret__24957__auto__;
}
});

com.rpl.specter.subselect.cljs$lang$maxFixedArity = (0);

com.rpl.specter.subselect.cljs$lang$applyTo = (function (seq25186){
return com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25186));
});

/**
 * Navigates to the specified key, navigating to nil if it does not exist.
 */
com.rpl.specter.keypath = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params24912,params_idx24913,vals__24914__auto__,structure,next_fn__24915__auto__){
var next_fn = (function (structure__24916__auto__){
return next_fn__24915__auto__.call(null,params24912,(params_idx24913 + 1),vals__24914__auto__,structure__24916__auto__);
});
var key = (params24912[(params_idx24913 + (0))]);
return next_fn.call(null,cljs.core.get.call(null,structure,key));
}),(function (params24912,params_idx24913,vals__24914__auto__,structure,next_fn__24915__auto__){
var next_fn = (function (structure__24916__auto__){
return next_fn__24915__auto__.call(null,params24912,(params_idx24913 + 1),vals__24914__auto__,structure__24916__auto__);
});
var key = (params24912[(params_idx24913 + (0))]);
return cljs.core.assoc.call(null,structure,key,next_fn.call(null,cljs.core.get.call(null,structure,key)));
})),1);
/**
 * Navigates to the key only if it exists in the map.
 */
com.rpl.specter.must = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params24912,params_idx24913,vals__24914__auto__,structure,next_fn__24915__auto__){
var next_fn = (function (structure__24916__auto__){
return next_fn__24915__auto__.call(null,params24912,(params_idx24913 + 1),vals__24914__auto__,structure__24916__auto__);
});
var k = (params24912[(params_idx24913 + (0))]);
if(cljs.core.contains_QMARK_.call(null,structure,k)){
return next_fn.call(null,cljs.core.get.call(null,structure,k));
} else {
return null;
}
}),(function (params24912,params_idx24913,vals__24914__auto__,structure,next_fn__24915__auto__){
var next_fn = (function (structure__24916__auto__){
return next_fn__24915__auto__.call(null,params24912,(params_idx24913 + 1),vals__24914__auto__,structure__24916__auto__);
});
var k = (params24912[(params_idx24913 + (0))]);
if(cljs.core.contains_QMARK_.call(null,structure,k)){
return cljs.core.assoc.call(null,structure,k,next_fn.call(null,cljs.core.get.call(null,structure,k)));
} else {
return structure;
}
})),1);
/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params24912,params_idx24913,vals__24914__auto__,structure,next_fn__24915__auto__){
var next_fn = (function (structure__24916__auto__){
return next_fn__24915__auto__.call(null,params24912,(params_idx24913 + 1),vals__24914__auto__,structure__24916__auto__);
});
var afn = (params24912[(params_idx24913 + (0))]);
return next_fn.call(null,afn.call(null,structure));
}),(function (params24912,params_idx24913,vals__24914__auto__,structure,next_fn__24915__auto__){
var next_fn = (function (structure__24916__auto__){
return next_fn__24915__auto__.call(null,params24912,(params_idx24913 + 1),vals__24914__auto__,structure__24916__auto__);
});
var afn = (params24912[(params_idx24913 + (0))]);
return next_fn.call(null,afn.call(null,structure));
})),1);
/**
 * Navigate to the result of running `parse-fn` on the value. For 
 *        transforms, the transformed value then has `unparse-fn` run on 
 *        it to get the final value at this point.
 */
com.rpl.specter.parser = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params24912,params_idx24913,vals__24914__auto__,structure,next_fn__24915__auto__){
var next_fn = (function (structure__24916__auto__){
return next_fn__24915__auto__.call(null,params24912,(params_idx24913 + 2),vals__24914__auto__,structure__24916__auto__);
});
var parse_fn = (params24912[(params_idx24913 + (0))]);
var unparse_fn = (params24912[(params_idx24913 + (1))]);
return next_fn.call(null,parse_fn.call(null,structure));
}),(function (params24912,params_idx24913,vals__24914__auto__,structure,next_fn__24915__auto__){
var next_fn = (function (structure__24916__auto__){
return next_fn__24915__auto__.call(null,params24912,(params_idx24913 + 2),vals__24914__auto__,structure__24916__auto__);
});
var parse_fn = (params24912[(params_idx24913 + (0))]);
var unparse_fn = (params24912[(params_idx24913 + (1))]);
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
var len__22773__auto___25205 = arguments.length;
var i__22774__auto___25206 = (0);
while(true){
if((i__22774__auto___25206 < len__22773__auto___25205)){
args__22780__auto__.push((arguments[i__22774__auto___25206]));

var G__25207 = (i__22774__auto___25206 + (1));
i__22774__auto___25206 = G__25207;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});

com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var temp__6501__auto__ = com.rpl.specter.impl.extract_basic_filter_fn.call(null,path);
if(cljs.core.truth_(temp__6501__auto__)){
var afn = temp__6501__auto__;
return afn;
} else {
var paths__24949__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__24950__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__24949__auto__);
var offsets__24951__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__24950__auto__));
var any_params_needed_QMARK___24952__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__24949__auto__)));
var num_params25201 = cljs.core.last.call(null,offsets__24951__auto__);
var latefns25199 = cljs.core.map.call(null,((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25201,temp__6501__auto__){
return (function (o__24953__auto__,p__24954__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__24954__auto__))){
return ((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25201,temp__6501__auto__){
return (function (params__24955__auto__,params_idx__24956__auto__){
return p__24954__auto__;
});
;})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25201,temp__6501__auto__))
} else {
return ((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25201,temp__6501__auto__){
return (function (params__24955__auto__,params_idx__24956__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__24954__auto__,params__24955__auto__,(params_idx__24956__auto__ + o__24953__auto__));
});
;})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25201,temp__6501__auto__))
}
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25201,temp__6501__auto__))
,offsets__24951__auto__,paths__24949__auto__);
var vec__25202 = latefns25199;
var G__25200 = cljs.core.nth.call(null,vec__25202,(0),null);
var ret__24957__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25201,latefns25199,vec__25202,G__25200,temp__6501__auto__){
return (function (params24912,params_idx24913,vals__24914__auto__,structure,next_fn__24915__auto__){
var next_fn = ((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25201,latefns25199,vec__25202,G__25200,temp__6501__auto__){
return (function (structure__24916__auto__){
return next_fn__24915__auto__.call(null,params24912,(params_idx24913 + num_params25201),vals__24914__auto__,structure__24916__auto__);
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25201,latefns25199,vec__25202,G__25200,temp__6501__auto__))
;
var late = G__25200.call(null,params24912,params_idx24913);
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,late,paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25201,latefns25199,vec__25202,G__25200,temp__6501__auto__){
return (function (p1__25196_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__25196_SHARP_);
});})(next_fn,late,paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25201,latefns25199,vec__25202,G__25200,temp__6501__auto__))
,structure,next_fn);
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25201,latefns25199,vec__25202,G__25200,temp__6501__auto__))
,((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25201,latefns25199,vec__25202,G__25200,temp__6501__auto__){
return (function (params24912,params_idx24913,vals__24914__auto__,structure,next_fn__24915__auto__){
var next_fn = ((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25201,latefns25199,vec__25202,G__25200,temp__6501__auto__){
return (function (structure__24916__auto__){
return next_fn__24915__auto__.call(null,params24912,(params_idx24913 + num_params25201),vals__24914__auto__,structure__24916__auto__);
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25201,latefns25199,vec__25202,G__25200,temp__6501__auto__))
;
var late = G__25200.call(null,params24912,params_idx24913);
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,late,paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25201,latefns25199,vec__25202,G__25200,temp__6501__auto__){
return (function (p1__25197_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__25197_SHARP_);
});})(next_fn,late,paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25201,latefns25199,vec__25202,G__25200,temp__6501__auto__))
,structure,next_fn);
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25201,latefns25199,vec__25202,G__25200,temp__6501__auto__))
),num_params25201);
if(!(any_params_needed_QMARK___24952__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__24957__auto__,null,(0));
} else {
return ret__24957__auto__;
}
}
});

com.rpl.specter.selected_QMARK_.cljs$lang$maxFixedArity = (0);

com.rpl.specter.selected_QMARK_.cljs$lang$applyTo = (function (seq25198){
return com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25198));
});

com.rpl.specter.not_selected_QMARK_ = (function com$rpl$specter$not_selected_QMARK_(var_args){
var args__22780__auto__ = [];
var len__22773__auto___25217 = arguments.length;
var i__22774__auto___25218 = (0);
while(true){
if((i__22774__auto___25218 < len__22773__auto___25217)){
args__22780__auto__.push((arguments[i__22774__auto___25218]));

var G__25219 = (i__22774__auto___25218 + (1));
i__22774__auto___25218 = G__25219;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});

com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var temp__6501__auto__ = com.rpl.specter.impl.extract_basic_filter_fn.call(null,path);
if(cljs.core.truth_(temp__6501__auto__)){
var afn = temp__6501__auto__;
return ((function (afn,temp__6501__auto__){
return (function (s){
return cljs.core.not.call(null,afn.call(null,s));
});
;})(afn,temp__6501__auto__))
} else {
var paths__24949__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__24950__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__24949__auto__);
var offsets__24951__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__24950__auto__));
var any_params_needed_QMARK___24952__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__24949__auto__)));
var num_params25213 = cljs.core.last.call(null,offsets__24951__auto__);
var latefns25211 = cljs.core.map.call(null,((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25213,temp__6501__auto__){
return (function (o__24953__auto__,p__24954__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__24954__auto__))){
return ((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25213,temp__6501__auto__){
return (function (params__24955__auto__,params_idx__24956__auto__){
return p__24954__auto__;
});
;})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25213,temp__6501__auto__))
} else {
return ((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25213,temp__6501__auto__){
return (function (params__24955__auto__,params_idx__24956__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__24954__auto__,params__24955__auto__,(params_idx__24956__auto__ + o__24953__auto__));
});
;})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25213,temp__6501__auto__))
}
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25213,temp__6501__auto__))
,offsets__24951__auto__,paths__24949__auto__);
var vec__25214 = latefns25211;
var G__25212 = cljs.core.nth.call(null,vec__25214,(0),null);
var ret__24957__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25213,latefns25211,vec__25214,G__25212,temp__6501__auto__){
return (function (params24912,params_idx24913,vals__24914__auto__,structure,next_fn__24915__auto__){
var next_fn = ((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25213,latefns25211,vec__25214,G__25212,temp__6501__auto__){
return (function (structure__24916__auto__){
return next_fn__24915__auto__.call(null,params24912,(params_idx24913 + num_params25213),vals__24914__auto__,structure__24916__auto__);
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25213,latefns25211,vec__25214,G__25212,temp__6501__auto__))
;
var late = G__25212.call(null,params24912,params_idx24913);
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,late,paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25213,latefns25211,vec__25214,G__25212,temp__6501__auto__){
return (function (p1__25208_SHARP_){
return com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,late,p1__25208_SHARP_);
});})(next_fn,late,paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25213,latefns25211,vec__25214,G__25212,temp__6501__auto__))
,structure,next_fn);
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25213,latefns25211,vec__25214,G__25212,temp__6501__auto__))
,((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25213,latefns25211,vec__25214,G__25212,temp__6501__auto__){
return (function (params24912,params_idx24913,vals__24914__auto__,structure,next_fn__24915__auto__){
var next_fn = ((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25213,latefns25211,vec__25214,G__25212,temp__6501__auto__){
return (function (structure__24916__auto__){
return next_fn__24915__auto__.call(null,params24912,(params_idx24913 + num_params25213),vals__24914__auto__,structure__24916__auto__);
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25213,latefns25211,vec__25214,G__25212,temp__6501__auto__))
;
var late = G__25212.call(null,params24912,params_idx24913);
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,late,paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25213,latefns25211,vec__25214,G__25212,temp__6501__auto__){
return (function (p1__25209_SHARP_){
return com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,late,p1__25209_SHARP_);
});})(next_fn,late,paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25213,latefns25211,vec__25214,G__25212,temp__6501__auto__))
,structure,next_fn);
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25213,latefns25211,vec__25214,G__25212,temp__6501__auto__))
),num_params25213);
if(!(any_params_needed_QMARK___24952__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__24957__auto__,null,(0));
} else {
return ret__24957__auto__;
}
}
});

com.rpl.specter.not_selected_QMARK_.cljs$lang$maxFixedArity = (0);

com.rpl.specter.not_selected_QMARK_.cljs$lang$applyTo = (function (seq25210){
return com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25210));
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
var len__22773__auto___25221 = arguments.length;
var i__22774__auto___25222 = (0);
while(true){
if((i__22774__auto___25222 < len__22773__auto___25221)){
args__22780__auto__.push((arguments[i__22774__auto___25222]));

var G__25223 = (i__22774__auto___25222 + (1));
i__22774__auto___25222 = G__25223;
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

com.rpl.specter.filterer.cljs$lang$applyTo = (function (seq25220){
return com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25220));
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
var paths__24949__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__24950__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__24949__auto__);
var offsets__24951__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__24950__auto__));
var any_params_needed_QMARK___24952__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__24949__auto__)));
var num_params25232 = cljs.core.last.call(null,offsets__24951__auto__);
var latefns25230 = cljs.core.map.call(null,((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25232){
return (function (o__24953__auto__,p__24954__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__24954__auto__))){
return ((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25232){
return (function (params__24955__auto__,params_idx__24956__auto__){
return p__24954__auto__;
});
;})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25232))
} else {
return ((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25232){
return (function (params__24955__auto__,params_idx__24956__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__24954__auto__,params__24955__auto__,(params_idx__24956__auto__ + o__24953__auto__));
});
;})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25232))
}
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25232))
,offsets__24951__auto__,paths__24949__auto__);
var vec__25233 = latefns25230;
var G__25231 = cljs.core.nth.call(null,vec__25233,(0),null);
var ret__24957__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25232,latefns25230,vec__25233,G__25231){
return (function (params24912,params_idx24913,vals__24914__auto__,structure,next_fn__24915__auto__){
var next_fn = ((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25232,latefns25230,vec__25233,G__25231){
return (function (structure__24916__auto__){
return next_fn__24915__auto__.call(null,params24912,(params_idx24913 + num_params25232),vals__24914__auto__,structure__24916__auto__);
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25232,latefns25230,vec__25233,G__25231))
;
var late = G__25231.call(null,params24912,params_idx24913);
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,late,update_fn,structure));
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25232,latefns25230,vec__25233,G__25231))
,((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25232,latefns25230,vec__25233,G__25231){
return (function (params24912,params_idx24913,vals__24914__auto__,structure,next_fn__24915__auto__){
var next_fn = ((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25232,latefns25230,vec__25233,G__25231){
return (function (structure__24916__auto__){
return next_fn__24915__auto__.call(null,params24912,(params_idx24913 + num_params25232),vals__24914__auto__,structure__24916__auto__);
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25232,latefns25230,vec__25233,G__25231))
;
var late = G__25231.call(null,params24912,params_idx24913);
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,late,update_fn,structure));
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25232,latefns25230,vec__25233,G__25231))
),num_params25232);
if(!(any_params_needed_QMARK___24952__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__24957__auto__,null,(0));
} else {
return ret__24957__auto__;
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
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params24912,params_idx24913,vals__24914__auto__,structure,next_fn__24915__auto__){
var next_fn = (function (structure__24916__auto__){
return next_fn__24915__auto__.call(null,params24912,(params_idx24913 + 1),vals__24914__auto__,structure__24916__auto__);
});
var v = (params24912[(params_idx24913 + (0))]);
return next_fn.call(null,(((structure == null))?v:structure));
}),(function (params24912,params_idx24913,vals__24914__auto__,structure,next_fn__24915__auto__){
var next_fn = (function (structure__24916__auto__){
return next_fn__24915__auto__.call(null,params24912,(params_idx24913 + 1),vals__24914__auto__,structure__24916__auto__);
});
var v = (params24912[(params_idx24913 + (0))]);
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
var args__22780__auto__ = [];
var len__22773__auto___25243 = arguments.length;
var i__22774__auto___25244 = (0);
while(true){
if((i__22774__auto___25244 < len__22773__auto___25243)){
args__22780__auto__.push((arguments[i__22774__auto___25244]));

var G__25245 = (i__22774__auto___25244 + (1));
i__22774__auto___25244 = G__25245;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});

com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__24949__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__24950__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__24949__auto__);
var offsets__24951__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__24950__auto__));
var any_params_needed_QMARK___24952__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__24949__auto__)));
var num_params25239 = cljs.core.last.call(null,offsets__24951__auto__);
var latefns25237 = cljs.core.map.call(null,((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25239){
return (function (o__24953__auto__,p__24954__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__24954__auto__))){
return ((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25239){
return (function (params__24955__auto__,params_idx__24956__auto__){
return p__24954__auto__;
});
;})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25239))
} else {
return ((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25239){
return (function (params__24955__auto__,params_idx__24956__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__24954__auto__,params__24955__auto__,(params_idx__24956__auto__ + o__24953__auto__));
});
;})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25239))
}
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25239))
,offsets__24951__auto__,paths__24949__auto__);
var vec__25240 = latefns25237;
var latefn25238 = cljs.core.nth.call(null,vec__25240,(0),null);
var ret__24957__auto__ = (function (){var collector__24937__auto__ = ((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25239,latefns25237,vec__25240,latefn25238){
return (function (params24912,params_idx24913,vals__24938__auto__,structure,next_fn__24939__auto__){
var late = latefn25238.call(null,params24912,params_idx24913);
var c__24940__auto__ = com.rpl.specter.compiled_select.call(null,late,structure);
return next_fn__24939__auto__.call(null,params24912,(params_idx24913 + num_params25239),cljs.core.conj.call(null,vals__24938__auto__,c__24940__auto__),structure);
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25239,latefns25237,vec__25240,latefn25238))
;
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__24937__auto__,collector__24937__auto__),num_params25239);
})();
if(!(any_params_needed_QMARK___24952__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__24957__auto__,null,(0));
} else {
return ret__24957__auto__;
}
});

com.rpl.specter.collect.cljs$lang$maxFixedArity = (0);

com.rpl.specter.collect.cljs$lang$applyTo = (function (seq25236){
return com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25236));
});

/**
 * Adds the result of running select-one with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect_one = (function com$rpl$specter$collect_one(var_args){
var args__22780__auto__ = [];
var len__22773__auto___25253 = arguments.length;
var i__22774__auto___25254 = (0);
while(true){
if((i__22774__auto___25254 < len__22773__auto___25253)){
args__22780__auto__.push((arguments[i__22774__auto___25254]));

var G__25255 = (i__22774__auto___25254 + (1));
i__22774__auto___25254 = G__25255;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});

com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__24949__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__24950__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__24949__auto__);
var offsets__24951__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__24950__auto__));
var any_params_needed_QMARK___24952__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__24949__auto__)));
var num_params25249 = cljs.core.last.call(null,offsets__24951__auto__);
var latefns25247 = cljs.core.map.call(null,((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25249){
return (function (o__24953__auto__,p__24954__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__24954__auto__))){
return ((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25249){
return (function (params__24955__auto__,params_idx__24956__auto__){
return p__24954__auto__;
});
;})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25249))
} else {
return ((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25249){
return (function (params__24955__auto__,params_idx__24956__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__24954__auto__,params__24955__auto__,(params_idx__24956__auto__ + o__24953__auto__));
});
;})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25249))
}
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25249))
,offsets__24951__auto__,paths__24949__auto__);
var vec__25250 = latefns25247;
var latefn25248 = cljs.core.nth.call(null,vec__25250,(0),null);
var ret__24957__auto__ = (function (){var collector__24937__auto__ = ((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25249,latefns25247,vec__25250,latefn25248){
return (function (params24912,params_idx24913,vals__24938__auto__,structure,next_fn__24939__auto__){
var late = latefn25248.call(null,params24912,params_idx24913);
var c__24940__auto__ = com.rpl.specter.compiled_select_one.call(null,late,structure);
return next_fn__24939__auto__.call(null,params24912,(params_idx24913 + num_params25249),cljs.core.conj.call(null,vals__24938__auto__,c__24940__auto__),structure);
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25249,latefns25247,vec__25250,latefn25248))
;
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__24937__auto__,collector__24937__auto__),num_params25249);
})();
if(!(any_params_needed_QMARK___24952__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__24957__auto__,null,(0));
} else {
return ret__24957__auto__;
}
});

com.rpl.specter.collect_one.cljs$lang$maxFixedArity = (0);

com.rpl.specter.collect_one.cljs$lang$applyTo = (function (seq25246){
return com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25246));
});

/**
 * Adds an external value to the collected vals. Useful when additional arguments
 *   are required to the transform function that would otherwise require partial
 *   application or a wrapper function.
 * 
 *   e.g., incrementing val at path [:a :b] by 3:
 *   (transform [:a :b (putval 3)] + some-map)
 */
com.rpl.specter.putval = (function (){var collector__24937__auto__ = (function (params24912,params_idx24913,vals__24938__auto__,structure,next_fn__24939__auto__){
var val = (params24912[(params_idx24913 + (0))]);
var c__24940__auto__ = val;
return next_fn__24939__auto__.call(null,params24912,(params_idx24913 + 1),cljs.core.conj.call(null,vals__24938__auto__,c__24940__auto__),structure);
});
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__24937__auto__,collector__24937__auto__),1);
})();
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = (function com$rpl$specter$if_path(var_args){
var args25258 = [];
var len__22773__auto___25276 = arguments.length;
var i__22774__auto___25277 = (0);
while(true){
if((i__22774__auto___25277 < len__22773__auto___25276)){
args25258.push((arguments[i__22774__auto___25277]));

var G__25278 = (i__22774__auto___25277 + (1));
i__22774__auto___25277 = G__25278;
continue;
} else {
}
break;
}

var G__25260 = args25258.length;
switch (G__25260) {
case 2:
return com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25258.length)].join('')));

}
});

com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2 = (function (cond_p,then_path){
return com.rpl.specter.if_path.call(null,cond_p,then_path,com.rpl.specter.STOP);
});

com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 = (function (cond_p,then_path,else_path){
var temp__6501__auto__ = com.rpl.specter.impl.extract_basic_filter_fn.call(null,cond_p);
if(cljs.core.truth_(temp__6501__auto__)){
var afn = temp__6501__auto__;
var paths__24949__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [then_path,else_path], null));
var needed_params__24950__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__24949__auto__);
var offsets__24951__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__24950__auto__));
var any_params_needed_QMARK___24952__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__24949__auto__)));
var num_params25264 = cljs.core.last.call(null,offsets__24951__auto__);
var latefns25261 = cljs.core.map.call(null,((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25264,afn,temp__6501__auto__){
return (function (o__24953__auto__,p__24954__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__24954__auto__))){
return ((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25264,afn,temp__6501__auto__){
return (function (params__24955__auto__,params_idx__24956__auto__){
return p__24954__auto__;
});
;})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25264,afn,temp__6501__auto__))
} else {
return ((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25264,afn,temp__6501__auto__){
return (function (params__24955__auto__,params_idx__24956__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__24954__auto__,params__24955__auto__,(params_idx__24956__auto__ + o__24953__auto__));
});
;})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25264,afn,temp__6501__auto__))
}
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25264,afn,temp__6501__auto__))
,offsets__24951__auto__,paths__24949__auto__);
var vec__25265 = latefns25261;
var G__25262 = cljs.core.nth.call(null,vec__25265,(0),null);
var G__25263 = cljs.core.nth.call(null,vec__25265,(1),null);
var ret__24957__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25264,latefns25261,vec__25265,G__25262,G__25263,afn,temp__6501__auto__){
return (function (params24912,params_idx24913,vals__24914__auto__,structure,next_fn__24915__auto__){
var next_fn = ((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25264,latefns25261,vec__25265,G__25262,G__25263,afn,temp__6501__auto__){
return (function (structure__24916__auto__){
return next_fn__24915__auto__.call(null,params24912,(params_idx24913 + num_params25264),vals__24914__auto__,structure__24916__auto__);
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25264,latefns25261,vec__25265,G__25262,G__25263,afn,temp__6501__auto__))
;
var late_then = G__25262.call(null,params24912,params_idx24913);
var late_else = G__25263.call(null,params24912,params_idx24913);
return com.rpl.specter.impl.if_select.call(null,structure,next_fn,afn,late_then,late_else);
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25264,latefns25261,vec__25265,G__25262,G__25263,afn,temp__6501__auto__))
,((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25264,latefns25261,vec__25265,G__25262,G__25263,afn,temp__6501__auto__){
return (function (params24912,params_idx24913,vals__24914__auto__,structure,next_fn__24915__auto__){
var next_fn = ((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25264,latefns25261,vec__25265,G__25262,G__25263,afn,temp__6501__auto__){
return (function (structure__24916__auto__){
return next_fn__24915__auto__.call(null,params24912,(params_idx24913 + num_params25264),vals__24914__auto__,structure__24916__auto__);
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25264,latefns25261,vec__25265,G__25262,G__25263,afn,temp__6501__auto__))
;
var late_then = G__25262.call(null,params24912,params_idx24913);
var late_else = G__25263.call(null,params24912,params_idx24913);
return com.rpl.specter.impl.if_transform.call(null,structure,next_fn,afn,late_then,late_else);
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25264,latefns25261,vec__25265,G__25262,G__25263,afn,temp__6501__auto__))
),num_params25264);
if(!(any_params_needed_QMARK___24952__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__24957__auto__,null,(0));
} else {
return ret__24957__auto__;
}
} else {
var paths__24949__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cond_p,then_path,else_path], null));
var needed_params__24950__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__24949__auto__);
var offsets__24951__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__24950__auto__));
var any_params_needed_QMARK___24952__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__24949__auto__)));
var num_params25272 = cljs.core.last.call(null,offsets__24951__auto__);
var latefns25268 = cljs.core.map.call(null,((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25272,temp__6501__auto__){
return (function (o__24953__auto__,p__24954__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__24954__auto__))){
return ((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25272,temp__6501__auto__){
return (function (params__24955__auto__,params_idx__24956__auto__){
return p__24954__auto__;
});
;})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25272,temp__6501__auto__))
} else {
return ((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25272,temp__6501__auto__){
return (function (params__24955__auto__,params_idx__24956__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__24954__auto__,params__24955__auto__,(params_idx__24956__auto__ + o__24953__auto__));
});
;})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25272,temp__6501__auto__))
}
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25272,temp__6501__auto__))
,offsets__24951__auto__,paths__24949__auto__);
var vec__25273 = latefns25268;
var G__25269 = cljs.core.nth.call(null,vec__25273,(0),null);
var G__25270 = cljs.core.nth.call(null,vec__25273,(1),null);
var G__25271 = cljs.core.nth.call(null,vec__25273,(2),null);
var ret__24957__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25272,latefns25268,vec__25273,G__25269,G__25270,G__25271,temp__6501__auto__){
return (function (params24912,params_idx24913,vals__24914__auto__,structure,next_fn__24915__auto__){
var next_fn = ((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25272,latefns25268,vec__25273,G__25269,G__25270,G__25271,temp__6501__auto__){
return (function (structure__24916__auto__){
return next_fn__24915__auto__.call(null,params24912,(params_idx24913 + num_params25272),vals__24914__auto__,structure__24916__auto__);
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25272,latefns25268,vec__25273,G__25269,G__25270,G__25271,temp__6501__auto__))
;
var late_cond = G__25269.call(null,params24912,params_idx24913);
var late_then = G__25270.call(null,params24912,params_idx24913);
var late_else = G__25271.call(null,params24912,params_idx24913);
return com.rpl.specter.impl.if_select.call(null,structure,next_fn,((function (next_fn,late_cond,late_then,late_else,paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25272,latefns25268,vec__25273,G__25269,G__25270,G__25271,temp__6501__auto__){
return (function (p1__25256_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late_cond,p1__25256_SHARP_);
});})(next_fn,late_cond,late_then,late_else,paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25272,latefns25268,vec__25273,G__25269,G__25270,G__25271,temp__6501__auto__))
,late_then,late_else);
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25272,latefns25268,vec__25273,G__25269,G__25270,G__25271,temp__6501__auto__))
,((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25272,latefns25268,vec__25273,G__25269,G__25270,G__25271,temp__6501__auto__){
return (function (params24912,params_idx24913,vals__24914__auto__,structure,next_fn__24915__auto__){
var next_fn = ((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25272,latefns25268,vec__25273,G__25269,G__25270,G__25271,temp__6501__auto__){
return (function (structure__24916__auto__){
return next_fn__24915__auto__.call(null,params24912,(params_idx24913 + num_params25272),vals__24914__auto__,structure__24916__auto__);
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25272,latefns25268,vec__25273,G__25269,G__25270,G__25271,temp__6501__auto__))
;
var late_cond = G__25269.call(null,params24912,params_idx24913);
var late_then = G__25270.call(null,params24912,params_idx24913);
var late_else = G__25271.call(null,params24912,params_idx24913);
return com.rpl.specter.impl.if_transform.call(null,structure,next_fn,((function (next_fn,late_cond,late_then,late_else,paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25272,latefns25268,vec__25273,G__25269,G__25270,G__25271,temp__6501__auto__){
return (function (p1__25257_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late_cond,p1__25257_SHARP_);
});})(next_fn,late_cond,late_then,late_else,paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25272,latefns25268,vec__25273,G__25269,G__25270,G__25271,temp__6501__auto__))
,late_then,late_else);
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25272,latefns25268,vec__25273,G__25269,G__25270,G__25271,temp__6501__auto__))
),num_params25272);
if(!(any_params_needed_QMARK___24952__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__24957__auto__,null,(0));
} else {
return ret__24957__auto__;
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
var args__22780__auto__ = [];
var len__22773__auto___25285 = arguments.length;
var i__22774__auto___25286 = (0);
while(true){
if((i__22774__auto___25286 < len__22773__auto___25285)){
args__22780__auto__.push((arguments[i__22774__auto___25286]));

var G__25287 = (i__22774__auto___25286 + (1));
i__22774__auto___25286 = G__25287;
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
return (function (p,p__25281){
var vec__25282 = p__25281;
var tester = cljs.core.nth.call(null,vec__25282,(0),null);
var apath = cljs.core.nth.call(null,vec__25282,(1),null);
return com.rpl.specter.if_path.call(null,tester,apath,p);
});})(pairs))
,com.rpl.specter.STOP,pairs);
});

com.rpl.specter.cond_path.cljs$lang$maxFixedArity = (0);

com.rpl.specter.cond_path.cljs$lang$applyTo = (function (seq25280){
return com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25280));
});

/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = (function com$rpl$specter$multi_path(var_args){
var args__22780__auto__ = [];
var len__22773__auto___25292 = arguments.length;
var i__22774__auto___25293 = (0);
while(true){
if((i__22774__auto___25293 < len__22773__auto___25292)){
args__22780__auto__.push((arguments[i__22774__auto___25293]));

var G__25294 = (i__22774__auto___25293 + (1));
i__22774__auto___25293 = G__25294;
continue;
} else {
}
break;
}

var argseq__22781__auto__ = ((((0) < args__22780__auto__.length))?(new cljs.core.IndexedSeq(args__22780__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic(argseq__22781__auto__);
});

com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic = (function (paths){
var paths__24949__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,paths);
var needed_params__24950__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__24949__auto__);
var offsets__24951__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__24950__auto__));
var any_params_needed_QMARK___24952__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__24949__auto__)));
var num_params25291 = cljs.core.last.call(null,offsets__24951__auto__);
var latefns25290 = cljs.core.map.call(null,((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25291){
return (function (o__24953__auto__,p__24954__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__24954__auto__))){
return ((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25291){
return (function (params__24955__auto__,params_idx__24956__auto__){
return p__24954__auto__;
});
;})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25291))
} else {
return ((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25291){
return (function (params__24955__auto__,params_idx__24956__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__24954__auto__,params__24955__auto__,(params_idx__24956__auto__ + o__24953__auto__));
});
;})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25291))
}
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25291))
,offsets__24951__auto__,paths__24949__auto__);
var ret__24957__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25291,latefns25290){
return (function (params24912,params_idx24913,vals__24914__auto__,structure,next_fn__24915__auto__){
var next_fn = ((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25291,latefns25290){
return (function (structure__24916__auto__){
return next_fn__24915__auto__.call(null,params24912,(params_idx24913 + num_params25291),vals__24914__auto__,structure__24916__auto__);
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25291,latefns25290))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25291,latefns25290){
return (function (l__25002__auto__){
return l__25002__auto__.call(null,params24912,params_idx24913);
});})(next_fn,paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25291,latefns25290))
,latefns25290);
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,next_fn,cljs.core.mapcat.call(null,((function (next_fn,compiled_paths,paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25291,latefns25290){
return (function (p1__25288_SHARP_){
return com.rpl.specter.compiled_select.call(null,p1__25288_SHARP_,structure);
});})(next_fn,compiled_paths,paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25291,latefns25290))
,compiled_paths)));
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25291,latefns25290))
,((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25291,latefns25290){
return (function (params24912,params_idx24913,vals__24914__auto__,structure,next_fn__24915__auto__){
var next_fn = ((function (paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25291,latefns25290){
return (function (structure__24916__auto__){
return next_fn__24915__auto__.call(null,params24912,(params_idx24913 + num_params25291),vals__24914__auto__,structure__24916__auto__);
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25291,latefns25290))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25291,latefns25290){
return (function (l__25002__auto__){
return l__25002__auto__.call(null,params24912,params_idx24913);
});})(next_fn,paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25291,latefns25290))
,latefns25290);
return cljs.core.reduce.call(null,((function (next_fn,compiled_paths,paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25291,latefns25290){
return (function (structure__$1,path){
return com.rpl.specter.compiled_transform.call(null,path,next_fn,structure__$1);
});})(next_fn,compiled_paths,paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25291,latefns25290))
,structure,compiled_paths);
});})(paths__24949__auto__,needed_params__24950__auto__,offsets__24951__auto__,any_params_needed_QMARK___24952__auto__,num_params25291,latefns25290))
),num_params25291);
if(!(any_params_needed_QMARK___24952__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__24957__auto__,null,(0));
} else {
return ret__24957__auto__;
}
});

com.rpl.specter.multi_path.cljs$lang$maxFixedArity = (0);

com.rpl.specter.multi_path.cljs$lang$applyTo = (function (seq25289){
return com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25289));
});

/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = (function com$rpl$specter$stay_then_continue(var_args){
var args__22780__auto__ = [];
var len__22773__auto___25296 = arguments.length;
var i__22774__auto___25297 = (0);
while(true){
if((i__22774__auto___25297 < len__22773__auto___25296)){
args__22780__auto__.push((arguments[i__22774__auto___25297]));

var G__25298 = (i__22774__auto___25297 + (1));
i__22774__auto___25297 = G__25298;
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

com.rpl.specter.stay_then_continue.cljs$lang$applyTo = (function (seq25295){
return com.rpl.specter.stay_then_continue.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25295));
});

/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = (function com$rpl$specter$continue_then_stay(var_args){
var args__22780__auto__ = [];
var len__22773__auto___25300 = arguments.length;
var i__22774__auto___25301 = (0);
while(true){
if((i__22774__auto___25301 < len__22773__auto___25300)){
args__22780__auto__.push((arguments[i__22774__auto___25301]));

var G__25302 = (i__22774__auto___25301 + (1));
i__22774__auto___25301 = G__25302;
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

com.rpl.specter.continue_then_stay.cljs$lang$applyTo = (function (seq25299){
return com.rpl.specter.continue_then_stay.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25299));
});


//# sourceMappingURL=specter.js.map?rel=1471181945058