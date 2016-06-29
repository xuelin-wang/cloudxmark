// Compiled by ClojureScript 1.9.89 {}
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
var or__21434__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__21434__auto__){
return or__21434__auto__;
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
var or__21434__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31697_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31697_SHARP_));
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
var seq__31702 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__31703 = null;
var count__31704 = (0);
var i__31705 = (0);
while(true){
if((i__31705 < count__31704)){
var n = cljs.core._nth.call(null,chunk__31703,i__31705);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__31706 = seq__31702;
var G__31707 = chunk__31703;
var G__31708 = count__31704;
var G__31709 = (i__31705 + (1));
seq__31702 = G__31706;
chunk__31703 = G__31707;
count__31704 = G__31708;
i__31705 = G__31709;
continue;
} else {
var temp__6369__auto__ = cljs.core.seq.call(null,seq__31702);
if(temp__6369__auto__){
var seq__31702__$1 = temp__6369__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31702__$1)){
var c__22337__auto__ = cljs.core.chunk_first.call(null,seq__31702__$1);
var G__31710 = cljs.core.chunk_rest.call(null,seq__31702__$1);
var G__31711 = c__22337__auto__;
var G__31712 = cljs.core.count.call(null,c__22337__auto__);
var G__31713 = (0);
seq__31702 = G__31710;
chunk__31703 = G__31711;
count__31704 = G__31712;
i__31705 = G__31713;
continue;
} else {
var n = cljs.core.first.call(null,seq__31702__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__31714 = cljs.core.next.call(null,seq__31702__$1);
var G__31715 = null;
var G__31716 = (0);
var G__31717 = (0);
seq__31702 = G__31714;
chunk__31703 = G__31715;
count__31704 = G__31716;
i__31705 = G__31717;
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

var seq__31768_31779 = cljs.core.seq.call(null,deps);
var chunk__31769_31780 = null;
var count__31770_31781 = (0);
var i__31771_31782 = (0);
while(true){
if((i__31771_31782 < count__31770_31781)){
var dep_31783 = cljs.core._nth.call(null,chunk__31769_31780,i__31771_31782);
topo_sort_helper_STAR_.call(null,dep_31783,(depth + (1)),state);

var G__31784 = seq__31768_31779;
var G__31785 = chunk__31769_31780;
var G__31786 = count__31770_31781;
var G__31787 = (i__31771_31782 + (1));
seq__31768_31779 = G__31784;
chunk__31769_31780 = G__31785;
count__31770_31781 = G__31786;
i__31771_31782 = G__31787;
continue;
} else {
var temp__6369__auto___31788 = cljs.core.seq.call(null,seq__31768_31779);
if(temp__6369__auto___31788){
var seq__31768_31789__$1 = temp__6369__auto___31788;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31768_31789__$1)){
var c__22337__auto___31790 = cljs.core.chunk_first.call(null,seq__31768_31789__$1);
var G__31791 = cljs.core.chunk_rest.call(null,seq__31768_31789__$1);
var G__31792 = c__22337__auto___31790;
var G__31793 = cljs.core.count.call(null,c__22337__auto___31790);
var G__31794 = (0);
seq__31768_31779 = G__31791;
chunk__31769_31780 = G__31792;
count__31770_31781 = G__31793;
i__31771_31782 = G__31794;
continue;
} else {
var dep_31795 = cljs.core.first.call(null,seq__31768_31789__$1);
topo_sort_helper_STAR_.call(null,dep_31795,(depth + (1)),state);

var G__31796 = cljs.core.next.call(null,seq__31768_31789__$1);
var G__31797 = null;
var G__31798 = (0);
var G__31799 = (0);
seq__31768_31779 = G__31796;
chunk__31769_31780 = G__31797;
count__31770_31781 = G__31798;
i__31771_31782 = G__31799;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31772){
var vec__31776 = p__31772;
var seq__31777 = cljs.core.seq.call(null,vec__31776);
var first__31778 = cljs.core.first.call(null,seq__31777);
var seq__31777__$1 = cljs.core.next.call(null,seq__31777);
var x = first__31778;
var xs = seq__31777__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__31776,seq__31777,first__31778,seq__31777__$1,x,xs,get_deps__$1){
return (function (p1__31718_SHARP_){
return clojure.set.difference.call(null,p1__31718_SHARP_,x);
});})(vec__31776,seq__31777,first__31778,seq__31777__$1,x,xs,get_deps__$1))
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
var seq__31812 = cljs.core.seq.call(null,provides);
var chunk__31813 = null;
var count__31814 = (0);
var i__31815 = (0);
while(true){
if((i__31815 < count__31814)){
var prov = cljs.core._nth.call(null,chunk__31813,i__31815);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31816_31824 = cljs.core.seq.call(null,requires);
var chunk__31817_31825 = null;
var count__31818_31826 = (0);
var i__31819_31827 = (0);
while(true){
if((i__31819_31827 < count__31818_31826)){
var req_31828 = cljs.core._nth.call(null,chunk__31817_31825,i__31819_31827);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31828,prov);

var G__31829 = seq__31816_31824;
var G__31830 = chunk__31817_31825;
var G__31831 = count__31818_31826;
var G__31832 = (i__31819_31827 + (1));
seq__31816_31824 = G__31829;
chunk__31817_31825 = G__31830;
count__31818_31826 = G__31831;
i__31819_31827 = G__31832;
continue;
} else {
var temp__6369__auto___31833 = cljs.core.seq.call(null,seq__31816_31824);
if(temp__6369__auto___31833){
var seq__31816_31834__$1 = temp__6369__auto___31833;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31816_31834__$1)){
var c__22337__auto___31835 = cljs.core.chunk_first.call(null,seq__31816_31834__$1);
var G__31836 = cljs.core.chunk_rest.call(null,seq__31816_31834__$1);
var G__31837 = c__22337__auto___31835;
var G__31838 = cljs.core.count.call(null,c__22337__auto___31835);
var G__31839 = (0);
seq__31816_31824 = G__31836;
chunk__31817_31825 = G__31837;
count__31818_31826 = G__31838;
i__31819_31827 = G__31839;
continue;
} else {
var req_31840 = cljs.core.first.call(null,seq__31816_31834__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31840,prov);

var G__31841 = cljs.core.next.call(null,seq__31816_31834__$1);
var G__31842 = null;
var G__31843 = (0);
var G__31844 = (0);
seq__31816_31824 = G__31841;
chunk__31817_31825 = G__31842;
count__31818_31826 = G__31843;
i__31819_31827 = G__31844;
continue;
}
} else {
}
}
break;
}

var G__31845 = seq__31812;
var G__31846 = chunk__31813;
var G__31847 = count__31814;
var G__31848 = (i__31815 + (1));
seq__31812 = G__31845;
chunk__31813 = G__31846;
count__31814 = G__31847;
i__31815 = G__31848;
continue;
} else {
var temp__6369__auto__ = cljs.core.seq.call(null,seq__31812);
if(temp__6369__auto__){
var seq__31812__$1 = temp__6369__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31812__$1)){
var c__22337__auto__ = cljs.core.chunk_first.call(null,seq__31812__$1);
var G__31849 = cljs.core.chunk_rest.call(null,seq__31812__$1);
var G__31850 = c__22337__auto__;
var G__31851 = cljs.core.count.call(null,c__22337__auto__);
var G__31852 = (0);
seq__31812 = G__31849;
chunk__31813 = G__31850;
count__31814 = G__31851;
i__31815 = G__31852;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31812__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31820_31853 = cljs.core.seq.call(null,requires);
var chunk__31821_31854 = null;
var count__31822_31855 = (0);
var i__31823_31856 = (0);
while(true){
if((i__31823_31856 < count__31822_31855)){
var req_31857 = cljs.core._nth.call(null,chunk__31821_31854,i__31823_31856);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31857,prov);

var G__31858 = seq__31820_31853;
var G__31859 = chunk__31821_31854;
var G__31860 = count__31822_31855;
var G__31861 = (i__31823_31856 + (1));
seq__31820_31853 = G__31858;
chunk__31821_31854 = G__31859;
count__31822_31855 = G__31860;
i__31823_31856 = G__31861;
continue;
} else {
var temp__6369__auto___31862__$1 = cljs.core.seq.call(null,seq__31820_31853);
if(temp__6369__auto___31862__$1){
var seq__31820_31863__$1 = temp__6369__auto___31862__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31820_31863__$1)){
var c__22337__auto___31864 = cljs.core.chunk_first.call(null,seq__31820_31863__$1);
var G__31865 = cljs.core.chunk_rest.call(null,seq__31820_31863__$1);
var G__31866 = c__22337__auto___31864;
var G__31867 = cljs.core.count.call(null,c__22337__auto___31864);
var G__31868 = (0);
seq__31820_31853 = G__31865;
chunk__31821_31854 = G__31866;
count__31822_31855 = G__31867;
i__31823_31856 = G__31868;
continue;
} else {
var req_31869 = cljs.core.first.call(null,seq__31820_31863__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31869,prov);

var G__31870 = cljs.core.next.call(null,seq__31820_31863__$1);
var G__31871 = null;
var G__31872 = (0);
var G__31873 = (0);
seq__31820_31853 = G__31870;
chunk__31821_31854 = G__31871;
count__31822_31855 = G__31872;
i__31823_31856 = G__31873;
continue;
}
} else {
}
}
break;
}

var G__31874 = cljs.core.next.call(null,seq__31812__$1);
var G__31875 = null;
var G__31876 = (0);
var G__31877 = (0);
seq__31812 = G__31874;
chunk__31813 = G__31875;
count__31814 = G__31876;
i__31815 = G__31877;
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
var seq__31882_31886 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__31883_31887 = null;
var count__31884_31888 = (0);
var i__31885_31889 = (0);
while(true){
if((i__31885_31889 < count__31884_31888)){
var ns_31890 = cljs.core._nth.call(null,chunk__31883_31887,i__31885_31889);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31890);

var G__31891 = seq__31882_31886;
var G__31892 = chunk__31883_31887;
var G__31893 = count__31884_31888;
var G__31894 = (i__31885_31889 + (1));
seq__31882_31886 = G__31891;
chunk__31883_31887 = G__31892;
count__31884_31888 = G__31893;
i__31885_31889 = G__31894;
continue;
} else {
var temp__6369__auto___31895 = cljs.core.seq.call(null,seq__31882_31886);
if(temp__6369__auto___31895){
var seq__31882_31896__$1 = temp__6369__auto___31895;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31882_31896__$1)){
var c__22337__auto___31897 = cljs.core.chunk_first.call(null,seq__31882_31896__$1);
var G__31898 = cljs.core.chunk_rest.call(null,seq__31882_31896__$1);
var G__31899 = c__22337__auto___31897;
var G__31900 = cljs.core.count.call(null,c__22337__auto___31897);
var G__31901 = (0);
seq__31882_31886 = G__31898;
chunk__31883_31887 = G__31899;
count__31884_31888 = G__31900;
i__31885_31889 = G__31901;
continue;
} else {
var ns_31902 = cljs.core.first.call(null,seq__31882_31896__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31902);

var G__31903 = cljs.core.next.call(null,seq__31882_31896__$1);
var G__31904 = null;
var G__31905 = (0);
var G__31906 = (0);
seq__31882_31886 = G__31903;
chunk__31883_31887 = G__31904;
count__31884_31888 = G__31905;
i__31885_31889 = G__31906;
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
goog.require_figwheel_backup_ = (function (){var or__21434__auto__ = goog.require__;
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
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
var G__31907__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__31907 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31908__i = 0, G__31908__a = new Array(arguments.length -  0);
while (G__31908__i < G__31908__a.length) {G__31908__a[G__31908__i] = arguments[G__31908__i + 0]; ++G__31908__i;}
  args = new cljs.core.IndexedSeq(G__31908__a,0);
} 
return G__31907__delegate.call(this,args);};
G__31907.cljs$lang$maxFixedArity = 0;
G__31907.cljs$lang$applyTo = (function (arglist__31909){
var args = cljs.core.seq(arglist__31909);
return G__31907__delegate(args);
});
G__31907.cljs$core$IFn$_invoke$arity$variadic = G__31907__delegate;
return G__31907;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__31911 = cljs.core._EQ_;
var expr__31912 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__31911.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__31912))){
var path_parts = ((function (pred__31911,expr__31912){
return (function (p1__31910_SHARP_){
return clojure.string.split.call(null,p1__31910_SHARP_,/[\/\\]/);
});})(pred__31911,expr__31912))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__31911,expr__31912){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e31914){if((e31914 instanceof Error)){
var e = e31914;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31914;

}
}})());
});
;})(path_parts,sep,root,pred__31911,expr__31912))
} else {
if(cljs.core.truth_(pred__31911.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__31912))){
return ((function (pred__31911,expr__31912){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__31911,expr__31912){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__31911,expr__31912))
);

return deferred.addErrback(((function (deferred,pred__31911,expr__31912){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__31911,expr__31912))
);
});
;})(pred__31911,expr__31912))
} else {
return ((function (pred__31911,expr__31912){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__31911,expr__31912))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31915,callback){
var map__31918 = p__31915;
var map__31918__$1 = ((((!((map__31918 == null)))?((((map__31918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31918):map__31918);
var file_msg = map__31918__$1;
var request_url = cljs.core.get.call(null,map__31918__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__31918,map__31918__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31918,map__31918__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__25730__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25730__auto__){
return (function (){
var f__25731__auto__ = (function (){var switch__25616__auto__ = ((function (c__25730__auto__){
return (function (state_31942){
var state_val_31943 = (state_31942[(1)]);
if((state_val_31943 === (7))){
var inst_31938 = (state_31942[(2)]);
var state_31942__$1 = state_31942;
var statearr_31944_31964 = state_31942__$1;
(statearr_31944_31964[(2)] = inst_31938);

(statearr_31944_31964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31943 === (1))){
var state_31942__$1 = state_31942;
var statearr_31945_31965 = state_31942__$1;
(statearr_31945_31965[(2)] = null);

(statearr_31945_31965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31943 === (4))){
var inst_31922 = (state_31942[(7)]);
var inst_31922__$1 = (state_31942[(2)]);
var state_31942__$1 = (function (){var statearr_31946 = state_31942;
(statearr_31946[(7)] = inst_31922__$1);

return statearr_31946;
})();
if(cljs.core.truth_(inst_31922__$1)){
var statearr_31947_31966 = state_31942__$1;
(statearr_31947_31966[(1)] = (5));

} else {
var statearr_31948_31967 = state_31942__$1;
(statearr_31948_31967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31943 === (6))){
var state_31942__$1 = state_31942;
var statearr_31949_31968 = state_31942__$1;
(statearr_31949_31968[(2)] = null);

(statearr_31949_31968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31943 === (3))){
var inst_31940 = (state_31942[(2)]);
var state_31942__$1 = state_31942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31942__$1,inst_31940);
} else {
if((state_val_31943 === (2))){
var state_31942__$1 = state_31942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31942__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_31943 === (11))){
var inst_31934 = (state_31942[(2)]);
var state_31942__$1 = (function (){var statearr_31950 = state_31942;
(statearr_31950[(8)] = inst_31934);

return statearr_31950;
})();
var statearr_31951_31969 = state_31942__$1;
(statearr_31951_31969[(2)] = null);

(statearr_31951_31969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31943 === (9))){
var inst_31926 = (state_31942[(9)]);
var inst_31928 = (state_31942[(10)]);
var inst_31930 = inst_31928.call(null,inst_31926);
var state_31942__$1 = state_31942;
var statearr_31952_31970 = state_31942__$1;
(statearr_31952_31970[(2)] = inst_31930);

(statearr_31952_31970[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31943 === (5))){
var inst_31922 = (state_31942[(7)]);
var inst_31924 = figwheel.client.file_reloading.blocking_load.call(null,inst_31922);
var state_31942__$1 = state_31942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31942__$1,(8),inst_31924);
} else {
if((state_val_31943 === (10))){
var inst_31926 = (state_31942[(9)]);
var inst_31932 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_31926);
var state_31942__$1 = state_31942;
var statearr_31953_31971 = state_31942__$1;
(statearr_31953_31971[(2)] = inst_31932);

(statearr_31953_31971[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31943 === (8))){
var inst_31928 = (state_31942[(10)]);
var inst_31922 = (state_31942[(7)]);
var inst_31926 = (state_31942[(2)]);
var inst_31927 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_31928__$1 = cljs.core.get.call(null,inst_31927,inst_31922);
var state_31942__$1 = (function (){var statearr_31954 = state_31942;
(statearr_31954[(9)] = inst_31926);

(statearr_31954[(10)] = inst_31928__$1);

return statearr_31954;
})();
if(cljs.core.truth_(inst_31928__$1)){
var statearr_31955_31972 = state_31942__$1;
(statearr_31955_31972[(1)] = (9));

} else {
var statearr_31956_31973 = state_31942__$1;
(statearr_31956_31973[(1)] = (10));

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
});})(c__25730__auto__))
;
return ((function (switch__25616__auto__,c__25730__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__25617__auto__ = null;
var figwheel$client$file_reloading$state_machine__25617__auto____0 = (function (){
var statearr_31960 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31960[(0)] = figwheel$client$file_reloading$state_machine__25617__auto__);

(statearr_31960[(1)] = (1));

return statearr_31960;
});
var figwheel$client$file_reloading$state_machine__25617__auto____1 = (function (state_31942){
while(true){
var ret_value__25618__auto__ = (function (){try{while(true){
var result__25619__auto__ = switch__25616__auto__.call(null,state_31942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25619__auto__;
}
break;
}
}catch (e31961){if((e31961 instanceof Object)){
var ex__25620__auto__ = e31961;
var statearr_31962_31974 = state_31942;
(statearr_31962_31974[(5)] = ex__25620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31975 = state_31942;
state_31942 = G__31975;
continue;
} else {
return ret_value__25618__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__25617__auto__ = function(state_31942){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__25617__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__25617__auto____1.call(this,state_31942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__25617__auto____0;
figwheel$client$file_reloading$state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__25617__auto____1;
return figwheel$client$file_reloading$state_machine__25617__auto__;
})()
;})(switch__25616__auto__,c__25730__auto__))
})();
var state__25732__auto__ = (function (){var statearr_31963 = f__25731__auto__.call(null);
(statearr_31963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25730__auto__);

return statearr_31963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25732__auto__);
});})(c__25730__auto__))
);

return c__25730__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__31976,callback){
var map__31979 = p__31976;
var map__31979__$1 = ((((!((map__31979 == null)))?((((map__31979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31979):map__31979);
var file_msg = map__31979__$1;
var namespace = cljs.core.get.call(null,map__31979__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__31979,map__31979__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__31979,map__31979__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31981){
var map__31984 = p__31981;
var map__31984__$1 = ((((!((map__31984 == null)))?((((map__31984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31984):map__31984);
var file_msg = map__31984__$1;
var namespace = cljs.core.get.call(null,map__31984__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__21422__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__21422__auto__){
var or__21434__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
} else {
var or__21434__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21434__auto____$1)){
return or__21434__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__21422__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31986,callback){
var map__31989 = p__31986;
var map__31989__$1 = ((((!((map__31989 == null)))?((((map__31989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31989):map__31989);
var file_msg = map__31989__$1;
var request_url = cljs.core.get.call(null,map__31989__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__31989__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__25730__auto___32093 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25730__auto___32093,out){
return (function (){
var f__25731__auto__ = (function (){var switch__25616__auto__ = ((function (c__25730__auto___32093,out){
return (function (state_32075){
var state_val_32076 = (state_32075[(1)]);
if((state_val_32076 === (1))){
var inst_32049 = cljs.core.seq.call(null,files);
var inst_32050 = cljs.core.first.call(null,inst_32049);
var inst_32051 = cljs.core.next.call(null,inst_32049);
var inst_32052 = files;
var state_32075__$1 = (function (){var statearr_32077 = state_32075;
(statearr_32077[(7)] = inst_32050);

(statearr_32077[(8)] = inst_32052);

(statearr_32077[(9)] = inst_32051);

return statearr_32077;
})();
var statearr_32078_32094 = state_32075__$1;
(statearr_32078_32094[(2)] = null);

(statearr_32078_32094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32076 === (2))){
var inst_32052 = (state_32075[(8)]);
var inst_32058 = (state_32075[(10)]);
var inst_32057 = cljs.core.seq.call(null,inst_32052);
var inst_32058__$1 = cljs.core.first.call(null,inst_32057);
var inst_32059 = cljs.core.next.call(null,inst_32057);
var inst_32060 = (inst_32058__$1 == null);
var inst_32061 = cljs.core.not.call(null,inst_32060);
var state_32075__$1 = (function (){var statearr_32079 = state_32075;
(statearr_32079[(10)] = inst_32058__$1);

(statearr_32079[(11)] = inst_32059);

return statearr_32079;
})();
if(inst_32061){
var statearr_32080_32095 = state_32075__$1;
(statearr_32080_32095[(1)] = (4));

} else {
var statearr_32081_32096 = state_32075__$1;
(statearr_32081_32096[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32076 === (3))){
var inst_32073 = (state_32075[(2)]);
var state_32075__$1 = state_32075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32075__$1,inst_32073);
} else {
if((state_val_32076 === (4))){
var inst_32058 = (state_32075[(10)]);
var inst_32063 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32058);
var state_32075__$1 = state_32075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32075__$1,(7),inst_32063);
} else {
if((state_val_32076 === (5))){
var inst_32069 = cljs.core.async.close_BANG_.call(null,out);
var state_32075__$1 = state_32075;
var statearr_32082_32097 = state_32075__$1;
(statearr_32082_32097[(2)] = inst_32069);

(statearr_32082_32097[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32076 === (6))){
var inst_32071 = (state_32075[(2)]);
var state_32075__$1 = state_32075;
var statearr_32083_32098 = state_32075__$1;
(statearr_32083_32098[(2)] = inst_32071);

(statearr_32083_32098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32076 === (7))){
var inst_32059 = (state_32075[(11)]);
var inst_32065 = (state_32075[(2)]);
var inst_32066 = cljs.core.async.put_BANG_.call(null,out,inst_32065);
var inst_32052 = inst_32059;
var state_32075__$1 = (function (){var statearr_32084 = state_32075;
(statearr_32084[(8)] = inst_32052);

(statearr_32084[(12)] = inst_32066);

return statearr_32084;
})();
var statearr_32085_32099 = state_32075__$1;
(statearr_32085_32099[(2)] = null);

(statearr_32085_32099[(1)] = (2));


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
});})(c__25730__auto___32093,out))
;
return ((function (switch__25616__auto__,c__25730__auto___32093,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25617__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25617__auto____0 = (function (){
var statearr_32089 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32089[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25617__auto__);

(statearr_32089[(1)] = (1));

return statearr_32089;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25617__auto____1 = (function (state_32075){
while(true){
var ret_value__25618__auto__ = (function (){try{while(true){
var result__25619__auto__ = switch__25616__auto__.call(null,state_32075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25619__auto__;
}
break;
}
}catch (e32090){if((e32090 instanceof Object)){
var ex__25620__auto__ = e32090;
var statearr_32091_32100 = state_32075;
(statearr_32091_32100[(5)] = ex__25620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32101 = state_32075;
state_32075 = G__32101;
continue;
} else {
return ret_value__25618__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25617__auto__ = function(state_32075){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25617__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25617__auto____1.call(this,state_32075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25617__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25617__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25617__auto__;
})()
;})(switch__25616__auto__,c__25730__auto___32093,out))
})();
var state__25732__auto__ = (function (){var statearr_32092 = f__25731__auto__.call(null);
(statearr_32092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25730__auto___32093);

return statearr_32092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25732__auto__);
});})(c__25730__auto___32093,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32102,opts){
var map__32106 = p__32102;
var map__32106__$1 = ((((!((map__32106 == null)))?((((map__32106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32106):map__32106);
var eval_body__$1 = cljs.core.get.call(null,map__32106__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__32106__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__21422__auto__ = eval_body__$1;
if(cljs.core.truth_(and__21422__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__21422__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e32108){var e = e32108;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__6367__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__32109_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32109_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__6367__auto__)){
var file_msg = temp__6367__auto__;
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
return cljs.core.map.call(null,(function (p__32118){
var vec__32119 = p__32118;
var k = cljs.core.nth.call(null,vec__32119,(0),null);
var v = cljs.core.nth.call(null,vec__32119,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__32122){
var vec__32123 = p__32122;
var k = cljs.core.nth.call(null,vec__32123,(0),null);
var v = cljs.core.nth.call(null,vec__32123,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32129,p__32130){
var map__32377 = p__32129;
var map__32377__$1 = ((((!((map__32377 == null)))?((((map__32377.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32377.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32377):map__32377);
var opts = map__32377__$1;
var before_jsload = cljs.core.get.call(null,map__32377__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__32377__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__32377__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__32378 = p__32130;
var map__32378__$1 = ((((!((map__32378 == null)))?((((map__32378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32378):map__32378);
var msg = map__32378__$1;
var files = cljs.core.get.call(null,map__32378__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__32378__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__32378__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__25730__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25730__auto__,map__32377,map__32377__$1,opts,before_jsload,on_jsload,reload_dependents,map__32378,map__32378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__25731__auto__ = (function (){var switch__25616__auto__ = ((function (c__25730__auto__,map__32377,map__32377__$1,opts,before_jsload,on_jsload,reload_dependents,map__32378,map__32378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_32531){
var state_val_32532 = (state_32531[(1)]);
if((state_val_32532 === (7))){
var inst_32394 = (state_32531[(7)]);
var inst_32393 = (state_32531[(8)]);
var inst_32392 = (state_32531[(9)]);
var inst_32395 = (state_32531[(10)]);
var inst_32400 = cljs.core._nth.call(null,inst_32393,inst_32395);
var inst_32401 = figwheel.client.file_reloading.eval_body.call(null,inst_32400,opts);
var inst_32402 = (inst_32395 + (1));
var tmp32533 = inst_32394;
var tmp32534 = inst_32393;
var tmp32535 = inst_32392;
var inst_32392__$1 = tmp32535;
var inst_32393__$1 = tmp32534;
var inst_32394__$1 = tmp32533;
var inst_32395__$1 = inst_32402;
var state_32531__$1 = (function (){var statearr_32536 = state_32531;
(statearr_32536[(11)] = inst_32401);

(statearr_32536[(7)] = inst_32394__$1);

(statearr_32536[(8)] = inst_32393__$1);

(statearr_32536[(9)] = inst_32392__$1);

(statearr_32536[(10)] = inst_32395__$1);

return statearr_32536;
})();
var statearr_32537_32623 = state_32531__$1;
(statearr_32537_32623[(2)] = null);

(statearr_32537_32623[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (20))){
var inst_32435 = (state_32531[(12)]);
var inst_32443 = figwheel.client.file_reloading.sort_files.call(null,inst_32435);
var state_32531__$1 = state_32531;
var statearr_32538_32624 = state_32531__$1;
(statearr_32538_32624[(2)] = inst_32443);

(statearr_32538_32624[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (27))){
var state_32531__$1 = state_32531;
var statearr_32539_32625 = state_32531__$1;
(statearr_32539_32625[(2)] = null);

(statearr_32539_32625[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (1))){
var inst_32384 = (state_32531[(13)]);
var inst_32381 = before_jsload.call(null,files);
var inst_32382 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_32383 = (function (){return ((function (inst_32384,inst_32381,inst_32382,state_val_32532,c__25730__auto__,map__32377,map__32377__$1,opts,before_jsload,on_jsload,reload_dependents,map__32378,map__32378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32126_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32126_SHARP_);
});
;})(inst_32384,inst_32381,inst_32382,state_val_32532,c__25730__auto__,map__32377,map__32377__$1,opts,before_jsload,on_jsload,reload_dependents,map__32378,map__32378__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32384__$1 = cljs.core.filter.call(null,inst_32383,files);
var inst_32385 = cljs.core.not_empty.call(null,inst_32384__$1);
var state_32531__$1 = (function (){var statearr_32540 = state_32531;
(statearr_32540[(14)] = inst_32382);

(statearr_32540[(15)] = inst_32381);

(statearr_32540[(13)] = inst_32384__$1);

return statearr_32540;
})();
if(cljs.core.truth_(inst_32385)){
var statearr_32541_32626 = state_32531__$1;
(statearr_32541_32626[(1)] = (2));

} else {
var statearr_32542_32627 = state_32531__$1;
(statearr_32542_32627[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (24))){
var state_32531__$1 = state_32531;
var statearr_32543_32628 = state_32531__$1;
(statearr_32543_32628[(2)] = null);

(statearr_32543_32628[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (39))){
var inst_32485 = (state_32531[(16)]);
var state_32531__$1 = state_32531;
var statearr_32544_32629 = state_32531__$1;
(statearr_32544_32629[(2)] = inst_32485);

(statearr_32544_32629[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (46))){
var inst_32526 = (state_32531[(2)]);
var state_32531__$1 = state_32531;
var statearr_32545_32630 = state_32531__$1;
(statearr_32545_32630[(2)] = inst_32526);

(statearr_32545_32630[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (4))){
var inst_32429 = (state_32531[(2)]);
var inst_32430 = cljs.core.List.EMPTY;
var inst_32431 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_32430);
var inst_32432 = (function (){return ((function (inst_32429,inst_32430,inst_32431,state_val_32532,c__25730__auto__,map__32377,map__32377__$1,opts,before_jsload,on_jsload,reload_dependents,map__32378,map__32378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32127_SHARP_){
var and__21422__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32127_SHARP_);
if(cljs.core.truth_(and__21422__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32127_SHARP_));
} else {
return and__21422__auto__;
}
});
;})(inst_32429,inst_32430,inst_32431,state_val_32532,c__25730__auto__,map__32377,map__32377__$1,opts,before_jsload,on_jsload,reload_dependents,map__32378,map__32378__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32433 = cljs.core.filter.call(null,inst_32432,files);
var inst_32434 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_32435 = cljs.core.concat.call(null,inst_32433,inst_32434);
var state_32531__$1 = (function (){var statearr_32546 = state_32531;
(statearr_32546[(17)] = inst_32431);

(statearr_32546[(12)] = inst_32435);

(statearr_32546[(18)] = inst_32429);

return statearr_32546;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_32547_32631 = state_32531__$1;
(statearr_32547_32631[(1)] = (16));

} else {
var statearr_32548_32632 = state_32531__$1;
(statearr_32548_32632[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (15))){
var inst_32419 = (state_32531[(2)]);
var state_32531__$1 = state_32531;
var statearr_32549_32633 = state_32531__$1;
(statearr_32549_32633[(2)] = inst_32419);

(statearr_32549_32633[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (21))){
var inst_32445 = (state_32531[(19)]);
var inst_32445__$1 = (state_32531[(2)]);
var inst_32446 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32445__$1);
var state_32531__$1 = (function (){var statearr_32550 = state_32531;
(statearr_32550[(19)] = inst_32445__$1);

return statearr_32550;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32531__$1,(22),inst_32446);
} else {
if((state_val_32532 === (31))){
var inst_32529 = (state_32531[(2)]);
var state_32531__$1 = state_32531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32531__$1,inst_32529);
} else {
if((state_val_32532 === (32))){
var inst_32485 = (state_32531[(16)]);
var inst_32490 = inst_32485.cljs$lang$protocol_mask$partition0$;
var inst_32491 = (inst_32490 & (64));
var inst_32492 = inst_32485.cljs$core$ISeq$;
var inst_32493 = (inst_32491) || (inst_32492);
var state_32531__$1 = state_32531;
if(cljs.core.truth_(inst_32493)){
var statearr_32551_32634 = state_32531__$1;
(statearr_32551_32634[(1)] = (35));

} else {
var statearr_32552_32635 = state_32531__$1;
(statearr_32552_32635[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (40))){
var inst_32506 = (state_32531[(20)]);
var inst_32505 = (state_32531[(2)]);
var inst_32506__$1 = cljs.core.get.call(null,inst_32505,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32507 = cljs.core.get.call(null,inst_32505,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32508 = cljs.core.not_empty.call(null,inst_32506__$1);
var state_32531__$1 = (function (){var statearr_32553 = state_32531;
(statearr_32553[(20)] = inst_32506__$1);

(statearr_32553[(21)] = inst_32507);

return statearr_32553;
})();
if(cljs.core.truth_(inst_32508)){
var statearr_32554_32636 = state_32531__$1;
(statearr_32554_32636[(1)] = (41));

} else {
var statearr_32555_32637 = state_32531__$1;
(statearr_32555_32637[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (33))){
var state_32531__$1 = state_32531;
var statearr_32556_32638 = state_32531__$1;
(statearr_32556_32638[(2)] = false);

(statearr_32556_32638[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (13))){
var inst_32405 = (state_32531[(22)]);
var inst_32409 = cljs.core.chunk_first.call(null,inst_32405);
var inst_32410 = cljs.core.chunk_rest.call(null,inst_32405);
var inst_32411 = cljs.core.count.call(null,inst_32409);
var inst_32392 = inst_32410;
var inst_32393 = inst_32409;
var inst_32394 = inst_32411;
var inst_32395 = (0);
var state_32531__$1 = (function (){var statearr_32557 = state_32531;
(statearr_32557[(7)] = inst_32394);

(statearr_32557[(8)] = inst_32393);

(statearr_32557[(9)] = inst_32392);

(statearr_32557[(10)] = inst_32395);

return statearr_32557;
})();
var statearr_32558_32639 = state_32531__$1;
(statearr_32558_32639[(2)] = null);

(statearr_32558_32639[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (22))){
var inst_32453 = (state_32531[(23)]);
var inst_32448 = (state_32531[(24)]);
var inst_32449 = (state_32531[(25)]);
var inst_32445 = (state_32531[(19)]);
var inst_32448__$1 = (state_32531[(2)]);
var inst_32449__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32448__$1);
var inst_32450 = (function (){var all_files = inst_32445;
var res_SINGLEQUOTE_ = inst_32448__$1;
var res = inst_32449__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_32453,inst_32448,inst_32449,inst_32445,inst_32448__$1,inst_32449__$1,state_val_32532,c__25730__auto__,map__32377,map__32377__$1,opts,before_jsload,on_jsload,reload_dependents,map__32378,map__32378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32128_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32128_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_32453,inst_32448,inst_32449,inst_32445,inst_32448__$1,inst_32449__$1,state_val_32532,c__25730__auto__,map__32377,map__32377__$1,opts,before_jsload,on_jsload,reload_dependents,map__32378,map__32378__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32451 = cljs.core.filter.call(null,inst_32450,inst_32448__$1);
var inst_32452 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_32453__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32452);
var inst_32454 = cljs.core.not_empty.call(null,inst_32453__$1);
var state_32531__$1 = (function (){var statearr_32559 = state_32531;
(statearr_32559[(23)] = inst_32453__$1);

(statearr_32559[(24)] = inst_32448__$1);

(statearr_32559[(25)] = inst_32449__$1);

(statearr_32559[(26)] = inst_32451);

return statearr_32559;
})();
if(cljs.core.truth_(inst_32454)){
var statearr_32560_32640 = state_32531__$1;
(statearr_32560_32640[(1)] = (23));

} else {
var statearr_32561_32641 = state_32531__$1;
(statearr_32561_32641[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (36))){
var state_32531__$1 = state_32531;
var statearr_32562_32642 = state_32531__$1;
(statearr_32562_32642[(2)] = false);

(statearr_32562_32642[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (41))){
var inst_32506 = (state_32531[(20)]);
var inst_32510 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_32511 = cljs.core.map.call(null,inst_32510,inst_32506);
var inst_32512 = cljs.core.pr_str.call(null,inst_32511);
var inst_32513 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_32512)].join('');
var inst_32514 = figwheel.client.utils.log.call(null,inst_32513);
var state_32531__$1 = state_32531;
var statearr_32563_32643 = state_32531__$1;
(statearr_32563_32643[(2)] = inst_32514);

(statearr_32563_32643[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (43))){
var inst_32507 = (state_32531[(21)]);
var inst_32517 = (state_32531[(2)]);
var inst_32518 = cljs.core.not_empty.call(null,inst_32507);
var state_32531__$1 = (function (){var statearr_32564 = state_32531;
(statearr_32564[(27)] = inst_32517);

return statearr_32564;
})();
if(cljs.core.truth_(inst_32518)){
var statearr_32565_32644 = state_32531__$1;
(statearr_32565_32644[(1)] = (44));

} else {
var statearr_32566_32645 = state_32531__$1;
(statearr_32566_32645[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (29))){
var inst_32485 = (state_32531[(16)]);
var inst_32453 = (state_32531[(23)]);
var inst_32448 = (state_32531[(24)]);
var inst_32449 = (state_32531[(25)]);
var inst_32451 = (state_32531[(26)]);
var inst_32445 = (state_32531[(19)]);
var inst_32481 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32484 = (function (){var all_files = inst_32445;
var res_SINGLEQUOTE_ = inst_32448;
var res = inst_32449;
var files_not_loaded = inst_32451;
var dependencies_that_loaded = inst_32453;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32485,inst_32453,inst_32448,inst_32449,inst_32451,inst_32445,inst_32481,state_val_32532,c__25730__auto__,map__32377,map__32377__$1,opts,before_jsload,on_jsload,reload_dependents,map__32378,map__32378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32483){
var map__32567 = p__32483;
var map__32567__$1 = ((((!((map__32567 == null)))?((((map__32567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32567):map__32567);
var namespace = cljs.core.get.call(null,map__32567__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32485,inst_32453,inst_32448,inst_32449,inst_32451,inst_32445,inst_32481,state_val_32532,c__25730__auto__,map__32377,map__32377__$1,opts,before_jsload,on_jsload,reload_dependents,map__32378,map__32378__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32485__$1 = cljs.core.group_by.call(null,inst_32484,inst_32451);
var inst_32487 = (inst_32485__$1 == null);
var inst_32488 = cljs.core.not.call(null,inst_32487);
var state_32531__$1 = (function (){var statearr_32569 = state_32531;
(statearr_32569[(16)] = inst_32485__$1);

(statearr_32569[(28)] = inst_32481);

return statearr_32569;
})();
if(inst_32488){
var statearr_32570_32646 = state_32531__$1;
(statearr_32570_32646[(1)] = (32));

} else {
var statearr_32571_32647 = state_32531__$1;
(statearr_32571_32647[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (44))){
var inst_32507 = (state_32531[(21)]);
var inst_32520 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32507);
var inst_32521 = cljs.core.pr_str.call(null,inst_32520);
var inst_32522 = [cljs.core.str("not required: "),cljs.core.str(inst_32521)].join('');
var inst_32523 = figwheel.client.utils.log.call(null,inst_32522);
var state_32531__$1 = state_32531;
var statearr_32572_32648 = state_32531__$1;
(statearr_32572_32648[(2)] = inst_32523);

(statearr_32572_32648[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (6))){
var inst_32426 = (state_32531[(2)]);
var state_32531__$1 = state_32531;
var statearr_32573_32649 = state_32531__$1;
(statearr_32573_32649[(2)] = inst_32426);

(statearr_32573_32649[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (28))){
var inst_32451 = (state_32531[(26)]);
var inst_32478 = (state_32531[(2)]);
var inst_32479 = cljs.core.not_empty.call(null,inst_32451);
var state_32531__$1 = (function (){var statearr_32574 = state_32531;
(statearr_32574[(29)] = inst_32478);

return statearr_32574;
})();
if(cljs.core.truth_(inst_32479)){
var statearr_32575_32650 = state_32531__$1;
(statearr_32575_32650[(1)] = (29));

} else {
var statearr_32576_32651 = state_32531__$1;
(statearr_32576_32651[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (25))){
var inst_32449 = (state_32531[(25)]);
var inst_32465 = (state_32531[(2)]);
var inst_32466 = cljs.core.not_empty.call(null,inst_32449);
var state_32531__$1 = (function (){var statearr_32577 = state_32531;
(statearr_32577[(30)] = inst_32465);

return statearr_32577;
})();
if(cljs.core.truth_(inst_32466)){
var statearr_32578_32652 = state_32531__$1;
(statearr_32578_32652[(1)] = (26));

} else {
var statearr_32579_32653 = state_32531__$1;
(statearr_32579_32653[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (34))){
var inst_32500 = (state_32531[(2)]);
var state_32531__$1 = state_32531;
if(cljs.core.truth_(inst_32500)){
var statearr_32580_32654 = state_32531__$1;
(statearr_32580_32654[(1)] = (38));

} else {
var statearr_32581_32655 = state_32531__$1;
(statearr_32581_32655[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (17))){
var state_32531__$1 = state_32531;
var statearr_32582_32656 = state_32531__$1;
(statearr_32582_32656[(2)] = recompile_dependents);

(statearr_32582_32656[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (3))){
var state_32531__$1 = state_32531;
var statearr_32583_32657 = state_32531__$1;
(statearr_32583_32657[(2)] = null);

(statearr_32583_32657[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (12))){
var inst_32422 = (state_32531[(2)]);
var state_32531__$1 = state_32531;
var statearr_32584_32658 = state_32531__$1;
(statearr_32584_32658[(2)] = inst_32422);

(statearr_32584_32658[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (2))){
var inst_32384 = (state_32531[(13)]);
var inst_32391 = cljs.core.seq.call(null,inst_32384);
var inst_32392 = inst_32391;
var inst_32393 = null;
var inst_32394 = (0);
var inst_32395 = (0);
var state_32531__$1 = (function (){var statearr_32585 = state_32531;
(statearr_32585[(7)] = inst_32394);

(statearr_32585[(8)] = inst_32393);

(statearr_32585[(9)] = inst_32392);

(statearr_32585[(10)] = inst_32395);

return statearr_32585;
})();
var statearr_32586_32659 = state_32531__$1;
(statearr_32586_32659[(2)] = null);

(statearr_32586_32659[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (23))){
var inst_32453 = (state_32531[(23)]);
var inst_32448 = (state_32531[(24)]);
var inst_32449 = (state_32531[(25)]);
var inst_32451 = (state_32531[(26)]);
var inst_32445 = (state_32531[(19)]);
var inst_32456 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_32458 = (function (){var all_files = inst_32445;
var res_SINGLEQUOTE_ = inst_32448;
var res = inst_32449;
var files_not_loaded = inst_32451;
var dependencies_that_loaded = inst_32453;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32453,inst_32448,inst_32449,inst_32451,inst_32445,inst_32456,state_val_32532,c__25730__auto__,map__32377,map__32377__$1,opts,before_jsload,on_jsload,reload_dependents,map__32378,map__32378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32457){
var map__32587 = p__32457;
var map__32587__$1 = ((((!((map__32587 == null)))?((((map__32587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32587):map__32587);
var request_url = cljs.core.get.call(null,map__32587__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32453,inst_32448,inst_32449,inst_32451,inst_32445,inst_32456,state_val_32532,c__25730__auto__,map__32377,map__32377__$1,opts,before_jsload,on_jsload,reload_dependents,map__32378,map__32378__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32459 = cljs.core.reverse.call(null,inst_32453);
var inst_32460 = cljs.core.map.call(null,inst_32458,inst_32459);
var inst_32461 = cljs.core.pr_str.call(null,inst_32460);
var inst_32462 = figwheel.client.utils.log.call(null,inst_32461);
var state_32531__$1 = (function (){var statearr_32589 = state_32531;
(statearr_32589[(31)] = inst_32456);

return statearr_32589;
})();
var statearr_32590_32660 = state_32531__$1;
(statearr_32590_32660[(2)] = inst_32462);

(statearr_32590_32660[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (35))){
var state_32531__$1 = state_32531;
var statearr_32591_32661 = state_32531__$1;
(statearr_32591_32661[(2)] = true);

(statearr_32591_32661[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (19))){
var inst_32435 = (state_32531[(12)]);
var inst_32441 = figwheel.client.file_reloading.expand_files.call(null,inst_32435);
var state_32531__$1 = state_32531;
var statearr_32592_32662 = state_32531__$1;
(statearr_32592_32662[(2)] = inst_32441);

(statearr_32592_32662[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (11))){
var state_32531__$1 = state_32531;
var statearr_32593_32663 = state_32531__$1;
(statearr_32593_32663[(2)] = null);

(statearr_32593_32663[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (9))){
var inst_32424 = (state_32531[(2)]);
var state_32531__$1 = state_32531;
var statearr_32594_32664 = state_32531__$1;
(statearr_32594_32664[(2)] = inst_32424);

(statearr_32594_32664[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (5))){
var inst_32394 = (state_32531[(7)]);
var inst_32395 = (state_32531[(10)]);
var inst_32397 = (inst_32395 < inst_32394);
var inst_32398 = inst_32397;
var state_32531__$1 = state_32531;
if(cljs.core.truth_(inst_32398)){
var statearr_32595_32665 = state_32531__$1;
(statearr_32595_32665[(1)] = (7));

} else {
var statearr_32596_32666 = state_32531__$1;
(statearr_32596_32666[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (14))){
var inst_32405 = (state_32531[(22)]);
var inst_32414 = cljs.core.first.call(null,inst_32405);
var inst_32415 = figwheel.client.file_reloading.eval_body.call(null,inst_32414,opts);
var inst_32416 = cljs.core.next.call(null,inst_32405);
var inst_32392 = inst_32416;
var inst_32393 = null;
var inst_32394 = (0);
var inst_32395 = (0);
var state_32531__$1 = (function (){var statearr_32597 = state_32531;
(statearr_32597[(7)] = inst_32394);

(statearr_32597[(8)] = inst_32393);

(statearr_32597[(9)] = inst_32392);

(statearr_32597[(32)] = inst_32415);

(statearr_32597[(10)] = inst_32395);

return statearr_32597;
})();
var statearr_32598_32667 = state_32531__$1;
(statearr_32598_32667[(2)] = null);

(statearr_32598_32667[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (45))){
var state_32531__$1 = state_32531;
var statearr_32599_32668 = state_32531__$1;
(statearr_32599_32668[(2)] = null);

(statearr_32599_32668[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (26))){
var inst_32453 = (state_32531[(23)]);
var inst_32448 = (state_32531[(24)]);
var inst_32449 = (state_32531[(25)]);
var inst_32451 = (state_32531[(26)]);
var inst_32445 = (state_32531[(19)]);
var inst_32468 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32470 = (function (){var all_files = inst_32445;
var res_SINGLEQUOTE_ = inst_32448;
var res = inst_32449;
var files_not_loaded = inst_32451;
var dependencies_that_loaded = inst_32453;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32453,inst_32448,inst_32449,inst_32451,inst_32445,inst_32468,state_val_32532,c__25730__auto__,map__32377,map__32377__$1,opts,before_jsload,on_jsload,reload_dependents,map__32378,map__32378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32469){
var map__32600 = p__32469;
var map__32600__$1 = ((((!((map__32600 == null)))?((((map__32600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32600):map__32600);
var namespace = cljs.core.get.call(null,map__32600__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__32600__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32453,inst_32448,inst_32449,inst_32451,inst_32445,inst_32468,state_val_32532,c__25730__auto__,map__32377,map__32377__$1,opts,before_jsload,on_jsload,reload_dependents,map__32378,map__32378__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32471 = cljs.core.map.call(null,inst_32470,inst_32449);
var inst_32472 = cljs.core.pr_str.call(null,inst_32471);
var inst_32473 = figwheel.client.utils.log.call(null,inst_32472);
var inst_32474 = (function (){var all_files = inst_32445;
var res_SINGLEQUOTE_ = inst_32448;
var res = inst_32449;
var files_not_loaded = inst_32451;
var dependencies_that_loaded = inst_32453;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32453,inst_32448,inst_32449,inst_32451,inst_32445,inst_32468,inst_32470,inst_32471,inst_32472,inst_32473,state_val_32532,c__25730__auto__,map__32377,map__32377__$1,opts,before_jsload,on_jsload,reload_dependents,map__32378,map__32378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32453,inst_32448,inst_32449,inst_32451,inst_32445,inst_32468,inst_32470,inst_32471,inst_32472,inst_32473,state_val_32532,c__25730__auto__,map__32377,map__32377__$1,opts,before_jsload,on_jsload,reload_dependents,map__32378,map__32378__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32475 = setTimeout(inst_32474,(10));
var state_32531__$1 = (function (){var statearr_32602 = state_32531;
(statearr_32602[(33)] = inst_32468);

(statearr_32602[(34)] = inst_32473);

return statearr_32602;
})();
var statearr_32603_32669 = state_32531__$1;
(statearr_32603_32669[(2)] = inst_32475);

(statearr_32603_32669[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (16))){
var state_32531__$1 = state_32531;
var statearr_32604_32670 = state_32531__$1;
(statearr_32604_32670[(2)] = reload_dependents);

(statearr_32604_32670[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (38))){
var inst_32485 = (state_32531[(16)]);
var inst_32502 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32485);
var state_32531__$1 = state_32531;
var statearr_32605_32671 = state_32531__$1;
(statearr_32605_32671[(2)] = inst_32502);

(statearr_32605_32671[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (30))){
var state_32531__$1 = state_32531;
var statearr_32606_32672 = state_32531__$1;
(statearr_32606_32672[(2)] = null);

(statearr_32606_32672[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (10))){
var inst_32405 = (state_32531[(22)]);
var inst_32407 = cljs.core.chunked_seq_QMARK_.call(null,inst_32405);
var state_32531__$1 = state_32531;
if(inst_32407){
var statearr_32607_32673 = state_32531__$1;
(statearr_32607_32673[(1)] = (13));

} else {
var statearr_32608_32674 = state_32531__$1;
(statearr_32608_32674[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (18))){
var inst_32439 = (state_32531[(2)]);
var state_32531__$1 = state_32531;
if(cljs.core.truth_(inst_32439)){
var statearr_32609_32675 = state_32531__$1;
(statearr_32609_32675[(1)] = (19));

} else {
var statearr_32610_32676 = state_32531__$1;
(statearr_32610_32676[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (42))){
var state_32531__$1 = state_32531;
var statearr_32611_32677 = state_32531__$1;
(statearr_32611_32677[(2)] = null);

(statearr_32611_32677[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (37))){
var inst_32497 = (state_32531[(2)]);
var state_32531__$1 = state_32531;
var statearr_32612_32678 = state_32531__$1;
(statearr_32612_32678[(2)] = inst_32497);

(statearr_32612_32678[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (8))){
var inst_32405 = (state_32531[(22)]);
var inst_32392 = (state_32531[(9)]);
var inst_32405__$1 = cljs.core.seq.call(null,inst_32392);
var state_32531__$1 = (function (){var statearr_32613 = state_32531;
(statearr_32613[(22)] = inst_32405__$1);

return statearr_32613;
})();
if(inst_32405__$1){
var statearr_32614_32679 = state_32531__$1;
(statearr_32614_32679[(1)] = (10));

} else {
var statearr_32615_32680 = state_32531__$1;
(statearr_32615_32680[(1)] = (11));

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
});})(c__25730__auto__,map__32377,map__32377__$1,opts,before_jsload,on_jsload,reload_dependents,map__32378,map__32378__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__25616__auto__,c__25730__auto__,map__32377,map__32377__$1,opts,before_jsload,on_jsload,reload_dependents,map__32378,map__32378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25617__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25617__auto____0 = (function (){
var statearr_32619 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32619[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__25617__auto__);

(statearr_32619[(1)] = (1));

return statearr_32619;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25617__auto____1 = (function (state_32531){
while(true){
var ret_value__25618__auto__ = (function (){try{while(true){
var result__25619__auto__ = switch__25616__auto__.call(null,state_32531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25619__auto__;
}
break;
}
}catch (e32620){if((e32620 instanceof Object)){
var ex__25620__auto__ = e32620;
var statearr_32621_32681 = state_32531;
(statearr_32621_32681[(5)] = ex__25620__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32682 = state_32531;
state_32531 = G__32682;
continue;
} else {
return ret_value__25618__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__25617__auto__ = function(state_32531){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25617__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25617__auto____1.call(this,state_32531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25617__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__25617__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25617__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25617__auto__;
})()
;})(switch__25616__auto__,c__25730__auto__,map__32377,map__32377__$1,opts,before_jsload,on_jsload,reload_dependents,map__32378,map__32378__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__25732__auto__ = (function (){var statearr_32622 = f__25731__auto__.call(null);
(statearr_32622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25730__auto__);

return statearr_32622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25732__auto__);
});})(c__25730__auto__,map__32377,map__32377__$1,opts,before_jsload,on_jsload,reload_dependents,map__32378,map__32378__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__25730__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32685,link){
var map__32688 = p__32685;
var map__32688__$1 = ((((!((map__32688 == null)))?((((map__32688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32688):map__32688);
var file = cljs.core.get.call(null,map__32688__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6369__auto__ = link.href;
if(cljs.core.truth_(temp__6369__auto__)){
var link_href = temp__6369__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6369__auto__,map__32688,map__32688__$1,file){
return (function (p1__32683_SHARP_,p2__32684_SHARP_){
if(cljs.core._EQ_.call(null,p1__32683_SHARP_,p2__32684_SHARP_)){
return p1__32683_SHARP_;
} else {
return false;
}
});})(link_href,temp__6369__auto__,map__32688,map__32688__$1,file))
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
var temp__6369__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32694){
var map__32695 = p__32694;
var map__32695__$1 = ((((!((map__32695 == null)))?((((map__32695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32695):map__32695);
var match_length = cljs.core.get.call(null,map__32695__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32695__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32690_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32690_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__6369__auto__)){
var res = temp__6369__auto__;
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
var args32697 = [];
var len__22617__auto___32700 = arguments.length;
var i__22618__auto___32701 = (0);
while(true){
if((i__22618__auto___32701 < len__22617__auto___32700)){
args32697.push((arguments[i__22618__auto___32701]));

var G__32702 = (i__22618__auto___32701 + (1));
i__22618__auto___32701 = G__32702;
continue;
} else {
}
break;
}

var G__32699 = args32697.length;
switch (G__32699) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32697.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__32704_SHARP_,p2__32705_SHARP_){
return cljs.core.assoc.call(null,p1__32704_SHARP_,cljs.core.get.call(null,p2__32705_SHARP_,key),p2__32705_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__32706){
var map__32709 = p__32706;
var map__32709__$1 = ((((!((map__32709 == null)))?((((map__32709.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32709.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32709):map__32709);
var f_data = map__32709__$1;
var file = cljs.core.get.call(null,map__32709__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6369__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6369__auto__)){
var link = temp__6369__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32711,files_msg){
var map__32718 = p__32711;
var map__32718__$1 = ((((!((map__32718 == null)))?((((map__32718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32718):map__32718);
var opts = map__32718__$1;
var on_cssload = cljs.core.get.call(null,map__32718__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__32720_32724 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__32721_32725 = null;
var count__32722_32726 = (0);
var i__32723_32727 = (0);
while(true){
if((i__32723_32727 < count__32722_32726)){
var f_32728 = cljs.core._nth.call(null,chunk__32721_32725,i__32723_32727);
figwheel.client.file_reloading.reload_css_file.call(null,f_32728);

var G__32729 = seq__32720_32724;
var G__32730 = chunk__32721_32725;
var G__32731 = count__32722_32726;
var G__32732 = (i__32723_32727 + (1));
seq__32720_32724 = G__32729;
chunk__32721_32725 = G__32730;
count__32722_32726 = G__32731;
i__32723_32727 = G__32732;
continue;
} else {
var temp__6369__auto___32733 = cljs.core.seq.call(null,seq__32720_32724);
if(temp__6369__auto___32733){
var seq__32720_32734__$1 = temp__6369__auto___32733;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32720_32734__$1)){
var c__22337__auto___32735 = cljs.core.chunk_first.call(null,seq__32720_32734__$1);
var G__32736 = cljs.core.chunk_rest.call(null,seq__32720_32734__$1);
var G__32737 = c__22337__auto___32735;
var G__32738 = cljs.core.count.call(null,c__22337__auto___32735);
var G__32739 = (0);
seq__32720_32724 = G__32736;
chunk__32721_32725 = G__32737;
count__32722_32726 = G__32738;
i__32723_32727 = G__32739;
continue;
} else {
var f_32740 = cljs.core.first.call(null,seq__32720_32734__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_32740);

var G__32741 = cljs.core.next.call(null,seq__32720_32734__$1);
var G__32742 = null;
var G__32743 = (0);
var G__32744 = (0);
seq__32720_32724 = G__32741;
chunk__32721_32725 = G__32742;
count__32722_32726 = G__32743;
i__32723_32727 = G__32744;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__32718,map__32718__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__32718,map__32718__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1467159064575