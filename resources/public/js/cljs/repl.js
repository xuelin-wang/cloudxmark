// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38985){
var map__39010 = p__38985;
var map__39010__$1 = ((((!((map__39010 == null)))?((((map__39010.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39010.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39010):map__39010);
var m = map__39010__$1;
var n = cljs.core.get.call(null,map__39010__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__39010__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__39012_39034 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39013_39035 = null;
var count__39014_39036 = (0);
var i__39015_39037 = (0);
while(true){
if((i__39015_39037 < count__39014_39036)){
var f_39038 = cljs.core._nth.call(null,chunk__39013_39035,i__39015_39037);
cljs.core.println.call(null,"  ",f_39038);

var G__39039 = seq__39012_39034;
var G__39040 = chunk__39013_39035;
var G__39041 = count__39014_39036;
var G__39042 = (i__39015_39037 + (1));
seq__39012_39034 = G__39039;
chunk__39013_39035 = G__39040;
count__39014_39036 = G__39041;
i__39015_39037 = G__39042;
continue;
} else {
var temp__6503__auto___39043 = cljs.core.seq.call(null,seq__39012_39034);
if(temp__6503__auto___39043){
var seq__39012_39044__$1 = temp__6503__auto___39043;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39012_39044__$1)){
var c__22348__auto___39045 = cljs.core.chunk_first.call(null,seq__39012_39044__$1);
var G__39046 = cljs.core.chunk_rest.call(null,seq__39012_39044__$1);
var G__39047 = c__22348__auto___39045;
var G__39048 = cljs.core.count.call(null,c__22348__auto___39045);
var G__39049 = (0);
seq__39012_39034 = G__39046;
chunk__39013_39035 = G__39047;
count__39014_39036 = G__39048;
i__39015_39037 = G__39049;
continue;
} else {
var f_39050 = cljs.core.first.call(null,seq__39012_39044__$1);
cljs.core.println.call(null,"  ",f_39050);

var G__39051 = cljs.core.next.call(null,seq__39012_39044__$1);
var G__39052 = null;
var G__39053 = (0);
var G__39054 = (0);
seq__39012_39034 = G__39051;
chunk__39013_39035 = G__39052;
count__39014_39036 = G__39053;
i__39015_39037 = G__39054;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39055 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__21445__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39055);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39055)))?cljs.core.second.call(null,arglists_39055):arglists_39055));
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
var seq__39016_39056 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39017_39057 = null;
var count__39018_39058 = (0);
var i__39019_39059 = (0);
while(true){
if((i__39019_39059 < count__39018_39058)){
var vec__39020_39060 = cljs.core._nth.call(null,chunk__39017_39057,i__39019_39059);
var name_39061 = cljs.core.nth.call(null,vec__39020_39060,(0),null);
var map__39023_39062 = cljs.core.nth.call(null,vec__39020_39060,(1),null);
var map__39023_39063__$1 = ((((!((map__39023_39062 == null)))?((((map__39023_39062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39023_39062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39023_39062):map__39023_39062);
var doc_39064 = cljs.core.get.call(null,map__39023_39063__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39065 = cljs.core.get.call(null,map__39023_39063__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39061);

cljs.core.println.call(null," ",arglists_39065);

if(cljs.core.truth_(doc_39064)){
cljs.core.println.call(null," ",doc_39064);
} else {
}

var G__39066 = seq__39016_39056;
var G__39067 = chunk__39017_39057;
var G__39068 = count__39018_39058;
var G__39069 = (i__39019_39059 + (1));
seq__39016_39056 = G__39066;
chunk__39017_39057 = G__39067;
count__39018_39058 = G__39068;
i__39019_39059 = G__39069;
continue;
} else {
var temp__6503__auto___39070 = cljs.core.seq.call(null,seq__39016_39056);
if(temp__6503__auto___39070){
var seq__39016_39071__$1 = temp__6503__auto___39070;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39016_39071__$1)){
var c__22348__auto___39072 = cljs.core.chunk_first.call(null,seq__39016_39071__$1);
var G__39073 = cljs.core.chunk_rest.call(null,seq__39016_39071__$1);
var G__39074 = c__22348__auto___39072;
var G__39075 = cljs.core.count.call(null,c__22348__auto___39072);
var G__39076 = (0);
seq__39016_39056 = G__39073;
chunk__39017_39057 = G__39074;
count__39018_39058 = G__39075;
i__39019_39059 = G__39076;
continue;
} else {
var vec__39025_39077 = cljs.core.first.call(null,seq__39016_39071__$1);
var name_39078 = cljs.core.nth.call(null,vec__39025_39077,(0),null);
var map__39028_39079 = cljs.core.nth.call(null,vec__39025_39077,(1),null);
var map__39028_39080__$1 = ((((!((map__39028_39079 == null)))?((((map__39028_39079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39028_39079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39028_39079):map__39028_39079);
var doc_39081 = cljs.core.get.call(null,map__39028_39080__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39082 = cljs.core.get.call(null,map__39028_39080__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39078);

cljs.core.println.call(null," ",arglists_39082);

if(cljs.core.truth_(doc_39081)){
cljs.core.println.call(null," ",doc_39081);
} else {
}

var G__39083 = cljs.core.next.call(null,seq__39016_39071__$1);
var G__39084 = null;
var G__39085 = (0);
var G__39086 = (0);
seq__39016_39056 = G__39083;
chunk__39017_39057 = G__39084;
count__39018_39058 = G__39085;
i__39019_39059 = G__39086;
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

var seq__39030 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39031 = null;
var count__39032 = (0);
var i__39033 = (0);
while(true){
if((i__39033 < count__39032)){
var role = cljs.core._nth.call(null,chunk__39031,i__39033);
var temp__6503__auto___39087__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6503__auto___39087__$1)){
var spec_39088 = temp__6503__auto___39087__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_39088));
} else {
}

var G__39089 = seq__39030;
var G__39090 = chunk__39031;
var G__39091 = count__39032;
var G__39092 = (i__39033 + (1));
seq__39030 = G__39089;
chunk__39031 = G__39090;
count__39032 = G__39091;
i__39033 = G__39092;
continue;
} else {
var temp__6503__auto____$1 = cljs.core.seq.call(null,seq__39030);
if(temp__6503__auto____$1){
var seq__39030__$1 = temp__6503__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39030__$1)){
var c__22348__auto__ = cljs.core.chunk_first.call(null,seq__39030__$1);
var G__39093 = cljs.core.chunk_rest.call(null,seq__39030__$1);
var G__39094 = c__22348__auto__;
var G__39095 = cljs.core.count.call(null,c__22348__auto__);
var G__39096 = (0);
seq__39030 = G__39093;
chunk__39031 = G__39094;
count__39032 = G__39095;
i__39033 = G__39096;
continue;
} else {
var role = cljs.core.first.call(null,seq__39030__$1);
var temp__6503__auto___39097__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6503__auto___39097__$2)){
var spec_39098 = temp__6503__auto___39097__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_39098));
} else {
}

var G__39099 = cljs.core.next.call(null,seq__39030__$1);
var G__39100 = null;
var G__39101 = (0);
var G__39102 = (0);
seq__39030 = G__39099;
chunk__39031 = G__39100;
count__39032 = G__39101;
i__39033 = G__39102;
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

//# sourceMappingURL=repl.js.map?rel=1470139199402