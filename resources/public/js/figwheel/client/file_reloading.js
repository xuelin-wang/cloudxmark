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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__57537_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__57537_SHARP_));
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
var seq__57542 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__57543 = null;
var count__57544 = (0);
var i__57545 = (0);
while(true){
if((i__57545 < count__57544)){
var n = cljs.core._nth.call(null,chunk__57543,i__57545);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__57546 = seq__57542;
var G__57547 = chunk__57543;
var G__57548 = count__57544;
var G__57549 = (i__57545 + (1));
seq__57542 = G__57546;
chunk__57543 = G__57547;
count__57544 = G__57548;
i__57545 = G__57549;
continue;
} else {
var temp__6552__auto__ = cljs.core.seq.call(null,seq__57542);
if(temp__6552__auto__){
var seq__57542__$1 = temp__6552__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57542__$1)){
var c__22493__auto__ = cljs.core.chunk_first.call(null,seq__57542__$1);
var G__57550 = cljs.core.chunk_rest.call(null,seq__57542__$1);
var G__57551 = c__22493__auto__;
var G__57552 = cljs.core.count.call(null,c__22493__auto__);
var G__57553 = (0);
seq__57542 = G__57550;
chunk__57543 = G__57551;
count__57544 = G__57552;
i__57545 = G__57553;
continue;
} else {
var n = cljs.core.first.call(null,seq__57542__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__57554 = cljs.core.next.call(null,seq__57542__$1);
var G__57555 = null;
var G__57556 = (0);
var G__57557 = (0);
seq__57542 = G__57554;
chunk__57543 = G__57555;
count__57544 = G__57556;
i__57545 = G__57557;
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

var seq__57608_57619 = cljs.core.seq.call(null,deps);
var chunk__57609_57620 = null;
var count__57610_57621 = (0);
var i__57611_57622 = (0);
while(true){
if((i__57611_57622 < count__57610_57621)){
var dep_57623 = cljs.core._nth.call(null,chunk__57609_57620,i__57611_57622);
topo_sort_helper_STAR_.call(null,dep_57623,(depth + (1)),state);

var G__57624 = seq__57608_57619;
var G__57625 = chunk__57609_57620;
var G__57626 = count__57610_57621;
var G__57627 = (i__57611_57622 + (1));
seq__57608_57619 = G__57624;
chunk__57609_57620 = G__57625;
count__57610_57621 = G__57626;
i__57611_57622 = G__57627;
continue;
} else {
var temp__6552__auto___57628 = cljs.core.seq.call(null,seq__57608_57619);
if(temp__6552__auto___57628){
var seq__57608_57629__$1 = temp__6552__auto___57628;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57608_57629__$1)){
var c__22493__auto___57630 = cljs.core.chunk_first.call(null,seq__57608_57629__$1);
var G__57631 = cljs.core.chunk_rest.call(null,seq__57608_57629__$1);
var G__57632 = c__22493__auto___57630;
var G__57633 = cljs.core.count.call(null,c__22493__auto___57630);
var G__57634 = (0);
seq__57608_57619 = G__57631;
chunk__57609_57620 = G__57632;
count__57610_57621 = G__57633;
i__57611_57622 = G__57634;
continue;
} else {
var dep_57635 = cljs.core.first.call(null,seq__57608_57629__$1);
topo_sort_helper_STAR_.call(null,dep_57635,(depth + (1)),state);

var G__57636 = cljs.core.next.call(null,seq__57608_57629__$1);
var G__57637 = null;
var G__57638 = (0);
var G__57639 = (0);
seq__57608_57619 = G__57636;
chunk__57609_57620 = G__57637;
count__57610_57621 = G__57638;
i__57611_57622 = G__57639;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__57612){
var vec__57616 = p__57612;
var seq__57617 = cljs.core.seq.call(null,vec__57616);
var first__57618 = cljs.core.first.call(null,seq__57617);
var seq__57617__$1 = cljs.core.next.call(null,seq__57617);
var x = first__57618;
var xs = seq__57617__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__57616,seq__57617,first__57618,seq__57617__$1,x,xs,get_deps__$1){
return (function (p1__57558_SHARP_){
return clojure.set.difference.call(null,p1__57558_SHARP_,x);
});})(vec__57616,seq__57617,first__57618,seq__57617__$1,x,xs,get_deps__$1))
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
var seq__57652 = cljs.core.seq.call(null,provides);
var chunk__57653 = null;
var count__57654 = (0);
var i__57655 = (0);
while(true){
if((i__57655 < count__57654)){
var prov = cljs.core._nth.call(null,chunk__57653,i__57655);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__57656_57664 = cljs.core.seq.call(null,requires);
var chunk__57657_57665 = null;
var count__57658_57666 = (0);
var i__57659_57667 = (0);
while(true){
if((i__57659_57667 < count__57658_57666)){
var req_57668 = cljs.core._nth.call(null,chunk__57657_57665,i__57659_57667);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_57668,prov);

var G__57669 = seq__57656_57664;
var G__57670 = chunk__57657_57665;
var G__57671 = count__57658_57666;
var G__57672 = (i__57659_57667 + (1));
seq__57656_57664 = G__57669;
chunk__57657_57665 = G__57670;
count__57658_57666 = G__57671;
i__57659_57667 = G__57672;
continue;
} else {
var temp__6552__auto___57673 = cljs.core.seq.call(null,seq__57656_57664);
if(temp__6552__auto___57673){
var seq__57656_57674__$1 = temp__6552__auto___57673;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57656_57674__$1)){
var c__22493__auto___57675 = cljs.core.chunk_first.call(null,seq__57656_57674__$1);
var G__57676 = cljs.core.chunk_rest.call(null,seq__57656_57674__$1);
var G__57677 = c__22493__auto___57675;
var G__57678 = cljs.core.count.call(null,c__22493__auto___57675);
var G__57679 = (0);
seq__57656_57664 = G__57676;
chunk__57657_57665 = G__57677;
count__57658_57666 = G__57678;
i__57659_57667 = G__57679;
continue;
} else {
var req_57680 = cljs.core.first.call(null,seq__57656_57674__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_57680,prov);

var G__57681 = cljs.core.next.call(null,seq__57656_57674__$1);
var G__57682 = null;
var G__57683 = (0);
var G__57684 = (0);
seq__57656_57664 = G__57681;
chunk__57657_57665 = G__57682;
count__57658_57666 = G__57683;
i__57659_57667 = G__57684;
continue;
}
} else {
}
}
break;
}

var G__57685 = seq__57652;
var G__57686 = chunk__57653;
var G__57687 = count__57654;
var G__57688 = (i__57655 + (1));
seq__57652 = G__57685;
chunk__57653 = G__57686;
count__57654 = G__57687;
i__57655 = G__57688;
continue;
} else {
var temp__6552__auto__ = cljs.core.seq.call(null,seq__57652);
if(temp__6552__auto__){
var seq__57652__$1 = temp__6552__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57652__$1)){
var c__22493__auto__ = cljs.core.chunk_first.call(null,seq__57652__$1);
var G__57689 = cljs.core.chunk_rest.call(null,seq__57652__$1);
var G__57690 = c__22493__auto__;
var G__57691 = cljs.core.count.call(null,c__22493__auto__);
var G__57692 = (0);
seq__57652 = G__57689;
chunk__57653 = G__57690;
count__57654 = G__57691;
i__57655 = G__57692;
continue;
} else {
var prov = cljs.core.first.call(null,seq__57652__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__57660_57693 = cljs.core.seq.call(null,requires);
var chunk__57661_57694 = null;
var count__57662_57695 = (0);
var i__57663_57696 = (0);
while(true){
if((i__57663_57696 < count__57662_57695)){
var req_57697 = cljs.core._nth.call(null,chunk__57661_57694,i__57663_57696);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_57697,prov);

var G__57698 = seq__57660_57693;
var G__57699 = chunk__57661_57694;
var G__57700 = count__57662_57695;
var G__57701 = (i__57663_57696 + (1));
seq__57660_57693 = G__57698;
chunk__57661_57694 = G__57699;
count__57662_57695 = G__57700;
i__57663_57696 = G__57701;
continue;
} else {
var temp__6552__auto___57702__$1 = cljs.core.seq.call(null,seq__57660_57693);
if(temp__6552__auto___57702__$1){
var seq__57660_57703__$1 = temp__6552__auto___57702__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57660_57703__$1)){
var c__22493__auto___57704 = cljs.core.chunk_first.call(null,seq__57660_57703__$1);
var G__57705 = cljs.core.chunk_rest.call(null,seq__57660_57703__$1);
var G__57706 = c__22493__auto___57704;
var G__57707 = cljs.core.count.call(null,c__22493__auto___57704);
var G__57708 = (0);
seq__57660_57693 = G__57705;
chunk__57661_57694 = G__57706;
count__57662_57695 = G__57707;
i__57663_57696 = G__57708;
continue;
} else {
var req_57709 = cljs.core.first.call(null,seq__57660_57703__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_57709,prov);

var G__57710 = cljs.core.next.call(null,seq__57660_57703__$1);
var G__57711 = null;
var G__57712 = (0);
var G__57713 = (0);
seq__57660_57693 = G__57710;
chunk__57661_57694 = G__57711;
count__57662_57695 = G__57712;
i__57663_57696 = G__57713;
continue;
}
} else {
}
}
break;
}

var G__57714 = cljs.core.next.call(null,seq__57652__$1);
var G__57715 = null;
var G__57716 = (0);
var G__57717 = (0);
seq__57652 = G__57714;
chunk__57653 = G__57715;
count__57654 = G__57716;
i__57655 = G__57717;
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
var seq__57722_57726 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__57723_57727 = null;
var count__57724_57728 = (0);
var i__57725_57729 = (0);
while(true){
if((i__57725_57729 < count__57724_57728)){
var ns_57730 = cljs.core._nth.call(null,chunk__57723_57727,i__57725_57729);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_57730);

var G__57731 = seq__57722_57726;
var G__57732 = chunk__57723_57727;
var G__57733 = count__57724_57728;
var G__57734 = (i__57725_57729 + (1));
seq__57722_57726 = G__57731;
chunk__57723_57727 = G__57732;
count__57724_57728 = G__57733;
i__57725_57729 = G__57734;
continue;
} else {
var temp__6552__auto___57735 = cljs.core.seq.call(null,seq__57722_57726);
if(temp__6552__auto___57735){
var seq__57722_57736__$1 = temp__6552__auto___57735;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57722_57736__$1)){
var c__22493__auto___57737 = cljs.core.chunk_first.call(null,seq__57722_57736__$1);
var G__57738 = cljs.core.chunk_rest.call(null,seq__57722_57736__$1);
var G__57739 = c__22493__auto___57737;
var G__57740 = cljs.core.count.call(null,c__22493__auto___57737);
var G__57741 = (0);
seq__57722_57726 = G__57738;
chunk__57723_57727 = G__57739;
count__57724_57728 = G__57740;
i__57725_57729 = G__57741;
continue;
} else {
var ns_57742 = cljs.core.first.call(null,seq__57722_57736__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_57742);

var G__57743 = cljs.core.next.call(null,seq__57722_57736__$1);
var G__57744 = null;
var G__57745 = (0);
var G__57746 = (0);
seq__57722_57726 = G__57743;
chunk__57723_57727 = G__57744;
count__57724_57728 = G__57745;
i__57725_57729 = G__57746;
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
var G__57747__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__57747 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57748__i = 0, G__57748__a = new Array(arguments.length -  0);
while (G__57748__i < G__57748__a.length) {G__57748__a[G__57748__i] = arguments[G__57748__i + 0]; ++G__57748__i;}
  args = new cljs.core.IndexedSeq(G__57748__a,0);
} 
return G__57747__delegate.call(this,args);};
G__57747.cljs$lang$maxFixedArity = 0;
G__57747.cljs$lang$applyTo = (function (arglist__57749){
var args = cljs.core.seq(arglist__57749);
return G__57747__delegate(args);
});
G__57747.cljs$core$IFn$_invoke$arity$variadic = G__57747__delegate;
return G__57747;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__57751 = cljs.core._EQ_;
var expr__57752 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__57751.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__57752))){
var path_parts = ((function (pred__57751,expr__57752){
return (function (p1__57750_SHARP_){
return clojure.string.split.call(null,p1__57750_SHARP_,/[\/\\]/);
});})(pred__57751,expr__57752))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__57751,expr__57752){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e57754){if((e57754 instanceof Error)){
var e = e57754;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e57754;

}
}})());
});
;})(path_parts,sep,root,pred__57751,expr__57752))
} else {
if(cljs.core.truth_(pred__57751.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__57752))){
return ((function (pred__57751,expr__57752){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__57751,expr__57752){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__57751,expr__57752))
);

return deferred.addErrback(((function (deferred,pred__57751,expr__57752){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__57751,expr__57752))
);
});
;})(pred__57751,expr__57752))
} else {
return ((function (pred__57751,expr__57752){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__57751,expr__57752))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__57755,callback){
var map__57758 = p__57755;
var map__57758__$1 = ((((!((map__57758 == null)))?((((map__57758.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57758.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57758):map__57758);
var file_msg = map__57758__$1;
var request_url = cljs.core.get.call(null,map__57758__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__57758,map__57758__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__57758,map__57758__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__28379__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28379__auto__){
return (function (){
var f__28380__auto__ = (function (){var switch__28356__auto__ = ((function (c__28379__auto__){
return (function (state_57782){
var state_val_57783 = (state_57782[(1)]);
if((state_val_57783 === (7))){
var inst_57778 = (state_57782[(2)]);
var state_57782__$1 = state_57782;
var statearr_57784_57804 = state_57782__$1;
(statearr_57784_57804[(2)] = inst_57778);

(statearr_57784_57804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57783 === (1))){
var state_57782__$1 = state_57782;
var statearr_57785_57805 = state_57782__$1;
(statearr_57785_57805[(2)] = null);

(statearr_57785_57805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57783 === (4))){
var inst_57762 = (state_57782[(7)]);
var inst_57762__$1 = (state_57782[(2)]);
var state_57782__$1 = (function (){var statearr_57786 = state_57782;
(statearr_57786[(7)] = inst_57762__$1);

return statearr_57786;
})();
if(cljs.core.truth_(inst_57762__$1)){
var statearr_57787_57806 = state_57782__$1;
(statearr_57787_57806[(1)] = (5));

} else {
var statearr_57788_57807 = state_57782__$1;
(statearr_57788_57807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57783 === (6))){
var state_57782__$1 = state_57782;
var statearr_57789_57808 = state_57782__$1;
(statearr_57789_57808[(2)] = null);

(statearr_57789_57808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57783 === (3))){
var inst_57780 = (state_57782[(2)]);
var state_57782__$1 = state_57782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57782__$1,inst_57780);
} else {
if((state_val_57783 === (2))){
var state_57782__$1 = state_57782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57782__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_57783 === (11))){
var inst_57774 = (state_57782[(2)]);
var state_57782__$1 = (function (){var statearr_57790 = state_57782;
(statearr_57790[(8)] = inst_57774);

return statearr_57790;
})();
var statearr_57791_57809 = state_57782__$1;
(statearr_57791_57809[(2)] = null);

(statearr_57791_57809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57783 === (9))){
var inst_57766 = (state_57782[(9)]);
var inst_57768 = (state_57782[(10)]);
var inst_57770 = inst_57768.call(null,inst_57766);
var state_57782__$1 = state_57782;
var statearr_57792_57810 = state_57782__$1;
(statearr_57792_57810[(2)] = inst_57770);

(statearr_57792_57810[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57783 === (5))){
var inst_57762 = (state_57782[(7)]);
var inst_57764 = figwheel.client.file_reloading.blocking_load.call(null,inst_57762);
var state_57782__$1 = state_57782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57782__$1,(8),inst_57764);
} else {
if((state_val_57783 === (10))){
var inst_57766 = (state_57782[(9)]);
var inst_57772 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_57766);
var state_57782__$1 = state_57782;
var statearr_57793_57811 = state_57782__$1;
(statearr_57793_57811[(2)] = inst_57772);

(statearr_57793_57811[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57783 === (8))){
var inst_57762 = (state_57782[(7)]);
var inst_57768 = (state_57782[(10)]);
var inst_57766 = (state_57782[(2)]);
var inst_57767 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_57768__$1 = cljs.core.get.call(null,inst_57767,inst_57762);
var state_57782__$1 = (function (){var statearr_57794 = state_57782;
(statearr_57794[(9)] = inst_57766);

(statearr_57794[(10)] = inst_57768__$1);

return statearr_57794;
})();
if(cljs.core.truth_(inst_57768__$1)){
var statearr_57795_57812 = state_57782__$1;
(statearr_57795_57812[(1)] = (9));

} else {
var statearr_57796_57813 = state_57782__$1;
(statearr_57796_57813[(1)] = (10));

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
});})(c__28379__auto__))
;
return ((function (switch__28356__auto__,c__28379__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28357__auto__ = null;
var figwheel$client$file_reloading$state_machine__28357__auto____0 = (function (){
var statearr_57800 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57800[(0)] = figwheel$client$file_reloading$state_machine__28357__auto__);

(statearr_57800[(1)] = (1));

return statearr_57800;
});
var figwheel$client$file_reloading$state_machine__28357__auto____1 = (function (state_57782){
while(true){
var ret_value__28358__auto__ = (function (){try{while(true){
var result__28359__auto__ = switch__28356__auto__.call(null,state_57782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28359__auto__;
}
break;
}
}catch (e57801){if((e57801 instanceof Object)){
var ex__28360__auto__ = e57801;
var statearr_57802_57814 = state_57782;
(statearr_57802_57814[(5)] = ex__28360__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57815 = state_57782;
state_57782 = G__57815;
continue;
} else {
return ret_value__28358__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28357__auto__ = function(state_57782){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28357__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28357__auto____1.call(this,state_57782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28357__auto____0;
figwheel$client$file_reloading$state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28357__auto____1;
return figwheel$client$file_reloading$state_machine__28357__auto__;
})()
;})(switch__28356__auto__,c__28379__auto__))
})();
var state__28381__auto__ = (function (){var statearr_57803 = f__28380__auto__.call(null);
(statearr_57803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28379__auto__);

return statearr_57803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28381__auto__);
});})(c__28379__auto__))
);

return c__28379__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__57816,callback){
var map__57819 = p__57816;
var map__57819__$1 = ((((!((map__57819 == null)))?((((map__57819.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57819.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57819):map__57819);
var file_msg = map__57819__$1;
var namespace = cljs.core.get.call(null,map__57819__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__57819,map__57819__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__57819,map__57819__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__57821){
var map__57824 = p__57821;
var map__57824__$1 = ((((!((map__57824 == null)))?((((map__57824.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57824.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57824):map__57824);
var file_msg = map__57824__$1;
var namespace = cljs.core.get.call(null,map__57824__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__57826,callback){
var map__57829 = p__57826;
var map__57829__$1 = ((((!((map__57829 == null)))?((((map__57829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57829):map__57829);
var file_msg = map__57829__$1;
var request_url = cljs.core.get.call(null,map__57829__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__57829__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__28379__auto___57933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28379__auto___57933,out){
return (function (){
var f__28380__auto__ = (function (){var switch__28356__auto__ = ((function (c__28379__auto___57933,out){
return (function (state_57915){
var state_val_57916 = (state_57915[(1)]);
if((state_val_57916 === (1))){
var inst_57889 = cljs.core.seq.call(null,files);
var inst_57890 = cljs.core.first.call(null,inst_57889);
var inst_57891 = cljs.core.next.call(null,inst_57889);
var inst_57892 = files;
var state_57915__$1 = (function (){var statearr_57917 = state_57915;
(statearr_57917[(7)] = inst_57890);

(statearr_57917[(8)] = inst_57892);

(statearr_57917[(9)] = inst_57891);

return statearr_57917;
})();
var statearr_57918_57934 = state_57915__$1;
(statearr_57918_57934[(2)] = null);

(statearr_57918_57934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57916 === (2))){
var inst_57892 = (state_57915[(8)]);
var inst_57898 = (state_57915[(10)]);
var inst_57897 = cljs.core.seq.call(null,inst_57892);
var inst_57898__$1 = cljs.core.first.call(null,inst_57897);
var inst_57899 = cljs.core.next.call(null,inst_57897);
var inst_57900 = (inst_57898__$1 == null);
var inst_57901 = cljs.core.not.call(null,inst_57900);
var state_57915__$1 = (function (){var statearr_57919 = state_57915;
(statearr_57919[(11)] = inst_57899);

(statearr_57919[(10)] = inst_57898__$1);

return statearr_57919;
})();
if(inst_57901){
var statearr_57920_57935 = state_57915__$1;
(statearr_57920_57935[(1)] = (4));

} else {
var statearr_57921_57936 = state_57915__$1;
(statearr_57921_57936[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57916 === (3))){
var inst_57913 = (state_57915[(2)]);
var state_57915__$1 = state_57915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57915__$1,inst_57913);
} else {
if((state_val_57916 === (4))){
var inst_57898 = (state_57915[(10)]);
var inst_57903 = figwheel.client.file_reloading.reload_js_file.call(null,inst_57898);
var state_57915__$1 = state_57915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57915__$1,(7),inst_57903);
} else {
if((state_val_57916 === (5))){
var inst_57909 = cljs.core.async.close_BANG_.call(null,out);
var state_57915__$1 = state_57915;
var statearr_57922_57937 = state_57915__$1;
(statearr_57922_57937[(2)] = inst_57909);

(statearr_57922_57937[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57916 === (6))){
var inst_57911 = (state_57915[(2)]);
var state_57915__$1 = state_57915;
var statearr_57923_57938 = state_57915__$1;
(statearr_57923_57938[(2)] = inst_57911);

(statearr_57923_57938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57916 === (7))){
var inst_57899 = (state_57915[(11)]);
var inst_57905 = (state_57915[(2)]);
var inst_57906 = cljs.core.async.put_BANG_.call(null,out,inst_57905);
var inst_57892 = inst_57899;
var state_57915__$1 = (function (){var statearr_57924 = state_57915;
(statearr_57924[(12)] = inst_57906);

(statearr_57924[(8)] = inst_57892);

return statearr_57924;
})();
var statearr_57925_57939 = state_57915__$1;
(statearr_57925_57939[(2)] = null);

(statearr_57925_57939[(1)] = (2));


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
});})(c__28379__auto___57933,out))
;
return ((function (switch__28356__auto__,c__28379__auto___57933,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28357__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28357__auto____0 = (function (){
var statearr_57929 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57929[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28357__auto__);

(statearr_57929[(1)] = (1));

return statearr_57929;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28357__auto____1 = (function (state_57915){
while(true){
var ret_value__28358__auto__ = (function (){try{while(true){
var result__28359__auto__ = switch__28356__auto__.call(null,state_57915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28359__auto__;
}
break;
}
}catch (e57930){if((e57930 instanceof Object)){
var ex__28360__auto__ = e57930;
var statearr_57931_57940 = state_57915;
(statearr_57931_57940[(5)] = ex__28360__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57941 = state_57915;
state_57915 = G__57941;
continue;
} else {
return ret_value__28358__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28357__auto__ = function(state_57915){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28357__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28357__auto____1.call(this,state_57915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28357__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28357__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28357__auto__;
})()
;})(switch__28356__auto__,c__28379__auto___57933,out))
})();
var state__28381__auto__ = (function (){var statearr_57932 = f__28380__auto__.call(null);
(statearr_57932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28379__auto___57933);

return statearr_57932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28381__auto__);
});})(c__28379__auto___57933,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__57942,opts){
var map__57946 = p__57942;
var map__57946__$1 = ((((!((map__57946 == null)))?((((map__57946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57946):map__57946);
var eval_body__$1 = cljs.core.get.call(null,map__57946__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__57946__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e57948){var e = e57948;
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
return (function (p1__57949_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__57949_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__57958){
var vec__57959 = p__57958;
var k = cljs.core.nth.call(null,vec__57959,(0),null);
var v = cljs.core.nth.call(null,vec__57959,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__57962){
var vec__57963 = p__57962;
var k = cljs.core.nth.call(null,vec__57963,(0),null);
var v = cljs.core.nth.call(null,vec__57963,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__57969,p__57970){
var map__58217 = p__57969;
var map__58217__$1 = ((((!((map__58217 == null)))?((((map__58217.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58217.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58217):map__58217);
var opts = map__58217__$1;
var before_jsload = cljs.core.get.call(null,map__58217__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__58217__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__58217__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__58218 = p__57970;
var map__58218__$1 = ((((!((map__58218 == null)))?((((map__58218.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58218.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58218):map__58218);
var msg = map__58218__$1;
var files = cljs.core.get.call(null,map__58218__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__58218__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__58218__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28379__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28379__auto__,map__58217,map__58217__$1,opts,before_jsload,on_jsload,reload_dependents,map__58218,map__58218__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28380__auto__ = (function (){var switch__28356__auto__ = ((function (c__28379__auto__,map__58217,map__58217__$1,opts,before_jsload,on_jsload,reload_dependents,map__58218,map__58218__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_58371){
var state_val_58372 = (state_58371[(1)]);
if((state_val_58372 === (7))){
var inst_58233 = (state_58371[(7)]);
var inst_58232 = (state_58371[(8)]);
var inst_58235 = (state_58371[(9)]);
var inst_58234 = (state_58371[(10)]);
var inst_58240 = cljs.core._nth.call(null,inst_58233,inst_58235);
var inst_58241 = figwheel.client.file_reloading.eval_body.call(null,inst_58240,opts);
var inst_58242 = (inst_58235 + (1));
var tmp58373 = inst_58233;
var tmp58374 = inst_58232;
var tmp58375 = inst_58234;
var inst_58232__$1 = tmp58374;
var inst_58233__$1 = tmp58373;
var inst_58234__$1 = tmp58375;
var inst_58235__$1 = inst_58242;
var state_58371__$1 = (function (){var statearr_58376 = state_58371;
(statearr_58376[(7)] = inst_58233__$1);

(statearr_58376[(8)] = inst_58232__$1);

(statearr_58376[(9)] = inst_58235__$1);

(statearr_58376[(11)] = inst_58241);

(statearr_58376[(10)] = inst_58234__$1);

return statearr_58376;
})();
var statearr_58377_58463 = state_58371__$1;
(statearr_58377_58463[(2)] = null);

(statearr_58377_58463[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (20))){
var inst_58275 = (state_58371[(12)]);
var inst_58283 = figwheel.client.file_reloading.sort_files.call(null,inst_58275);
var state_58371__$1 = state_58371;
var statearr_58378_58464 = state_58371__$1;
(statearr_58378_58464[(2)] = inst_58283);

(statearr_58378_58464[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (27))){
var state_58371__$1 = state_58371;
var statearr_58379_58465 = state_58371__$1;
(statearr_58379_58465[(2)] = null);

(statearr_58379_58465[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (1))){
var inst_58224 = (state_58371[(13)]);
var inst_58221 = before_jsload.call(null,files);
var inst_58222 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_58223 = (function (){return ((function (inst_58224,inst_58221,inst_58222,state_val_58372,c__28379__auto__,map__58217,map__58217__$1,opts,before_jsload,on_jsload,reload_dependents,map__58218,map__58218__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__57966_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__57966_SHARP_);
});
;})(inst_58224,inst_58221,inst_58222,state_val_58372,c__28379__auto__,map__58217,map__58217__$1,opts,before_jsload,on_jsload,reload_dependents,map__58218,map__58218__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58224__$1 = cljs.core.filter.call(null,inst_58223,files);
var inst_58225 = cljs.core.not_empty.call(null,inst_58224__$1);
var state_58371__$1 = (function (){var statearr_58380 = state_58371;
(statearr_58380[(14)] = inst_58221);

(statearr_58380[(15)] = inst_58222);

(statearr_58380[(13)] = inst_58224__$1);

return statearr_58380;
})();
if(cljs.core.truth_(inst_58225)){
var statearr_58381_58466 = state_58371__$1;
(statearr_58381_58466[(1)] = (2));

} else {
var statearr_58382_58467 = state_58371__$1;
(statearr_58382_58467[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (24))){
var state_58371__$1 = state_58371;
var statearr_58383_58468 = state_58371__$1;
(statearr_58383_58468[(2)] = null);

(statearr_58383_58468[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (39))){
var inst_58325 = (state_58371[(16)]);
var state_58371__$1 = state_58371;
var statearr_58384_58469 = state_58371__$1;
(statearr_58384_58469[(2)] = inst_58325);

(statearr_58384_58469[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (46))){
var inst_58366 = (state_58371[(2)]);
var state_58371__$1 = state_58371;
var statearr_58385_58470 = state_58371__$1;
(statearr_58385_58470[(2)] = inst_58366);

(statearr_58385_58470[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (4))){
var inst_58269 = (state_58371[(2)]);
var inst_58270 = cljs.core.List.EMPTY;
var inst_58271 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_58270);
var inst_58272 = (function (){return ((function (inst_58269,inst_58270,inst_58271,state_val_58372,c__28379__auto__,map__58217,map__58217__$1,opts,before_jsload,on_jsload,reload_dependents,map__58218,map__58218__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__57967_SHARP_){
var and__21578__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__57967_SHARP_);
if(cljs.core.truth_(and__21578__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__57967_SHARP_));
} else {
return and__21578__auto__;
}
});
;})(inst_58269,inst_58270,inst_58271,state_val_58372,c__28379__auto__,map__58217,map__58217__$1,opts,before_jsload,on_jsload,reload_dependents,map__58218,map__58218__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58273 = cljs.core.filter.call(null,inst_58272,files);
var inst_58274 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_58275 = cljs.core.concat.call(null,inst_58273,inst_58274);
var state_58371__$1 = (function (){var statearr_58386 = state_58371;
(statearr_58386[(17)] = inst_58271);

(statearr_58386[(12)] = inst_58275);

(statearr_58386[(18)] = inst_58269);

return statearr_58386;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_58387_58471 = state_58371__$1;
(statearr_58387_58471[(1)] = (16));

} else {
var statearr_58388_58472 = state_58371__$1;
(statearr_58388_58472[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (15))){
var inst_58259 = (state_58371[(2)]);
var state_58371__$1 = state_58371;
var statearr_58389_58473 = state_58371__$1;
(statearr_58389_58473[(2)] = inst_58259);

(statearr_58389_58473[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (21))){
var inst_58285 = (state_58371[(19)]);
var inst_58285__$1 = (state_58371[(2)]);
var inst_58286 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_58285__$1);
var state_58371__$1 = (function (){var statearr_58390 = state_58371;
(statearr_58390[(19)] = inst_58285__$1);

return statearr_58390;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58371__$1,(22),inst_58286);
} else {
if((state_val_58372 === (31))){
var inst_58369 = (state_58371[(2)]);
var state_58371__$1 = state_58371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58371__$1,inst_58369);
} else {
if((state_val_58372 === (32))){
var inst_58325 = (state_58371[(16)]);
var inst_58330 = inst_58325.cljs$lang$protocol_mask$partition0$;
var inst_58331 = (inst_58330 & (64));
var inst_58332 = inst_58325.cljs$core$ISeq$;
var inst_58333 = (inst_58331) || (inst_58332);
var state_58371__$1 = state_58371;
if(cljs.core.truth_(inst_58333)){
var statearr_58391_58474 = state_58371__$1;
(statearr_58391_58474[(1)] = (35));

} else {
var statearr_58392_58475 = state_58371__$1;
(statearr_58392_58475[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (40))){
var inst_58346 = (state_58371[(20)]);
var inst_58345 = (state_58371[(2)]);
var inst_58346__$1 = cljs.core.get.call(null,inst_58345,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_58347 = cljs.core.get.call(null,inst_58345,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_58348 = cljs.core.not_empty.call(null,inst_58346__$1);
var state_58371__$1 = (function (){var statearr_58393 = state_58371;
(statearr_58393[(21)] = inst_58347);

(statearr_58393[(20)] = inst_58346__$1);

return statearr_58393;
})();
if(cljs.core.truth_(inst_58348)){
var statearr_58394_58476 = state_58371__$1;
(statearr_58394_58476[(1)] = (41));

} else {
var statearr_58395_58477 = state_58371__$1;
(statearr_58395_58477[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (33))){
var state_58371__$1 = state_58371;
var statearr_58396_58478 = state_58371__$1;
(statearr_58396_58478[(2)] = false);

(statearr_58396_58478[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (13))){
var inst_58245 = (state_58371[(22)]);
var inst_58249 = cljs.core.chunk_first.call(null,inst_58245);
var inst_58250 = cljs.core.chunk_rest.call(null,inst_58245);
var inst_58251 = cljs.core.count.call(null,inst_58249);
var inst_58232 = inst_58250;
var inst_58233 = inst_58249;
var inst_58234 = inst_58251;
var inst_58235 = (0);
var state_58371__$1 = (function (){var statearr_58397 = state_58371;
(statearr_58397[(7)] = inst_58233);

(statearr_58397[(8)] = inst_58232);

(statearr_58397[(9)] = inst_58235);

(statearr_58397[(10)] = inst_58234);

return statearr_58397;
})();
var statearr_58398_58479 = state_58371__$1;
(statearr_58398_58479[(2)] = null);

(statearr_58398_58479[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (22))){
var inst_58293 = (state_58371[(23)]);
var inst_58288 = (state_58371[(24)]);
var inst_58285 = (state_58371[(19)]);
var inst_58289 = (state_58371[(25)]);
var inst_58288__$1 = (state_58371[(2)]);
var inst_58289__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_58288__$1);
var inst_58290 = (function (){var all_files = inst_58285;
var res_SINGLEQUOTE_ = inst_58288__$1;
var res = inst_58289__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_58293,inst_58288,inst_58285,inst_58289,inst_58288__$1,inst_58289__$1,state_val_58372,c__28379__auto__,map__58217,map__58217__$1,opts,before_jsload,on_jsload,reload_dependents,map__58218,map__58218__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__57968_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__57968_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_58293,inst_58288,inst_58285,inst_58289,inst_58288__$1,inst_58289__$1,state_val_58372,c__28379__auto__,map__58217,map__58217__$1,opts,before_jsload,on_jsload,reload_dependents,map__58218,map__58218__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58291 = cljs.core.filter.call(null,inst_58290,inst_58288__$1);
var inst_58292 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_58293__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_58292);
var inst_58294 = cljs.core.not_empty.call(null,inst_58293__$1);
var state_58371__$1 = (function (){var statearr_58399 = state_58371;
(statearr_58399[(26)] = inst_58291);

(statearr_58399[(23)] = inst_58293__$1);

(statearr_58399[(24)] = inst_58288__$1);

(statearr_58399[(25)] = inst_58289__$1);

return statearr_58399;
})();
if(cljs.core.truth_(inst_58294)){
var statearr_58400_58480 = state_58371__$1;
(statearr_58400_58480[(1)] = (23));

} else {
var statearr_58401_58481 = state_58371__$1;
(statearr_58401_58481[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (36))){
var state_58371__$1 = state_58371;
var statearr_58402_58482 = state_58371__$1;
(statearr_58402_58482[(2)] = false);

(statearr_58402_58482[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (41))){
var inst_58346 = (state_58371[(20)]);
var inst_58350 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_58351 = cljs.core.map.call(null,inst_58350,inst_58346);
var inst_58352 = cljs.core.pr_str.call(null,inst_58351);
var inst_58353 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_58352)].join('');
var inst_58354 = figwheel.client.utils.log.call(null,inst_58353);
var state_58371__$1 = state_58371;
var statearr_58403_58483 = state_58371__$1;
(statearr_58403_58483[(2)] = inst_58354);

(statearr_58403_58483[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (43))){
var inst_58347 = (state_58371[(21)]);
var inst_58357 = (state_58371[(2)]);
var inst_58358 = cljs.core.not_empty.call(null,inst_58347);
var state_58371__$1 = (function (){var statearr_58404 = state_58371;
(statearr_58404[(27)] = inst_58357);

return statearr_58404;
})();
if(cljs.core.truth_(inst_58358)){
var statearr_58405_58484 = state_58371__$1;
(statearr_58405_58484[(1)] = (44));

} else {
var statearr_58406_58485 = state_58371__$1;
(statearr_58406_58485[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (29))){
var inst_58291 = (state_58371[(26)]);
var inst_58293 = (state_58371[(23)]);
var inst_58288 = (state_58371[(24)]);
var inst_58285 = (state_58371[(19)]);
var inst_58289 = (state_58371[(25)]);
var inst_58325 = (state_58371[(16)]);
var inst_58321 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_58324 = (function (){var all_files = inst_58285;
var res_SINGLEQUOTE_ = inst_58288;
var res = inst_58289;
var files_not_loaded = inst_58291;
var dependencies_that_loaded = inst_58293;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58291,inst_58293,inst_58288,inst_58285,inst_58289,inst_58325,inst_58321,state_val_58372,c__28379__auto__,map__58217,map__58217__$1,opts,before_jsload,on_jsload,reload_dependents,map__58218,map__58218__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__58323){
var map__58407 = p__58323;
var map__58407__$1 = ((((!((map__58407 == null)))?((((map__58407.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58407.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58407):map__58407);
var namespace = cljs.core.get.call(null,map__58407__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58291,inst_58293,inst_58288,inst_58285,inst_58289,inst_58325,inst_58321,state_val_58372,c__28379__auto__,map__58217,map__58217__$1,opts,before_jsload,on_jsload,reload_dependents,map__58218,map__58218__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58325__$1 = cljs.core.group_by.call(null,inst_58324,inst_58291);
var inst_58327 = (inst_58325__$1 == null);
var inst_58328 = cljs.core.not.call(null,inst_58327);
var state_58371__$1 = (function (){var statearr_58409 = state_58371;
(statearr_58409[(28)] = inst_58321);

(statearr_58409[(16)] = inst_58325__$1);

return statearr_58409;
})();
if(inst_58328){
var statearr_58410_58486 = state_58371__$1;
(statearr_58410_58486[(1)] = (32));

} else {
var statearr_58411_58487 = state_58371__$1;
(statearr_58411_58487[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (44))){
var inst_58347 = (state_58371[(21)]);
var inst_58360 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_58347);
var inst_58361 = cljs.core.pr_str.call(null,inst_58360);
var inst_58362 = [cljs.core.str("not required: "),cljs.core.str(inst_58361)].join('');
var inst_58363 = figwheel.client.utils.log.call(null,inst_58362);
var state_58371__$1 = state_58371;
var statearr_58412_58488 = state_58371__$1;
(statearr_58412_58488[(2)] = inst_58363);

(statearr_58412_58488[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (6))){
var inst_58266 = (state_58371[(2)]);
var state_58371__$1 = state_58371;
var statearr_58413_58489 = state_58371__$1;
(statearr_58413_58489[(2)] = inst_58266);

(statearr_58413_58489[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (28))){
var inst_58291 = (state_58371[(26)]);
var inst_58318 = (state_58371[(2)]);
var inst_58319 = cljs.core.not_empty.call(null,inst_58291);
var state_58371__$1 = (function (){var statearr_58414 = state_58371;
(statearr_58414[(29)] = inst_58318);

return statearr_58414;
})();
if(cljs.core.truth_(inst_58319)){
var statearr_58415_58490 = state_58371__$1;
(statearr_58415_58490[(1)] = (29));

} else {
var statearr_58416_58491 = state_58371__$1;
(statearr_58416_58491[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (25))){
var inst_58289 = (state_58371[(25)]);
var inst_58305 = (state_58371[(2)]);
var inst_58306 = cljs.core.not_empty.call(null,inst_58289);
var state_58371__$1 = (function (){var statearr_58417 = state_58371;
(statearr_58417[(30)] = inst_58305);

return statearr_58417;
})();
if(cljs.core.truth_(inst_58306)){
var statearr_58418_58492 = state_58371__$1;
(statearr_58418_58492[(1)] = (26));

} else {
var statearr_58419_58493 = state_58371__$1;
(statearr_58419_58493[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (34))){
var inst_58340 = (state_58371[(2)]);
var state_58371__$1 = state_58371;
if(cljs.core.truth_(inst_58340)){
var statearr_58420_58494 = state_58371__$1;
(statearr_58420_58494[(1)] = (38));

} else {
var statearr_58421_58495 = state_58371__$1;
(statearr_58421_58495[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (17))){
var state_58371__$1 = state_58371;
var statearr_58422_58496 = state_58371__$1;
(statearr_58422_58496[(2)] = recompile_dependents);

(statearr_58422_58496[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (3))){
var state_58371__$1 = state_58371;
var statearr_58423_58497 = state_58371__$1;
(statearr_58423_58497[(2)] = null);

(statearr_58423_58497[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (12))){
var inst_58262 = (state_58371[(2)]);
var state_58371__$1 = state_58371;
var statearr_58424_58498 = state_58371__$1;
(statearr_58424_58498[(2)] = inst_58262);

(statearr_58424_58498[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (2))){
var inst_58224 = (state_58371[(13)]);
var inst_58231 = cljs.core.seq.call(null,inst_58224);
var inst_58232 = inst_58231;
var inst_58233 = null;
var inst_58234 = (0);
var inst_58235 = (0);
var state_58371__$1 = (function (){var statearr_58425 = state_58371;
(statearr_58425[(7)] = inst_58233);

(statearr_58425[(8)] = inst_58232);

(statearr_58425[(9)] = inst_58235);

(statearr_58425[(10)] = inst_58234);

return statearr_58425;
})();
var statearr_58426_58499 = state_58371__$1;
(statearr_58426_58499[(2)] = null);

(statearr_58426_58499[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (23))){
var inst_58291 = (state_58371[(26)]);
var inst_58293 = (state_58371[(23)]);
var inst_58288 = (state_58371[(24)]);
var inst_58285 = (state_58371[(19)]);
var inst_58289 = (state_58371[(25)]);
var inst_58296 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_58298 = (function (){var all_files = inst_58285;
var res_SINGLEQUOTE_ = inst_58288;
var res = inst_58289;
var files_not_loaded = inst_58291;
var dependencies_that_loaded = inst_58293;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58291,inst_58293,inst_58288,inst_58285,inst_58289,inst_58296,state_val_58372,c__28379__auto__,map__58217,map__58217__$1,opts,before_jsload,on_jsload,reload_dependents,map__58218,map__58218__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__58297){
var map__58427 = p__58297;
var map__58427__$1 = ((((!((map__58427 == null)))?((((map__58427.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58427.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58427):map__58427);
var request_url = cljs.core.get.call(null,map__58427__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58291,inst_58293,inst_58288,inst_58285,inst_58289,inst_58296,state_val_58372,c__28379__auto__,map__58217,map__58217__$1,opts,before_jsload,on_jsload,reload_dependents,map__58218,map__58218__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58299 = cljs.core.reverse.call(null,inst_58293);
var inst_58300 = cljs.core.map.call(null,inst_58298,inst_58299);
var inst_58301 = cljs.core.pr_str.call(null,inst_58300);
var inst_58302 = figwheel.client.utils.log.call(null,inst_58301);
var state_58371__$1 = (function (){var statearr_58429 = state_58371;
(statearr_58429[(31)] = inst_58296);

return statearr_58429;
})();
var statearr_58430_58500 = state_58371__$1;
(statearr_58430_58500[(2)] = inst_58302);

(statearr_58430_58500[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (35))){
var state_58371__$1 = state_58371;
var statearr_58431_58501 = state_58371__$1;
(statearr_58431_58501[(2)] = true);

(statearr_58431_58501[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (19))){
var inst_58275 = (state_58371[(12)]);
var inst_58281 = figwheel.client.file_reloading.expand_files.call(null,inst_58275);
var state_58371__$1 = state_58371;
var statearr_58432_58502 = state_58371__$1;
(statearr_58432_58502[(2)] = inst_58281);

(statearr_58432_58502[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (11))){
var state_58371__$1 = state_58371;
var statearr_58433_58503 = state_58371__$1;
(statearr_58433_58503[(2)] = null);

(statearr_58433_58503[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (9))){
var inst_58264 = (state_58371[(2)]);
var state_58371__$1 = state_58371;
var statearr_58434_58504 = state_58371__$1;
(statearr_58434_58504[(2)] = inst_58264);

(statearr_58434_58504[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (5))){
var inst_58235 = (state_58371[(9)]);
var inst_58234 = (state_58371[(10)]);
var inst_58237 = (inst_58235 < inst_58234);
var inst_58238 = inst_58237;
var state_58371__$1 = state_58371;
if(cljs.core.truth_(inst_58238)){
var statearr_58435_58505 = state_58371__$1;
(statearr_58435_58505[(1)] = (7));

} else {
var statearr_58436_58506 = state_58371__$1;
(statearr_58436_58506[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (14))){
var inst_58245 = (state_58371[(22)]);
var inst_58254 = cljs.core.first.call(null,inst_58245);
var inst_58255 = figwheel.client.file_reloading.eval_body.call(null,inst_58254,opts);
var inst_58256 = cljs.core.next.call(null,inst_58245);
var inst_58232 = inst_58256;
var inst_58233 = null;
var inst_58234 = (0);
var inst_58235 = (0);
var state_58371__$1 = (function (){var statearr_58437 = state_58371;
(statearr_58437[(7)] = inst_58233);

(statearr_58437[(8)] = inst_58232);

(statearr_58437[(9)] = inst_58235);

(statearr_58437[(32)] = inst_58255);

(statearr_58437[(10)] = inst_58234);

return statearr_58437;
})();
var statearr_58438_58507 = state_58371__$1;
(statearr_58438_58507[(2)] = null);

(statearr_58438_58507[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (45))){
var state_58371__$1 = state_58371;
var statearr_58439_58508 = state_58371__$1;
(statearr_58439_58508[(2)] = null);

(statearr_58439_58508[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (26))){
var inst_58291 = (state_58371[(26)]);
var inst_58293 = (state_58371[(23)]);
var inst_58288 = (state_58371[(24)]);
var inst_58285 = (state_58371[(19)]);
var inst_58289 = (state_58371[(25)]);
var inst_58308 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_58310 = (function (){var all_files = inst_58285;
var res_SINGLEQUOTE_ = inst_58288;
var res = inst_58289;
var files_not_loaded = inst_58291;
var dependencies_that_loaded = inst_58293;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58291,inst_58293,inst_58288,inst_58285,inst_58289,inst_58308,state_val_58372,c__28379__auto__,map__58217,map__58217__$1,opts,before_jsload,on_jsload,reload_dependents,map__58218,map__58218__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__58309){
var map__58440 = p__58309;
var map__58440__$1 = ((((!((map__58440 == null)))?((((map__58440.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58440.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58440):map__58440);
var namespace = cljs.core.get.call(null,map__58440__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__58440__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58291,inst_58293,inst_58288,inst_58285,inst_58289,inst_58308,state_val_58372,c__28379__auto__,map__58217,map__58217__$1,opts,before_jsload,on_jsload,reload_dependents,map__58218,map__58218__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58311 = cljs.core.map.call(null,inst_58310,inst_58289);
var inst_58312 = cljs.core.pr_str.call(null,inst_58311);
var inst_58313 = figwheel.client.utils.log.call(null,inst_58312);
var inst_58314 = (function (){var all_files = inst_58285;
var res_SINGLEQUOTE_ = inst_58288;
var res = inst_58289;
var files_not_loaded = inst_58291;
var dependencies_that_loaded = inst_58293;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58291,inst_58293,inst_58288,inst_58285,inst_58289,inst_58308,inst_58310,inst_58311,inst_58312,inst_58313,state_val_58372,c__28379__auto__,map__58217,map__58217__$1,opts,before_jsload,on_jsload,reload_dependents,map__58218,map__58218__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58291,inst_58293,inst_58288,inst_58285,inst_58289,inst_58308,inst_58310,inst_58311,inst_58312,inst_58313,state_val_58372,c__28379__auto__,map__58217,map__58217__$1,opts,before_jsload,on_jsload,reload_dependents,map__58218,map__58218__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58315 = setTimeout(inst_58314,(10));
var state_58371__$1 = (function (){var statearr_58442 = state_58371;
(statearr_58442[(33)] = inst_58313);

(statearr_58442[(34)] = inst_58308);

return statearr_58442;
})();
var statearr_58443_58509 = state_58371__$1;
(statearr_58443_58509[(2)] = inst_58315);

(statearr_58443_58509[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (16))){
var state_58371__$1 = state_58371;
var statearr_58444_58510 = state_58371__$1;
(statearr_58444_58510[(2)] = reload_dependents);

(statearr_58444_58510[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (38))){
var inst_58325 = (state_58371[(16)]);
var inst_58342 = cljs.core.apply.call(null,cljs.core.hash_map,inst_58325);
var state_58371__$1 = state_58371;
var statearr_58445_58511 = state_58371__$1;
(statearr_58445_58511[(2)] = inst_58342);

(statearr_58445_58511[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (30))){
var state_58371__$1 = state_58371;
var statearr_58446_58512 = state_58371__$1;
(statearr_58446_58512[(2)] = null);

(statearr_58446_58512[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (10))){
var inst_58245 = (state_58371[(22)]);
var inst_58247 = cljs.core.chunked_seq_QMARK_.call(null,inst_58245);
var state_58371__$1 = state_58371;
if(inst_58247){
var statearr_58447_58513 = state_58371__$1;
(statearr_58447_58513[(1)] = (13));

} else {
var statearr_58448_58514 = state_58371__$1;
(statearr_58448_58514[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (18))){
var inst_58279 = (state_58371[(2)]);
var state_58371__$1 = state_58371;
if(cljs.core.truth_(inst_58279)){
var statearr_58449_58515 = state_58371__$1;
(statearr_58449_58515[(1)] = (19));

} else {
var statearr_58450_58516 = state_58371__$1;
(statearr_58450_58516[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (42))){
var state_58371__$1 = state_58371;
var statearr_58451_58517 = state_58371__$1;
(statearr_58451_58517[(2)] = null);

(statearr_58451_58517[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (37))){
var inst_58337 = (state_58371[(2)]);
var state_58371__$1 = state_58371;
var statearr_58452_58518 = state_58371__$1;
(statearr_58452_58518[(2)] = inst_58337);

(statearr_58452_58518[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (8))){
var inst_58232 = (state_58371[(8)]);
var inst_58245 = (state_58371[(22)]);
var inst_58245__$1 = cljs.core.seq.call(null,inst_58232);
var state_58371__$1 = (function (){var statearr_58453 = state_58371;
(statearr_58453[(22)] = inst_58245__$1);

return statearr_58453;
})();
if(inst_58245__$1){
var statearr_58454_58519 = state_58371__$1;
(statearr_58454_58519[(1)] = (10));

} else {
var statearr_58455_58520 = state_58371__$1;
(statearr_58455_58520[(1)] = (11));

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
});})(c__28379__auto__,map__58217,map__58217__$1,opts,before_jsload,on_jsload,reload_dependents,map__58218,map__58218__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28356__auto__,c__28379__auto__,map__58217,map__58217__$1,opts,before_jsload,on_jsload,reload_dependents,map__58218,map__58218__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28357__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28357__auto____0 = (function (){
var statearr_58459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58459[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28357__auto__);

(statearr_58459[(1)] = (1));

return statearr_58459;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28357__auto____1 = (function (state_58371){
while(true){
var ret_value__28358__auto__ = (function (){try{while(true){
var result__28359__auto__ = switch__28356__auto__.call(null,state_58371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28359__auto__;
}
break;
}
}catch (e58460){if((e58460 instanceof Object)){
var ex__28360__auto__ = e58460;
var statearr_58461_58521 = state_58371;
(statearr_58461_58521[(5)] = ex__28360__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58522 = state_58371;
state_58371 = G__58522;
continue;
} else {
return ret_value__28358__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28357__auto__ = function(state_58371){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28357__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28357__auto____1.call(this,state_58371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28357__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28357__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28357__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28357__auto__;
})()
;})(switch__28356__auto__,c__28379__auto__,map__58217,map__58217__$1,opts,before_jsload,on_jsload,reload_dependents,map__58218,map__58218__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28381__auto__ = (function (){var statearr_58462 = f__28380__auto__.call(null);
(statearr_58462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28379__auto__);

return statearr_58462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28381__auto__);
});})(c__28379__auto__,map__58217,map__58217__$1,opts,before_jsload,on_jsload,reload_dependents,map__58218,map__58218__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28379__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__58525,link){
var map__58528 = p__58525;
var map__58528__$1 = ((((!((map__58528 == null)))?((((map__58528.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58528.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58528):map__58528);
var file = cljs.core.get.call(null,map__58528__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6552__auto__ = link.href;
if(cljs.core.truth_(temp__6552__auto__)){
var link_href = temp__6552__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6552__auto__,map__58528,map__58528__$1,file){
return (function (p1__58523_SHARP_,p2__58524_SHARP_){
if(cljs.core._EQ_.call(null,p1__58523_SHARP_,p2__58524_SHARP_)){
return p1__58523_SHARP_;
} else {
return false;
}
});})(link_href,temp__6552__auto__,map__58528,map__58528__$1,file))
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
var temp__6552__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__58534){
var map__58535 = p__58534;
var map__58535__$1 = ((((!((map__58535 == null)))?((((map__58535.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58535.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58535):map__58535);
var match_length = cljs.core.get.call(null,map__58535__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__58535__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__58530_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__58530_SHARP_);
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
var args58537 = [];
var len__22773__auto___58540 = arguments.length;
var i__22774__auto___58541 = (0);
while(true){
if((i__22774__auto___58541 < len__22773__auto___58540)){
args58537.push((arguments[i__22774__auto___58541]));

var G__58542 = (i__22774__auto___58541 + (1));
i__22774__auto___58541 = G__58542;
continue;
} else {
}
break;
}

var G__58539 = args58537.length;
switch (G__58539) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58537.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__58544_SHARP_,p2__58545_SHARP_){
return cljs.core.assoc.call(null,p1__58544_SHARP_,cljs.core.get.call(null,p2__58545_SHARP_,key),p2__58545_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__58546){
var map__58549 = p__58546;
var map__58549__$1 = ((((!((map__58549 == null)))?((((map__58549.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58549.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58549):map__58549);
var f_data = map__58549__$1;
var file = cljs.core.get.call(null,map__58549__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6552__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6552__auto__)){
var link = temp__6552__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__58551,files_msg){
var map__58558 = p__58551;
var map__58558__$1 = ((((!((map__58558 == null)))?((((map__58558.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58558.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58558):map__58558);
var opts = map__58558__$1;
var on_cssload = cljs.core.get.call(null,map__58558__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__58560_58564 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__58561_58565 = null;
var count__58562_58566 = (0);
var i__58563_58567 = (0);
while(true){
if((i__58563_58567 < count__58562_58566)){
var f_58568 = cljs.core._nth.call(null,chunk__58561_58565,i__58563_58567);
figwheel.client.file_reloading.reload_css_file.call(null,f_58568);

var G__58569 = seq__58560_58564;
var G__58570 = chunk__58561_58565;
var G__58571 = count__58562_58566;
var G__58572 = (i__58563_58567 + (1));
seq__58560_58564 = G__58569;
chunk__58561_58565 = G__58570;
count__58562_58566 = G__58571;
i__58563_58567 = G__58572;
continue;
} else {
var temp__6552__auto___58573 = cljs.core.seq.call(null,seq__58560_58564);
if(temp__6552__auto___58573){
var seq__58560_58574__$1 = temp__6552__auto___58573;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58560_58574__$1)){
var c__22493__auto___58575 = cljs.core.chunk_first.call(null,seq__58560_58574__$1);
var G__58576 = cljs.core.chunk_rest.call(null,seq__58560_58574__$1);
var G__58577 = c__22493__auto___58575;
var G__58578 = cljs.core.count.call(null,c__22493__auto___58575);
var G__58579 = (0);
seq__58560_58564 = G__58576;
chunk__58561_58565 = G__58577;
count__58562_58566 = G__58578;
i__58563_58567 = G__58579;
continue;
} else {
var f_58580 = cljs.core.first.call(null,seq__58560_58574__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_58580);

var G__58581 = cljs.core.next.call(null,seq__58560_58574__$1);
var G__58582 = null;
var G__58583 = (0);
var G__58584 = (0);
seq__58560_58564 = G__58581;
chunk__58561_58565 = G__58582;
count__58562_58566 = G__58583;
i__58563_58567 = G__58584;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__58558,map__58558__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__58558,map__58558__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1471999079154