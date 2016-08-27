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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__38527_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__38527_SHARP_));
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
var seq__38532 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__38533 = null;
var count__38534 = (0);
var i__38535 = (0);
while(true){
if((i__38535 < count__38534)){
var n = cljs.core._nth.call(null,chunk__38533,i__38535);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38536 = seq__38532;
var G__38537 = chunk__38533;
var G__38538 = count__38534;
var G__38539 = (i__38535 + (1));
seq__38532 = G__38536;
chunk__38533 = G__38537;
count__38534 = G__38538;
i__38535 = G__38539;
continue;
} else {
var temp__6552__auto__ = cljs.core.seq.call(null,seq__38532);
if(temp__6552__auto__){
var seq__38532__$1 = temp__6552__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38532__$1)){
var c__22493__auto__ = cljs.core.chunk_first.call(null,seq__38532__$1);
var G__38540 = cljs.core.chunk_rest.call(null,seq__38532__$1);
var G__38541 = c__22493__auto__;
var G__38542 = cljs.core.count.call(null,c__22493__auto__);
var G__38543 = (0);
seq__38532 = G__38540;
chunk__38533 = G__38541;
count__38534 = G__38542;
i__38535 = G__38543;
continue;
} else {
var n = cljs.core.first.call(null,seq__38532__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38544 = cljs.core.next.call(null,seq__38532__$1);
var G__38545 = null;
var G__38546 = (0);
var G__38547 = (0);
seq__38532 = G__38544;
chunk__38533 = G__38545;
count__38534 = G__38546;
i__38535 = G__38547;
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

var seq__38598_38609 = cljs.core.seq.call(null,deps);
var chunk__38599_38610 = null;
var count__38600_38611 = (0);
var i__38601_38612 = (0);
while(true){
if((i__38601_38612 < count__38600_38611)){
var dep_38613 = cljs.core._nth.call(null,chunk__38599_38610,i__38601_38612);
topo_sort_helper_STAR_.call(null,dep_38613,(depth + (1)),state);

var G__38614 = seq__38598_38609;
var G__38615 = chunk__38599_38610;
var G__38616 = count__38600_38611;
var G__38617 = (i__38601_38612 + (1));
seq__38598_38609 = G__38614;
chunk__38599_38610 = G__38615;
count__38600_38611 = G__38616;
i__38601_38612 = G__38617;
continue;
} else {
var temp__6552__auto___38618 = cljs.core.seq.call(null,seq__38598_38609);
if(temp__6552__auto___38618){
var seq__38598_38619__$1 = temp__6552__auto___38618;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38598_38619__$1)){
var c__22493__auto___38620 = cljs.core.chunk_first.call(null,seq__38598_38619__$1);
var G__38621 = cljs.core.chunk_rest.call(null,seq__38598_38619__$1);
var G__38622 = c__22493__auto___38620;
var G__38623 = cljs.core.count.call(null,c__22493__auto___38620);
var G__38624 = (0);
seq__38598_38609 = G__38621;
chunk__38599_38610 = G__38622;
count__38600_38611 = G__38623;
i__38601_38612 = G__38624;
continue;
} else {
var dep_38625 = cljs.core.first.call(null,seq__38598_38619__$1);
topo_sort_helper_STAR_.call(null,dep_38625,(depth + (1)),state);

var G__38626 = cljs.core.next.call(null,seq__38598_38619__$1);
var G__38627 = null;
var G__38628 = (0);
var G__38629 = (0);
seq__38598_38609 = G__38626;
chunk__38599_38610 = G__38627;
count__38600_38611 = G__38628;
i__38601_38612 = G__38629;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__38602){
var vec__38606 = p__38602;
var seq__38607 = cljs.core.seq.call(null,vec__38606);
var first__38608 = cljs.core.first.call(null,seq__38607);
var seq__38607__$1 = cljs.core.next.call(null,seq__38607);
var x = first__38608;
var xs = seq__38607__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__38606,seq__38607,first__38608,seq__38607__$1,x,xs,get_deps__$1){
return (function (p1__38548_SHARP_){
return clojure.set.difference.call(null,p1__38548_SHARP_,x);
});})(vec__38606,seq__38607,first__38608,seq__38607__$1,x,xs,get_deps__$1))
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
var seq__38642 = cljs.core.seq.call(null,provides);
var chunk__38643 = null;
var count__38644 = (0);
var i__38645 = (0);
while(true){
if((i__38645 < count__38644)){
var prov = cljs.core._nth.call(null,chunk__38643,i__38645);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38646_38654 = cljs.core.seq.call(null,requires);
var chunk__38647_38655 = null;
var count__38648_38656 = (0);
var i__38649_38657 = (0);
while(true){
if((i__38649_38657 < count__38648_38656)){
var req_38658 = cljs.core._nth.call(null,chunk__38647_38655,i__38649_38657);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38658,prov);

var G__38659 = seq__38646_38654;
var G__38660 = chunk__38647_38655;
var G__38661 = count__38648_38656;
var G__38662 = (i__38649_38657 + (1));
seq__38646_38654 = G__38659;
chunk__38647_38655 = G__38660;
count__38648_38656 = G__38661;
i__38649_38657 = G__38662;
continue;
} else {
var temp__6552__auto___38663 = cljs.core.seq.call(null,seq__38646_38654);
if(temp__6552__auto___38663){
var seq__38646_38664__$1 = temp__6552__auto___38663;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38646_38664__$1)){
var c__22493__auto___38665 = cljs.core.chunk_first.call(null,seq__38646_38664__$1);
var G__38666 = cljs.core.chunk_rest.call(null,seq__38646_38664__$1);
var G__38667 = c__22493__auto___38665;
var G__38668 = cljs.core.count.call(null,c__22493__auto___38665);
var G__38669 = (0);
seq__38646_38654 = G__38666;
chunk__38647_38655 = G__38667;
count__38648_38656 = G__38668;
i__38649_38657 = G__38669;
continue;
} else {
var req_38670 = cljs.core.first.call(null,seq__38646_38664__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38670,prov);

var G__38671 = cljs.core.next.call(null,seq__38646_38664__$1);
var G__38672 = null;
var G__38673 = (0);
var G__38674 = (0);
seq__38646_38654 = G__38671;
chunk__38647_38655 = G__38672;
count__38648_38656 = G__38673;
i__38649_38657 = G__38674;
continue;
}
} else {
}
}
break;
}

var G__38675 = seq__38642;
var G__38676 = chunk__38643;
var G__38677 = count__38644;
var G__38678 = (i__38645 + (1));
seq__38642 = G__38675;
chunk__38643 = G__38676;
count__38644 = G__38677;
i__38645 = G__38678;
continue;
} else {
var temp__6552__auto__ = cljs.core.seq.call(null,seq__38642);
if(temp__6552__auto__){
var seq__38642__$1 = temp__6552__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38642__$1)){
var c__22493__auto__ = cljs.core.chunk_first.call(null,seq__38642__$1);
var G__38679 = cljs.core.chunk_rest.call(null,seq__38642__$1);
var G__38680 = c__22493__auto__;
var G__38681 = cljs.core.count.call(null,c__22493__auto__);
var G__38682 = (0);
seq__38642 = G__38679;
chunk__38643 = G__38680;
count__38644 = G__38681;
i__38645 = G__38682;
continue;
} else {
var prov = cljs.core.first.call(null,seq__38642__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38650_38683 = cljs.core.seq.call(null,requires);
var chunk__38651_38684 = null;
var count__38652_38685 = (0);
var i__38653_38686 = (0);
while(true){
if((i__38653_38686 < count__38652_38685)){
var req_38687 = cljs.core._nth.call(null,chunk__38651_38684,i__38653_38686);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38687,prov);

var G__38688 = seq__38650_38683;
var G__38689 = chunk__38651_38684;
var G__38690 = count__38652_38685;
var G__38691 = (i__38653_38686 + (1));
seq__38650_38683 = G__38688;
chunk__38651_38684 = G__38689;
count__38652_38685 = G__38690;
i__38653_38686 = G__38691;
continue;
} else {
var temp__6552__auto___38692__$1 = cljs.core.seq.call(null,seq__38650_38683);
if(temp__6552__auto___38692__$1){
var seq__38650_38693__$1 = temp__6552__auto___38692__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38650_38693__$1)){
var c__22493__auto___38694 = cljs.core.chunk_first.call(null,seq__38650_38693__$1);
var G__38695 = cljs.core.chunk_rest.call(null,seq__38650_38693__$1);
var G__38696 = c__22493__auto___38694;
var G__38697 = cljs.core.count.call(null,c__22493__auto___38694);
var G__38698 = (0);
seq__38650_38683 = G__38695;
chunk__38651_38684 = G__38696;
count__38652_38685 = G__38697;
i__38653_38686 = G__38698;
continue;
} else {
var req_38699 = cljs.core.first.call(null,seq__38650_38693__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38699,prov);

var G__38700 = cljs.core.next.call(null,seq__38650_38693__$1);
var G__38701 = null;
var G__38702 = (0);
var G__38703 = (0);
seq__38650_38683 = G__38700;
chunk__38651_38684 = G__38701;
count__38652_38685 = G__38702;
i__38653_38686 = G__38703;
continue;
}
} else {
}
}
break;
}

var G__38704 = cljs.core.next.call(null,seq__38642__$1);
var G__38705 = null;
var G__38706 = (0);
var G__38707 = (0);
seq__38642 = G__38704;
chunk__38643 = G__38705;
count__38644 = G__38706;
i__38645 = G__38707;
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
var seq__38712_38716 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__38713_38717 = null;
var count__38714_38718 = (0);
var i__38715_38719 = (0);
while(true){
if((i__38715_38719 < count__38714_38718)){
var ns_38720 = cljs.core._nth.call(null,chunk__38713_38717,i__38715_38719);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38720);

var G__38721 = seq__38712_38716;
var G__38722 = chunk__38713_38717;
var G__38723 = count__38714_38718;
var G__38724 = (i__38715_38719 + (1));
seq__38712_38716 = G__38721;
chunk__38713_38717 = G__38722;
count__38714_38718 = G__38723;
i__38715_38719 = G__38724;
continue;
} else {
var temp__6552__auto___38725 = cljs.core.seq.call(null,seq__38712_38716);
if(temp__6552__auto___38725){
var seq__38712_38726__$1 = temp__6552__auto___38725;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38712_38726__$1)){
var c__22493__auto___38727 = cljs.core.chunk_first.call(null,seq__38712_38726__$1);
var G__38728 = cljs.core.chunk_rest.call(null,seq__38712_38726__$1);
var G__38729 = c__22493__auto___38727;
var G__38730 = cljs.core.count.call(null,c__22493__auto___38727);
var G__38731 = (0);
seq__38712_38716 = G__38728;
chunk__38713_38717 = G__38729;
count__38714_38718 = G__38730;
i__38715_38719 = G__38731;
continue;
} else {
var ns_38732 = cljs.core.first.call(null,seq__38712_38726__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38732);

var G__38733 = cljs.core.next.call(null,seq__38712_38726__$1);
var G__38734 = null;
var G__38735 = (0);
var G__38736 = (0);
seq__38712_38716 = G__38733;
chunk__38713_38717 = G__38734;
count__38714_38718 = G__38735;
i__38715_38719 = G__38736;
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
var G__38737__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__38737 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38738__i = 0, G__38738__a = new Array(arguments.length -  0);
while (G__38738__i < G__38738__a.length) {G__38738__a[G__38738__i] = arguments[G__38738__i + 0]; ++G__38738__i;}
  args = new cljs.core.IndexedSeq(G__38738__a,0);
} 
return G__38737__delegate.call(this,args);};
G__38737.cljs$lang$maxFixedArity = 0;
G__38737.cljs$lang$applyTo = (function (arglist__38739){
var args = cljs.core.seq(arglist__38739);
return G__38737__delegate(args);
});
G__38737.cljs$core$IFn$_invoke$arity$variadic = G__38737__delegate;
return G__38737;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__38741 = cljs.core._EQ_;
var expr__38742 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__38741.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__38742))){
var path_parts = ((function (pred__38741,expr__38742){
return (function (p1__38740_SHARP_){
return clojure.string.split.call(null,p1__38740_SHARP_,/[\/\\]/);
});})(pred__38741,expr__38742))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__38741,expr__38742){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e38744){if((e38744 instanceof Error)){
var e = e38744;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e38744;

}
}})());
});
;})(path_parts,sep,root,pred__38741,expr__38742))
} else {
if(cljs.core.truth_(pred__38741.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__38742))){
return ((function (pred__38741,expr__38742){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__38741,expr__38742){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__38741,expr__38742))
);

return deferred.addErrback(((function (deferred,pred__38741,expr__38742){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__38741,expr__38742))
);
});
;})(pred__38741,expr__38742))
} else {
return ((function (pred__38741,expr__38742){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__38741,expr__38742))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__38745,callback){
var map__38748 = p__38745;
var map__38748__$1 = ((((!((map__38748 == null)))?((((map__38748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38748):map__38748);
var file_msg = map__38748__$1;
var request_url = cljs.core.get.call(null,map__38748__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__38748,map__38748__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__38748,map__38748__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__31971__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31971__auto__){
return (function (){
var f__31972__auto__ = (function (){var switch__31857__auto__ = ((function (c__31971__auto__){
return (function (state_38772){
var state_val_38773 = (state_38772[(1)]);
if((state_val_38773 === (7))){
var inst_38768 = (state_38772[(2)]);
var state_38772__$1 = state_38772;
var statearr_38774_38794 = state_38772__$1;
(statearr_38774_38794[(2)] = inst_38768);

(statearr_38774_38794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (1))){
var state_38772__$1 = state_38772;
var statearr_38775_38795 = state_38772__$1;
(statearr_38775_38795[(2)] = null);

(statearr_38775_38795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (4))){
var inst_38752 = (state_38772[(7)]);
var inst_38752__$1 = (state_38772[(2)]);
var state_38772__$1 = (function (){var statearr_38776 = state_38772;
(statearr_38776[(7)] = inst_38752__$1);

return statearr_38776;
})();
if(cljs.core.truth_(inst_38752__$1)){
var statearr_38777_38796 = state_38772__$1;
(statearr_38777_38796[(1)] = (5));

} else {
var statearr_38778_38797 = state_38772__$1;
(statearr_38778_38797[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (6))){
var state_38772__$1 = state_38772;
var statearr_38779_38798 = state_38772__$1;
(statearr_38779_38798[(2)] = null);

(statearr_38779_38798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (3))){
var inst_38770 = (state_38772[(2)]);
var state_38772__$1 = state_38772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38772__$1,inst_38770);
} else {
if((state_val_38773 === (2))){
var state_38772__$1 = state_38772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38772__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_38773 === (11))){
var inst_38764 = (state_38772[(2)]);
var state_38772__$1 = (function (){var statearr_38780 = state_38772;
(statearr_38780[(8)] = inst_38764);

return statearr_38780;
})();
var statearr_38781_38799 = state_38772__$1;
(statearr_38781_38799[(2)] = null);

(statearr_38781_38799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (9))){
var inst_38756 = (state_38772[(9)]);
var inst_38758 = (state_38772[(10)]);
var inst_38760 = inst_38758.call(null,inst_38756);
var state_38772__$1 = state_38772;
var statearr_38782_38800 = state_38772__$1;
(statearr_38782_38800[(2)] = inst_38760);

(statearr_38782_38800[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (5))){
var inst_38752 = (state_38772[(7)]);
var inst_38754 = figwheel.client.file_reloading.blocking_load.call(null,inst_38752);
var state_38772__$1 = state_38772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38772__$1,(8),inst_38754);
} else {
if((state_val_38773 === (10))){
var inst_38756 = (state_38772[(9)]);
var inst_38762 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_38756);
var state_38772__$1 = state_38772;
var statearr_38783_38801 = state_38772__$1;
(statearr_38783_38801[(2)] = inst_38762);

(statearr_38783_38801[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (8))){
var inst_38752 = (state_38772[(7)]);
var inst_38758 = (state_38772[(10)]);
var inst_38756 = (state_38772[(2)]);
var inst_38757 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_38758__$1 = cljs.core.get.call(null,inst_38757,inst_38752);
var state_38772__$1 = (function (){var statearr_38784 = state_38772;
(statearr_38784[(9)] = inst_38756);

(statearr_38784[(10)] = inst_38758__$1);

return statearr_38784;
})();
if(cljs.core.truth_(inst_38758__$1)){
var statearr_38785_38802 = state_38772__$1;
(statearr_38785_38802[(1)] = (9));

} else {
var statearr_38786_38803 = state_38772__$1;
(statearr_38786_38803[(1)] = (10));

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
});})(c__31971__auto__))
;
return ((function (switch__31857__auto__,c__31971__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31858__auto__ = null;
var figwheel$client$file_reloading$state_machine__31858__auto____0 = (function (){
var statearr_38790 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38790[(0)] = figwheel$client$file_reloading$state_machine__31858__auto__);

(statearr_38790[(1)] = (1));

return statearr_38790;
});
var figwheel$client$file_reloading$state_machine__31858__auto____1 = (function (state_38772){
while(true){
var ret_value__31859__auto__ = (function (){try{while(true){
var result__31860__auto__ = switch__31857__auto__.call(null,state_38772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31860__auto__;
}
break;
}
}catch (e38791){if((e38791 instanceof Object)){
var ex__31861__auto__ = e38791;
var statearr_38792_38804 = state_38772;
(statearr_38792_38804[(5)] = ex__31861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38805 = state_38772;
state_38772 = G__38805;
continue;
} else {
return ret_value__31859__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31858__auto__ = function(state_38772){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31858__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31858__auto____1.call(this,state_38772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31858__auto____0;
figwheel$client$file_reloading$state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31858__auto____1;
return figwheel$client$file_reloading$state_machine__31858__auto__;
})()
;})(switch__31857__auto__,c__31971__auto__))
})();
var state__31973__auto__ = (function (){var statearr_38793 = f__31972__auto__.call(null);
(statearr_38793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31971__auto__);

return statearr_38793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31973__auto__);
});})(c__31971__auto__))
);

return c__31971__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__38806,callback){
var map__38809 = p__38806;
var map__38809__$1 = ((((!((map__38809 == null)))?((((map__38809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38809):map__38809);
var file_msg = map__38809__$1;
var namespace = cljs.core.get.call(null,map__38809__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__38809,map__38809__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__38809,map__38809__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__38811){
var map__38814 = p__38811;
var map__38814__$1 = ((((!((map__38814 == null)))?((((map__38814.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38814.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38814):map__38814);
var file_msg = map__38814__$1;
var namespace = cljs.core.get.call(null,map__38814__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__38816,callback){
var map__38819 = p__38816;
var map__38819__$1 = ((((!((map__38819 == null)))?((((map__38819.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38819.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38819):map__38819);
var file_msg = map__38819__$1;
var request_url = cljs.core.get.call(null,map__38819__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__38819__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__31971__auto___38923 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31971__auto___38923,out){
return (function (){
var f__31972__auto__ = (function (){var switch__31857__auto__ = ((function (c__31971__auto___38923,out){
return (function (state_38905){
var state_val_38906 = (state_38905[(1)]);
if((state_val_38906 === (1))){
var inst_38879 = cljs.core.seq.call(null,files);
var inst_38880 = cljs.core.first.call(null,inst_38879);
var inst_38881 = cljs.core.next.call(null,inst_38879);
var inst_38882 = files;
var state_38905__$1 = (function (){var statearr_38907 = state_38905;
(statearr_38907[(7)] = inst_38881);

(statearr_38907[(8)] = inst_38880);

(statearr_38907[(9)] = inst_38882);

return statearr_38907;
})();
var statearr_38908_38924 = state_38905__$1;
(statearr_38908_38924[(2)] = null);

(statearr_38908_38924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38906 === (2))){
var inst_38888 = (state_38905[(10)]);
var inst_38882 = (state_38905[(9)]);
var inst_38887 = cljs.core.seq.call(null,inst_38882);
var inst_38888__$1 = cljs.core.first.call(null,inst_38887);
var inst_38889 = cljs.core.next.call(null,inst_38887);
var inst_38890 = (inst_38888__$1 == null);
var inst_38891 = cljs.core.not.call(null,inst_38890);
var state_38905__$1 = (function (){var statearr_38909 = state_38905;
(statearr_38909[(10)] = inst_38888__$1);

(statearr_38909[(11)] = inst_38889);

return statearr_38909;
})();
if(inst_38891){
var statearr_38910_38925 = state_38905__$1;
(statearr_38910_38925[(1)] = (4));

} else {
var statearr_38911_38926 = state_38905__$1;
(statearr_38911_38926[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38906 === (3))){
var inst_38903 = (state_38905[(2)]);
var state_38905__$1 = state_38905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38905__$1,inst_38903);
} else {
if((state_val_38906 === (4))){
var inst_38888 = (state_38905[(10)]);
var inst_38893 = figwheel.client.file_reloading.reload_js_file.call(null,inst_38888);
var state_38905__$1 = state_38905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38905__$1,(7),inst_38893);
} else {
if((state_val_38906 === (5))){
var inst_38899 = cljs.core.async.close_BANG_.call(null,out);
var state_38905__$1 = state_38905;
var statearr_38912_38927 = state_38905__$1;
(statearr_38912_38927[(2)] = inst_38899);

(statearr_38912_38927[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38906 === (6))){
var inst_38901 = (state_38905[(2)]);
var state_38905__$1 = state_38905;
var statearr_38913_38928 = state_38905__$1;
(statearr_38913_38928[(2)] = inst_38901);

(statearr_38913_38928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38906 === (7))){
var inst_38889 = (state_38905[(11)]);
var inst_38895 = (state_38905[(2)]);
var inst_38896 = cljs.core.async.put_BANG_.call(null,out,inst_38895);
var inst_38882 = inst_38889;
var state_38905__$1 = (function (){var statearr_38914 = state_38905;
(statearr_38914[(9)] = inst_38882);

(statearr_38914[(12)] = inst_38896);

return statearr_38914;
})();
var statearr_38915_38929 = state_38905__$1;
(statearr_38915_38929[(2)] = null);

(statearr_38915_38929[(1)] = (2));


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
});})(c__31971__auto___38923,out))
;
return ((function (switch__31857__auto__,c__31971__auto___38923,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31858__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31858__auto____0 = (function (){
var statearr_38919 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38919[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31858__auto__);

(statearr_38919[(1)] = (1));

return statearr_38919;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31858__auto____1 = (function (state_38905){
while(true){
var ret_value__31859__auto__ = (function (){try{while(true){
var result__31860__auto__ = switch__31857__auto__.call(null,state_38905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31860__auto__;
}
break;
}
}catch (e38920){if((e38920 instanceof Object)){
var ex__31861__auto__ = e38920;
var statearr_38921_38930 = state_38905;
(statearr_38921_38930[(5)] = ex__31861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38931 = state_38905;
state_38905 = G__38931;
continue;
} else {
return ret_value__31859__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31858__auto__ = function(state_38905){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31858__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31858__auto____1.call(this,state_38905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31858__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31858__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31858__auto__;
})()
;})(switch__31857__auto__,c__31971__auto___38923,out))
})();
var state__31973__auto__ = (function (){var statearr_38922 = f__31972__auto__.call(null);
(statearr_38922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31971__auto___38923);

return statearr_38922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31973__auto__);
});})(c__31971__auto___38923,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__38932,opts){
var map__38936 = p__38932;
var map__38936__$1 = ((((!((map__38936 == null)))?((((map__38936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38936):map__38936);
var eval_body__$1 = cljs.core.get.call(null,map__38936__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__38936__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e38938){var e = e38938;
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
return (function (p1__38939_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38939_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__38948){
var vec__38949 = p__38948;
var k = cljs.core.nth.call(null,vec__38949,(0),null);
var v = cljs.core.nth.call(null,vec__38949,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__38952){
var vec__38953 = p__38952;
var k = cljs.core.nth.call(null,vec__38953,(0),null);
var v = cljs.core.nth.call(null,vec__38953,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__38959,p__38960){
var map__39207 = p__38959;
var map__39207__$1 = ((((!((map__39207 == null)))?((((map__39207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39207):map__39207);
var opts = map__39207__$1;
var before_jsload = cljs.core.get.call(null,map__39207__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__39207__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__39207__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__39208 = p__38960;
var map__39208__$1 = ((((!((map__39208 == null)))?((((map__39208.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39208.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39208):map__39208);
var msg = map__39208__$1;
var files = cljs.core.get.call(null,map__39208__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__39208__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__39208__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__31971__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31971__auto__,map__39207,map__39207__$1,opts,before_jsload,on_jsload,reload_dependents,map__39208,map__39208__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__31972__auto__ = (function (){var switch__31857__auto__ = ((function (c__31971__auto__,map__39207,map__39207__$1,opts,before_jsload,on_jsload,reload_dependents,map__39208,map__39208__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_39361){
var state_val_39362 = (state_39361[(1)]);
if((state_val_39362 === (7))){
var inst_39222 = (state_39361[(7)]);
var inst_39223 = (state_39361[(8)]);
var inst_39225 = (state_39361[(9)]);
var inst_39224 = (state_39361[(10)]);
var inst_39230 = cljs.core._nth.call(null,inst_39223,inst_39225);
var inst_39231 = figwheel.client.file_reloading.eval_body.call(null,inst_39230,opts);
var inst_39232 = (inst_39225 + (1));
var tmp39363 = inst_39222;
var tmp39364 = inst_39223;
var tmp39365 = inst_39224;
var inst_39222__$1 = tmp39363;
var inst_39223__$1 = tmp39364;
var inst_39224__$1 = tmp39365;
var inst_39225__$1 = inst_39232;
var state_39361__$1 = (function (){var statearr_39366 = state_39361;
(statearr_39366[(7)] = inst_39222__$1);

(statearr_39366[(8)] = inst_39223__$1);

(statearr_39366[(9)] = inst_39225__$1);

(statearr_39366[(11)] = inst_39231);

(statearr_39366[(10)] = inst_39224__$1);

return statearr_39366;
})();
var statearr_39367_39453 = state_39361__$1;
(statearr_39367_39453[(2)] = null);

(statearr_39367_39453[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (20))){
var inst_39265 = (state_39361[(12)]);
var inst_39273 = figwheel.client.file_reloading.sort_files.call(null,inst_39265);
var state_39361__$1 = state_39361;
var statearr_39368_39454 = state_39361__$1;
(statearr_39368_39454[(2)] = inst_39273);

(statearr_39368_39454[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (27))){
var state_39361__$1 = state_39361;
var statearr_39369_39455 = state_39361__$1;
(statearr_39369_39455[(2)] = null);

(statearr_39369_39455[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (1))){
var inst_39214 = (state_39361[(13)]);
var inst_39211 = before_jsload.call(null,files);
var inst_39212 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_39213 = (function (){return ((function (inst_39214,inst_39211,inst_39212,state_val_39362,c__31971__auto__,map__39207,map__39207__$1,opts,before_jsload,on_jsload,reload_dependents,map__39208,map__39208__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38956_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38956_SHARP_);
});
;})(inst_39214,inst_39211,inst_39212,state_val_39362,c__31971__auto__,map__39207,map__39207__$1,opts,before_jsload,on_jsload,reload_dependents,map__39208,map__39208__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39214__$1 = cljs.core.filter.call(null,inst_39213,files);
var inst_39215 = cljs.core.not_empty.call(null,inst_39214__$1);
var state_39361__$1 = (function (){var statearr_39370 = state_39361;
(statearr_39370[(14)] = inst_39212);

(statearr_39370[(15)] = inst_39211);

(statearr_39370[(13)] = inst_39214__$1);

return statearr_39370;
})();
if(cljs.core.truth_(inst_39215)){
var statearr_39371_39456 = state_39361__$1;
(statearr_39371_39456[(1)] = (2));

} else {
var statearr_39372_39457 = state_39361__$1;
(statearr_39372_39457[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (24))){
var state_39361__$1 = state_39361;
var statearr_39373_39458 = state_39361__$1;
(statearr_39373_39458[(2)] = null);

(statearr_39373_39458[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (39))){
var inst_39315 = (state_39361[(16)]);
var state_39361__$1 = state_39361;
var statearr_39374_39459 = state_39361__$1;
(statearr_39374_39459[(2)] = inst_39315);

(statearr_39374_39459[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (46))){
var inst_39356 = (state_39361[(2)]);
var state_39361__$1 = state_39361;
var statearr_39375_39460 = state_39361__$1;
(statearr_39375_39460[(2)] = inst_39356);

(statearr_39375_39460[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (4))){
var inst_39259 = (state_39361[(2)]);
var inst_39260 = cljs.core.List.EMPTY;
var inst_39261 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_39260);
var inst_39262 = (function (){return ((function (inst_39259,inst_39260,inst_39261,state_val_39362,c__31971__auto__,map__39207,map__39207__$1,opts,before_jsload,on_jsload,reload_dependents,map__39208,map__39208__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38957_SHARP_){
var and__21578__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38957_SHARP_);
if(cljs.core.truth_(and__21578__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38957_SHARP_));
} else {
return and__21578__auto__;
}
});
;})(inst_39259,inst_39260,inst_39261,state_val_39362,c__31971__auto__,map__39207,map__39207__$1,opts,before_jsload,on_jsload,reload_dependents,map__39208,map__39208__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39263 = cljs.core.filter.call(null,inst_39262,files);
var inst_39264 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_39265 = cljs.core.concat.call(null,inst_39263,inst_39264);
var state_39361__$1 = (function (){var statearr_39376 = state_39361;
(statearr_39376[(17)] = inst_39259);

(statearr_39376[(12)] = inst_39265);

(statearr_39376[(18)] = inst_39261);

return statearr_39376;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_39377_39461 = state_39361__$1;
(statearr_39377_39461[(1)] = (16));

} else {
var statearr_39378_39462 = state_39361__$1;
(statearr_39378_39462[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (15))){
var inst_39249 = (state_39361[(2)]);
var state_39361__$1 = state_39361;
var statearr_39379_39463 = state_39361__$1;
(statearr_39379_39463[(2)] = inst_39249);

(statearr_39379_39463[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (21))){
var inst_39275 = (state_39361[(19)]);
var inst_39275__$1 = (state_39361[(2)]);
var inst_39276 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_39275__$1);
var state_39361__$1 = (function (){var statearr_39380 = state_39361;
(statearr_39380[(19)] = inst_39275__$1);

return statearr_39380;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39361__$1,(22),inst_39276);
} else {
if((state_val_39362 === (31))){
var inst_39359 = (state_39361[(2)]);
var state_39361__$1 = state_39361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39361__$1,inst_39359);
} else {
if((state_val_39362 === (32))){
var inst_39315 = (state_39361[(16)]);
var inst_39320 = inst_39315.cljs$lang$protocol_mask$partition0$;
var inst_39321 = (inst_39320 & (64));
var inst_39322 = inst_39315.cljs$core$ISeq$;
var inst_39323 = (inst_39321) || (inst_39322);
var state_39361__$1 = state_39361;
if(cljs.core.truth_(inst_39323)){
var statearr_39381_39464 = state_39361__$1;
(statearr_39381_39464[(1)] = (35));

} else {
var statearr_39382_39465 = state_39361__$1;
(statearr_39382_39465[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (40))){
var inst_39336 = (state_39361[(20)]);
var inst_39335 = (state_39361[(2)]);
var inst_39336__$1 = cljs.core.get.call(null,inst_39335,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_39337 = cljs.core.get.call(null,inst_39335,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_39338 = cljs.core.not_empty.call(null,inst_39336__$1);
var state_39361__$1 = (function (){var statearr_39383 = state_39361;
(statearr_39383[(20)] = inst_39336__$1);

(statearr_39383[(21)] = inst_39337);

return statearr_39383;
})();
if(cljs.core.truth_(inst_39338)){
var statearr_39384_39466 = state_39361__$1;
(statearr_39384_39466[(1)] = (41));

} else {
var statearr_39385_39467 = state_39361__$1;
(statearr_39385_39467[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (33))){
var state_39361__$1 = state_39361;
var statearr_39386_39468 = state_39361__$1;
(statearr_39386_39468[(2)] = false);

(statearr_39386_39468[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (13))){
var inst_39235 = (state_39361[(22)]);
var inst_39239 = cljs.core.chunk_first.call(null,inst_39235);
var inst_39240 = cljs.core.chunk_rest.call(null,inst_39235);
var inst_39241 = cljs.core.count.call(null,inst_39239);
var inst_39222 = inst_39240;
var inst_39223 = inst_39239;
var inst_39224 = inst_39241;
var inst_39225 = (0);
var state_39361__$1 = (function (){var statearr_39387 = state_39361;
(statearr_39387[(7)] = inst_39222);

(statearr_39387[(8)] = inst_39223);

(statearr_39387[(9)] = inst_39225);

(statearr_39387[(10)] = inst_39224);

return statearr_39387;
})();
var statearr_39388_39469 = state_39361__$1;
(statearr_39388_39469[(2)] = null);

(statearr_39388_39469[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (22))){
var inst_39283 = (state_39361[(23)]);
var inst_39278 = (state_39361[(24)]);
var inst_39279 = (state_39361[(25)]);
var inst_39275 = (state_39361[(19)]);
var inst_39278__$1 = (state_39361[(2)]);
var inst_39279__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39278__$1);
var inst_39280 = (function (){var all_files = inst_39275;
var res_SINGLEQUOTE_ = inst_39278__$1;
var res = inst_39279__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_39283,inst_39278,inst_39279,inst_39275,inst_39278__$1,inst_39279__$1,state_val_39362,c__31971__auto__,map__39207,map__39207__$1,opts,before_jsload,on_jsload,reload_dependents,map__39208,map__39208__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38958_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__38958_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_39283,inst_39278,inst_39279,inst_39275,inst_39278__$1,inst_39279__$1,state_val_39362,c__31971__auto__,map__39207,map__39207__$1,opts,before_jsload,on_jsload,reload_dependents,map__39208,map__39208__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39281 = cljs.core.filter.call(null,inst_39280,inst_39278__$1);
var inst_39282 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_39283__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39282);
var inst_39284 = cljs.core.not_empty.call(null,inst_39283__$1);
var state_39361__$1 = (function (){var statearr_39389 = state_39361;
(statearr_39389[(26)] = inst_39281);

(statearr_39389[(23)] = inst_39283__$1);

(statearr_39389[(24)] = inst_39278__$1);

(statearr_39389[(25)] = inst_39279__$1);

return statearr_39389;
})();
if(cljs.core.truth_(inst_39284)){
var statearr_39390_39470 = state_39361__$1;
(statearr_39390_39470[(1)] = (23));

} else {
var statearr_39391_39471 = state_39361__$1;
(statearr_39391_39471[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (36))){
var state_39361__$1 = state_39361;
var statearr_39392_39472 = state_39361__$1;
(statearr_39392_39472[(2)] = false);

(statearr_39392_39472[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (41))){
var inst_39336 = (state_39361[(20)]);
var inst_39340 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_39341 = cljs.core.map.call(null,inst_39340,inst_39336);
var inst_39342 = cljs.core.pr_str.call(null,inst_39341);
var inst_39343 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_39342)].join('');
var inst_39344 = figwheel.client.utils.log.call(null,inst_39343);
var state_39361__$1 = state_39361;
var statearr_39393_39473 = state_39361__$1;
(statearr_39393_39473[(2)] = inst_39344);

(statearr_39393_39473[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (43))){
var inst_39337 = (state_39361[(21)]);
var inst_39347 = (state_39361[(2)]);
var inst_39348 = cljs.core.not_empty.call(null,inst_39337);
var state_39361__$1 = (function (){var statearr_39394 = state_39361;
(statearr_39394[(27)] = inst_39347);

return statearr_39394;
})();
if(cljs.core.truth_(inst_39348)){
var statearr_39395_39474 = state_39361__$1;
(statearr_39395_39474[(1)] = (44));

} else {
var statearr_39396_39475 = state_39361__$1;
(statearr_39396_39475[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (29))){
var inst_39281 = (state_39361[(26)]);
var inst_39315 = (state_39361[(16)]);
var inst_39283 = (state_39361[(23)]);
var inst_39278 = (state_39361[(24)]);
var inst_39279 = (state_39361[(25)]);
var inst_39275 = (state_39361[(19)]);
var inst_39311 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_39314 = (function (){var all_files = inst_39275;
var res_SINGLEQUOTE_ = inst_39278;
var res = inst_39279;
var files_not_loaded = inst_39281;
var dependencies_that_loaded = inst_39283;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39281,inst_39315,inst_39283,inst_39278,inst_39279,inst_39275,inst_39311,state_val_39362,c__31971__auto__,map__39207,map__39207__$1,opts,before_jsload,on_jsload,reload_dependents,map__39208,map__39208__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39313){
var map__39397 = p__39313;
var map__39397__$1 = ((((!((map__39397 == null)))?((((map__39397.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39397.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39397):map__39397);
var namespace = cljs.core.get.call(null,map__39397__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39281,inst_39315,inst_39283,inst_39278,inst_39279,inst_39275,inst_39311,state_val_39362,c__31971__auto__,map__39207,map__39207__$1,opts,before_jsload,on_jsload,reload_dependents,map__39208,map__39208__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39315__$1 = cljs.core.group_by.call(null,inst_39314,inst_39281);
var inst_39317 = (inst_39315__$1 == null);
var inst_39318 = cljs.core.not.call(null,inst_39317);
var state_39361__$1 = (function (){var statearr_39399 = state_39361;
(statearr_39399[(16)] = inst_39315__$1);

(statearr_39399[(28)] = inst_39311);

return statearr_39399;
})();
if(inst_39318){
var statearr_39400_39476 = state_39361__$1;
(statearr_39400_39476[(1)] = (32));

} else {
var statearr_39401_39477 = state_39361__$1;
(statearr_39401_39477[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (44))){
var inst_39337 = (state_39361[(21)]);
var inst_39350 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39337);
var inst_39351 = cljs.core.pr_str.call(null,inst_39350);
var inst_39352 = [cljs.core.str("not required: "),cljs.core.str(inst_39351)].join('');
var inst_39353 = figwheel.client.utils.log.call(null,inst_39352);
var state_39361__$1 = state_39361;
var statearr_39402_39478 = state_39361__$1;
(statearr_39402_39478[(2)] = inst_39353);

(statearr_39402_39478[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (6))){
var inst_39256 = (state_39361[(2)]);
var state_39361__$1 = state_39361;
var statearr_39403_39479 = state_39361__$1;
(statearr_39403_39479[(2)] = inst_39256);

(statearr_39403_39479[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (28))){
var inst_39281 = (state_39361[(26)]);
var inst_39308 = (state_39361[(2)]);
var inst_39309 = cljs.core.not_empty.call(null,inst_39281);
var state_39361__$1 = (function (){var statearr_39404 = state_39361;
(statearr_39404[(29)] = inst_39308);

return statearr_39404;
})();
if(cljs.core.truth_(inst_39309)){
var statearr_39405_39480 = state_39361__$1;
(statearr_39405_39480[(1)] = (29));

} else {
var statearr_39406_39481 = state_39361__$1;
(statearr_39406_39481[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (25))){
var inst_39279 = (state_39361[(25)]);
var inst_39295 = (state_39361[(2)]);
var inst_39296 = cljs.core.not_empty.call(null,inst_39279);
var state_39361__$1 = (function (){var statearr_39407 = state_39361;
(statearr_39407[(30)] = inst_39295);

return statearr_39407;
})();
if(cljs.core.truth_(inst_39296)){
var statearr_39408_39482 = state_39361__$1;
(statearr_39408_39482[(1)] = (26));

} else {
var statearr_39409_39483 = state_39361__$1;
(statearr_39409_39483[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (34))){
var inst_39330 = (state_39361[(2)]);
var state_39361__$1 = state_39361;
if(cljs.core.truth_(inst_39330)){
var statearr_39410_39484 = state_39361__$1;
(statearr_39410_39484[(1)] = (38));

} else {
var statearr_39411_39485 = state_39361__$1;
(statearr_39411_39485[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (17))){
var state_39361__$1 = state_39361;
var statearr_39412_39486 = state_39361__$1;
(statearr_39412_39486[(2)] = recompile_dependents);

(statearr_39412_39486[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (3))){
var state_39361__$1 = state_39361;
var statearr_39413_39487 = state_39361__$1;
(statearr_39413_39487[(2)] = null);

(statearr_39413_39487[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (12))){
var inst_39252 = (state_39361[(2)]);
var state_39361__$1 = state_39361;
var statearr_39414_39488 = state_39361__$1;
(statearr_39414_39488[(2)] = inst_39252);

(statearr_39414_39488[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (2))){
var inst_39214 = (state_39361[(13)]);
var inst_39221 = cljs.core.seq.call(null,inst_39214);
var inst_39222 = inst_39221;
var inst_39223 = null;
var inst_39224 = (0);
var inst_39225 = (0);
var state_39361__$1 = (function (){var statearr_39415 = state_39361;
(statearr_39415[(7)] = inst_39222);

(statearr_39415[(8)] = inst_39223);

(statearr_39415[(9)] = inst_39225);

(statearr_39415[(10)] = inst_39224);

return statearr_39415;
})();
var statearr_39416_39489 = state_39361__$1;
(statearr_39416_39489[(2)] = null);

(statearr_39416_39489[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (23))){
var inst_39281 = (state_39361[(26)]);
var inst_39283 = (state_39361[(23)]);
var inst_39278 = (state_39361[(24)]);
var inst_39279 = (state_39361[(25)]);
var inst_39275 = (state_39361[(19)]);
var inst_39286 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_39288 = (function (){var all_files = inst_39275;
var res_SINGLEQUOTE_ = inst_39278;
var res = inst_39279;
var files_not_loaded = inst_39281;
var dependencies_that_loaded = inst_39283;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39281,inst_39283,inst_39278,inst_39279,inst_39275,inst_39286,state_val_39362,c__31971__auto__,map__39207,map__39207__$1,opts,before_jsload,on_jsload,reload_dependents,map__39208,map__39208__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39287){
var map__39417 = p__39287;
var map__39417__$1 = ((((!((map__39417 == null)))?((((map__39417.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39417.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39417):map__39417);
var request_url = cljs.core.get.call(null,map__39417__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39281,inst_39283,inst_39278,inst_39279,inst_39275,inst_39286,state_val_39362,c__31971__auto__,map__39207,map__39207__$1,opts,before_jsload,on_jsload,reload_dependents,map__39208,map__39208__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39289 = cljs.core.reverse.call(null,inst_39283);
var inst_39290 = cljs.core.map.call(null,inst_39288,inst_39289);
var inst_39291 = cljs.core.pr_str.call(null,inst_39290);
var inst_39292 = figwheel.client.utils.log.call(null,inst_39291);
var state_39361__$1 = (function (){var statearr_39419 = state_39361;
(statearr_39419[(31)] = inst_39286);

return statearr_39419;
})();
var statearr_39420_39490 = state_39361__$1;
(statearr_39420_39490[(2)] = inst_39292);

(statearr_39420_39490[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (35))){
var state_39361__$1 = state_39361;
var statearr_39421_39491 = state_39361__$1;
(statearr_39421_39491[(2)] = true);

(statearr_39421_39491[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (19))){
var inst_39265 = (state_39361[(12)]);
var inst_39271 = figwheel.client.file_reloading.expand_files.call(null,inst_39265);
var state_39361__$1 = state_39361;
var statearr_39422_39492 = state_39361__$1;
(statearr_39422_39492[(2)] = inst_39271);

(statearr_39422_39492[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (11))){
var state_39361__$1 = state_39361;
var statearr_39423_39493 = state_39361__$1;
(statearr_39423_39493[(2)] = null);

(statearr_39423_39493[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (9))){
var inst_39254 = (state_39361[(2)]);
var state_39361__$1 = state_39361;
var statearr_39424_39494 = state_39361__$1;
(statearr_39424_39494[(2)] = inst_39254);

(statearr_39424_39494[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (5))){
var inst_39225 = (state_39361[(9)]);
var inst_39224 = (state_39361[(10)]);
var inst_39227 = (inst_39225 < inst_39224);
var inst_39228 = inst_39227;
var state_39361__$1 = state_39361;
if(cljs.core.truth_(inst_39228)){
var statearr_39425_39495 = state_39361__$1;
(statearr_39425_39495[(1)] = (7));

} else {
var statearr_39426_39496 = state_39361__$1;
(statearr_39426_39496[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (14))){
var inst_39235 = (state_39361[(22)]);
var inst_39244 = cljs.core.first.call(null,inst_39235);
var inst_39245 = figwheel.client.file_reloading.eval_body.call(null,inst_39244,opts);
var inst_39246 = cljs.core.next.call(null,inst_39235);
var inst_39222 = inst_39246;
var inst_39223 = null;
var inst_39224 = (0);
var inst_39225 = (0);
var state_39361__$1 = (function (){var statearr_39427 = state_39361;
(statearr_39427[(32)] = inst_39245);

(statearr_39427[(7)] = inst_39222);

(statearr_39427[(8)] = inst_39223);

(statearr_39427[(9)] = inst_39225);

(statearr_39427[(10)] = inst_39224);

return statearr_39427;
})();
var statearr_39428_39497 = state_39361__$1;
(statearr_39428_39497[(2)] = null);

(statearr_39428_39497[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (45))){
var state_39361__$1 = state_39361;
var statearr_39429_39498 = state_39361__$1;
(statearr_39429_39498[(2)] = null);

(statearr_39429_39498[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (26))){
var inst_39281 = (state_39361[(26)]);
var inst_39283 = (state_39361[(23)]);
var inst_39278 = (state_39361[(24)]);
var inst_39279 = (state_39361[(25)]);
var inst_39275 = (state_39361[(19)]);
var inst_39298 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_39300 = (function (){var all_files = inst_39275;
var res_SINGLEQUOTE_ = inst_39278;
var res = inst_39279;
var files_not_loaded = inst_39281;
var dependencies_that_loaded = inst_39283;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39281,inst_39283,inst_39278,inst_39279,inst_39275,inst_39298,state_val_39362,c__31971__auto__,map__39207,map__39207__$1,opts,before_jsload,on_jsload,reload_dependents,map__39208,map__39208__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39299){
var map__39430 = p__39299;
var map__39430__$1 = ((((!((map__39430 == null)))?((((map__39430.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39430.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39430):map__39430);
var namespace = cljs.core.get.call(null,map__39430__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__39430__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39281,inst_39283,inst_39278,inst_39279,inst_39275,inst_39298,state_val_39362,c__31971__auto__,map__39207,map__39207__$1,opts,before_jsload,on_jsload,reload_dependents,map__39208,map__39208__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39301 = cljs.core.map.call(null,inst_39300,inst_39279);
var inst_39302 = cljs.core.pr_str.call(null,inst_39301);
var inst_39303 = figwheel.client.utils.log.call(null,inst_39302);
var inst_39304 = (function (){var all_files = inst_39275;
var res_SINGLEQUOTE_ = inst_39278;
var res = inst_39279;
var files_not_loaded = inst_39281;
var dependencies_that_loaded = inst_39283;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39281,inst_39283,inst_39278,inst_39279,inst_39275,inst_39298,inst_39300,inst_39301,inst_39302,inst_39303,state_val_39362,c__31971__auto__,map__39207,map__39207__$1,opts,before_jsload,on_jsload,reload_dependents,map__39208,map__39208__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39281,inst_39283,inst_39278,inst_39279,inst_39275,inst_39298,inst_39300,inst_39301,inst_39302,inst_39303,state_val_39362,c__31971__auto__,map__39207,map__39207__$1,opts,before_jsload,on_jsload,reload_dependents,map__39208,map__39208__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39305 = setTimeout(inst_39304,(10));
var state_39361__$1 = (function (){var statearr_39432 = state_39361;
(statearr_39432[(33)] = inst_39303);

(statearr_39432[(34)] = inst_39298);

return statearr_39432;
})();
var statearr_39433_39499 = state_39361__$1;
(statearr_39433_39499[(2)] = inst_39305);

(statearr_39433_39499[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (16))){
var state_39361__$1 = state_39361;
var statearr_39434_39500 = state_39361__$1;
(statearr_39434_39500[(2)] = reload_dependents);

(statearr_39434_39500[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (38))){
var inst_39315 = (state_39361[(16)]);
var inst_39332 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39315);
var state_39361__$1 = state_39361;
var statearr_39435_39501 = state_39361__$1;
(statearr_39435_39501[(2)] = inst_39332);

(statearr_39435_39501[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (30))){
var state_39361__$1 = state_39361;
var statearr_39436_39502 = state_39361__$1;
(statearr_39436_39502[(2)] = null);

(statearr_39436_39502[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (10))){
var inst_39235 = (state_39361[(22)]);
var inst_39237 = cljs.core.chunked_seq_QMARK_.call(null,inst_39235);
var state_39361__$1 = state_39361;
if(inst_39237){
var statearr_39437_39503 = state_39361__$1;
(statearr_39437_39503[(1)] = (13));

} else {
var statearr_39438_39504 = state_39361__$1;
(statearr_39438_39504[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (18))){
var inst_39269 = (state_39361[(2)]);
var state_39361__$1 = state_39361;
if(cljs.core.truth_(inst_39269)){
var statearr_39439_39505 = state_39361__$1;
(statearr_39439_39505[(1)] = (19));

} else {
var statearr_39440_39506 = state_39361__$1;
(statearr_39440_39506[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (42))){
var state_39361__$1 = state_39361;
var statearr_39441_39507 = state_39361__$1;
(statearr_39441_39507[(2)] = null);

(statearr_39441_39507[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (37))){
var inst_39327 = (state_39361[(2)]);
var state_39361__$1 = state_39361;
var statearr_39442_39508 = state_39361__$1;
(statearr_39442_39508[(2)] = inst_39327);

(statearr_39442_39508[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39362 === (8))){
var inst_39222 = (state_39361[(7)]);
var inst_39235 = (state_39361[(22)]);
var inst_39235__$1 = cljs.core.seq.call(null,inst_39222);
var state_39361__$1 = (function (){var statearr_39443 = state_39361;
(statearr_39443[(22)] = inst_39235__$1);

return statearr_39443;
})();
if(inst_39235__$1){
var statearr_39444_39509 = state_39361__$1;
(statearr_39444_39509[(1)] = (10));

} else {
var statearr_39445_39510 = state_39361__$1;
(statearr_39445_39510[(1)] = (11));

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
});})(c__31971__auto__,map__39207,map__39207__$1,opts,before_jsload,on_jsload,reload_dependents,map__39208,map__39208__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31857__auto__,c__31971__auto__,map__39207,map__39207__$1,opts,before_jsload,on_jsload,reload_dependents,map__39208,map__39208__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31858__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31858__auto____0 = (function (){
var statearr_39449 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39449[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31858__auto__);

(statearr_39449[(1)] = (1));

return statearr_39449;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31858__auto____1 = (function (state_39361){
while(true){
var ret_value__31859__auto__ = (function (){try{while(true){
var result__31860__auto__ = switch__31857__auto__.call(null,state_39361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31860__auto__;
}
break;
}
}catch (e39450){if((e39450 instanceof Object)){
var ex__31861__auto__ = e39450;
var statearr_39451_39511 = state_39361;
(statearr_39451_39511[(5)] = ex__31861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39512 = state_39361;
state_39361 = G__39512;
continue;
} else {
return ret_value__31859__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31858__auto__ = function(state_39361){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31858__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31858__auto____1.call(this,state_39361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31858__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31858__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31858__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31858__auto__;
})()
;})(switch__31857__auto__,c__31971__auto__,map__39207,map__39207__$1,opts,before_jsload,on_jsload,reload_dependents,map__39208,map__39208__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__31973__auto__ = (function (){var statearr_39452 = f__31972__auto__.call(null);
(statearr_39452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31971__auto__);

return statearr_39452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31973__auto__);
});})(c__31971__auto__,map__39207,map__39207__$1,opts,before_jsload,on_jsload,reload_dependents,map__39208,map__39208__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__31971__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__39515,link){
var map__39518 = p__39515;
var map__39518__$1 = ((((!((map__39518 == null)))?((((map__39518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39518):map__39518);
var file = cljs.core.get.call(null,map__39518__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6552__auto__ = link.href;
if(cljs.core.truth_(temp__6552__auto__)){
var link_href = temp__6552__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6552__auto__,map__39518,map__39518__$1,file){
return (function (p1__39513_SHARP_,p2__39514_SHARP_){
if(cljs.core._EQ_.call(null,p1__39513_SHARP_,p2__39514_SHARP_)){
return p1__39513_SHARP_;
} else {
return false;
}
});})(link_href,temp__6552__auto__,map__39518,map__39518__$1,file))
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
var temp__6552__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__39524){
var map__39525 = p__39524;
var map__39525__$1 = ((((!((map__39525 == null)))?((((map__39525.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39525.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39525):map__39525);
var match_length = cljs.core.get.call(null,map__39525__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__39525__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__39520_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__39520_SHARP_);
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
var args39527 = [];
var len__22773__auto___39530 = arguments.length;
var i__22774__auto___39531 = (0);
while(true){
if((i__22774__auto___39531 < len__22773__auto___39530)){
args39527.push((arguments[i__22774__auto___39531]));

var G__39532 = (i__22774__auto___39531 + (1));
i__22774__auto___39531 = G__39532;
continue;
} else {
}
break;
}

var G__39529 = args39527.length;
switch (G__39529) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39527.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__39534_SHARP_,p2__39535_SHARP_){
return cljs.core.assoc.call(null,p1__39534_SHARP_,cljs.core.get.call(null,p2__39535_SHARP_,key),p2__39535_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__39536){
var map__39539 = p__39536;
var map__39539__$1 = ((((!((map__39539 == null)))?((((map__39539.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39539.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39539):map__39539);
var f_data = map__39539__$1;
var file = cljs.core.get.call(null,map__39539__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6552__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6552__auto__)){
var link = temp__6552__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__39541,files_msg){
var map__39548 = p__39541;
var map__39548__$1 = ((((!((map__39548 == null)))?((((map__39548.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39548.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39548):map__39548);
var opts = map__39548__$1;
var on_cssload = cljs.core.get.call(null,map__39548__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__39550_39554 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__39551_39555 = null;
var count__39552_39556 = (0);
var i__39553_39557 = (0);
while(true){
if((i__39553_39557 < count__39552_39556)){
var f_39558 = cljs.core._nth.call(null,chunk__39551_39555,i__39553_39557);
figwheel.client.file_reloading.reload_css_file.call(null,f_39558);

var G__39559 = seq__39550_39554;
var G__39560 = chunk__39551_39555;
var G__39561 = count__39552_39556;
var G__39562 = (i__39553_39557 + (1));
seq__39550_39554 = G__39559;
chunk__39551_39555 = G__39560;
count__39552_39556 = G__39561;
i__39553_39557 = G__39562;
continue;
} else {
var temp__6552__auto___39563 = cljs.core.seq.call(null,seq__39550_39554);
if(temp__6552__auto___39563){
var seq__39550_39564__$1 = temp__6552__auto___39563;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39550_39564__$1)){
var c__22493__auto___39565 = cljs.core.chunk_first.call(null,seq__39550_39564__$1);
var G__39566 = cljs.core.chunk_rest.call(null,seq__39550_39564__$1);
var G__39567 = c__22493__auto___39565;
var G__39568 = cljs.core.count.call(null,c__22493__auto___39565);
var G__39569 = (0);
seq__39550_39554 = G__39566;
chunk__39551_39555 = G__39567;
count__39552_39556 = G__39568;
i__39553_39557 = G__39569;
continue;
} else {
var f_39570 = cljs.core.first.call(null,seq__39550_39564__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_39570);

var G__39571 = cljs.core.next.call(null,seq__39550_39564__$1);
var G__39572 = null;
var G__39573 = (0);
var G__39574 = (0);
seq__39550_39554 = G__39571;
chunk__39551_39555 = G__39572;
count__39552_39556 = G__39573;
i__39553_39557 = G__39574;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__39548,map__39548__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__39548,map__39548__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1472129946421