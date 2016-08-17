// Compiled by ClojureScript 1.9.211 {}
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
var or__21589__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__21589__auto__){
return or__21589__auto__;
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
var or__21589__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__21589__auto__)){
return or__21589__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__38448_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__38448_SHARP_));
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
var seq__38453 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__38454 = null;
var count__38455 = (0);
var i__38456 = (0);
while(true){
if((i__38456 < count__38455)){
var n = cljs.core._nth.call(null,chunk__38454,i__38456);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38457 = seq__38453;
var G__38458 = chunk__38454;
var G__38459 = count__38455;
var G__38460 = (i__38456 + (1));
seq__38453 = G__38457;
chunk__38454 = G__38458;
count__38455 = G__38459;
i__38456 = G__38460;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__38453);
if(temp__6503__auto__){
var seq__38453__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38453__$1)){
var c__22492__auto__ = cljs.core.chunk_first.call(null,seq__38453__$1);
var G__38461 = cljs.core.chunk_rest.call(null,seq__38453__$1);
var G__38462 = c__22492__auto__;
var G__38463 = cljs.core.count.call(null,c__22492__auto__);
var G__38464 = (0);
seq__38453 = G__38461;
chunk__38454 = G__38462;
count__38455 = G__38463;
i__38456 = G__38464;
continue;
} else {
var n = cljs.core.first.call(null,seq__38453__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38465 = cljs.core.next.call(null,seq__38453__$1);
var G__38466 = null;
var G__38467 = (0);
var G__38468 = (0);
seq__38453 = G__38465;
chunk__38454 = G__38466;
count__38455 = G__38467;
i__38456 = G__38468;
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

var seq__38519_38530 = cljs.core.seq.call(null,deps);
var chunk__38520_38531 = null;
var count__38521_38532 = (0);
var i__38522_38533 = (0);
while(true){
if((i__38522_38533 < count__38521_38532)){
var dep_38534 = cljs.core._nth.call(null,chunk__38520_38531,i__38522_38533);
topo_sort_helper_STAR_.call(null,dep_38534,(depth + (1)),state);

var G__38535 = seq__38519_38530;
var G__38536 = chunk__38520_38531;
var G__38537 = count__38521_38532;
var G__38538 = (i__38522_38533 + (1));
seq__38519_38530 = G__38535;
chunk__38520_38531 = G__38536;
count__38521_38532 = G__38537;
i__38522_38533 = G__38538;
continue;
} else {
var temp__6503__auto___38539 = cljs.core.seq.call(null,seq__38519_38530);
if(temp__6503__auto___38539){
var seq__38519_38540__$1 = temp__6503__auto___38539;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38519_38540__$1)){
var c__22492__auto___38541 = cljs.core.chunk_first.call(null,seq__38519_38540__$1);
var G__38542 = cljs.core.chunk_rest.call(null,seq__38519_38540__$1);
var G__38543 = c__22492__auto___38541;
var G__38544 = cljs.core.count.call(null,c__22492__auto___38541);
var G__38545 = (0);
seq__38519_38530 = G__38542;
chunk__38520_38531 = G__38543;
count__38521_38532 = G__38544;
i__38522_38533 = G__38545;
continue;
} else {
var dep_38546 = cljs.core.first.call(null,seq__38519_38540__$1);
topo_sort_helper_STAR_.call(null,dep_38546,(depth + (1)),state);

var G__38547 = cljs.core.next.call(null,seq__38519_38540__$1);
var G__38548 = null;
var G__38549 = (0);
var G__38550 = (0);
seq__38519_38530 = G__38547;
chunk__38520_38531 = G__38548;
count__38521_38532 = G__38549;
i__38522_38533 = G__38550;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__38523){
var vec__38527 = p__38523;
var seq__38528 = cljs.core.seq.call(null,vec__38527);
var first__38529 = cljs.core.first.call(null,seq__38528);
var seq__38528__$1 = cljs.core.next.call(null,seq__38528);
var x = first__38529;
var xs = seq__38528__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__38527,seq__38528,first__38529,seq__38528__$1,x,xs,get_deps__$1){
return (function (p1__38469_SHARP_){
return clojure.set.difference.call(null,p1__38469_SHARP_,x);
});})(vec__38527,seq__38528,first__38529,seq__38528__$1,x,xs,get_deps__$1))
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
var seq__38563 = cljs.core.seq.call(null,provides);
var chunk__38564 = null;
var count__38565 = (0);
var i__38566 = (0);
while(true){
if((i__38566 < count__38565)){
var prov = cljs.core._nth.call(null,chunk__38564,i__38566);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38567_38575 = cljs.core.seq.call(null,requires);
var chunk__38568_38576 = null;
var count__38569_38577 = (0);
var i__38570_38578 = (0);
while(true){
if((i__38570_38578 < count__38569_38577)){
var req_38579 = cljs.core._nth.call(null,chunk__38568_38576,i__38570_38578);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38579,prov);

var G__38580 = seq__38567_38575;
var G__38581 = chunk__38568_38576;
var G__38582 = count__38569_38577;
var G__38583 = (i__38570_38578 + (1));
seq__38567_38575 = G__38580;
chunk__38568_38576 = G__38581;
count__38569_38577 = G__38582;
i__38570_38578 = G__38583;
continue;
} else {
var temp__6503__auto___38584 = cljs.core.seq.call(null,seq__38567_38575);
if(temp__6503__auto___38584){
var seq__38567_38585__$1 = temp__6503__auto___38584;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38567_38585__$1)){
var c__22492__auto___38586 = cljs.core.chunk_first.call(null,seq__38567_38585__$1);
var G__38587 = cljs.core.chunk_rest.call(null,seq__38567_38585__$1);
var G__38588 = c__22492__auto___38586;
var G__38589 = cljs.core.count.call(null,c__22492__auto___38586);
var G__38590 = (0);
seq__38567_38575 = G__38587;
chunk__38568_38576 = G__38588;
count__38569_38577 = G__38589;
i__38570_38578 = G__38590;
continue;
} else {
var req_38591 = cljs.core.first.call(null,seq__38567_38585__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38591,prov);

var G__38592 = cljs.core.next.call(null,seq__38567_38585__$1);
var G__38593 = null;
var G__38594 = (0);
var G__38595 = (0);
seq__38567_38575 = G__38592;
chunk__38568_38576 = G__38593;
count__38569_38577 = G__38594;
i__38570_38578 = G__38595;
continue;
}
} else {
}
}
break;
}

var G__38596 = seq__38563;
var G__38597 = chunk__38564;
var G__38598 = count__38565;
var G__38599 = (i__38566 + (1));
seq__38563 = G__38596;
chunk__38564 = G__38597;
count__38565 = G__38598;
i__38566 = G__38599;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__38563);
if(temp__6503__auto__){
var seq__38563__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38563__$1)){
var c__22492__auto__ = cljs.core.chunk_first.call(null,seq__38563__$1);
var G__38600 = cljs.core.chunk_rest.call(null,seq__38563__$1);
var G__38601 = c__22492__auto__;
var G__38602 = cljs.core.count.call(null,c__22492__auto__);
var G__38603 = (0);
seq__38563 = G__38600;
chunk__38564 = G__38601;
count__38565 = G__38602;
i__38566 = G__38603;
continue;
} else {
var prov = cljs.core.first.call(null,seq__38563__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38571_38604 = cljs.core.seq.call(null,requires);
var chunk__38572_38605 = null;
var count__38573_38606 = (0);
var i__38574_38607 = (0);
while(true){
if((i__38574_38607 < count__38573_38606)){
var req_38608 = cljs.core._nth.call(null,chunk__38572_38605,i__38574_38607);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38608,prov);

var G__38609 = seq__38571_38604;
var G__38610 = chunk__38572_38605;
var G__38611 = count__38573_38606;
var G__38612 = (i__38574_38607 + (1));
seq__38571_38604 = G__38609;
chunk__38572_38605 = G__38610;
count__38573_38606 = G__38611;
i__38574_38607 = G__38612;
continue;
} else {
var temp__6503__auto___38613__$1 = cljs.core.seq.call(null,seq__38571_38604);
if(temp__6503__auto___38613__$1){
var seq__38571_38614__$1 = temp__6503__auto___38613__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38571_38614__$1)){
var c__22492__auto___38615 = cljs.core.chunk_first.call(null,seq__38571_38614__$1);
var G__38616 = cljs.core.chunk_rest.call(null,seq__38571_38614__$1);
var G__38617 = c__22492__auto___38615;
var G__38618 = cljs.core.count.call(null,c__22492__auto___38615);
var G__38619 = (0);
seq__38571_38604 = G__38616;
chunk__38572_38605 = G__38617;
count__38573_38606 = G__38618;
i__38574_38607 = G__38619;
continue;
} else {
var req_38620 = cljs.core.first.call(null,seq__38571_38614__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38620,prov);

var G__38621 = cljs.core.next.call(null,seq__38571_38614__$1);
var G__38622 = null;
var G__38623 = (0);
var G__38624 = (0);
seq__38571_38604 = G__38621;
chunk__38572_38605 = G__38622;
count__38573_38606 = G__38623;
i__38574_38607 = G__38624;
continue;
}
} else {
}
}
break;
}

var G__38625 = cljs.core.next.call(null,seq__38563__$1);
var G__38626 = null;
var G__38627 = (0);
var G__38628 = (0);
seq__38563 = G__38625;
chunk__38564 = G__38626;
count__38565 = G__38627;
i__38566 = G__38628;
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
var seq__38633_38637 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__38634_38638 = null;
var count__38635_38639 = (0);
var i__38636_38640 = (0);
while(true){
if((i__38636_38640 < count__38635_38639)){
var ns_38641 = cljs.core._nth.call(null,chunk__38634_38638,i__38636_38640);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38641);

var G__38642 = seq__38633_38637;
var G__38643 = chunk__38634_38638;
var G__38644 = count__38635_38639;
var G__38645 = (i__38636_38640 + (1));
seq__38633_38637 = G__38642;
chunk__38634_38638 = G__38643;
count__38635_38639 = G__38644;
i__38636_38640 = G__38645;
continue;
} else {
var temp__6503__auto___38646 = cljs.core.seq.call(null,seq__38633_38637);
if(temp__6503__auto___38646){
var seq__38633_38647__$1 = temp__6503__auto___38646;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38633_38647__$1)){
var c__22492__auto___38648 = cljs.core.chunk_first.call(null,seq__38633_38647__$1);
var G__38649 = cljs.core.chunk_rest.call(null,seq__38633_38647__$1);
var G__38650 = c__22492__auto___38648;
var G__38651 = cljs.core.count.call(null,c__22492__auto___38648);
var G__38652 = (0);
seq__38633_38637 = G__38649;
chunk__38634_38638 = G__38650;
count__38635_38639 = G__38651;
i__38636_38640 = G__38652;
continue;
} else {
var ns_38653 = cljs.core.first.call(null,seq__38633_38647__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38653);

var G__38654 = cljs.core.next.call(null,seq__38633_38647__$1);
var G__38655 = null;
var G__38656 = (0);
var G__38657 = (0);
seq__38633_38637 = G__38654;
chunk__38634_38638 = G__38655;
count__38635_38639 = G__38656;
i__38636_38640 = G__38657;
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
goog.require_figwheel_backup_ = (function (){var or__21589__auto__ = goog.require__;
if(cljs.core.truth_(or__21589__auto__)){
return or__21589__auto__;
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
var G__38658__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__38658 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38659__i = 0, G__38659__a = new Array(arguments.length -  0);
while (G__38659__i < G__38659__a.length) {G__38659__a[G__38659__i] = arguments[G__38659__i + 0]; ++G__38659__i;}
  args = new cljs.core.IndexedSeq(G__38659__a,0);
} 
return G__38658__delegate.call(this,args);};
G__38658.cljs$lang$maxFixedArity = 0;
G__38658.cljs$lang$applyTo = (function (arglist__38660){
var args = cljs.core.seq(arglist__38660);
return G__38658__delegate(args);
});
G__38658.cljs$core$IFn$_invoke$arity$variadic = G__38658__delegate;
return G__38658;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__38662 = cljs.core._EQ_;
var expr__38663 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__38662.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__38663))){
var path_parts = ((function (pred__38662,expr__38663){
return (function (p1__38661_SHARP_){
return clojure.string.split.call(null,p1__38661_SHARP_,/[\/\\]/);
});})(pred__38662,expr__38663))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__38662,expr__38663){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e38665){if((e38665 instanceof Error)){
var e = e38665;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e38665;

}
}})());
});
;})(path_parts,sep,root,pred__38662,expr__38663))
} else {
if(cljs.core.truth_(pred__38662.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__38663))){
return ((function (pred__38662,expr__38663){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__38662,expr__38663){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__38662,expr__38663))
);

return deferred.addErrback(((function (deferred,pred__38662,expr__38663){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__38662,expr__38663))
);
});
;})(pred__38662,expr__38663))
} else {
return ((function (pred__38662,expr__38663){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__38662,expr__38663))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__38666,callback){
var map__38669 = p__38666;
var map__38669__$1 = ((((!((map__38669 == null)))?((((map__38669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38669):map__38669);
var file_msg = map__38669__$1;
var request_url = cljs.core.get.call(null,map__38669__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__38669,map__38669__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__38669,map__38669__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__30029__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto__){
return (function (){
var f__30030__auto__ = (function (){var switch__29915__auto__ = ((function (c__30029__auto__){
return (function (state_38693){
var state_val_38694 = (state_38693[(1)]);
if((state_val_38694 === (7))){
var inst_38689 = (state_38693[(2)]);
var state_38693__$1 = state_38693;
var statearr_38695_38715 = state_38693__$1;
(statearr_38695_38715[(2)] = inst_38689);

(statearr_38695_38715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38694 === (1))){
var state_38693__$1 = state_38693;
var statearr_38696_38716 = state_38693__$1;
(statearr_38696_38716[(2)] = null);

(statearr_38696_38716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38694 === (4))){
var inst_38673 = (state_38693[(7)]);
var inst_38673__$1 = (state_38693[(2)]);
var state_38693__$1 = (function (){var statearr_38697 = state_38693;
(statearr_38697[(7)] = inst_38673__$1);

return statearr_38697;
})();
if(cljs.core.truth_(inst_38673__$1)){
var statearr_38698_38717 = state_38693__$1;
(statearr_38698_38717[(1)] = (5));

} else {
var statearr_38699_38718 = state_38693__$1;
(statearr_38699_38718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38694 === (6))){
var state_38693__$1 = state_38693;
var statearr_38700_38719 = state_38693__$1;
(statearr_38700_38719[(2)] = null);

(statearr_38700_38719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38694 === (3))){
var inst_38691 = (state_38693[(2)]);
var state_38693__$1 = state_38693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38693__$1,inst_38691);
} else {
if((state_val_38694 === (2))){
var state_38693__$1 = state_38693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38693__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_38694 === (11))){
var inst_38685 = (state_38693[(2)]);
var state_38693__$1 = (function (){var statearr_38701 = state_38693;
(statearr_38701[(8)] = inst_38685);

return statearr_38701;
})();
var statearr_38702_38720 = state_38693__$1;
(statearr_38702_38720[(2)] = null);

(statearr_38702_38720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38694 === (9))){
var inst_38679 = (state_38693[(9)]);
var inst_38677 = (state_38693[(10)]);
var inst_38681 = inst_38679.call(null,inst_38677);
var state_38693__$1 = state_38693;
var statearr_38703_38721 = state_38693__$1;
(statearr_38703_38721[(2)] = inst_38681);

(statearr_38703_38721[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38694 === (5))){
var inst_38673 = (state_38693[(7)]);
var inst_38675 = figwheel.client.file_reloading.blocking_load.call(null,inst_38673);
var state_38693__$1 = state_38693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38693__$1,(8),inst_38675);
} else {
if((state_val_38694 === (10))){
var inst_38677 = (state_38693[(10)]);
var inst_38683 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_38677);
var state_38693__$1 = state_38693;
var statearr_38704_38722 = state_38693__$1;
(statearr_38704_38722[(2)] = inst_38683);

(statearr_38704_38722[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38694 === (8))){
var inst_38673 = (state_38693[(7)]);
var inst_38679 = (state_38693[(9)]);
var inst_38677 = (state_38693[(2)]);
var inst_38678 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_38679__$1 = cljs.core.get.call(null,inst_38678,inst_38673);
var state_38693__$1 = (function (){var statearr_38705 = state_38693;
(statearr_38705[(9)] = inst_38679__$1);

(statearr_38705[(10)] = inst_38677);

return statearr_38705;
})();
if(cljs.core.truth_(inst_38679__$1)){
var statearr_38706_38723 = state_38693__$1;
(statearr_38706_38723[(1)] = (9));

} else {
var statearr_38707_38724 = state_38693__$1;
(statearr_38707_38724[(1)] = (10));

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
});})(c__30029__auto__))
;
return ((function (switch__29915__auto__,c__30029__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29916__auto__ = null;
var figwheel$client$file_reloading$state_machine__29916__auto____0 = (function (){
var statearr_38711 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38711[(0)] = figwheel$client$file_reloading$state_machine__29916__auto__);

(statearr_38711[(1)] = (1));

return statearr_38711;
});
var figwheel$client$file_reloading$state_machine__29916__auto____1 = (function (state_38693){
while(true){
var ret_value__29917__auto__ = (function (){try{while(true){
var result__29918__auto__ = switch__29915__auto__.call(null,state_38693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29918__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29918__auto__;
}
break;
}
}catch (e38712){if((e38712 instanceof Object)){
var ex__29919__auto__ = e38712;
var statearr_38713_38725 = state_38693;
(statearr_38713_38725[(5)] = ex__29919__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38726 = state_38693;
state_38693 = G__38726;
continue;
} else {
return ret_value__29917__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29916__auto__ = function(state_38693){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29916__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29916__auto____1.call(this,state_38693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29916__auto____0;
figwheel$client$file_reloading$state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29916__auto____1;
return figwheel$client$file_reloading$state_machine__29916__auto__;
})()
;})(switch__29915__auto__,c__30029__auto__))
})();
var state__30031__auto__ = (function (){var statearr_38714 = f__30030__auto__.call(null);
(statearr_38714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto__);

return statearr_38714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto__))
);

return c__30029__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__38727,callback){
var map__38730 = p__38727;
var map__38730__$1 = ((((!((map__38730 == null)))?((((map__38730.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38730.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38730):map__38730);
var file_msg = map__38730__$1;
var namespace = cljs.core.get.call(null,map__38730__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__38730,map__38730__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__38730,map__38730__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__38732){
var map__38735 = p__38732;
var map__38735__$1 = ((((!((map__38735 == null)))?((((map__38735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38735):map__38735);
var file_msg = map__38735__$1;
var namespace = cljs.core.get.call(null,map__38735__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__21577__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__21577__auto__){
var or__21589__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21589__auto__)){
return or__21589__auto__;
} else {
var or__21589__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21589__auto____$1)){
return or__21589__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__21577__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__38737,callback){
var map__38740 = p__38737;
var map__38740__$1 = ((((!((map__38740 == null)))?((((map__38740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38740):map__38740);
var file_msg = map__38740__$1;
var request_url = cljs.core.get.call(null,map__38740__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__38740__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__30029__auto___38844 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto___38844,out){
return (function (){
var f__30030__auto__ = (function (){var switch__29915__auto__ = ((function (c__30029__auto___38844,out){
return (function (state_38826){
var state_val_38827 = (state_38826[(1)]);
if((state_val_38827 === (1))){
var inst_38800 = cljs.core.seq.call(null,files);
var inst_38801 = cljs.core.first.call(null,inst_38800);
var inst_38802 = cljs.core.next.call(null,inst_38800);
var inst_38803 = files;
var state_38826__$1 = (function (){var statearr_38828 = state_38826;
(statearr_38828[(7)] = inst_38801);

(statearr_38828[(8)] = inst_38803);

(statearr_38828[(9)] = inst_38802);

return statearr_38828;
})();
var statearr_38829_38845 = state_38826__$1;
(statearr_38829_38845[(2)] = null);

(statearr_38829_38845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38827 === (2))){
var inst_38803 = (state_38826[(8)]);
var inst_38809 = (state_38826[(10)]);
var inst_38808 = cljs.core.seq.call(null,inst_38803);
var inst_38809__$1 = cljs.core.first.call(null,inst_38808);
var inst_38810 = cljs.core.next.call(null,inst_38808);
var inst_38811 = (inst_38809__$1 == null);
var inst_38812 = cljs.core.not.call(null,inst_38811);
var state_38826__$1 = (function (){var statearr_38830 = state_38826;
(statearr_38830[(10)] = inst_38809__$1);

(statearr_38830[(11)] = inst_38810);

return statearr_38830;
})();
if(inst_38812){
var statearr_38831_38846 = state_38826__$1;
(statearr_38831_38846[(1)] = (4));

} else {
var statearr_38832_38847 = state_38826__$1;
(statearr_38832_38847[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38827 === (3))){
var inst_38824 = (state_38826[(2)]);
var state_38826__$1 = state_38826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38826__$1,inst_38824);
} else {
if((state_val_38827 === (4))){
var inst_38809 = (state_38826[(10)]);
var inst_38814 = figwheel.client.file_reloading.reload_js_file.call(null,inst_38809);
var state_38826__$1 = state_38826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38826__$1,(7),inst_38814);
} else {
if((state_val_38827 === (5))){
var inst_38820 = cljs.core.async.close_BANG_.call(null,out);
var state_38826__$1 = state_38826;
var statearr_38833_38848 = state_38826__$1;
(statearr_38833_38848[(2)] = inst_38820);

(statearr_38833_38848[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38827 === (6))){
var inst_38822 = (state_38826[(2)]);
var state_38826__$1 = state_38826;
var statearr_38834_38849 = state_38826__$1;
(statearr_38834_38849[(2)] = inst_38822);

(statearr_38834_38849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38827 === (7))){
var inst_38810 = (state_38826[(11)]);
var inst_38816 = (state_38826[(2)]);
var inst_38817 = cljs.core.async.put_BANG_.call(null,out,inst_38816);
var inst_38803 = inst_38810;
var state_38826__$1 = (function (){var statearr_38835 = state_38826;
(statearr_38835[(12)] = inst_38817);

(statearr_38835[(8)] = inst_38803);

return statearr_38835;
})();
var statearr_38836_38850 = state_38826__$1;
(statearr_38836_38850[(2)] = null);

(statearr_38836_38850[(1)] = (2));


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
});})(c__30029__auto___38844,out))
;
return ((function (switch__29915__auto__,c__30029__auto___38844,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29916__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29916__auto____0 = (function (){
var statearr_38840 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38840[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29916__auto__);

(statearr_38840[(1)] = (1));

return statearr_38840;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29916__auto____1 = (function (state_38826){
while(true){
var ret_value__29917__auto__ = (function (){try{while(true){
var result__29918__auto__ = switch__29915__auto__.call(null,state_38826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29918__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29918__auto__;
}
break;
}
}catch (e38841){if((e38841 instanceof Object)){
var ex__29919__auto__ = e38841;
var statearr_38842_38851 = state_38826;
(statearr_38842_38851[(5)] = ex__29919__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38852 = state_38826;
state_38826 = G__38852;
continue;
} else {
return ret_value__29917__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29916__auto__ = function(state_38826){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29916__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29916__auto____1.call(this,state_38826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29916__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29916__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29916__auto__;
})()
;})(switch__29915__auto__,c__30029__auto___38844,out))
})();
var state__30031__auto__ = (function (){var statearr_38843 = f__30030__auto__.call(null);
(statearr_38843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto___38844);

return statearr_38843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto___38844,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__38853,opts){
var map__38857 = p__38853;
var map__38857__$1 = ((((!((map__38857 == null)))?((((map__38857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38857):map__38857);
var eval_body__$1 = cljs.core.get.call(null,map__38857__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__38857__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__21577__auto__ = eval_body__$1;
if(cljs.core.truth_(and__21577__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__21577__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e38859){var e = e38859;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__6501__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__38860_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38860_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__6501__auto__)){
var file_msg = temp__6501__auto__;
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
return cljs.core.map.call(null,(function (p__38869){
var vec__38870 = p__38869;
var k = cljs.core.nth.call(null,vec__38870,(0),null);
var v = cljs.core.nth.call(null,vec__38870,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__38873){
var vec__38874 = p__38873;
var k = cljs.core.nth.call(null,vec__38874,(0),null);
var v = cljs.core.nth.call(null,vec__38874,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__38880,p__38881){
var map__39128 = p__38880;
var map__39128__$1 = ((((!((map__39128 == null)))?((((map__39128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39128):map__39128);
var opts = map__39128__$1;
var before_jsload = cljs.core.get.call(null,map__39128__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__39128__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__39128__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__39129 = p__38881;
var map__39129__$1 = ((((!((map__39129 == null)))?((((map__39129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39129):map__39129);
var msg = map__39129__$1;
var files = cljs.core.get.call(null,map__39129__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__39129__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__39129__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30029__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30029__auto__,map__39128,map__39128__$1,opts,before_jsload,on_jsload,reload_dependents,map__39129,map__39129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30030__auto__ = (function (){var switch__29915__auto__ = ((function (c__30029__auto__,map__39128,map__39128__$1,opts,before_jsload,on_jsload,reload_dependents,map__39129,map__39129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_39282){
var state_val_39283 = (state_39282[(1)]);
if((state_val_39283 === (7))){
var inst_39143 = (state_39282[(7)]);
var inst_39144 = (state_39282[(8)]);
var inst_39146 = (state_39282[(9)]);
var inst_39145 = (state_39282[(10)]);
var inst_39151 = cljs.core._nth.call(null,inst_39144,inst_39146);
var inst_39152 = figwheel.client.file_reloading.eval_body.call(null,inst_39151,opts);
var inst_39153 = (inst_39146 + (1));
var tmp39284 = inst_39143;
var tmp39285 = inst_39144;
var tmp39286 = inst_39145;
var inst_39143__$1 = tmp39284;
var inst_39144__$1 = tmp39285;
var inst_39145__$1 = tmp39286;
var inst_39146__$1 = inst_39153;
var state_39282__$1 = (function (){var statearr_39287 = state_39282;
(statearr_39287[(7)] = inst_39143__$1);

(statearr_39287[(8)] = inst_39144__$1);

(statearr_39287[(11)] = inst_39152);

(statearr_39287[(9)] = inst_39146__$1);

(statearr_39287[(10)] = inst_39145__$1);

return statearr_39287;
})();
var statearr_39288_39374 = state_39282__$1;
(statearr_39288_39374[(2)] = null);

(statearr_39288_39374[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (20))){
var inst_39186 = (state_39282[(12)]);
var inst_39194 = figwheel.client.file_reloading.sort_files.call(null,inst_39186);
var state_39282__$1 = state_39282;
var statearr_39289_39375 = state_39282__$1;
(statearr_39289_39375[(2)] = inst_39194);

(statearr_39289_39375[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (27))){
var state_39282__$1 = state_39282;
var statearr_39290_39376 = state_39282__$1;
(statearr_39290_39376[(2)] = null);

(statearr_39290_39376[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (1))){
var inst_39135 = (state_39282[(13)]);
var inst_39132 = before_jsload.call(null,files);
var inst_39133 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_39134 = (function (){return ((function (inst_39135,inst_39132,inst_39133,state_val_39283,c__30029__auto__,map__39128,map__39128__$1,opts,before_jsload,on_jsload,reload_dependents,map__39129,map__39129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38877_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38877_SHARP_);
});
;})(inst_39135,inst_39132,inst_39133,state_val_39283,c__30029__auto__,map__39128,map__39128__$1,opts,before_jsload,on_jsload,reload_dependents,map__39129,map__39129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39135__$1 = cljs.core.filter.call(null,inst_39134,files);
var inst_39136 = cljs.core.not_empty.call(null,inst_39135__$1);
var state_39282__$1 = (function (){var statearr_39291 = state_39282;
(statearr_39291[(14)] = inst_39132);

(statearr_39291[(13)] = inst_39135__$1);

(statearr_39291[(15)] = inst_39133);

return statearr_39291;
})();
if(cljs.core.truth_(inst_39136)){
var statearr_39292_39377 = state_39282__$1;
(statearr_39292_39377[(1)] = (2));

} else {
var statearr_39293_39378 = state_39282__$1;
(statearr_39293_39378[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (24))){
var state_39282__$1 = state_39282;
var statearr_39294_39379 = state_39282__$1;
(statearr_39294_39379[(2)] = null);

(statearr_39294_39379[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (39))){
var inst_39236 = (state_39282[(16)]);
var state_39282__$1 = state_39282;
var statearr_39295_39380 = state_39282__$1;
(statearr_39295_39380[(2)] = inst_39236);

(statearr_39295_39380[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (46))){
var inst_39277 = (state_39282[(2)]);
var state_39282__$1 = state_39282;
var statearr_39296_39381 = state_39282__$1;
(statearr_39296_39381[(2)] = inst_39277);

(statearr_39296_39381[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (4))){
var inst_39180 = (state_39282[(2)]);
var inst_39181 = cljs.core.List.EMPTY;
var inst_39182 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_39181);
var inst_39183 = (function (){return ((function (inst_39180,inst_39181,inst_39182,state_val_39283,c__30029__auto__,map__39128,map__39128__$1,opts,before_jsload,on_jsload,reload_dependents,map__39129,map__39129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38878_SHARP_){
var and__21577__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38878_SHARP_);
if(cljs.core.truth_(and__21577__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38878_SHARP_));
} else {
return and__21577__auto__;
}
});
;})(inst_39180,inst_39181,inst_39182,state_val_39283,c__30029__auto__,map__39128,map__39128__$1,opts,before_jsload,on_jsload,reload_dependents,map__39129,map__39129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39184 = cljs.core.filter.call(null,inst_39183,files);
var inst_39185 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_39186 = cljs.core.concat.call(null,inst_39184,inst_39185);
var state_39282__$1 = (function (){var statearr_39297 = state_39282;
(statearr_39297[(12)] = inst_39186);

(statearr_39297[(17)] = inst_39180);

(statearr_39297[(18)] = inst_39182);

return statearr_39297;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_39298_39382 = state_39282__$1;
(statearr_39298_39382[(1)] = (16));

} else {
var statearr_39299_39383 = state_39282__$1;
(statearr_39299_39383[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (15))){
var inst_39170 = (state_39282[(2)]);
var state_39282__$1 = state_39282;
var statearr_39300_39384 = state_39282__$1;
(statearr_39300_39384[(2)] = inst_39170);

(statearr_39300_39384[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (21))){
var inst_39196 = (state_39282[(19)]);
var inst_39196__$1 = (state_39282[(2)]);
var inst_39197 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_39196__$1);
var state_39282__$1 = (function (){var statearr_39301 = state_39282;
(statearr_39301[(19)] = inst_39196__$1);

return statearr_39301;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39282__$1,(22),inst_39197);
} else {
if((state_val_39283 === (31))){
var inst_39280 = (state_39282[(2)]);
var state_39282__$1 = state_39282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39282__$1,inst_39280);
} else {
if((state_val_39283 === (32))){
var inst_39236 = (state_39282[(16)]);
var inst_39241 = inst_39236.cljs$lang$protocol_mask$partition0$;
var inst_39242 = (inst_39241 & (64));
var inst_39243 = inst_39236.cljs$core$ISeq$;
var inst_39244 = (inst_39242) || (inst_39243);
var state_39282__$1 = state_39282;
if(cljs.core.truth_(inst_39244)){
var statearr_39302_39385 = state_39282__$1;
(statearr_39302_39385[(1)] = (35));

} else {
var statearr_39303_39386 = state_39282__$1;
(statearr_39303_39386[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (40))){
var inst_39257 = (state_39282[(20)]);
var inst_39256 = (state_39282[(2)]);
var inst_39257__$1 = cljs.core.get.call(null,inst_39256,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_39258 = cljs.core.get.call(null,inst_39256,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_39259 = cljs.core.not_empty.call(null,inst_39257__$1);
var state_39282__$1 = (function (){var statearr_39304 = state_39282;
(statearr_39304[(21)] = inst_39258);

(statearr_39304[(20)] = inst_39257__$1);

return statearr_39304;
})();
if(cljs.core.truth_(inst_39259)){
var statearr_39305_39387 = state_39282__$1;
(statearr_39305_39387[(1)] = (41));

} else {
var statearr_39306_39388 = state_39282__$1;
(statearr_39306_39388[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (33))){
var state_39282__$1 = state_39282;
var statearr_39307_39389 = state_39282__$1;
(statearr_39307_39389[(2)] = false);

(statearr_39307_39389[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (13))){
var inst_39156 = (state_39282[(22)]);
var inst_39160 = cljs.core.chunk_first.call(null,inst_39156);
var inst_39161 = cljs.core.chunk_rest.call(null,inst_39156);
var inst_39162 = cljs.core.count.call(null,inst_39160);
var inst_39143 = inst_39161;
var inst_39144 = inst_39160;
var inst_39145 = inst_39162;
var inst_39146 = (0);
var state_39282__$1 = (function (){var statearr_39308 = state_39282;
(statearr_39308[(7)] = inst_39143);

(statearr_39308[(8)] = inst_39144);

(statearr_39308[(9)] = inst_39146);

(statearr_39308[(10)] = inst_39145);

return statearr_39308;
})();
var statearr_39309_39390 = state_39282__$1;
(statearr_39309_39390[(2)] = null);

(statearr_39309_39390[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (22))){
var inst_39204 = (state_39282[(23)]);
var inst_39199 = (state_39282[(24)]);
var inst_39196 = (state_39282[(19)]);
var inst_39200 = (state_39282[(25)]);
var inst_39199__$1 = (state_39282[(2)]);
var inst_39200__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39199__$1);
var inst_39201 = (function (){var all_files = inst_39196;
var res_SINGLEQUOTE_ = inst_39199__$1;
var res = inst_39200__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_39204,inst_39199,inst_39196,inst_39200,inst_39199__$1,inst_39200__$1,state_val_39283,c__30029__auto__,map__39128,map__39128__$1,opts,before_jsload,on_jsload,reload_dependents,map__39129,map__39129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38879_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__38879_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_39204,inst_39199,inst_39196,inst_39200,inst_39199__$1,inst_39200__$1,state_val_39283,c__30029__auto__,map__39128,map__39128__$1,opts,before_jsload,on_jsload,reload_dependents,map__39129,map__39129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39202 = cljs.core.filter.call(null,inst_39201,inst_39199__$1);
var inst_39203 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_39204__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39203);
var inst_39205 = cljs.core.not_empty.call(null,inst_39204__$1);
var state_39282__$1 = (function (){var statearr_39310 = state_39282;
(statearr_39310[(23)] = inst_39204__$1);

(statearr_39310[(24)] = inst_39199__$1);

(statearr_39310[(26)] = inst_39202);

(statearr_39310[(25)] = inst_39200__$1);

return statearr_39310;
})();
if(cljs.core.truth_(inst_39205)){
var statearr_39311_39391 = state_39282__$1;
(statearr_39311_39391[(1)] = (23));

} else {
var statearr_39312_39392 = state_39282__$1;
(statearr_39312_39392[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (36))){
var state_39282__$1 = state_39282;
var statearr_39313_39393 = state_39282__$1;
(statearr_39313_39393[(2)] = false);

(statearr_39313_39393[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (41))){
var inst_39257 = (state_39282[(20)]);
var inst_39261 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_39262 = cljs.core.map.call(null,inst_39261,inst_39257);
var inst_39263 = cljs.core.pr_str.call(null,inst_39262);
var inst_39264 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_39263)].join('');
var inst_39265 = figwheel.client.utils.log.call(null,inst_39264);
var state_39282__$1 = state_39282;
var statearr_39314_39394 = state_39282__$1;
(statearr_39314_39394[(2)] = inst_39265);

(statearr_39314_39394[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (43))){
var inst_39258 = (state_39282[(21)]);
var inst_39268 = (state_39282[(2)]);
var inst_39269 = cljs.core.not_empty.call(null,inst_39258);
var state_39282__$1 = (function (){var statearr_39315 = state_39282;
(statearr_39315[(27)] = inst_39268);

return statearr_39315;
})();
if(cljs.core.truth_(inst_39269)){
var statearr_39316_39395 = state_39282__$1;
(statearr_39316_39395[(1)] = (44));

} else {
var statearr_39317_39396 = state_39282__$1;
(statearr_39317_39396[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (29))){
var inst_39204 = (state_39282[(23)]);
var inst_39236 = (state_39282[(16)]);
var inst_39199 = (state_39282[(24)]);
var inst_39196 = (state_39282[(19)]);
var inst_39202 = (state_39282[(26)]);
var inst_39200 = (state_39282[(25)]);
var inst_39232 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_39235 = (function (){var all_files = inst_39196;
var res_SINGLEQUOTE_ = inst_39199;
var res = inst_39200;
var files_not_loaded = inst_39202;
var dependencies_that_loaded = inst_39204;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39204,inst_39236,inst_39199,inst_39196,inst_39202,inst_39200,inst_39232,state_val_39283,c__30029__auto__,map__39128,map__39128__$1,opts,before_jsload,on_jsload,reload_dependents,map__39129,map__39129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39234){
var map__39318 = p__39234;
var map__39318__$1 = ((((!((map__39318 == null)))?((((map__39318.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39318.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39318):map__39318);
var namespace = cljs.core.get.call(null,map__39318__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39204,inst_39236,inst_39199,inst_39196,inst_39202,inst_39200,inst_39232,state_val_39283,c__30029__auto__,map__39128,map__39128__$1,opts,before_jsload,on_jsload,reload_dependents,map__39129,map__39129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39236__$1 = cljs.core.group_by.call(null,inst_39235,inst_39202);
var inst_39238 = (inst_39236__$1 == null);
var inst_39239 = cljs.core.not.call(null,inst_39238);
var state_39282__$1 = (function (){var statearr_39320 = state_39282;
(statearr_39320[(28)] = inst_39232);

(statearr_39320[(16)] = inst_39236__$1);

return statearr_39320;
})();
if(inst_39239){
var statearr_39321_39397 = state_39282__$1;
(statearr_39321_39397[(1)] = (32));

} else {
var statearr_39322_39398 = state_39282__$1;
(statearr_39322_39398[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (44))){
var inst_39258 = (state_39282[(21)]);
var inst_39271 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39258);
var inst_39272 = cljs.core.pr_str.call(null,inst_39271);
var inst_39273 = [cljs.core.str("not required: "),cljs.core.str(inst_39272)].join('');
var inst_39274 = figwheel.client.utils.log.call(null,inst_39273);
var state_39282__$1 = state_39282;
var statearr_39323_39399 = state_39282__$1;
(statearr_39323_39399[(2)] = inst_39274);

(statearr_39323_39399[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (6))){
var inst_39177 = (state_39282[(2)]);
var state_39282__$1 = state_39282;
var statearr_39324_39400 = state_39282__$1;
(statearr_39324_39400[(2)] = inst_39177);

(statearr_39324_39400[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (28))){
var inst_39202 = (state_39282[(26)]);
var inst_39229 = (state_39282[(2)]);
var inst_39230 = cljs.core.not_empty.call(null,inst_39202);
var state_39282__$1 = (function (){var statearr_39325 = state_39282;
(statearr_39325[(29)] = inst_39229);

return statearr_39325;
})();
if(cljs.core.truth_(inst_39230)){
var statearr_39326_39401 = state_39282__$1;
(statearr_39326_39401[(1)] = (29));

} else {
var statearr_39327_39402 = state_39282__$1;
(statearr_39327_39402[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (25))){
var inst_39200 = (state_39282[(25)]);
var inst_39216 = (state_39282[(2)]);
var inst_39217 = cljs.core.not_empty.call(null,inst_39200);
var state_39282__$1 = (function (){var statearr_39328 = state_39282;
(statearr_39328[(30)] = inst_39216);

return statearr_39328;
})();
if(cljs.core.truth_(inst_39217)){
var statearr_39329_39403 = state_39282__$1;
(statearr_39329_39403[(1)] = (26));

} else {
var statearr_39330_39404 = state_39282__$1;
(statearr_39330_39404[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (34))){
var inst_39251 = (state_39282[(2)]);
var state_39282__$1 = state_39282;
if(cljs.core.truth_(inst_39251)){
var statearr_39331_39405 = state_39282__$1;
(statearr_39331_39405[(1)] = (38));

} else {
var statearr_39332_39406 = state_39282__$1;
(statearr_39332_39406[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (17))){
var state_39282__$1 = state_39282;
var statearr_39333_39407 = state_39282__$1;
(statearr_39333_39407[(2)] = recompile_dependents);

(statearr_39333_39407[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (3))){
var state_39282__$1 = state_39282;
var statearr_39334_39408 = state_39282__$1;
(statearr_39334_39408[(2)] = null);

(statearr_39334_39408[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (12))){
var inst_39173 = (state_39282[(2)]);
var state_39282__$1 = state_39282;
var statearr_39335_39409 = state_39282__$1;
(statearr_39335_39409[(2)] = inst_39173);

(statearr_39335_39409[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (2))){
var inst_39135 = (state_39282[(13)]);
var inst_39142 = cljs.core.seq.call(null,inst_39135);
var inst_39143 = inst_39142;
var inst_39144 = null;
var inst_39145 = (0);
var inst_39146 = (0);
var state_39282__$1 = (function (){var statearr_39336 = state_39282;
(statearr_39336[(7)] = inst_39143);

(statearr_39336[(8)] = inst_39144);

(statearr_39336[(9)] = inst_39146);

(statearr_39336[(10)] = inst_39145);

return statearr_39336;
})();
var statearr_39337_39410 = state_39282__$1;
(statearr_39337_39410[(2)] = null);

(statearr_39337_39410[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (23))){
var inst_39204 = (state_39282[(23)]);
var inst_39199 = (state_39282[(24)]);
var inst_39196 = (state_39282[(19)]);
var inst_39202 = (state_39282[(26)]);
var inst_39200 = (state_39282[(25)]);
var inst_39207 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_39209 = (function (){var all_files = inst_39196;
var res_SINGLEQUOTE_ = inst_39199;
var res = inst_39200;
var files_not_loaded = inst_39202;
var dependencies_that_loaded = inst_39204;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39204,inst_39199,inst_39196,inst_39202,inst_39200,inst_39207,state_val_39283,c__30029__auto__,map__39128,map__39128__$1,opts,before_jsload,on_jsload,reload_dependents,map__39129,map__39129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39208){
var map__39338 = p__39208;
var map__39338__$1 = ((((!((map__39338 == null)))?((((map__39338.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39338.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39338):map__39338);
var request_url = cljs.core.get.call(null,map__39338__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39204,inst_39199,inst_39196,inst_39202,inst_39200,inst_39207,state_val_39283,c__30029__auto__,map__39128,map__39128__$1,opts,before_jsload,on_jsload,reload_dependents,map__39129,map__39129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39210 = cljs.core.reverse.call(null,inst_39204);
var inst_39211 = cljs.core.map.call(null,inst_39209,inst_39210);
var inst_39212 = cljs.core.pr_str.call(null,inst_39211);
var inst_39213 = figwheel.client.utils.log.call(null,inst_39212);
var state_39282__$1 = (function (){var statearr_39340 = state_39282;
(statearr_39340[(31)] = inst_39207);

return statearr_39340;
})();
var statearr_39341_39411 = state_39282__$1;
(statearr_39341_39411[(2)] = inst_39213);

(statearr_39341_39411[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (35))){
var state_39282__$1 = state_39282;
var statearr_39342_39412 = state_39282__$1;
(statearr_39342_39412[(2)] = true);

(statearr_39342_39412[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (19))){
var inst_39186 = (state_39282[(12)]);
var inst_39192 = figwheel.client.file_reloading.expand_files.call(null,inst_39186);
var state_39282__$1 = state_39282;
var statearr_39343_39413 = state_39282__$1;
(statearr_39343_39413[(2)] = inst_39192);

(statearr_39343_39413[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (11))){
var state_39282__$1 = state_39282;
var statearr_39344_39414 = state_39282__$1;
(statearr_39344_39414[(2)] = null);

(statearr_39344_39414[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (9))){
var inst_39175 = (state_39282[(2)]);
var state_39282__$1 = state_39282;
var statearr_39345_39415 = state_39282__$1;
(statearr_39345_39415[(2)] = inst_39175);

(statearr_39345_39415[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (5))){
var inst_39146 = (state_39282[(9)]);
var inst_39145 = (state_39282[(10)]);
var inst_39148 = (inst_39146 < inst_39145);
var inst_39149 = inst_39148;
var state_39282__$1 = state_39282;
if(cljs.core.truth_(inst_39149)){
var statearr_39346_39416 = state_39282__$1;
(statearr_39346_39416[(1)] = (7));

} else {
var statearr_39347_39417 = state_39282__$1;
(statearr_39347_39417[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (14))){
var inst_39156 = (state_39282[(22)]);
var inst_39165 = cljs.core.first.call(null,inst_39156);
var inst_39166 = figwheel.client.file_reloading.eval_body.call(null,inst_39165,opts);
var inst_39167 = cljs.core.next.call(null,inst_39156);
var inst_39143 = inst_39167;
var inst_39144 = null;
var inst_39145 = (0);
var inst_39146 = (0);
var state_39282__$1 = (function (){var statearr_39348 = state_39282;
(statearr_39348[(7)] = inst_39143);

(statearr_39348[(8)] = inst_39144);

(statearr_39348[(9)] = inst_39146);

(statearr_39348[(10)] = inst_39145);

(statearr_39348[(32)] = inst_39166);

return statearr_39348;
})();
var statearr_39349_39418 = state_39282__$1;
(statearr_39349_39418[(2)] = null);

(statearr_39349_39418[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (45))){
var state_39282__$1 = state_39282;
var statearr_39350_39419 = state_39282__$1;
(statearr_39350_39419[(2)] = null);

(statearr_39350_39419[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (26))){
var inst_39204 = (state_39282[(23)]);
var inst_39199 = (state_39282[(24)]);
var inst_39196 = (state_39282[(19)]);
var inst_39202 = (state_39282[(26)]);
var inst_39200 = (state_39282[(25)]);
var inst_39219 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_39221 = (function (){var all_files = inst_39196;
var res_SINGLEQUOTE_ = inst_39199;
var res = inst_39200;
var files_not_loaded = inst_39202;
var dependencies_that_loaded = inst_39204;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39204,inst_39199,inst_39196,inst_39202,inst_39200,inst_39219,state_val_39283,c__30029__auto__,map__39128,map__39128__$1,opts,before_jsload,on_jsload,reload_dependents,map__39129,map__39129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39220){
var map__39351 = p__39220;
var map__39351__$1 = ((((!((map__39351 == null)))?((((map__39351.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39351.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39351):map__39351);
var namespace = cljs.core.get.call(null,map__39351__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__39351__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39204,inst_39199,inst_39196,inst_39202,inst_39200,inst_39219,state_val_39283,c__30029__auto__,map__39128,map__39128__$1,opts,before_jsload,on_jsload,reload_dependents,map__39129,map__39129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39222 = cljs.core.map.call(null,inst_39221,inst_39200);
var inst_39223 = cljs.core.pr_str.call(null,inst_39222);
var inst_39224 = figwheel.client.utils.log.call(null,inst_39223);
var inst_39225 = (function (){var all_files = inst_39196;
var res_SINGLEQUOTE_ = inst_39199;
var res = inst_39200;
var files_not_loaded = inst_39202;
var dependencies_that_loaded = inst_39204;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39204,inst_39199,inst_39196,inst_39202,inst_39200,inst_39219,inst_39221,inst_39222,inst_39223,inst_39224,state_val_39283,c__30029__auto__,map__39128,map__39128__$1,opts,before_jsload,on_jsload,reload_dependents,map__39129,map__39129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39204,inst_39199,inst_39196,inst_39202,inst_39200,inst_39219,inst_39221,inst_39222,inst_39223,inst_39224,state_val_39283,c__30029__auto__,map__39128,map__39128__$1,opts,before_jsload,on_jsload,reload_dependents,map__39129,map__39129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39226 = setTimeout(inst_39225,(10));
var state_39282__$1 = (function (){var statearr_39353 = state_39282;
(statearr_39353[(33)] = inst_39219);

(statearr_39353[(34)] = inst_39224);

return statearr_39353;
})();
var statearr_39354_39420 = state_39282__$1;
(statearr_39354_39420[(2)] = inst_39226);

(statearr_39354_39420[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (16))){
var state_39282__$1 = state_39282;
var statearr_39355_39421 = state_39282__$1;
(statearr_39355_39421[(2)] = reload_dependents);

(statearr_39355_39421[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (38))){
var inst_39236 = (state_39282[(16)]);
var inst_39253 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39236);
var state_39282__$1 = state_39282;
var statearr_39356_39422 = state_39282__$1;
(statearr_39356_39422[(2)] = inst_39253);

(statearr_39356_39422[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (30))){
var state_39282__$1 = state_39282;
var statearr_39357_39423 = state_39282__$1;
(statearr_39357_39423[(2)] = null);

(statearr_39357_39423[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (10))){
var inst_39156 = (state_39282[(22)]);
var inst_39158 = cljs.core.chunked_seq_QMARK_.call(null,inst_39156);
var state_39282__$1 = state_39282;
if(inst_39158){
var statearr_39358_39424 = state_39282__$1;
(statearr_39358_39424[(1)] = (13));

} else {
var statearr_39359_39425 = state_39282__$1;
(statearr_39359_39425[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (18))){
var inst_39190 = (state_39282[(2)]);
var state_39282__$1 = state_39282;
if(cljs.core.truth_(inst_39190)){
var statearr_39360_39426 = state_39282__$1;
(statearr_39360_39426[(1)] = (19));

} else {
var statearr_39361_39427 = state_39282__$1;
(statearr_39361_39427[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (42))){
var state_39282__$1 = state_39282;
var statearr_39362_39428 = state_39282__$1;
(statearr_39362_39428[(2)] = null);

(statearr_39362_39428[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (37))){
var inst_39248 = (state_39282[(2)]);
var state_39282__$1 = state_39282;
var statearr_39363_39429 = state_39282__$1;
(statearr_39363_39429[(2)] = inst_39248);

(statearr_39363_39429[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (8))){
var inst_39156 = (state_39282[(22)]);
var inst_39143 = (state_39282[(7)]);
var inst_39156__$1 = cljs.core.seq.call(null,inst_39143);
var state_39282__$1 = (function (){var statearr_39364 = state_39282;
(statearr_39364[(22)] = inst_39156__$1);

return statearr_39364;
})();
if(inst_39156__$1){
var statearr_39365_39430 = state_39282__$1;
(statearr_39365_39430[(1)] = (10));

} else {
var statearr_39366_39431 = state_39282__$1;
(statearr_39366_39431[(1)] = (11));

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
});})(c__30029__auto__,map__39128,map__39128__$1,opts,before_jsload,on_jsload,reload_dependents,map__39129,map__39129__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29915__auto__,c__30029__auto__,map__39128,map__39128__$1,opts,before_jsload,on_jsload,reload_dependents,map__39129,map__39129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29916__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29916__auto____0 = (function (){
var statearr_39370 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39370[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29916__auto__);

(statearr_39370[(1)] = (1));

return statearr_39370;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29916__auto____1 = (function (state_39282){
while(true){
var ret_value__29917__auto__ = (function (){try{while(true){
var result__29918__auto__ = switch__29915__auto__.call(null,state_39282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29918__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29918__auto__;
}
break;
}
}catch (e39371){if((e39371 instanceof Object)){
var ex__29919__auto__ = e39371;
var statearr_39372_39432 = state_39282;
(statearr_39372_39432[(5)] = ex__29919__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39433 = state_39282;
state_39282 = G__39433;
continue;
} else {
return ret_value__29917__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29916__auto__ = function(state_39282){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29916__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29916__auto____1.call(this,state_39282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29916__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29916__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29916__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29916__auto__;
})()
;})(switch__29915__auto__,c__30029__auto__,map__39128,map__39128__$1,opts,before_jsload,on_jsload,reload_dependents,map__39129,map__39129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30031__auto__ = (function (){var statearr_39373 = f__30030__auto__.call(null);
(statearr_39373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30029__auto__);

return statearr_39373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30031__auto__);
});})(c__30029__auto__,map__39128,map__39128__$1,opts,before_jsload,on_jsload,reload_dependents,map__39129,map__39129__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30029__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__39436,link){
var map__39439 = p__39436;
var map__39439__$1 = ((((!((map__39439 == null)))?((((map__39439.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39439.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39439):map__39439);
var file = cljs.core.get.call(null,map__39439__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6503__auto__ = link.href;
if(cljs.core.truth_(temp__6503__auto__)){
var link_href = temp__6503__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6503__auto__,map__39439,map__39439__$1,file){
return (function (p1__39434_SHARP_,p2__39435_SHARP_){
if(cljs.core._EQ_.call(null,p1__39434_SHARP_,p2__39435_SHARP_)){
return p1__39434_SHARP_;
} else {
return false;
}
});})(link_href,temp__6503__auto__,map__39439,map__39439__$1,file))
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
var temp__6503__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__39445){
var map__39446 = p__39445;
var map__39446__$1 = ((((!((map__39446 == null)))?((((map__39446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39446):map__39446);
var match_length = cljs.core.get.call(null,map__39446__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__39446__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__39441_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__39441_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__6503__auto__)){
var res = temp__6503__auto__;
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
var args39448 = [];
var len__22772__auto___39451 = arguments.length;
var i__22773__auto___39452 = (0);
while(true){
if((i__22773__auto___39452 < len__22772__auto___39451)){
args39448.push((arguments[i__22773__auto___39452]));

var G__39453 = (i__22773__auto___39452 + (1));
i__22773__auto___39452 = G__39453;
continue;
} else {
}
break;
}

var G__39450 = args39448.length;
switch (G__39450) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39448.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__39455_SHARP_,p2__39456_SHARP_){
return cljs.core.assoc.call(null,p1__39455_SHARP_,cljs.core.get.call(null,p2__39456_SHARP_,key),p2__39456_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__39457){
var map__39460 = p__39457;
var map__39460__$1 = ((((!((map__39460 == null)))?((((map__39460.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39460.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39460):map__39460);
var f_data = map__39460__$1;
var file = cljs.core.get.call(null,map__39460__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6503__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6503__auto__)){
var link = temp__6503__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__39462,files_msg){
var map__39469 = p__39462;
var map__39469__$1 = ((((!((map__39469 == null)))?((((map__39469.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39469.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39469):map__39469);
var opts = map__39469__$1;
var on_cssload = cljs.core.get.call(null,map__39469__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__39471_39475 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__39472_39476 = null;
var count__39473_39477 = (0);
var i__39474_39478 = (0);
while(true){
if((i__39474_39478 < count__39473_39477)){
var f_39479 = cljs.core._nth.call(null,chunk__39472_39476,i__39474_39478);
figwheel.client.file_reloading.reload_css_file.call(null,f_39479);

var G__39480 = seq__39471_39475;
var G__39481 = chunk__39472_39476;
var G__39482 = count__39473_39477;
var G__39483 = (i__39474_39478 + (1));
seq__39471_39475 = G__39480;
chunk__39472_39476 = G__39481;
count__39473_39477 = G__39482;
i__39474_39478 = G__39483;
continue;
} else {
var temp__6503__auto___39484 = cljs.core.seq.call(null,seq__39471_39475);
if(temp__6503__auto___39484){
var seq__39471_39485__$1 = temp__6503__auto___39484;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39471_39485__$1)){
var c__22492__auto___39486 = cljs.core.chunk_first.call(null,seq__39471_39485__$1);
var G__39487 = cljs.core.chunk_rest.call(null,seq__39471_39485__$1);
var G__39488 = c__22492__auto___39486;
var G__39489 = cljs.core.count.call(null,c__22492__auto___39486);
var G__39490 = (0);
seq__39471_39475 = G__39487;
chunk__39472_39476 = G__39488;
count__39473_39477 = G__39489;
i__39474_39478 = G__39490;
continue;
} else {
var f_39491 = cljs.core.first.call(null,seq__39471_39485__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_39491);

var G__39492 = cljs.core.next.call(null,seq__39471_39485__$1);
var G__39493 = null;
var G__39494 = (0);
var G__39495 = (0);
seq__39471_39475 = G__39492;
chunk__39472_39476 = G__39493;
count__39473_39477 = G__39494;
i__39474_39478 = G__39495;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__39469,map__39469__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__39469,map__39469__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1471419424007