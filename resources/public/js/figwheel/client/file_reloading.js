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
var or__21445__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__21445__auto__){
return or__21445__auto__;
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
var or__21445__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36615_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36615_SHARP_));
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
var seq__36620 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36621 = null;
var count__36622 = (0);
var i__36623 = (0);
while(true){
if((i__36623 < count__36622)){
var n = cljs.core._nth.call(null,chunk__36621,i__36623);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36624 = seq__36620;
var G__36625 = chunk__36621;
var G__36626 = count__36622;
var G__36627 = (i__36623 + (1));
seq__36620 = G__36624;
chunk__36621 = G__36625;
count__36622 = G__36626;
i__36623 = G__36627;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__36620);
if(temp__6503__auto__){
var seq__36620__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36620__$1)){
var c__22348__auto__ = cljs.core.chunk_first.call(null,seq__36620__$1);
var G__36628 = cljs.core.chunk_rest.call(null,seq__36620__$1);
var G__36629 = c__22348__auto__;
var G__36630 = cljs.core.count.call(null,c__22348__auto__);
var G__36631 = (0);
seq__36620 = G__36628;
chunk__36621 = G__36629;
count__36622 = G__36630;
i__36623 = G__36631;
continue;
} else {
var n = cljs.core.first.call(null,seq__36620__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36632 = cljs.core.next.call(null,seq__36620__$1);
var G__36633 = null;
var G__36634 = (0);
var G__36635 = (0);
seq__36620 = G__36632;
chunk__36621 = G__36633;
count__36622 = G__36634;
i__36623 = G__36635;
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

var seq__36686_36697 = cljs.core.seq.call(null,deps);
var chunk__36687_36698 = null;
var count__36688_36699 = (0);
var i__36689_36700 = (0);
while(true){
if((i__36689_36700 < count__36688_36699)){
var dep_36701 = cljs.core._nth.call(null,chunk__36687_36698,i__36689_36700);
topo_sort_helper_STAR_.call(null,dep_36701,(depth + (1)),state);

var G__36702 = seq__36686_36697;
var G__36703 = chunk__36687_36698;
var G__36704 = count__36688_36699;
var G__36705 = (i__36689_36700 + (1));
seq__36686_36697 = G__36702;
chunk__36687_36698 = G__36703;
count__36688_36699 = G__36704;
i__36689_36700 = G__36705;
continue;
} else {
var temp__6503__auto___36706 = cljs.core.seq.call(null,seq__36686_36697);
if(temp__6503__auto___36706){
var seq__36686_36707__$1 = temp__6503__auto___36706;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36686_36707__$1)){
var c__22348__auto___36708 = cljs.core.chunk_first.call(null,seq__36686_36707__$1);
var G__36709 = cljs.core.chunk_rest.call(null,seq__36686_36707__$1);
var G__36710 = c__22348__auto___36708;
var G__36711 = cljs.core.count.call(null,c__22348__auto___36708);
var G__36712 = (0);
seq__36686_36697 = G__36709;
chunk__36687_36698 = G__36710;
count__36688_36699 = G__36711;
i__36689_36700 = G__36712;
continue;
} else {
var dep_36713 = cljs.core.first.call(null,seq__36686_36707__$1);
topo_sort_helper_STAR_.call(null,dep_36713,(depth + (1)),state);

var G__36714 = cljs.core.next.call(null,seq__36686_36707__$1);
var G__36715 = null;
var G__36716 = (0);
var G__36717 = (0);
seq__36686_36697 = G__36714;
chunk__36687_36698 = G__36715;
count__36688_36699 = G__36716;
i__36689_36700 = G__36717;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36690){
var vec__36694 = p__36690;
var seq__36695 = cljs.core.seq.call(null,vec__36694);
var first__36696 = cljs.core.first.call(null,seq__36695);
var seq__36695__$1 = cljs.core.next.call(null,seq__36695);
var x = first__36696;
var xs = seq__36695__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36694,seq__36695,first__36696,seq__36695__$1,x,xs,get_deps__$1){
return (function (p1__36636_SHARP_){
return clojure.set.difference.call(null,p1__36636_SHARP_,x);
});})(vec__36694,seq__36695,first__36696,seq__36695__$1,x,xs,get_deps__$1))
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
var seq__36730 = cljs.core.seq.call(null,provides);
var chunk__36731 = null;
var count__36732 = (0);
var i__36733 = (0);
while(true){
if((i__36733 < count__36732)){
var prov = cljs.core._nth.call(null,chunk__36731,i__36733);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36734_36742 = cljs.core.seq.call(null,requires);
var chunk__36735_36743 = null;
var count__36736_36744 = (0);
var i__36737_36745 = (0);
while(true){
if((i__36737_36745 < count__36736_36744)){
var req_36746 = cljs.core._nth.call(null,chunk__36735_36743,i__36737_36745);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36746,prov);

var G__36747 = seq__36734_36742;
var G__36748 = chunk__36735_36743;
var G__36749 = count__36736_36744;
var G__36750 = (i__36737_36745 + (1));
seq__36734_36742 = G__36747;
chunk__36735_36743 = G__36748;
count__36736_36744 = G__36749;
i__36737_36745 = G__36750;
continue;
} else {
var temp__6503__auto___36751 = cljs.core.seq.call(null,seq__36734_36742);
if(temp__6503__auto___36751){
var seq__36734_36752__$1 = temp__6503__auto___36751;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36734_36752__$1)){
var c__22348__auto___36753 = cljs.core.chunk_first.call(null,seq__36734_36752__$1);
var G__36754 = cljs.core.chunk_rest.call(null,seq__36734_36752__$1);
var G__36755 = c__22348__auto___36753;
var G__36756 = cljs.core.count.call(null,c__22348__auto___36753);
var G__36757 = (0);
seq__36734_36742 = G__36754;
chunk__36735_36743 = G__36755;
count__36736_36744 = G__36756;
i__36737_36745 = G__36757;
continue;
} else {
var req_36758 = cljs.core.first.call(null,seq__36734_36752__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36758,prov);

var G__36759 = cljs.core.next.call(null,seq__36734_36752__$1);
var G__36760 = null;
var G__36761 = (0);
var G__36762 = (0);
seq__36734_36742 = G__36759;
chunk__36735_36743 = G__36760;
count__36736_36744 = G__36761;
i__36737_36745 = G__36762;
continue;
}
} else {
}
}
break;
}

var G__36763 = seq__36730;
var G__36764 = chunk__36731;
var G__36765 = count__36732;
var G__36766 = (i__36733 + (1));
seq__36730 = G__36763;
chunk__36731 = G__36764;
count__36732 = G__36765;
i__36733 = G__36766;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__36730);
if(temp__6503__auto__){
var seq__36730__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36730__$1)){
var c__22348__auto__ = cljs.core.chunk_first.call(null,seq__36730__$1);
var G__36767 = cljs.core.chunk_rest.call(null,seq__36730__$1);
var G__36768 = c__22348__auto__;
var G__36769 = cljs.core.count.call(null,c__22348__auto__);
var G__36770 = (0);
seq__36730 = G__36767;
chunk__36731 = G__36768;
count__36732 = G__36769;
i__36733 = G__36770;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36730__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36738_36771 = cljs.core.seq.call(null,requires);
var chunk__36739_36772 = null;
var count__36740_36773 = (0);
var i__36741_36774 = (0);
while(true){
if((i__36741_36774 < count__36740_36773)){
var req_36775 = cljs.core._nth.call(null,chunk__36739_36772,i__36741_36774);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36775,prov);

var G__36776 = seq__36738_36771;
var G__36777 = chunk__36739_36772;
var G__36778 = count__36740_36773;
var G__36779 = (i__36741_36774 + (1));
seq__36738_36771 = G__36776;
chunk__36739_36772 = G__36777;
count__36740_36773 = G__36778;
i__36741_36774 = G__36779;
continue;
} else {
var temp__6503__auto___36780__$1 = cljs.core.seq.call(null,seq__36738_36771);
if(temp__6503__auto___36780__$1){
var seq__36738_36781__$1 = temp__6503__auto___36780__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36738_36781__$1)){
var c__22348__auto___36782 = cljs.core.chunk_first.call(null,seq__36738_36781__$1);
var G__36783 = cljs.core.chunk_rest.call(null,seq__36738_36781__$1);
var G__36784 = c__22348__auto___36782;
var G__36785 = cljs.core.count.call(null,c__22348__auto___36782);
var G__36786 = (0);
seq__36738_36771 = G__36783;
chunk__36739_36772 = G__36784;
count__36740_36773 = G__36785;
i__36741_36774 = G__36786;
continue;
} else {
var req_36787 = cljs.core.first.call(null,seq__36738_36781__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36787,prov);

var G__36788 = cljs.core.next.call(null,seq__36738_36781__$1);
var G__36789 = null;
var G__36790 = (0);
var G__36791 = (0);
seq__36738_36771 = G__36788;
chunk__36739_36772 = G__36789;
count__36740_36773 = G__36790;
i__36741_36774 = G__36791;
continue;
}
} else {
}
}
break;
}

var G__36792 = cljs.core.next.call(null,seq__36730__$1);
var G__36793 = null;
var G__36794 = (0);
var G__36795 = (0);
seq__36730 = G__36792;
chunk__36731 = G__36793;
count__36732 = G__36794;
i__36733 = G__36795;
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
var seq__36800_36804 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36801_36805 = null;
var count__36802_36806 = (0);
var i__36803_36807 = (0);
while(true){
if((i__36803_36807 < count__36802_36806)){
var ns_36808 = cljs.core._nth.call(null,chunk__36801_36805,i__36803_36807);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36808);

var G__36809 = seq__36800_36804;
var G__36810 = chunk__36801_36805;
var G__36811 = count__36802_36806;
var G__36812 = (i__36803_36807 + (1));
seq__36800_36804 = G__36809;
chunk__36801_36805 = G__36810;
count__36802_36806 = G__36811;
i__36803_36807 = G__36812;
continue;
} else {
var temp__6503__auto___36813 = cljs.core.seq.call(null,seq__36800_36804);
if(temp__6503__auto___36813){
var seq__36800_36814__$1 = temp__6503__auto___36813;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36800_36814__$1)){
var c__22348__auto___36815 = cljs.core.chunk_first.call(null,seq__36800_36814__$1);
var G__36816 = cljs.core.chunk_rest.call(null,seq__36800_36814__$1);
var G__36817 = c__22348__auto___36815;
var G__36818 = cljs.core.count.call(null,c__22348__auto___36815);
var G__36819 = (0);
seq__36800_36804 = G__36816;
chunk__36801_36805 = G__36817;
count__36802_36806 = G__36818;
i__36803_36807 = G__36819;
continue;
} else {
var ns_36820 = cljs.core.first.call(null,seq__36800_36814__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36820);

var G__36821 = cljs.core.next.call(null,seq__36800_36814__$1);
var G__36822 = null;
var G__36823 = (0);
var G__36824 = (0);
seq__36800_36804 = G__36821;
chunk__36801_36805 = G__36822;
count__36802_36806 = G__36823;
i__36803_36807 = G__36824;
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
goog.require_figwheel_backup_ = (function (){var or__21445__auto__ = goog.require__;
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
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
var G__36825__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36825 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36826__i = 0, G__36826__a = new Array(arguments.length -  0);
while (G__36826__i < G__36826__a.length) {G__36826__a[G__36826__i] = arguments[G__36826__i + 0]; ++G__36826__i;}
  args = new cljs.core.IndexedSeq(G__36826__a,0);
} 
return G__36825__delegate.call(this,args);};
G__36825.cljs$lang$maxFixedArity = 0;
G__36825.cljs$lang$applyTo = (function (arglist__36827){
var args = cljs.core.seq(arglist__36827);
return G__36825__delegate(args);
});
G__36825.cljs$core$IFn$_invoke$arity$variadic = G__36825__delegate;
return G__36825;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36829 = cljs.core._EQ_;
var expr__36830 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36829.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36830))){
var path_parts = ((function (pred__36829,expr__36830){
return (function (p1__36828_SHARP_){
return clojure.string.split.call(null,p1__36828_SHARP_,/[\/\\]/);
});})(pred__36829,expr__36830))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__36829,expr__36830){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e36832){if((e36832 instanceof Error)){
var e = e36832;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36832;

}
}})());
});
;})(path_parts,sep,root,pred__36829,expr__36830))
} else {
if(cljs.core.truth_(pred__36829.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36830))){
return ((function (pred__36829,expr__36830){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__36829,expr__36830){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__36829,expr__36830))
);

return deferred.addErrback(((function (deferred,pred__36829,expr__36830){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__36829,expr__36830))
);
});
;})(pred__36829,expr__36830))
} else {
return ((function (pred__36829,expr__36830){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36829,expr__36830))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36833,callback){
var map__36836 = p__36833;
var map__36836__$1 = ((((!((map__36836 == null)))?((((map__36836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36836):map__36836);
var file_msg = map__36836__$1;
var request_url = cljs.core.get.call(null,map__36836__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__36836,map__36836__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36836,map__36836__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__28412__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28412__auto__){
return (function (){
var f__28413__auto__ = (function (){var switch__28298__auto__ = ((function (c__28412__auto__){
return (function (state_36860){
var state_val_36861 = (state_36860[(1)]);
if((state_val_36861 === (7))){
var inst_36856 = (state_36860[(2)]);
var state_36860__$1 = state_36860;
var statearr_36862_36882 = state_36860__$1;
(statearr_36862_36882[(2)] = inst_36856);

(statearr_36862_36882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36861 === (1))){
var state_36860__$1 = state_36860;
var statearr_36863_36883 = state_36860__$1;
(statearr_36863_36883[(2)] = null);

(statearr_36863_36883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36861 === (4))){
var inst_36840 = (state_36860[(7)]);
var inst_36840__$1 = (state_36860[(2)]);
var state_36860__$1 = (function (){var statearr_36864 = state_36860;
(statearr_36864[(7)] = inst_36840__$1);

return statearr_36864;
})();
if(cljs.core.truth_(inst_36840__$1)){
var statearr_36865_36884 = state_36860__$1;
(statearr_36865_36884[(1)] = (5));

} else {
var statearr_36866_36885 = state_36860__$1;
(statearr_36866_36885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36861 === (6))){
var state_36860__$1 = state_36860;
var statearr_36867_36886 = state_36860__$1;
(statearr_36867_36886[(2)] = null);

(statearr_36867_36886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36861 === (3))){
var inst_36858 = (state_36860[(2)]);
var state_36860__$1 = state_36860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36860__$1,inst_36858);
} else {
if((state_val_36861 === (2))){
var state_36860__$1 = state_36860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36860__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36861 === (11))){
var inst_36852 = (state_36860[(2)]);
var state_36860__$1 = (function (){var statearr_36868 = state_36860;
(statearr_36868[(8)] = inst_36852);

return statearr_36868;
})();
var statearr_36869_36887 = state_36860__$1;
(statearr_36869_36887[(2)] = null);

(statearr_36869_36887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36861 === (9))){
var inst_36846 = (state_36860[(9)]);
var inst_36844 = (state_36860[(10)]);
var inst_36848 = inst_36846.call(null,inst_36844);
var state_36860__$1 = state_36860;
var statearr_36870_36888 = state_36860__$1;
(statearr_36870_36888[(2)] = inst_36848);

(statearr_36870_36888[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36861 === (5))){
var inst_36840 = (state_36860[(7)]);
var inst_36842 = figwheel.client.file_reloading.blocking_load.call(null,inst_36840);
var state_36860__$1 = state_36860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36860__$1,(8),inst_36842);
} else {
if((state_val_36861 === (10))){
var inst_36844 = (state_36860[(10)]);
var inst_36850 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36844);
var state_36860__$1 = state_36860;
var statearr_36871_36889 = state_36860__$1;
(statearr_36871_36889[(2)] = inst_36850);

(statearr_36871_36889[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36861 === (8))){
var inst_36840 = (state_36860[(7)]);
var inst_36846 = (state_36860[(9)]);
var inst_36844 = (state_36860[(2)]);
var inst_36845 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36846__$1 = cljs.core.get.call(null,inst_36845,inst_36840);
var state_36860__$1 = (function (){var statearr_36872 = state_36860;
(statearr_36872[(9)] = inst_36846__$1);

(statearr_36872[(10)] = inst_36844);

return statearr_36872;
})();
if(cljs.core.truth_(inst_36846__$1)){
var statearr_36873_36890 = state_36860__$1;
(statearr_36873_36890[(1)] = (9));

} else {
var statearr_36874_36891 = state_36860__$1;
(statearr_36874_36891[(1)] = (10));

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
});})(c__28412__auto__))
;
return ((function (switch__28298__auto__,c__28412__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28299__auto__ = null;
var figwheel$client$file_reloading$state_machine__28299__auto____0 = (function (){
var statearr_36878 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36878[(0)] = figwheel$client$file_reloading$state_machine__28299__auto__);

(statearr_36878[(1)] = (1));

return statearr_36878;
});
var figwheel$client$file_reloading$state_machine__28299__auto____1 = (function (state_36860){
while(true){
var ret_value__28300__auto__ = (function (){try{while(true){
var result__28301__auto__ = switch__28298__auto__.call(null,state_36860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28301__auto__;
}
break;
}
}catch (e36879){if((e36879 instanceof Object)){
var ex__28302__auto__ = e36879;
var statearr_36880_36892 = state_36860;
(statearr_36880_36892[(5)] = ex__28302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36893 = state_36860;
state_36860 = G__36893;
continue;
} else {
return ret_value__28300__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28299__auto__ = function(state_36860){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28299__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28299__auto____1.call(this,state_36860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28299__auto____0;
figwheel$client$file_reloading$state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28299__auto____1;
return figwheel$client$file_reloading$state_machine__28299__auto__;
})()
;})(switch__28298__auto__,c__28412__auto__))
})();
var state__28414__auto__ = (function (){var statearr_36881 = f__28413__auto__.call(null);
(statearr_36881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28412__auto__);

return statearr_36881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28414__auto__);
});})(c__28412__auto__))
);

return c__28412__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36894,callback){
var map__36897 = p__36894;
var map__36897__$1 = ((((!((map__36897 == null)))?((((map__36897.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36897.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36897):map__36897);
var file_msg = map__36897__$1;
var namespace = cljs.core.get.call(null,map__36897__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36897,map__36897__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36897,map__36897__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36899){
var map__36902 = p__36899;
var map__36902__$1 = ((((!((map__36902 == null)))?((((map__36902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36902):map__36902);
var file_msg = map__36902__$1;
var namespace = cljs.core.get.call(null,map__36902__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__21433__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__21433__auto__){
var or__21445__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
var or__21445__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21445__auto____$1)){
return or__21445__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__21433__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36904,callback){
var map__36907 = p__36904;
var map__36907__$1 = ((((!((map__36907 == null)))?((((map__36907.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36907.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36907):map__36907);
var file_msg = map__36907__$1;
var request_url = cljs.core.get.call(null,map__36907__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36907__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__28412__auto___37011 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28412__auto___37011,out){
return (function (){
var f__28413__auto__ = (function (){var switch__28298__auto__ = ((function (c__28412__auto___37011,out){
return (function (state_36993){
var state_val_36994 = (state_36993[(1)]);
if((state_val_36994 === (1))){
var inst_36967 = cljs.core.seq.call(null,files);
var inst_36968 = cljs.core.first.call(null,inst_36967);
var inst_36969 = cljs.core.next.call(null,inst_36967);
var inst_36970 = files;
var state_36993__$1 = (function (){var statearr_36995 = state_36993;
(statearr_36995[(7)] = inst_36969);

(statearr_36995[(8)] = inst_36968);

(statearr_36995[(9)] = inst_36970);

return statearr_36995;
})();
var statearr_36996_37012 = state_36993__$1;
(statearr_36996_37012[(2)] = null);

(statearr_36996_37012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36994 === (2))){
var inst_36976 = (state_36993[(10)]);
var inst_36970 = (state_36993[(9)]);
var inst_36975 = cljs.core.seq.call(null,inst_36970);
var inst_36976__$1 = cljs.core.first.call(null,inst_36975);
var inst_36977 = cljs.core.next.call(null,inst_36975);
var inst_36978 = (inst_36976__$1 == null);
var inst_36979 = cljs.core.not.call(null,inst_36978);
var state_36993__$1 = (function (){var statearr_36997 = state_36993;
(statearr_36997[(10)] = inst_36976__$1);

(statearr_36997[(11)] = inst_36977);

return statearr_36997;
})();
if(inst_36979){
var statearr_36998_37013 = state_36993__$1;
(statearr_36998_37013[(1)] = (4));

} else {
var statearr_36999_37014 = state_36993__$1;
(statearr_36999_37014[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36994 === (3))){
var inst_36991 = (state_36993[(2)]);
var state_36993__$1 = state_36993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36993__$1,inst_36991);
} else {
if((state_val_36994 === (4))){
var inst_36976 = (state_36993[(10)]);
var inst_36981 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36976);
var state_36993__$1 = state_36993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36993__$1,(7),inst_36981);
} else {
if((state_val_36994 === (5))){
var inst_36987 = cljs.core.async.close_BANG_.call(null,out);
var state_36993__$1 = state_36993;
var statearr_37000_37015 = state_36993__$1;
(statearr_37000_37015[(2)] = inst_36987);

(statearr_37000_37015[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36994 === (6))){
var inst_36989 = (state_36993[(2)]);
var state_36993__$1 = state_36993;
var statearr_37001_37016 = state_36993__$1;
(statearr_37001_37016[(2)] = inst_36989);

(statearr_37001_37016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36994 === (7))){
var inst_36977 = (state_36993[(11)]);
var inst_36983 = (state_36993[(2)]);
var inst_36984 = cljs.core.async.put_BANG_.call(null,out,inst_36983);
var inst_36970 = inst_36977;
var state_36993__$1 = (function (){var statearr_37002 = state_36993;
(statearr_37002[(12)] = inst_36984);

(statearr_37002[(9)] = inst_36970);

return statearr_37002;
})();
var statearr_37003_37017 = state_36993__$1;
(statearr_37003_37017[(2)] = null);

(statearr_37003_37017[(1)] = (2));


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
});})(c__28412__auto___37011,out))
;
return ((function (switch__28298__auto__,c__28412__auto___37011,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28299__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28299__auto____0 = (function (){
var statearr_37007 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37007[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28299__auto__);

(statearr_37007[(1)] = (1));

return statearr_37007;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28299__auto____1 = (function (state_36993){
while(true){
var ret_value__28300__auto__ = (function (){try{while(true){
var result__28301__auto__ = switch__28298__auto__.call(null,state_36993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28301__auto__;
}
break;
}
}catch (e37008){if((e37008 instanceof Object)){
var ex__28302__auto__ = e37008;
var statearr_37009_37018 = state_36993;
(statearr_37009_37018[(5)] = ex__28302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37019 = state_36993;
state_36993 = G__37019;
continue;
} else {
return ret_value__28300__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28299__auto__ = function(state_36993){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28299__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28299__auto____1.call(this,state_36993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28299__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28299__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28299__auto__;
})()
;})(switch__28298__auto__,c__28412__auto___37011,out))
})();
var state__28414__auto__ = (function (){var statearr_37010 = f__28413__auto__.call(null);
(statearr_37010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28412__auto___37011);

return statearr_37010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28414__auto__);
});})(c__28412__auto___37011,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37020,opts){
var map__37024 = p__37020;
var map__37024__$1 = ((((!((map__37024 == null)))?((((map__37024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37024):map__37024);
var eval_body__$1 = cljs.core.get.call(null,map__37024__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37024__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__21433__auto__ = eval_body__$1;
if(cljs.core.truth_(and__21433__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__21433__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e37026){var e = e37026;
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
return (function (p1__37027_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37027_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__37036){
var vec__37037 = p__37036;
var k = cljs.core.nth.call(null,vec__37037,(0),null);
var v = cljs.core.nth.call(null,vec__37037,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37040){
var vec__37041 = p__37040;
var k = cljs.core.nth.call(null,vec__37041,(0),null);
var v = cljs.core.nth.call(null,vec__37041,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37047,p__37048){
var map__37295 = p__37047;
var map__37295__$1 = ((((!((map__37295 == null)))?((((map__37295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37295):map__37295);
var opts = map__37295__$1;
var before_jsload = cljs.core.get.call(null,map__37295__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37295__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37295__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37296 = p__37048;
var map__37296__$1 = ((((!((map__37296 == null)))?((((map__37296.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37296.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37296):map__37296);
var msg = map__37296__$1;
var files = cljs.core.get.call(null,map__37296__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37296__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37296__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28412__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28412__auto__,map__37295,map__37295__$1,opts,before_jsload,on_jsload,reload_dependents,map__37296,map__37296__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28413__auto__ = (function (){var switch__28298__auto__ = ((function (c__28412__auto__,map__37295,map__37295__$1,opts,before_jsload,on_jsload,reload_dependents,map__37296,map__37296__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37449){
var state_val_37450 = (state_37449[(1)]);
if((state_val_37450 === (7))){
var inst_37313 = (state_37449[(7)]);
var inst_37310 = (state_37449[(8)]);
var inst_37312 = (state_37449[(9)]);
var inst_37311 = (state_37449[(10)]);
var inst_37318 = cljs.core._nth.call(null,inst_37311,inst_37313);
var inst_37319 = figwheel.client.file_reloading.eval_body.call(null,inst_37318,opts);
var inst_37320 = (inst_37313 + (1));
var tmp37451 = inst_37310;
var tmp37452 = inst_37312;
var tmp37453 = inst_37311;
var inst_37310__$1 = tmp37451;
var inst_37311__$1 = tmp37453;
var inst_37312__$1 = tmp37452;
var inst_37313__$1 = inst_37320;
var state_37449__$1 = (function (){var statearr_37454 = state_37449;
(statearr_37454[(7)] = inst_37313__$1);

(statearr_37454[(11)] = inst_37319);

(statearr_37454[(8)] = inst_37310__$1);

(statearr_37454[(9)] = inst_37312__$1);

(statearr_37454[(10)] = inst_37311__$1);

return statearr_37454;
})();
var statearr_37455_37541 = state_37449__$1;
(statearr_37455_37541[(2)] = null);

(statearr_37455_37541[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (20))){
var inst_37353 = (state_37449[(12)]);
var inst_37361 = figwheel.client.file_reloading.sort_files.call(null,inst_37353);
var state_37449__$1 = state_37449;
var statearr_37456_37542 = state_37449__$1;
(statearr_37456_37542[(2)] = inst_37361);

(statearr_37456_37542[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (27))){
var state_37449__$1 = state_37449;
var statearr_37457_37543 = state_37449__$1;
(statearr_37457_37543[(2)] = null);

(statearr_37457_37543[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (1))){
var inst_37302 = (state_37449[(13)]);
var inst_37299 = before_jsload.call(null,files);
var inst_37300 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37301 = (function (){return ((function (inst_37302,inst_37299,inst_37300,state_val_37450,c__28412__auto__,map__37295,map__37295__$1,opts,before_jsload,on_jsload,reload_dependents,map__37296,map__37296__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37044_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37044_SHARP_);
});
;})(inst_37302,inst_37299,inst_37300,state_val_37450,c__28412__auto__,map__37295,map__37295__$1,opts,before_jsload,on_jsload,reload_dependents,map__37296,map__37296__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37302__$1 = cljs.core.filter.call(null,inst_37301,files);
var inst_37303 = cljs.core.not_empty.call(null,inst_37302__$1);
var state_37449__$1 = (function (){var statearr_37458 = state_37449;
(statearr_37458[(14)] = inst_37300);

(statearr_37458[(15)] = inst_37299);

(statearr_37458[(13)] = inst_37302__$1);

return statearr_37458;
})();
if(cljs.core.truth_(inst_37303)){
var statearr_37459_37544 = state_37449__$1;
(statearr_37459_37544[(1)] = (2));

} else {
var statearr_37460_37545 = state_37449__$1;
(statearr_37460_37545[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (24))){
var state_37449__$1 = state_37449;
var statearr_37461_37546 = state_37449__$1;
(statearr_37461_37546[(2)] = null);

(statearr_37461_37546[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (39))){
var inst_37403 = (state_37449[(16)]);
var state_37449__$1 = state_37449;
var statearr_37462_37547 = state_37449__$1;
(statearr_37462_37547[(2)] = inst_37403);

(statearr_37462_37547[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (46))){
var inst_37444 = (state_37449[(2)]);
var state_37449__$1 = state_37449;
var statearr_37463_37548 = state_37449__$1;
(statearr_37463_37548[(2)] = inst_37444);

(statearr_37463_37548[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (4))){
var inst_37347 = (state_37449[(2)]);
var inst_37348 = cljs.core.List.EMPTY;
var inst_37349 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37348);
var inst_37350 = (function (){return ((function (inst_37347,inst_37348,inst_37349,state_val_37450,c__28412__auto__,map__37295,map__37295__$1,opts,before_jsload,on_jsload,reload_dependents,map__37296,map__37296__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37045_SHARP_){
var and__21433__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37045_SHARP_);
if(cljs.core.truth_(and__21433__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37045_SHARP_));
} else {
return and__21433__auto__;
}
});
;})(inst_37347,inst_37348,inst_37349,state_val_37450,c__28412__auto__,map__37295,map__37295__$1,opts,before_jsload,on_jsload,reload_dependents,map__37296,map__37296__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37351 = cljs.core.filter.call(null,inst_37350,files);
var inst_37352 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37353 = cljs.core.concat.call(null,inst_37351,inst_37352);
var state_37449__$1 = (function (){var statearr_37464 = state_37449;
(statearr_37464[(17)] = inst_37349);

(statearr_37464[(12)] = inst_37353);

(statearr_37464[(18)] = inst_37347);

return statearr_37464;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37465_37549 = state_37449__$1;
(statearr_37465_37549[(1)] = (16));

} else {
var statearr_37466_37550 = state_37449__$1;
(statearr_37466_37550[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (15))){
var inst_37337 = (state_37449[(2)]);
var state_37449__$1 = state_37449;
var statearr_37467_37551 = state_37449__$1;
(statearr_37467_37551[(2)] = inst_37337);

(statearr_37467_37551[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (21))){
var inst_37363 = (state_37449[(19)]);
var inst_37363__$1 = (state_37449[(2)]);
var inst_37364 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37363__$1);
var state_37449__$1 = (function (){var statearr_37468 = state_37449;
(statearr_37468[(19)] = inst_37363__$1);

return statearr_37468;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37449__$1,(22),inst_37364);
} else {
if((state_val_37450 === (31))){
var inst_37447 = (state_37449[(2)]);
var state_37449__$1 = state_37449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37449__$1,inst_37447);
} else {
if((state_val_37450 === (32))){
var inst_37403 = (state_37449[(16)]);
var inst_37408 = inst_37403.cljs$lang$protocol_mask$partition0$;
var inst_37409 = (inst_37408 & (64));
var inst_37410 = inst_37403.cljs$core$ISeq$;
var inst_37411 = (inst_37409) || (inst_37410);
var state_37449__$1 = state_37449;
if(cljs.core.truth_(inst_37411)){
var statearr_37469_37552 = state_37449__$1;
(statearr_37469_37552[(1)] = (35));

} else {
var statearr_37470_37553 = state_37449__$1;
(statearr_37470_37553[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (40))){
var inst_37424 = (state_37449[(20)]);
var inst_37423 = (state_37449[(2)]);
var inst_37424__$1 = cljs.core.get.call(null,inst_37423,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37425 = cljs.core.get.call(null,inst_37423,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37426 = cljs.core.not_empty.call(null,inst_37424__$1);
var state_37449__$1 = (function (){var statearr_37471 = state_37449;
(statearr_37471[(20)] = inst_37424__$1);

(statearr_37471[(21)] = inst_37425);

return statearr_37471;
})();
if(cljs.core.truth_(inst_37426)){
var statearr_37472_37554 = state_37449__$1;
(statearr_37472_37554[(1)] = (41));

} else {
var statearr_37473_37555 = state_37449__$1;
(statearr_37473_37555[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (33))){
var state_37449__$1 = state_37449;
var statearr_37474_37556 = state_37449__$1;
(statearr_37474_37556[(2)] = false);

(statearr_37474_37556[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (13))){
var inst_37323 = (state_37449[(22)]);
var inst_37327 = cljs.core.chunk_first.call(null,inst_37323);
var inst_37328 = cljs.core.chunk_rest.call(null,inst_37323);
var inst_37329 = cljs.core.count.call(null,inst_37327);
var inst_37310 = inst_37328;
var inst_37311 = inst_37327;
var inst_37312 = inst_37329;
var inst_37313 = (0);
var state_37449__$1 = (function (){var statearr_37475 = state_37449;
(statearr_37475[(7)] = inst_37313);

(statearr_37475[(8)] = inst_37310);

(statearr_37475[(9)] = inst_37312);

(statearr_37475[(10)] = inst_37311);

return statearr_37475;
})();
var statearr_37476_37557 = state_37449__$1;
(statearr_37476_37557[(2)] = null);

(statearr_37476_37557[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (22))){
var inst_37366 = (state_37449[(23)]);
var inst_37367 = (state_37449[(24)]);
var inst_37363 = (state_37449[(19)]);
var inst_37371 = (state_37449[(25)]);
var inst_37366__$1 = (state_37449[(2)]);
var inst_37367__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37366__$1);
var inst_37368 = (function (){var all_files = inst_37363;
var res_SINGLEQUOTE_ = inst_37366__$1;
var res = inst_37367__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37366,inst_37367,inst_37363,inst_37371,inst_37366__$1,inst_37367__$1,state_val_37450,c__28412__auto__,map__37295,map__37295__$1,opts,before_jsload,on_jsload,reload_dependents,map__37296,map__37296__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37046_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37046_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37366,inst_37367,inst_37363,inst_37371,inst_37366__$1,inst_37367__$1,state_val_37450,c__28412__auto__,map__37295,map__37295__$1,opts,before_jsload,on_jsload,reload_dependents,map__37296,map__37296__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37369 = cljs.core.filter.call(null,inst_37368,inst_37366__$1);
var inst_37370 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37371__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37370);
var inst_37372 = cljs.core.not_empty.call(null,inst_37371__$1);
var state_37449__$1 = (function (){var statearr_37477 = state_37449;
(statearr_37477[(23)] = inst_37366__$1);

(statearr_37477[(24)] = inst_37367__$1);

(statearr_37477[(26)] = inst_37369);

(statearr_37477[(25)] = inst_37371__$1);

return statearr_37477;
})();
if(cljs.core.truth_(inst_37372)){
var statearr_37478_37558 = state_37449__$1;
(statearr_37478_37558[(1)] = (23));

} else {
var statearr_37479_37559 = state_37449__$1;
(statearr_37479_37559[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (36))){
var state_37449__$1 = state_37449;
var statearr_37480_37560 = state_37449__$1;
(statearr_37480_37560[(2)] = false);

(statearr_37480_37560[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (41))){
var inst_37424 = (state_37449[(20)]);
var inst_37428 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37429 = cljs.core.map.call(null,inst_37428,inst_37424);
var inst_37430 = cljs.core.pr_str.call(null,inst_37429);
var inst_37431 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_37430)].join('');
var inst_37432 = figwheel.client.utils.log.call(null,inst_37431);
var state_37449__$1 = state_37449;
var statearr_37481_37561 = state_37449__$1;
(statearr_37481_37561[(2)] = inst_37432);

(statearr_37481_37561[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (43))){
var inst_37425 = (state_37449[(21)]);
var inst_37435 = (state_37449[(2)]);
var inst_37436 = cljs.core.not_empty.call(null,inst_37425);
var state_37449__$1 = (function (){var statearr_37482 = state_37449;
(statearr_37482[(27)] = inst_37435);

return statearr_37482;
})();
if(cljs.core.truth_(inst_37436)){
var statearr_37483_37562 = state_37449__$1;
(statearr_37483_37562[(1)] = (44));

} else {
var statearr_37484_37563 = state_37449__$1;
(statearr_37484_37563[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (29))){
var inst_37366 = (state_37449[(23)]);
var inst_37367 = (state_37449[(24)]);
var inst_37363 = (state_37449[(19)]);
var inst_37369 = (state_37449[(26)]);
var inst_37403 = (state_37449[(16)]);
var inst_37371 = (state_37449[(25)]);
var inst_37399 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37402 = (function (){var all_files = inst_37363;
var res_SINGLEQUOTE_ = inst_37366;
var res = inst_37367;
var files_not_loaded = inst_37369;
var dependencies_that_loaded = inst_37371;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37366,inst_37367,inst_37363,inst_37369,inst_37403,inst_37371,inst_37399,state_val_37450,c__28412__auto__,map__37295,map__37295__$1,opts,before_jsload,on_jsload,reload_dependents,map__37296,map__37296__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37401){
var map__37485 = p__37401;
var map__37485__$1 = ((((!((map__37485 == null)))?((((map__37485.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37485.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37485):map__37485);
var namespace = cljs.core.get.call(null,map__37485__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37366,inst_37367,inst_37363,inst_37369,inst_37403,inst_37371,inst_37399,state_val_37450,c__28412__auto__,map__37295,map__37295__$1,opts,before_jsload,on_jsload,reload_dependents,map__37296,map__37296__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37403__$1 = cljs.core.group_by.call(null,inst_37402,inst_37369);
var inst_37405 = (inst_37403__$1 == null);
var inst_37406 = cljs.core.not.call(null,inst_37405);
var state_37449__$1 = (function (){var statearr_37487 = state_37449;
(statearr_37487[(28)] = inst_37399);

(statearr_37487[(16)] = inst_37403__$1);

return statearr_37487;
})();
if(inst_37406){
var statearr_37488_37564 = state_37449__$1;
(statearr_37488_37564[(1)] = (32));

} else {
var statearr_37489_37565 = state_37449__$1;
(statearr_37489_37565[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (44))){
var inst_37425 = (state_37449[(21)]);
var inst_37438 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37425);
var inst_37439 = cljs.core.pr_str.call(null,inst_37438);
var inst_37440 = [cljs.core.str("not required: "),cljs.core.str(inst_37439)].join('');
var inst_37441 = figwheel.client.utils.log.call(null,inst_37440);
var state_37449__$1 = state_37449;
var statearr_37490_37566 = state_37449__$1;
(statearr_37490_37566[(2)] = inst_37441);

(statearr_37490_37566[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (6))){
var inst_37344 = (state_37449[(2)]);
var state_37449__$1 = state_37449;
var statearr_37491_37567 = state_37449__$1;
(statearr_37491_37567[(2)] = inst_37344);

(statearr_37491_37567[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (28))){
var inst_37369 = (state_37449[(26)]);
var inst_37396 = (state_37449[(2)]);
var inst_37397 = cljs.core.not_empty.call(null,inst_37369);
var state_37449__$1 = (function (){var statearr_37492 = state_37449;
(statearr_37492[(29)] = inst_37396);

return statearr_37492;
})();
if(cljs.core.truth_(inst_37397)){
var statearr_37493_37568 = state_37449__$1;
(statearr_37493_37568[(1)] = (29));

} else {
var statearr_37494_37569 = state_37449__$1;
(statearr_37494_37569[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (25))){
var inst_37367 = (state_37449[(24)]);
var inst_37383 = (state_37449[(2)]);
var inst_37384 = cljs.core.not_empty.call(null,inst_37367);
var state_37449__$1 = (function (){var statearr_37495 = state_37449;
(statearr_37495[(30)] = inst_37383);

return statearr_37495;
})();
if(cljs.core.truth_(inst_37384)){
var statearr_37496_37570 = state_37449__$1;
(statearr_37496_37570[(1)] = (26));

} else {
var statearr_37497_37571 = state_37449__$1;
(statearr_37497_37571[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (34))){
var inst_37418 = (state_37449[(2)]);
var state_37449__$1 = state_37449;
if(cljs.core.truth_(inst_37418)){
var statearr_37498_37572 = state_37449__$1;
(statearr_37498_37572[(1)] = (38));

} else {
var statearr_37499_37573 = state_37449__$1;
(statearr_37499_37573[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (17))){
var state_37449__$1 = state_37449;
var statearr_37500_37574 = state_37449__$1;
(statearr_37500_37574[(2)] = recompile_dependents);

(statearr_37500_37574[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (3))){
var state_37449__$1 = state_37449;
var statearr_37501_37575 = state_37449__$1;
(statearr_37501_37575[(2)] = null);

(statearr_37501_37575[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (12))){
var inst_37340 = (state_37449[(2)]);
var state_37449__$1 = state_37449;
var statearr_37502_37576 = state_37449__$1;
(statearr_37502_37576[(2)] = inst_37340);

(statearr_37502_37576[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (2))){
var inst_37302 = (state_37449[(13)]);
var inst_37309 = cljs.core.seq.call(null,inst_37302);
var inst_37310 = inst_37309;
var inst_37311 = null;
var inst_37312 = (0);
var inst_37313 = (0);
var state_37449__$1 = (function (){var statearr_37503 = state_37449;
(statearr_37503[(7)] = inst_37313);

(statearr_37503[(8)] = inst_37310);

(statearr_37503[(9)] = inst_37312);

(statearr_37503[(10)] = inst_37311);

return statearr_37503;
})();
var statearr_37504_37577 = state_37449__$1;
(statearr_37504_37577[(2)] = null);

(statearr_37504_37577[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (23))){
var inst_37366 = (state_37449[(23)]);
var inst_37367 = (state_37449[(24)]);
var inst_37363 = (state_37449[(19)]);
var inst_37369 = (state_37449[(26)]);
var inst_37371 = (state_37449[(25)]);
var inst_37374 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37376 = (function (){var all_files = inst_37363;
var res_SINGLEQUOTE_ = inst_37366;
var res = inst_37367;
var files_not_loaded = inst_37369;
var dependencies_that_loaded = inst_37371;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37366,inst_37367,inst_37363,inst_37369,inst_37371,inst_37374,state_val_37450,c__28412__auto__,map__37295,map__37295__$1,opts,before_jsload,on_jsload,reload_dependents,map__37296,map__37296__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37375){
var map__37505 = p__37375;
var map__37505__$1 = ((((!((map__37505 == null)))?((((map__37505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37505):map__37505);
var request_url = cljs.core.get.call(null,map__37505__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37366,inst_37367,inst_37363,inst_37369,inst_37371,inst_37374,state_val_37450,c__28412__auto__,map__37295,map__37295__$1,opts,before_jsload,on_jsload,reload_dependents,map__37296,map__37296__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37377 = cljs.core.reverse.call(null,inst_37371);
var inst_37378 = cljs.core.map.call(null,inst_37376,inst_37377);
var inst_37379 = cljs.core.pr_str.call(null,inst_37378);
var inst_37380 = figwheel.client.utils.log.call(null,inst_37379);
var state_37449__$1 = (function (){var statearr_37507 = state_37449;
(statearr_37507[(31)] = inst_37374);

return statearr_37507;
})();
var statearr_37508_37578 = state_37449__$1;
(statearr_37508_37578[(2)] = inst_37380);

(statearr_37508_37578[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (35))){
var state_37449__$1 = state_37449;
var statearr_37509_37579 = state_37449__$1;
(statearr_37509_37579[(2)] = true);

(statearr_37509_37579[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (19))){
var inst_37353 = (state_37449[(12)]);
var inst_37359 = figwheel.client.file_reloading.expand_files.call(null,inst_37353);
var state_37449__$1 = state_37449;
var statearr_37510_37580 = state_37449__$1;
(statearr_37510_37580[(2)] = inst_37359);

(statearr_37510_37580[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (11))){
var state_37449__$1 = state_37449;
var statearr_37511_37581 = state_37449__$1;
(statearr_37511_37581[(2)] = null);

(statearr_37511_37581[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (9))){
var inst_37342 = (state_37449[(2)]);
var state_37449__$1 = state_37449;
var statearr_37512_37582 = state_37449__$1;
(statearr_37512_37582[(2)] = inst_37342);

(statearr_37512_37582[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (5))){
var inst_37313 = (state_37449[(7)]);
var inst_37312 = (state_37449[(9)]);
var inst_37315 = (inst_37313 < inst_37312);
var inst_37316 = inst_37315;
var state_37449__$1 = state_37449;
if(cljs.core.truth_(inst_37316)){
var statearr_37513_37583 = state_37449__$1;
(statearr_37513_37583[(1)] = (7));

} else {
var statearr_37514_37584 = state_37449__$1;
(statearr_37514_37584[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (14))){
var inst_37323 = (state_37449[(22)]);
var inst_37332 = cljs.core.first.call(null,inst_37323);
var inst_37333 = figwheel.client.file_reloading.eval_body.call(null,inst_37332,opts);
var inst_37334 = cljs.core.next.call(null,inst_37323);
var inst_37310 = inst_37334;
var inst_37311 = null;
var inst_37312 = (0);
var inst_37313 = (0);
var state_37449__$1 = (function (){var statearr_37515 = state_37449;
(statearr_37515[(7)] = inst_37313);

(statearr_37515[(32)] = inst_37333);

(statearr_37515[(8)] = inst_37310);

(statearr_37515[(9)] = inst_37312);

(statearr_37515[(10)] = inst_37311);

return statearr_37515;
})();
var statearr_37516_37585 = state_37449__$1;
(statearr_37516_37585[(2)] = null);

(statearr_37516_37585[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (45))){
var state_37449__$1 = state_37449;
var statearr_37517_37586 = state_37449__$1;
(statearr_37517_37586[(2)] = null);

(statearr_37517_37586[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (26))){
var inst_37366 = (state_37449[(23)]);
var inst_37367 = (state_37449[(24)]);
var inst_37363 = (state_37449[(19)]);
var inst_37369 = (state_37449[(26)]);
var inst_37371 = (state_37449[(25)]);
var inst_37386 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37388 = (function (){var all_files = inst_37363;
var res_SINGLEQUOTE_ = inst_37366;
var res = inst_37367;
var files_not_loaded = inst_37369;
var dependencies_that_loaded = inst_37371;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37366,inst_37367,inst_37363,inst_37369,inst_37371,inst_37386,state_val_37450,c__28412__auto__,map__37295,map__37295__$1,opts,before_jsload,on_jsload,reload_dependents,map__37296,map__37296__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37387){
var map__37518 = p__37387;
var map__37518__$1 = ((((!((map__37518 == null)))?((((map__37518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37518):map__37518);
var namespace = cljs.core.get.call(null,map__37518__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37518__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37366,inst_37367,inst_37363,inst_37369,inst_37371,inst_37386,state_val_37450,c__28412__auto__,map__37295,map__37295__$1,opts,before_jsload,on_jsload,reload_dependents,map__37296,map__37296__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37389 = cljs.core.map.call(null,inst_37388,inst_37367);
var inst_37390 = cljs.core.pr_str.call(null,inst_37389);
var inst_37391 = figwheel.client.utils.log.call(null,inst_37390);
var inst_37392 = (function (){var all_files = inst_37363;
var res_SINGLEQUOTE_ = inst_37366;
var res = inst_37367;
var files_not_loaded = inst_37369;
var dependencies_that_loaded = inst_37371;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37366,inst_37367,inst_37363,inst_37369,inst_37371,inst_37386,inst_37388,inst_37389,inst_37390,inst_37391,state_val_37450,c__28412__auto__,map__37295,map__37295__$1,opts,before_jsload,on_jsload,reload_dependents,map__37296,map__37296__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37366,inst_37367,inst_37363,inst_37369,inst_37371,inst_37386,inst_37388,inst_37389,inst_37390,inst_37391,state_val_37450,c__28412__auto__,map__37295,map__37295__$1,opts,before_jsload,on_jsload,reload_dependents,map__37296,map__37296__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37393 = setTimeout(inst_37392,(10));
var state_37449__$1 = (function (){var statearr_37520 = state_37449;
(statearr_37520[(33)] = inst_37391);

(statearr_37520[(34)] = inst_37386);

return statearr_37520;
})();
var statearr_37521_37587 = state_37449__$1;
(statearr_37521_37587[(2)] = inst_37393);

(statearr_37521_37587[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (16))){
var state_37449__$1 = state_37449;
var statearr_37522_37588 = state_37449__$1;
(statearr_37522_37588[(2)] = reload_dependents);

(statearr_37522_37588[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (38))){
var inst_37403 = (state_37449[(16)]);
var inst_37420 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37403);
var state_37449__$1 = state_37449;
var statearr_37523_37589 = state_37449__$1;
(statearr_37523_37589[(2)] = inst_37420);

(statearr_37523_37589[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (30))){
var state_37449__$1 = state_37449;
var statearr_37524_37590 = state_37449__$1;
(statearr_37524_37590[(2)] = null);

(statearr_37524_37590[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (10))){
var inst_37323 = (state_37449[(22)]);
var inst_37325 = cljs.core.chunked_seq_QMARK_.call(null,inst_37323);
var state_37449__$1 = state_37449;
if(inst_37325){
var statearr_37525_37591 = state_37449__$1;
(statearr_37525_37591[(1)] = (13));

} else {
var statearr_37526_37592 = state_37449__$1;
(statearr_37526_37592[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (18))){
var inst_37357 = (state_37449[(2)]);
var state_37449__$1 = state_37449;
if(cljs.core.truth_(inst_37357)){
var statearr_37527_37593 = state_37449__$1;
(statearr_37527_37593[(1)] = (19));

} else {
var statearr_37528_37594 = state_37449__$1;
(statearr_37528_37594[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (42))){
var state_37449__$1 = state_37449;
var statearr_37529_37595 = state_37449__$1;
(statearr_37529_37595[(2)] = null);

(statearr_37529_37595[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (37))){
var inst_37415 = (state_37449[(2)]);
var state_37449__$1 = state_37449;
var statearr_37530_37596 = state_37449__$1;
(statearr_37530_37596[(2)] = inst_37415);

(statearr_37530_37596[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (8))){
var inst_37323 = (state_37449[(22)]);
var inst_37310 = (state_37449[(8)]);
var inst_37323__$1 = cljs.core.seq.call(null,inst_37310);
var state_37449__$1 = (function (){var statearr_37531 = state_37449;
(statearr_37531[(22)] = inst_37323__$1);

return statearr_37531;
})();
if(inst_37323__$1){
var statearr_37532_37597 = state_37449__$1;
(statearr_37532_37597[(1)] = (10));

} else {
var statearr_37533_37598 = state_37449__$1;
(statearr_37533_37598[(1)] = (11));

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
});})(c__28412__auto__,map__37295,map__37295__$1,opts,before_jsload,on_jsload,reload_dependents,map__37296,map__37296__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28298__auto__,c__28412__auto__,map__37295,map__37295__$1,opts,before_jsload,on_jsload,reload_dependents,map__37296,map__37296__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28299__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28299__auto____0 = (function (){
var statearr_37537 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37537[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28299__auto__);

(statearr_37537[(1)] = (1));

return statearr_37537;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28299__auto____1 = (function (state_37449){
while(true){
var ret_value__28300__auto__ = (function (){try{while(true){
var result__28301__auto__ = switch__28298__auto__.call(null,state_37449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28301__auto__;
}
break;
}
}catch (e37538){if((e37538 instanceof Object)){
var ex__28302__auto__ = e37538;
var statearr_37539_37599 = state_37449;
(statearr_37539_37599[(5)] = ex__28302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37600 = state_37449;
state_37449 = G__37600;
continue;
} else {
return ret_value__28300__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28299__auto__ = function(state_37449){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28299__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28299__auto____1.call(this,state_37449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28299__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28299__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28299__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28299__auto__;
})()
;})(switch__28298__auto__,c__28412__auto__,map__37295,map__37295__$1,opts,before_jsload,on_jsload,reload_dependents,map__37296,map__37296__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28414__auto__ = (function (){var statearr_37540 = f__28413__auto__.call(null);
(statearr_37540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28412__auto__);

return statearr_37540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28414__auto__);
});})(c__28412__auto__,map__37295,map__37295__$1,opts,before_jsload,on_jsload,reload_dependents,map__37296,map__37296__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28412__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37603,link){
var map__37606 = p__37603;
var map__37606__$1 = ((((!((map__37606 == null)))?((((map__37606.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37606.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37606):map__37606);
var file = cljs.core.get.call(null,map__37606__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6503__auto__ = link.href;
if(cljs.core.truth_(temp__6503__auto__)){
var link_href = temp__6503__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6503__auto__,map__37606,map__37606__$1,file){
return (function (p1__37601_SHARP_,p2__37602_SHARP_){
if(cljs.core._EQ_.call(null,p1__37601_SHARP_,p2__37602_SHARP_)){
return p1__37601_SHARP_;
} else {
return false;
}
});})(link_href,temp__6503__auto__,map__37606,map__37606__$1,file))
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
var temp__6503__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37612){
var map__37613 = p__37612;
var map__37613__$1 = ((((!((map__37613 == null)))?((((map__37613.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37613.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37613):map__37613);
var match_length = cljs.core.get.call(null,map__37613__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37613__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37608_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37608_SHARP_);
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
var args37615 = [];
var len__22628__auto___37618 = arguments.length;
var i__22629__auto___37619 = (0);
while(true){
if((i__22629__auto___37619 < len__22628__auto___37618)){
args37615.push((arguments[i__22629__auto___37619]));

var G__37620 = (i__22629__auto___37619 + (1));
i__22629__auto___37619 = G__37620;
continue;
} else {
}
break;
}

var G__37617 = args37615.length;
switch (G__37617) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37615.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37622_SHARP_,p2__37623_SHARP_){
return cljs.core.assoc.call(null,p1__37622_SHARP_,cljs.core.get.call(null,p2__37623_SHARP_,key),p2__37623_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__37624){
var map__37627 = p__37624;
var map__37627__$1 = ((((!((map__37627 == null)))?((((map__37627.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37627.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37627):map__37627);
var f_data = map__37627__$1;
var file = cljs.core.get.call(null,map__37627__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6503__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6503__auto__)){
var link = temp__6503__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37629,files_msg){
var map__37636 = p__37629;
var map__37636__$1 = ((((!((map__37636 == null)))?((((map__37636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37636):map__37636);
var opts = map__37636__$1;
var on_cssload = cljs.core.get.call(null,map__37636__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__37638_37642 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__37639_37643 = null;
var count__37640_37644 = (0);
var i__37641_37645 = (0);
while(true){
if((i__37641_37645 < count__37640_37644)){
var f_37646 = cljs.core._nth.call(null,chunk__37639_37643,i__37641_37645);
figwheel.client.file_reloading.reload_css_file.call(null,f_37646);

var G__37647 = seq__37638_37642;
var G__37648 = chunk__37639_37643;
var G__37649 = count__37640_37644;
var G__37650 = (i__37641_37645 + (1));
seq__37638_37642 = G__37647;
chunk__37639_37643 = G__37648;
count__37640_37644 = G__37649;
i__37641_37645 = G__37650;
continue;
} else {
var temp__6503__auto___37651 = cljs.core.seq.call(null,seq__37638_37642);
if(temp__6503__auto___37651){
var seq__37638_37652__$1 = temp__6503__auto___37651;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37638_37652__$1)){
var c__22348__auto___37653 = cljs.core.chunk_first.call(null,seq__37638_37652__$1);
var G__37654 = cljs.core.chunk_rest.call(null,seq__37638_37652__$1);
var G__37655 = c__22348__auto___37653;
var G__37656 = cljs.core.count.call(null,c__22348__auto___37653);
var G__37657 = (0);
seq__37638_37642 = G__37654;
chunk__37639_37643 = G__37655;
count__37640_37644 = G__37656;
i__37641_37645 = G__37657;
continue;
} else {
var f_37658 = cljs.core.first.call(null,seq__37638_37652__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_37658);

var G__37659 = cljs.core.next.call(null,seq__37638_37652__$1);
var G__37660 = null;
var G__37661 = (0);
var G__37662 = (0);
seq__37638_37642 = G__37659;
chunk__37639_37643 = G__37660;
count__37640_37644 = G__37661;
i__37641_37645 = G__37662;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__37636,map__37636__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__37636,map__37636__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1470139197251