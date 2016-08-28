// Compiled by ClojureScript 1.9.225 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37266){
var map__37291 = p__37266;
var map__37291__$1 = ((((!((map__37291 == null)))?((((map__37291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37291):map__37291);
var m = map__37291__$1;
var n = cljs.core.get.call(null,map__37291__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37291__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__6552__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6552__auto__)){
var ns = temp__6552__auto__;
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
var seq__37293_37315 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37294_37316 = null;
var count__37295_37317 = (0);
var i__37296_37318 = (0);
while(true){
if((i__37296_37318 < count__37295_37317)){
var f_37319 = cljs.core._nth.call(null,chunk__37294_37316,i__37296_37318);
cljs.core.println.call(null,"  ",f_37319);

var G__37320 = seq__37293_37315;
var G__37321 = chunk__37294_37316;
var G__37322 = count__37295_37317;
var G__37323 = (i__37296_37318 + (1));
seq__37293_37315 = G__37320;
chunk__37294_37316 = G__37321;
count__37295_37317 = G__37322;
i__37296_37318 = G__37323;
continue;
} else {
var temp__6552__auto___37324 = cljs.core.seq.call(null,seq__37293_37315);
if(temp__6552__auto___37324){
var seq__37293_37325__$1 = temp__6552__auto___37324;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37293_37325__$1)){
var c__22493__auto___37326 = cljs.core.chunk_first.call(null,seq__37293_37325__$1);
var G__37327 = cljs.core.chunk_rest.call(null,seq__37293_37325__$1);
var G__37328 = c__22493__auto___37326;
var G__37329 = cljs.core.count.call(null,c__22493__auto___37326);
var G__37330 = (0);
seq__37293_37315 = G__37327;
chunk__37294_37316 = G__37328;
count__37295_37317 = G__37329;
i__37296_37318 = G__37330;
continue;
} else {
var f_37331 = cljs.core.first.call(null,seq__37293_37325__$1);
cljs.core.println.call(null,"  ",f_37331);

var G__37332 = cljs.core.next.call(null,seq__37293_37325__$1);
var G__37333 = null;
var G__37334 = (0);
var G__37335 = (0);
seq__37293_37315 = G__37332;
chunk__37294_37316 = G__37333;
count__37295_37317 = G__37334;
i__37296_37318 = G__37335;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37336 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__21590__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37336);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37336)))?cljs.core.second.call(null,arglists_37336):arglists_37336));
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
var seq__37297_37337 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37298_37338 = null;
var count__37299_37339 = (0);
var i__37300_37340 = (0);
while(true){
if((i__37300_37340 < count__37299_37339)){
var vec__37301_37341 = cljs.core._nth.call(null,chunk__37298_37338,i__37300_37340);
var name_37342 = cljs.core.nth.call(null,vec__37301_37341,(0),null);
var map__37304_37343 = cljs.core.nth.call(null,vec__37301_37341,(1),null);
var map__37304_37344__$1 = ((((!((map__37304_37343 == null)))?((((map__37304_37343.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37304_37343.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37304_37343):map__37304_37343);
var doc_37345 = cljs.core.get.call(null,map__37304_37344__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37346 = cljs.core.get.call(null,map__37304_37344__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37342);

cljs.core.println.call(null," ",arglists_37346);

if(cljs.core.truth_(doc_37345)){
cljs.core.println.call(null," ",doc_37345);
} else {
}

var G__37347 = seq__37297_37337;
var G__37348 = chunk__37298_37338;
var G__37349 = count__37299_37339;
var G__37350 = (i__37300_37340 + (1));
seq__37297_37337 = G__37347;
chunk__37298_37338 = G__37348;
count__37299_37339 = G__37349;
i__37300_37340 = G__37350;
continue;
} else {
var temp__6552__auto___37351 = cljs.core.seq.call(null,seq__37297_37337);
if(temp__6552__auto___37351){
var seq__37297_37352__$1 = temp__6552__auto___37351;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37297_37352__$1)){
var c__22493__auto___37353 = cljs.core.chunk_first.call(null,seq__37297_37352__$1);
var G__37354 = cljs.core.chunk_rest.call(null,seq__37297_37352__$1);
var G__37355 = c__22493__auto___37353;
var G__37356 = cljs.core.count.call(null,c__22493__auto___37353);
var G__37357 = (0);
seq__37297_37337 = G__37354;
chunk__37298_37338 = G__37355;
count__37299_37339 = G__37356;
i__37300_37340 = G__37357;
continue;
} else {
var vec__37306_37358 = cljs.core.first.call(null,seq__37297_37352__$1);
var name_37359 = cljs.core.nth.call(null,vec__37306_37358,(0),null);
var map__37309_37360 = cljs.core.nth.call(null,vec__37306_37358,(1),null);
var map__37309_37361__$1 = ((((!((map__37309_37360 == null)))?((((map__37309_37360.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37309_37360.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37309_37360):map__37309_37360);
var doc_37362 = cljs.core.get.call(null,map__37309_37361__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37363 = cljs.core.get.call(null,map__37309_37361__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37359);

cljs.core.println.call(null," ",arglists_37363);

if(cljs.core.truth_(doc_37362)){
cljs.core.println.call(null," ",doc_37362);
} else {
}

var G__37364 = cljs.core.next.call(null,seq__37297_37352__$1);
var G__37365 = null;
var G__37366 = (0);
var G__37367 = (0);
seq__37297_37337 = G__37364;
chunk__37298_37338 = G__37365;
count__37299_37339 = G__37366;
i__37300_37340 = G__37367;
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
var temp__6552__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6552__auto__)){
var fnspec = temp__6552__auto__;
cljs.core.print.call(null,"Spec");

var seq__37311 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37312 = null;
var count__37313 = (0);
var i__37314 = (0);
while(true){
if((i__37314 < count__37313)){
var role = cljs.core._nth.call(null,chunk__37312,i__37314);
var temp__6552__auto___37368__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6552__auto___37368__$1)){
var spec_37369 = temp__6552__auto___37368__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_37369));
} else {
}

var G__37370 = seq__37311;
var G__37371 = chunk__37312;
var G__37372 = count__37313;
var G__37373 = (i__37314 + (1));
seq__37311 = G__37370;
chunk__37312 = G__37371;
count__37313 = G__37372;
i__37314 = G__37373;
continue;
} else {
var temp__6552__auto____$1 = cljs.core.seq.call(null,seq__37311);
if(temp__6552__auto____$1){
var seq__37311__$1 = temp__6552__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37311__$1)){
var c__22493__auto__ = cljs.core.chunk_first.call(null,seq__37311__$1);
var G__37374 = cljs.core.chunk_rest.call(null,seq__37311__$1);
var G__37375 = c__22493__auto__;
var G__37376 = cljs.core.count.call(null,c__22493__auto__);
var G__37377 = (0);
seq__37311 = G__37374;
chunk__37312 = G__37375;
count__37313 = G__37376;
i__37314 = G__37377;
continue;
} else {
var role = cljs.core.first.call(null,seq__37311__$1);
var temp__6552__auto___37378__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6552__auto___37378__$2)){
var spec_37379 = temp__6552__auto___37378__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_37379));
} else {
}

var G__37380 = cljs.core.next.call(null,seq__37311__$1);
var G__37381 = null;
var G__37382 = (0);
var G__37383 = (0);
seq__37311 = G__37380;
chunk__37312 = G__37381;
count__37313 = G__37382;
i__37314 = G__37383;
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

//# sourceMappingURL=repl.js.map?rel=1472381716794