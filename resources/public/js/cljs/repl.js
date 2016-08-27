// Compiled by ClojureScript 1.9.225 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__40880){
var map__40905 = p__40880;
var map__40905__$1 = ((((!((map__40905 == null)))?((((map__40905.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40905.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40905):map__40905);
var m = map__40905__$1;
var n = cljs.core.get.call(null,map__40905__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__40905__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__40907_40929 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40908_40930 = null;
var count__40909_40931 = (0);
var i__40910_40932 = (0);
while(true){
if((i__40910_40932 < count__40909_40931)){
var f_40933 = cljs.core._nth.call(null,chunk__40908_40930,i__40910_40932);
cljs.core.println.call(null,"  ",f_40933);

var G__40934 = seq__40907_40929;
var G__40935 = chunk__40908_40930;
var G__40936 = count__40909_40931;
var G__40937 = (i__40910_40932 + (1));
seq__40907_40929 = G__40934;
chunk__40908_40930 = G__40935;
count__40909_40931 = G__40936;
i__40910_40932 = G__40937;
continue;
} else {
var temp__6552__auto___40938 = cljs.core.seq.call(null,seq__40907_40929);
if(temp__6552__auto___40938){
var seq__40907_40939__$1 = temp__6552__auto___40938;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40907_40939__$1)){
var c__22493__auto___40940 = cljs.core.chunk_first.call(null,seq__40907_40939__$1);
var G__40941 = cljs.core.chunk_rest.call(null,seq__40907_40939__$1);
var G__40942 = c__22493__auto___40940;
var G__40943 = cljs.core.count.call(null,c__22493__auto___40940);
var G__40944 = (0);
seq__40907_40929 = G__40941;
chunk__40908_40930 = G__40942;
count__40909_40931 = G__40943;
i__40910_40932 = G__40944;
continue;
} else {
var f_40945 = cljs.core.first.call(null,seq__40907_40939__$1);
cljs.core.println.call(null,"  ",f_40945);

var G__40946 = cljs.core.next.call(null,seq__40907_40939__$1);
var G__40947 = null;
var G__40948 = (0);
var G__40949 = (0);
seq__40907_40929 = G__40946;
chunk__40908_40930 = G__40947;
count__40909_40931 = G__40948;
i__40910_40932 = G__40949;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40950 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__21590__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21590__auto__)){
return or__21590__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_40950);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_40950)))?cljs.core.second.call(null,arglists_40950):arglists_40950));
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
var seq__40911_40951 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40912_40952 = null;
var count__40913_40953 = (0);
var i__40914_40954 = (0);
while(true){
if((i__40914_40954 < count__40913_40953)){
var vec__40915_40955 = cljs.core._nth.call(null,chunk__40912_40952,i__40914_40954);
var name_40956 = cljs.core.nth.call(null,vec__40915_40955,(0),null);
var map__40918_40957 = cljs.core.nth.call(null,vec__40915_40955,(1),null);
var map__40918_40958__$1 = ((((!((map__40918_40957 == null)))?((((map__40918_40957.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40918_40957.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40918_40957):map__40918_40957);
var doc_40959 = cljs.core.get.call(null,map__40918_40958__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40960 = cljs.core.get.call(null,map__40918_40958__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_40956);

cljs.core.println.call(null," ",arglists_40960);

if(cljs.core.truth_(doc_40959)){
cljs.core.println.call(null," ",doc_40959);
} else {
}

var G__40961 = seq__40911_40951;
var G__40962 = chunk__40912_40952;
var G__40963 = count__40913_40953;
var G__40964 = (i__40914_40954 + (1));
seq__40911_40951 = G__40961;
chunk__40912_40952 = G__40962;
count__40913_40953 = G__40963;
i__40914_40954 = G__40964;
continue;
} else {
var temp__6552__auto___40965 = cljs.core.seq.call(null,seq__40911_40951);
if(temp__6552__auto___40965){
var seq__40911_40966__$1 = temp__6552__auto___40965;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40911_40966__$1)){
var c__22493__auto___40967 = cljs.core.chunk_first.call(null,seq__40911_40966__$1);
var G__40968 = cljs.core.chunk_rest.call(null,seq__40911_40966__$1);
var G__40969 = c__22493__auto___40967;
var G__40970 = cljs.core.count.call(null,c__22493__auto___40967);
var G__40971 = (0);
seq__40911_40951 = G__40968;
chunk__40912_40952 = G__40969;
count__40913_40953 = G__40970;
i__40914_40954 = G__40971;
continue;
} else {
var vec__40920_40972 = cljs.core.first.call(null,seq__40911_40966__$1);
var name_40973 = cljs.core.nth.call(null,vec__40920_40972,(0),null);
var map__40923_40974 = cljs.core.nth.call(null,vec__40920_40972,(1),null);
var map__40923_40975__$1 = ((((!((map__40923_40974 == null)))?((((map__40923_40974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40923_40974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40923_40974):map__40923_40974);
var doc_40976 = cljs.core.get.call(null,map__40923_40975__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40977 = cljs.core.get.call(null,map__40923_40975__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_40973);

cljs.core.println.call(null," ",arglists_40977);

if(cljs.core.truth_(doc_40976)){
cljs.core.println.call(null," ",doc_40976);
} else {
}

var G__40978 = cljs.core.next.call(null,seq__40911_40966__$1);
var G__40979 = null;
var G__40980 = (0);
var G__40981 = (0);
seq__40911_40951 = G__40978;
chunk__40912_40952 = G__40979;
count__40913_40953 = G__40980;
i__40914_40954 = G__40981;
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

var seq__40925 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__40926 = null;
var count__40927 = (0);
var i__40928 = (0);
while(true){
if((i__40928 < count__40927)){
var role = cljs.core._nth.call(null,chunk__40926,i__40928);
var temp__6552__auto___40982__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6552__auto___40982__$1)){
var spec_40983 = temp__6552__auto___40982__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_40983));
} else {
}

var G__40984 = seq__40925;
var G__40985 = chunk__40926;
var G__40986 = count__40927;
var G__40987 = (i__40928 + (1));
seq__40925 = G__40984;
chunk__40926 = G__40985;
count__40927 = G__40986;
i__40928 = G__40987;
continue;
} else {
var temp__6552__auto____$1 = cljs.core.seq.call(null,seq__40925);
if(temp__6552__auto____$1){
var seq__40925__$1 = temp__6552__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40925__$1)){
var c__22493__auto__ = cljs.core.chunk_first.call(null,seq__40925__$1);
var G__40988 = cljs.core.chunk_rest.call(null,seq__40925__$1);
var G__40989 = c__22493__auto__;
var G__40990 = cljs.core.count.call(null,c__22493__auto__);
var G__40991 = (0);
seq__40925 = G__40988;
chunk__40926 = G__40989;
count__40927 = G__40990;
i__40928 = G__40991;
continue;
} else {
var role = cljs.core.first.call(null,seq__40925__$1);
var temp__6552__auto___40992__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6552__auto___40992__$2)){
var spec_40993 = temp__6552__auto___40992__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_40993));
} else {
}

var G__40994 = cljs.core.next.call(null,seq__40925__$1);
var G__40995 = null;
var G__40996 = (0);
var G__40997 = (0);
seq__40925 = G__40994;
chunk__40926 = G__40995;
count__40927 = G__40996;
i__40928 = G__40997;
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

//# sourceMappingURL=repl.js.map?rel=1472129948711