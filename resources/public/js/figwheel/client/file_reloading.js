// Compiled by ClojureScript 1.9.198 {}
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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37924_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37924_SHARP_));
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
var seq__37929 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37930 = null;
var count__37931 = (0);
var i__37932 = (0);
while(true){
if((i__37932 < count__37931)){
var n = cljs.core._nth.call(null,chunk__37930,i__37932);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37933 = seq__37929;
var G__37934 = chunk__37930;
var G__37935 = count__37931;
var G__37936 = (i__37932 + (1));
seq__37929 = G__37933;
chunk__37930 = G__37934;
count__37931 = G__37935;
i__37932 = G__37936;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__37929);
if(temp__6503__auto__){
var seq__37929__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37929__$1)){
var c__22493__auto__ = cljs.core.chunk_first.call(null,seq__37929__$1);
var G__37937 = cljs.core.chunk_rest.call(null,seq__37929__$1);
var G__37938 = c__22493__auto__;
var G__37939 = cljs.core.count.call(null,c__22493__auto__);
var G__37940 = (0);
seq__37929 = G__37937;
chunk__37930 = G__37938;
count__37931 = G__37939;
i__37932 = G__37940;
continue;
} else {
var n = cljs.core.first.call(null,seq__37929__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37941 = cljs.core.next.call(null,seq__37929__$1);
var G__37942 = null;
var G__37943 = (0);
var G__37944 = (0);
seq__37929 = G__37941;
chunk__37930 = G__37942;
count__37931 = G__37943;
i__37932 = G__37944;
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

var seq__37995_38006 = cljs.core.seq.call(null,deps);
var chunk__37996_38007 = null;
var count__37997_38008 = (0);
var i__37998_38009 = (0);
while(true){
if((i__37998_38009 < count__37997_38008)){
var dep_38010 = cljs.core._nth.call(null,chunk__37996_38007,i__37998_38009);
topo_sort_helper_STAR_.call(null,dep_38010,(depth + (1)),state);

var G__38011 = seq__37995_38006;
var G__38012 = chunk__37996_38007;
var G__38013 = count__37997_38008;
var G__38014 = (i__37998_38009 + (1));
seq__37995_38006 = G__38011;
chunk__37996_38007 = G__38012;
count__37997_38008 = G__38013;
i__37998_38009 = G__38014;
continue;
} else {
var temp__6503__auto___38015 = cljs.core.seq.call(null,seq__37995_38006);
if(temp__6503__auto___38015){
var seq__37995_38016__$1 = temp__6503__auto___38015;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37995_38016__$1)){
var c__22493__auto___38017 = cljs.core.chunk_first.call(null,seq__37995_38016__$1);
var G__38018 = cljs.core.chunk_rest.call(null,seq__37995_38016__$1);
var G__38019 = c__22493__auto___38017;
var G__38020 = cljs.core.count.call(null,c__22493__auto___38017);
var G__38021 = (0);
seq__37995_38006 = G__38018;
chunk__37996_38007 = G__38019;
count__37997_38008 = G__38020;
i__37998_38009 = G__38021;
continue;
} else {
var dep_38022 = cljs.core.first.call(null,seq__37995_38016__$1);
topo_sort_helper_STAR_.call(null,dep_38022,(depth + (1)),state);

var G__38023 = cljs.core.next.call(null,seq__37995_38016__$1);
var G__38024 = null;
var G__38025 = (0);
var G__38026 = (0);
seq__37995_38006 = G__38023;
chunk__37996_38007 = G__38024;
count__37997_38008 = G__38025;
i__37998_38009 = G__38026;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37999){
var vec__38003 = p__37999;
var seq__38004 = cljs.core.seq.call(null,vec__38003);
var first__38005 = cljs.core.first.call(null,seq__38004);
var seq__38004__$1 = cljs.core.next.call(null,seq__38004);
var x = first__38005;
var xs = seq__38004__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__38003,seq__38004,first__38005,seq__38004__$1,x,xs,get_deps__$1){
return (function (p1__37945_SHARP_){
return clojure.set.difference.call(null,p1__37945_SHARP_,x);
});})(vec__38003,seq__38004,first__38005,seq__38004__$1,x,xs,get_deps__$1))
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
var seq__38039 = cljs.core.seq.call(null,provides);
var chunk__38040 = null;
var count__38041 = (0);
var i__38042 = (0);
while(true){
if((i__38042 < count__38041)){
var prov = cljs.core._nth.call(null,chunk__38040,i__38042);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38043_38051 = cljs.core.seq.call(null,requires);
var chunk__38044_38052 = null;
var count__38045_38053 = (0);
var i__38046_38054 = (0);
while(true){
if((i__38046_38054 < count__38045_38053)){
var req_38055 = cljs.core._nth.call(null,chunk__38044_38052,i__38046_38054);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38055,prov);

var G__38056 = seq__38043_38051;
var G__38057 = chunk__38044_38052;
var G__38058 = count__38045_38053;
var G__38059 = (i__38046_38054 + (1));
seq__38043_38051 = G__38056;
chunk__38044_38052 = G__38057;
count__38045_38053 = G__38058;
i__38046_38054 = G__38059;
continue;
} else {
var temp__6503__auto___38060 = cljs.core.seq.call(null,seq__38043_38051);
if(temp__6503__auto___38060){
var seq__38043_38061__$1 = temp__6503__auto___38060;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38043_38061__$1)){
var c__22493__auto___38062 = cljs.core.chunk_first.call(null,seq__38043_38061__$1);
var G__38063 = cljs.core.chunk_rest.call(null,seq__38043_38061__$1);
var G__38064 = c__22493__auto___38062;
var G__38065 = cljs.core.count.call(null,c__22493__auto___38062);
var G__38066 = (0);
seq__38043_38051 = G__38063;
chunk__38044_38052 = G__38064;
count__38045_38053 = G__38065;
i__38046_38054 = G__38066;
continue;
} else {
var req_38067 = cljs.core.first.call(null,seq__38043_38061__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38067,prov);

var G__38068 = cljs.core.next.call(null,seq__38043_38061__$1);
var G__38069 = null;
var G__38070 = (0);
var G__38071 = (0);
seq__38043_38051 = G__38068;
chunk__38044_38052 = G__38069;
count__38045_38053 = G__38070;
i__38046_38054 = G__38071;
continue;
}
} else {
}
}
break;
}

var G__38072 = seq__38039;
var G__38073 = chunk__38040;
var G__38074 = count__38041;
var G__38075 = (i__38042 + (1));
seq__38039 = G__38072;
chunk__38040 = G__38073;
count__38041 = G__38074;
i__38042 = G__38075;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__38039);
if(temp__6503__auto__){
var seq__38039__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38039__$1)){
var c__22493__auto__ = cljs.core.chunk_first.call(null,seq__38039__$1);
var G__38076 = cljs.core.chunk_rest.call(null,seq__38039__$1);
var G__38077 = c__22493__auto__;
var G__38078 = cljs.core.count.call(null,c__22493__auto__);
var G__38079 = (0);
seq__38039 = G__38076;
chunk__38040 = G__38077;
count__38041 = G__38078;
i__38042 = G__38079;
continue;
} else {
var prov = cljs.core.first.call(null,seq__38039__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38047_38080 = cljs.core.seq.call(null,requires);
var chunk__38048_38081 = null;
var count__38049_38082 = (0);
var i__38050_38083 = (0);
while(true){
if((i__38050_38083 < count__38049_38082)){
var req_38084 = cljs.core._nth.call(null,chunk__38048_38081,i__38050_38083);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38084,prov);

var G__38085 = seq__38047_38080;
var G__38086 = chunk__38048_38081;
var G__38087 = count__38049_38082;
var G__38088 = (i__38050_38083 + (1));
seq__38047_38080 = G__38085;
chunk__38048_38081 = G__38086;
count__38049_38082 = G__38087;
i__38050_38083 = G__38088;
continue;
} else {
var temp__6503__auto___38089__$1 = cljs.core.seq.call(null,seq__38047_38080);
if(temp__6503__auto___38089__$1){
var seq__38047_38090__$1 = temp__6503__auto___38089__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38047_38090__$1)){
var c__22493__auto___38091 = cljs.core.chunk_first.call(null,seq__38047_38090__$1);
var G__38092 = cljs.core.chunk_rest.call(null,seq__38047_38090__$1);
var G__38093 = c__22493__auto___38091;
var G__38094 = cljs.core.count.call(null,c__22493__auto___38091);
var G__38095 = (0);
seq__38047_38080 = G__38092;
chunk__38048_38081 = G__38093;
count__38049_38082 = G__38094;
i__38050_38083 = G__38095;
continue;
} else {
var req_38096 = cljs.core.first.call(null,seq__38047_38090__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38096,prov);

var G__38097 = cljs.core.next.call(null,seq__38047_38090__$1);
var G__38098 = null;
var G__38099 = (0);
var G__38100 = (0);
seq__38047_38080 = G__38097;
chunk__38048_38081 = G__38098;
count__38049_38082 = G__38099;
i__38050_38083 = G__38100;
continue;
}
} else {
}
}
break;
}

var G__38101 = cljs.core.next.call(null,seq__38039__$1);
var G__38102 = null;
var G__38103 = (0);
var G__38104 = (0);
seq__38039 = G__38101;
chunk__38040 = G__38102;
count__38041 = G__38103;
i__38042 = G__38104;
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
var seq__38109_38113 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__38110_38114 = null;
var count__38111_38115 = (0);
var i__38112_38116 = (0);
while(true){
if((i__38112_38116 < count__38111_38115)){
var ns_38117 = cljs.core._nth.call(null,chunk__38110_38114,i__38112_38116);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38117);

var G__38118 = seq__38109_38113;
var G__38119 = chunk__38110_38114;
var G__38120 = count__38111_38115;
var G__38121 = (i__38112_38116 + (1));
seq__38109_38113 = G__38118;
chunk__38110_38114 = G__38119;
count__38111_38115 = G__38120;
i__38112_38116 = G__38121;
continue;
} else {
var temp__6503__auto___38122 = cljs.core.seq.call(null,seq__38109_38113);
if(temp__6503__auto___38122){
var seq__38109_38123__$1 = temp__6503__auto___38122;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38109_38123__$1)){
var c__22493__auto___38124 = cljs.core.chunk_first.call(null,seq__38109_38123__$1);
var G__38125 = cljs.core.chunk_rest.call(null,seq__38109_38123__$1);
var G__38126 = c__22493__auto___38124;
var G__38127 = cljs.core.count.call(null,c__22493__auto___38124);
var G__38128 = (0);
seq__38109_38113 = G__38125;
chunk__38110_38114 = G__38126;
count__38111_38115 = G__38127;
i__38112_38116 = G__38128;
continue;
} else {
var ns_38129 = cljs.core.first.call(null,seq__38109_38123__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38129);

var G__38130 = cljs.core.next.call(null,seq__38109_38123__$1);
var G__38131 = null;
var G__38132 = (0);
var G__38133 = (0);
seq__38109_38113 = G__38130;
chunk__38110_38114 = G__38131;
count__38111_38115 = G__38132;
i__38112_38116 = G__38133;
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
var G__38134__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__38134 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38135__i = 0, G__38135__a = new Array(arguments.length -  0);
while (G__38135__i < G__38135__a.length) {G__38135__a[G__38135__i] = arguments[G__38135__i + 0]; ++G__38135__i;}
  args = new cljs.core.IndexedSeq(G__38135__a,0);
} 
return G__38134__delegate.call(this,args);};
G__38134.cljs$lang$maxFixedArity = 0;
G__38134.cljs$lang$applyTo = (function (arglist__38136){
var args = cljs.core.seq(arglist__38136);
return G__38134__delegate(args);
});
G__38134.cljs$core$IFn$_invoke$arity$variadic = G__38134__delegate;
return G__38134;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__38138 = cljs.core._EQ_;
var expr__38139 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__38138.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__38139))){
var path_parts = ((function (pred__38138,expr__38139){
return (function (p1__38137_SHARP_){
return clojure.string.split.call(null,p1__38137_SHARP_,/[\/\\]/);
});})(pred__38138,expr__38139))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__38138,expr__38139){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e38141){if((e38141 instanceof Error)){
var e = e38141;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e38141;

}
}})());
});
;})(path_parts,sep,root,pred__38138,expr__38139))
} else {
if(cljs.core.truth_(pred__38138.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__38139))){
return ((function (pred__38138,expr__38139){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__38138,expr__38139){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__38138,expr__38139))
);

return deferred.addErrback(((function (deferred,pred__38138,expr__38139){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__38138,expr__38139))
);
});
;})(pred__38138,expr__38139))
} else {
return ((function (pred__38138,expr__38139){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__38138,expr__38139))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__38142,callback){
var map__38145 = p__38142;
var map__38145__$1 = ((((!((map__38145 == null)))?((((map__38145.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38145.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38145):map__38145);
var file_msg = map__38145__$1;
var request_url = cljs.core.get.call(null,map__38145__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__38145,map__38145__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__38145,map__38145__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__29748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29748__auto__){
return (function (){
var f__29749__auto__ = (function (){var switch__29634__auto__ = ((function (c__29748__auto__){
return (function (state_38169){
var state_val_38170 = (state_38169[(1)]);
if((state_val_38170 === (7))){
var inst_38165 = (state_38169[(2)]);
var state_38169__$1 = state_38169;
var statearr_38171_38191 = state_38169__$1;
(statearr_38171_38191[(2)] = inst_38165);

(statearr_38171_38191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38170 === (1))){
var state_38169__$1 = state_38169;
var statearr_38172_38192 = state_38169__$1;
(statearr_38172_38192[(2)] = null);

(statearr_38172_38192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38170 === (4))){
var inst_38149 = (state_38169[(7)]);
var inst_38149__$1 = (state_38169[(2)]);
var state_38169__$1 = (function (){var statearr_38173 = state_38169;
(statearr_38173[(7)] = inst_38149__$1);

return statearr_38173;
})();
if(cljs.core.truth_(inst_38149__$1)){
var statearr_38174_38193 = state_38169__$1;
(statearr_38174_38193[(1)] = (5));

} else {
var statearr_38175_38194 = state_38169__$1;
(statearr_38175_38194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38170 === (6))){
var state_38169__$1 = state_38169;
var statearr_38176_38195 = state_38169__$1;
(statearr_38176_38195[(2)] = null);

(statearr_38176_38195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38170 === (3))){
var inst_38167 = (state_38169[(2)]);
var state_38169__$1 = state_38169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38169__$1,inst_38167);
} else {
if((state_val_38170 === (2))){
var state_38169__$1 = state_38169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38169__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_38170 === (11))){
var inst_38161 = (state_38169[(2)]);
var state_38169__$1 = (function (){var statearr_38177 = state_38169;
(statearr_38177[(8)] = inst_38161);

return statearr_38177;
})();
var statearr_38178_38196 = state_38169__$1;
(statearr_38178_38196[(2)] = null);

(statearr_38178_38196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38170 === (9))){
var inst_38153 = (state_38169[(9)]);
var inst_38155 = (state_38169[(10)]);
var inst_38157 = inst_38155.call(null,inst_38153);
var state_38169__$1 = state_38169;
var statearr_38179_38197 = state_38169__$1;
(statearr_38179_38197[(2)] = inst_38157);

(statearr_38179_38197[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38170 === (5))){
var inst_38149 = (state_38169[(7)]);
var inst_38151 = figwheel.client.file_reloading.blocking_load.call(null,inst_38149);
var state_38169__$1 = state_38169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38169__$1,(8),inst_38151);
} else {
if((state_val_38170 === (10))){
var inst_38153 = (state_38169[(9)]);
var inst_38159 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_38153);
var state_38169__$1 = state_38169;
var statearr_38180_38198 = state_38169__$1;
(statearr_38180_38198[(2)] = inst_38159);

(statearr_38180_38198[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38170 === (8))){
var inst_38149 = (state_38169[(7)]);
var inst_38155 = (state_38169[(10)]);
var inst_38153 = (state_38169[(2)]);
var inst_38154 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_38155__$1 = cljs.core.get.call(null,inst_38154,inst_38149);
var state_38169__$1 = (function (){var statearr_38181 = state_38169;
(statearr_38181[(9)] = inst_38153);

(statearr_38181[(10)] = inst_38155__$1);

return statearr_38181;
})();
if(cljs.core.truth_(inst_38155__$1)){
var statearr_38182_38199 = state_38169__$1;
(statearr_38182_38199[(1)] = (9));

} else {
var statearr_38183_38200 = state_38169__$1;
(statearr_38183_38200[(1)] = (10));

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
});})(c__29748__auto__))
;
return ((function (switch__29634__auto__,c__29748__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29635__auto__ = null;
var figwheel$client$file_reloading$state_machine__29635__auto____0 = (function (){
var statearr_38187 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38187[(0)] = figwheel$client$file_reloading$state_machine__29635__auto__);

(statearr_38187[(1)] = (1));

return statearr_38187;
});
var figwheel$client$file_reloading$state_machine__29635__auto____1 = (function (state_38169){
while(true){
var ret_value__29636__auto__ = (function (){try{while(true){
var result__29637__auto__ = switch__29634__auto__.call(null,state_38169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29637__auto__;
}
break;
}
}catch (e38188){if((e38188 instanceof Object)){
var ex__29638__auto__ = e38188;
var statearr_38189_38201 = state_38169;
(statearr_38189_38201[(5)] = ex__29638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38202 = state_38169;
state_38169 = G__38202;
continue;
} else {
return ret_value__29636__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29635__auto__ = function(state_38169){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29635__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29635__auto____1.call(this,state_38169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29635__auto____0;
figwheel$client$file_reloading$state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29635__auto____1;
return figwheel$client$file_reloading$state_machine__29635__auto__;
})()
;})(switch__29634__auto__,c__29748__auto__))
})();
var state__29750__auto__ = (function (){var statearr_38190 = f__29749__auto__.call(null);
(statearr_38190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29748__auto__);

return statearr_38190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29750__auto__);
});})(c__29748__auto__))
);

return c__29748__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__38203,callback){
var map__38206 = p__38203;
var map__38206__$1 = ((((!((map__38206 == null)))?((((map__38206.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38206.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38206):map__38206);
var file_msg = map__38206__$1;
var namespace = cljs.core.get.call(null,map__38206__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__38206,map__38206__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__38206,map__38206__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__38208){
var map__38211 = p__38208;
var map__38211__$1 = ((((!((map__38211 == null)))?((((map__38211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38211):map__38211);
var file_msg = map__38211__$1;
var namespace = cljs.core.get.call(null,map__38211__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__38213,callback){
var map__38216 = p__38213;
var map__38216__$1 = ((((!((map__38216 == null)))?((((map__38216.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38216.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38216):map__38216);
var file_msg = map__38216__$1;
var request_url = cljs.core.get.call(null,map__38216__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__38216__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__29748__auto___38320 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29748__auto___38320,out){
return (function (){
var f__29749__auto__ = (function (){var switch__29634__auto__ = ((function (c__29748__auto___38320,out){
return (function (state_38302){
var state_val_38303 = (state_38302[(1)]);
if((state_val_38303 === (1))){
var inst_38276 = cljs.core.seq.call(null,files);
var inst_38277 = cljs.core.first.call(null,inst_38276);
var inst_38278 = cljs.core.next.call(null,inst_38276);
var inst_38279 = files;
var state_38302__$1 = (function (){var statearr_38304 = state_38302;
(statearr_38304[(7)] = inst_38277);

(statearr_38304[(8)] = inst_38279);

(statearr_38304[(9)] = inst_38278);

return statearr_38304;
})();
var statearr_38305_38321 = state_38302__$1;
(statearr_38305_38321[(2)] = null);

(statearr_38305_38321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38303 === (2))){
var inst_38279 = (state_38302[(8)]);
var inst_38285 = (state_38302[(10)]);
var inst_38284 = cljs.core.seq.call(null,inst_38279);
var inst_38285__$1 = cljs.core.first.call(null,inst_38284);
var inst_38286 = cljs.core.next.call(null,inst_38284);
var inst_38287 = (inst_38285__$1 == null);
var inst_38288 = cljs.core.not.call(null,inst_38287);
var state_38302__$1 = (function (){var statearr_38306 = state_38302;
(statearr_38306[(11)] = inst_38286);

(statearr_38306[(10)] = inst_38285__$1);

return statearr_38306;
})();
if(inst_38288){
var statearr_38307_38322 = state_38302__$1;
(statearr_38307_38322[(1)] = (4));

} else {
var statearr_38308_38323 = state_38302__$1;
(statearr_38308_38323[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38303 === (3))){
var inst_38300 = (state_38302[(2)]);
var state_38302__$1 = state_38302;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38302__$1,inst_38300);
} else {
if((state_val_38303 === (4))){
var inst_38285 = (state_38302[(10)]);
var inst_38290 = figwheel.client.file_reloading.reload_js_file.call(null,inst_38285);
var state_38302__$1 = state_38302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38302__$1,(7),inst_38290);
} else {
if((state_val_38303 === (5))){
var inst_38296 = cljs.core.async.close_BANG_.call(null,out);
var state_38302__$1 = state_38302;
var statearr_38309_38324 = state_38302__$1;
(statearr_38309_38324[(2)] = inst_38296);

(statearr_38309_38324[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38303 === (6))){
var inst_38298 = (state_38302[(2)]);
var state_38302__$1 = state_38302;
var statearr_38310_38325 = state_38302__$1;
(statearr_38310_38325[(2)] = inst_38298);

(statearr_38310_38325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38303 === (7))){
var inst_38286 = (state_38302[(11)]);
var inst_38292 = (state_38302[(2)]);
var inst_38293 = cljs.core.async.put_BANG_.call(null,out,inst_38292);
var inst_38279 = inst_38286;
var state_38302__$1 = (function (){var statearr_38311 = state_38302;
(statearr_38311[(12)] = inst_38293);

(statearr_38311[(8)] = inst_38279);

return statearr_38311;
})();
var statearr_38312_38326 = state_38302__$1;
(statearr_38312_38326[(2)] = null);

(statearr_38312_38326[(1)] = (2));


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
});})(c__29748__auto___38320,out))
;
return ((function (switch__29634__auto__,c__29748__auto___38320,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29635__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29635__auto____0 = (function (){
var statearr_38316 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38316[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29635__auto__);

(statearr_38316[(1)] = (1));

return statearr_38316;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29635__auto____1 = (function (state_38302){
while(true){
var ret_value__29636__auto__ = (function (){try{while(true){
var result__29637__auto__ = switch__29634__auto__.call(null,state_38302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29637__auto__;
}
break;
}
}catch (e38317){if((e38317 instanceof Object)){
var ex__29638__auto__ = e38317;
var statearr_38318_38327 = state_38302;
(statearr_38318_38327[(5)] = ex__29638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38328 = state_38302;
state_38302 = G__38328;
continue;
} else {
return ret_value__29636__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29635__auto__ = function(state_38302){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29635__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29635__auto____1.call(this,state_38302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29635__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29635__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29635__auto__;
})()
;})(switch__29634__auto__,c__29748__auto___38320,out))
})();
var state__29750__auto__ = (function (){var statearr_38319 = f__29749__auto__.call(null);
(statearr_38319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29748__auto___38320);

return statearr_38319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29750__auto__);
});})(c__29748__auto___38320,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__38329,opts){
var map__38333 = p__38329;
var map__38333__$1 = ((((!((map__38333 == null)))?((((map__38333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38333):map__38333);
var eval_body__$1 = cljs.core.get.call(null,map__38333__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__38333__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e38335){var e = e38335;
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
return (function (p1__38336_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38336_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__38345){
var vec__38346 = p__38345;
var k = cljs.core.nth.call(null,vec__38346,(0),null);
var v = cljs.core.nth.call(null,vec__38346,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__38349){
var vec__38350 = p__38349;
var k = cljs.core.nth.call(null,vec__38350,(0),null);
var v = cljs.core.nth.call(null,vec__38350,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__38356,p__38357){
var map__38604 = p__38356;
var map__38604__$1 = ((((!((map__38604 == null)))?((((map__38604.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38604.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38604):map__38604);
var opts = map__38604__$1;
var before_jsload = cljs.core.get.call(null,map__38604__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__38604__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__38604__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__38605 = p__38357;
var map__38605__$1 = ((((!((map__38605 == null)))?((((map__38605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38605):map__38605);
var msg = map__38605__$1;
var files = cljs.core.get.call(null,map__38605__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__38605__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__38605__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29748__auto__,map__38604,map__38604__$1,opts,before_jsload,on_jsload,reload_dependents,map__38605,map__38605__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29749__auto__ = (function (){var switch__29634__auto__ = ((function (c__29748__auto__,map__38604,map__38604__$1,opts,before_jsload,on_jsload,reload_dependents,map__38605,map__38605__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_38758){
var state_val_38759 = (state_38758[(1)]);
if((state_val_38759 === (7))){
var inst_38622 = (state_38758[(7)]);
var inst_38619 = (state_38758[(8)]);
var inst_38621 = (state_38758[(9)]);
var inst_38620 = (state_38758[(10)]);
var inst_38627 = cljs.core._nth.call(null,inst_38620,inst_38622);
var inst_38628 = figwheel.client.file_reloading.eval_body.call(null,inst_38627,opts);
var inst_38629 = (inst_38622 + (1));
var tmp38760 = inst_38619;
var tmp38761 = inst_38621;
var tmp38762 = inst_38620;
var inst_38619__$1 = tmp38760;
var inst_38620__$1 = tmp38762;
var inst_38621__$1 = tmp38761;
var inst_38622__$1 = inst_38629;
var state_38758__$1 = (function (){var statearr_38763 = state_38758;
(statearr_38763[(11)] = inst_38628);

(statearr_38763[(7)] = inst_38622__$1);

(statearr_38763[(8)] = inst_38619__$1);

(statearr_38763[(9)] = inst_38621__$1);

(statearr_38763[(10)] = inst_38620__$1);

return statearr_38763;
})();
var statearr_38764_38850 = state_38758__$1;
(statearr_38764_38850[(2)] = null);

(statearr_38764_38850[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (20))){
var inst_38662 = (state_38758[(12)]);
var inst_38670 = figwheel.client.file_reloading.sort_files.call(null,inst_38662);
var state_38758__$1 = state_38758;
var statearr_38765_38851 = state_38758__$1;
(statearr_38765_38851[(2)] = inst_38670);

(statearr_38765_38851[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (27))){
var state_38758__$1 = state_38758;
var statearr_38766_38852 = state_38758__$1;
(statearr_38766_38852[(2)] = null);

(statearr_38766_38852[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (1))){
var inst_38611 = (state_38758[(13)]);
var inst_38608 = before_jsload.call(null,files);
var inst_38609 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_38610 = (function (){return ((function (inst_38611,inst_38608,inst_38609,state_val_38759,c__29748__auto__,map__38604,map__38604__$1,opts,before_jsload,on_jsload,reload_dependents,map__38605,map__38605__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38353_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38353_SHARP_);
});
;})(inst_38611,inst_38608,inst_38609,state_val_38759,c__29748__auto__,map__38604,map__38604__$1,opts,before_jsload,on_jsload,reload_dependents,map__38605,map__38605__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38611__$1 = cljs.core.filter.call(null,inst_38610,files);
var inst_38612 = cljs.core.not_empty.call(null,inst_38611__$1);
var state_38758__$1 = (function (){var statearr_38767 = state_38758;
(statearr_38767[(14)] = inst_38609);

(statearr_38767[(15)] = inst_38608);

(statearr_38767[(13)] = inst_38611__$1);

return statearr_38767;
})();
if(cljs.core.truth_(inst_38612)){
var statearr_38768_38853 = state_38758__$1;
(statearr_38768_38853[(1)] = (2));

} else {
var statearr_38769_38854 = state_38758__$1;
(statearr_38769_38854[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (24))){
var state_38758__$1 = state_38758;
var statearr_38770_38855 = state_38758__$1;
(statearr_38770_38855[(2)] = null);

(statearr_38770_38855[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (39))){
var inst_38712 = (state_38758[(16)]);
var state_38758__$1 = state_38758;
var statearr_38771_38856 = state_38758__$1;
(statearr_38771_38856[(2)] = inst_38712);

(statearr_38771_38856[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (46))){
var inst_38753 = (state_38758[(2)]);
var state_38758__$1 = state_38758;
var statearr_38772_38857 = state_38758__$1;
(statearr_38772_38857[(2)] = inst_38753);

(statearr_38772_38857[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (4))){
var inst_38656 = (state_38758[(2)]);
var inst_38657 = cljs.core.List.EMPTY;
var inst_38658 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_38657);
var inst_38659 = (function (){return ((function (inst_38656,inst_38657,inst_38658,state_val_38759,c__29748__auto__,map__38604,map__38604__$1,opts,before_jsload,on_jsload,reload_dependents,map__38605,map__38605__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38354_SHARP_){
var and__21578__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38354_SHARP_);
if(cljs.core.truth_(and__21578__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38354_SHARP_));
} else {
return and__21578__auto__;
}
});
;})(inst_38656,inst_38657,inst_38658,state_val_38759,c__29748__auto__,map__38604,map__38604__$1,opts,before_jsload,on_jsload,reload_dependents,map__38605,map__38605__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38660 = cljs.core.filter.call(null,inst_38659,files);
var inst_38661 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_38662 = cljs.core.concat.call(null,inst_38660,inst_38661);
var state_38758__$1 = (function (){var statearr_38773 = state_38758;
(statearr_38773[(12)] = inst_38662);

(statearr_38773[(17)] = inst_38656);

(statearr_38773[(18)] = inst_38658);

return statearr_38773;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_38774_38858 = state_38758__$1;
(statearr_38774_38858[(1)] = (16));

} else {
var statearr_38775_38859 = state_38758__$1;
(statearr_38775_38859[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (15))){
var inst_38646 = (state_38758[(2)]);
var state_38758__$1 = state_38758;
var statearr_38776_38860 = state_38758__$1;
(statearr_38776_38860[(2)] = inst_38646);

(statearr_38776_38860[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (21))){
var inst_38672 = (state_38758[(19)]);
var inst_38672__$1 = (state_38758[(2)]);
var inst_38673 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_38672__$1);
var state_38758__$1 = (function (){var statearr_38777 = state_38758;
(statearr_38777[(19)] = inst_38672__$1);

return statearr_38777;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38758__$1,(22),inst_38673);
} else {
if((state_val_38759 === (31))){
var inst_38756 = (state_38758[(2)]);
var state_38758__$1 = state_38758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38758__$1,inst_38756);
} else {
if((state_val_38759 === (32))){
var inst_38712 = (state_38758[(16)]);
var inst_38717 = inst_38712.cljs$lang$protocol_mask$partition0$;
var inst_38718 = (inst_38717 & (64));
var inst_38719 = inst_38712.cljs$core$ISeq$;
var inst_38720 = (inst_38718) || (inst_38719);
var state_38758__$1 = state_38758;
if(cljs.core.truth_(inst_38720)){
var statearr_38778_38861 = state_38758__$1;
(statearr_38778_38861[(1)] = (35));

} else {
var statearr_38779_38862 = state_38758__$1;
(statearr_38779_38862[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (40))){
var inst_38733 = (state_38758[(20)]);
var inst_38732 = (state_38758[(2)]);
var inst_38733__$1 = cljs.core.get.call(null,inst_38732,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_38734 = cljs.core.get.call(null,inst_38732,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_38735 = cljs.core.not_empty.call(null,inst_38733__$1);
var state_38758__$1 = (function (){var statearr_38780 = state_38758;
(statearr_38780[(20)] = inst_38733__$1);

(statearr_38780[(21)] = inst_38734);

return statearr_38780;
})();
if(cljs.core.truth_(inst_38735)){
var statearr_38781_38863 = state_38758__$1;
(statearr_38781_38863[(1)] = (41));

} else {
var statearr_38782_38864 = state_38758__$1;
(statearr_38782_38864[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (33))){
var state_38758__$1 = state_38758;
var statearr_38783_38865 = state_38758__$1;
(statearr_38783_38865[(2)] = false);

(statearr_38783_38865[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (13))){
var inst_38632 = (state_38758[(22)]);
var inst_38636 = cljs.core.chunk_first.call(null,inst_38632);
var inst_38637 = cljs.core.chunk_rest.call(null,inst_38632);
var inst_38638 = cljs.core.count.call(null,inst_38636);
var inst_38619 = inst_38637;
var inst_38620 = inst_38636;
var inst_38621 = inst_38638;
var inst_38622 = (0);
var state_38758__$1 = (function (){var statearr_38784 = state_38758;
(statearr_38784[(7)] = inst_38622);

(statearr_38784[(8)] = inst_38619);

(statearr_38784[(9)] = inst_38621);

(statearr_38784[(10)] = inst_38620);

return statearr_38784;
})();
var statearr_38785_38866 = state_38758__$1;
(statearr_38785_38866[(2)] = null);

(statearr_38785_38866[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (22))){
var inst_38672 = (state_38758[(19)]);
var inst_38676 = (state_38758[(23)]);
var inst_38680 = (state_38758[(24)]);
var inst_38675 = (state_38758[(25)]);
var inst_38675__$1 = (state_38758[(2)]);
var inst_38676__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38675__$1);
var inst_38677 = (function (){var all_files = inst_38672;
var res_SINGLEQUOTE_ = inst_38675__$1;
var res = inst_38676__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_38672,inst_38676,inst_38680,inst_38675,inst_38675__$1,inst_38676__$1,state_val_38759,c__29748__auto__,map__38604,map__38604__$1,opts,before_jsload,on_jsload,reload_dependents,map__38605,map__38605__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38355_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__38355_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_38672,inst_38676,inst_38680,inst_38675,inst_38675__$1,inst_38676__$1,state_val_38759,c__29748__auto__,map__38604,map__38604__$1,opts,before_jsload,on_jsload,reload_dependents,map__38605,map__38605__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38678 = cljs.core.filter.call(null,inst_38677,inst_38675__$1);
var inst_38679 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_38680__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38679);
var inst_38681 = cljs.core.not_empty.call(null,inst_38680__$1);
var state_38758__$1 = (function (){var statearr_38786 = state_38758;
(statearr_38786[(23)] = inst_38676__$1);

(statearr_38786[(24)] = inst_38680__$1);

(statearr_38786[(26)] = inst_38678);

(statearr_38786[(25)] = inst_38675__$1);

return statearr_38786;
})();
if(cljs.core.truth_(inst_38681)){
var statearr_38787_38867 = state_38758__$1;
(statearr_38787_38867[(1)] = (23));

} else {
var statearr_38788_38868 = state_38758__$1;
(statearr_38788_38868[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (36))){
var state_38758__$1 = state_38758;
var statearr_38789_38869 = state_38758__$1;
(statearr_38789_38869[(2)] = false);

(statearr_38789_38869[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (41))){
var inst_38733 = (state_38758[(20)]);
var inst_38737 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_38738 = cljs.core.map.call(null,inst_38737,inst_38733);
var inst_38739 = cljs.core.pr_str.call(null,inst_38738);
var inst_38740 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_38739)].join('');
var inst_38741 = figwheel.client.utils.log.call(null,inst_38740);
var state_38758__$1 = state_38758;
var statearr_38790_38870 = state_38758__$1;
(statearr_38790_38870[(2)] = inst_38741);

(statearr_38790_38870[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (43))){
var inst_38734 = (state_38758[(21)]);
var inst_38744 = (state_38758[(2)]);
var inst_38745 = cljs.core.not_empty.call(null,inst_38734);
var state_38758__$1 = (function (){var statearr_38791 = state_38758;
(statearr_38791[(27)] = inst_38744);

return statearr_38791;
})();
if(cljs.core.truth_(inst_38745)){
var statearr_38792_38871 = state_38758__$1;
(statearr_38792_38871[(1)] = (44));

} else {
var statearr_38793_38872 = state_38758__$1;
(statearr_38793_38872[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (29))){
var inst_38672 = (state_38758[(19)]);
var inst_38676 = (state_38758[(23)]);
var inst_38712 = (state_38758[(16)]);
var inst_38680 = (state_38758[(24)]);
var inst_38678 = (state_38758[(26)]);
var inst_38675 = (state_38758[(25)]);
var inst_38708 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_38711 = (function (){var all_files = inst_38672;
var res_SINGLEQUOTE_ = inst_38675;
var res = inst_38676;
var files_not_loaded = inst_38678;
var dependencies_that_loaded = inst_38680;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38672,inst_38676,inst_38712,inst_38680,inst_38678,inst_38675,inst_38708,state_val_38759,c__29748__auto__,map__38604,map__38604__$1,opts,before_jsload,on_jsload,reload_dependents,map__38605,map__38605__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38710){
var map__38794 = p__38710;
var map__38794__$1 = ((((!((map__38794 == null)))?((((map__38794.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38794.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38794):map__38794);
var namespace = cljs.core.get.call(null,map__38794__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38672,inst_38676,inst_38712,inst_38680,inst_38678,inst_38675,inst_38708,state_val_38759,c__29748__auto__,map__38604,map__38604__$1,opts,before_jsload,on_jsload,reload_dependents,map__38605,map__38605__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38712__$1 = cljs.core.group_by.call(null,inst_38711,inst_38678);
var inst_38714 = (inst_38712__$1 == null);
var inst_38715 = cljs.core.not.call(null,inst_38714);
var state_38758__$1 = (function (){var statearr_38796 = state_38758;
(statearr_38796[(28)] = inst_38708);

(statearr_38796[(16)] = inst_38712__$1);

return statearr_38796;
})();
if(inst_38715){
var statearr_38797_38873 = state_38758__$1;
(statearr_38797_38873[(1)] = (32));

} else {
var statearr_38798_38874 = state_38758__$1;
(statearr_38798_38874[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (44))){
var inst_38734 = (state_38758[(21)]);
var inst_38747 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38734);
var inst_38748 = cljs.core.pr_str.call(null,inst_38747);
var inst_38749 = [cljs.core.str("not required: "),cljs.core.str(inst_38748)].join('');
var inst_38750 = figwheel.client.utils.log.call(null,inst_38749);
var state_38758__$1 = state_38758;
var statearr_38799_38875 = state_38758__$1;
(statearr_38799_38875[(2)] = inst_38750);

(statearr_38799_38875[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (6))){
var inst_38653 = (state_38758[(2)]);
var state_38758__$1 = state_38758;
var statearr_38800_38876 = state_38758__$1;
(statearr_38800_38876[(2)] = inst_38653);

(statearr_38800_38876[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (28))){
var inst_38678 = (state_38758[(26)]);
var inst_38705 = (state_38758[(2)]);
var inst_38706 = cljs.core.not_empty.call(null,inst_38678);
var state_38758__$1 = (function (){var statearr_38801 = state_38758;
(statearr_38801[(29)] = inst_38705);

return statearr_38801;
})();
if(cljs.core.truth_(inst_38706)){
var statearr_38802_38877 = state_38758__$1;
(statearr_38802_38877[(1)] = (29));

} else {
var statearr_38803_38878 = state_38758__$1;
(statearr_38803_38878[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (25))){
var inst_38676 = (state_38758[(23)]);
var inst_38692 = (state_38758[(2)]);
var inst_38693 = cljs.core.not_empty.call(null,inst_38676);
var state_38758__$1 = (function (){var statearr_38804 = state_38758;
(statearr_38804[(30)] = inst_38692);

return statearr_38804;
})();
if(cljs.core.truth_(inst_38693)){
var statearr_38805_38879 = state_38758__$1;
(statearr_38805_38879[(1)] = (26));

} else {
var statearr_38806_38880 = state_38758__$1;
(statearr_38806_38880[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (34))){
var inst_38727 = (state_38758[(2)]);
var state_38758__$1 = state_38758;
if(cljs.core.truth_(inst_38727)){
var statearr_38807_38881 = state_38758__$1;
(statearr_38807_38881[(1)] = (38));

} else {
var statearr_38808_38882 = state_38758__$1;
(statearr_38808_38882[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (17))){
var state_38758__$1 = state_38758;
var statearr_38809_38883 = state_38758__$1;
(statearr_38809_38883[(2)] = recompile_dependents);

(statearr_38809_38883[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (3))){
var state_38758__$1 = state_38758;
var statearr_38810_38884 = state_38758__$1;
(statearr_38810_38884[(2)] = null);

(statearr_38810_38884[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (12))){
var inst_38649 = (state_38758[(2)]);
var state_38758__$1 = state_38758;
var statearr_38811_38885 = state_38758__$1;
(statearr_38811_38885[(2)] = inst_38649);

(statearr_38811_38885[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (2))){
var inst_38611 = (state_38758[(13)]);
var inst_38618 = cljs.core.seq.call(null,inst_38611);
var inst_38619 = inst_38618;
var inst_38620 = null;
var inst_38621 = (0);
var inst_38622 = (0);
var state_38758__$1 = (function (){var statearr_38812 = state_38758;
(statearr_38812[(7)] = inst_38622);

(statearr_38812[(8)] = inst_38619);

(statearr_38812[(9)] = inst_38621);

(statearr_38812[(10)] = inst_38620);

return statearr_38812;
})();
var statearr_38813_38886 = state_38758__$1;
(statearr_38813_38886[(2)] = null);

(statearr_38813_38886[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (23))){
var inst_38672 = (state_38758[(19)]);
var inst_38676 = (state_38758[(23)]);
var inst_38680 = (state_38758[(24)]);
var inst_38678 = (state_38758[(26)]);
var inst_38675 = (state_38758[(25)]);
var inst_38683 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_38685 = (function (){var all_files = inst_38672;
var res_SINGLEQUOTE_ = inst_38675;
var res = inst_38676;
var files_not_loaded = inst_38678;
var dependencies_that_loaded = inst_38680;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38672,inst_38676,inst_38680,inst_38678,inst_38675,inst_38683,state_val_38759,c__29748__auto__,map__38604,map__38604__$1,opts,before_jsload,on_jsload,reload_dependents,map__38605,map__38605__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38684){
var map__38814 = p__38684;
var map__38814__$1 = ((((!((map__38814 == null)))?((((map__38814.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38814.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38814):map__38814);
var request_url = cljs.core.get.call(null,map__38814__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38672,inst_38676,inst_38680,inst_38678,inst_38675,inst_38683,state_val_38759,c__29748__auto__,map__38604,map__38604__$1,opts,before_jsload,on_jsload,reload_dependents,map__38605,map__38605__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38686 = cljs.core.reverse.call(null,inst_38680);
var inst_38687 = cljs.core.map.call(null,inst_38685,inst_38686);
var inst_38688 = cljs.core.pr_str.call(null,inst_38687);
var inst_38689 = figwheel.client.utils.log.call(null,inst_38688);
var state_38758__$1 = (function (){var statearr_38816 = state_38758;
(statearr_38816[(31)] = inst_38683);

return statearr_38816;
})();
var statearr_38817_38887 = state_38758__$1;
(statearr_38817_38887[(2)] = inst_38689);

(statearr_38817_38887[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (35))){
var state_38758__$1 = state_38758;
var statearr_38818_38888 = state_38758__$1;
(statearr_38818_38888[(2)] = true);

(statearr_38818_38888[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (19))){
var inst_38662 = (state_38758[(12)]);
var inst_38668 = figwheel.client.file_reloading.expand_files.call(null,inst_38662);
var state_38758__$1 = state_38758;
var statearr_38819_38889 = state_38758__$1;
(statearr_38819_38889[(2)] = inst_38668);

(statearr_38819_38889[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (11))){
var state_38758__$1 = state_38758;
var statearr_38820_38890 = state_38758__$1;
(statearr_38820_38890[(2)] = null);

(statearr_38820_38890[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (9))){
var inst_38651 = (state_38758[(2)]);
var state_38758__$1 = state_38758;
var statearr_38821_38891 = state_38758__$1;
(statearr_38821_38891[(2)] = inst_38651);

(statearr_38821_38891[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (5))){
var inst_38622 = (state_38758[(7)]);
var inst_38621 = (state_38758[(9)]);
var inst_38624 = (inst_38622 < inst_38621);
var inst_38625 = inst_38624;
var state_38758__$1 = state_38758;
if(cljs.core.truth_(inst_38625)){
var statearr_38822_38892 = state_38758__$1;
(statearr_38822_38892[(1)] = (7));

} else {
var statearr_38823_38893 = state_38758__$1;
(statearr_38823_38893[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (14))){
var inst_38632 = (state_38758[(22)]);
var inst_38641 = cljs.core.first.call(null,inst_38632);
var inst_38642 = figwheel.client.file_reloading.eval_body.call(null,inst_38641,opts);
var inst_38643 = cljs.core.next.call(null,inst_38632);
var inst_38619 = inst_38643;
var inst_38620 = null;
var inst_38621 = (0);
var inst_38622 = (0);
var state_38758__$1 = (function (){var statearr_38824 = state_38758;
(statearr_38824[(32)] = inst_38642);

(statearr_38824[(7)] = inst_38622);

(statearr_38824[(8)] = inst_38619);

(statearr_38824[(9)] = inst_38621);

(statearr_38824[(10)] = inst_38620);

return statearr_38824;
})();
var statearr_38825_38894 = state_38758__$1;
(statearr_38825_38894[(2)] = null);

(statearr_38825_38894[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (45))){
var state_38758__$1 = state_38758;
var statearr_38826_38895 = state_38758__$1;
(statearr_38826_38895[(2)] = null);

(statearr_38826_38895[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (26))){
var inst_38672 = (state_38758[(19)]);
var inst_38676 = (state_38758[(23)]);
var inst_38680 = (state_38758[(24)]);
var inst_38678 = (state_38758[(26)]);
var inst_38675 = (state_38758[(25)]);
var inst_38695 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_38697 = (function (){var all_files = inst_38672;
var res_SINGLEQUOTE_ = inst_38675;
var res = inst_38676;
var files_not_loaded = inst_38678;
var dependencies_that_loaded = inst_38680;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38672,inst_38676,inst_38680,inst_38678,inst_38675,inst_38695,state_val_38759,c__29748__auto__,map__38604,map__38604__$1,opts,before_jsload,on_jsload,reload_dependents,map__38605,map__38605__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38696){
var map__38827 = p__38696;
var map__38827__$1 = ((((!((map__38827 == null)))?((((map__38827.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38827.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38827):map__38827);
var namespace = cljs.core.get.call(null,map__38827__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__38827__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38672,inst_38676,inst_38680,inst_38678,inst_38675,inst_38695,state_val_38759,c__29748__auto__,map__38604,map__38604__$1,opts,before_jsload,on_jsload,reload_dependents,map__38605,map__38605__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38698 = cljs.core.map.call(null,inst_38697,inst_38676);
var inst_38699 = cljs.core.pr_str.call(null,inst_38698);
var inst_38700 = figwheel.client.utils.log.call(null,inst_38699);
var inst_38701 = (function (){var all_files = inst_38672;
var res_SINGLEQUOTE_ = inst_38675;
var res = inst_38676;
var files_not_loaded = inst_38678;
var dependencies_that_loaded = inst_38680;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38672,inst_38676,inst_38680,inst_38678,inst_38675,inst_38695,inst_38697,inst_38698,inst_38699,inst_38700,state_val_38759,c__29748__auto__,map__38604,map__38604__$1,opts,before_jsload,on_jsload,reload_dependents,map__38605,map__38605__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38672,inst_38676,inst_38680,inst_38678,inst_38675,inst_38695,inst_38697,inst_38698,inst_38699,inst_38700,state_val_38759,c__29748__auto__,map__38604,map__38604__$1,opts,before_jsload,on_jsload,reload_dependents,map__38605,map__38605__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38702 = setTimeout(inst_38701,(10));
var state_38758__$1 = (function (){var statearr_38829 = state_38758;
(statearr_38829[(33)] = inst_38700);

(statearr_38829[(34)] = inst_38695);

return statearr_38829;
})();
var statearr_38830_38896 = state_38758__$1;
(statearr_38830_38896[(2)] = inst_38702);

(statearr_38830_38896[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (16))){
var state_38758__$1 = state_38758;
var statearr_38831_38897 = state_38758__$1;
(statearr_38831_38897[(2)] = reload_dependents);

(statearr_38831_38897[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (38))){
var inst_38712 = (state_38758[(16)]);
var inst_38729 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38712);
var state_38758__$1 = state_38758;
var statearr_38832_38898 = state_38758__$1;
(statearr_38832_38898[(2)] = inst_38729);

(statearr_38832_38898[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (30))){
var state_38758__$1 = state_38758;
var statearr_38833_38899 = state_38758__$1;
(statearr_38833_38899[(2)] = null);

(statearr_38833_38899[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (10))){
var inst_38632 = (state_38758[(22)]);
var inst_38634 = cljs.core.chunked_seq_QMARK_.call(null,inst_38632);
var state_38758__$1 = state_38758;
if(inst_38634){
var statearr_38834_38900 = state_38758__$1;
(statearr_38834_38900[(1)] = (13));

} else {
var statearr_38835_38901 = state_38758__$1;
(statearr_38835_38901[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (18))){
var inst_38666 = (state_38758[(2)]);
var state_38758__$1 = state_38758;
if(cljs.core.truth_(inst_38666)){
var statearr_38836_38902 = state_38758__$1;
(statearr_38836_38902[(1)] = (19));

} else {
var statearr_38837_38903 = state_38758__$1;
(statearr_38837_38903[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (42))){
var state_38758__$1 = state_38758;
var statearr_38838_38904 = state_38758__$1;
(statearr_38838_38904[(2)] = null);

(statearr_38838_38904[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (37))){
var inst_38724 = (state_38758[(2)]);
var state_38758__$1 = state_38758;
var statearr_38839_38905 = state_38758__$1;
(statearr_38839_38905[(2)] = inst_38724);

(statearr_38839_38905[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (8))){
var inst_38632 = (state_38758[(22)]);
var inst_38619 = (state_38758[(8)]);
var inst_38632__$1 = cljs.core.seq.call(null,inst_38619);
var state_38758__$1 = (function (){var statearr_38840 = state_38758;
(statearr_38840[(22)] = inst_38632__$1);

return statearr_38840;
})();
if(inst_38632__$1){
var statearr_38841_38906 = state_38758__$1;
(statearr_38841_38906[(1)] = (10));

} else {
var statearr_38842_38907 = state_38758__$1;
(statearr_38842_38907[(1)] = (11));

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
});})(c__29748__auto__,map__38604,map__38604__$1,opts,before_jsload,on_jsload,reload_dependents,map__38605,map__38605__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29634__auto__,c__29748__auto__,map__38604,map__38604__$1,opts,before_jsload,on_jsload,reload_dependents,map__38605,map__38605__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29635__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29635__auto____0 = (function (){
var statearr_38846 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38846[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29635__auto__);

(statearr_38846[(1)] = (1));

return statearr_38846;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29635__auto____1 = (function (state_38758){
while(true){
var ret_value__29636__auto__ = (function (){try{while(true){
var result__29637__auto__ = switch__29634__auto__.call(null,state_38758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29637__auto__;
}
break;
}
}catch (e38847){if((e38847 instanceof Object)){
var ex__29638__auto__ = e38847;
var statearr_38848_38908 = state_38758;
(statearr_38848_38908[(5)] = ex__29638__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29636__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38909 = state_38758;
state_38758 = G__38909;
continue;
} else {
return ret_value__29636__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29635__auto__ = function(state_38758){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29635__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29635__auto____1.call(this,state_38758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29635__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29635__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29635__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29635__auto__;
})()
;})(switch__29634__auto__,c__29748__auto__,map__38604,map__38604__$1,opts,before_jsload,on_jsload,reload_dependents,map__38605,map__38605__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29750__auto__ = (function (){var statearr_38849 = f__29749__auto__.call(null);
(statearr_38849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29748__auto__);

return statearr_38849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29750__auto__);
});})(c__29748__auto__,map__38604,map__38604__$1,opts,before_jsload,on_jsload,reload_dependents,map__38605,map__38605__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29748__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__38912,link){
var map__38915 = p__38912;
var map__38915__$1 = ((((!((map__38915 == null)))?((((map__38915.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38915.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38915):map__38915);
var file = cljs.core.get.call(null,map__38915__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6503__auto__ = link.href;
if(cljs.core.truth_(temp__6503__auto__)){
var link_href = temp__6503__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6503__auto__,map__38915,map__38915__$1,file){
return (function (p1__38910_SHARP_,p2__38911_SHARP_){
if(cljs.core._EQ_.call(null,p1__38910_SHARP_,p2__38911_SHARP_)){
return p1__38910_SHARP_;
} else {
return false;
}
});})(link_href,temp__6503__auto__,map__38915,map__38915__$1,file))
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
var temp__6503__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__38921){
var map__38922 = p__38921;
var map__38922__$1 = ((((!((map__38922 == null)))?((((map__38922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38922):map__38922);
var match_length = cljs.core.get.call(null,map__38922__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__38922__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__38917_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__38917_SHARP_);
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
var args38924 = [];
var len__22773__auto___38927 = arguments.length;
var i__22774__auto___38928 = (0);
while(true){
if((i__22774__auto___38928 < len__22773__auto___38927)){
args38924.push((arguments[i__22774__auto___38928]));

var G__38929 = (i__22774__auto___38928 + (1));
i__22774__auto___38928 = G__38929;
continue;
} else {
}
break;
}

var G__38926 = args38924.length;
switch (G__38926) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38924.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__38931_SHARP_,p2__38932_SHARP_){
return cljs.core.assoc.call(null,p1__38931_SHARP_,cljs.core.get.call(null,p2__38932_SHARP_,key),p2__38932_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__38933){
var map__38936 = p__38933;
var map__38936__$1 = ((((!((map__38936 == null)))?((((map__38936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38936):map__38936);
var f_data = map__38936__$1;
var file = cljs.core.get.call(null,map__38936__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6503__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6503__auto__)){
var link = temp__6503__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__38938,files_msg){
var map__38945 = p__38938;
var map__38945__$1 = ((((!((map__38945 == null)))?((((map__38945.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38945.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38945):map__38945);
var opts = map__38945__$1;
var on_cssload = cljs.core.get.call(null,map__38945__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__38947_38951 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__38948_38952 = null;
var count__38949_38953 = (0);
var i__38950_38954 = (0);
while(true){
if((i__38950_38954 < count__38949_38953)){
var f_38955 = cljs.core._nth.call(null,chunk__38948_38952,i__38950_38954);
figwheel.client.file_reloading.reload_css_file.call(null,f_38955);

var G__38956 = seq__38947_38951;
var G__38957 = chunk__38948_38952;
var G__38958 = count__38949_38953;
var G__38959 = (i__38950_38954 + (1));
seq__38947_38951 = G__38956;
chunk__38948_38952 = G__38957;
count__38949_38953 = G__38958;
i__38950_38954 = G__38959;
continue;
} else {
var temp__6503__auto___38960 = cljs.core.seq.call(null,seq__38947_38951);
if(temp__6503__auto___38960){
var seq__38947_38961__$1 = temp__6503__auto___38960;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38947_38961__$1)){
var c__22493__auto___38962 = cljs.core.chunk_first.call(null,seq__38947_38961__$1);
var G__38963 = cljs.core.chunk_rest.call(null,seq__38947_38961__$1);
var G__38964 = c__22493__auto___38962;
var G__38965 = cljs.core.count.call(null,c__22493__auto___38962);
var G__38966 = (0);
seq__38947_38951 = G__38963;
chunk__38948_38952 = G__38964;
count__38949_38953 = G__38965;
i__38950_38954 = G__38966;
continue;
} else {
var f_38967 = cljs.core.first.call(null,seq__38947_38961__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_38967);

var G__38968 = cljs.core.next.call(null,seq__38947_38961__$1);
var G__38969 = null;
var G__38970 = (0);
var G__38971 = (0);
seq__38947_38951 = G__38968;
chunk__38948_38952 = G__38969;
count__38949_38953 = G__38970;
i__38950_38954 = G__38971;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__38945,map__38945__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__38945,map__38945__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1471181958956