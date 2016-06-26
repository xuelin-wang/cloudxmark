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
var seq__27885_27899 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27886_27900 = null;
var count__27887_27901 = (0);
var i__27888_27902 = (0);
while(true){
if((i__27888_27902 < count__27887_27901)){
var f_27903 = cljs.core._nth.call(null,chunk__27886_27900,i__27888_27902);
cljs.core.println.call(null,"  ",f_27903);

var G__27904 = seq__27885_27899;
var G__27905 = chunk__27886_27900;
var G__27906 = count__27887_27901;
var G__27907 = (i__27888_27902 + (1));
seq__27885_27899 = G__27904;
chunk__27886_27900 = G__27905;
count__27887_27901 = G__27906;
i__27888_27902 = G__27907;
continue;
} else {
var temp__4657__auto___27908 = cljs.core.seq.call(null,seq__27885_27899);
if(temp__4657__auto___27908){
var seq__27885_27909__$1 = temp__4657__auto___27908;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27885_27909__$1)){
var c__19279__auto___27910 = cljs.core.chunk_first.call(null,seq__27885_27909__$1);
var G__27911 = cljs.core.chunk_rest.call(null,seq__27885_27909__$1);
var G__27912 = c__19279__auto___27910;
var G__27913 = cljs.core.count.call(null,c__19279__auto___27910);
var G__27914 = (0);
seq__27885_27899 = G__27911;
chunk__27886_27900 = G__27912;
count__27887_27901 = G__27913;
i__27888_27902 = G__27914;
continue;
} else {
var f_27915 = cljs.core.first.call(null,seq__27885_27909__$1);
cljs.core.println.call(null,"  ",f_27915);

var G__27916 = cljs.core.next.call(null,seq__27885_27909__$1);
var G__27917 = null;
var G__27918 = (0);
var G__27919 = (0);
seq__27885_27899 = G__27916;
chunk__27886_27900 = G__27917;
count__27887_27901 = G__27918;
i__27888_27902 = G__27919;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27920 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18468__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18468__auto__)){
return or__18468__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27920);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27920)))?cljs.core.second.call(null,arglists_27920):arglists_27920));
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
var seq__27889 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27890 = null;
var count__27891 = (0);
var i__27892 = (0);
while(true){
if((i__27892 < count__27891)){
var vec__27893 = cljs.core._nth.call(null,chunk__27890,i__27892);
var name = cljs.core.nth.call(null,vec__27893,(0),null);
var map__27894 = cljs.core.nth.call(null,vec__27893,(1),null);
var map__27894__$1 = ((((!((map__27894 == null)))?((((map__27894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27894):map__27894);
var doc = cljs.core.get.call(null,map__27894__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27894__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27921 = seq__27889;
var G__27922 = chunk__27890;
var G__27923 = count__27891;
var G__27924 = (i__27892 + (1));
seq__27889 = G__27921;
chunk__27890 = G__27922;
count__27891 = G__27923;
i__27892 = G__27924;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27889);
if(temp__4657__auto__){
var seq__27889__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27889__$1)){
var c__19279__auto__ = cljs.core.chunk_first.call(null,seq__27889__$1);
var G__27925 = cljs.core.chunk_rest.call(null,seq__27889__$1);
var G__27926 = c__19279__auto__;
var G__27927 = cljs.core.count.call(null,c__19279__auto__);
var G__27928 = (0);
seq__27889 = G__27925;
chunk__27890 = G__27926;
count__27891 = G__27927;
i__27892 = G__27928;
continue;
} else {
var vec__27896 = cljs.core.first.call(null,seq__27889__$1);
var name = cljs.core.nth.call(null,vec__27896,(0),null);
var map__27897 = cljs.core.nth.call(null,vec__27896,(1),null);
var map__27897__$1 = ((((!((map__27897 == null)))?((((map__27897.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27897.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27897):map__27897);
var doc = cljs.core.get.call(null,map__27897__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27897__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27929 = cljs.core.next.call(null,seq__27889__$1);
var G__27930 = null;
var G__27931 = (0);
var G__27932 = (0);
seq__27889 = G__27929;
chunk__27890 = G__27930;
count__27891 = G__27931;
i__27892 = G__27932;
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