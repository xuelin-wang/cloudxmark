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
var seq__4104_4118 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__4105_4119 = null;
var count__4106_4120 = (0);
var i__4107_4121 = (0);
while(true){
if((i__4107_4121 < count__4106_4120)){
var f_4122 = cljs.core._nth.call(null,chunk__4105_4119,i__4107_4121);
cljs.core.println.call(null,"  ",f_4122);

var G__4123 = seq__4104_4118;
var G__4124 = chunk__4105_4119;
var G__4125 = count__4106_4120;
var G__4126 = (i__4107_4121 + (1));
seq__4104_4118 = G__4123;
chunk__4105_4119 = G__4124;
count__4106_4120 = G__4125;
i__4107_4121 = G__4126;
continue;
} else {
var temp__4657__auto___4127 = cljs.core.seq.call(null,seq__4104_4118);
if(temp__4657__auto___4127){
var seq__4104_4128__$1 = temp__4657__auto___4127;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4104_4128__$1)){
var c__3331__auto___4129 = cljs.core.chunk_first.call(null,seq__4104_4128__$1);
var G__4130 = cljs.core.chunk_rest.call(null,seq__4104_4128__$1);
var G__4131 = c__3331__auto___4129;
var G__4132 = cljs.core.count.call(null,c__3331__auto___4129);
var G__4133 = (0);
seq__4104_4118 = G__4130;
chunk__4105_4119 = G__4131;
count__4106_4120 = G__4132;
i__4107_4121 = G__4133;
continue;
} else {
var f_4134 = cljs.core.first.call(null,seq__4104_4128__$1);
cljs.core.println.call(null,"  ",f_4134);

var G__4135 = cljs.core.next.call(null,seq__4104_4128__$1);
var G__4136 = null;
var G__4137 = (0);
var G__4138 = (0);
seq__4104_4118 = G__4135;
chunk__4105_4119 = G__4136;
count__4106_4120 = G__4137;
i__4107_4121 = G__4138;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_4139 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__2948__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__2948__auto__)){
return or__2948__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_4139);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_4139)))?cljs.core.second.call(null,arglists_4139):arglists_4139));
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
var seq__4108 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__4109 = null;
var count__4110 = (0);
var i__4111 = (0);
while(true){
if((i__4111 < count__4110)){
var vec__4112 = cljs.core._nth.call(null,chunk__4109,i__4111);
var name = cljs.core.nth.call(null,vec__4112,(0),null);
var map__4113 = cljs.core.nth.call(null,vec__4112,(1),null);
var map__4113__$1 = ((((!((map__4113 == null)))?((((map__4113.cljs$lang$protocol_mask$partition0$ & (64))) || (map__4113.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4113):map__4113);
var doc = cljs.core.get.call(null,map__4113__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__4113__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__4140 = seq__4108;
var G__4141 = chunk__4109;
var G__4142 = count__4110;
var G__4143 = (i__4111 + (1));
seq__4108 = G__4140;
chunk__4109 = G__4141;
count__4110 = G__4142;
i__4111 = G__4143;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__4108);
if(temp__4657__auto__){
var seq__4108__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4108__$1)){
var c__3331__auto__ = cljs.core.chunk_first.call(null,seq__4108__$1);
var G__4144 = cljs.core.chunk_rest.call(null,seq__4108__$1);
var G__4145 = c__3331__auto__;
var G__4146 = cljs.core.count.call(null,c__3331__auto__);
var G__4147 = (0);
seq__4108 = G__4144;
chunk__4109 = G__4145;
count__4110 = G__4146;
i__4111 = G__4147;
continue;
} else {
var vec__4115 = cljs.core.first.call(null,seq__4108__$1);
var name = cljs.core.nth.call(null,vec__4115,(0),null);
var map__4116 = cljs.core.nth.call(null,vec__4115,(1),null);
var map__4116__$1 = ((((!((map__4116 == null)))?((((map__4116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__4116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4116):map__4116);
var doc = cljs.core.get.call(null,map__4116__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__4116__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__4148 = cljs.core.next.call(null,seq__4108__$1);
var G__4149 = null;
var G__4150 = (0);
var G__4151 = (0);
seq__4108 = G__4148;
chunk__4109 = G__4149;
count__4110 = G__4150;
i__4111 = G__4151;
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
