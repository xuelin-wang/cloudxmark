// Compiled by ClojureScript 1.8.51 {}
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
var or__18468__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18468__auto__){
return or__18468__auto__;
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
var or__18468__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18468__auto__)){
return or__18468__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26861_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26861_SHARP_));
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
var seq__26866 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26867 = null;
var count__26868 = (0);
var i__26869 = (0);
while(true){
if((i__26869 < count__26868)){
var n = cljs.core._nth.call(null,chunk__26867,i__26869);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26870 = seq__26866;
var G__26871 = chunk__26867;
var G__26872 = count__26868;
var G__26873 = (i__26869 + (1));
seq__26866 = G__26870;
chunk__26867 = G__26871;
count__26868 = G__26872;
i__26869 = G__26873;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26866);
if(temp__4657__auto__){
var seq__26866__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26866__$1)){
var c__19279__auto__ = cljs.core.chunk_first.call(null,seq__26866__$1);
var G__26874 = cljs.core.chunk_rest.call(null,seq__26866__$1);
var G__26875 = c__19279__auto__;
var G__26876 = cljs.core.count.call(null,c__19279__auto__);
var G__26877 = (0);
seq__26866 = G__26874;
chunk__26867 = G__26875;
count__26868 = G__26876;
i__26869 = G__26877;
continue;
} else {
var n = cljs.core.first.call(null,seq__26866__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26878 = cljs.core.next.call(null,seq__26866__$1);
var G__26879 = null;
var G__26880 = (0);
var G__26881 = (0);
seq__26866 = G__26878;
chunk__26867 = G__26879;
count__26868 = G__26880;
i__26869 = G__26881;
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

var seq__26920_26927 = cljs.core.seq.call(null,deps);
var chunk__26921_26928 = null;
var count__26922_26929 = (0);
var i__26923_26930 = (0);
while(true){
if((i__26923_26930 < count__26922_26929)){
var dep_26931 = cljs.core._nth.call(null,chunk__26921_26928,i__26923_26930);
topo_sort_helper_STAR_.call(null,dep_26931,(depth + (1)),state);

var G__26932 = seq__26920_26927;
var G__26933 = chunk__26921_26928;
var G__26934 = count__26922_26929;
var G__26935 = (i__26923_26930 + (1));
seq__26920_26927 = G__26932;
chunk__26921_26928 = G__26933;
count__26922_26929 = G__26934;
i__26923_26930 = G__26935;
continue;
} else {
var temp__4657__auto___26936 = cljs.core.seq.call(null,seq__26920_26927);
if(temp__4657__auto___26936){
var seq__26920_26937__$1 = temp__4657__auto___26936;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26920_26937__$1)){
var c__19279__auto___26938 = cljs.core.chunk_first.call(null,seq__26920_26937__$1);
var G__26939 = cljs.core.chunk_rest.call(null,seq__26920_26937__$1);
var G__26940 = c__19279__auto___26938;
var G__26941 = cljs.core.count.call(null,c__19279__auto___26938);
var G__26942 = (0);
seq__26920_26927 = G__26939;
chunk__26921_26928 = G__26940;
count__26922_26929 = G__26941;
i__26923_26930 = G__26942;
continue;
} else {
var dep_26943 = cljs.core.first.call(null,seq__26920_26937__$1);
topo_sort_helper_STAR_.call(null,dep_26943,(depth + (1)),state);

var G__26944 = cljs.core.next.call(null,seq__26920_26937__$1);
var G__26945 = null;
var G__26946 = (0);
var G__26947 = (0);
seq__26920_26927 = G__26944;
chunk__26921_26928 = G__26945;
count__26922_26929 = G__26946;
i__26923_26930 = G__26947;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26924){
var vec__26926 = p__26924;
var x = cljs.core.nth.call(null,vec__26926,(0),null);
var xs = cljs.core.nthnext.call(null,vec__26926,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26926,x,xs,get_deps__$1){
return (function (p1__26882_SHARP_){
return clojure.set.difference.call(null,p1__26882_SHARP_,x);
});})(vec__26926,x,xs,get_deps__$1))
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
var seq__26960 = cljs.core.seq.call(null,provides);
var chunk__26961 = null;
var count__26962 = (0);
var i__26963 = (0);
while(true){
if((i__26963 < count__26962)){
var prov = cljs.core._nth.call(null,chunk__26961,i__26963);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26964_26972 = cljs.core.seq.call(null,requires);
var chunk__26965_26973 = null;
var count__26966_26974 = (0);
var i__26967_26975 = (0);
while(true){
if((i__26967_26975 < count__26966_26974)){
var req_26976 = cljs.core._nth.call(null,chunk__26965_26973,i__26967_26975);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26976,prov);

var G__26977 = seq__26964_26972;
var G__26978 = chunk__26965_26973;
var G__26979 = count__26966_26974;
var G__26980 = (i__26967_26975 + (1));
seq__26964_26972 = G__26977;
chunk__26965_26973 = G__26978;
count__26966_26974 = G__26979;
i__26967_26975 = G__26980;
continue;
} else {
var temp__4657__auto___26981 = cljs.core.seq.call(null,seq__26964_26972);
if(temp__4657__auto___26981){
var seq__26964_26982__$1 = temp__4657__auto___26981;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26964_26982__$1)){
var c__19279__auto___26983 = cljs.core.chunk_first.call(null,seq__26964_26982__$1);
var G__26984 = cljs.core.chunk_rest.call(null,seq__26964_26982__$1);
var G__26985 = c__19279__auto___26983;
var G__26986 = cljs.core.count.call(null,c__19279__auto___26983);
var G__26987 = (0);
seq__26964_26972 = G__26984;
chunk__26965_26973 = G__26985;
count__26966_26974 = G__26986;
i__26967_26975 = G__26987;
continue;
} else {
var req_26988 = cljs.core.first.call(null,seq__26964_26982__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26988,prov);

var G__26989 = cljs.core.next.call(null,seq__26964_26982__$1);
var G__26990 = null;
var G__26991 = (0);
var G__26992 = (0);
seq__26964_26972 = G__26989;
chunk__26965_26973 = G__26990;
count__26966_26974 = G__26991;
i__26967_26975 = G__26992;
continue;
}
} else {
}
}
break;
}

var G__26993 = seq__26960;
var G__26994 = chunk__26961;
var G__26995 = count__26962;
var G__26996 = (i__26963 + (1));
seq__26960 = G__26993;
chunk__26961 = G__26994;
count__26962 = G__26995;
i__26963 = G__26996;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26960);
if(temp__4657__auto__){
var seq__26960__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26960__$1)){
var c__19279__auto__ = cljs.core.chunk_first.call(null,seq__26960__$1);
var G__26997 = cljs.core.chunk_rest.call(null,seq__26960__$1);
var G__26998 = c__19279__auto__;
var G__26999 = cljs.core.count.call(null,c__19279__auto__);
var G__27000 = (0);
seq__26960 = G__26997;
chunk__26961 = G__26998;
count__26962 = G__26999;
i__26963 = G__27000;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26960__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26968_27001 = cljs.core.seq.call(null,requires);
var chunk__26969_27002 = null;
var count__26970_27003 = (0);
var i__26971_27004 = (0);
while(true){
if((i__26971_27004 < count__26970_27003)){
var req_27005 = cljs.core._nth.call(null,chunk__26969_27002,i__26971_27004);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27005,prov);

var G__27006 = seq__26968_27001;
var G__27007 = chunk__26969_27002;
var G__27008 = count__26970_27003;
var G__27009 = (i__26971_27004 + (1));
seq__26968_27001 = G__27006;
chunk__26969_27002 = G__27007;
count__26970_27003 = G__27008;
i__26971_27004 = G__27009;
continue;
} else {
var temp__4657__auto___27010__$1 = cljs.core.seq.call(null,seq__26968_27001);
if(temp__4657__auto___27010__$1){
var seq__26968_27011__$1 = temp__4657__auto___27010__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26968_27011__$1)){
var c__19279__auto___27012 = cljs.core.chunk_first.call(null,seq__26968_27011__$1);
var G__27013 = cljs.core.chunk_rest.call(null,seq__26968_27011__$1);
var G__27014 = c__19279__auto___27012;
var G__27015 = cljs.core.count.call(null,c__19279__auto___27012);
var G__27016 = (0);
seq__26968_27001 = G__27013;
chunk__26969_27002 = G__27014;
count__26970_27003 = G__27015;
i__26971_27004 = G__27016;
continue;
} else {
var req_27017 = cljs.core.first.call(null,seq__26968_27011__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27017,prov);

var G__27018 = cljs.core.next.call(null,seq__26968_27011__$1);
var G__27019 = null;
var G__27020 = (0);
var G__27021 = (0);
seq__26968_27001 = G__27018;
chunk__26969_27002 = G__27019;
count__26970_27003 = G__27020;
i__26971_27004 = G__27021;
continue;
}
} else {
}
}
break;
}

var G__27022 = cljs.core.next.call(null,seq__26960__$1);
var G__27023 = null;
var G__27024 = (0);
var G__27025 = (0);
seq__26960 = G__27022;
chunk__26961 = G__27023;
count__26962 = G__27024;
i__26963 = G__27025;
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
var seq__27030_27034 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27031_27035 = null;
var count__27032_27036 = (0);
var i__27033_27037 = (0);
while(true){
if((i__27033_27037 < count__27032_27036)){
var ns_27038 = cljs.core._nth.call(null,chunk__27031_27035,i__27033_27037);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27038);

var G__27039 = seq__27030_27034;
var G__27040 = chunk__27031_27035;
var G__27041 = count__27032_27036;
var G__27042 = (i__27033_27037 + (1));
seq__27030_27034 = G__27039;
chunk__27031_27035 = G__27040;
count__27032_27036 = G__27041;
i__27033_27037 = G__27042;
continue;
} else {
var temp__4657__auto___27043 = cljs.core.seq.call(null,seq__27030_27034);
if(temp__4657__auto___27043){
var seq__27030_27044__$1 = temp__4657__auto___27043;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27030_27044__$1)){
var c__19279__auto___27045 = cljs.core.chunk_first.call(null,seq__27030_27044__$1);
var G__27046 = cljs.core.chunk_rest.call(null,seq__27030_27044__$1);
var G__27047 = c__19279__auto___27045;
var G__27048 = cljs.core.count.call(null,c__19279__auto___27045);
var G__27049 = (0);
seq__27030_27034 = G__27046;
chunk__27031_27035 = G__27047;
count__27032_27036 = G__27048;
i__27033_27037 = G__27049;
continue;
} else {
var ns_27050 = cljs.core.first.call(null,seq__27030_27044__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27050);

var G__27051 = cljs.core.next.call(null,seq__27030_27044__$1);
var G__27052 = null;
var G__27053 = (0);
var G__27054 = (0);
seq__27030_27034 = G__27051;
chunk__27031_27035 = G__27052;
count__27032_27036 = G__27053;
i__27033_27037 = G__27054;
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
goog.require_figwheel_backup_ = (function (){var or__18468__auto__ = goog.require__;
if(cljs.core.truth_(or__18468__auto__)){
return or__18468__auto__;
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
var G__27055__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27055 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27056__i = 0, G__27056__a = new Array(arguments.length -  0);
while (G__27056__i < G__27056__a.length) {G__27056__a[G__27056__i] = arguments[G__27056__i + 0]; ++G__27056__i;}
  args = new cljs.core.IndexedSeq(G__27056__a,0);
} 
return G__27055__delegate.call(this,args);};
G__27055.cljs$lang$maxFixedArity = 0;
G__27055.cljs$lang$applyTo = (function (arglist__27057){
var args = cljs.core.seq(arglist__27057);
return G__27055__delegate(args);
});
G__27055.cljs$core$IFn$_invoke$arity$variadic = G__27055__delegate;
return G__27055;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27059 = cljs.core._EQ_;
var expr__27060 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27059.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27060))){
var path_parts = ((function (pred__27059,expr__27060){
return (function (p1__27058_SHARP_){
return clojure.string.split.call(null,p1__27058_SHARP_,/[\/\\]/);
});})(pred__27059,expr__27060))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__27059,expr__27060){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27062){if((e27062 instanceof Error)){
var e = e27062;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27062;

}
}})());
});
;})(path_parts,sep,root,pred__27059,expr__27060))
} else {
if(cljs.core.truth_(pred__27059.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27060))){
return ((function (pred__27059,expr__27060){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__27059,expr__27060){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27059,expr__27060))
);

return deferred.addErrback(((function (deferred,pred__27059,expr__27060){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27059,expr__27060))
);
});
;})(pred__27059,expr__27060))
} else {
return ((function (pred__27059,expr__27060){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27059,expr__27060))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27063,callback){
var map__27066 = p__27063;
var map__27066__$1 = ((((!((map__27066 == null)))?((((map__27066.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27066.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27066):map__27066);
var file_msg = map__27066__$1;
var request_url = cljs.core.get.call(null,map__27066__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27066,map__27066__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27066,map__27066__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__22205__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22205__auto__){
return (function (){
var f__22206__auto__ = (function (){var switch__22093__auto__ = ((function (c__22205__auto__){
return (function (state_27090){
var state_val_27091 = (state_27090[(1)]);
if((state_val_27091 === (7))){
var inst_27086 = (state_27090[(2)]);
var state_27090__$1 = state_27090;
var statearr_27092_27112 = state_27090__$1;
(statearr_27092_27112[(2)] = inst_27086);

(statearr_27092_27112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (1))){
var state_27090__$1 = state_27090;
var statearr_27093_27113 = state_27090__$1;
(statearr_27093_27113[(2)] = null);

(statearr_27093_27113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (4))){
var inst_27070 = (state_27090[(7)]);
var inst_27070__$1 = (state_27090[(2)]);
var state_27090__$1 = (function (){var statearr_27094 = state_27090;
(statearr_27094[(7)] = inst_27070__$1);

return statearr_27094;
})();
if(cljs.core.truth_(inst_27070__$1)){
var statearr_27095_27114 = state_27090__$1;
(statearr_27095_27114[(1)] = (5));

} else {
var statearr_27096_27115 = state_27090__$1;
(statearr_27096_27115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (6))){
var state_27090__$1 = state_27090;
var statearr_27097_27116 = state_27090__$1;
(statearr_27097_27116[(2)] = null);

(statearr_27097_27116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (3))){
var inst_27088 = (state_27090[(2)]);
var state_27090__$1 = state_27090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27090__$1,inst_27088);
} else {
if((state_val_27091 === (2))){
var state_27090__$1 = state_27090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27090__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27091 === (11))){
var inst_27082 = (state_27090[(2)]);
var state_27090__$1 = (function (){var statearr_27098 = state_27090;
(statearr_27098[(8)] = inst_27082);

return statearr_27098;
})();
var statearr_27099_27117 = state_27090__$1;
(statearr_27099_27117[(2)] = null);

(statearr_27099_27117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (9))){
var inst_27076 = (state_27090[(9)]);
var inst_27074 = (state_27090[(10)]);
var inst_27078 = inst_27076.call(null,inst_27074);
var state_27090__$1 = state_27090;
var statearr_27100_27118 = state_27090__$1;
(statearr_27100_27118[(2)] = inst_27078);

(statearr_27100_27118[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (5))){
var inst_27070 = (state_27090[(7)]);
var inst_27072 = figwheel.client.file_reloading.blocking_load.call(null,inst_27070);
var state_27090__$1 = state_27090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27090__$1,(8),inst_27072);
} else {
if((state_val_27091 === (10))){
var inst_27074 = (state_27090[(10)]);
var inst_27080 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27074);
var state_27090__$1 = state_27090;
var statearr_27101_27119 = state_27090__$1;
(statearr_27101_27119[(2)] = inst_27080);

(statearr_27101_27119[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (8))){
var inst_27076 = (state_27090[(9)]);
var inst_27070 = (state_27090[(7)]);
var inst_27074 = (state_27090[(2)]);
var inst_27075 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27076__$1 = cljs.core.get.call(null,inst_27075,inst_27070);
var state_27090__$1 = (function (){var statearr_27102 = state_27090;
(statearr_27102[(9)] = inst_27076__$1);

(statearr_27102[(10)] = inst_27074);

return statearr_27102;
})();
if(cljs.core.truth_(inst_27076__$1)){
var statearr_27103_27120 = state_27090__$1;
(statearr_27103_27120[(1)] = (9));

} else {
var statearr_27104_27121 = state_27090__$1;
(statearr_27104_27121[(1)] = (10));

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
});})(c__22205__auto__))
;
return ((function (switch__22093__auto__,c__22205__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22094__auto__ = null;
var figwheel$client$file_reloading$state_machine__22094__auto____0 = (function (){
var statearr_27108 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27108[(0)] = figwheel$client$file_reloading$state_machine__22094__auto__);

(statearr_27108[(1)] = (1));

return statearr_27108;
});
var figwheel$client$file_reloading$state_machine__22094__auto____1 = (function (state_27090){
while(true){
var ret_value__22095__auto__ = (function (){try{while(true){
var result__22096__auto__ = switch__22093__auto__.call(null,state_27090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22096__auto__;
}
break;
}
}catch (e27109){if((e27109 instanceof Object)){
var ex__22097__auto__ = e27109;
var statearr_27110_27122 = state_27090;
(statearr_27110_27122[(5)] = ex__22097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27123 = state_27090;
state_27090 = G__27123;
continue;
} else {
return ret_value__22095__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22094__auto__ = function(state_27090){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22094__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22094__auto____1.call(this,state_27090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22094__auto____0;
figwheel$client$file_reloading$state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22094__auto____1;
return figwheel$client$file_reloading$state_machine__22094__auto__;
})()
;})(switch__22093__auto__,c__22205__auto__))
})();
var state__22207__auto__ = (function (){var statearr_27111 = f__22206__auto__.call(null);
(statearr_27111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22205__auto__);

return statearr_27111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22207__auto__);
});})(c__22205__auto__))
);

return c__22205__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27124,callback){
var map__27127 = p__27124;
var map__27127__$1 = ((((!((map__27127 == null)))?((((map__27127.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27127.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27127):map__27127);
var file_msg = map__27127__$1;
var namespace = cljs.core.get.call(null,map__27127__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27127,map__27127__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27127,map__27127__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27129){
var map__27132 = p__27129;
var map__27132__$1 = ((((!((map__27132 == null)))?((((map__27132.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27132.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27132):map__27132);
var file_msg = map__27132__$1;
var namespace = cljs.core.get.call(null,map__27132__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18456__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18456__auto__){
var or__18468__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18468__auto__)){
return or__18468__auto__;
} else {
var or__18468__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18468__auto____$1)){
return or__18468__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18456__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27134,callback){
var map__27137 = p__27134;
var map__27137__$1 = ((((!((map__27137 == null)))?((((map__27137.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27137.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27137):map__27137);
var file_msg = map__27137__$1;
var request_url = cljs.core.get.call(null,map__27137__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27137__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__22205__auto___27225 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22205__auto___27225,out){
return (function (){
var f__22206__auto__ = (function (){var switch__22093__auto__ = ((function (c__22205__auto___27225,out){
return (function (state_27207){
var state_val_27208 = (state_27207[(1)]);
if((state_val_27208 === (1))){
var inst_27185 = cljs.core.nth.call(null,files,(0),null);
var inst_27186 = cljs.core.nthnext.call(null,files,(1));
var inst_27187 = files;
var state_27207__$1 = (function (){var statearr_27209 = state_27207;
(statearr_27209[(7)] = inst_27185);

(statearr_27209[(8)] = inst_27187);

(statearr_27209[(9)] = inst_27186);

return statearr_27209;
})();
var statearr_27210_27226 = state_27207__$1;
(statearr_27210_27226[(2)] = null);

(statearr_27210_27226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27208 === (2))){
var inst_27190 = (state_27207[(10)]);
var inst_27187 = (state_27207[(8)]);
var inst_27190__$1 = cljs.core.nth.call(null,inst_27187,(0),null);
var inst_27191 = cljs.core.nthnext.call(null,inst_27187,(1));
var inst_27192 = (inst_27190__$1 == null);
var inst_27193 = cljs.core.not.call(null,inst_27192);
var state_27207__$1 = (function (){var statearr_27211 = state_27207;
(statearr_27211[(11)] = inst_27191);

(statearr_27211[(10)] = inst_27190__$1);

return statearr_27211;
})();
if(inst_27193){
var statearr_27212_27227 = state_27207__$1;
(statearr_27212_27227[(1)] = (4));

} else {
var statearr_27213_27228 = state_27207__$1;
(statearr_27213_27228[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27208 === (3))){
var inst_27205 = (state_27207[(2)]);
var state_27207__$1 = state_27207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27207__$1,inst_27205);
} else {
if((state_val_27208 === (4))){
var inst_27190 = (state_27207[(10)]);
var inst_27195 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27190);
var state_27207__$1 = state_27207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27207__$1,(7),inst_27195);
} else {
if((state_val_27208 === (5))){
var inst_27201 = cljs.core.async.close_BANG_.call(null,out);
var state_27207__$1 = state_27207;
var statearr_27214_27229 = state_27207__$1;
(statearr_27214_27229[(2)] = inst_27201);

(statearr_27214_27229[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27208 === (6))){
var inst_27203 = (state_27207[(2)]);
var state_27207__$1 = state_27207;
var statearr_27215_27230 = state_27207__$1;
(statearr_27215_27230[(2)] = inst_27203);

(statearr_27215_27230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27208 === (7))){
var inst_27191 = (state_27207[(11)]);
var inst_27197 = (state_27207[(2)]);
var inst_27198 = cljs.core.async.put_BANG_.call(null,out,inst_27197);
var inst_27187 = inst_27191;
var state_27207__$1 = (function (){var statearr_27216 = state_27207;
(statearr_27216[(8)] = inst_27187);

(statearr_27216[(12)] = inst_27198);

return statearr_27216;
})();
var statearr_27217_27231 = state_27207__$1;
(statearr_27217_27231[(2)] = null);

(statearr_27217_27231[(1)] = (2));


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
});})(c__22205__auto___27225,out))
;
return ((function (switch__22093__auto__,c__22205__auto___27225,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22094__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22094__auto____0 = (function (){
var statearr_27221 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27221[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22094__auto__);

(statearr_27221[(1)] = (1));

return statearr_27221;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22094__auto____1 = (function (state_27207){
while(true){
var ret_value__22095__auto__ = (function (){try{while(true){
var result__22096__auto__ = switch__22093__auto__.call(null,state_27207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22096__auto__;
}
break;
}
}catch (e27222){if((e27222 instanceof Object)){
var ex__22097__auto__ = e27222;
var statearr_27223_27232 = state_27207;
(statearr_27223_27232[(5)] = ex__22097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27233 = state_27207;
state_27207 = G__27233;
continue;
} else {
return ret_value__22095__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22094__auto__ = function(state_27207){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22094__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22094__auto____1.call(this,state_27207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22094__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22094__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22094__auto__;
})()
;})(switch__22093__auto__,c__22205__auto___27225,out))
})();
var state__22207__auto__ = (function (){var statearr_27224 = f__22206__auto__.call(null);
(statearr_27224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22205__auto___27225);

return statearr_27224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22207__auto__);
});})(c__22205__auto___27225,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27234,opts){
var map__27238 = p__27234;
var map__27238__$1 = ((((!((map__27238 == null)))?((((map__27238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27238):map__27238);
var eval_body__$1 = cljs.core.get.call(null,map__27238__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27238__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18456__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18456__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18456__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27240){var e = e27240;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27241_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27241_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
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
return cljs.core.map.call(null,(function (p__27246){
var vec__27247 = p__27246;
var k = cljs.core.nth.call(null,vec__27247,(0),null);
var v = cljs.core.nth.call(null,vec__27247,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27248){
var vec__27249 = p__27248;
var k = cljs.core.nth.call(null,vec__27249,(0),null);
var v = cljs.core.nth.call(null,vec__27249,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27253,p__27254){
var map__27501 = p__27253;
var map__27501__$1 = ((((!((map__27501 == null)))?((((map__27501.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27501.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27501):map__27501);
var opts = map__27501__$1;
var before_jsload = cljs.core.get.call(null,map__27501__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27501__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27501__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27502 = p__27254;
var map__27502__$1 = ((((!((map__27502 == null)))?((((map__27502.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27502.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27502):map__27502);
var msg = map__27502__$1;
var files = cljs.core.get.call(null,map__27502__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27502__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27502__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22205__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22205__auto__,map__27501,map__27501__$1,opts,before_jsload,on_jsload,reload_dependents,map__27502,map__27502__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22206__auto__ = (function (){var switch__22093__auto__ = ((function (c__22205__auto__,map__27501,map__27501__$1,opts,before_jsload,on_jsload,reload_dependents,map__27502,map__27502__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27655){
var state_val_27656 = (state_27655[(1)]);
if((state_val_27656 === (7))){
var inst_27518 = (state_27655[(7)]);
var inst_27517 = (state_27655[(8)]);
var inst_27519 = (state_27655[(9)]);
var inst_27516 = (state_27655[(10)]);
var inst_27524 = cljs.core._nth.call(null,inst_27517,inst_27519);
var inst_27525 = figwheel.client.file_reloading.eval_body.call(null,inst_27524,opts);
var inst_27526 = (inst_27519 + (1));
var tmp27657 = inst_27518;
var tmp27658 = inst_27517;
var tmp27659 = inst_27516;
var inst_27516__$1 = tmp27659;
var inst_27517__$1 = tmp27658;
var inst_27518__$1 = tmp27657;
var inst_27519__$1 = inst_27526;
var state_27655__$1 = (function (){var statearr_27660 = state_27655;
(statearr_27660[(7)] = inst_27518__$1);

(statearr_27660[(8)] = inst_27517__$1);

(statearr_27660[(9)] = inst_27519__$1);

(statearr_27660[(11)] = inst_27525);

(statearr_27660[(10)] = inst_27516__$1);

return statearr_27660;
})();
var statearr_27661_27747 = state_27655__$1;
(statearr_27661_27747[(2)] = null);

(statearr_27661_27747[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (20))){
var inst_27559 = (state_27655[(12)]);
var inst_27567 = figwheel.client.file_reloading.sort_files.call(null,inst_27559);
var state_27655__$1 = state_27655;
var statearr_27662_27748 = state_27655__$1;
(statearr_27662_27748[(2)] = inst_27567);

(statearr_27662_27748[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (27))){
var state_27655__$1 = state_27655;
var statearr_27663_27749 = state_27655__$1;
(statearr_27663_27749[(2)] = null);

(statearr_27663_27749[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (1))){
var inst_27508 = (state_27655[(13)]);
var inst_27505 = before_jsload.call(null,files);
var inst_27506 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27507 = (function (){return ((function (inst_27508,inst_27505,inst_27506,state_val_27656,c__22205__auto__,map__27501,map__27501__$1,opts,before_jsload,on_jsload,reload_dependents,map__27502,map__27502__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27250_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27250_SHARP_);
});
;})(inst_27508,inst_27505,inst_27506,state_val_27656,c__22205__auto__,map__27501,map__27501__$1,opts,before_jsload,on_jsload,reload_dependents,map__27502,map__27502__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27508__$1 = cljs.core.filter.call(null,inst_27507,files);
var inst_27509 = cljs.core.not_empty.call(null,inst_27508__$1);
var state_27655__$1 = (function (){var statearr_27664 = state_27655;
(statearr_27664[(14)] = inst_27506);

(statearr_27664[(13)] = inst_27508__$1);

(statearr_27664[(15)] = inst_27505);

return statearr_27664;
})();
if(cljs.core.truth_(inst_27509)){
var statearr_27665_27750 = state_27655__$1;
(statearr_27665_27750[(1)] = (2));

} else {
var statearr_27666_27751 = state_27655__$1;
(statearr_27666_27751[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (24))){
var state_27655__$1 = state_27655;
var statearr_27667_27752 = state_27655__$1;
(statearr_27667_27752[(2)] = null);

(statearr_27667_27752[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (39))){
var inst_27609 = (state_27655[(16)]);
var state_27655__$1 = state_27655;
var statearr_27668_27753 = state_27655__$1;
(statearr_27668_27753[(2)] = inst_27609);

(statearr_27668_27753[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (46))){
var inst_27650 = (state_27655[(2)]);
var state_27655__$1 = state_27655;
var statearr_27669_27754 = state_27655__$1;
(statearr_27669_27754[(2)] = inst_27650);

(statearr_27669_27754[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (4))){
var inst_27553 = (state_27655[(2)]);
var inst_27554 = cljs.core.List.EMPTY;
var inst_27555 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27554);
var inst_27556 = (function (){return ((function (inst_27553,inst_27554,inst_27555,state_val_27656,c__22205__auto__,map__27501,map__27501__$1,opts,before_jsload,on_jsload,reload_dependents,map__27502,map__27502__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27251_SHARP_){
var and__18456__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27251_SHARP_);
if(cljs.core.truth_(and__18456__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27251_SHARP_));
} else {
return and__18456__auto__;
}
});
;})(inst_27553,inst_27554,inst_27555,state_val_27656,c__22205__auto__,map__27501,map__27501__$1,opts,before_jsload,on_jsload,reload_dependents,map__27502,map__27502__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27557 = cljs.core.filter.call(null,inst_27556,files);
var inst_27558 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27559 = cljs.core.concat.call(null,inst_27557,inst_27558);
var state_27655__$1 = (function (){var statearr_27670 = state_27655;
(statearr_27670[(17)] = inst_27555);

(statearr_27670[(12)] = inst_27559);

(statearr_27670[(18)] = inst_27553);

return statearr_27670;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27671_27755 = state_27655__$1;
(statearr_27671_27755[(1)] = (16));

} else {
var statearr_27672_27756 = state_27655__$1;
(statearr_27672_27756[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (15))){
var inst_27543 = (state_27655[(2)]);
var state_27655__$1 = state_27655;
var statearr_27673_27757 = state_27655__$1;
(statearr_27673_27757[(2)] = inst_27543);

(statearr_27673_27757[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (21))){
var inst_27569 = (state_27655[(19)]);
var inst_27569__$1 = (state_27655[(2)]);
var inst_27570 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27569__$1);
var state_27655__$1 = (function (){var statearr_27674 = state_27655;
(statearr_27674[(19)] = inst_27569__$1);

return statearr_27674;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27655__$1,(22),inst_27570);
} else {
if((state_val_27656 === (31))){
var inst_27653 = (state_27655[(2)]);
var state_27655__$1 = state_27655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27655__$1,inst_27653);
} else {
if((state_val_27656 === (32))){
var inst_27609 = (state_27655[(16)]);
var inst_27614 = inst_27609.cljs$lang$protocol_mask$partition0$;
var inst_27615 = (inst_27614 & (64));
var inst_27616 = inst_27609.cljs$core$ISeq$;
var inst_27617 = (inst_27615) || (inst_27616);
var state_27655__$1 = state_27655;
if(cljs.core.truth_(inst_27617)){
var statearr_27675_27758 = state_27655__$1;
(statearr_27675_27758[(1)] = (35));

} else {
var statearr_27676_27759 = state_27655__$1;
(statearr_27676_27759[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (40))){
var inst_27630 = (state_27655[(20)]);
var inst_27629 = (state_27655[(2)]);
var inst_27630__$1 = cljs.core.get.call(null,inst_27629,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27631 = cljs.core.get.call(null,inst_27629,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27632 = cljs.core.not_empty.call(null,inst_27630__$1);
var state_27655__$1 = (function (){var statearr_27677 = state_27655;
(statearr_27677[(21)] = inst_27631);

(statearr_27677[(20)] = inst_27630__$1);

return statearr_27677;
})();
if(cljs.core.truth_(inst_27632)){
var statearr_27678_27760 = state_27655__$1;
(statearr_27678_27760[(1)] = (41));

} else {
var statearr_27679_27761 = state_27655__$1;
(statearr_27679_27761[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (33))){
var state_27655__$1 = state_27655;
var statearr_27680_27762 = state_27655__$1;
(statearr_27680_27762[(2)] = false);

(statearr_27680_27762[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (13))){
var inst_27529 = (state_27655[(22)]);
var inst_27533 = cljs.core.chunk_first.call(null,inst_27529);
var inst_27534 = cljs.core.chunk_rest.call(null,inst_27529);
var inst_27535 = cljs.core.count.call(null,inst_27533);
var inst_27516 = inst_27534;
var inst_27517 = inst_27533;
var inst_27518 = inst_27535;
var inst_27519 = (0);
var state_27655__$1 = (function (){var statearr_27681 = state_27655;
(statearr_27681[(7)] = inst_27518);

(statearr_27681[(8)] = inst_27517);

(statearr_27681[(9)] = inst_27519);

(statearr_27681[(10)] = inst_27516);

return statearr_27681;
})();
var statearr_27682_27763 = state_27655__$1;
(statearr_27682_27763[(2)] = null);

(statearr_27682_27763[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (22))){
var inst_27577 = (state_27655[(23)]);
var inst_27572 = (state_27655[(24)]);
var inst_27569 = (state_27655[(19)]);
var inst_27573 = (state_27655[(25)]);
var inst_27572__$1 = (state_27655[(2)]);
var inst_27573__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27572__$1);
var inst_27574 = (function (){var all_files = inst_27569;
var res_SINGLEQUOTE_ = inst_27572__$1;
var res = inst_27573__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27577,inst_27572,inst_27569,inst_27573,inst_27572__$1,inst_27573__$1,state_val_27656,c__22205__auto__,map__27501,map__27501__$1,opts,before_jsload,on_jsload,reload_dependents,map__27502,map__27502__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27252_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27252_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27577,inst_27572,inst_27569,inst_27573,inst_27572__$1,inst_27573__$1,state_val_27656,c__22205__auto__,map__27501,map__27501__$1,opts,before_jsload,on_jsload,reload_dependents,map__27502,map__27502__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27575 = cljs.core.filter.call(null,inst_27574,inst_27572__$1);
var inst_27576 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27577__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27576);
var inst_27578 = cljs.core.not_empty.call(null,inst_27577__$1);
var state_27655__$1 = (function (){var statearr_27683 = state_27655;
(statearr_27683[(23)] = inst_27577__$1);

(statearr_27683[(24)] = inst_27572__$1);

(statearr_27683[(25)] = inst_27573__$1);

(statearr_27683[(26)] = inst_27575);

return statearr_27683;
})();
if(cljs.core.truth_(inst_27578)){
var statearr_27684_27764 = state_27655__$1;
(statearr_27684_27764[(1)] = (23));

} else {
var statearr_27685_27765 = state_27655__$1;
(statearr_27685_27765[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (36))){
var state_27655__$1 = state_27655;
var statearr_27686_27766 = state_27655__$1;
(statearr_27686_27766[(2)] = false);

(statearr_27686_27766[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (41))){
var inst_27630 = (state_27655[(20)]);
var inst_27634 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27635 = cljs.core.map.call(null,inst_27634,inst_27630);
var inst_27636 = cljs.core.pr_str.call(null,inst_27635);
var inst_27637 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27636)].join('');
var inst_27638 = figwheel.client.utils.log.call(null,inst_27637);
var state_27655__$1 = state_27655;
var statearr_27687_27767 = state_27655__$1;
(statearr_27687_27767[(2)] = inst_27638);

(statearr_27687_27767[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (43))){
var inst_27631 = (state_27655[(21)]);
var inst_27641 = (state_27655[(2)]);
var inst_27642 = cljs.core.not_empty.call(null,inst_27631);
var state_27655__$1 = (function (){var statearr_27688 = state_27655;
(statearr_27688[(27)] = inst_27641);

return statearr_27688;
})();
if(cljs.core.truth_(inst_27642)){
var statearr_27689_27768 = state_27655__$1;
(statearr_27689_27768[(1)] = (44));

} else {
var statearr_27690_27769 = state_27655__$1;
(statearr_27690_27769[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (29))){
var inst_27577 = (state_27655[(23)]);
var inst_27609 = (state_27655[(16)]);
var inst_27572 = (state_27655[(24)]);
var inst_27569 = (state_27655[(19)]);
var inst_27573 = (state_27655[(25)]);
var inst_27575 = (state_27655[(26)]);
var inst_27605 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27608 = (function (){var all_files = inst_27569;
var res_SINGLEQUOTE_ = inst_27572;
var res = inst_27573;
var files_not_loaded = inst_27575;
var dependencies_that_loaded = inst_27577;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27577,inst_27609,inst_27572,inst_27569,inst_27573,inst_27575,inst_27605,state_val_27656,c__22205__auto__,map__27501,map__27501__$1,opts,before_jsload,on_jsload,reload_dependents,map__27502,map__27502__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27607){
var map__27691 = p__27607;
var map__27691__$1 = ((((!((map__27691 == null)))?((((map__27691.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27691.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27691):map__27691);
var namespace = cljs.core.get.call(null,map__27691__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27577,inst_27609,inst_27572,inst_27569,inst_27573,inst_27575,inst_27605,state_val_27656,c__22205__auto__,map__27501,map__27501__$1,opts,before_jsload,on_jsload,reload_dependents,map__27502,map__27502__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27609__$1 = cljs.core.group_by.call(null,inst_27608,inst_27575);
var inst_27611 = (inst_27609__$1 == null);
var inst_27612 = cljs.core.not.call(null,inst_27611);
var state_27655__$1 = (function (){var statearr_27693 = state_27655;
(statearr_27693[(16)] = inst_27609__$1);

(statearr_27693[(28)] = inst_27605);

return statearr_27693;
})();
if(inst_27612){
var statearr_27694_27770 = state_27655__$1;
(statearr_27694_27770[(1)] = (32));

} else {
var statearr_27695_27771 = state_27655__$1;
(statearr_27695_27771[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (44))){
var inst_27631 = (state_27655[(21)]);
var inst_27644 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27631);
var inst_27645 = cljs.core.pr_str.call(null,inst_27644);
var inst_27646 = [cljs.core.str("not required: "),cljs.core.str(inst_27645)].join('');
var inst_27647 = figwheel.client.utils.log.call(null,inst_27646);
var state_27655__$1 = state_27655;
var statearr_27696_27772 = state_27655__$1;
(statearr_27696_27772[(2)] = inst_27647);

(statearr_27696_27772[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (6))){
var inst_27550 = (state_27655[(2)]);
var state_27655__$1 = state_27655;
var statearr_27697_27773 = state_27655__$1;
(statearr_27697_27773[(2)] = inst_27550);

(statearr_27697_27773[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (28))){
var inst_27575 = (state_27655[(26)]);
var inst_27602 = (state_27655[(2)]);
var inst_27603 = cljs.core.not_empty.call(null,inst_27575);
var state_27655__$1 = (function (){var statearr_27698 = state_27655;
(statearr_27698[(29)] = inst_27602);

return statearr_27698;
})();
if(cljs.core.truth_(inst_27603)){
var statearr_27699_27774 = state_27655__$1;
(statearr_27699_27774[(1)] = (29));

} else {
var statearr_27700_27775 = state_27655__$1;
(statearr_27700_27775[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (25))){
var inst_27573 = (state_27655[(25)]);
var inst_27589 = (state_27655[(2)]);
var inst_27590 = cljs.core.not_empty.call(null,inst_27573);
var state_27655__$1 = (function (){var statearr_27701 = state_27655;
(statearr_27701[(30)] = inst_27589);

return statearr_27701;
})();
if(cljs.core.truth_(inst_27590)){
var statearr_27702_27776 = state_27655__$1;
(statearr_27702_27776[(1)] = (26));

} else {
var statearr_27703_27777 = state_27655__$1;
(statearr_27703_27777[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (34))){
var inst_27624 = (state_27655[(2)]);
var state_27655__$1 = state_27655;
if(cljs.core.truth_(inst_27624)){
var statearr_27704_27778 = state_27655__$1;
(statearr_27704_27778[(1)] = (38));

} else {
var statearr_27705_27779 = state_27655__$1;
(statearr_27705_27779[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (17))){
var state_27655__$1 = state_27655;
var statearr_27706_27780 = state_27655__$1;
(statearr_27706_27780[(2)] = recompile_dependents);

(statearr_27706_27780[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (3))){
var state_27655__$1 = state_27655;
var statearr_27707_27781 = state_27655__$1;
(statearr_27707_27781[(2)] = null);

(statearr_27707_27781[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (12))){
var inst_27546 = (state_27655[(2)]);
var state_27655__$1 = state_27655;
var statearr_27708_27782 = state_27655__$1;
(statearr_27708_27782[(2)] = inst_27546);

(statearr_27708_27782[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (2))){
var inst_27508 = (state_27655[(13)]);
var inst_27515 = cljs.core.seq.call(null,inst_27508);
var inst_27516 = inst_27515;
var inst_27517 = null;
var inst_27518 = (0);
var inst_27519 = (0);
var state_27655__$1 = (function (){var statearr_27709 = state_27655;
(statearr_27709[(7)] = inst_27518);

(statearr_27709[(8)] = inst_27517);

(statearr_27709[(9)] = inst_27519);

(statearr_27709[(10)] = inst_27516);

return statearr_27709;
})();
var statearr_27710_27783 = state_27655__$1;
(statearr_27710_27783[(2)] = null);

(statearr_27710_27783[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (23))){
var inst_27577 = (state_27655[(23)]);
var inst_27572 = (state_27655[(24)]);
var inst_27569 = (state_27655[(19)]);
var inst_27573 = (state_27655[(25)]);
var inst_27575 = (state_27655[(26)]);
var inst_27580 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27582 = (function (){var all_files = inst_27569;
var res_SINGLEQUOTE_ = inst_27572;
var res = inst_27573;
var files_not_loaded = inst_27575;
var dependencies_that_loaded = inst_27577;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27577,inst_27572,inst_27569,inst_27573,inst_27575,inst_27580,state_val_27656,c__22205__auto__,map__27501,map__27501__$1,opts,before_jsload,on_jsload,reload_dependents,map__27502,map__27502__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27581){
var map__27711 = p__27581;
var map__27711__$1 = ((((!((map__27711 == null)))?((((map__27711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27711):map__27711);
var request_url = cljs.core.get.call(null,map__27711__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27577,inst_27572,inst_27569,inst_27573,inst_27575,inst_27580,state_val_27656,c__22205__auto__,map__27501,map__27501__$1,opts,before_jsload,on_jsload,reload_dependents,map__27502,map__27502__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27583 = cljs.core.reverse.call(null,inst_27577);
var inst_27584 = cljs.core.map.call(null,inst_27582,inst_27583);
var inst_27585 = cljs.core.pr_str.call(null,inst_27584);
var inst_27586 = figwheel.client.utils.log.call(null,inst_27585);
var state_27655__$1 = (function (){var statearr_27713 = state_27655;
(statearr_27713[(31)] = inst_27580);

return statearr_27713;
})();
var statearr_27714_27784 = state_27655__$1;
(statearr_27714_27784[(2)] = inst_27586);

(statearr_27714_27784[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (35))){
var state_27655__$1 = state_27655;
var statearr_27715_27785 = state_27655__$1;
(statearr_27715_27785[(2)] = true);

(statearr_27715_27785[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (19))){
var inst_27559 = (state_27655[(12)]);
var inst_27565 = figwheel.client.file_reloading.expand_files.call(null,inst_27559);
var state_27655__$1 = state_27655;
var statearr_27716_27786 = state_27655__$1;
(statearr_27716_27786[(2)] = inst_27565);

(statearr_27716_27786[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (11))){
var state_27655__$1 = state_27655;
var statearr_27717_27787 = state_27655__$1;
(statearr_27717_27787[(2)] = null);

(statearr_27717_27787[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (9))){
var inst_27548 = (state_27655[(2)]);
var state_27655__$1 = state_27655;
var statearr_27718_27788 = state_27655__$1;
(statearr_27718_27788[(2)] = inst_27548);

(statearr_27718_27788[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (5))){
var inst_27518 = (state_27655[(7)]);
var inst_27519 = (state_27655[(9)]);
var inst_27521 = (inst_27519 < inst_27518);
var inst_27522 = inst_27521;
var state_27655__$1 = state_27655;
if(cljs.core.truth_(inst_27522)){
var statearr_27719_27789 = state_27655__$1;
(statearr_27719_27789[(1)] = (7));

} else {
var statearr_27720_27790 = state_27655__$1;
(statearr_27720_27790[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (14))){
var inst_27529 = (state_27655[(22)]);
var inst_27538 = cljs.core.first.call(null,inst_27529);
var inst_27539 = figwheel.client.file_reloading.eval_body.call(null,inst_27538,opts);
var inst_27540 = cljs.core.next.call(null,inst_27529);
var inst_27516 = inst_27540;
var inst_27517 = null;
var inst_27518 = (0);
var inst_27519 = (0);
var state_27655__$1 = (function (){var statearr_27721 = state_27655;
(statearr_27721[(7)] = inst_27518);

(statearr_27721[(8)] = inst_27517);

(statearr_27721[(9)] = inst_27519);

(statearr_27721[(32)] = inst_27539);

(statearr_27721[(10)] = inst_27516);

return statearr_27721;
})();
var statearr_27722_27791 = state_27655__$1;
(statearr_27722_27791[(2)] = null);

(statearr_27722_27791[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (45))){
var state_27655__$1 = state_27655;
var statearr_27723_27792 = state_27655__$1;
(statearr_27723_27792[(2)] = null);

(statearr_27723_27792[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (26))){
var inst_27577 = (state_27655[(23)]);
var inst_27572 = (state_27655[(24)]);
var inst_27569 = (state_27655[(19)]);
var inst_27573 = (state_27655[(25)]);
var inst_27575 = (state_27655[(26)]);
var inst_27592 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27594 = (function (){var all_files = inst_27569;
var res_SINGLEQUOTE_ = inst_27572;
var res = inst_27573;
var files_not_loaded = inst_27575;
var dependencies_that_loaded = inst_27577;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27577,inst_27572,inst_27569,inst_27573,inst_27575,inst_27592,state_val_27656,c__22205__auto__,map__27501,map__27501__$1,opts,before_jsload,on_jsload,reload_dependents,map__27502,map__27502__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27593){
var map__27724 = p__27593;
var map__27724__$1 = ((((!((map__27724 == null)))?((((map__27724.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27724.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27724):map__27724);
var namespace = cljs.core.get.call(null,map__27724__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27724__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27577,inst_27572,inst_27569,inst_27573,inst_27575,inst_27592,state_val_27656,c__22205__auto__,map__27501,map__27501__$1,opts,before_jsload,on_jsload,reload_dependents,map__27502,map__27502__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27595 = cljs.core.map.call(null,inst_27594,inst_27573);
var inst_27596 = cljs.core.pr_str.call(null,inst_27595);
var inst_27597 = figwheel.client.utils.log.call(null,inst_27596);
var inst_27598 = (function (){var all_files = inst_27569;
var res_SINGLEQUOTE_ = inst_27572;
var res = inst_27573;
var files_not_loaded = inst_27575;
var dependencies_that_loaded = inst_27577;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27577,inst_27572,inst_27569,inst_27573,inst_27575,inst_27592,inst_27594,inst_27595,inst_27596,inst_27597,state_val_27656,c__22205__auto__,map__27501,map__27501__$1,opts,before_jsload,on_jsload,reload_dependents,map__27502,map__27502__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27577,inst_27572,inst_27569,inst_27573,inst_27575,inst_27592,inst_27594,inst_27595,inst_27596,inst_27597,state_val_27656,c__22205__auto__,map__27501,map__27501__$1,opts,before_jsload,on_jsload,reload_dependents,map__27502,map__27502__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27599 = setTimeout(inst_27598,(10));
var state_27655__$1 = (function (){var statearr_27726 = state_27655;
(statearr_27726[(33)] = inst_27597);

(statearr_27726[(34)] = inst_27592);

return statearr_27726;
})();
var statearr_27727_27793 = state_27655__$1;
(statearr_27727_27793[(2)] = inst_27599);

(statearr_27727_27793[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (16))){
var state_27655__$1 = state_27655;
var statearr_27728_27794 = state_27655__$1;
(statearr_27728_27794[(2)] = reload_dependents);

(statearr_27728_27794[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (38))){
var inst_27609 = (state_27655[(16)]);
var inst_27626 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27609);
var state_27655__$1 = state_27655;
var statearr_27729_27795 = state_27655__$1;
(statearr_27729_27795[(2)] = inst_27626);

(statearr_27729_27795[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (30))){
var state_27655__$1 = state_27655;
var statearr_27730_27796 = state_27655__$1;
(statearr_27730_27796[(2)] = null);

(statearr_27730_27796[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (10))){
var inst_27529 = (state_27655[(22)]);
var inst_27531 = cljs.core.chunked_seq_QMARK_.call(null,inst_27529);
var state_27655__$1 = state_27655;
if(inst_27531){
var statearr_27731_27797 = state_27655__$1;
(statearr_27731_27797[(1)] = (13));

} else {
var statearr_27732_27798 = state_27655__$1;
(statearr_27732_27798[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (18))){
var inst_27563 = (state_27655[(2)]);
var state_27655__$1 = state_27655;
if(cljs.core.truth_(inst_27563)){
var statearr_27733_27799 = state_27655__$1;
(statearr_27733_27799[(1)] = (19));

} else {
var statearr_27734_27800 = state_27655__$1;
(statearr_27734_27800[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (42))){
var state_27655__$1 = state_27655;
var statearr_27735_27801 = state_27655__$1;
(statearr_27735_27801[(2)] = null);

(statearr_27735_27801[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (37))){
var inst_27621 = (state_27655[(2)]);
var state_27655__$1 = state_27655;
var statearr_27736_27802 = state_27655__$1;
(statearr_27736_27802[(2)] = inst_27621);

(statearr_27736_27802[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (8))){
var inst_27529 = (state_27655[(22)]);
var inst_27516 = (state_27655[(10)]);
var inst_27529__$1 = cljs.core.seq.call(null,inst_27516);
var state_27655__$1 = (function (){var statearr_27737 = state_27655;
(statearr_27737[(22)] = inst_27529__$1);

return statearr_27737;
})();
if(inst_27529__$1){
var statearr_27738_27803 = state_27655__$1;
(statearr_27738_27803[(1)] = (10));

} else {
var statearr_27739_27804 = state_27655__$1;
(statearr_27739_27804[(1)] = (11));

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
});})(c__22205__auto__,map__27501,map__27501__$1,opts,before_jsload,on_jsload,reload_dependents,map__27502,map__27502__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22093__auto__,c__22205__auto__,map__27501,map__27501__$1,opts,before_jsload,on_jsload,reload_dependents,map__27502,map__27502__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22094__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22094__auto____0 = (function (){
var statearr_27743 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27743[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22094__auto__);

(statearr_27743[(1)] = (1));

return statearr_27743;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22094__auto____1 = (function (state_27655){
while(true){
var ret_value__22095__auto__ = (function (){try{while(true){
var result__22096__auto__ = switch__22093__auto__.call(null,state_27655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22096__auto__;
}
break;
}
}catch (e27744){if((e27744 instanceof Object)){
var ex__22097__auto__ = e27744;
var statearr_27745_27805 = state_27655;
(statearr_27745_27805[(5)] = ex__22097__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27806 = state_27655;
state_27655 = G__27806;
continue;
} else {
return ret_value__22095__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22094__auto__ = function(state_27655){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22094__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22094__auto____1.call(this,state_27655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22094__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22094__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22094__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22094__auto__;
})()
;})(switch__22093__auto__,c__22205__auto__,map__27501,map__27501__$1,opts,before_jsload,on_jsload,reload_dependents,map__27502,map__27502__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22207__auto__ = (function (){var statearr_27746 = f__22206__auto__.call(null);
(statearr_27746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22205__auto__);

return statearr_27746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22207__auto__);
});})(c__22205__auto__,map__27501,map__27501__$1,opts,before_jsload,on_jsload,reload_dependents,map__27502,map__27502__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22205__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27809,link){
var map__27812 = p__27809;
var map__27812__$1 = ((((!((map__27812 == null)))?((((map__27812.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27812.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27812):map__27812);
var file = cljs.core.get.call(null,map__27812__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__27812,map__27812__$1,file){
return (function (p1__27807_SHARP_,p2__27808_SHARP_){
if(cljs.core._EQ_.call(null,p1__27807_SHARP_,p2__27808_SHARP_)){
return p1__27807_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__27812,map__27812__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27818){
var map__27819 = p__27818;
var map__27819__$1 = ((((!((map__27819 == null)))?((((map__27819.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27819.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27819):map__27819);
var match_length = cljs.core.get.call(null,map__27819__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27819__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27814_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27814_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
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
var args27821 = [];
var len__19538__auto___27824 = arguments.length;
var i__19539__auto___27825 = (0);
while(true){
if((i__19539__auto___27825 < len__19538__auto___27824)){
args27821.push((arguments[i__19539__auto___27825]));

var G__27826 = (i__19539__auto___27825 + (1));
i__19539__auto___27825 = G__27826;
continue;
} else {
}
break;
}

var G__27823 = args27821.length;
switch (G__27823) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27821.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27828_SHARP_,p2__27829_SHARP_){
return cljs.core.assoc.call(null,p1__27828_SHARP_,cljs.core.get.call(null,p2__27829_SHARP_,key),p2__27829_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27830){
var map__27833 = p__27830;
var map__27833__$1 = ((((!((map__27833 == null)))?((((map__27833.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27833.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27833):map__27833);
var f_data = map__27833__$1;
var file = cljs.core.get.call(null,map__27833__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27835,files_msg){
var map__27842 = p__27835;
var map__27842__$1 = ((((!((map__27842 == null)))?((((map__27842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27842):map__27842);
var opts = map__27842__$1;
var on_cssload = cljs.core.get.call(null,map__27842__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27844_27848 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27845_27849 = null;
var count__27846_27850 = (0);
var i__27847_27851 = (0);
while(true){
if((i__27847_27851 < count__27846_27850)){
var f_27852 = cljs.core._nth.call(null,chunk__27845_27849,i__27847_27851);
figwheel.client.file_reloading.reload_css_file.call(null,f_27852);

var G__27853 = seq__27844_27848;
var G__27854 = chunk__27845_27849;
var G__27855 = count__27846_27850;
var G__27856 = (i__27847_27851 + (1));
seq__27844_27848 = G__27853;
chunk__27845_27849 = G__27854;
count__27846_27850 = G__27855;
i__27847_27851 = G__27856;
continue;
} else {
var temp__4657__auto___27857 = cljs.core.seq.call(null,seq__27844_27848);
if(temp__4657__auto___27857){
var seq__27844_27858__$1 = temp__4657__auto___27857;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27844_27858__$1)){
var c__19279__auto___27859 = cljs.core.chunk_first.call(null,seq__27844_27858__$1);
var G__27860 = cljs.core.chunk_rest.call(null,seq__27844_27858__$1);
var G__27861 = c__19279__auto___27859;
var G__27862 = cljs.core.count.call(null,c__19279__auto___27859);
var G__27863 = (0);
seq__27844_27848 = G__27860;
chunk__27845_27849 = G__27861;
count__27846_27850 = G__27862;
i__27847_27851 = G__27863;
continue;
} else {
var f_27864 = cljs.core.first.call(null,seq__27844_27858__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27864);

var G__27865 = cljs.core.next.call(null,seq__27844_27858__$1);
var G__27866 = null;
var G__27867 = (0);
var G__27868 = (0);
seq__27844_27848 = G__27865;
chunk__27845_27849 = G__27866;
count__27846_27850 = G__27867;
i__27847_27851 = G__27868;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27842,map__27842__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27842,map__27842__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map