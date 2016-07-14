// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37067){
var map__37092 = p__37067;
var map__37092__$1 = ((((!((map__37092 == null)))?((((map__37092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37092):map__37092);
var m = map__37092__$1;
var n = cljs.core.get.call(null,map__37092__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37092__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__6369__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6369__auto__)){
var ns = temp__6369__auto__;
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
var seq__37094_37116 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37095_37117 = null;
var count__37096_37118 = (0);
var i__37097_37119 = (0);
while(true){
if((i__37097_37119 < count__37096_37118)){
var f_37120 = cljs.core._nth.call(null,chunk__37095_37117,i__37097_37119);
cljs.core.println.call(null,"  ",f_37120);

var G__37121 = seq__37094_37116;
var G__37122 = chunk__37095_37117;
var G__37123 = count__37096_37118;
var G__37124 = (i__37097_37119 + (1));
seq__37094_37116 = G__37121;
chunk__37095_37117 = G__37122;
count__37096_37118 = G__37123;
i__37097_37119 = G__37124;
continue;
} else {
var temp__6369__auto___37125 = cljs.core.seq.call(null,seq__37094_37116);
if(temp__6369__auto___37125){
var seq__37094_37126__$1 = temp__6369__auto___37125;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37094_37126__$1)){
var c__22337__auto___37127 = cljs.core.chunk_first.call(null,seq__37094_37126__$1);
var G__37128 = cljs.core.chunk_rest.call(null,seq__37094_37126__$1);
var G__37129 = c__22337__auto___37127;
var G__37130 = cljs.core.count.call(null,c__22337__auto___37127);
var G__37131 = (0);
seq__37094_37116 = G__37128;
chunk__37095_37117 = G__37129;
count__37096_37118 = G__37130;
i__37097_37119 = G__37131;
continue;
} else {
var f_37132 = cljs.core.first.call(null,seq__37094_37126__$1);
cljs.core.println.call(null,"  ",f_37132);

var G__37133 = cljs.core.next.call(null,seq__37094_37126__$1);
var G__37134 = null;
var G__37135 = (0);
var G__37136 = (0);
seq__37094_37116 = G__37133;
chunk__37095_37117 = G__37134;
count__37096_37118 = G__37135;
i__37097_37119 = G__37136;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37137 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__21434__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21434__auto__)){
return or__21434__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37137);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37137)))?cljs.core.second.call(null,arglists_37137):arglists_37137));
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
var seq__37098_37138 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37099_37139 = null;
var count__37100_37140 = (0);
var i__37101_37141 = (0);
while(true){
if((i__37101_37141 < count__37100_37140)){
var vec__37102_37142 = cljs.core._nth.call(null,chunk__37099_37139,i__37101_37141);
var name_37143 = cljs.core.nth.call(null,vec__37102_37142,(0),null);
var map__37105_37144 = cljs.core.nth.call(null,vec__37102_37142,(1),null);
var map__37105_37145__$1 = ((((!((map__37105_37144 == null)))?((((map__37105_37144.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37105_37144.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37105_37144):map__37105_37144);
var doc_37146 = cljs.core.get.call(null,map__37105_37145__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37147 = cljs.core.get.call(null,map__37105_37145__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37143);

cljs.core.println.call(null," ",arglists_37147);

if(cljs.core.truth_(doc_37146)){
cljs.core.println.call(null," ",doc_37146);
} else {
}

var G__37148 = seq__37098_37138;
var G__37149 = chunk__37099_37139;
var G__37150 = count__37100_37140;
var G__37151 = (i__37101_37141 + (1));
seq__37098_37138 = G__37148;
chunk__37099_37139 = G__37149;
count__37100_37140 = G__37150;
i__37101_37141 = G__37151;
continue;
} else {
var temp__6369__auto___37152 = cljs.core.seq.call(null,seq__37098_37138);
if(temp__6369__auto___37152){
var seq__37098_37153__$1 = temp__6369__auto___37152;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37098_37153__$1)){
var c__22337__auto___37154 = cljs.core.chunk_first.call(null,seq__37098_37153__$1);
var G__37155 = cljs.core.chunk_rest.call(null,seq__37098_37153__$1);
var G__37156 = c__22337__auto___37154;
var G__37157 = cljs.core.count.call(null,c__22337__auto___37154);
var G__37158 = (0);
seq__37098_37138 = G__37155;
chunk__37099_37139 = G__37156;
count__37100_37140 = G__37157;
i__37101_37141 = G__37158;
continue;
} else {
var vec__37107_37159 = cljs.core.first.call(null,seq__37098_37153__$1);
var name_37160 = cljs.core.nth.call(null,vec__37107_37159,(0),null);
var map__37110_37161 = cljs.core.nth.call(null,vec__37107_37159,(1),null);
var map__37110_37162__$1 = ((((!((map__37110_37161 == null)))?((((map__37110_37161.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37110_37161.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37110_37161):map__37110_37161);
var doc_37163 = cljs.core.get.call(null,map__37110_37162__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37164 = cljs.core.get.call(null,map__37110_37162__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37160);

cljs.core.println.call(null," ",arglists_37164);

if(cljs.core.truth_(doc_37163)){
cljs.core.println.call(null," ",doc_37163);
} else {
}

var G__37165 = cljs.core.next.call(null,seq__37098_37153__$1);
var G__37166 = null;
var G__37167 = (0);
var G__37168 = (0);
seq__37098_37138 = G__37165;
chunk__37099_37139 = G__37166;
count__37100_37140 = G__37167;
i__37101_37141 = G__37168;
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
var temp__6369__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6369__auto__)){
var fnspec = temp__6369__auto__;
cljs.core.print.call(null,"Spec");

var seq__37112 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37113 = null;
var count__37114 = (0);
var i__37115 = (0);
while(true){
if((i__37115 < count__37114)){
var role = cljs.core._nth.call(null,chunk__37113,i__37115);
var temp__6369__auto___37169__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6369__auto___37169__$1)){
var spec_37170 = temp__6369__auto___37169__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_37170));
} else {
}

var G__37171 = seq__37112;
var G__37172 = chunk__37113;
var G__37173 = count__37114;
var G__37174 = (i__37115 + (1));
seq__37112 = G__37171;
chunk__37113 = G__37172;
count__37114 = G__37173;
i__37115 = G__37174;
continue;
} else {
var temp__6369__auto____$1 = cljs.core.seq.call(null,seq__37112);
if(temp__6369__auto____$1){
var seq__37112__$1 = temp__6369__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37112__$1)){
var c__22337__auto__ = cljs.core.chunk_first.call(null,seq__37112__$1);
var G__37175 = cljs.core.chunk_rest.call(null,seq__37112__$1);
var G__37176 = c__22337__auto__;
var G__37177 = cljs.core.count.call(null,c__22337__auto__);
var G__37178 = (0);
seq__37112 = G__37175;
chunk__37113 = G__37176;
count__37114 = G__37177;
i__37115 = G__37178;
continue;
} else {
var role = cljs.core.first.call(null,seq__37112__$1);
var temp__6369__auto___37179__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6369__auto___37179__$2)){
var spec_37180 = temp__6369__auto___37179__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_37180));
} else {
}

var G__37181 = cljs.core.next.call(null,seq__37112__$1);
var G__37182 = null;
var G__37183 = (0);
var G__37184 = (0);
seq__37112 = G__37181;
chunk__37113 = G__37182;
count__37114 = G__37183;
i__37115 = G__37184;
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

//# sourceMappingURL=repl.js.map?rel=1468449922293