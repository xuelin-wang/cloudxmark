// Compiled by ClojureScript 1.9.198 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__40251){
var map__40276 = p__40251;
var map__40276__$1 = ((((!((map__40276 == null)))?((((map__40276.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40276.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40276):map__40276);
var m = map__40276__$1;
var n = cljs.core.get.call(null,map__40276__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__40276__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__6503__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6503__auto__)){
var ns = temp__6503__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40278_40300 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40279_40301 = null;
var count__40280_40302 = (0);
var i__40281_40303 = (0);
while(true){
if((i__40281_40303 < count__40280_40302)){
var f_40304 = cljs.core._nth.call(null,chunk__40279_40301,i__40281_40303);
cljs.core.println.call(null,"  ",f_40304);

var G__40305 = seq__40278_40300;
var G__40306 = chunk__40279_40301;
var G__40307 = count__40280_40302;
var G__40308 = (i__40281_40303 + (1));
seq__40278_40300 = G__40305;
chunk__40279_40301 = G__40306;
count__40280_40302 = G__40307;
i__40281_40303 = G__40308;
continue;
} else {
var temp__6503__auto___40309 = cljs.core.seq.call(null,seq__40278_40300);
if(temp__6503__auto___40309){
var seq__40278_40310__$1 = temp__6503__auto___40309;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40278_40310__$1)){
var c__22493__auto___40311 = cljs.core.chunk_first.call(null,seq__40278_40310__$1);
var G__40312 = cljs.core.chunk_rest.call(null,seq__40278_40310__$1);
var G__40313 = c__22493__auto___40311;
var G__40314 = cljs.core.count.call(null,c__22493__auto___40311);
var G__40315 = (0);
seq__40278_40300 = G__40312;
chunk__40279_40301 = G__40313;
count__40280_40302 = G__40314;
i__40281_40303 = G__40315;
continue;
} else {
var f_40316 = cljs.core.first.call(null,seq__40278_40310__$1);
cljs.core.println.call(null,"  ",f_40316);

var G__40317 = cljs.core.next.call(null,seq__40278_40310__$1);
var G__40318 = null;
var G__40319 = (0);
var G__40320 = (0);
seq__40278_40300 = G__40317;
chunk__40279_40301 = G__40318;
count__40280_40302 = G__40319;
i__40281_40303 = G__40320;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40321 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__21590__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_40321);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_40321)))?cljs.core.second.call(null,arglists_40321):arglists_40321));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40282_40322 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40283_40323 = null;
var count__40284_40324 = (0);
var i__40285_40325 = (0);
while(true){
if((i__40285_40325 < count__40284_40324)){
var vec__40286_40326 = cljs.core._nth.call(null,chunk__40283_40323,i__40285_40325);
var name_40327 = cljs.core.nth.call(null,vec__40286_40326,(0),null);
var map__40289_40328 = cljs.core.nth.call(null,vec__40286_40326,(1),null);
var map__40289_40329__$1 = ((((!((map__40289_40328 == null)))?((((map__40289_40328.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40289_40328.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40289_40328):map__40289_40328);
var doc_40330 = cljs.core.get.call(null,map__40289_40329__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40331 = cljs.core.get.call(null,map__40289_40329__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_40327);

cljs.core.println.call(null," ",arglists_40331);

if(cljs.core.truth_(doc_40330)){
cljs.core.println.call(null," ",doc_40330);
} else {
}

var G__40332 = seq__40282_40322;
var G__40333 = chunk__40283_40323;
var G__40334 = count__40284_40324;
var G__40335 = (i__40285_40325 + (1));
seq__40282_40322 = G__40332;
chunk__40283_40323 = G__40333;
count__40284_40324 = G__40334;
i__40285_40325 = G__40335;
continue;
} else {
var temp__6503__auto___40336 = cljs.core.seq.call(null,seq__40282_40322);
if(temp__6503__auto___40336){
var seq__40282_40337__$1 = temp__6503__auto___40336;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40282_40337__$1)){
var c__22493__auto___40338 = cljs.core.chunk_first.call(null,seq__40282_40337__$1);
var G__40339 = cljs.core.chunk_rest.call(null,seq__40282_40337__$1);
var G__40340 = c__22493__auto___40338;
var G__40341 = cljs.core.count.call(null,c__22493__auto___40338);
var G__40342 = (0);
seq__40282_40322 = G__40339;
chunk__40283_40323 = G__40340;
count__40284_40324 = G__40341;
i__40285_40325 = G__40342;
continue;
} else {
var vec__40291_40343 = cljs.core.first.call(null,seq__40282_40337__$1);
var name_40344 = cljs.core.nth.call(null,vec__40291_40343,(0),null);
var map__40294_40345 = cljs.core.nth.call(null,vec__40291_40343,(1),null);
var map__40294_40346__$1 = ((((!((map__40294_40345 == null)))?((((map__40294_40345.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40294_40345.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40294_40345):map__40294_40345);
var doc_40347 = cljs.core.get.call(null,map__40294_40346__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40348 = cljs.core.get.call(null,map__40294_40346__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_40344);

cljs.core.println.call(null," ",arglists_40348);

if(cljs.core.truth_(doc_40347)){
cljs.core.println.call(null," ",doc_40347);
} else {
}

var G__40349 = cljs.core.next.call(null,seq__40282_40337__$1);
var G__40350 = null;
var G__40351 = (0);
var G__40352 = (0);
seq__40282_40322 = G__40349;
chunk__40283_40323 = G__40350;
count__40284_40324 = G__40351;
i__40285_40325 = G__40352;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6503__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6503__auto__)){
var fnspec = temp__6503__auto__;
cljs.core.print.call(null,"Spec");

var seq__40296 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__40297 = null;
var count__40298 = (0);
var i__40299 = (0);
while(true){
if((i__40299 < count__40298)){
var role = cljs.core._nth.call(null,chunk__40297,i__40299);
var temp__6503__auto___40353__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6503__auto___40353__$1)){
var spec_40354 = temp__6503__auto___40353__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_40354));
} else {
}

var G__40355 = seq__40296;
var G__40356 = chunk__40297;
var G__40357 = count__40298;
var G__40358 = (i__40299 + (1));
seq__40296 = G__40355;
chunk__40297 = G__40356;
count__40298 = G__40357;
i__40299 = G__40358;
continue;
} else {
var temp__6503__auto____$1 = cljs.core.seq.call(null,seq__40296);
if(temp__6503__auto____$1){
var seq__40296__$1 = temp__6503__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40296__$1)){
var c__22493__auto__ = cljs.core.chunk_first.call(null,seq__40296__$1);
var G__40359 = cljs.core.chunk_rest.call(null,seq__40296__$1);
var G__40360 = c__22493__auto__;
var G__40361 = cljs.core.count.call(null,c__22493__auto__);
var G__40362 = (0);
seq__40296 = G__40359;
chunk__40297 = G__40360;
count__40298 = G__40361;
i__40299 = G__40362;
continue;
} else {
var role = cljs.core.first.call(null,seq__40296__$1);
var temp__6503__auto___40363__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6503__auto___40363__$2)){
var spec_40364 = temp__6503__auto___40363__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_40364));
} else {
}

var G__40365 = cljs.core.next.call(null,seq__40296__$1);
var G__40366 = null;
var G__40367 = (0);
var G__40368 = (0);
seq__40296 = G__40365;
chunk__40297 = G__40366;
count__40298 = G__40367;
i__40299 = G__40368;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1471181961369