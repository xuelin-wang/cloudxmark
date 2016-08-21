// Compiled by ClojureScript 1.9.225 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__21590__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__21590__auto__){
return or__21590__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__21590__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__38451_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__38451_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__38456 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__38457 = null;
var count__38458 = (0);
var i__38459 = (0);
while(true){
if((i__38459 < count__38458)){
var n = cljs.core._nth.call(null,chunk__38457,i__38459);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38460 = seq__38456;
var G__38461 = chunk__38457;
var G__38462 = count__38458;
var G__38463 = (i__38459 + (1));
seq__38456 = G__38460;
chunk__38457 = G__38461;
count__38458 = G__38462;
i__38459 = G__38463;
continue;
} else {
var temp__6552__auto__ = cljs.core.seq.call(null,seq__38456);
if(temp__6552__auto__){
var seq__38456__$1 = temp__6552__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38456__$1)){
var c__22493__auto__ = cljs.core.chunk_first.call(null,seq__38456__$1);
var G__38464 = cljs.core.chunk_rest.call(null,seq__38456__$1);
var G__38465 = c__22493__auto__;
var G__38466 = cljs.core.count.call(null,c__22493__auto__);
var G__38467 = (0);
seq__38456 = G__38464;
chunk__38457 = G__38465;
count__38458 = G__38466;
i__38459 = G__38467;
continue;
} else {
var n = cljs.core.first.call(null,seq__38456__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38468 = cljs.core.next.call(null,seq__38456__$1);
var G__38469 = null;
var G__38470 = (0);
var G__38471 = (0);
seq__38456 = G__38468;
chunk__38457 = G__38469;
count__38458 = G__38470;
i__38459 = G__38471;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__38522_38533 = cljs.core.seq.call(null,deps);
var chunk__38523_38534 = null;
var count__38524_38535 = (0);
var i__38525_38536 = (0);
while(true){
if((i__38525_38536 < count__38524_38535)){
var dep_38537 = cljs.core._nth.call(null,chunk__38523_38534,i__38525_38536);
topo_sort_helper_STAR_.call(null,dep_38537,(depth + (1)),state);

var G__38538 = seq__38522_38533;
var G__38539 = chunk__38523_38534;
var G__38540 = count__38524_38535;
var G__38541 = (i__38525_38536 + (1));
seq__38522_38533 = G__38538;
chunk__38523_38534 = G__38539;
count__38524_38535 = G__38540;
i__38525_38536 = G__38541;
continue;
} else {
var temp__6552__auto___38542 = cljs.core.seq.call(null,seq__38522_38533);
if(temp__6552__auto___38542){
var seq__38522_38543__$1 = temp__6552__auto___38542;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38522_38543__$1)){
var c__22493__auto___38544 = cljs.core.chunk_first.call(null,seq__38522_38543__$1);
var G__38545 = cljs.core.chunk_rest.call(null,seq__38522_38543__$1);
var G__38546 = c__22493__auto___38544;
var G__38547 = cljs.core.count.call(null,c__22493__auto___38544);
var G__38548 = (0);
seq__38522_38533 = G__38545;
chunk__38523_38534 = G__38546;
count__38524_38535 = G__38547;
i__38525_38536 = G__38548;
continue;
} else {
var dep_38549 = cljs.core.first.call(null,seq__38522_38543__$1);
topo_sort_helper_STAR_.call(null,dep_38549,(depth + (1)),state);

var G__38550 = cljs.core.next.call(null,seq__38522_38543__$1);
var G__38551 = null;
var G__38552 = (0);
var G__38553 = (0);
seq__38522_38533 = G__38550;
chunk__38523_38534 = G__38551;
count__38524_38535 = G__38552;
i__38525_38536 = G__38553;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__38526){
var vec__38530 = p__38526;
var seq__38531 = cljs.core.seq.call(null,vec__38530);
var first__38532 = cljs.core.first.call(null,seq__38531);
var seq__38531__$1 = cljs.core.next.call(null,seq__38531);
var x = first__38532;
var xs = seq__38531__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__38530,seq__38531,first__38532,seq__38531__$1,x,xs,get_deps__$1){
return (function (p1__38472_SHARP_){
return clojure.set.difference.call(null,p1__38472_SHARP_,x);
});})(vec__38530,seq__38531,first__38532,seq__38531__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__38566 = cljs.core.seq.call(null,provides);
var chunk__38567 = null;
var count__38568 = (0);
var i__38569 = (0);
while(true){
if((i__38569 < count__38568)){
var prov = cljs.core._nth.call(null,chunk__38567,i__38569);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38570_38578 = cljs.core.seq.call(null,requires);
var chunk__38571_38579 = null;
var count__38572_38580 = (0);
var i__38573_38581 = (0);
while(true){
if((i__38573_38581 < count__38572_38580)){
var req_38582 = cljs.core._nth.call(null,chunk__38571_38579,i__38573_38581);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38582,prov);

var G__38583 = seq__38570_38578;
var G__38584 = chunk__38571_38579;
var G__38585 = count__38572_38580;
var G__38586 = (i__38573_38581 + (1));
seq__38570_38578 = G__38583;
chunk__38571_38579 = G__38584;
count__38572_38580 = G__38585;
i__38573_38581 = G__38586;
continue;
} else {
var temp__6552__auto___38587 = cljs.core.seq.call(null,seq__38570_38578);
if(temp__6552__auto___38587){
var seq__38570_38588__$1 = temp__6552__auto___38587;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38570_38588__$1)){
var c__22493__auto___38589 = cljs.core.chunk_first.call(null,seq__38570_38588__$1);
var G__38590 = cljs.core.chunk_rest.call(null,seq__38570_38588__$1);
var G__38591 = c__22493__auto___38589;
var G__38592 = cljs.core.count.call(null,c__22493__auto___38589);
var G__38593 = (0);
seq__38570_38578 = G__38590;
chunk__38571_38579 = G__38591;
count__38572_38580 = G__38592;
i__38573_38581 = G__38593;
continue;
} else {
var req_38594 = cljs.core.first.call(null,seq__38570_38588__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38594,prov);

var G__38595 = cljs.core.next.call(null,seq__38570_38588__$1);
var G__38596 = null;
var G__38597 = (0);
var G__38598 = (0);
seq__38570_38578 = G__38595;
chunk__38571_38579 = G__38596;
count__38572_38580 = G__38597;
i__38573_38581 = G__38598;
continue;
}
} else {
}
}
break;
}

var G__38599 = seq__38566;
var G__38600 = chunk__38567;
var G__38601 = count__38568;
var G__38602 = (i__38569 + (1));
seq__38566 = G__38599;
chunk__38567 = G__38600;
count__38568 = G__38601;
i__38569 = G__38602;
continue;
} else {
var temp__6552__auto__ = cljs.core.seq.call(null,seq__38566);
if(temp__6552__auto__){
var seq__38566__$1 = temp__6552__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38566__$1)){
var c__22493__auto__ = cljs.core.chunk_first.call(null,seq__38566__$1);
var G__38603 = cljs.core.chunk_rest.call(null,seq__38566__$1);
var G__38604 = c__22493__auto__;
var G__38605 = cljs.core.count.call(null,c__22493__auto__);
var G__38606 = (0);
seq__38566 = G__38603;
chunk__38567 = G__38604;
count__38568 = G__38605;
i__38569 = G__38606;
continue;
} else {
var prov = cljs.core.first.call(null,seq__38566__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38574_38607 = cljs.core.seq.call(null,requires);
var chunk__38575_38608 = null;
var count__38576_38609 = (0);
var i__38577_38610 = (0);
while(true){
if((i__38577_38610 < count__38576_38609)){
var req_38611 = cljs.core._nth.call(null,chunk__38575_38608,i__38577_38610);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38611,prov);

var G__38612 = seq__38574_38607;
var G__38613 = chunk__38575_38608;
var G__38614 = count__38576_38609;
var G__38615 = (i__38577_38610 + (1));
seq__38574_38607 = G__38612;
chunk__38575_38608 = G__38613;
count__38576_38609 = G__38614;
i__38577_38610 = G__38615;
continue;
} else {
var temp__6552__auto___38616__$1 = cljs.core.seq.call(null,seq__38574_38607);
if(temp__6552__auto___38616__$1){
var seq__38574_38617__$1 = temp__6552__auto___38616__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38574_38617__$1)){
var c__22493__auto___38618 = cljs.core.chunk_first.call(null,seq__38574_38617__$1);
var G__38619 = cljs.core.chunk_rest.call(null,seq__38574_38617__$1);
var G__38620 = c__22493__auto___38618;
var G__38621 = cljs.core.count.call(null,c__22493__auto___38618);
var G__38622 = (0);
seq__38574_38607 = G__38619;
chunk__38575_38608 = G__38620;
count__38576_38609 = G__38621;
i__38577_38610 = G__38622;
continue;
} else {
var req_38623 = cljs.core.first.call(null,seq__38574_38617__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38623,prov);

var G__38624 = cljs.core.next.call(null,seq__38574_38617__$1);
var G__38625 = null;
var G__38626 = (0);
var G__38627 = (0);
seq__38574_38607 = G__38624;
chunk__38575_38608 = G__38625;
count__38576_38609 = G__38626;
i__38577_38610 = G__38627;
continue;
}
} else {
}
}
break;
}

var G__38628 = cljs.core.next.call(null,seq__38566__$1);
var G__38629 = null;
var G__38630 = (0);
var G__38631 = (0);
seq__38566 = G__38628;
chunk__38567 = G__38629;
count__38568 = G__38630;
i__38569 = G__38631;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__38636_38640 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__38637_38641 = null;
var count__38638_38642 = (0);
var i__38639_38643 = (0);
while(true){
if((i__38639_38643 < count__38638_38642)){
var ns_38644 = cljs.core._nth.call(null,chunk__38637_38641,i__38639_38643);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38644);

var G__38645 = seq__38636_38640;
var G__38646 = chunk__38637_38641;
var G__38647 = count__38638_38642;
var G__38648 = (i__38639_38643 + (1));
seq__38636_38640 = G__38645;
chunk__38637_38641 = G__38646;
count__38638_38642 = G__38647;
i__38639_38643 = G__38648;
continue;
} else {
var temp__6552__auto___38649 = cljs.core.seq.call(null,seq__38636_38640);
if(temp__6552__auto___38649){
var seq__38636_38650__$1 = temp__6552__auto___38649;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38636_38650__$1)){
var c__22493__auto___38651 = cljs.core.chunk_first.call(null,seq__38636_38650__$1);
var G__38652 = cljs.core.chunk_rest.call(null,seq__38636_38650__$1);
var G__38653 = c__22493__auto___38651;
var G__38654 = cljs.core.count.call(null,c__22493__auto___38651);
var G__38655 = (0);
seq__38636_38640 = G__38652;
chunk__38637_38641 = G__38653;
count__38638_38642 = G__38654;
i__38639_38643 = G__38655;
continue;
} else {
var ns_38656 = cljs.core.first.call(null,seq__38636_38650__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38656);

var G__38657 = cljs.core.next.call(null,seq__38636_38650__$1);
var G__38658 = null;
var G__38659 = (0);
var G__38660 = (0);
seq__38636_38640 = G__38657;
chunk__38637_38641 = G__38658;
count__38638_38642 = G__38659;
i__38639_38643 = G__38660;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__21590__auto__ = goog.require__;
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__38661__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__38661 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38662__i = 0, G__38662__a = new Array(arguments.length -  0);
while (G__38662__i < G__38662__a.length) {G__38662__a[G__38662__i] = arguments[G__38662__i + 0]; ++G__38662__i;}
  args = new cljs.core.IndexedSeq(G__38662__a,0);
} 
return G__38661__delegate.call(this,args);};
G__38661.cljs$lang$maxFixedArity = 0;
G__38661.cljs$lang$applyTo = (function (arglist__38663){
var args = cljs.core.seq(arglist__38663);
return G__38661__delegate(args);
});
G__38661.cljs$core$IFn$_invoke$arity$variadic = G__38661__delegate;
return G__38661;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__38665 = cljs.core._EQ_;
var expr__38666 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__38665.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__38666))){
var path_parts = ((function (pred__38665,expr__38666){
return (function (p1__38664_SHARP_){
return clojure.string.split.call(null,p1__38664_SHARP_,/[\/\\]/);
});})(pred__38665,expr__38666))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__38665,expr__38666){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e38668){if((e38668 instanceof Error)){
var e = e38668;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e38668;

}
}})());
});
;})(path_parts,sep,root,pred__38665,expr__38666))
} else {
if(cljs.core.truth_(pred__38665.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__38666))){
return ((function (pred__38665,expr__38666){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__38665,expr__38666){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__38665,expr__38666))
);

return deferred.addErrback(((function (deferred,pred__38665,expr__38666){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__38665,expr__38666))
);
});
;})(pred__38665,expr__38666))
} else {
return ((function (pred__38665,expr__38666){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__38665,expr__38666))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__38669,callback){
var map__38672 = p__38669;
var map__38672__$1 = ((((!((map__38672 == null)))?((((map__38672.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38672.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38672):map__38672);
var file_msg = map__38672__$1;
var request_url = cljs.core.get.call(null,map__38672__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__38672,map__38672__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__38672,map__38672__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__31895__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31895__auto__){
return (function (){
var f__31896__auto__ = (function (){var switch__31781__auto__ = ((function (c__31895__auto__){
return (function (state_38696){
var state_val_38697 = (state_38696[(1)]);
if((state_val_38697 === (7))){
var inst_38692 = (state_38696[(2)]);
var state_38696__$1 = state_38696;
var statearr_38698_38718 = state_38696__$1;
(statearr_38698_38718[(2)] = inst_38692);

(statearr_38698_38718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38697 === (1))){
var state_38696__$1 = state_38696;
var statearr_38699_38719 = state_38696__$1;
(statearr_38699_38719[(2)] = null);

(statearr_38699_38719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38697 === (4))){
var inst_38676 = (state_38696[(7)]);
var inst_38676__$1 = (state_38696[(2)]);
var state_38696__$1 = (function (){var statearr_38700 = state_38696;
(statearr_38700[(7)] = inst_38676__$1);

return statearr_38700;
})();
if(cljs.core.truth_(inst_38676__$1)){
var statearr_38701_38720 = state_38696__$1;
(statearr_38701_38720[(1)] = (5));

} else {
var statearr_38702_38721 = state_38696__$1;
(statearr_38702_38721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38697 === (6))){
var state_38696__$1 = state_38696;
var statearr_38703_38722 = state_38696__$1;
(statearr_38703_38722[(2)] = null);

(statearr_38703_38722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38697 === (3))){
var inst_38694 = (state_38696[(2)]);
var state_38696__$1 = state_38696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38696__$1,inst_38694);
} else {
if((state_val_38697 === (2))){
var state_38696__$1 = state_38696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38696__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_38697 === (11))){
var inst_38688 = (state_38696[(2)]);
var state_38696__$1 = (function (){var statearr_38704 = state_38696;
(statearr_38704[(8)] = inst_38688);

return statearr_38704;
})();
var statearr_38705_38723 = state_38696__$1;
(statearr_38705_38723[(2)] = null);

(statearr_38705_38723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38697 === (9))){
var inst_38680 = (state_38696[(9)]);
var inst_38682 = (state_38696[(10)]);
var inst_38684 = inst_38682.call(null,inst_38680);
var state_38696__$1 = state_38696;
var statearr_38706_38724 = state_38696__$1;
(statearr_38706_38724[(2)] = inst_38684);

(statearr_38706_38724[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38697 === (5))){
var inst_38676 = (state_38696[(7)]);
var inst_38678 = figwheel.client.file_reloading.blocking_load.call(null,inst_38676);
var state_38696__$1 = state_38696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38696__$1,(8),inst_38678);
} else {
if((state_val_38697 === (10))){
var inst_38680 = (state_38696[(9)]);
var inst_38686 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_38680);
var state_38696__$1 = state_38696;
var statearr_38707_38725 = state_38696__$1;
(statearr_38707_38725[(2)] = inst_38686);

(statearr_38707_38725[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38697 === (8))){
var inst_38676 = (state_38696[(7)]);
var inst_38682 = (state_38696[(10)]);
var inst_38680 = (state_38696[(2)]);
var inst_38681 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_38682__$1 = cljs.core.get.call(null,inst_38681,inst_38676);
var state_38696__$1 = (function (){var statearr_38708 = state_38696;
(statearr_38708[(9)] = inst_38680);

(statearr_38708[(10)] = inst_38682__$1);

return statearr_38708;
})();
if(cljs.core.truth_(inst_38682__$1)){
var statearr_38709_38726 = state_38696__$1;
(statearr_38709_38726[(1)] = (9));

} else {
var statearr_38710_38727 = state_38696__$1;
(statearr_38710_38727[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31895__auto__))
;
return ((function (switch__31781__auto__,c__31895__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31782__auto__ = null;
var figwheel$client$file_reloading$state_machine__31782__auto____0 = (function (){
var statearr_38714 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38714[(0)] = figwheel$client$file_reloading$state_machine__31782__auto__);

(statearr_38714[(1)] = (1));

return statearr_38714;
});
var figwheel$client$file_reloading$state_machine__31782__auto____1 = (function (state_38696){
while(true){
var ret_value__31783__auto__ = (function (){try{while(true){
var result__31784__auto__ = switch__31781__auto__.call(null,state_38696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31784__auto__;
}
break;
}
}catch (e38715){if((e38715 instanceof Object)){
var ex__31785__auto__ = e38715;
var statearr_38716_38728 = state_38696;
(statearr_38716_38728[(5)] = ex__31785__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38729 = state_38696;
state_38696 = G__38729;
continue;
} else {
return ret_value__31783__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31782__auto__ = function(state_38696){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31782__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31782__auto____1.call(this,state_38696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31782__auto____0;
figwheel$client$file_reloading$state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31782__auto____1;
return figwheel$client$file_reloading$state_machine__31782__auto__;
})()
;})(switch__31781__auto__,c__31895__auto__))
})();
var state__31897__auto__ = (function (){var statearr_38717 = f__31896__auto__.call(null);
(statearr_38717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31895__auto__);

return statearr_38717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31897__auto__);
});})(c__31895__auto__))
);

return c__31895__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__38730,callback){
var map__38733 = p__38730;
var map__38733__$1 = ((((!((map__38733 == null)))?((((map__38733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38733):map__38733);
var file_msg = map__38733__$1;
var namespace = cljs.core.get.call(null,map__38733__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__38733,map__38733__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__38733,map__38733__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__38735){
var map__38738 = p__38735;
var map__38738__$1 = ((((!((map__38738 == null)))?((((map__38738.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38738.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38738):map__38738);
var file_msg = map__38738__$1;
var namespace = cljs.core.get.call(null,map__38738__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__21578__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__21578__auto__){
var or__21590__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
var or__21590__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21590__auto____$1)){
return or__21590__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__21578__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__38740,callback){
var map__38743 = p__38740;
var map__38743__$1 = ((((!((map__38743 == null)))?((((map__38743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38743):map__38743);
var file_msg = map__38743__$1;
var request_url = cljs.core.get.call(null,map__38743__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__38743__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__31895__auto___38847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31895__auto___38847,out){
return (function (){
var f__31896__auto__ = (function (){var switch__31781__auto__ = ((function (c__31895__auto___38847,out){
return (function (state_38829){
var state_val_38830 = (state_38829[(1)]);
if((state_val_38830 === (1))){
var inst_38803 = cljs.core.seq.call(null,files);
var inst_38804 = cljs.core.first.call(null,inst_38803);
var inst_38805 = cljs.core.next.call(null,inst_38803);
var inst_38806 = files;
var state_38829__$1 = (function (){var statearr_38831 = state_38829;
(statearr_38831[(7)] = inst_38804);

(statearr_38831[(8)] = inst_38806);

(statearr_38831[(9)] = inst_38805);

return statearr_38831;
})();
var statearr_38832_38848 = state_38829__$1;
(statearr_38832_38848[(2)] = null);

(statearr_38832_38848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38830 === (2))){
var inst_38806 = (state_38829[(8)]);
var inst_38812 = (state_38829[(10)]);
var inst_38811 = cljs.core.seq.call(null,inst_38806);
var inst_38812__$1 = cljs.core.first.call(null,inst_38811);
var inst_38813 = cljs.core.next.call(null,inst_38811);
var inst_38814 = (inst_38812__$1 == null);
var inst_38815 = cljs.core.not.call(null,inst_38814);
var state_38829__$1 = (function (){var statearr_38833 = state_38829;
(statearr_38833[(11)] = inst_38813);

(statearr_38833[(10)] = inst_38812__$1);

return statearr_38833;
})();
if(inst_38815){
var statearr_38834_38849 = state_38829__$1;
(statearr_38834_38849[(1)] = (4));

} else {
var statearr_38835_38850 = state_38829__$1;
(statearr_38835_38850[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38830 === (3))){
var inst_38827 = (state_38829[(2)]);
var state_38829__$1 = state_38829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38829__$1,inst_38827);
} else {
if((state_val_38830 === (4))){
var inst_38812 = (state_38829[(10)]);
var inst_38817 = figwheel.client.file_reloading.reload_js_file.call(null,inst_38812);
var state_38829__$1 = state_38829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38829__$1,(7),inst_38817);
} else {
if((state_val_38830 === (5))){
var inst_38823 = cljs.core.async.close_BANG_.call(null,out);
var state_38829__$1 = state_38829;
var statearr_38836_38851 = state_38829__$1;
(statearr_38836_38851[(2)] = inst_38823);

(statearr_38836_38851[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38830 === (6))){
var inst_38825 = (state_38829[(2)]);
var state_38829__$1 = state_38829;
var statearr_38837_38852 = state_38829__$1;
(statearr_38837_38852[(2)] = inst_38825);

(statearr_38837_38852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38830 === (7))){
var inst_38813 = (state_38829[(11)]);
var inst_38819 = (state_38829[(2)]);
var inst_38820 = cljs.core.async.put_BANG_.call(null,out,inst_38819);
var inst_38806 = inst_38813;
var state_38829__$1 = (function (){var statearr_38838 = state_38829;
(statearr_38838[(12)] = inst_38820);

(statearr_38838[(8)] = inst_38806);

return statearr_38838;
})();
var statearr_38839_38853 = state_38829__$1;
(statearr_38839_38853[(2)] = null);

(statearr_38839_38853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__31895__auto___38847,out))
;
return ((function (switch__31781__auto__,c__31895__auto___38847,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31782__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31782__auto____0 = (function (){
var statearr_38843 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38843[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31782__auto__);

(statearr_38843[(1)] = (1));

return statearr_38843;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31782__auto____1 = (function (state_38829){
while(true){
var ret_value__31783__auto__ = (function (){try{while(true){
var result__31784__auto__ = switch__31781__auto__.call(null,state_38829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31784__auto__;
}
break;
}
}catch (e38844){if((e38844 instanceof Object)){
var ex__31785__auto__ = e38844;
var statearr_38845_38854 = state_38829;
(statearr_38845_38854[(5)] = ex__31785__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38855 = state_38829;
state_38829 = G__38855;
continue;
} else {
return ret_value__31783__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31782__auto__ = function(state_38829){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31782__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31782__auto____1.call(this,state_38829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31782__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31782__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31782__auto__;
})()
;})(switch__31781__auto__,c__31895__auto___38847,out))
})();
var state__31897__auto__ = (function (){var statearr_38846 = f__31896__auto__.call(null);
(statearr_38846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31895__auto___38847);

return statearr_38846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31897__auto__);
});})(c__31895__auto___38847,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__38856,opts){
var map__38860 = p__38856;
var map__38860__$1 = ((((!((map__38860 == null)))?((((map__38860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38860):map__38860);
var eval_body__$1 = cljs.core.get.call(null,map__38860__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__38860__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__21578__auto__ = eval_body__$1;
if(cljs.core.truth_(and__21578__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__21578__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e38862){var e = e38862;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__6550__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__38863_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38863_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__6550__auto__)){
var file_msg = temp__6550__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__38872){
var vec__38873 = p__38872;
var k = cljs.core.nth.call(null,vec__38873,(0),null);
var v = cljs.core.nth.call(null,vec__38873,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__38876){
var vec__38877 = p__38876;
var k = cljs.core.nth.call(null,vec__38877,(0),null);
var v = cljs.core.nth.call(null,vec__38877,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__38883,p__38884){
var map__39131 = p__38883;
var map__39131__$1 = ((((!((map__39131 == null)))?((((map__39131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39131):map__39131);
var opts = map__39131__$1;
var before_jsload = cljs.core.get.call(null,map__39131__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__39131__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__39131__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__39132 = p__38884;
var map__39132__$1 = ((((!((map__39132 == null)))?((((map__39132.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39132.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39132):map__39132);
var msg = map__39132__$1;
var files = cljs.core.get.call(null,map__39132__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__39132__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__39132__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__31895__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31895__auto__,map__39131,map__39131__$1,opts,before_jsload,on_jsload,reload_dependents,map__39132,map__39132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__31896__auto__ = (function (){var switch__31781__auto__ = ((function (c__31895__auto__,map__39131,map__39131__$1,opts,before_jsload,on_jsload,reload_dependents,map__39132,map__39132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_39285){
var state_val_39286 = (state_39285[(1)]);
if((state_val_39286 === (7))){
var inst_39148 = (state_39285[(7)]);
var inst_39146 = (state_39285[(8)]);
var inst_39149 = (state_39285[(9)]);
var inst_39147 = (state_39285[(10)]);
var inst_39154 = cljs.core._nth.call(null,inst_39147,inst_39149);
var inst_39155 = figwheel.client.file_reloading.eval_body.call(null,inst_39154,opts);
var inst_39156 = (inst_39149 + (1));
var tmp39287 = inst_39148;
var tmp39288 = inst_39146;
var tmp39289 = inst_39147;
var inst_39146__$1 = tmp39288;
var inst_39147__$1 = tmp39289;
var inst_39148__$1 = tmp39287;
var inst_39149__$1 = inst_39156;
var state_39285__$1 = (function (){var statearr_39290 = state_39285;
(statearr_39290[(7)] = inst_39148__$1);

(statearr_39290[(8)] = inst_39146__$1);

(statearr_39290[(9)] = inst_39149__$1);

(statearr_39290[(10)] = inst_39147__$1);

(statearr_39290[(11)] = inst_39155);

return statearr_39290;
})();
var statearr_39291_39377 = state_39285__$1;
(statearr_39291_39377[(2)] = null);

(statearr_39291_39377[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (20))){
var inst_39189 = (state_39285[(12)]);
var inst_39197 = figwheel.client.file_reloading.sort_files.call(null,inst_39189);
var state_39285__$1 = state_39285;
var statearr_39292_39378 = state_39285__$1;
(statearr_39292_39378[(2)] = inst_39197);

(statearr_39292_39378[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (27))){
var state_39285__$1 = state_39285;
var statearr_39293_39379 = state_39285__$1;
(statearr_39293_39379[(2)] = null);

(statearr_39293_39379[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (1))){
var inst_39138 = (state_39285[(13)]);
var inst_39135 = before_jsload.call(null,files);
var inst_39136 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_39137 = (function (){return ((function (inst_39138,inst_39135,inst_39136,state_val_39286,c__31895__auto__,map__39131,map__39131__$1,opts,before_jsload,on_jsload,reload_dependents,map__39132,map__39132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38880_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38880_SHARP_);
});
;})(inst_39138,inst_39135,inst_39136,state_val_39286,c__31895__auto__,map__39131,map__39131__$1,opts,before_jsload,on_jsload,reload_dependents,map__39132,map__39132__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39138__$1 = cljs.core.filter.call(null,inst_39137,files);
var inst_39139 = cljs.core.not_empty.call(null,inst_39138__$1);
var state_39285__$1 = (function (){var statearr_39294 = state_39285;
(statearr_39294[(14)] = inst_39135);

(statearr_39294[(15)] = inst_39136);

(statearr_39294[(13)] = inst_39138__$1);

return statearr_39294;
})();
if(cljs.core.truth_(inst_39139)){
var statearr_39295_39380 = state_39285__$1;
(statearr_39295_39380[(1)] = (2));

} else {
var statearr_39296_39381 = state_39285__$1;
(statearr_39296_39381[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (24))){
var state_39285__$1 = state_39285;
var statearr_39297_39382 = state_39285__$1;
(statearr_39297_39382[(2)] = null);

(statearr_39297_39382[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (39))){
var inst_39239 = (state_39285[(16)]);
var state_39285__$1 = state_39285;
var statearr_39298_39383 = state_39285__$1;
(statearr_39298_39383[(2)] = inst_39239);

(statearr_39298_39383[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (46))){
var inst_39280 = (state_39285[(2)]);
var state_39285__$1 = state_39285;
var statearr_39299_39384 = state_39285__$1;
(statearr_39299_39384[(2)] = inst_39280);

(statearr_39299_39384[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (4))){
var inst_39183 = (state_39285[(2)]);
var inst_39184 = cljs.core.List.EMPTY;
var inst_39185 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_39184);
var inst_39186 = (function (){return ((function (inst_39183,inst_39184,inst_39185,state_val_39286,c__31895__auto__,map__39131,map__39131__$1,opts,before_jsload,on_jsload,reload_dependents,map__39132,map__39132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38881_SHARP_){
var and__21578__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38881_SHARP_);
if(cljs.core.truth_(and__21578__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38881_SHARP_));
} else {
return and__21578__auto__;
}
});
;})(inst_39183,inst_39184,inst_39185,state_val_39286,c__31895__auto__,map__39131,map__39131__$1,opts,before_jsload,on_jsload,reload_dependents,map__39132,map__39132__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39187 = cljs.core.filter.call(null,inst_39186,files);
var inst_39188 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_39189 = cljs.core.concat.call(null,inst_39187,inst_39188);
var state_39285__$1 = (function (){var statearr_39300 = state_39285;
(statearr_39300[(17)] = inst_39183);

(statearr_39300[(18)] = inst_39185);

(statearr_39300[(12)] = inst_39189);

return statearr_39300;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_39301_39385 = state_39285__$1;
(statearr_39301_39385[(1)] = (16));

} else {
var statearr_39302_39386 = state_39285__$1;
(statearr_39302_39386[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (15))){
var inst_39173 = (state_39285[(2)]);
var state_39285__$1 = state_39285;
var statearr_39303_39387 = state_39285__$1;
(statearr_39303_39387[(2)] = inst_39173);

(statearr_39303_39387[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (21))){
var inst_39199 = (state_39285[(19)]);
var inst_39199__$1 = (state_39285[(2)]);
var inst_39200 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_39199__$1);
var state_39285__$1 = (function (){var statearr_39304 = state_39285;
(statearr_39304[(19)] = inst_39199__$1);

return statearr_39304;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39285__$1,(22),inst_39200);
} else {
if((state_val_39286 === (31))){
var inst_39283 = (state_39285[(2)]);
var state_39285__$1 = state_39285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39285__$1,inst_39283);
} else {
if((state_val_39286 === (32))){
var inst_39239 = (state_39285[(16)]);
var inst_39244 = inst_39239.cljs$lang$protocol_mask$partition0$;
var inst_39245 = (inst_39244 & (64));
var inst_39246 = inst_39239.cljs$core$ISeq$;
var inst_39247 = (inst_39245) || (inst_39246);
var state_39285__$1 = state_39285;
if(cljs.core.truth_(inst_39247)){
var statearr_39305_39388 = state_39285__$1;
(statearr_39305_39388[(1)] = (35));

} else {
var statearr_39306_39389 = state_39285__$1;
(statearr_39306_39389[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (40))){
var inst_39260 = (state_39285[(20)]);
var inst_39259 = (state_39285[(2)]);
var inst_39260__$1 = cljs.core.get.call(null,inst_39259,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_39261 = cljs.core.get.call(null,inst_39259,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_39262 = cljs.core.not_empty.call(null,inst_39260__$1);
var state_39285__$1 = (function (){var statearr_39307 = state_39285;
(statearr_39307[(20)] = inst_39260__$1);

(statearr_39307[(21)] = inst_39261);

return statearr_39307;
})();
if(cljs.core.truth_(inst_39262)){
var statearr_39308_39390 = state_39285__$1;
(statearr_39308_39390[(1)] = (41));

} else {
var statearr_39309_39391 = state_39285__$1;
(statearr_39309_39391[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (33))){
var state_39285__$1 = state_39285;
var statearr_39310_39392 = state_39285__$1;
(statearr_39310_39392[(2)] = false);

(statearr_39310_39392[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (13))){
var inst_39159 = (state_39285[(22)]);
var inst_39163 = cljs.core.chunk_first.call(null,inst_39159);
var inst_39164 = cljs.core.chunk_rest.call(null,inst_39159);
var inst_39165 = cljs.core.count.call(null,inst_39163);
var inst_39146 = inst_39164;
var inst_39147 = inst_39163;
var inst_39148 = inst_39165;
var inst_39149 = (0);
var state_39285__$1 = (function (){var statearr_39311 = state_39285;
(statearr_39311[(7)] = inst_39148);

(statearr_39311[(8)] = inst_39146);

(statearr_39311[(9)] = inst_39149);

(statearr_39311[(10)] = inst_39147);

return statearr_39311;
})();
var statearr_39312_39393 = state_39285__$1;
(statearr_39312_39393[(2)] = null);

(statearr_39312_39393[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (22))){
var inst_39203 = (state_39285[(23)]);
var inst_39199 = (state_39285[(19)]);
var inst_39202 = (state_39285[(24)]);
var inst_39207 = (state_39285[(25)]);
var inst_39202__$1 = (state_39285[(2)]);
var inst_39203__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39202__$1);
var inst_39204 = (function (){var all_files = inst_39199;
var res_SINGLEQUOTE_ = inst_39202__$1;
var res = inst_39203__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_39203,inst_39199,inst_39202,inst_39207,inst_39202__$1,inst_39203__$1,state_val_39286,c__31895__auto__,map__39131,map__39131__$1,opts,before_jsload,on_jsload,reload_dependents,map__39132,map__39132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38882_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__38882_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_39203,inst_39199,inst_39202,inst_39207,inst_39202__$1,inst_39203__$1,state_val_39286,c__31895__auto__,map__39131,map__39131__$1,opts,before_jsload,on_jsload,reload_dependents,map__39132,map__39132__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39205 = cljs.core.filter.call(null,inst_39204,inst_39202__$1);
var inst_39206 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_39207__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39206);
var inst_39208 = cljs.core.not_empty.call(null,inst_39207__$1);
var state_39285__$1 = (function (){var statearr_39313 = state_39285;
(statearr_39313[(23)] = inst_39203__$1);

(statearr_39313[(24)] = inst_39202__$1);

(statearr_39313[(25)] = inst_39207__$1);

(statearr_39313[(26)] = inst_39205);

return statearr_39313;
})();
if(cljs.core.truth_(inst_39208)){
var statearr_39314_39394 = state_39285__$1;
(statearr_39314_39394[(1)] = (23));

} else {
var statearr_39315_39395 = state_39285__$1;
(statearr_39315_39395[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (36))){
var state_39285__$1 = state_39285;
var statearr_39316_39396 = state_39285__$1;
(statearr_39316_39396[(2)] = false);

(statearr_39316_39396[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (41))){
var inst_39260 = (state_39285[(20)]);
var inst_39264 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_39265 = cljs.core.map.call(null,inst_39264,inst_39260);
var inst_39266 = cljs.core.pr_str.call(null,inst_39265);
var inst_39267 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_39266)].join('');
var inst_39268 = figwheel.client.utils.log.call(null,inst_39267);
var state_39285__$1 = state_39285;
var statearr_39317_39397 = state_39285__$1;
(statearr_39317_39397[(2)] = inst_39268);

(statearr_39317_39397[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (43))){
var inst_39261 = (state_39285[(21)]);
var inst_39271 = (state_39285[(2)]);
var inst_39272 = cljs.core.not_empty.call(null,inst_39261);
var state_39285__$1 = (function (){var statearr_39318 = state_39285;
(statearr_39318[(27)] = inst_39271);

return statearr_39318;
})();
if(cljs.core.truth_(inst_39272)){
var statearr_39319_39398 = state_39285__$1;
(statearr_39319_39398[(1)] = (44));

} else {
var statearr_39320_39399 = state_39285__$1;
(statearr_39320_39399[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (29))){
var inst_39203 = (state_39285[(23)]);
var inst_39239 = (state_39285[(16)]);
var inst_39199 = (state_39285[(19)]);
var inst_39202 = (state_39285[(24)]);
var inst_39207 = (state_39285[(25)]);
var inst_39205 = (state_39285[(26)]);
var inst_39235 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_39238 = (function (){var all_files = inst_39199;
var res_SINGLEQUOTE_ = inst_39202;
var res = inst_39203;
var files_not_loaded = inst_39205;
var dependencies_that_loaded = inst_39207;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39203,inst_39239,inst_39199,inst_39202,inst_39207,inst_39205,inst_39235,state_val_39286,c__31895__auto__,map__39131,map__39131__$1,opts,before_jsload,on_jsload,reload_dependents,map__39132,map__39132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39237){
var map__39321 = p__39237;
var map__39321__$1 = ((((!((map__39321 == null)))?((((map__39321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39321):map__39321);
var namespace = cljs.core.get.call(null,map__39321__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39203,inst_39239,inst_39199,inst_39202,inst_39207,inst_39205,inst_39235,state_val_39286,c__31895__auto__,map__39131,map__39131__$1,opts,before_jsload,on_jsload,reload_dependents,map__39132,map__39132__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39239__$1 = cljs.core.group_by.call(null,inst_39238,inst_39205);
var inst_39241 = (inst_39239__$1 == null);
var inst_39242 = cljs.core.not.call(null,inst_39241);
var state_39285__$1 = (function (){var statearr_39323 = state_39285;
(statearr_39323[(16)] = inst_39239__$1);

(statearr_39323[(28)] = inst_39235);

return statearr_39323;
})();
if(inst_39242){
var statearr_39324_39400 = state_39285__$1;
(statearr_39324_39400[(1)] = (32));

} else {
var statearr_39325_39401 = state_39285__$1;
(statearr_39325_39401[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (44))){
var inst_39261 = (state_39285[(21)]);
var inst_39274 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39261);
var inst_39275 = cljs.core.pr_str.call(null,inst_39274);
var inst_39276 = [cljs.core.str("not required: "),cljs.core.str(inst_39275)].join('');
var inst_39277 = figwheel.client.utils.log.call(null,inst_39276);
var state_39285__$1 = state_39285;
var statearr_39326_39402 = state_39285__$1;
(statearr_39326_39402[(2)] = inst_39277);

(statearr_39326_39402[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (6))){
var inst_39180 = (state_39285[(2)]);
var state_39285__$1 = state_39285;
var statearr_39327_39403 = state_39285__$1;
(statearr_39327_39403[(2)] = inst_39180);

(statearr_39327_39403[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (28))){
var inst_39205 = (state_39285[(26)]);
var inst_39232 = (state_39285[(2)]);
var inst_39233 = cljs.core.not_empty.call(null,inst_39205);
var state_39285__$1 = (function (){var statearr_39328 = state_39285;
(statearr_39328[(29)] = inst_39232);

return statearr_39328;
})();
if(cljs.core.truth_(inst_39233)){
var statearr_39329_39404 = state_39285__$1;
(statearr_39329_39404[(1)] = (29));

} else {
var statearr_39330_39405 = state_39285__$1;
(statearr_39330_39405[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (25))){
var inst_39203 = (state_39285[(23)]);
var inst_39219 = (state_39285[(2)]);
var inst_39220 = cljs.core.not_empty.call(null,inst_39203);
var state_39285__$1 = (function (){var statearr_39331 = state_39285;
(statearr_39331[(30)] = inst_39219);

return statearr_39331;
})();
if(cljs.core.truth_(inst_39220)){
var statearr_39332_39406 = state_39285__$1;
(statearr_39332_39406[(1)] = (26));

} else {
var statearr_39333_39407 = state_39285__$1;
(statearr_39333_39407[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (34))){
var inst_39254 = (state_39285[(2)]);
var state_39285__$1 = state_39285;
if(cljs.core.truth_(inst_39254)){
var statearr_39334_39408 = state_39285__$1;
(statearr_39334_39408[(1)] = (38));

} else {
var statearr_39335_39409 = state_39285__$1;
(statearr_39335_39409[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (17))){
var state_39285__$1 = state_39285;
var statearr_39336_39410 = state_39285__$1;
(statearr_39336_39410[(2)] = recompile_dependents);

(statearr_39336_39410[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (3))){
var state_39285__$1 = state_39285;
var statearr_39337_39411 = state_39285__$1;
(statearr_39337_39411[(2)] = null);

(statearr_39337_39411[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (12))){
var inst_39176 = (state_39285[(2)]);
var state_39285__$1 = state_39285;
var statearr_39338_39412 = state_39285__$1;
(statearr_39338_39412[(2)] = inst_39176);

(statearr_39338_39412[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (2))){
var inst_39138 = (state_39285[(13)]);
var inst_39145 = cljs.core.seq.call(null,inst_39138);
var inst_39146 = inst_39145;
var inst_39147 = null;
var inst_39148 = (0);
var inst_39149 = (0);
var state_39285__$1 = (function (){var statearr_39339 = state_39285;
(statearr_39339[(7)] = inst_39148);

(statearr_39339[(8)] = inst_39146);

(statearr_39339[(9)] = inst_39149);

(statearr_39339[(10)] = inst_39147);

return statearr_39339;
})();
var statearr_39340_39413 = state_39285__$1;
(statearr_39340_39413[(2)] = null);

(statearr_39340_39413[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (23))){
var inst_39203 = (state_39285[(23)]);
var inst_39199 = (state_39285[(19)]);
var inst_39202 = (state_39285[(24)]);
var inst_39207 = (state_39285[(25)]);
var inst_39205 = (state_39285[(26)]);
var inst_39210 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_39212 = (function (){var all_files = inst_39199;
var res_SINGLEQUOTE_ = inst_39202;
var res = inst_39203;
var files_not_loaded = inst_39205;
var dependencies_that_loaded = inst_39207;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39203,inst_39199,inst_39202,inst_39207,inst_39205,inst_39210,state_val_39286,c__31895__auto__,map__39131,map__39131__$1,opts,before_jsload,on_jsload,reload_dependents,map__39132,map__39132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39211){
var map__39341 = p__39211;
var map__39341__$1 = ((((!((map__39341 == null)))?((((map__39341.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39341.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39341):map__39341);
var request_url = cljs.core.get.call(null,map__39341__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39203,inst_39199,inst_39202,inst_39207,inst_39205,inst_39210,state_val_39286,c__31895__auto__,map__39131,map__39131__$1,opts,before_jsload,on_jsload,reload_dependents,map__39132,map__39132__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39213 = cljs.core.reverse.call(null,inst_39207);
var inst_39214 = cljs.core.map.call(null,inst_39212,inst_39213);
var inst_39215 = cljs.core.pr_str.call(null,inst_39214);
var inst_39216 = figwheel.client.utils.log.call(null,inst_39215);
var state_39285__$1 = (function (){var statearr_39343 = state_39285;
(statearr_39343[(31)] = inst_39210);

return statearr_39343;
})();
var statearr_39344_39414 = state_39285__$1;
(statearr_39344_39414[(2)] = inst_39216);

(statearr_39344_39414[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (35))){
var state_39285__$1 = state_39285;
var statearr_39345_39415 = state_39285__$1;
(statearr_39345_39415[(2)] = true);

(statearr_39345_39415[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (19))){
var inst_39189 = (state_39285[(12)]);
var inst_39195 = figwheel.client.file_reloading.expand_files.call(null,inst_39189);
var state_39285__$1 = state_39285;
var statearr_39346_39416 = state_39285__$1;
(statearr_39346_39416[(2)] = inst_39195);

(statearr_39346_39416[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (11))){
var state_39285__$1 = state_39285;
var statearr_39347_39417 = state_39285__$1;
(statearr_39347_39417[(2)] = null);

(statearr_39347_39417[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (9))){
var inst_39178 = (state_39285[(2)]);
var state_39285__$1 = state_39285;
var statearr_39348_39418 = state_39285__$1;
(statearr_39348_39418[(2)] = inst_39178);

(statearr_39348_39418[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (5))){
var inst_39148 = (state_39285[(7)]);
var inst_39149 = (state_39285[(9)]);
var inst_39151 = (inst_39149 < inst_39148);
var inst_39152 = inst_39151;
var state_39285__$1 = state_39285;
if(cljs.core.truth_(inst_39152)){
var statearr_39349_39419 = state_39285__$1;
(statearr_39349_39419[(1)] = (7));

} else {
var statearr_39350_39420 = state_39285__$1;
(statearr_39350_39420[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (14))){
var inst_39159 = (state_39285[(22)]);
var inst_39168 = cljs.core.first.call(null,inst_39159);
var inst_39169 = figwheel.client.file_reloading.eval_body.call(null,inst_39168,opts);
var inst_39170 = cljs.core.next.call(null,inst_39159);
var inst_39146 = inst_39170;
var inst_39147 = null;
var inst_39148 = (0);
var inst_39149 = (0);
var state_39285__$1 = (function (){var statearr_39351 = state_39285;
(statearr_39351[(7)] = inst_39148);

(statearr_39351[(32)] = inst_39169);

(statearr_39351[(8)] = inst_39146);

(statearr_39351[(9)] = inst_39149);

(statearr_39351[(10)] = inst_39147);

return statearr_39351;
})();
var statearr_39352_39421 = state_39285__$1;
(statearr_39352_39421[(2)] = null);

(statearr_39352_39421[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (45))){
var state_39285__$1 = state_39285;
var statearr_39353_39422 = state_39285__$1;
(statearr_39353_39422[(2)] = null);

(statearr_39353_39422[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (26))){
var inst_39203 = (state_39285[(23)]);
var inst_39199 = (state_39285[(19)]);
var inst_39202 = (state_39285[(24)]);
var inst_39207 = (state_39285[(25)]);
var inst_39205 = (state_39285[(26)]);
var inst_39222 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_39224 = (function (){var all_files = inst_39199;
var res_SINGLEQUOTE_ = inst_39202;
var res = inst_39203;
var files_not_loaded = inst_39205;
var dependencies_that_loaded = inst_39207;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39203,inst_39199,inst_39202,inst_39207,inst_39205,inst_39222,state_val_39286,c__31895__auto__,map__39131,map__39131__$1,opts,before_jsload,on_jsload,reload_dependents,map__39132,map__39132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39223){
var map__39354 = p__39223;
var map__39354__$1 = ((((!((map__39354 == null)))?((((map__39354.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39354.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39354):map__39354);
var namespace = cljs.core.get.call(null,map__39354__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__39354__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39203,inst_39199,inst_39202,inst_39207,inst_39205,inst_39222,state_val_39286,c__31895__auto__,map__39131,map__39131__$1,opts,before_jsload,on_jsload,reload_dependents,map__39132,map__39132__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39225 = cljs.core.map.call(null,inst_39224,inst_39203);
var inst_39226 = cljs.core.pr_str.call(null,inst_39225);
var inst_39227 = figwheel.client.utils.log.call(null,inst_39226);
var inst_39228 = (function (){var all_files = inst_39199;
var res_SINGLEQUOTE_ = inst_39202;
var res = inst_39203;
var files_not_loaded = inst_39205;
var dependencies_that_loaded = inst_39207;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39203,inst_39199,inst_39202,inst_39207,inst_39205,inst_39222,inst_39224,inst_39225,inst_39226,inst_39227,state_val_39286,c__31895__auto__,map__39131,map__39131__$1,opts,before_jsload,on_jsload,reload_dependents,map__39132,map__39132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39203,inst_39199,inst_39202,inst_39207,inst_39205,inst_39222,inst_39224,inst_39225,inst_39226,inst_39227,state_val_39286,c__31895__auto__,map__39131,map__39131__$1,opts,before_jsload,on_jsload,reload_dependents,map__39132,map__39132__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39229 = setTimeout(inst_39228,(10));
var state_39285__$1 = (function (){var statearr_39356 = state_39285;
(statearr_39356[(33)] = inst_39222);

(statearr_39356[(34)] = inst_39227);

return statearr_39356;
})();
var statearr_39357_39423 = state_39285__$1;
(statearr_39357_39423[(2)] = inst_39229);

(statearr_39357_39423[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (16))){
var state_39285__$1 = state_39285;
var statearr_39358_39424 = state_39285__$1;
(statearr_39358_39424[(2)] = reload_dependents);

(statearr_39358_39424[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (38))){
var inst_39239 = (state_39285[(16)]);
var inst_39256 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39239);
var state_39285__$1 = state_39285;
var statearr_39359_39425 = state_39285__$1;
(statearr_39359_39425[(2)] = inst_39256);

(statearr_39359_39425[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (30))){
var state_39285__$1 = state_39285;
var statearr_39360_39426 = state_39285__$1;
(statearr_39360_39426[(2)] = null);

(statearr_39360_39426[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (10))){
var inst_39159 = (state_39285[(22)]);
var inst_39161 = cljs.core.chunked_seq_QMARK_.call(null,inst_39159);
var state_39285__$1 = state_39285;
if(inst_39161){
var statearr_39361_39427 = state_39285__$1;
(statearr_39361_39427[(1)] = (13));

} else {
var statearr_39362_39428 = state_39285__$1;
(statearr_39362_39428[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (18))){
var inst_39193 = (state_39285[(2)]);
var state_39285__$1 = state_39285;
if(cljs.core.truth_(inst_39193)){
var statearr_39363_39429 = state_39285__$1;
(statearr_39363_39429[(1)] = (19));

} else {
var statearr_39364_39430 = state_39285__$1;
(statearr_39364_39430[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (42))){
var state_39285__$1 = state_39285;
var statearr_39365_39431 = state_39285__$1;
(statearr_39365_39431[(2)] = null);

(statearr_39365_39431[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (37))){
var inst_39251 = (state_39285[(2)]);
var state_39285__$1 = state_39285;
var statearr_39366_39432 = state_39285__$1;
(statearr_39366_39432[(2)] = inst_39251);

(statearr_39366_39432[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39286 === (8))){
var inst_39159 = (state_39285[(22)]);
var inst_39146 = (state_39285[(8)]);
var inst_39159__$1 = cljs.core.seq.call(null,inst_39146);
var state_39285__$1 = (function (){var statearr_39367 = state_39285;
(statearr_39367[(22)] = inst_39159__$1);

return statearr_39367;
})();
if(inst_39159__$1){
var statearr_39368_39433 = state_39285__$1;
(statearr_39368_39433[(1)] = (10));

} else {
var statearr_39369_39434 = state_39285__$1;
(statearr_39369_39434[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31895__auto__,map__39131,map__39131__$1,opts,before_jsload,on_jsload,reload_dependents,map__39132,map__39132__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31781__auto__,c__31895__auto__,map__39131,map__39131__$1,opts,before_jsload,on_jsload,reload_dependents,map__39132,map__39132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31782__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31782__auto____0 = (function (){
var statearr_39373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39373[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31782__auto__);

(statearr_39373[(1)] = (1));

return statearr_39373;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31782__auto____1 = (function (state_39285){
while(true){
var ret_value__31783__auto__ = (function (){try{while(true){
var result__31784__auto__ = switch__31781__auto__.call(null,state_39285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31784__auto__;
}
break;
}
}catch (e39374){if((e39374 instanceof Object)){
var ex__31785__auto__ = e39374;
var statearr_39375_39435 = state_39285;
(statearr_39375_39435[(5)] = ex__31785__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39436 = state_39285;
state_39285 = G__39436;
continue;
} else {
return ret_value__31783__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31782__auto__ = function(state_39285){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31782__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31782__auto____1.call(this,state_39285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31782__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31782__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31782__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31782__auto__;
})()
;})(switch__31781__auto__,c__31895__auto__,map__39131,map__39131__$1,opts,before_jsload,on_jsload,reload_dependents,map__39132,map__39132__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__31897__auto__ = (function (){var statearr_39376 = f__31896__auto__.call(null);
(statearr_39376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31895__auto__);

return statearr_39376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31897__auto__);
});})(c__31895__auto__,map__39131,map__39131__$1,opts,before_jsload,on_jsload,reload_dependents,map__39132,map__39132__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__31895__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__39439,link){
var map__39442 = p__39439;
var map__39442__$1 = ((((!((map__39442 == null)))?((((map__39442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39442):map__39442);
var file = cljs.core.get.call(null,map__39442__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6552__auto__ = link.href;
if(cljs.core.truth_(temp__6552__auto__)){
var link_href = temp__6552__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6552__auto__,map__39442,map__39442__$1,file){
return (function (p1__39437_SHARP_,p2__39438_SHARP_){
if(cljs.core._EQ_.call(null,p1__39437_SHARP_,p2__39438_SHARP_)){
return p1__39437_SHARP_;
} else {
return false;
}
});})(link_href,temp__6552__auto__,map__39442,map__39442__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__6552__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__39448){
var map__39449 = p__39448;
var map__39449__$1 = ((((!((map__39449 == null)))?((((map__39449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39449):map__39449);
var match_length = cljs.core.get.call(null,map__39449__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__39449__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__39444_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__39444_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__6552__auto__)){
var res = temp__6552__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args39451 = [];
var len__22773__auto___39454 = arguments.length;
var i__22774__auto___39455 = (0);
while(true){
if((i__22774__auto___39455 < len__22773__auto___39454)){
args39451.push((arguments[i__22774__auto___39455]));

var G__39456 = (i__22774__auto___39455 + (1));
i__22774__auto___39455 = G__39456;
continue;
} else {
}
break;
}

var G__39453 = args39451.length;
switch (G__39453) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39451.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__39458_SHARP_,p2__39459_SHARP_){
return cljs.core.assoc.call(null,p1__39458_SHARP_,cljs.core.get.call(null,p2__39459_SHARP_,key),p2__39459_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__39460){
var map__39463 = p__39460;
var map__39463__$1 = ((((!((map__39463 == null)))?((((map__39463.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39463.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39463):map__39463);
var f_data = map__39463__$1;
var file = cljs.core.get.call(null,map__39463__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6552__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6552__auto__)){
var link = temp__6552__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__39465,files_msg){
var map__39472 = p__39465;
var map__39472__$1 = ((((!((map__39472 == null)))?((((map__39472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39472):map__39472);
var opts = map__39472__$1;
var on_cssload = cljs.core.get.call(null,map__39472__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__39474_39478 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__39475_39479 = null;
var count__39476_39480 = (0);
var i__39477_39481 = (0);
while(true){
if((i__39477_39481 < count__39476_39480)){
var f_39482 = cljs.core._nth.call(null,chunk__39475_39479,i__39477_39481);
figwheel.client.file_reloading.reload_css_file.call(null,f_39482);

var G__39483 = seq__39474_39478;
var G__39484 = chunk__39475_39479;
var G__39485 = count__39476_39480;
var G__39486 = (i__39477_39481 + (1));
seq__39474_39478 = G__39483;
chunk__39475_39479 = G__39484;
count__39476_39480 = G__39485;
i__39477_39481 = G__39486;
continue;
} else {
var temp__6552__auto___39487 = cljs.core.seq.call(null,seq__39474_39478);
if(temp__6552__auto___39487){
var seq__39474_39488__$1 = temp__6552__auto___39487;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39474_39488__$1)){
var c__22493__auto___39489 = cljs.core.chunk_first.call(null,seq__39474_39488__$1);
var G__39490 = cljs.core.chunk_rest.call(null,seq__39474_39488__$1);
var G__39491 = c__22493__auto___39489;
var G__39492 = cljs.core.count.call(null,c__22493__auto___39489);
var G__39493 = (0);
seq__39474_39478 = G__39490;
chunk__39475_39479 = G__39491;
count__39476_39480 = G__39492;
i__39477_39481 = G__39493;
continue;
} else {
var f_39494 = cljs.core.first.call(null,seq__39474_39488__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_39494);

var G__39495 = cljs.core.next.call(null,seq__39474_39488__$1);
var G__39496 = null;
var G__39497 = (0);
var G__39498 = (0);
seq__39474_39478 = G__39495;
chunk__39475_39479 = G__39496;
count__39476_39480 = G__39497;
i__39477_39481 = G__39498;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__39472,map__39472__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__39472,map__39472__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1471653237903