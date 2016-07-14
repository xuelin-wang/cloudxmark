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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34697_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34697_SHARP_));
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
var seq__34702 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34703 = null;
var count__34704 = (0);
var i__34705 = (0);
while(true){
if((i__34705 < count__34704)){
var n = cljs.core._nth.call(null,chunk__34703,i__34705);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34706 = seq__34702;
var G__34707 = chunk__34703;
var G__34708 = count__34704;
var G__34709 = (i__34705 + (1));
seq__34702 = G__34706;
chunk__34703 = G__34707;
count__34704 = G__34708;
i__34705 = G__34709;
continue;
} else {
var temp__6369__auto__ = cljs.core.seq.call(null,seq__34702);
if(temp__6369__auto__){
var seq__34702__$1 = temp__6369__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34702__$1)){
var c__22337__auto__ = cljs.core.chunk_first.call(null,seq__34702__$1);
var G__34710 = cljs.core.chunk_rest.call(null,seq__34702__$1);
var G__34711 = c__22337__auto__;
var G__34712 = cljs.core.count.call(null,c__22337__auto__);
var G__34713 = (0);
seq__34702 = G__34710;
chunk__34703 = G__34711;
count__34704 = G__34712;
i__34705 = G__34713;
continue;
} else {
var n = cljs.core.first.call(null,seq__34702__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34714 = cljs.core.next.call(null,seq__34702__$1);
var G__34715 = null;
var G__34716 = (0);
var G__34717 = (0);
seq__34702 = G__34714;
chunk__34703 = G__34715;
count__34704 = G__34716;
i__34705 = G__34717;
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

var seq__34768_34779 = cljs.core.seq.call(null,deps);
var chunk__34769_34780 = null;
var count__34770_34781 = (0);
var i__34771_34782 = (0);
while(true){
if((i__34771_34782 < count__34770_34781)){
var dep_34783 = cljs.core._nth.call(null,chunk__34769_34780,i__34771_34782);
topo_sort_helper_STAR_.call(null,dep_34783,(depth + (1)),state);

var G__34784 = seq__34768_34779;
var G__34785 = chunk__34769_34780;
var G__34786 = count__34770_34781;
var G__34787 = (i__34771_34782 + (1));
seq__34768_34779 = G__34784;
chunk__34769_34780 = G__34785;
count__34770_34781 = G__34786;
i__34771_34782 = G__34787;
continue;
} else {
var temp__6369__auto___34788 = cljs.core.seq.call(null,seq__34768_34779);
if(temp__6369__auto___34788){
var seq__34768_34789__$1 = temp__6369__auto___34788;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34768_34789__$1)){
var c__22337__auto___34790 = cljs.core.chunk_first.call(null,seq__34768_34789__$1);
var G__34791 = cljs.core.chunk_rest.call(null,seq__34768_34789__$1);
var G__34792 = c__22337__auto___34790;
var G__34793 = cljs.core.count.call(null,c__22337__auto___34790);
var G__34794 = (0);
seq__34768_34779 = G__34791;
chunk__34769_34780 = G__34792;
count__34770_34781 = G__34793;
i__34771_34782 = G__34794;
continue;
} else {
var dep_34795 = cljs.core.first.call(null,seq__34768_34789__$1);
topo_sort_helper_STAR_.call(null,dep_34795,(depth + (1)),state);

var G__34796 = cljs.core.next.call(null,seq__34768_34789__$1);
var G__34797 = null;
var G__34798 = (0);
var G__34799 = (0);
seq__34768_34779 = G__34796;
chunk__34769_34780 = G__34797;
count__34770_34781 = G__34798;
i__34771_34782 = G__34799;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34772){
var vec__34776 = p__34772;
var seq__34777 = cljs.core.seq.call(null,vec__34776);
var first__34778 = cljs.core.first.call(null,seq__34777);
var seq__34777__$1 = cljs.core.next.call(null,seq__34777);
var x = first__34778;
var xs = seq__34777__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34776,seq__34777,first__34778,seq__34777__$1,x,xs,get_deps__$1){
return (function (p1__34718_SHARP_){
return clojure.set.difference.call(null,p1__34718_SHARP_,x);
});})(vec__34776,seq__34777,first__34778,seq__34777__$1,x,xs,get_deps__$1))
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
var seq__34812 = cljs.core.seq.call(null,provides);
var chunk__34813 = null;
var count__34814 = (0);
var i__34815 = (0);
while(true){
if((i__34815 < count__34814)){
var prov = cljs.core._nth.call(null,chunk__34813,i__34815);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34816_34824 = cljs.core.seq.call(null,requires);
var chunk__34817_34825 = null;
var count__34818_34826 = (0);
var i__34819_34827 = (0);
while(true){
if((i__34819_34827 < count__34818_34826)){
var req_34828 = cljs.core._nth.call(null,chunk__34817_34825,i__34819_34827);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34828,prov);

var G__34829 = seq__34816_34824;
var G__34830 = chunk__34817_34825;
var G__34831 = count__34818_34826;
var G__34832 = (i__34819_34827 + (1));
seq__34816_34824 = G__34829;
chunk__34817_34825 = G__34830;
count__34818_34826 = G__34831;
i__34819_34827 = G__34832;
continue;
} else {
var temp__6369__auto___34833 = cljs.core.seq.call(null,seq__34816_34824);
if(temp__6369__auto___34833){
var seq__34816_34834__$1 = temp__6369__auto___34833;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34816_34834__$1)){
var c__22337__auto___34835 = cljs.core.chunk_first.call(null,seq__34816_34834__$1);
var G__34836 = cljs.core.chunk_rest.call(null,seq__34816_34834__$1);
var G__34837 = c__22337__auto___34835;
var G__34838 = cljs.core.count.call(null,c__22337__auto___34835);
var G__34839 = (0);
seq__34816_34824 = G__34836;
chunk__34817_34825 = G__34837;
count__34818_34826 = G__34838;
i__34819_34827 = G__34839;
continue;
} else {
var req_34840 = cljs.core.first.call(null,seq__34816_34834__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34840,prov);

var G__34841 = cljs.core.next.call(null,seq__34816_34834__$1);
var G__34842 = null;
var G__34843 = (0);
var G__34844 = (0);
seq__34816_34824 = G__34841;
chunk__34817_34825 = G__34842;
count__34818_34826 = G__34843;
i__34819_34827 = G__34844;
continue;
}
} else {
}
}
break;
}

var G__34845 = seq__34812;
var G__34846 = chunk__34813;
var G__34847 = count__34814;
var G__34848 = (i__34815 + (1));
seq__34812 = G__34845;
chunk__34813 = G__34846;
count__34814 = G__34847;
i__34815 = G__34848;
continue;
} else {
var temp__6369__auto__ = cljs.core.seq.call(null,seq__34812);
if(temp__6369__auto__){
var seq__34812__$1 = temp__6369__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34812__$1)){
var c__22337__auto__ = cljs.core.chunk_first.call(null,seq__34812__$1);
var G__34849 = cljs.core.chunk_rest.call(null,seq__34812__$1);
var G__34850 = c__22337__auto__;
var G__34851 = cljs.core.count.call(null,c__22337__auto__);
var G__34852 = (0);
seq__34812 = G__34849;
chunk__34813 = G__34850;
count__34814 = G__34851;
i__34815 = G__34852;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34812__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34820_34853 = cljs.core.seq.call(null,requires);
var chunk__34821_34854 = null;
var count__34822_34855 = (0);
var i__34823_34856 = (0);
while(true){
if((i__34823_34856 < count__34822_34855)){
var req_34857 = cljs.core._nth.call(null,chunk__34821_34854,i__34823_34856);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34857,prov);

var G__34858 = seq__34820_34853;
var G__34859 = chunk__34821_34854;
var G__34860 = count__34822_34855;
var G__34861 = (i__34823_34856 + (1));
seq__34820_34853 = G__34858;
chunk__34821_34854 = G__34859;
count__34822_34855 = G__34860;
i__34823_34856 = G__34861;
continue;
} else {
var temp__6369__auto___34862__$1 = cljs.core.seq.call(null,seq__34820_34853);
if(temp__6369__auto___34862__$1){
var seq__34820_34863__$1 = temp__6369__auto___34862__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34820_34863__$1)){
var c__22337__auto___34864 = cljs.core.chunk_first.call(null,seq__34820_34863__$1);
var G__34865 = cljs.core.chunk_rest.call(null,seq__34820_34863__$1);
var G__34866 = c__22337__auto___34864;
var G__34867 = cljs.core.count.call(null,c__22337__auto___34864);
var G__34868 = (0);
seq__34820_34853 = G__34865;
chunk__34821_34854 = G__34866;
count__34822_34855 = G__34867;
i__34823_34856 = G__34868;
continue;
} else {
var req_34869 = cljs.core.first.call(null,seq__34820_34863__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34869,prov);

var G__34870 = cljs.core.next.call(null,seq__34820_34863__$1);
var G__34871 = null;
var G__34872 = (0);
var G__34873 = (0);
seq__34820_34853 = G__34870;
chunk__34821_34854 = G__34871;
count__34822_34855 = G__34872;
i__34823_34856 = G__34873;
continue;
}
} else {
}
}
break;
}

var G__34874 = cljs.core.next.call(null,seq__34812__$1);
var G__34875 = null;
var G__34876 = (0);
var G__34877 = (0);
seq__34812 = G__34874;
chunk__34813 = G__34875;
count__34814 = G__34876;
i__34815 = G__34877;
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
var seq__34882_34886 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34883_34887 = null;
var count__34884_34888 = (0);
var i__34885_34889 = (0);
while(true){
if((i__34885_34889 < count__34884_34888)){
var ns_34890 = cljs.core._nth.call(null,chunk__34883_34887,i__34885_34889);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34890);

var G__34891 = seq__34882_34886;
var G__34892 = chunk__34883_34887;
var G__34893 = count__34884_34888;
var G__34894 = (i__34885_34889 + (1));
seq__34882_34886 = G__34891;
chunk__34883_34887 = G__34892;
count__34884_34888 = G__34893;
i__34885_34889 = G__34894;
continue;
} else {
var temp__6369__auto___34895 = cljs.core.seq.call(null,seq__34882_34886);
if(temp__6369__auto___34895){
var seq__34882_34896__$1 = temp__6369__auto___34895;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34882_34896__$1)){
var c__22337__auto___34897 = cljs.core.chunk_first.call(null,seq__34882_34896__$1);
var G__34898 = cljs.core.chunk_rest.call(null,seq__34882_34896__$1);
var G__34899 = c__22337__auto___34897;
var G__34900 = cljs.core.count.call(null,c__22337__auto___34897);
var G__34901 = (0);
seq__34882_34886 = G__34898;
chunk__34883_34887 = G__34899;
count__34884_34888 = G__34900;
i__34885_34889 = G__34901;
continue;
} else {
var ns_34902 = cljs.core.first.call(null,seq__34882_34896__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34902);

var G__34903 = cljs.core.next.call(null,seq__34882_34896__$1);
var G__34904 = null;
var G__34905 = (0);
var G__34906 = (0);
seq__34882_34886 = G__34903;
chunk__34883_34887 = G__34904;
count__34884_34888 = G__34905;
i__34885_34889 = G__34906;
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
var G__34907__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34907 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34908__i = 0, G__34908__a = new Array(arguments.length -  0);
while (G__34908__i < G__34908__a.length) {G__34908__a[G__34908__i] = arguments[G__34908__i + 0]; ++G__34908__i;}
  args = new cljs.core.IndexedSeq(G__34908__a,0);
} 
return G__34907__delegate.call(this,args);};
G__34907.cljs$lang$maxFixedArity = 0;
G__34907.cljs$lang$applyTo = (function (arglist__34909){
var args = cljs.core.seq(arglist__34909);
return G__34907__delegate(args);
});
G__34907.cljs$core$IFn$_invoke$arity$variadic = G__34907__delegate;
return G__34907;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34911 = cljs.core._EQ_;
var expr__34912 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34911.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34912))){
var path_parts = ((function (pred__34911,expr__34912){
return (function (p1__34910_SHARP_){
return clojure.string.split.call(null,p1__34910_SHARP_,/[\/\\]/);
});})(pred__34911,expr__34912))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__34911,expr__34912){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34914){if((e34914 instanceof Error)){
var e = e34914;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34914;

}
}})());
});
;})(path_parts,sep,root,pred__34911,expr__34912))
} else {
if(cljs.core.truth_(pred__34911.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34912))){
return ((function (pred__34911,expr__34912){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__34911,expr__34912){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__34911,expr__34912))
);

return deferred.addErrback(((function (deferred,pred__34911,expr__34912){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__34911,expr__34912))
);
});
;})(pred__34911,expr__34912))
} else {
return ((function (pred__34911,expr__34912){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34911,expr__34912))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34915,callback){
var map__34918 = p__34915;
var map__34918__$1 = ((((!((map__34918 == null)))?((((map__34918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34918):map__34918);
var file_msg = map__34918__$1;
var request_url = cljs.core.get.call(null,map__34918__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34918,map__34918__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34918,map__34918__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__28367__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28367__auto__){
return (function (){
var f__28368__auto__ = (function (){var switch__28253__auto__ = ((function (c__28367__auto__){
return (function (state_34942){
var state_val_34943 = (state_34942[(1)]);
if((state_val_34943 === (7))){
var inst_34938 = (state_34942[(2)]);
var state_34942__$1 = state_34942;
var statearr_34944_34964 = state_34942__$1;
(statearr_34944_34964[(2)] = inst_34938);

(statearr_34944_34964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (1))){
var state_34942__$1 = state_34942;
var statearr_34945_34965 = state_34942__$1;
(statearr_34945_34965[(2)] = null);

(statearr_34945_34965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (4))){
var inst_34922 = (state_34942[(7)]);
var inst_34922__$1 = (state_34942[(2)]);
var state_34942__$1 = (function (){var statearr_34946 = state_34942;
(statearr_34946[(7)] = inst_34922__$1);

return statearr_34946;
})();
if(cljs.core.truth_(inst_34922__$1)){
var statearr_34947_34966 = state_34942__$1;
(statearr_34947_34966[(1)] = (5));

} else {
var statearr_34948_34967 = state_34942__$1;
(statearr_34948_34967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (6))){
var state_34942__$1 = state_34942;
var statearr_34949_34968 = state_34942__$1;
(statearr_34949_34968[(2)] = null);

(statearr_34949_34968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (3))){
var inst_34940 = (state_34942[(2)]);
var state_34942__$1 = state_34942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34942__$1,inst_34940);
} else {
if((state_val_34943 === (2))){
var state_34942__$1 = state_34942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34942__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34943 === (11))){
var inst_34934 = (state_34942[(2)]);
var state_34942__$1 = (function (){var statearr_34950 = state_34942;
(statearr_34950[(8)] = inst_34934);

return statearr_34950;
})();
var statearr_34951_34969 = state_34942__$1;
(statearr_34951_34969[(2)] = null);

(statearr_34951_34969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (9))){
var inst_34926 = (state_34942[(9)]);
var inst_34928 = (state_34942[(10)]);
var inst_34930 = inst_34928.call(null,inst_34926);
var state_34942__$1 = state_34942;
var statearr_34952_34970 = state_34942__$1;
(statearr_34952_34970[(2)] = inst_34930);

(statearr_34952_34970[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (5))){
var inst_34922 = (state_34942[(7)]);
var inst_34924 = figwheel.client.file_reloading.blocking_load.call(null,inst_34922);
var state_34942__$1 = state_34942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34942__$1,(8),inst_34924);
} else {
if((state_val_34943 === (10))){
var inst_34926 = (state_34942[(9)]);
var inst_34932 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34926);
var state_34942__$1 = state_34942;
var statearr_34953_34971 = state_34942__$1;
(statearr_34953_34971[(2)] = inst_34932);

(statearr_34953_34971[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (8))){
var inst_34928 = (state_34942[(10)]);
var inst_34922 = (state_34942[(7)]);
var inst_34926 = (state_34942[(2)]);
var inst_34927 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34928__$1 = cljs.core.get.call(null,inst_34927,inst_34922);
var state_34942__$1 = (function (){var statearr_34954 = state_34942;
(statearr_34954[(9)] = inst_34926);

(statearr_34954[(10)] = inst_34928__$1);

return statearr_34954;
})();
if(cljs.core.truth_(inst_34928__$1)){
var statearr_34955_34972 = state_34942__$1;
(statearr_34955_34972[(1)] = (9));

} else {
var statearr_34956_34973 = state_34942__$1;
(statearr_34956_34973[(1)] = (10));

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
});})(c__28367__auto__))
;
return ((function (switch__28253__auto__,c__28367__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28254__auto__ = null;
var figwheel$client$file_reloading$state_machine__28254__auto____0 = (function (){
var statearr_34960 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34960[(0)] = figwheel$client$file_reloading$state_machine__28254__auto__);

(statearr_34960[(1)] = (1));

return statearr_34960;
});
var figwheel$client$file_reloading$state_machine__28254__auto____1 = (function (state_34942){
while(true){
var ret_value__28255__auto__ = (function (){try{while(true){
var result__28256__auto__ = switch__28253__auto__.call(null,state_34942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28256__auto__;
}
break;
}
}catch (e34961){if((e34961 instanceof Object)){
var ex__28257__auto__ = e34961;
var statearr_34962_34974 = state_34942;
(statearr_34962_34974[(5)] = ex__28257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34975 = state_34942;
state_34942 = G__34975;
continue;
} else {
return ret_value__28255__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28254__auto__ = function(state_34942){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28254__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28254__auto____1.call(this,state_34942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28254__auto____0;
figwheel$client$file_reloading$state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28254__auto____1;
return figwheel$client$file_reloading$state_machine__28254__auto__;
})()
;})(switch__28253__auto__,c__28367__auto__))
})();
var state__28369__auto__ = (function (){var statearr_34963 = f__28368__auto__.call(null);
(statearr_34963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28367__auto__);

return statearr_34963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28369__auto__);
});})(c__28367__auto__))
);

return c__28367__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34976,callback){
var map__34979 = p__34976;
var map__34979__$1 = ((((!((map__34979 == null)))?((((map__34979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34979):map__34979);
var file_msg = map__34979__$1;
var namespace = cljs.core.get.call(null,map__34979__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34979,map__34979__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34979,map__34979__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34981){
var map__34984 = p__34981;
var map__34984__$1 = ((((!((map__34984 == null)))?((((map__34984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34984):map__34984);
var file_msg = map__34984__$1;
var namespace = cljs.core.get.call(null,map__34984__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34986,callback){
var map__34989 = p__34986;
var map__34989__$1 = ((((!((map__34989 == null)))?((((map__34989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34989):map__34989);
var file_msg = map__34989__$1;
var request_url = cljs.core.get.call(null,map__34989__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34989__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__28367__auto___35093 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28367__auto___35093,out){
return (function (){
var f__28368__auto__ = (function (){var switch__28253__auto__ = ((function (c__28367__auto___35093,out){
return (function (state_35075){
var state_val_35076 = (state_35075[(1)]);
if((state_val_35076 === (1))){
var inst_35049 = cljs.core.seq.call(null,files);
var inst_35050 = cljs.core.first.call(null,inst_35049);
var inst_35051 = cljs.core.next.call(null,inst_35049);
var inst_35052 = files;
var state_35075__$1 = (function (){var statearr_35077 = state_35075;
(statearr_35077[(7)] = inst_35052);

(statearr_35077[(8)] = inst_35051);

(statearr_35077[(9)] = inst_35050);

return statearr_35077;
})();
var statearr_35078_35094 = state_35075__$1;
(statearr_35078_35094[(2)] = null);

(statearr_35078_35094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35076 === (2))){
var inst_35052 = (state_35075[(7)]);
var inst_35058 = (state_35075[(10)]);
var inst_35057 = cljs.core.seq.call(null,inst_35052);
var inst_35058__$1 = cljs.core.first.call(null,inst_35057);
var inst_35059 = cljs.core.next.call(null,inst_35057);
var inst_35060 = (inst_35058__$1 == null);
var inst_35061 = cljs.core.not.call(null,inst_35060);
var state_35075__$1 = (function (){var statearr_35079 = state_35075;
(statearr_35079[(10)] = inst_35058__$1);

(statearr_35079[(11)] = inst_35059);

return statearr_35079;
})();
if(inst_35061){
var statearr_35080_35095 = state_35075__$1;
(statearr_35080_35095[(1)] = (4));

} else {
var statearr_35081_35096 = state_35075__$1;
(statearr_35081_35096[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35076 === (3))){
var inst_35073 = (state_35075[(2)]);
var state_35075__$1 = state_35075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35075__$1,inst_35073);
} else {
if((state_val_35076 === (4))){
var inst_35058 = (state_35075[(10)]);
var inst_35063 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35058);
var state_35075__$1 = state_35075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35075__$1,(7),inst_35063);
} else {
if((state_val_35076 === (5))){
var inst_35069 = cljs.core.async.close_BANG_.call(null,out);
var state_35075__$1 = state_35075;
var statearr_35082_35097 = state_35075__$1;
(statearr_35082_35097[(2)] = inst_35069);

(statearr_35082_35097[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35076 === (6))){
var inst_35071 = (state_35075[(2)]);
var state_35075__$1 = state_35075;
var statearr_35083_35098 = state_35075__$1;
(statearr_35083_35098[(2)] = inst_35071);

(statearr_35083_35098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35076 === (7))){
var inst_35059 = (state_35075[(11)]);
var inst_35065 = (state_35075[(2)]);
var inst_35066 = cljs.core.async.put_BANG_.call(null,out,inst_35065);
var inst_35052 = inst_35059;
var state_35075__$1 = (function (){var statearr_35084 = state_35075;
(statearr_35084[(7)] = inst_35052);

(statearr_35084[(12)] = inst_35066);

return statearr_35084;
})();
var statearr_35085_35099 = state_35075__$1;
(statearr_35085_35099[(2)] = null);

(statearr_35085_35099[(1)] = (2));


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
});})(c__28367__auto___35093,out))
;
return ((function (switch__28253__auto__,c__28367__auto___35093,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28254__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28254__auto____0 = (function (){
var statearr_35089 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35089[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28254__auto__);

(statearr_35089[(1)] = (1));

return statearr_35089;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28254__auto____1 = (function (state_35075){
while(true){
var ret_value__28255__auto__ = (function (){try{while(true){
var result__28256__auto__ = switch__28253__auto__.call(null,state_35075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28256__auto__;
}
break;
}
}catch (e35090){if((e35090 instanceof Object)){
var ex__28257__auto__ = e35090;
var statearr_35091_35100 = state_35075;
(statearr_35091_35100[(5)] = ex__28257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35101 = state_35075;
state_35075 = G__35101;
continue;
} else {
return ret_value__28255__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28254__auto__ = function(state_35075){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28254__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28254__auto____1.call(this,state_35075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28254__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28254__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28254__auto__;
})()
;})(switch__28253__auto__,c__28367__auto___35093,out))
})();
var state__28369__auto__ = (function (){var statearr_35092 = f__28368__auto__.call(null);
(statearr_35092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28367__auto___35093);

return statearr_35092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28369__auto__);
});})(c__28367__auto___35093,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35102,opts){
var map__35106 = p__35102;
var map__35106__$1 = ((((!((map__35106 == null)))?((((map__35106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35106):map__35106);
var eval_body__$1 = cljs.core.get.call(null,map__35106__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35106__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e35108){var e = e35108;
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
return (function (p1__35109_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35109_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__35118){
var vec__35119 = p__35118;
var k = cljs.core.nth.call(null,vec__35119,(0),null);
var v = cljs.core.nth.call(null,vec__35119,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35122){
var vec__35123 = p__35122;
var k = cljs.core.nth.call(null,vec__35123,(0),null);
var v = cljs.core.nth.call(null,vec__35123,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35129,p__35130){
var map__35377 = p__35129;
var map__35377__$1 = ((((!((map__35377 == null)))?((((map__35377.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35377.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35377):map__35377);
var opts = map__35377__$1;
var before_jsload = cljs.core.get.call(null,map__35377__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35377__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35377__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35378 = p__35130;
var map__35378__$1 = ((((!((map__35378 == null)))?((((map__35378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35378):map__35378);
var msg = map__35378__$1;
var files = cljs.core.get.call(null,map__35378__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35378__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35378__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28367__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28367__auto__,map__35377,map__35377__$1,opts,before_jsload,on_jsload,reload_dependents,map__35378,map__35378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28368__auto__ = (function (){var switch__28253__auto__ = ((function (c__28367__auto__,map__35377,map__35377__$1,opts,before_jsload,on_jsload,reload_dependents,map__35378,map__35378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35531){
var state_val_35532 = (state_35531[(1)]);
if((state_val_35532 === (7))){
var inst_35395 = (state_35531[(7)]);
var inst_35394 = (state_35531[(8)]);
var inst_35393 = (state_35531[(9)]);
var inst_35392 = (state_35531[(10)]);
var inst_35400 = cljs.core._nth.call(null,inst_35393,inst_35395);
var inst_35401 = figwheel.client.file_reloading.eval_body.call(null,inst_35400,opts);
var inst_35402 = (inst_35395 + (1));
var tmp35533 = inst_35394;
var tmp35534 = inst_35393;
var tmp35535 = inst_35392;
var inst_35392__$1 = tmp35535;
var inst_35393__$1 = tmp35534;
var inst_35394__$1 = tmp35533;
var inst_35395__$1 = inst_35402;
var state_35531__$1 = (function (){var statearr_35536 = state_35531;
(statearr_35536[(7)] = inst_35395__$1);

(statearr_35536[(11)] = inst_35401);

(statearr_35536[(8)] = inst_35394__$1);

(statearr_35536[(9)] = inst_35393__$1);

(statearr_35536[(10)] = inst_35392__$1);

return statearr_35536;
})();
var statearr_35537_35623 = state_35531__$1;
(statearr_35537_35623[(2)] = null);

(statearr_35537_35623[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (20))){
var inst_35435 = (state_35531[(12)]);
var inst_35443 = figwheel.client.file_reloading.sort_files.call(null,inst_35435);
var state_35531__$1 = state_35531;
var statearr_35538_35624 = state_35531__$1;
(statearr_35538_35624[(2)] = inst_35443);

(statearr_35538_35624[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (27))){
var state_35531__$1 = state_35531;
var statearr_35539_35625 = state_35531__$1;
(statearr_35539_35625[(2)] = null);

(statearr_35539_35625[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (1))){
var inst_35384 = (state_35531[(13)]);
var inst_35381 = before_jsload.call(null,files);
var inst_35382 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35383 = (function (){return ((function (inst_35384,inst_35381,inst_35382,state_val_35532,c__28367__auto__,map__35377,map__35377__$1,opts,before_jsload,on_jsload,reload_dependents,map__35378,map__35378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35126_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35126_SHARP_);
});
;})(inst_35384,inst_35381,inst_35382,state_val_35532,c__28367__auto__,map__35377,map__35377__$1,opts,before_jsload,on_jsload,reload_dependents,map__35378,map__35378__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35384__$1 = cljs.core.filter.call(null,inst_35383,files);
var inst_35385 = cljs.core.not_empty.call(null,inst_35384__$1);
var state_35531__$1 = (function (){var statearr_35540 = state_35531;
(statearr_35540[(13)] = inst_35384__$1);

(statearr_35540[(14)] = inst_35381);

(statearr_35540[(15)] = inst_35382);

return statearr_35540;
})();
if(cljs.core.truth_(inst_35385)){
var statearr_35541_35626 = state_35531__$1;
(statearr_35541_35626[(1)] = (2));

} else {
var statearr_35542_35627 = state_35531__$1;
(statearr_35542_35627[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (24))){
var state_35531__$1 = state_35531;
var statearr_35543_35628 = state_35531__$1;
(statearr_35543_35628[(2)] = null);

(statearr_35543_35628[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (39))){
var inst_35485 = (state_35531[(16)]);
var state_35531__$1 = state_35531;
var statearr_35544_35629 = state_35531__$1;
(statearr_35544_35629[(2)] = inst_35485);

(statearr_35544_35629[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (46))){
var inst_35526 = (state_35531[(2)]);
var state_35531__$1 = state_35531;
var statearr_35545_35630 = state_35531__$1;
(statearr_35545_35630[(2)] = inst_35526);

(statearr_35545_35630[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (4))){
var inst_35429 = (state_35531[(2)]);
var inst_35430 = cljs.core.List.EMPTY;
var inst_35431 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35430);
var inst_35432 = (function (){return ((function (inst_35429,inst_35430,inst_35431,state_val_35532,c__28367__auto__,map__35377,map__35377__$1,opts,before_jsload,on_jsload,reload_dependents,map__35378,map__35378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35127_SHARP_){
var and__21422__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35127_SHARP_);
if(cljs.core.truth_(and__21422__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35127_SHARP_));
} else {
return and__21422__auto__;
}
});
;})(inst_35429,inst_35430,inst_35431,state_val_35532,c__28367__auto__,map__35377,map__35377__$1,opts,before_jsload,on_jsload,reload_dependents,map__35378,map__35378__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35433 = cljs.core.filter.call(null,inst_35432,files);
var inst_35434 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35435 = cljs.core.concat.call(null,inst_35433,inst_35434);
var state_35531__$1 = (function (){var statearr_35546 = state_35531;
(statearr_35546[(17)] = inst_35431);

(statearr_35546[(18)] = inst_35429);

(statearr_35546[(12)] = inst_35435);

return statearr_35546;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35547_35631 = state_35531__$1;
(statearr_35547_35631[(1)] = (16));

} else {
var statearr_35548_35632 = state_35531__$1;
(statearr_35548_35632[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (15))){
var inst_35419 = (state_35531[(2)]);
var state_35531__$1 = state_35531;
var statearr_35549_35633 = state_35531__$1;
(statearr_35549_35633[(2)] = inst_35419);

(statearr_35549_35633[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (21))){
var inst_35445 = (state_35531[(19)]);
var inst_35445__$1 = (state_35531[(2)]);
var inst_35446 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35445__$1);
var state_35531__$1 = (function (){var statearr_35550 = state_35531;
(statearr_35550[(19)] = inst_35445__$1);

return statearr_35550;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35531__$1,(22),inst_35446);
} else {
if((state_val_35532 === (31))){
var inst_35529 = (state_35531[(2)]);
var state_35531__$1 = state_35531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35531__$1,inst_35529);
} else {
if((state_val_35532 === (32))){
var inst_35485 = (state_35531[(16)]);
var inst_35490 = inst_35485.cljs$lang$protocol_mask$partition0$;
var inst_35491 = (inst_35490 & (64));
var inst_35492 = inst_35485.cljs$core$ISeq$;
var inst_35493 = (inst_35491) || (inst_35492);
var state_35531__$1 = state_35531;
if(cljs.core.truth_(inst_35493)){
var statearr_35551_35634 = state_35531__$1;
(statearr_35551_35634[(1)] = (35));

} else {
var statearr_35552_35635 = state_35531__$1;
(statearr_35552_35635[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (40))){
var inst_35506 = (state_35531[(20)]);
var inst_35505 = (state_35531[(2)]);
var inst_35506__$1 = cljs.core.get.call(null,inst_35505,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35507 = cljs.core.get.call(null,inst_35505,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35508 = cljs.core.not_empty.call(null,inst_35506__$1);
var state_35531__$1 = (function (){var statearr_35553 = state_35531;
(statearr_35553[(21)] = inst_35507);

(statearr_35553[(20)] = inst_35506__$1);

return statearr_35553;
})();
if(cljs.core.truth_(inst_35508)){
var statearr_35554_35636 = state_35531__$1;
(statearr_35554_35636[(1)] = (41));

} else {
var statearr_35555_35637 = state_35531__$1;
(statearr_35555_35637[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (33))){
var state_35531__$1 = state_35531;
var statearr_35556_35638 = state_35531__$1;
(statearr_35556_35638[(2)] = false);

(statearr_35556_35638[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (13))){
var inst_35405 = (state_35531[(22)]);
var inst_35409 = cljs.core.chunk_first.call(null,inst_35405);
var inst_35410 = cljs.core.chunk_rest.call(null,inst_35405);
var inst_35411 = cljs.core.count.call(null,inst_35409);
var inst_35392 = inst_35410;
var inst_35393 = inst_35409;
var inst_35394 = inst_35411;
var inst_35395 = (0);
var state_35531__$1 = (function (){var statearr_35557 = state_35531;
(statearr_35557[(7)] = inst_35395);

(statearr_35557[(8)] = inst_35394);

(statearr_35557[(9)] = inst_35393);

(statearr_35557[(10)] = inst_35392);

return statearr_35557;
})();
var statearr_35558_35639 = state_35531__$1;
(statearr_35558_35639[(2)] = null);

(statearr_35558_35639[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (22))){
var inst_35445 = (state_35531[(19)]);
var inst_35453 = (state_35531[(23)]);
var inst_35449 = (state_35531[(24)]);
var inst_35448 = (state_35531[(25)]);
var inst_35448__$1 = (state_35531[(2)]);
var inst_35449__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35448__$1);
var inst_35450 = (function (){var all_files = inst_35445;
var res_SINGLEQUOTE_ = inst_35448__$1;
var res = inst_35449__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35445,inst_35453,inst_35449,inst_35448,inst_35448__$1,inst_35449__$1,state_val_35532,c__28367__auto__,map__35377,map__35377__$1,opts,before_jsload,on_jsload,reload_dependents,map__35378,map__35378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35128_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35128_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35445,inst_35453,inst_35449,inst_35448,inst_35448__$1,inst_35449__$1,state_val_35532,c__28367__auto__,map__35377,map__35377__$1,opts,before_jsload,on_jsload,reload_dependents,map__35378,map__35378__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35451 = cljs.core.filter.call(null,inst_35450,inst_35448__$1);
var inst_35452 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35453__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35452);
var inst_35454 = cljs.core.not_empty.call(null,inst_35453__$1);
var state_35531__$1 = (function (){var statearr_35559 = state_35531;
(statearr_35559[(23)] = inst_35453__$1);

(statearr_35559[(26)] = inst_35451);

(statearr_35559[(24)] = inst_35449__$1);

(statearr_35559[(25)] = inst_35448__$1);

return statearr_35559;
})();
if(cljs.core.truth_(inst_35454)){
var statearr_35560_35640 = state_35531__$1;
(statearr_35560_35640[(1)] = (23));

} else {
var statearr_35561_35641 = state_35531__$1;
(statearr_35561_35641[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (36))){
var state_35531__$1 = state_35531;
var statearr_35562_35642 = state_35531__$1;
(statearr_35562_35642[(2)] = false);

(statearr_35562_35642[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (41))){
var inst_35506 = (state_35531[(20)]);
var inst_35510 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35511 = cljs.core.map.call(null,inst_35510,inst_35506);
var inst_35512 = cljs.core.pr_str.call(null,inst_35511);
var inst_35513 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_35512)].join('');
var inst_35514 = figwheel.client.utils.log.call(null,inst_35513);
var state_35531__$1 = state_35531;
var statearr_35563_35643 = state_35531__$1;
(statearr_35563_35643[(2)] = inst_35514);

(statearr_35563_35643[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (43))){
var inst_35507 = (state_35531[(21)]);
var inst_35517 = (state_35531[(2)]);
var inst_35518 = cljs.core.not_empty.call(null,inst_35507);
var state_35531__$1 = (function (){var statearr_35564 = state_35531;
(statearr_35564[(27)] = inst_35517);

return statearr_35564;
})();
if(cljs.core.truth_(inst_35518)){
var statearr_35565_35644 = state_35531__$1;
(statearr_35565_35644[(1)] = (44));

} else {
var statearr_35566_35645 = state_35531__$1;
(statearr_35566_35645[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (29))){
var inst_35445 = (state_35531[(19)]);
var inst_35485 = (state_35531[(16)]);
var inst_35453 = (state_35531[(23)]);
var inst_35451 = (state_35531[(26)]);
var inst_35449 = (state_35531[(24)]);
var inst_35448 = (state_35531[(25)]);
var inst_35481 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35484 = (function (){var all_files = inst_35445;
var res_SINGLEQUOTE_ = inst_35448;
var res = inst_35449;
var files_not_loaded = inst_35451;
var dependencies_that_loaded = inst_35453;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35445,inst_35485,inst_35453,inst_35451,inst_35449,inst_35448,inst_35481,state_val_35532,c__28367__auto__,map__35377,map__35377__$1,opts,before_jsload,on_jsload,reload_dependents,map__35378,map__35378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35483){
var map__35567 = p__35483;
var map__35567__$1 = ((((!((map__35567 == null)))?((((map__35567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35567):map__35567);
var namespace = cljs.core.get.call(null,map__35567__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35445,inst_35485,inst_35453,inst_35451,inst_35449,inst_35448,inst_35481,state_val_35532,c__28367__auto__,map__35377,map__35377__$1,opts,before_jsload,on_jsload,reload_dependents,map__35378,map__35378__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35485__$1 = cljs.core.group_by.call(null,inst_35484,inst_35451);
var inst_35487 = (inst_35485__$1 == null);
var inst_35488 = cljs.core.not.call(null,inst_35487);
var state_35531__$1 = (function (){var statearr_35569 = state_35531;
(statearr_35569[(28)] = inst_35481);

(statearr_35569[(16)] = inst_35485__$1);

return statearr_35569;
})();
if(inst_35488){
var statearr_35570_35646 = state_35531__$1;
(statearr_35570_35646[(1)] = (32));

} else {
var statearr_35571_35647 = state_35531__$1;
(statearr_35571_35647[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (44))){
var inst_35507 = (state_35531[(21)]);
var inst_35520 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35507);
var inst_35521 = cljs.core.pr_str.call(null,inst_35520);
var inst_35522 = [cljs.core.str("not required: "),cljs.core.str(inst_35521)].join('');
var inst_35523 = figwheel.client.utils.log.call(null,inst_35522);
var state_35531__$1 = state_35531;
var statearr_35572_35648 = state_35531__$1;
(statearr_35572_35648[(2)] = inst_35523);

(statearr_35572_35648[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (6))){
var inst_35426 = (state_35531[(2)]);
var state_35531__$1 = state_35531;
var statearr_35573_35649 = state_35531__$1;
(statearr_35573_35649[(2)] = inst_35426);

(statearr_35573_35649[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (28))){
var inst_35451 = (state_35531[(26)]);
var inst_35478 = (state_35531[(2)]);
var inst_35479 = cljs.core.not_empty.call(null,inst_35451);
var state_35531__$1 = (function (){var statearr_35574 = state_35531;
(statearr_35574[(29)] = inst_35478);

return statearr_35574;
})();
if(cljs.core.truth_(inst_35479)){
var statearr_35575_35650 = state_35531__$1;
(statearr_35575_35650[(1)] = (29));

} else {
var statearr_35576_35651 = state_35531__$1;
(statearr_35576_35651[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (25))){
var inst_35449 = (state_35531[(24)]);
var inst_35465 = (state_35531[(2)]);
var inst_35466 = cljs.core.not_empty.call(null,inst_35449);
var state_35531__$1 = (function (){var statearr_35577 = state_35531;
(statearr_35577[(30)] = inst_35465);

return statearr_35577;
})();
if(cljs.core.truth_(inst_35466)){
var statearr_35578_35652 = state_35531__$1;
(statearr_35578_35652[(1)] = (26));

} else {
var statearr_35579_35653 = state_35531__$1;
(statearr_35579_35653[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (34))){
var inst_35500 = (state_35531[(2)]);
var state_35531__$1 = state_35531;
if(cljs.core.truth_(inst_35500)){
var statearr_35580_35654 = state_35531__$1;
(statearr_35580_35654[(1)] = (38));

} else {
var statearr_35581_35655 = state_35531__$1;
(statearr_35581_35655[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (17))){
var state_35531__$1 = state_35531;
var statearr_35582_35656 = state_35531__$1;
(statearr_35582_35656[(2)] = recompile_dependents);

(statearr_35582_35656[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (3))){
var state_35531__$1 = state_35531;
var statearr_35583_35657 = state_35531__$1;
(statearr_35583_35657[(2)] = null);

(statearr_35583_35657[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (12))){
var inst_35422 = (state_35531[(2)]);
var state_35531__$1 = state_35531;
var statearr_35584_35658 = state_35531__$1;
(statearr_35584_35658[(2)] = inst_35422);

(statearr_35584_35658[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (2))){
var inst_35384 = (state_35531[(13)]);
var inst_35391 = cljs.core.seq.call(null,inst_35384);
var inst_35392 = inst_35391;
var inst_35393 = null;
var inst_35394 = (0);
var inst_35395 = (0);
var state_35531__$1 = (function (){var statearr_35585 = state_35531;
(statearr_35585[(7)] = inst_35395);

(statearr_35585[(8)] = inst_35394);

(statearr_35585[(9)] = inst_35393);

(statearr_35585[(10)] = inst_35392);

return statearr_35585;
})();
var statearr_35586_35659 = state_35531__$1;
(statearr_35586_35659[(2)] = null);

(statearr_35586_35659[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (23))){
var inst_35445 = (state_35531[(19)]);
var inst_35453 = (state_35531[(23)]);
var inst_35451 = (state_35531[(26)]);
var inst_35449 = (state_35531[(24)]);
var inst_35448 = (state_35531[(25)]);
var inst_35456 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35458 = (function (){var all_files = inst_35445;
var res_SINGLEQUOTE_ = inst_35448;
var res = inst_35449;
var files_not_loaded = inst_35451;
var dependencies_that_loaded = inst_35453;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35445,inst_35453,inst_35451,inst_35449,inst_35448,inst_35456,state_val_35532,c__28367__auto__,map__35377,map__35377__$1,opts,before_jsload,on_jsload,reload_dependents,map__35378,map__35378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35457){
var map__35587 = p__35457;
var map__35587__$1 = ((((!((map__35587 == null)))?((((map__35587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35587):map__35587);
var request_url = cljs.core.get.call(null,map__35587__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35445,inst_35453,inst_35451,inst_35449,inst_35448,inst_35456,state_val_35532,c__28367__auto__,map__35377,map__35377__$1,opts,before_jsload,on_jsload,reload_dependents,map__35378,map__35378__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35459 = cljs.core.reverse.call(null,inst_35453);
var inst_35460 = cljs.core.map.call(null,inst_35458,inst_35459);
var inst_35461 = cljs.core.pr_str.call(null,inst_35460);
var inst_35462 = figwheel.client.utils.log.call(null,inst_35461);
var state_35531__$1 = (function (){var statearr_35589 = state_35531;
(statearr_35589[(31)] = inst_35456);

return statearr_35589;
})();
var statearr_35590_35660 = state_35531__$1;
(statearr_35590_35660[(2)] = inst_35462);

(statearr_35590_35660[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (35))){
var state_35531__$1 = state_35531;
var statearr_35591_35661 = state_35531__$1;
(statearr_35591_35661[(2)] = true);

(statearr_35591_35661[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (19))){
var inst_35435 = (state_35531[(12)]);
var inst_35441 = figwheel.client.file_reloading.expand_files.call(null,inst_35435);
var state_35531__$1 = state_35531;
var statearr_35592_35662 = state_35531__$1;
(statearr_35592_35662[(2)] = inst_35441);

(statearr_35592_35662[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (11))){
var state_35531__$1 = state_35531;
var statearr_35593_35663 = state_35531__$1;
(statearr_35593_35663[(2)] = null);

(statearr_35593_35663[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (9))){
var inst_35424 = (state_35531[(2)]);
var state_35531__$1 = state_35531;
var statearr_35594_35664 = state_35531__$1;
(statearr_35594_35664[(2)] = inst_35424);

(statearr_35594_35664[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (5))){
var inst_35395 = (state_35531[(7)]);
var inst_35394 = (state_35531[(8)]);
var inst_35397 = (inst_35395 < inst_35394);
var inst_35398 = inst_35397;
var state_35531__$1 = state_35531;
if(cljs.core.truth_(inst_35398)){
var statearr_35595_35665 = state_35531__$1;
(statearr_35595_35665[(1)] = (7));

} else {
var statearr_35596_35666 = state_35531__$1;
(statearr_35596_35666[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (14))){
var inst_35405 = (state_35531[(22)]);
var inst_35414 = cljs.core.first.call(null,inst_35405);
var inst_35415 = figwheel.client.file_reloading.eval_body.call(null,inst_35414,opts);
var inst_35416 = cljs.core.next.call(null,inst_35405);
var inst_35392 = inst_35416;
var inst_35393 = null;
var inst_35394 = (0);
var inst_35395 = (0);
var state_35531__$1 = (function (){var statearr_35597 = state_35531;
(statearr_35597[(32)] = inst_35415);

(statearr_35597[(7)] = inst_35395);

(statearr_35597[(8)] = inst_35394);

(statearr_35597[(9)] = inst_35393);

(statearr_35597[(10)] = inst_35392);

return statearr_35597;
})();
var statearr_35598_35667 = state_35531__$1;
(statearr_35598_35667[(2)] = null);

(statearr_35598_35667[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (45))){
var state_35531__$1 = state_35531;
var statearr_35599_35668 = state_35531__$1;
(statearr_35599_35668[(2)] = null);

(statearr_35599_35668[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (26))){
var inst_35445 = (state_35531[(19)]);
var inst_35453 = (state_35531[(23)]);
var inst_35451 = (state_35531[(26)]);
var inst_35449 = (state_35531[(24)]);
var inst_35448 = (state_35531[(25)]);
var inst_35468 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35470 = (function (){var all_files = inst_35445;
var res_SINGLEQUOTE_ = inst_35448;
var res = inst_35449;
var files_not_loaded = inst_35451;
var dependencies_that_loaded = inst_35453;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35445,inst_35453,inst_35451,inst_35449,inst_35448,inst_35468,state_val_35532,c__28367__auto__,map__35377,map__35377__$1,opts,before_jsload,on_jsload,reload_dependents,map__35378,map__35378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35469){
var map__35600 = p__35469;
var map__35600__$1 = ((((!((map__35600 == null)))?((((map__35600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35600):map__35600);
var namespace = cljs.core.get.call(null,map__35600__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35600__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35445,inst_35453,inst_35451,inst_35449,inst_35448,inst_35468,state_val_35532,c__28367__auto__,map__35377,map__35377__$1,opts,before_jsload,on_jsload,reload_dependents,map__35378,map__35378__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35471 = cljs.core.map.call(null,inst_35470,inst_35449);
var inst_35472 = cljs.core.pr_str.call(null,inst_35471);
var inst_35473 = figwheel.client.utils.log.call(null,inst_35472);
var inst_35474 = (function (){var all_files = inst_35445;
var res_SINGLEQUOTE_ = inst_35448;
var res = inst_35449;
var files_not_loaded = inst_35451;
var dependencies_that_loaded = inst_35453;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35445,inst_35453,inst_35451,inst_35449,inst_35448,inst_35468,inst_35470,inst_35471,inst_35472,inst_35473,state_val_35532,c__28367__auto__,map__35377,map__35377__$1,opts,before_jsload,on_jsload,reload_dependents,map__35378,map__35378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35445,inst_35453,inst_35451,inst_35449,inst_35448,inst_35468,inst_35470,inst_35471,inst_35472,inst_35473,state_val_35532,c__28367__auto__,map__35377,map__35377__$1,opts,before_jsload,on_jsload,reload_dependents,map__35378,map__35378__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35475 = setTimeout(inst_35474,(10));
var state_35531__$1 = (function (){var statearr_35602 = state_35531;
(statearr_35602[(33)] = inst_35468);

(statearr_35602[(34)] = inst_35473);

return statearr_35602;
})();
var statearr_35603_35669 = state_35531__$1;
(statearr_35603_35669[(2)] = inst_35475);

(statearr_35603_35669[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (16))){
var state_35531__$1 = state_35531;
var statearr_35604_35670 = state_35531__$1;
(statearr_35604_35670[(2)] = reload_dependents);

(statearr_35604_35670[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (38))){
var inst_35485 = (state_35531[(16)]);
var inst_35502 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35485);
var state_35531__$1 = state_35531;
var statearr_35605_35671 = state_35531__$1;
(statearr_35605_35671[(2)] = inst_35502);

(statearr_35605_35671[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (30))){
var state_35531__$1 = state_35531;
var statearr_35606_35672 = state_35531__$1;
(statearr_35606_35672[(2)] = null);

(statearr_35606_35672[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (10))){
var inst_35405 = (state_35531[(22)]);
var inst_35407 = cljs.core.chunked_seq_QMARK_.call(null,inst_35405);
var state_35531__$1 = state_35531;
if(inst_35407){
var statearr_35607_35673 = state_35531__$1;
(statearr_35607_35673[(1)] = (13));

} else {
var statearr_35608_35674 = state_35531__$1;
(statearr_35608_35674[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (18))){
var inst_35439 = (state_35531[(2)]);
var state_35531__$1 = state_35531;
if(cljs.core.truth_(inst_35439)){
var statearr_35609_35675 = state_35531__$1;
(statearr_35609_35675[(1)] = (19));

} else {
var statearr_35610_35676 = state_35531__$1;
(statearr_35610_35676[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (42))){
var state_35531__$1 = state_35531;
var statearr_35611_35677 = state_35531__$1;
(statearr_35611_35677[(2)] = null);

(statearr_35611_35677[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (37))){
var inst_35497 = (state_35531[(2)]);
var state_35531__$1 = state_35531;
var statearr_35612_35678 = state_35531__$1;
(statearr_35612_35678[(2)] = inst_35497);

(statearr_35612_35678[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (8))){
var inst_35405 = (state_35531[(22)]);
var inst_35392 = (state_35531[(10)]);
var inst_35405__$1 = cljs.core.seq.call(null,inst_35392);
var state_35531__$1 = (function (){var statearr_35613 = state_35531;
(statearr_35613[(22)] = inst_35405__$1);

return statearr_35613;
})();
if(inst_35405__$1){
var statearr_35614_35679 = state_35531__$1;
(statearr_35614_35679[(1)] = (10));

} else {
var statearr_35615_35680 = state_35531__$1;
(statearr_35615_35680[(1)] = (11));

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
});})(c__28367__auto__,map__35377,map__35377__$1,opts,before_jsload,on_jsload,reload_dependents,map__35378,map__35378__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28253__auto__,c__28367__auto__,map__35377,map__35377__$1,opts,before_jsload,on_jsload,reload_dependents,map__35378,map__35378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28254__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28254__auto____0 = (function (){
var statearr_35619 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35619[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28254__auto__);

(statearr_35619[(1)] = (1));

return statearr_35619;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28254__auto____1 = (function (state_35531){
while(true){
var ret_value__28255__auto__ = (function (){try{while(true){
var result__28256__auto__ = switch__28253__auto__.call(null,state_35531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28256__auto__;
}
break;
}
}catch (e35620){if((e35620 instanceof Object)){
var ex__28257__auto__ = e35620;
var statearr_35621_35681 = state_35531;
(statearr_35621_35681[(5)] = ex__28257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35682 = state_35531;
state_35531 = G__35682;
continue;
} else {
return ret_value__28255__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28254__auto__ = function(state_35531){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28254__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28254__auto____1.call(this,state_35531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28254__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28254__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28254__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28254__auto__;
})()
;})(switch__28253__auto__,c__28367__auto__,map__35377,map__35377__$1,opts,before_jsload,on_jsload,reload_dependents,map__35378,map__35378__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28369__auto__ = (function (){var statearr_35622 = f__28368__auto__.call(null);
(statearr_35622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28367__auto__);

return statearr_35622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28369__auto__);
});})(c__28367__auto__,map__35377,map__35377__$1,opts,before_jsload,on_jsload,reload_dependents,map__35378,map__35378__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28367__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35685,link){
var map__35688 = p__35685;
var map__35688__$1 = ((((!((map__35688 == null)))?((((map__35688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35688):map__35688);
var file = cljs.core.get.call(null,map__35688__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6369__auto__ = link.href;
if(cljs.core.truth_(temp__6369__auto__)){
var link_href = temp__6369__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6369__auto__,map__35688,map__35688__$1,file){
return (function (p1__35683_SHARP_,p2__35684_SHARP_){
if(cljs.core._EQ_.call(null,p1__35683_SHARP_,p2__35684_SHARP_)){
return p1__35683_SHARP_;
} else {
return false;
}
});})(link_href,temp__6369__auto__,map__35688,map__35688__$1,file))
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
var temp__6369__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35694){
var map__35695 = p__35694;
var map__35695__$1 = ((((!((map__35695 == null)))?((((map__35695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35695):map__35695);
var match_length = cljs.core.get.call(null,map__35695__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35695__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35690_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35690_SHARP_);
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
var args35697 = [];
var len__22617__auto___35700 = arguments.length;
var i__22618__auto___35701 = (0);
while(true){
if((i__22618__auto___35701 < len__22617__auto___35700)){
args35697.push((arguments[i__22618__auto___35701]));

var G__35702 = (i__22618__auto___35701 + (1));
i__22618__auto___35701 = G__35702;
continue;
} else {
}
break;
}

var G__35699 = args35697.length;
switch (G__35699) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35697.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35704_SHARP_,p2__35705_SHARP_){
return cljs.core.assoc.call(null,p1__35704_SHARP_,cljs.core.get.call(null,p2__35705_SHARP_,key),p2__35705_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__35706){
var map__35709 = p__35706;
var map__35709__$1 = ((((!((map__35709 == null)))?((((map__35709.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35709.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35709):map__35709);
var f_data = map__35709__$1;
var file = cljs.core.get.call(null,map__35709__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6369__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6369__auto__)){
var link = temp__6369__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35711,files_msg){
var map__35718 = p__35711;
var map__35718__$1 = ((((!((map__35718 == null)))?((((map__35718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35718):map__35718);
var opts = map__35718__$1;
var on_cssload = cljs.core.get.call(null,map__35718__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__35720_35724 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__35721_35725 = null;
var count__35722_35726 = (0);
var i__35723_35727 = (0);
while(true){
if((i__35723_35727 < count__35722_35726)){
var f_35728 = cljs.core._nth.call(null,chunk__35721_35725,i__35723_35727);
figwheel.client.file_reloading.reload_css_file.call(null,f_35728);

var G__35729 = seq__35720_35724;
var G__35730 = chunk__35721_35725;
var G__35731 = count__35722_35726;
var G__35732 = (i__35723_35727 + (1));
seq__35720_35724 = G__35729;
chunk__35721_35725 = G__35730;
count__35722_35726 = G__35731;
i__35723_35727 = G__35732;
continue;
} else {
var temp__6369__auto___35733 = cljs.core.seq.call(null,seq__35720_35724);
if(temp__6369__auto___35733){
var seq__35720_35734__$1 = temp__6369__auto___35733;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35720_35734__$1)){
var c__22337__auto___35735 = cljs.core.chunk_first.call(null,seq__35720_35734__$1);
var G__35736 = cljs.core.chunk_rest.call(null,seq__35720_35734__$1);
var G__35737 = c__22337__auto___35735;
var G__35738 = cljs.core.count.call(null,c__22337__auto___35735);
var G__35739 = (0);
seq__35720_35724 = G__35736;
chunk__35721_35725 = G__35737;
count__35722_35726 = G__35738;
i__35723_35727 = G__35739;
continue;
} else {
var f_35740 = cljs.core.first.call(null,seq__35720_35734__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_35740);

var G__35741 = cljs.core.next.call(null,seq__35720_35734__$1);
var G__35742 = null;
var G__35743 = (0);
var G__35744 = (0);
seq__35720_35724 = G__35741;
chunk__35721_35725 = G__35742;
count__35722_35726 = G__35743;
i__35723_35727 = G__35744;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__35718,map__35718__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__35718,map__35718__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1468449919687