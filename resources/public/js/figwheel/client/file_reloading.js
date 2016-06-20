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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26879_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26879_SHARP_));
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
var seq__26884 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26885 = null;
var count__26886 = (0);
var i__26887 = (0);
while(true){
if((i__26887 < count__26886)){
var n = cljs.core._nth.call(null,chunk__26885,i__26887);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26888 = seq__26884;
var G__26889 = chunk__26885;
var G__26890 = count__26886;
var G__26891 = (i__26887 + (1));
seq__26884 = G__26888;
chunk__26885 = G__26889;
count__26886 = G__26890;
i__26887 = G__26891;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26884);
if(temp__4657__auto__){
var seq__26884__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26884__$1)){
var c__19279__auto__ = cljs.core.chunk_first.call(null,seq__26884__$1);
var G__26892 = cljs.core.chunk_rest.call(null,seq__26884__$1);
var G__26893 = c__19279__auto__;
var G__26894 = cljs.core.count.call(null,c__19279__auto__);
var G__26895 = (0);
seq__26884 = G__26892;
chunk__26885 = G__26893;
count__26886 = G__26894;
i__26887 = G__26895;
continue;
} else {
var n = cljs.core.first.call(null,seq__26884__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26896 = cljs.core.next.call(null,seq__26884__$1);
var G__26897 = null;
var G__26898 = (0);
var G__26899 = (0);
seq__26884 = G__26896;
chunk__26885 = G__26897;
count__26886 = G__26898;
i__26887 = G__26899;
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

var seq__26938_26945 = cljs.core.seq.call(null,deps);
var chunk__26939_26946 = null;
var count__26940_26947 = (0);
var i__26941_26948 = (0);
while(true){
if((i__26941_26948 < count__26940_26947)){
var dep_26949 = cljs.core._nth.call(null,chunk__26939_26946,i__26941_26948);
topo_sort_helper_STAR_.call(null,dep_26949,(depth + (1)),state);

var G__26950 = seq__26938_26945;
var G__26951 = chunk__26939_26946;
var G__26952 = count__26940_26947;
var G__26953 = (i__26941_26948 + (1));
seq__26938_26945 = G__26950;
chunk__26939_26946 = G__26951;
count__26940_26947 = G__26952;
i__26941_26948 = G__26953;
continue;
} else {
var temp__4657__auto___26954 = cljs.core.seq.call(null,seq__26938_26945);
if(temp__4657__auto___26954){
var seq__26938_26955__$1 = temp__4657__auto___26954;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26938_26955__$1)){
var c__19279__auto___26956 = cljs.core.chunk_first.call(null,seq__26938_26955__$1);
var G__26957 = cljs.core.chunk_rest.call(null,seq__26938_26955__$1);
var G__26958 = c__19279__auto___26956;
var G__26959 = cljs.core.count.call(null,c__19279__auto___26956);
var G__26960 = (0);
seq__26938_26945 = G__26957;
chunk__26939_26946 = G__26958;
count__26940_26947 = G__26959;
i__26941_26948 = G__26960;
continue;
} else {
var dep_26961 = cljs.core.first.call(null,seq__26938_26955__$1);
topo_sort_helper_STAR_.call(null,dep_26961,(depth + (1)),state);

var G__26962 = cljs.core.next.call(null,seq__26938_26955__$1);
var G__26963 = null;
var G__26964 = (0);
var G__26965 = (0);
seq__26938_26945 = G__26962;
chunk__26939_26946 = G__26963;
count__26940_26947 = G__26964;
i__26941_26948 = G__26965;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26942){
var vec__26944 = p__26942;
var x = cljs.core.nth.call(null,vec__26944,(0),null);
var xs = cljs.core.nthnext.call(null,vec__26944,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26944,x,xs,get_deps__$1){
return (function (p1__26900_SHARP_){
return clojure.set.difference.call(null,p1__26900_SHARP_,x);
});})(vec__26944,x,xs,get_deps__$1))
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
var seq__26978 = cljs.core.seq.call(null,provides);
var chunk__26979 = null;
var count__26980 = (0);
var i__26981 = (0);
while(true){
if((i__26981 < count__26980)){
var prov = cljs.core._nth.call(null,chunk__26979,i__26981);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26982_26990 = cljs.core.seq.call(null,requires);
var chunk__26983_26991 = null;
var count__26984_26992 = (0);
var i__26985_26993 = (0);
while(true){
if((i__26985_26993 < count__26984_26992)){
var req_26994 = cljs.core._nth.call(null,chunk__26983_26991,i__26985_26993);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26994,prov);

var G__26995 = seq__26982_26990;
var G__26996 = chunk__26983_26991;
var G__26997 = count__26984_26992;
var G__26998 = (i__26985_26993 + (1));
seq__26982_26990 = G__26995;
chunk__26983_26991 = G__26996;
count__26984_26992 = G__26997;
i__26985_26993 = G__26998;
continue;
} else {
var temp__4657__auto___26999 = cljs.core.seq.call(null,seq__26982_26990);
if(temp__4657__auto___26999){
var seq__26982_27000__$1 = temp__4657__auto___26999;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26982_27000__$1)){
var c__19279__auto___27001 = cljs.core.chunk_first.call(null,seq__26982_27000__$1);
var G__27002 = cljs.core.chunk_rest.call(null,seq__26982_27000__$1);
var G__27003 = c__19279__auto___27001;
var G__27004 = cljs.core.count.call(null,c__19279__auto___27001);
var G__27005 = (0);
seq__26982_26990 = G__27002;
chunk__26983_26991 = G__27003;
count__26984_26992 = G__27004;
i__26985_26993 = G__27005;
continue;
} else {
var req_27006 = cljs.core.first.call(null,seq__26982_27000__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27006,prov);

var G__27007 = cljs.core.next.call(null,seq__26982_27000__$1);
var G__27008 = null;
var G__27009 = (0);
var G__27010 = (0);
seq__26982_26990 = G__27007;
chunk__26983_26991 = G__27008;
count__26984_26992 = G__27009;
i__26985_26993 = G__27010;
continue;
}
} else {
}
}
break;
}

var G__27011 = seq__26978;
var G__27012 = chunk__26979;
var G__27013 = count__26980;
var G__27014 = (i__26981 + (1));
seq__26978 = G__27011;
chunk__26979 = G__27012;
count__26980 = G__27013;
i__26981 = G__27014;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26978);
if(temp__4657__auto__){
var seq__26978__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26978__$1)){
var c__19279__auto__ = cljs.core.chunk_first.call(null,seq__26978__$1);
var G__27015 = cljs.core.chunk_rest.call(null,seq__26978__$1);
var G__27016 = c__19279__auto__;
var G__27017 = cljs.core.count.call(null,c__19279__auto__);
var G__27018 = (0);
seq__26978 = G__27015;
chunk__26979 = G__27016;
count__26980 = G__27017;
i__26981 = G__27018;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26978__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26986_27019 = cljs.core.seq.call(null,requires);
var chunk__26987_27020 = null;
var count__26988_27021 = (0);
var i__26989_27022 = (0);
while(true){
if((i__26989_27022 < count__26988_27021)){
var req_27023 = cljs.core._nth.call(null,chunk__26987_27020,i__26989_27022);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27023,prov);

var G__27024 = seq__26986_27019;
var G__27025 = chunk__26987_27020;
var G__27026 = count__26988_27021;
var G__27027 = (i__26989_27022 + (1));
seq__26986_27019 = G__27024;
chunk__26987_27020 = G__27025;
count__26988_27021 = G__27026;
i__26989_27022 = G__27027;
continue;
} else {
var temp__4657__auto___27028__$1 = cljs.core.seq.call(null,seq__26986_27019);
if(temp__4657__auto___27028__$1){
var seq__26986_27029__$1 = temp__4657__auto___27028__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26986_27029__$1)){
var c__19279__auto___27030 = cljs.core.chunk_first.call(null,seq__26986_27029__$1);
var G__27031 = cljs.core.chunk_rest.call(null,seq__26986_27029__$1);
var G__27032 = c__19279__auto___27030;
var G__27033 = cljs.core.count.call(null,c__19279__auto___27030);
var G__27034 = (0);
seq__26986_27019 = G__27031;
chunk__26987_27020 = G__27032;
count__26988_27021 = G__27033;
i__26989_27022 = G__27034;
continue;
} else {
var req_27035 = cljs.core.first.call(null,seq__26986_27029__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27035,prov);

var G__27036 = cljs.core.next.call(null,seq__26986_27029__$1);
var G__27037 = null;
var G__27038 = (0);
var G__27039 = (0);
seq__26986_27019 = G__27036;
chunk__26987_27020 = G__27037;
count__26988_27021 = G__27038;
i__26989_27022 = G__27039;
continue;
}
} else {
}
}
break;
}

var G__27040 = cljs.core.next.call(null,seq__26978__$1);
var G__27041 = null;
var G__27042 = (0);
var G__27043 = (0);
seq__26978 = G__27040;
chunk__26979 = G__27041;
count__26980 = G__27042;
i__26981 = G__27043;
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
var seq__27048_27052 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27049_27053 = null;
var count__27050_27054 = (0);
var i__27051_27055 = (0);
while(true){
if((i__27051_27055 < count__27050_27054)){
var ns_27056 = cljs.core._nth.call(null,chunk__27049_27053,i__27051_27055);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27056);

var G__27057 = seq__27048_27052;
var G__27058 = chunk__27049_27053;
var G__27059 = count__27050_27054;
var G__27060 = (i__27051_27055 + (1));
seq__27048_27052 = G__27057;
chunk__27049_27053 = G__27058;
count__27050_27054 = G__27059;
i__27051_27055 = G__27060;
continue;
} else {
var temp__4657__auto___27061 = cljs.core.seq.call(null,seq__27048_27052);
if(temp__4657__auto___27061){
var seq__27048_27062__$1 = temp__4657__auto___27061;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27048_27062__$1)){
var c__19279__auto___27063 = cljs.core.chunk_first.call(null,seq__27048_27062__$1);
var G__27064 = cljs.core.chunk_rest.call(null,seq__27048_27062__$1);
var G__27065 = c__19279__auto___27063;
var G__27066 = cljs.core.count.call(null,c__19279__auto___27063);
var G__27067 = (0);
seq__27048_27052 = G__27064;
chunk__27049_27053 = G__27065;
count__27050_27054 = G__27066;
i__27051_27055 = G__27067;
continue;
} else {
var ns_27068 = cljs.core.first.call(null,seq__27048_27062__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27068);

var G__27069 = cljs.core.next.call(null,seq__27048_27062__$1);
var G__27070 = null;
var G__27071 = (0);
var G__27072 = (0);
seq__27048_27052 = G__27069;
chunk__27049_27053 = G__27070;
count__27050_27054 = G__27071;
i__27051_27055 = G__27072;
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
var G__27073__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27073 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27074__i = 0, G__27074__a = new Array(arguments.length -  0);
while (G__27074__i < G__27074__a.length) {G__27074__a[G__27074__i] = arguments[G__27074__i + 0]; ++G__27074__i;}
  args = new cljs.core.IndexedSeq(G__27074__a,0);
} 
return G__27073__delegate.call(this,args);};
G__27073.cljs$lang$maxFixedArity = 0;
G__27073.cljs$lang$applyTo = (function (arglist__27075){
var args = cljs.core.seq(arglist__27075);
return G__27073__delegate(args);
});
G__27073.cljs$core$IFn$_invoke$arity$variadic = G__27073__delegate;
return G__27073;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27077 = cljs.core._EQ_;
var expr__27078 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27077.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27078))){
var path_parts = ((function (pred__27077,expr__27078){
return (function (p1__27076_SHARP_){
return clojure.string.split.call(null,p1__27076_SHARP_,/[\/\\]/);
});})(pred__27077,expr__27078))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__27077,expr__27078){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27080){if((e27080 instanceof Error)){
var e = e27080;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27080;

}
}})());
});
;})(path_parts,sep,root,pred__27077,expr__27078))
} else {
if(cljs.core.truth_(pred__27077.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27078))){
return ((function (pred__27077,expr__27078){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__27077,expr__27078){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27077,expr__27078))
);

return deferred.addErrback(((function (deferred,pred__27077,expr__27078){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27077,expr__27078))
);
});
;})(pred__27077,expr__27078))
} else {
return ((function (pred__27077,expr__27078){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27077,expr__27078))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27081,callback){
var map__27084 = p__27081;
var map__27084__$1 = ((((!((map__27084 == null)))?((((map__27084.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27084.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27084):map__27084);
var file_msg = map__27084__$1;
var request_url = cljs.core.get.call(null,map__27084__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27084,map__27084__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27084,map__27084__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__22278__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22278__auto__){
return (function (){
var f__22279__auto__ = (function (){var switch__22166__auto__ = ((function (c__22278__auto__){
return (function (state_27108){
var state_val_27109 = (state_27108[(1)]);
if((state_val_27109 === (7))){
var inst_27104 = (state_27108[(2)]);
var state_27108__$1 = state_27108;
var statearr_27110_27130 = state_27108__$1;
(statearr_27110_27130[(2)] = inst_27104);

(statearr_27110_27130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27109 === (1))){
var state_27108__$1 = state_27108;
var statearr_27111_27131 = state_27108__$1;
(statearr_27111_27131[(2)] = null);

(statearr_27111_27131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27109 === (4))){
var inst_27088 = (state_27108[(7)]);
var inst_27088__$1 = (state_27108[(2)]);
var state_27108__$1 = (function (){var statearr_27112 = state_27108;
(statearr_27112[(7)] = inst_27088__$1);

return statearr_27112;
})();
if(cljs.core.truth_(inst_27088__$1)){
var statearr_27113_27132 = state_27108__$1;
(statearr_27113_27132[(1)] = (5));

} else {
var statearr_27114_27133 = state_27108__$1;
(statearr_27114_27133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27109 === (6))){
var state_27108__$1 = state_27108;
var statearr_27115_27134 = state_27108__$1;
(statearr_27115_27134[(2)] = null);

(statearr_27115_27134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27109 === (3))){
var inst_27106 = (state_27108[(2)]);
var state_27108__$1 = state_27108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27108__$1,inst_27106);
} else {
if((state_val_27109 === (2))){
var state_27108__$1 = state_27108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27108__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27109 === (11))){
var inst_27100 = (state_27108[(2)]);
var state_27108__$1 = (function (){var statearr_27116 = state_27108;
(statearr_27116[(8)] = inst_27100);

return statearr_27116;
})();
var statearr_27117_27135 = state_27108__$1;
(statearr_27117_27135[(2)] = null);

(statearr_27117_27135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27109 === (9))){
var inst_27094 = (state_27108[(9)]);
var inst_27092 = (state_27108[(10)]);
var inst_27096 = inst_27094.call(null,inst_27092);
var state_27108__$1 = state_27108;
var statearr_27118_27136 = state_27108__$1;
(statearr_27118_27136[(2)] = inst_27096);

(statearr_27118_27136[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27109 === (5))){
var inst_27088 = (state_27108[(7)]);
var inst_27090 = figwheel.client.file_reloading.blocking_load.call(null,inst_27088);
var state_27108__$1 = state_27108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27108__$1,(8),inst_27090);
} else {
if((state_val_27109 === (10))){
var inst_27092 = (state_27108[(10)]);
var inst_27098 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27092);
var state_27108__$1 = state_27108;
var statearr_27119_27137 = state_27108__$1;
(statearr_27119_27137[(2)] = inst_27098);

(statearr_27119_27137[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27109 === (8))){
var inst_27088 = (state_27108[(7)]);
var inst_27094 = (state_27108[(9)]);
var inst_27092 = (state_27108[(2)]);
var inst_27093 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27094__$1 = cljs.core.get.call(null,inst_27093,inst_27088);
var state_27108__$1 = (function (){var statearr_27120 = state_27108;
(statearr_27120[(9)] = inst_27094__$1);

(statearr_27120[(10)] = inst_27092);

return statearr_27120;
})();
if(cljs.core.truth_(inst_27094__$1)){
var statearr_27121_27138 = state_27108__$1;
(statearr_27121_27138[(1)] = (9));

} else {
var statearr_27122_27139 = state_27108__$1;
(statearr_27122_27139[(1)] = (10));

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
});})(c__22278__auto__))
;
return ((function (switch__22166__auto__,c__22278__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22167__auto__ = null;
var figwheel$client$file_reloading$state_machine__22167__auto____0 = (function (){
var statearr_27126 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27126[(0)] = figwheel$client$file_reloading$state_machine__22167__auto__);

(statearr_27126[(1)] = (1));

return statearr_27126;
});
var figwheel$client$file_reloading$state_machine__22167__auto____1 = (function (state_27108){
while(true){
var ret_value__22168__auto__ = (function (){try{while(true){
var result__22169__auto__ = switch__22166__auto__.call(null,state_27108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22169__auto__;
}
break;
}
}catch (e27127){if((e27127 instanceof Object)){
var ex__22170__auto__ = e27127;
var statearr_27128_27140 = state_27108;
(statearr_27128_27140[(5)] = ex__22170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27141 = state_27108;
state_27108 = G__27141;
continue;
} else {
return ret_value__22168__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22167__auto__ = function(state_27108){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22167__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22167__auto____1.call(this,state_27108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22167__auto____0;
figwheel$client$file_reloading$state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22167__auto____1;
return figwheel$client$file_reloading$state_machine__22167__auto__;
})()
;})(switch__22166__auto__,c__22278__auto__))
})();
var state__22280__auto__ = (function (){var statearr_27129 = f__22279__auto__.call(null);
(statearr_27129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22278__auto__);

return statearr_27129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22280__auto__);
});})(c__22278__auto__))
);

return c__22278__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27142,callback){
var map__27145 = p__27142;
var map__27145__$1 = ((((!((map__27145 == null)))?((((map__27145.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27145.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27145):map__27145);
var file_msg = map__27145__$1;
var namespace = cljs.core.get.call(null,map__27145__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27145,map__27145__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27145,map__27145__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27147){
var map__27150 = p__27147;
var map__27150__$1 = ((((!((map__27150 == null)))?((((map__27150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27150):map__27150);
var file_msg = map__27150__$1;
var namespace = cljs.core.get.call(null,map__27150__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27152,callback){
var map__27155 = p__27152;
var map__27155__$1 = ((((!((map__27155 == null)))?((((map__27155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27155):map__27155);
var file_msg = map__27155__$1;
var request_url = cljs.core.get.call(null,map__27155__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27155__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__22278__auto___27243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22278__auto___27243,out){
return (function (){
var f__22279__auto__ = (function (){var switch__22166__auto__ = ((function (c__22278__auto___27243,out){
return (function (state_27225){
var state_val_27226 = (state_27225[(1)]);
if((state_val_27226 === (1))){
var inst_27203 = cljs.core.nth.call(null,files,(0),null);
var inst_27204 = cljs.core.nthnext.call(null,files,(1));
var inst_27205 = files;
var state_27225__$1 = (function (){var statearr_27227 = state_27225;
(statearr_27227[(7)] = inst_27203);

(statearr_27227[(8)] = inst_27204);

(statearr_27227[(9)] = inst_27205);

return statearr_27227;
})();
var statearr_27228_27244 = state_27225__$1;
(statearr_27228_27244[(2)] = null);

(statearr_27228_27244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (2))){
var inst_27208 = (state_27225[(10)]);
var inst_27205 = (state_27225[(9)]);
var inst_27208__$1 = cljs.core.nth.call(null,inst_27205,(0),null);
var inst_27209 = cljs.core.nthnext.call(null,inst_27205,(1));
var inst_27210 = (inst_27208__$1 == null);
var inst_27211 = cljs.core.not.call(null,inst_27210);
var state_27225__$1 = (function (){var statearr_27229 = state_27225;
(statearr_27229[(11)] = inst_27209);

(statearr_27229[(10)] = inst_27208__$1);

return statearr_27229;
})();
if(inst_27211){
var statearr_27230_27245 = state_27225__$1;
(statearr_27230_27245[(1)] = (4));

} else {
var statearr_27231_27246 = state_27225__$1;
(statearr_27231_27246[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (3))){
var inst_27223 = (state_27225[(2)]);
var state_27225__$1 = state_27225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27225__$1,inst_27223);
} else {
if((state_val_27226 === (4))){
var inst_27208 = (state_27225[(10)]);
var inst_27213 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27208);
var state_27225__$1 = state_27225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27225__$1,(7),inst_27213);
} else {
if((state_val_27226 === (5))){
var inst_27219 = cljs.core.async.close_BANG_.call(null,out);
var state_27225__$1 = state_27225;
var statearr_27232_27247 = state_27225__$1;
(statearr_27232_27247[(2)] = inst_27219);

(statearr_27232_27247[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (6))){
var inst_27221 = (state_27225[(2)]);
var state_27225__$1 = state_27225;
var statearr_27233_27248 = state_27225__$1;
(statearr_27233_27248[(2)] = inst_27221);

(statearr_27233_27248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (7))){
var inst_27209 = (state_27225[(11)]);
var inst_27215 = (state_27225[(2)]);
var inst_27216 = cljs.core.async.put_BANG_.call(null,out,inst_27215);
var inst_27205 = inst_27209;
var state_27225__$1 = (function (){var statearr_27234 = state_27225;
(statearr_27234[(12)] = inst_27216);

(statearr_27234[(9)] = inst_27205);

return statearr_27234;
})();
var statearr_27235_27249 = state_27225__$1;
(statearr_27235_27249[(2)] = null);

(statearr_27235_27249[(1)] = (2));


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
});})(c__22278__auto___27243,out))
;
return ((function (switch__22166__auto__,c__22278__auto___27243,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22167__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22167__auto____0 = (function (){
var statearr_27239 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27239[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22167__auto__);

(statearr_27239[(1)] = (1));

return statearr_27239;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22167__auto____1 = (function (state_27225){
while(true){
var ret_value__22168__auto__ = (function (){try{while(true){
var result__22169__auto__ = switch__22166__auto__.call(null,state_27225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22169__auto__;
}
break;
}
}catch (e27240){if((e27240 instanceof Object)){
var ex__22170__auto__ = e27240;
var statearr_27241_27250 = state_27225;
(statearr_27241_27250[(5)] = ex__22170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27251 = state_27225;
state_27225 = G__27251;
continue;
} else {
return ret_value__22168__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22167__auto__ = function(state_27225){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22167__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22167__auto____1.call(this,state_27225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22167__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22167__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22167__auto__;
})()
;})(switch__22166__auto__,c__22278__auto___27243,out))
})();
var state__22280__auto__ = (function (){var statearr_27242 = f__22279__auto__.call(null);
(statearr_27242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22278__auto___27243);

return statearr_27242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22280__auto__);
});})(c__22278__auto___27243,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27252,opts){
var map__27256 = p__27252;
var map__27256__$1 = ((((!((map__27256 == null)))?((((map__27256.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27256.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27256):map__27256);
var eval_body__$1 = cljs.core.get.call(null,map__27256__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27256__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e27258){var e = e27258;
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
return (function (p1__27259_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27259_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__27264){
var vec__27265 = p__27264;
var k = cljs.core.nth.call(null,vec__27265,(0),null);
var v = cljs.core.nth.call(null,vec__27265,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27266){
var vec__27267 = p__27266;
var k = cljs.core.nth.call(null,vec__27267,(0),null);
var v = cljs.core.nth.call(null,vec__27267,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27271,p__27272){
var map__27519 = p__27271;
var map__27519__$1 = ((((!((map__27519 == null)))?((((map__27519.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27519.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27519):map__27519);
var opts = map__27519__$1;
var before_jsload = cljs.core.get.call(null,map__27519__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27519__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27519__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27520 = p__27272;
var map__27520__$1 = ((((!((map__27520 == null)))?((((map__27520.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27520.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27520):map__27520);
var msg = map__27520__$1;
var files = cljs.core.get.call(null,map__27520__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27520__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27520__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22278__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22278__auto__,map__27519,map__27519__$1,opts,before_jsload,on_jsload,reload_dependents,map__27520,map__27520__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22279__auto__ = (function (){var switch__22166__auto__ = ((function (c__22278__auto__,map__27519,map__27519__$1,opts,before_jsload,on_jsload,reload_dependents,map__27520,map__27520__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27673){
var state_val_27674 = (state_27673[(1)]);
if((state_val_27674 === (7))){
var inst_27537 = (state_27673[(7)]);
var inst_27535 = (state_27673[(8)]);
var inst_27534 = (state_27673[(9)]);
var inst_27536 = (state_27673[(10)]);
var inst_27542 = cljs.core._nth.call(null,inst_27535,inst_27537);
var inst_27543 = figwheel.client.file_reloading.eval_body.call(null,inst_27542,opts);
var inst_27544 = (inst_27537 + (1));
var tmp27675 = inst_27535;
var tmp27676 = inst_27534;
var tmp27677 = inst_27536;
var inst_27534__$1 = tmp27676;
var inst_27535__$1 = tmp27675;
var inst_27536__$1 = tmp27677;
var inst_27537__$1 = inst_27544;
var state_27673__$1 = (function (){var statearr_27678 = state_27673;
(statearr_27678[(11)] = inst_27543);

(statearr_27678[(7)] = inst_27537__$1);

(statearr_27678[(8)] = inst_27535__$1);

(statearr_27678[(9)] = inst_27534__$1);

(statearr_27678[(10)] = inst_27536__$1);

return statearr_27678;
})();
var statearr_27679_27765 = state_27673__$1;
(statearr_27679_27765[(2)] = null);

(statearr_27679_27765[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (20))){
var inst_27577 = (state_27673[(12)]);
var inst_27585 = figwheel.client.file_reloading.sort_files.call(null,inst_27577);
var state_27673__$1 = state_27673;
var statearr_27680_27766 = state_27673__$1;
(statearr_27680_27766[(2)] = inst_27585);

(statearr_27680_27766[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (27))){
var state_27673__$1 = state_27673;
var statearr_27681_27767 = state_27673__$1;
(statearr_27681_27767[(2)] = null);

(statearr_27681_27767[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (1))){
var inst_27526 = (state_27673[(13)]);
var inst_27523 = before_jsload.call(null,files);
var inst_27524 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27525 = (function (){return ((function (inst_27526,inst_27523,inst_27524,state_val_27674,c__22278__auto__,map__27519,map__27519__$1,opts,before_jsload,on_jsload,reload_dependents,map__27520,map__27520__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27268_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27268_SHARP_);
});
;})(inst_27526,inst_27523,inst_27524,state_val_27674,c__22278__auto__,map__27519,map__27519__$1,opts,before_jsload,on_jsload,reload_dependents,map__27520,map__27520__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27526__$1 = cljs.core.filter.call(null,inst_27525,files);
var inst_27527 = cljs.core.not_empty.call(null,inst_27526__$1);
var state_27673__$1 = (function (){var statearr_27682 = state_27673;
(statearr_27682[(14)] = inst_27523);

(statearr_27682[(13)] = inst_27526__$1);

(statearr_27682[(15)] = inst_27524);

return statearr_27682;
})();
if(cljs.core.truth_(inst_27527)){
var statearr_27683_27768 = state_27673__$1;
(statearr_27683_27768[(1)] = (2));

} else {
var statearr_27684_27769 = state_27673__$1;
(statearr_27684_27769[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (24))){
var state_27673__$1 = state_27673;
var statearr_27685_27770 = state_27673__$1;
(statearr_27685_27770[(2)] = null);

(statearr_27685_27770[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (39))){
var inst_27627 = (state_27673[(16)]);
var state_27673__$1 = state_27673;
var statearr_27686_27771 = state_27673__$1;
(statearr_27686_27771[(2)] = inst_27627);

(statearr_27686_27771[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (46))){
var inst_27668 = (state_27673[(2)]);
var state_27673__$1 = state_27673;
var statearr_27687_27772 = state_27673__$1;
(statearr_27687_27772[(2)] = inst_27668);

(statearr_27687_27772[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (4))){
var inst_27571 = (state_27673[(2)]);
var inst_27572 = cljs.core.List.EMPTY;
var inst_27573 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27572);
var inst_27574 = (function (){return ((function (inst_27571,inst_27572,inst_27573,state_val_27674,c__22278__auto__,map__27519,map__27519__$1,opts,before_jsload,on_jsload,reload_dependents,map__27520,map__27520__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27269_SHARP_){
var and__18456__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27269_SHARP_);
if(cljs.core.truth_(and__18456__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27269_SHARP_));
} else {
return and__18456__auto__;
}
});
;})(inst_27571,inst_27572,inst_27573,state_val_27674,c__22278__auto__,map__27519,map__27519__$1,opts,before_jsload,on_jsload,reload_dependents,map__27520,map__27520__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27575 = cljs.core.filter.call(null,inst_27574,files);
var inst_27576 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27577 = cljs.core.concat.call(null,inst_27575,inst_27576);
var state_27673__$1 = (function (){var statearr_27688 = state_27673;
(statearr_27688[(12)] = inst_27577);

(statearr_27688[(17)] = inst_27571);

(statearr_27688[(18)] = inst_27573);

return statearr_27688;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27689_27773 = state_27673__$1;
(statearr_27689_27773[(1)] = (16));

} else {
var statearr_27690_27774 = state_27673__$1;
(statearr_27690_27774[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (15))){
var inst_27561 = (state_27673[(2)]);
var state_27673__$1 = state_27673;
var statearr_27691_27775 = state_27673__$1;
(statearr_27691_27775[(2)] = inst_27561);

(statearr_27691_27775[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (21))){
var inst_27587 = (state_27673[(19)]);
var inst_27587__$1 = (state_27673[(2)]);
var inst_27588 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27587__$1);
var state_27673__$1 = (function (){var statearr_27692 = state_27673;
(statearr_27692[(19)] = inst_27587__$1);

return statearr_27692;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27673__$1,(22),inst_27588);
} else {
if((state_val_27674 === (31))){
var inst_27671 = (state_27673[(2)]);
var state_27673__$1 = state_27673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27673__$1,inst_27671);
} else {
if((state_val_27674 === (32))){
var inst_27627 = (state_27673[(16)]);
var inst_27632 = inst_27627.cljs$lang$protocol_mask$partition0$;
var inst_27633 = (inst_27632 & (64));
var inst_27634 = inst_27627.cljs$core$ISeq$;
var inst_27635 = (inst_27633) || (inst_27634);
var state_27673__$1 = state_27673;
if(cljs.core.truth_(inst_27635)){
var statearr_27693_27776 = state_27673__$1;
(statearr_27693_27776[(1)] = (35));

} else {
var statearr_27694_27777 = state_27673__$1;
(statearr_27694_27777[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (40))){
var inst_27648 = (state_27673[(20)]);
var inst_27647 = (state_27673[(2)]);
var inst_27648__$1 = cljs.core.get.call(null,inst_27647,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27649 = cljs.core.get.call(null,inst_27647,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27650 = cljs.core.not_empty.call(null,inst_27648__$1);
var state_27673__$1 = (function (){var statearr_27695 = state_27673;
(statearr_27695[(20)] = inst_27648__$1);

(statearr_27695[(21)] = inst_27649);

return statearr_27695;
})();
if(cljs.core.truth_(inst_27650)){
var statearr_27696_27778 = state_27673__$1;
(statearr_27696_27778[(1)] = (41));

} else {
var statearr_27697_27779 = state_27673__$1;
(statearr_27697_27779[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (33))){
var state_27673__$1 = state_27673;
var statearr_27698_27780 = state_27673__$1;
(statearr_27698_27780[(2)] = false);

(statearr_27698_27780[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (13))){
var inst_27547 = (state_27673[(22)]);
var inst_27551 = cljs.core.chunk_first.call(null,inst_27547);
var inst_27552 = cljs.core.chunk_rest.call(null,inst_27547);
var inst_27553 = cljs.core.count.call(null,inst_27551);
var inst_27534 = inst_27552;
var inst_27535 = inst_27551;
var inst_27536 = inst_27553;
var inst_27537 = (0);
var state_27673__$1 = (function (){var statearr_27699 = state_27673;
(statearr_27699[(7)] = inst_27537);

(statearr_27699[(8)] = inst_27535);

(statearr_27699[(9)] = inst_27534);

(statearr_27699[(10)] = inst_27536);

return statearr_27699;
})();
var statearr_27700_27781 = state_27673__$1;
(statearr_27700_27781[(2)] = null);

(statearr_27700_27781[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (22))){
var inst_27587 = (state_27673[(19)]);
var inst_27590 = (state_27673[(23)]);
var inst_27591 = (state_27673[(24)]);
var inst_27595 = (state_27673[(25)]);
var inst_27590__$1 = (state_27673[(2)]);
var inst_27591__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27590__$1);
var inst_27592 = (function (){var all_files = inst_27587;
var res_SINGLEQUOTE_ = inst_27590__$1;
var res = inst_27591__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27587,inst_27590,inst_27591,inst_27595,inst_27590__$1,inst_27591__$1,state_val_27674,c__22278__auto__,map__27519,map__27519__$1,opts,before_jsload,on_jsload,reload_dependents,map__27520,map__27520__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27270_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27270_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27587,inst_27590,inst_27591,inst_27595,inst_27590__$1,inst_27591__$1,state_val_27674,c__22278__auto__,map__27519,map__27519__$1,opts,before_jsload,on_jsload,reload_dependents,map__27520,map__27520__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27593 = cljs.core.filter.call(null,inst_27592,inst_27590__$1);
var inst_27594 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27595__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27594);
var inst_27596 = cljs.core.not_empty.call(null,inst_27595__$1);
var state_27673__$1 = (function (){var statearr_27701 = state_27673;
(statearr_27701[(23)] = inst_27590__$1);

(statearr_27701[(26)] = inst_27593);

(statearr_27701[(24)] = inst_27591__$1);

(statearr_27701[(25)] = inst_27595__$1);

return statearr_27701;
})();
if(cljs.core.truth_(inst_27596)){
var statearr_27702_27782 = state_27673__$1;
(statearr_27702_27782[(1)] = (23));

} else {
var statearr_27703_27783 = state_27673__$1;
(statearr_27703_27783[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (36))){
var state_27673__$1 = state_27673;
var statearr_27704_27784 = state_27673__$1;
(statearr_27704_27784[(2)] = false);

(statearr_27704_27784[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (41))){
var inst_27648 = (state_27673[(20)]);
var inst_27652 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27653 = cljs.core.map.call(null,inst_27652,inst_27648);
var inst_27654 = cljs.core.pr_str.call(null,inst_27653);
var inst_27655 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27654)].join('');
var inst_27656 = figwheel.client.utils.log.call(null,inst_27655);
var state_27673__$1 = state_27673;
var statearr_27705_27785 = state_27673__$1;
(statearr_27705_27785[(2)] = inst_27656);

(statearr_27705_27785[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (43))){
var inst_27649 = (state_27673[(21)]);
var inst_27659 = (state_27673[(2)]);
var inst_27660 = cljs.core.not_empty.call(null,inst_27649);
var state_27673__$1 = (function (){var statearr_27706 = state_27673;
(statearr_27706[(27)] = inst_27659);

return statearr_27706;
})();
if(cljs.core.truth_(inst_27660)){
var statearr_27707_27786 = state_27673__$1;
(statearr_27707_27786[(1)] = (44));

} else {
var statearr_27708_27787 = state_27673__$1;
(statearr_27708_27787[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (29))){
var inst_27587 = (state_27673[(19)]);
var inst_27590 = (state_27673[(23)]);
var inst_27593 = (state_27673[(26)]);
var inst_27591 = (state_27673[(24)]);
var inst_27595 = (state_27673[(25)]);
var inst_27627 = (state_27673[(16)]);
var inst_27623 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27626 = (function (){var all_files = inst_27587;
var res_SINGLEQUOTE_ = inst_27590;
var res = inst_27591;
var files_not_loaded = inst_27593;
var dependencies_that_loaded = inst_27595;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27587,inst_27590,inst_27593,inst_27591,inst_27595,inst_27627,inst_27623,state_val_27674,c__22278__auto__,map__27519,map__27519__$1,opts,before_jsload,on_jsload,reload_dependents,map__27520,map__27520__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27625){
var map__27709 = p__27625;
var map__27709__$1 = ((((!((map__27709 == null)))?((((map__27709.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27709.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27709):map__27709);
var namespace = cljs.core.get.call(null,map__27709__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27587,inst_27590,inst_27593,inst_27591,inst_27595,inst_27627,inst_27623,state_val_27674,c__22278__auto__,map__27519,map__27519__$1,opts,before_jsload,on_jsload,reload_dependents,map__27520,map__27520__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27627__$1 = cljs.core.group_by.call(null,inst_27626,inst_27593);
var inst_27629 = (inst_27627__$1 == null);
var inst_27630 = cljs.core.not.call(null,inst_27629);
var state_27673__$1 = (function (){var statearr_27711 = state_27673;
(statearr_27711[(28)] = inst_27623);

(statearr_27711[(16)] = inst_27627__$1);

return statearr_27711;
})();
if(inst_27630){
var statearr_27712_27788 = state_27673__$1;
(statearr_27712_27788[(1)] = (32));

} else {
var statearr_27713_27789 = state_27673__$1;
(statearr_27713_27789[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (44))){
var inst_27649 = (state_27673[(21)]);
var inst_27662 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27649);
var inst_27663 = cljs.core.pr_str.call(null,inst_27662);
var inst_27664 = [cljs.core.str("not required: "),cljs.core.str(inst_27663)].join('');
var inst_27665 = figwheel.client.utils.log.call(null,inst_27664);
var state_27673__$1 = state_27673;
var statearr_27714_27790 = state_27673__$1;
(statearr_27714_27790[(2)] = inst_27665);

(statearr_27714_27790[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (6))){
var inst_27568 = (state_27673[(2)]);
var state_27673__$1 = state_27673;
var statearr_27715_27791 = state_27673__$1;
(statearr_27715_27791[(2)] = inst_27568);

(statearr_27715_27791[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (28))){
var inst_27593 = (state_27673[(26)]);
var inst_27620 = (state_27673[(2)]);
var inst_27621 = cljs.core.not_empty.call(null,inst_27593);
var state_27673__$1 = (function (){var statearr_27716 = state_27673;
(statearr_27716[(29)] = inst_27620);

return statearr_27716;
})();
if(cljs.core.truth_(inst_27621)){
var statearr_27717_27792 = state_27673__$1;
(statearr_27717_27792[(1)] = (29));

} else {
var statearr_27718_27793 = state_27673__$1;
(statearr_27718_27793[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (25))){
var inst_27591 = (state_27673[(24)]);
var inst_27607 = (state_27673[(2)]);
var inst_27608 = cljs.core.not_empty.call(null,inst_27591);
var state_27673__$1 = (function (){var statearr_27719 = state_27673;
(statearr_27719[(30)] = inst_27607);

return statearr_27719;
})();
if(cljs.core.truth_(inst_27608)){
var statearr_27720_27794 = state_27673__$1;
(statearr_27720_27794[(1)] = (26));

} else {
var statearr_27721_27795 = state_27673__$1;
(statearr_27721_27795[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (34))){
var inst_27642 = (state_27673[(2)]);
var state_27673__$1 = state_27673;
if(cljs.core.truth_(inst_27642)){
var statearr_27722_27796 = state_27673__$1;
(statearr_27722_27796[(1)] = (38));

} else {
var statearr_27723_27797 = state_27673__$1;
(statearr_27723_27797[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (17))){
var state_27673__$1 = state_27673;
var statearr_27724_27798 = state_27673__$1;
(statearr_27724_27798[(2)] = recompile_dependents);

(statearr_27724_27798[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (3))){
var state_27673__$1 = state_27673;
var statearr_27725_27799 = state_27673__$1;
(statearr_27725_27799[(2)] = null);

(statearr_27725_27799[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (12))){
var inst_27564 = (state_27673[(2)]);
var state_27673__$1 = state_27673;
var statearr_27726_27800 = state_27673__$1;
(statearr_27726_27800[(2)] = inst_27564);

(statearr_27726_27800[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (2))){
var inst_27526 = (state_27673[(13)]);
var inst_27533 = cljs.core.seq.call(null,inst_27526);
var inst_27534 = inst_27533;
var inst_27535 = null;
var inst_27536 = (0);
var inst_27537 = (0);
var state_27673__$1 = (function (){var statearr_27727 = state_27673;
(statearr_27727[(7)] = inst_27537);

(statearr_27727[(8)] = inst_27535);

(statearr_27727[(9)] = inst_27534);

(statearr_27727[(10)] = inst_27536);

return statearr_27727;
})();
var statearr_27728_27801 = state_27673__$1;
(statearr_27728_27801[(2)] = null);

(statearr_27728_27801[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (23))){
var inst_27587 = (state_27673[(19)]);
var inst_27590 = (state_27673[(23)]);
var inst_27593 = (state_27673[(26)]);
var inst_27591 = (state_27673[(24)]);
var inst_27595 = (state_27673[(25)]);
var inst_27598 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27600 = (function (){var all_files = inst_27587;
var res_SINGLEQUOTE_ = inst_27590;
var res = inst_27591;
var files_not_loaded = inst_27593;
var dependencies_that_loaded = inst_27595;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27587,inst_27590,inst_27593,inst_27591,inst_27595,inst_27598,state_val_27674,c__22278__auto__,map__27519,map__27519__$1,opts,before_jsload,on_jsload,reload_dependents,map__27520,map__27520__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27599){
var map__27729 = p__27599;
var map__27729__$1 = ((((!((map__27729 == null)))?((((map__27729.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27729.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27729):map__27729);
var request_url = cljs.core.get.call(null,map__27729__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27587,inst_27590,inst_27593,inst_27591,inst_27595,inst_27598,state_val_27674,c__22278__auto__,map__27519,map__27519__$1,opts,before_jsload,on_jsload,reload_dependents,map__27520,map__27520__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27601 = cljs.core.reverse.call(null,inst_27595);
var inst_27602 = cljs.core.map.call(null,inst_27600,inst_27601);
var inst_27603 = cljs.core.pr_str.call(null,inst_27602);
var inst_27604 = figwheel.client.utils.log.call(null,inst_27603);
var state_27673__$1 = (function (){var statearr_27731 = state_27673;
(statearr_27731[(31)] = inst_27598);

return statearr_27731;
})();
var statearr_27732_27802 = state_27673__$1;
(statearr_27732_27802[(2)] = inst_27604);

(statearr_27732_27802[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (35))){
var state_27673__$1 = state_27673;
var statearr_27733_27803 = state_27673__$1;
(statearr_27733_27803[(2)] = true);

(statearr_27733_27803[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (19))){
var inst_27577 = (state_27673[(12)]);
var inst_27583 = figwheel.client.file_reloading.expand_files.call(null,inst_27577);
var state_27673__$1 = state_27673;
var statearr_27734_27804 = state_27673__$1;
(statearr_27734_27804[(2)] = inst_27583);

(statearr_27734_27804[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (11))){
var state_27673__$1 = state_27673;
var statearr_27735_27805 = state_27673__$1;
(statearr_27735_27805[(2)] = null);

(statearr_27735_27805[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (9))){
var inst_27566 = (state_27673[(2)]);
var state_27673__$1 = state_27673;
var statearr_27736_27806 = state_27673__$1;
(statearr_27736_27806[(2)] = inst_27566);

(statearr_27736_27806[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (5))){
var inst_27537 = (state_27673[(7)]);
var inst_27536 = (state_27673[(10)]);
var inst_27539 = (inst_27537 < inst_27536);
var inst_27540 = inst_27539;
var state_27673__$1 = state_27673;
if(cljs.core.truth_(inst_27540)){
var statearr_27737_27807 = state_27673__$1;
(statearr_27737_27807[(1)] = (7));

} else {
var statearr_27738_27808 = state_27673__$1;
(statearr_27738_27808[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (14))){
var inst_27547 = (state_27673[(22)]);
var inst_27556 = cljs.core.first.call(null,inst_27547);
var inst_27557 = figwheel.client.file_reloading.eval_body.call(null,inst_27556,opts);
var inst_27558 = cljs.core.next.call(null,inst_27547);
var inst_27534 = inst_27558;
var inst_27535 = null;
var inst_27536 = (0);
var inst_27537 = (0);
var state_27673__$1 = (function (){var statearr_27739 = state_27673;
(statearr_27739[(7)] = inst_27537);

(statearr_27739[(8)] = inst_27535);

(statearr_27739[(9)] = inst_27534);

(statearr_27739[(32)] = inst_27557);

(statearr_27739[(10)] = inst_27536);

return statearr_27739;
})();
var statearr_27740_27809 = state_27673__$1;
(statearr_27740_27809[(2)] = null);

(statearr_27740_27809[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (45))){
var state_27673__$1 = state_27673;
var statearr_27741_27810 = state_27673__$1;
(statearr_27741_27810[(2)] = null);

(statearr_27741_27810[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (26))){
var inst_27587 = (state_27673[(19)]);
var inst_27590 = (state_27673[(23)]);
var inst_27593 = (state_27673[(26)]);
var inst_27591 = (state_27673[(24)]);
var inst_27595 = (state_27673[(25)]);
var inst_27610 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27612 = (function (){var all_files = inst_27587;
var res_SINGLEQUOTE_ = inst_27590;
var res = inst_27591;
var files_not_loaded = inst_27593;
var dependencies_that_loaded = inst_27595;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27587,inst_27590,inst_27593,inst_27591,inst_27595,inst_27610,state_val_27674,c__22278__auto__,map__27519,map__27519__$1,opts,before_jsload,on_jsload,reload_dependents,map__27520,map__27520__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27611){
var map__27742 = p__27611;
var map__27742__$1 = ((((!((map__27742 == null)))?((((map__27742.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27742.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27742):map__27742);
var namespace = cljs.core.get.call(null,map__27742__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27742__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27587,inst_27590,inst_27593,inst_27591,inst_27595,inst_27610,state_val_27674,c__22278__auto__,map__27519,map__27519__$1,opts,before_jsload,on_jsload,reload_dependents,map__27520,map__27520__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27613 = cljs.core.map.call(null,inst_27612,inst_27591);
var inst_27614 = cljs.core.pr_str.call(null,inst_27613);
var inst_27615 = figwheel.client.utils.log.call(null,inst_27614);
var inst_27616 = (function (){var all_files = inst_27587;
var res_SINGLEQUOTE_ = inst_27590;
var res = inst_27591;
var files_not_loaded = inst_27593;
var dependencies_that_loaded = inst_27595;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27587,inst_27590,inst_27593,inst_27591,inst_27595,inst_27610,inst_27612,inst_27613,inst_27614,inst_27615,state_val_27674,c__22278__auto__,map__27519,map__27519__$1,opts,before_jsload,on_jsload,reload_dependents,map__27520,map__27520__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27587,inst_27590,inst_27593,inst_27591,inst_27595,inst_27610,inst_27612,inst_27613,inst_27614,inst_27615,state_val_27674,c__22278__auto__,map__27519,map__27519__$1,opts,before_jsload,on_jsload,reload_dependents,map__27520,map__27520__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27617 = setTimeout(inst_27616,(10));
var state_27673__$1 = (function (){var statearr_27744 = state_27673;
(statearr_27744[(33)] = inst_27610);

(statearr_27744[(34)] = inst_27615);

return statearr_27744;
})();
var statearr_27745_27811 = state_27673__$1;
(statearr_27745_27811[(2)] = inst_27617);

(statearr_27745_27811[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (16))){
var state_27673__$1 = state_27673;
var statearr_27746_27812 = state_27673__$1;
(statearr_27746_27812[(2)] = reload_dependents);

(statearr_27746_27812[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (38))){
var inst_27627 = (state_27673[(16)]);
var inst_27644 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27627);
var state_27673__$1 = state_27673;
var statearr_27747_27813 = state_27673__$1;
(statearr_27747_27813[(2)] = inst_27644);

(statearr_27747_27813[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (30))){
var state_27673__$1 = state_27673;
var statearr_27748_27814 = state_27673__$1;
(statearr_27748_27814[(2)] = null);

(statearr_27748_27814[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (10))){
var inst_27547 = (state_27673[(22)]);
var inst_27549 = cljs.core.chunked_seq_QMARK_.call(null,inst_27547);
var state_27673__$1 = state_27673;
if(inst_27549){
var statearr_27749_27815 = state_27673__$1;
(statearr_27749_27815[(1)] = (13));

} else {
var statearr_27750_27816 = state_27673__$1;
(statearr_27750_27816[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (18))){
var inst_27581 = (state_27673[(2)]);
var state_27673__$1 = state_27673;
if(cljs.core.truth_(inst_27581)){
var statearr_27751_27817 = state_27673__$1;
(statearr_27751_27817[(1)] = (19));

} else {
var statearr_27752_27818 = state_27673__$1;
(statearr_27752_27818[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (42))){
var state_27673__$1 = state_27673;
var statearr_27753_27819 = state_27673__$1;
(statearr_27753_27819[(2)] = null);

(statearr_27753_27819[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (37))){
var inst_27639 = (state_27673[(2)]);
var state_27673__$1 = state_27673;
var statearr_27754_27820 = state_27673__$1;
(statearr_27754_27820[(2)] = inst_27639);

(statearr_27754_27820[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (8))){
var inst_27547 = (state_27673[(22)]);
var inst_27534 = (state_27673[(9)]);
var inst_27547__$1 = cljs.core.seq.call(null,inst_27534);
var state_27673__$1 = (function (){var statearr_27755 = state_27673;
(statearr_27755[(22)] = inst_27547__$1);

return statearr_27755;
})();
if(inst_27547__$1){
var statearr_27756_27821 = state_27673__$1;
(statearr_27756_27821[(1)] = (10));

} else {
var statearr_27757_27822 = state_27673__$1;
(statearr_27757_27822[(1)] = (11));

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
});})(c__22278__auto__,map__27519,map__27519__$1,opts,before_jsload,on_jsload,reload_dependents,map__27520,map__27520__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22166__auto__,c__22278__auto__,map__27519,map__27519__$1,opts,before_jsload,on_jsload,reload_dependents,map__27520,map__27520__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22167__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22167__auto____0 = (function (){
var statearr_27761 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27761[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22167__auto__);

(statearr_27761[(1)] = (1));

return statearr_27761;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22167__auto____1 = (function (state_27673){
while(true){
var ret_value__22168__auto__ = (function (){try{while(true){
var result__22169__auto__ = switch__22166__auto__.call(null,state_27673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22169__auto__;
}
break;
}
}catch (e27762){if((e27762 instanceof Object)){
var ex__22170__auto__ = e27762;
var statearr_27763_27823 = state_27673;
(statearr_27763_27823[(5)] = ex__22170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27824 = state_27673;
state_27673 = G__27824;
continue;
} else {
return ret_value__22168__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22167__auto__ = function(state_27673){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22167__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22167__auto____1.call(this,state_27673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22167__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22167__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22167__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22167__auto__;
})()
;})(switch__22166__auto__,c__22278__auto__,map__27519,map__27519__$1,opts,before_jsload,on_jsload,reload_dependents,map__27520,map__27520__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22280__auto__ = (function (){var statearr_27764 = f__22279__auto__.call(null);
(statearr_27764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22278__auto__);

return statearr_27764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22280__auto__);
});})(c__22278__auto__,map__27519,map__27519__$1,opts,before_jsload,on_jsload,reload_dependents,map__27520,map__27520__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22278__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27827,link){
var map__27830 = p__27827;
var map__27830__$1 = ((((!((map__27830 == null)))?((((map__27830.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27830.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27830):map__27830);
var file = cljs.core.get.call(null,map__27830__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__27830,map__27830__$1,file){
return (function (p1__27825_SHARP_,p2__27826_SHARP_){
if(cljs.core._EQ_.call(null,p1__27825_SHARP_,p2__27826_SHARP_)){
return p1__27825_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__27830,map__27830__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27836){
var map__27837 = p__27836;
var map__27837__$1 = ((((!((map__27837 == null)))?((((map__27837.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27837.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27837):map__27837);
var match_length = cljs.core.get.call(null,map__27837__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27837__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27832_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27832_SHARP_);
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
var args27839 = [];
var len__19538__auto___27842 = arguments.length;
var i__19539__auto___27843 = (0);
while(true){
if((i__19539__auto___27843 < len__19538__auto___27842)){
args27839.push((arguments[i__19539__auto___27843]));

var G__27844 = (i__19539__auto___27843 + (1));
i__19539__auto___27843 = G__27844;
continue;
} else {
}
break;
}

var G__27841 = args27839.length;
switch (G__27841) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27839.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27846_SHARP_,p2__27847_SHARP_){
return cljs.core.assoc.call(null,p1__27846_SHARP_,cljs.core.get.call(null,p2__27847_SHARP_,key),p2__27847_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27848){
var map__27851 = p__27848;
var map__27851__$1 = ((((!((map__27851 == null)))?((((map__27851.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27851.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27851):map__27851);
var f_data = map__27851__$1;
var file = cljs.core.get.call(null,map__27851__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27853,files_msg){
var map__27860 = p__27853;
var map__27860__$1 = ((((!((map__27860 == null)))?((((map__27860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27860):map__27860);
var opts = map__27860__$1;
var on_cssload = cljs.core.get.call(null,map__27860__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27862_27866 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27863_27867 = null;
var count__27864_27868 = (0);
var i__27865_27869 = (0);
while(true){
if((i__27865_27869 < count__27864_27868)){
var f_27870 = cljs.core._nth.call(null,chunk__27863_27867,i__27865_27869);
figwheel.client.file_reloading.reload_css_file.call(null,f_27870);

var G__27871 = seq__27862_27866;
var G__27872 = chunk__27863_27867;
var G__27873 = count__27864_27868;
var G__27874 = (i__27865_27869 + (1));
seq__27862_27866 = G__27871;
chunk__27863_27867 = G__27872;
count__27864_27868 = G__27873;
i__27865_27869 = G__27874;
continue;
} else {
var temp__4657__auto___27875 = cljs.core.seq.call(null,seq__27862_27866);
if(temp__4657__auto___27875){
var seq__27862_27876__$1 = temp__4657__auto___27875;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27862_27876__$1)){
var c__19279__auto___27877 = cljs.core.chunk_first.call(null,seq__27862_27876__$1);
var G__27878 = cljs.core.chunk_rest.call(null,seq__27862_27876__$1);
var G__27879 = c__19279__auto___27877;
var G__27880 = cljs.core.count.call(null,c__19279__auto___27877);
var G__27881 = (0);
seq__27862_27866 = G__27878;
chunk__27863_27867 = G__27879;
count__27864_27868 = G__27880;
i__27865_27869 = G__27881;
continue;
} else {
var f_27882 = cljs.core.first.call(null,seq__27862_27876__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27882);

var G__27883 = cljs.core.next.call(null,seq__27862_27876__$1);
var G__27884 = null;
var G__27885 = (0);
var G__27886 = (0);
seq__27862_27866 = G__27883;
chunk__27863_27867 = G__27884;
count__27864_27868 = G__27885;
i__27865_27869 = G__27886;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27860,map__27860__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27860,map__27860__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map