// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
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
var seq__27903_27917 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27904_27918 = null;
var count__27905_27919 = (0);
var i__27906_27920 = (0);
while(true){
if((i__27906_27920 < count__27905_27919)){
var f_27921 = cljs.core._nth.call(null,chunk__27904_27918,i__27906_27920);
cljs.core.println.call(null,"  ",f_27921);

var G__27922 = seq__27903_27917;
var G__27923 = chunk__27904_27918;
var G__27924 = count__27905_27919;
var G__27925 = (i__27906_27920 + (1));
seq__27903_27917 = G__27922;
chunk__27904_27918 = G__27923;
count__27905_27919 = G__27924;
i__27906_27920 = G__27925;
continue;
} else {
var temp__4657__auto___27926 = cljs.core.seq.call(null,seq__27903_27917);
if(temp__4657__auto___27926){
var seq__27903_27927__$1 = temp__4657__auto___27926;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27903_27927__$1)){
var c__19279__auto___27928 = cljs.core.chunk_first.call(null,seq__27903_27927__$1);
var G__27929 = cljs.core.chunk_rest.call(null,seq__27903_27927__$1);
var G__27930 = c__19279__auto___27928;
var G__27931 = cljs.core.count.call(null,c__19279__auto___27928);
var G__27932 = (0);
seq__27903_27917 = G__27929;
chunk__27904_27918 = G__27930;
count__27905_27919 = G__27931;
i__27906_27920 = G__27932;
continue;
} else {
var f_27933 = cljs.core.first.call(null,seq__27903_27927__$1);
cljs.core.println.call(null,"  ",f_27933);

var G__27934 = cljs.core.next.call(null,seq__27903_27927__$1);
var G__27935 = null;
var G__27936 = (0);
var G__27937 = (0);
seq__27903_27917 = G__27934;
chunk__27904_27918 = G__27935;
count__27905_27919 = G__27936;
i__27906_27920 = G__27937;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27938 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18468__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18468__auto__)){
return or__18468__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27938);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27938)))?cljs.core.second.call(null,arglists_27938):arglists_27938));
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
var seq__27907 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27908 = null;
var count__27909 = (0);
var i__27910 = (0);
while(true){
if((i__27910 < count__27909)){
var vec__27911 = cljs.core._nth.call(null,chunk__27908,i__27910);
var name = cljs.core.nth.call(null,vec__27911,(0),null);
var map__27912 = cljs.core.nth.call(null,vec__27911,(1),null);
var map__27912__$1 = ((((!((map__27912 == null)))?((((map__27912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27912):map__27912);
var doc = cljs.core.get.call(null,map__27912__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27912__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27939 = seq__27907;
var G__27940 = chunk__27908;
var G__27941 = count__27909;
var G__27942 = (i__27910 + (1));
seq__27907 = G__27939;
chunk__27908 = G__27940;
count__27909 = G__27941;
i__27910 = G__27942;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27907);
if(temp__4657__auto__){
var seq__27907__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27907__$1)){
var c__19279__auto__ = cljs.core.chunk_first.call(null,seq__27907__$1);
var G__27943 = cljs.core.chunk_rest.call(null,seq__27907__$1);
var G__27944 = c__19279__auto__;
var G__27945 = cljs.core.count.call(null,c__19279__auto__);
var G__27946 = (0);
seq__27907 = G__27943;
chunk__27908 = G__27944;
count__27909 = G__27945;
i__27910 = G__27946;
continue;
} else {
var vec__27914 = cljs.core.first.call(null,seq__27907__$1);
var name = cljs.core.nth.call(null,vec__27914,(0),null);
var map__27915 = cljs.core.nth.call(null,vec__27914,(1),null);
var map__27915__$1 = ((((!((map__27915 == null)))?((((map__27915.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27915.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27915):map__27915);
var doc = cljs.core.get.call(null,map__27915__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27915__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27947 = cljs.core.next.call(null,seq__27907__$1);
var G__27948 = null;
var G__27949 = (0);
var G__27950 = (0);
seq__27907 = G__27947;
chunk__27908 = G__27948;
count__27909 = G__27949;
i__27910 = G__27950;
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
}
});

//# sourceMappingURL=repl.js.map