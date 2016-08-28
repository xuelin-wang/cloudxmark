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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34913_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34913_SHARP_));
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
var seq__34918 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34919 = null;
var count__34920 = (0);
var i__34921 = (0);
while(true){
if((i__34921 < count__34920)){
var n = cljs.core._nth.call(null,chunk__34919,i__34921);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34922 = seq__34918;
var G__34923 = chunk__34919;
var G__34924 = count__34920;
var G__34925 = (i__34921 + (1));
seq__34918 = G__34922;
chunk__34919 = G__34923;
count__34920 = G__34924;
i__34921 = G__34925;
continue;
} else {
var temp__6552__auto__ = cljs.core.seq.call(null,seq__34918);
if(temp__6552__auto__){
var seq__34918__$1 = temp__6552__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34918__$1)){
var c__22493__auto__ = cljs.core.chunk_first.call(null,seq__34918__$1);
var G__34926 = cljs.core.chunk_rest.call(null,seq__34918__$1);
var G__34927 = c__22493__auto__;
var G__34928 = cljs.core.count.call(null,c__22493__auto__);
var G__34929 = (0);
seq__34918 = G__34926;
chunk__34919 = G__34927;
count__34920 = G__34928;
i__34921 = G__34929;
continue;
} else {
var n = cljs.core.first.call(null,seq__34918__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34930 = cljs.core.next.call(null,seq__34918__$1);
var G__34931 = null;
var G__34932 = (0);
var G__34933 = (0);
seq__34918 = G__34930;
chunk__34919 = G__34931;
count__34920 = G__34932;
i__34921 = G__34933;
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

var seq__34984_34995 = cljs.core.seq.call(null,deps);
var chunk__34985_34996 = null;
var count__34986_34997 = (0);
var i__34987_34998 = (0);
while(true){
if((i__34987_34998 < count__34986_34997)){
var dep_34999 = cljs.core._nth.call(null,chunk__34985_34996,i__34987_34998);
topo_sort_helper_STAR_.call(null,dep_34999,(depth + (1)),state);

var G__35000 = seq__34984_34995;
var G__35001 = chunk__34985_34996;
var G__35002 = count__34986_34997;
var G__35003 = (i__34987_34998 + (1));
seq__34984_34995 = G__35000;
chunk__34985_34996 = G__35001;
count__34986_34997 = G__35002;
i__34987_34998 = G__35003;
continue;
} else {
var temp__6552__auto___35004 = cljs.core.seq.call(null,seq__34984_34995);
if(temp__6552__auto___35004){
var seq__34984_35005__$1 = temp__6552__auto___35004;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34984_35005__$1)){
var c__22493__auto___35006 = cljs.core.chunk_first.call(null,seq__34984_35005__$1);
var G__35007 = cljs.core.chunk_rest.call(null,seq__34984_35005__$1);
var G__35008 = c__22493__auto___35006;
var G__35009 = cljs.core.count.call(null,c__22493__auto___35006);
var G__35010 = (0);
seq__34984_34995 = G__35007;
chunk__34985_34996 = G__35008;
count__34986_34997 = G__35009;
i__34987_34998 = G__35010;
continue;
} else {
var dep_35011 = cljs.core.first.call(null,seq__34984_35005__$1);
topo_sort_helper_STAR_.call(null,dep_35011,(depth + (1)),state);

var G__35012 = cljs.core.next.call(null,seq__34984_35005__$1);
var G__35013 = null;
var G__35014 = (0);
var G__35015 = (0);
seq__34984_34995 = G__35012;
chunk__34985_34996 = G__35013;
count__34986_34997 = G__35014;
i__34987_34998 = G__35015;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34988){
var vec__34992 = p__34988;
var seq__34993 = cljs.core.seq.call(null,vec__34992);
var first__34994 = cljs.core.first.call(null,seq__34993);
var seq__34993__$1 = cljs.core.next.call(null,seq__34993);
var x = first__34994;
var xs = seq__34993__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34992,seq__34993,first__34994,seq__34993__$1,x,xs,get_deps__$1){
return (function (p1__34934_SHARP_){
return clojure.set.difference.call(null,p1__34934_SHARP_,x);
});})(vec__34992,seq__34993,first__34994,seq__34993__$1,x,xs,get_deps__$1))
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
var seq__35028 = cljs.core.seq.call(null,provides);
var chunk__35029 = null;
var count__35030 = (0);
var i__35031 = (0);
while(true){
if((i__35031 < count__35030)){
var prov = cljs.core._nth.call(null,chunk__35029,i__35031);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35032_35040 = cljs.core.seq.call(null,requires);
var chunk__35033_35041 = null;
var count__35034_35042 = (0);
var i__35035_35043 = (0);
while(true){
if((i__35035_35043 < count__35034_35042)){
var req_35044 = cljs.core._nth.call(null,chunk__35033_35041,i__35035_35043);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35044,prov);

var G__35045 = seq__35032_35040;
var G__35046 = chunk__35033_35041;
var G__35047 = count__35034_35042;
var G__35048 = (i__35035_35043 + (1));
seq__35032_35040 = G__35045;
chunk__35033_35041 = G__35046;
count__35034_35042 = G__35047;
i__35035_35043 = G__35048;
continue;
} else {
var temp__6552__auto___35049 = cljs.core.seq.call(null,seq__35032_35040);
if(temp__6552__auto___35049){
var seq__35032_35050__$1 = temp__6552__auto___35049;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35032_35050__$1)){
var c__22493__auto___35051 = cljs.core.chunk_first.call(null,seq__35032_35050__$1);
var G__35052 = cljs.core.chunk_rest.call(null,seq__35032_35050__$1);
var G__35053 = c__22493__auto___35051;
var G__35054 = cljs.core.count.call(null,c__22493__auto___35051);
var G__35055 = (0);
seq__35032_35040 = G__35052;
chunk__35033_35041 = G__35053;
count__35034_35042 = G__35054;
i__35035_35043 = G__35055;
continue;
} else {
var req_35056 = cljs.core.first.call(null,seq__35032_35050__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35056,prov);

var G__35057 = cljs.core.next.call(null,seq__35032_35050__$1);
var G__35058 = null;
var G__35059 = (0);
var G__35060 = (0);
seq__35032_35040 = G__35057;
chunk__35033_35041 = G__35058;
count__35034_35042 = G__35059;
i__35035_35043 = G__35060;
continue;
}
} else {
}
}
break;
}

var G__35061 = seq__35028;
var G__35062 = chunk__35029;
var G__35063 = count__35030;
var G__35064 = (i__35031 + (1));
seq__35028 = G__35061;
chunk__35029 = G__35062;
count__35030 = G__35063;
i__35031 = G__35064;
continue;
} else {
var temp__6552__auto__ = cljs.core.seq.call(null,seq__35028);
if(temp__6552__auto__){
var seq__35028__$1 = temp__6552__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35028__$1)){
var c__22493__auto__ = cljs.core.chunk_first.call(null,seq__35028__$1);
var G__35065 = cljs.core.chunk_rest.call(null,seq__35028__$1);
var G__35066 = c__22493__auto__;
var G__35067 = cljs.core.count.call(null,c__22493__auto__);
var G__35068 = (0);
seq__35028 = G__35065;
chunk__35029 = G__35066;
count__35030 = G__35067;
i__35031 = G__35068;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35028__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35036_35069 = cljs.core.seq.call(null,requires);
var chunk__35037_35070 = null;
var count__35038_35071 = (0);
var i__35039_35072 = (0);
while(true){
if((i__35039_35072 < count__35038_35071)){
var req_35073 = cljs.core._nth.call(null,chunk__35037_35070,i__35039_35072);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35073,prov);

var G__35074 = seq__35036_35069;
var G__35075 = chunk__35037_35070;
var G__35076 = count__35038_35071;
var G__35077 = (i__35039_35072 + (1));
seq__35036_35069 = G__35074;
chunk__35037_35070 = G__35075;
count__35038_35071 = G__35076;
i__35039_35072 = G__35077;
continue;
} else {
var temp__6552__auto___35078__$1 = cljs.core.seq.call(null,seq__35036_35069);
if(temp__6552__auto___35078__$1){
var seq__35036_35079__$1 = temp__6552__auto___35078__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35036_35079__$1)){
var c__22493__auto___35080 = cljs.core.chunk_first.call(null,seq__35036_35079__$1);
var G__35081 = cljs.core.chunk_rest.call(null,seq__35036_35079__$1);
var G__35082 = c__22493__auto___35080;
var G__35083 = cljs.core.count.call(null,c__22493__auto___35080);
var G__35084 = (0);
seq__35036_35069 = G__35081;
chunk__35037_35070 = G__35082;
count__35038_35071 = G__35083;
i__35039_35072 = G__35084;
continue;
} else {
var req_35085 = cljs.core.first.call(null,seq__35036_35079__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35085,prov);

var G__35086 = cljs.core.next.call(null,seq__35036_35079__$1);
var G__35087 = null;
var G__35088 = (0);
var G__35089 = (0);
seq__35036_35069 = G__35086;
chunk__35037_35070 = G__35087;
count__35038_35071 = G__35088;
i__35039_35072 = G__35089;
continue;
}
} else {
}
}
break;
}

var G__35090 = cljs.core.next.call(null,seq__35028__$1);
var G__35091 = null;
var G__35092 = (0);
var G__35093 = (0);
seq__35028 = G__35090;
chunk__35029 = G__35091;
count__35030 = G__35092;
i__35031 = G__35093;
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
var seq__35098_35102 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35099_35103 = null;
var count__35100_35104 = (0);
var i__35101_35105 = (0);
while(true){
if((i__35101_35105 < count__35100_35104)){
var ns_35106 = cljs.core._nth.call(null,chunk__35099_35103,i__35101_35105);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35106);

var G__35107 = seq__35098_35102;
var G__35108 = chunk__35099_35103;
var G__35109 = count__35100_35104;
var G__35110 = (i__35101_35105 + (1));
seq__35098_35102 = G__35107;
chunk__35099_35103 = G__35108;
count__35100_35104 = G__35109;
i__35101_35105 = G__35110;
continue;
} else {
var temp__6552__auto___35111 = cljs.core.seq.call(null,seq__35098_35102);
if(temp__6552__auto___35111){
var seq__35098_35112__$1 = temp__6552__auto___35111;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35098_35112__$1)){
var c__22493__auto___35113 = cljs.core.chunk_first.call(null,seq__35098_35112__$1);
var G__35114 = cljs.core.chunk_rest.call(null,seq__35098_35112__$1);
var G__35115 = c__22493__auto___35113;
var G__35116 = cljs.core.count.call(null,c__22493__auto___35113);
var G__35117 = (0);
seq__35098_35102 = G__35114;
chunk__35099_35103 = G__35115;
count__35100_35104 = G__35116;
i__35101_35105 = G__35117;
continue;
} else {
var ns_35118 = cljs.core.first.call(null,seq__35098_35112__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35118);

var G__35119 = cljs.core.next.call(null,seq__35098_35112__$1);
var G__35120 = null;
var G__35121 = (0);
var G__35122 = (0);
seq__35098_35102 = G__35119;
chunk__35099_35103 = G__35120;
count__35100_35104 = G__35121;
i__35101_35105 = G__35122;
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
var G__35123__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35123 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35124__i = 0, G__35124__a = new Array(arguments.length -  0);
while (G__35124__i < G__35124__a.length) {G__35124__a[G__35124__i] = arguments[G__35124__i + 0]; ++G__35124__i;}
  args = new cljs.core.IndexedSeq(G__35124__a,0);
} 
return G__35123__delegate.call(this,args);};
G__35123.cljs$lang$maxFixedArity = 0;
G__35123.cljs$lang$applyTo = (function (arglist__35125){
var args = cljs.core.seq(arglist__35125);
return G__35123__delegate(args);
});
G__35123.cljs$core$IFn$_invoke$arity$variadic = G__35123__delegate;
return G__35123;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35127 = cljs.core._EQ_;
var expr__35128 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35127.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35128))){
var path_parts = ((function (pred__35127,expr__35128){
return (function (p1__35126_SHARP_){
return clojure.string.split.call(null,p1__35126_SHARP_,/[\/\\]/);
});})(pred__35127,expr__35128))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__35127,expr__35128){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35130){if((e35130 instanceof Error)){
var e = e35130;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35130;

}
}})());
});
;})(path_parts,sep,root,pred__35127,expr__35128))
} else {
if(cljs.core.truth_(pred__35127.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35128))){
return ((function (pred__35127,expr__35128){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__35127,expr__35128){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__35127,expr__35128))
);

return deferred.addErrback(((function (deferred,pred__35127,expr__35128){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__35127,expr__35128))
);
});
;})(pred__35127,expr__35128))
} else {
return ((function (pred__35127,expr__35128){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35127,expr__35128))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35131,callback){
var map__35134 = p__35131;
var map__35134__$1 = ((((!((map__35134 == null)))?((((map__35134.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35134.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35134):map__35134);
var file_msg = map__35134__$1;
var request_url = cljs.core.get.call(null,map__35134__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35134,map__35134__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35134,map__35134__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__24265__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24265__auto__){
return (function (){
var f__24266__auto__ = (function (){var switch__24151__auto__ = ((function (c__24265__auto__){
return (function (state_35158){
var state_val_35159 = (state_35158[(1)]);
if((state_val_35159 === (7))){
var inst_35154 = (state_35158[(2)]);
var state_35158__$1 = state_35158;
var statearr_35160_35180 = state_35158__$1;
(statearr_35160_35180[(2)] = inst_35154);

(statearr_35160_35180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35159 === (1))){
var state_35158__$1 = state_35158;
var statearr_35161_35181 = state_35158__$1;
(statearr_35161_35181[(2)] = null);

(statearr_35161_35181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35159 === (4))){
var inst_35138 = (state_35158[(7)]);
var inst_35138__$1 = (state_35158[(2)]);
var state_35158__$1 = (function (){var statearr_35162 = state_35158;
(statearr_35162[(7)] = inst_35138__$1);

return statearr_35162;
})();
if(cljs.core.truth_(inst_35138__$1)){
var statearr_35163_35182 = state_35158__$1;
(statearr_35163_35182[(1)] = (5));

} else {
var statearr_35164_35183 = state_35158__$1;
(statearr_35164_35183[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35159 === (6))){
var state_35158__$1 = state_35158;
var statearr_35165_35184 = state_35158__$1;
(statearr_35165_35184[(2)] = null);

(statearr_35165_35184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35159 === (3))){
var inst_35156 = (state_35158[(2)]);
var state_35158__$1 = state_35158;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35158__$1,inst_35156);
} else {
if((state_val_35159 === (2))){
var state_35158__$1 = state_35158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35158__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35159 === (11))){
var inst_35150 = (state_35158[(2)]);
var state_35158__$1 = (function (){var statearr_35166 = state_35158;
(statearr_35166[(8)] = inst_35150);

return statearr_35166;
})();
var statearr_35167_35185 = state_35158__$1;
(statearr_35167_35185[(2)] = null);

(statearr_35167_35185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35159 === (9))){
var inst_35142 = (state_35158[(9)]);
var inst_35144 = (state_35158[(10)]);
var inst_35146 = inst_35144.call(null,inst_35142);
var state_35158__$1 = state_35158;
var statearr_35168_35186 = state_35158__$1;
(statearr_35168_35186[(2)] = inst_35146);

(statearr_35168_35186[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35159 === (5))){
var inst_35138 = (state_35158[(7)]);
var inst_35140 = figwheel.client.file_reloading.blocking_load.call(null,inst_35138);
var state_35158__$1 = state_35158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35158__$1,(8),inst_35140);
} else {
if((state_val_35159 === (10))){
var inst_35142 = (state_35158[(9)]);
var inst_35148 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35142);
var state_35158__$1 = state_35158;
var statearr_35169_35187 = state_35158__$1;
(statearr_35169_35187[(2)] = inst_35148);

(statearr_35169_35187[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35159 === (8))){
var inst_35144 = (state_35158[(10)]);
var inst_35138 = (state_35158[(7)]);
var inst_35142 = (state_35158[(2)]);
var inst_35143 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35144__$1 = cljs.core.get.call(null,inst_35143,inst_35138);
var state_35158__$1 = (function (){var statearr_35170 = state_35158;
(statearr_35170[(9)] = inst_35142);

(statearr_35170[(10)] = inst_35144__$1);

return statearr_35170;
})();
if(cljs.core.truth_(inst_35144__$1)){
var statearr_35171_35188 = state_35158__$1;
(statearr_35171_35188[(1)] = (9));

} else {
var statearr_35172_35189 = state_35158__$1;
(statearr_35172_35189[(1)] = (10));

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
});})(c__24265__auto__))
;
return ((function (switch__24151__auto__,c__24265__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24152__auto__ = null;
var figwheel$client$file_reloading$state_machine__24152__auto____0 = (function (){
var statearr_35176 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35176[(0)] = figwheel$client$file_reloading$state_machine__24152__auto__);

(statearr_35176[(1)] = (1));

return statearr_35176;
});
var figwheel$client$file_reloading$state_machine__24152__auto____1 = (function (state_35158){
while(true){
var ret_value__24153__auto__ = (function (){try{while(true){
var result__24154__auto__ = switch__24151__auto__.call(null,state_35158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24154__auto__;
}
break;
}
}catch (e35177){if((e35177 instanceof Object)){
var ex__24155__auto__ = e35177;
var statearr_35178_35190 = state_35158;
(statearr_35178_35190[(5)] = ex__24155__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35191 = state_35158;
state_35158 = G__35191;
continue;
} else {
return ret_value__24153__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24152__auto__ = function(state_35158){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24152__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24152__auto____1.call(this,state_35158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24152__auto____0;
figwheel$client$file_reloading$state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24152__auto____1;
return figwheel$client$file_reloading$state_machine__24152__auto__;
})()
;})(switch__24151__auto__,c__24265__auto__))
})();
var state__24267__auto__ = (function (){var statearr_35179 = f__24266__auto__.call(null);
(statearr_35179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24265__auto__);

return statearr_35179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24267__auto__);
});})(c__24265__auto__))
);

return c__24265__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35192,callback){
var map__35195 = p__35192;
var map__35195__$1 = ((((!((map__35195 == null)))?((((map__35195.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35195.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35195):map__35195);
var file_msg = map__35195__$1;
var namespace = cljs.core.get.call(null,map__35195__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35195,map__35195__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35195,map__35195__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35197){
var map__35200 = p__35197;
var map__35200__$1 = ((((!((map__35200 == null)))?((((map__35200.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35200.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35200):map__35200);
var file_msg = map__35200__$1;
var namespace = cljs.core.get.call(null,map__35200__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35202,callback){
var map__35205 = p__35202;
var map__35205__$1 = ((((!((map__35205 == null)))?((((map__35205.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35205.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35205):map__35205);
var file_msg = map__35205__$1;
var request_url = cljs.core.get.call(null,map__35205__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35205__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__24265__auto___35309 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24265__auto___35309,out){
return (function (){
var f__24266__auto__ = (function (){var switch__24151__auto__ = ((function (c__24265__auto___35309,out){
return (function (state_35291){
var state_val_35292 = (state_35291[(1)]);
if((state_val_35292 === (1))){
var inst_35265 = cljs.core.seq.call(null,files);
var inst_35266 = cljs.core.first.call(null,inst_35265);
var inst_35267 = cljs.core.next.call(null,inst_35265);
var inst_35268 = files;
var state_35291__$1 = (function (){var statearr_35293 = state_35291;
(statearr_35293[(7)] = inst_35268);

(statearr_35293[(8)] = inst_35266);

(statearr_35293[(9)] = inst_35267);

return statearr_35293;
})();
var statearr_35294_35310 = state_35291__$1;
(statearr_35294_35310[(2)] = null);

(statearr_35294_35310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (2))){
var inst_35268 = (state_35291[(7)]);
var inst_35274 = (state_35291[(10)]);
var inst_35273 = cljs.core.seq.call(null,inst_35268);
var inst_35274__$1 = cljs.core.first.call(null,inst_35273);
var inst_35275 = cljs.core.next.call(null,inst_35273);
var inst_35276 = (inst_35274__$1 == null);
var inst_35277 = cljs.core.not.call(null,inst_35276);
var state_35291__$1 = (function (){var statearr_35295 = state_35291;
(statearr_35295[(10)] = inst_35274__$1);

(statearr_35295[(11)] = inst_35275);

return statearr_35295;
})();
if(inst_35277){
var statearr_35296_35311 = state_35291__$1;
(statearr_35296_35311[(1)] = (4));

} else {
var statearr_35297_35312 = state_35291__$1;
(statearr_35297_35312[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (3))){
var inst_35289 = (state_35291[(2)]);
var state_35291__$1 = state_35291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35291__$1,inst_35289);
} else {
if((state_val_35292 === (4))){
var inst_35274 = (state_35291[(10)]);
var inst_35279 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35274);
var state_35291__$1 = state_35291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35291__$1,(7),inst_35279);
} else {
if((state_val_35292 === (5))){
var inst_35285 = cljs.core.async.close_BANG_.call(null,out);
var state_35291__$1 = state_35291;
var statearr_35298_35313 = state_35291__$1;
(statearr_35298_35313[(2)] = inst_35285);

(statearr_35298_35313[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (6))){
var inst_35287 = (state_35291[(2)]);
var state_35291__$1 = state_35291;
var statearr_35299_35314 = state_35291__$1;
(statearr_35299_35314[(2)] = inst_35287);

(statearr_35299_35314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (7))){
var inst_35275 = (state_35291[(11)]);
var inst_35281 = (state_35291[(2)]);
var inst_35282 = cljs.core.async.put_BANG_.call(null,out,inst_35281);
var inst_35268 = inst_35275;
var state_35291__$1 = (function (){var statearr_35300 = state_35291;
(statearr_35300[(7)] = inst_35268);

(statearr_35300[(12)] = inst_35282);

return statearr_35300;
})();
var statearr_35301_35315 = state_35291__$1;
(statearr_35301_35315[(2)] = null);

(statearr_35301_35315[(1)] = (2));


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
});})(c__24265__auto___35309,out))
;
return ((function (switch__24151__auto__,c__24265__auto___35309,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24152__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24152__auto____0 = (function (){
var statearr_35305 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35305[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24152__auto__);

(statearr_35305[(1)] = (1));

return statearr_35305;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24152__auto____1 = (function (state_35291){
while(true){
var ret_value__24153__auto__ = (function (){try{while(true){
var result__24154__auto__ = switch__24151__auto__.call(null,state_35291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24154__auto__;
}
break;
}
}catch (e35306){if((e35306 instanceof Object)){
var ex__24155__auto__ = e35306;
var statearr_35307_35316 = state_35291;
(statearr_35307_35316[(5)] = ex__24155__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35317 = state_35291;
state_35291 = G__35317;
continue;
} else {
return ret_value__24153__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24152__auto__ = function(state_35291){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24152__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24152__auto____1.call(this,state_35291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24152__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24152__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24152__auto__;
})()
;})(switch__24151__auto__,c__24265__auto___35309,out))
})();
var state__24267__auto__ = (function (){var statearr_35308 = f__24266__auto__.call(null);
(statearr_35308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24265__auto___35309);

return statearr_35308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24267__auto__);
});})(c__24265__auto___35309,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35318,opts){
var map__35322 = p__35318;
var map__35322__$1 = ((((!((map__35322 == null)))?((((map__35322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35322):map__35322);
var eval_body__$1 = cljs.core.get.call(null,map__35322__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35322__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e35324){var e = e35324;
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
return (function (p1__35325_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35325_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__35334){
var vec__35335 = p__35334;
var k = cljs.core.nth.call(null,vec__35335,(0),null);
var v = cljs.core.nth.call(null,vec__35335,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35338){
var vec__35339 = p__35338;
var k = cljs.core.nth.call(null,vec__35339,(0),null);
var v = cljs.core.nth.call(null,vec__35339,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35345,p__35346){
var map__35593 = p__35345;
var map__35593__$1 = ((((!((map__35593 == null)))?((((map__35593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35593):map__35593);
var opts = map__35593__$1;
var before_jsload = cljs.core.get.call(null,map__35593__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35593__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35593__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35594 = p__35346;
var map__35594__$1 = ((((!((map__35594 == null)))?((((map__35594.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35594.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35594):map__35594);
var msg = map__35594__$1;
var files = cljs.core.get.call(null,map__35594__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35594__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35594__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24265__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24265__auto__,map__35593,map__35593__$1,opts,before_jsload,on_jsload,reload_dependents,map__35594,map__35594__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24266__auto__ = (function (){var switch__24151__auto__ = ((function (c__24265__auto__,map__35593,map__35593__$1,opts,before_jsload,on_jsload,reload_dependents,map__35594,map__35594__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35747){
var state_val_35748 = (state_35747[(1)]);
if((state_val_35748 === (7))){
var inst_35608 = (state_35747[(7)]);
var inst_35610 = (state_35747[(8)]);
var inst_35609 = (state_35747[(9)]);
var inst_35611 = (state_35747[(10)]);
var inst_35616 = cljs.core._nth.call(null,inst_35609,inst_35611);
var inst_35617 = figwheel.client.file_reloading.eval_body.call(null,inst_35616,opts);
var inst_35618 = (inst_35611 + (1));
var tmp35749 = inst_35608;
var tmp35750 = inst_35610;
var tmp35751 = inst_35609;
var inst_35608__$1 = tmp35749;
var inst_35609__$1 = tmp35751;
var inst_35610__$1 = tmp35750;
var inst_35611__$1 = inst_35618;
var state_35747__$1 = (function (){var statearr_35752 = state_35747;
(statearr_35752[(11)] = inst_35617);

(statearr_35752[(7)] = inst_35608__$1);

(statearr_35752[(8)] = inst_35610__$1);

(statearr_35752[(9)] = inst_35609__$1);

(statearr_35752[(10)] = inst_35611__$1);

return statearr_35752;
})();
var statearr_35753_35839 = state_35747__$1;
(statearr_35753_35839[(2)] = null);

(statearr_35753_35839[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (20))){
var inst_35651 = (state_35747[(12)]);
var inst_35659 = figwheel.client.file_reloading.sort_files.call(null,inst_35651);
var state_35747__$1 = state_35747;
var statearr_35754_35840 = state_35747__$1;
(statearr_35754_35840[(2)] = inst_35659);

(statearr_35754_35840[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (27))){
var state_35747__$1 = state_35747;
var statearr_35755_35841 = state_35747__$1;
(statearr_35755_35841[(2)] = null);

(statearr_35755_35841[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (1))){
var inst_35600 = (state_35747[(13)]);
var inst_35597 = before_jsload.call(null,files);
var inst_35598 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35599 = (function (){return ((function (inst_35600,inst_35597,inst_35598,state_val_35748,c__24265__auto__,map__35593,map__35593__$1,opts,before_jsload,on_jsload,reload_dependents,map__35594,map__35594__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35342_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35342_SHARP_);
});
;})(inst_35600,inst_35597,inst_35598,state_val_35748,c__24265__auto__,map__35593,map__35593__$1,opts,before_jsload,on_jsload,reload_dependents,map__35594,map__35594__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35600__$1 = cljs.core.filter.call(null,inst_35599,files);
var inst_35601 = cljs.core.not_empty.call(null,inst_35600__$1);
var state_35747__$1 = (function (){var statearr_35756 = state_35747;
(statearr_35756[(14)] = inst_35598);

(statearr_35756[(13)] = inst_35600__$1);

(statearr_35756[(15)] = inst_35597);

return statearr_35756;
})();
if(cljs.core.truth_(inst_35601)){
var statearr_35757_35842 = state_35747__$1;
(statearr_35757_35842[(1)] = (2));

} else {
var statearr_35758_35843 = state_35747__$1;
(statearr_35758_35843[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (24))){
var state_35747__$1 = state_35747;
var statearr_35759_35844 = state_35747__$1;
(statearr_35759_35844[(2)] = null);

(statearr_35759_35844[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (39))){
var inst_35701 = (state_35747[(16)]);
var state_35747__$1 = state_35747;
var statearr_35760_35845 = state_35747__$1;
(statearr_35760_35845[(2)] = inst_35701);

(statearr_35760_35845[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (46))){
var inst_35742 = (state_35747[(2)]);
var state_35747__$1 = state_35747;
var statearr_35761_35846 = state_35747__$1;
(statearr_35761_35846[(2)] = inst_35742);

(statearr_35761_35846[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (4))){
var inst_35645 = (state_35747[(2)]);
var inst_35646 = cljs.core.List.EMPTY;
var inst_35647 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35646);
var inst_35648 = (function (){return ((function (inst_35645,inst_35646,inst_35647,state_val_35748,c__24265__auto__,map__35593,map__35593__$1,opts,before_jsload,on_jsload,reload_dependents,map__35594,map__35594__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35343_SHARP_){
var and__21578__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35343_SHARP_);
if(cljs.core.truth_(and__21578__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35343_SHARP_));
} else {
return and__21578__auto__;
}
});
;})(inst_35645,inst_35646,inst_35647,state_val_35748,c__24265__auto__,map__35593,map__35593__$1,opts,before_jsload,on_jsload,reload_dependents,map__35594,map__35594__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35649 = cljs.core.filter.call(null,inst_35648,files);
var inst_35650 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35651 = cljs.core.concat.call(null,inst_35649,inst_35650);
var state_35747__$1 = (function (){var statearr_35762 = state_35747;
(statearr_35762[(17)] = inst_35647);

(statearr_35762[(18)] = inst_35645);

(statearr_35762[(12)] = inst_35651);

return statearr_35762;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35763_35847 = state_35747__$1;
(statearr_35763_35847[(1)] = (16));

} else {
var statearr_35764_35848 = state_35747__$1;
(statearr_35764_35848[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (15))){
var inst_35635 = (state_35747[(2)]);
var state_35747__$1 = state_35747;
var statearr_35765_35849 = state_35747__$1;
(statearr_35765_35849[(2)] = inst_35635);

(statearr_35765_35849[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (21))){
var inst_35661 = (state_35747[(19)]);
var inst_35661__$1 = (state_35747[(2)]);
var inst_35662 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35661__$1);
var state_35747__$1 = (function (){var statearr_35766 = state_35747;
(statearr_35766[(19)] = inst_35661__$1);

return statearr_35766;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35747__$1,(22),inst_35662);
} else {
if((state_val_35748 === (31))){
var inst_35745 = (state_35747[(2)]);
var state_35747__$1 = state_35747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35747__$1,inst_35745);
} else {
if((state_val_35748 === (32))){
var inst_35701 = (state_35747[(16)]);
var inst_35706 = inst_35701.cljs$lang$protocol_mask$partition0$;
var inst_35707 = (inst_35706 & (64));
var inst_35708 = inst_35701.cljs$core$ISeq$;
var inst_35709 = (inst_35707) || (inst_35708);
var state_35747__$1 = state_35747;
if(cljs.core.truth_(inst_35709)){
var statearr_35767_35850 = state_35747__$1;
(statearr_35767_35850[(1)] = (35));

} else {
var statearr_35768_35851 = state_35747__$1;
(statearr_35768_35851[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (40))){
var inst_35722 = (state_35747[(20)]);
var inst_35721 = (state_35747[(2)]);
var inst_35722__$1 = cljs.core.get.call(null,inst_35721,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35723 = cljs.core.get.call(null,inst_35721,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35724 = cljs.core.not_empty.call(null,inst_35722__$1);
var state_35747__$1 = (function (){var statearr_35769 = state_35747;
(statearr_35769[(20)] = inst_35722__$1);

(statearr_35769[(21)] = inst_35723);

return statearr_35769;
})();
if(cljs.core.truth_(inst_35724)){
var statearr_35770_35852 = state_35747__$1;
(statearr_35770_35852[(1)] = (41));

} else {
var statearr_35771_35853 = state_35747__$1;
(statearr_35771_35853[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (33))){
var state_35747__$1 = state_35747;
var statearr_35772_35854 = state_35747__$1;
(statearr_35772_35854[(2)] = false);

(statearr_35772_35854[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (13))){
var inst_35621 = (state_35747[(22)]);
var inst_35625 = cljs.core.chunk_first.call(null,inst_35621);
var inst_35626 = cljs.core.chunk_rest.call(null,inst_35621);
var inst_35627 = cljs.core.count.call(null,inst_35625);
var inst_35608 = inst_35626;
var inst_35609 = inst_35625;
var inst_35610 = inst_35627;
var inst_35611 = (0);
var state_35747__$1 = (function (){var statearr_35773 = state_35747;
(statearr_35773[(7)] = inst_35608);

(statearr_35773[(8)] = inst_35610);

(statearr_35773[(9)] = inst_35609);

(statearr_35773[(10)] = inst_35611);

return statearr_35773;
})();
var statearr_35774_35855 = state_35747__$1;
(statearr_35774_35855[(2)] = null);

(statearr_35774_35855[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (22))){
var inst_35669 = (state_35747[(23)]);
var inst_35661 = (state_35747[(19)]);
var inst_35665 = (state_35747[(24)]);
var inst_35664 = (state_35747[(25)]);
var inst_35664__$1 = (state_35747[(2)]);
var inst_35665__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35664__$1);
var inst_35666 = (function (){var all_files = inst_35661;
var res_SINGLEQUOTE_ = inst_35664__$1;
var res = inst_35665__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35669,inst_35661,inst_35665,inst_35664,inst_35664__$1,inst_35665__$1,state_val_35748,c__24265__auto__,map__35593,map__35593__$1,opts,before_jsload,on_jsload,reload_dependents,map__35594,map__35594__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35344_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35344_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35669,inst_35661,inst_35665,inst_35664,inst_35664__$1,inst_35665__$1,state_val_35748,c__24265__auto__,map__35593,map__35593__$1,opts,before_jsload,on_jsload,reload_dependents,map__35594,map__35594__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35667 = cljs.core.filter.call(null,inst_35666,inst_35664__$1);
var inst_35668 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35669__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35668);
var inst_35670 = cljs.core.not_empty.call(null,inst_35669__$1);
var state_35747__$1 = (function (){var statearr_35775 = state_35747;
(statearr_35775[(26)] = inst_35667);

(statearr_35775[(23)] = inst_35669__$1);

(statearr_35775[(24)] = inst_35665__$1);

(statearr_35775[(25)] = inst_35664__$1);

return statearr_35775;
})();
if(cljs.core.truth_(inst_35670)){
var statearr_35776_35856 = state_35747__$1;
(statearr_35776_35856[(1)] = (23));

} else {
var statearr_35777_35857 = state_35747__$1;
(statearr_35777_35857[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (36))){
var state_35747__$1 = state_35747;
var statearr_35778_35858 = state_35747__$1;
(statearr_35778_35858[(2)] = false);

(statearr_35778_35858[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (41))){
var inst_35722 = (state_35747[(20)]);
var inst_35726 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35727 = cljs.core.map.call(null,inst_35726,inst_35722);
var inst_35728 = cljs.core.pr_str.call(null,inst_35727);
var inst_35729 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_35728)].join('');
var inst_35730 = figwheel.client.utils.log.call(null,inst_35729);
var state_35747__$1 = state_35747;
var statearr_35779_35859 = state_35747__$1;
(statearr_35779_35859[(2)] = inst_35730);

(statearr_35779_35859[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (43))){
var inst_35723 = (state_35747[(21)]);
var inst_35733 = (state_35747[(2)]);
var inst_35734 = cljs.core.not_empty.call(null,inst_35723);
var state_35747__$1 = (function (){var statearr_35780 = state_35747;
(statearr_35780[(27)] = inst_35733);

return statearr_35780;
})();
if(cljs.core.truth_(inst_35734)){
var statearr_35781_35860 = state_35747__$1;
(statearr_35781_35860[(1)] = (44));

} else {
var statearr_35782_35861 = state_35747__$1;
(statearr_35782_35861[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (29))){
var inst_35667 = (state_35747[(26)]);
var inst_35669 = (state_35747[(23)]);
var inst_35661 = (state_35747[(19)]);
var inst_35665 = (state_35747[(24)]);
var inst_35664 = (state_35747[(25)]);
var inst_35701 = (state_35747[(16)]);
var inst_35697 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35700 = (function (){var all_files = inst_35661;
var res_SINGLEQUOTE_ = inst_35664;
var res = inst_35665;
var files_not_loaded = inst_35667;
var dependencies_that_loaded = inst_35669;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35667,inst_35669,inst_35661,inst_35665,inst_35664,inst_35701,inst_35697,state_val_35748,c__24265__auto__,map__35593,map__35593__$1,opts,before_jsload,on_jsload,reload_dependents,map__35594,map__35594__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35699){
var map__35783 = p__35699;
var map__35783__$1 = ((((!((map__35783 == null)))?((((map__35783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35783):map__35783);
var namespace = cljs.core.get.call(null,map__35783__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35667,inst_35669,inst_35661,inst_35665,inst_35664,inst_35701,inst_35697,state_val_35748,c__24265__auto__,map__35593,map__35593__$1,opts,before_jsload,on_jsload,reload_dependents,map__35594,map__35594__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35701__$1 = cljs.core.group_by.call(null,inst_35700,inst_35667);
var inst_35703 = (inst_35701__$1 == null);
var inst_35704 = cljs.core.not.call(null,inst_35703);
var state_35747__$1 = (function (){var statearr_35785 = state_35747;
(statearr_35785[(28)] = inst_35697);

(statearr_35785[(16)] = inst_35701__$1);

return statearr_35785;
})();
if(inst_35704){
var statearr_35786_35862 = state_35747__$1;
(statearr_35786_35862[(1)] = (32));

} else {
var statearr_35787_35863 = state_35747__$1;
(statearr_35787_35863[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (44))){
var inst_35723 = (state_35747[(21)]);
var inst_35736 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35723);
var inst_35737 = cljs.core.pr_str.call(null,inst_35736);
var inst_35738 = [cljs.core.str("not required: "),cljs.core.str(inst_35737)].join('');
var inst_35739 = figwheel.client.utils.log.call(null,inst_35738);
var state_35747__$1 = state_35747;
var statearr_35788_35864 = state_35747__$1;
(statearr_35788_35864[(2)] = inst_35739);

(statearr_35788_35864[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (6))){
var inst_35642 = (state_35747[(2)]);
var state_35747__$1 = state_35747;
var statearr_35789_35865 = state_35747__$1;
(statearr_35789_35865[(2)] = inst_35642);

(statearr_35789_35865[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (28))){
var inst_35667 = (state_35747[(26)]);
var inst_35694 = (state_35747[(2)]);
var inst_35695 = cljs.core.not_empty.call(null,inst_35667);
var state_35747__$1 = (function (){var statearr_35790 = state_35747;
(statearr_35790[(29)] = inst_35694);

return statearr_35790;
})();
if(cljs.core.truth_(inst_35695)){
var statearr_35791_35866 = state_35747__$1;
(statearr_35791_35866[(1)] = (29));

} else {
var statearr_35792_35867 = state_35747__$1;
(statearr_35792_35867[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (25))){
var inst_35665 = (state_35747[(24)]);
var inst_35681 = (state_35747[(2)]);
var inst_35682 = cljs.core.not_empty.call(null,inst_35665);
var state_35747__$1 = (function (){var statearr_35793 = state_35747;
(statearr_35793[(30)] = inst_35681);

return statearr_35793;
})();
if(cljs.core.truth_(inst_35682)){
var statearr_35794_35868 = state_35747__$1;
(statearr_35794_35868[(1)] = (26));

} else {
var statearr_35795_35869 = state_35747__$1;
(statearr_35795_35869[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (34))){
var inst_35716 = (state_35747[(2)]);
var state_35747__$1 = state_35747;
if(cljs.core.truth_(inst_35716)){
var statearr_35796_35870 = state_35747__$1;
(statearr_35796_35870[(1)] = (38));

} else {
var statearr_35797_35871 = state_35747__$1;
(statearr_35797_35871[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (17))){
var state_35747__$1 = state_35747;
var statearr_35798_35872 = state_35747__$1;
(statearr_35798_35872[(2)] = recompile_dependents);

(statearr_35798_35872[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (3))){
var state_35747__$1 = state_35747;
var statearr_35799_35873 = state_35747__$1;
(statearr_35799_35873[(2)] = null);

(statearr_35799_35873[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (12))){
var inst_35638 = (state_35747[(2)]);
var state_35747__$1 = state_35747;
var statearr_35800_35874 = state_35747__$1;
(statearr_35800_35874[(2)] = inst_35638);

(statearr_35800_35874[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (2))){
var inst_35600 = (state_35747[(13)]);
var inst_35607 = cljs.core.seq.call(null,inst_35600);
var inst_35608 = inst_35607;
var inst_35609 = null;
var inst_35610 = (0);
var inst_35611 = (0);
var state_35747__$1 = (function (){var statearr_35801 = state_35747;
(statearr_35801[(7)] = inst_35608);

(statearr_35801[(8)] = inst_35610);

(statearr_35801[(9)] = inst_35609);

(statearr_35801[(10)] = inst_35611);

return statearr_35801;
})();
var statearr_35802_35875 = state_35747__$1;
(statearr_35802_35875[(2)] = null);

(statearr_35802_35875[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (23))){
var inst_35667 = (state_35747[(26)]);
var inst_35669 = (state_35747[(23)]);
var inst_35661 = (state_35747[(19)]);
var inst_35665 = (state_35747[(24)]);
var inst_35664 = (state_35747[(25)]);
var inst_35672 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35674 = (function (){var all_files = inst_35661;
var res_SINGLEQUOTE_ = inst_35664;
var res = inst_35665;
var files_not_loaded = inst_35667;
var dependencies_that_loaded = inst_35669;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35667,inst_35669,inst_35661,inst_35665,inst_35664,inst_35672,state_val_35748,c__24265__auto__,map__35593,map__35593__$1,opts,before_jsload,on_jsload,reload_dependents,map__35594,map__35594__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35673){
var map__35803 = p__35673;
var map__35803__$1 = ((((!((map__35803 == null)))?((((map__35803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35803):map__35803);
var request_url = cljs.core.get.call(null,map__35803__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35667,inst_35669,inst_35661,inst_35665,inst_35664,inst_35672,state_val_35748,c__24265__auto__,map__35593,map__35593__$1,opts,before_jsload,on_jsload,reload_dependents,map__35594,map__35594__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35675 = cljs.core.reverse.call(null,inst_35669);
var inst_35676 = cljs.core.map.call(null,inst_35674,inst_35675);
var inst_35677 = cljs.core.pr_str.call(null,inst_35676);
var inst_35678 = figwheel.client.utils.log.call(null,inst_35677);
var state_35747__$1 = (function (){var statearr_35805 = state_35747;
(statearr_35805[(31)] = inst_35672);

return statearr_35805;
})();
var statearr_35806_35876 = state_35747__$1;
(statearr_35806_35876[(2)] = inst_35678);

(statearr_35806_35876[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (35))){
var state_35747__$1 = state_35747;
var statearr_35807_35877 = state_35747__$1;
(statearr_35807_35877[(2)] = true);

(statearr_35807_35877[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (19))){
var inst_35651 = (state_35747[(12)]);
var inst_35657 = figwheel.client.file_reloading.expand_files.call(null,inst_35651);
var state_35747__$1 = state_35747;
var statearr_35808_35878 = state_35747__$1;
(statearr_35808_35878[(2)] = inst_35657);

(statearr_35808_35878[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (11))){
var state_35747__$1 = state_35747;
var statearr_35809_35879 = state_35747__$1;
(statearr_35809_35879[(2)] = null);

(statearr_35809_35879[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (9))){
var inst_35640 = (state_35747[(2)]);
var state_35747__$1 = state_35747;
var statearr_35810_35880 = state_35747__$1;
(statearr_35810_35880[(2)] = inst_35640);

(statearr_35810_35880[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (5))){
var inst_35610 = (state_35747[(8)]);
var inst_35611 = (state_35747[(10)]);
var inst_35613 = (inst_35611 < inst_35610);
var inst_35614 = inst_35613;
var state_35747__$1 = state_35747;
if(cljs.core.truth_(inst_35614)){
var statearr_35811_35881 = state_35747__$1;
(statearr_35811_35881[(1)] = (7));

} else {
var statearr_35812_35882 = state_35747__$1;
(statearr_35812_35882[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (14))){
var inst_35621 = (state_35747[(22)]);
var inst_35630 = cljs.core.first.call(null,inst_35621);
var inst_35631 = figwheel.client.file_reloading.eval_body.call(null,inst_35630,opts);
var inst_35632 = cljs.core.next.call(null,inst_35621);
var inst_35608 = inst_35632;
var inst_35609 = null;
var inst_35610 = (0);
var inst_35611 = (0);
var state_35747__$1 = (function (){var statearr_35813 = state_35747;
(statearr_35813[(7)] = inst_35608);

(statearr_35813[(32)] = inst_35631);

(statearr_35813[(8)] = inst_35610);

(statearr_35813[(9)] = inst_35609);

(statearr_35813[(10)] = inst_35611);

return statearr_35813;
})();
var statearr_35814_35883 = state_35747__$1;
(statearr_35814_35883[(2)] = null);

(statearr_35814_35883[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (45))){
var state_35747__$1 = state_35747;
var statearr_35815_35884 = state_35747__$1;
(statearr_35815_35884[(2)] = null);

(statearr_35815_35884[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (26))){
var inst_35667 = (state_35747[(26)]);
var inst_35669 = (state_35747[(23)]);
var inst_35661 = (state_35747[(19)]);
var inst_35665 = (state_35747[(24)]);
var inst_35664 = (state_35747[(25)]);
var inst_35684 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35686 = (function (){var all_files = inst_35661;
var res_SINGLEQUOTE_ = inst_35664;
var res = inst_35665;
var files_not_loaded = inst_35667;
var dependencies_that_loaded = inst_35669;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35667,inst_35669,inst_35661,inst_35665,inst_35664,inst_35684,state_val_35748,c__24265__auto__,map__35593,map__35593__$1,opts,before_jsload,on_jsload,reload_dependents,map__35594,map__35594__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35685){
var map__35816 = p__35685;
var map__35816__$1 = ((((!((map__35816 == null)))?((((map__35816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35816):map__35816);
var namespace = cljs.core.get.call(null,map__35816__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35816__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35667,inst_35669,inst_35661,inst_35665,inst_35664,inst_35684,state_val_35748,c__24265__auto__,map__35593,map__35593__$1,opts,before_jsload,on_jsload,reload_dependents,map__35594,map__35594__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35687 = cljs.core.map.call(null,inst_35686,inst_35665);
var inst_35688 = cljs.core.pr_str.call(null,inst_35687);
var inst_35689 = figwheel.client.utils.log.call(null,inst_35688);
var inst_35690 = (function (){var all_files = inst_35661;
var res_SINGLEQUOTE_ = inst_35664;
var res = inst_35665;
var files_not_loaded = inst_35667;
var dependencies_that_loaded = inst_35669;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35667,inst_35669,inst_35661,inst_35665,inst_35664,inst_35684,inst_35686,inst_35687,inst_35688,inst_35689,state_val_35748,c__24265__auto__,map__35593,map__35593__$1,opts,before_jsload,on_jsload,reload_dependents,map__35594,map__35594__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35667,inst_35669,inst_35661,inst_35665,inst_35664,inst_35684,inst_35686,inst_35687,inst_35688,inst_35689,state_val_35748,c__24265__auto__,map__35593,map__35593__$1,opts,before_jsload,on_jsload,reload_dependents,map__35594,map__35594__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35691 = setTimeout(inst_35690,(10));
var state_35747__$1 = (function (){var statearr_35818 = state_35747;
(statearr_35818[(33)] = inst_35689);

(statearr_35818[(34)] = inst_35684);

return statearr_35818;
})();
var statearr_35819_35885 = state_35747__$1;
(statearr_35819_35885[(2)] = inst_35691);

(statearr_35819_35885[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (16))){
var state_35747__$1 = state_35747;
var statearr_35820_35886 = state_35747__$1;
(statearr_35820_35886[(2)] = reload_dependents);

(statearr_35820_35886[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (38))){
var inst_35701 = (state_35747[(16)]);
var inst_35718 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35701);
var state_35747__$1 = state_35747;
var statearr_35821_35887 = state_35747__$1;
(statearr_35821_35887[(2)] = inst_35718);

(statearr_35821_35887[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (30))){
var state_35747__$1 = state_35747;
var statearr_35822_35888 = state_35747__$1;
(statearr_35822_35888[(2)] = null);

(statearr_35822_35888[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (10))){
var inst_35621 = (state_35747[(22)]);
var inst_35623 = cljs.core.chunked_seq_QMARK_.call(null,inst_35621);
var state_35747__$1 = state_35747;
if(inst_35623){
var statearr_35823_35889 = state_35747__$1;
(statearr_35823_35889[(1)] = (13));

} else {
var statearr_35824_35890 = state_35747__$1;
(statearr_35824_35890[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (18))){
var inst_35655 = (state_35747[(2)]);
var state_35747__$1 = state_35747;
if(cljs.core.truth_(inst_35655)){
var statearr_35825_35891 = state_35747__$1;
(statearr_35825_35891[(1)] = (19));

} else {
var statearr_35826_35892 = state_35747__$1;
(statearr_35826_35892[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (42))){
var state_35747__$1 = state_35747;
var statearr_35827_35893 = state_35747__$1;
(statearr_35827_35893[(2)] = null);

(statearr_35827_35893[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (37))){
var inst_35713 = (state_35747[(2)]);
var state_35747__$1 = state_35747;
var statearr_35828_35894 = state_35747__$1;
(statearr_35828_35894[(2)] = inst_35713);

(statearr_35828_35894[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35748 === (8))){
var inst_35608 = (state_35747[(7)]);
var inst_35621 = (state_35747[(22)]);
var inst_35621__$1 = cljs.core.seq.call(null,inst_35608);
var state_35747__$1 = (function (){var statearr_35829 = state_35747;
(statearr_35829[(22)] = inst_35621__$1);

return statearr_35829;
})();
if(inst_35621__$1){
var statearr_35830_35895 = state_35747__$1;
(statearr_35830_35895[(1)] = (10));

} else {
var statearr_35831_35896 = state_35747__$1;
(statearr_35831_35896[(1)] = (11));

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
});})(c__24265__auto__,map__35593,map__35593__$1,opts,before_jsload,on_jsload,reload_dependents,map__35594,map__35594__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24151__auto__,c__24265__auto__,map__35593,map__35593__$1,opts,before_jsload,on_jsload,reload_dependents,map__35594,map__35594__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24152__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24152__auto____0 = (function (){
var statearr_35835 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35835[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24152__auto__);

(statearr_35835[(1)] = (1));

return statearr_35835;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24152__auto____1 = (function (state_35747){
while(true){
var ret_value__24153__auto__ = (function (){try{while(true){
var result__24154__auto__ = switch__24151__auto__.call(null,state_35747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24154__auto__;
}
break;
}
}catch (e35836){if((e35836 instanceof Object)){
var ex__24155__auto__ = e35836;
var statearr_35837_35897 = state_35747;
(statearr_35837_35897[(5)] = ex__24155__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35898 = state_35747;
state_35747 = G__35898;
continue;
} else {
return ret_value__24153__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24152__auto__ = function(state_35747){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24152__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24152__auto____1.call(this,state_35747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24152__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24152__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24152__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24152__auto__;
})()
;})(switch__24151__auto__,c__24265__auto__,map__35593,map__35593__$1,opts,before_jsload,on_jsload,reload_dependents,map__35594,map__35594__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24267__auto__ = (function (){var statearr_35838 = f__24266__auto__.call(null);
(statearr_35838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24265__auto__);

return statearr_35838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24267__auto__);
});})(c__24265__auto__,map__35593,map__35593__$1,opts,before_jsload,on_jsload,reload_dependents,map__35594,map__35594__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24265__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35901,link){
var map__35904 = p__35901;
var map__35904__$1 = ((((!((map__35904 == null)))?((((map__35904.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35904.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35904):map__35904);
var file = cljs.core.get.call(null,map__35904__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6552__auto__ = link.href;
if(cljs.core.truth_(temp__6552__auto__)){
var link_href = temp__6552__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6552__auto__,map__35904,map__35904__$1,file){
return (function (p1__35899_SHARP_,p2__35900_SHARP_){
if(cljs.core._EQ_.call(null,p1__35899_SHARP_,p2__35900_SHARP_)){
return p1__35899_SHARP_;
} else {
return false;
}
});})(link_href,temp__6552__auto__,map__35904,map__35904__$1,file))
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
var temp__6552__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35910){
var map__35911 = p__35910;
var map__35911__$1 = ((((!((map__35911 == null)))?((((map__35911.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35911.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35911):map__35911);
var match_length = cljs.core.get.call(null,map__35911__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35911__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35906_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35906_SHARP_);
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
var args35913 = [];
var len__22773__auto___35916 = arguments.length;
var i__22774__auto___35917 = (0);
while(true){
if((i__22774__auto___35917 < len__22773__auto___35916)){
args35913.push((arguments[i__22774__auto___35917]));

var G__35918 = (i__22774__auto___35917 + (1));
i__22774__auto___35917 = G__35918;
continue;
} else {
}
break;
}

var G__35915 = args35913.length;
switch (G__35915) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35913.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35920_SHARP_,p2__35921_SHARP_){
return cljs.core.assoc.call(null,p1__35920_SHARP_,cljs.core.get.call(null,p2__35921_SHARP_,key),p2__35921_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__35922){
var map__35925 = p__35922;
var map__35925__$1 = ((((!((map__35925 == null)))?((((map__35925.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35925.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35925):map__35925);
var f_data = map__35925__$1;
var file = cljs.core.get.call(null,map__35925__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6552__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6552__auto__)){
var link = temp__6552__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35927,files_msg){
var map__35934 = p__35927;
var map__35934__$1 = ((((!((map__35934 == null)))?((((map__35934.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35934.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35934):map__35934);
var opts = map__35934__$1;
var on_cssload = cljs.core.get.call(null,map__35934__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__35936_35940 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__35937_35941 = null;
var count__35938_35942 = (0);
var i__35939_35943 = (0);
while(true){
if((i__35939_35943 < count__35938_35942)){
var f_35944 = cljs.core._nth.call(null,chunk__35937_35941,i__35939_35943);
figwheel.client.file_reloading.reload_css_file.call(null,f_35944);

var G__35945 = seq__35936_35940;
var G__35946 = chunk__35937_35941;
var G__35947 = count__35938_35942;
var G__35948 = (i__35939_35943 + (1));
seq__35936_35940 = G__35945;
chunk__35937_35941 = G__35946;
count__35938_35942 = G__35947;
i__35939_35943 = G__35948;
continue;
} else {
var temp__6552__auto___35949 = cljs.core.seq.call(null,seq__35936_35940);
if(temp__6552__auto___35949){
var seq__35936_35950__$1 = temp__6552__auto___35949;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35936_35950__$1)){
var c__22493__auto___35951 = cljs.core.chunk_first.call(null,seq__35936_35950__$1);
var G__35952 = cljs.core.chunk_rest.call(null,seq__35936_35950__$1);
var G__35953 = c__22493__auto___35951;
var G__35954 = cljs.core.count.call(null,c__22493__auto___35951);
var G__35955 = (0);
seq__35936_35940 = G__35952;
chunk__35937_35941 = G__35953;
count__35938_35942 = G__35954;
i__35939_35943 = G__35955;
continue;
} else {
var f_35956 = cljs.core.first.call(null,seq__35936_35950__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_35956);

var G__35957 = cljs.core.next.call(null,seq__35936_35950__$1);
var G__35958 = null;
var G__35959 = (0);
var G__35960 = (0);
seq__35936_35940 = G__35957;
chunk__35937_35941 = G__35958;
count__35938_35942 = G__35959;
i__35939_35943 = G__35960;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__35934,map__35934__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__35934,map__35934__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1472381714568